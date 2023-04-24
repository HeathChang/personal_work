// quiz.dart contains contents MaterialApp
import 'package:basic101_01/components/questions_screen.dart';
import 'package:basic101_01/components/start_screen.dart';
import 'package:flutter/material.dart';

class Quiz extends StatefulWidget {
  const Quiz({super.key});

  @override
  State<Quiz> createState() {
    return _QuizState();
  }
}

class _QuizState extends State<Quiz> {
  // 방법 1.
  // Widget? activeScreen; // able to store widgets in var
  // // error because using switchScreen when initializing the activeScreen variable at the same point of time.
  //
  // @override
  // void initState() {
  //   // initState will execute once after the object has been created
  //   // this does not excute at all at this time, so no need to use setState
  //   activeScreen = StartScreen(switchScreen);
  //   super.initState();
  // }
  //
  // void switchScreen() {
  //   setState(() {
  //     //QuestionScreen should follow StartScreen();
  //     activeScreen = const QuestionScreen();
  //   });
  // }

  // 방법 2.
  var activeScreen = 'start-screen';

  void switchScreen() {
    setState(() {
      //QuestionScreen should follow StartScreen();
      activeScreen = 'questions-screen';
    });
  }

  final List<String> selectedAnswers = [];

  void chooseAnswer(String answer) {
    selectedAnswers.add(answer);
  }

  @override
  Widget build(BuildContext context) {
    Widget screenWidget = StartScreen(switchScreen);

    if (activeScreen == 'questions-screen') {
      screenWidget = QuestionScreen(chooseAnswer);
    }

    return MaterialApp(
      home: Scaffold(
        body: Container(
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              colors: [
                Color.fromARGB(255, 78, 13, 151),
                Color.fromARGB(255, 107, 15, 168),
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
          // 방법 1
          // child: activeScreen,
          // 방법 2: ternary expression
          child: screenWidget,
        ),
      ),
    );
  }
}
