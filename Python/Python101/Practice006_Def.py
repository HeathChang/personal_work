#기본 함수
def add (a,b):
  return a+b;
print(add(3,4));

#함수 안에서 함수 밖의 변수 데이터 변경
a = 0 
def func():
  global a
  a += 1
for i in range (10):
  func();
print(a)
