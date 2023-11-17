package com.example.project_test.Controllers;


import com.example.project_test.Entities.Chambre;
import com.example.project_test.Service.ChambreserviceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class ChambreController {
    ChambreserviceImpl chambreService;
    @PostMapping("/chambre")
    Chambre addchambre(@RequestBody com.example.project_test.Entities.Chambre chambre) {
        return chambreService.addChambre(chambre);
    }

    @GetMapping("/chambre/{id}")
    Chambre retrieveChambre(@PathVariable Long id) {
        return chambreService.getChambre(id);
    }
    @GetMapping("/chambre")
    List<Chambre> retrieveChambres(){
        return chambreService.getAllChambres();
    }
    @DeleteMapping("/chambre/{id}")
    void deleteChambre(@PathVariable Long id){
        chambreService.deleteChambre(id);
    }
    @PutMapping("/chambre")
    Chambre updateChambre(@RequestBody Chambre chambre){
        return chambreService.updateChambre(chambre);
    }
}
