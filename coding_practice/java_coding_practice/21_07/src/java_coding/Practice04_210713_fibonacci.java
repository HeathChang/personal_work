package java_coding;

import java.util.Scanner;

//�Ǻ���ġ ����
public class Practice04_210713_fibonacci {
	
	public static int fibonacci(int nth) {
		if (nth==0) {return 0;}
		if (nth==1) {return 1;}
		return fibonacci(nth-1)+fibonacci(nth-2);
	}
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("���° ���ڸ� �˰� �����Ű���? : ");
		int nth=scan.nextInt();
		int result=fibonacci(nth);
		System.out.println(nth+" ��° �Ǻ���ġ ���� ���� "+result);

	}

}
