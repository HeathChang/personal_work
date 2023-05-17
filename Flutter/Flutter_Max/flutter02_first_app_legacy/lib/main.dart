import 'package:flutter/material.dart';

import './question.dart';

void main() {
  //create an Object.
  runApp(MyApp());
}

// class MyApp extends StatelessWidget {
class MyApp extends StatefulWidget {
  // this will be re-create
  @override
  State<StatefulWidget> createState() {
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  // this state belongs to MyApp
  // this will not re-create
  var _questionIndex = 0;
  var _questionNum = 'Q1';

  void _answerQuestion() {
    setState(() => {_questionIndex, _questionNum});

    _questionIndex += 1;
    _questionNum = "Q2";
    if (_questionIndex == 2) {
      _questionIndex = 0;
      _questionNum = "Q1";
    }
    ;
    // the data will not change because we're trying to change some internal state of the widget
    // but this is stateless widget.
    print(_questionIndex);
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      _questionNum + '. What\`s your favorite color ? ',
      _questionNum + '. What\`s your favorite animal ? ',
    ];
    return MaterialApp(
        home: Scaffold(
            appBar: AppBar(title: Text("My First App")),
            body: Column(
              children: <Widget>[
                Question(questions[_questionIndex]),
                ElevatedButton(
                    onPressed: _answerQuestion, child: Text('Answer 1')),
                ElevatedButton(
                    onPressed: _answerQuestion, child: Text('Answer 2')),
                ElevatedButton(
                    onPressed: _answerQuestion, child: Text('Answer 3'))
              ], // this will holds a widget (list of widget).
            )));
  }
}
