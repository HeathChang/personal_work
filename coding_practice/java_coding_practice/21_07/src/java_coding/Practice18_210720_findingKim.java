package java_coding;

import java.util.*;

//Ư�� ���� ã��: https://programmers.co.kr/learn/courses/30/lessons/12919 
public class Practice18_210720_findingKim {
	public String solution(String[] seoul) {
		int place =0;
		for (int i = 0; i < seoul.length; i++) {
			if (seoul[i].equals("Kim")) {
				System.out.println(i);
				 place = i;
				 break;
			}//end if
		}//end for
		String answer = "�輭���� " + place + "�� �ִ�";
		return answer;

	}

	public static void main(String[] args) {
		String[] seoul = { "Jane", "Kim" };
		Practice18_210720_findingKim test = new Practice18_210720_findingKim();
		String ans = test.solution(seoul);
		System.out.println("���: " + ans);
	}
} // end
