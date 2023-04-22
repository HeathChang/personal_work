import 'package:basic101_01/components/answer_button.dart';
import 'package:flutter/material.dart';

class QuestionScreen extends StatefulWidget {
  const QuestionScreen({super.key});

  @override
  State<QuestionScreen> createState() {
    return _QuestionScreenState();
  }
}

class _QuestionScreenState extends State<QuestionScreen> {
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity, // use as much width you can.
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text(
            'The Question',
            style: TextStyle(color: Colors.white),
          ),
          const SizedBox(
            height: 30,
          ),
          AnswerButton('Answer1', () {
            print('Hello');
          }),
          AnswerButton('Answer2', () {}),
          AnswerButton('Answer3', () {}),
          AnswerButton('Answer4', () {}),
        ],
      ),
    );
  }
}
