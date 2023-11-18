package com.example.project_test.Controllers;

import com.example.project_test.Entities.Foyer;
import com.example.project_test.Entities.Reservation;
import com.example.project_test.Service.ReservationserviceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class ReservationController {
    ReservationserviceImpl reservationService;
    @PostMapping("/reservation")
    Reservation addreservation(@RequestBody com.example.project_test.Entities.Reservation reservation) {
        return reservationService.addReservation(reservation);
    }

    @GetMapping("/reservation/{id}")
    Reservation retrieveReservation(@PathVariable String id) {
        return reservationService.getReservation(id);
    }
    @GetMapping("/reservation")
    List<Reservation> retrieveReservations(){
        return reservationService.getAllReservations();
    }
    @DeleteMapping("/reservation/{id}")
    void deleteReservation(@PathVariable String id){
        reservationService.deleteReservation(id);
    }
    @PutMapping("/reservation")
    Reservation updateReservation(@RequestBody Reservation reservation){
        return reservationService.updateReservation(reservation);
    }
}
