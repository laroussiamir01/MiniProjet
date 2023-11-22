package com.example.project_test.Controllers;

import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Evenement;
import com.example.project_test.Service.EtudiantserviceImpl;
import com.example.project_test.Service.EvenementserviceImlpl;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/admin")
@PreAuthorize("hasRole('ADMIN')")
@CrossOrigin("*")
public class AdminController {
    EtudiantserviceImpl etudiantService;
    EvenementserviceImlpl evenementservice;
    @GetMapping
    @PreAuthorize("hasAuthority('admin:read')")
    public String get(){
        return "GET:: admin controller";
    }
    @PostMapping
    @PreAuthorize("hasAuthority('admin:create')")
    public String post(){
        return "POST:: admin controller";
    }
    @PutMapping
    @PreAuthorize("hasAuthority('admin:update')")
    public String put(){
        return "PUT:: admin controller";
    }
    @DeleteMapping
    @PreAuthorize("hasAuthority('admin:delete')")
    public String delete(){
        return "DELETE:: admin controller";
    }


    @PostMapping("/addEtudiant")
    @PreAuthorize("hasAuthority('admin:create')")
    Etudiant addetudiant(@RequestBody com.example.project_test.Entities.Etudiant etudiant) {
        return etudiantService.addEtudiant(etudiant);
    }

    @GetMapping("/etudiants")
    @PreAuthorize("hasAuthority('admin:read')")
    List<Etudiant> retrieveEtudiants(){
        return etudiantService.getAllEtudiants();
    }

    @PostMapping("/addEvenement")
    @PreAuthorize("hasAuthority('admin:create')")
    Evenement addEvenement(@RequestBody com.example.project_test.Entities.Evenement evenement) {
        return evenementservice.addEvenement(evenement);
    }

    @GetMapping("/evenements")
    @PreAuthorize("hasAuthority('admin:read')")
    List<Evenement> retrieveEvenements(){
        return evenementservice.getAllEvenements();
    }

}
