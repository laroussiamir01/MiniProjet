package com.example.demo.service;

import com.example.demo.entity.Produit;

import java.util.List;

public interface ICrudService<T, ID> {

	List<T> getAll();
	
	void add(T entity);
	
	void update(T entity);
	
	void delete(ID id);
	
	void saveAll(Iterable<T> iterable);

	T getById(ID id);

}
