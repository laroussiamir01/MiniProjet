package com.example.project_test.Service;

import com.example.project_test.Entities.Chambre;
import org.springframework.stereotype.Service;
import com.example.project_test.repository.ChambreRepository;

import java.util.List;
@Service
public class ChambreserviceImpl implements IChambreService{
    ChambreRepository chambreRepository;
    public  ChambreserviceImpl(ChambreRepository chambreRepository){
        this.chambreRepository=chambreRepository;
    }
    @Override
    public Chambre addChambre(Chambre chambre) {
        return chambreRepository.save(chambre);
    }

    @Override
    public Chambre getChambre(long idChambre) {
        return chambreRepository.findById(idChambre).orElse(null);
    }

    @Override
    public List<Chambre> getAllChambres() {
        return chambreRepository.findAll();
    }

    @Override
    public void deleteChambre(long idChambre) {
        chambreRepository.deleteById(idChambre);
    }

    @Override
    public Chambre updateChambre(Chambre chambre) {
        return chambreRepository.save(chambre);
    }
}
