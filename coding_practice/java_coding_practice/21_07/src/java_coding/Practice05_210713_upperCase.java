package java_coding;

import java.util.Scanner;

//지정한 숫자만 대문자로 바꾸기
public class Practice05_210713_upperCase {
	public static void main(String[] args) {

		String sentence = "hello world";
		Scanner scanner = new Scanner(System.in);
		System.out.println("대문자로 변경을 원하는 글자가 몇번째 입니까?: ");
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
