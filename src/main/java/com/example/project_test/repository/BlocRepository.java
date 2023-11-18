package com.example.project_test.repository;

import com.example.project_test.Entities.Bloc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface BlocRepository extends JpaRepository<Bloc, Long> {
}
