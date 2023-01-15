##조건문:
#기본
score = 95;
if(score >= 85):
  print("A 학점입니다.");
  
#기타 연산자
#1. X in 리스트: 리스트안에 X가 들어가 있을 때 참
#2. X not in 리스트: 리스트안에 X가 안들어가 있을 때 참

a =[1,2,3,4,5]
remove_set = [3,5];

result = [];
for i in a:
  if i not in remove_set:
    result.append(i);
print(result)

##반복문:
#기본 while문
i = 1
result =0
while i <= 9:
  result += i
  i+=1
print(result)

#기본 for문
result = 0
for i in range(1,5): #0~4까지 더하기 (지정 숫자-1까지)
  result += i
print(result)
