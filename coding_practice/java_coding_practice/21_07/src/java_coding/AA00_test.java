package java_coding;

import java.util.*;

//bfs(너비 우선 탐색)
public class AA00_test {

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
