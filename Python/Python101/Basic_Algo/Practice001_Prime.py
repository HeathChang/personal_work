import math
#소수 판단: 비효율적 → 하나씩 차례대로 나누기 떄문
def is_primeNumber (x):
  for i in range (2,x):
    if(x % i)==0:
      return False
    else:
      return True
print(is_primeNumber(4))    
print(is_primeNumber(7))    

#소수 판단: 제곱근을 사용
def is_primeNumber(x):
  for i in range(2,int(math.sqrt(x))+1):
    #만약 X가 해당 수로 나눠떨어지면 소수아님
    if(x % i == 0):return False
    return True
print(is_primeNumber(4))    
print(is_primeNumber(7))  
