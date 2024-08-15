package com.bookstore.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(nullable = false)
	private String bookName;
	@Column(nullable = false)
	private String edition;
	@Column(nullable = false)
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dateOfPublish;
	@Column(nullable = false)
	private Double price;
	@CreationTimestamp
	@Column(updatable = false)
	@JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss.SSS")
	private LocalDateTime createTime;
	@UpdateTimestamp
	@JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss.SSS")
	private LocalDateTime updateTime;

	@ManyToMany(cascade = { CascadeType.ALL }, fetch = FetchType.EAGER)
	@JoinTable(joinColumns = { @JoinColumn(name = "book_id") }, inverseJoinColumns = {
			@JoinColumn(name = "author_id") })
	@JsonIgnoreProperties("books")
	private List<Author> authors;

	public Book() {

	}

	@PrePersist
	protected void onCreate() {
		createTime = LocalDateTime.now();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getEdition() {
		return edition;
	}

	public void setEdition(String edition) {
		this.edition = edition;
	}

	public LocalDate getDateOfPublish() {
		return dateOfPublish;
	}

	public void setDateOfPublish(LocalDate dateOfPublish) {
		this.dateOfPublish = dateOfPublish;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
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

	public List<Author> getAuthors() {
		return authors;
	}

	public void setAuthors(List<Author> authors) {
		this.authors = authors;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", bookName=" + bookName + ", edition=" + edition + ", dateOfPublish=" + dateOfPublish
				+ ", price=" + price + ", createTime=" + createTime + ", updateTime=" + updateTime + ", authors="
				+ authors + "]";
	}

	
	
}