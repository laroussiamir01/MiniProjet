package com.example.project_test.Controllers;

import com.example.project_test.Entities.Reservation;
import com.example.project_test.Entities.Universite;
import com.example.project_test.Service.UniversiteserviceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class UniversiteController {
    UniversiteserviceImpl universiteService;
    @PostMapping("/universite")
    Universite addUniversite(@RequestBody com.example.project_test.Entities.Universite universite) {
        return universiteService.addUniversite(universite);
    }

    @GetMapping("/universite/{id}")
    Universite retrieveUniversite(@PathVariable Long id) {
        return universiteService.getUniversite(id);
    }
    @GetMapping("/universite")
    List<Universite> retrieveUniversites(){
        return universiteService.getAllUniversites();
    }
    @DeleteMapping("/universite/{id}")
    void deleteUniversite(@PathVariable Long id){
        universiteService.deleteUniversite(id);
    }
    @PutMapping("/universite")
    Universite updateUniversite(@RequestBody Universite universite){
        return universiteService.updateUniversite(universite);
    }
}
