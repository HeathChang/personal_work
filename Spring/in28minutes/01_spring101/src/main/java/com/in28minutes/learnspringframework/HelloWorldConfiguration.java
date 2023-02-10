package com.in28minutes.learnspringframework;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// record:: to eliminate the verbosity in creating Java beans (such as getters, setters etc), use record
record Person(String name, int age, Address address) {

}

record Address(String firstLine, String city){

}


@Configuration
public class HelloWorldConfiguration {

    @Bean //indicates that a method produces a bean to be managed by the Spring Container.
    public String name() {
        return "Hello World";
    }

    @Bean
    public int age() {
        return 31;
    }


    @Bean
    public Person person() {
        return  new Person("hello", 20,  new Address("Gangnamgu", "Seoul"));
    }

    @Bean
    public Person person2MethodCall() {
        return new Person(name(), age(),  address());
    }

    @Bean
    public Person person3Parameters(String name, int age, Address address3) { //name, age, address2
        return new Person(name, age, address3);
    }

    @Bean("address2")
    public Address address(){
        return new Address("Gangnamgu", "Seoul");
    }

    @Bean("address3")
    public Address address3(){
        return new Address("NY", "USA");
    }

}
