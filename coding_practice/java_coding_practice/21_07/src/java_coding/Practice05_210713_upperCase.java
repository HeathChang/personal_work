package java_coding;

import java.util.Scanner;

//������ ���ڸ� �빮�ڷ� �ٲٱ�
public class Practice05_210713_upperCase {
	public static void main(String[] args) {

		String sentence = "hello world";
		Scanner scanner = new Scanner(System.in);
		System.out.println("�빮�ڷ� ������ ���ϴ� ���ڰ� ���° �Դϱ�?: ");
		int num1=scanner.nextInt();		
		char [] cha=sentence.toCharArray();
		
		for (int i = 0; i < cha.length; i++) {
			if(i==num1-1) {
				System.out.print(cha[i]-=32);
			}else {
				System.out.print(cha[i]);
			}
			
		}
	}

}
