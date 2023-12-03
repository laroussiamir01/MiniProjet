package com.example.demo.repository;

import com.example.demo.entity.Commande;
import com.example.demo.entity.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommandeRepository extends JpaRepository<Commande, Long> {
    List<Commande> findByNomCommandeurContainsIgnoreCase(String nomC);
}
