package com.in28minutes.learnspringframework.game;

import com.in28minutes.learnspringframework.GamingConsole;

public class GameRunner {
    GamingConsole game;

    // 생성자:: 객체가 생성될때, 객체의 초기화를 위해 실행되는 메서드
    public GameRunner(GamingConsole game) {
        this.game = game;
    }


    public void run() {
        System.out.println("Now Game Running..");
        System.out.println("Now Game Running.." + game);

        game.up();
        game.left();
        game.right();
        game.left();
    }
}
