package com.bookstore.utility;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.bookstore.entities.User;
import com.bookstore.exception.AccessDinedException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JWTUtility {
	public String generateToken(User u) {

		Long date = System.currentTimeMillis();
		Date dateTime = new Date(date);
		Date exdateTime = new Date((date + (1000 * 6000)));
		Claims claims = Jwts.claims().setIssuer(u.getUserName()).setIssuedAt(dateTime).setExpiration(exdateTime);
		String token = Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, "thisismysecret").compact();

		return token;
	}

	public void verifyToken(String auth) {
		try {
			Jwts.parser().setSigningKey("thisismysecret").parse(auth);
		} catch (Exception e) {
			throw new AccessDinedException("invalid token");
		}

	}

}
