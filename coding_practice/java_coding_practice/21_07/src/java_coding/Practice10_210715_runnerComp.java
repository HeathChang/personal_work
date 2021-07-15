package java_coding;

import java.util.*;

//[�˰��� / JAVA] ���α׷��ӽ� - �������� ���� ���� [�ؽ�]
public class Practice10_210715_runnerComp {
		public String solution(String[] participant, String[] completion) {
			String answer = "";
			HashMap<String, Integer> hm = new HashMap<>();
			
			//�޸���� ã��
			for (String runner : participant) {
				hm.put(runner, hm.getOrDefault(runner, 0) + 1);
				System.out.println(runner);
			}
			
			System.out.println();
			//���� ��� ã��
			for (String runner : completion) {
				hm.put(runner, hm.get(runner) - 1);
				System.out.println(runner);
			}
			
			System.out.println();
			//������ ��� ã��
			for (String key : hm.keySet()) {
				System.out.println("keySet: "+hm.keySet());
				System.out.println("key: "+key);
				if (hm.get(key) != 0) {
					answer = key;
					break;
				}
			}

			return answer;
		}
	


	public static void main(String[] args) {
		String [] a= {"eden", "kiki","wawa"} ;
		String [] b= {"eden", "kiki"} ;
		Practice10_210715_runnerComp test = new Practice10_210715_runnerComp();
		String ans=test.solution(a , b);
		System.out.println(ans);
	}

}
