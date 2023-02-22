package com.joana.studentsystem.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joana.studentsystem.models.Student;
import com.joana.studentsystem.services.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
  @Autowired
  private StudentService studentService;

  @PostMapping("/add")
  public void add(@RequestBody Student student){
    studentService.saveStudent(student);
  }

  @GetMapping("/getAll")
  public List<Student> getAllStudents(){
    return studentService.getAllStudents();
  }
  
}
