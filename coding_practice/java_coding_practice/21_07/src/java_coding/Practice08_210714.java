package java_coding;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;



//�迭 �Է¹ް�, �����ϱ� �� ī���� ����
public class Practice08_210714 {
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
		
	
		
	}//end main

}
