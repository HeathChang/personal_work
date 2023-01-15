package java_coding;

import java.util.*;

//[알고리즘 / JAVA] 프로그래머스 - 완주하지 못한 선수 [해시]
public class Practice10_210715_runnerComp {
		public String solution(String[] participant, String[] completion) {
			String answer = "";
			HashMap<String, Integer> hm = new HashMap<>();
			
			//달린사람 찾기
			for (String runner : participant) {
				hm.put(runner, hm.getOrDefault(runner, 0) + 1);
				System.out.println(runner);
			}
			
			System.out.println();
			//끝낸 사람 찾기
			for (String runner : completion) {
				hm.put(runner, hm.get(runner) - 1);
				System.out.println(runner);
			}
			
			System.out.println();
			//못끝낸 사람 찾기
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
