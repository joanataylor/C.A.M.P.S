package com.joana.studentsystem.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "activities")
public class Activity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @NotEmpty(message = "Name is required!")
    // @Size(min = 3, max = 255, message = "Name must be between 3 and 255 characters")
    private String name;

    // @NotEmpty(message = "Duration is required!")
    // @Size(min = 3, max = 255, message = "Duration must be between 3 and 255 characters")
    private String duration;

    // @NotEmpty(message = "Date is required!")
    private String date;

    // @NotEmpty(message = "description is required!")
    // @Size(min = 5, message = "Description must be at least 5 characters")
    private String description;

    // @NotEmpty(message = "Recommended Items is required!")
    // @Size(min = 5, message = "Recommended Items must be at least 5 characters")
    private String items;

    // @NotEmpty(message = "Location is required!")
    // @Size(min = 5,max = 255, message = "Location must be between 3 and 255 characters")
    private String location;

    @NotEmpty(message = "Image is required!")
    @Size(min = 5, message = "Image must be at least 5 characters")
    private String image;

    @Column(updatable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updatedAt;


    public Activity() {
    }

    public Activity(Long id, String name, String duration, String date, String description, String items, String location, String image, Date createdAt, Date updatedAt) {
        this.id = id;
        this.name = name;
        this.duration = duration;
        this.date = date;
        this.description = description;
        this.items = items;
        this.location = location;
        this.image = image;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDuration() {
        return this.duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getItems() {
        return this.items;
    }

    public void setItems(String items) {
        this.items = items;
    }

    public String getLocation() {
        return this.location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Date getCreatedAt() {
        return this.createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return this.updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

}
