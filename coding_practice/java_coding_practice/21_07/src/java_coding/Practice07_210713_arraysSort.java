package java_coding;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;



//�迭 �Է¹ް�, �����ϱ� �� Arrays.sort();
public class Practice07_210713_arraysSort {
	public static void main(String[] args) throws IOException{
		BufferedReader bf= new BufferedReader(new InputStreamReader(System.in));
		System.out.println("�迭�� ũ�� �Է�: ");
		int arrSize=Integer.parseInt(bf.readLine());
		Integer [] arr = new Integer[arrSize];
		
		System.out.print("�� �迭: ");
		for (int i = 0; i < arrSize ; i++) {
			arr[i] =(int) (Math.random()*10);
			System.out.print(arr[i]);
		}
		
		//�������� ����
		System.out.println();
		System.out.print("��������: ");
		Arrays.sort(arr);

		for (int i = 0; i < arrSize ; i++) {
			System.out.print(arr[i]);
		}
		
		//�������� ����
        Arrays.sort(arr,Collections.reverseOrder());
        System.out.println();
		System.out.print("��������: ");
		for (int i = 0; i < arrSize ; i++) {
			System.out.print(arr[i]);
		}
		
		
	}//end main

}
