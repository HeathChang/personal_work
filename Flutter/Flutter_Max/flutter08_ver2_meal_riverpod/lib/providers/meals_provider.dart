import 'package:flutter08_meal/data/dummy_data.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final mealsProvider = Provider((ref){
  return dummyMeals;
});

