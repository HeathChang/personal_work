import 'dart:ffi';

import 'package:flutter/material.dart';

class QuestionsSummary extends StatelessWidget {
  const QuestionsSummary(this.summaryData, {super.key});

  final List<Map<String, Object>> summaryData;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 300,
      child: SingleChildScrollView(
        child: Column(
          // Maps returns a Iterable which cannot assigned to Widget
          // Needs to mutate List by using toList();
          children: summaryData.map((data) {
            return Row(children: [
              Text(((data['question_index'] as int) + 1).toString()),
              const SizedBox(width: 20, height: 100),

              // use Type-Casting
              Expanded(
                // Expanded widgets allow it child to take the available space along the flex widgets main axis.
                // Flex Widget: Row or Column widget that i put into expand
                // THis restricted to the width of a row.
                child: Column(
                  children: [
                    Text(data['question'] as String),
                    const SizedBox(height: 5),
                    Row(
                      children: [
                        const Text('Your: '),
                        Text(data['user_answer'] as String),
                      ],
                    ),
                    Row(
                      children: [
                        const Text('Correct: '),
                        Text(data['correct_answer'] as String),
                      ],
                    ),
                    const SizedBox(
                      height: 30,
                    )
                  ],
                ),
              ),
            ]);
          }).toList(),
        ),
      ),
    );
  }
}
