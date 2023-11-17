package com.example.project_test.Service;

import com.example.project_test.Entities.Bloc;
import com.example.project_test.Entities.Chambre;
import com.example.project_test.repository.ChambreRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.example.project_test.repository.BlocRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class BlocserviceImpl implements IBlocService{
    // @Autowired
    BlocRepository blocRepository;
    ChambreRepository chambreRepository;

   // FoyerRepository foyerRepository;

  //  @Autowired

//    public BlocserviceImpl(BlocRepository blocRepository,FoyerRepository foyerRepository) {
//        this.foyerRepository = foyerRepository;
//        this.blocRepository = blocRepository;
//    }


    @Override
    public Bloc addBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    @Override
    public Bloc getBloc(long idBloc) {
        return blocRepository.findById(idBloc).orElse(null);
    }

    @Override
    public List<Bloc> getAllBlocs() {
        return blocRepository.findAll();
    }

    @Override
    public void deleteBloc(long idBloc) {
        blocRepository.deleteById(idBloc);

    }

    @Override
    public Bloc updateBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    @Override
    public Bloc affecterChambreABloc(List<Long> numChambre, String nomBloc) {
        Bloc bloc = blocRepository.findByNomBloc(nomBloc);
        for(Long num : numChambre){
            Chambre chambre= chambreRepository.findByNumeroChambre(num);
            chambre.setBloc(bloc);
            chambreRepository.save(chambre);
        }
        return bloc;
    }
}
