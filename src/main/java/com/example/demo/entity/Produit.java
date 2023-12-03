package com.example.demo.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Produit  implements Serializable {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long idProduit;
	
	private String nomProduit;
	
	private int quantite;
	
	private float prixUnitaire;
	@JsonBackReference
	@OneToMany(cascade = CascadeType.ALL, mappedBy="produit")
	Set<Commande> commandes;






}
