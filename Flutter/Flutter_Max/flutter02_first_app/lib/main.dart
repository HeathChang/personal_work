import 'package:flutter/material.dart';

// void main() {
//   //create an Object.
//   runApp(MyApp());
// }

void main() => {
  runApp(MyApp());
};

class MyApp extends StatelessWidget {
  // when extends, MyApp will cause error => add Method
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Text("Hello Flutter"),); //main widget. every widget is  class
  }
}