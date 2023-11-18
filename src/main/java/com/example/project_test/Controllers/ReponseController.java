package com.example.project_test.Controllers;

import com.example.project_test.Entities.Reponse;
import com.example.project_test.Service.ReponseServiceImpl;
import lombok.AllArgsConstructor;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ReponseController {
    ReponseServiceImpl reponseService;


    @PostMapping("/Reponse")
    Reponse addReponse(@RequestBody Reponse reponse) {
        return reponseService.addReponse(reponse);
    }
    @PostMapping("/ReponseQ/{idQuestion}")
    Reponse addReponseToReponse( @PathVariable long idQuestion, @RequestBody Reponse reponse) {
        return reponseService.addReponseToQuestion(idQuestion, reponse);
    }

    @GetMapping("/ReponseID/{id}")
    Reponse retrieveReponse(@PathVariable Long id) {
        return reponseService.getReponse(id);
    }
    @GetMapping("/Reponse")
    List<Reponse> retrieveReponses(){
        return reponseService.getAllReponses();
    }
    @GetMapping("/Reponse/{idQuestion}")
    List<Reponse> retrieveReponsesForQuestion(@PathVariable long idQuestion){
        return reponseService.getReponsesForQuestion(idQuestion);
    }
    @DeleteMapping("/Reponse/{id}")
    void deleteReponses(@PathVariable Long id){
        reponseService.deleteReponse(id);
    }

    @PutMapping("/Reponse/{id}")
    Reponse updateReponse( @RequestBody Reponse reponse) {
        // Assurez-vous que l'ID de la question est inclus dans la réponse

        return reponseService.updateReponse( reponse);
    }

    @PostMapping("/{id}/like")
    public Reponse likeReponse(@PathVariable Long id) {
        return reponseService.likeReponse(id);
    }

    @PostMapping("/{id}/dislike")
    public Reponse dislikeReponse(@PathVariable Long id) {
        return reponseService.dislikeReponse(id);
    }
}
