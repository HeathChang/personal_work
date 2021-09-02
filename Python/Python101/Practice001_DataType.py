# 정수형
a= 100;
print(a);
#실수형
a=157.93;
print(a);
b=1e2
print(b);

#리스트 자료형
a=[];
print(a);
a= [1,2,3,4,5];
print(a);
a=[0]*5;
print(a);

a= [1,2,3,4,5];
#리스트 인덱싱과 슬라이싱
#인덱싱: 인덱스값을 입력해  리스트의 특정한 원소에 접근
print("a[0]: ",a[0]);
print(a[-2]);
#슬라이싱: 연속적인 위치를 갖는 원소들을 가지고 와야할때
print(a[0:3]); #0부터 3까지

##리스트 컴프리헨션: 리스트 초기화 방법
array = [i for i in range(20) if i%2 ==0]
print(array);

#_ : 반복을 수행하되, 반복을 위한 변수의 값을 무시
for _ in range(5):
  print("Hello World");

#2차원 배열 초기화
array = [[0]*4]*5
print(array)
array[1][1]=5;
print(array); 
#변하는 3개의 리스트가 모두 동일한 객체에 대한 3개의 레퍼런스로 인식됨.
