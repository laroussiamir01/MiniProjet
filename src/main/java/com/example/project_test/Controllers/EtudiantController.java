package com.example.project_test.Controllers;


import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Service.EtudiantserviceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class EtudiantController {
    EtudiantserviceImpl etudiantService;
    @PostMapping("/etudiant")
    Etudiant addetudiant(@RequestBody com.example.project_test.Entities.Etudiant etudiant) {
        return etudiantService.addEtudiant(etudiant);
    }

    @GetMapping("/etudiant/{id}")
    Etudiant retrieveEtudiant(@PathVariable Long id) {
        return etudiantService.getEtudiant(id);
    }
    @GetMapping("/etudiant")
    List<Etudiant> retrieveEtudiants(){
        return etudiantService.getAllEtudiants();
    }
    @DeleteMapping("/etudiant/{id}")
    void deleteEtudiant(@PathVariable Long id){
        etudiantService.deleteEtudiant(id);
    }
    @PutMapping("/etudiant")
    Etudiant updateEtudiant(@RequestBody Etudiant etudiant){
        return etudiantService.updateEtudiant(etudiant);
    }
}


