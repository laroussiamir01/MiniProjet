package com.example.project_test.Controllers;

import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Evenement;
import com.example.project_test.Service.EtudiantserviceImpl;
import com.example.project_test.Service.EvenementserviceImlpl;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


import java.util.Date;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/eve")
@CrossOrigin("*")
public class EvenementController {
    EvenementserviceImlpl evenementservice;

//    @PostMapping("/addEvenement")
//    Evenement addEvenement(@RequestBody com.example.project_test.Entities.Evenement evenement) {
//        return evenementservice.addEvenement(evenement);
//    }

    @GetMapping("/evenement/{id}")
    Evenement retrieveEvenement(@PathVariable Long id) {
        return evenementservice.getEvenement(id);
    }
//    @GetMapping("/evenements")
//    List<Evenement> retrieveEvenements(){
//        return evenementservice.getAllEvenements();
//    }
    @GetMapping("/evenementBefore/{endDate}")
    public List<Evenement> findByDateFinBefore(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
        return evenementservice.findByDateFinBefore(endDate);
    }
    @GetMapping("/countEvenementBefore/{endDate}")
    public long countByDateFinBefore(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
        return evenementservice.countByDateFinBefore(endDate);
    }
    @GetMapping("/evenementParTitre/{titre}")
    public Evenement getEvenementByTitre(@PathVariable String titre) {
        return evenementservice.getEvenementByTitre(titre);
    }
    @GetMapping("/evenementParCinEtudiant/{cin}")
    public List<Evenement> findByEtudiantsCin(@PathVariable long cin) {
        return evenementservice.findByEtudiantsCin(cin);
    }
    @GetMapping("/evenementParNomEtudiant/{nom}")
    public List<Evenement> findByEtudiantsNomEt(@PathVariable String nom) {
        return evenementservice.findByEtudiantsNomEt(nom);
    }
    @GetMapping("/evenementParEcoleEtudiant/{ecole}")
    public List<Evenement> findByEtudiantsEcole(@PathVariable String ecole) {
        return evenementservice.findByEtudiantsEcole(ecole);
    }
    @GetMapping("/evenementParIdEtudiant/{idEtudiant}")
    public List<Evenement> findByEtudiantsIdEtudiant(@PathVariable long idEtudiant) {
        return evenementservice.findByEtudiantsIdEtudiant(idEtudiant);
    }


    @DeleteMapping("/deleteEvenement/{id}")
    @PreAuthorize("hasAuthority('admin:delete')")

    void deleteEvenement(@PathVariable Long id){
        evenementservice.deleteEvenement(id);
    }
//    @PutMapping("/updateEtudiant/{id}")
//    Etudiant updateEtudiant(@RequestBody Etudiant etudiant){
//        return etudiantService.updateEtudiant(etudiant);
//    }

    @PutMapping("/updateEvenement/{id}")
    @PreAuthorize("hasAuthority('admin:update')")
    public Evenement updateEvenement(@PathVariable("id") Long id, @RequestBody Evenement evenement) {
        evenement.setIdEvenement(id); // Définir l'ID de l'étudiant à partir du chemin d'accès
        return evenementservice.updateEvenement(evenement);
    }
}
