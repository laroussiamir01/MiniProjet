package com.example.project_test.repository;

import com.example.project_test.Entities.Bloc;
import com.example.project_test.Entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, String> {

    List<Reservation> findByAnnneeUniversitaireBetween(Date startDate, Date endDate);
}
