package java_coding;

import java.util.Scanner;

//������ ���ڸ� �빮�ڷ� �ٲٱ�
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
		System.out.println("���° ���ڸ� �˰� �����Ű���? : ");
		int nth = scan.nextInt();
		int result = fibonacci(nth);
		System.out.println(nth + " ��° �Ǻ���ġ ���� ���� " + result);

	}

}
