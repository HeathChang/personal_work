package java_coding;

import java.util.*;

//bfs(�ʺ� �켱 Ž��)
public class Practice11_210715_bfs {
	public int solution(int[] numbers, int target) {
		int answer = 0;

		answer = bfs(numbers, target, numbers[0], 1) + bfs(numbers, target, -numbers[0], 1);
		System.out.println(bfs(numbers, target, -numbers[0], 1)); //1
		System.out.println(bfs(numbers, target, numbers[0], 1)); //4
		
		System.out.println("numbers: "+numbers);
		System.out.println("target: "+target); //3
		System.out.println("numbers: "+-numbers[0]); //-1
		System.out.println("numbers: "+numbers[0]); //1

		return answer;
	}

	public int bfs(int[] numbers, int target, int sum, int i) {

		if (i == numbers.length) { //i�� 5�϶�����
			if (sum == target) {
				return 1;
			} else { //���� �����ϸ�
				return 0;
			}
		}
		//i�� idx�ƴҰ��,
		int result = 0;
		result += bfs(numbers, target, sum + numbers[i], i + 1);
		result += bfs(numbers, target, sum - numbers[i], i + 1);
		return result;
		
	} //end bfs

	public static void main(String[] args) {
		int[] a = { 1, 1, 1, 1, 1 };
		Practice11_210715_bfs test = new Practice11_210715_bfs();
		int ans = test.solution(a, 3);
		System.out.println("��: " + ans);
	}

}
