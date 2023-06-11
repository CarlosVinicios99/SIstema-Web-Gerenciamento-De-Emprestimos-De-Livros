package com.example.web_emprestimo_de_livros.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.web_emprestimo_de_livros.model.Livro;
import com.example.web_emprestimo_de_livros.service.LivroService;

@RestController
@CrossOrigin
@RequestMapping("/livro")
public class LivroController {
	
	@Autowired
	private LivroService livroService;
	
	
	@PostMapping
	public ResponseEntity<Livro> cadastrarLivro(@RequestBody Livro novoLivro){
		novoLivro = livroService.criarLivro(novoLivro);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(novoLivro.getId()).toUri();
		return ResponseEntity.created(uri).body(novoLivro);
	}
	
	@GetMapping("/{codigo}")
	public ResponseEntity<Livro> obterLivro(@PathVariable String codigo){
		Livro obj = livroService.obterLivro(codigo);
		return ResponseEntity.ok().body(obj);
	}
	
	
	
}
