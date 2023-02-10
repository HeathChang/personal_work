package com.in28minutes.learnspringframework;

import com.in28minutes.learnspringframework.game.GameRunner;
import com.in28minutes.learnspringframework.game.PacMan;

public class App01GamingBasicJava {
    public static void main(String[] args) {
//        var game = new MarioGame();
        var game = new PacMan();
        var gameRunner = new GameRunner(game);
        // 여기서의 객체 생성을 Spring Bean을 통해 진행.
        gameRunner.run();
    }
}
