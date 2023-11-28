package com.example.project_test.Service;


import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Evenement;

import java.util.Date;
import java.util.List;
import java.util.Set;

public interface IEtudiantService {
    Etudiant addEtudiant(Etudiant etudiant);
    Etudiant getEtudiant(long idEtudiant);
    List<Etudiant> getAllEtudiants();
    void deleteEtudiant(long idEtudiant);
    Etudiant updateEtudiant(Etudiant etudiant);
    public Etudiant updateEtudiant1(Etudiant etudiant);
    Etudiant affecterReservationToEtudiant(long idEtudiant,String idReservation);
    Etudiant affecterEvenementToEtudiant(long idEtudiant,long idEvenement);
    Etudiant affecterEvenementToEtudiantByTitre(long idEtudiant,String titre);

    public boolean etudiantParticipedeja(long idEtudiant,long idEvenement);
    public List<Etudiant> getEtudiantParNom(String nom) ;
    public List<Etudiant> getEtudiantParPrenom(String prenom) ;
    public List<Etudiant> getEtudiantParEcole(String ecole) ;
    Etudiant getEtudiantByCin(long cin);
    public List<Etudiant> getEtudiantParDateNaissanceBetween(Date DateDebut, Date DateFin) ;
    public long countByDateNaissanceBetween(Date startDate, Date endDate);
    public long countByEcole(String ecole);
    List<Etudiant> findByEvenementsTitre(String titre);
    public long getTotalParticipations(Long idEtudiant);
    public Set<Evenement> ListTotalParticipations(Long idEtudiant);
}
