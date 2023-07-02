package com.example.web_emprestimo_de_livros.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.web_emprestimo_de_livros.dto.EmprestimoDTO;
import com.example.web_emprestimo_de_livros.model.Emprestimo;
import com.example.web_emprestimo_de_livros.model.Usuario;
import com.example.web_emprestimo_de_livros.repository.EmprestimoRepository;

public class EmprestimoService {
	
	@Autowired
	private EmprestimoRepository emprestimoRepository;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private LivroRepository livroRepository;
	
	public Emprestimo registrarEmprestimo(EmprestimoDTO emprestimoDTO) {
		Emprestimo novoEmprestimo = new Emprestimo();
		Usuario usuarioEmprestimo;
		return novoEmprestimo;
	}
}
