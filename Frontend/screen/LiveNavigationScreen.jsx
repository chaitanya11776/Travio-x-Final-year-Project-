// // // // // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // // // // // import { 
// // // // // // // // // // // // //   StyleSheet, 
// // // // // // // // // // // // //   View, 
// // // // // // // // // // // // //   ActivityIndicator, 
// // // // // // // // // // // // //   TouchableOpacity, 
// // // // // // // // // // // // //   Text, 
// // // // // // // // // // // // //   TextInput,
// // // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // // //   Keyboard
// // // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // // import { WebView } from 'react-native-webview';
// // // // // // // // // // // // // import * as Location from 'expo-location';
// // // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // // // export default function LiveNavigationScreen({ navigation }) {
// // // // // // // // // // // // //   const webViewRef = useRef(null);
// // // // // // // // // // // // //   const [location, setLocation] = useState(null);
// // // // // // // // // // // // //   const [destination, setDestination] = useState({ 
// // // // // // // // // // // // //     lat: 18.9220, 
// // // // // // // // // // // // //     lng: 72.8347, 
// // // // // // // // // // // // //     name: 'Gateway of India' 
// // // // // // // // // // // // //   });
// // // // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // // // // //   const [isRouteVisible, setIsRouteVisible] = useState(true);

// // // // // // // // // // // // //   // 📍 Live Location Tracking
// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     (async () => {
// // // // // // // // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // // // // // // // // // //       if (status !== 'granted') return;

// // // // // // // // // // // // //       await Location.watchPositionAsync(
// // // // // // // // // // // // //         { accuracy: Location.Accuracy.High, distanceInterval: 5 },
// // // // // // // // // // // // //         (newLocation) => {
// // // // // // // // // // // // //           const { latitude, longitude } = newLocation.coords;
// // // // // // // // // // // // //           setLocation([latitude, longitude]);

// // // // // // // // // // // // //           webViewRef.current?.injectJavaScript(`
// // // // // // // // // // // // //             updateUserLocation(${latitude}, ${longitude});
// // // // // // // // // // // // //           `);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       );
// // // // // // // // // // // // //     })();
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   // 🔍 Search City
// // // // // // // // // // // // //   const searchCity = async () => {
// // // // // // // // // // // // //     if (!searchQuery.trim()) return;
// // // // // // // // // // // // //     Keyboard.dismiss();
// // // // // // // // // // // // //     setLoading(true);

// // // // // // // // // // // // //     try {
// // // // // // // // // // // // //       const response = await axios.get(
// // // // // // // // // // // // //         `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
// // // // // // // // // // // // //       );

// // // // // // // // // // // // //       if (response.data.length > 0) {
// // // // // // // // // // // // //         const place = response.data[0];

// // // // // // // // // // // // //         const newDest = {
// // // // // // // // // // // // //           lat: parseFloat(place.lat),
// // // // // // // // // // // // //           lng: parseFloat(place.lon),
// // // // // // // // // // // // //           name: place.display_name.split(',')[0]
// // // // // // // // // // // // //         };

// // // // // // // // // // // // //         setDestination(newDest);

// // // // // // // // // // // // //         webViewRef.current?.injectJavaScript(`
// // // // // // // // // // // // //           updateDestination(${newDest.lat}, ${newDest.lng});
// // // // // // // // // // // // //         `);
// // // // // // // // // // // // //       } else {
// // // // // // // // // // // // //         alert("City not found");
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     } catch (e) {
// // // // // // // // // // // // //       alert("Search failed");
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     setLoading(false);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // 🎯 Recenter
// // // // // // // // // // // // //   const recenterMap = () => {
// // // // // // // // // // // // //     if (!location) return;

// // // // // // // // // // // // //     webViewRef.current?.injectJavaScript(`
// // // // // // // // // // // // //       map.flyTo([${location[0]}, ${location[1]}], 16);
// // // // // // // // // // // // //     `);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // 🔄 Toggle Route
// // // // // // // // // // // // //   const toggleRoute = () => {
// // // // // // // // // // // // //     const next = !isRouteVisible;
// // // // // // // // // // // // //     setIsRouteVisible(next);

// // // // // // // // // // // // //     webViewRef.current?.injectJavaScript(`
// // // // // // // // // // // // //       toggleRouting(${next});
// // // // // // // // // // // // //     `);
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   // 🌍 HTML MAP (Leaflet)
// // // // // // // // // // // // //   const mapHTML = `
// // // // // // // // // // // // //   <!DOCTYPE html>
// // // // // // // // // // // // //   <html>
// // // // // // // // // // // // //   <head>
// // // // // // // // // // // // //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// // // // // // // // // // // // //     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
// // // // // // // // // // // // //     <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
// // // // // // // // // // // // //     <script src="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"></script>

// // // // // // // // // // // // //     <style>
// // // // // // // // // // // // //       body { margin: 0; }
// // // // // // // // // // // // //       #map { height: 100vh; width: 100vw; }
// // // // // // // // // // // // //     </style>
// // // // // // // // // // // // //   </head>

// // // // // // // // // // // // //   <body>
// // // // // // // // // // // // //     <div id="map"></div>

// // // // // // // // // // // // //     <script>
// // // // // // // // // // // // //       var map = L.map('map');
// // // // // // // // // // // // //       map.setView([18.5204, 73.8567], 13);

// // // // // // // // // // // // //       // 🌍 High quality tiles
// // // // // // // // // // // // //       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(map);

// // // // // // // // // // // // //       var userMarker, destMarker, routingControl;

// // // // // // // // // // // // //       // 🎯 Default destination marker
// // // // // // // // // // // // //       destMarker = L.marker([${destination.lat}, ${destination.lng}]).addTo(map);

// // // // // // // // // // // // //       window.updateUserLocation = function(lat, lng) {
// // // // // // // // // // // // //         if (!userMarker) {
// // // // // // // // // // // // //           userMarker = L.circleMarker([lat, lng], {
// // // // // // // // // // // // //             radius: 8,
// // // // // // // // // // // // //             color: '#fff',
// // // // // // // // // // // // //             fillColor: '#3B82F6',
// // // // // // // // // // // // //             fillOpacity: 1
// // // // // // // // // // // // //           }).addTo(map);

// // // // // // // // // // // // //           initRoute(lat, lng);
// // // // // // // // // // // // //         } else {
// // // // // // // // // // // // //           userMarker.setLatLng([lat, lng]);

// // // // // // // // // // // // //           if (routingControl) {
// // // // // // // // // // // // //             routingControl.spliceWaypoints(0, 1, L.latLng(lat, lng));
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       };

// // // // // // // // // // // // //       window.updateDestination = function(lat, lng) {
// // // // // // // // // // // // //         if (destMarker) map.removeLayer(destMarker);

// // // // // // // // // // // // //         destMarker = L.marker([lat, lng]).addTo(map);

// // // // // // // // // // // // //         if (routingControl) {
// // // // // // // // // // // // //           routingControl.setWaypoints([
// // // // // // // // // // // // //             routingControl.getWaypoints()[0].latLng,
// // // // // // // // // // // // //             L.latLng(lat, lng)
// // // // // // // // // // // // //           ]);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       };

// // // // // // // // // // // // //       function initRoute(sLat, sLng) {
// // // // // // // // // // // // //         routingControl = L.Routing.control({
// // // // // // // // // // // // //           waypoints: [
// // // // // // // // // // // // //             L.latLng(sLat, sLng),
// // // // // // // // // // // // //             L.latLng(${destination.lat}, ${destination.lng})
// // // // // // // // // // // // //           ],
// // // // // // // // // // // // //           lineOptions: { styles: [{ color: '#10B981', weight: 6 }] },
// // // // // // // // // // // // //           addWaypoints: false,
// // // // // // // // // // // // //           show: false
// // // // // // // // // // // // //         }).addTo(map);
// // // // // // // // // // // // //       }

// // // // // // // // // // // // //       window.toggleRouting = function(show) {
// // // // // // // // // // // // //         if (!routingControl) return;

// // // // // // // // // // // // //         if (show) {
// // // // // // // // // // // // //           routingControl.addTo(map);
// // // // // // // // // // // // //         } else {
// // // // // // // // // // // // //           try {
// // // // // // // // // // // // //             map.removeControl(routingControl);
// // // // // // // // // // // // //           } catch(e) {}
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       };
// // // // // // // // // // // // //     </script>
// // // // // // // // // // // // //   </body>
// // // // // // // // // // // // //   </html>
// // // // // // // // // // // // //   `;

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <View style={styles.container}>

// // // // // // // // // // // // //       {/* 🔍 Search */}
// // // // // // // // // // // // //       <View style={styles.searchContainer}>
// // // // // // // // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // // // // // // // //           <Ionicons name="arrow-back" size={24} color="#FFF" />
// // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // //         <TextInput
// // // // // // // // // // // // //           style={styles.input}
// // // // // // // // // // // // //           placeholder="Search destination..."
// // // // // // // // // // // // //           placeholderTextColor="#aaa"
// // // // // // // // // // // // //           value={searchQuery}
// // // // // // // // // // // // //           onChangeText={setSearchQuery}
// // // // // // // // // // // // //           onSubmitEditing={searchCity}
// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         <TouchableOpacity onPress={searchCity}>
// // // // // // // // // // // // //           {loading 
// // // // // // // // // // // // //             ? <ActivityIndicator color="#10B981" /> 
// // // // // // // // // // // // //             : <Ionicons name="search" size={20} color="#10B981" />}
// // // // // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // // // // //       </View>

// // // // // // // // // // // // //       {/* 🗺 Map */}
// // // // // // // // // // // // //       <WebView
// // // // // // // // // // // // //         ref={webViewRef}
// // // // // // // // // // // // //         originWhitelist={['*']}
// // // // // // // // // // // // //         source={{ html: mapHTML }}
// // // // // // // // // // // // //         style={{ flex: 1 }}
// // // // // // // // // // // // //         javaScriptEnabled
// // // // // // // // // // // // //         domStorageEnabled
// // // // // // // // // // // // //         startInLoadingState
// // // // // // // // // // // // //         renderLoading={() => <ActivityIndicator size="large" />}
// // // // // // // // // // // // //       />

// // // // // // // // // // // // //       {/* 🎮 Buttons */}
// // // // // // // // // // // // //       <View style={styles.fabContainer}>
// // // // // // // // // // // // //         <TouchableOpacity style={styles.fab} onPress={recenterMap}>
// // // // // // // // // // // // //           <MaterialCommunityIcons name="crosshairs-gps" size={24} color="#fff" />
// // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // //         <TouchableOpacity style={styles.fab} onPress={toggleRoute}>
// // // // // // // // // // // // //           <Ionicons name="trail-sign" size={24} color="#fff" />
// // // // // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // // // // //       </View>

// // // // // // // // // // // // //     </View>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // //   container: { flex: 1 },

// // // // // // // // // // // // //   searchContainer: {
// // // // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // // // //     top: 50,
// // // // // // // // // // // // //     left: 20,
// // // // // // // // // // // // //     right: 20,
// // // // // // // // // // // // //     zIndex: 10,
// // // // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // // // //     backgroundColor: '#000',
// // // // // // // // // // // // //     padding: 10,
// // // // // // // // // // // // //     borderRadius: 10,
// // // // // // // // // // // // //     alignItems: 'center'
// // // // // // // // // // // // //   },

// // // // // // // // // // // // //   input: {
// // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // //     color: '#fff',
// // // // // // // // // // // // //     marginHorizontal: 10
// // // // // // // // // // // // //   },

// // // // // // // // // // // // //   fabContainer: {
// // // // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // // // //     right: 20,
// // // // // // // // // // // // //     top: 120
// // // // // // // // // // // // //   },

// // // // // // // // // // // // //   fab: {
// // // // // // // // // // // // //     backgroundColor: '#10B981',
// // // // // // // // // // // // //     padding: 15,
// // // // // // // // // // // // //     borderRadius: 30,
// // // // // // // // // // // // //     marginBottom: 10
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // });










// // // // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // // // // import { 
// // // // // // // // // // // //   StyleSheet, 
// // // // // // // // // // // //   View, 
// // // // // // // // // // // //   ActivityIndicator, 
// // // // // // // // // // // //   TouchableOpacity, 
// // // // // // // // // // // //   TextInput,
// // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // //   Keyboard,
// // // // // // // // // // // //   Alert,
// // // // // // // // // // // //   Text
// // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // import { WebView } from 'react-native-webview';
// // // // // // // // // // // // import * as Location from 'expo-location';
// // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // // const GEOAPIFY_KEY = 'fa6c855af73d4b1f959bb154f5ec2eb5'; 

// // // // // // // // // // // // export default function LiveNavigationScreen({ navigation }) {
// // // // // // // // // // // //   const webViewRef = useRef(null);
// // // // // // // // // // // //   const [location, setLocation] = useState(null);
// // // // // // // // // // // //   const [destination, setDestination] = useState({ lat: 18.9220, lng: 72.8347, name: 'Gateway of India' });
// // // // // // // // // // // //   const [routeInfo, setRouteInfo] = useState({ distance: 0, duration: 0 }); // 🛣️ Track Distance
// // // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     (async () => {
// // // // // // // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // // // // // // // // //       if (status !== 'granted') {
// // // // // // // // // // // //         Alert.alert("Permission Denied", "Location access is required.");
// // // // // // // // // // // //         return;
// // // // // // // // // // // //       }

// // // // // // // // // // // //       await Location.watchPositionAsync(
// // // // // // // // // // // //         { accuracy: Location.Accuracy.High, distanceInterval: 5 },
// // // // // // // // // // // //         (newLocation) => {
// // // // // // // // // // // //           const { latitude, longitude } = newLocation.coords;
// // // // // // // // // // // //           setLocation([latitude, longitude]);
// // // // // // // // // // // //           webViewRef.current?.injectJavaScript(`updateUserLocation(${latitude}, ${longitude});`);
// // // // // // // // // // // //         }
// // // // // // // // // // // //       );
// // // // // // // // // // // //     })();
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   // Receive data from WebView (Distance/Duration)
// // // // // // // // // // // //   const onMessage = (event) => {
// // // // // // // // // // // //     const data = JSON.parse(event.nativeEvent.data);
// // // // // // // // // // // //     if (data.type === 'ROUTE_INFO') {
// // // // // // // // // // // //       setRouteInfo({
// // // // // // // // // // // //         distance: (data.distance / 1000).toFixed(1), // Convert meters to KM
// // // // // // // // // // // //         duration: Math.round(data.duration / 60),    // Convert seconds to Minutes
// // // // // // // // // // // //       });
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const searchCity = async () => {
// // // // // // // // // // // //     if (!searchQuery.trim()) return;
// // // // // // // // // // // //     Keyboard.dismiss();
// // // // // // // // // // // //     setLoading(true);

// // // // // // // // // // // //     try {
// // // // // // // // // // // //       const response = await axios.get(
// // // // // // // // // // // //         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchQuery)}&apiKey=${GEOAPIFY_KEY}`
// // // // // // // // // // // //       );

// // // // // // // // // // // //       if (response.data.features && response.data.features.length > 0) {
// // // // // // // // // // // //         const [lon, lat] = response.data.features[0].geometry.coordinates;
// // // // // // // // // // // //         const name = response.data.features[0].properties.city || response.data.features[0].properties.name;
        
// // // // // // // // // // // //         setDestination({ lat, lng: lon, name });
// // // // // // // // // // // //         webViewRef.current?.injectJavaScript(`updateDestination(${lat}, ${lon});`);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     } catch (e) {
// // // // // // // // // // // //       Alert.alert("Error", "Search failed.");
// // // // // // // // // // // //     } finally {
// // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const mapHTML = `
// // // // // // // // // // // //   <!DOCTYPE html>
// // // // // // // // // // // //   <html>
// // // // // // // // // // // //   <head>
// // // // // // // // // // // //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// // // // // // // // // // // //     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
// // // // // // // // // // // //     <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
// // // // // // // // // // // //     <script src="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"></script>
// // // // // // // // // // // //     <style>
// // // // // // // // // // // //       body { margin: 0; padding: 0; background: #020617; }
// // // // // // // // // // // //       #map { height: 100vh; width: 100vw; }
// // // // // // // // // // // //       .leaflet-routing-container { display: none !important; }
// // // // // // // // // // // //     </style>
// // // // // // // // // // // //   </head>
// // // // // // // // // // // //   <body>
// // // // // // // // // // // //     <div id="map"></div>
// // // // // // // // // // // //     <script>
// // // // // // // // // // // //       var map = L.map('map', { zoomControl: false }).setView([18.5204, 73.8567], 13);
// // // // // // // // // // // //       L.tileLayer('https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${GEOAPIFY_KEY}').addTo(map);

// // // // // // // // // // // //       var userMarker, destMarker, routingControl;

// // // // // // // // // // // //       window.updateUserLocation = function(lat, lng) {
// // // // // // // // // // // //         if (!userMarker) {
// // // // // // // // // // // //           userMarker = L.circleMarker([lat, lng], { radius: 9, color: '#fff', weight: 3, fillColor: '#3B82F6', fillOpacity: 1 }).addTo(map);
// // // // // // // // // // // //           initRoute(lat, lng);
// // // // // // // // // // // //         } else {
// // // // // // // // // // // //           userMarker.setLatLng([lat, lng]);
// // // // // // // // // // // //           if (routingControl) routingControl.spliceWaypoints(0, 1, L.latLng(lat, lng));
// // // // // // // // // // // //         }
// // // // // // // // // // // //       };

// // // // // // // // // // // //       window.updateDestination = function(lat, lng) {
// // // // // // // // // // // //         if (destMarker) map.removeLayer(destMarker);
// // // // // // // // // // // //         destMarker = L.marker([lat, lng]).addTo(map);
// // // // // // // // // // // //         if (routingControl) {
// // // // // // // // // // // //           routingControl.setWaypoints([routingControl.getWaypoints()[0].latLng, L.latLng(lat, lng)]);
// // // // // // // // // // // //         }
// // // // // // // // // // // //       };

// // // // // // // // // // // //       function initRoute(sLat, sLng) {
// // // // // // // // // // // //         routingControl = L.Routing.control({
// // // // // // // // // // // //           waypoints: [L.latLng(sLat, sLng), L.latLng(${destination.lat}, ${destination.lng})],
// // // // // // // // // // // //           lineOptions: { styles: [{ color: '#10B981', weight: 6 }] },
// // // // // // // // // // // //           addWaypoints: false,
// // // // // // // // // // // //           fitSelectedRoutes: true,
// // // // // // // // // // // //           show: false
// // // // // // // // // // // //         }).on('routesfound', function(e) {
// // // // // // // // // // // //           var routes = e.routes;
// // // // // // // // // // // //           var summary = routes[0].summary;
// // // // // // // // // // // //           // 🚀 Send distance/duration to React Native
// // // // // // // // // // // //           window.ReactNativeWebView.postMessage(JSON.stringify({
// // // // // // // // // // // //             type: 'ROUTE_INFO',
// // // // // // // // // // // //             distance: summary.totalDistance,
// // // // // // // // // // // //             duration: summary.totalTime
// // // // // // // // // // // //           }));
// // // // // // // // // // // //         }).addTo(map);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     </script>
// // // // // // // // // // // //   </body>
// // // // // // // // // // // //   </html>
// // // // // // // // // // // //   `;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // // // //       {/* Header Search */}
// // // // // // // // // // // //       <View style={styles.searchContainer}>
// // // // // // // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={24} color="#FFF" /></TouchableOpacity>
// // // // // // // // // // // //         <TextInput style={styles.input} placeholder="Enter destination..." placeholderTextColor="#aaa" value={searchQuery} onChangeText={setSearchQuery} onSubmitEditing={searchCity} />
// // // // // // // // // // // //         <TouchableOpacity onPress={searchCity}>{loading ? <ActivityIndicator color="#10B981" /> : <Ionicons name="search" size={20} color="#10B981" />}</TouchableOpacity>
// // // // // // // // // // // //       </View>

// // // // // // // // // // // //       <WebView ref={webViewRef} originWhitelist={['*']} source={{ html: mapHTML }} style={{ flex: 1 }} javaScriptEnabled onMessage={onMessage} />

// // // // // // // // // // // //       {/* 📍 Recenter FAB */}
// // // // // // // // // // // //       <TouchableOpacity style={styles.fab} onPress={() => location && webViewRef.current?.injectJavaScript(`map.flyTo([${location[0]}, ${location[1]}], 16);`)}>
// // // // // // // // // // // //         <MaterialCommunityIcons name="crosshairs-gps" size={24} color="#fff" />
// // // // // // // // // // // //       </TouchableOpacity>

// // // // // // // // // // // //       {/* 📊 Smart Route Card */}
// // // // // // // // // // // //       <View style={styles.routeCard}>
// // // // // // // // // // // //         <View style={styles.routeHeader}>
// // // // // // // // // // // //             <Ionicons name="navigate" size={20} color="#10B981" />
// // // // // // // // // // // //             <Text style={styles.destName} numberOfLines={1}>{destination.name}</Text>
// // // // // // // // // // // //         </View>
// // // // // // // // // // // //         <View style={styles.statsRow}>
// // // // // // // // // // // //             <View style={styles.stat}>
// // // // // // // // // // // //                 <Text style={styles.statLabel}>DISTANCE</Text>
// // // // // // // // // // // //                 <Text style={styles.statValue}>{routeInfo.distance} KM</Text>
// // // // // // // // // // // //             </View>
// // // // // // // // // // // //             <View style={styles.divider} />
// // // // // // // // // // // //             <View style={styles.stat}>
// // // // // // // // // // // //                 <Text style={styles.statLabel}>DURATION</Text>
// // // // // // // // // // // //                 <Text style={styles.statValue}>{routeInfo.duration} MIN</Text>
// // // // // // // // // // // //             </View>
// // // // // // // // // // // //         </View>
// // // // // // // // // // // //       </View>
// // // // // // // // // // // //     </View>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // // // // // // //   searchContainer: { position: 'absolute', top: 50, left: 20, right: 20, zIndex: 10, flexDirection: 'row', backgroundColor: '#0F172A', padding: 12, borderRadius: 15, alignItems: 'center', borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // //   input: { flex: 1, color: '#fff', marginHorizontal: 10, fontSize: 16 },
// // // // // // // // // // // //   fab: { position: 'absolute', right: 20, bottom: 180, backgroundColor: '#10B981', padding: 16, borderRadius: 35, elevation: 5 },
// // // // // // // // // // // //   routeCard: { position: 'absolute', bottom: 30, left: 20, right: 20, backgroundColor: '#0F172A', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#1E293B', elevation: 10 },
// // // // // // // // // // // //   routeHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
// // // // // // // // // // // //   destName: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 10, flex: 1 },
// // // // // // // // // // // //   statsRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
// // // // // // // // // // // //   stat: { alignItems: 'center' },
// // // // // // // // // // // //   statLabel: { color: '#64748B', fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
// // // // // // // // // // // //   statValue: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginTop: 4 },
// // // // // // // // // // // //   divider: { width: 1, height: 30, backgroundColor: '#1E293B' }
// // // // // // // // // // // // });










// // // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // // // import { 
// // // // // // // // // // //   StyleSheet, View, ActivityIndicator, TouchableOpacity, 
// // // // // // // // // // //   TextInput, Dimensions, Keyboard, Alert, Text, Animated 
// // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // import { WebView } from 'react-native-webview';
// // // // // // // // // // // import * as Location from 'expo-location';
// // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // import { BlurView } from 'expo-blur'; // Ensure expo-blur is installed
// // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // const { width, height } = Dimensions.get('window');
// // // // // // // // // // // const GEOAPIFY_KEY = 'fa6c855af73d4b1f959bb154f5ec2eb5'; 

// // // // // // // // // // // export default function LiveNavigationScreen({ navigation }) {
// // // // // // // // // // //   const webViewRef = useRef(null);
// // // // // // // // // // //   const slideAnim = useRef(new Animated.Value(200)).current; // For card entry
// // // // // // // // // // //   const [isMapReady, setIsMapReady] = useState(false);
// // // // // // // // // // //   const [location, setLocation] = useState(null);
// // // // // // // // // // //   const [destination, setDestination] = useState({ lat: 18.9220, lng: 72.8347, name: 'Mumbai' });
// // // // // // // // // // //   const [routeInfo, setRouteInfo] = useState({ distance: '0', duration: '0' });
// // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     (async () => {
// // // // // // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // // // // // // // //       if (status !== 'granted') {
// // // // // // // // // // //         Alert.alert("GPS Required", "Please enable location to use navigation.");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       // Track Live Location
// // // // // // // // // // //       await Location.watchPositionAsync(
// // // // // // // // // // //         { accuracy: Location.Accuracy.High, distanceInterval: 5 },
// // // // // // // // // // //         (newLoc) => {
// // // // // // // // // // //           const { latitude, longitude } = newLoc.coords;
// // // // // // // // // // //           setLocation([latitude, longitude]);
// // // // // // // // // // //           if (isMapReady) {
// // // // // // // // // // //             webViewRef.current?.injectJavaScript(`updateUserLocation(${latitude}, ${longitude});`);
// // // // // // // // // // //           }
// // // // // // // // // // //         }
// // // // // // // // // // //       );
// // // // // // // // // // //     })();
// // // // // // // // // // //   }, [isMapReady]);

// // // // // // // // // // //   // Animate the bottom card when route is found
// // // // // // // // // // //   const triggerSlideUp = () => {
// // // // // // // // // // //     Animated.spring(slideAnim, {
// // // // // // // // // // //       toValue: 0,
// // // // // // // // // // //       tension: 50,
// // // // // // // // // // //       friction: 8,
// // // // // // // // // // //       useNativeDriver: true
// // // // // // // // // // //     }).start();
// // // // // // // // // // //   };

// // // // // // // // // // //   const onMessage = (event) => {
// // // // // // // // // // //     const data = JSON.parse(event.nativeEvent.data);
// // // // // // // // // // //     if (data.type === 'ROUTE_INFO') {
// // // // // // // // // // //       setRouteInfo({
// // // // // // // // // // //         distance: (data.distance / 1000).toFixed(1),
// // // // // // // // // // //         duration: Math.round(data.duration / 60),
// // // // // // // // // // //       });
// // // // // // // // // // //       triggerSlideUp();
// // // // // // // // // // //     } else if (data.type === 'MAP_READY') {
// // // // // // // // // // //       setIsMapReady(true);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const searchCity = async () => {
// // // // // // // // // // //     if (!searchQuery.trim()) return;
// // // // // // // // // // //     Keyboard.dismiss();
// // // // // // // // // // //     setLoading(true);

// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axios.get(
// // // // // // // // // // //         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchQuery)}&apiKey=${GEOAPIFY_KEY}`
// // // // // // // // // // //       );

// // // // // // // // // // //       if (res.data.features && res.data.features.length > 0) {
// // // // // // // // // // //         const [lon, lat] = res.data.features[0].geometry.coordinates;
// // // // // // // // // // //         const name = res.data.features[0].properties.city || res.data.features[0].properties.name;
        
// // // // // // // // // // //         setDestination({ lat, lng: lon, name });
// // // // // // // // // // //         webViewRef.current?.injectJavaScript(`updateDestination(${lat}, ${lon});`);
// // // // // // // // // // //       } else {
// // // // // // // // // // //         Alert.alert("Not Found", "Try a specific city name.");
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (e) {
// // // // // // // // // // //       Alert.alert("Error", "Check your connection.");
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const mapHTML = `
// // // // // // // // // // //   <!DOCTYPE html>
// // // // // // // // // // //   <html>
// // // // // // // // // // //   <head>
// // // // // // // // // // //     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
// // // // // // // // // // //     <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
// // // // // // // // // // //     <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
// // // // // // // // // // //     <script src="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"></script>
// // // // // // // // // // //     <style>
// // // // // // // // // // //       body { margin: 0; background: #020617; }
// // // // // // // // // // //       #map { height: 100vh; width: 100vw; }
// // // // // // // // // // //       .leaflet-routing-container { display: none !important; }
// // // // // // // // // // //       /* Pulse effect for user location */
// // // // // // // // // // //       .user-pulse { width: 20px; height: 20px; background: #3B82F6; border: 3px solid white; border-radius: 50%; box-shadow: 0 0 15px #3B82F6; }
// // // // // // // // // // //     </style>
// // // // // // // // // // //   </head>
// // // // // // // // // // //   <body>
// // // // // // // // // // //     <div id="map"></div>
// // // // // // // // // // //     <script>
// // // // // // // // // // //       var map = L.map('map', { zoomControl: false }).setView([18.5204, 73.8567], 13);
// // // // // // // // // // //       L.tileLayer('https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${GEOAPIFY_KEY}').addTo(map);

// // // // // // // // // // //       var userMarker, destMarker, routingControl;

// // // // // // // // // // //       window.updateUserLocation = function(lat, lng) {
// // // // // // // // // // //         if (!userMarker) {
// // // // // // // // // // //           userMarker = L.marker([lat, lng], { icon: L.divIcon({ className: 'user-pulse' }) }).addTo(map);
// // // // // // // // // // //           initRoute(lat, lng);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           userMarker.setLatLng([lat, lng]);
// // // // // // // // // // //           if (routingControl) routingControl.spliceWaypoints(0, 1, L.latLng(lat, lng));
// // // // // // // // // // //         }
// // // // // // // // // // //       };

// // // // // // // // // // //       window.updateDestination = function(lat, lng) {
// // // // // // // // // // //         if (destMarker) map.removeLayer(destMarker);
// // // // // // // // // // //         destMarker = L.marker([lat, lng]).addTo(map);
// // // // // // // // // // //         if (routingControl) {
// // // // // // // // // // //           routingControl.setWaypoints([routingControl.getWaypoints()[0].latLng, L.latLng(lat, lng)]);
// // // // // // // // // // //         }
// // // // // // // // // // //         map.flyTo([lat, lng], 14);
// // // // // // // // // // //       };

// // // // // // // // // // //       function initRoute(sLat, sLng) {
// // // // // // // // // // //         routingControl = L.Routing.control({
// // // // // // // // // // //           waypoints: [L.latLng(sLat, sLng), L.latLng(${destination.lat}, ${destination.lng})],
// // // // // // // // // // //           lineOptions: { styles: [{ color: '#10B981', weight: 7, opacity: 0.8 }] },
// // // // // // // // // // //           addWaypoints: false,
// // // // // // // // // // //           fitSelectedRoutes: true,
// // // // // // // // // // //           show: false
// // // // // // // // // // //         }).on('routesfound', function(e) {
// // // // // // // // // // //           window.ReactNativeWebView.postMessage(JSON.stringify({
// // // // // // // // // // //             type: 'ROUTE_INFO',
// // // // // // // // // // //             distance: e.routes[0].summary.totalDistance,
// // // // // // // // // // //             duration: e.routes[0].summary.totalTime
// // // // // // // // // // //           }));
// // // // // // // // // // //         }).addTo(map);
// // // // // // // // // // //       }

// // // // // // // // // // //       // Signal React Native that map is ready
// // // // // // // // // // //       window.onload = function() {
// // // // // // // // // // //         window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'MAP_READY' }));
// // // // // // // // // // //       }
// // // // // // // // // // //     </script>
// // // // // // // // // // //   </body>
// // // // // // // // // // //   </html>
// // // // // // // // // // //   `;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // // //       {/* --- PREMIUM HEADER --- */}
// // // // // // // // // // //       <View style={styles.headerWrapper}>
// // // // // // // // // // //         <BlurView intensity={60} tint="dark" style={styles.headerBlur}>
// // // // // // // // // // //           <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // // // // // //             <Ionicons name="chevron-back" size={28} color="#FFF" />
// // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // //           <TextInput 
// // // // // // // // // // //             style={styles.input} 
// // // // // // // // // // //             placeholder="Search city..." 
// // // // // // // // // // //             placeholderTextColor="#94A3B8" 
// // // // // // // // // // //             value={searchQuery} 
// // // // // // // // // // //             onChangeText={setSearchQuery} 
// // // // // // // // // // //             onSubmitEditing={searchCity} 
// // // // // // // // // // //           />
// // // // // // // // // // //           {loading ? <ActivityIndicator color="#10B981" /> : <TouchableOpacity onPress={searchCity}><Ionicons name="search" size={22} color="#10B981" /></TouchableOpacity>}
// // // // // // // // // // //         </BlurView>
// // // // // // // // // // //       </View>

// // // // // // // // // // //       <WebView 
// // // // // // // // // // //         ref={webViewRef} 
// // // // // // // // // // //         originWhitelist={['*']} 
// // // // // // // // // // //         source={{ html: mapHTML }} 
// // // // // // // // // // //         style={{ flex: 1 }} 
// // // // // // // // // // //         javaScriptEnabled 
// // // // // // // // // // //         onMessage={onMessage} 
// // // // // // // // // // //       />

// // // // // // // // // // //       {/* --- FLOATING ACTIONS --- */}
// // // // // // // // // // //       <TouchableOpacity style={styles.fab} onPress={() => location && webViewRef.current?.injectJavaScript(`map.flyTo([${location[0]}, ${location[1]}], 16);`)}>
// // // // // // // // // // //         <MaterialCommunityIcons name="target" size={26} color="#FFF" />
// // // // // // // // // // //       </TouchableOpacity>

// // // // // // // // // // //       {/* --- SMART ROUTE CARD (ANIMATED) --- */}
// // // // // // // // // // //       <Animated.View style={[styles.bottomCard, { transform: [{ translateY: slideAnim }] }]}>
// // // // // // // // // // //         <BlurView intensity={90} tint="dark" style={styles.cardBlur}>
// // // // // // // // // // //           <View style={styles.cardHeader}>
// // // // // // // // // // //             <View style={styles.destInfo}>
// // // // // // // // // // //               <Text style={styles.destLabel}>TARGET DESTINATION</Text>
// // // // // // // // // // //               <Text style={styles.destName} numberOfLines={1}>{destination.name}</Text>
// // // // // // // // // // //             </View>
// // // // // // // // // // //             <View style={styles.activeBadge}><Text style={styles.activeText}>LIVE</Text></View>
// // // // // // // // // // //           </View>

// // // // // // // // // // //           <View style={styles.divider} />

// // // // // // // // // // //           <View style={styles.statsRow}>
// // // // // // // // // // //             <View style={styles.statItem}>
// // // // // // // // // // //               <Text style={styles.statVal}>{routeInfo.distance} <Text style={styles.unit}>KM</Text></Text>
// // // // // // // // // // //               <Text style={styles.statLabel}>DISTANCE</Text>
// // // // // // // // // // //             </View>
// // // // // // // // // // //             <View style={styles.statItem}>
// // // // // // // // // // //               <Text style={styles.statVal}>{routeInfo.duration} <Text style={styles.unit}>MIN</Text></Text>
// // // // // // // // // // //               <Text style={styles.statLabel}>DURATION</Text>
// // // // // // // // // // //             </View>
// // // // // // // // // // //             <TouchableOpacity style={styles.goBtn}>
// // // // // // // // // // //               <Ionicons name="navigate" size={24} color="#FFF" />
// // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // //           </View>
// // // // // // // // // // //         </BlurView>
// // // // // // // // // // //       </Animated.View>
// // // // // // // // // // //     </View>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // // // // // //   headerWrapper: { position: 'absolute', top: 50, left: 20, right: 20, zIndex: 100 },
// // // // // // // // // // //   headerBlur: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
// // // // // // // // // // //   input: { flex: 1, color: '#FFF', fontSize: 16, marginHorizontal: 12 },
// // // // // // // // // // //   fab: { position: 'absolute', right: 20, bottom: 200, backgroundColor: '#10B981', width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', elevation: 8, shadowColor: '#10B981', shadowOpacity: 0.4, shadowRadius: 10 },
// // // // // // // // // // //   bottomCard: { position: 'absolute', bottom: 30, left: 20, right: 20, zIndex: 100 },
// // // // // // // // // // //   cardBlur: { borderRadius: 30, overflow: 'hidden', padding: 25, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
// // // // // // // // // // //   cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
// // // // // // // // // // //   destInfo: { flex: 1 },
// // // // // // // // // // //   destLabel: { color: '#10B981', fontSize: 10, fontWeight: 'bold', letterSpacing: 1 },
// // // // // // // // // // //   destName: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginTop: 4 },
// // // // // // // // // // //   activeBadge: { backgroundColor: 'rgba(239, 68, 68, 0.2)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
// // // // // // // // // // //   activeText: { color: '#EF4444', fontSize: 10, fontWeight: 'bold' },
// // // // // // // // // // //   divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)', marginVertical: 20 },
// // // // // // // // // // //   statsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
// // // // // // // // // // //   statItem: { alignItems: 'flex-start' },
// // // // // // // // // // //   statVal: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
// // // // // // // // // // //   unit: { fontSize: 12, color: '#94A3B8' },
// // // // // // // // // // //   statLabel: { color: '#64748B', fontSize: 10, fontWeight: 'bold', marginTop: 2 },
// // // // // // // // // // //   goBtn: { backgroundColor: '#10B981', width: 60, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', elevation: 5 },
// // // // // // // // // // // });











// // // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // // // import {
// // // // // // // // // // //   StyleSheet, View, ActivityIndicator, TouchableOpacity,
// // // // // // // // // // //   TextInput, Dimensions, Keyboard, Alert, Text, Animated
// // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // import { WebView } from 'react-native-webview';
// // // // // // // // // // // import * as Location from 'expo-location';
// // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // import { BlurView } from 'expo-blur';
// // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // const { width, height } = Dimensions.get('window');
// // // // // // // // // // // const GEOAPIFY_KEY = 'fa6c855af73d4b1f959bb154f5ec2eb5';

// // // // // // // // // // // export default function LiveNavigationScreen({ navigation }) {
// // // // // // // // // // //   const webViewRef = useRef(null);
// // // // // // // // // // //   const slideAnim = useRef(new Animated.Value(200)).current;

// // // // // // // // // // //   const [isMapReady, setIsMapReady] = useState(false);
// // // // // // // // // // //   const [location, setLocation] = useState(null);

// // // // // // // // // // //   const [destination, setDestination] = useState({
// // // // // // // // // // //     lat: 18.9220,
// // // // // // // // // // //     lng: 72.8347,
// // // // // // // // // // //     name: 'Mumbai'
// // // // // // // // // // //   });

// // // // // // // // // // //   const [routeInfo, setRouteInfo] = useState({
// // // // // // // // // // //     distance: '0',
// // // // // // // // // // //     duration: '0'
// // // // // // // // // // //   });

// // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // //   // 🚀 FAST DISTANCE FUNCTION
// // // // // // // // // // //   const getFastDistance = (lat1, lon1, lat2, lon2) => {
// // // // // // // // // // //     const R = 6371;
// // // // // // // // // // //     const dLat = (lat2 - lat1) * (Math.PI / 180);
// // // // // // // // // // //     const dLon = (lon2 - lon1) * (Math.PI / 180);

// // // // // // // // // // //     const a =
// // // // // // // // // // //       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
// // // // // // // // // // //       Math.cos(lat1 * (Math.PI / 180)) *
// // // // // // // // // // //       Math.cos(lat2 * (Math.PI / 180)) *
// // // // // // // // // // //       Math.sin(dLon / 2) *
// // // // // // // // // // //       Math.sin(dLon / 2);

// // // // // // // // // // //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
// // // // // // // // // // //     return R * c;
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     (async () => {
// // // // // // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // // // // // // // //       if (status !== 'granted') {
// // // // // // // // // // //         Alert.alert("GPS Required", "Enable location.");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       await Location.watchPositionAsync(
// // // // // // // // // // //         { accuracy: Location.Accuracy.High, distanceInterval: 10 },
// // // // // // // // // // //         (newLoc) => {
// // // // // // // // // // //           const { latitude, longitude } = newLoc.coords;
// // // // // // // // // // //           setLocation([latitude, longitude]);

// // // // // // // // // // //           // ⚡ FAST CALCULATION
// // // // // // // // // // //           const dist = getFastDistance(
// // // // // // // // // // //             latitude,
// // // // // // // // // // //             longitude,
// // // // // // // // // // //             destination.lat,
// // // // // // // // // // //             destination.lng
// // // // // // // // // // //           );

// // // // // // // // // // //           setRouteInfo({
// // // // // // // // // // //             distance: dist.toFixed(2),
// // // // // // // // // // //             duration: Math.round((dist / 40) * 60)
// // // // // // // // // // //           });

// // // // // // // // // // //           if (isMapReady) {
// // // // // // // // // // //             webViewRef.current?.injectJavaScript(
// // // // // // // // // // //               `updateUserLocation(${latitude}, ${longitude});`
// // // // // // // // // // //             );
// // // // // // // // // // //           }
// // // // // // // // // // //         }
// // // // // // // // // // //       );
// // // // // // // // // // //     })();
// // // // // // // // // // //   }, [isMapReady, destination]);

// // // // // // // // // // //   const triggerSlideUp = () => {
// // // // // // // // // // //     Animated.spring(slideAnim, {
// // // // // // // // // // //       toValue: 0,
// // // // // // // // // // //       useNativeDriver: true
// // // // // // // // // // //     }).start();
// // // // // // // // // // //   };

// // // // // // // // // // //   const onMessage = (event) => {
// // // // // // // // // // //     const data = JSON.parse(event.nativeEvent.data);

// // // // // // // // // // //     if (data.type === 'ROUTE_INFO') {
// // // // // // // // // // //       // 🛣️ overwrite with accurate route
// // // // // // // // // // //       setRouteInfo({
// // // // // // // // // // //         distance: (data.distance / 1000).toFixed(1),
// // // // // // // // // // //         duration: Math.round(data.duration / 60),
// // // // // // // // // // //       });
// // // // // // // // // // //       triggerSlideUp();
// // // // // // // // // // //     }

// // // // // // // // // // //     if (data.type === 'MAP_READY') {
// // // // // // // // // // //       setIsMapReady(true);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const searchCity = async () => {
// // // // // // // // // // //     if (!searchQuery.trim()) return;

// // // // // // // // // // //     Keyboard.dismiss();
// // // // // // // // // // //     setLoading(true);

// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axios.get(
// // // // // // // // // // //         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchQuery)}&apiKey=${GEOAPIFY_KEY}`
// // // // // // // // // // //       );

// // // // // // // // // // //       if (res.data.features.length > 0) {
// // // // // // // // // // //         const [lon, lat] = res.data.features[0].geometry.coordinates;
// // // // // // // // // // //         const name = res.data.features[0].properties.city || res.data.features[0].properties.name;

// // // // // // // // // // //         setDestination({ lat, lng: lon, name });

// // // // // // // // // // //         webViewRef.current?.injectJavaScript(
// // // // // // // // // // //           `updateDestination(${lat}, ${lon});`
// // // // // // // // // // //         );
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (e) {
// // // // // // // // // // //       Alert.alert("Error", "Network issue");
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const mapHTML = `
// // // // // // // // // // //   <!DOCTYPE html>
// // // // // // // // // // //   <html>
// // // // // // // // // // //   <head>
// // // // // // // // // // //     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
// // // // // // // // // // //     <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css"/>
// // // // // // // // // // //     <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
// // // // // // // // // // //     <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
// // // // // // // // // // //     <style>
// // // // // // // // // // //       body { margin:0; }
// // // // // // // // // // //       #map { height:100vh; }
// // // // // // // // // // //     </style>
// // // // // // // // // // //   </head>
// // // // // // // // // // //   <body>
// // // // // // // // // // //     <div id="map"></div>
// // // // // // // // // // //     <script>
// // // // // // // // // // //       var map = L.map('map').setView([18.5204, 73.8567], 13);

// // // // // // // // // // //       L.tileLayer('https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${GEOAPIFY_KEY}')
// // // // // // // // // // //       .addTo(map);

// // // // // // // // // // //       var userMarker, destMarker, routingControl;

// // // // // // // // // // //       window.updateUserLocation = function(lat, lng){
// // // // // // // // // // //         if(!userMarker){
// // // // // // // // // // //           userMarker = L.marker([lat,lng]).addTo(map);
// // // // // // // // // // //           initRoute(lat,lng);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           userMarker.setLatLng([lat,lng]);
// // // // // // // // // // //           if(routingControl){
// // // // // // // // // // //             routingControl.spliceWaypoints(0,1,L.latLng(lat,lng));
// // // // // // // // // // //           }
// // // // // // // // // // //         }
// // // // // // // // // // //       }

// // // // // // // // // // //       window.updateDestination = function(lat,lng){
// // // // // // // // // // //         if(destMarker) map.removeLayer(destMarker);
// // // // // // // // // // //         destMarker = L.marker([lat,lng]).addTo(map);

// // // // // // // // // // //         if(routingControl){
// // // // // // // // // // //           routingControl.setWaypoints([
// // // // // // // // // // //             routingControl.getWaypoints()[0].latLng,
// // // // // // // // // // //             L.latLng(lat,lng)
// // // // // // // // // // //           ]);
// // // // // // // // // // //         }
// // // // // // // // // // //       }

// // // // // // // // // // //       function initRoute(sLat,sLng){
// // // // // // // // // // //         routingControl = L.Routing.control({
// // // // // // // // // // //           waypoints:[
// // // // // // // // // // //             L.latLng(sLat,sLng),
// // // // // // // // // // //             L.latLng(${destination.lat},${destination.lng})
// // // // // // // // // // //           ],
// // // // // // // // // // //           show:false
// // // // // // // // // // //         }).on('routesfound',function(e){
// // // // // // // // // // //           window.ReactNativeWebView.postMessage(JSON.stringify({
// // // // // // // // // // //             type:'ROUTE_INFO',
// // // // // // // // // // //             distance:e.routes[0].summary.totalDistance,
// // // // // // // // // // //             duration:e.routes[0].summary.totalTime
// // // // // // // // // // //           }));
// // // // // // // // // // //         }).addTo(map);
// // // // // // // // // // //       }

// // // // // // // // // // //       window.onload = function(){
// // // // // // // // // // //         window.ReactNativeWebView.postMessage(JSON.stringify({type:'MAP_READY'}));
// // // // // // // // // // //       }
// // // // // // // // // // //     </script>
// // // // // // // // // // //   </body>
// // // // // // // // // // //   </html>
// // // // // // // // // // //   `;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <View style={styles.container}>

// // // // // // // // // // //       <View style={styles.header}>
// // // // // // // // // // //         <TextInput
// // // // // // // // // // //           style={styles.input}
// // // // // // // // // // //           placeholder="Search city..."
// // // // // // // // // // //           value={searchQuery}
// // // // // // // // // // //           onChangeText={setSearchQuery}
// // // // // // // // // // //           onSubmitEditing={searchCity}
// // // // // // // // // // //         />
// // // // // // // // // // //       </View>

// // // // // // // // // // //       <WebView
// // // // // // // // // // //         ref={webViewRef}
// // // // // // // // // // //         source={{ html: mapHTML }}
// // // // // // // // // // //         style={{ flex: 1 }}
// // // // // // // // // // //         javaScriptEnabled
// // // // // // // // // // //         onMessage={onMessage}
// // // // // // // // // // //       />

// // // // // // // // // // //       <TouchableOpacity style={styles.fab}
// // // // // // // // // // //         onPress={() =>
// // // // // // // // // // //           location &&
// // // // // // // // // // //           webViewRef.current?.injectJavaScript(
// // // // // // // // // // //             `map.flyTo([${location[0]},${location[1]}],16);`
// // // // // // // // // // //           )
// // // // // // // // // // //         }>
// // // // // // // // // // //         <MaterialCommunityIcons name="target" size={24} color="#fff" />
// // // // // // // // // // //       </TouchableOpacity>

// // // // // // // // // // //       <Animated.View style={[styles.card, { transform: [{ translateY: slideAnim }] }]}>
// // // // // // // // // // //         <BlurView intensity={80} style={styles.blur}>
// // // // // // // // // // //           <Text style={styles.title}>{destination.name}</Text>
// // // // // // // // // // //           <Text style={styles.info}>Distance: {routeInfo.distance} KM</Text>
// // // // // // // // // // //           <Text style={styles.info}>Time: {routeInfo.duration} MIN</Text>
// // // // // // // // // // //         </BlurView>
// // // // // // // // // // //       </Animated.View>

// // // // // // // // // // //     </View>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // //   container: { flex: 1 },
// // // // // // // // // // //   header: {
// // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // //     top: 50,
// // // // // // // // // // //     left: 20,
// // // // // // // // // // //     right: 20,
// // // // // // // // // // //     zIndex: 10
// // // // // // // // // // //   },
// // // // // // // // // // //   input: {
// // // // // // // // // // //     backgroundColor: '#fff',
// // // // // // // // // // //     padding: 10,
// // // // // // // // // // //     borderRadius: 10
// // // // // // // // // // //   },
// // // // // // // // // // //   fab: {
// // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // //     bottom: 200,
// // // // // // // // // // //     right: 20,
// // // // // // // // // // //     backgroundColor: 'green',
// // // // // // // // // // //     padding: 15,
// // // // // // // // // // //     borderRadius: 50
// // // // // // // // // // //   },
// // // // // // // // // // //   card: {
// // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // //     bottom: 40,
// // // // // // // // // // //     left: 20,
// // // // // // // // // // //     right: 20
// // // // // // // // // // //   },
// // // // // // // // // // //   blur: {
// // // // // // // // // // //     padding: 20,
// // // // // // // // // // //     borderRadius: 20
// // // // // // // // // // //   },
// // // // // // // // // // //   title: { fontSize: 20, fontWeight: 'bold' },
// // // // // // // // // // //   info: { fontSize: 16 }
// // // // // // // // // // // });










// // // // // // // // // // // import React, { useEffect, useState, useRef } from "react";
// // // // // // // // // // // import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// // // // // // // // // // // import MapView, { Marker, Polyline } from "react-native-maps";
// // // // // // // // // // // import * as Location from "expo-location";

// // // // // // // // // // // export default function MapScreen() {
// // // // // // // // // // //   const mapRef = useRef(null);

// // // // // // // // // // //   const [location, setLocation] = useState(null);

// // // // // // // // // // //   // 🎯 Default destination (Mumbai Gateway)
// // // // // // // // // // //   const [destination, setDestination] = useState({
// // // // // // // // // // //     latitude: 18.9220,
// // // // // // // // // // //     longitude: 72.8347,
// // // // // // // // // // //   });

// // // // // // // // // // //   const [routeCoords, setRouteCoords] = useState([]);

// // // // // // // // // // //   // 🚀 Get User Location
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     (async () => {
// // // // // // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();

// // // // // // // // // // //       if (status !== "granted") return;

// // // // // // // // // // //       Location.watchPositionAsync(
// // // // // // // // // // //         {
// // // // // // // // // // //           accuracy: Location.Accuracy.High,
// // // // // // // // // // //           distanceInterval: 5,
// // // // // // // // // // //         },
// // // // // // // // // // //         (loc) => {
// // // // // // // // // // //           const { latitude, longitude } = loc.coords;

// // // // // // // // // // //           const newLocation = {
// // // // // // // // // // //             latitude,
// // // // // // // // // // //             longitude,
// // // // // // // // // // //           };

// // // // // // // // // // //           setLocation(newLocation);

// // // // // // // // // // //           // Auto move camera
// // // // // // // // // // //           mapRef.current?.animateToRegion({
// // // // // // // // // // //             ...newLocation,
// // // // // // // // // // //             latitudeDelta: 0.01,
// // // // // // // // // // //             longitudeDelta: 0.01,
// // // // // // // // // // //           });

// // // // // // // // // // //           // Update route line
// // // // // // // // // // //           setRouteCoords([newLocation, destination]);
// // // // // // // // // // //         }
// // // // // // // // // // //       );
// // // // // // // // // // //     })();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   // 📏 FAST DISTANCE
// // // // // // // // // // //   const getDistance = (lat1, lon1, lat2, lon2) => {
// // // // // // // // // // //     const R = 6371;
// // // // // // // // // // //     const dLat = (lat2 - lat1) * (Math.PI / 180);
// // // // // // // // // // //     const dLon = (lon2 - lon1) * (Math.PI / 180);

// // // // // // // // // // //     const a =
// // // // // // // // // // //       Math.sin(dLat / 2) ** 2 +
// // // // // // // // // // //       Math.cos(lat1 * (Math.PI / 180)) *
// // // // // // // // // // //         Math.cos(lat2 * (Math.PI / 180)) *
// // // // // // // // // // //         Math.sin(dLon / 2) ** 2;

// // // // // // // // // // //     return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
// // // // // // // // // // //   };

// // // // // // // // // // //   const distance =
// // // // // // // // // // //     location &&
// // // // // // // // // // //     getDistance(
// // // // // // // // // // //       location.latitude,
// // // // // // // // // // //       location.longitude,
// // // // // // // // // // //       destination.latitude,
// // // // // // // // // // //       destination.longitude
// // // // // // // // // // //     ).toFixed(2);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // // //       {/* 🗺️ MAP */}
// // // // // // // // // // //       <MapView
// // // // // // // // // // //         ref={mapRef}
// // // // // // // // // // //         style={styles.map}
// // // // // // // // // // //         showsUserLocation
// // // // // // // // // // //         initialRegion={{
// // // // // // // // // // //           latitude: 18.5204,
// // // // // // // // // // //           longitude: 73.8567,
// // // // // // // // // // //           latitudeDelta: 0.05,
// // // // // // // // // // //           longitudeDelta: 0.05,
// // // // // // // // // // //         }}
// // // // // // // // // // //       >
// // // // // // // // // // //         {/* 📍 Destination Marker */}
// // // // // // // // // // //         <Marker coordinate={destination} title="Destination" />

// // // // // // // // // // //         {/* 🧭 Route Line */}
// // // // // // // // // // //         {routeCoords.length > 0 && (
// // // // // // // // // // //           <Polyline coordinates={routeCoords} strokeWidth={4} />
// // // // // // // // // // //         )}
// // // // // // // // // // //       </MapView>

// // // // // // // // // // //       {/* 📊 INFO CARD */}
// // // // // // // // // // //       <View style={styles.card}>
// // // // // // // // // // //         <Text style={styles.title}>Live Navigation</Text>
// // // // // // // // // // //         <Text>Distance: {distance || 0} KM</Text>

// // // // // // // // // // //         <TouchableOpacity style={styles.btn}>
// // // // // // // // // // //           <Text style={{ color: "#fff" }}>Start Navigation</Text>
// // // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // // //       </View>
// // // // // // // // // // //     </View>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // //   container: { flex: 1 },
// // // // // // // // // // //   map: { flex: 1 },

// // // // // // // // // // //   card: {
// // // // // // // // // // //     position: "absolute",
// // // // // // // // // // //     bottom: 30,
// // // // // // // // // // //     left: 20,
// // // // // // // // // // //     right: 20,
// // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // //     padding: 20,
// // // // // // // // // // //     borderRadius: 15,
// // // // // // // // // // //     elevation: 5,
// // // // // // // // // // //   },

// // // // // // // // // // //   title: {
// // // // // // // // // // //     fontSize: 18,
// // // // // // // // // // //     fontWeight: "bold",
// // // // // // // // // // //     marginBottom: 5,
// // // // // // // // // // //   },

// // // // // // // // // // //   btn: {
// // // // // // // // // // //     marginTop: 10,
// // // // // // // // // // //     backgroundColor: "green",
// // // // // // // // // // //     padding: 12,
// // // // // // // // // // //     borderRadius: 10,
// // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // //   },
// // // // // // // // // // // });










// // // // // // // // // // // import React, { useEffect, useState, useRef } from "react";
// // // // // // // // // // // import { 
// // // // // // // // // // //   View, Text, StyleSheet, TouchableOpacity, 
// // // // // // // // // // //   TextInput, ActivityIndicator, Keyboard, Alert 
// // // // // // // // // // // } from "react-native";
// // // // // // // // // // // import MapView, { Marker, Polyline } from "react-native-maps";
// // // // // // // // // // // import * as Location from "expo-location";
// // // // // // // // // // // import { Ionicons } from '@expo/vector-icons'; // Ensure expo-vector-icons is installed

// // // // // // // // // // // export default function MapScreen() {
// // // // // // // // // // //   const mapRef = useRef(null);

// // // // // // // // // // //   const [location, setLocation] = useState(null);
// // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // //   // 🎯 Destination State
// // // // // // // // // // //   const [destination, setDestination] = useState({
// // // // // // // // // // //     latitude: 18.9220,
// // // // // // // // // // //     longitude: 72.8347,
// // // // // // // // // // //     name: "Mumbai Gateway"
// // // // // // // // // // //   });

// // // // // // // // // // //   const [routeCoords, setRouteCoords] = useState([]);

// // // // // // // // // // //   // 🚀 Get & Watch User Location
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     (async () => {
// // // // // // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // // // // // // // //       if (status !== "granted") {
// // // // // // // // // // //         Alert.alert("Permission Denied", "Location access is needed for navigation.");
// // // // // // // // // // //         return;
// // // // // // // // // // //       }

// // // // // // // // // // //       Location.watchPositionAsync(
// // // // // // // // // // //         {
// // // // // // // // // // //           accuracy: Location.Accuracy.High,
// // // // // // // // // // //           distanceInterval: 5,
// // // // // // // // // // //         },
// // // // // // // // // // //         (loc) => {
// // // // // // // // // // //           const { latitude, longitude } = loc.coords;
// // // // // // // // // // //           const newLocation = { latitude, longitude };
// // // // // // // // // // //           setLocation(newLocation);

// // // // // // // // // // //           // Update route line whenever user moves
// // // // // // // // // // //           setRouteCoords([newLocation, { latitude: destination.latitude, longitude: destination.longitude }]);
// // // // // // // // // // //         }
// // // // // // // // // // //       );
// // // // // // // // // // //     })();
// // // // // // // // // // //   }, [destination]); // Re-run when destination changes

// // // // // // // // // // //   // 🔍 SEARCH FUNCTION (Geocoding)
// // // // // // // // // // //   const handleSearch = async () => {
// // // // // // // // // // //     if (!searchQuery.trim()) return;
    
// // // // // // // // // // //     setLoading(true);
// // // // // // // // // // //     Keyboard.dismiss();

// // // // // // // // // // //     try {
// // // // // // // // // // //       // Using OpenStreetMap Nominatim (Free, no API key required for basic use)
// // // // // // // // // // //       const response = await fetch(
// // // // // // // // // // //         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=1`
// // // // // // // // // // //       );
// // // // // // // // // // //       const data = await response.json();

// // // // // // // // // // //       if (data && data.length > 0) {
// // // // // // // // // // //         const newDest = {
// // // // // // // // // // //           latitude: parseFloat(data[0].lat),
// // // // // // // // // // //           longitude: parseFloat(data[0].lon),
// // // // // // // // // // //           name: data[0].display_name.split(',')[0] // Get short name
// // // // // // // // // // //         };

// // // // // // // // // // //         setDestination(newDest);
        
// // // // // // // // // // //         // Move camera to new destination
// // // // // // // // // // //         mapRef.current?.animateToRegion({
// // // // // // // // // // //           ...newDest,
// // // // // // // // // // //           latitudeDelta: 0.05,
// // // // // // // // // // //           longitudeDelta: 0.05,
// // // // // // // // // // //         }, 1000);

// // // // // // // // // // //       } else {
// // // // // // // // // // //         Alert.alert("Not Found", "Could not find that location.");
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       Alert.alert("Error", "Something went wrong with the search.");
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   // 📏 DISTANCE CALCULATION
// // // // // // // // // // //   const getDistance = (lat1, lon1, lat2, lon2) => {
// // // // // // // // // // //     const R = 6371;
// // // // // // // // // // //     const dLat = (lat2 - lat1) * (Math.PI / 180);
// // // // // // // // // // //     const dLon = (lon2 - lon1) * (Math.PI / 180);
// // // // // // // // // // //     const a =
// // // // // // // // // // //       Math.sin(dLat / 2) ** 2 +
// // // // // // // // // // //       Math.cos(lat1 * (Math.PI / 180)) *
// // // // // // // // // // //         Math.cos(lat2 * (Math.PI / 180)) *
// // // // // // // // // // //         Math.sin(dLon / 2) ** 2;
// // // // // // // // // // //     return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
// // // // // // // // // // //   };

// // // // // // // // // // //   const distance =
// // // // // // // // // // //     location &&
// // // // // // // // // // //     getDistance(
// // // // // // // // // // //       location.latitude,
// // // // // // // // // // //       location.longitude,
// // // // // // // // // // //       destination.latitude,
// // // // // // // // // // //       destination.longitude
// // // // // // // // // // //     ).toFixed(2);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <View style={styles.container}>
      
// // // // // // // // // // //       {/* 🗺️ MAP */}
// // // // // // // // // // //       <MapView
// // // // // // // // // // //         ref={mapRef}
// // // // // // // // // // //         style={styles.map}
// // // // // // // // // // //         showsUserLocation
// // // // // // // // // // //         initialRegion={{
// // // // // // // // // // //           latitude: 18.5204,
// // // // // // // // // // //           longitude: 73.8567,
// // // // // // // // // // //           latitudeDelta: 0.1,
// // // // // // // // // // //           longitudeDelta: 0.1,
// // // // // // // // // // //         }}
// // // // // // // // // // //       >
// // // // // // // // // // //         {/* 📍 Destination Marker */}
// // // // // // // // // // //         <Marker 
// // // // // // // // // // //             coordinate={destination} 
// // // // // // // // // // //             title={destination.name} 
// // // // // // // // // // //             pinColor="red"
// // // // // // // // // // //         />

// // // // // // // // // // //         {/* 🧭 Route Line */}
// // // // // // // // // // //         {routeCoords.length > 1 && (
// // // // // // // // // // //           <Polyline 
// // // // // // // // // // //             coordinates={routeCoords} 
// // // // // // // // // // //             strokeWidth={4} 
// // // // // // // // // // //             strokeColor="#3b82f6" 
// // // // // // // // // // //           />
// // // // // // // // // // //         )}
// // // // // // // // // // //       </MapView>

// // // // // // // // // // //       {/* 🔍 SEARCH INPUT BAR */}
// // // // // // // // // // //       <View style={styles.searchContainer}>
// // // // // // // // // // //         <TextInput
// // // // // // // // // // //           style={styles.searchInput}
// // // // // // // // // // //           placeholder="Search for a place..."
// // // // // // // // // // //           value={searchQuery}
// // // // // // // // // // //           onChangeText={setSearchQuery}
// // // // // // // // // // //           onSubmitEditing={handleSearch}
// // // // // // // // // // //         />
// // // // // // // // // // //         <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
// // // // // // // // // // //           {loading ? (
// // // // // // // // // // //             <ActivityIndicator color="#fff" />
// // // // // // // // // // //           ) : (
// // // // // // // // // // //             <Ionicons name="search" size={20} color="#fff" />
// // // // // // // // // // //           )}
// // // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // // //       </View>

// // // // // // // // // // //       {/* 📊 INFO CARD */}
// // // // // // // // // // //       <View style={styles.card}>
// // // // // // // // // // //         <Text style={styles.destLabel}>DESTINATION</Text>
// // // // // // // // // // //         <Text style={styles.title} numberOfLines={1}>{destination.name}</Text>
// // // // // // // // // // //         <Text style={styles.distanceText}>Distance: {distance || 0} KM</Text>

// // // // // // // // // // //         <TouchableOpacity 
// // // // // // // // // // //             style={styles.btn}
// // // // // // // // // // //             onPress={() => mapRef.current?.animateToRegion(location, 1000)}
// // // // // // // // // // //         >
// // // // // // // // // // //           <Text style={{ color: "#fff", fontWeight: 'bold' }}>Recenter on Me</Text>
// // // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // // //       </View>
// // // // // // // // // // //     </View>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // //   container: { flex: 1 },
// // // // // // // // // // //   map: { flex: 1 },

// // // // // // // // // // //   // Search Styles
// // // // // // // // // // //   searchContainer: {
// // // // // // // // // // //     position: "absolute",
// // // // // // // // // // //     top: 50,
// // // // // // // // // // //     left: 20,
// // // // // // // // // // //     right: 20,
// // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // //     borderRadius: 12,
// // // // // // // // // // //     elevation: 10,
// // // // // // // // // // //     shadowColor: '#000',
// // // // // // // // // // //     shadowOpacity: 0.1,
// // // // // // // // // // //     shadowRadius: 5,
// // // // // // // // // // //     paddingHorizontal: 10,
// // // // // // // // // // //     alignItems: 'center'
// // // // // // // // // // //   },
// // // // // // // // // // //   searchInput: {
// // // // // // // // // // //     flex: 1,
// // // // // // // // // // //     height: 50,
// // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // //   },
// // // // // // // // // // //   searchBtn: {
// // // // // // // // // // //     backgroundColor: '#3b82f6',
// // // // // // // // // // //     padding: 10,
// // // // // // // // // // //     borderRadius: 8,
// // // // // // // // // // //   },

// // // // // // // // // // //   // Card Styles
// // // // // // // // // // //   card: {
// // // // // // // // // // //     position: "absolute",
// // // // // // // // // // //     bottom: 30,
// // // // // // // // // // //     left: 20,
// // // // // // // // // // //     right: 20,
// // // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // // //     padding: 20,
// // // // // // // // // // //     borderRadius: 20,
// // // // // // // // // // //     elevation: 5,
// // // // // // // // // // //   },
// // // // // // // // // // //   destLabel: {
// // // // // // // // // // //     fontSize: 10,
// // // // // // // // // // //     color: '#3b82f6',
// // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // //     letterSpacing: 1
// // // // // // // // // // //   },
// // // // // // // // // // //   title: {
// // // // // // // // // // //     fontSize: 20,
// // // // // // // // // // //     fontWeight: "bold",
// // // // // // // // // // //     marginBottom: 2,
// // // // // // // // // // //   },
// // // // // // // // // // //   distanceText: {
// // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // //     color: '#667',
// // // // // // // // // // //     marginBottom: 10
// // // // // // // // // // //   },
// // // // // // // // // // //   btn: {
// // // // // // // // // // //     backgroundColor: "#10b981",
// // // // // // // // // // //     padding: 14,
// // // // // // // // // // //     borderRadius: 12,
// // // // // // // // // // //     alignItems: "center",
// // // // // // // // // // //   },
// // // // // // // // // // // });














// // // // // // // // // // import React, { useEffect, useState, useRef } from "react";
// // // // // // // // // // import {
// // // // // // // // // //   View,
// // // // // // // // // //   Text,
// // // // // // // // // //   StyleSheet,
// // // // // // // // // //   TouchableOpacity,
// // // // // // // // // //   TextInput,
// // // // // // // // // //   Alert,
// // // // // // // // // // } from "react-native";
// // // // // // // // // // import MapView, { Marker, Polyline } from "react-native-maps";
// // // // // // // // // // import * as Location from "expo-location";
// // // // // // // // // // import axios from "axios";

// // // // // // // // // // const GEOAPIFY_KEY = "fa6c855af73d4b1f959bb154f5ec2eb5";

// // // // // // // // // // export default function MapScreen() {
// // // // // // // // // //   const mapRef = useRef(null);

// // // // // // // // // //   const [location, setLocation] = useState(null);
// // // // // // // // // //   const [destination, setDestination] = useState(null);
// // // // // // // // // //   const [routeCoords, setRouteCoords] = useState([]);
// // // // // // // // // //   const [search, setSearch] = useState("");

// // // // // // // // // //   // 📍 GET USER LOCATION
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     (async () => {
// // // // // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // // // // // // //       if (status !== "granted") return;

// // // // // // // // // //       Location.watchPositionAsync(
// // // // // // // // // //         { accuracy: Location.Accuracy.High, distanceInterval: 5 },
// // // // // // // // // //         (loc) => {
// // // // // // // // // //           const { latitude, longitude } = loc.coords;
// // // // // // // // // //           const userLoc = { latitude, longitude };

// // // // // // // // // //           setLocation(userLoc);

// // // // // // // // // //           mapRef.current?.animateToRegion({
// // // // // // // // // //             ...userLoc,
// // // // // // // // // //             latitudeDelta: 0.01,
// // // // // // // // // //             longitudeDelta: 0.01,
// // // // // // // // // //           });

// // // // // // // // // //           if (destination) {
// // // // // // // // // //             setRouteCoords([userLoc, destination]);
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //       );
// // // // // // // // // //     })();
// // // // // // // // // //   }, [destination]);

// // // // // // // // // //   // 🔍 SEARCH CITY
// // // // // // // // // //   const searchLocation = async () => {
// // // // // // // // // //     if (!search.trim()) return;

// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axios.get(
// // // // // // // // // //         `https://api.geoapify.com/v1/geocode/search?text=${search}&apiKey=${GEOAPIFY_KEY}`
// // // // // // // // // //       );

// // // // // // // // // //       if (res.data.features.length === 0) {
// // // // // // // // // //         Alert.alert("Not found");
// // // // // // // // // //         return;
// // // // // // // // // //       }

// // // // // // // // // //       const [lon, lat] = res.data.features[0].geometry.coordinates;

// // // // // // // // // //       const dest = {
// // // // // // // // // //         latitude: lat,
// // // // // // // // // //         longitude: lon,
// // // // // // // // // //       };

// // // // // // // // // //       setDestination(dest);

// // // // // // // // // //       // move map
// // // // // // // // // //       mapRef.current?.animateToRegion({
// // // // // // // // // //         ...dest,
// // // // // // // // // //         latitudeDelta: 0.05,
// // // // // // // // // //         longitudeDelta: 0.05,
// // // // // // // // // //       });

// // // // // // // // // //       // update route
// // // // // // // // // //       if (location) {
// // // // // // // // // //         setRouteCoords([location, dest]);
// // // // // // // // // //       }
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       Alert.alert("Error fetching location");
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   // 📏 DISTANCE
// // // // // // // // // //   const getDistance = (lat1, lon1, lat2, lon2) => {
// // // // // // // // // //     const R = 6371;
// // // // // // // // // //     const dLat = (lat2 - lat1) * (Math.PI / 180);
// // // // // // // // // //     const dLon = (lon2 - lon1) * (Math.PI / 180);

// // // // // // // // // //     const a =
// // // // // // // // // //       Math.sin(dLat / 2) ** 2 +
// // // // // // // // // //       Math.cos(lat1 * (Math.PI / 180)) *
// // // // // // // // // //         Math.cos(lat2 * (Math.PI / 180)) *
// // // // // // // // // //         Math.sin(dLon / 2) ** 2;

// // // // // // // // // //     return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
// // // // // // // // // //   };

// // // // // // // // // //   const distance =
// // // // // // // // // //     location && destination
// // // // // // // // // //       ? getDistance(
// // // // // // // // // //           location.latitude,
// // // // // // // // // //           location.longitude,
// // // // // // // // // //           destination.latitude,
// // // // // // // // // //           destination.longitude
// // // // // // // // // //         ).toFixed(2)
// // // // // // // // // //       : 0;

// // // // // // // // // //   return (
// // // // // // // // // //     <View style={styles.container}>
// // // // // // // // // //       {/* 🔍 SEARCH BAR */}
// // // // // // // // // //       <View style={styles.searchBox}>
// // // // // // // // // //         <TextInput
// // // // // // // // // //           placeholder="Search city..."
// // // // // // // // // //           value={search}
// // // // // // // // // //           onChangeText={setSearch}
// // // // // // // // // //           style={styles.input}
// // // // // // // // // //         />
// // // // // // // // // //         <TouchableOpacity style={styles.btn} onPress={searchLocation}>
// // // // // // // // // //           <Text style={{ color: "#fff" }}>Search</Text>
// // // // // // // // // //         </TouchableOpacity>
// // // // // // // // // //       </View>

// // // // // // // // // //       {/* 🗺️ MAP */}
// // // // // // // // // //       <MapView
// // // // // // // // // //         ref={mapRef}
// // // // // // // // // //         style={styles.map}
// // // // // // // // // //         showsUserLocation
// // // // // // // // // //         initialRegion={{
// // // // // // // // // //           latitude: 20.5937,
// // // // // // // // // //           longitude: 78.9629,
// // // // // // // // // //           latitudeDelta: 5,
// // // // // // // // // //           longitudeDelta: 5,
// // // // // // // // // //         }}
// // // // // // // // // //       >
// // // // // // // // // //         {/* 📍 Destination */}
// // // // // // // // // //         {destination && <Marker coordinate={destination} title="Destination" />}

// // // // // // // // // //         {/* 🧭 Route */}
// // // // // // // // // //         {routeCoords.length > 0 && (
// // // // // // // // // //           <Polyline coordinates={routeCoords} strokeWidth={4} />
// // // // // // // // // //         )}
// // // // // // // // // //       </MapView>

// // // // // // // // // //       {/* 📊 INFO */}
// // // // // // // // // //       <View style={styles.card}>
// // // // // // // // // //         <Text style={styles.title}>Navigation Info</Text>
// // // // // // // // // //         <Text>Distance: {distance} KM</Text>
// // // // // // // // // //       </View>
// // // // // // // // // //     </View>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // //   container: { flex: 1 },

// // // // // // // // // //   map: { flex: 1 },

// // // // // // // // // //   searchBox: {
// // // // // // // // // //     position: "absolute",
// // // // // // // // // //     top: 50,
// // // // // // // // // //     left: 20,
// // // // // // // // // //     right: 20,
// // // // // // // // // //     flexDirection: "row",
// // // // // // // // // //     zIndex: 10,
// // // // // // // // // //   },

// // // // // // // // // //   input: {
// // // // // // // // // //     flex: 1,
// // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // //     padding: 10,
// // // // // // // // // //     borderRadius: 10,
// // // // // // // // // //   },

// // // // // // // // // //   btn: {
// // // // // // // // // //     backgroundColor: "blue",
// // // // // // // // // //     padding: 10,
// // // // // // // // // //     marginLeft: 10,
// // // // // // // // // //     borderRadius: 10,
// // // // // // // // // //   },

// // // // // // // // // //   card: {
// // // // // // // // // //     position: "absolute",
// // // // // // // // // //     bottom: 30,
// // // // // // // // // //     left: 20,
// // // // // // // // // //     right: 20,
// // // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // // //     padding: 15,
// // // // // // // // // //     borderRadius: 10,
// // // // // // // // // //   },

// // // // // // // // // //   title: {
// // // // // // // // // //     fontWeight: "bold",
// // // // // // // // // //     marginBottom: 5,
// // // // // // // // // //   },
// // // // // // // // // // });





// // // // // // // // // import React, { useEffect, useState, useRef } from "react";
// // // // // // // // // import {
// // // // // // // // //   View,
// // // // // // // // //   Text,
// // // // // // // // //   StyleSheet,
// // // // // // // // //   TextInput,
// // // // // // // // //   TouchableOpacity,
// // // // // // // // //   Alert,
// // // // // // // // // } from "react-native";
// // // // // // // // // import MapView, { Marker, Polyline } from "react-native-maps";
// // // // // // // // // import * as Location from "expo-location";
// // // // // // // // // import axios from "axios";

// // // // // // // // // const GEOAPIFY_KEY = "fa6c855af73d4b1f959bb154f5ec2eb5";

// // // // // // // // // export default function MapScreen() {
// // // // // // // // //   const mapRef = useRef(null);

// // // // // // // // //   const [location, setLocation] = useState(null);
// // // // // // // // //   const [destination, setDestination] = useState(null);
// // // // // // // // //   const [routeCoords, setRouteCoords] = useState([]);
// // // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // // //   const [distance, setDistance] = useState(0);

// // // // // // // // //   let lastRouteCall = 0;

// // // // // // // // //   // 📍 LIVE LOCATION
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     (async () => {
// // // // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // // // // // //       if (status !== "granted") {
// // // // // // // // //         Alert.alert("Location permission denied");
// // // // // // // // //         return;
// // // // // // // // //       }

// // // // // // // // //       Location.watchPositionAsync(
// // // // // // // // //         {
// // // // // // // // //           accuracy: Location.Accuracy.High,
// // // // // // // // //           distanceInterval: 5,
// // // // // // // // //         },
// // // // // // // // //         (loc) => {
// // // // // // // // //           const { latitude, longitude } = loc.coords;

// // // // // // // // //           const userLoc = {
// // // // // // // // //             latitude: Number(latitude),
// // // // // // // // //             longitude: Number(longitude),
// // // // // // // // //           };

// // // // // // // // //           setLocation(userLoc);

// // // // // // // // //           // Move camera
// // // // // // // // //           mapRef.current?.animateToRegion({
// // // // // // // // //             ...userLoc,
// // // // // // // // //             latitudeDelta: 0.01,
// // // // // // // // //             longitudeDelta: 0.01,
// // // // // // // // //           });

// // // // // // // // //           // 🚀 Update route (throttle)
// // // // // // // // //           if (destination && Date.now() - lastRouteCall > 3000) {
// // // // // // // // //             getRoute(userLoc, destination);
// // // // // // // // //             lastRouteCall = Date.now();
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //       );
// // // // // // // // //     })();
// // // // // // // // //   }, [destination]);

// // // // // // // // //   // 🔍 SEARCH CITY
// // // // // // // // //   const searchLocation = async () => {
// // // // // // // // //     if (!search.trim()) return;

// // // // // // // // //     try {
// // // // // // // // //       const res = await axios.get(
// // // // // // // // //         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
// // // // // // // // //           search
// // // // // // // // //         )}&apiKey=${GEOAPIFY_KEY}`
// // // // // // // // //       );

// // // // // // // // //       if (!res.data.features.length) {
// // // // // // // // //         Alert.alert("Location not found");
// // // // // // // // //         return;
// // // // // // // // //       }

// // // // // // // // //       const [lon, lat] = res.data.features[0].geometry.coordinates;

// // // // // // // // //       const dest = {
// // // // // // // // //         latitude: Number(lat),
// // // // // // // // //         longitude: Number(lon),
// // // // // // // // //       };

// // // // // // // // //       setDestination(dest);

// // // // // // // // //       // Move map
// // // // // // // // //       mapRef.current?.animateToRegion({
// // // // // // // // //         ...dest,
// // // // // // // // //         latitudeDelta: 0.05,
// // // // // // // // //         longitudeDelta: 0.05,
// // // // // // // // //       });

// // // // // // // // //       if (location) {
// // // // // // // // //         getRoute(location, dest);
// // // // // // // // //       }
// // // // // // // // //     } catch (err) {
// // // // // // // // //       Alert.alert("Error fetching location");
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   // 🛣️ REAL ROAD ROUTE (FIXED)
// // // // // // // // //   const getRoute = async (start, end) => {
// // // // // // // // //     try {
// // // // // // // // //       const res = await fetch(
// // // // // // // // //         `https://api.geoapify.com/v1/routing?waypoints=${start.latitude},${start.longitude}|${end.latitude},${end.longitude}&mode=drive&apiKey=${GEOAPIFY_KEY}`
// // // // // // // // //       );

// // // // // // // // //       const data = await res.json();

// // // // // // // // //       if (!data.features || !data.features.length) return;

// // // // // // // // //       const coords = data.features[0].geometry.coordinates;

// // // // // // // // //       // ✅ FIX: Convert correctly
// // // // // // // // //       const route = coords
// // // // // // // // //         .map((point) => ({
// // // // // // // // //           latitude: Number(point[1]),
// // // // // // // // //           longitude: Number(point[0]),
// // // // // // // // //         }))
// // // // // // // // //         .filter(
// // // // // // // // //           (p) =>
// // // // // // // // //             !isNaN(p.latitude) &&
// // // // // // // // //             !isNaN(p.longitude)
// // // // // // // // //         );

// // // // // // // // //       setRouteCoords(route);

// // // // // // // // //       // 📏 Distance
// // // // // // // // //       const meters = data.features[0].properties.distance;
// // // // // // // // //       setDistance((meters / 1000).toFixed(2));
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.log("Route error:", err);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <View style={styles.container}>
// // // // // // // // //       {/* 🔍 SEARCH BAR */}
// // // // // // // // //       <View style={styles.searchBox}>
// // // // // // // // //         <TextInput
// // // // // // // // //           placeholder="Search city..."
// // // // // // // // //           value={search}
// // // // // // // // //           onChangeText={setSearch}
// // // // // // // // //           style={styles.input}
// // // // // // // // //         />
// // // // // // // // //         <TouchableOpacity style={styles.btn} onPress={searchLocation}>
// // // // // // // // //           <Text style={{ color: "#fff" }}>Search</Text>
// // // // // // // // //         </TouchableOpacity>
// // // // // // // // //       </View>

// // // // // // // // //       {/* 🗺️ MAP */}
// // // // // // // // //       <MapView
// // // // // // // // //         ref={mapRef}
// // // // // // // // //         style={styles.map}
// // // // // // // // //         showsUserLocation={true}
// // // // // // // // //         initialRegion={{
// // // // // // // // //           latitude: 20.5937,
// // // // // // // // //           longitude: 78.9629,
// // // // // // // // //           latitudeDelta: 5,
// // // // // // // // //           longitudeDelta: 5,
// // // // // // // // //         }}
// // // // // // // // //       >
// // // // // // // // //         {/* 📍 DESTINATION */}
// // // // // // // // //         {destination && (
// // // // // // // // //           <Marker coordinate={destination} title="Destination" />
// // // // // // // // //         )}

// // // // // // // // //         {/* 🛣️ ROUTE */}
// // // // // // // // //         {routeCoords.length > 0 && (
// // // // // // // // //           <Polyline
// // // // // // // // //             coordinates={routeCoords}
// // // // // // // // //             strokeWidth={5}
// // // // // // // // //           />
// // // // // // // // //         )}
// // // // // // // // //       </MapView>

// // // // // // // // //       {/* 📊 INFO CARD */}
// // // // // // // // //       <View style={styles.card}>
// // // // // // // // //         <Text style={styles.title}>Live Navigation</Text>
// // // // // // // // //         <Text>Distance: {distance} KM</Text>
// // // // // // // // //       </View>
// // // // // // // // //     </View>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // //   container: { flex: 1 },

// // // // // // // // //   map: { flex: 1 },

// // // // // // // // //   searchBox: {
// // // // // // // // //     position: "absolute",
// // // // // // // // //     top: 50,
// // // // // // // // //     left: 20,
// // // // // // // // //     right: 20,
// // // // // // // // //     flexDirection: "row",
// // // // // // // // //     zIndex: 10,
// // // // // // // // //   },

// // // // // // // // //   input: {
// // // // // // // // //     flex: 1,
// // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // //     padding: 10,
// // // // // // // // //     borderRadius: 10,
// // // // // // // // //   },

// // // // // // // // //   btn: {
// // // // // // // // //     backgroundColor: "blue",
// // // // // // // // //     padding: 10,
// // // // // // // // //     marginLeft: 10,
// // // // // // // // //     borderRadius: 10,
// // // // // // // // //   },

// // // // // // // // //   card: {
// // // // // // // // //     position: "absolute",
// // // // // // // // //     bottom: 30,
// // // // // // // // //     left: 20,
// // // // // // // // //     right: 20,
// // // // // // // // //     backgroundColor: "#fff",
// // // // // // // // //     padding: 15,
// // // // // // // // //     borderRadius: 10,
// // // // // // // // //     elevation: 5,
// // // // // // // // //   },

// // // // // // // // //   title: {
// // // // // // // // //     fontWeight: "bold",
// // // // // // // // //     marginBottom: 5,
// // // // // // // // //   },
// // // // // // // // // });





// // // // // // // // import React, { useEffect, useState, useRef } from "react";
// // // // // // // // import {
// // // // // // // //   View,
// // // // // // // //   Text,
// // // // // // // //   StyleSheet,
// // // // // // // //   TextInput,
// // // // // // // //   TouchableOpacity,
// // // // // // // //   Alert,
// // // // // // // // } from "react-native";
// // // // // // // // import MapView, { Marker, Polyline } from "react-native-maps";
// // // // // // // // import * as Location from "expo-location";
// // // // // // // // import axios from "axios";

// // // // // // // // const GEOAPIFY_KEY = "fa6c855af73d4b1f959bb154f5ec2eb5";

// // // // // // // // export default function MapScreen() {
// // // // // // // //   const mapRef = useRef(null);
// // // // // // // //   const lastRouteCall = useRef(0); // Use useRef to persist value without re-renders

// // // // // // // //   const [location, setLocation] = useState(null);
// // // // // // // //   const [destination, setDestination] = useState(null);
// // // // // // // //   const [routeCoords, setRouteCoords] = useState([]);
// // // // // // // //   const [search, setSearch] = useState("");
// // // // // // // //   const [distance, setDistance] = useState(0);

// // // // // // // //   // 📍 LIVE LOCATION & ROUTE UPDATE
// // // // // // // //   useEffect(() => {
// // // // // // // //     let subscription;

// // // // // // // //     (async () => {
// // // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // // // // //       if (status !== "granted") {
// // // // // // // //         Alert.alert("Location permission denied");
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       subscription = await Location.watchPositionAsync(
// // // // // // // //         {
// // // // // // // //           accuracy: Location.Accuracy.High,
// // // // // // // //           distanceInterval: 10, // Update every 10 meters
// // // // // // // //         },
// // // // // // // //         (loc) => {
// // // // // // // //           const { latitude, longitude } = loc.coords;
// // // // // // // //           const userLoc = { latitude, longitude };

// // // // // // // //           setLocation(userLoc);

// // // // // // // //           // Only update route if destination exists and 5 seconds have passed
// // // // // // // //           const now = Date.now();
// // // // // // // //           if (destination && now - lastRouteCall.current > 5000) {
// // // // // // // //             getRoute(userLoc, destination);
// // // // // // // //             lastRouteCall.current = now;
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       );
// // // // // // // //     })();

// // // // // // // //     return () => subscription?.remove(); // Cleanup
// // // // // // // //   }, [destination]); // Re-run effect when destination changes

// // // // // // // //   // 🔍 SEARCH CITY
// // // // // // // //   const searchLocation = async () => {
// // // // // // // //     if (!search.trim()) return;

// // // // // // // //     try {
// // // // // // // //       const res = await axios.get(
// // // // // // // //         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
// // // // // // // //           search
// // // // // // // //         )}&apiKey=${GEOAPIFY_KEY}`
// // // // // // // //       );

// // // // // // // //       if (!res.data.features.length) {
// // // // // // // //         Alert.alert("Location not found");
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       const [lon, lat] = res.data.features[0].geometry.coordinates;
// // // // // // // //       const dest = { latitude: lat, longitude: lon };

// // // // // // // //       setDestination(dest);

// // // // // // // //       // Zoom to show both points
// // // // // // // //       if (location) {
// // // // // // // //         getRoute(location, dest);
// // // // // // // //         mapRef.current?.fitToCoordinates([location, dest], {
// // // // // // // //           edgePadding: { top: 100, right: 50, bottom: 100, left: 50 },
// // // // // // // //           animated: true,
// // // // // // // //         });
// // // // // // // //       }
// // // // // // // //     } catch (err) {
// // // // // // // //       Alert.alert("Error fetching location");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // 🛣️ GET ROUTE
// // // // // // // //   const getRoute = async (start, end) => {
// // // // // // // //     try {
// // // // // // // //       const res = await fetch(
// // // // // // // //         `https://api.geoapify.com/v1/routing?waypoints=${start.latitude},${start.longitude}|${end.latitude},${end.longitude}&mode=drive&apiKey=${GEOAPIFY_KEY}`
// // // // // // // //       );
// // // // // // // //       const data = await res.json();

// // // // // // // //       if (!data.features || !data.features.length) return;

// // // // // // // //       // Geoapify returns [lon, lat] - We map to {latitude, longitude}
// // // // // // // //       const coords = data.features[0].geometry.coordinates[0].map((point) => ({
// // // // // // // //         latitude: point[1],
// // // // // // // //         longitude: point[0],
// // // // // // // //       }));

// // // // // // // //       setRouteCoords(coords);
// // // // // // // //       setDistance((data.features[0].properties.distance / 1000).toFixed(2));
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("Route error:", err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <View style={styles.container}>
// // // // // // // //       <View style={styles.searchBox}>
// // // // // // // //         <TextInput
// // // // // // // //           placeholder="Search city..."
// // // // // // // //           value={search}
// // // // // // // //           onChangeText={setSearch}
// // // // // // // //           style={styles.input}
// // // // // // // //         />
// // // // // // // //         <TouchableOpacity style={styles.btn} onPress={searchLocation}>
// // // // // // // //           <Text style={{ color: "#fff" }}>Search</Text>
// // // // // // // //         </TouchableOpacity>
// // // // // // // //       </View>

// // // // // // // //       <MapView
// // // // // // // //         ref={mapRef}
// // // // // // // //         style={styles.map}
// // // // // // // //         showsUserLocation={true}
// // // // // // // //         initialRegion={{
// // // // // // // //           latitude: 20.5937,
// // // // // // // //           longitude: 78.9629,
// // // // // // // //           latitudeDelta: 10,
// // // // // // // //           longitudeDelta: 10,
// // // // // // // //         }}
// // // // // // // //       >
// // // // // // // //         {destination && <Marker coordinate={destination} title="Destination" />}

// // // // // // // //         {routeCoords.length > 0 && (
// // // // // // // //           <Polyline
// // // // // // // //             coordinates={routeCoords}
// // // // // // // //             strokeWidth={6}
// // // // // // // //             strokeColor="#1a73e8" // Bright Blue
// // // // // // // //             lineDashPattern={[0]} // Ensures solid line
// // // // // // // //           />
// // // // // // // //         )}
// // // // // // // //       </MapView>

// // // // // // // //       <View style={styles.card}>
// // // // // // // //         <Text style={styles.title}>Live Navigation</Text>
// // // // // // // //         <Text>Distance: {distance} KM</Text>
// // // // // // // //       </View>
// // // // // // // //     </View>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   container: { flex: 1 },
// // // // // // // //   map: { flex: 1 },
// // // // // // // //   searchBox: {
// // // // // // // //     position: "absolute",
// // // // // // // //     top: 50,
// // // // // // // //     left: 20,
// // // // // // // //     right: 20,
// // // // // // // //     flexDirection: "row",
// // // // // // // //     zIndex: 10,
// // // // // // // //   },
// // // // // // // //   input: {
// // // // // // // //     flex: 1,
// // // // // // // //     backgroundColor: "#fff",
// // // // // // // //     padding: 10,
// // // // // // // //     borderRadius: 10,
// // // // // // // //     elevation: 5,
// // // // // // // //   },
// // // // // // // //   btn: {
// // // // // // // //     backgroundColor: "#1a73e8",
// // // // // // // //     padding: 15,
// // // // // // // //     marginLeft: 10,
// // // // // // // //     borderRadius: 10,
// // // // // // // //     justifyContent: "center",
// // // // // // // //   },
// // // // // // // //   card: {
// // // // // // // //     position: "absolute",
// // // // // // // //     bottom: 30,
// // // // // // // //     left: 20,
// // // // // // // //     right: 20,
// // // // // // // //     backgroundColor: "#fff",
// // // // // // // //     padding: 15,
// // // // // // // //     borderRadius: 10,
// // // // // // // //     elevation: 5,
// // // // // // // //   },
// // // // // // // //   title: { fontWeight: "bold", marginBottom: 5 },
// // // // // // // // });











// // // // // // // import React, { useEffect, useState, useRef } from "react";
// // // // // // // import {
// // // // // // //   View,
// // // // // // //   Text,
// // // // // // //   StyleSheet,
// // // // // // //   TextInput,
// // // // // // //   TouchableOpacity,
// // // // // // //   Alert,
// // // // // // //   Dimensions,
// // // // // // // } from "react-native";
// // // // // // // import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
// // // // // // // import * as Location from "expo-location";
// // // // // // // import axios from "axios";

// // // // // // // const GEOAPIFY_KEY = "fa6c855af73d4b1f959bb154f5ec2eb5";
// // // // // // // const { width, height } = Dimensions.get("window");

// // // // // // // export default function MapScreen() {
// // // // // // //   const mapRef = useRef(null);
// // // // // // //   const lastRouteCall = useRef(0);

// // // // // // //   const [location, setLocation] = useState(null);
// // // // // // //   const [destination, setDestination] = useState(null);
// // // // // // //   const [routeCoords, setRouteCoords] = useState([]);
// // // // // // //   const [search, setSearch] = useState("");
// // // // // // //   const [distance, setDistance] = useState(0);

// // // // // // //   // 📍 LIVE LOCATION & ROUTE UPDATE
// // // // // // //   useEffect(() => {
// // // // // // //     let subscription;

// // // // // // //     (async () => {
// // // // // // //       let { status } = await Location.requestForegroundPermissionsAsync();
// // // // // // //       if (status !== "granted") {
// // // // // // //         Alert.alert("Permission Denied", "Location access is required for navigation.");
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       subscription = await Location.watchPositionAsync(
// // // // // // //         {
// // // // // // //           accuracy: Location.Accuracy.High,
// // // // // // //           distanceInterval: 10, 
// // // // // // //         },
// // // // // // //         (loc) => {
// // // // // // //           const { latitude, longitude } = loc.coords;
// // // // // // //           const userLoc = { latitude, longitude };

// // // // // // //           setLocation(userLoc);

// // // // // // //           // Update route every 5 seconds if destination exists
// // // // // // //           const now = Date.now();
// // // // // // //           if (destination && now - lastRouteCall.current > 5000) {
// // // // // // //             getRoute(userLoc, destination);
// // // // // // //             lastRouteCall.current = now;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       );
// // // // // // //     })();

// // // // // // //     return () => subscription?.remove();
// // // // // // //   }, [destination]);

// // // // // // //   // 🔍 SEARCH CITY
// // // // // // //   const searchLocation = async () => {
// // // // // // //     if (!search.trim()) return;

// // // // // // //     try {
// // // // // // //       const res = await axios.get(
// // // // // // //         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
// // // // // // //           search
// // // // // // //         )}&apiKey=${GEOAPIFY_KEY}`
// // // // // // //       );

// // // // // // //       if (!res.data.features.length) {
// // // // // // //         Alert.alert("Not Found", "Could not find that location.");
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       const [lon, lat] = res.data.features[0].geometry.coordinates;
// // // // // // //       const dest = { latitude: lat, longitude: lon };

// // // // // // //       setDestination(dest);

// // // // // // //       if (location) {
// // // // // // //         getRoute(location, dest);
// // // // // // //         // Smoothly fit both points on screen with padding for UI elements
// // // // // // //         mapRef.current?.fitToCoordinates([location, dest], {
// // // // // // //           edgePadding: { top: 150, right: 70, bottom: 250, left: 70 },
// // // // // // //           animated: true,
// // // // // // //         });
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       Alert.alert("Error", "Failed to fetch location data.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // 🛣️ GET ROUTE (Optimized for Polyline rendering)
// // // // // // //   const getRoute = async (start, end) => {
// // // // // // //     try {
// // // // // // //       const res = await fetch(
// // // // // // //         `https://api.geoapify.com/v1/routing?waypoints=${start.latitude},${start.longitude}|${end.latitude},${end.longitude}&mode=drive&apiKey=${GEOAPIFY_KEY}`
// // // // // // //       );
// // // // // // //       const data = await res.json();

// // // // // // //       if (!data.features || !data.features.length) return;

// // // // // // //       const coords = data.features[0].geometry.coordinates[0].map((point) => ({
// // // // // // //         latitude: point[1],
// // // // // // //         longitude: point[0],
// // // // // // //       }));

// // // // // // //       setRouteCoords(coords);
// // // // // // //       setDistance((data.features[0].properties.distance / 1000).toFixed(2));
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Route error:", err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <View style={styles.container}>
// // // // // // //       {/* 🔍 SEARCH BAR UI */}
// // // // // // //       <View style={styles.searchContainer}>
// // // // // // //         <View style={styles.searchBox}>
// // // // // // //           <TextInput
// // // // // // //             placeholder="Where to?"
// // // // // // //             placeholderTextColor="#666"
// // // // // // //             value={search}
// // // // // // //             onChangeText={setSearch}
// // // // // // //             style={styles.input}
// // // // // // //           />
// // // // // // //           <TouchableOpacity style={styles.btn} onPress={searchLocation}>
// // // // // // //             <Text style={styles.btnText}>Go</Text>
// // // // // // //           </TouchableOpacity>
// // // // // // //         </View>
// // // // // // //       </View>

// // // // // // //       {/* 🗺️ MAP VIEW */}
// // // // // // //       <MapView
// // // // // // //         ref={mapRef}
// // // // // // //         style={styles.map}
// // // // // // //         showsUserLocation={true}
// // // // // // //         followsUserLocation={false}
// // // // // // //         initialRegion={{
// // // // // // //           latitude: 20.5937,
// // // // // // //           longitude: 78.9629,
// // // // // // //           latitudeDelta: 15,
// // // // // // //           longitudeDelta: 15,
// // // // // // //         }}
// // // // // // //       >
// // // // // // //         {/* 📍 DESTINATION MARKER WITH EFFECT */}
// // // // // // //         {destination && (
// // // // // // //           <Marker coordinate={destination}>
// // // // // // //             <View style={styles.markerContainer}>
// // // // // // //               <View style={styles.markerHalo} />
// // // // // // //               <View style={styles.markerDot} />
// // // // // // //             </View>
// // // // // // //           </Marker>
// // // // // // //         )}

// // // // // // //         {/* 🛣️ GLOWING NAVIGATION LINE */}
// // // // // // //         {routeCoords.length > 0 && (
// // // // // // //           <>
// // // // // // //             {/* Outer Glow */}
// // // // // // //             <Polyline
// // // // // // //               coordinates={routeCoords}
// // // // // // //               strokeWidth={8}
// // // // // // //               strokeColor="rgba(26, 115, 232, 0.3)"
// // // // // // //             />
// // // // // // //             {/* Main Path */}
// // // // // // //             <Polyline
// // // // // // //               coordinates={routeCoords}
// // // // // // //               strokeWidth={4}
// // // // // // //               strokeColor="#1a73e8"
// // // // // // //               lineJoin="round"
// // // // // // //               lineCap="round"
// // // // // // //             />
// // // // // // //           </>
// // // // // // //         )}
// // // // // // //       </MapView>

// // // // // // //       {/* 📊 INFO CARD */}
// // // // // // //       {distance > 0 && (
// // // // // // //         <View style={styles.card}>
// // // // // // //           <View style={styles.cardIndicator} />
// // // // // // //           <Text style={styles.title}>Trip Overview</Text>
// // // // // // //           <View style={styles.statsRow}>
// // // // // // //             <Text style={styles.distanceLabel}>Total Distance</Text>
// // // // // // //             <Text style={styles.distanceValue}>{distance} KM</Text>
// // // // // // //           </View>
// // // // // // //         </View>
// // // // // // //       )}
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // }

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: { flex: 1, backgroundColor: "#f5f5f5" },
// // // // // // //   map: { flex: 1 },
  
// // // // // // //   // Search UI
// // // // // // //   searchContainer: {
// // // // // // //     position: "absolute",
// // // // // // //     top: 50,
// // // // // // //     width: "100%",
// // // // // // //     paddingHorizontal: 20,
// // // // // // //     zIndex: 10,
// // // // // // //   },
// // // // // // //   searchBox: {
// // // // // // //     flexDirection: "row",
// // // // // // //     backgroundColor: "#fff",
// // // // // // //     borderRadius: 15,
// // // // // // //     padding: 5,
// // // // // // //     alignItems: "center",
// // // // // // //     elevation: 10,
// // // // // // //     shadowColor: "#000",
// // // // // // //     shadowOffset: { width: 0, height: 4 },
// // // // // // //     shadowOpacity: 0.1,
// // // // // // //     shadowRadius: 8,
// // // // // // //   },
// // // // // // //   input: {
// // // // // // //     flex: 1,
// // // // // // //     paddingHorizontal: 15,
// // // // // // //     fontSize: 16,
// // // // // // //     color: "#333",
// // // // // // //   },
// // // // // // //   btn: {
// // // // // // //     backgroundColor: "#1a73e8",
// // // // // // //     paddingVertical: 10,
// // // // // // //     paddingHorizontal: 20,
// // // // // // //     borderRadius: 12,
// // // // // // //   },
// // // // // // //   btnText: { color: "#fff", fontWeight: "bold" },

// // // // // // //   // Custom Marker
// // // // // // //   markerContainer: { alignItems: "center", justifyContent: "center" },
// // // // // // //   markerHalo: {
// // // // // // //     position: "absolute",
// // // // // // //     width: 34,
// // // // // // //     height: 34,
// // // // // // //     borderRadius: 17,
// // // // // // //     backgroundColor: "rgba(26, 115, 232, 0.2)",
// // // // // // //     borderWidth: 1,
// // // // // // //     borderColor: "rgba(26, 115, 232, 0.4)",
// // // // // // //   },
// // // // // // //   markerDot: {
// // // // // // //     width: 14,
// // // // // // //     height: 14,
// // // // // // //     borderRadius: 7,
// // // // // // //     backgroundColor: "#1a73e8",
// // // // // // //     borderWidth: 2,
// // // // // // //     borderColor: "#fff",
// // // // // // //   },

// // // // // // //   // Bottom Info Card
// // // // // // //   card: {
// // // // // // //     position: "absolute",
// // // // // // //     bottom: 30,
// // // // // // //     left: 20,
// // // // // // //     right: 20,
// // // // // // //     backgroundColor: "#fff",
// // // // // // //     padding: 20,
// // // // // // //     borderRadius: 25,
// // // // // // //     elevation: 15,
// // // // // // //     shadowColor: "#000",
// // // // // // //     shadowOffset: { width: 0, height: 10 },
// // // // // // //     shadowOpacity: 0.2,
// // // // // // //     shadowRadius: 10,
// // // // // // //   },
// // // // // // //   cardIndicator: {
// // // // // // //     width: 40,
// // // // // // //     height: 5,
// // // // // // //     backgroundColor: "#eee",
// // // // // // //     borderRadius: 5,
// // // // // // //     alignSelf: "center",
// // // // // // //     marginBottom: 10,
// // // // // // //   },
// // // // // // //   title: {
// // // // // // //     fontSize: 14,
// // // // // // //     color: "#888",
// // // // // // //     textTransform: "uppercase",
// // // // // // //     letterSpacing: 1,
// // // // // // //     fontWeight: "bold",
// // // // // // //     marginBottom: 10,
// // // // // // //   },
// // // // // // //   statsRow: {
// // // // // // //     flexDirection: "row",
// // // // // // //     justifyContent: "space-between",
// // // // // // //     alignItems: "center",
// // // // // // //   },
// // // // // // //   distanceLabel: { fontSize: 18, color: "#333", fontWeight: "500" },
// // // // // // //   distanceValue: { fontSize: 22, color: "#1a73e8", fontWeight: "bold" },
// // // // // // // });











// // // // // import React, { useEffect, useState, useRef } from "react";
// // // // // import {
// // // // //   View, Text, StyleSheet, TextInput, TouchableOpacity,
// // // // //   Alert, Dimensions, StatusBar, Animated, Platform
// // // // // } from "react-native";
// // // // // import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
// // // // // import * as Location from "expo-location";
// // // // // import axios from "axios";
// // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // import { LinearGradient } from 'expo-linear-gradient';

// // // // // const GEOAPIFY_KEY = "fa6c855af73d4b1f959bb154f5ec2eb5";
// // // // // const { width, height } = Dimensions.get("window");

// // // // // /* ═══ Obsidian Theme ════════════════════════════════ */
// // // // // const T = {
// // // // //   bg:      '#050505',
// // // // //   card:    '#131313',
// // // // //   border:  '#242424',
// // // // //   t1:      '#FFFFFF',
// // // // //   t2:      '#B0B0B0',
// // // // //   t3:      '#4A4A4A',
// // // // //   accent:  '#00FF94', // Tactical Neon Green
// // // // //   glow:    'rgba(0, 255, 148, 0.3)',
// // // // // };

// // // // // export default function MapScreen({ navigation }) {
// // // // //   const mapRef = useRef(null);
// // // // //   const lastRouteCall = useRef(0);
// // // // //   const fade = useRef(new Animated.Value(0)).current;

// // // // //   const [location, setLocation] = useState(null);
// // // // //   const [destination, setDestination] = useState(null);
// // // // //   const [routeCoords, setRouteCoords] = useState([]);
// // // // //   const [search, setSearch] = useState("");
// // // // //   const [distance, setDistance] = useState(0);
// // // // //   const [focused, setFocused] = useState(false);

// // // // //   useEffect(() => {
// // // // //     Animated.timing(fade, { toValue: 1, duration: 800, useNativeDriver: true }).start();
// // // // //     setupLocation();
// // // // //   }, []);

// // // // //   const setupLocation = async () => {
// // // // //     let { status } = await Location.requestForegroundPermissionsAsync();
// // // // //     if (status !== "granted") {
// // // // //       Alert.alert("Permission Denied", "Location access required for tactical nav.");
// // // // //       return;
// // // // //     }

// // // // //     await Location.watchPositionAsync(
// // // // //       { accuracy: Location.Accuracy.High, distanceInterval: 10 },
// // // // //       (loc) => {
// // // // //         const userLoc = { latitude: loc.coords.latitude, longitude: loc.coords.longitude };
// // // // //         setLocation(userLoc);
        
// // // // //         const now = Date.now();
// // // // //         if (destination && now - lastRouteCall.current > 5000) {
// // // // //           getRoute(userLoc, destination);
// // // // //           lastRouteCall.current = now;
// // // // //         }
// // // // //       }
// // // // //     );
// // // // //   };

// // // // //   const searchLocation = async () => {
// // // // //     if (!search.trim()) return;
// // // // //     try {
// // // // //       const res = await axios.get(
// // // // //         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(search)}&apiKey=${GEOAPIFY_KEY}`
// // // // //       );

// // // // //       if (!res.data.features.length) {
// // // // //         Alert.alert("Target Not Found", "Coordinates unreachable.");
// // // // //         return;
// // // // //       }

// // // // //       const [lon, lat] = res.data.features[0].geometry.coordinates;
// // // // //       const dest = { latitude: lat, longitude: lon };
// // // // //       setDestination(dest);

// // // // //       if (location) {
// // // // //         getRoute(location, dest);
// // // // //         mapRef.current?.fitToCoordinates([location, dest], {
// // // // //           edgePadding: { top: 200, right: 50, bottom: 300, left: 50 },
// // // // //           animated: true,
// // // // //         });
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   const getRoute = async (start, end) => {
// // // // //     try {
// // // // //       const res = await fetch(
// // // // //         `https://api.geoapify.com/v1/routing?waypoints=${start.latitude},${start.longitude}|${end.latitude},${end.longitude}&mode=drive&apiKey=${GEOAPIFY_KEY}`
// // // // //       );
// // // // //       const data = await res.json();
// // // // //       if (!data.features?.length) return;

// // // // //       const coords = data.features[0].geometry.coordinates[0].map((p) => ({
// // // // //         latitude: p[1], longitude: p[0],
// // // // //       }));

// // // // //       setRouteCoords(coords);
// // // // //       setDistance((data.features[0].properties.distance / 1000).toFixed(2));
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <View style={styles.root}>
// // // // //       <StatusBar barStyle="light-content" />

// // // // //       {/* ── MECHANICAL SEARCH HUD ── */}
// // // // //       <Animated.View style={[styles.searchHUD, { opacity: fade }]}>
// // // // //         <View style={[styles.inputGroup, focused && styles.inputFocused]}>
// // // // //           <View style={styles.panelLeft}>
// // // // //             <Text style={styles.panelLabel}>NAV_OBJECTIVE</Text>
// // // // //             <View style={styles.inputRow}>
// // // // //               <Ionicons name="navigate-circle-outline" size={20} color={focused ? T.accent : T.t3} />
// // // // //               <TextInput
// // // // //                 style={styles.input}
// // // // //                 placeholder="Designate Sector..."
// // // // //                 placeholderTextColor={T.t3}
// // // // //                 value={search}
// // // // //                 onChangeText={setSearch}
// // // // //                 onFocus={() => setFocused(true)}
// // // // //                 onBlur={() => setFocused(false)}
// // // // //                 onSubmitEditing={searchLocation}
// // // // //               />
// // // // //             </View>
// // // // //           </View>
// // // // //           <TouchableOpacity style={styles.searchBtn} onPress={searchLocation}>
// // // // //             <MaterialCommunityIcons name="radar" size={24} color={T.bg} />
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       </Animated.View>

// // // // //       {/* ── MAP VIEW ── */}
// // // // //       <MapView
// // // // //         ref={mapRef}
// // // // //         style={styles.map}
// // // // //         provider={PROVIDER_GOOGLE}
// // // // //         customMapStyle={mapDarkStyle}
// // // // //         showsUserLocation={true}
// // // // //         initialRegion={{
// // // // //           latitude: 20.5937, longitude: 78.9629,
// // // // //           latitudeDelta: 15, longitudeDelta: 15,
// // // // //         }}
// // // // //       >
// // // // //         {destination && (
// // // // //           <Marker coordinate={destination}>
// // // // //             <View style={styles.markerContainer}>
// // // // //               <View style={styles.markerReticle} />
// // // // //               <View style={styles.markerDot} />
// // // // //             </View>
// // // // //           </Marker>
// // // // //         )}

// // // // //         {routeCoords.length > 0 && (
// // // // //           <>
// // // // //             <Polyline coordinates={routeCoords} strokeWidth={6} strokeColor={T.glow} />
// // // // //             <Polyline coordinates={routeCoords} strokeWidth={3} strokeColor={T.accent} lineJoin="round" />
// // // // //           </>
// // // // //         )}
// // // // //       </MapView>

// // // // //       {/* ── TACTICAL INFO CARD ── */}
// // // // //       {distance > 0 && (
// // // // //         <Animated.View style={[styles.infoCard, { opacity: fade }]}>
// // // // //           <LinearGradient colors={['#131313', '#0A0A0A']} style={styles.cardInner}>
// // // // //             <View style={styles.cardHeader}>
// // // // //               <View style={styles.statusDot} />
// // // // //               <Text style={styles.cardTitle}>MISSION_PARAMETERS</Text>
// // // // //             </View>
            
// // // // //             <View style={styles.statsGrid}>
// // // // //               <View style={styles.statBox}>
// // // // //                 <Text style={styles.statLabel}>DISTANCE</Text>
// // // // //                 <Text style={styles.statValue}>{distance}<Text style={styles.unit}>KM</Text></Text>
// // // // //               </View>
// // // // //               <View style={styles.statBox}>
// // // // //                 <Text style={styles.statLabel}>EST_TIME</Text>
// // // // //                 <Text style={styles.statValue}>{Math.round(distance * 1.5)}<Text style={styles.unit}>M</Text></Text>
// // // // //               </View>
// // // // //             </View>

// // // // //             <TouchableOpacity style={styles.resetBtn} onPress={() => setDestination(null)}>
// // // // //               <Text style={styles.resetBtnTxt}>ABORT MISSION</Text>
// // // // //             </TouchableOpacity>
// // // // //           </LinearGradient>
// // // // //         </Animated.View>
// // // // //       )}
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const mapDarkStyle = [
// // // // //   { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
// // // // //   { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
// // // // //   { "elementType": "labels.text.stroke", "stylers": [{ "color": "#212121" }] },
// // // // //   { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#383838" }] },
// // // // //   { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }] }
// // // // // ];

// // // // // const styles = StyleSheet.create({
// // // // //   root: { flex: 1, backgroundColor: T.bg },
// // // // //   map: { width: width, height: height },

// // // // //   /* Mechanical Search */
// // // // //   searchHUD: { position: 'absolute', top: 60, left: 20, right: 20, zIndex: 10 },
// // // // //   inputGroup: { flexDirection: 'row', backgroundColor: 'rgba(10,10,10,0.9)', borderRadius: 20, borderWidth: 1.5, borderColor: T.border, overflow: 'hidden' },
// // // // //   inputFocused: { borderColor: T.accent },
// // // // //   panelLeft: { flex: 1, padding: 15 },
// // // // //   panelLabel: { color: T.t3, fontSize: 8, fontWeight: '900', letterSpacing: 2, marginBottom: 5 },
// // // // //   inputRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
// // // // //   input: { flex: 1, color: T.t1, fontSize: 15, fontWeight: '600' },
// // // // //   searchBtn: { width: 60, backgroundColor: T.accent, justifyContent: 'center', alignItems: 'center' },

// // // // //   /* Tactical Marker */
// // // // //   markerContainer: { alignItems: 'center', justifyContent: 'center' },
// // // // //   markerReticle: { position: 'absolute', width: 30, height: 30, borderRadius: 15, borderWidth: 1, borderColor: T.accent, borderStyle: 'dashed' },
// // // // //   markerDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: T.accent, shadowColor: T.accent, shadowOpacity: 1, shadowRadius: 5 },

// // // // //   /* Info Card */
// // // // //   infoCard: { position: 'absolute', bottom: 40, left: 20, right: 20 },
// // // // //   cardInner: { borderRadius: 24, padding: 20, borderWidth: 1, borderColor: T.border, overflow: 'hidden' },
// // // // //   cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 15 },
// // // // //   statusDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: T.accent },
// // // // //   cardTitle: { color: T.t3, fontSize: 9, fontWeight: '900', letterSpacing: 2 },
// // // // //   statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
// // // // //   statBox: { flex: 1 },
// // // // //   statLabel: { color: T.t3, fontSize: 8, fontWeight: '800', marginBottom: 5 },
// // // // //   statValue: { color: T.t1, fontSize: 24, fontWeight: '900' },
// // // // //   unit: { fontSize: 12, color: T.t3, marginLeft: 2 },
// // // // //   resetBtn: { backgroundColor: 'rgba(255,0,0,0.1)', paddingVertical: 12, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,0,0,0.2)' },
// // // // //   resetBtnTxt: { color: '#FF4444', fontSize: 10, fontWeight: '900', letterSpacing: 1 }
// // // // // });













// // // import React, { useEffect, useState, useRef, useCallback } from "react";
// // // import {
// // //   View, Text, StyleSheet, TextInput, TouchableOpacity,
// // //   Alert, Dimensions, StatusBar, Animated, Keyboard
// // // } from "react-native";
// // // import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
// // // import * as Location from "expo-location";
// // // import axios from "axios";
// // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // import { LinearGradient } from 'expo-linear-gradient';

// // // const GEOAPIFY_KEY = "fa6c855af73d4b1f959bb154f5ec2eb5";
// // // const { width, height } = Dimensions.get("window");

// // // const T = {
// // //   bg: '#050505',
// // //   card: '#131313',
// // //   border: '#242424',
// // //   t1: '#FFFFFF',
// // //   t2: '#B0B0B0',
// // //   t3: '#4A4A4A',
// // //   accent: '#00FF94',
// // //   glow: 'rgba(0, 255, 148, 0.3)',
// // // };

// // // export default function MapScreen() {
// // //   const mapRef = useRef(null);
// // //   const lastRouteCall = useRef(0);
// // //   const fade = useRef(new Animated.Value(0)).current;

// // //   const [location, setLocation] = useState(null);
// // //   const [destination, setDestination] = useState(null);
// // //   const [routeCoords, setRouteCoords] = useState([]);
// // //   const [search, setSearch] = useState("");
// // //   const [distance, setDistance] = useState(0);
// // //   const [focused, setFocused] = useState(false);
// // //   const [loading, setLoading] = useState(false);

// // //   useEffect(() => {
// // //     Animated.timing(fade, { toValue: 1, duration: 400, useNativeDriver: true }).start();
// // //     setupLocation();
// // //   }, []);

// // //   const setupLocation = async () => {
// // //     let { status } = await Location.requestForegroundPermissionsAsync();
// // //     if (status !== "granted") return;

// // //     // Use a larger interval to prevent constant re-calculating
// // //     await Location.watchPositionAsync(
// // //       { 
// // //         accuracy: Location.Accuracy.Balanced, // Balanced is faster than High
// // //         distanceInterval: 30 // Only update every 30 meters
// // //       },
// // //       (loc) => {
// // //         const userLoc = { latitude: loc.coords.latitude, longitude: loc.coords.longitude };
// // //         setLocation(userLoc);
        
// // //         const now = Date.now();
// // //         // Only refresh route every 15 seconds while moving to save API/CPU
// // //         if (destination && now - lastRouteCall.current > 15000) {
// // //           getRoute(userLoc, destination);
// // //           lastRouteCall.current = now;
// // //         }
// // //       }
// // //     );
// // //   };

// // //   const getRoute = useCallback(async (start, end) => {
// // //     try {
// // //       const res = await fetch(
// // //         `https://api.geoapify.com/v1/routing?waypoints=${start.latitude},${start.longitude}|${end.latitude},${end.longitude}&mode=drive&apiKey=${GEOAPIFY_KEY}`
// // //       );
// // //       const data = await res.json();
// // //       if (!data.features?.length) return;

// // //       const coords = data.features[0].geometry.coordinates[0].map((p) => ({
// // //         latitude: p[1], longitude: p[0],
// // //       }));

// // //       setRouteCoords(coords);
// // //       setDistance((data.features[0].properties.distance / 1000).toFixed(1));
// // //     } catch (err) {
// // //       console.warn("Routing error", err);
// // //     }
// // //   }, []);

// // //   const searchLocation = async () => {
// // //     if (!search.trim()) return;
// // //     setLoading(true);
// // //     Keyboard.dismiss();

// // //     try {
// // //       const res = await axios.get(
// // //         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(search)}&apiKey=${GEOAPIFY_KEY}`,
// // //         { timeout: 5000 } // Don't hang forever
// // //       );

// // //       if (!res.data.features.length) {
// // //         Alert.alert("Target Not Found");
// // //         return;
// // //       }

// // //       const [lon, lat] = res.data.features[0].geometry.coordinates;
// // //       const dest = { latitude: lat, longitude: lon };
// // //       setDestination(dest);

// // //       if (location) {
// // //         getRoute(location, dest);
// // //         mapRef.current?.animateCamera({
// // //           center: dest,
// // //           pitch: 45,
// // //           zoom: 15
// // //         }, { duration: 1000 });
// // //       }
// // //     } catch (err) {
// // //       console.error(err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.root}>
// // //       <StatusBar barStyle="light-content" />

// // //       <Animated.View style={[styles.searchHUD, { opacity: fade }]}>
// // //         <View style={[styles.inputGroup, focused && styles.inputFocused]}>
// // //           <View style={styles.panelLeft}>
// // //             <Text style={styles.panelLabel}>{loading ? "SCANNING..." : "NAV_OBJECTIVE"}</Text>
// // //             <View style={styles.inputRow}>
// // //               <Ionicons name="navigate-circle-outline" size={20} color={focused ? T.accent : T.t3} />
// // //               <TextInput
// // //                 style={styles.input}
// // //                 placeholder="Designate Sector..."
// // //                 placeholderTextColor={T.t3}
// // //                 value={search}
// // //                 onChangeText={setSearch}
// // //                 onFocus={() => setFocused(true)}
// // //                 onBlur={() => setFocused(false)}
// // //                 onSubmitEditing={searchLocation}
// // //                 returnKeyType="search"
// // //               />
// // //             </View>
// // //           </View>
// // //           <TouchableOpacity style={styles.searchBtn} onPress={searchLocation} disabled={loading}>
// // //             <MaterialCommunityIcons 
// // //                name={loading ? "loading" : "radar"} 
// // //                size={24} 
// // //                color={T.bg} 
// // //             />
// // //           </TouchableOpacity>
// // //         </View>
// // //       </Animated.View>

// // //       <MapView
// // //         ref={mapRef}
// // //         style={styles.map}
// // //         provider={PROVIDER_GOOGLE}
// // //         customMapStyle={mapDarkStyle}
// // //         showsUserLocation={true}
// // //         followsUserLocation={true} // Smoother tracking
// // //         initialRegion={{
// // //           latitude: 20.5937, longitude: 78.9629,
// // //           latitudeDelta: 10, longitudeDelta: 10,
// // //         }}
// // //       >
// // //         {destination && (
// // //           <Marker coordinate={destination} flat={true}>
// // //             <View style={styles.markerContainer}>
// // //               <View style={styles.markerReticle} />
// // //               <View style={styles.markerDot} />
// // //             </View>
// // //           </Marker>
// // //         )}

// // //         {routeCoords.length > 0 && (
// // //           <Polyline 
// // //             coordinates={routeCoords} 
// // //             strokeWidth={4} 
// // //             strokeColor={T.accent} 
// // //             lineDashPattern={[1]} // Dash looks "tactical" and renders fast
// // //           />
// // //         )}
// // //       </MapView>

// // //       {distance > 0 && (
// // //         <Animated.View style={[styles.infoCard, { opacity: fade }]}>
// // //           <LinearGradient colors={['#131313', '#0A0A0A']} style={styles.cardInner}>
// // //             <View style={styles.statsGrid}>
// // //               <View style={styles.statBox}>
// // //                 <Text style={styles.statLabel}>DISTANCE</Text>
// // //                 <Text style={styles.statValue}>{distance}<Text style={styles.unit}>KM</Text></Text>
// // //               </View>
// // //               <View style={styles.statBox}>
// // //                 <Text style={styles.statLabel}>EST_TIME</Text>
// // //                 <Text style={styles.statValue}>{Math.round(distance * 1.2)}<Text style={styles.unit}>M</Text></Text>
// // //               </View>
// // //             </View>
// // //             <TouchableOpacity style={styles.resetBtn} onPress={() => {
// // //                 setDestination(null);
// // //                 setRouteCoords([]);
// // //                 setDistance(0);
// // //             }}>
// // //               <Text style={styles.resetBtnTxt}>ABORT MISSION</Text>
// // //             </TouchableOpacity>
// // //           </LinearGradient>
// // //         </Animated.View>
// // //       )}
// // //     </View>
// // //   );
// // // }

// // // // ... styles and mapDarkStyle remain the same (optimized for performance)
// // // const styles = StyleSheet.create({
// // //   root: { flex: 1, backgroundColor: T.bg },
// // //   map: { width: width, height: height },
// // //   searchHUD: { position: 'absolute', top: 50, left: 20, right: 20, zIndex: 10 },
// // //   inputGroup: { flexDirection: 'row', backgroundColor: 'rgba(10,10,10,0.95)', borderRadius: 12, borderWidth: 1, borderColor: T.border, overflow: 'hidden' },
// // //   inputFocused: { borderColor: T.accent },
// // //   panelLeft: { flex: 1, padding: 12 },
// // //   panelLabel: { color: T.t3, fontSize: 8, fontWeight: '900', letterSpacing: 2, marginBottom: 2 },
// // //   inputRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
// // //   input: { flex: 1, color: T.t1, fontSize: 14, height: 30 },
// // //   searchBtn: { width: 55, backgroundColor: T.accent, justifyContent: 'center', alignItems: 'center' },
// // //   markerContainer: { alignItems: 'center', justifyContent: 'center' },
// // //   markerReticle: { position: 'absolute', width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: T.accent },
// // //   markerDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: T.accent },
// // //   infoCard: { position: 'absolute', bottom: 30, left: 20, right: 20 },
// // //   cardInner: { borderRadius: 16, padding: 16, borderWidth: 1, borderColor: T.border },
// // //   statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
// // //   statBox: { flex: 1 },
// // //   statLabel: { color: T.t3, fontSize: 8, fontWeight: '800' },
// // //   statValue: { color: T.t1, fontSize: 22, fontWeight: '900' },
// // //   unit: { fontSize: 10, color: T.t3 },
// // //   resetBtn: { backgroundColor: 'rgba(255,68,68,0.1)', paddingVertical: 10, borderRadius: 8, alignItems: 'center', borderWeight: 1, borderColor: 'rgba(255,68,68,0.3)' },
// // //   resetBtnTxt: { color: '#FF4444', fontSize: 9, fontWeight: '900' }
// // // });

// // // const mapDarkStyle = [
// // //   { "elementType": "geometry", "stylers": [{ "color": "#1a1a1a" }] },
// // //   { "featureType": "water", "stylers": [{ "color": "#000000" }] },
// // //   { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#2c2c2c" }] },
// // //   { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }
// // // ];








// // // ---new
// // import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
// // import {
// //   View, Text, StyleSheet, TextInput, TouchableOpacity,
// //   Alert, Dimensions, StatusBar, Animated, Keyboard, Platform
// // } from "react-native";
// // import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
// // import * as Location from "expo-location";
// // import axios from "axios";
// // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // import { LinearGradient } from 'expo-linear-gradient';

// // const GEOAPIFY_KEY = "fa6c855af73d4b1f959bb154f5ec2eb5";
// // const { width, height } = Dimensions.get("window");

// // const T = {
// //   bg: '#050505',
// //   card: '#131313',
// //   border: '#242424',
// //   t1: '#FFFFFF',
// //   t2: '#B0B0B0',
// //   t3: '#4A4A4A',
// //   accent: '#00FF94',
// //   glow: 'rgba(0, 255, 148, 0.3)',
// // };

// // export default function MapScreen() {
// //   const mapRef = useRef(null);
// //   const lastRouteCall = useRef(0);
// //   const abortController = useRef(null);
// //   const fade = useRef(new Animated.Value(0)).current;

// //   const [location, setLocation] = useState(null);
// //   const [destination, setDestination] = useState(null);
// //   const [routeCoords, setRouteCoords] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [distance, setDistance] = useState(0);
// //   const [focused, setFocused] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   // Memoize style to prevent Map flickering
// //   const memoizedMapStyle = useMemo(() => mapDarkStyle, []);

// //   useEffect(() => {
// //     Animated.timing(fade, { toValue: 1, duration: 400, useNativeDriver: true }).start();
// //     setupLocation();
// //     return () => abortController.current?.abort();
// //   }, []);

// //   const setupLocation = async () => {
// //     let { status } = await Location.requestForegroundPermissionsAsync();
// //     if (status !== "granted") return;

// //     await Location.watchPositionAsync(
// //       { 
// //         accuracy: Location.Accuracy.Balanced, 
// //         distanceInterval: 40 
// //       },
// //       (loc) => {
// //         const userLoc = { latitude: loc.coords.latitude, longitude: loc.coords.longitude };
// //         setLocation(userLoc);
        
// //         const now = Date.now();
// //         if (destination && now - lastRouteCall.current > 20000) {
// //           getRoute(userLoc, destination);
// //           lastRouteCall.current = now;
// //         }
// //       }
// //     );
// //   };

// //   const getRoute = useCallback(async (start, end) => {
// //     if (abortController.current) abortController.current.abort();
// //     abortController.current = new AbortController();

// //     try {
// //       const res = await fetch(
// //         `https://api.geoapify.com/v1/routing?waypoints=${start.latitude},${start.longitude}|${end.latitude},${end.longitude}&mode=drive&apiKey=${GEOAPIFY_KEY}`,
// //         { signal: abortController.current.signal }
// //       );
// //       const data = await res.json();
// //       if (!data.features?.length) return;

// //       const coords = data.features[0].geometry.coordinates[0].map((p) => ({
// //         latitude: p[1], longitude: p[0],
// //       }));

// //       setRouteCoords(coords);
// //       setDistance((data.features[0].properties.distance / 1000).toFixed(1));
// //     } catch (err) {
// //       if (err.name !== 'AbortError') console.warn("Routing uplink error");
// //     }
// //   }, []);

// //   const searchLocation = async () => {
// //     if (!search.trim() || loading) return;
// //     setLoading(true);
// //     Keyboard.dismiss();

// //     try {
// //       const res = await axios.get(
// //         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(search)}&apiKey=${GEOAPIFY_KEY}`,
// //         { timeout: 5000 }
// //       );

// //       if (!res.data.features.length) {
// //         setLoading(false);
// //         return Alert.alert("Target Lost", "Coordinates not found.");
// //       }

// //       const [lon, lat] = res.data.features[0].geometry.coordinates;
// //       const dest = { latitude: lat, longitude: lon };
// //       setDestination(dest);

// //       if (location) {
// //         getRoute(location, dest);
// //         mapRef.current?.animateToRegion({
// //           ...dest,
// //           latitudeDelta: 0.05,
// //           longitudeDelta: 0.05,
// //         }, 1000);
// //       }
// //     } catch (err) {
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <View style={styles.root}>
// //       <StatusBar barStyle="light-content" />

// //       {/* --- HUD SEARCH BAR --- */}
// //       <Animated.View style={[styles.searchHUD, { opacity: fade }]}>
// //         <View style={[styles.inputGroup, focused && styles.inputFocused]}>
// //           <View style={styles.panelLeft}>
// //             {/* Label is now smaller and spaced to prevent overshadowing */}
// //             <Text style={styles.panelLabel}>{loading ? "UPLINKING..." : "NAV_OBJECTIVE"}</Text>
// //             <View style={styles.inputRow}>
// //               <Ionicons name="navigate-circle-outline" size={18} color={focused ? T.accent : T.t3} />
// //               <TextInput
// //                 style={styles.input}
// //                 placeholder="Designate Sector..."
// //                 placeholderTextColor={T.t3}
// //                 value={search}
// //                 onChangeText={setSearch}
// //                 onFocus={() => setFocused(true)}
// //                 onBlur={() => setFocused(false)}
// //                 onSubmitEditing={searchLocation}
// //                 returnKeyType="search"
// //                 selectionColor={T.accent}
// //                 disableFullscreenUI={true}
// //               />
// //             </View>
// //           </View>
// //           <TouchableOpacity style={styles.searchBtn} onPress={searchLocation} activeOpacity={0.8}>
// //             <MaterialCommunityIcons name={loading ? "loading" : "radar"} size={22} color={T.bg} />
// //           </TouchableOpacity>
// //         </View>
// //       </Animated.View>

// //       {/* --- TACTICAL MAP --- */}
// //       <MapView
// //         ref={mapRef}
// //         style={styles.map}
// //         provider={PROVIDER_GOOGLE}
// //         customMapStyle={memoizedMapStyle}
// //         showsUserLocation={true}
// //         followsUserLocation={true}
// //         moveOnMarkerPress={false}
// //         initialRegion={{
// //           latitude: 20.5937, longitude: 78.9629,
// //           latitudeDelta: 10, longitudeDelta: 10,
// //         }}
// //       >
// //         {destination && (
// //           <Marker coordinate={destination} flat={true} tracksViewChanges={false}>
// //             <View style={styles.markerContainer}>
// //               <View style={styles.markerReticle} />
// //               <View style={styles.markerDot} />
// //             </View>
// //           </Marker>
// //         )}

// //         {routeCoords.length > 0 && (
// //           <Polyline 
// //             coordinates={routeCoords} 
// //             strokeWidth={3} 
// //             strokeColor={T.accent} 
// //             geodesic={true} 
// //           />
// //         )}
// //       </MapView>

// //       {/* --- INFO CARD --- */}
// //       {distance > 0 && (
// //         <Animated.View style={[styles.infoCard, { opacity: fade }]}>
// //           <LinearGradient colors={['#131313', '#0A0A0A']} style={styles.cardInner}>
// //             <View style={styles.statsGrid}>
// //               <View style={styles.statBox}>
// //                 <Text style={styles.statLabel}>DISTANCE</Text>
// //                 <Text style={styles.statValue}>{distance}<Text style={styles.unit}>KM</Text></Text>
// //               </View>
// //               <View style={styles.statBox}>
// //                 <Text style={styles.statLabel}>EST_TIME</Text>
// //                 <Text style={styles.statValue}>{Math.round(distance * 1.1)}<Text style={styles.unit}>M</Text></Text>
// //               </View>
// //             </View>
// //             <TouchableOpacity 
// //               style={styles.resetBtn} 
// //               onPress={() => {
// //                 setDestination(null);
// //                 setRouteCoords([]);
// //                 setDistance(0);
// //               }}
// //             >
// //               <Text style={styles.resetBtnTxt}>ABORT MISSION</Text>
// //             </TouchableOpacity>
// //           </LinearGradient>
// //         </Animated.View>
// //       )}
// //     </View>
// //   );
// // }

// // const mapDarkStyle = [
// //   { "elementType": "geometry", "stylers": [{ "color": "#1a1a1a" }] },
// //   { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
// //   { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#2c2c2c" }] },
// //   { "featureType": "water", "stylers": [{ "color": "#000000" }] },
// //   { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }
// // ];

// // const styles = StyleSheet.create({
// //   root: { flex: 1, backgroundColor: T.bg },
// //   map: { width: width, height: height },
  
// //   /* Search HUD Fixed Positioning */
// //   searchHUD: { position: 'absolute', top: 50, left: 20, right: 20, zIndex: 10 },
// //   inputGroup: { 
// //     flexDirection: 'row', 
// //     backgroundColor: 'rgba(10,10,10,0.95)', 
// //     borderRadius: 12, 
// //     borderWidth: 1, 
// //     borderColor: T.border, 
// //     overflow: 'hidden',
// //     ...Platform.select({
// //       ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8 },
// //       android: { elevation: 8 }
// //     })
// //   },
// //   inputFocused: { borderColor: T.accent },
  
// //   /* Text Input Container */
// //   panelLeft: { 
// //     flex: 1, 
// //     paddingTop: 10,     // Room for label
// //     paddingBottom: 10,  // Room for input
// //     paddingLeft: 15 
// //   },
// //   panelLabel: { 
// //     color: T.t3, 
// //     fontSize: 7.5, 
// //     fontWeight: '900', 
// //     letterSpacing: 1.5, 
// //     marginBottom: 4     // Push the label away from the typing area
// //   },
// //   inputRow: { 
// //     flexDirection: 'row', 
// //     alignItems: 'center', 
// //     gap: 8 
// //   },
// //   input: { 
// //     flex: 1, 
// //     color: T.t1, 
// //     fontSize: 15, 
// //     height: 38,         // Increased height for letter clarity
// //     paddingVertical: 0, // Reset default padding
// //     fontWeight: '600',
// //     textAlignVertical: 'center'
// //   },
// //   searchBtn: { 
// //     width: 55, 
// //     backgroundColor: T.accent, 
// //     justifyContent: 'center', 
// //     alignItems: 'center' 
// //   },

// //   /* Markers & UI Components */
// //   markerContainer: { alignItems: 'center', justifyContent: 'center' },
// //   markerReticle: { position: 'absolute', width: 26, height: 26, borderRadius: 13, borderWidth: 1, borderColor: T.accent, borderStyle: 'dashed' },
// //   markerDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: T.accent },
// //   infoCard: { position: 'absolute', bottom: 30, left: 20, right: 20 },
// //   cardInner: { borderRadius: 16, padding: 16, borderWidth: 1, borderColor: T.border },
// //   statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
// //   statBox: { flex: 1 },
// //   statLabel: { color: T.t3, fontSize: 8, fontWeight: '800' },
// //   statValue: { color: T.t1, fontSize: 24, fontWeight: '900' },
// //   unit: { fontSize: 10, color: T.t3 },
// //   resetBtn: { backgroundColor: 'rgba(255,68,68,0.1)', paddingVertical: 10, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(255,68,68,0.3)' },
// //   resetBtnTxt: { color: '#FF4444', fontSize: 9, fontWeight: '900', letterSpacing: 1 }
// // });















// // nnn




// // MapScreen.jsx — Full Background Navigation
// import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
// import {
//   View, Text, StyleSheet, TextInput, TouchableOpacity,
//   Alert, Dimensions, StatusBar, Animated, Keyboard, Platform
// } from "react-native";
// import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
// import * as Location from "expo-location";
// import * as TaskManager from "expo-task-manager";
// import axios from "axios";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";

// // ─── Constants ────────────────────────────────────────────────────────────────
// const GEOAPIFY_KEY = "fa6c855af73d4b1f959bb154f5ec2eb5";
// const LOCATION_TASK = "background-location-task";
// const { width, height } = Dimensions.get("window");

// const T = {
//   bg: "#050505",
//   card: "#131313",
//   border: "#242424",
//   t1: "#FFFFFF",
//   t2: "#B0B0B0",
//   t3: "#4A4A4A",
//   accent: "#00FF94",
//   red: "#FF4444",
// };

// // ─── Background Task (MUST be top-level, outside component) ───────────────────
// TaskManager.defineTask(LOCATION_TASK, ({ data, error }) => {
//   if (error) {
//     console.warn("[BG Task] Error:", error.message);
//     return;
//   }
//   if (data?.locations?.length) {
//     const { latitude, longitude } = data.locations[0].coords;
//     // Store globally so the component can read on next foreground
//     global._bgLocation = { latitude, longitude };
//   }
// });

// // ─── Component ────────────────────────────────────────────────────────────────
// export default function MapScreen() {
//   const mapRef = useRef(null);
//   const lastRouteCall = useRef(0);
//   const abortController = useRef(null);
//   const destinationRef = useRef(null); // mirror of destination for bg task access
//   const fade = useRef(new Animated.Value(0)).current;

//   const [location, setLocation] = useState(null);
//   const [destination, setDestination] = useState(null);
//   const [routeCoords, setRouteCoords] = useState([]);
//   const [search, setSearch] = useState("");
//   const [distance, setDistance] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [focused, setFocused] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [bgGranted, setBgGranted] = useState(false);

//   const memoizedMapStyle = useMemo(() => mapDarkStyle, []);

//   // ── Mount / unmount ──────────────────────────────────────────────────────
//   useEffect(() => {
//     Animated.timing(fade, { toValue: 1, duration: 400, useNativeDriver: true }).start();
//     setupLocation();

//     return () => {
//       abortController.current?.abort();
//       // Stop background tracking on unmount
//       Location.stopLocationUpdatesAsync(LOCATION_TASK).catch(() => {});
//     };
//   }, []);

//   // ── Keep destinationRef in sync so bg polling can access it ─────────────
//   useEffect(() => {
//     destinationRef.current = destination;
//   }, [destination]);

//   // ── Poll global._bgLocation while app is foregrounded ───────────────────
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (global._bgLocation) {
//         const userLoc = global._bgLocation;
//         setLocation(userLoc);

//         const now = Date.now();
//         if (destinationRef.current && now - lastRouteCall.current > 20000) {
//           getRoute(userLoc, destinationRef.current);
//           lastRouteCall.current = now;
//         }
//         global._bgLocation = null; // consume it
//       }
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [getRoute]);

//   // ── Location setup ───────────────────────────────────────────────────────
//   const setupLocation = async () => {
//     // 1. Foreground permission
//     const { status: fgStatus } = await Location.requestForegroundPermissionsAsync();
//     if (fgStatus !== "granted") {
//       Alert.alert("Permission Denied", "Location permission is required for navigation.");
//       return;
//     }

//     // 2. Background permission
//     const { status: bgStatus } = await Location.requestBackgroundPermissionsAsync();
//     const hasBg = bgStatus === "granted";
//     setBgGranted(hasBg);

//     if (!hasBg) {
//       Alert.alert(
//         "Background Location",
//         "Navigation will pause when you leave the app. Grant 'Allow all the time' in Settings for full background tracking."
//       );
//     }

//     // 3. Foreground watcher — live updates while app is open
//     await Location.watchPositionAsync(
//       { accuracy: Location.Accuracy.Balanced, distanceInterval: 30 },
//       (loc) => {
//         const userLoc = {
//           latitude: loc.coords.latitude,
//           longitude: loc.coords.longitude,
//         };
//         setLocation(userLoc);

//         const now = Date.now();
//         if (destinationRef.current && now - lastRouteCall.current > 20000) {
//           getRoute(userLoc, destinationRef.current);
//           lastRouteCall.current = now;
//         }
//       }
//     );

//     // 4. Background task — keeps tracking when app is minimized (Android only needs foregroundService)
//     if (hasBg) {
//       const isRunning = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK).catch(() => false);
//       if (!isRunning) {
//         await Location.startLocationUpdatesAsync(LOCATION_TASK, {
//           accuracy: Location.Accuracy.Balanced,
//           distanceInterval: 30,
//           showsBackgroundLocationIndicator: true, // iOS blue pill
//           foregroundService: {
//             notificationTitle: "Navigation Active",
//             notificationBody: "Tracking your location in background...",
//             notificationColor: "#00FF94",
//           },
//           pausesUpdatesAutomatically: false,
//         });
//       }
//     }
//   };

//   // ── Route fetching ───────────────────────────────────────────────────────
//   const getRoute = useCallback(async (start, end) => {
//     abortController.current?.abort();
//     abortController.current = new AbortController();

//     try {
//       const res = await fetch(
//         `https://api.geoapify.com/v1/routing?waypoints=${start.latitude},${start.longitude}|${end.latitude},${end.longitude}&mode=drive&apiKey=${GEOAPIFY_KEY}`,
//         { signal: abortController.current.signal }
//       );
//       const data = await res.json();
//       if (!data.features?.length) return;

//       const feature = data.features[0];
//       const coords = feature.geometry.coordinates[0].map((p) => ({
//         latitude: p[1],
//         longitude: p[0],
//       }));

//       setRouteCoords(coords);
//       setDistance((feature.properties.distance / 1000).toFixed(1));
//       // duration comes in seconds from Geoapify
//       setDuration(Math.round(feature.properties.time / 60));
//     } catch (err) {
//       if (err.name !== "AbortError") console.warn("Routing error:", err.message);
//     }
//   }, []);

//   // ── Geocode search ───────────────────────────────────────────────────────
//   const searchLocation = async () => {
//     if (!search.trim() || loading) return;
//     setLoading(true);
//     Keyboard.dismiss();

//     try {
//       const res = await axios.get(
//         `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(search)}&apiKey=${GEOAPIFY_KEY}`,
//         { timeout: 6000 }
//       );

//       if (!res.data.features.length) {
//         Alert.alert("Not Found", "Could not find that location.");
//         return;
//       }

//       const [lon, lat] = res.data.features[0].geometry.coordinates;
//       const dest = { latitude: lat, longitude: lon };
//       setDestination(dest);
//       destinationRef.current = dest;
//       lastRouteCall.current = 0; // force immediate route fetch

//       if (location) {
//         getRoute(location, dest);
//         mapRef.current?.animateToRegion(
//           { ...dest, latitudeDelta: 0.05, longitudeDelta: 0.05 },
//           1000
//         );
//       }
//     } catch (err) {
//       Alert.alert("Error", "Search failed. Check your connection.");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ── Reset ────────────────────────────────────────────────────────────────
//   const abortMission = () => {
//     setDestination(null);
//     destinationRef.current = null;
//     setRouteCoords([]);
//     setDistance(0);
//     setDuration(0);
//     setSearch("");
//   };

//   // ── Format duration ──────────────────────────────────────────────────────
//   const formatDuration = (mins) => {
//     if (mins < 60) return `${mins}m`;
//     return `${Math.floor(mins / 60)}h ${mins % 60}m`;
//   };

//   // ─────────────────────────────────────────────────────────────────────────
//   return (
//     <View style={styles.root}>
//       <StatusBar barStyle="light-content" />

//       {/* ── SEARCH HUD ── */}
//       <Animated.View style={[styles.searchHUD, { opacity: fade }]}>
//         {/* Background indicator pill */}
//         {bgGranted && (
//           <View style={styles.bgPill}>
//             <View style={styles.bgDot} />
//             <Text style={styles.bgPillTxt}>BG TRACKING ON</Text>
//           </View>
//         )}

//         <View style={[styles.inputGroup, focused && styles.inputFocused]}>
//           <View style={styles.panelLeft}>
//             <Text style={styles.panelLabel}>
//               {loading ? "SEARCHING..." : "DESTINATION"}
//             </Text>
//             <View style={styles.inputRow}>
//               <Ionicons
//                 name="navigate-circle-outline"
//                 size={18}
//                 color={focused ? T.accent : T.t3}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Search destination..."
//                 placeholderTextColor={T.t3}
//                 value={search}
//                 onChangeText={setSearch}
//                 onFocus={() => setFocused(true)}
//                 onBlur={() => setFocused(false)}
//                 onSubmitEditing={searchLocation}
//                 returnKeyType="search"
//                 selectionColor={T.accent}
//                 disableFullscreenUI={true}
//               />
//               {search.length > 0 && (
//                 <TouchableOpacity onPress={() => setSearch("")}>
//                   <Ionicons name="close-circle" size={18} color={T.t3} />
//                 </TouchableOpacity>
//               )}
//             </View>
//           </View>

//           <TouchableOpacity
//             style={[styles.searchBtn, loading && styles.searchBtnLoading]}
//             onPress={searchLocation}
//             activeOpacity={0.8}
//             disabled={loading}
//           >
//             <MaterialCommunityIcons
//               name={loading ? "loading" : "radar"}
//               size={22}
//               color={loading ? T.t3 : T.bg}
//             />
//           </TouchableOpacity>
//         </View>
//       </Animated.View>

//       {/* ── MAP ── */}
//       <MapView
//         ref={mapRef}
//         style={styles.map}
//         provider={PROVIDER_GOOGLE}
//         customMapStyle={memoizedMapStyle}
//         showsUserLocation={true}
//         followsUserLocation={!destination} // stop following once destination set
//         moveOnMarkerPress={false}
//         showsTraffic={false}
//         showsCompass={false}
//         initialRegion={{
//           latitude: 20.5937,
//           longitude: 78.9629,
//           latitudeDelta: 10,
//           longitudeDelta: 10,
//         }}
//       >
//         {destination && (
//           <Marker coordinate={destination} flat={true} tracksViewChanges={false}>
//             <View style={styles.markerContainer}>
//               <View style={styles.markerReticle} />
//               <View style={styles.markerDot} />
//             </View>
//           </Marker>
//         )}

//         {routeCoords.length > 0 && (
//           <>
//             {/* Shadow line */}
//             <Polyline
//               coordinates={routeCoords}
//               strokeWidth={6}
//               strokeColor="rgba(0,0,0,0.4)"
//               geodesic={true}
//             />
//             {/* Main route line */}
//             <Polyline
//               coordinates={routeCoords}
//               strokeWidth={3}
//               strokeColor={T.accent}
//               geodesic={true}
//             />
//           </>
//         )}
//       </MapView>

//       {/* ── INFO CARD ── */}
//       {distance > 0 && (
//         <Animated.View style={[styles.infoCard, { opacity: fade }]}>
//           <LinearGradient colors={["#131313", "#0A0A0A"]} style={styles.cardInner}>
//             <View style={styles.statsGrid}>
//               <View style={styles.statBox}>
//                 <Text style={styles.statLabel}>DISTANCE</Text>
//                 <Text style={styles.statValue}>
//                   {distance}
//                   <Text style={styles.unit}> KM</Text>
//                 </Text>
//               </View>

//               <View style={styles.divider} />

//               <View style={styles.statBox}>
//                 <Text style={styles.statLabel}>EST. TIME</Text>
//                 <Text style={styles.statValue}>
//                   {formatDuration(duration)}
//                 </Text>
//               </View>

//               <View style={styles.divider} />

//               <View style={styles.statBox}>
//                 <Text style={styles.statLabel}>ROUTE</Text>
//                 <Text style={[styles.statValue, { color: T.accent, fontSize: 14 }]}>
//                   ACTIVE
//                 </Text>
//               </View>
//             </View>

//             {/* Re-centre button */}
//             <TouchableOpacity
//               style={styles.centreBtn}
//               onPress={() => {
//                 if (location) {
//                   mapRef.current?.animateToRegion(
//                     { ...location, latitudeDelta: 0.01, longitudeDelta: 0.01 },
//                     600
//                   );
//                 }
//               }}
//             >
//               <Ionicons name="locate" size={16} color={T.accent} />
//               <Text style={styles.centreBtnTxt}>RE-CENTRE</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.resetBtn} onPress={abortMission}>
//               <Text style={styles.resetBtnTxt}>✕  ABORT MISSION</Text>
//             </TouchableOpacity>
//           </LinearGradient>
//         </Animated.View>
//       )}
//     </View>
//   );
// }

// // ─── Map style ─────────────────────────────────────────────────────────────────
// const mapDarkStyle = [
//   { elementType: "geometry", stylers: [{ color: "#1a1a1a" }] },
//   { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
//   { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1a" }] },
//   { featureType: "road", elementType: "geometry", stylers: [{ color: "#2c2c2c" }] },
//   { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#373737" }] },
//   { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
//   { featureType: "water", stylers: [{ color: "#000000" }] },
//   { featureType: "poi", stylers: [{ visibility: "off" }] },
//   { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
//   { featureType: "transit", stylers: [{ visibility: "off" }] },
// ];

// // ─── Styles ────────────────────────────────────────────────────────────────────
// const styles = StyleSheet.create({
//   root: { flex: 1, backgroundColor: "#050505" },
//   map: { width, height },

//   // Search HUD
//   searchHUD: {
//     position: "absolute",
//     top: 50,
//     left: 20,
//     right: 20,
//     zIndex: 10,
//     gap: 8,
//   },

//   // BG indicator pill
//   bgPill: {
//     flexDirection: "row",
//     alignItems: "center",
//     alignSelf: "flex-start",
//     backgroundColor: "rgba(0,255,148,0.1)",
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderWidth: 1,
//     borderColor: "rgba(0,255,148,0.3)",
//     gap: 6,
//     marginBottom: 4,
//   },
//   bgDot: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: "#00FF94",
//   },
//   bgPillTxt: {
//     color: "#00FF94",
//     fontSize: 9,
//     fontWeight: "800",
//     letterSpacing: 1.2,
//   },

//   // Input group
//   inputGroup: {
//     flexDirection: "row",
//     backgroundColor: "rgba(10,10,10,0.97)",
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: "#242424",
//     overflow: "hidden",
//     ...Platform.select({
//       ios: {
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 0.4,
//         shadowRadius: 10,
//       },
//       android: { elevation: 10 },
//     }),
//   },
//   inputFocused: { borderColor: "#00FF94" },

//   panelLeft: {
//     flex: 1,
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 15,
//     paddingRight: 8,
//   },
//   panelLabel: {
//     color: "#4A4A4A",
//     fontSize: 7.5,
//     fontWeight: "900",
//     letterSpacing: 1.5,
//     marginBottom: 4,
//   },
//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   input: {
//     flex: 1,
//     color: "#FFFFFF",
//     fontSize: 15,
//     height: 38,
//     paddingVertical: 0,
//     fontWeight: "600",
//     textAlignVertical: "center",
//   },
//   searchBtn: {
//     width: 55,
//     backgroundColor: "#00FF94",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   searchBtnLoading: {
//     backgroundColor: "#1a1a1a",
//   },

//   // Marker
//   markerContainer: { alignItems: "center", justifyContent: "center" },
//   markerReticle: {
//     position: "absolute",
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     borderWidth: 1.5,
//     borderColor: "#00FF94",
//     borderStyle: "dashed",
//   },
//   markerDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#00FF94",
//   },

//   // Info card
//   infoCard: { position: "absolute", bottom: 30, left: 20, right: 20 },
//   cardInner: {
//     borderRadius: 16,
//     padding: 16,
//     borderWidth: 1,
//     borderColor: "#242424",
//     gap: 12,
//   },
//   statsGrid: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   statBox: { flex: 1, alignItems: "center" },
//   divider: {
//     width: 1,
//     height: 36,
//     backgroundColor: "#242424",
//   },
//   statLabel: {
//     color: "#4A4A4A",
//     fontSize: 8,
//     fontWeight: "800",
//     letterSpacing: 1,
//     marginBottom: 4,
//   },
//   statValue: {
//     color: "#FFFFFF",
//     fontSize: 22,
//     fontWeight: "900",
//   },
//   unit: { fontSize: 10, color: "#4A4A4A" },

//   // Re-centre
//   centreBtn: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 6,
//     paddingVertical: 8,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "rgba(0,255,148,0.25)",
//     backgroundColor: "rgba(0,255,148,0.06)",
//   },
//   centreBtnTxt: {
//     color: "#00FF94",
//     fontSize: 9,
//     fontWeight: "900",
//     letterSpacing: 1,
//   },

//   // Abort button
//   resetBtn: {
//     backgroundColor: "rgba(255,68,68,0.08)",
//     paddingVertical: 10,
//     borderRadius: 8,
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "rgba(255,68,68,0.25)",
//   },
//   resetBtnTxt: {
//     color: "#FF4444",
//     fontSize: 9,
//     fontWeight: "900",
//     letterSpacing: 1.2,
//   },
// });







// new
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  StatusBar,
  Animated,
  Keyboard,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// ═══════════════════════════════════════════════════════════════
// 🌐  BACKEND — deployed Vercel URL (single source of truth)
//     To change: edit ONLY this one line.
// ═══════════════════════════════════════════════════════════════
const API_BASE = "https://semproject-1a4i.vercel.app";

// ─── Internal fetch wrapper ────────────────────────────────────
async function apiPost(path, body, signal) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });
  const json = await res.json();
  if (!res.ok || json.success === false) {
    throw new Error(json.error || `Request failed (${res.status})`);
  }
  return json;
}

// Geocode: text -> { latitude, longitude, label, city, country }
async function geocode(query, signal) {
  const json = await apiPost("/api/live-map/geocode", { query }, signal);
  return json.result;
}

// Route: two coords -> { coordinates[], distance_km, duration_min }
async function fetchRouteData(start, end, signal) {
  const json = await apiPost(
    "/api/live-map/route",
    {
      startLat: start.latitude,
      startLon: start.longitude,
      endLat:   end.latitude,
      endLon:   end.longitude,
      mode:     "drive",
    },
    signal
  );
  return json.route;
}

// ═══════════════════════════════════════════════════════════════
// 📦  Crash-safe optional imports
// ═══════════════════════════════════════════════════════════════
let MapView, Marker, Polyline;
let Location, TaskManager;

try {
  const Maps = require("react-native-maps");
  MapView  = Maps.default;
  Marker   = Maps.Marker;
  Polyline = Maps.Polyline;
} catch (e) {
  console.warn("[Map] react-native-maps not available:", e.message);
}

try {
  Location = require("expo-location");
} catch (e) {
  console.warn("[Map] expo-location not available:", e.message);
}

try {
  TaskManager = require("expo-task-manager");
} catch (e) {
  console.warn("[Map] expo-task-manager not available:", e.message);
}

// ═══════════════════════════════════════════════════════════════
// ⚙️  Constants & theme
// ═══════════════════════════════════════════════════════════════
const LOCATION_TASK    = "background-location-task";
const ROUTE_THROTTLE   = 20_000; // ms between auto-route refreshes
const { width, height } = Dimensions.get("window");

const T = {
  bg:     "#050505",
  card:   "#131313",
  border: "#242424",
  t1:     "#FFFFFF",
  t2:     "#B0B0B0",
  t3:     "#4A4A4A",
  accent: "#00FF94",
  red:    "#FF4444",
};

// ═══════════════════════════════════════════════════════════════
// 🔔  Background location task (defined once at module level)
// ═══════════════════════════════════════════════════════════════
if (TaskManager && !TaskManager.isTaskDefined(LOCATION_TASK)) {
  try {
    TaskManager.defineTask(LOCATION_TASK, ({ data, error }) => {
      if (error) { console.warn("[BG Task]", error.message); return; }
      if (data?.locations?.length) {
        const { latitude, longitude } = data.locations[0].coords;
        global._bgLocation = { latitude, longitude };
      }
    });
  } catch (e) {
    console.warn("[BG Task] define failed:", e.message);
  }
}

// ═══════════════════════════════════════════════════════════════
// 🗺️  MapScreen
// ═══════════════════════════════════════════════════════════════
export default function MapScreen() {
  const mapRef      = useRef(null);
  const lastRouteTs = useRef(0);
  const abortCtrl   = useRef(null);
  const destRef     = useRef(null);   // shadow of destination for use in callbacks
  const watcherRef  = useRef(null);
  const fade        = useRef(new Animated.Value(0)).current;

  const [location,    setLocation]    = useState(null);
  const [destination, setDestination] = useState(null);
  const [destLabel,   setDestLabel]   = useState("");
  const [routeCoords, setRouteCoords] = useState([]);
  const [search,      setSearch]      = useState("");
  const [distanceKm,  setDistanceKm]  = useState(0);
  const [durationMin, setDurationMin] = useState(0);
  const [focused,     setFocused]     = useState(false);
  const [loading,     setLoading]     = useState(false);
  const [bgGranted,   setBgGranted]   = useState(false);
  const [error,       setError]       = useState(null);
  const [mapAvailable]                = useState(!!MapView);

  const mapStyle = useMemo(() => MAP_DARK_STYLE, []);

  // keep destRef in sync
  useEffect(() => { destRef.current = destination; }, [destination]);

  // ── mount / unmount ──────────────────────────────────────────
  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 400, useNativeDriver: true }).start();
    if (Location) initLocation();
    else setError("Location services unavailable on this device");

    return () => {
      abortCtrl.current?.abort();
      try { watcherRef.current?.remove(); } catch (_) {}
      if (Location) Location.stopLocationUpdatesAsync(LOCATION_TASK).catch(() => {});
    };
  }, []);

  // ── poll global._bgLocation (background updates) ─────────────
  useEffect(() => {
    const iv = setInterval(() => {
      if (!global._bgLocation || !destRef.current) return;
      const loc = global._bgLocation;
      global._bgLocation = null;
      setLocation(loc);
      const now = Date.now();
      if (now - lastRouteTs.current > ROUTE_THROTTLE) {
        doFetchRoute(loc, destRef.current);
        lastRouteTs.current = now;
      }
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  // ── request permissions + start watchers ─────────────────────
  const initLocation = async () => {
    try {
      const { status: fg } = await Location.requestForegroundPermissionsAsync();
      if (fg !== "granted") {
        setError("Location permission denied");
        Alert.alert("Permission Denied", "Location access is required for navigation.");
        return;
      }

      const { status: bg } = await Location.requestBackgroundPermissionsAsync();
      const hasBg = bg === "granted";
      setBgGranted(hasBg);
      if (!hasBg) {
        Alert.alert(
          "Background Location",
          "Grant 'Allow all the time' in Settings for navigation to work when the app is backgrounded."
        );
      }

      // Foreground watcher
      try {
        const sub = await Location.watchPositionAsync(
          { accuracy: Location.Accuracy.Balanced, distanceInterval: 30, timeInterval: 5000 },
          (loc) => {
            const userLoc = { latitude: loc.coords.latitude, longitude: loc.coords.longitude };
            setLocation(userLoc);
            const now = Date.now();
            if (destRef.current && now - lastRouteTs.current > ROUTE_THROTTLE) {
              doFetchRoute(userLoc, destRef.current);
              lastRouteTs.current = now;
            }
          }
        );
        watcherRef.current = sub;
      } catch (e) {
        console.warn("[Map] watchPositionAsync:", e.message);
      }

      // Background task
      if (hasBg && TaskManager) {
        try {
          const running = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK).catch(() => false);
          if (!running) {
            await Location.startLocationUpdatesAsync(LOCATION_TASK, {
              accuracy: Location.Accuracy.Balanced,
              distanceInterval: 30,
              showsBackgroundLocationIndicator: true,
              foregroundService: {
                notificationTitle: "Navigation Active",
                notificationBody:  "Tracking your location…",
                notificationColor:  T.accent,
              },
              pausesUpdatesAutomatically: false,
            }).catch((e) => console.warn("[Map] BG start:", e.message));
          }
        } catch (e) {
          console.warn("[Map] BG setup:", e.message);
        }
      }
    } catch (e) {
      console.error("[Map] initLocation:", e);
      setError(e.message);
    }
  };

  // ── fetch route from backend ─────────────────────────────────
  const doFetchRoute = useCallback(async (start, end) => {
    abortCtrl.current?.abort();
    abortCtrl.current = new AbortController();
    try {
      const r = await fetchRouteData(start, end, abortCtrl.current.signal);
      if (!r?.coordinates?.length) { console.warn("[Map] Empty route"); return; }
      setRouteCoords(r.coordinates);
      setDistanceKm(r.distance_km);
      setDurationMin(r.duration_min);
    } catch (e) {
      if (e.name === "AbortError") return;
      console.warn("[Map] route error:", e.message);
      setError(`Route error: ${e.message}`);
    }
  }, []);

  // ── geocode + start navigation ───────────────────────────────
  const searchLocation = async () => {
    if (!search.trim() || loading) return;
    setLoading(true);
    setError(null);
    Keyboard.dismiss();

    abortCtrl.current?.abort();
    abortCtrl.current = new AbortController();

    try {
      const result = await geocode(search.trim(), abortCtrl.current.signal);
      const dest = { latitude: result.latitude, longitude: result.longitude };

      setDestination(dest);
      setDestLabel(result.label || search.trim());
      destRef.current   = dest;
      lastRouteTs.current = 0;

      mapRef.current?.animateToRegion({ ...dest, latitudeDelta: 0.05, longitudeDelta: 0.05 }, 900);
      if (location) doFetchRoute(location, dest);

    } catch (e) {
      if (e.name === "AbortError") return;
      console.error("[Map] search:", e.message);
      if (e.message.includes("not found") || e.message.includes("404")) {
        Alert.alert("Not Found", "Could not find that location — try a more specific search.");
      } else {
        setError(`Search failed: ${e.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // ── abort / reset ────────────────────────────────────────────
  const abortMission = () => {
    abortCtrl.current?.abort();
    setDestination(null);  setDestLabel(""); destRef.current = null;
    setRouteCoords([]);    setDistanceKm(0); setDurationMin(0);
    setSearch("");         setError(null);
  };

  // ── re-centre ────────────────────────────────────────────────
  const reCentre = () => {
    if (!location || !mapRef.current) return;
    mapRef.current.animateToRegion({ ...location, latitudeDelta: 0.01, longitudeDelta: 0.01 }, 600);
  };

  // ── helpers ──────────────────────────────────────────────────
  const fmtDuration = (m) => {
    if (!m) return "--";
    return m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
  };

  // ═══════════════════════════════════════════════════════════
  // ❌  Fallback: no MapView
  // ═══════════════════════════════════════════════════════════
  if (!mapAvailable) {
    return (
      <View style={s.root}>
        <StatusBar barStyle="light-content" backgroundColor={T.bg} />
        <View style={s.errScreen}>
          <Ionicons name="alert-circle" size={52} color={T.red} />
          <Text style={s.errTitle}>Map Unavailable</Text>
          <Text style={s.errMsg}>
            Install the maps package first:{"\n\n"}
            <Text style={{ color: T.accent }}>npx expo install react-native-maps</Text>
          </Text>
        </View>
      </View>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // ✅  Main render
  // ═══════════════════════════════════════════════════════════
  return (
    <View style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor={T.bg} />

      {/* MAP */}
      <MapView
        ref={mapRef}
        style={s.map}
        customMapStyle={mapStyle}
        showsUserLocation
        followsUserLocation={!destination}
        moveOnMarkerPress={false}
        showsTraffic={false}
        showsCompass={false}
        loadingEnabled
        loadingIndicatorColor={T.accent}
        onMapReady={() => console.log("✅ MapView ready")}
        onError={(e) => { console.error("❌ MapView error:", e); setError("Map failed to load"); }}
        initialRegion={{ latitude: 20.5937, longitude: 78.9629, latitudeDelta: 10, longitudeDelta: 10 }}
      >
        {/* Destination pin */}
        {destination && Marker && (
          <Marker coordinate={destination} flat tracksViewChanges={false} title={destLabel || "Destination"}>
            <View style={s.pin}>
              <View style={s.pinRing} />
              <View style={s.pinDot} />
            </View>
          </Marker>
        )}

        {/* Route polylines */}
        {routeCoords.length > 1 && Polyline && (
          <>
            <Polyline coordinates={routeCoords} strokeWidth={7} strokeColor="rgba(0,0,0,0.3)" geodesic />
            <Polyline coordinates={routeCoords} strokeWidth={3} strokeColor={T.accent} geodesic />
          </>
        )}
      </MapView>

      {/* SEARCH HUD */}
      <Animated.View style={[s.hud, { opacity: fade }]}>
        {bgGranted && (
          <View style={s.bgBadge}>
            <View style={s.bgDot} />
            <Text style={s.bgTxt}>BG TRACKING</Text>
          </View>
        )}

        <View style={[s.searchBox, focused && s.searchBoxActive]}>
          <View style={s.searchLeft}>
            <Text style={s.searchLbl}>{loading ? "SEARCHING…" : "DESTINATION"}</Text>
            <View style={s.searchRow}>
              <Ionicons name="navigate-circle-outline" size={18} color={focused ? T.accent : T.t3} />
              <TextInput
                style={s.input}
                placeholder="Search a destination…"
                placeholderTextColor={T.t3}
                value={search}
                onChangeText={setSearch}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onSubmitEditing={searchLocation}
                returnKeyType="search"
                selectionColor={T.accent}
                disableFullscreenUI
                editable={!loading}
              />
              {search.length > 0 && !loading && (
                <TouchableOpacity onPress={() => setSearch("")} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <Ionicons name="close-circle" size={17} color={T.t3} />
                </TouchableOpacity>
              )}
              {loading && <ActivityIndicator size="small" color={T.accent} />}
            </View>
          </View>

          <TouchableOpacity
            style={[s.searchBtn, loading && s.searchBtnDim]}
            onPress={searchLocation}
            activeOpacity={0.8}
            disabled={loading || !search.trim()}
          >
            {loading
              ? <ActivityIndicator size="small" color={T.t3} />
              : <MaterialCommunityIcons name="radar" size={22} color={T.bg} />}
          </TouchableOpacity>
        </View>

        {!!error && (
          <View style={s.errBanner}>
            <Ionicons name="alert-circle" size={14} color={T.red} />
            <Text style={s.errBannerTxt} numberOfLines={2}>{error}</Text>
            <TouchableOpacity onPress={() => setError(null)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
              <Ionicons name="close" size={14} color={T.red} />
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>

      {/* INFO CARD */}
      {distanceKm > 0 && (
        <Animated.View style={[s.card, { opacity: fade }]}>
          <LinearGradient colors={["#131313", "#0A0A0A"]} style={s.cardInner}>
            {!!destLabel && (
              <Text style={s.cardDest} numberOfLines={1}>📍 {destLabel}</Text>
            )}

            <View style={s.stats}>
              <View style={s.stat}>
                <Text style={s.statLbl}>DISTANCE</Text>
                <Text style={s.statVal}>{distanceKm}<Text style={s.statUnit}> KM</Text></Text>
              </View>
              <View style={s.statDiv} />
              <View style={s.stat}>
                <Text style={s.statLbl}>ETA</Text>
                <Text style={s.statVal}>{fmtDuration(durationMin)}</Text>
              </View>
              <View style={s.statDiv} />
              <View style={s.stat}>
                <Text style={s.statLbl}>STATUS</Text>
                <Text style={[s.statVal, { color: T.accent, fontSize: 13 }]}>LIVE</Text>
              </View>
            </View>

            <TouchableOpacity style={s.centreBtn} onPress={reCentre}>
              <Ionicons name="locate" size={15} color={T.accent} />
              <Text style={s.centreTxt}>RE-CENTRE</Text>
            </TouchableOpacity>

            <TouchableOpacity style={s.abortBtn} onPress={abortMission}>
              <Text style={s.abortTxt}>✕  ABORT MISSION</Text>
            </TouchableOpacity>
          </LinearGradient>
        </Animated.View>
      )}
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════
// 🎨  Dark map style
// ═══════════════════════════════════════════════════════════════
const MAP_DARK_STYLE = [
  { elementType: "geometry",           stylers: [{ color: "#1a1a1a" }] },
  { elementType: "labels.text.fill",   stylers: [{ color: "#757575" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a1a" }] },
  { featureType: "road",               elementType: "geometry", stylers: [{ color: "#2c2c2c" }] },
  { featureType: "road.arterial",      elementType: "geometry", stylers: [{ color: "#373737" }] },
  { featureType: "road.highway",       elementType: "geometry", stylers: [{ color: "#3c3c3c" }] },
  { featureType: "water",              stylers: [{ color: "#000000" }] },
  { featureType: "poi",                stylers: [{ visibility: "off" }] },
  { elementType: "labels.icon",        stylers: [{ visibility: "off" }] },
  { featureType: "transit",            stylers: [{ visibility: "off" }] },
];

// ═══════════════════════════════════════════════════════════════
// 💅  Styles
// ═══════════════════════════════════════════════════════════════
const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: T.bg },
  map:  { width, height },

  errScreen: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: T.bg, paddingHorizontal: 24 },
  errTitle:  { color: T.red, fontSize: 18, fontWeight: "bold", marginTop: 16 },
  errMsg:    { color: T.t2, fontSize: 14, marginTop: 12, textAlign: "center", lineHeight: 22 },

  hud: { position: "absolute", top: 50, left: 16, right: 16, zIndex: 10, gap: 8 },

  bgBadge: {
    flexDirection: "row", alignItems: "center", alignSelf: "flex-start",
    backgroundColor: "rgba(0,255,148,0.08)", borderRadius: 20,
    paddingHorizontal: 10, paddingVertical: 4,
    borderWidth: 1, borderColor: "rgba(0,255,148,0.25)", gap: 6, marginBottom: 2,
  },
  bgDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: T.accent },
  bgTxt: { color: T.accent, fontSize: 9, fontWeight: "800", letterSpacing: 1.2 },

  searchBox: {
    flexDirection: "row", backgroundColor: "rgba(8,8,8,0.97)",
    borderRadius: 14, borderWidth: 1, borderColor: T.border, overflow: "hidden",
    ...Platform.select({
      ios:     { shadowColor: "#000", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.5, shadowRadius: 12 },
      android: { elevation: 12 },
    }),
  },
  searchBoxActive: { borderColor: T.accent },
  searchLeft: { flex: 1, paddingTop: 10, paddingBottom: 10, paddingLeft: 14, paddingRight: 8 },
  searchLbl:  { color: T.t3, fontSize: 7.5, fontWeight: "900", letterSpacing: 1.5, marginBottom: 4 },
  searchRow:  { flexDirection: "row", alignItems: "center", gap: 8 },
  input: {
    flex: 1, color: T.t1, fontSize: 15, fontWeight: "600",
    height: 38, paddingVertical: 0, textAlignVertical: "center",
  },
  searchBtn:    { width: 56, backgroundColor: T.accent, justifyContent: "center", alignItems: "center" },
  searchBtnDim: { backgroundColor: "#1a1a1a" },

  errBanner: {
    flexDirection: "row", alignItems: "center", gap: 8,
    backgroundColor: "rgba(255,68,68,0.08)", borderRadius: 10,
    paddingHorizontal: 12, paddingVertical: 8,
    borderWidth: 1, borderColor: "rgba(255,68,68,0.2)",
  },
  errBannerTxt: { color: T.red, fontSize: 12, flex: 1 },

  pin:     { alignItems: "center", justifyContent: "center" },
  pinRing: {
    position: "absolute", width: 30, height: 30, borderRadius: 15,
    borderWidth: 1.5, borderColor: T.accent, borderStyle: "dashed",
  },
  pinDot:  { width: 9, height: 9, borderRadius: 5, backgroundColor: T.accent },

  card:      { position: "absolute", bottom: 28, left: 16, right: 16 },
  cardInner: { borderRadius: 18, padding: 16, borderWidth: 1, borderColor: T.border, gap: 12 },
  cardDest:  { color: T.t2, fontSize: 11, fontWeight: "700", letterSpacing: 0.4 },

  stats:   { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  stat:    { flex: 1, alignItems: "center" },
  statDiv: { width: 1, height: 36, backgroundColor: T.border },
  statLbl: { color: T.t3, fontSize: 8, fontWeight: "800", letterSpacing: 1, marginBottom: 4 },
  statVal: { color: T.t1, fontSize: 22, fontWeight: "900" },
  statUnit:{ fontSize: 10, color: T.t3 },

  centreBtn: {
    flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6,
    paddingVertical: 9, borderRadius: 10,
    borderWidth: 1, borderColor: "rgba(0,255,148,0.22)",
    backgroundColor: "rgba(0,255,148,0.05)",
  },
  centreTxt: { color: T.accent, fontSize: 9, fontWeight: "900", letterSpacing: 1 },

  abortBtn: {
    backgroundColor: "rgba(255,68,68,0.07)", paddingVertical: 10,
    borderRadius: 10, alignItems: "center",
    borderWidth: 1, borderColor: "rgba(255,68,68,0.22)",
  },
  abortTxt: { color: T.red, fontSize: 9, fontWeight: "900", letterSpacing: 1.2 },
});