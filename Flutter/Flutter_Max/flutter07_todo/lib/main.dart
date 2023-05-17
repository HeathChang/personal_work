import 'package:flutter/material.dart';
import 'package:flutter07_todo/keys/keys.dart';

void main() {
  // 1. final
  // final numbers = [1,2,3];
  // numbers.add(4); // 0
  // numbers = [1]; // X

  // 2. Var
  // var numbers = [1,2,3];
  // numbers.add(4); // 0
  // numbers = [1]; // 0

  // 3. Const:
  // const numbers = [1,2,3];
  // numbers.add(4); // X, cannot add to an unmodifiable list (runtime error)
  // numbers = [1]; // X

  runApp(const App());
}

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter Internals'),
        ),
        body: const Keys(),
        // body: const UIUpdatesDemo(),
      ),
    );
  }
}
