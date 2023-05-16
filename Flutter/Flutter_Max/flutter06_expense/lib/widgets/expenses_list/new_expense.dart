import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import '../../models/expense.dart';

final formatter = DateFormat.yMd();

class NewExpense extends StatefulWidget {
  const NewExpense({super.key, required this.onAddExpense});

  final void Function(Expense expense) onAddExpense;

  @override
  State<NewExpense> createState() => _NewExpenseState();
}

class _NewExpenseState extends State<NewExpense> {
  // => currently no need
  var _enteredTitle = '';

  void _saveTitleInput(String inputValue) {
    // since there is no change in UI, no need to use setState. => currently no need
    _enteredTitle = inputValue;
  }

  // need to tell Flutter to delete TextEditingController when this modal is closed => otherwise, way of wasting memory.
  final _titleController = TextEditingController();
  final _amountController = TextEditingController();
  DateTime? _selectedDate;
  Category _selectedCategory = Category.leisure;

  Future<void> _presentDatePicker() async {
    final now = DateTime.now();
    final firstDate = DateTime(now.year - 1, now.month, now.day);
    // showDatePicker => Flutter's Date picker Method
    final pickedDate = await showDatePicker(
        context: context,
        initialDate: now,
        firstDate: firstDate,
        lastDate: now);
    // => showDatePicker return value of type 'future'
    // => need to async await or then method

    setState(() {
      _selectedDate = pickedDate;
    });
  }

  void _submitExpenseData() {
    // able => double & else => null;
    final enteredAmount = double.tryParse(_amountController.text);
    final amountIsInvalid = enteredAmount == null || enteredAmount <= 0;
    if (_titleController.text.trim().isEmpty ||
        amountIsInvalid ||
        _selectedDate == null) {
      showDialog(
        context: context,
        builder: (ctx) {
          return AlertDialog(
            title: const Text('Invalid Input'),
            content: const Text(
                'Please make sure a valid title, amount, date and category was entered.'),
            actions: [
              TextButton(
                  onPressed: () {
                    Navigator.pop(ctx); //close modal
                  },
                  child: const Text('Okay'))
            ],
          );
        },
      );
      return; //no code executed
    }
    widget.onAddExpense(Expense(
        title: _titleController.text,
        amount: enteredAmount,
        date: _selectedDate!,
        category: _selectedCategory));
    Navigator.pop(context);
  }

  @override
  void dispose() {
    // dispose is a part of StatefulWidget lifecycle. called when widget is destroyed.
    _titleController.dispose();
    _amountController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // extra info abut UI elements that might be overlapping
    final keyboardSpace = MediaQuery.of(context).viewInsets.bottom;
    return LayoutBuilder(builder: (ctx, constraints) {
      final width = constraints.maxWidth;

      return SizedBox(
        height: double.infinity,
        child: SingleChildScrollView(
          child: Padding(
            padding: EdgeInsets.fromLTRB(16, 48, 16, keyboardSpace + 16),
            child: Column(
              children: [
                if (width >= 600)
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: TextField(
                          controller: _titleController,
                          maxLength: 50,
                          keyboardType: TextInputType.text,
                          decoration: const InputDecoration(
                              label:
                                  Text('Title')), // title of input (Text Field)
                        ),
                      ),
                      const SizedBox(
                        width: 96,
                      ),
                      Expanded(
                        child: TextField(
                          // TextField wants to take as much space horizontally as possible, and Row do not restrict the amount of space  which will cause error => Expanded
                          controller: _amountController,
                          keyboardType: TextInputType.number,
                          decoration: const InputDecoration(
                              // 앞에 붙는 $ 표시
                              prefixText: '\$ ',
                              // title of input (Text Field)
                              label: Text('Amount')),
                        ),
                      ),
                    ],
                  )
                else
                  TextField(
                    // onChanged: _saveTitleInput, // first way of storing text value => onChanged
                    controller: _titleController,
                    // second way of storing text value => controller
                    maxLength: 50,
                    keyboardType: TextInputType.text,
                    // input tag type in JS
                    decoration: const InputDecoration(
                        label: Text('Title')), // title of input (Text Field)
                  ),
                if (width >= 600)
                  Row(
                    children: [
                      DropdownButton(
                        //initial data:
                        value: _selectedCategory,
                        // DropdownMenuItem: need to set the child parameter to another widget, which simply defines what will be shown on the screen.
                        items: Category.values
                            .map((category) => DropdownMenuItem(
                                  // save internally: value of selected category
                                  value: category,
                                  child: Text(
                                    category.name.toUpperCase(),
                                  ),
                                ))
                            .toList(),
                        onChanged: (value) {
                          // the value here is value from map of DropDownMenuItem
                          if (value == null) return;
                          setState(() {
                            _selectedCategory = value;
                          });
                        },
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          // row controls the horizontal alignment to push content to the end
                          crossAxisAlignment: CrossAxisAlignment.center,
                          // center the content vertically.
                          children: [
                            Text(
                              _selectedDate == null
                                  ? 'No Dated Date'
                                  : formatter.format(
                                      _selectedDate!), // ! assume this wont be null
                            ),
                            IconButton(
                                onPressed: _presentDatePicker,
                                icon: const Icon(Icons.calendar_month))
                          ],
                        ),
                      )
                    ],
                  )
                else
                  Row(
                    children: [
                      Expanded(
                        child: TextField(
                          // TextField wants to take as much space horizontally as possible, and Row do not restrict the amount of space  which will cause error => Expanded
                          controller: _amountController,
                          keyboardType: TextInputType.number,
                          decoration: const InputDecoration(
                              // 앞에 붙는 $ 표시
                              prefixText: '\$ ',
                              // title of input (Text Field)
                              label: Text('Amount')),
                        ),
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          // row controls the horizontal alignment to push content to the end
                          crossAxisAlignment: CrossAxisAlignment.center,
                          // center the content vertically.
                          children: [
                            Text(
                              _selectedDate == null
                                  ? 'No Dated Date'
                                  : formatter.format(
                                      _selectedDate!), // ! assume this wont be null
                            ),
                            IconButton(
                                onPressed: _presentDatePicker,
                                icon: const Icon(Icons.calendar_month))
                          ],
                        ),
                      )
                    ],
                  ),
                const SizedBox(height: 16),
                if (width >= 600)
                  Row(
                    children: [
                      const Spacer(),
                      TextButton(
                          onPressed: () {
                            // Navigator class's pop makes modal close
                            Navigator.pop(context);
                          },
                          child: const Text('Cancel')),
                      ElevatedButton(
                          onPressed: _submitExpenseData,
                          child: const Text('Save Expense')),
                    ],
                  )
                else
                  Row(
                    children: [
                      DropdownButton(
                        //initial data:
                        value: _selectedCategory,
                        // DropdownMenuItem: need to set the child parameter to another widget, which simply defines what will be shown on the screen.
                        items: Category.values
                            .map((category) => DropdownMenuItem(
                                  // save internally: value of selected category
                                  value: category,
                                  child: Text(
                                    category.name.toUpperCase(),
                                  ),
                                ))
                            .toList(),
                        onChanged: (value) {
                          // the value here is value from map of DropDownMenuItem
                          if (value == null) return;
                          setState(() {
                            _selectedCategory = value;
                          });
                        },
                      ),
                      const Spacer(),
                      TextButton(
                          onPressed: () {
                            // Navigator class's pop makes modal close
                            Navigator.pop(context);
                          },
                          child: const Text('Cancel')),
                      ElevatedButton(
                          onPressed: _submitExpenseData,
                          child: const Text('Save Expense')),
                    ],
                  )
              ],
            ),
          ),
        ),
      );
    });
  }
}
