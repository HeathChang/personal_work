import 'dart:math';

import 'package:flutter/material.dart';

final randomizer = Random();

// Public Class
class DiceRoller extends StatefulWidget {
  // Constructor
  const DiceRoller({super.key});

  @override
  State<DiceRoller> createState() {
    //generic Type임.
    return _DiceRollerState();
  }
}

// Private Class
class _DiceRollerState extends State<DiceRoller> {
  var currentDiceRoll = 1;

  void rollDice() {
    currentDiceRoll = randomizer.nextInt(6) + 1;
    setState(() => {
          // tell Flutter to re-execute build.
          currentDiceRoll
        });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Image.asset('assets/images/dice-$currentDiceRoll.png', width: 200),
        TextButton(onPressed: rollDice, child: const Text('Roll Dice')),
      ],
    );
  }
}
