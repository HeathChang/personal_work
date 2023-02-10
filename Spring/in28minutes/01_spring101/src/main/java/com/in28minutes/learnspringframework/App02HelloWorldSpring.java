package com.in28minutes.learnspringframework;

import com.in28minutes.learnspringframework.game.GameRunner;
import com.in28minutes.learnspringframework.game.PacMan;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App02HelloWorldSpring {
    public static void main(String[] args) {
        // Launch a Spring Context
        var context = new AnnotationConfigApplicationContext(HelloWorldConfiguration.class);
        // Configure the things that we want Spring to manage. - @Configuration
        // creating HelloWorldConfiguration
        // name - @Bean

        // Retrieving Beans manged by spring
        System.out.println(context.getBean("name"));
        System.out.println(context.getBean("age"));
        System.out.println(context.getBean("person"));
        System.out.println(context.getBean("person2MethodCall"));
        System.out.println(context.getBean("address2"));
        System.out.println("person3Parameters::"+context.getBean("person3Parameters"));
        // 2 matching Beans::
//        System.out.println(context.getBean(Person.class));
//        System.out.println(context.getBean(Address.class));
    }
}
