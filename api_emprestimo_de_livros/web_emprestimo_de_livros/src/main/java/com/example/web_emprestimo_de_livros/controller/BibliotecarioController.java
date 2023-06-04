package com.example.web_emprestimo_de_livros.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.web_emprestimo_de_livros.model.Bibliotecario;
import com.example.web_emprestimo_de_livros.service.BibliotecarioService;

@RestController
@RequestMapping("/bibliotecario")
public class BibliotecarioController {
	
	@Autowired
	private BibliotecarioService bibliotecarioService;
	
	
	@GetMapping
	public Bibliotecario obterBibliotecario(@RequestParam String cpf, @RequestParam String senha) {
		return bibliotecarioService.obterBibliotecario(cpf, senha);
	}
	
}
