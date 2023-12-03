package com.example.demo.service.impl;

import com.example.demo.entity.Commande;
import com.example.demo.entity.Produit;
import com.example.demo.repository.CommandeRepository;
import com.example.demo.repository.ProduitRepository;
import com.example.demo.service.ICrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Primary
public class CommandeService implements ICrudService <Commande, Long> {
@Autowired
    private CommandeRepository commandeRepository;
@Autowired
    private ProduitRepository produitRepository;


    @Override
    public List<Commande> getAll() {
        return commandeRepository.findAll();
    }

    @Override
    public void add(Commande commande) {
        commandeRepository.save(commande);
    }

    @Override
    public void update(Commande commande) {
        commandeRepository.save(commande);
    }

    @Override
    public void delete(Long id) {
        Commande commande = new Commande();
        commande.setIdCommande(id);
        commandeRepository.delete(commande);
    }

    @Override
    public void saveAll(Iterable<Commande> iterable) {
        commandeRepository.saveAll(iterable);
    }

    public List<Commande> searchByNomC(String nomC) {
        return commandeRepository.findByNomCommandeurContainsIgnoreCase(nomC);
    }
    @Override
    public Commande getById(Long id) {
        return commandeRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Commande non trouvée avec l'ID : " + id));
    }

    public String affecterProduitCommande(long idProduit, long idCommande) {
        try {
            Optional<Produit> optionalFoyer = produitRepository.findById(idProduit);
            Optional<Commande> optionalBloc = commandeRepository.findById(idCommande);

            if (optionalFoyer.isPresent() && optionalBloc.isPresent()) {
                Produit produit = optionalFoyer.get();
                Commande commande = optionalBloc.get();

                commande.setProduit(produit);
                commandeRepository.save(commande);

                return "produit successfully assigned to commande.";
            } else {
                return "produit or commande not found.";
            }
        } catch (Exception e) {
            return "Error occurred: " + e.getMessage();
        }
    }



}
