package com.bookstore.validate;

import org.springframework.stereotype.Component;

import com.bookstore.entities.Book;
import com.bookstore.exception.FieldNotFoundException;

@Component
public class BookValidate {

	public void validateBook(Book book) {

		if (book.getBookName() == null) {
			throw new FieldNotFoundException("Book Name is null");
		}
		if (book.getEdition() == null) {
			throw new FieldNotFoundException("Book Edition is null");
		}
		if (book.getPrice() == null) {
			throw new FieldNotFoundException("Book Price is null");
		}
		if (book.getDateOfPublish() == null) {
			System.out.println(book.toString());
			throw new FieldNotFoundException("Book Year of publlish is null");
		}

	}

}
