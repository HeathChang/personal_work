package java_coding;

import java.util.*;

//가운데 글자 뽑아내기: https://programmers.co.kr/learn/courses/30/lessons/12903
public class AA00_test {
	public String solution(String s) {
		String answer = "";
		String[] strArray = s.split("");

		if ((strArray.length % 2) == 1) {
			answer = strArray[strArray.length / 2];
		} else {
			answer = strArray[(strArray.length / 2) - 1] + strArray[(strArray.length / 2)];

		}

		return answer;
	}

	public static void main(String[] args) {
		String a = "abcde";
		AA00_test test = new AA00_test();
		String ans = test.solution(a);
		System.out.println("답안: " + ans);
	}
} // end
