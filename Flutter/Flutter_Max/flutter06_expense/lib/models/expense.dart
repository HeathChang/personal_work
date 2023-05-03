import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:uuid/uuid.dart';
import 'package:intl/intl.dart';

final formatter = DateFormat.yMd();
const uuid = Uuid();

enum Category { food, travel, leisure, work }
// enum is used to create a fixed set of allowed values, so that we have to use one of those values when creating new expense.

const categoryIcons = {
  Category.food: Icons.lunch_dining,
  Category.travel: Icons.flight_takeoff,
  Category.leisure: Icons.movie,
  Category.work: Icons.work
};

class Expense {
  Expense({
    required this.title,
    required this.amount,
    required this.date,
    required this.category,
  }) : id = uuid.v4();

  // in Dart, 'Initializer Lists' can be used to initialize class properties with values that are Not received as constructor function arguments
  // Basically, when this Expense class initialized, it will be assign as an initial value to ID property

  final String id;
  final String title;
  final double amount;
  final DateTime date;
  final Category category;


  String get formattedDate {
    return formatter.format(date);
  }


}
