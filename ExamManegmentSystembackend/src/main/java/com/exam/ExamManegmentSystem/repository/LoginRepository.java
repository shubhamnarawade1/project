package com.exam.ExamManegmentSystem.repository;

import com.exam.ExamManegmentSystem.model.User;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface LoginRepository extends JpaRepository<User, String> {
	Optional<User> findByEmailIdAndPassword(String email,String password);
}
