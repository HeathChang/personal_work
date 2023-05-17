// component for single item
import 'package:flutter/material.dart';
import 'package:flutter08_meal/models/category.dart';

class CategoryGridItem extends StatelessWidget {
  const CategoryGridItem({required this.category, super.key});

  final Category category;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
          gradient: LinearGradient(colors: [
        category.color.withOpacity(.55),
        category.color.withOpacity(.9),
      ], begin: Alignment.topLeft, end: Alignment.bottomRight)),
      child: Text(
        category.title,
        style: Theme.of(context)
            .textTheme
            .titleLarge!
            .copyWith(color: Theme.of(context).colorScheme.onBackground),
      ),
    );
  }
}
