package com.joana.studentsystem.services;

import java.util.List;

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

    public List<Activity> getall() {
        return activityRepository.findAll();
    }

    public Activity oneActivity(Long Id) {
        return activityRepository.findById(Id).orElse(null);
    }

    public Activity findByDate(String date) {
        return activityRepository.findUserByDate(date).orElse(null);
    }

    public void delete(Long id) {
        activityRepository.deleteById(id);
    }
}
