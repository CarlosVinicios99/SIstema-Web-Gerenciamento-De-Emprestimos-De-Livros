package com.example.web_emprestimo_de_livros.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.web_emprestimo_de_livros.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
	Usuario findByCpf(String cpf);
}
