package com.example.web_emprestimo_de_livros.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Livro {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String titulo;
	
	private String autor;
	
	@Column(unique = true)
	private String codigo;
	
	private String descricao;
	
	private String proprietario;
	
	private boolean disponibilidade = true;
	
	public Livro() {
		
	}

	public Livro(Long id, String titulo, String autor, String codigo, String descricao, String proprietario,
			boolean disponibilidade) {
		this.id = id;
		this.titulo = titulo;
		this.autor = autor;
		this.codigo = codigo;
		this.descricao = descricao;
		this.proprietario = proprietario;
		this.disponibilidade = disponibilidade;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getProprietario() {
		return proprietario;
	}

	public void setProprietario(String proprietario) {
		this.proprietario = proprietario;
	}
	
	public void setDisponibilidade(boolean disponibilidade) {
		this.disponibilidade = disponibilidade;
	}

	public boolean getDisponibilidade() {
		return disponibilidade;
	}

	
}
