package com.exam.ExamManegmentSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.ExamManegmentSystem.model.Answer;
import com.exam.ExamManegmentSystem.model.Mcq;


@Repository
public interface McqRepository extends JpaRepository<Mcq, Long>{
	
}
