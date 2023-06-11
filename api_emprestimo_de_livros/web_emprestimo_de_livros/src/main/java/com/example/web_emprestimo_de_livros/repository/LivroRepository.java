package com.example.web_emprestimo_de_livros.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.web_emprestimo_de_livros.model.Livro;

public interface LivroRepository extends JpaRepository<Livro, Long>{
	
	Livro findByCodigo(String codigo);
	
}