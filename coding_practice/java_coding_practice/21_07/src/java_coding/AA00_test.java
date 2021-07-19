package java_coding;

import java.util.*;

//수포자 문제: https://programmers.co.kr/learn/courses/30/lessons/42840
public class AA00_test {
	public String solution(int a, int b) {
		 String answer = "";
         
		 String [] day ={"SUN","MON","TUE","WED","THU","FRI","SAT"};
		 String [] yearDay=new String [366];
		 int [] monthDay= {31,29,31,30,31,30,31,31,30,31,30,31};
		 int wantDay =0;
		 for (int i = 0; i < monthDay.length; i++) {
			yearDay[i]=day[(i+5)%7];
		}
		 
		 for (int j = 0; j <= yearDay.length; j++) {
			
		}
		
		 
         return answer;
    }
	public static void main(String[] args) {
		int a = 5;
		int b = 24;
		AA00_test test = new AA00_test();
		String ans = test.solution(a,b);
		System.out.println("답안: "+ans);
	}
} //end
