package com.example.project_test.Service;

import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Evenement;

import java.util.Date;
import java.util.List;

public interface IEvenementService {
    Evenement addEvenement(Evenement evenement);
    Evenement getEvenement(long idEvenement);
    List<Evenement> getAllEvenements();
    void deleteEvenement(long idEvenement);
    Evenement updateEvenement(Evenement evenement);
    List<Evenement> findByDateFinBefore(Date endDate);
    long countByDateFinBefore(Date endDate);
    Evenement getEvenementByTitre(String titre);
    List<Evenement> findByEtudiantsCin(long cin);
    List<Evenement> findByEtudiantsNomEt(String nom);
    List<Evenement> findByEtudiantsEcole(String ecole);
    List<Evenement> findByEtudiantsIdEtudiant(long idEtudiant);
    public void deleteExpiredEvents();
    //Evenement affecterEtudiantToEvenement(long idEtudiant,long idEvenement);

}
