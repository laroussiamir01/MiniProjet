package com.example.project_test.Service;

import com.example.project_test.Entities.Foyer;

import java.util.List;

public interface IFoyerService {
    Foyer addFoyer(Foyer foyer);
    Foyer getFoyer(long idFoyer);
    List<Foyer> getAllFoyers();
    void deleteFoyer(long idFoyer);
    Foyer updateFoyer(Foyer foyer);
}
