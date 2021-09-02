# 기본
data = dict();
data[0]="Zero";
data[1]="One";
data[2]="Two";
print(data)

#키 데이터만 담은 리스트
key_list = data.keys();
#값 데이터만 담은 리스트
value_list = data.values();
print(key_list);
print(value_list);
for key in key_list:
  print(data[key]);