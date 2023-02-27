package com.joana.studentsystem.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.joana.studentsystem.models.Activity;

public interface ActivityRepository extends CrudRepository<Activity,Long>{
    List<Activity> findAll();
}
