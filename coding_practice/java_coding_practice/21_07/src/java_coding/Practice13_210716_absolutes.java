package java_coding;

import java.util.*;

//https://programmers.co.kr/learn/courses/30/lessons/76501 
public class Practice13_210716_absolutes {
    public int solution(int[] absolutes, boolean[] signs) {
        int answer = 0;
        int [] result = new int [absolutes.length];
        
        for(int i = 0; i< absolutes.length; i++){
            if(signs[i]==true){
                result[i]=absolutes[i]*1;
                System.out.println(i+"번째: "+result[i]);
            }else{
                result[i]=absolutes[i]*-1;
                System.out.println(i+"번째: "+result[i]);
            }
         } //end for
        for(int i = 0 ; i < result.length;i++){
            answer+=result[i];
        }    
            
        return answer;

    }
	public static void main(String[] args) {
		int[] a = {4,7,12 };
		boolean [] b = {true,false,true};
		Practice13_210716_absolutes test = new Practice13_210716_absolutes();
		int ans = test.solution(a,b);
		System.out.println("답: " + ans);
	}
} //end
