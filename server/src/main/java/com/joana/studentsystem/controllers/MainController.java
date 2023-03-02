package com.joana.studentsystem.controllers;

import java.util.List;

import javax.servlet.Registration;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.joana.studentsystem.models.Activity;
import com.joana.studentsystem.models.LoginUser;
import com.joana.studentsystem.models.User;
import com.joana.studentsystem.services.ActivityService;
import com.joana.studentsystem.services.UserService;

@RestController
@CrossOrigin
public class MainController {

    @Autowired
    UserService userService;

    // Creates a new User
    @PostMapping("/register")
    public void register(@RequestBody User user, BindingResult result, HttpSession session) {
        User newUser = userService.register(user);
    }

    @GetMapping("/campers/all")
    public List<User> getAllCampers() {
        List<User> campers = userService.getUsersByRole();

        return campers;
    }

    @PostMapping("/campers/{email}")
    public User updateCamper(@RequestBody User user, @PathVariable("email")String email) {
        User camper = userService.findByEmail(email);

        camper.setCity(user.getCity());
        camper.setState(user.getState());
        camper.setFun_fact(user.getFun_fact());
        camper.setRoles(user.getRoles());
        User newCamper  = userService.updateCamper(camper);

        return newCamper;
    }

    // Controls returning users and logs them in
    // @PostMapping("/login")
    // public String login(@RequestBody LoginUser user, BindingResult result) {

    // User user1 = userService.login(user,result);

    // if(result.hasErrors()) {
    // return "redirect:/login";
    // }

    // // session.setAttribute("userId", user.getId());

    // return "redirect:/landing";
    // }

    // @GetMapping("/logout")
    // public String logout(HttpSession session) {
    // session.invalidate();
    // return "redirect:/";
    // }

}
