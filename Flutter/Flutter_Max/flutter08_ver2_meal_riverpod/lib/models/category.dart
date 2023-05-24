import 'package:flutter/material.dart';

abstract class AbstractCategory {
  const AbstractCategory({
    required this.id,
    required this.title,
    this.color = Colors.orange,
  });

  final String id;
  final String title;
  final Color color;
}

class Category extends AbstractCategory {
  const Category({
    required String id,
    required String title,
    Color color = Colors.orange,
  }) : super(id: id, title: title, color: color);
}
