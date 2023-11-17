package com.example.project_test.Service;


import com.example.project_test.Entities.Universite;

import java.util.List;

public interface IUniversiteService {
    Universite addUniversite(Universite universite);
    Universite getUniversite(long idUniversite);
    List<Universite> getAllUniversites();
    void deleteUniversite(long idUniversite);
    Universite updateUniversite(Universite universite);
    Universite affecterFoyerAUniversite(long idFoyer,long idUniversite);
    Universite affecterFoyerAUniversite1(long idFoyer,String idUniversite);
}
