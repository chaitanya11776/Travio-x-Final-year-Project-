// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking, SafeAreaView, ActivityIndicator, TextInput } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';

// // export default function NewsScreen() {
// //   const [news, setNews] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [searchCity, setSearchCity] = useState('');

// //   // Initial fetch for general travel news
// //   useEffect(() => {
// //     fetchNews("Travel Startups");
// //   }, []);

// //   const fetchNews = async (query) => {
// //     setLoading(true);
// //     try {
// //       // Replace YOUR_SERVER_IP with your local IP (e.g. 192.168.x.x)
// //       const response = await fetch(`http://10.98.19.30:3000/api/startup-news?q=${query}`);
// //       const json = await response.json();
// //       if (json.success) setNews(json.results);
// //     } catch (e) {
// //       console.error("Fetch error:", e);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleSearch = () => {
// //     if (searchCity.trim().length > 0) {
// //       fetchNews(searchCity);
// //     }
// //   };

// //   const renderItem = ({ item }) => (
// //     <TouchableOpacity style={styles.card} onPress={() => Linking.openURL(item.link)}>
// //       <Image source={{ uri: item.image_url }} style={styles.image} />
// //       <View style={styles.content}>
// //         <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
// //         <Text style={styles.summary} numberOfLines={3}>{item.summary}</Text>
// //         <Text style={styles.date}>{new Date(item.published_date).toLocaleDateString()}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.header}>
// //         <Text style={styles.headerTitle}>City News</Text>
// //       </View>

// //       {/* NEW: Search Bar for City */}
// //       <View style={styles.searchContainer}>
// //         <TextInput 
// //           style={styles.searchInput}
// //           placeholder="Enter city (e.g. New York)"
// //           placeholderTextColor="#64748B"
// //           value={searchCity}
// //           onChangeText={setSearchCity}
// //           onSubmitEditing={handleSearch} // Search when "Done" is pressed
// //         />
// //         <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
// //           <Ionicons name="search" size={20} color="#FFF" />
// //         </TouchableOpacity>
// //       </View>

// //       {loading ? (
// //         <ActivityIndicator size="large" color="#8B5CF6" style={{ marginTop: 50 }} />
// //       ) : (
// //         <FlatList
// //           data={news}
// //           keyExtractor={(item, index) => index.toString()}
// //           renderItem={renderItem}
// //           contentContainerStyle={{ padding: 15 }}
// //           ListEmptyComponent={<Text style={styles.empty}>No news found for this city.</Text>}
// //         />
// //       )}
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#020617' },
// //   header: { padding: 20, alignItems: 'center' },
// //   headerTitle: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  
// //   // Search Bar Styles
// //   searchContainer: { 
// //     flexDirection: 'row', 
// //     marginHorizontal: 20, 
// //     marginBottom: 15, 
// //     backgroundColor: '#0F172A', 
// //     borderRadius: 12, 
// //     borderWidth: 1, 
// //     borderColor: '#1E293B',
// //     alignItems: 'center'
// //   },
// //   searchInput: { flex: 1, color: '#FFF', padding: 12, fontSize: 16 },
// //   searchBtn: { padding: 12, backgroundColor: '#8B5CF6', borderRadius: 10, marginRight: 5 },
  
// //   card: { backgroundColor: '#0F172A', borderRadius: 15, marginBottom: 20, overflow: 'hidden', borderWidth: 1, borderColor: '#1E293B' },
// //   image: { width: '100%', height: 180 },
// //   content: { padding: 15 },
// //   title: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
// //   summary: { color: '#94A3B8', fontSize: 14, lineHeight: 20 },
// //   date: { color: '#8B5CF6', fontSize: 12, marginTop: 10 },
// //   empty: { color: '#64748B', textAlign: 'center', marginTop: 50 }
// // });










// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   View, Text, StyleSheet, FlatList, Image, TouchableOpacity, 
//   Linking, SafeAreaView, ActivityIndicator, TextInput, 
//   Animated, Dimensions, StatusBar 
// } from 'react-native';
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width, height } = Dimensions.get('window');

// /* ═══ Obsidian Theme ════════════════════════════════ */
// const T = {
//   bg:      '#050505',
//   card:    '#131313',
//   border:  '#242424',
//   mint:    '#FFFFFF',
//   t1:      '#FFFFFF',
//   t2:      '#B0B0B0',
//   t3:      '#4A4A4A',
//   accent:  '#00FF94', // Tactical Green
// };

// /* ──────────────────────────────────────────────────────
//    ✦ HUD & Decorative Elements
//    ────────────────────────────────────────────────────── */
// const StatusHUD = () => {
//   const pulse = useRef(new Animated.Value(1)).current;
//   useEffect(() => {
//     Animated.loop(Animated.sequence([
//       Animated.timing(pulse, { toValue: 0.3, duration: 1000, useNativeDriver: true }),
//       Animated.timing(pulse, { toValue: 1, duration: 1000, useNativeDriver: true }),
//     ])).start();
//   }, []);
//   return (
//     <View style={styles.hudHeader}>
//       <View style={styles.hudLeft}>
//         <Animated.View style={[styles.hudDot, { opacity: pulse }]} />
//         <Text style={styles.hudTxt}>LIVE_FEED // TRV_INTEL_v4.0</Text>
//       </View>
//       <Text style={styles.hudTxt}>{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} IST</Text>
//     </View>
//   );
// };

// const ScanLine = () => {
//   const a = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     Animated.loop(Animated.sequence([
//       Animated.timing(a, { toValue: 1, duration: 2200, useNativeDriver: true }),
//       Animated.delay(3000),
//     ])).start();
//   }, []);
//   const tx = a.interpolate({ inputRange: [0, 1], outputRange: [-100, 100] });
//   return <Animated.View style={[styles.scanLine, { transform: [{ translateX: tx }] }]} />;
// };

// /* ═══════════════════════════════════════════════════
//    MAIN SCREEN
// ═══════════════════════════════════════════════════ */
// export default function NewsScreen({ navigation }) {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [searchCity, setSearchCity] = useState('');
//   const [focused, setFocused] = useState(false);
  
//   const fade = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(fade, { toValue: 1, duration: 800, useNativeDriver: true }).start();
//     fetchNews("Travel Tech");
//   }, []);

//   const fetchNews = async (query) => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://10.98.19.30:3000/api/startup-news?q=${query}`);
//       const json = await response.json();
//       if (json.success) setNews(json.results);
//     } catch (e) {
//       console.error("Fetch error:", e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderItem = ({ item, index }) => (
//     <Animated.View style={{ opacity: fade }}>
//       <TouchableOpacity 
//         style={styles.card} 
//         activeOpacity={0.9}
//         onPress={() => Linking.openURL(item.link)}
//       >
//         <Image source={{ uri: item.image_url }} style={styles.image} />
//         <LinearGradient colors={['transparent', 'rgba(0,0,0,0.95)']} style={styles.imgOverlay} />
        
//         <View style={styles.content}>
//           <View style={styles.cardHeader}>
//             <View style={styles.tag}>
//               <Text style={styles.tagTxt}>INTEL REPORT</Text>
//             </View>
//             <Text style={styles.coordTxt}>REF_{Math.floor(Math.random() * 9000 + 1000)}</Text>
//           </View>

//           <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
//           <Text style={styles.summary} numberOfLines={3}>{item.summary}</Text>
          
//           <View style={styles.cardFooter}>
//             <Text style={styles.date}>{new Date(item.published_date).toLocaleDateString()}</Text>
//             <View style={styles.footerIconWrap}>
//               <Ionicons name="scan-outline" size={14} color={T.accent} />
//               <Text style={styles.footerLink}>READ_FULL</Text>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>
//     </Animated.View>
//   );

//   return (
//     <SafeAreaView style={styles.root}>
//       <StatusBar barStyle="light-content" />
      
//       {/* ── BACKGROUND DECOR ── */}
//       <View style={styles.sideGutter} pointerEvents="none">
//         {['LOG_A', 'LOG_B', 'LOG_C', 'LOG_D'].map((t, i) => (
//           <Text key={i} style={styles.gutterTxt}>{t}</Text>
//         ))}
//       </View>

//       <StatusHUD />

//       {/* ── HEADER ── */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
//           <Ionicons name="chevron-back" size={20} color={T.t1} />
//         </TouchableOpacity>
//         <View style={styles.headerMid}>
//           <Text style={styles.headerSub}>LOCAL INTELLIGENCE</Text>
//           <Text style={styles.headerTitle}>City Feed</Text>
//         </View>
//         <View style={styles.headerIcon}>
//           <MaterialCommunityIcons name="radar" size={20} color={T.accent} />
//         </View>
//       </View>

//       {/* ── MECHANICAL INPUT (Planner Style) ── */}
//       <View style={styles.searchSection}>
//         <View style={[styles.inputGroup, focused && styles.inputFocused]}>
//           <View style={styles.panelLeft}>
//             <View style={styles.labelRow}>
//               <Text style={styles.panelLabel}>LOCATION_TARGET</Text>
//               {searchCity.length > 0 && <View style={styles.activeIndicator} />}
//             </View>
//             <View style={styles.inputRow}>
//               <Ionicons name="search" size={18} color={focused ? T.accent : T.t3} />
//               <TextInput 
//                 style={styles.input}
//                 placeholder="Enter city sector..."
//                 placeholderTextColor={T.t3}
//                 value={searchCity}
//                 onChangeText={setSearchCity}
//                 onFocus={() => setFocused(true)}
//                 onBlur={() => setFocused(false)}
//                 onSubmitEditing={() => fetchNews(searchCity)}
//               />
//             </View>
//           </View>
          
//           <TouchableOpacity 
//             style={styles.searchBtn} 
//             onPress={() => fetchNews(searchCity)}
//           >
//              <ScanLine />
//              <MaterialCommunityIcons name="broadcast" size={24} color={T.bg} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* ── FEED LIST ── */}
//       {loading ? (
//         <View style={styles.loader}>
//           <ActivityIndicator color={T.accent} />
//           <Text style={styles.loaderTxt}>SYNCING WITH SATELLITE...</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={news}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={renderItem}
//           contentContainerStyle={styles.listPadding}
//           ListEmptyComponent={<Text style={styles.empty}>NO DATA IN THIS SECTOR</Text>}
//         />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   root: { flex: 1, backgroundColor: T.bg },
  
//   /* HUD */
//   hudHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 5 },
//   hudLeft: { flexDirection: 'row', alignItems: 'center', gap: 6 },
//   hudDot: { width: 4, height: 4, borderRadius: 2, backgroundColor: T.accent },
//   hudTxt: { color: T.t3, fontSize: 8, fontWeight: '900', letterSpacing: 1.5 },

//   /* Decor */
//   sideGutter: { position: 'absolute', left: 8, top: height * 0.3, gap: 50, zIndex: 1 },
//   gutterTxt: { color: '#111', fontSize: 10, fontWeight: '900', transform: [{ rotate: '-90deg' }] },

//   /* Header */
//   header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 },
//   backBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: T.card, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: T.border },
//   headerMid: { flex: 1, marginLeft: 15 },
//   headerSub: { color: T.t3, fontSize: 9, fontWeight: '900', letterSpacing: 2 },
//   headerTitle: { color: T.t1, fontSize: 24, fontWeight: '900' },
//   headerIcon: { width: 40, height: 40, borderRadius: 12, backgroundColor: T.card, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: T.border },

//   /* Mechanical Input */
//   searchSection: { paddingHorizontal: 20, paddingLeft: 35, marginBottom: 15 },
//   inputGroup: { flexDirection: 'row', backgroundColor: '#0A0A0A', borderRadius: 20, borderWidth: 1.5, borderColor: '#1A1A1A', overflow: 'hidden' },
//   inputFocused: { borderColor: 'rgba(255,255,255,0.2)', backgroundColor: '#0E0E0E' },
//   panelLeft: { flex: 1, padding: 15 },
//   labelRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
//   panelLabel: { color: T.t3, fontSize: 9, fontWeight: '900', letterSpacing: 1.5 },
//   activeIndicator: { width: 4, height: 4, borderRadius: 2, backgroundColor: T.accent },
//   inputRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
//   input: { flex: 1, color: T.t1, fontSize: 15, fontWeight: '600' },
//   searchBtn: { width: 70, backgroundColor: T.accent, justifyContent: 'center', alignItems: 'center' },
//   scanLine: { position: 'absolute', top: 0, bottom: 0, width: 30, backgroundColor: 'rgba(255,255,255,0.3)' },

//   /* Card */
//   listPadding: { paddingHorizontal: 20, paddingLeft: 35, paddingBottom: 40 },
//   card: { backgroundColor: T.card, borderRadius: 24, marginBottom: 20, overflow: 'hidden', borderWidth: 1, borderColor: T.border },
//   image: { width: '100%', height: 200 },
//   imgOverlay: { ...StyleSheet.absoluteFillObject, height: 200 },
//   content: { padding: 18 },
//   cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
//   tag: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 1, borderColor: '#222' },
//   tagTxt: { color: T.t3, fontSize: 8, fontWeight: '900', letterSpacing: 1 },
//   coordTxt: { color: '#222', fontSize: 10, fontWeight: '900' },
//   title: { color: T.t1, fontSize: 18, fontWeight: '800', lineHeight: 24, marginBottom: 8 },
//   summary: { color: T.t2, fontSize: 13, lineHeight: 20 },
//   cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#1A1A1A' },
//   date: { color: T.t3, fontSize: 11, fontWeight: '700' },
//   footerIconWrap: { flexDirection: 'row', alignItems: 'center', gap: 6 },
//   footerLink: { color: T.accent, fontSize: 9, fontWeight: '900' },

//   /* Loader & Empty */
//   loader: { marginTop: 60, alignItems: 'center', gap: 12 },
//   loaderTxt: { color: T.t3, fontSize: 9, fontWeight: '900', letterSpacing: 2 },
//   empty: { color: T.t3, textAlign: 'center', marginTop: 100, fontSize: 12, fontWeight: '800' }
// });

















import React, { useState, useEffect, useRef } from 'react';
import { 
  View, Text, StyleSheet, FlatList, Image, TouchableOpacity, 
  Linking, SafeAreaView, ActivityIndicator, TextInput, 
  Animated, Dimensions, StatusBar, ScrollView, Platform 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const T = {
  bg:      '#050505',
  card:    '#131313',
  border:  '#242424',
  mint:    '#FFFFFF',
  t1:      '#FFFFFF',
  t2:      '#B0B0B0',
  t3:      '#4A4A4A',
  accent:  '#00FF94', 
};

/* ── Travel News "Strategic Sectors" ── */
const travelSectors = [
  { label: 'Aviation', query: 'Airline Industry News', emoji: '✈️' },
  { label: 'AI Travel', query: 'AI Travel Startups', emoji: '🤖' },
  { label: 'Hotels', query: 'Hospitality Tech Trends', emoji: '🏨' },
  { label: 'Visa/Gov', query: 'International Travel Policy', emoji: '🛂' },
  { label: 'Sustainable', query: 'Eco Tourism Startups', emoji: '🌱' },
];

/* ──────────────────────────────────────────────────────
   ✦ HUD & Decorative Components
   ────────────────────────────────────────────────────── */
const RadarScanner = () => {
  const spin = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.timing(spin, { toValue: 1, duration: 4000, useNativeDriver: true })).start();
  }, []);
  const spinStr = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  return (
    <View style={styles.radarContainer}>
      <Animated.View style={[styles.radarRing, { transform: [{ rotate: spinStr }] }]}>
        <View style={styles.radarSweep} />
      </Animated.View>
      <Text style={styles.radarTxt}>SAT_RECON</Text>
    </View>
  );
};

/* ═══════════════════════════════════════════════════
   MAIN SCREEN
═══════════════════════════════════════════════════ */
export default function TravelNewsScreen({ navigation }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 800, useNativeDriver: true }).start();
    fetchNews("Global Travel Trends"); // Initial Fetch
  }, []);

  const fetchNews = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setSearchQuery(query);
    try {
      // Ensure this IP matches your local server IP
      const response = await fetch(`https://semproject-1a4i.vercel.app/api/startup-news?q=${query}`);
      const json = await response.json();
      if (json.success) setNews(json.results);
    } catch (e) {
      console.error("Fetch error:", e);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <Animated.View style={{ opacity: fade }}>
      <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={() => Linking.openURL(item.link)}>
        <Image source={{ uri: item.image_url }} style={styles.image} />
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.95)']} style={styles.imgOverlay} />
        <View style={styles.content}>
          <View style={styles.cardHeader}>
            <View style={styles.tag}><Text style={styles.tagTxt}>TRAVEL_INTEL</Text></View>
            <Text style={styles.coordTxt}>LOG_{Math.floor(Math.random() * 999)}</Text>
          </View>
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.summary} numberOfLines={3}>{item.summary}</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.date}>{new Date(item.published_date).toLocaleDateString()}</Text>
            <MaterialCommunityIcons name="arrow-right-thin" size={20} color={T.accent} />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      
      {/* ── TOP HUD ── */}
      <View style={styles.hudHeader}>
        <View style={styles.hudLeft}>
          <View style={styles.hudDot} />
          <Text style={styles.hudTxt}>RECON_FEED // ACTIVE</Text>
        </View>
        <RadarScanner />
      </View>

      {/* ── HEADER ── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={20} color={T.t1} />
        </TouchableOpacity>
        <View style={styles.headerMid}>
          <Text style={styles.headerSub}>INTELLIGENCE HUB</Text>
          <Text style={styles.headerTitle}>Travel News</Text>
        </View>
      </View>

      {/* ── MECHANICAL SEARCH (Travel Planner Style) ── */}
      <View style={styles.searchSection}>
        <View style={[styles.inputGroup, focused && styles.inputFocused]}>
          <View style={styles.panelLeft}>
            <Text style={styles.panelLabel}>DATA_SCAN_QUERY</Text>
            <View style={styles.inputRow}>
              <Ionicons name="search" size={18} color={focused ? T.accent : T.t3} />
              <TextInput 
                style={styles.input}
                placeholder="Search city or sector..."
                placeholderTextColor={T.t3}
                value={searchQuery}
                onChangeText={setSearchQuery}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onSubmitEditing={() => fetchNews(searchQuery)}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => fetchNews(searchQuery)}>
            <MaterialCommunityIcons name="broadcast" size={24} color={T.bg} />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── STRATEGIC SECTOR CHIPS ── */}
      <View style={styles.sectorSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.sectorScroll}>
          {travelSectors.map((item, i) => (
            <TouchableOpacity key={i} style={styles.sectorChip} onPress={() => fetchNews(item.query)}>
              <Text style={styles.sectorEmoji}>{item.emoji}</Text>
              <Text style={styles.sectorTxt}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* ── MAIN CONTENT ── */}
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={T.accent} />
          <Text style={styles.loaderTxt}>DECRYPTING_DATA_STREAM...</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={news}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listPadding}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <MaterialCommunityIcons name="wifi-off" size={48} color="#111" />
                <Text style={styles.emptyTxt}>NO_ACTIVE_THREADS</Text>
              </View>
            }
          />
          {/* Bottom Technical Display */}
          <View style={styles.logBox}>
            <Text style={styles.logTxt}>{`> SERVER: 10.98.19.30 | STATUS: SYNCED`}</Text>
            <Text style={styles.logTxt}>{`> RECON: ${news.length} RESULTS FOUND`}</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: T.bg },

  /* HUD */
  hudHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 10, alignItems: 'center' },
  hudLeft: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  hudDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: T.accent },
  hudTxt: { color: T.t3, fontSize: 8, fontWeight: '900', letterSpacing: 1 },
  radarContainer: { alignItems: 'center' },
  radarRing: { width: 44, height: 44, borderRadius: 22, borderWidth: 1, borderColor: '#1A1A1A', justifyContent: 'center', alignItems: 'center' },
  radarSweep: { width: 22, height: 1, backgroundColor: T.accent, position: 'absolute', top: 22, left: 22 },
  radarTxt: { color: '#1A1A1A', fontSize: 6, fontWeight: '900', marginTop: 4 },

  /* Header & Inputs */
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 15 },
  backBtn: { width: 40, height: 40, borderRadius: 12, backgroundColor: T.card, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: T.border },
  headerMid: { flex: 1, marginLeft: 15 },
  headerSub: { color: T.t3, fontSize: 9, fontWeight: '900', letterSpacing: 2 },
  headerTitle: { color: T.t1, fontSize: 24, fontWeight: '900' },
  searchSection: { paddingHorizontal: 20, marginBottom: 10 },
  inputGroup: { flexDirection: 'row', backgroundColor: '#0A0A0A', borderRadius: 20, borderWidth: 1.5, borderColor: '#1A1A1A', overflow: 'hidden' },
  inputFocused: { borderColor: 'rgba(255,255,255,0.2)' },
  panelLeft: { flex: 1, padding: 15 },
  panelLabel: { color: T.t3, fontSize: 9, fontWeight: '900', letterSpacing: 1.5, marginBottom: 8 },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  input: { flex: 1, color: T.t1, fontSize: 15, fontWeight: '600' },
  searchBtn: { width: 70, backgroundColor: T.accent, justifyContent: 'center', alignItems: 'center' },

  /* Sector Chips */
  sectorSection: { marginBottom: 15 },
  sectorScroll: { paddingHorizontal: 20, gap: 10 },
  sectorChip: { flexDirection: 'row', alignItems: 'center', backgroundColor: T.card, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 14, borderWidth: 1, borderColor: T.border, gap: 8 },
  sectorEmoji: { fontSize: 16 },
  sectorTxt: { color: T.t2, fontSize: 12, fontWeight: '800' },

  /* Card */
  listPadding: { paddingHorizontal: 20, paddingBottom: 20 },
  card: { backgroundColor: T.card, borderRadius: 24, marginBottom: 20, overflow: 'hidden', borderWidth: 1, borderColor: T.border },
  image: { width: '100%', height: 180 },
  imgOverlay: { ...StyleSheet.absoluteFillObject, height: 180 },
  content: { padding: 18 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  tag: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.05)' },
  tagTxt: { color: T.t3, fontSize: 8, fontWeight: '900' },
  coordTxt: { color: '#1A1A1A', fontSize: 10, fontWeight: '900' },
  title: { color: T.t1, fontSize: 17, fontWeight: '800', lineHeight: 22, marginBottom: 8 },
  summary: { color: T.t2, fontSize: 13, lineHeight: 18 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, paddingTop: 15, borderTopWidth: 1, borderTopColor: '#1A1A1A' },
  date: { color: T.t3, fontSize: 11 },

  /* System Footer Log */
  logBox: { padding: 15, backgroundColor: '#020202', borderTopWidth: 1, borderTopColor: '#0A0A0A' },
  logTxt: { color: '#111', fontSize: 8, fontWeight: '800', fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace' },

  /* Misc */
  loader: { marginTop: 60, alignItems: 'center' },
  loaderTxt: { color: T.t3, fontSize: 9, fontWeight: '900', marginTop: 10 },
  emptyContainer: { alignItems: 'center', marginTop: 80 },
  emptyTxt: { color: '#111', fontSize: 10, fontWeight: '900', marginTop: 10 }
});