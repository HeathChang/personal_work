import 'dart:ffi';
import 'package:flutter08_meal/providers/favorites_provider.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:flutter/material.dart';

// import 'package:flutter08_meal/data/dummy_data.dart';
// import 'package:flutter08_meal/models/meal.dart';
import 'package:flutter08_meal/providers/meals_provider.dart';
import 'package:flutter08_meal/providers/filter_provider.dart';
import 'package:flutter08_meal/screens/categories.dart';
import 'package:flutter08_meal/screens/filters.dart';
import 'package:flutter08_meal/screens/meals.dart';
import 'package:flutter08_meal/widgets/main_drawer.dart';

const kInitialFilters = {
  Filter.glutenFree: false,
  Filter.lactoseFree: false,
  Filter.vegetarian: false,
  Filter.vegan: false,
};

// ConsumerStatefulWidget is a statfulwidget provided by riverpod package which has some add functionalities that allow app to listen to providers and changes in the value.
class TabScreen extends ConsumerStatefulWidget {
  const TabScreen({Key? key}) : super(key: key);

  @override
  ConsumerState<TabScreen> createState() => _TabScreenState();
}

class _TabScreenState extends ConsumerState<TabScreen> {
  int _selectedPageIndex = 0;

  // final List<Meal> _favoriteMeals = [];
  // Map<Filter, bool> _selectedFilters = kInitialFilters;

  // void _toggleMealFavoriteStatus(Meal meal) {
  //   final isExisting = _favoriteMeals.contains(meal);
  //
  //   setState(() {
  //     if (isExisting) {
  //       _favoriteMeals.remove(meal);
  //       _showInfoMessage('Meal is no longer favorite.');
  //     } else {
  //       _favoriteMeals.add(meal);
  //       _showInfoMessage('Marked as favorite');
  //     }
  //   });
  // }

  void _selectPage(int index) {
    setState(() {
      _selectedPageIndex = index;
    });
  }

  void _setScreen(String identifier) async {
    Navigator.pop(context);
    if (identifier == "Filters") {
      final result = await Navigator.of(context).push<Map<Filter, bool>>(
          MaterialPageRoute(builder: (ctx) => const FiltersScreen()));

      // setState(() {
      //   _selectedFilters = result ?? kInitialFilters;
      // });
    }
  }

  @override
  Widget build(BuildContext context) {
    final meals  = ref.watch(mealsProvider);
    final activeFilters = ref.watch(filtersProvider);
    final availableMeals = ref.watch(mealsProvider).where((meal) {
      if (activeFilters[Filter.glutenFree]! && !meal.isGlutenFree) {
        return false;
      }
      if (activeFilters[Filter.lactoseFree]! && !meal.isLactoseFree) {
        return false;
      }
      if (activeFilters[Filter.vegetarian]! && !meal.isVegetarian) {
        return false;
      }
      if (activeFilters[Filter.vegan]! && !meal.isVegan) {
        return false;
      }
      return true;
    }).toList();

    Widget activePage = CategoriesScreen(
        // onToggleFavorite: _toggleMealFavoriteStatus,
        availableMeals: availableMeals);

    var activePageTitle = 'Categories';
    if (_selectedPageIndex == 1) {
      final favoriteMeals = ref.watch(favoriteMealsProvider);

      activePage = MealsScreens(
        meals: favoriteMeals,
        // onToggleFavorite: _toggleMealFavoriteStatus,
      );
      activePageTitle = 'Your Favorites';
    }

    return Scaffold(
      appBar: AppBar(title: Text(activePageTitle)),
      //hamburger tab bar
      drawer: MainDrawer(onSelectScreen: _setScreen),
      body: activePage,
      bottomNavigationBar: BottomNavigationBar(
        onTap: _selectPage,
        // currentIndex: used to highlight the tab
        currentIndex: _selectedPageIndex,
        items: const [
          BottomNavigationBarItem(
              icon: Icon(Icons.set_meal), label: 'Categories'),
          BottomNavigationBarItem(icon: Icon(Icons.star), label: 'Favorite')
        ],
      ),
    );
  }
}
