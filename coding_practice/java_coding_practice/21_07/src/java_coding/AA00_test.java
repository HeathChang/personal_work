package java_coding;

import java.util.*;

//가장 작은수 제거:  https://programmers.co.kr/learn/courses/30/lessons/12935 
public class AA00_test {
    public int solution(String numbers) {
        int answer = 0;
        String[] arr=numbers.split("");
        int [] arr2= new int [arr.length];
        for (int i = 0; i < arr.length; i++) {
        	arr2[i]=Integer.parseInt(arr[i]);
        }
        
        
        
        
        
        return answer;
    
	}

	public static void main(String[] args) {
		String seoul = "011";
		AA00_test test = new AA00_test();
		int ans = test.solution(seoul);
		System.out.println("답안: " + ans);
	}
} // end
