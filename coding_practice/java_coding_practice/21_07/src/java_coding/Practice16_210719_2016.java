package java_coding;

import java.util.*;

//2016 x월 x일 찾기: https://programmers.co.kr/learn/courses/30/lessons/12901 && 어려워서 못풀었음. 
public class Practice16_210719_2016 {
	public String solution(int a, int b) {
		 String answer = "";
         
         String[] day = {"SUN","MON","TUE","WED","THU","FRI","SAT"};
         String[] year = new String[366];
         int[] month = {31,29,31,30,31,30,31,31,30,31,30,31};
         int want_day = 0;
         
         //1월 1일이 금요일이기에 (i+5)를 하여 금요일을 시작으로 만들었다.
         for(int i=0; i<year.length; i++) {
             year[i] =  day[(i+5)%7];
         }
         
         for(int i=0; i<a-1; i++) {
             want_day += month[i]; 
         }
         
         //1월 1일도 하루 지난 것으로 되어서 -1을 해야한다!
         want_day += b-1;
         
         answer = year[want_day];
         
         return answer;
    }
	public static void main(String[] args) {
		int a = 5;
		int b = 24;
		Practice16_210719_2016 test = new Practice16_210719_2016();
		String ans = test.solution(a,b);
		System.out.println("답안: "+ans);
	}
} //end
