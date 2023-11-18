package com.example.project_test.repository;

import com.example.project_test.Entities.Reponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReponseRepository extends JpaRepository<Reponse,Long> {
    List<Reponse> findByQuestion_IdQuestion(long questionId);


}

