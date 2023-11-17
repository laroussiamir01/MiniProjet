package com.example.project_test.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Set;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Reservation implements Serializable {
    @Id
    String idReservation;
    Date annneeUniversitaire;
    boolean estValide;
    @ManyToMany(mappedBy = "reservations")
    Set<Etudiant> etudiants;

}
