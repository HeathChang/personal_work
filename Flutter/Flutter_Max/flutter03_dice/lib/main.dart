import "package:basic101_01/components/gradient_container.dart";
import "package:flutter/material.dart";

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // build should return
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('First App'),
        ),
        body: GradientContainer("Hello World", Color.fromARGB(255, 4, 2, 80),
            Color.fromARGB(255, 45, 7, 98)), // => will be moved as custom
      ),
    );
  }
}
