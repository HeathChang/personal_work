import 'package:flutter/material.dart';
import 'package:flutter08_meal/screens/main_drawer_item.dart';

class MainDrawer extends StatelessWidget {
  const MainDrawer({Key? key, required this.onSelectScreen}) : super(key: key);

  final void Function(String identifier) onSelectScreen;

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          DrawerHeader(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [
                Theme.of(context).colorScheme.primaryContainer,
                Theme.of(context).colorScheme.primaryContainer.withOpacity(0.8),
              ], begin: Alignment.topLeft, end: Alignment.bottomRight),
            ),
            child: Row(
              children: [
                Icon(
                  Icons.fastfood,
                  size: 48,
                  color: Theme.of(context).colorScheme.primary,
                ),
                const SizedBox(width: 18),
                Text(
                  'Cooking up !',
                  style: Theme.of(context).textTheme.titleLarge!.copyWith(
                        color: Theme.of(context).colorScheme.primary,
                      ),
                )
              ],
            ),
          ),
          // outputting list content

          MainDrawerItem(
              keyword: 'Meals',
              icon: Icons.restaurant,
              onSelectScreen: onSelectScreen),
          MainDrawerItem(
              keyword: 'Filters',
              icon: Icons.settings,
              onSelectScreen: onSelectScreen)
        ],
      ),
    );
  }
}
