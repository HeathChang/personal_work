a = [1,2,3,4,5];
print("기본 리스트: ",a);

#append
a.append(2);
print("삽입 후: ",a); 

#sort
a.sort();
print("오름차순 정렬 후: ",a); 

#sort(reverse)
a.sort(reverse=True);
print("내림차순 정렬 후: ",a); 

#reverse
a.reverse();
print("순서 뒤집기 ",a); 

#insert
a.insert(2,3);
print("인덱스2에 3추가: ",a); 

#count
print("값이 3인 데이터 개수: ",a.count(3)); 

#remove
a.remove(2);
print("값이 2인 데이터 삭제: ",a)


