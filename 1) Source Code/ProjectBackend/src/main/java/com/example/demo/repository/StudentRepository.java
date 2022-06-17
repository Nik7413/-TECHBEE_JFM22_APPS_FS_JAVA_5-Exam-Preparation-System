package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Student;

public interface StudentRepository extends JpaRepository<Student,String> {

	
	public Student findAllByEmailid(String email);
	public Student findAllByEmailidAndPassword(String email,String password);
}
