package com.example.project_test.Controllers;


import com.example.project_test.Entities.Etudiant;
import com.example.project_test.Entities.Evenement;
import com.example.project_test.Service.EtudiantserviceImpl;
//import com.example.project_test.auth.AuthenticationRequest;
//import com.example.project_test.auth.AuthenticationResponse;
//import com.example.project_test.auth.RegisterRequest;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Set;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/etu")
@CrossOrigin("*")
public class EtudiantController {
    EtudiantserviceImpl etudiantService;


//    @PostMapping("register")
//    public ResponseEntity<AuthenticationResponse> register(
//            @RequestBody RegisterRequest request
//    ) {
//        //
//    }
//    @PostMapping("/authenticate")
//    public ResponseEntity<AuthenticationResponse> register(
//            @RequestBody AuthenticationRequest request
//    ) {
//        //
//    }



    @GetMapping("/etudiant/{id}")
    Etudiant retrieveEtudiant(@PathVariable Long id) {
        return etudiantService.getEtudiant(id);
    }
//    @GetMapping("/Admin/etudiants")
//    List<Etudiant> retrieveEtudiants(){
//        return etudiantService.getAllEtudiants();
//    }
    @GetMapping("/etudiantParNom/{nom}")
    public List<Etudiant> getEtudiantParNom(@PathVariable String nom){
        return etudiantService.getEtudiantParNom(nom);
    }
    @GetMapping("/etudiantParPrenom/{prenom}")
    public List<Etudiant> getEtudiantParPrenom(@PathVariable String prenom){
        return etudiantService.getEtudiantParPrenom(prenom);
    }
    @GetMapping("/etudiantParEcole/{ecole}")
    public List<Etudiant> getEtudiantParEcole(@PathVariable String ecole){
        return etudiantService.getEtudiantParEcole(ecole);
    }
    @GetMapping("/etudiantParCin/{cin}")
    public Etudiant getEtudiantByCin(@PathVariable long cin) {
        return etudiantService.getEtudiantByCin(cin);
    }
    @GetMapping("/etudiantParDateBetween/{DateDebut}/{DateFin}")
    public List<Etudiant> getEtudiantParDateNaissanceBetween(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date DateDebut, @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date DateFin) {
        return etudiantService.getEtudiantParDateNaissanceBetween(DateDebut,DateFin);
    }
    @GetMapping("/CountEtudiantParDateBetween/{startDate}/{endDate}")
    public long countByDateNaissanceBetween(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
        return etudiantService.countByDateNaissanceBetween(startDate,endDate);
    }
    @GetMapping("/CountEtudiantParEcole/{ecole}")
    public long countByEcole(@PathVariable String ecole) {
        return etudiantService.countByEcole(ecole);
    }
    @GetMapping("/EtudiantParTitreEvenement/{titre}")
    public List<Etudiant> findByEvenementsTitre(@PathVariable String titre) {
        return etudiantService.findByEvenementsTitre(titre);
    }
@GetMapping("/getTotalParticipations/{idEtudiant}")
    public long getTotalParticipations(@PathVariable Long idEtudiant) {
        return etudiantService.getTotalParticipations(idEtudiant);
}
    @GetMapping("/listTotalParticipations/{idEtudiant}")
    public Set<Evenement> ListTotalParticipations(@PathVariable Long idEtudiant){
        return etudiantService.ListTotalParticipations(idEtudiant);
    }

    @DeleteMapping("/deleteEtudiant/{id}")
    void deleteEtudiant(@PathVariable Long id){
        etudiantService.deleteEtudiant(id);
    }
//    @PutMapping("/updateEtudiant/{id}")
//    Etudiant updateEtudiant(@RequestBody Etudiant etudiant){
//        return etudiantService.updateEtudiant(etudiant);
//    }

    @PutMapping("/updateEtudiant/{id}")
    public Etudiant updateEtudiant(@PathVariable("id") Long id, @RequestBody Etudiant etudiant) {
        etudiant.setIdEtudiant(id); // Définir l'ID de l'étudiant à partir du chemin d'accès
        return etudiantService.updateEtudiant(etudiant);
    }
    @PutMapping("/setEvenementToEtudiant/{idEtudiant}/{idEvenement}")
    public Etudiant affecterEvenementToEtudiant(@PathVariable long idEtudiant,@PathVariable long idEvenement){
        return etudiantService.affecterEvenementToEtudiant(idEtudiant,idEvenement);
    }
    @PutMapping("/setEvenementToEtudiantByTitre/{cin}/{titre}")
    public Etudiant affecterEvenementToEtudiantByTitre(@PathVariable long cin,@PathVariable String titre){
        return etudiantService.affecterEvenementToEtudiantByTitre(cin,titre);
    }
    @PutMapping("/desaffecterEtudiant/{idEtudiant}/{idEvenement}")
    public ResponseEntity<String> desaffecterEtudiant(@PathVariable long idEtudiant , @PathVariable long idEvenement ) {
return etudiantService.desaffecterEtudiant(idEtudiant,idEvenement);
    }
//@GetMapping("etudiantParticipedeja/{idEtudiant}/{idEvenement}")
//    public boolean etudiantParticipedeja(@PathVariable long idEtudiant,@PathVariable long idEvenement){
//        return etudiantService.etudiantParticipedeja(idEtudiant,idEvenement);
//}

}


