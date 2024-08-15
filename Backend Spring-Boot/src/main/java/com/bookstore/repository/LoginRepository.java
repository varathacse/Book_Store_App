package com.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookstore.entities.User;

@Repository
public interface LoginRepository extends JpaRepository<User, Integer> {

	User findByEmailIdIgnoreCaseAndPassword(String emailId, String password);

}