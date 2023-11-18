package com.example.project_test.Service;

import com.example.project_test.Entities.Etudiant;
import org.springframework.stereotype.Service;
import com.example.project_test.repository.EtudiantRepository;

import java.util.List;
@Service
public class EtudiantserviceImpl implements IEtudiantService{
    EtudiantRepository etudiantRepository;
    public EtudiantserviceImpl(EtudiantRepository etudiantRepository)
    {
        this.etudiantRepository=etudiantRepository;
    }
    @Override
    public Etudiant addEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @Override
    public Etudiant getEtudiant(long idEtudiant) {
        return etudiantRepository.findById(idEtudiant).orElse(null);
    }

    @Override
    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

    @Override
    public void deleteEtudiant(long idEtudiant) {
        etudiantRepository.deleteById(idEtudiant);
    }

    @Override
    public Etudiant updateEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }
}
