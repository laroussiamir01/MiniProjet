package com.example.project_test.Service;

import com.example.project_test.Entities.Bloc;

import java.util.List;

public interface IBlocService {
    Bloc addBloc(Bloc bloc);
    Bloc getBloc(long idBloc);
    List<Bloc> getAllBlocs();
    void deleteBloc(long idBloc);
    Bloc updateBloc(Bloc bloc);
}
