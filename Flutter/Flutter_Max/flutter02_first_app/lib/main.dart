import 'package:flutter/material.dart';

void main() {
  //create an Object.
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // when extends, MyApp will cause error => add Method
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        // home: Text("Hello Flutter"),); //main widget. every widget is  class
        home: Scaffold(
      appBar: AppBar(title: Text("My First App")),
      body: Text('This is my default text'),
      bottomNavigationBar: Text('Hello World'),
    ));
  }
}
