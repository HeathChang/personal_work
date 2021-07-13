package java_coding;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;



//배열 입력받고, 정렬하기 → 퀵 정렬
public class Practice09_210714 {
	
	public void sort(int[] arr , int l , int r) {
		int left = l;
		int right = r;
		int pivot = arr[(1+r)/2];
		do {
			while(arr[left]<pivot)left++;
			while(arr[right]>pivot) right--;
			if(left <= right) {
				int temp =arr[left];
				arr[left] = arr[right];
				arr[right] =temp;
				left++;
				right --;
			}
		} while (left<=right);
		
		if(1<right) sort(arr,1,right);
		if(r>right) sort(arr,left,r);
		
		
	}
	
	
	public static void main(String[] args) throws IOException{
		BufferedReader bf= new BufferedReader(new InputStreamReader(System.in));
		System.out.println("배열의 크기 입력: ");
		int arrSize=Integer.parseInt(bf.readLine());
		int [] arr = new int[arrSize];
		
		System.out.print("원 배열: ");
		for (int i = 0; i < arrSize ; i++) {
			arr[i] =(int) (Math.random()*10);
			System.out.print(arr[i]);
		}
		
		System.out.println();
		System.out.print("왼쪽 피벗 선택방식: ");
		Practice09_210714 quickSort = new Practice09_210714 ();
		
		quickSort.sort(arr,0,arr.length-1);
		
		for (int i = 0; i < arrSize ; i++) {
			arr[i] =(int) (Math.random()*10);
			System.out.print(arr[i]);
		}
		
		
	}//end main

}
