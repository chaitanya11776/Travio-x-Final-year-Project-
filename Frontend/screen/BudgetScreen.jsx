// // // // // // // import React, { useState } from 'react';
// // // // // // // import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
// // // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // import axios from 'axios';

// // // // // // // // USE YOUR LOCAL IP
// // // // // // // const API_URL = "http://10.176.82.30:3000/api/ai-budget";

// // // // // // // export default function BudgetScreen() {
// // // // // // //   const [city, setCity] = useState('');
// // // // // // //   const [pax, setPax] = useState('');
// // // // // // //   const [days, setDays] = useState('');
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [result, setResult] = useState(null);

// // // // // // //   const fetchBudget = async () => {
// // // // // // //     if (!city.trim()) return Alert.alert("Error", "Enter destination");
// // // // // // //     setLoading(true);
// // // // // // //     setResult(null);

// // // // // // //     try {
// // // // // // //       const response = await axios.post(API_URL, {
// // // // // // //         city: city.trim(),
// // // // // // //         travelers: pax ? parseInt(pax) : null,
// // // // // // //         days: days ? parseInt(days) : null
// // // // // // //       });
// // // // // // //       setResult(response.data);
// // // // // // //     } catch (e) {
// // // // // // //       Alert.alert("Server Offline", "Check your IP address.");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const formatCurrency = (num) => `₹${(num || 0).toLocaleString('en-IN')}`;

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // //       <ScrollView contentContainerStyle={{ padding: 20 }}>
// // // // // // //         <Text style={styles.title}>TravioX AI</Text>

// // // // // // //         <View style={styles.inputCard}>
// // // // // // //           <TextInput style={styles.input} placeholder="Where to?" placeholderTextColor="#64748B" value={city} onChangeText={setCity} />
// // // // // // //           <View style={styles.row}>
// // // // // // //             <TextInput style={[styles.input, { flex: 1 }]} placeholder="Pax" keyboardType="numeric" value={pax} onChangeText={setPax} />
// // // // // // //             <TextInput style={[styles.input, { flex: 1, marginLeft: 10 }]} placeholder="Days" keyboardType="numeric" value={days} onChangeText={setDays} />
// // // // // // //           </View>
// // // // // // //           <TouchableOpacity style={styles.btn} onPress={fetchBudget} disabled={loading}>
// // // // // // //             {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.btnText}>Analyze Plan</Text>}
// // // // // // //           </TouchableOpacity>
// // // // // // //         </View>

// // // // // // //         {result?.data && (
// // // // // // //           <View style={{ marginTop: 25 }}>
// // // // // // //             {result.mode === "QUICK" ? (
// // // // // // //               <View style={styles.summaryCard}>
// // // // // // //                 <Text style={styles.resTitle}>Quick Glance: {result.data.destination}</Text>
// // // // // // //                 <Text style={styles.resSub}>{result.data.summary}</Text>
// // // // // // //                 <Text style={styles.dailyPrice}>Avg. Daily: {formatCurrency(result.data.avgDaily)}</Text>
// // // // // // //               </View>
// // // // // // //             ) : (
// // // // // // //               <View style={styles.detailedCard}>
// // // // // // //                 <Text style={styles.totalLabel}>TOTAL 2026 ESTIMATE</Text>
// // // // // // //                 <Text style={styles.totalAmount}>{formatCurrency(result.data.totalBudget)}</Text>
                
// // // // // // //                 <View style={styles.divider} />

// // // // // // //                 <Text style={styles.sectionTitle}>Must Visit Places</Text>
// // // // // // //                 {result.data.importantPlaces.map((place, i) => (
// // // // // // //                   <View key={i} style={styles.placeItem}>
// // // // // // //                     <View style={{flex: 1}}>
// // // // // // //                       <Text style={styles.placeName}>{place.name}</Text>
// // // // // // //                       <Text style={styles.placeInfo}>{place.importance}</Text>
// // // // // // //                     </View>
// // // // // // //                     <Text style={styles.placeCost}>{formatCurrency(place.cost)}</Text>
// // // // // // //                   </View>
// // // // // // //                 ))}

// // // // // // //                 <View style={styles.divider} />

// // // // // // //                 <View style={styles.tipBox}>
// // // // // // //                   <MaterialCommunityIcons name="lightbulb" size={20} color="#FBBF24" />
// // // // // // //                   <Text style={styles.tipText}>{result.data.expertTip}</Text>
// // // // // // //                 </View>
// // // // // // //               </View>
// // // // // // //             )}
// // // // // // //           </View>
// // // // // // //         )}
// // // // // // //       </ScrollView>
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // }

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // //   title: { color: '#FFF', fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
// // // // // // //   inputCard: { backgroundColor: '#0f172a', padding: 20, borderRadius: 15, borderWidth: 1, borderColor: '#1e293b' },
// // // // // // //   input: { backgroundColor: '#1e293b', padding: 15, borderRadius: 10, color: '#FFF', marginBottom: 10 },
// // // // // // //   row: { flexDirection: 'row' },
// // // // // // //   btn: { backgroundColor: '#10B981', padding: 15, borderRadius: 10, alignItems: 'center' },
// // // // // // //   btnText: { color: '#FFF', fontWeight: 'bold' },
// // // // // // //   summaryCard: { backgroundColor: '#1e293b', padding: 20, borderRadius: 15, borderLeftWidth: 4, borderLeftColor: '#10B981' },
// // // // // // //   resTitle: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
// // // // // // //   resSub: { color: '#94A3B8', marginTop: 5, lineHeight: 20 },
// // // // // // //   dailyPrice: { color: '#10B981', fontWeight: 'bold', marginTop: 10 },
// // // // // // //   detailedCard: { backgroundColor: '#1e293b', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: '#334155' },
// // // // // // //   totalLabel: { color: '#94A3B8', fontSize: 12, fontWeight: 'bold' },
// // // // // // //   totalAmount: { color: '#10B981', fontSize: 36, fontWeight: 'bold' },
// // // // // // //   divider: { height: 1, backgroundColor: '#334155', marginVertical: 15 },
// // // // // // //   sectionTitle: { color: '#FFF', fontWeight: 'bold', marginBottom: 10 },
// // // // // // //   placeItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
// // // // // // //   placeName: { color: '#FFF', fontWeight: '600' },
// // // // // // //   placeInfo: { color: '#64748B', fontSize: 11 },
// // // // // // //   placeCost: { color: '#CBD5E1', fontWeight: 'bold' },
// // // // // // //   tipBox: { flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.3)', padding: 15, borderRadius: 12 },
// // // // // // //   tipText: { color: '#CBD5E1', fontSize: 12, marginLeft: 10, flex: 1 }
// // // // // // // });






// // // // // // import React, { useState } from 'react';
// // // // // // import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
// // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // import axios from 'axios';

// // // // // // // Update with your actual Local IP
// // // // // // const API_URL = "http://10.98.19.30:3000/api/ai-budget";

// // // // // // export default function BudgetScreen() {
// // // // // //   const [city, setCity] = useState('');
// // // // // //   const [pax, setPax] = useState('');
// // // // // //   const [days, setDays] = useState('');
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [result, setResult] = useState(null);

// // // // // //   const fetchBudget = async () => {
// // // // // //     if (!city.trim()) return Alert.alert("Error", "Enter destination");
// // // // // //     setLoading(true);
// // // // // //     setResult(null);

// // // // // //     try {
// // // // // //       const response = await axios.post(API_URL, {
// // // // // //         city: city.trim(),
// // // // // //         travelers: pax ? parseInt(pax) : null,
// // // // // //         days: days ? parseInt(days) : null
// // // // // //       });
// // // // // //       setResult(response.data);
// // // // // //     } catch (e) {
// // // // // //       Alert.alert("Network Error", "Ensure server is running at " + API_URL);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const formatCurrency = (num) => `₹${(num || 0).toLocaleString('en-IN')}`;

// // // // // //   return (
// // // // // //     <SafeAreaView style={styles.container}>
// // // // // //       <ScrollView contentContainerStyle={{ padding: 20 }}>
// // // // // //         <Text style={styles.title}>TravioX AI</Text>

// // // // // //         <View style={styles.inputCard}>
// // // // // //           <TextInput style={styles.input} placeholder="Where to?" placeholderTextColor="#64748B" value={city} onChangeText={setCity} />
// // // // // //           <View style={styles.row}>
// // // // // //             <TextInput style={[styles.input, { flex: 1 }]} placeholder="Pax" keyboardType="numeric" value={pax} onChangeText={setPax} />
// // // // // //             <TextInput style={[styles.input, { flex: 1, marginLeft: 10 }]} placeholder="Days" keyboardType="numeric" value={days} onChangeText={setDays} />
// // // // // //           </View>
// // // // // //           <TouchableOpacity style={styles.btn} onPress={fetchBudget} disabled={loading}>
// // // // // //             {loading ? <ActivityIndicator color="#FFF" /> : <Text style={styles.btnText}>Analyze Plan</Text>}
// // // // // //           </TouchableOpacity>
// // // // // //         </View>

// // // // // //         {result?.data && (
// // // // // //           <View style={{ marginTop: 25 }}>
// // // // // //             {result.mode === "QUICK" ? (
// // // // // //               <View style={styles.summaryCard}>
// // // // // //                 <Text style={styles.resTitle}>Quick Glance: {result.data.destination}</Text>
// // // // // //                 <Text style={styles.resSub}>{result.data.summary}</Text>
// // // // // //                 <Text style={styles.dailyPrice}>Avg. Daily: {formatCurrency(result.data.avgDaily)}</Text>
// // // // // //               </View>
// // // // // //             ) : (
// // // // // //               <View style={styles.detailedCard}>
// // // // // //                 <Text style={styles.totalLabel}>ESTIMATED TOTAL (2026)</Text>
// // // // // //                 <Text style={styles.totalAmount}>{formatCurrency(result.data.totalBudget)}</Text>
                
// // // // // //                 <View style={styles.breakdownRow}>
// // // // // //                    <View style={styles.chip}><Text style={styles.chipText}>Stay: {formatCurrency(result.data.breakdown.accommodation)}</Text></View>
// // // // // //                    <View style={styles.chip}><Text style={styles.chipText}>Food: {formatCurrency(result.data.breakdown.dining)}</Text></View>
// // // // // //                 </View>

// // // // // //                 <View style={styles.divider} />
// // // // // //                 <Text style={styles.sectionTitle}>Must Visit Places</Text>
// // // // // //                 {(result.data.importantPlaces || []).map((place, i) => (
// // // // // //                   <View key={i} style={styles.placeItem}>
// // // // // //                     <View style={{flex: 1}}>
// // // // // //                       <Text style={styles.placeName}>{place.name}</Text>
// // // // // //                       <Text style={styles.placeInfo}>{place.importance}</Text>
// // // // // //                     </View>
// // // // // //                     <Text style={styles.placeCost}>{formatCurrency(place.cost)}</Text>
// // // // // //                   </View>
// // // // // //                 ))}

// // // // // //                 <View style={styles.tipBox}>
// // // // // //                   <MaterialCommunityIcons name="lightbulb-on" size={20} color="#FBBF24" />
// // // // // //                   <Text style={styles.tipText}>{result.data.expertTip}</Text>
// // // // // //                 </View>
// // // // // //               </View>
// // // // // //             )}
// // // // // //           </View>
// // // // // //         )}
// // // // // //       </ScrollView>
// // // // // //     </SafeAreaView>
// // // // // //   );
// // // // // // }

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // //   title: { color: '#FFF', fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
// // // // // //   inputCard: { backgroundColor: '#0f172a', padding: 20, borderRadius: 15, borderWidth: 1, borderColor: '#1e293b' },
// // // // // //   input: { backgroundColor: '#1e293b', padding: 15, borderRadius: 10, color: '#FFF', marginBottom: 10 },
// // // // // //   row: { flexDirection: 'row' },
// // // // // //   btn: { backgroundColor: '#10B981', padding: 15, borderRadius: 10, alignItems: 'center' },
// // // // // //   btnText: { color: '#FFF', fontWeight: 'bold' },
// // // // // //   summaryCard: { backgroundColor: '#1e293b', padding: 20, borderRadius: 15, borderLeftWidth: 4, borderLeftColor: '#10B981' },
// // // // // //   resTitle: { color: '#FFF', fontWeight: 'bold', fontSize: 18 },
// // // // // //   resSub: { color: '#94A3B8', marginTop: 5, lineHeight: 20 },
// // // // // //   dailyPrice: { color: '#10B981', fontWeight: 'bold', marginTop: 10 },
// // // // // //   detailedCard: { backgroundColor: '#1e293b', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: '#334155' },
// // // // // //   totalLabel: { color: '#94A3B8', fontSize: 11, fontWeight: 'bold', letterSpacing: 1 },
// // // // // //   totalAmount: { color: '#10B981', fontSize: 36, fontWeight: 'bold', marginVertical: 5 },
// // // // // //   breakdownRow: { flexDirection: 'row', marginTop: 5 },
// // // // // //   chip: { backgroundColor: '#334155', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginRight: 8 },
// // // // // //   chipText: { color: '#CBD5E1', fontSize: 11 },
// // // // // //   divider: { height: 1, backgroundColor: '#334155', marginVertical: 15 },
// // // // // //   sectionTitle: { color: '#FFF', fontWeight: 'bold', marginBottom: 12 },
// // // // // //   placeItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
// // // // // //   placeName: { color: '#FFF', fontWeight: '600', fontSize: 14 },
// // // // // //   placeInfo: { color: '#64748B', fontSize: 11, marginTop: 2 },
// // // // // //   placeCost: { color: '#10B981', fontWeight: 'bold', fontSize: 14 },
// // // // // //   tipBox: { flexDirection: 'row', backgroundColor: 'rgba(251, 191, 36, 0.1)', padding: 15, borderRadius: 12, marginTop: 10 },
// // // // // //   tipText: { color: '#CBD5E1', fontSize: 12, marginLeft: 10, flex: 1, lineHeight: 18 }
// // // // // // });










// // // // // import React, { useState } from 'react';
// // // // // import { 
// // // // //   View, Text, StyleSheet, TouchableOpacity, TextInput, 
// // // // //   ScrollView, StatusBar, ActivityIndicator, Alert, Dimensions 
// // // // // } from 'react-native';
// // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // import axios from 'axios';

// // // // // const { width } = Dimensions.get('window');

// // // // // // Previous Theme Constants
// // // // // const T = {
// // // // //   bg: '#050505',
// // // // //   card: '#131313',
// // // // //   border: '#242424',
// // // // //   mint: '#FFFFFF', // Clean white/mint accent
// // // // //   t1: '#FFFFFF',   // Primary Text
// // // // //   t2: '#B0B0B0',   // Secondary Text
// // // // //   t3: '#4A4A4A',   // Muted/Disabled Text
// // // // // };

// // // // // export default function BudgetScreen() {
// // // // //   const [city, setCity] = useState('');
// // // // //   const [pax, setPax] = useState('');
// // // // //   const [days, setDays] = useState('');
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [result, setResult] = useState(null);

// // // // //   const API_URL = "http://10.98.19.30:3000/api/ai-budget";

// // // // //   const fetchBudget = async () => {
// // // // //     if (!city.trim()) return Alert.alert("Error", "Enter destination");
// // // // //     setLoading(true);
// // // // //     setResult(null);

// // // // //     try {
// // // // //       const response = await axios.post(API_URL, {
// // // // //         city: city.trim(),
// // // // //         travelers: pax ? parseInt(pax) : null,
// // // // //         days: days ? parseInt(days) : null
// // // // //       });
// // // // //       setResult(response.data);
// // // // //     } catch (e) {
// // // // //       Alert.alert("Network Error", "Ensure server is running");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const formatCurrency = (num) => `₹${(num || 0).toLocaleString('en-IN')}`;

// // // // //   return (
// // // // //     <SafeAreaView style={styles.container}>
// // // // //       <StatusBar barStyle="light-content" />
      
// // // // //       {/* Header */}
// // // // //       <View style={styles.header}>
// // // // //         <Text style={styles.headerTitle}>AI BUDGET ANALYZER</Text>
// // // // //       </View>

// // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        
// // // // //         {/* Input Card */}
// // // // //         <View style={styles.searchCard}>
// // // // //           <View style={styles.inputRow}>
// // // // //             <MaterialCommunityIcons name="map-marker-outline" size={20} color={T.t2} />
// // // // //             <TextInput 
// // // // //               placeholder="Where to?" 
// // // // //               placeholderTextColor={T.t3} 
// // // // //               style={styles.input} 
// // // // //               value={city} 
// // // // //               onChangeText={setCity} 
// // // // //             />
// // // // //           </View>
          
// // // // //           <View style={styles.divider} />
          
// // // // //           <View style={styles.row}>
// // // // //             <View style={[styles.inputRow, { flex: 1 }]}>
// // // // //               <MaterialCommunityIcons name="account-group-outline" size={20} color={T.t2} />
// // // // //               <TextInput 
// // // // //                 placeholder="Pax" 
// // // // //                 keyboardType="numeric" 
// // // // //                 placeholderTextColor={T.t3} 
// // // // //                 style={styles.input} 
// // // // //                 value={pax} 
// // // // //                 onChangeText={setPax} 
// // // // //               />
// // // // //             </View>
// // // // //             <View style={[styles.inputRow, { flex: 1, marginLeft: 15 }]}>
// // // // //               <MaterialCommunityIcons name="calendar-range-outline" size={20} color={T.t2} />
// // // // //               <TextInput 
// // // // //                 placeholder="Days" 
// // // // //                 keyboardType="numeric" 
// // // // //                 placeholderTextColor={T.t3} 
// // // // //                 style={styles.input} 
// // // // //                 value={days} 
// // // // //                 onChangeText={setDays} 
// // // // //               />
// // // // //             </View>
// // // // //           </View>
// // // // //         </View>

// // // // //         <TouchableOpacity activeOpacity={0.8} style={styles.searchBtn} onPress={fetchBudget} disabled={loading}>
// // // // //           <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
// // // // //             {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchBtnTxt}>Analyze Costs</Text>}
// // // // //           </LinearGradient>
// // // // //         </TouchableOpacity>

// // // // //         {/* Results */}
// // // // //         {result?.data && (
// // // // //           <View style={styles.resultsContainer}>
// // // // //             <View style={styles.resCard}>
// // // // //               <Text style={styles.totalLabel}>ESTIMATED BUDGET</Text>
// // // // //               <Text style={styles.totalAmount}>
// // // // //                 {result.mode === "QUICK" ? formatCurrency(result.data.avgDaily) : formatCurrency(result.data.totalBudget)}
// // // // //                 {result.mode === "QUICK" && <Text style={styles.perDayText}>/day</Text>}
// // // // //               </Text>

// // // // //               <View style={styles.chipRow}>
// // // // //                  <View style={styles.chip}><Text style={styles.chipText}>Hotels Included</Text></View>
// // // // //                  <View style={styles.chip}><Text style={styles.chipText}>Food & Local</Text></View>
// // // // //               </View>

// // // // //               <View style={styles.divider} />

// // // // //               <Text style={styles.sectionTitle}>MUST VISIT & COSTS</Text>
// // // // //               {(result.data.importantPlaces || []).map((place, i) => (
// // // // //                 <View key={i} style={styles.placeItem}>
// // // // //                   <View style={{ flex: 1 }}>
// // // // //                     <Text style={styles.placeName}>{place.name}</Text>
// // // // //                     <Text style={styles.placeInfo}>{place.importance}</Text>
// // // // //                   </View>
// // // // //                   <Text style={styles.placeCost}>{formatCurrency(place.cost)}</Text>
// // // // //                 </View>
// // // // //               ))}

// // // // //               <View style={styles.tipBox}>
// // // // //                 <Ionicons name="sparkles" size={16} color={T.t1} />
// // // // //                 <Text style={styles.tipText}>{result.data.expertTip || result.data.summary}</Text>
// // // // //               </View>
// // // // //             </View>
// // // // //           </View>
// // // // //         )}
// // // // //       </ScrollView>
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container: { flex: 1, backgroundColor: T.bg },
// // // // //   header: { padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: T.border },
// // // // //   headerTitle: { color: T.t1, fontSize: 13, fontWeight: '900', letterSpacing: 4 },
// // // // //   scroll: { padding: 20 },
  
// // // // //   // Search Card (Same as Flight Screen)
// // // // //   searchCard: { backgroundColor: T.card, borderRadius: 22, padding: 20, borderWidth: 1, borderColor: T.border, marginBottom: 15 },
// // // // //   inputRow: { flexDirection: 'row', alignItems: 'center' },
// // // // //   input: { flex: 1, color: T.t1, marginLeft: 12, fontSize: 16, fontWeight: '600' },
// // // // //   divider: { height: 1, backgroundColor: T.border, marginVertical: 18 },
// // // // //   row: { flexDirection: 'row' },
  
// // // // //   // Button
// // // // //   searchBtn: { borderRadius: 16, overflow: 'hidden', marginBottom: 25 },
// // // // //   searchBtnG: { paddingVertical: 18, alignItems: 'center' },
// // // // //   searchBtnTxt: { color: '#000', fontWeight: '900', textTransform: 'uppercase', fontSize: 14 },

// // // // //   // Result Card
// // // // //   resultsContainer: { marginTop: 10 },
// // // // //   resCard: { backgroundColor: T.card, borderRadius: 22, padding: 20, borderWidth: 1, borderColor: T.border },
// // // // //   totalLabel: { color: T.t3, fontSize: 11, fontWeight: '900', letterSpacing: 2 },
// // // // //   totalAmount: { color: T.mint, fontSize: 36, fontWeight: '900', marginVertical: 10 },
// // // // //   perDayText: { fontSize: 16, color: T.t2, fontWeight: '400' },
  
// // // // //   chipRow: { flexDirection: 'row', marginBottom: 15 },
// // // // //   chip: { backgroundColor: T.border, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, marginRight: 10 },
// // // // //   chipText: { color: T.t2, fontSize: 10, fontWeight: '700' },

// // // // //   sectionTitle: { color: T.t3, fontSize: 11, fontWeight: '900', letterSpacing: 2, marginBottom: 15 },
// // // // //   placeItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, alignItems: 'center' },
// // // // //   placeName: { color: T.t1, fontWeight: '700', fontSize: 15 },
// // // // //   placeInfo: { color: T.t2, fontSize: 11, marginTop: 3, lineHeight: 16 },
// // // // //   placeCost: { color: T.mint, fontWeight: '900', fontSize: 14 },

// // // // //   tipBox: { 
// // // // //     flexDirection: 'row', 
// // // // //     backgroundColor: '#1A1A1A', 
// // // // //     padding: 15, 
// // // // //     borderRadius: 15, 
// // // // //     marginTop: 10, 
// // // // //     borderWidth: 1, 
// // // // //     borderColor: T.border,
// // // // //     alignItems: 'center'
// // // // //   },
// // // // //   tipText: { color: T.t2, fontSize: 12, marginLeft: 10, flex: 1, lineHeight: 18, fontWeight: '500' }
// // // // // });










// // // // import React, { useState } from 'react';
// // // // import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, StatusBar, ActivityIndicator, Alert } from 'react-native';
// // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // import axios from 'axios';

// // // // const T = { bg: '#050505', card: '#131313', border: '#242424', mint: '#FFFFFF', t1: '#FFFFFF', t2: '#B0B0B0', t3: '#4A4A4A' };

// // // // export default function BudgetScreen() {
// // // //   const [city, setCity] = useState('');
// // // //   const [pax, setPax] = useState('');
// // // //   const [days, setDays] = useState('');
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [result, setResult] = useState(null);

// // // //   const fetchBudget = async () => {
// // // //     if (!city.trim()) return Alert.alert("Error", "Enter destination");
// // // //     setLoading(true);
// // // //     setResult(null);
// // // //     try {
// // // //       const response = await axios.post("http://10.98.19.30:3000/api/ai-budget", {
// // // //         city: city.trim(),
// // // //         travelers: pax ? parseInt(pax) : null,
// // // //         days: days ? parseInt(days) : null
// // // //       });
// // // //       setResult(response.data);
// // // //     } catch (e) {
// // // //       Alert.alert("Network Error", "Ensure server is running");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const formatCurrency = (num) => `₹${(num || 0).toLocaleString('en-IN')}`;

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       <StatusBar barStyle="light-content" />
// // // //       <View style={styles.header}><Text style={styles.headerTitle}>AI BUDGET</Text></View>

// // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
// // // //         <View style={styles.searchCard}>
// // // //           <TextInput placeholder="Where to?" placeholderTextColor={T.t3} style={styles.input} value={city} onChangeText={setCity} />
// // // //           <View style={styles.divider} />
// // // //           <View style={{ flexDirection: 'row' }}>
// // // //             <TextInput placeholder="Pax" keyboardType="numeric" placeholderTextColor={T.t3} style={[styles.input, { flex: 1 }]} value={pax} onChangeText={setPax} />
// // // //             <TextInput placeholder="Days" keyboardType="numeric" placeholderTextColor={T.t3} style={[styles.input, { flex: 1, marginLeft: 15 }]} value={days} onChangeText={setDays} />
// // // //           </View>
// // // //         </View>

// // // //         <TouchableOpacity style={styles.searchBtn} onPress={fetchBudget}>
// // // //           <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
// // // //             {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchBtnTxt}>Analyze Costs</Text>}
// // // //           </LinearGradient>
// // // //         </TouchableOpacity>

// // // //         {result?.data && (
// // // //           <View style={styles.resCard}>
// // // //             <Text style={styles.totalLabel}>ESTIMATED TOTAL (2026)</Text>
// // // //             <Text style={styles.totalAmount}>{formatCurrency(result.data.totalBudget || result.data.avgDaily)}</Text>

// // // //             <View style={styles.divider} />
// // // //             <Text style={styles.sectionTitle}>MUST VISIT & COSTS</Text>
            
// // // //             {/* THIS IS THE PART THAT SHOWS PLACE NAMES AND PRICES */}
// // // //             {(result.data.importantPlaces || []).map((place, i) => (
// // // //               <View key={i} style={styles.placeItem}>
// // // //                 <View style={{ flex: 1 }}>
// // // //                   <Text style={styles.placeName}>{place.name}</Text>
// // // //                   <Text style={styles.placeInfo}>{place.importance}</Text>
// // // //                 </View>
// // // //                 <Text style={styles.placeCost}>{formatCurrency(place.cost)}</Text>
// // // //               </View>
// // // //             ))}

// // // //             <View style={styles.tipBox}>
// // // //               <Ionicons name="sparkles" size={16} color={T.t1} />
// // // //               <Text style={styles.tipText}>{result.data.expertTip || result.data.summary}</Text>
// // // //             </View>
// // // //           </View>
// // // //         )}
// // // //       </ScrollView>
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, backgroundColor: T.bg },
// // // //   header: { padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: T.border },
// // // //   headerTitle: { color: T.t1, fontSize: 12, fontWeight: '900', letterSpacing: 4 },
// // // //   scroll: { padding: 20 },
// // // //   searchCard: { backgroundColor: T.card, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: T.border, marginBottom: 15 },
// // // //   input: { color: T.t1, fontSize: 16, fontWeight: '600' },
// // // //   divider: { height: 1, backgroundColor: T.border, marginVertical: 15 },
// // // //   searchBtn: { borderRadius: 15, overflow: 'hidden', marginBottom: 25 },
// // // //   searchBtnG: { paddingVertical: 18, alignItems: 'center' },
// // // //   searchBtnTxt: { color: '#000', fontWeight: '900', textTransform: 'uppercase' },
// // // //   resCard: { backgroundColor: T.card, borderRadius: 22, padding: 20, borderWidth: 1, borderColor: T.border },
// // // //   totalLabel: { color: T.t3, fontSize: 10, fontWeight: '900', letterSpacing: 1 },
// // // //   totalAmount: { color: T.mint, fontSize: 32, fontWeight: '900', marginVertical: 10 },
// // // //   sectionTitle: { color: T.t3, fontSize: 10, fontWeight: '900', marginBottom: 15, letterSpacing: 1 },
// // // //   placeItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 },
// // // //   placeName: { color: T.t1, fontWeight: '700', fontSize: 14 },
// // // //   placeInfo: { color: T.t2, fontSize: 11, marginTop: 2 },
// // // //   placeCost: { color: T.mint, fontWeight: '900', fontSize: 14 },
// // // //   tipBox: { flexDirection: 'row', backgroundColor: '#1A1A1A', padding: 15, borderRadius: 12, marginTop: 10, alignItems: 'center' },
// // // //   tipText: { color: T.t2, fontSize: 11, marginLeft: 10, flex: 1, lineHeight: 16 }
// // // // });








// // // import React, { useState } from 'react';
// // // import { 
// // //   View, Text, StyleSheet, TouchableOpacity, TextInput, 
// // //   ScrollView, StatusBar, ActivityIndicator, Alert, Linking 
// // // } from 'react-native';
// // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // import { LinearGradient } from 'expo-linear-gradient';
// // // import axios from 'axios';

// // // const T = { bg: '#050505', card: '#131313', border: '#242424', mint: '#FFFFFF', t1: '#FFFFFF', t2: '#B0B0B0', t3: '#4A4A4A' };

// // // export default function BudgetScreen() {
// // //   const [city, setCity] = useState('');
// // //   const [pax, setPax] = useState('2');
// // //   const [days, setDays] = useState('5');
// // //   const [loading, setLoading] = useState(false);
// // //   const [result, setResult] = useState(null);

// // //   const fetchBudget = async () => {
// // //     if (!city.trim()) return Alert.alert("Error", "Enter destination");
// // //     setLoading(true);
// // //     setResult(null);
// // //     try {
// // //       const response = await axios.post("http://10.98.19.30:3000/api/ai-budget", {
// // //         city: city.trim(),
// // //         travelers: parseInt(pax),
// // //         days: parseInt(days)
// // //       });
// // //       if (response.data.success) setResult(response.data);
// // //     } catch (e) {
// // //       Alert.alert("Network Error", "Ensure server is running");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <StatusBar barStyle="light-content" />
// // //       <View style={styles.header}><Text style={styles.headerTitle}>AI BUDGET</Text></View>

// // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
// // //         <View style={styles.searchCard}>
// // //           <TextInput placeholder="Where to?" placeholderTextColor={T.t3} style={styles.input} value={city} onChangeText={setCity} />
// // //           <View style={styles.divider} />
// // //           <View style={{ flexDirection: 'row' }}>
// // //             <TextInput placeholder="Pax" keyboardType="numeric" placeholderTextColor={T.t3} style={[styles.input, { flex: 1 }]} value={pax} onChangeText={setPax} />
// // //             <TextInput placeholder="Days" keyboardType="numeric" placeholderTextColor={T.t3} style={[styles.input, { flex: 1, marginLeft: 15 }]} value={days} onChangeText={setDays} />
// // //           </View>
// // //         </View>

// // //         <TouchableOpacity style={styles.searchBtn} onPress={fetchBudget}>
// // //           <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
// // //             {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchBtnTxt}>Generate Trip Plan</Text>}
// // //           </LinearGradient>
// // //         </TouchableOpacity>

// // //         {result?.data && (
// // //           <View style={styles.resultsContainer}>
// // //             <View style={styles.resCard}>
// // //               <Text style={styles.totalLabel}>TOTAL ESTIMATION</Text>
// // //               <Text style={styles.totalAmount}>₹{result.data.totalBudget.toLocaleString('en-IN')}</Text>

// // //               <View style={styles.divider} />
              
// // //               <Text style={styles.sectionTitle}>DETAILED BREAKDOWN</Text>
// // //               <View style={styles.summaryBox}>
// // //                 <Text style={styles.summaryText}>{result.data.summary}</Text>
// // //               </View>

// // //               <TouchableOpacity 
// // //                 style={styles.shareBtn} 
// // //                 onPress={() => Alert.alert("Copied", "Text ready for WhatsApp sharing!")}
// // //               >
// // //                 <Ionicons name="logo-whatsapp" size={18} color="#25D366" />
// // //                 <Text style={styles.shareBtnTxt}>Share on WhatsApp</Text>
// // //               </TouchableOpacity>
// // //             </View>

// // //             <View style={[styles.resCard, { marginTop: 15 }]}>
// // //               <Text style={styles.sectionTitle}>SIGHTSEEING & TICKETS</Text>
// // //               {result.data.importantPlaces.map((place, i) => (
// // //                 <View key={i} style={styles.placeItem}>
// // //                   <View style={{ flex: 1 }}>
// // //                     <Text style={styles.placeName}>{place.name}</Text>
// // //                     <Text style={styles.placeInfo}>{place.importance}</Text>
// // //                   </View>
// // //                   <Text style={styles.placeCost}>₹{place.cost}</Text>
// // //                 </View>
// // //               ))}
// // //             </View>
// // //           </View>
// // //         )}
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: T.bg },
// // //   header: { padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: T.border },
// // //   headerTitle: { color: T.t1, fontSize: 12, fontWeight: '900', letterSpacing: 4 },
// // //   scroll: { padding: 20 },
// // //   searchCard: { backgroundColor: T.card, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: T.border, marginBottom: 15 },
// // //   input: { color: T.t1, fontSize: 16, fontWeight: '700' },
// // //   divider: { height: 1, backgroundColor: T.border, marginVertical: 15 },
// // //   searchBtn: { borderRadius: 15, overflow: 'hidden', marginBottom: 25 },
// // //   searchBtnG: { paddingVertical: 18, alignItems: 'center' },
// // //   searchBtnTxt: { color: '#000', fontWeight: '900', textTransform: 'uppercase' },
// // //   resCard: { backgroundColor: T.card, borderRadius: 22, padding: 20, borderWidth: 1, borderColor: T.border },
// // //   totalLabel: { color: T.t3, fontSize: 10, fontWeight: '900', letterSpacing: 1 },
// // //   totalAmount: { color: T.mint, fontSize: 32, fontWeight: '900', marginVertical: 10 },
// // //   sectionTitle: { color: T.t3, fontSize: 10, fontWeight: '900', marginBottom: 15, letterSpacing: 1 },
// // //   summaryBox: { backgroundColor: '#000', padding: 15, borderRadius: 15, borderWidth: 1, borderColor: T.border },
// // //   summaryText: { color: T.t2, fontSize: 13, lineHeight: 22, fontFamily: 'monospace' },
// // //   shareBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15, padding: 12, backgroundColor: '#1A1A1A', borderRadius: 10, borderWidth: 1, borderColor: T.border },
// // //   shareBtnTxt: { color: T.t1, fontSize: 12, fontWeight: '800', marginLeft: 10 },
// // //   placeItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
// // //   placeName: { color: T.t1, fontWeight: '700', fontSize: 14 },
// // //   placeInfo: { color: T.t2, fontSize: 11, marginTop: 2 },
// // //   placeCost: { color: T.mint, fontWeight: '900', fontSize: 14 }
// // // });











// // import React, { useState } from 'react';
// // import { 
// //   View, Text, StyleSheet, TouchableOpacity, TextInput, 
// //   ScrollView, StatusBar, ActivityIndicator, Alert, Linking 
// // } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { Ionicons } from '@expo/vector-icons';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import axios from 'axios';

// // const T = { bg: '#050505', card: '#131313', border: '#242424', mint: '#FFFFFF', t1: '#FFFFFF', t2: '#B0B0B0', t3: '#4A4A4A' };

// // export default function BudgetScreen() {
// //   const [city, setCity] = useState('');
// //   const [pax, setPax] = useState('2');
// //   const [days, setDays] = useState('5');
// //   const [loading, setLoading] = useState(false);
// //   const [result, setResult] = useState(null);

// //   const fetchBudget = async () => {
// //     if (!city.trim()) return Alert.alert("Error", "Enter destination");
// //     setLoading(true);
// //     setResult(null);
// //     try {
// //       // Note: Ensure this IP matches your machine's current local IP
// //       const response = await axios.post("http://10.98.19.30:3000/api/ai-budget", {
// //         city: city.trim(),
// //         travelers: parseInt(pax),
// //         days: parseInt(days),
// //         tripVibe: "Mid-range" // You can add a selector for this later
// //       });
      
// //       if (response.data.success) {
// //         setResult(response.data.data); // Setting result to the 'data' object from backend
// //       }
// //     } catch (e) {
// //       console.log(e);
// //       Alert.alert("Connection Error", "Could not reach the AI server.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const shareToWhatsApp = () => {
// //     if (!result?.whatsappSummary) return;
// //     const url = `whatsapp://send?text=${encodeURIComponent(result.whatsappSummary)}`;
// //     Linking.openURL(url).catch(() => {
// //       Alert.alert("Error", "WhatsApp is not installed on this device");
// //     });
// //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <StatusBar barStyle="light-content" />
// //       <View style={styles.header}><Text style={styles.headerTitle}>TRAVIOX AI BUDGET</Text></View>

// //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
// //         <View style={styles.searchCard}>
// //           <TextInput placeholder="Where to?" placeholderTextColor={T.t3} style={styles.input} value={city} onChangeText={setCity} />
// //           <View style={styles.divider} />
// //           <View style={{ flexDirection: 'row' }}>
// //             <View style={{ flex: 1 }}>
// //                <Text style={styles.miniLabel}>TRAVELLERS</Text>
// //                <TextInput placeholder="Pax" keyboardType="numeric" placeholderTextColor={T.t3} style={styles.input} value={pax} onChangeText={setPax} />
// //             </View>
// //             <View style={{ flex: 1, marginLeft: 15 }}>
// //                <Text style={styles.miniLabel}>DAYS</Text>
// //                <TextInput placeholder="Days" keyboardType="numeric" placeholderTextColor={T.t3} style={styles.input} value={days} onChangeText={setDays} />
// //             </View>
// //           </View>
// //         </View>

// //         <TouchableOpacity style={styles.searchBtn} onPress={fetchBudget} disabled={loading}>
// //           <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
// //             {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchBtnTxt}>Analyze Budget with AI</Text>}
// //           </LinearGradient>
// //         </TouchableOpacity>

// //         {result && (
// //           <View style={styles.resultsContainer}>
// //             <View style={styles.resCard}>
// //               <Text style={styles.totalLabel}>ESTIMATED TOTAL (INR)</Text>
// //               <Text style={styles.totalAmount}>₹{result.totalBudget.toLocaleString('en-IN')}</Text>
              
// //               <View style={styles.badgeRow}>
// //                  <View style={styles.badge}><Text style={styles.badgeText}>Avg. ₹{result.avgDaily}/day</Text></View>
// //               </View>

// //               <View style={styles.divider} />
              
// //               {/* Cost Breakdown */}
// //               <View style={styles.breakdownRow}>
// //                 <BreakdownItem label="Stay" value={result.stayTotal} icon="bed-outline" />
// //                 <BreakdownItem label="Food" value={result.foodTotal} icon="fast-food-outline" />
// //               </View>
// //               <View style={styles.breakdownRow}>
// //                 <BreakdownItem label="Travel" value={result.transportTotal} icon="car-outline" />
// //                 <BreakdownItem label="Sightsee" value={result.activitiesTotal} icon="ticket-outline" />
// //               </View>

// //               <TouchableOpacity style={styles.shareBtn} onPress={shareToWhatsApp}>
// //                 <Ionicons name="logo-whatsapp" size={18} color="#25D366" />
// //                 <Text style={styles.shareBtnTxt}>Send to WhatsApp</Text>
// //               </TouchableOpacity>
// //             </View>

// //             <View style={[styles.resCard, { marginTop: 15 }]}>
// //               <Text style={styles.sectionTitle}>EXPERT TIP</Text>
// //               <Text style={styles.tipText}>{result.expertTip}</Text>
// //             </View>

// //             <View style={[styles.resCard, { marginTop: 15 }]}>
// //               <Text style={styles.sectionTitle}>MUST VISIT PLACES</Text>
// //               {result.topPlaces.map((place, i) => (
// //                 <View key={i} style={styles.placeItem}>
// //                   <View style={{ flex: 1 }}>
// //                     <Text style={styles.placeName}>{place.name}</Text>
// //                     <Text style={styles.placeInfo}>{place.importance || place.reason}</Text>
// //                   </View>
// //                   <Text style={styles.placeCost}>₹{place.estCost || place.cost}</Text>
// //                 </View>
// //               ))}
// //             </View>
// //           </View>
// //         )}
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // // Sub-component for clean breakdown layout
// // const BreakdownItem = ({ label, value, icon }) => (
// //   <View style={styles.bItem}>
// //     <Ionicons name={icon} size={14} color={T.t2} />
// //     <Text style={styles.bLabel}>{label}: </Text>
// //     <Text style={styles.bValue}>₹{value.toLocaleString('en-IN')}</Text>
// //   </View>
// // );

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: T.bg },
// //   header: { padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: T.border },
// //   headerTitle: { color: T.t1, fontSize: 11, fontWeight: '900', letterSpacing: 4 },
// //   scroll: { padding: 20 },
// //   searchCard: { backgroundColor: T.card, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: T.border, marginBottom: 15 },
// //   miniLabel: { color: T.t3, fontSize: 9, fontWeight: '900', marginBottom: 5 },
// //   input: { color: T.t1, fontSize: 16, fontWeight: '700' },
// //   divider: { height: 1, backgroundColor: T.border, marginVertical: 15 },
// //   searchBtn: { borderRadius: 15, overflow: 'hidden', marginBottom: 25 },
// //   searchBtnG: { paddingVertical: 18, alignItems: 'center' },
// //   searchBtnTxt: { color: '#000', fontWeight: '900', textTransform: 'uppercase', fontSize: 12 },
// //   resCard: { backgroundColor: T.card, borderRadius: 22, padding: 20, borderWidth: 1, borderColor: T.border },
// //   totalLabel: { color: T.t3, fontSize: 10, fontWeight: '900', letterSpacing: 1 },
// //   totalAmount: { color: T.mint, fontSize: 36, fontWeight: '900', marginVertical: 5 },
// //   badgeRow: { flexDirection: 'row', marginBottom: 10 },
// //   badge: { backgroundColor: '#222', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6 },
// //   badgeText: { color: T.t2, fontSize: 10, fontWeight: 'bold' },
// //   sectionTitle: { color: T.t3, fontSize: 10, fontWeight: '900', marginBottom: 15, letterSpacing: 1 },
// //   breakdownRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
// //   bItem: { flexDirection: 'row', alignItems: 'center', flex: 1 },
// //   bLabel: { color: T.t2, fontSize: 12, marginLeft: 5 },
// //   bValue: { color: T.t1, fontSize: 12, fontWeight: '700' },
// //   shareBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, padding: 14, backgroundColor: '#1A1A1A', borderRadius: 12, borderWidth: 1, borderColor: T.border },
// //   shareBtnTxt: { color: T.t1, fontSize: 12, fontWeight: '800', marginLeft: 10 },
// //   tipText: { color: T.t2, fontSize: 13, lineHeight: 20, fontStyle: 'italic' },
// //   placeItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, alignItems: 'center' },
// //   placeName: { color: T.t1, fontWeight: '700', fontSize: 14 },
// //   placeInfo: { color: T.t2, fontSize: 11, marginTop: 2 },
// //   placeCost: { color: T.mint, fontWeight: '900', fontSize: 14 }
// // });



















// import React, { useState } from 'react';
// import { 
//   View, Text, StyleSheet, TouchableOpacity, TextInput, 
//   ScrollView, StatusBar, ActivityIndicator, Alert, Linking 
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import axios from 'axios';

// const T = { bg: '#050505', card: '#131313', border: '#242424', mint: '#FFFFFF', t1: '#FFFFFF', t2: '#B0B0B0', t3: '#4A4A4A' };

// export default function BudgetScreen() {
//   const [city, setCity] = useState('');
//   const [pax, setPax] = useState('2');
//   const [days, setDays] = useState('5');
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);

//   const fetchBudget = async () => {
//     if (!city.trim()) return Alert.alert("Error", "Enter destination");
//     setLoading(true);
//     setResult(null);
//     try {
//       // Ensure the IP matches your machine's current local IP
//       const response = await axios.post("http://10.86.137.30:3000/api/ai-budget", {
//         city: city.trim(),
//         travelers: parseInt(pax),
//         days: parseInt(days),
//         tripVibe: "Mid-range" 
//       });
      
//       if (response.data.success) {
//         setResult(response.data.data);
//       }
//     } catch (e) {
//       console.log(e);
//       Alert.alert("Connection Error", "Could not reach the AI server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const shareToWhatsApp = () => {
//     if (!result?.whatsappSummary) return;
//     const url = `whatsapp://send?text=${encodeURIComponent(result.whatsappSummary)}`;
//     Linking.openURL(url).catch(() => {
//       Alert.alert("Error", "WhatsApp is not installed");
//     });
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       <View style={styles.header}><Text style={styles.headerTitle}>TRAVIOX AI ITINERARY</Text></View>

//       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
//         {/* Input Card */}
//         <View style={styles.searchCard}>
//           <TextInput placeholder="Where to?" placeholderTextColor={T.t3} style={styles.input} value={city} onChangeText={setCity} />
//           <View style={styles.divider} />
//           <View style={{ flexDirection: 'row' }}>
//             <View style={{ flex: 1 }}>
//                <Text style={styles.miniLabel}>TRAVELLERS</Text>
//                <TextInput placeholder="Pax" keyboardType="numeric" placeholderTextColor={T.t3} style={styles.input} value={pax} onChangeText={setPax} />
//             </View>
//             <View style={{ flex: 1, marginLeft: 15 }}>
//                <Text style={styles.miniLabel}>DAYS</Text>
//                <TextInput placeholder="Days" keyboardType="numeric" placeholderTextColor={T.t3} style={styles.input} value={days} onChangeText={setDays} />
//             </View>
//           </View>
//         </View>

//         <TouchableOpacity style={styles.searchBtn} onPress={fetchBudget} disabled={loading}>
//           <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
//             {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchBtnTxt}>Generate Step-by-Step Budget</Text>}
//           </LinearGradient>
//         </TouchableOpacity>

//         {result && (
//           <View style={styles.resultsContainer}>
//             {/* 1. Summary Card */}
//             <View style={styles.resCard}>
//               <Text style={styles.totalLabel}>TOTAL ESTIMATED COST</Text>
//               <Text style={styles.totalAmount}>₹{result.summary.grandTotal.toLocaleString('en-IN')}</Text>
//               <View style={styles.badge}><Text style={styles.badgeText}>Avg. ₹{result.averageDailyBudget}/day</Text></View>
              
//               <View style={styles.divider} />
              
//               <View style={styles.breakdownRow}>
//                 <BreakdownItem label="Stay" value={result.summary.stayTotal} icon="bed-outline" />
//                 <BreakdownItem label="Food" value={result.summary.foodTotal} icon="fast-food-outline" />
//               </View>
//               <View style={styles.breakdownRow}>
//                 <BreakdownItem label="Transport" value={result.summary.transportTotal} icon="car-outline" />
//                 <BreakdownItem label="Activities" value={result.summary.activitiesTotal} icon="ticket-outline" />
//               </View>

//               <TouchableOpacity style={styles.shareBtn} onPress={shareToWhatsApp}>
//                 <Ionicons name="logo-whatsapp" size={18} color="#25D366" />
//                 <Text style={styles.shareBtnTxt}>Share Itinerary</Text>
//               </TouchableOpacity>
//             </View>

//             {/* 2. Step-by-Step Daily Plan */}
//             <Text style={styles.sectionHeader}>DAILY BREAKDOWN</Text>
//             {result.dailyPlan.map((item, index) => (
//               <View key={index} style={[styles.resCard, { marginBottom: 12 }]}>
//                 <View style={styles.dayHeader}>
//                   <Text style={styles.dayNumber}>DAY {item.day}</Text>
//                   <Text style={styles.dayTitle}>{item.title}</Text>
//                 </View>

//                 {item.activities.map((act, i) => (
//                   <View key={i} style={styles.activityRow}>
//                     <Ionicons name="ellipse" size={6} color={T.t3} style={{ marginTop: 6, marginRight: 8 }} />
//                     <View style={{ flex: 1 }}>
//                       <Text style={styles.activityName}>{act.item}</Text>
//                     </View>
//                     <Text style={styles.activityCost}>₹{act.cost}</Text>
//                   </View>
//                 ))}

//                 <View style={styles.dayFooter}>
//                   <Text style={styles.dayFooterTxt}>Logistics: ₹{item.accommodation + item.food + item.transport}</Text>
//                 </View>
//               </View>
//             ))}

//             {/* 3. Expert Tip */}
//             <View style={[styles.resCard, { marginTop: 5, borderStyle: 'dashed' }]}>
//               <Text style={styles.sectionTitle}>EXPERT ADVICE</Text>
//               <Text style={styles.tipText}>{result.expertAdvice}</Text>
//             </View>
//           </View>
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const BreakdownItem = ({ label, value, icon }) => (
//   <View style={styles.bItem}>
//     <Ionicons name={icon} size={14} color={T.t2} />
//     <Text style={styles.bLabel}>{label}: </Text>
//     <Text style={styles.bValue}>₹{value.toLocaleString('en-IN')}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: T.bg },
//   header: { padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: T.border },
//   headerTitle: { color: T.t1, fontSize: 11, fontWeight: '900', letterSpacing: 4 },
//   scroll: { padding: 20 },
//   searchCard: { backgroundColor: T.card, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: T.border, marginBottom: 15 },
//   miniLabel: { color: T.t3, fontSize: 9, fontWeight: '900', marginBottom: 5 },
//   input: { color: T.t1, fontSize: 16, fontWeight: '700' },
//   divider: { height: 1, backgroundColor: T.border, marginVertical: 15 },
//   searchBtn: { borderRadius: 15, overflow: 'hidden', marginBottom: 25 },
//   searchBtnG: { paddingVertical: 18, alignItems: 'center' },
//   searchBtnTxt: { color: '#000', fontWeight: '900', textTransform: 'uppercase', fontSize: 12 },
//   resCard: { backgroundColor: T.card, borderRadius: 22, padding: 20, borderWidth: 1, borderColor: T.border, marginBottom: 10 },
//   totalLabel: { color: T.t3, fontSize: 10, fontWeight: '900', letterSpacing: 1 },
//   totalAmount: { color: T.mint, fontSize: 36, fontWeight: '900', marginVertical: 5 },
//   badge: { alignSelf: 'flex-start', backgroundColor: '#222', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginBottom: 5 },
//   badgeText: { color: T.t2, fontSize: 10, fontWeight: 'bold' },
//   sectionHeader: { color: T.t3, fontSize: 11, fontWeight: '900', marginTop: 20, marginBottom: 15, letterSpacing: 2, textAlign: 'center' },
//   sectionTitle: { color: T.t3, fontSize: 10, fontWeight: '900', marginBottom: 10 },
//   breakdownRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
//   bItem: { flexDirection: 'row', alignItems: 'center', flex: 1 },
//   bLabel: { color: T.t2, fontSize: 12, marginLeft: 5 },
//   bValue: { color: T.t1, fontSize: 12, fontWeight: '700' },
//   dayHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
//   dayNumber: { backgroundColor: T.mint, color: '#000', fontSize: 10, fontWeight: '900', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, marginRight: 10 },
//   dayTitle: { color: T.t1, fontWeight: '800', fontSize: 15, flex: 1 },
//   activityRow: { flexDirection: 'row', marginBottom: 8, paddingLeft: 5 },
//   activityName: { color: T.t2, fontSize: 13 },
//   activityCost: { color: T.t1, fontSize: 13, fontWeight: '600' },
//   dayFooter: { marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: '#1A1A1A' },
//   dayFooterTxt: { color: T.t3, fontSize: 11, fontWeight: '700', textAlign: 'right' },
//   shareBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, padding: 14, backgroundColor: '#1A1A1A', borderRadius: 12, borderWidth: 1, borderColor: T.border },
//   shareBtnTxt: { color: T.t1, fontSize: 12, fontWeight: '800', marginLeft: 10 },
//   tipText: { color: T.t2, fontSize: 13, lineHeight: 20, fontStyle: 'italic' },
// });










import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, TextInput, 
  ScrollView, StatusBar, ActivityIndicator, Alert, Linking 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const T = { 
  bg: '#050505', card: '#131313', border: '#242424', 
  mint: '#FFFFFF', t1: '#FFFFFF', t2: '#B0B0B0', t3: '#4A4A4A' 
};

export default function BudgetScreen() {
  const [city, setCity] = useState('');
  const [pax, setPax] = useState('2');
  const [days, setDays] = useState('5');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const fetchBudget = async () => {
    if (!city.trim()) return Alert.alert("Target Error", "Enter a destination.");
    setLoading(true);
    setResult(null);
    // try {const response = await axios.post("https://semproject-mu.vercel.app/api/ai-budget", {
    try {const response = await axios.post("https://semproject-1a4i.vercel.app/api/ai-budget", {
      
      
        city: city.trim(),
        travelers: parseInt(pax) || 1,
        days: parseInt(days) || 1,
        tripVibe: "Mid-range" 
      }, { timeout: 12000 });
      
      if (response.data.success) {
        setResult(response.data.data);
      }
    } catch (e) {
      Alert.alert("Uplink Failed", "Check your local IP address or server status.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}><Text style={styles.headerTitle}>TRAVIOX AI ITINERARY</Text></View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        {/* INPUTS */}
        <View style={styles.searchCard}>
          <TextInput placeholder="Where to?" placeholderTextColor={T.t3} style={styles.input} value={city} onChangeText={setCity} />
          <View style={styles.divider} />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
               <Text style={styles.miniLabel}>TRAVELLERS</Text>
               <TextInput placeholder="Pax" keyboardType="numeric" placeholderTextColor={T.t3} style={styles.input} value={pax} onChangeText={setPax} />
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
               <Text style={styles.miniLabel}>DAYS</Text>
               <TextInput placeholder="Days" keyboardType="numeric" placeholderTextColor={T.t3} style={styles.input} value={days} onChangeText={setDays} />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={fetchBudget} disabled={loading}>
          <LinearGradient colors={[T.mint, '#A0A0A0']} style={styles.searchBtnG}>
            {loading ? <ActivityIndicator color="#000" /> : <Text style={styles.searchBtnTxt}>Generate Itinerary</Text>}
          </LinearGradient>
        </TouchableOpacity>

        {result && (
          <View style={styles.resultsContainer}>
            {/* SUMMARY CARD */}
            <View style={styles.resCard}>
              <Text style={styles.totalLabel}>ESTIMATED TOTAL</Text>
              <Text style={styles.totalAmount}>₹{(result.summary?.grandTotal || 0).toLocaleString('en-IN')}</Text>
              <View style={styles.badge}><Text style={styles.badgeText}>Avg. ₹{result.averageDailyBudget}/day</Text></View>
              <View style={styles.divider} />
              <View style={styles.breakdownRow}>
                <BreakdownItem label="Stay" value={result.summary?.stayTotal || 0} icon="bed-outline" />
                <BreakdownItem label="Food" value={result.summary?.foodTotal || 0} icon="fast-food-outline" />
              </View>
              <View style={styles.breakdownRow}>
                <BreakdownItem label="Transport" value={result.summary?.transportTotal || 0} icon="car-outline" />
                <BreakdownItem label="Activities" value={result.summary?.activitiesTotal || 0} icon="ticket-outline" />
              </View>
            </View>

            {/* DAILY BREAKDOWN - CRITICAL FIX AREA */}
            <Text style={styles.sectionHeader}>MISSION LOG: DAILY PLAN</Text>
            
            {Array.isArray(result.dailyPlan) ? (
              result.dailyPlan.map((item, index) => (
                <View key={index} style={[styles.resCard, { marginBottom: 12 }]}>
                  <View style={styles.dayHeader}>
                    <Text style={styles.dayNumber}>DAY {item?.day || index + 1}</Text>
                    <Text style={styles.dayTitle}>{item?.title || "Exploring"}</Text>
                  </View>

                  {/* NESTED ARRAY CHECK: This prevents the specific error you saw */}
                  {Array.isArray(item?.activities) ? (
                    item.activities.map((act, i) => (
                      <View key={i} style={styles.activityRow}>
                        <Ionicons name="ellipse" size={6} color={T.t3} style={{ marginTop: 6, marginRight: 8 }} />
                        <View style={{ flex: 1 }}><Text style={styles.activityName}>{act?.item}</Text></View>
                        <Text style={styles.activityCost}>₹{act?.cost || 0}</Text>
                      </View>
                    ))
                  ) : (
                    <Text style={{ color: T.t3, fontSize: 11, fontStyle: 'italic' }}>No activity data found for this sector.</Text>
                  )}

                  <View style={styles.dayFooter}>
                    <Text style={styles.dayFooterTxt}>
                      Subtotal: ₹{(item?.accommodation || 0) + (item?.food || 0) + (item?.transport || 0)}
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <Text style={{ color: '#FF4444', textAlign: 'center' }}>Error: Itinerary data is malformed.</Text>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const BreakdownItem = ({ label, value, icon }) => (
  <View style={styles.bItem}>
    <Ionicons name={icon} size={14} color={T.t2} />
    <Text style={styles.bLabel}>{label}: </Text>
    <Text style={styles.bValue}>₹{(value || 0).toLocaleString('en-IN')}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: T.bg },
  header: { padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: T.border },
  headerTitle: { color: T.t1, fontSize: 11, fontWeight: '900', letterSpacing: 4 },
  scroll: { padding: 20 },
  searchCard: { backgroundColor: T.card, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: T.border, marginBottom: 15 },
  miniLabel: { color: T.t3, fontSize: 9, fontWeight: '900', marginBottom: 5 },
  input: { color: T.t1, fontSize: 16, fontWeight: '700' },
  divider: { height: 1, backgroundColor: T.border, marginVertical: 15 },
  searchBtn: { borderRadius: 15, overflow: 'hidden', marginBottom: 25 },
  searchBtnG: { paddingVertical: 18, alignItems: 'center' },
  searchBtnTxt: { color: '#000', fontWeight: '900', textTransform: 'uppercase', fontSize: 12 },
  resCard: { backgroundColor: T.card, borderRadius: 22, padding: 20, borderWidth: 1, borderColor: T.border, marginBottom: 10 },
  totalLabel: { color: T.t3, fontSize: 10, fontWeight: '900', letterSpacing: 1 },
  totalAmount: { color: T.mint, fontSize: 34, fontWeight: '900', marginVertical: 5 },
  badge: { alignSelf: 'flex-start', backgroundColor: '#222', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, marginBottom: 5 },
  badgeText: { color: T.t2, fontSize: 10, fontWeight: 'bold' },
  sectionHeader: { color: T.t3, fontSize: 11, fontWeight: '900', marginTop: 20, marginBottom: 15, letterSpacing: 2, textAlign: 'center' },
  breakdownRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  bItem: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  bLabel: { color: T.t2, fontSize: 12, marginLeft: 5 },
  bValue: { color: T.t1, fontSize: 12, fontWeight: '700' },
  dayHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  dayNumber: { backgroundColor: T.mint, color: '#000', fontSize: 10, fontWeight: '900', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, marginRight: 10 },
  dayTitle: { color: T.t1, fontWeight: '800', fontSize: 15, flex: 1 },
  activityRow: { flexDirection: 'row', marginBottom: 8, paddingLeft: 5 },
  activityName: { color: T.t2, fontSize: 13 },
  activityCost: { color: T.t1, fontSize: 13, fontWeight: '600' },
  dayFooter: { marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderTopColor: '#1A1A1A' },
  dayFooterTxt: { color: T.t3, fontSize: 11, fontWeight: '700', textAlign: 'right' },
});