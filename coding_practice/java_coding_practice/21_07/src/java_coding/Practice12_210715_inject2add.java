package java_coding;

import java.util.*;

//https://programmers.co.kr/learn/courses/30/lessons/68644
public class Practice12_210715_inject2add {

	class Solution {
	    public int[] solution(int[] numbers) {
	        int[] answer = {};
            ArrayList <Integer> list = new ArrayList<Integer>();
	        int sum;
	        for(int i = 0 ; i < numbers.length-1 ; i++){
	            for(int j = i+1 ; j < numbers.length ; j++){
	                sum=numbers[i]+numbers [j];
	                if(list.contains(sum)==false){
	                    list.add(sum);
	                }
	            }
	        }
            Collections.sort(list);
            answer = new int[list.size()];
            for(int i = 0 ; i<list.size(); i++){
                answer[i] = list.get(i);
            }
            
	        return answer;

	    }

	} //end


}
