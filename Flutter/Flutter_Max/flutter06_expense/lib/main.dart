import 'package:flutter/material.dart';
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
        // copyWith: uses default useMaterial3 setting, no need to start from scratch
        //   the theme of the MaterialApp by copying the default theme using ThemeData().copyWith()
        darkTheme: ThemeData.dark().copyWith(
          useMaterial3: true,
          colorScheme: kDarkColorScheme,
          cardTheme: const CardTheme().copyWith(
              color: kDarkColorScheme.secondaryContainer,
              margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8)),
          elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
                backgroundColor: kDarkColorScheme.primaryContainer,
                // primary container is the background color
                foregroundColor: kDarkColorScheme
                    .onPrimaryContainer), //colors the content inside of that button: onPrimaryContainer
          ),
        ),
        theme: ThemeData().copyWith(
            useMaterial3: true,
            // add more settings below
            // 1. colorScheme
            colorScheme: kColorScheme,
            // 2. app-bar theme
            appBarTheme: const AppBarTheme().copyWith(
                backgroundColor: kColorScheme.onPrimaryContainer,
                // this foregroundColor will overwrite other foreground theme
                foregroundColor: kColorScheme.primaryContainer),
            cardTheme: const CardTheme().copyWith(
                color: kColorScheme.secondaryContainer,
                margin:
                    const EdgeInsets.symmetric(horizontal: 16, vertical: 8)),
            elevatedButtonTheme: ElevatedButtonThemeData(
              style: ElevatedButton.styleFrom(
                  backgroundColor: kColorScheme.primaryContainer),
            ),
            textTheme: ThemeData().textTheme.copyWith(
                  titleLarge: TextStyle(
                    fontWeight: FontWeight.w900,
                    color: kColorScheme.onSecondaryContainer,
                    fontSize: 20,
                  ),
                )),
        themeMode: ThemeMode.system,
        // change material 2 to material3
        home: const Expenses(),
      ),
    );
  // });
}
