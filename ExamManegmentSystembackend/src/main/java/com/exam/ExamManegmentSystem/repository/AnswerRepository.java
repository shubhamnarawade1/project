package com.exam.ExamManegmentSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exam.ExamManegmentSystem.model.Answer;
import com.exam.ExamManegmentSystem.model.Mcq;

public interface AnswerRepository extends JpaRepository<Answer, String> {

}
