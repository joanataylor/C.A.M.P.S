package com.joana.studentsystem.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.joana.studentsystem.models.User;



@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findByEmail(String email);
    // SELECT * FROM camps.users WHERE roles = "camper";
    // @Query("SELECT * FROM camps.users WHERE roles = camper")
    // public Iterable<User> findByCategory(String categoryName);
    // @Query("select u from users where u.roles:c")
    // public List<User> findByRoles(@Param("c") String roles);
    public List<User> findByRoles(String role);
}
