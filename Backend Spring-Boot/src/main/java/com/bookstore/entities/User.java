package com.bookstore.entities;

import java.time.LocalDateTime;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(nullable = false)
	private String userName;
	@Column(nullable = false)
	private String gender;
	@Column(nullable = false, unique = true)
	private Long phoneNo;
	@Column(nullable = false, unique = true)
	private String emailId;
	@Column(nullable = false)
	private String password;
	private Boolean isActive;
	private Integer loginCount;
	private String ssoType;
	@UpdateTimestamp
	@JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss.SSS")
	private LocalDateTime lastLogin;
	@CreationTimestamp
	@JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss.SSS")
	@Column(updatable = false)
	private LocalDateTime createTime;
	@UpdateTimestamp
	@JsonFormat(pattern = "yyyy/MM/dd HH:mm:ss.SSS")
	private LocalDateTime updateTime;

	public User() {

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Long getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public Integer getLoginCount() {
		return loginCount;
	}

	public void setLoginCount(Integer loginCount) {
		this.loginCount = loginCount;
	}

	public String getSsoType() {
		return ssoType;
	}

	public void setSsoType(String ssoType) {
		this.ssoType = ssoType;
	}

	public LocalDateTime getLastLogin() {
		return lastLogin;
	}

	public void setLastLogin(LocalDateTime lastLogin) {
		this.lastLogin = lastLogin;
	}

	public LocalDateTime getCreateTime() {
		return createTime;
	}

	public void setCreateTime(LocalDateTime createTime) {
		this.createTime = createTime;
	}

	public LocalDateTime getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(LocalDateTime updateTime) {
		this.updateTime = updateTime;
	}

}
