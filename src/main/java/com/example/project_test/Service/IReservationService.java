package com.example.project_test.Service;


import com.example.project_test.Entities.Reservation;

import java.util.List;

public interface IReservationService {
    Reservation addReservation(Reservation reservation);
    Reservation getReservation(String idReservation);
    List<Reservation> getAllReservations();
    void deleteReservation(String idReservation);
    Reservation updateReservation(Reservation reservation);
}
