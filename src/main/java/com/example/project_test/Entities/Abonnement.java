package com.example.project_test.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Abonnement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idAbonnement;
    Date dateAchat;
    Date dateFin;
    boolean etatAbonnement;
    @ManyToOne
    Pack pack;

}
