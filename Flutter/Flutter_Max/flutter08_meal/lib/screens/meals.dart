import 'package:flutter/material.dart';

import '../models/meal.dart';

class MealsScreens extends StatelessWidget {
  const MealsScreens({super.key, required this.title, required this.meals});

  final String title;
  final List<Meal> meals;

  @override
  Widget build(BuildContext context) {
    Widget content =
        ListView.builder(itemBuilder: (ctx, index) => Text(meals[index].title));
    if (meals.isEmpty) {
      content = Center(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'No available Item',
              style: Theme.of(context)
                  .textTheme
                  .headlineLarge!
                  .copyWith(color: Theme.of(context).colorScheme.onBackground),
            ),
            const SizedBox(height: 16),
            Text(
              'Try Select a different category',
              style: Theme.of(context)
                  .textTheme
                  .bodyLarge!
                  .copyWith(color: Theme.of(context).colorScheme.onBackground),
            )
          ],
        ),
      );
    }
    return Scaffold(appBar: AppBar(title: Text(title)), body: content);
  }
}
