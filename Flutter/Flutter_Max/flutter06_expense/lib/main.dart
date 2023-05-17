import 'package:flutter/material.dart';
import 'package:flutter06_expense/main_theme.dart';
// import 'package:flutter/services.dart'; //lock screen orientation
import 'package:flutter06_expense/widgets/expenses.dart';

// generates a color scheme based on a seed color
var kColorScheme = ColorScheme.fromSeed(
  seedColor: const Color.fromARGB(255, 96, 59, 181),
);
var kDarkColorScheme = ColorScheme.fromSeed(
    brightness: Brightness.dark,
    // need to set Brightness => otherwise, bright will be white
    seedColor: const Color.fromARGB(255, 5, 99, 125));

void main() {
  // locking orientation and run the app.
  // WidgetsFlutterBinding.ensureInitialized();
  // SystemChrome.setPreferredOrientations([
  //   DeviceOrientation.portraitUp, // locked orientation
  // ]).then((fn) {
  runApp(
    MaterialApp(
      darkTheme: getDarkTheme(kDarkColorScheme),
      theme: getLightTheme(kColorScheme),
      themeMode: ThemeMode.system,
      home: const Expenses(),
    ),
  );
  // });
}
