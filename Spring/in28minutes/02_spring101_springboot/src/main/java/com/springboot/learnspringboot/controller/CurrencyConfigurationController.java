package com.springboot.learnspringboot.controller;

import com.springboot.learnspringboot.CurrencyServiceConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CurrencyConfigurationController {

    @Autowired
    private CurrencyServiceConfiguration configuration;

    // CMD:: curl http://localhost:8080/courses
    // RES:: [{"id":1,"name":"Learn AWS","author":"in28Mins"},{"id":2,"name":"Learn DevOps","author":"in28Mins"}]
    @RequestMapping("/currency-configuration")
    public CurrencyServiceConfiguration retrieveAllCourses() {
        return configuration;
    }
}
