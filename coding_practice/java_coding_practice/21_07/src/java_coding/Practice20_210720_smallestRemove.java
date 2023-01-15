package java_coding;

import java.util.*;

//가장 작은수 제거:  https://programmers.co.kr/learn/courses/30/lessons/12935 
public class Practice20_210720_smallestRemove {
	public int[] solution(int[] arr) {
		if(arr.length <= 1) {
			int [] answer= {-1};
			return answer;
		}
		int small = arr[0];
		for (int i = 1; i < arr.length; i++) {
			small = (small<arr[i])?small:arr[i];
		}		
		
		int[] answer = new int [arr.length-1];
		int index = 0;
		for (int j = 0; j < arr.length; j++) {
			if(arr[j]==small) {
				continue;
			}
			answer[index++]=arr[j];
		}
		return answer;
	}

	public static void main(String[] args) {
		int [] seoul = {1,2,3,4,5};
		Practice20_210720_smallestRemove test = new Practice20_210720_smallestRemove();
		int [] ans = test.solution(seoul);
		System.out.println("답안: " + ans);
		for (int i = 0; i < ans.length; i++) {
			System.out.println(ans[i]);
		}
	}
} // end
