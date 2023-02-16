package com.example.learnjpaandhibernate.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CourseJdbcRepository {
    @Autowired
    private JdbcTemplate springJdbcTemplate;

    private static String Insert_Query = """
            insert into course (id, name,author) values( 1 , 'Learn AWS', 'Heath');
            """;


    public void insert() {
        springJdbcTemplate.update(Insert_Query);
    }
}
