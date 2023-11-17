package com.example.project_test.Entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Evenement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idEvenement;
    String titre;
    String description;
    @JsonFormat(pattern = "yyyy-MM-dd")
    Date dateDebut;
    @JsonFormat(pattern = "yyyy-MM-dd")
    Date dateFin;
    long placeDisponible;
    boolean hasParticipated;
    @JsonIgnore
    @ManyToMany(mappedBy = "evenements")
    Set<Etudiant> etudiants;

}
