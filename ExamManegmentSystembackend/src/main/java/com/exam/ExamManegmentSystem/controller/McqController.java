package com.exam.ExamManegmentSystem.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.ExamManegmentSystem.model.Answer;
import com.exam.ExamManegmentSystem.model.Mcq;
import com.exam.ExamManegmentSystem.model.User;
import com.exam.ExamManegmentSystem.repository.AnswerRepository;
import com.exam.ExamManegmentSystem.repository.McqRepository;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("api/v1/")
public class McqController {
	
	@Autowired
	private McqRepository mcqRepository;
	@Autowired
	private AnswerRepository ansRepository;
	
	@GetMapping("/mcq")
	public List<Mcq> getAllMcqs(){
	return mcqRepository.findAll();
	}
	
	@PostMapping("/answer")
	public List<Answer> getAllAnswer(@RequestBody List<Answer> a)
	{
			ansRepository.saveAll(a);
		return a;
	}
}
