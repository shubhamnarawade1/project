package com.exam.ExamManegmentSystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "answer")
public class Answer {
	@Id
	private String mcqid;
	
	/*
	 @ManyToOne
    @JoinColumn(name="uid", nullable=false)
    private User uid;
	 */
	private String answer;
	
	public Answer() {
		// TODO Auto-generated constructor stub
	}
	
	public Answer(String mcqid, String answer) {
		super();
		this.mcqid = mcqid;
		this.answer = answer;
	}
	public String getMcqid() {
		return mcqid;
	}
	public void setMcqid(String mcqid) {
		this.mcqid = mcqid;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	@Override
	public String toString() {
		return "Answer [id=" + mcqid + ", answers=" + answer + "]";
	}
	
}
