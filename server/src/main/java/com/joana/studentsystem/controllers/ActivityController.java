package com.joana.studentsystem.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joana.studentsystem.services.ActivityService;


@RestController
@RequestMapping("/activity")
@CrossOrigin
public class ActivityController {
    
    @Autowired ActivityService activityService;


}
