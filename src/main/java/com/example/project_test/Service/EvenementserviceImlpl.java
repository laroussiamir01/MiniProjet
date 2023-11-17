package com.example.project_test.Service;

import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Evenement;
import com.example.project_test.repository.EtudiantRepository;
import com.example.project_test.repository.EvenementRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
@AllArgsConstructor
public class EvenementserviceImlpl implements IEvenementService{
    EtudiantRepository etudiantRepository;
    EvenementRepository evenementRepository;

    @Override
    public Evenement addEvenement(Evenement evenement) {
        return evenementRepository.save(evenement);
    }

    @Override
    public Evenement getEvenement(long idEvenement) {
        return evenementRepository.findById(idEvenement).orElse(null);
    }

    @Override
    public List<Evenement> getAllEvenements() {
        return evenementRepository.findAll();
    }

    @Override
    public void deleteEvenement(long idEvenement) {
        evenementRepository.deleteById(idEvenement);
    }

    @Override
    public Evenement updateEvenement(Evenement evenement) {
        Evenement evenement1= evenementRepository.findById(evenement.getIdEvenement()).orElseThrow(() -> new EntityNotFoundException("No Bloc with id " + evenement.getIdEvenement() + " was found!"));
        if (evenement1!=null){
            evenementRepository.save(evenement);}
        return evenement1;
    }

    @Override
    public List<Evenement> findByDateFinBefore(Date endDate) {
      return evenementRepository.findByDateFinBefore(endDate);

    }

    @Override
    public long countByDateFinBefore(Date endDate) {
        return evenementRepository.countByDateFinBefore(endDate);
    }

    @Override
    public Evenement getEvenementByTitre(String titre) {
        return evenementRepository.findByTitre(titre);
    }

    @Override
    public List<Evenement> findByEtudiantsCin(long cin) {
        return evenementRepository.findByEtudiantsCin(cin);
    }

    @Override
    public List<Evenement> findByEtudiantsNomEt(String nom) {
        return evenementRepository.findByEtudiantsNomEt(nom);
    }

    @Override
    public List<Evenement> findByEtudiantsEcole(String ecole) {
        return evenementRepository.findByEtudiantsEcole(ecole);
    }

    @Override
    public List<Evenement> findByEtudiantsIdEtudiant(long idEtudiant) {
        return evenementRepository.findByEtudiantsIdEtudiant(idEtudiant);
    }
    @Scheduled(fixedRate = 120000)
  // @Scheduled(cron = "0 0 * * * *")
    @Override
    public void deleteExpiredEvents() {
        Date currentDate = new Date();
      // Evenement evenement=evenementRepository.deleteExpiredEvents(currentDate);
        List<Evenement> evenements=evenementRepository.findByDateFinBefore(currentDate);

        for (Evenement evenement:evenements ) {
            evenementRepository.deleteById(evenement.getIdEvenement());
        }
    }



//    @Override
//    public Evenement affecterEtudiantToEvenement(long idEtudiant, long idEvenement) {
//        return null;
//    }
}
