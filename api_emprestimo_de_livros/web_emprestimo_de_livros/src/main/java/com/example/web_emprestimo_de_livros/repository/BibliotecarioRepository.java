package com.example.web_emprestimo_de_livros.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.web_emprestimo_de_livros.model.Bibliotecario;

public interface BibliotecarioRepository extends JpaRepository<Bibliotecario, Long>{
	Bibliotecario findByCpf(String cpf);
}
