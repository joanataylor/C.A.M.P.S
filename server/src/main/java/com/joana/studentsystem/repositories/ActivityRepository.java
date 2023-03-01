package com.joana.studentsystem.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.joana.studentsystem.models.Activity;

public interface ActivityRepository extends CrudRepository<Activity,Long>{
    List<Activity> findAll();
    Optional<Activity> findUserByDate(String date);
}
