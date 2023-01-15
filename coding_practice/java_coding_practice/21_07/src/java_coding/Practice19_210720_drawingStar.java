package java_coding;

import java.util.*;

//값 입력받아서 별그리기: https://programmers.co.kr/learn/courses/30/lessons/12969#
public class Practice19_210720_drawingStar {
		 public static void main(String[] args) {
		        Scanner sc = new Scanner(System.in);
		        int a = sc.nextInt();
		        int b = sc.nextInt();
		        
		        for(int i=0 ; i < b ; i++){
		            for (int j = 0 ; j < a ; j++){
		              System.out.print("*");
		            }
		            System.out.println();
		        }
		    }

	}
