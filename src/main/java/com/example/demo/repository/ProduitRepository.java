package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Produit;

import java.util.List;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long>{
    List<Produit> findByNomProduitContainsIgnoreCase(String nomProduit);
}
