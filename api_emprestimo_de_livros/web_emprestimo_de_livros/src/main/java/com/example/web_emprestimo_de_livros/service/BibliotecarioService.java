package com.example.web_emprestimo_de_livros.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.web_emprestimo_de_livros.model.Bibliotecario;
import com.example.web_emprestimo_de_livros.repository.BibliotecarioRepository;

@Service
public class BibliotecarioService {
	
	@Autowired
	private BibliotecarioRepository bibliotecarioRepository;
	
	public Bibliotecario obterBibliotecario(String cpf, String senha) {
		Bibliotecario bibliotecarioBuscado = bibliotecarioRepository.findByCpf(cpf);
		
		if(bibliotecarioBuscado != null) {
			String senhaBuscada = bibliotecarioBuscado.getSenha();
			return senhaBuscada.equals(senha) ? bibliotecarioBuscado : null;
		}
		return null;
	}
}
