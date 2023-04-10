import 'package:flutter/material.dart';

void main() {
  //create an Object.
  runApp(MyApp());
}

// class MyApp extends StatelessWidget {
class MyApp extends StatefulWidget {
  // this will be re-create
  @override
  State<StatefulWidget> createState() {
    return MyAppState();
  }
}

class MyAppState extends State<MyApp> {
  // this state belongs to MyApp
  // this will not re-create
  var questionIndex = 0;
  var questionNum = 'Q1';

  void answerQuestion() {
    setState(()=> {
      questionIndex += 1,
      questionNum = "Q2",
      if(questionIndex == 2){
        questionIndex = 0,
        questionNum = "Q1",
      }
    });
    // the data will not change because we're trying to change some internal state of the widget
    // but this is stateless widget.
    print(questionIndex);
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      questionNum + '. What\`s your favorite color ? ',
      questionNum + '. What\`s your favorite animal ? ',
    ];
    return MaterialApp(
        home: Scaffold(
            appBar: AppBar(title: Text("My First App")),
            body: Column(
              children: <Widget>[
                Text(questions[questionIndex]),
                ElevatedButton(
                    onPressed: answerQuestion, child: Text('Answer 1')),
                ElevatedButton(
                    onPressed: answerQuestion, child: Text('Answer 2')),
                ElevatedButton(
                    onPressed: answerQuestion, child: Text('Answer 3'))
              ], // this will holds a widget (list of widget).
            )));
  }
}
