import 'package:favorite_places/models/place.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class MapScreen extends StatefulWidget {
  const MapScreen(
      {Key? key,
      this.location = const PlaceLocation(
          latitude: 37.422, longitude: -122.084, address: 'Google!'),
      this.isSelecting = true})
      : super(key: key);

  final PlaceLocation location;
  final bool isSelecting;

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:
            Text(widget.isSelecting ? 'Pick your location.' : 'Your Location'),
        actions: [
          if (widget.isSelecting)
            IconButton(
              icon: const Icon(Icons.save),
              onPressed: () {},
            )
        ],
      ),
      // Check Google Map Documents
      body: GoogleMap(
        initialCameraPosition: CameraPosition(
            target: LatLng(widget.location.latitude, widget.location.longitude),
            zoom: 16),

        /// set of markers
        markers: {
          Marker(
              markerId: const MarkerId('m1'),
              position:
                  LatLng(widget.location.latitude, widget.location.longitude))
        },
      ),
    );
  }
}
