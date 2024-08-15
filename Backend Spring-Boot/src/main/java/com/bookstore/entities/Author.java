package com.bookstore.entities;

import java.time.LocalDateTime;
import java.util.List;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Author {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(nullable = false)
	private String authorName;
	@Column(nullable = false)
	private String gender;
	@CreationTimestamp
	@Column(updatable = false)
	@JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss.SSS")
	private LocalDateTime createTime;
	@UpdateTimestamp
	@JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss.SSS")
	private LocalDateTime updateTime;

	@ManyToMany(mappedBy = "authors", cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
	@JsonIgnoreProperties("authors")
	private List<Book> books;

	@PrePersist
	protected void onCreate() {
		createTime = LocalDateTime.now();
	}

	public Author() {

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAuthorName() {
		return authorName;
	}

	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public LocalDateTime getCreateTime() {
		return createTime;
	}

	public void setCreateTime(LocalDateTime createTime) {
		this.createTime = createTime;
	}

	public LocalDateTime getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(LocalDateTime updateTime) {
		this.updateTime = updateTime;
	}

	public List<Book> getBooks() {
		return books;
	}

	public void setBooks(List<Book> books) {
		this.books = books;
	}

}
