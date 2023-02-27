package com.joana.studentsystem.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joana.studentsystem.models.Activity;
import com.joana.studentsystem.repositories.ActivityRepository;

@Service
public class ActivityService {

    @Autowired 
    private ActivityRepository activityRepository;

    public Activity create(Activity activity) {
        return activityRepository.save(activity);
    }
    
}
