package com.joana.studentsystem.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joana.studentsystem.models.Activity;
import com.joana.studentsystem.services.ActivityService;


@RestController
@CrossOrigin
public class ActivityController {
    
    @Autowired ActivityService activityService;

    // Getting activity by data
    @GetMapping("/activity/current/{date}")
    public Activity getActivityByDate(@PathVariable("date") String date) {
        Activity activity = activityService.findByDate(date);
        return activity;
    }

    // Getting activity by id 
    @GetMapping("/activity/{id}")
    public Activity getOneActivity(@PathVariable("id") Long id) {
        Activity activity = activityService.oneActivity(id);
        return activity;
    }

    // Getting all activities 
    @GetMapping("/activity/all")
    public List<Activity> getAllActivities() {
        List<Activity> activities = activityService.getall();

        return activities;
    }
    // Create new activity
    @PostMapping("/activity/new")
    public void newActivity(@RequestBody Activity activity, BindingResult result, HttpSession session) {
        Activity newActivity = activityService.create(activity);
    }

    // Edit activity
    @PostMapping("/activity/edit/{id}")
    public void editActivity(@RequestBody Activity newActivity, @PathVariable("id")Long id) {
        Activity activity = activityService.oneActivity(id);
        activity.setDate(newActivity.getDate());
        activity.setDuration(newActivity.getDuration());
        activity.setDescription(newActivity.getDescription());
        activity.setImage(newActivity.getImage());
        activity.setName(newActivity.getName());
        activity.setLocation(newActivity.getLocation());
        activity.setItems(newActivity.getItems());

        activityService.create(activity);
    }

    // Delete Activity
    @PostMapping("/activity/delete/{id}")
    public void deleteActivity(@PathVariable("id")Long id){
        activityService.delete(id);
    }


}
