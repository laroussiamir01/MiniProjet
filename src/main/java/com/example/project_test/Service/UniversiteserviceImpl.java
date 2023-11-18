package com.example.project_test.Service;

import com.example.project_test.Entities.Universite;
import org.springframework.stereotype.Service;
import com.example.project_test.repository.UniversiteRepository;

import java.util.List;
@Service
public class UniversiteserviceImpl implements IUniversiteService
{
    UniversiteRepository universiteRepository;
    public UniversiteserviceImpl(UniversiteRepository universiteRepository){
        this.universiteRepository=universiteRepository;
    }
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
}
