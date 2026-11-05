import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function MapScreen() {
  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Example Coordinates (e.g., Delhi to Jaipur)
  const origin = { latitude: 28.6139, longitude: 77.2090 };
  const destination = { latitude: 26.9124, longitude: 75.7873 };

  const fetchSmartCalculation = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://semproject-1a4i.vercel.app/calculate-trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          origin: `${origin.latitude},${origin.longitude}`,
          destination: `${destination.latitude},${destination.longitude}` 
        }),
      });
      const json = await response.json();
      setTripData(json);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...origin,
          latitudeDelta: 5,
          longitudeDelta: 5,
        }}
      >
        <Marker coordinate={origin} title="Start" pinColor="green" />
        <Marker coordinate={destination} title="End" />
        
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey="YOUR_GOOGLE_MAPS_API_KEY"
          strokeWidth={4}
          strokeColor="#8B5CF6"
        />
      </MapView>

      {/* Floating Smart Panel */}
      <View style={styles.calcPanel}>
        <Text style={styles.panelTitle}>Smart Trip Insight</Text>
        {loading ? (
          <ActivityIndicator color="#8B5CF6" />
        ) : tripData ? (
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Distance</Text>
              <Text style={styles.statValue}>{tripData.distance}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Time</Text>
              <Text style={styles.statValue}>{tripData.duration}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Est. Fuel</Text>
              <Text style={styles.statValue}>₹{tripData.estimatedCost}</Text>
            </View>
          </View>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={fetchSmartCalculation}>
            <Text style={styles.btnText}>Calculate Smart Cost</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: width, height: height },
  calcPanel: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    backgroundColor: '#0F172A',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E293B',
    elevation: 5,
  },
  panelTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 15 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  stat: { alignItems: 'center' },
  statLabel: { color: '#64748B', fontSize: 12 },
  statValue: { color: '#FFF', fontSize: 16, fontWeight: 'bold', marginTop: 4 },
  btn: { backgroundColor: '#8B5CF6', padding: 12, borderRadius: 10, alignItems: 'center' },
  btnText: { color: '#FFF', fontWeight: 'bold' }
});