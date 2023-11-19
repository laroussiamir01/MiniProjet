package com.example.project_test.repository;

import com.example.project_test.Entities.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    List<Question> findByDescriptionQuestionContainingIgnoreCase(String description);


}
