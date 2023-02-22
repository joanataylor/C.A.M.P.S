package com.joana.studentsystem.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.joana.studentsystem.models.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
  
}
