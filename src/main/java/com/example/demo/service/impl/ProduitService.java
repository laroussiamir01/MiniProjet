package com.example.demo.service.impl;

import java.util.List;
import java.util.NoSuchElementException;

import com.example.demo.entity.Commande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Produit;
import com.example.demo.repository.ProduitRepository;
import com.example.demo.service.ICrudService;

@Service
@Primary
public class ProduitService implements ICrudService<Produit, Long> {

	@Autowired
	private ProduitRepository produitRepository;

	@Override
	public List<Produit> getAll() {
		return produitRepository.findAll();
	}

	@Override
	public void add(Produit produit) {
		produitRepository.save(produit);
	}

	@Override
	public void update(Produit produit) {
		produitRepository.save(produit);
	}

	@Override
	public void delete(Long id) {
		Produit produit = new Produit();
		produit.setIdProduit(id);
		produitRepository.delete(produit);
	}
	@Override
	public Produit getById(Long id) {
		return produitRepository.findById(id)
				.orElseThrow(() -> new NoSuchElementException("Produit non trouvée avec l'ID : " + id));
	}

	@Override
	public void saveAll(Iterable<Produit> iterable) {
		produitRepository.saveAll(iterable);
	}

	public List<Produit> searchByRef(String ref) {
		return produitRepository.findByNomProduitContainsIgnoreCase(ref);
	}
}
