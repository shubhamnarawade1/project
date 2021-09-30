package com.exam.ExamManegmentSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.ExamManegmentSystem.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmailIdAndPassword(String emailId, String password);	
}

