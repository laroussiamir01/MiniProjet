package com.example.demo.controller;

import com.example.demo.service.impl.ProduitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Produit;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProduitContoller extends CrudController<Produit, Long>{

@Autowired
    private ProduitService produitService;

    @GetMapping("/search")
    public List<Produit> searchByRef(@RequestParam("ref") String ref) {

        return produitService.searchByRef(ref);
    }

}
