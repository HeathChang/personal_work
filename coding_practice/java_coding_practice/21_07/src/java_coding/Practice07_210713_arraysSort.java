package java_coding;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;



//배열 입력받고, 정렬하기 → Arrays.sort();
public class Practice07_210713_arraysSort {
	public static void main(String[] args) throws IOException{
		BufferedReader bf= new BufferedReader(new InputStreamReader(System.in));
		System.out.println("배열의 크기 입력: ");
		int arrSize=Integer.parseInt(bf.readLine());
		Integer [] arr = new Integer[arrSize];
		
		System.out.print("원 배열: ");
		for (int i = 0; i < arrSize ; i++) {
			arr[i] =(int) (Math.random()*10);
			System.out.print(arr[i]);
		}
		
		//오르참순 정렬
		System.out.println();
		System.out.print("오름차순: ");
		Arrays.sort(arr);

		for (int i = 0; i < arrSize ; i++) {
			System.out.print(arr[i]);
		}
		
		//내림차순 정렬
        Arrays.sort(arr,Collections.reverseOrder());
        System.out.println();
		System.out.print("내림차순: ");
		for (int i = 0; i < arrSize ; i++) {
			System.out.print(arr[i]);
		}
		
		
	}//end main

}
