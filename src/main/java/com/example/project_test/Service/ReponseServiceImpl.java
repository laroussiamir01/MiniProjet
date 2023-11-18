package com.example.project_test.Service;

import com.example.project_test.Entities.Question;
import com.example.project_test.Entities.Reponse;
import com.example.project_test.repository.QuestionRepository;
import com.example.project_test.repository.ReponseRepository;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ReponseServiceImpl implements IReponseService {

    ReponseRepository reponseRepository;


    QuestionRepository questionRepository;
    public ReponseServiceImpl(ReponseRepository reponseRepository , QuestionRepository questionRepository) {
        this.reponseRepository = reponseRepository;
        this.questionRepository = questionRepository;
    }
    @Override
    public Reponse addReponseToQuestion( long questionId ,Reponse reponse) {
        Question question = questionRepository.findById(questionId).orElse(null);

            reponse.setQuestion(question);
            return reponseRepository.save(reponse);


    }
    @Override
    public List<Reponse> getReponsesForQuestion(long idQuestion) {
        // Implémentez la logique pour récupérer les réponses associées à la question
        return reponseRepository.findByQuestion_IdQuestion(idQuestion);
    }
    @Override
    public Reponse addReponse(Reponse reponse) {

            return reponseRepository.save(reponse);

    }



    @Override
    public Reponse getReponse(long idReponse) {
        return  reponseRepository.findById(idReponse).orElse(null);
      }

    @Override
    public List<Reponse> getAllReponses() {
        return reponseRepository.findAll();
    }

    @Override
    public void deleteReponse(long idReponse) {
reponseRepository.deleteById(idReponse);
    }

    @Override
    public Reponse updateReponse(Reponse reponse) {
        if (reponse.getQuestion() == null) {
            throw new IllegalArgumentException("Question cannot be null during the update of the response.");
        }


        return reponseRepository.save(reponse);
    }

    @Override
    public Reponse likeReponse(Long id) {
        Optional<Reponse> optionalReponse = reponseRepository.findById(id);

        if (optionalReponse.isPresent()) {
            Reponse reponse = optionalReponse.get();
            reponse.setLike(reponse.getLike() + 1);

            if (reponse.getDislike() > 0) {
                // Si des dislikes existent, décrémentez le compteur de dislikes
                reponse.setDislike(reponse.getDislike() - 1);
            }

            return reponseRepository.save(reponse);
        } else {
            // Gérer le cas où la réponse n'est pas trouvée
            throw new EntityNotFoundException("Reponse not found with id: " + id);
        }
    }

    @Override
    public Reponse dislikeReponse(Long id) {
        Optional<Reponse> optionalReponse = reponseRepository.findById(id);

        if (optionalReponse.isPresent()) {
            Reponse reponse = optionalReponse.get();
            reponse.setDislike(reponse.getDislike() + 1);

            if (reponse.getLike() > 0) {
                // Si des likes existent, décrémentez le compteur de likes
                reponse.setLike(reponse.getLike() - 1);
            }

            return reponseRepository.save(reponse);
        } else {
            // Gérer le cas où la réponse n'est pas trouvée
            throw new EntityNotFoundException("Reponse not found with id: " + id);
        }
    }

}
