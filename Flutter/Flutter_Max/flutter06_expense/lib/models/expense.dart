import 'package:uuid/uuid.dart';

const uuid = Uuid();
class Expense {
  Expense({
    required this.title,
    required this.amount,
    required this.date
  }): id = uuid.v4();
  // in Dart, 'Initializer Lists' can be used to initialize class properties with values that are Not received as constructor function arguments
  // Basically, when this Expense class initialized, it will be assign as an initial value to ID property

  final String id;
  final String title;
  final double amount;
  final DateTime date;
}
