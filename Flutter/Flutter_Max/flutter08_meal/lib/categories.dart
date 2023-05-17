import 'package:flutter/material.dart';

class CategoriesScreen extends StatelessWidget {
  const CategoriesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Pick your category"),
      ),
      body: GridView(
        // gridDelegate: controls the layout of Grid : top to bottom, left to right,  horizontally 2
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2, // Row 별 item 갯수
          childAspectRatio: 3 / 2, // item의 가로 세로 비율 => 3줄 가로 / 2줄 세로.
          crossAxisSpacing: 20, // Row item의 간격
          mainAxisSpacing: 20, // Colum item의 간격
        ),
        children: const [
          Text(
            "1",
            style: TextStyle(color: Colors.white),
          ),
          Text("2", style: TextStyle(color: Colors.white)),
          Text("3", style: TextStyle(color: Colors.white)),
          Text("4", style: TextStyle(color: Colors.white)),
          Text("5", style: TextStyle(color: Colors.white)),
          Text("6", style: TextStyle(color: Colors.white)),
        ],
      ),
    );
  }
}
