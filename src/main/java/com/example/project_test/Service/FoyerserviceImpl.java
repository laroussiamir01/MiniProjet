package com.example.project_test.Service;

import com.example.project_test.Entities.Foyer;
import org.springframework.stereotype.Service;
import com.example.project_test.repository.FoyerRepository;

import java.util.List;
@Service
public class FoyerserviceImpl implements IFoyerService{
    FoyerRepository foyerRepository;

    public FoyerserviceImpl(FoyerRepository foyerRepository){
        this.foyerRepository=foyerRepository;
    }
    @Override
    public Foyer addFoyer(Foyer foyer) {
        return foyerRepository.save(foyer);
    }

    @Override
    public Foyer getFoyer(long idFoyer) {
        return foyerRepository.findById(idFoyer).orElse(null);
    }

    @Override
    public List<Foyer> getAllFoyers() {
        return foyerRepository.findAll();
    }

    @Override
    public void deleteFoyer(long idFoyer) {
        foyerRepository.deleteById(idFoyer);

    }

    @Override
    public Foyer updateFoyer(Foyer foyer) {
        return foyerRepository.save(foyer);
    }
}
