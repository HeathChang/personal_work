import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'package:favorite_places/screens/add_place.dart';
import 'package:favorite_places/widgets/places_list.dart';
import 'package:favorite_places/providers/user_places.dart';

class PlacesScreen extends ConsumerStatefulWidget {
  const PlacesScreen({super.key});


  @override
  ConsumerState<ConsumerStatefulWidget> createState() {
    return _PlacesScreenState();
  }

}


class _PlacesScreenState extends ConsumerState<PlacesScreen> {
  late Future<void> _placesFuture; // late: will set later

  @override
  void initState(){
    super.initState();
    _placesFuture = ref.read(userPlacesProvider.notifier).loadPlaces();
  }

  @override
  Widget build(BuildContext context) {
    final userPlaces = ref.watch(userPlacesProvider);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Your Places'),
        actions: [
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () {
              Navigator.of(context).push(
                MaterialPageRoute(
                  builder: (ctx) => const AddPlaceScreen(),
                ),
              );
            },
          ),
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),

        // The FutureBuilder widget is used to asynchronously build UI based on the result of a future.
        // In this case, the future being passed is _placesFuture. The builder property of FutureBuilder takes a callback function that receives the context and snapshot as parameters.
        // The snapshot represents the current state of the future.
        // The code checks the connectionState property of the snapshot to determine what UI to display. If the connection state is ConnectionState.waiting, indicating that the future is still in progress, a Center widget with a CircularProgressIndicator is displayed.
        // This is a common loading indicator used to show that data is being fetched.
        // Once the future completes, and the connection state is no longer ConnectionState.waiting, the PlacesList widget is displayed. It is passed the userPlaces as a parameter. userPlaces is likely the result obtained from _placesFuture.
        child: FutureBuilder(future: _placesFuture, builder: (context, snapshot) =>
        snapshot.connectionState == ConnectionState.waiting ? const Center(
            child: CircularProgressIndicator()) : PlacesList(places: userPlaces,
        )
        ),
      ),
    );
  }
}

