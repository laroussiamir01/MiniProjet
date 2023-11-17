package com.example.project_test.repository;

import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface EvenementRepository  extends JpaRepository<Evenement, Long> {
    Evenement findByTitre(String titre);
    List<Evenement> findByDateFinBefore(Date endDate);
 //   boolean findByDateFinBefore(Date endDate);
    long countByDateFinBefore(Date endDate);
    List<Evenement> findByEtudiantsCin(long cin);
    List<Evenement> findByEtudiantsNomEt(String nom);
    List<Evenement> findByEtudiantsEcole(String ecole);
    List<Evenement> findByEtudiantsIdEtudiant(long idEtudiant);
    @Modifying
    @Query("SELECT e FROM Evenement e WHERE e.dateFin < :currentDate")
    Evenement deleteExpiredEvents(@Param("currentDate") Date currentDate);





}
