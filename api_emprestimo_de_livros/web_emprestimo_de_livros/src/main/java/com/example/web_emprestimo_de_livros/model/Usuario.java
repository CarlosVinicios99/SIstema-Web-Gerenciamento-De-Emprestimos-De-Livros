package com.example.web_emprestimo_de_livros.model;

import java.util.ArrayList;

public class Usuario {
	
	private Long id;
	
	private String nome;
	
	private String matricula;
	
	private String cpf;
	
	private String email;
	
	private String senha;
	
	private ArrayList<Emprestimo> emprestimos = new ArrayList<>();
	
	public Usuario() {
		
	}

	public Usuario(Long id, String nome, String matricula, String cpf, String email, String senha) {
		this.id = id;
		this.nome = nome;
		this.matricula = matricula;
		this.cpf = cpf;
		this.email = email;
		this.senha = senha;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}