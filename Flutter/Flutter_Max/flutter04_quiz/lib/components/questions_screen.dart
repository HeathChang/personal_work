import 'package:basic101_01/components/answer_button.dart';
import 'package:basic101_01/components/data/questions.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class QuestionScreen extends StatefulWidget {
  const QuestionScreen(this.onSelectAnswer, {super.key});

  final void Function(String answer) onSelectAnswer;

  // need to send this to _QuestionScreenState
  // => use [widget]

  @override
  State<QuestionScreen> createState() {
    return _QuestionScreenState();
  }
}

class _QuestionScreenState extends State<QuestionScreen> {
  var currentQuestionIndex = 0;

  void answerQuestion(String selectedAnswer) {
    widget.onSelectAnswer(selectedAnswer);
    //widget instance allows Flutter to access to Widget Class and its properties
    setState(() {
      currentQuestionIndex++;
    });
  }

  @override
  Widget build(BuildContext context) {
    final currentQuestion = questions[currentQuestionIndex];

    return SizedBox(
      width: double.infinity, // use as much width you can.
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center, //vertical
          crossAxisAlignment: CrossAxisAlignment.stretch, // horizontal
          children: [
            Text(
              currentQuestion.text,
              // style: const TextStyle(color: Colors.white),
              style: GoogleFonts.lato(
                  color: const Color.fromARGB(255, 237, 223, 252),
                  fontSize: 24,
                  fontWeight: FontWeight.bold), // use google fonts
              textAlign: TextAlign.center,
            ),
            const SizedBox(
              height: 30,
            ),
            ...currentQuestion.getShuffledAnswers().map((answer) {
              return AnswerButton(answer, () {
                // answerQuestion
                answerQuestion(answer);
                // NOTE::
                // This seems that we are executing function right away, but
                // this function is forwarded as a value to onTap.
                // this will not be executed when it is created, but only when this anonymous function is triggered from the button.
              });
              //  Iterable !== Widget => use Spread Operator
            }), // convert string to widget
            // AnswerButton(currentQuestion.answers[0], () {}),
            // AnswerButton(currentQuestion.answers[1], () {}),
            // AnswerButton(currentQuestion.answers[2], () {}),
            // AnswerButton(currentQuestion.answers[3], () {}),
          ],
        ),
      ),
    );
  }
}
