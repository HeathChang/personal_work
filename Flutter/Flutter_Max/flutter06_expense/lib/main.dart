import 'package:flutter/material.dart';
import 'package:flutter06_expense/widgets/expenses.dart';


void main() {
  runApp(
     MaterialApp(
      theme: ThemeData(useMaterial3: true), // change material 2 to material3
      home: const Expenses(),
    ),
  );
}
