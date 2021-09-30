package com.exam.ExamManegmentSystem.service;

import com.exam.ExamManegmentSystem.model.User;
import com.exam.ExamManegmentSystem.repository.LoginRepository;

public interface IUserService {
	// add a method for user validation
	
	//User validateUser(String email, String pass);
	User authenticateUser(String email,String pwd);

}
