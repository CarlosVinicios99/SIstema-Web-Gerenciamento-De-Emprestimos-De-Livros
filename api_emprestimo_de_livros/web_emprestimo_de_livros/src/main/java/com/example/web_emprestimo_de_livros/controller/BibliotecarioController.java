package com.example.web_emprestimo_de_livros.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.web_emprestimo_de_livros.model.Bibliotecario;
import com.example.web_emprestimo_de_livros.service.BibliotecarioService;

@RestController
@RequestMapping("/bibliotecario")
@CrossOrigin
public class BibliotecarioController {
	
	@Autowired
	private BibliotecarioService bibliotecarioService;
	
	
	@PostMapping
	public ResponseEntity<Bibliotecario> obterBibliotecario(@RequestBody Bibliotecario bibliotecarioDTO) {
		Bibliotecario obj = bibliotecarioService.obterBibliotecario(bibliotecarioDTO.getCpf(), bibliotecarioDTO.getSenha());
		return ResponseEntity.ok().body(obj);		
	}
	
}
