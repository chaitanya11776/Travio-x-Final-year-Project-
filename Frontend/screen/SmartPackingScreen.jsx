// // // import React, { useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   ScrollView,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   ActivityIndicator,
// // //   Alert,
// // //   SafeAreaView,
// // //   StyleSheet
// // // } from 'react-native';

// // // const SmartPackingScreen = () => {
// // //   // --- STATE ---
// // //   const [destination, setDestination] = useState('');
// // //   const [duration, setDuration] = useState('5');
// // //   const [tripType, setTripType] = useState('Leisure');
// // //   const [gender, setGender] = useState('Unspecified');
// // //   const [luggageType, setLuggageType] = useState('Backpack');
// // //   const [selectedActivities, setSelectedActivities] = useState([]);
  
// // //   const [loading, setLoading] = useState(false);
// // //   const [packingData, setPackingData] = useState(null);

// // //    // --- OPTIONS ---
// // //   // Added "Family" here 👇
// // //   const tripTypes = ['Leisure', 'Trekking', 'Beach', 'Business', 'Honeymoon', 'Backpacking', 'Festival', 'Family 👨‍👩‍👧‍👦'];
// // //   const genders = ['Male', 'Female', 'Unspecified'];
// // //   const luggageTypes = ['Backpack', 'Suitcase', 'Carry-on only', 'Luxury'];
// // //   const activities = ['Hiking', 'Swimming', 'Photography', 'Camping', 'Nightlife', 'Business Meetings'];

// // //   // --- LOGIC ---
// // //   const toggleActivity = (activity) => {
// // //     setSelectedActivities(prev =>
// // //       prev.includes(activity) ? prev.filter(a => a !== activity) : [...prev, activity]
// // //     );
// // //   };

// // //   const generatePackingList = async () => {
// // //     if (!destination.trim()) {
// // //       return Alert.alert("Oops", "Please enter a destination.");
// // //     }

// // //     setLoading(true);
// // //     setPackingData(null);

// // //     try {
// // //       const r = await fetch('http://10.88.222.30:3000/api/smart-packing', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({
// // //           destination: destination,
// // //           tripType: tripType,
// // //           duration: parseInt(duration) || 5,
// // //           gender: gender,
// // //           luggageType: luggageType,
// // //           specialActivities: selectedActivities
// // //         }),
// // //       });

// // //       const res = await r.json();

// // //       if (res.success) {
// // //         setPackingData(res.data);
// // //       } else {
// // //         Alert.alert("Error", res.error || "Failed to generate list");
// // //       }
// // //     } catch (error) {
// // //       Alert.alert("Network Error", "Make sure your backend server is running.");
// // //       console.log(error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // --- UI COMPONENTS ---
// // //   const ChipSelector = ({ options, selected, onSelect }) => (
// // //     <View style={styles.chipContainer}>
// // //       {options.map((option) => (
// // //         <TouchableOpacity
// // //           key={option}
// // //           onPress={() => onSelect(option)}
// // //           style={[
// // //             styles.chip,
// // //             selected === option && styles.chipActive
// // //           ]}
// // //         >
// // //           <Text style={[styles.chipText, selected === option && styles.chipTextActive]}>
// // //             {option}
// // //           </Text>
// // //         </TouchableOpacity>
// // //       ))}
// // //     </View>
// // //   );

// // //   const MultiChipSelector = ({ options, selected, onToggle }) => (
// // //     <View style={styles.chipContainer}>
// // //       {options.map((option) => (
// // //         <TouchableOpacity
// // //           key={option}
// // //           onPress={() => onToggle(option)}
// // //           style={[
// // //             styles.chip,
// // //             selected.includes(option) && styles.chipActive
// // //           ]}
// // //         >
// // //           <Text style={[styles.chipText, selected.includes(option) && styles.chipTextActive]}>
// // //             {selected.includes(option) ? `✓ ${option}` : option}
// // //           </Text>
// // //         </TouchableOpacity>
// // //       ))}
// // //     </View>
// // //   );

// // //   // --- MAIN RENDER ---
// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <ScrollView showsVerticalScrollIndicator={false}>
        
// // //         {/* Header */}
// // //         <View style={styles.header}>
// // //           <Text style={styles.headerTitle}>Smart Packing List</Text>
// // //           <Text style={styles.headerSubTitle}>AI generates a personalized checklist based on weather & trip style</Text>
// // //         </View>

// // //         {/* Form Section */}
// // //         <View style={styles.card}>
// // //           <Text style={styles.label}>Destination</Text>
// // //           <TextInput
// // //             style={styles.input}
// // //             placeholder="e.g., Manali, Goa, Paris"
// // //             value={destination}
// // //             onChangeText={setDestination}
// // //           />

// // //           <Text style={styles.label}>Trip Duration (Days)</Text>
// // //           <TextInput
// // //             style={styles.input}
// // //             placeholder="5"
// // //             keyboardType="numeric"
// // //             value={duration}
// // //             onChangeText={setDuration}
// // //           />

// // //           <Text style={styles.label}>Trip Type</Text>
// // //           <ChipSelector options={tripTypes} selected={tripType} onSelect={setTripType} />

// // //           <Text style={styles.label}>Traveler</Text>
// // //           <ChipSelector options={genders} selected={gender} onSelect={setGender} />

// // //           <Text style={styles.label}>Luggage Style</Text>
// // //           <ChipSelector options={luggageTypes} selected={luggageType} onSelect={setLuggageType} />

// // //           <Text style={styles.label}>Special Activities (Optional)</Text>
// // //           <MultiChipSelector options={activities} selected={selectedActivities} onToggle={toggleActivity} />

// // //           <TouchableOpacity style={styles.button} onPress={generatePackingList} disabled={loading}>
// // //             {loading ? (
// // //               <ActivityIndicator color="#fff" />
// // //             ) : (
// // //               <Text style={styles.buttonText}>Generate Packing List ✨</Text>
// // //             )}
// // //           </TouchableOpacity>
// // //         </View>

// // //         {/* Results Section */}
// // //         {packingData && (
// // //           <View style={styles.resultsContainer}>
            
// // //             {/* Weather Summary Banner */}
// // //             <View style={styles.weatherBanner}>
// // //               <Text style={styles.weatherText}>🌤 {packingData.weather_summary}</Text>
// // //             </View>

// // //             {/* Categories & Items */}
// // //             {packingData.categories.map((category, cIndex) => (
// // //               <View key={cIndex} style={styles.categoryCard}>
// // //                 <Text style={styles.categoryTitle}>
// // //                   {category.icon} {category.name}
// // //                 </Text>
                
// // //                 {category.items.map((itemObj, iIndex) => (
// // //                   <View key={iIndex} style={styles.itemRow}>
// // //                     <View style={styles.itemLeft}>
// // //                       <View style={[styles.bullet, itemObj.essential && styles.essentialBullet]} />
// // //                       <Text style={styles.itemName}>{itemObj.item}</Text>
// // //                     </View>
// // //                     {itemObj.essential && (
// // //                       <View style={styles.essentialBadge}>
// // //                         <Text style={styles.essentialText}>Must</Text>
// // //                       </View>
// // //                     )}
// // //                   </View>
// // //                 ))}
// // //               </View>
// // //             ))}

// // //             {/* Pro Tips */}
// // //             {packingData.pro_tips && packingData.pro_tips.length > 0 && (
// // //               <View style={styles.tipsCard}>
// // //                 <Text style={styles.tipsTitle}>💡 Pro Tips</Text>
// // //                 {packingData.pro_tips.map((tip, index) => (
// // //                   <Text key={index} style={styles.tipText}>• {tip}</Text>
// // //                 ))}
// // //               </View>
// // //             )}
            
// // //             <View style={{ height: 40 }} />
// // //           </View>
// // //         )}

// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // --- STYLES ---
// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: '#F1F5F9' },
// // //   header: { padding: 20, backgroundColor: '#2563EB' },
// // //   headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
// // //   headerSubTitle: { fontSize: 14, color: '#BFDBFE', marginTop: 4 },
  
// // //   card: { backgroundColor: '#fff', margin: 16, padding: 20, borderRadius: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
// // //   label: { fontSize: 14, fontWeight: '600', color: '#334155', marginTop: 16, marginBottom: 8 },
// // //   input: { borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, padding: 12, fontSize: 15, color: '#0F172A' },
  
// // //   chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
// // //   chip: { padding: 8, borderRadius: 20, borderWidth: 1, borderColor: '#CBD5E1', backgroundColor: '#F8FAFC' },
// // //   chipActive: { backgroundColor: '#EFF6FF', borderColor: '#2563EB' },
// // //   chipText: { fontSize: 13, color: '#64748B' },
// // //   chipTextActive: { color: '#2563EB', fontWeight: '600' },

// // //   button: { backgroundColor: '#2563EB', marginTop: 24, padding: 16, borderRadius: 12, alignItems: 'center', height: 55, justifyContent: 'center' },
// // //   buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

// // //   resultsContainer: { paddingBottom: 20 },
// // //   weatherBanner: { margin: 16, backgroundColor: '#FEF3C7', padding: 16, borderRadius: 12, borderLeftWidth: 4, borderLeftColor: '#F59E0B' },
// // //   weatherText: { color: '#92400E', fontSize: 14, fontWeight: '500' },

// // //   categoryCard: { backgroundColor: '#fff', marginHorizontal: 16, marginTop: 12, padding: 16, borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 5, elevation: 2 },
// // //   categoryTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B', marginBottom: 12 },
  
// // //   itemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
// // //   itemLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
// // //   bullet: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#CBD5E1', marginRight: 12 },
// // //   essentialBullet: { backgroundColor: '#EF4444' },
// // //   itemName: { fontSize: 15, color: '#334155' },
// // //   essentialBadge: { backgroundColor: '#FEE2E2', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
// // //   essentialText: { fontSize: 11, color: '#DC2626', fontWeight: 'bold' },

// // //   tipsCard: { backgroundColor: '#F0FDF4', margin: 16, padding: 16, borderRadius: 12, borderLeftWidth: 4, borderLeftColor: '#22C55E' },
// // //   tipsTitle: { fontSize: 16, fontWeight: 'bold', color: '#166534', marginBottom: 8 },
// // //   tipText: { fontSize: 14, color: '#15803D', marginBottom: 4 },
// // // });

// // // export default SmartPackingScreen;














// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //   View,
// //   Text,
// //   ScrollView,
// //   TextInput,
// //   TouchableOpacity,
// //   ActivityIndicator,
// //   Alert,
// //   SafeAreaView,
// //   StyleSheet,
// //   Dimensions,
// //   Animated,
// // } from 'react-native';
// // import { StatusBar } from 'react-native';
// // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // import { LinearGradient } from 'expo-linear-gradient';

// // const { width } = Dimensions.get('window');

// // /* ═══ Design Tokens ════════════════════════════════ */
// // const T = {
// //   bg:      '#050505',
// //   surf:    '#0C0C0C',
// //   card:    '#131313',
// //   border:  '#242424',
// //   border2: '#303030',
// //   mint:    '#FFFFFF',
// //   mintL:   '#F0F0F0',
// //   mintD:   '#C4C4C4',
// //   purple:  '#909090',
// //   neonGreen: '#4ADE80', 
// //   t1: '#FFFFFF',
// //   t2: '#B0B0B0',
// //   t3: '#4A4A4A',
// // };

// // const SmartPackingScreen = () => {
// //   // --- STATE ---
// //   const [destination, setDestination] = useState('');
// //   const [duration, setDuration] = useState('5');
// //   const [tripType, setTripType] = useState('Leisure');
// //   const [gender, setGender] = useState('Unspecified');
// //   const [luggageType, setLuggageType] = useState('Backpack');
// //   const [selectedActivities, setSelectedActivities] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [packingData, setPackingData] = useState(null);
// //   const [focusedInput, setFocusedInput] = useState(null);

// //   // --- ANIMATIONS ---
// //   const fade = useRef(new Animated.Value(0)).current;
// //   const slideY = useRef(new Animated.Value(30)).current;
// //   const pulse = useRef(new Animated.Value(0)).current;
// //   const spin = useRef(new Animated.Value(0)).current;

// //   useEffect(() => {
// //     Animated.parallel([
// //       Animated.timing(fade, { toValue: 1, duration: 600, useNativeDriver: true }),
// //       Animated.spring(slideY, { toValue: 0, friction: 8, tension: 50, useNativeDriver: true }),
// //     ]).start();

// //     Animated.loop(Animated.sequence([
// //       Animated.timing(pulse, { toValue: 1, duration: 2000, useNativeDriver: true }),
// //       Animated.timing(pulse, { toValue: 0, duration: 2000, useNativeDriver: true }),
// //     ])).start();

// //     Animated.loop(Animated.timing(spin, { toValue: 1, duration: 8000, useNativeDriver: true })).start();
// //   }, []);

// //   const pulseS = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.05] });
// //   const spinStr = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

// //   // --- OPTIONS ---
// //   const tripTypes = ['Leisure', 'Trekking', 'Beach', 'Business', 'Honeymoon', 'Backpacking', 'Festival', 'Family 👨‍👩‍👧‍👦'];
// //   const genders = ['Male', 'Female', 'Unspecified'];
// //   const luggageTypes = ['Backpack', 'Suitcase', 'Carry-on only', 'Luxury'];
// //   const activities = ['Hiking', 'Swimming', 'Photography', 'Camping', 'Nightlife', 'Business Meetings'];

// //   // --- LOGIC ---
// //   const toggleActivity = (activity) => {
// //     setSelectedActivities(prev =>
// //       prev.includes(activity) ? prev.filter(a => a !== activity) : [...prev, activity]
// //     );
// //   };

// //   const generatePackingList = async () => {
// //     if (!destination.trim()) return Alert.alert("Oops", "Please enter a destination.");
// //     setLoading(true);
// //     setPackingData(null);
// //     try {
// //       const r = await fetch('http://10.88.222.30:3000/api/smart-packing', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({
// //           destination: destination,
// //           tripType: tripType,
// //           duration: parseInt(duration) || 5,
// //           gender: gender,
// //           luggageType: luggageType,
// //           specialActivities: selectedActivities
// //         }),
// //       });
// //       const res = await r.json();
// //       if (res.success) {
// //         setPackingData(res.data);
// //       } else {
// //         Alert.alert("Error", res.error || "Failed to generate list");
// //       }
// //     } catch (error) {
// //       Alert.alert("Network Error", "Make sure your backend server is running.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // --- UI COMPONENTS ---
// //   const GlowDot = ({ color, size = 8 }) => (
// //     <Animated.View style={[styles.glowDot, {
// //       width: size, height: size, borderRadius: size / 2,
// //       backgroundColor: color, shadowColor: color, shadowOpacity: 0.9, shadowRadius: 6, elevation: 3,
// //       transform: [{ scale: pulseS }],
// //     }]} />
// //   );

// //   const ChipSelector = ({ options, selected, onSelect }) => (
// //     <View style={styles.chipContainer}>
// //       {options.map((option) => (
// //         <TouchableOpacity
// //           key={option}
// //           onPress={() => onSelect(option)}
// //           style={[styles.chip, selected === option && styles.chipActive]}
// //         >
// //           <Text style={[styles.chipText, selected === option && styles.chipTextActive]}>
// //             {option}
// //           </Text>
// //         </TouchableOpacity>
// //       ))}
// //     </View>
// //   );

// //   const MultiChipSelector = ({ options, selected, onToggle }) => (
// //     <View style={styles.chipContainer}>
// //       {options.map((option) => (
// //         <TouchableOpacity
// //           key={option}
// //           onPress={() => onToggle(option)}
// //           style={[styles.chip, selected.includes(option) && styles.chipActive]}
// //         >
// //           <Text style={[styles.chipText, selected.includes(option) && styles.chipTextActive]}>
// //             {selected.includes(option) ? `✓ ${option}` : option}
// //           </Text>
// //         </TouchableOpacity>
// //       ))}
// //     </View>
// //   );

// //   // --- MAIN RENDER ---
// //   return (
// //     <SafeAreaView style={styles.root}>
// //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// //       <ScrollView 
// //         showsVerticalScrollIndicator={false} 
// //         keyboardShouldPersistTaps="handled"
// //         contentContainerStyle={styles.scroll}
// //       >
        
// //         {/* ── HEADER ─────────────────────────── */}
// //         <Animated.View style={[styles.headerWrap, { opacity: fade, transform: [{ translateY: slideY }] }]}>
// //           <TouchableOpacity onPress={() => Alert.alert("Back")}>
// //             <Ionicons name="arrow-back" size={24} color={T.mint} />
// //           </TouchableOpacity>
// //           <View style={styles.headerCenter}>
// //             <GlowDot color={T.neonGreen} size={6} />
// //             <Text style={styles.headerTitle}>AI Smart Packing</Text>
// //           </View>
// //           <Animated.View style={{ transform: [{ rotate: spinStr }] }}>
// //             <MaterialCommunityIcons name="bag-suitcase" size={22} color={T.neonGreen} />
// //           </Animated.View>
// //         </Animated.View>

// //         {/* ── FORM CARD ──────────────────────── */}
// //         <Animated.View style={[styles.formCard, { opacity: fade, transform: [{ translateY: slideY }] }]}>
// //           <LinearGradient colors={[T.neonGreen + '15', 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
          
// //           <View style={styles.cardStrip} />

// //           <Text style={styles.label}>Destination</Text>
// //           <View style={[styles.inputWrap, focusedInput === 'dest' && styles.inputWrapFocused]}>
// //             <Ionicons name="location-outline" size={16} color={focusedInput === 'dest' ? T.neonGreen : T.t3} style={{ marginRight: 10 }} />
// //             <TextInput
// //               style={styles.input}
// //               placeholder="e.g., Manali, Goa, Paris"
// //               placeholderTextColor={T.t3}
// //               value={destination}
// //               onChangeText={setDestination}
// //               onFocus={() => setFocusedInput('dest')}
// //               onBlur={() => setFocusedInput(null)}
// //             />
// //           </View>

// //           <Text style={styles.label}>Trip Duration (Days)</Text>
// //           <View style={[styles.inputWrap, focusedInput === 'dur' && styles.inputWrapFocused]}>
// //             <Ionicons name="calendar-outline" size={16} color={focusedInput === 'dur' ? T.neonGreen : T.t3} style={{ marginRight: 10 }} />
// //             <TextInput
// //               style={styles.input}
// //               placeholder="5"
// //               placeholderTextColor={T.t3}
// //               keyboardType="numeric"
// //               value={duration}
// //               onChangeText={setDuration}
// //               onFocus={() => setFocusedInput('dur')}
// //               onBlur={() => setFocusedInput(null)}
// //             />
// //           </View>

// //           <Text style={styles.label}>Trip Type</Text>
// //           <ChipSelector options={tripTypes} selected={tripType} onSelect={setTripType} />

// //           <Text style={styles.label}>Traveler</Text>
// //           <ChipSelector options={genders} selected={gender} onSelect={setGender} />

// //           <Text style={styles.label}>Luggage Style</Text>
// //           <ChipSelector options={luggageTypes} selected={luggageType} onSelect={setLuggageType} />

// //           <Text style={styles.label}>Special Activities (Optional)</Text>
// //           <MultiChipSelector options={activities} selected={selectedActivities} onToggle={toggleActivity} />

// //           <TouchableOpacity style={styles.button} onPress={generatePackingList} disabled={loading}>
// //             {loading ? (
// //               <ActivityIndicator color={T.bg} />
// //             ) : (
// //               <LinearGradient colors={[T.neonGreen, '#22C55E']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.buttonG}>
// //                 <Text style={styles.buttonText}>Generate Packing List ✨</Text>
// //                 <Ionicons name="arrow-forward" size={16} color={T.bg} />
// //               </LinearGradient>
// //             )}
// //           </TouchableOpacity>
// //         </Animated.View>

// //         {/* ── RESULTS SECTION ────────────────── */}
// //         {packingData && (
// //           <View style={styles.resultsContainer}>
            
// //             {/* Weather/Geo Summary Banner */}
// //             <View style={styles.weatherBanner}>
// //               <View style={styles.weatherBannerDot} />
// //               <Text style={styles.weatherText}>{packingData.weather_summary}</Text>
// //             </View>

// //             {/* Categories & Items */}
// //             {packingData.categories.map((category, cIndex) => (
// //               <View key={cIndex} style={styles.categoryCard}>
// //                 <LinearGradient colors={[T.neonGreen + '10', 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
// //                 <View style={styles.categoryHeader}>
// //                   <Text style={styles.categoryTitle}>
// //                     {category.icon} {category.name}
// //                   </Text>
// //                   <View style={styles.itemCountBadge}>
// //                     <Text style={styles.itemCountText}>{category.items.length}</Text>
// //                   </View>
// //                 </View>
                
// //                 {category.items.map((itemObj, iIndex) => (
// //                   <View key={iIndex} style={styles.itemRow}>
// //                     <View style={styles.itemLeft}>
// //                       <View style={[styles.bullet, itemObj.essential && styles.essentialBullet]} />
// //                       <View style={styles.itemTextWrap}>
// //                         <Text style={styles.itemName}>{itemObj.item}</Text>
// //                         <Text style={styles.itemReason}>{itemObj.reason}</Text>
// //                       </View>
// //                     </View>
// //                     {itemObj.essential && (
// //                       <View style={styles.essentialBadge}>
// //                         <Text style={styles.essentialText}>MUST</Text>
// //                       </View>
// //                     )}
// //                   </View>
// //                 ))}
// //               </View>
// //             ))}

// //             {/* Pro Tips */}
// //             {packingData.pro_tips && packingData.pro_tips.length > 0 && (
// //               <View style={styles.tipsCard}>
// //                 <LinearGradient colors={[T.neonGreen + '12', 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
// //                 <Text style={styles.tipsTitle}>💡 Pro Tips</Text>
// //                 {packingData.pro_tips.map((tip, index) => (
// //                   <Text key={index} style={styles.tipText}>• {tip}</Text>
// //                 ))}
// //               </View>
// //             )}
            
// //             <View style={{ height: 50 }} />
// //           </View>
// //         )}

// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // --- STYLES ---
// // const styles = StyleSheet.create({
// //   root: { flex: 1, backgroundColor: T.bg },
// //   scroll: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 40 },
// //   glowDot: {},

// //   // Header
// //   headerWrap: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingHorizontal: 4 },
// //   headerCenter: { flexDirection: 'row', alignItems: 'center', gap: 8 },
// //   headerTitle: { color: T.t1, fontSize: 18, fontWeight: '800', letterSpacing: -0.5 },

// //   // Form Card
// //   formCard: { 
// //     backgroundColor: T.card, 
// //     borderRadius: 24, 
// //     padding: 20, 
// //     borderWidth: 1, 
// //     borderColor: T.border,
// //     position: 'relative',
// //     overflow: 'hidden',
// //     shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 10, elevation: 5
// //   },
// //   cardStrip: { position: 'absolute', top: 0, left: 0, right: 0, height: 2, backgroundColor: T.neonGreen + '40' },

// //   label: { fontSize: 13, fontWeight: '700', color: T.t2, marginTop: 18, marginBottom: 10, letterSpacing: 0.5 },
  
// //   inputWrap: { 
// //     flexDirection: 'row', 
// //     alignItems: 'center', 
// //     backgroundColor: T.surf, 
// //     borderRadius: 14, 
// //     borderWidth: 1.5, 
// //     borderColor: T.border2,
// //     paddingHorizontal: 14, 
// //     height: 50,
// //     marginBottom: 4
// //   },
// //   inputWrapFocused: { 
// //     borderColor: T.neonGreen + '60', 
// //     shadowColor: T.neonGreen, 
// //     shadowOpacity: 0.15, 
// //     shadowRadius: 10, 
// //     elevation: 4 
// //   },
// //   input: { flex: 1, color: T.t1, fontSize: 15, fontWeight: '500' },

// //   chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
// //   chip: { 
// //     paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, 
// //     borderWidth: 1, borderColor: T.border2, backgroundColor: T.surf 
// //   },
// //   chipActive: { backgroundColor: T.neonGreen + '15', borderColor: T.neonGreen + '60' },
// //   chipText: { fontSize: 12, fontWeight: '600', color: T.t3 },
// //   chipTextActive: { color: T.neonGreen },

// //   button: { marginTop: 28, borderRadius: 16, overflow: 'hidden', height: 56, justifyContent: 'center' },
// //   buttonG: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, flex: 1 },
// //   buttonText: { color: T.bg, fontSize: 16, fontWeight: '900', letterSpacing: -0.2 },

// //   // Results
// //   resultsContainer: { paddingTop: 10 },

// //   weatherBanner: { 
// //     marginHorizontal: 4, 
// //     backgroundColor: T.neonGreen + '15', 
// //     padding: 16, 
// //     borderRadius: 16, 
// //     borderWidth: 1,
// //     borderColor: T.neonGreen + '30',
// //     borderLeftWidth: 4, 
// //     borderLeftColor: T.neonGreen,
// //     marginBottom: 20 
// //   },
// //   weatherBannerDot: { position: 'absolute', top: 16, right: 16, width: 8, height: 8, borderRadius: 4, backgroundColor: T.neonGreen, opacity: 0.5 },
// //   weatherText: { color: T.mintL, fontSize: 13, fontWeight: '600', lineHeight: 20 },

// //   categoryCard: { 
// //     backgroundColor: T.card, 
// //     marginHorizontal: 4, 
// //     marginTop: 14, 
// //     padding: 18, 
// //     borderRadius: 20, 
// //     borderWidth: 1, 
// //     borderColor: T.border,
// //     overflow: 'hidden',
// //     position: 'relative'
// //   },
// //   categoryHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
// //   categoryTitle: { fontSize: 18, fontWeight: '800', color: T.t1, letterSpacing: -0.3 },
// //   itemCountBadge: { backgroundColor: T.neonGreen + '20', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, borderWidth: 1, borderColor: T.neonGreen + '40' },
// //   itemCountText: { color: T.neonGreen, fontSize: 11, fontWeight: '800' },
  
// //   itemRow: { 
// //     flexDirection: 'row', 
// //     justifyContent: 'space-between', 
// //     alignItems: 'center', 
// //     paddingVertical: 14, 
// //     borderBottomWidth: 1, 
// //     borderBottomColor: T.border + '80' 
// //   },
// //   itemLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 10 },
// //   bullet: { width: 8, height: 8, borderRadius: 4, backgroundColor: T.t3, marginRight: 14 },
// //   essentialBullet: { backgroundColor: '#EF4444', shadowColor: '#EF4444', shadowOpacity: 0.6, shadowRadius: 4, elevation: 2 },
  
// //   itemTextWrap: { flex: 1 },
// //   itemName: { fontSize: 14, fontWeight: '700', color: T.mintL, marginBottom: 3 },
// //   itemReason: { fontSize: 11, color: T.t3, fontWeight: '500', lineHeight: 16 },
  
// //   essentialBadge: { backgroundColor: '#EF4444' + '20', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 8, borderWidth: 1, borderColor: '#EF4444' + '40' },
// //   essentialText: { fontSize: 10, color: '#EF4444', fontWeight: '900', letterSpacing: 1 },

// //   tipsCard: { 
// //     backgroundColor: T.card, 
// //     margin: 16, 
// //     padding: 18, 
// //     borderRadius: 20, 
// //     borderWidth: 1, 
// //     borderColor: T.neonGreen + '30',
// //     borderLeftWidth: 4, 
// //     borderLeftColor: T.neonGreen,
// //     position: 'relative',
// //     overflow: 'hidden'
// //   },
// //   tipsTitle: { fontSize: 16, fontWeight: '800', color: T.t1, marginBottom: 12 },
// //   tipText: { fontSize: 13, color: T.t2, marginBottom: 8, lineHeight: 20, fontWeight: '500' },
// // });

// // export default SmartPackingScreen;


















// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert,
//   SafeAreaView,
//   StyleSheet,
//   Dimensions,
//   Animated,
// } from 'react-native';
// import { StatusBar } from 'react-native';
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');

// /* ═══ Design Tokens ════════════════════════════════ */
// const T = {
//   bg:      '#050505',
//   surf:    '#0C0C0C',
//   card:    '#131313',
//   border:  '#242424',
//   border2: '#303030',
//   mint:    '#FFFFFF',
//   mintL:   '#F0F0F0',
//   mintD:   '#C4C4C4',
//   purple:  '#909090',
//   neonGreen: '#4ADE80', 
//   t1: '#FFFFFF',
//   t2: '#B0B0B0',
//   t3: '#4A4A4A',
// };

// const SmartPackingScreen = () => {
//   // --- STATE ---
//   const [destination, setDestination] = useState('');
//   const [duration, setDuration] = useState('5');
//   const [tripType, setTripType] = useState('Leisure');
//   const [gender, setGender] = useState('Unspecified');
//   const [luggageType, setLuggageType] = useState('Backpack');
//   const [selectedActivities, setSelectedActivities] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loadingStep, setLoadingStep] = useState(0); // 0, 1, 2
//   const [packingData, setPackingData] = useState(null);
//   const [focusedInput, setFocusedInput] = useState(null);

//   // --- ANIMATIONS ---
//   const fade = useRef(new Animated.Value(0)).current;
//   const slideY = useRef(new Animated.Value(30)).current;
//   const pulse = useRef(new Animated.Value(0)).current;
//   const spin = useRef(new Animated.Value(0)).current;
  
//   // Loading Animations
//   const loadSpin = useRef(new Animated.Value(0)).current;
//   const loadPulse = useRef(new Animated.Value(0)).current;
//   const loadBarWidth = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fade, { toValue: 1, duration: 600, useNativeDriver: true }),
//       Animated.spring(slideY, { toValue: 0, friction: 8, tension: 50, useNativeDriver: true }),
//     ]).start();

//     Animated.loop(Animated.sequence([
//       Animated.timing(pulse, { toValue: 1, duration: 2000, useNativeDriver: true }),
//       Animated.timing(pulse, { toValue: 0, duration: 2000, useNativeDriver: true }),
//     ])).start();

//     Animated.loop(Animated.timing(spin, { toValue: 1, duration: 8000, useNativeDriver: true })).start();
//   }, []);

//   // Handle Loading Step Logic
//   useEffect(() => {
//     if (loading) {
//       setLoadingStep(0);
//       loadBarWidth.setValue(0);
      
//       const stepTimer = setInterval(() => {
//         setLoadingStep(prev => {
//           if (prev >= 2) {
//             clearInterval(stepTimer);
//             return 2;
//           }
//           return prev + 1;
//         });
//       }, 1400);

//       // Animate the progress bar smoothly across all steps
//       Animated.timing(loadBarWidth, {
//         toValue: width - 80, // Target width of the bar container
//         duration: 4500,
//         useNativeDriver: false,
//       }).start();

//       // Loading Spin & Pulse
//       Animated.loop(Animated.timing(loadSpin, { toValue: 1, duration: 1500, useNativeDriver: true })).start();
//       Animated.loop(Animated.sequence([
//         Animated.timing(loadPulse, { toValue: 1, duration: 800, useNativeDriver: true }),
//         Animated.timing(loadPulse, { toValue: 0, duration: 800, useNativeDriver: true }),
//       ])).start();

//       return () => clearInterval(stepTimer);
//     } else {
//       loadBarWidth.setValue(0);
//     }
//   }, [loading]);

//   const pulseS = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.05] });
//   const spinStr = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  
//   const loadSpinStr = loadSpin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
//   const loadPulseS = loadPulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.2] });

//   // --- OPTIONS ---
//   const tripTypes = ['Leisure', 'Trekking', 'Beach', 'Business', 'Honeymoon', 'Backpacking', 'Festival', 'Family 👨‍👩‍👧‍👦'];
//   const genders = ['Male', 'Female', 'Unspecified'];
//   const luggageTypes = ['Backpack', 'Suitcase', 'Carry-on only', 'Luxury'];
//   const activities = ['Hiking', 'Swimming', 'Photography', 'Camping', 'Nightlife', 'Business Meetings'];

//   const loadingTexts = [
//     "Mapping Destination...",
//     "Analyzing Micro-climates...",
//     "Generating Smart Checklist..."
//   ];

//   // --- LOGIC ---
//   const toggleActivity = (activity) => {
//     setSelectedActivities(prev =>
//       prev.includes(activity) ? prev.filter(a => a !== activity) : [...prev, activity]
//     );
//   };

//   const generatePackingList = async () => {
//     if (!destination.trim()) return Alert.alert("Oops", "Please enter a destination.");
//     setLoading(true);
//     setPackingData(null);
//     try {
//       const r = await fetch('https://semproject-1a4i.vercel.app/api/smart-packing', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           destination: destination,
//           tripType: tripType,
//           duration: parseInt(duration) || 5,
//           gender: gender,
//           luggageType: luggageType,
//           specialActivities: selectedActivities
//         }),
//       });
//       const res = await r.json();
//       if (res.success) {
//         setPackingData(res.data);
//       } else {
//         Alert.alert("Error", res.error || "Failed to generate list");
//       }
//     } catch (error) {
//       Alert.alert("Network Error", "Make sure your backend server is running.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- UI COMPONENTS ---
//   const GlowDot = ({ color, size = 8 }) => (
//     <Animated.View style={[styles.glowDot, {
//       width: size, height: size, borderRadius: size / 2,
//       backgroundColor: color, shadowColor: color, shadowOpacity: 0.9, shadowRadius: 6, elevation: 3,
//       transform: [{ scale: pulseS }],
//     }]} />
//   );

//   const ChipSelector = ({ options, selected, onSelect }) => (
//     <View style={styles.chipContainer}>
//       {options.map((option) => (
//         <TouchableOpacity
//           key={option}
//           onPress={() => onSelect(option)}
//           style={[styles.chip, selected === option && styles.chipActive]}
//         >
//           <Text style={[styles.chipText, selected === option && styles.chipTextActive]}>
//             {option}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   const MultiChipSelector = ({ options, selected, onToggle }) => (
//     <View style={styles.chipContainer}>
//       {options.map((option) => (
//         <TouchableOpacity
//           key={option}
//           onPress={() => onToggle(option)}
//           style={[styles.chip, selected.includes(option) && styles.chipActive]}
//         >
//           <Text style={[styles.chipText, selected.includes(option) && styles.chipTextActive]}>
//             {selected.includes(option) ? `✓ ${option}` : option}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   // --- MAIN RENDER ---
//   return (
//     <SafeAreaView style={styles.root}>
//       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

//       <ScrollView 
//         showsVerticalScrollIndicator={false} 
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={styles.scroll}
//       >
        
//         {/* ── HEADER ─────────────────────────── */}
//         <Animated.View style={[styles.headerWrap, { opacity: fade, transform: [{ translateY: slideY }] }]}>
//           <TouchableOpacity onPress={() => Alert.alert("Back")}>
//             <Ionicons name="arrow-back" size={24} color={T.mint} />
//           </TouchableOpacity>
//           <View style={styles.headerCenter}>
//             <GlowDot color={T.neonGreen} size={6} />
//             <Text style={styles.headerTitle}>AI Smart Packing</Text>
//           </View>
//           <Animated.View style={{ transform: [{ rotate: spinStr }] }}>
//             <MaterialCommunityIcons name="bag-suitcase" size={22} color={T.neonGreen} />
//           </Animated.View>
//         </Animated.View>

//         {/* ── FORM CARD WRAPPER (For Overlay Positioning) ──────────────────────── */}
//         <View style={styles.formWrapper}>
//           <Animated.View style={[styles.formCard, { opacity: fade, transform: [{ translateY: slideY }] }]}>
//             <LinearGradient colors={[T.neonGreen + '15', 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
//             <View style={styles.cardStrip} />

//             <Text style={styles.label}>Destination</Text>
//             <View style={[styles.inputWrap, focusedInput === 'dest' && styles.inputWrapFocused]}>
//               <Ionicons name="location-outline" size={16} color={focusedInput === 'dest' ? T.neonGreen : T.t3} style={{ marginRight: 10 }} />
//               <TextInput style={styles.input} placeholder="e.g., Manali, Goa, Paris" placeholderTextColor={T.t3} value={destination} onChangeText={setDestination} onFocus={() => setFocusedInput('dest')} onBlur={() => setFocusedInput(null)} />
//             </View>

//             <Text style={styles.label}>Trip Duration (Days)</Text>
//             <View style={[styles.inputWrap, focusedInput === 'dur' && styles.inputWrapFocused]}>
//               <Ionicons name="calendar-outline" size={16} color={focusedInput === 'dur' ? T.neonGreen : T.t3} style={{ marginRight: 10 }} />
//               <TextInput style={styles.input} placeholder="5" placeholderTextColor={T.t3} keyboardType="numeric" value={duration} onChangeText={setDuration} onFocus={() => setFocusedInput('dur')} onBlur={() => setFocusedInput(null)} />
//             </View>

//             <Text style={styles.label}>Trip Type</Text>
//             <ChipSelector options={tripTypes} selected={tripType} onSelect={setTripType} />
//             <Text style={styles.label}>Traveler</Text>
//             <ChipSelector options={genders} selected={gender} onSelect={setGender} />
//             <Text style={styles.label}>Luggage Style</Text>
//             <ChipSelector options={luggageTypes} selected={luggageType} onSelect={setLuggageType} />
//             <Text style={styles.label}>Special Activities (Optional)</Text>
//             <MultiChipSelector options={activities} selected={selectedActivities} onToggle={toggleActivity} />

//             <TouchableOpacity style={styles.button} onPress={generatePackingList} disabled={loading}>
//               <LinearGradient colors={[T.neonGreen, '#22C55E']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.buttonG}>
//                 <Text style={styles.buttonText}>Generate Packing List ✨</Text>
//                 <Ionicons name="arrow-forward" size={16} color={T.bg} />
//               </LinearGradient>
//             </TouchableOpacity>
//           </Animated.View>

//           {/* ── ✨ UNIQUE LOADING OVERLAY ✨ ────────────────────── */}
//           {loading && (
//             <View style={styles.loadingOverlay}>
//               <LinearGradient colors={[T.neonGreen + '10', 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
              
//               {/* Orbit Animation */}
//               <View style={styles.loadingOrbitWrap}>
//                 <Animated.View style={[styles.loadingOrbit, { transform: [{ rotate: loadSpinStr }] }]} />
//                 <Animated.View style={[styles.loadingCore, { transform: [{ scale: loadPulseS }] }]}>
//                   <MaterialCommunityIcons name="bag-suitcase" size={32} color={T.neonGreen} />
//                 </Animated.View>
//               </View>

//               <Text style={styles.loadingTitle}>AI Processing</Text>
              
//               {/* Dynamic Step Text */}
//               <View style={styles.loadingStepRow}>
//                 {loadingTexts.map((text, i) => (
//                   <React.Fragment key={i}>
//                     <View style={[styles.stepDot, i <= loadingStep && { backgroundColor: T.neonGreen, shadowColor: T.neonGreen, shadowOpacity: 0.8, shadowRadius: 4 }]} />
//                     <Text style={[styles.stepText, i === loadingStep && styles.stepTextActive]}>
//                       {text}
//                     </Text>
//                   </React.Fragment>
//                 ))}
//               </View>

//               {/* Animated Progress Bar */}
//               <View style={styles.loadingBarBg}>
//                 <Animated.View style={[styles.loadingBarFill, { width: loadBarWidth }]} />
//               </View>
//             </View>
//           )}
//         </View>

//         {/* ── RESULTS SECTION ────────────────── */}
//         {packingData && (
//           <View style={styles.resultsContainer}>
//             <View style={styles.weatherBanner}>
//               <View style={styles.weatherBannerDot} />
//               <Text style={styles.weatherText}>{packingData.weather_summary}</Text>
//             </View>

//             {packingData.categories.map((category, cIndex) => (
//               <View key={cIndex} style={styles.categoryCard}>
//                 <LinearGradient colors={[T.neonGreen + '10', 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
//                 <View style={styles.categoryHeader}>
//                   <Text style={styles.categoryTitle}>{category.icon} {category.name}</Text>
//                   <View style={styles.itemCountBadge}><Text style={styles.itemCountText}>{category.items.length}</Text></View>
//                 </View>
                
//                 {category.items.map((itemObj, iIndex) => (
//                   <View key={iIndex} style={styles.itemRow}>
//                     <View style={styles.itemLeft}>
//                       <View style={[styles.bullet, itemObj.essential && styles.essentialBullet]} />
//                       <View style={styles.itemTextWrap}>
//                         <Text style={styles.itemName}>{itemObj.item}</Text>
//                         <Text style={styles.itemReason}>{itemObj.reason}</Text>
//                       </View>
//                     </View>
//                     {itemObj.essential && (
//                       <View style={styles.essentialBadge}><Text style={styles.essentialText}>MUST</Text></View>
//                     )}
//                   </View>
//                 ))}
//               </View>
//             ))}

//             {packingData.pro_tips && packingData.pro_tips.length > 0 && (
//               <View style={styles.tipsCard}>
//                 <LinearGradient colors={[T.neonGreen + '12', 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={StyleSheet.absoluteFill} />
//                 <Text style={styles.tipsTitle}>💡 Pro Tips</Text>
//                 {packingData.pro_tips.map((tip, index) => (
//                   <Text key={index} style={styles.tipText}>• {tip}</Text>
//                 ))}
//               </View>
//             )}
//             <View style={{ height: 50 }} />
//           </View>
//         )}

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // --- STYLES ---
// const styles = StyleSheet.create({
//   root: { flex: 1, backgroundColor: T.bg },
//   scroll: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 40 },
//   glowDot: {},

//   // Header
//   headerWrap: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingHorizontal: 4 },
//   headerCenter: { flexDirection: 'row', alignItems: 'center', gap: 8 },
//   headerTitle: { color: T.t1, fontSize: 18, fontWeight: '800', letterSpacing: -0.5 },

//   // Form Wrapper (Allows overlay to sit exactly on top)
//   formWrapper: { position: 'relative', minHeight: 100 },

//   formCard: { 
//     backgroundColor: T.card, borderRadius: 24, padding: 20, borderWidth: 1, 
//     borderColor: T.border, position: 'relative', overflow: 'hidden',
//     shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 10, elevation: 5
//   },
//   cardStrip: { position: 'absolute', top: 0, left: 0, right: 0, height: 2, backgroundColor: T.neonGreen + '40' },
//   label: { fontSize: 13, fontWeight: '700', color: T.t2, marginTop: 18, marginBottom: 10, letterSpacing: 0.5 },
//   inputWrap: { flexDirection: 'row', alignItems: 'center', backgroundColor: T.surf, borderRadius: 14, borderWidth: 1.5, borderColor: T.border2, paddingHorizontal: 14, height: 50, marginBottom: 4 },
//   inputWrapFocused: { borderColor: T.neonGreen + '60', shadowColor: T.neonGreen, shadowOpacity: 0.15, shadowRadius: 10, elevation: 4 },
//   input: { flex: 1, color: T.t1, fontSize: 15, fontWeight: '500' },

//   chipContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
//   chip: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, borderWidth: 1, borderColor: T.border2, backgroundColor: T.surf },
//   chipActive: { backgroundColor: T.neonGreen + '15', borderColor: T.neonGreen + '60' },
//   chipText: { fontSize: 12, fontWeight: '600', color: T.t3 },
//   chipTextActive: { color: T.neonGreen },

//   button: { marginTop: 28, borderRadius: 16, overflow: 'hidden', height: 56, justifyContent: 'center' },
//   buttonG: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, flex: 1 },
//   buttonText: { color: T.bg, fontSize: 16, fontWeight: '900', letterSpacing: -0.2 },

//   // ✨ UNIQUE LOADING STYLES ✨
//   loadingOverlay: {
//     position: 'absolute',
//     top: 0, left: 0, right: 0, bottom: 0,
//     backgroundColor: '#0A0F0A', // Dark greenish black to blend with card
//     borderRadius: 24,
//     borderWidth: 1,
//     borderColor: T.neonGreen + '40',
//     zIndex: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 30,
//     overflow: 'hidden',
//     shadowColor: T.neonGreen,
//     shadowOpacity: 0.2,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   loadingOrbitWrap: {
//     width: 100, height: 100, justifyContent: 'center', alignItems: 'center', 
//     marginBottom: 30, position: 'relative'
//   },
//   loadingOrbit: {
//     position: 'absolute', width: 100, height: 100, borderRadius: 50, 
//     borderWidth: 2, borderColor: T.neonGreen + '50', borderStyle: 'dashed'
//   },
//   loadingCore: {
//     width: 70, height: 70, borderRadius: 20, backgroundColor: T.neonGreen + '20', 
//     borderWidth: 1, borderColor: T.neonGreen + '40', 
//     justifyContent: 'center', alignItems: 'center'
//   },
//   loadingTitle: { 
//     color: T.t1, fontSize: 20, fontWeight: '900', letterSpacing: -0.5, marginBottom: 25 
//   },
//   loadingStepRow: { 
//     width: '100%', flexDirection: 'column', gap: 12, marginBottom: 30 
//   },
//   stepDot: { 
//     width: 6, height: 6, borderRadius: 3, backgroundColor: T.t3, marginRight: 10 
//   },
//   stepText: { 
//     fontSize: 13, fontWeight: '600', color: T.t3, letterSpacing: 0.5 
//   },
//   stepTextActive: { 
//     color: T.neonGreen 
//   },
//   loadingBarBg: { 
//     width: '100%', height: 4, borderRadius: 2, backgroundColor: T.border, overflow: 'hidden' 
//   },
//   loadingBarFill: { 
//     height: '100%', borderRadius: 2, 
//     backgroundColor: T.neonGreen, 
//     shadowColor: T.neonGreen, 
//     shadowOpacity: 0.8, 
//     shadowRadius: 4 
//   },

//   // Results
//   resultsContainer: { paddingTop: 10 },
//   weatherBanner: { marginHorizontal: 4, backgroundColor: T.neonGreen + '15', padding: 16, borderRadius: 16, borderWidth: 1, borderColor: T.neonGreen + '30', borderLeftWidth: 4, borderLeftColor: T.neonGreen, marginBottom: 20 },
//   weatherBannerDot: { position: 'absolute', top: 16, right: 16, width: 8, height: 8, borderRadius: 4, backgroundColor: T.neonGreen, opacity: 0.5 },
//   weatherText: { color: T.mintL, fontSize: 13, fontWeight: '600', lineHeight: 20 },

//   categoryCard: { backgroundColor: T.card, marginHorizontal: 4, marginTop: 14, padding: 18, borderRadius: 20, borderWidth: 1, borderColor: T.border, overflow: 'hidden', position: 'relative' },
//   categoryHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
//   categoryTitle: { fontSize: 18, fontWeight: '800', color: T.t1, letterSpacing: -0.3 },
//   itemCountBadge: { backgroundColor: T.neonGreen + '20', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8, borderWidth: 1, borderColor: T.neonGreen + '40' },
//   itemCountText: { color: T.neonGreen, fontSize: 11, fontWeight: '800' },
  
//   itemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: T.border + '80' },
//   itemLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 10 },
//   bullet: { width: 8, height: 8, borderRadius: 4, backgroundColor: T.t3, marginRight: 14 },
//   essentialBullet: { backgroundColor: '#EF4444', shadowColor: '#EF4444', shadowOpacity: 0.6, shadowRadius: 4, elevation: 2 },
//   itemTextWrap: { flex: 1 },
//   itemName: { fontSize: 14, fontWeight: '700', color: T.mintL, marginBottom: 3 },
//   itemReason: { fontSize: 11, color: T.t3, fontWeight: '500', lineHeight: 16 },
//   essentialBadge: { backgroundColor: '#EF4444' + '20', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 8, borderWidth: 1, borderColor: '#EF4444' + '40' },
//   essentialText: { fontSize: 10, color: '#EF4444', fontWeight: '900', letterSpacing: 1 },

//   tipsCard: { backgroundColor: T.card, margin: 16, padding: 18, borderRadius: 20, borderWidth: 1, borderColor: T.neonGreen + '30', borderLeftWidth: 4, borderLeftColor: T.neonGreen, position: 'relative', overflow: 'hidden' },
//   tipsTitle: { fontSize: 16, fontWeight: '800', color: T.t1, marginBottom: 12 },
//   tipText: { fontSize: 13, color: T.t2, marginBottom: 8, lineHeight: 20, fontWeight: '500' },
// });

// export default SmartPackingScreen;







// bbewd
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  Keyboard,
} from 'react-native';
import { StatusBar } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

/* ═══ Design Tokens ════════════════════════════════ */
const T = {
  bg:      '#050505',
  surf:    '#0C0C0C',
  card:    '#131313',
  border:  '#242424',
  border2: '#303030',
  mint:    '#FFFFFF',
  mintL:   '#F0F0F0',
  mintD:   '#C4C4C4',
  purple:  '#909090',
  neonGreen: '#4ADE80', 
  t1: '#FFFFFF',
  t2: '#B0B0B0',
  t3: '#4A4A4A',
};

const SmartPackingScreen = () => {
  // --- STATE ---
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('5');
  const [tripType, setTripType] = useState('Leisure');
  const [gender, setGender] = useState('Unspecified');
  const [luggageType, setLuggageType] = useState('Backpack');
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [packingData, setPackingData] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  // --- ANIMATIONS ---
  const fade = useRef(new Animated.Value(0)).current;
  const slideY = useRef(new Animated.Value(30)).current;
  const pulse = useRef(new Animated.Value(0)).current;
  const spin = useRef(new Animated.Value(0)).current;
  
  // Loading Animations
  const loadSpin = useRef(new Animated.Value(0)).current;
  const loadPulse = useRef(new Animated.Value(0)).current;
  const loadBarWidth = useRef(new Animated.Value(0)).current;

  // --- MOUNT EFFECTS ---
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { 
        toValue: 1, 
        duration: 600, 
        useNativeDriver: true 
      }),
      Animated.spring(slideY, { 
        toValue: 0, 
        friction: 8, 
        tension: 50, 
        useNativeDriver: true 
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { 
          toValue: 1, 
          duration: 2000, 
          useNativeDriver: true 
        }),
        Animated.timing(pulse, { 
          toValue: 0, 
          duration: 2000, 
          useNativeDriver: true 
        }),
      ])
    ).start();

    Animated.loop(
      Animated.timing(spin, { 
        toValue: 1, 
        duration: 8000, 
        useNativeDriver: true 
      })
    ).start();
  }, []);

  // --- LOADING EFFECTS ---
  useEffect(() => {
    if (loading) {
      setLoadingStep(0);
      loadBarWidth.setValue(0);
      
      const stepTimer = setInterval(() => {
        setLoadingStep(prev => (prev >= 2 ? 2 : prev + 1));
      }, 1400);

      Animated.timing(loadBarWidth, {
        toValue: width - 80,
        duration: 4500,
        useNativeDriver: false,
      }).start();

      Animated.loop(
        Animated.timing(loadSpin, { 
          toValue: 1, 
          duration: 1500, 
          useNativeDriver: true 
        })
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(loadPulse, { 
            toValue: 1, 
            duration: 800, 
            useNativeDriver: true 
          }),
          Animated.timing(loadPulse, { 
            toValue: 0, 
            duration: 800, 
            useNativeDriver: true 
          }),
        ])
      ).start();

      return () => clearInterval(stepTimer);
    } else {
      loadBarWidth.setValue(0);
    }
  }, [loading]);

  // --- INTERPOLATIONS ---
  const pulseS = pulse.interpolate({ 
    inputRange: [0, 1], 
    outputRange: [1, 1.05] 
  });
  const spinStr = spin.interpolate({ 
    inputRange: [0, 1], 
    outputRange: ['0deg', '360deg'] 
  });
  
  const loadSpinStr = loadSpin.interpolate({ 
    inputRange: [0, 1], 
    outputRange: ['0deg', '360deg'] 
  });
  const loadPulseS = loadPulse.interpolate({ 
    inputRange: [0, 1], 
    outputRange: [1, 1.2] 
  });

  // --- OPTIONS ---
  const tripTypes = ['Leisure', 'Trekking', 'Beach', 'Business', 'Honeymoon', 'Backpacking', 'Festival', 'Family 👨‍👩‍👧‍👦'];
  const genders = ['Male', 'Female', 'Unspecified'];
  const luggageTypes = ['Backpack', 'Suitcase', 'Carry-on only', 'Luxury'];
  const activities = ['Hiking', 'Swimming', 'Photography', 'Camping', 'Nightlife', 'Business Meetings'];
  const loadingTexts = [
    "Mapping Destination...",
    "Analyzing Micro-climates...",
    "Generating Smart Checklist..."
  ];

  // --- LOGIC ---
  const toggleActivity = (activity) => {
    setSelectedActivities(prev =>
      prev.includes(activity) ? prev.filter(a => a !== activity) : [...prev, activity]
    );
  };

  const generatePackingList = async () => {
    if (!destination.trim()) {
      return Alert.alert("Oops", "Please enter a destination.");
    }

    Keyboard.dismiss();
    setLoading(true);
    setPackingData(null);

    try {
      const r = await fetch('https://semproject-1a4i.vercel.app/api/smart-packing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination: destination,
          tripType: tripType,
          duration: parseInt(duration) || 5,
          gender: gender,
          luggageType: luggageType,
          specialActivities: selectedActivities
        }),
      });

      const res = await r.json();
      if (res.success) {
        setPackingData(res.data);
      } else {
        Alert.alert("Error", res.error || "Failed to generate list");
      }
    } catch (error) {
      Alert.alert("Network Error", "Make sure your backend server is running.");
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // --- UI COMPONENTS ---
  const GlowDot = ({ color, size = 8 }) => (
    <Animated.View style={[
      styles.glowDot, 
      {
        width: size, 
        height: size, 
        borderRadius: size / 2,
        backgroundColor: color, 
        shadowColor: color, 
        shadowOpacity: 0.9, 
        shadowRadius: 6, 
        elevation: 3,
        transform: [{ scale: pulseS }],
      }
    ]} />
  );

  const ChipSelector = ({ options, selected, onSelect }) => (
    <View style={styles.chipContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => onSelect(option)}
          style={[styles.chip, selected === option && styles.chipActive]}
        >
          <Text style={[styles.chipText, selected === option && styles.chipTextActive]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const MultiChipSelector = ({ options, selected, onToggle }) => (
    <View style={styles.chipContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => onToggle(option)}
          style={[styles.chip, selected.includes(option) && styles.chipActive]}
        >
          <Text style={[styles.chipText, selected.includes(option) && styles.chipTextActive]}>
            {selected.includes(option) ? `✓ ${option}` : option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // --- MAIN RENDER ---
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={T.bg} />
      
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        keyboardShouldPersistTaps="handled"
        scrollEnabled={true}
        nestedScrollEnabled={true}
        contentContainerStyle={styles.scroll}
      >
        
        {/* ── HEADER ─────────────────────────── */}
        <Animated.View style={[styles.headerWrap, { opacity: fade, transform: [{ translateY: slideY }] }]}>
          <TouchableOpacity onPress={() => Alert.alert("Back")}>
            <Ionicons name="arrow-back" size={24} color={T.mint} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <GlowDot color={T.neonGreen} size={6} />
            <Text style={styles.headerTitle}>AI Smart Packing</Text>
          </View>
          <Animated.View style={{ transform: [{ rotate: spinStr }] }}>
            <MaterialCommunityIcons name="bag-suitcase" size={22} color={T.neonGreen} />
          </Animated.View>
        </Animated.View>

        {/* ── FORM CARD WRAPPER ──────────────────────── */}
        <View style={styles.formWrapper}>
          <Animated.View style={[styles.formCard, { opacity: fade, transform: [{ translateY: slideY }] }]}>
            <LinearGradient 
              colors={[T.neonGreen + '15', 'transparent']} 
              start={{ x: 0, y: 0 }} 
              end={{ x: 1, y: 1 }} 
              style={StyleSheet.absoluteFill} 
            />
            <View style={styles.cardStrip} />

            {/* ─── DESTINATION INPUT ─── */}
            <Text style={styles.label}>Destination</Text>
            <View style={[styles.inputWrap, focusedInput === 'dest' && styles.inputWrapFocused]}>
              <Ionicons 
                name="location-outline" 
                size={16} 
                color={focusedInput === 'dest' ? T.neonGreen : T.t3} 
                style={{ marginRight: 10 }} 
              />
              <TextInput 
                style={styles.input} 
                placeholder="e.g., Manali, Goa, Paris" 
                placeholderTextColor={T.t3} 
                value={destination} 
                onChangeText={setDestination}
                onFocus={() => setFocusedInput('dest')}
                onBlur={() => setFocusedInput(null)}
                editable={!loading}
                returnKeyType="next"
              />
            </View>

            {/* ─── DURATION INPUT ─── */}
            <Text style={styles.label}>Trip Duration (Days)</Text>
            <View style={[styles.inputWrap, focusedInput === 'dur' && styles.inputWrapFocused]}>
              <Ionicons 
                name="calendar-outline" 
                size={16} 
                color={focusedInput === 'dur' ? T.neonGreen : T.t3} 
                style={{ marginRight: 10 }} 
              />
              <TextInput 
                style={styles.input} 
                placeholder="5" 
                placeholderTextColor={T.t3} 
                keyboardType="numeric" 
                value={duration} 
                onChangeText={setDuration}
                onFocus={() => setFocusedInput('dur')}
                onBlur={() => setFocusedInput(null)}
                editable={!loading}
                returnKeyType="done"
              />
            </View>

            {/* ─── TRIP TYPE ─── */}
            <Text style={styles.label}>Trip Type</Text>
            <ChipSelector options={tripTypes} selected={tripType} onSelect={setTripType} />

            {/* ─── GENDER ─── */}
            <Text style={styles.label}>Traveler</Text>
            <ChipSelector options={genders} selected={gender} onSelect={setGender} />

            {/* ─── LUGGAGE TYPE ─── */}
            <Text style={styles.label}>Luggage Style</Text>
            <ChipSelector options={luggageTypes} selected={luggageType} onSelect={setLuggageType} />

            {/* ─── ACTIVITIES ─── */}
            <Text style={styles.label}>Special Activities (Optional)</Text>
            <MultiChipSelector options={activities} selected={selectedActivities} onToggle={toggleActivity} />

            {/* ─── SUBMIT BUTTON ─── */}
            <TouchableOpacity 
              style={[styles.button, loading && styles.buttonDisabled]} 
              onPress={generatePackingList} 
              disabled={loading}
              activeOpacity={0.7}
            >
              <LinearGradient 
                colors={loading ? ['#666666', '#555555'] : [T.neonGreen, '#22C55E']} 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }} 
                style={styles.buttonG}
              >
                {loading ? (
                  <ActivityIndicator size="small" color={T.bg} />
                ) : (
                  <>
                    <Text style={styles.buttonText}>Generate Packing List ✨</Text>
                    <Ionicons name="arrow-forward" size={16} color={T.bg} />
                  </>
                )}
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>

          {/* ── LOADING OVERLAY ── */}
          {loading && (
            <View style={styles.loadingOverlay}>
              <LinearGradient 
                colors={[T.neonGreen + '10', 'transparent']} 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 1 }} 
                style={StyleSheet.absoluteFill} 
              />
              
              {/* Orbit Animation */}
              <View style={styles.loadingOrbitWrap}>
                <Animated.View style={[styles.loadingOrbit, { transform: [{ rotate: loadSpinStr }] }]} />
                <Animated.View style={[styles.loadingCore, { transform: [{ scale: loadPulseS }] }]}>
                  <MaterialCommunityIcons name="bag-suitcase" size={32} color={T.neonGreen} />
                </Animated.View>
              </View>
              <Text style={styles.loadingTitle}>AI Processing</Text>
              
              {/* Dynamic Step Text */}
              <View style={styles.loadingStepRow}>
                {loadingTexts.map((text, i) => (
                  <View key={i} style={styles.stepItem}>
                    <View style={[
                      styles.stepDot, 
                      i <= loadingStep && { 
                        backgroundColor: T.neonGreen, 
                        shadowColor: T.neonGreen, 
                        shadowOpacity: 0.8, 
                        shadowRadius: 4 
                      }
                    ]} />
                    <Text style={[styles.stepText, i === loadingStep && styles.stepTextActive]}>
                      {text}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Animated Progress Bar */}
              <View style={styles.loadingBarBg}>
                <Animated.View style={[styles.loadingBarFill, { width: loadBarWidth }]} />
              </View>
            </View>
          )}
        </View>

        {/* ── RESULTS SECTION ────────────────── */}
        {packingData && (
          <View style={styles.resultsContainer}>
            <View style={styles.weatherBanner}>
              <View style={styles.weatherBannerDot} />
              <Text style={styles.weatherText}>{packingData.weather_summary}</Text>
            </View>

            {packingData.categories && packingData.categories.map((category, cIndex) => (
              <View key={cIndex} style={styles.categoryCard}>
                <LinearGradient 
                  colors={[T.neonGreen + '10', 'transparent']} 
                  start={{ x: 0, y: 0 }} 
                  end={{ x: 1, y: 1 }} 
                  style={StyleSheet.absoluteFill} 
                />
                <View style={styles.categoryHeader}>
                  <Text style={styles.categoryTitle}>{category.icon} {category.name}</Text>
                  <View style={styles.itemCountBadge}>
                    <Text style={styles.itemCountText}>{category.items ? category.items.length : 0}</Text>
                  </View>
                </View>
                
                {category.items && category.items.map((itemObj, iIndex) => (
                  <View key={iIndex} style={styles.itemRow}>
                    <View style={styles.itemLeft}>
                      <View style={[styles.bullet, itemObj.essential && styles.essentialBullet]} />
                      <View style={styles.itemTextWrap}>
                        <Text style={styles.itemName}>{itemObj.item}</Text>
                        <Text style={styles.itemReason}>{itemObj.reason}</Text>
                      </View>
                    </View>
                    {itemObj.essential && (
                      <View style={styles.essentialBadge}>
                        <Text style={styles.essentialText}>MUST</Text>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            ))}

            {packingData.pro_tips && packingData.pro_tips.length > 0 && (
              <View style={styles.tipsCard}>
                <LinearGradient 
                  colors={[T.neonGreen + '12', 'transparent']} 
                  start={{ x: 0, y: 0 }} 
                  end={{ x: 1, y: 1 }} 
                  style={StyleSheet.absoluteFill} 
                />
                <Text style={styles.tipsTitle}>💡 Pro Tips</Text>
                {packingData.pro_tips.map((tip, index) => (
                  <Text key={index} style={styles.tipText}>• {tip}</Text>
                ))}
              </View>
            )}

            <View style={{ height: 50 }} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

// --- STYLES ---
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: T.bg },
  scroll: { paddingHorizontal: 20, paddingTop: 12, paddingBottom: 40 },
  glowDot: {},

  // Header
  headerWrap: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 24, 
    paddingHorizontal: 4 
  },
  headerCenter: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8 
  },
  headerTitle: { 
    color: T.t1, 
    fontSize: 18, 
    fontWeight: '800', 
    letterSpacing: -0.5 
  },

  // Form Wrapper
  formWrapper: { 
    position: 'relative', 
    minHeight: 100 
  },
  formCard: { 
    backgroundColor: T.card, 
    borderRadius: 24, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: T.border, 
    position: 'relative', 
    overflow: 'hidden',
    shadowColor: '#000', 
    shadowOpacity: 0.5, 
    shadowRadius: 10, 
    elevation: 5
  },
  cardStrip: { 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    height: 2, 
    backgroundColor: T.neonGreen + '40' 
  },

  // Labels & Inputs
  label: { 
    fontSize: 13, 
    fontWeight: '700', 
    color: T.t2, 
    marginTop: 18, 
    marginBottom: 10, 
    letterSpacing: 0.5 
  },
  inputWrap: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: T.surf, 
    borderRadius: 14, 
    borderWidth: 1.5, 
    borderColor: T.border2, 
    paddingHorizontal: 14, 
    height: 50, 
    marginBottom: 4,
    overflow: 'hidden',
  },
  inputWrapFocused: { 
    borderColor: T.neonGreen + '60', 
    shadowColor: T.neonGreen, 
    shadowOpacity: 0.15, 
    shadowRadius: 10, 
    elevation: 4 
  },
  input: { 
    flex: 1, 
    color: T.t1, 
    fontSize: 15, 
    fontWeight: '500',
    padding: 0,
    margin: 0,
  },

  // Chips
  chipContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 8,
    marginBottom: 8,
  },
  chip: { 
    paddingVertical: 8, 
    paddingHorizontal: 14, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: T.border2, 
    backgroundColor: T.surf 
  },
  chipActive: { 
    backgroundColor: T.neonGreen + '15', 
    borderColor: T.neonGreen + '60' 
  },
  chipText: { 
    fontSize: 12, 
    fontWeight: '600', 
    color: T.t3 
  },
  chipTextActive: { 
    color: T.neonGreen 
  },

  // Button
  button: { 
    marginTop: 28, 
    borderRadius: 16, 
    overflow: 'hidden', 
    height: 56, 
    justifyContent: 'center' 
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonG: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 10, 
    flex: 1 
  },
  buttonText: { 
    color: T.bg, 
    fontSize: 16, 
    fontWeight: '900', 
    letterSpacing: -0.2 
  },

  // Loading Overlay
  loadingOverlay: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0,
    backgroundColor: '#0A0F0A',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: T.neonGreen + '40',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    overflow: 'hidden',
    shadowColor: T.neonGreen,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  loadingOrbitWrap: {
    width: 100, 
    height: 100, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 30, 
    position: 'relative'
  },
  loadingOrbit: {
    position: 'absolute', 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    borderWidth: 2, 
    borderColor: T.neonGreen + '50', 
    borderStyle: 'dashed'
  },
  loadingCore: {
    width: 70, 
    height: 70, 
    borderRadius: 20, 
    backgroundColor: T.neonGreen + '20', 
    borderWidth: 1, 
    borderColor: T.neonGreen + '40', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  loadingTitle: { 
    color: T.t1, 
    fontSize: 20, 
    fontWeight: '900', 
    letterSpacing: -0.5, 
    marginBottom: 25 
  },
  loadingStepRow: { 
    width: '100%', 
    flexDirection: 'column', 
    gap: 12, 
    marginBottom: 30 
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepDot: { 
    width: 6, 
    height: 6, 
    borderRadius: 3, 
    backgroundColor: T.t3, 
    marginRight: 10 
  },
  stepText: { 
    fontSize: 13, 
    fontWeight: '600', 
    color: T.t3, 
    letterSpacing: 0.5 
  },
  stepTextActive: { 
    color: T.neonGreen 
  },
  loadingBarBg: { 
    width: '100%', 
    height: 4, 
    borderRadius: 2, 
    backgroundColor: T.border, 
    overflow: 'hidden' 
  },
  loadingBarFill: { 
    height: '100%', 
    borderRadius: 2, 
    backgroundColor: T.neonGreen, 
    shadowColor: T.neonGreen, 
    shadowOpacity: 0.8, 
    shadowRadius: 4 
  },

  // Results
  resultsContainer: { paddingTop: 10 },
  weatherBanner: { 
    marginHorizontal: 4, 
    backgroundColor: T.neonGreen + '15', 
    padding: 16, 
    borderRadius: 16, 
    borderWidth: 1, 
    borderColor: T.neonGreen + '30', 
    borderLeftWidth: 4, 
    borderLeftColor: T.neonGreen, 
    marginBottom: 20 
  },
  weatherBannerDot: { 
    position: 'absolute', 
    top: 16, 
    right: 16, 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: T.neonGreen, 
    opacity: 0.5 
  },
  weatherText: { 
    color: T.mintL, 
    fontSize: 13, 
    fontWeight: '600', 
    lineHeight: 20 
  },

  // Category Card
  categoryCard: { 
    backgroundColor: T.card, 
    marginHorizontal: 4, 
    marginTop: 14, 
    padding: 18, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: T.border, 
    overflow: 'hidden', 
    position: 'relative' 
  },
  categoryHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 16 
  },
  categoryTitle: { 
    fontSize: 18, 
    fontWeight: '800', 
    color: T.t1, 
    letterSpacing: -0.3 
  },
  itemCountBadge: { 
    backgroundColor: T.neonGreen + '20', 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: T.neonGreen + '40' 
  },
  itemCountText: { 
    color: T.neonGreen, 
    fontSize: 11, 
    fontWeight: '800' 
  },
  
  // Item Row
  itemRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: 14, 
    borderBottomWidth: 1, 
    borderBottomColor: T.border + '80' 
  },
  itemLeft: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    flex: 1, 
    marginRight: 10 
  },
  bullet: { 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: T.t3, 
    marginRight: 14 
  },
  essentialBullet: { 
    backgroundColor: '#EF4444', 
    shadowColor: '#EF4444', 
    shadowOpacity: 0.6, 
    shadowRadius: 4, 
    elevation: 2 
  },
  itemTextWrap: { flex: 1 },
  itemName: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: T.mintL, 
    marginBottom: 3 
  },
  itemReason: { 
    fontSize: 11, 
    color: T.t3, 
    fontWeight: '500', 
    lineHeight: 16 
  },
  essentialBadge: { 
    backgroundColor: '#EF4444' + '20', 
    paddingHorizontal: 10, 
    paddingVertical: 3, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#EF4444' + '40' 
  },
  essentialText: { 
    fontSize: 10, 
    color: '#EF4444', 
    fontWeight: '900', 
    letterSpacing: 1 
  },

  // Tips Card
  tipsCard: { 
    backgroundColor: T.card, 
    margin: 16, 
    padding: 18, 
    borderRadius: 20, 
    borderWidth: 1, 
    borderColor: T.neonGreen + '30', 
    borderLeftWidth: 4, 
    borderLeftColor: T.neonGreen, 
    position: 'relative', 
    overflow: 'hidden' 
  },
  tipsTitle: { 
    fontSize: 16, 
    fontWeight: '800', 
    color: T.t1, 
    marginBottom: 12 
  },
  tipText: { 
    fontSize: 13, 
    color: T.t2, 
    marginBottom: 8, 
    lineHeight: 20, 
    fontWeight: '500' 
  },
});

export default SmartPackingScreen;