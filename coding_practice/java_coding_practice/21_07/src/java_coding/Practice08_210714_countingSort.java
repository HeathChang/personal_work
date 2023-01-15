package java_coding;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;



//�迭 �Է¹ް�, �����ϱ� �� ī���� ����
public class Practice08_210714_countingSort {
	public static void main(String[] args) throws IOException{
		BufferedReader bf= new BufferedReader(new InputStreamReader(System.in));
		System.out.println("�迭�� ũ�� �Է�: ");
		int [] arr = new int[Integer.parseInt(bf.readLine())];
		
		
		System.out.println("����� ���� ���� (1~n): ");
		int n=Integer.parseInt(bf.readLine());
		
		System.out.print("�� �迭: ");
		for (int i = 0; i < arr.length ; i++) {
			arr[i] =(int) (Math.random()*n);
			System.out.print(arr[i]);
		}
		System.out.println();
		//////////////////
		int [] counting = new int[n]; // 1~n���� ������ ���� �迭
		int [] result = new int [arr.length]; // �迭 ���� ���
		
		
		//���� 1: arr�� value���� index�� �ϴ� counting [] �� 1 ����
		for (int i = 0; i < arr.length; i++) {
			counting[arr[i]]+=1;
		}
		
		//���� 2: ���� �� �����ֱ�
		for (int i = 1; i < counting.length; i++) {
			counting[i]= counting[i]+ counting[i-1];
		}
		
		//���� 3: i��°�� idx�� �ϴ� counting �迭 1������, counting �迭�� ���� �ε������� result�� ����
		for (int i = arr.length-1; i >=0; i--) {
			int value = arr[i];//������ idx�� value ���� counting�� idx
			counting[value]=counting[value]-1;//-1
			result[counting[value]] = value; //counting value -1 �� ���� ��� []��ġ�� ����
		}
		
		System.out.println("array[]");
		for(int i = 0; i < arr.length; i++) {
			if(i % 10 == 0) System.out.println();
			System.out.print(arr[i] + "\t");
		}
		System.out.println("\n\n");

		
		// ���ĵ� �迭
		System.out.println("result[]");
		for(int i = 0; i < result.length; i++) {
			if(i % 10 == 0) System.out.println();
			System.out.print(result[i] + "\t");
		}
		
	
		
	}//end main

}
