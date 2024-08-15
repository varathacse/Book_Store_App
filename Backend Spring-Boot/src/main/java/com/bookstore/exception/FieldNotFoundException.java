package com.bookstore.exception;

public class FieldNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public FieldNotFoundException(String err) {
		super(err);
	}

}
