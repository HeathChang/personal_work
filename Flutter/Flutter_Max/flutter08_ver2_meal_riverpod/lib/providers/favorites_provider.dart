import 'package:flutter08_meal/models/meal.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

// StateNotifier 는 notifier안에서만 상태를 변경할 수 있는 불변 상태 관리 솔루션
class FavoriteMealsNotifier extends StateNotifier<List<Meal>> {
  // never edit the value, need to re-create !
  FavoriteMealsNotifier() : super([]);

  bool toggleMealFavoriteStatus(Meal meal) {
    // state : holds data (state란 "언제든지 UI를 다시 빌드하기 위해 필요한 모든 데이터")
    // 2 types of state.
    // 1. ephemeral (하루살이) : 하나의 위젯에만 존재하는 state
    // 2. app : app 자체에서 사용되는, 서로 다른 위젝간에 공유하는 state

    final meaIsFavorite = state.contains(meal);
    // state는 StateNorifier가 관리하고 있는 상태값이다.
    // 왜. add 나. remove를 사용해서 값을 수정하지 않는 건가요 ?
    // 이유는 state를 변경하기 위해서 입니다.
    // StateNorifier의 사용 이유가 state가 변경되면 알려주기 위해서인데
    // .add나 .remove를 사용하면 해당 list객체 안에서 값을 추가하거나 ,
    // 값을 지우기 때문에 state가 변경되지 않습니다. => 변경을 감지할 수 없음
    // 이러한 이유 때문에 addBook(), removeBook()을 이용해
    // 새로운 list 객체를 넣어서 state가 변경되게 합니다.

    if (meaIsFavorite) {
      // remove
      state = state.where((m) => m.id != meal.id).toList();
      return false;
    } else {
      // add
      state = [...state, meal];
      return true;
    }
  }
}

final favoriteMealsProvider =
    StateNotifierProvider<FavoriteMealsNotifier, List<Meal>>((ref) {
  return FavoriteMealsNotifier();
});

//  Provider is good for static dummy data.
// StateNotifierProvider is good for data that can be changed.
