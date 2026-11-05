// // // // // // // import React, { useState } from 'react';
// // // // // // // import {
// // // // // // //   View,
// // // // // // //   Text,
// // // // // // //   StyleSheet,
// // // // // // //   TextInput,
// // // // // // //   TouchableOpacity,
// // // // // // //   FlatList,
// // // // // // //   Image,
// // // // // // //   ActivityIndicator,
// // // // // // //   SafeAreaView,
// // // // // // // } from 'react-native';
// // // // // // // import { Ionicons } from '@expo/vector-icons';
// // // // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // // // import axios from 'axios';

// // // // // // // export default function HotelSearchScreen({ navigation }) {
// // // // // // //   const [query, setQuery] = useState('');
// // // // // // //   const [hotels, setHotels] = useState([]);
// // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // //   // Replace with your Laptop's IP address (e.g., http://192.168.1.5:3000)
// // // // // // //   // Do not use 'localhost' as it won't work on physical devices
// // // // // // //   const BACKEND_URL = "http://10.176.82.30:3000/api/hotels";

// // // // // // //   const searchHotels = async () => {
// // // // // // //     if (!query) return;
// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       const response = await axios.get(BACKEND_URL, {
// // // // // // //         params: { q: query, check_in: '2025-06-01', check_out: '2025-06-05' }
// // // // // // //       });
// // // // // // //       setHotels(response.data.hotels);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Search Error:", error);
// // // // // // //       alert("Make sure your backend is running and URL is correct!");
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const renderHotel = ({ item }) => (
// // // // // // //     <View style={styles.hotelCard}>
// // // // // // //       <Image source={{ uri: item.thumbnail || 'https://via.placeholder.com/150' }} style={styles.hotelImage} />
// // // // // // //       <View style={styles.hotelInfo}>
// // // // // // //         <Text style={styles.hotelName} numberOfLines={1}>{item.name}</Text>
// // // // // // //         <View style={styles.row}>
// // // // // // //           <Ionicons name="star" size={14} color="#FBBF24" />
// // // // // // //           <Text style={styles.ratingText}>{item.rating || 'N/A'} ({item.reviews || 0})</Text>
// // // // // // //         </View>
// // // // // // //         <Text style={styles.priceText}>${item.price} <Text style={styles.perNight}>/ night</Text></Text>
// // // // // // //         <TouchableOpacity style={styles.bookButton}>
// // // // // // //           <Text style={styles.bookButtonText}>View Deal</Text>
// // // // // // //         </TouchableOpacity>
// // // // // // //       </View>
// // // // // // //     </View>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // //       <View style={styles.header}>
// // // // // // //         <TouchableOpacity onPress={() => navigation.goBack()}>
// // // // // // //           <Ionicons name="arrow-back" size={28} color="#FFF" />
// // // // // // //         </TouchableOpacity>
// // // // // // //         <Text style={styles.headerTitle}>Find Hotels</Text>
// // // // // // //         <View style={{ width: 28 }} /> 
// // // // // // //       </View>

// // // // // // //       <View style={styles.searchBox}>
// // // // // // //         <TextInput
// // // // // // //           style={styles.input}
// // // // // // //           placeholder="Where do you want to stay?"
// // // // // // //           placeholderTextColor="#64748B"
// // // // // // //           value={query}
// // // // // // //           onChangeText={setQuery}
// // // // // // //           onSubmitEditing={searchHotels}
// // // // // // //         />
// // // // // // //         <TouchableOpacity style={styles.searchBtn} onPress={searchHotels}>
// // // // // // //           <Ionicons name="search" size={20} color="#FFF" />
// // // // // // //         </TouchableOpacity>
// // // // // // //       </View>

// // // // // // //       {loading ? (
// // // // // // //         <ActivityIndicator size="large" color="#8B5CF6" style={{ marginTop: 50 }} />
// // // // // // //       ) : (
// // // // // // //         <FlatList
// // // // // // //           data={hotels}
// // // // // // //           renderItem={renderHotel}
// // // // // // //           keyExtractor={(item, index) => index.toString()}
// // // // // // //           contentContainerStyle={{ padding: 20 }}
// // // // // // //           ListEmptyComponent={<Text style={styles.emptyText}>Search for a city to see AI-ranked hotels</Text>}
// // // // // // //         />
// // // // // // //       )}
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // }

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // //   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
// // // // // // //   headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
// // // // // // //   searchBox: { flexDirection: 'row', margin: 20, backgroundColor: '#1E293B', borderRadius: 15, padding: 5, alignItems: 'center' },
// // // // // // //   input: { flex: 1, color: '#FFF', paddingHorizontal: 15, height: 50 },
// // // // // // //   searchBtn: { backgroundColor: '#8B5CF6', padding: 12, borderRadius: 12 },
// // // // // // //   hotelCard: { backgroundColor: '#1E293B', borderRadius: 20, marginBottom: 20, overflow: 'hidden', flexDirection: 'row' },
// // // // // // //   hotelImage: { width: 120, height: 120 },
// // // // // // //   hotelInfo: { flex: 1, padding: 12, justifyContent: 'space-between' },
// // // // // // //   hotelName: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
// // // // // // //   row: { flexDirection: 'row', alignItems: 'center' },
// // // // // // //   ratingText: { color: '#94A3B8', fontSize: 12, marginLeft: 5 },
// // // // // // //   priceText: { color: '#10B981', fontSize: 18, fontWeight: 'bold' },
// // // // // // //   perNight: { color: '#64748B', fontSize: 12, fontWeight: 'normal' },
// // // // // // //   bookButton: { backgroundColor: 'rgba(139, 92, 246, 0.2)', paddingVertical: 6, borderRadius: 8, alignItems: 'center' },
// // // // // // //   bookButtonText: { color: '#8B5CF6', fontWeight: 'bold', fontSize: 12 },
// // // // // // //   emptyText: { color: '#64748B', textAlign: 'center', marginTop: 50 }
// // // // // // // });












// // // // // // import React, { useState } from 'react';
// // // // // // import {
// // // // // //   View,
// // // // // //   Text,
// // // // // //   StyleSheet,
// // // // // //   TextInput,
// // // // // //   TouchableOpacity,
// // // // // //   FlatList,
// // // // // //   Image,
// // // // // //   ActivityIndicator,
// // // // // //   SafeAreaView,
// // // // // //   Keyboard,
// // // // // // } from 'react-native';
// // // // // // import { Ionicons } from '@expo/vector-icons';
// // // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // // import axios from 'axios';

// // // // // // export default function HotelSearchScreen({ navigation }) {
// // // // // //   const [city, setCity] = useState('');
// // // // // //   const [hotels, setHotels] = useState([]);
// // // // // //   const [loading, setLoading] = useState(false);

// // // // // //   // Replace with your Computer's IP Address (e.g., 192.168.1.5)
// // // // // //   const API_URL = "http://10.176.82.30:3000/api/hotels";

// // // // // //   const handleSearch = async () => {
// // // // // //     if (!city.trim()) return;
// // // // // //     Keyboard.dismiss();
// // // // // //     setLoading(true);
    
// // // // // //     try {
// // // // // //       const response = await axios.get(API_URL, {
// // // // // //         params: { q: city }
// // // // // //       });
// // // // // //       setHotels(response.data.hotels);
// // // // // //     } catch (error) {
// // // // // //       console.error(error);
// // // // // //       alert("Check if your Node.js server is running at: " + API_URL);
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const renderHotel = ({ item }) => (
// // // // // //     <View style={styles.hotelCard}>
// // // // // //       <Image 
// // // // // //         source={{ uri: item.thumbnail || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400' }} 
// // // // // //         style={styles.hotelImage} 
// // // // // //       />
// // // // // //       <View style={styles.hotelInfo}>
// // // // // //         <Text style={styles.hotelName} numberOfLines={1}>{item.name}</Text>
// // // // // //         <View style={styles.priceRow}>
// // // // // //           <Text style={styles.priceText}>${item.price}</Text>
// // // // // //           <View style={styles.ratingBox}>
// // // // // //             <Ionicons name="star" size={12} color="#FBBF24" />
// // // // // //             <Text style={styles.ratingText}>{item.rating || 'N/A'}</Text>
// // // // // //           </View>
// // // // // //         </View>
// // // // // //         <TouchableOpacity style={styles.viewBtn}>
// // // // // //           <Text style={styles.viewBtnText}>View Details</Text>
// // // // // //         </TouchableOpacity>
// // // // // //       </View>
// // // // // //     </View>
// // // // // //   );

// // // // // //   return (
// // // // // //     <SafeAreaView style={styles.container}>
// // // // // //       <View style={styles.header}>
// // // // // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
// // // // // //           <Ionicons name="chevron-back" size={24} color="#FFF" />
// // // // // //         </TouchableOpacity>
// // // // // //         <Text style={styles.headerTitle}>AI Destination Search</Text>
// // // // // //       </View>

// // // // // //       <View style={styles.inputSection}>
// // // // // //         <Text style={styles.label}>Where are you going?</Text>
// // // // // //         <View style={styles.inputContainer}>
// // // // // //           <Ionicons name="location-sharp" size={20} color="#8B5CF6" style={styles.inputIcon} />
// // // // // //           <TextInput
// // // // // //             style={styles.input}
// // // // // //             placeholder="Enter city or place name..."
// // // // // //             placeholderTextColor="#64748B"
// // // // // //             value={city}
// // // // // //             onChangeText={setCity}
// // // // // //             onSubmitEditing={handleSearch}
// // // // // //           />
// // // // // //           {city.length > 0 && (
// // // // // //             <TouchableOpacity onPress={handleSearch} style={styles.goBtn}>
// // // // // //               <Ionicons name="arrow-forward" size={20} color="#FFF" />
// // // // // //             </TouchableOpacity>
// // // // // //           )}
// // // // // //         </View>
// // // // // //       </View>

// // // // // //       {loading ? (
// // // // // //         <View style={styles.loaderContainer}>
// // // // // //           <ActivityIndicator size="large" color="#8B5CF6" />
// // // // // //           <Text style={styles.loadingText}>Analyzing top stays in {city}...</Text>
// // // // // //         </View>
// // // // // //       ) : (
// // // // // //         <FlatList
// // // // // //           data={hotels}
// // // // // //           renderItem={renderHotel}
// // // // // //           keyExtractor={(item, index) => index.toString()}
// // // // // //           contentContainerStyle={styles.listContent}
// // // // // //           ListEmptyComponent={
// // // // // //             <View style={styles.emptyContainer}>
// // // // // //               <Ionicons name="business-outline" size={60} color="#1E293B" />
// // // // // //               <Text style={styles.emptyText}>Enter a place name above to find luxury stays.</Text>
// // // // // //             </View>
// // // // // //           }
// // // // // //         />
// // // // // //       )}
// // // // // //     </SafeAreaView>
// // // // // //   );
// // // // // // }

// // // // // // const styles = StyleSheet.create({
// // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // //   header: { flexDirection: 'row', alignItems: 'center', padding: 20 },
// // // // // //   backBtn: { width: 40, height: 40, backgroundColor: '#1E293B', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
// // // // // //   headerTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginLeft: 15 },
// // // // // //   inputSection: { paddingHorizontal: 20, marginBottom: 10 },
// // // // // //   label: { color: '#94A3B8', fontSize: 12, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 },
// // // // // //   inputContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', borderRadius: 16, paddingHorizontal: 15, height: 60, borderWidth: 1, borderColor: '#1E293B' },
// // // // // //   inputIcon: { marginRight: 10 },
// // // // // //   input: { flex: 1, color: '#FFF', fontSize: 16 },
// // // // // //   goBtn: { backgroundColor: '#8B5CF6', padding: 8, borderRadius: 10 },
// // // // // //   listContent: { padding: 20 },
// // // // // //   hotelCard: { backgroundColor: '#0F172A', borderRadius: 20, marginBottom: 20, flexDirection: 'row', overflow: 'hidden', borderWidth: 1, borderColor: '#1E293B' },
// // // // // //   hotelImage: { width: 110, height: 110 },
// // // // // //   hotelInfo: { flex: 1, padding: 12, justifyContent: 'space-between' },
// // // // // //   hotelName: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
// // // // // //   priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
// // // // // //   priceText: { color: '#10B981', fontSize: 18, fontWeight: 'bold' },
// // // // // //   ratingBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(251, 191, 36, 0.1)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6 },
// // // // // //   ratingText: { color: '#FBBF24', fontSize: 12, marginLeft: 4, fontWeight: 'bold' },
// // // // // //   viewBtn: { backgroundColor: '#1E293B', paddingVertical: 6, borderRadius: 8, alignItems: 'center' },
// // // // // //   viewBtnText: { color: '#8B5CF6', fontSize: 12, fontWeight: 'bold' },
// // // // // //   loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// // // // // //   loadingText: { color: '#94A3B8', marginTop: 15, fontSize: 14 },
// // // // // //   emptyContainer: { alignItems: 'center', marginTop: 80 },
// // // // // //   emptyText: { color: '#64748B', textAlign: 'center', marginTop: 20, paddingHorizontal: 40 }
// // // // // // });















// // // // // import React, { useState } from 'react';
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   StyleSheet,
// // // // //   TextInput,
// // // // //   TouchableOpacity,
// // // // //   FlatList,
// // // // //   Image,
// // // // //   ActivityIndicator,
// // // // //   Keyboard,
// // // // //   Linking, // 1. Import Linking
// // // // // } from 'react-native';
// // // // // import { SafeAreaView } from 'react-native-safe-area-context'; // Fixed warning
// // // // // import { Ionicons } from '@expo/vector-icons';
// // // // // import axios from 'axios';

// // // // // export default function HotelSearchScreen({ navigation }) {
// // // // //   const [city, setCity] = useState('');
// // // // //   const [hotels, setHotels] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);

// // // // //   const API_URL = "http:// 10.176.82.30:3000/api/hotels";

// // // // //   const handleSearch = async () => {
// // // // //     if (!city.trim()) return;
// // // // //     Keyboard.dismiss();
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const response = await axios.get(API_URL, { params: { q: city } });
// // // // //       setHotels(response.data.hotels);
// // // // //     } catch (error) {
// // // // //       alert("Backend Error: " + error.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // 2. Function to open the URL
// // // // //   const openHotelWebsite = (url) => {
// // // // //     if (url) {
// // // // //       Linking.openURL(url).catch((err) => alert("Couldn't load page", err));
// // // // //     } else {
// // // // //       alert("No website link available for this hotel.");
// // // // //     }
// // // // //   };

// // // // //   const renderHotel = ({ item }) => (
// // // // //     <View style={styles.hotelCard}>
// // // // //       <Image 
// // // // //         source={{ uri: item.thumbnail }} 
// // // // //         style={styles.hotelImage} 
// // // // //       />
// // // // //       <View style={styles.hotelInfo}>
// // // // //         <Text style={styles.hotelName} numberOfLines={1}>{item.name}</Text>
// // // // //         <View style={styles.priceRow}>
// // // // //           <Text style={styles.priceText}>${item.price}</Text>
// // // // //           <View style={styles.ratingBox}>
// // // // //             <Ionicons name="star" size={12} color="#FBBF24" />
// // // // //             <Text style={styles.ratingText}>{item.rating}</Text>
// // // // //           </View>
// // // // //         </View>
        
// // // // //         {/* 3. Updated Button with onPress */}
// // // // //         <TouchableOpacity 
// // // // //           style={styles.viewBtn} 
// // // // //           onPress={() => openHotelWebsite(item.link)}
// // // // //         >
// // // // //           <Text style={styles.viewBtnText}>View Website</Text>
// // // // //         </TouchableOpacity>
// // // // //       </View>
// // // // //     </View>
// // // // //   );

// // // // //   return (
// // // // //     <SafeAreaView style={styles.container}>
// // // // //       <View style={styles.header}>
// // // // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
// // // // //           <Ionicons name="chevron-back" size={24} color="#FFF" />
// // // // //         </TouchableOpacity>
// // // // //         <Text style={styles.headerTitle}>Find Best Stays</Text>
// // // // //       </View>

// // // // //       <View style={styles.inputSection}>
// // // // //         <View style={styles.inputContainer}>
// // // // //           <TextInput
// // // // //             style={styles.input}
// // // // //             placeholder="Search City..."
// // // // //             placeholderTextColor="#64748B"
// // // // //             value={city}
// // // // //             onChangeText={setCity}
// // // // //             onSubmitEditing={handleSearch}
// // // // //           />
// // // // //           <TouchableOpacity onPress={handleSearch} style={styles.goBtn}>
// // // // //             <Ionicons name="search" size={20} color="#FFF" />
// // // // //           </TouchableOpacity>
// // // // //         </View>
// // // // //       </View>

// // // // //       {loading ? (
// // // // //         <ActivityIndicator size="large" color="#8B5CF6" style={{marginTop: 50}} />
// // // // //       ) : (
// // // // //         <FlatList
// // // // //           data={hotels}
// // // // //           renderItem={renderHotel}
// // // // //           keyExtractor={(item, index) => index.toString()}
// // // // //           contentContainerStyle={{ padding: 20 }}
// // // // //         />
// // // // //       )}
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // }

// // // // // // ... keep previous styles
















// // // // import React, { useState } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   StyleSheet,
// // // //   TextInput,
// // // //   TouchableOpacity,
// // // //   FlatList,
// // // //   Image,
// // // //   ActivityIndicator,
// // // //   Keyboard,
// // // //   Linking,
// // // //   Dimensions,
// // // // } from 'react-native';
// // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // import { Ionicons } from '@expo/vector-icons';
// // // // import axios from 'axios';

// // // // const { width } = Dimensions.get('window');

// // // // export default function HotelSearchScreen({ navigation }) {
// // // //   const [city, setCity] = useState('');
// // // //   const [hotels, setHotels] = useState([]);
// // // //   const [loading, setLoading] = useState(false);

// // // //   // Use your Machine IP (Find via 'ipconfig' in CMD)
// // // //   const API_URL = "http://10.176.82.30:3000/api/hotels"; 

// // // //   const handleSearch = async () => {
// // // //     if (!city.trim()) return;
// // // //     Keyboard.dismiss();
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await axios.get(API_URL, { params: { q: city } });
// // // //       setHotels(response.data.hotels || []);
// // // //     } catch (error) {
// // // //       console.error("Frontend Axios Error:", error);
// // // //       alert("Backend Error: " + (error.response?.data?.details || error.message));
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const openHotelWebsite = (url) => {
// // // //     if (url) {
// // // //       Linking.openURL(url).catch(() => alert("Could not open the browser."));
// // // //     } else {
// // // //       alert("No direct link available for this property.");
// // // //     }
// // // //   };

// // // //   const renderHotel = ({ item }) => (
// // // //     <View style={styles.hotelCard}>
// // // //       <Image 
// // // //         source={{ uri: item.thumbnail }} 
// // // //         style={styles.hotelImage} 
// // // //       />
// // // //       <View style={styles.hotelInfo}>
// // // //         <Text style={styles.hotelName} numberOfLines={1}>{item.name}</Text>
        
// // // //         <View style={styles.detailsRow}>
// // // //           <Text style={styles.priceText}>${item.price}</Text>
// // // //           <View style={styles.ratingBox}>
// // // //             <Ionicons name="star" size={12} color="#FBBF24" />
// // // //             <Text style={styles.ratingText}>{item.rating}</Text>
// // // //           </View>
// // // //         </View>

// // // //         <TouchableOpacity 
// // // //           style={styles.viewBtn} 
// // // //           onPress={() => openHotelWebsite(item.link)}
// // // //           activeOpacity={0.7}
// // // //         >
// // // //           <Text style={styles.viewBtnText}>View Website</Text>
// // // //           <Ionicons name="open-outline" size={14} color="#8B5CF6" style={{marginLeft: 5}} />
// // // //         </TouchableOpacity>
// // // //       </View>
// // // //     </View>
// // // //   );

// // // //   return (
// // // //     <SafeAreaView style={styles.container}>
// // // //       {/* Header */}
// // // //       <View style={styles.header}>
// // // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
// // // //           <Ionicons name="chevron-back" size={24} color="#FFF" />
// // // //         </TouchableOpacity>
// // // //         <Text style={styles.headerTitle}>AI Hotel Finder</Text>
// // // //       </View>

// // // //       {/* Search Input */}
// // // //       <View style={styles.inputSection}>
// // // //         <View style={styles.inputContainer}>
// // // //           <Ionicons name="location-outline" size={20} color="#94A3B8" />
// // // //           <TextInput
// // // //             style={styles.input}
// // // //             placeholder="Enter destination..."
// // // //             placeholderTextColor="#64748B"
// // // //             value={city}
// // // //             onChangeText={setCity}
// // // //             onSubmitEditing={handleSearch}
// // // //           />
// // // //           <TouchableOpacity onPress={handleSearch} style={styles.searchIconBtn}>
// // // //             <Ionicons name="search" size={20} color="#8B5CF6" />
// // // //           </TouchableOpacity>
// // // //         </View>
// // // //       </View>

// // // //       {/* Results */}
// // // //       {loading ? (
// // // //         <View style={styles.center}>
// // // //           <ActivityIndicator size="large" color="#8B5CF6" />
// // // //           <Text style={styles.loadingText}>Sourcing best rates...</Text>
// // // //         </View>
// // // //       ) : (
// // // //         <FlatList
// // // //           data={hotels}
// // // //           renderItem={renderHotel}
// // // //           keyExtractor={(item, index) => index.toString()}
// // // //           contentContainerStyle={styles.listContainer}
// // // //           ListEmptyComponent={
// // // //             <Text style={styles.emptyText}>Type a city above to start your search.</Text>
// // // //           }
// // // //         />
// // // //       )}
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // //   header: { flexDirection: 'row', alignItems: 'center', padding: 20 },
// // // //   backBtn: { padding: 8, backgroundColor: '#1E293B', borderRadius: 12 },
// // // //   headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold', marginLeft: 15 },
// // // //   inputSection: { paddingHorizontal: 20, marginBottom: 10 },
// // // //   inputContainer: { 
// // // //     flexDirection: 'row', 
// // // //     alignItems: 'center', 
// // // //     backgroundColor: '#0F172A', 
// // // //     borderRadius: 16, 
// // // //     paddingHorizontal: 15, 
// // // //     height: 55, 
// // // //     borderWidth: 1, 
// // // //     borderColor: '#1E293B' 
// // // //   },
// // // //   input: { flex: 1, color: '#FFF', fontSize: 16, marginLeft: 10 },
// // // //   searchIconBtn: { padding: 5 },
// // // //   listContainer: { padding: 20 },
// // // //   hotelCard: { 
// // // //     backgroundColor: '#0F172A', 
// // // //     borderRadius: 20, 
// // // //     marginBottom: 20, 
// // // //     flexDirection: 'row', 
// // // //     overflow: 'hidden', 
// // // //     borderWidth: 1, 
// // // //     borderColor: '#1E293B' 
// // // //   },
// // // //   hotelImage: { width: 110, height: 110 },
// // // //   hotelInfo: { flex: 1, padding: 12, justifyContent: 'space-between' },
// // // //   hotelName: { color: '#FFF', fontWeight: 'bold', fontSize: 15 },
// // // //   detailsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
// // // //   priceText: { color: '#10B981', fontSize: 18, fontWeight: 'bold' },
// // // //   ratingBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(251, 191, 36, 0.1)', padding: 4, borderRadius: 6 },
// // // //   ratingText: { color: '#FBBF24', fontSize: 12, marginLeft: 3, fontWeight: 'bold' },
// // // //   viewBtn: { 
// // // //     flexDirection: 'row',
// // // //     backgroundColor: 'rgba(139, 92, 246, 0.1)', 
// // // //     paddingVertical: 8, 
// // // //     borderRadius: 10, 
// // // //     alignItems: 'center', 
// // // //     justifyContent: 'center' 
// // // //   },
// // // //   viewBtnText: { color: '#8B5CF6', fontSize: 12, fontWeight: 'bold' },
// // // //   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// // // //   loadingText: { color: '#94A3B8', marginTop: 10 },
// // // //   emptyText: { color: '#64748B', textAlign: 'center', marginTop: 50 },
// // // // });





// // // import React, { useState } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   FlatList,
// // //   Image,
// // //   ActivityIndicator,
// // //   Keyboard,
// // //   Linking,
// // //   Dimensions,
// // // } from 'react-native';
// // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // import { Ionicons } from '@expo/vector-icons';
// // // import axios from 'axios';

// // // const { width } = Dimensions.get('window');

// // // export default function HotelSearchScreen({ navigation }) {
// // //   const [city, setCity] = useState('');
// // //   const [hotels, setHotels] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   // Replace with your Laptop's IP Address (e.g., 192.168.x.x)
// // //   // If using Android Emulator, use: http://10.0.2.2:3000/api/hotels
// // //   const API_URL = "http://10.176.82.30:3000/api/hotels"; 

// // //   const handleSearch = async () => {
// // //     if (!city.trim()) return;
// // //     Keyboard.dismiss();
// // //     setLoading(true);
// // //     try {
// // //       const response = await axios.get(API_URL, { 
// // //         params: { q: city, vibe: "popular" } 
// // //       });
      
// // //       if (response.data.success) {
// // //         setHotels(response.data.hotels);
// // //       } else {
// // //         alert("No hotels found for this city.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Frontend Axios Error:", error);
// // //       alert("Backend Error: Check if server is running at " + API_URL);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const openHotelWebsite = (url) => {
// // //     if (url) {
// // //       Linking.openURL(url).catch(() => alert("Could not open the browser."));
// // //     } else {
// // //       alert("No direct link available for this property.");
// // //     }
// // //   };

// // //   const renderHotel = ({ item }) => (
// // //     <View style={styles.hotelCard}>
// // //       <Image 
// // //         source={{ uri: item.thumbnail || "https://via.placeholder.com/300" }} 
// // //         style={styles.hotelImage} 
// // //         resizeMode="cover"
// // //       />
// // //       <View style={styles.hotelInfo}>
// // //         <View>
// // //           <Text style={styles.hotelName} numberOfLines={1}>{item.name}</Text>
// // //           <View style={styles.detailsRow}>
// // //             {/* Displaying INR symbol as per backend config */}
// // //             <Text style={styles.priceText}>₹{item.price}</Text>
// // //             <View style={styles.ratingBox}>
// // //               <Ionicons name="star" size={12} color="#FBBF24" />
// // //               <Text style={styles.ratingText}>{item.rating}</Text>
// // //             </View>
// // //           </View>
// // //         </View>

// // //         <TouchableOpacity 
// // //           style={styles.viewBtn} 
// // //           onPress={() => openHotelWebsite(item.link)}
// // //           activeOpacity={0.7}
// // //         >
// // //           <Text style={styles.viewBtnText}>Book Now</Text>
// // //           <Ionicons name="chevron-forward" size={14} color="#8B5CF6" />
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );

// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       {/* Header */}
// // //       <View style={styles.header}>
// // //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
// // //           <Ionicons name="chevron-back" size={24} color="#FFF" />
// // //         </TouchableOpacity>
// // //         <Text style={styles.headerTitle}>Find Your Stay</Text>
// // //       </View>

// // //       {/* Search Input */}
// // //       <View style={styles.inputSection}>
// // //         <View style={styles.inputContainer}>
// // //           <Ionicons name="location" size={20} color="#8B5CF6" />
// // //           <TextInput
// // //             style={styles.input}
// // //             placeholder="Where are you going?"
// // //             placeholderTextColor="#64748B"
// // //             value={city}
// // //             onChangeText={setCity}
// // //             onSubmitEditing={handleSearch}
// // //           />
// // //           {city.length > 0 && (
// // //              <TouchableOpacity onPress={() => setCity('')}>
// // //                 <Ionicons name="close-circle" size={20} color="#475569" />
// // //              </TouchableOpacity>
// // //           )}
// // //         </View>
        
// // //         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
// // //             <Text style={styles.searchButtonText}>Search Hotels</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       {/* Results */}
// // //       {loading ? (
// // //         <View style={styles.center}>
// // //           <ActivityIndicator size="large" color="#8B5CF6" />
// // //           <Text style={styles.loadingText}>Searching real-time prices...</Text>
// // //         </View>
// // //       ) : (
// // //         <FlatList
// // //           data={hotels}
// // //           renderItem={renderHotel}
// // //           keyExtractor={(item, index) => index.toString()}
// // //           contentContainerStyle={styles.listContainer}
// // //           showsVerticalScrollIndicator={false}
// // //           ListEmptyComponent={
// // //             <View style={styles.emptyContainer}>
// // //                 <Ionicons name="bed-outline" size={60} color="#1E293B" />
// // //                 <Text style={styles.emptyText}>Enter a destination to see available hotels for your trip.</Text>
// // //             </View>
// // //           }
// // //         />
// // //       )}
// // //     </SafeAreaView>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { flex: 1, backgroundColor: '#020617' },
// // //   header: { flexDirection: 'row', alignItems: 'center', padding: 20 },
// // //   backBtn: { padding: 8, backgroundColor: '#1E293B', borderRadius: 12 },
// // //   headerTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginLeft: 15 },
  
// // //   inputSection: { paddingHorizontal: 20, marginBottom: 15 },
// // //   inputContainer: { 
// // //     flexDirection: 'row', 
// // //     alignItems: 'center', 
// // //     backgroundColor: '#0F172A', 
// // //     borderRadius: 16, 
// // //     paddingHorizontal: 15, 
// // //     height: 55, 
// // //     borderWidth: 1, 
// // //     borderColor: '#1E293B' 
// // //   },
// // //   input: { flex: 1, color: '#FFF', fontSize: 16, marginLeft: 10 },
// // //   searchButton: {
// // //     backgroundColor: '#8B5CF6',
// // //     borderRadius: 16,
// // //     height: 50,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginTop: 12
// // //   },
// // //   searchButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },

// // //   listContainer: { padding: 20, paddingBottom: 100 },
// // //   hotelCard: { 
// // //     backgroundColor: '#0F172A', 
// // //     borderRadius: 20, 
// // //     marginBottom: 16, 
// // //     flexDirection: 'row', 
// // //     overflow: 'hidden', 
// // //     borderWidth: 1, 
// // //     borderColor: '#1E293B',
// // //     elevation: 5,
// // //     shadowColor: '#000',
// // //     shadowOffset: { width: 0, height: 2 },
// // //     shadowOpacity: 0.3,
// // //     shadowRadius: 4
// // //   },
// // //   hotelImage: { width: 120, height: 120 },
// // //   hotelInfo: { flex: 1, padding: 12, justifyContent: 'space-between' },
// // //   hotelName: { color: '#FFF', fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
// // //   detailsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
// // //   priceText: { color: '#10B981', fontSize: 18, fontWeight: '900' },
// // //   ratingBox: { 
// // //     flexDirection: 'row', 
// // //     alignItems: 'center', 
// // //     backgroundColor: 'rgba(251, 191, 36, 0.1)', 
// // //     paddingHorizontal: 6, 
// // //     paddingVertical: 2, 
// // //     borderRadius: 6 
// // //   },
// // //   ratingText: { color: '#FBBF24', fontSize: 12, marginLeft: 3, fontWeight: 'bold' },
  
// // //   viewBtn: { 
// // //     flexDirection: 'row',
// // //     backgroundColor: 'rgba(139, 92, 246, 0.1)', 
// // //     paddingVertical: 6, 
// // //     borderRadius: 8, 
// // //     alignItems: 'center', 
// // //     justifyContent: 'center',
// // //     marginTop: 8
// // //   },
// // //   viewBtnText: { color: '#8B5CF6', fontSize: 13, fontWeight: 'bold', marginRight: 4 },
  
// // //   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
// // //   loadingText: { color: '#94A3B8', marginTop: 15, fontSize: 14 },
// // //   emptyContainer: { flex: 1, alignItems: 'center', marginTop: 80, paddingHorizontal: 40 },
// // //   emptyText: { color: '#64748B', textAlign: 'center', marginTop: 15, lineHeight: 22 },
// // // });





// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, ActivityIndicator, Keyboard, Linking } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { Ionicons } from '@expo/vector-icons';
// // import axios from 'axios';

// // export default function HotelSearchScreen({ navigation }) {
// //   const [city, setCity] = useState('');
// //   const [hotels, setHotels] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   // Use your Machine's Local IP
// //   const API_URL = "http://10.176.82.30:3000/api/hotels"; 

// //   const handleSearch = async () => {
// //     if (!city.trim()) return;
// //     Keyboard.dismiss();
// //     setLoading(true);
// //     try {
// //       const response = await axios.get(API_URL, { params: { q: city } });
// //       if (response.data.success) {
// //         setHotels(response.data.hotels);
// //       }
// //     } catch (error) {
// //       alert("Connect to the same Wi-Fi as your server.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const renderHotel = ({ item }) => (
// //     <View style={styles.hotelCard}>
// //       <Image source={{ uri: item.thumbnail }} style={styles.hotelImage} />
// //       <View style={styles.hotelInfo}>
// //         <Text style={styles.hotelName} numberOfLines={1}>{item.name}</Text>
// //         <View style={styles.detailsRow}>
// //           <Text style={styles.priceText}>₹{item.price}</Text>
// //           <View style={styles.ratingBox}>
// //             <Ionicons name="star" size={12} color="#FBBF24" />
// //             <Text style={styles.ratingText}>{item.rating}</Text>
// //           </View>
// //         </View>
// //         <TouchableOpacity style={styles.viewBtn} onPress={() => Linking.openURL(item.link)}>
// //           <Text style={styles.viewBtnText}>Book Now</Text>
// //           <Ionicons name="chevron-forward" size={14} color="#8B5CF6" />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
// //           <Ionicons name="chevron-back" size={24} color="#FFF" />
// //         </TouchableOpacity>
// //         <Text style={styles.headerTitle}>Find Your Stay</Text>
// //       </View>

// //       <View style={styles.inputSection}>
// //         <View style={styles.inputContainer}>
// //           <Ionicons name="location" size={20} color="#8B5CF6" />
// //           <TextInput 
// //             style={styles.input} 
// //             placeholder="Where are you going?" 
// //             placeholderTextColor="#64748B"
// //             value={city}
// //             onChangeText={setCity}
// //             onSubmitEditing={handleSearch}
// //           />
// //         </View>
// //         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
// //           <Text style={styles.searchButtonText}>Search Hotels</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {loading ? (
// //         <ActivityIndicator size="large" color="#8B5CF6" style={{ marginTop: 50 }} />
// //       ) : (
// //         <FlatList
// //           data={hotels}
// //           renderItem={renderHotel}
// //           keyExtractor={(item, index) => index.toString()}
// //           contentContainerStyle={styles.listContainer}
// //         />
// //       )}
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#020617' },
// //   header: { flexDirection: 'row', alignItems: 'center', padding: 20 },
// //   backBtn: { padding: 8, backgroundColor: '#1E293B', borderRadius: 12 },
// //   headerTitle: { color: '#FFF', fontSize: 22, fontWeight: 'bold', marginLeft: 15 },
// //   inputSection: { paddingHorizontal: 20, marginBottom: 15 },
// //   inputContainer: { 
// //     flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', 
// //     borderRadius: 16, paddingHorizontal: 15, height: 55, borderWidth: 1, borderColor: '#1E293B' 
// //   },
// //   input: { flex: 1, color: '#FFF', fontSize: 16, marginLeft: 10 },
// //   searchButton: { backgroundColor: '#8B5CF6', borderRadius: 16, height: 50, justifyContent: 'center', alignItems: 'center', marginTop: 12 },
// //   searchButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
// //   listContainer: { padding: 20 },
// //   hotelCard: { backgroundColor: '#0F172A', borderRadius: 20, marginBottom: 16, flexDirection: 'row', overflow: 'hidden', borderWidth: 1, borderColor: '#1E293B' },
// //   hotelImage: { width: 120, height: 120 },
// //   hotelInfo: { flex: 1, padding: 12, justifyContent: 'space-between' },
// //   hotelName: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
// //   detailsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
// //   priceText: { color: '#10B981', fontSize: 18, fontWeight: '900' },
// //   ratingBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(251, 191, 36, 0.1)', paddingHorizontal: 6, borderRadius: 6 },
// //   ratingText: { color: '#FBBF24', fontSize: 12, marginLeft: 3, fontWeight: 'bold' },
// //   viewBtn: { flexDirection: 'row', backgroundColor: 'rgba(139, 92, 246, 0.1)', paddingVertical: 6, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
// //   viewBtnText: { color: '#8B5CF6', fontSize: 13, fontWeight: 'bold', marginRight: 4 },
// // });



// import React, { useEffect, useRef, useState } from 'react';
// import {
//   View, Text, StyleSheet, TextInput, TouchableOpacity,
//   FlatList, Image, Keyboard, Linking,
//   Animated, Dimensions, ScrollView, StatusBar,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import axios from 'axios';

// const { width } = Dimensions.get('window');

// /* ═══ Obsidian Theme Tokens (matches HomeScreen) ════ */
// const T = {
//   bg:      '#050505',
//   surf:    '#0C0C0C',
//   card:    '#131313',
//   card2:   '#1A1A1A',
//   border:  '#242424',
//   border2: '#303030',
//   mint:    '#FFFFFF',
//   mintL:   '#F0F0F0',
//   mintD:   '#C4C4C4',
//   purple:  '#909090',
//   pink:    '#505050',
//   gold:    '#E8E8E8',
//   t1:      '#FFFFFF',
//   t2:      '#B0B0B0',
//   t3:      '#4A4A4A',
// };

// const API_URL = 'http://10.88.222.30:3000/api/hotels';

// /* ═══ Featured Destinations ════════════════════════ */
// const featured = [
//   { id:'f1', city:'Goa',      emoji:'🏖️', hotels:'240+', from:'₹1,200' },
//   { id:'f2', city:'Mumbai',   emoji:'🏙️', hotels:'580+', from:'₹2,500' },
//   { id:'f3', city:'Jaipur',   emoji:'🏰', hotels:'310+', from:'₹800'   },
//   { id:'f4', city:'Manali',   emoji:'🏔️', hotels:'180+', from:'₹1,500' },
//   { id:'f5', city:'Varanasi', emoji:'🕌', hotels:'120+', from:'₹900'   },
// ];

// /* ═══ Shimmer ═══════════════════════════════════════ */
// const Shimmer = ({ w, h, br = 12 }) => {
//   const a = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     Animated.loop(Animated.timing(a, { toValue: 1, duration: 1300, useNativeDriver: true })).start();
//   }, []);
//   const tx = a.interpolate({ inputRange: [0, 1], outputRange: [-w, w] });
//   return (
//     <View style={{ width: w, height: h, borderRadius: br, backgroundColor: '#1A1A1A', overflow: 'hidden' }}>
//       <Animated.View style={{ flex: 1, transform: [{ translateX: tx }] }}>
//         <LinearGradient
//           colors={['transparent', 'rgba(255,255,255,0.07)', 'transparent']}
//           start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
//           style={StyleSheet.absoluteFill}
//         />
//       </Animated.View>
//     </View>
//   );
// };

// /* ═══ Hotel Card — original layout with Obsidian theme */
// const HotelCard = ({ item, index }) => {
//   const op = useRef(new Animated.Value(0)).current;
//   const sl = useRef(new Animated.Value(40)).current;
//   useEffect(() => {
//     Animated.sequence([
//       Animated.delay(index * 80),
//       Animated.parallel([
//         Animated.timing(op, { toValue: 1, duration: 320, useNativeDriver: true }),
//         Animated.spring(sl, { toValue: 0, friction: 8, tension: 60, useNativeDriver: true }),
//       ]),
//     ]).start();
//   }, []);

//   return (
//     <Animated.View style={{ opacity: op, transform: [{ translateY: sl }] }}>
//       <View style={styles.hotelCard}>
//         <Image source={{ uri: item.thumbnail }} style={styles.hotelImage} />
//         <View style={styles.hotelInfo}>
//           <Text style={styles.hotelName} numberOfLines={1}>{item.name}</Text>
//           <View style={styles.detailsRow}>
//             <Text style={styles.priceText}>{item.price ? `₹${item.price}` : 'On request'}</Text>
//             {item.rating ? (
//               <View style={styles.ratingBox}>
//                 <Ionicons name="star" size={12} color="#FFD700" />
//                 <Text style={styles.ratingText}> {item.rating}</Text>
//               </View>
//             ) : null}
//           </View>
//           <TouchableOpacity style={styles.viewBtn} onPress={() => Linking.openURL(item.link)}>
//             <LinearGradient
//               colors={[T.mint, T.mintD]}
//               start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
//               style={styles.viewBtnG}
//             >
//               <Text style={styles.viewBtnText}>Book Now</Text>
//               <Ionicons name="chevron-forward" size={14} color={T.bg} />
//             </LinearGradient>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Animated.View>
//   );
// };

// /* ═══ Featured City Chip ════════════════════════════ */
// const FeaturedChip = ({ item, onPress }) => (
//   <TouchableOpacity onPress={onPress} activeOpacity={0.78}>
//     <View style={styles.featChip}>
//       <Text style={styles.featEmoji}>{item.emoji}</Text>
//       <Text style={styles.featCity}>{item.city}</Text>
//       <Text style={styles.featFrom}>from {item.from}</Text>
//       <View style={styles.featBadge}>
//         <Text style={styles.featBadgeTxt}>{item.hotels}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// );

// /* ═══════════════════════════════════════════════════
//    MAIN SCREEN
// ═══════════════════════════════════════════════════ */
// export default function HotelSearchScreen({ navigation }) {
//   const [city,    setCity]    = useState('');
//   const [hotels,  setHotels]  = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [focused, setFocused] = useState(false);

//   const fade    = useRef(new Animated.Value(0)).current;
//   const slideY  = useRef(new Animated.Value(30)).current;
//   const pulse   = useRef(new Animated.Value(0)).current;
//   const float   = useRef(new Animated.Value(0)).current;
//   const inputRef = useRef(null);

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fade,   { toValue: 1, duration: 700, useNativeDriver: true }),
//       Animated.spring(slideY, { toValue: 0, friction: 9, tension: 55, useNativeDriver: true }),
//     ]).start();
//     Animated.loop(Animated.sequence([
//       Animated.timing(pulse, { toValue: 1, duration: 2000, useNativeDriver: true }),
//       Animated.timing(pulse, { toValue: 0, duration: 2000, useNativeDriver: true }),
//     ])).start();
//     Animated.loop(Animated.sequence([
//       Animated.timing(float, { toValue: 1, duration: 4500, useNativeDriver: true }),
//       Animated.timing(float, { toValue: 0, duration: 4500, useNativeDriver: true }),
//     ])).start();
//   }, []);

//   const handleSearch = async (searchCity) => {
//     const q = searchCity || city;
//     if (!q.trim()) return;
//     if (searchCity) setCity(searchCity);
//     Keyboard.dismiss();
//     setLoading(true); setHotels([]);
//     try {
//       const r = await axios.get(API_URL, { params: { q } });
//       if (r.data.success) setHotels(r.data.hotels);
//     } catch {
//       alert('Connect to the same Wi-Fi as your server.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const pulseS = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.08] });
//   const floatY = float.interpolate({ inputRange: [0, 1], outputRange: [0, -10] });

//   return (
//     <SafeAreaView style={styles.root}>
//       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

//       {/* ── BG ───────────────────────────────────── */}
//       <View style={StyleSheet.absoluteFill} pointerEvents="none">
//         <View style={[StyleSheet.absoluteFill, { backgroundColor: T.bg }]} />
//         <Animated.View style={[styles.blob, { width: 280, height: 280, top: -80, right: -80,
//           backgroundColor: 'rgba(255,255,255,0.03)', transform: [{ translateY: floatY }] }]} />
//         <Animated.View style={[styles.blob, { width: 200, height: 200, bottom: 200, left: -60,
//           backgroundColor: 'rgba(255,255,255,0.02)', transform: [{ translateY: floatY }] }]} />
//         <Animated.View style={[styles.decRing, { width: 320, height: 320, borderRadius: 160,
//           top: -100, right: -120, borderColor: 'rgba(255,255,255,0.04)',
//           transform: [{ translateY: floatY }] }]} />
//         <Animated.View style={{ position: 'absolute', bottom: 80, right: 20, opacity: 0.04,
//           transform: [{ translateY: floatY }] }}>
//           <MaterialCommunityIcons name="office-building" size={120} color="#FFF" />
//         </Animated.View>
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

//         {/* ── HEADER ──────────────────────────────── */}
//         <Animated.View style={[styles.header, { opacity: fade, transform: [{ translateY: slideY }] }]}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
//             <Ionicons name="chevron-back" size={22} color={T.t1} />
//           </TouchableOpacity>
//           <View style={styles.headerMid}>
//             <Text style={styles.headerSub}>DISCOVER</Text>
//             <Text style={styles.headerTitle}>Find Your Stay</Text>
//           </View>
//           <Animated.View style={[styles.headerIcon, { transform: [{ scale: pulseS }] }]}>
//             <MaterialCommunityIcons name="office-building-outline" size={22} color={T.t1} />
//           </Animated.View>
//         </Animated.View>

//         {/* ── STATS BAR ───────────────────────────── */}
//         <Animated.View style={[styles.statsBar, { opacity: fade, transform: [{ translateY: slideY }] }]}>
//           {[
//             { icon: 'bed-outline',      val: '10K+', lbl: 'Hotels'     },
//             { icon: 'star-outline',     val: '4.8★', lbl: 'Avg Rating' },
//             { icon: 'pricetag-outline', val: '₹800+',lbl: 'Starting'   },
//           ].map((s, i) => (
//             <View key={i} style={styles.statItem}>
//               <Ionicons name={s.icon} size={16} color={T.t2} />
//               <Text style={styles.statVal}>{s.val}</Text>
//               <Text style={styles.statLbl}>{s.lbl}</Text>
//             </View>
//           ))}
//         </Animated.View>

//         {/* ── SEARCH ──────────────────────────────── */}
//         <Animated.View style={[styles.searchSection, { opacity: fade, transform: [{ translateY: slideY }] }]}>
//           <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()}
//             style={[styles.searchBox, focused && styles.searchBoxFocused]}>
//             <Ionicons name="search-outline" size={18} color={focused ? T.mint : T.t3} style={{ marginRight: 10 }} />
//             <TextInput
//               ref={inputRef}
//               style={styles.searchInput}
//               placeholder="City, hotel or destination…"
//               placeholderTextColor={T.t3}
//               value={city}
//               onChangeText={setCity}
//               onSubmitEditing={() => handleSearch()}
//               onFocus={() => setFocused(true)}
//               onBlur={() => setFocused(false)}
//               returnKeyType="search"
//               blurOnSubmit={false}
//               autoCorrect={false}
//               autoCapitalize="none"
//               underlineColorAndroid="transparent"
//             />
//             {city.length > 0 && (
//               <TouchableOpacity onPress={() => { setCity(''); setHotels([]); }}>
//                 <Ionicons name="close-circle" size={18} color={T.t3} />
//               </TouchableOpacity>
//             )}
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleSearch()} style={styles.searchBtn}>
//             <LinearGradient colors={[T.mint, T.mintD]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.searchBtnG}>
//               <Ionicons name="search" size={18} color={T.bg} />
//               <Text style={styles.searchBtnTxt}>Search Hotels</Text>
//             </LinearGradient>
//           </TouchableOpacity>
//         </Animated.View>

//         {/* ── TONIGHT'S PICK BANNER ───────────────── */}
//         {hotels.length === 0 && !loading && (
//           <Animated.View style={{ opacity: fade, marginHorizontal: 20, marginBottom: 24 }}>
//             <LinearGradient colors={['#1A1A1A', '#242424']} style={styles.pickBanner}>
//               <LinearGradient colors={[T.mint, T.mintD, 'transparent']}
//                 start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.pickStrip} />
//               <View style={styles.pickLeft}>
//                 <View style={styles.pickBadge}>
//                   <Ionicons name="moon-outline" size={9} color={T.t2} />
//                   <Text style={styles.pickBadgeTxt}> TONIGHT'S PICK</Text>
//                 </View>
//                 <Text style={styles.pickTitle}>The Leela Palace</Text>
//                 <Text style={styles.pickSub}>New Delhi · 5★ Luxury</Text>
//                 <View style={styles.pickTagRow}>
//                   {['Pool', 'Spa', 'Dining'].map(t => (
//                     <View key={t} style={styles.pickTag}>
//                       <Text style={styles.pickTagTxt}>{t}</Text>
//                     </View>
//                   ))}
//                 </View>
//                 <Text style={styles.pickPrice}>from <Text style={styles.pickPriceVal}>₹12,000</Text>/night</Text>
//               </View>
//               <Text style={styles.pickEmoji}>🏛️</Text>
//               <View style={styles.pickCircle1} />
//               <View style={styles.pickCircle2} />
//             </LinearGradient>
//           </Animated.View>
//         )}

//         {/* ── FEATURED DESTINATIONS ───────────────── */}
//         {hotels.length === 0 && !loading && (
//           <Animated.View style={{ opacity: fade, marginBottom: 24 }}>
//             <View style={styles.sectionRow}>
//               <Text style={styles.sectionTitle}>Popular Destinations</Text>
//               <Text style={styles.sectionSub}>✦ Tap to explore</Text>
//             </View>
//             <FlatList
//               data={featured} horizontal
//               showsHorizontalScrollIndicator={false}
//               keyExtractor={i => i.id}
//               contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
//               renderItem={({ item }) => <FeaturedChip item={item} onPress={() => handleSearch(item.city)} />}
//             />
//           </Animated.View>
//         )}

//         {/* ── RESULTS HEADER ──────────────────────── */}
//         {(hotels.length > 0 || loading) && (
//           <View style={styles.resultsHeader}>
//             <View style={styles.resultsLeft}>
//               <Animated.View style={[styles.liveDot, { transform: [{ scale: pulseS }] }]} />
//               <Text style={styles.resultsTitle}> Results for "{city}"</Text>
//             </View>
//             <Text style={styles.resultsCount}>{loading ? '…' : `${hotels.length} hotels`}</Text>
//           </View>
//         )}

//         {/* ── SHIMMER / RESULTS ───────────────────── */}
//         {loading ? (
//           <View style={{ paddingHorizontal: 20, gap: 14, marginBottom: 40 }}>
//             {[1, 2, 3].map(k => (
//               <View key={k} style={[styles.hotelCard, { overflow: 'hidden' }]}>
//                 <Shimmer w={120} h={120} br={0} />
//                 <View style={{ flex: 1, padding: 12, gap: 10 }}>
//                   <Shimmer w={width * 0.4} h={14} br={7} />
//                   <Shimmer w={width * 0.28} h={18} br={7} />
//                   <Shimmer w={width * 0.35} h={32} br={10} />
//                 </View>
//               </View>
//             ))}
//           </View>
//         ) : (
//           <View style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
//             {hotels.map((item, index) => (
//               <HotelCard key={index} item={item} index={index} />
//             ))}
//           </View>
//         )}

//         {/* ── EMPTY STATE ─────────────────────────── */}
//         {!loading && hotels.length === 0 && city.length > 0 && (
//           <Animated.View style={[styles.emptyBox, { opacity: fade }]}>
//             <Text style={styles.emptyEmoji}>🏨</Text>
//             <Text style={styles.emptyTitle}>No hotels found</Text>
//             <Text style={styles.emptySub}>Try searching a different city</Text>
//           </Animated.View>
//         )}

//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// /* ═══ Styles ════════════════════════════════════════ */
// const styles = StyleSheet.create({
//   root:    { flex: 1, backgroundColor: T.bg },
//   blob:    { position: 'absolute', borderRadius: 9999 },
//   decRing: { position: 'absolute', borderWidth: 1 },

//   // Header
//   header:      { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 10 },
//   backBtn:     { width: 40, height: 40, borderRadius: 12, backgroundColor: T.card, justifyContent: 'center',
//                  alignItems: 'center', borderWidth: 1, borderColor: T.border,
//                  shadowColor: '#FFF', shadowOpacity: 0.06, shadowRadius: 8, elevation: 3 },
//   headerMid:   { flex: 1, marginLeft: 14 },
//   headerSub:   { color: T.t3, fontSize: 9, fontWeight: '800', letterSpacing: 2.5, marginBottom: 2 },
//   headerTitle: { color: T.t1, fontSize: 22, fontWeight: '900', letterSpacing: -0.6 },
//   headerIcon:  { width: 40, height: 40, borderRadius: 12, backgroundColor: T.card,
//                  justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: T.border },

//   // Stats bar
//   statsBar:  { flexDirection: 'row', marginHorizontal: 20, marginBottom: 20,
//                backgroundColor: T.card, borderRadius: 18, borderWidth: 1, borderColor: T.border, overflow: 'hidden' },
//   statItem:  { flex: 1, alignItems: 'center', paddingVertical: 14, gap: 3 },
//   statVal:   { color: T.t1, fontSize: 13, fontWeight: '800' },
//   statLbl:   { color: T.t3, fontSize: 10, fontWeight: '600' },

//   // Search
//   searchSection:   { paddingHorizontal: 20, marginBottom: 20, gap: 10 },
//   searchBox:       { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0E0E0E',
//                      borderRadius: 20, borderWidth: 1.5, borderColor: '#262626', paddingHorizontal: 16, paddingVertical: 14 },
//   searchBoxFocused:{ borderColor: 'rgba(255,255,255,0.3)', shadowColor: '#FFF', shadowOpacity: 0.1, shadowRadius: 14, elevation: 5 },
//   searchInput:     { flex: 1, color: T.t1, fontSize: 15, fontWeight: '500' },
//   searchBtn:       { borderRadius: 16, overflow: 'hidden', shadowColor: '#FFF', shadowOpacity: 0.2, shadowRadius: 10, elevation: 4 },
//   searchBtnG:      { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, gap: 8 },
//   searchBtnTxt:    { color: T.bg, fontSize: 15, fontWeight: '900' },

//   // Tonight's pick
//   pickBanner:   { borderRadius: 20, overflow: 'hidden', flexDirection: 'row', alignItems: 'center',
//                   padding: 18, borderWidth: 1, borderColor: T.border },
//   pickStrip:    { position: 'absolute', top: 0, left: 0, right: 0, height: 2 },
//   pickLeft:     { flex: 1 },
//   pickBadge:    { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.06)',
//                   paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, alignSelf: 'flex-start', marginBottom: 8 },
//   pickBadgeTxt: { color: T.t2, fontSize: 8, fontWeight: '800', letterSpacing: 1.5 },
//   pickTitle:    { color: T.t1, fontSize: 18, fontWeight: '900', marginBottom: 2 },
//   pickSub:      { color: T.t3, fontSize: 11, marginBottom: 10 },
//   pickTagRow:   { flexDirection: 'row', gap: 6, marginBottom: 10 },
//   pickTag:      { backgroundColor: 'rgba(255,255,255,0.08)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
//   pickTagTxt:   { color: T.t2, fontSize: 9, fontWeight: '700' },
//   pickPrice:    { color: T.t3, fontSize: 11 },
//   pickPriceVal: { color: T.t1, fontWeight: '900', fontSize: 14 },
//   pickEmoji:    { fontSize: 52, marginLeft: 8 },
//   pickCircle1:  { position: 'absolute', width: 100, height: 100, borderRadius: 50, top: -30, right: -10, backgroundColor: 'rgba(255,255,255,0.03)' },
//   pickCircle2:  { position: 'absolute', width: 60,  height: 60,  borderRadius: 30, bottom: -20, right: 60, backgroundColor: 'rgba(255,255,255,0.02)' },

//   // Featured
//   sectionRow:   { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 12 },
//   sectionTitle: { color: T.t1, fontSize: 16, fontWeight: '800' },
//   sectionSub:   { color: T.t3, fontSize: 11 },
//   featChip:     { width: 130, backgroundColor: T.card, borderRadius: 18, padding: 14,
//                   borderWidth: 1, borderColor: T.border, gap: 4 },
//   featEmoji:    { fontSize: 28, marginBottom: 4 },
//   featCity:     { color: T.t1, fontSize: 14, fontWeight: '800' },
//   featFrom:     { color: T.t3, fontSize: 10 },
//   featBadge:    { backgroundColor: 'rgba(255,255,255,0.06)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, alignSelf: 'flex-start', marginTop: 4 },
//   featBadgeTxt: { color: T.t2, fontSize: 9, fontWeight: '700' },

//   // Results
//   resultsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 14 },
//   resultsLeft:   { flexDirection: 'row', alignItems: 'center' },
//   liveDot:       { width: 7, height: 7, borderRadius: 4, backgroundColor: T.mint, shadowColor: '#FFF', shadowOpacity: 0.9, shadowRadius: 6, elevation: 3 },
//   resultsTitle:  { color: T.t1, fontSize: 14, fontWeight: '700' },
//   resultsCount:  { color: T.t3, fontSize: 12 },

//   // Hotel Card — original layout
//   hotelCard:    { backgroundColor: T.card, borderRadius: 20, marginBottom: 16, flexDirection: 'row',
//                   overflow: 'hidden', borderWidth: 1, borderColor: T.border,
//                   shadowColor: '#FFF', shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
//   hotelImage:   { width: 120, height: 120 },
//   hotelInfo:    { flex: 1, padding: 12, justifyContent: 'space-between' },
//   hotelName:    { color: T.t1, fontWeight: '800', fontSize: 15 },
//   detailsRow:   { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//   priceText:    { color: T.mint, fontSize: 18, fontWeight: '900',
//                   textShadowColor: 'rgba(255,255,255,0.25)', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 8 },
//   ratingBox:    { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,215,0,0.10)',
//                   paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
//   ratingText:   { color: '#FFD700', fontSize: 12, fontWeight: '800' },
//   viewBtn:      { borderRadius: 10, overflow: 'hidden', shadowColor: '#FFF', shadowOpacity: 0.15, shadowRadius: 8, elevation: 3 },
//   viewBtnG:     { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 12, gap: 4 },
//   viewBtnText:  { color: T.bg, fontSize: 13, fontWeight: '900' },

//   // Empty
//   emptyBox:   { alignItems: 'center', paddingVertical: 60 },
//   emptyEmoji: { fontSize: 50, marginBottom: 12 },
//   emptyTitle: { color: T.t1, fontSize: 18, fontWeight: '800', marginBottom: 6 },
//   emptySub:   { color: T.t3, fontSize: 13 },
// });













import React, { useEffect, useRef, useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
  FlatList, Image, Keyboard, Linking,
  Animated, Dimensions, ScrollView, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const { width } = Dimensions.get('window');

/* ═══ Obsidian Theme Tokens ════ */
const T = {
  bg:      '#050505',
  surf:    '#0C0C0C',
  card:    '#131313',
  card2:   '#1A1A1A',
  border:  '#242424',
  border2: '#303030',
  mint:    '#FFFFFF',
  mintL:   '#F0F0F0',
  mintD:   '#C4C4C4',
  purple:  '#909090',
  pink:    '#505050',
  gold:    '#E8E8E8',
  t1:      '#FFFFFF',
  t2:      '#B0B0B0',
  t3:      '#4A4A4A',
};

const API_URL = 'https://semproject-1a4i.vercel.app/api/hotels';

/* ═══ Featured Destinations (Price Removed) ════════════════════════ */
const featured = [
  { id:'f1', city:'Goa',      emoji:'🏖️', hotels:'240+' },
  { id:'f2', city:'Mumbai',   emoji:'🏙️', hotels:'580+' },
  { id:'f3', city:'Jaipur',   emoji:'🏰', hotels:'310+' },
  { id:'f4', city:'Manali',   emoji:'🏔️', hotels:'180+' },
  { id:'f5', city:'Varanasi', emoji:'🕌', hotels:'120+' },
];

/* ═══ Shimmer ═══════════════════════════════════════ */
const Shimmer = ({ w, h, br = 12 }) => {
  const a = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.timing(a, { toValue: 1, duration: 1300, useNativeDriver: true })).start();
  }, []);
  const tx = a.interpolate({ inputRange: [0, 1], outputRange: [-w, w] });
  return (
    <View style={{ width: w, height: h, borderRadius: br, backgroundColor: '#1A1A1A', overflow: 'hidden' }}>
      <Animated.View style={{ flex: 1, transform: [{ translateX: tx }] }}>
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.07)', 'transparent']}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>
    </View>
  );
};

/* ═══ Hotel Card — Price Removed ═══════════════════════════ */
const HotelCard = ({ item, index }) => {
  const op = useRef(new Animated.Value(0)).current;
  const sl = useRef(new Animated.Value(40)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.delay(index * 80),
      Animated.parallel([
        Animated.timing(op, { toValue: 1, duration: 320, useNativeDriver: true }),
        Animated.spring(sl, { toValue: 0, friction: 8, tension: 60, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  return (
    <Animated.View style={{ opacity: op, transform: [{ translateY: sl }] }}>
      <View style={styles.hotelCard}>
        <Image source={{ uri: item.thumbnail }} style={styles.hotelImage} />
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName} numberOfLines={1}>{item.name}</Text>
          
          {/* Details Row - Only shows Rating now */}
          <View style={styles.detailsRow}>
            {item.rating ? (
              <View style={styles.ratingBox}>
                <Ionicons name="star" size={12} color="#FFD700" />
                <Text style={styles.ratingText}> {item.rating}</Text>
              </View>
            ) : (
              <Text style={styles.availabilityText}>Available</Text>
            )}
          </View>

          <TouchableOpacity style={styles.viewBtn} onPress={() => Linking.openURL(item.link)}>
            <LinearGradient
              colors={[T.mint, T.mintD]}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              style={styles.viewBtnG}
            >
              <Text style={styles.viewBtnText}>View Details</Text>
              <Ionicons name="chevron-forward" size={14} color={T.bg} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

/* ═══ Featured City Chip (Price Removed) ════════════════════════════ */
const FeaturedChip = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.78}>
    <View style={styles.featChip}>
      <Text style={styles.featEmoji}>{item.emoji}</Text>
      <Text style={styles.featCity}>{item.city}</Text>
      {/* Price 'from' removed */}
      <View style={styles.featBadge}>
        <Text style={styles.featBadgeTxt}>{item.hotels}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

/* ═══════════════════════════════════════════════════
   MAIN SCREEN
═══════════════════════════════════════════════════ */
export default function HotelSearchScreen({ navigation }) {
  const [city,    setCity]    = useState('');
  const [hotels,  setHotels]  = useState([]);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);

  const fade    = useRef(new Animated.Value(0)).current;
  const slideY  = useRef(new Animated.Value(30)).current;
  const pulse   = useRef(new Animated.Value(0)).current;
  const float   = useRef(new Animated.Value(0)).current;
  const inputRef = useRef(null);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade,   { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.spring(slideY, { toValue: 0, friction: 9, tension: 55, useNativeDriver: true }),
    ]).start();
    Animated.loop(Animated.sequence([
      Animated.timing(pulse, { toValue: 1, duration: 2000, useNativeDriver: true }),
      Animated.timing(pulse, { toValue: 0, duration: 2000, useNativeDriver: true }),
    ])).start();
    Animated.loop(Animated.sequence([
      Animated.timing(float, { toValue: 1, duration: 4500, useNativeDriver: true }),
      Animated.timing(float, { toValue: 0, duration: 4500, useNativeDriver: true }),
    ])).start();
  }, []);

  const handleSearch = async (searchCity) => {
    const q = searchCity || city;
    if (!q.trim()) return;
    if (searchCity) setCity(searchCity);
    Keyboard.dismiss();
    setLoading(true); setHotels([]);
    try {
      const r = await axios.get(API_URL, { params: { q } });
      if (r.data.success) setHotels(r.data.hotels);
    } catch {
      alert('Connect to the same Wi-Fi as your server.');
    } finally {
      setLoading(false);
    }
  };

  const pulseS = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.08] });
  const floatY = float.interpolate({ inputRange: [0, 1], outputRange: [0, -10] });

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={T.bg} />

      {/* ── BG ───────────────────────────────────── */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View style={[StyleSheet.absoluteFill, { backgroundColor: T.bg }]} />
        <Animated.View style={[styles.blob, { width: 280, height: 280, top: -80, right: -80,
          backgroundColor: 'rgba(255,255,255,0.03)', transform: [{ translateY: floatY }] }]} />
        <Animated.View style={[styles.blob, { width: 200, height: 200, bottom: 200, left: -60,
          backgroundColor: 'rgba(255,255,255,0.02)', transform: [{ translateY: floatY }] }]} />
        <Animated.View style={[styles.decRing, { width: 320, height: 320, borderRadius: 160,
          top: -100, right: -120, borderColor: 'rgba(255,255,255,0.04)',
          transform: [{ translateY: floatY }] }]} />
        <Animated.View style={{ position: 'absolute', bottom: 80, right: 20, opacity: 0.04,
          transform: [{ translateY: floatY }] }}>
          <MaterialCommunityIcons name="office-building" size={120} color="#FFF" />
        </Animated.View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

        {/* ── HEADER ──────────────────────────────── */}
        <Animated.View style={[styles.header, { opacity: fade, transform: [{ translateY: slideY }] }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={22} color={T.t1} />
          </TouchableOpacity>
          <View style={styles.headerMid}>
            <Text style={styles.headerSub}>DISCOVER</Text>
            <Text style={styles.headerTitle}>Find Your Stay</Text>
          </View>
          <Animated.View style={[styles.headerIcon, { transform: [{ scale: pulseS }] }]}>
            <MaterialCommunityIcons name="office-building-outline" size={22} color={T.t1} />
          </Animated.View>
        </Animated.View>

        {/* ── STATS BAR ───────────────────────────── */}
        <Animated.View style={[styles.statsBar, { opacity: fade, transform: [{ translateY: slideY }] }]}>
          {[
            { icon: 'bed-outline',      val: '10K+', lbl: 'Hotels'     },
            { icon: 'star-outline',     val: '4.8★', lbl: 'Avg Rating' },
            { icon: 'pricetag-outline', val: 'Best', lbl: 'Deals'   }, // Changed stat
          ].map((s, i) => (
            <View key={i} style={styles.statItem}>
              <Ionicons name={s.icon} size={16} color={T.t2} />
              <Text style={styles.statVal}>{s.val}</Text>
              <Text style={styles.statLbl}>{s.lbl}</Text>
            </View>
          ))}
        </Animated.View>

        {/* ── SEARCH ──────────────────────────────── */}
        <Animated.View style={[styles.searchSection, { opacity: fade, transform: [{ translateY: slideY }] }]}>
          <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()}
            style={[styles.searchBox, focused && styles.searchBoxFocused]}>
            <Ionicons name="search-outline" size={18} color={focused ? T.mint : T.t3} style={{ marginRight: 10 }} />
            <TextInput
              ref={inputRef}
              style={styles.searchInput}
              placeholder="City, hotel or destination…"
              placeholderTextColor={T.t3}
              value={city}
              onChangeText={setCity}
              onSubmitEditing={() => handleSearch()}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              returnKeyType="search"
              blurOnSubmit={false}
              autoCorrect={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
            />
            {city.length > 0 && (
              <TouchableOpacity onPress={() => { setCity(''); setHotels([]); }}>
                <Ionicons name="close-circle" size={18} color={T.t3} />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSearch()} style={styles.searchBtn}>
            <LinearGradient colors={[T.mint, T.mintD]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.searchBtnG}>
              <Ionicons name="search" size={18} color={T.bg} />
              <Text style={styles.searchBtnTxt}>Search Hotels</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>

        {/* ── TONIGHT'S PICK BANNER (Price Removed) ───────────────── */}
        {hotels.length === 0 && !loading && (
          <Animated.View style={{ opacity: fade, marginHorizontal: 20, marginBottom: 24 }}>
            <LinearGradient colors={['#1A1A1A', '#242424']} style={styles.pickBanner}>
              <LinearGradient colors={[T.mint, T.mintD, 'transparent']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.pickStrip} />
              <View style={styles.pickLeft}>
                <View style={styles.pickBadge}>
                  <Ionicons name="moon-outline" size={9} color={T.t2} />
                  <Text style={styles.pickBadgeTxt}> TONIGHT'S PICK</Text>
                </View>
                <Text style={styles.pickTitle}>The Leela Palace</Text>
                <Text style={styles.pickSub}>New Delhi · 5★ Luxury</Text>
                <View style={styles.pickTagRow}>
                  {['Pool', 'Spa', 'Dining'].map(t => (
                    <View key={t} style={styles.pickTag}>
                      <Text style={styles.pickTagTxt}>{t}</Text>
                    </View>
                  ))}
                </View>
                {/* Price removed from here */}
                <TouchableOpacity style={styles.pickBookBtn}>
                   <Text style={styles.pickBookBtnTxt}>Check Availability</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pickEmoji}>🏛️</Text>
              <View style={styles.pickCircle1} />
              <View style={styles.pickCircle2} />
            </LinearGradient>
          </Animated.View>
        )}

        {/* ── FEATURED DESTINATIONS ───────────────── */}
        {hotels.length === 0 && !loading && (
          <Animated.View style={{ opacity: fade, marginBottom: 24 }}>
            <View style={styles.sectionRow}>
              <Text style={styles.sectionTitle}>Popular Destinations</Text>
              <Text style={styles.sectionSub}>✦ Tap to explore</Text>
            </View>
            <FlatList
              data={featured} horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={i => i.id}
              contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
              renderItem={({ item }) => <FeaturedChip item={item} onPress={() => handleSearch(item.city)} />}
            />
          </Animated.View>
        )}

        {/* ── RESULTS HEADER ──────────────────────── */}
        {(hotels.length > 0 || loading) && (
          <View style={styles.resultsHeader}>
            <View style={styles.resultsLeft}>
              <Animated.View style={[styles.liveDot, { transform: [{ scale: pulseS }] }]} />
              <Text style={styles.resultsTitle}> Results for "{city}"</Text>
            </View>
            <Text style={styles.resultsCount}>{loading ? '…' : `${hotels.length} hotels`}</Text>
          </View>
        )}

        {/* ── SHIMMER / RESULTS ───────────────────── */}
        {loading ? (
          <View style={{ paddingHorizontal: 20, gap: 14, marginBottom: 40 }}>
            {[1, 2, 3].map(k => (
              <View key={k} style={[styles.hotelCard, { overflow: 'hidden' }]}>
                <Shimmer w={120} h={120} br={0} />
                <View style={{ flex: 1, padding: 12, gap: 10 }}>
                  <Shimmer w={width * 0.4} h={14} br={7} />
                  <Shimmer w={width * 0.28} h={18} br={7} />
                  <Shimmer w={width * 0.35} h={32} br={10} />
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={{ paddingHorizontal: 20, paddingBottom: 40 }}>
            {hotels.map((item, index) => (
              <HotelCard key={index} item={item} index={index} />
            ))}
          </View>
        )}

        {/* ── EMPTY STATE ─────────────────────────── */}
        {!loading && hotels.length === 0 && city.length > 0 && (
          <Animated.View style={[styles.emptyBox, { opacity: fade }]}>
            <Text style={styles.emptyEmoji}>🏨</Text>
            <Text style={styles.emptyTitle}>No hotels found</Text>
            <Text style={styles.emptySub}>Try searching a different city</Text>
          </Animated.View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

/* ═══ Styles ════════════════════════════════════════ */
const styles = StyleSheet.create({
  root:    { flex: 1, backgroundColor: T.bg },
  blob:    { position: 'absolute', borderRadius: 9999 },
  decRing: { position: 'absolute', borderWidth: 1 },

  // Header
  header:      { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 16, paddingBottom: 10 },
  backBtn:     { width: 40, height: 40, borderRadius: 12, backgroundColor: T.card, justifyContent: 'center',
                 alignItems: 'center', borderWidth: 1, borderColor: T.border,
                 shadowColor: '#FFF', shadowOpacity: 0.06, shadowRadius: 8, elevation: 3 },
  headerMid:   { flex: 1, marginLeft: 14 },
  headerSub:   { color: T.t3, fontSize: 9, fontWeight: '800', letterSpacing: 2.5, marginBottom: 2 },
  headerTitle: { color: T.t1, fontSize: 22, fontWeight: '900', letterSpacing: -0.6 },
  headerIcon:  { width: 40, height: 40, borderRadius: 12, backgroundColor: T.card,
                 justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: T.border },

  // Stats bar
  statsBar:  { flexDirection: 'row', marginHorizontal: 20, marginBottom: 20,
               backgroundColor: T.card, borderRadius: 18, borderWidth: 1, borderColor: T.border, overflow: 'hidden' },
  statItem:  { flex: 1, alignItems: 'center', paddingVertical: 14, gap: 3 },
  statVal:   { color: T.t1, fontSize: 13, fontWeight: '800' },
  statLbl:   { color: T.t3, fontSize: 10, fontWeight: '600' },

  // Search
  searchSection:   { paddingHorizontal: 20, marginBottom: 20, gap: 10 },
  searchBox:       { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0E0E0E',
                     borderRadius: 20, borderWidth: 1.5, borderColor: '#262626', paddingHorizontal: 16, paddingVertical: 14 },
  searchBoxFocused:{ borderColor: 'rgba(255,255,255,0.3)', shadowColor: '#FFF', shadowOpacity: 0.1, shadowRadius: 14, elevation: 5 },
  searchInput:     { flex: 1, color: T.t1, fontSize: 15, fontWeight: '500' },
  searchBtn:       { borderRadius: 16, overflow: 'hidden', shadowColor: '#FFF', shadowOpacity: 0.2, shadowRadius: 10, elevation: 4 },
  searchBtnG:      { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, gap: 8 },
  searchBtnTxt:    { color: T.bg, fontSize: 15, fontWeight: '900' },

  // Tonight's pick
  pickBanner:   { borderRadius: 20, overflow: 'hidden', flexDirection: 'row', alignItems: 'center',
                  padding: 18, borderWidth: 1, borderColor: T.border },
  pickStrip:    { position: 'absolute', top: 0, left: 0, right: 0, height: 2 },
  pickLeft:     { flex: 1 },
  pickBadge:    { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.06)',
                  paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, alignSelf: 'flex-start', marginBottom: 8 },
  pickBadgeTxt: { color: T.t2, fontSize: 8, fontWeight: '800', letterSpacing: 1.5 },
  pickTitle:    { color: T.t1, fontSize: 18, fontWeight: '900', marginBottom: 2 },
  pickSub:      { color: T.t3, fontSize: 11, marginBottom: 10 },
  pickTagRow:   { flexDirection: 'row', gap: 6, marginBottom: 10 },
  pickTag:      { backgroundColor: 'rgba(255,255,255,0.08)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10 },
  pickTagTxt:   { color: T.t2, fontSize: 9, fontWeight: '700' },
  pickBookBtn:  { backgroundColor: T.mint, paddingVertical: 8, paddingHorizontal: 14, borderRadius: 8, alignSelf: 'flex-start' },
  pickBookBtnTxt: { color: T.bg, fontSize: 11, fontWeight: '800' },
  pickEmoji:    { fontSize: 52, marginLeft: 8 },
  pickCircle1:  { position: 'absolute', width: 100, height: 100, borderRadius: 50, top: -30, right: -10, backgroundColor: 'rgba(255,255,255,0.03)' },
  pickCircle2:  { position: 'absolute', width: 60,  height: 60,  borderRadius: 30, bottom: -20, right: 60, backgroundColor: 'rgba(255,255,255,0.02)' },

  // Featured
  sectionRow:   { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 12 },
  sectionTitle: { color: T.t1, fontSize: 16, fontWeight: '800' },
  sectionSub:   { color: T.t3, fontSize: 11 },
  featChip:     { width: 130, backgroundColor: T.card, borderRadius: 18, padding: 14,
                  borderWidth: 1, borderColor: T.border, gap: 6, alignItems: 'center' }, // Centered items
  featEmoji:    { fontSize: 28, marginBottom: 4 },
  featCity:     { color: T.t1, fontSize: 14, fontWeight: '800' },
  featBadge:    { backgroundColor: 'rgba(255,255,255,0.06)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, marginTop: 4 },
  featBadgeTxt: { color: T.t2, fontSize: 9, fontWeight: '700' },

  // Results
  resultsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 14 },
  resultsLeft:   { flexDirection: 'row', alignItems: 'center' },
  liveDot:       { width: 7, height: 7, borderRadius: 4, backgroundColor: T.mint, shadowColor: '#FFF', shadowOpacity: 0.9, shadowRadius: 6, elevation: 3 },
  resultsTitle:  { color: T.t1, fontSize: 14, fontWeight: '700' },
  resultsCount:  { color: T.t3, fontSize: 12 },

  // Hotel Card
  hotelCard:    { backgroundColor: T.card, borderRadius: 20, marginBottom: 16, flexDirection: 'row',
                  overflow: 'hidden', borderWidth: 1, borderColor: T.border,
                  shadowColor: '#FFF', shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
  hotelImage:   { width: 120, height: 120 },
  hotelInfo:    { flex: 1, padding: 12, justifyContent: 'space-between' },
  hotelName:    { color: T.t1, fontWeight: '800', fontSize: 15 },
  detailsRow:   { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }, // Adjusted justify
  availabilityText: { color: T.t2, fontSize: 12, fontWeight: '600' },
  ratingBox:    { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,215,0,0.10)',
                  paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  ratingText:   { color: '#FFD700', fontSize: 12, fontWeight: '800' },
  viewBtn:      { borderRadius: 10, overflow: 'hidden', shadowColor: '#FFF', shadowOpacity: 0.15, shadowRadius: 8, elevation: 3 },
  viewBtnG:     { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 8, paddingHorizontal: 12, gap: 4 },
  viewBtnText:  { color: T.bg, fontSize: 13, fontWeight: '900' },

  // Empty
  emptyBox:   { alignItems: 'center', paddingVertical: 60 },
  emptyEmoji: { fontSize: 50, marginBottom: 12 },
  emptyTitle: { color: T.t1, fontSize: 18, fontWeight: '800', marginBottom: 6 },
  emptySub:   { color: T.t3, fontSize: 13 },
});