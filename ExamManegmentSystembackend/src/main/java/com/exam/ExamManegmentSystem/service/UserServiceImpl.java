package com.exam.ExamManegmentSystem.service;

import com.exam.ExamManegmentSystem.exception.ResorceNotFoundException;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.exam.ExamManegmentSystem.model.User;
import com.exam.ExamManegmentSystem.repository.LoginRepository;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	// dependency
	@Autowired 
	private LoginRepository userRepo;
	
	@Override
	public User authenticateUser(String email, String pwd) {

		return userRepo.findByEmailIdAndPassword(email, pwd)
				.orElseThrow(() -> new ResorceNotFoundException("Invalid Authentication"));
	}
}
/*package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.UserRepository;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;

	@Override
	public User registerStudentUser(int userId) {
		User user = new User();
		user.setId(userId);
		user.setPassword("student");// hard coding pwd here : to be changed at the
		// actual student login : in front end
		user.setRole(Role.STUDENT);
		userRepo.save(user);
		return user;
	}

	@Override
	public User authenticateUser(int userId, String pwd) {

		return userRepo.findByIdAndPassword(userId, pwd)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Authentication"));
	}

}
*/