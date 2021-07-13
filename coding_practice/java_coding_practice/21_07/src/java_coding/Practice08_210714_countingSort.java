package java_coding;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;



//배열 입력받고, 정렬하기 → 카운팅 정렬
public class Practice08_210714_countingSort {
	public static void main(String[] args) throws IOException{
		BufferedReader bf= new BufferedReader(new InputStreamReader(System.in));
		System.out.println("배열의 크기 입력: ");
		int [] arr = new int[Integer.parseInt(bf.readLine())];
		
		
		System.out.println("사용할 수의 범위 (1~n): ");
		int n=Integer.parseInt(bf.readLine());
		
		System.out.print("원 배열: ");
		for (int i = 0; i < arr.length ; i++) {
			arr[i] =(int) (Math.random()*n);
			System.out.print(arr[i]);
		}
		System.out.println();
		//////////////////
		int [] counting = new int[n]; // 1~n까지 범위를 가진 배열
		int [] result = new int [arr.length]; // 배열 정렬 결과
		
		
		//과정 1: arr의 value값을 index로 하는 counting [] 값 1 증가
		for (int i = 0; i < arr.length; i++) {
			counting[arr[i]]+=1;
		}
		
		//과정 2: 누적 합 더해주기
		for (int i = 1; i < counting.length; i++) {
			counting[i]= counting[i]+ counting[i-1];
		}
		
		//과정 3: i번째를 idx로 하는 counting 배열 1감소후, counting 배열의 값을 인덱스로해 result에 저장
		for (int i = arr.length-1; i >=0; i--) {
			int value = arr[i];//마지막 idx의 value 값이 counting의 idx
			counting[value]=counting[value]-1;//-1
			result[counting[value]] = value; //counting value -1 한 값을 결과 []위치에 삽입
		}
		
		System.out.println("array[]");
		for(int i = 0; i < arr.length; i++) {
			if(i % 10 == 0) System.out.println();
			System.out.print(arr[i] + "\t");
		}
		System.out.println("\n\n");

		
		// 정렬된 배열
		System.out.println("result[]");
		for(int i = 0; i < result.length; i++) {
			if(i % 10 == 0) System.out.println();
			System.out.print(result[i] + "\t");
		}
		
	
		
	}//end main

}
