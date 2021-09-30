package com.exam.ExamManegmentSystem.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class ResorceNotFoundException extends RuntimeException {
  private static final long serilVersionUID=1L;
	public ResorceNotFoundException(String message)
{
	super(message);
}
}
