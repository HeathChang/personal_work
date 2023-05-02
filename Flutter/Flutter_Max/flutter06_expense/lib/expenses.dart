import 'package:flutter/material.dart';
import 'package:flutter06_expense/models/expense.dart';

class Expenses extends StatefulWidget {
  const Expenses({super.key});

  @override
  State<StatefulWidget> createState() {
    return _ExpensesState();
  }
}

class _ExpensesState extends State<Expenses> {
  final List<Expense> _registeredExpenses = [
    Expense(title: 'Flutter Course', amount: 19.99, date: DateTime.now(), category: Category.work), // need to refer enum
    Expense(title: 'Cinema', amount: 15.99, date: DateTime.now(), category: Category.leisure), // need to refer enum
  ];


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children:  const [
          Text('The Chart'),

        ],
      ),
    );
  }
}
