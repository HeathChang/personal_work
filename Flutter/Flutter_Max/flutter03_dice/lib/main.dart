import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('First App'),
        ),
        body: Container(
          decoration: const BoxDecoration(
              gradient: LinearGradient(
            colors: [
              Color.fromARGB(255, 4, 2, 80),
              Color.fromARGB(255, 45, 7, 98)
            ],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          )),
          child: const Center(
            child: Text(
              'Hello World!',
              style: TextStyle(
                color: Colors.white,
                fontSize: 28
              ),
            ),
          ),
        ),
      ),
    );
  }
}
