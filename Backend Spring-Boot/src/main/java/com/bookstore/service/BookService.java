package com.bookstore.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bookstore.entities.Author;
import com.bookstore.entities.Book;
import com.bookstore.repository.AuthorRepository;
import com.bookstore.repository.BookRepository;
import com.bookstore.validate.BookValidate;

@Service
public class BookService {

	@Autowired
	private AuthorService authorService;
	@Autowired
	private BookRepository bookRepository;
	@Autowired
	private AuthorRepository authorRepository;
	@Autowired
	private BookValidate bookValidate;

	@Transactional
	public Book saveAllBook(Book book) {
		bookValidate.validateBook(book);
		book.setAuthors(authorService.saveAuthor(book));
		return bookRepository.save(book);
	}

	@Transactional
	public List<Book> allBook() {
		return bookRepository.findAll();
	}

	public Book deleteBookById(Integer id) {
		Book b = bookRepository.getById(id);
		for (Author author : b.getAuthors()) {
			b.setAuthors(null);
			author.getBooks().remove(b);
			if (author.getBooks().size() == 0) {
				authorRepository.delete(author);
			}
		}
		b.setAuthors(null);
		bookRepository.delete(b);

		return b;
	}

	@Transactional
	public Book updateBook(Book book) {
		Book b = bookRepository.getById(book.getId());
		bookValidate.validateBook(book);
		Book newBook = new Book();
		newBook.setId(b.getId());
		newBook.setBookName(book.getBookName());
		newBook.setEdition(book.getEdition());
		newBook.setDateOfPublish(book.getDateOfPublish());
		newBook.setPrice(book.getPrice());
		List<Author> al = authorService.saveAuthor(book);
		newBook.setAuthors(al);
		return bookRepository.save(newBook);
	}

	public BookValidate getBookValidate() {
		return bookValidate;
	}

	public void setBookValidate(BookValidate bookValidate) {
		this.bookValidate = bookValidate;
	}

	public Book bookById(Integer id) {
		return bookRepository.getOne(id);
	}

	public AuthorRepository getAuthorRepository() {
		return authorRepository;
	}

	public void setAuthorRepository(AuthorRepository authorRepository) {
		this.authorRepository = authorRepository;
	}

}
