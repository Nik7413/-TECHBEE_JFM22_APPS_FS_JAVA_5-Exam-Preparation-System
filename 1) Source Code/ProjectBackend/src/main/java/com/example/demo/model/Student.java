package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Student{
	
private	String name;
private	long mobilenumber;
	@Id
private	String emailid;
private	String password;
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(String name, long mobilenumber, String emailid, String password) {
		super();
		this.name = name;
		this.mobilenumber = mobilenumber;
		this.emailid = emailid;
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(long mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
