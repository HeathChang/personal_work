import 'package:flutter/cupertino.dart';

class Question extends StatelessWidget {
  final String questionText;

  Question(this.questionText);

  @override
  Widget build(BuildContext context) {
    return Container(
        width: double.infinity, // full width of the screen
        margin: EdgeInsets.all(10),
        child: Text(
          questionText,
          style: TextStyle(fontSize: 24),
          textAlign: TextAlign.center,
        ));
  }
}
