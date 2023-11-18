package com.example.project_test.Controllers;

import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Foyer;
import com.example.project_test.Service.FoyerserviceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class FoyerController {
    FoyerserviceImpl foyerService;
    @PostMapping("/foyer")
    Foyer addfoyer(@RequestBody com.example.project_test.Entities.Foyer foyer) {
        return foyerService.addFoyer(foyer);
    }

    @GetMapping("/foyer/{id}")
    Foyer retrieveFoyer(@PathVariable Long id) {
        return foyerService.getFoyer(id);
    }
    @GetMapping("/foyer")
    List<Foyer> retrieveFoyers(){
        return foyerService.getAllFoyers();
    }
    @DeleteMapping("/foyer/{id}")
    void deleteFoyers(@PathVariable Long id){
        foyerService.deleteFoyer(id);
    }
    @PutMapping("/foyer")
    Foyer updateFoyer(@RequestBody Foyer foyer){
        return foyerService.updateFoyer(foyer);
    }
}
