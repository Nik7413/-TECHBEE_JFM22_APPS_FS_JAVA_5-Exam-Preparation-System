package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.service.StudentService;


@RestController
@CrossOrigin(origins="http://localhost:4200")

public class StudentController {

	@Autowired
	private StudentService service;
	@PostMapping("/registeruser")
	public Student registerStudent(@RequestBody Student student) throws Exception {
        String tempEmailId=student.getEmailid();
        if(tempEmailId != null) {
        	Student sobject=service.fetchUserByEmailid(tempEmailId);    
        	if(sobject != null) {
        		throw new Exception("User with " +tempEmailId+" is already existing");       
        	}
        }
        String password = student.getPassword();
        student.setPassword("ecyt"+password+"derp");
		Student sobject=null;
		sobject=service.saveUser(student);
		return sobject;
	}
	@PostMapping("/login")
	public Student loginStudent(@RequestBody Student student) throws Exception{
		String tempEmailId = student.getEmailid();
		String password = "ecyt"+student.getPassword()+"derp";
		Student sobject = null;
		if(tempEmailId != null && password != null) {
			sobject = service.fetchUserByEmailidAndPassword(tempEmailId, password);
			if(sobject == null) {
				throw new Exception("Incorrect Username or Password");
			}
		}
		return sobject;
	}
	
	@PutMapping("/name/{emailid}")
	public ResponseEntity<Student> updatename(@PathVariable String emailid,@RequestBody Student student){
		Student stu=service.fetchUserByEmailid(emailid);
		stu.setName(student.getName());
		stu.setMobilenumber(stu.getMobilenumber());
		stu.setPassword(stu.getPassword());
		Student updateStudent=service.saveUser(stu);
		return ResponseEntity.ok(updateStudent);
		
	}
	
	@PutMapping("/password/{emailid}")
	public ResponseEntity<Student> updatepassword(@PathVariable String emailid,@RequestBody Student student){
		Student stu=service.fetchUserByEmailid(emailid);
		stu.setName(stu.getName());
		stu.setMobilenumber(stu.getMobilenumber());
		stu.setPassword("ecyt"+student.getPassword()+"derp");
		Student updateStudent=service.saveUser(stu);
		return ResponseEntity.ok(updateStudent);
		
	}
	
	@PutMapping("/mobile/{emailid}")
	public ResponseEntity<Student> updatemobile(@PathVariable String emailid,@RequestBody Student student){
		Student stu=service.fetchUserByEmailid(emailid);
		stu.setName(stu.getName());
		stu.setMobilenumber(student.getMobilenumber());
		stu.setPassword(stu.getPassword());
		Student updateStudent=service.saveUser(stu);
		return ResponseEntity.ok(updateStudent);
		
	}
}
