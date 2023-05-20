import 'package:flutter/material.dart';
import 'package:flutter08_meal/models/meal.dart';
import 'package:flutter08_meal/widgets/meal_item_trait.dart';
import 'package:transparent_image/transparent_image.dart';

class MealItem extends StatelessWidget {
  const MealItem({super.key, required this.meal});

  final Meal meal;

  String get getComplexityText {
    return meal.complexity.name[0].toUpperCase() +
        meal.complexity.name.substring(1);
  }
  String get getAffordability {
    return meal.affordability.name[0].toUpperCase() +
        meal.affordability.name.substring(1);
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.all(8),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
      clipBehavior: Clip.hardEdge,
      //overflow: hidden
      elevation: 2,
      child: InkWell(
        onTap: () {},
        // stack: position multiple widgets above each other, but not above each other as column
        child: Stack(
          //stack ignores shape attribute.
          children: [
            // display an Image in fade.
            // flutter  pub add transparent_image
            FadeInImage(
              placeholder: MemoryImage(kTransparentImage),
              image: NetworkImage(meal.imageUrl),
              fit: BoxFit.cover,
              // fit
              height: 200,
              width: double.infinity,
            ),
            // Positioned widget: can give tlbr info to positioni the child.
            Positioned(
              bottom: 0,
              left: 0,
              right: 0,
              child: Container(
                color: Colors.black54,
                padding:
                    const EdgeInsets.symmetric(horizontal: 44, vertical: 5),
                child: Column(
                  children: [
                    Text(
                      meal.title,
                      maxLines: 2,
                      textAlign: TextAlign.center,
                      softWrap: true,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Colors.white),
                    ),
                    const SizedBox(height: 12),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        MealItemTrait(icon: Icons.schedule, label: '${meal.duration} min'),
                        const SizedBox(width: 12),
                        MealItemTrait(icon: Icons.work, label: getComplexityText),
                        const SizedBox(width: 12),
                        MealItemTrait(icon: Icons.work, label: getAffordability),
                      ],
                    )
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
