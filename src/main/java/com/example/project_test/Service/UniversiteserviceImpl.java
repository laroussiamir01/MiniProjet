package com.example.project_test.Service;

import com.example.project_test.Entities.Foyer;
import com.example.project_test.Entities.Universite;
import com.example.project_test.repository.FoyerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.project_test.repository.UniversiteRepository;

import java.util.List;
@AllArgsConstructor
@Service
public class UniversiteserviceImpl implements IUniversiteService
{
    UniversiteRepository universiteRepository;
    FoyerRepository foyerRepository;

    @Override
    public Universite addUniversite(Universite universite) {
        return universiteRepository.save(universite);
    }

    @Override
    public Universite getUniversite(long idUniversite) {
        return universiteRepository.findById(idUniversite).orElse(null);
    }

    @Override
    public List<Universite> getAllUniversites() {
        return universiteRepository.findAll();
    }

    @Override
    public void deleteUniversite(long idUniversite) {
        universiteRepository.deleteById(idUniversite);
    }

    @Override
    public Universite updateUniversite(Universite universite) {
        return universiteRepository.save(universite);
    }

    @Override
    public Universite affecterFoyerAUniversite(long idFoyer, long idUniversite) {
        Universite universite= universiteRepository.findById(idUniversite).orElse(null);
        Foyer foyer=foyerRepository.findById(idFoyer).orElse(null);
        universite.setFoyer(foyer);

        return universiteRepository.save(universite);
    }

    @Override
    public Universite affecterFoyerAUniversite1(long idFoyer, String nomUniversite) {
        Foyer foyer=foyerRepository.findById(idFoyer).orElse(null);
        Universite universite=universiteRepository.retrieveByNom(nomUniversite);
        universite.setFoyer(foyer);
        return universiteRepository.save(universite);
    }
}
