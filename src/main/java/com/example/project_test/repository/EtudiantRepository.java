package com.example.project_test.repository;

import com.example.project_test.Entities.Bloc;
import com.example.project_test.Entities.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
}
