package com.joana.studentsystem.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.joana.studentsystem.models.LoginUser;
import com.joana.studentsystem.models.User;
import com.joana.studentsystem.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User findUserById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        return user;
    }

    public User findByEmail(String email){
        return userRepository.findByEmail(email).orElse(null);
    }

    // TO-DO: Write register and login methods!
    public User register(User newUser) {
        // Optional<User> user = userRepository.findByEmail(newUser.getEmail());
        // if (user.isPresent()) {
        //     result.rejectValue("email", "Email", "Email already registered");
        // }
        // if (!newUser.getPassword().equals(newUser.getConfirm())) {
        //     result.rejectValue("confirm", "Confirm", "Passwords do not match");
        // }
        // if (result.hasErrors()) {
        //     return null;
        // }

        String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
        newUser.setPassword(hashed);

        return userRepository.save(newUser);
    }

    public User login(LoginUser newLoginObject, BindingResult result) {
        User loginUser = userRepository.findByEmail(newLoginObject.getEmail()).orElse(null);

        if (loginUser == null) {
            result.rejectValue("email", "noEmail", "Invalid Login!");
        }

        if (loginUser != null) {

            if (!BCrypt.checkpw(newLoginObject.getPassword(), loginUser.getPassword())) {
                result.rejectValue("password", "matches", "Invalid Login!");
            }
            if (result.hasErrors()) {
                return null;
            }
        }
        return loginUser;
    }

    public List<User> getUsersByRole() {
        return userRepository.findByRoles("camper");
    }

    public User updateCamper(User camper) {
        return userRepository.save(camper);
    }

}
