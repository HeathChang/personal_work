package java_coding;

import java.util.Scanner;

//지정한 숫자만 대문자로 바꾸기
public class Practice05_210713_upperCase {
	int fiboData[100] = {0,};
	public static int fibonacci(int nth) {
		  fibodata[0] = 0;
		  fiboData[1] = 1;
		  for (int i=2; i<=nth; i++)
		    fiboData[i] = fiboData[i - 1] + fiboData[i - 2];
		  return fiboData[nth];
		
	}

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		System.out.println("몇번째 숫자를 알고 싶으신가요? : ");
		int nth = scan.nextInt();
		int result = fibonacci(nth);
		System.out.println(nth + " 번째 피보나치 수열 값은 " + result);

	}

}
