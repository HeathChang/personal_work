package java_coding;

import java.util.*;

//특정 문자 찾기: https://programmers.co.kr/learn/courses/30/lessons/12919 
public class AA00_test {
	public String solution(String[] seoul) {
		int place =0;
		for (int i = 0; i < seoul.length; i++) {
			if (seoul[i].equals("Kim")) {
				System.out.println(i);
				 place = i;
				 break; 
			}//end if
		}//end for
		String answer = "김서방은 " + place + "에 있다";
		return answer;

	}

	public static void main(String[] args) {
		String[] seoul = { "Jane", "Kim" };
		AA00_test test = new AA00_test();
		String ans = test.solution(seoul);
		System.out.println("답안: " + ans);
	}
} // end
