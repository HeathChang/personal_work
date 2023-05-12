import 'package:flutter/material.dart';
import 'package:flutter06_expense/models/expense.dart';
import 'package:flutter06_expense/widgets/expenses_list/expense_item.dart';

class ExpensesList extends StatelessWidget {
  const ExpensesList({
    super.key,
    required this.expenses,
    required this.onRemoveExpense,
  });

  final List<Expense> expenses;
  final void Function(Expense expense) onRemoveExpense;

  @override
  Widget build(BuildContext context) {
    // ListView is used when there are many items
    // builder is used to create scrollable list  only they are visible
    return ListView.builder(
      itemCount: expenses.length, // number of length
      itemBuilder: (BuildContext context, int index) {
        // Dismissible: swipe to delete
        return Dismissible(
          key: ValueKey(expenses[index]), //create key obj
          background: Container(color: Theme.of(context).colorScheme.error.withOpacity(0.3), // setting up background color
          margin: EdgeInsets.symmetric(horizontal: Theme.of(context).cardTheme.margin!.horizontal),
          ),
          child: ExpenseItem(expense: expenses[index]),
          onDismissed: (direction) {
            //direction will be either endToStart or startToEnd
            onRemoveExpense(expenses[index]);
          }, // run when swiped.
        );
      },
    );
  }
}
