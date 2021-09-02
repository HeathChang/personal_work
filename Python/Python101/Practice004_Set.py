#기본
data = set([1,2,3,4,5,6,7,7,8,8,8,8,8,8,8]);
print(data);
data = {1,2,3,4,5,6,7,7,8,8,8,8,8,8,8};
print(data);

#새로운 원소 추가
data.add(9);
print(data);

#새로운 원소 여러개 추가
data.update([0,10,11])
print(data);

#특정 값을 갖는 원소 삭제
data.remove(3)
print(data)

#집합
a= set([1,2,3,4,5]);
b= set([3,4,5,6,7]);
print(a | b); #합집합
print (a & b); #교집합
print (a - b); #차집합