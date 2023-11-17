package com.example.project_test.repository;

import com.example.project_test.Entities.Bloc;
import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
    Etudiant findByCin(long cin);
    Optional<Etudiant> findByEmail(String email);
    List<Etudiant> findByEcole(String ecole);
    List<Etudiant> findByNomEt(String nom);
    List<Etudiant> findByPrenomEt(String ecole);
    List<Etudiant> findByDateNaissanceBetween(Date startDate, Date endDate);
    long countByDateNaissanceBetween(Date startDate, Date endDate);
    long countByEcole(String ecole);
    List<Etudiant> findByEvenementsTitre(String titre);
    //   List<Reservation> findByAnnneeUniversitaireBetweenAndFoyerNomFoyer(Date debutAnnee,Date finAnnee,String nomFoyer);

}
