package java_coding;

import java.util.Scanner;

public class Practice03_210713 {

	public static void main(String[] args) {
		//�ٵ���

		
		////�ٵ���
		int [][] arr1= new int[20][20];
		
		
		////�ٵϾ˳���
		Scanner scan1 = new Scanner(System.in);
		System.out.println("��� �νǲ�����: ");
		int turn=scan1.nextInt();
		for (int i = 1; i <= turn; i++) {
			Scanner scan2 = new Scanner(System.in);
			System.out.println("�ٵϾ��� �� ��ġ�� �����ϼ���: ");
			int xaxis=scan2.nextInt();
			int yaxis=scan2.nextInt();
			System.out.println("�ٵϾ��� �� ��ġ��: "+ xaxis +"\t"+yaxis);
			arr1[xaxis][yaxis]=1;
		}
		
		for (int i = 0; i < arr1.length-1; i++) {
			for (int j = 0; j < arr1.length-1; j++) {
				System.out.print(arr1[i][j]);
			}
			System.out.println();
		}
		
		
	}

}
