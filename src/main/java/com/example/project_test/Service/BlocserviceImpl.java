package com.example.project_test.Service;

import com.example.project_test.Entities.Bloc;
import org.springframework.stereotype.Service;
import com.example.project_test.repository.BlocRepository;

import java.util.List;

@Service
public class BlocserviceImpl implements IBlocService{
    // @Autowired
    BlocRepository blocRepository;

   // FoyerRepository foyerRepository;

  //  @Autowired
    public BlocserviceImpl(BlocRepository blocRepository) {
        this.blocRepository = blocRepository;
    }
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
}
