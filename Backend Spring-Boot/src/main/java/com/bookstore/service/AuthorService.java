package com.bookstore.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bookstore.entities.Author;
import com.bookstore.entities.Book;
import com.bookstore.repository.AuthorRepository;

@Service
public class AuthorService {

	@Autowired
	private AuthorRepository authorRepository;

	@Transactional
	public List<Author> saveAuthor(Book book) {
		List<Author> authorsToSave = new ArrayList<>();
		for (Author author : book.getAuthors()) {
			if (author.getId() != null) {
				Optional<Author> existingAuthor = authorRepository.findById(author.getId());
				if (existingAuthor.isPresent()) {
					authorsToSave.add(existingAuthor.get());
				} else {
					Author newAuthor = new Author();
					newAuthor.setAuthorName(author.getAuthorName());
					newAuthor.setGender(author.getGender());
					authorsToSave.add(newAuthor);
				}
			} else {
				authorsToSave.add(author);
			}
		}
		List<Author> listAuth = allAuthor();
		for (Author author : listAuth) {
			if (author.getBooks().size() == 0) {
				authorRepository.delete(author);
			}
		}

		return authorsToSave;
	}

	public List<Author> allAuthor() {
		return authorRepository.findAll();
	}

	public Author authorById(Integer id) {
		return authorRepository.getOne(id);
	}

	public Author updateAuthor(Author author) {
		Author a = authorById(author.getId());
		if (a != null) {

			authorRepository.save(author);
		}

		return a;
	}

}
