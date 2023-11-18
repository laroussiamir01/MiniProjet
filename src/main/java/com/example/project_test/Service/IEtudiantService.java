package com.example.project_test.Service;


import com.example.project_test.Entities.Etudiant;

import java.util.List;

public interface IEtudiantService {
    Etudiant addEtudiant(Etudiant etudiant);
    Etudiant getEtudiant(long idEtudiant);
    List<Etudiant> getAllEtudiants();
    void deleteEtudiant(long idEtudiant);
    Etudiant updateEtudiant(Etudiant etudiant);
}
