import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

final formatter = DateFormat.yMd();

class NewExpense extends StatefulWidget {
  const NewExpense({Key? key}) : super(key: key);

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

  @override
  void dispose() {
    // dispose is a part of StatefulWidget lifecycle. called when widget is destroyed.
    _titleController.dispose();
    _amountController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
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
          Row(
            children: [
              TextButton(
                  onPressed: () {
                    // Navigator class's pop makes modal close
                    Navigator.pop(context);
                  },
                  child: const Text('Cancel')),
              ElevatedButton(
                  onPressed: () {
                    print(_titleController.text);
                    print(_amountController.text);
                  },
                  child: const Text('Save Expense')),
            ],
          )
        ],
      ),
    );
  }
}
