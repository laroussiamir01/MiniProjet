package com.example.project_test.Service;

import com.example.project_test.Entities.Question;

import java.util.List;

public interface IQuestionService {
    Question addQuestion(Question question);
    Question getQuestion(long idQuestion);
    List<Question> getAllQuestions();
    void deleteQuestion(long idQuestion);
    Question updateQuestion(Question question);
}
