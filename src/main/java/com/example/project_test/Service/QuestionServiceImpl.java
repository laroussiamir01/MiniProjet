package com.example.project_test.Service;

import com.example.project_test.Entities.Question;
import com.example.project_test.repository.QuestionRepository;
import jakarta.persistence.EntityNotFoundException;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements IQuestionService {

    QuestionRepository questionRepository;

    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public Question addQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public Question getQuestion(long idQuestion) {
        return questionRepository.findById(idQuestion).orElse(null);
    }

    @Override
    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    @Override
    public void deleteQuestion(long idQuestion) {
questionRepository.deleteById(idQuestion);
    }

    @Override
    public Question updateQuestion(Question question) {
        Question f = questionRepository.findById(question.getIdQuestion()).orElseThrow(() -> new EntityNotFoundException("No Foyer with id " + question.getIdQuestion() + " was found!"));
        if (f!=null){
            questionRepository.save(question);}
        return f;
    }

    @Override
    public List<Question> searchQuestionsByDescription(String description) {
        return questionRepository.findByDescriptionQuestionContainingIgnoreCase(description);
    }

}
