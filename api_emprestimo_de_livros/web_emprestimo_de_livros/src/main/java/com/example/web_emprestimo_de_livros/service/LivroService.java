package com.example.web_emprestimo_de_livros.service;

import java.util.List;
import java.util.stream.Collectors;

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
	
	public List<Livro> obterLivrosPorTitulo(String titulo) {
	    return livroRepository.findAll()
	    	.stream().filter(livro -> livro.getTitulo().contains(titulo))
	        .collect(Collectors.toList());
	}
	
	public void removerLivro(Long id) {
		livroRepository.deleteById(id);
	}
	
	
}
