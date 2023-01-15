package java_coding;

import java.util.*;

//소수 갯수 구하기
public class Practice14_210717_prime {
    	    public int solution(int[] nums) {
    	        int answer = 0;
    	        
    	        for (int i = 0; i < nums.length-2; i++) {
    	            for (int j = i+1; j < nums.length-1; j++) {
    	                for (int k = j+1; k < nums.length; k++) {
    	                    int num = nums[i] + nums[j] + nums[k];
    	                    boolean check = true;
    	                    
    	                    for (int l = 2; l < num; l++) {
    	                        if (num % l == 0) {
    	                            check = false;
    	                            break;
    	                        }
    	                    }
    	                    
    	                    if (check) answer++;
    	                }
    	            }
    	        }

    	        return answer;
    	    }
    	
	public static void main(String[] args) {
		int[] a = {1,2,3,4,5,6};
		Practice14_210717_prime test = new Practice14_210717_prime();
		int ans = test.solution(a);
		System.out.println("답: " + ans);
	}
} //end
