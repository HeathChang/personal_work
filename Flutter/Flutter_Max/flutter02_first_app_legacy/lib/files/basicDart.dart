void main() {
  // 1. basic
  var firstResult = addNumbers(1, 2);
  print(firstResult);

  // 2. Object is class in Dart
  var person = Person(); // in Dart, new is not needed
  var newName = person.name;
  var newAge = person.age;
  print(newName);
  print(newAge);
}

int addNumbers(int num1, int num2) {
  return num1 + num2;
}

class Person {
  String name = 'Heath';
  int age = 30;
}
