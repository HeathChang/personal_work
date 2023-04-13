import 'package:flutter/material.dart';

class GradientContainer extends StatelessWidget {
  // GradientContainer({key}): super({key: key});
  // constructor: initialize
  // key will recieved and forward it to superClass
  // const is this is ta class that can be optimized that can be [reused] !!
  const GradientContainer(this.text, {super.key});
  // => same as below two lines
  // const GradientContainer(String text1, {super.key}): text1 = text2;
  // final String text2;

  // this.text means when it build, dart look for the class variable with that name, and mapped if there is a same name.
  // when this.text is added, const should not be front because , the text might be changed.
  // -> however if final is added, add const because it will always be the same object.

  final String text; // this is used to call from inside => only be set once and static cannbe set to final.

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
          gradient: LinearGradient(
        colors: [Color.fromARGB(255, 4, 2, 80), Color.fromARGB(255, 45, 7, 98)],
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
      )),
      child: Center(
        child: Text(
          text,
          style: const TextStyle(color: Colors.white, fontSize: 28),
        ),
      ),
    );
  }
}
