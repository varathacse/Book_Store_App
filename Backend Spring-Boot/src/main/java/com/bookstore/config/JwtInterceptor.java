package com.bookstore.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.bookstore.utility.JWTUtility;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		String Authorization = request.getHeader("Authorization");
		if (!(request.getRequestURI().contains("login") || request.getRequestURI().contains("signup"))) {
			new JWTUtility().verifyToken(Authorization);
		}
		return true;
	}
}