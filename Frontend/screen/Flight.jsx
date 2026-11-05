// // // import React, { useState } from 'react';
// // // import { 
// // //   View, Text, StyleSheet, TouchableOpacity, TextInput, 
// // //   ScrollView, StatusBar, ActivityIndicator, Image, Dimensions 
// // // } from 'react-native';
// // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // import { LinearGradient } from 'expo-linear-gradient';
// // // import axios from 'axios';

// // // const { width } = Dimensions.get('window');

// // // const T = {
// // //   bg: '#050505',
// // //   card: '#131313',
// // //   card2: '#1A1A1A',
// // //   border: '#242424',
// // //   mint: '#FFFFFF',
// // //   t1: '#FFFFFF',
// // //   t2: '#B0B0B0',
// // //   t3: '#4A4A4A',
// // // };

// // // export default function FlightScreen({ navigation }) {
// // //   const [tripType, setTripType] = useState('One-way');
// // //   const [from, setFrom] = useState('BOM'); 
// // //   const [to, setTo] = useState('DEL');   
// // //   const [flights, setFlights] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   const handleSearch = async () => {
// // //     if (!from || !to) return;
// // //     setLoading(true);
// // //     setFlights([]); 
    
// // //     try {
// // //       // Using your backend IP
// // //       const res = await axios.get(`http://10.98.19.30:3000/api/flights`, {
// // //         params: {
// // //           departure_id: from.toUpperCase().trim(),
// // //           arrival_id: to.toUpperCase().trim(),
// // //           outbound_date: '2026-04-20', // Default date for testing
// // //           type: tripType === 'Round-trip' ? 'round_trip' : 'one_way'
// // //         }
// // //       });
      
// // //       if (res.data.success) {
// // //         setFlights(res.data.flights);
// // //       }
// // //     } catch (err) {
// // //       console.error("Flight Search Error:", err.response?.data || err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const renderFlightItem = (item, index) => (
// // //     <View key={index} style={styles.fCard}>
// // //       <View style={styles.fRow}>
// // //         <View style={styles.airlineInfo}>
// // //           <Image source={{ uri: item.logo }} style={styles.airlineLogo} resizeMode="contain" />
// // //           <View style={{ marginLeft: 12 }}>
// // //             <Text style={styles.airlineName}>{item.airline}</Text>
// // //             <Text style={styles.fNo}>{item.flight_number}</Text>
// // //           </View>
// // //         </View>
// // //         <Text style={styles.fPrice}>₹{item.price}</Text>
// // //       </View>

// // //       <View style={styles.routeContainer}>
// // //         <View>
// // //           <Text style={styles.fTime}>09:40</Text>
// // //           <Text style={styles.fCity}>{item.departure}</Text>
// // //         </View>
        
// // //         <View style={styles.fPath}>
// // //           <View style={styles.fLine} />
// // //           <Ionicons name="airplane" size={14} color={T.t3} />
// // //           <View style={styles.fLine} />
// // //         </View>

// // //         <View style={{ alignItems: 'flex-end' }}>
// // //           <Text style={styles.fTime}>11:55</Text>
// // //           <Text style={styles.fCity}>{item.arrival}</Text>
// // //         </View>
// // //       </View>

// // //       <View style={styles.fFooter}>
// // //         <Text style={styles.fDuration}>{item.duration} min • Non-stop</Text>
// // //         <TouchableOpacity style={styles.bookBtn}>
// // //           <Text style={styles.bookBtnTxt}>Select</Text>
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" />
      
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
// // //           <Ionicons name="chevron-back" size={24} color={T.t1} />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>FLIGHTS</Text>
// // //         <TouchableOpacity style={styles.backBtn}>
// // //           <Ionicons name="options-outline" size={22} color={T.t1} />
// // //         </TouchableOpacity>
// // //       </View>

// // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        
// // //         {/* Toggle Selector */}
// // //         <View style={styles.typeContainer}>
// // //           {['Round-trip', 'One-way'].map((type) => (
// // //             <TouchableOpacity 
// // //               key={type} 
// // //               onPress={() => setTripType(type)}
// // //               style={[styles.typeBtn, tripType === type && styles.typeBtnActive]}
// // //             >
// // //               <Text style={[styles.typeText, tripType === type && { color: '#000' }]}>{type}</Text>
// // //             </TouchableOpacity>
// // //           ))}
// // //         </View>

// // //         {/* Search Inputs */}
// // //         <View style={styles.searchCard}>
// // //           <View style={styles.inputRow}>
// // //             <MaterialCommunityIcons name="airplane-takeoff" size={20} color={T.t2} />
// // //             <TextInput 
// // //               placeholder="From (BOM)" 
// // //               placeholderTextColor={T.t3} 
// // //               style={styles.input} 
// // //               value={from}
// // //               onChangeText={setFrom}
// // //               autoCapitalize="characters"
// // //             />
// // //           </View>
// // //           <View style={styles.divider} />
// // //           <View style={styles.inputRow}>
// // //             <MaterialCommunityIcons name="airplane-landing" size={20} color={T.t2} />
// // //             <TextInput 
// // //               placeholder="To (DEL)" 
// // //               placeholderTextColor={T.t3} 
// // //               style={styles.input} 
// // //               value={to}
// // //               onChangeText={setTo}
// // //               autoCapitalize="characters"
// // //             />
// // //           </View>
// // //         </View>

// // //         <TouchableOpacity activeOpacity={0.8} style={styles.searchBtn} onPress={handleSearch}>
// // //           <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
// // //             {loading ? (
// // //               <ActivityIndicator color="#000" />
// // //             ) : (
// // //               <>
// // //                 <Text style={styles.searchBtnTxt}>Find Best Flights</Text>
// // //                 <Ionicons name="arrow-forward" size={18} color="#000" />
// // //               </>
// // //             )}
// // //           </LinearGradient>
// // //         </TouchableOpacity>

// // //         {/* Results List */}
// // //         <View style={styles.resultsSection}>
// // //           <View style={styles.resHeader}>
// // //             <Text style={styles.resTitle}>{flights.length > 0 ? 'Top Results' : ''}</Text>
// // //             {flights.length > 0 && <Text style={styles.resCount}>{flights.length} flights found</Text>}
// // //           </View>

// // //           {flights.map((item, index) => renderFlightItem(item, index))}
          
// // //           {!loading && flights.length === 0 && (
// // //             <View style={styles.emptyState}>
// // //               <Ionicons name="airplane-outline" size={40} color={T.border} />
// // //               <Text style={styles.emptyTxt}>Enter airport codes to start searching</Text>
// // //             </View>
// // //           )}
// // //         </View>
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: T.bg },
// // //   header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center' },
// // //   backBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: T.card, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: T.border },
// // //   headerTitle: { color: T.t1, fontSize: 13, fontWeight: '900', letterSpacing: 4 },
// // //   scroll: { padding: 20 },
  
// // //   // Search Bar
// // //   typeContainer: { flexDirection: 'row', backgroundColor: T.card, borderRadius: 14, padding: 4, marginBottom: 20, borderWidth: 1, borderColor: T.border },
// // //   typeBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
// // //   typeBtnActive: { backgroundColor: T.mint },
// // //   typeText: { color: T.t2, fontWeight: '800', fontSize: 12 },
  
// // //   searchCard: { backgroundColor: T.card, borderRadius: 22, padding: 20, borderWidth: 1, borderColor: T.border, marginBottom: 15 },
// // //   inputRow: { flexDirection: 'row', alignItems: 'center' },
// // //   input: { flex: 1, color: T.t1, marginLeft: 12, fontSize: 16, fontWeight: '600' },
// // //   divider: { height: 1, backgroundColor: T.border, marginVertical: 18 },
  
// // //   searchBtn: { borderRadius: 16, overflow: 'hidden' },
// // //   searchBtnG: { flexDirection: 'row', paddingVertical: 18, justifyContent: 'center', alignItems: 'center', gap: 10 },
// // //   searchBtnTxt: { color: '#000', fontWeight: '900', fontSize: 15, letterSpacing: 0.5 },

// // //   // Results Section
// // //   resultsSection: { marginTop: 30 },
// // //   resHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
// // //   resTitle: { color: T.t1, fontSize: 18, fontWeight: '800' },
// // //   resCount: { color: T.t3, fontSize: 12 },
  
// // //   // Flight Card
// // //   fCard: { backgroundColor: T.card, borderRadius: 22, padding: 20, marginBottom: 15, borderWidth: 1, borderColor: T.border },
// // //   fRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
// // //   airlineInfo: { flexDirection: 'row', alignItems: 'center' },
// // //   airlineLogo: { width: 32, height: 32 },
// // //   airlineName: { color: T.t1, fontWeight: '700', fontSize: 15 },
// // //   fNo: { color: T.t3, fontSize: 11, marginTop: 2 },
// // //   fPrice: { color: T.mint, fontSize: 20, fontWeight: '900' },
  
// // //   routeContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
// // //   fTime: { color: T.t1, fontSize: 17, fontWeight: '800' },
// // //   fCity: { color: T.t3, fontSize: 12, fontWeight: '600', marginTop: 4 },
// // //   fPath: { flex: 1, flexDirection: 'row', alignItems: 'center', marginHorizontal: 15 },
// // //   fLine: { flex: 1, height: 1, backgroundColor: T.border, borderStyle: 'dashed' },
  
// // //   fFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 15, borderTopWidth: 1, borderTopColor: T.border },
// // //   fDuration: { color: T.t3, fontSize: 11, fontWeight: '600' },
// // //   bookBtn: { backgroundColor: T.card2, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10, borderWidth: 1, borderColor: T.border },
// // //   bookBtnTxt: { color: T.t1, fontSize: 12, fontWeight: '800' },
  
// // //   emptyState: { alignItems: 'center', marginTop: 40, opacity: 0.5 },

// // //   emptyTxt: { color: T.t3, fontSize: 13, marginTop: 10, textAlign: 'center' },
// // // });













// // import React, { useState } from 'react';
// // import { 
// //   View, Text, StyleSheet, TouchableOpacity, TextInput, 
// //   ScrollView, StatusBar, ActivityIndicator, Image 
// // } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { Ionicons } from '@expo/vector-icons';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import axios from 'axios';

// // const T = { bg: '#050505', card: '#131313', border: '#242424', mint: '#FFFFFF', t1: '#FFFFFF', t3: '#4A4A4A' };

// // export default function FlightScreen({ navigation }) {
// //   const [from, setFrom] = useState('BOM');
// //   const [to, setTo] = useState('DEL');
// //   const [flights, setFlights] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [filter, setFilter] = useState('All');

// //   const handleSearch = async () => {
// //     setLoading(true);
// //     try {
// //       // Use your actual local IP address here
// //       const res = await axios.get(`http://10.98.19.30:3000/api/flights`, {
// //         params: { departure_id: from, arrival_id: to }
// //       });
// //       if (res.data.success) setFlights(res.data.flights);
// //     } catch (e) { 
// //       console.error(e); 
// //     } finally { 
// //       setLoading(false); 
// //     }
// //   };

// //   const getFilteredData = () => {
// //     if (filter === 'All') return flights;
// //     return flights.filter(f => {
// //       const hour = parseInt(f.departure_time.split(':')[0]);
// //       if (filter === 'Morning') return hour >= 5 && hour < 12;
// //       if (filter === 'Afternoon') return hour >= 12 && hour < 18;
// //       if (filter === 'Evening') return hour >= 18 || hour < 5;
// //     });
// //   };

// //   const renderFlightItem = (item, index) => (
// //     <View key={index} style={styles.fCard}>
// //       <View style={styles.fRow}>
// //         <View style={styles.airlineInfo}>
// //           <Image source={{ uri: item.logo }} style={styles.airlineLogo} />
// //           <View style={{ marginLeft: 12 }}>
// //             <Text style={styles.airlineName}>{item.airline}</Text>
// //             <Text style={styles.fNo}>{item.flight_number}</Text>
// //           </View>
// //         </View>
// //         <Text style={styles.fPrice}>₹{item.price}</Text>
// //       </View>

// //       <View style={styles.routeContainer}>
// //         <View style={{ flex: 1 }}>
// //           <Text style={styles.fTime}>{item.departure_time}</Text>
// //           <Text style={styles.fCity}>{item.departure}</Text>
// //           <Text style={styles.airportName} numberOfLines={1}>{item.departure_name}</Text>
// //         </View>
// //         <Ionicons name="airplane" size={16} color={T.t3} style={{ marginHorizontal: 15 }} />
// //         <View style={{ flex: 1, alignItems: 'flex-end' }}>
// //           <Text style={styles.fTime}>{item.arrival_time}</Text>
// //           <Text style={styles.fCity}>{item.arrival}</Text>
// //           <Text style={[styles.airportName, { textAlign: 'right' }]} numberOfLines={1}>{item.arrival_name}</Text>
// //         </View>
// //       </View>

// //       <View style={styles.fFooter}>
// //         <Text style={styles.fDuration}>{item.duration} min • {item.status}</Text>
// //         <View style={styles.statusBadge}>
// //            <Text style={styles.statusText}>Available</Text>
// //         </View>
// //       </View>
// //     </View>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" />
// //       <ScrollView contentContainerStyle={styles.scroll}>
// //         <View style={styles.searchCard}>
// //           <TextInput style={styles.input} value={from} onChangeText={setFrom} placeholder="From" placeholderTextColor={T.t3} autoCapitalize="characters" />
// //           <View style={{ height: 1, backgroundColor: T.border, marginVertical: 10 }} />
// //           <TextInput style={styles.input} value={to} onChangeText={setTo} placeholder="To" placeholderTextColor={T.t3} autoCapitalize="characters" />
// //         </View>

// //         <View style={styles.filterRow}>
// //           {['All', 'Morning', 'Afternoon', 'Evening'].map(t => (
// //             <TouchableOpacity key={t} onPress={() => setFilter(t)} style={[styles.fBtn, filter === t && styles.fBtnActive]}>
// //               <Text style={[styles.fBtnText, filter === t && { color: '#000' }]}>{t}</Text>
// //             </TouchableOpacity>
// //           ))}
// //         </View>

// //         <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
// //           <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
// //             {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchBtnTxt}>Search Real-Time</Text>}
// //           </LinearGradient>
// //         </TouchableOpacity>

// //         {getFilteredData().map((item, index) => renderFlightItem(item, index))}
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: T.bg },
// //   scroll: { padding: 20 },
// //   searchCard: { backgroundColor: T.card, borderRadius: 15, padding: 15, borderWidth: 1, borderColor: T.border },
// //   input: { color: T.t1, fontSize: 16, fontWeight: '700' },
// //   filterRow: { flexDirection: 'row', gap: 8, marginVertical: 15 },
// //   fBtn: { flex: 1, paddingVertical: 10, backgroundColor: T.card, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: T.border },
// //   fBtnActive: { backgroundColor: T.mint },
// //   fBtnText: { color: T.t1, fontSize: 11, fontWeight: '800' },
// //   searchBtn: { borderRadius: 15, overflow: 'hidden', marginBottom: 20 },
// //   searchBtnG: { paddingVertical: 18, alignItems: 'center' },
// //   searchBtnTxt: { fontWeight: '900', color: '#000' },
// //   fCard: { backgroundColor: T.card, padding: 20, borderRadius: 20, marginBottom: 15, borderWidth: 1, borderColor: T.border },
// //   fRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
// //   airlineInfo: { flexDirection: 'row', alignItems: 'center' },
// //   airlineLogo: { width: 30, height: 30, borderRadius: 5 },
// //   airlineName: { color: T.t1, fontWeight: '700' },
// //   fNo: { color: T.t3, fontSize: 10 },
// //   fPrice: { color: T.mint, fontSize: 18, fontWeight: '900' },
// //   routeContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 },
// //   fTime: { color: T.t1, fontSize: 18, fontWeight: '800' },
// //   fCity: { color: T.t3, fontSize: 12, fontWeight: '700' },
// //   airportName: { color: '#555', fontSize: 10 },
// //   fFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTopWidth: 1, borderTopColor: T.border },
// //   fDuration: { color: T.t3, fontSize: 11 },
// //   statusBadge: { backgroundColor: '#1A1A1A', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, borderWidth: 1, borderColor: T.border },
// //   statusText: { color: T.t1, fontSize: 10, fontWeight: '700' }
// // });









// import React, { useState } from 'react';
// import { 
//   View, Text, StyleSheet, TouchableOpacity, TextInput, 
//   ScrollView, StatusBar, ActivityIndicator, Image 
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import axios from 'axios';

// const T = { bg: '#050505', card: '#131313', border: '#242424', mint: '#FFFFFF', t1: '#FFFFFF', t3: '#4A4A4A' };

// export default function FlightScreen({ navigation }) {
//   const [from, setFrom] = useState('BOM');
//   const [to, setTo] = useState('DEL');
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filter, setFilter] = useState('All');

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`http://10.88.222.30:3000/api/flights`, {
//         params: { departure_id: from, arrival_id: to }
//       });
//       if (res.data.success) setFlights(res.data.flights);
//     } catch (e) { 
//       console.error(e); 
//     } finally { 
//       setLoading(false); 
//     }
//   };

//   const getFilteredData = () => {
//     if (filter === 'All') return flights;
//     return flights.filter(f => {
//       const hour = parseInt(f.departure_time.split(':')[0]);
//       if (filter === 'Morning') return hour >= 5 && hour < 12;
//       if (filter === 'Afternoon') return hour >= 12 && hour < 18;
//       if (filter === 'Evening') return hour >= 18 || hour < 5;
//     });
//   };

//   const renderFlightItem = (item, index) => (
//     <View key={index} style={styles.fCard}>
//       <View style={styles.fRow}>
//         <View style={styles.airlineInfo}>
//           <Image source={{ uri: item.logo }} style={styles.airlineLogo} />
//           <View style={{ marginLeft: 12 }}>
//             <Text style={styles.airlineName}>{item.airline}</Text>
//             <Text style={styles.fNo}>{item.flight_number}</Text>
//           </View>
//         </View>
//         <Text style={styles.fPrice}>₹{item.price}</Text>
//       </View>

//       <View style={styles.routeContainer}>
//         <View style={{ flex: 1 }}>
//           <Text style={styles.fTime}>{item.departure_time}</Text>
//           <Text style={styles.fCity}>{item.departure}</Text>
//           <Text style={styles.airportName} numberOfLines={1}>{item.departure_name}</Text>
//         </View>
//         <Ionicons name="airplane" size={16} color={T.t3} style={{ marginHorizontal: 15 }} />
//         <View style={{ flex: 1, alignItems: 'flex-end' }}>
//           <Text style={styles.fTime}>{item.arrival_time}</Text>
//           <Text style={styles.fCity}>{item.arrival}</Text>
//           <Text style={[styles.airportName, { textAlign: 'right' }]} numberOfLines={1}>{item.arrival_name}</Text>
//         </View>
//       </View>

//       <View style={styles.fFooter}>
//         <Text style={styles.fDuration}>{item.duration} min • {item.status}</Text>
//         {/* Status Badge removed from here */}
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <ScrollView contentContainerStyle={styles.scroll}>
//         <View style={styles.searchCard}>
//           <TextInput style={styles.input} value={from} onChangeText={setFrom} placeholder="From" placeholderTextColor={T.t3} autoCapitalize="characters" />
//           <View style={{ height: 1, backgroundColor: T.border, marginVertical: 10 }} />
//           <TextInput style={styles.input} value={to} onChangeText={setTo} placeholder="To" placeholderTextColor={T.t3} autoCapitalize="characters" />
//         </View>

//         <View style={styles.filterRow}>
//           {['All', 'Morning', 'Afternoon', 'Evening'].map(t => (
//             <TouchableOpacity key={t} onPress={() => setFilter(t)} style={[styles.fBtn, filter === t && styles.fBtnActive]}>
//               <Text style={[styles.fBtnText, filter === t && { color: '#000' }]}>{t}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
//           <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
//             {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchBtnTxt}>Search Real-Time</Text>}
//           </LinearGradient>
//         </TouchableOpacity>

//         {getFilteredData().map((item, index) => renderFlightItem(item, index))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: T.bg },
//   scroll: { padding: 20 },
//   searchCard: { backgroundColor: T.card, borderRadius: 15, padding: 15, borderWidth: 1, borderColor: T.border },
//   input: { color: T.t1, fontSize: 16, fontWeight: '700' },
//   filterRow: { flexDirection: 'row', gap: 8, marginVertical: 15 },
//   fBtn: { flex: 1, paddingVertical: 10, backgroundColor: T.card, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: T.border },
//   fBtnActive: { backgroundColor: T.mint },
//   fBtnText: { color: T.t1, fontSize: 11, fontWeight: '800' },
//   searchBtn: { borderRadius: 15, overflow: 'hidden', marginBottom: 20 },
//   searchBtnG: { paddingVertical: 18, alignItems: 'center' },
//   searchBtnTxt: { fontWeight: '900', color: '#000' },
//   fCard: { backgroundColor: T.card, padding: 20, borderRadius: 20, marginBottom: 15, borderWidth: 1, borderColor: T.border },
//   fRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//   airlineInfo: { flexDirection: 'row', alignItems: 'center' },
//   airlineLogo: { width: 30, height: 30, borderRadius: 5 },
//   airlineName: { color: T.t1, fontWeight: '700' },
//   fNo: { color: T.t3, fontSize: 10 },
//   fPrice: { color: T.mint, fontSize: 18, fontWeight: '900' },
//   routeContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 },
//   fTime: { color: T.t1, fontSize: 18, fontWeight: '800' },
//   fCity: { color: T.t3, fontSize: 12, fontWeight: '700' },
//   airportName: { color: '#555', fontSize: 10 },
//   fFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTopWidth: 1, borderTopColor: T.border },
//   fDuration: { color: T.t3, fontSize: 11 },
// });












import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, TextInput, 
  ScrollView, StatusBar, ActivityIndicator, Image, Linking // 👈 Added Linking
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const T = { bg: '#050505', card: '#131313', border: '#242424', mint: '#FFFFFF', t1: '#FFFFFF', t3: '#4A4A4A' };

export default function FlightScreen({ navigation }) {
  const [from, setFrom] = useState('BOM');
  const [to, setTo] = useState('DEL');
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('All');

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://semproject-1a4i.vercel.app/api/flights`, {
        params: { departure_id: from, arrival_id: to }
      });
      if (res.data.success) setFlights(res.data.flights);
    } catch (e) { 
      console.error(e); 
    } finally { 
      setLoading(false); 
    }
  };

  const getFilteredData = () => {
    if (filter === 'All') return flights;
    return flights.filter(f => {
      const hour = parseInt(f.departure_time.split(':')[0]);
      if (filter === 'Morning') return hour >= 5 && hour < 12;
      if (filter === 'Afternoon') return hour >= 12 && hour < 18;
      if (filter === 'Evening') return hour >= 18 || hour < 5;
    });
  };

  // ✅ Helper function to open URL
  const handleBookPress = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const renderFlightItem = (item, index) => (
    // ✅ Wrapped in TouchableOpacity to make it clickable
    <TouchableOpacity 
      key={index} 
      style={styles.fCard} 
      onPress={() => handleBookPress(item.url)}
      activeOpacity={0.8}
    >
      <View style={styles.fRow}>
        <View style={styles.airlineInfo}>
          <Image source={{ uri: item.logo }} style={styles.airlineLogo} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.airlineName}>{item.airline}</Text>
            <Text style={styles.fNo}>{item.flight_number}</Text>
          </View>
        </View>
        {/* 👉 Price Removed from here */}
        <View style={styles.bookBadge}>
            <Text style={styles.bookBadgeTxt}>Book Now</Text>
        </View>
      </View>

      <View style={styles.routeContainer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.fTime}>{item.departure_time}</Text>
          <Text style={styles.fCity}>{item.departure}</Text>
          <Text style={styles.airportName} numberOfLines={1}>{item.departure_name}</Text>
        </View>
        <Ionicons name="airplane" size={16} color={T.t3} style={{ marginHorizontal: 15 }} />
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text style={styles.fTime}>{item.arrival_time}</Text>
          <Text style={styles.fCity}>{item.arrival}</Text>
          <Text style={[styles.airportName, { textAlign: 'right' }]} numberOfLines={1}>{item.arrival_name}</Text>
        </View>
      </View>

      <View style={styles.fFooter}>
        <Text style={styles.fDuration}>{item.duration} min • {item.status}</Text>
        <Text style={styles.tapHint}>Tap to view details →</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.searchCard}>
          <TextInput style={styles.input} value={from} onChangeText={setFrom} placeholder="From" placeholderTextColor={T.t3} autoCapitalize="characters" maxLength={3} />
          <View style={{ height: 1, backgroundColor: T.border, marginVertical: 10 }} />
          <TextInput style={styles.input} value={to} onChangeText={setTo} placeholder="To" placeholderTextColor={T.t3} autoCapitalize="characters" maxLength={3} />
        </View>

        <View style={styles.filterRow}>
          {['All', 'Morning', 'Afternoon', 'Evening'].map(t => (
            <TouchableOpacity key={t} onPress={() => setFilter(t)} style={[styles.fBtn, filter === t && styles.fBtnActive]}>
              <Text style={[styles.fBtnText, filter === t && { color: '#000' }]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
            {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchBtnTxt}>Search Real-Time</Text>}
          </LinearGradient>
        </TouchableOpacity>

        {getFilteredData().map((item, index) => renderFlightItem(item, index))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: T.bg },
  scroll: { padding: 20, paddingBottom: 40 },
  searchCard: { backgroundColor: T.card, borderRadius: 15, padding: 15, borderWidth: 1, borderColor: T.border },
  input: { color: T.t1, fontSize: 16, fontWeight: '700' },
  filterRow: { flexDirection: 'row', gap: 8, marginVertical: 15 },
  fBtn: { flex: 1, paddingVertical: 10, backgroundColor: T.card, borderRadius: 10, alignItems: 'center', borderWidth: 1, borderColor: T.border },
  fBtnActive: { backgroundColor: T.mint },
  fBtnText: { color: T.t1, fontSize: 11, fontWeight: '800' },
  searchBtn: { borderRadius: 15, overflow: 'hidden', marginBottom: 20 },
  searchBtnG: { paddingVertical: 18, alignItems: 'center' },
  searchBtnTxt: { fontWeight: '900', color: '#000' },
  
  // Flight Card Styles
  fCard: { 
    backgroundColor: T.card, 
    padding: 20, 
    borderRadius: 20, 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: T.border 
  },
  fRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  airlineInfo: { flexDirection: 'row', alignItems: 'center' },
  airlineLogo: { width: 30, height: 30, borderRadius: 5 },
  airlineName: { color: T.t1, fontWeight: '700' },
  fNo: { color: T.t3, fontSize: 10 },
  
  // New Book Badge Style (Replaces Price)
  bookBadge: {
    backgroundColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: T.mint
  },
  bookBadgeTxt: {
    color: T.mint,
    fontSize: 10,
    fontWeight: '800'
  },

  routeContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 },
  fTime: { color: T.t1, fontSize: 18, fontWeight: '800' },
  fCity: { color: T.t3, fontSize: 12, fontWeight: '700' },
  airportName: { color: '#555', fontSize: 10 },
  fFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTopWidth: 1, borderTopColor: T.border },
  fDuration: { color: T.t3, fontSize: 11 },
  tapHint: { color: T.mint, fontSize: 10, fontWeight: '600' },
});