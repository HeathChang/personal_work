package java_coding;

import java.util.Scanner;

public class Practice01_210713 {

	public static void main(String[] args) {
		//scanner 예제 
		 Scanner scanner = new Scanner(System.in);
		 System.out.println("입력해보세요: ");
		 Object var1=scanner.nextLine();
		 System.out.println("입력하신 값은: "+var1);
		 System.out.println(var1.getClass());
	}

}
