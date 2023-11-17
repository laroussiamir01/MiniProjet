package com.example.project_test.Service;

import com.example.project_test.Entities.Reservation;
import org.springframework.stereotype.Service;
import com.example.project_test.repository.ReservationRepository;

import java.util.List;

@Service
public class ReservationserviceImpl implements IReservationService {
    ReservationRepository reservationRepository;

    public ReservationserviceImpl(ReservationRepository reservationRepository){
        this.reservationRepository=reservationRepository;
    }
    @Override
    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public Reservation getReservation(String idReservation) {
        return reservationRepository.findById(idReservation).orElse(null);
    }

    @Override
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    @Override
    public void deleteReservation(String idReservation) {
        reservationRepository.deleteById(idReservation);
    }

    @Override
    public Reservation updateReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
}
