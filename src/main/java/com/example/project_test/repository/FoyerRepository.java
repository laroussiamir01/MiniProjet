package com.example.project_test.repository;

import com.example.project_test.Entities.Bloc;
import com.example.project_test.Entities.Foyer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoyerRepository extends JpaRepository<Foyer, Long> {
}
