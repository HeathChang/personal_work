import 'package:flutter/material.dart';
import 'package:flutter06_expense/widgets/chart/chart.dart';
import 'package:flutter06_expense/widgets/expenses_list/expenses_list.dart';
import 'package:flutter06_expense/models/expense.dart';
import 'package:flutter06_expense/widgets/expenses_list/new_expense.dart';

class Expenses extends StatefulWidget {
  const Expenses({super.key});

  @override
  State<StatefulWidget> createState() {
    return _ExpensesState();
  }
}

class _ExpensesState extends State<Expenses> {
  final List<Expense> _registeredExpenses = [
    Expense(
        title: 'Flutter Course',
        amount: 19.99,
        date: DateTime.now(),
        category: Category.work), // need to refer enum
    Expense(
        title: 'Cinema',
        amount: 15.99,
        date: DateTime.now(),
        category: Category.leisure), // need to refer enum
  ];

  void _openAddExpenseOverlay() {
    showModalBottomSheet(
        // make sure to stay away from the device features like camera that might be affecting our UI.
        useSafeArea: true,
        // isScrollControlled: will take full available height.
        isScrollControlled: true,
        context: context,
        // context ,which is full of meta-data, holds information about expenses widget in the end and its position in the widget tree
        builder: (builderContext) {
          // builder basically means that you must provide a function as a value. (return a widget that should basically be displayed when Flutter renders this mbs is opening up)
          return NewExpense(onAddExpense: _addExpense);
        });
  }

  void _addExpense(Expense expense) {
    setState(() {
      _registeredExpenses.add(expense);
    });
  }

  void _removeExpense(Expense expense) {
    final expenseIndex = _registeredExpenses.indexOf(expense);
    setState(() {
      _registeredExpenses.remove(expense);
    });
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        duration: const Duration(seconds: 3),
        content: const Text('Expense Deleted'),
        action: SnackBarAction(
            label: 'Undo',
            onPressed: () {
              setState(() {
                _registeredExpenses.insert(expenseIndex, expense);
              });
            }),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // if rotate, build will re-executed.
    print("Hello World::::");
    print(MediaQuery.of(context).size);
    final Size screenSize = MediaQuery
        .of(context)
        .size;
    final double width = screenSize.width;
    final double height = screenSize.height;

    Widget mainContent = const Center(child: Text('No Expenses found.'));

    if (_registeredExpenses.isNotEmpty) {
      mainContent = ExpensesList(
          expenses: _registeredExpenses, onRemoveExpense: _removeExpense);
    }

    return Scaffold(
      appBar: AppBar(
        title: const Text("Flutter Expense Tracker"),
        actions: [
          IconButton(
              onPressed: () {
                return _openAddExpenseOverlay();
              },
              icon: const Icon(Icons.add)),
        ], // actions: typically used to display buttons in top app bar.
      ),
      body: width < height
          ? Column(
        children: [
          // Tool Bar
          Chart(expenses: _registeredExpenses),
          Expanded(child: mainContent)
          // column inside column will cause error => use expanded to avoid issue
        ],
      )
          : Row(children: [
        // since row takes as much space as infinity, and container in chart takes as many as infinite thus error => use Expanded, and wrap
        Expanded(child: Chart(expenses: _registeredExpenses)),
        Expanded(child: mainContent)
      ]),
    );
  }
}
