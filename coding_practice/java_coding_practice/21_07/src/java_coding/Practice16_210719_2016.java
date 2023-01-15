package java_coding;

import java.util.*;

//2016 x�� x�� ã��: https://programmers.co.kr/learn/courses/30/lessons/12901 && ������� ��Ǯ����. 
public class Practice16_210719_2016 {
	public String solution(int a, int b) {
		 String answer = "";
         
         String[] day = {"SUN","MON","TUE","WED","THU","FRI","SAT"};
         String[] year = new String[366];
         int[] month = {31,29,31,30,31,30,31,31,30,31,30,31};
         int want_day = 0;
         
         //1�� 1���� �ݿ����̱⿡ (i+5)�� �Ͽ� �ݿ����� �������� �������.
         for(int i=0; i<year.length; i++) {
             year[i] =  day[(i+5)%7];
         }
         
         for(int i=0; i<a-1; i++) {
             want_day += month[i]; 
         }
         
         //1�� 1�ϵ� �Ϸ� ���� ������ �Ǿ -1�� �ؾ��Ѵ�!
         want_day += b-1;
         
         answer = year[want_day];
         
         return answer;
    }
	public static void main(String[] args) {
		int a = 5;
		int b = 24;
		Practice16_210719_2016 test = new Practice16_210719_2016();
		String ans = test.solution(a,b);
		System.out.println("���: "+ans);
	}
} //end
