package com.springboot.learnspringboot.controller;

import com.springboot.learnspringboot.common.Course;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class CourseController {

    // CMD:: curl http://localhost:8080/courses
    // RES:: [{"id":1,"name":"Learn AWS","author":"in28Mins"},{"id":2,"name":"Learn DevOps","author":"in28Mins"}]
    @RequestMapping("/courses")
    public List<Course> retrieveAllCourses() {
        return Arrays.asList(
                new Course(1, "Learn AWS", "in28Mins"),
                new Course(2, "Learn DevOps", "in28Mins")
        );
    }
}
