import 'package:flutter/material.dart';

class NewExpense extends StatefulWidget {
  const NewExpense({Key? key}) : super(key: key);

  @override
  State<NewExpense> createState() => _NewExpenseState();
}

class _NewExpenseState extends State<NewExpense> {
  var _enteredTitle = '';

  // void _saveTitleInput(String inputValue) {
  //   _enteredTitle =
  //       inputValue; // since there is no change in UI, no need to use setState.
  // }

  final _titleController =
      TextEditingController(); // need to tell Flutter to delete when this modal is closed => otherwise, way of wasting memory.

  @override
  void dispose() {
    // dispose is a part of StatefulWidget lifecycle. called when widget is destroyed.
    _titleController.dispose();
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
            controller: _titleController, // second way of storing text value => controller
            maxLength: 50,
            keyboardType: TextInputType.text, // input tag type in JS
            decoration: const InputDecoration(
                label: Text('Title')), // title of input (Text Field)
          ),
          Row(
            children: [
              ElevatedButton(
                  onPressed: () {
                    print(_titleController.text);
                  },
                  child: const Text('Save Expense'))
            ],
          )
        ],
      ),
    );
  }
}
