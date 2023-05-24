import 'package:flutter/material.dart';
import 'package:flutter08_meal/data/dummy_data.dart';
import 'package:flutter08_meal/models/category.dart';
import 'package:flutter08_meal/models/meal.dart';
import 'package:flutter08_meal/screens/meals.dart';
import 'package:flutter08_meal/widgets/category_grid_item.dart';

class CategoriesScreen extends StatelessWidget {
  const CategoriesScreen({super.key, required this.availableMeals});

  // final void Function(Meal meal) onToggleFavorite;
  final List<Meal> availableMeals;

  void _selectCategory(BuildContext context, Category category) {
    final filteredMeals = availableMeals
        .where((meal) => meal.categories.contains(category.id))
        .toList();

    // Navigator.push(context, route)
    Navigator.of(context).push(
      MaterialPageRoute(
          builder: (ctx) =>
              MealsScreens(title: category.title, meals: filteredMeals)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return
        // GridView: Scrollable
        GridView(
      padding: const EdgeInsets.all(24),
      // gridDelegate: controls the layout of Grid : top to bottom, left to right,  horizontally 2
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2, // Row 별 item 갯수
        childAspectRatio: 3 / 2, // item의 가로 세로 비율 => 3줄 가로 / 2줄 세로.
        crossAxisSpacing: 20, // Row item의 간격
        mainAxisSpacing: 20, // Colum item의 간격
      ),
      children: availableCategories
          .map((category) => CategoryGridItem(
              category: category,
              onSelectCategory: () {
                _selectCategory(context, category);
              }))
          .toList(),
    );
  }
}
