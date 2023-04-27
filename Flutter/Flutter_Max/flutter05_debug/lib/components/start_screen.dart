import 'package:flutter/material.dart';

class StartScreen extends StatelessWidget {
  final void Function() startQuiz;

  const StartScreen(this.startQuiz, {super.key}); // add positional argument
  // able to call switchScreen because it was passed

  @override
  Widget build(BuildContext context) {
    return Center(
      // Center widget centers the content inside of it both horizontally and vertically.
      child: Column(
        mainAxisSize: MainAxisSize.min,
        // this will take minimal vertical space as needed.
        children: [
          Image.asset(
            'assets/images/quiz-logo.png',
            width: 300,
            color: const Color.fromARGB(150, 255, 255, 255),
          ),
          const SizedBox(height: 80),
          // define exact size of th widget, not take available space.
          const Text(
            'Learn Flutter the Fun way',
            style: TextStyle(color: Colors.white, fontSize: 24),
          ),
          const SizedBox(height: 30),
          OutlinedButton.icon(
            // ways to add Icon
            onPressed: startQuiz, // anonymous function
            style: OutlinedButton.styleFrom(foregroundColor: Colors.white),
            icon: const Icon(Icons.arrow_right_alt), // can be use anywhere else
            label: const Text('Learn Now !'),
          )
        ],
      ),
    );
  }
}
