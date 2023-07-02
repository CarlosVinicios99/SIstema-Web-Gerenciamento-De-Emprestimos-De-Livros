package com.example.web_emprestimo_de_livros.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.web_emprestimo_de_livros.model.Emprestimo;

public interface EmprestimoRepository extends JpaRepository<Emprestimo, Long>{
	
}

