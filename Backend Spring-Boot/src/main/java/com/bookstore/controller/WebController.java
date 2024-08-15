package com.bookstore.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.bookstore.DTO.LoginUserDto;
import com.bookstore.DTO.ResponseUser;
import com.bookstore.DTO.SignUpUserDto;
import com.bookstore.entities.Author;
import com.bookstore.entities.Book;
import com.bookstore.entities.User;
import com.bookstore.service.AuthorService;
import com.bookstore.service.BookService;
import com.bookstore.service.LoginService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class WebController {
	@Autowired
	private BookService bookService;
	@Autowired
	private AuthorService authorService;
	@Autowired
	private LoginService loginService;

	@PostMapping(value = "/signup")
	public ResponseEntity<String> signup(@RequestBody SignUpUserDto userdto) {
		User u = loginService.signup(userdto);
		return new ResponseEntity<String>("SignUp Successfully", HttpStatus.CREATED);
	}

	@PostMapping(value = "/login")
	public ResponseEntity<?> login(@RequestBody LoginUserDto userdto) {
		// Call the login service
		Map<String, Object> res = loginService.login(userdto);

		if (res == null || res.isEmpty()) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
		}

		HttpHeaders headers = new HttpHeaders();
		headers.add("Authorization", (String) res.get("token"));
		ResponseUser responseUser = (ResponseUser) res.get("user");

		return new ResponseEntity<>(responseUser, headers, HttpStatus.ACCEPTED);
	}

	@PostMapping(value = "/book")
	public ResponseEntity<Book> saveAll(@RequestBody Book book) {
		return new ResponseEntity<Book>(bookService.saveAllBook(book), HttpStatus.CREATED);
	}

	@PutMapping(value = "/book")
	public ResponseEntity<Book> updateBook(@RequestBody Book book) {
		return new ResponseEntity<Book>(bookService.updateBook(book), HttpStatus.CREATED);
	}

	@GetMapping(value = "/book")
	public ResponseEntity<List<Book>> allBook() {
		return new ResponseEntity<List<Book>>(bookService.allBook(), HttpStatus.ACCEPTED);
	}

	@GetMapping(value = "/book/{id}")
	public ResponseEntity<Book> bookById(@PathVariable Integer id) {
		return new ResponseEntity<Book>(bookService.bookById(id), HttpStatus.ACCEPTED);
	}

	@DeleteMapping(value = "/book/{id}")
	public ResponseEntity<Book> deleteBookById(@PathVariable Integer id) {
		return new ResponseEntity<Book>(bookService.deleteBookById(id), HttpStatus.ACCEPTED);
	}

	@GetMapping(value = "/author")
	public ResponseEntity<List<Author>> allAuthor() {
		return new ResponseEntity<List<Author>>(authorService.allAuthor(), HttpStatus.ACCEPTED);
	}

	@GetMapping(value = "/author/{id}")
	public ResponseEntity<Author> authorById(@PathVariable Integer id) {
		return new ResponseEntity<Author>(authorService.authorById(id), HttpStatus.ACCEPTED);
	}

	@PutMapping(value = "/author")
	public ResponseEntity<Author> updateById(@RequestBody Author author) {
		return new ResponseEntity<Author>(authorService.updateAuthor(author), HttpStatus.ACCEPTED);
	}

	public AuthorService getAuthorService() {
		return authorService;
	}

	public void setAuthorService(AuthorService authorService) {
		this.authorService = authorService;
	}

}
