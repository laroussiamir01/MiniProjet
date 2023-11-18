package com.example.project_test.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Reponse implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idReponse;
    String descriptionReponse;
    @ManyToOne
    @JoinColumn(name = "idQuestion")
    @JsonBackReference
    private Question question;
    @Column(name = "`like`")
     int like=0;
     int dislike=0;
    LocalDateTime dateAjoutR;
    @PrePersist
    private void setDateAjoutR() {
        this.dateAjoutR = LocalDateTime.now();
    }

    public Long getQuestionId() {
        return (question != null) ? question.getIdQuestion() : null;
    }
    public void setQuestionId(Long questionId) {
        if (question == null) {
            // Instancier la question si elle est nulle
            question = new Question();
        }
        question.setIdQuestion(questionId);
    }

}
