package com.bookstore.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookstore.DTO.LoginUserDto;
import com.bookstore.DTO.ResponseUser;
import com.bookstore.DTO.SignUpUserDto;
import com.bookstore.entities.User;
import com.bookstore.repository.LoginRepository;
import com.bookstore.utility.JWTUtility;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;
	@Autowired
	private JWTUtility jwtUtility;
	

	public User signup(SignUpUserDto dto) {

		User u = new User();
		u.setUserName(dto.getUserName());
		u.setGender(dto.getGender());
		u.setEmailId(dto.getEmailId());
		u.setPhoneNo(dto.getPhoneNo());
		u.setPassword(dto.getPassword());

		loginRepository.save(u);

		return u;
	}

	public Map<String, Object> login(LoginUserDto userdto) {
		User u = loginRepository.findByEmailIdIgnoreCaseAndPassword(userdto.getEmailId(), userdto.getPassword());
		if (u != null) {
			ResponseUser resUser = new ResponseUser();
			resUser.setId(u.getId());
			resUser.setUserName(u.getUserName());
			resUser.setGender(u.getGender());
			resUser.setPhoneNo(u.getPhoneNo());
			resUser.setEmailId(u.getEmailId());

			String token = jwtUtility.generateToken(u);
			Map<String, Object> res = new HashMap<>();
			res.put("user", resUser);
			res.put("token", token);

			return res;
		}
		return new HashMap<>();
	}

	public LoginRepository getLoginRepository() {
		return loginRepository;
	}

	public void setLoginRepository(LoginRepository loginRepository) {
		this.loginRepository = loginRepository;
	}

}
