package com.example.project_test.Service;


import com.example.project_test.Entities.Chambre;

import java.util.List;

public interface IChambreService {
    Chambre addChambre(Chambre chambre);
    Chambre getChambre(long idChambre);
    List<Chambre> getAllChambres();
    void deleteChambre(long idChambre);
    Chambre updateChambre(Chambre chambre);
}
