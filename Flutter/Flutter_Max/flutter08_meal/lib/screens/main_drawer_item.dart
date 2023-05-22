import 'package:flutter/material.dart';

class MainDrawerItem extends StatelessWidget {

  const MainDrawerItem({super.key, required this.keyword, required this.icon, required this.onSelectScreen});

  final String keyword;
  final IconData icon;

  final void Function(String identifier) onSelectScreen;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      // set a widget that will be presented at the beginning of the row.
      leading: Icon(
        icon,
        size: 26,
        color: Theme.of(context).colorScheme.onBackground,
      ),
      title: Text(
        keyword,
        style: Theme.of(context).textTheme.titleMedium!.copyWith(
              color: Theme.of(context).colorScheme.onBackground,
              fontSize: 24,
            ),
      ),
      onTap: () {
        onSelectScreen(keyword);
      },
    );
  }
}
