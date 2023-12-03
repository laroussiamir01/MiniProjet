package com.example.demo.controller;

import com.example.demo.entity.Commande;
import com.example.demo.entity.Produit;
import com.example.demo.service.ICrudService;
import com.example.demo.service.impl.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/commande")
public class CommandeController extends CrudController<Commande, Long> {

    @Autowired
    private CommandeService commandeService;

    @GetMapping("/searchC")
    public List<Commande> searchByNomC(@RequestParam("nomCommandeur") String nom) {

        return commandeService.searchByNomC(nom);
    }
    @PutMapping("/commandeaffecte/{idProduit}/{idCommande}")
    public String affecterProduitCommande(@PathVariable long idProduit, @PathVariable long idCommande)
    {
        return commandeService.affecterProduitCommande(idProduit,idCommande) ;
    }


}
