package com.example.project_test.Service;

import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Evenement;
import com.example.project_test.Entities.Reservation;
import com.example.project_test.repository.EvenementRepository;
import com.example.project_test.repository.ReservationRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.project_test.repository.EtudiantRepository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class EtudiantserviceImpl implements IEtudiantService{
    EtudiantRepository etudiantRepository;
    ReservationRepository reservationRepository;
    EvenementRepository evenementRepository;

    @Override
    public Etudiant addEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @Override
    public Etudiant getEtudiant(long idEtudiant) {
        return etudiantRepository.findById(idEtudiant).orElse(null);
    }

    @Override
    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

    @Override
    public void deleteEtudiant(long idEtudiant) {
        etudiantRepository.deleteById(idEtudiant);
    }

    @Override
    public Etudiant updateEtudiant(Etudiant etudiant) {
        Etudiant etudiant1= etudiantRepository.findById(etudiant.getIdEtudiant()).orElseThrow(() -> new EntityNotFoundException("No Bloc with id " + etudiant.getIdEtudiant() + " was found!"));
        if (etudiant1!=null){
            etudiantRepository.save(etudiant);}
        return etudiant1;


    //    return etudiantRepository.save(etudiant);
    }

    @Override
    public Etudiant updateEtudiant1(Etudiant etudiant) {
        Etudiant etudiant1 = etudiantRepository.findById(etudiant.getIdEtudiant())
                .orElseThrow(() -> new EntityNotFoundException("No Etudiant with id " + etudiant.getIdEtudiant() + " was found!"));

        if (etudiant1 != null) {
            // Mettre à jour les attributs spécifiques
            if (etudiant.getEmail() != null) {
                etudiant1.setEmail(etudiant.getEmail());
            }
            if (etudiant.getNomEt() != null) {
                etudiant1.setNomEt(etudiant.getNomEt());
            }
            if (etudiant.getPrenomEt() != null) {
                etudiant1.setPrenomEt(etudiant.getPrenomEt());
            }
            // Ajoutez d'autres attributs que vous souhaitez mettre à jour

            etudiantRepository.save(etudiant1);
        }

        return etudiant1;
    }

    @Override
    public Etudiant affecterReservationToEtudiant(long idEtudiant, String idReservation) {
        Etudiant etudiant=etudiantRepository.findById(idEtudiant).orElse(null);
        Reservation reservation= reservationRepository.findById(idReservation).orElse(null);
        etudiant.getReservations().add(reservation);

        return etudiantRepository.save(etudiant);
    }

    @Override
    public Etudiant affecterEvenementToEtudiant(long idEtudiant, long idEvenement) {
        Etudiant etudiant=etudiantRepository.findById(idEtudiant).orElse(null);
        Evenement evenement= evenementRepository.findById(idEvenement).orElse(null);

        List<Evenement> evenementsEtudiant = evenementRepository.findByEtudiantsIdEtudiant(idEtudiant);
        if(evenement != null && evenement.getPlaceDisponible()>0 && !evenementsEtudiant.contains(evenement) ) {
            etudiant.getEvenements().add(evenement);
            evenement.setPlaceDisponible(evenement.getPlaceDisponible() - 1);
            evenement.setHasParticipated(true);
            return etudiantRepository.save(etudiant);
        }else{
            throw new IllegalStateException("Aucune place disponible pour l'événement ou l'étudiant est déjà affecté à cet événement");
        }


    }

    @Override
    public Etudiant affecterEvenementToEtudiantByTitre(long cin, String titre) {
        Etudiant etudiant=etudiantRepository.findByCin(cin);
        Evenement evenement= evenementRepository.findByTitre(titre);

        List<Evenement> evenementsEtudiant = evenementRepository.findByEtudiantsCin(cin);
        if(evenement != null && evenement.getPlaceDisponible()>0 && !evenementsEtudiant.contains(evenement) ){
            etudiant.getEvenements().add(evenement);
            evenement.setPlaceDisponible(evenement.getPlaceDisponible() - 1);
            return etudiantRepository.save(etudiant);
        }else {
            throw new IllegalStateException("Aucune place disponible pour l'événement ou l'étudiant est déjà affecté à cet événement");
        }
    }
    public boolean etudiantParticipedeja(long idEtudiant,long idEvenement){
        Evenement evenement = evenementRepository.findById(idEvenement).orElse(null);
        List<Evenement> evenementsEtudiant = evenementRepository.findByEtudiantsIdEtudiant(idEtudiant);
        if (evenementsEtudiant.contains(evenement)){
        return true;}
        else
            return false;
    }


    public ResponseEntity<String> desaffecterEtudiant(@PathVariable long idEtudiant , @PathVariable long idEvenement ) {
        // Recherche de la réservation par son ID
        Evenement evenement = evenementRepository.findById(idEvenement).orElse(null);

        if (evenement != null) {
            // Recherche de l'étudiant par son ID
            Etudiant etudiant = etudiantRepository.findById(idEtudiant).orElse(null);
            List<Evenement> evenementsEtudiant = evenementRepository.findByEtudiantsIdEtudiant(idEtudiant);

            if (etudiant != null && evenementsEtudiant.contains(evenement) ) {
                // Désaffectation de l'étudiant
                etudiant.getEvenements().remove(evenement);
                evenement.setPlaceDisponible(evenement.getPlaceDisponible() + 1);
                evenement.setHasParticipated(false);
                etudiantRepository.save(etudiant);

                return ResponseEntity.ok("Désaffectation de l'evenement réussie.");
            } else {
                return ResponseEntity.notFound().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }







    @Override
    public List<Etudiant> getEtudiantParNom(String nom) {
        return etudiantRepository.findByNomEt(nom);
    }

    @Override
    public List<Etudiant> getEtudiantParPrenom(String prenom) {
        return etudiantRepository.findByPrenomEt(prenom);
    }

    @Override
    public List<Etudiant> getEtudiantParEcole(String ecole) {
        return etudiantRepository.findByEcole(ecole);
    }

    @Override
    public Etudiant getEtudiantByCin(long cin) {
        return etudiantRepository.findByCin(cin);
    }

    @Override
    public List<Etudiant> getEtudiantParDateNaissanceBetween(Date DateDebut, Date DateFin) {
        return etudiantRepository.findByDateNaissanceBetween(DateDebut,DateFin);
    }

    @Override
    public long countByDateNaissanceBetween(Date startDate, Date endDate) {
        return etudiantRepository.countByDateNaissanceBetween(startDate,endDate);
    }

    @Override
    public long countByEcole(String ecole) {
        return etudiantRepository.countByEcole(ecole);
    }

    @Override
    public List<Etudiant> findByEvenementsTitre(String titre) {
        return etudiantRepository.findByEvenementsTitre(titre);
    }

    @Override
    public long getTotalParticipations(Long idEtudiant) {
        Etudiant etudiant=etudiantRepository.findById(idEtudiant).orElse(null);
        return etudiant.getEvenements().size();
    }
    public Set<Evenement> ListTotalParticipations(Long idEtudiant){
        Etudiant etudiant=etudiantRepository.findById(idEtudiant).orElse(null);
        return etudiant.getEvenements();
    }
}
