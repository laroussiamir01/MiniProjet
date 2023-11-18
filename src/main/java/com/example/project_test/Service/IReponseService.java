package com.example.project_test.Service;


import com.example.project_test.Entities.Reponse;

import java.util.List;

public interface IReponseService {

    Reponse addReponse(Reponse reponse);
    Reponse addReponseToQuestion( long questionId, Reponse reponse);
    Reponse getReponse(long idReponse);
    List<Reponse> getReponsesForQuestion(long idQuestion);
    List<Reponse> getAllReponses();
    void deleteReponse(long idReponse);
    Reponse updateReponse( Reponse reponse);
    Reponse likeReponse(Long id);

    Reponse dislikeReponse(Long id);
}
