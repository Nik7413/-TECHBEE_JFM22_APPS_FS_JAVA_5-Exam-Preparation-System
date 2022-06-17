package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
@Service
public class StudentService {

	@Autowired
	private StudentRepository repo;
//	PasswordEncoder encode;
	
//	public StudentService(StudentRepository repo) {
//		this.repo = repo;
//		this.encode = new BCryptPasswordEncoder();
//		
//	}
	public Student saveUser(Student student) {
//		String encodedPassword = this.encode.encode(student.getPassword());
//		student.setPassword(encodedPassword);
		return repo.save(student);
	}
	
	public Student fetchUserByEmailid(String email) {
		return repo.findAllByEmailid(email);
	}
	public Student fetchUserByEmailidAndPassword(String email,String password) {
		return repo.findAllByEmailidAndPassword(email, password);
	}
}
