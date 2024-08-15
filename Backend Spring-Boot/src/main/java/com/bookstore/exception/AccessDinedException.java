package com.bookstore.exception;

public class AccessDinedException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public AccessDinedException(String err) {
		super(err);
	}

}
