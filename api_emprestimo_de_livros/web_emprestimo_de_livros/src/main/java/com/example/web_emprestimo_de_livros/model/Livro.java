package com.example.web_emprestimo_de_livros.model;

public class Livro {
	
	private Long id;
	
	private String titulo;
	
	private String autor;
	
	private String codigo;
	
	private String descricao;
	
	private String proprietario;
	
	private int disponibilidade;
	
	public Livro() {
		
	}

	public Livro(Long id, String titulo, String autor, String codigo, String descricao, String proprietario,
			int disponibilidade) {
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

	public int getDisponibilidade() {
		return disponibilidade;
	}

	public void setDisponibilidade(int disponibilidade) {
		this.disponibilidade = disponibilidade;
	}
	
}
