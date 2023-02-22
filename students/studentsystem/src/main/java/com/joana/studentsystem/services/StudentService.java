package com.joana.studentsystem.services;


import java.util.List;

import com.joana.studentsystem.models.Student;


public interface StudentService {
  public Student saveStudent(Student student);
  public List<Student> getAllStudents();
}
