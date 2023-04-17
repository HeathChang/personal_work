import 'package:basic101_01/components/dice_roller.dart';
import 'package:flutter/material.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  // GradientContainer({key}): super({key: key});
  // constructor: initialize
  // key will received and forward it to superClass
  // const is this is ta class that can be optimized that can be [reused] !!
  const GradientContainer(this.text, this.color1, this.color2, {super.key});

  // => same as below two lines
  // const GradientContainer(String text1, {super.key}): text1 = text2;
  // final String text2;

  // this.text means when it build, dart look for the class variable with that name, and mapped if there is a same name.
  // when this.text is added, const should not be front because , the text might be changed.
  // -> however if final is added, add const because it will always be the same object.

  final String
      text; // this is used to call from inside => only be set once and static can be set to final.
  final Color
      color1; // this is used to call from inside => only be set once and static can be set to final.
  final Color
      color2; // this is used to call from inside => only be set once and static can be set to final.

  @override
  Widget build(BuildContext context) {
    return Container(
      // decoration: const BoxDecoration(
      // erase const: since list can be edited, remove const.
      decoration: BoxDecoration(
          gradient: LinearGradient(
        colors: [color1, color2],
        begin: startAlignment,
        end: endAlignment,
      )),
      child: const Center(
        child: DiceRoller(),
      ),
    );
  }
}
