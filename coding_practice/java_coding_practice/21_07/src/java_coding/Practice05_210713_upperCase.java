package java_coding;

import java.util.Scanner;

//지정한 숫자만 대문자로 바꾸기
public class Practice05_210713_upperCase {
	    public int solution(int left, int right) {
	        int answer = 0;
	        for(int i = left ; i<=right ; i++){
		       int process = 0;
	           for(int j = 1 ; j <= i ; j++){ 
	               if(i % j == 0 ){
	                process ++;
	               } 
	           } //end j for
	            
	            if(process % 2 == 0){
	                answer= answer + i;
	                System.out.println("더하기: "+answer);

	            }else {
	                answer= answer - i;
	                System.out.println("빼기: "+answer);
	            }
	         
	        }
	        
	        return answer;
	    }
	

	public static void main(String[] args) {
		Practice05_210713_upperCase test = new Practice05_210713_upperCase();
		int ans = test.solution(13,17);
		System.out.println("답은: "+ans);
	}

}
