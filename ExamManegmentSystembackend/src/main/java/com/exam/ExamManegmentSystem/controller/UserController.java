package com.exam.ExamManegmentSystem.controller;

import java.util.List;


import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.exam.ExamManegmentSystem.exception.ResorceNotFoundException;
import com.exam.ExamManegmentSystem.model.User;
import com.exam.ExamManegmentSystem.repository.LoginRepository;
import com.exam.ExamManegmentSystem.repository.UserRepository;
import com.exam.ExamManegmentSystem.exception.ResorceNotFoundException;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("api/v1/")
public class UserController {
	@Autowired
private UserRepository userRepository;
	
	
	@GetMapping("/user")
	public List<User> getAllUser(){
	return userRepository.findAll();
	}
	
	@PostMapping("/register")
	public User Register(@RequestBody User user)
	{
		return userRepository.save(user);
	}
	
	@PostMapping("/login")
	public User authenticateUser(@RequestBody User u)
	{
		System.out.println("in auth user "+u);
		return userRepository.findByEmailIdAndPassword(u.getEmailId(), u.getPassword());
	}

}
