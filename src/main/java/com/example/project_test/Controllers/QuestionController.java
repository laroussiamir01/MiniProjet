package com.example.project_test.Controllers;

import com.example.project_test.Entities.Question;
import com.example.project_test.Service.QuestionServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor

@CrossOrigin(origins = "http://localhost:4200")
public class QuestionController {
    QuestionServiceImpl questionService;

    @PostMapping("/question")
    Question addquestion(@RequestBody Question question) {
        return questionService.addQuestion(question);
    }

    @GetMapping("/question/{id}")
    Question retrieveQuestion(@PathVariable Long id) {
        return questionService.getQuestion(id);
    }
    @GetMapping("/questions")
    List<Question> retrieveQuestions(){
        return questionService.getAllQuestions();
    }
    @DeleteMapping("/question/{id}")
    void deleteQuestions(@PathVariable Long id){
        questionService.deleteQuestion(id);
    }
    @PutMapping("/question/{id}")
    Question updateFoyer(@RequestBody Question question){
        return questionService.updateQuestion(question);
    }

    @GetMapping("/questions/search")
    public List<Question> searchQuestions(@RequestParam String descriptionQuestion) {
        return questionService.searchQuestionsByDescription(descriptionQuestion);
    }
}
