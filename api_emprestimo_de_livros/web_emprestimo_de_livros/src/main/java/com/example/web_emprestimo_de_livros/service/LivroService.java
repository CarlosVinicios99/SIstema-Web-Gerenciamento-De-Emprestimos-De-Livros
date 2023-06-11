package com.example.web_emprestimo_de_livros.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.web_emprestimo_de_livros.model.Livro;
import com.example.web_emprestimo_de_livros.repository.LivroRepository;

@Service
public class LivroService {
	
	@Autowired
	private LivroRepository livroRepository;
	
	public Livro criarLivro(Livro livro) {
		return livroRepository.save(livro);
	}
	
	public Livro obterLivro(String codigo) {
		return livroRepository.findByCodigo(codigo);
	}
	
	
}
