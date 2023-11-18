package com.example.project_test.Controllers;

import com.example.project_test.Entities.Bloc;
import com.example.project_test.Service.BlocserviceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class BlocController {
    BlocserviceImpl blocService;

    @PostMapping("/bloc")
    Bloc addbloc(@RequestBody com.example.project_test.Entities.Bloc bloc) {
        return blocService.addBloc(bloc);
    }

    @GetMapping("/bloc/{id}")
    Bloc retrieveBloc(@PathVariable Long id) {
        return blocService.getBloc(id);
    }
    @GetMapping("/bloc")
    List<Bloc> retrieveBlocs(){
        return blocService.getAllBlocs();
    }
    @DeleteMapping("/bloc/{id}")
    void deleteBloc(@PathVariable Long id){
        blocService.deleteBloc(id);
    }
    @PutMapping("/bloc")
    Bloc updateBloc(@RequestBody Bloc bloc){
        return blocService.updateBloc(bloc);
    }
}
