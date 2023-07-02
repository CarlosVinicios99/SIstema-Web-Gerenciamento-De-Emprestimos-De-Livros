package com.example.web_emprestimo_de_livros.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.web_emprestimo_de_livros.dto.EmprestimoDTO;
import com.example.web_emprestimo_de_livros.model.Emprestimo;
import com.example.web_emprestimo_de_livros.model.Livro;
import com.example.web_emprestimo_de_livros.model.Usuario;
import com.example.web_emprestimo_de_livros.repository.LivroRepository;
import com.example.web_emprestimo_de_livros.repository.UsuarioRepository;

@Service
public class EmprestimoService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private LivroRepository livroRepository;
	
	public Emprestimo registrarEmprestimo(EmprestimoDTO emprestimoDTO) {
		Emprestimo novoEmprestimo;
		
		Usuario usuarioEmprestimo = usuarioRepository.findById(emprestimoDTO.getIdUsuario()).get();
		Livro livroEmprestimo = livroRepository.findById(emprestimoDTO.getIdLivro()).get();
		
		if(usuarioEmprestimo.getEmprestimos().size() > 3) {
			return null;
		}
		
		livroEmprestimo.setDisponibilidade(false);
		novoEmprestimo = new Emprestimo(livroEmprestimo);
		
		usuarioEmprestimo.getEmprestimos().add(novoEmprestimo);
		
		usuarioRepository.save(usuarioEmprestimo);
		
		return novoEmprestimo;
	}
}
