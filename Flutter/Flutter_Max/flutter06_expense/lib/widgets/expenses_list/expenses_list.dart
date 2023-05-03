import 'package:flutter/material.dart';
import 'package:flutter06_expense/models/expense.dart';
import 'package:flutter06_expense/widgets/expenses_list/expense_item.dart';

class ExpensesList extends StatelessWidget {
  const ExpensesList({
    super.key,
    required this.expenses,
  });

  final List<Expense> expenses;

  @override
  Widget build(BuildContext context) {
    // ListView is used when there are many items
    // builder is used to create scrollable list  only they are visible
    return ListView.builder(
      itemCount: expenses.length, // number of length
      itemBuilder: (BuildContext context, int index) {
        return ExpenseItem(expense: expenses[index]);
      },
    );
  }
}
