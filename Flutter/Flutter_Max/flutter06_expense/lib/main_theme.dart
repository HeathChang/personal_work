import 'package:flutter/material.dart';

ThemeData getLightTheme(ColorScheme colorScheme) {
  // copyWith: uses default useMaterial3 setting, no need to start from scratch
  //   the theme of the MaterialApp by copying the default theme using ThemeData().copyWith()
  return ThemeData().copyWith(
    useMaterial3: true,
    colorScheme: colorScheme,
    appBarTheme: const AppBarTheme().copyWith(
      backgroundColor: colorScheme.onPrimaryContainer,
      foregroundColor: colorScheme.primaryContainer,
    ),
    cardTheme: const CardTheme().copyWith(
      color: colorScheme.secondaryContainer,
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: colorScheme.primaryContainer,
      ),
    ),
    textTheme: ThemeData().textTheme.copyWith(
          headline1: TextStyle(
            fontWeight: FontWeight.w900,
            color: colorScheme.onSecondaryContainer,
            fontSize: 20,
          ),
        ),
  );
}

ThemeData getDarkTheme(ColorScheme colorScheme) {
  // copyWith: uses default useMaterial3 setting, no need to start from scratch
  //   the theme of the MaterialApp by copying the default theme using ThemeData().copyWith()
  return ThemeData.dark().copyWith(
      useMaterial3: true,
      colorScheme: colorScheme,
      cardTheme: const CardTheme().copyWith(
          color: colorScheme.secondaryContainer,
          margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8)),
      elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
        backgroundColor: colorScheme.primaryContainer,
        // primary container is the background color
        foregroundColor: colorScheme.onPrimaryContainer,
      ) //colors the content inside of that button: onPrimaryContainer
          ));
}
