// // // // // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // // // //   View,
// // // // // // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // // // // // // //   FlatList,
// // // // // // // // // // // // // // // // // //   Image,
// // // // // // // // // // // // // // // // // //   SafeAreaView,
// // // // // // // // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// // // // // // // // // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // // // // // // // // // Mock Data
// // // // // // // // // // // // // // // // // // const upcomingTrips = [
// // // // // // // // // // // // // // // // // //   { id: '1', title: 'Kyoto, Japan', date: 'Oct 12 - Oct 20', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop' },
// // // // // // // // // // // // // // // // // //   { id: '2', title: 'Amalfi Coast, Italy', date: 'Nov 05 - Nov 10', image: 'https://images.unsplash.com/photo-1610931560965-c3f915cb1d31?q=80&w=400&auto=format&fit=crop' },
// // // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // // const shortcuts = [
// // // // // // // // // // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#10B981' },
// // // // // // // // // // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#3B82F6' },
// // // // // // // // // // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#8B5CF6' },
// // // // // // // // // // // // // // // // // //   { id: '4', name: 'Map', icon: 'map-outline', color: '#F59E0B' },
// // // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // // export default function HomeScreen() {
// // // // // // // // // // // // // // // // // //   const renderShortcut = ({ item }) => (
// // // // // // // // // // // // // // // // // //     <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.7}>
// // // // // // // // // // // // // // // // // //       <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
// // // // // // // // // // // // // // // // // //         <Ionicons name={item.icon} size={28} color={item.color} />
// // // // // // // // // // // // // // // // // //       </View>
// // // // // // // // // // // // // // // // // //       <Text style={styles.shortcutText}>{item.name}</Text>
// // // // // // // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // // // // // // //   );

// // // // // // // // // // // // // // // // // //   const renderTripCard = ({ item }) => (
// // // // // // // // // // // // // // // // // //     <TouchableOpacity style={styles.tripCard} activeOpacity={0.8}>
// // // // // // // // // // // // // // // // // //       <Image source={{ uri: item.image }} style={styles.tripImage} />
// // // // // // // // // // // // // // // // // //       <View style={styles.tripOverlay}>
// // // // // // // // // // // // // // // // // //         <Text style={styles.tripTitle}>{item.title}</Text>
// // // // // // // // // // // // // // // // // //         <Text style={styles.tripDate}>{item.date}</Text>
// // // // // // // // // // // // // // // // // //       </View>
// // // // // // // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // // // // // // //   );

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
// // // // // // // // // // // // // // // // // //         {/* Header Section */}
// // // // // // // // // // // // // // // // // //         <View style={styles.header}>
// // // // // // // // // // // // // // // // // //           <View>
// // // // // // // // // // // // // // // // // //             <Text style={styles.greeting}>Good Morning,</Text>
// // // // // // // // // // // // // // // // // //             <Text style={styles.userName}>Ready for your next adventure?</Text>
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //           <TouchableOpacity style={styles.profileAvatar}>
// // // // // // // // // // // // // // // // // //             <Image 
// // // // // // // // // // // // // // // // // //               source={{ uri: 'https://ui-avatars.com/api/?name=User&background=8B5CF6&color=fff' }} 
// // // // // // // // // // // // // // // // // //               style={styles.avatarImage} 
// // // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // //         {/* Big AI Plan Button */}
// // // // // // // // // // // // // // // // // //         <TouchableOpacity style={styles.aiButton} activeOpacity={0.8}>
// // // // // // // // // // // // // // // // // //           <View style={styles.aiButtonContent}>
// // // // // // // // // // // // // // // // // //             <MaterialCommunityIcons name="robot-outline" size={32} color="#FFF" />
// // // // // // // // // // // // // // // // // //             <View style={styles.aiButtonTextContainer}>
// // // // // // // // // // // // // // // // // //               <Text style={styles.aiButtonTitle}>Plan New Trip with AI</Text>
// // // // // // // // // // // // // // // // // //               <Text style={styles.aiButtonSub}>Instantly generate a personalized itinerary</Text>
// // // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // // //             <Ionicons name="sparkles" size={20} color="#FBBF24" />
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // // // // // // //         {/* Shortcuts */}
// // // // // // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // // // // // // //             data={shortcuts}
// // // // // // // // // // // // // // // // // //             renderItem={renderShortcut}
// // // // // // // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // // // // // // //             contentContainerStyle={styles.shortcutsList}
// // // // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // //         {/* Upcoming Trips Carousel */}
// // // // // // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // // // // // // // // // //             <Text style={styles.sectionTitle}>Upcoming Plans</Text>
// // // // // // // // // // // // // // // // // //             <TouchableOpacity><Text style={styles.seeAllText}>See All</Text></TouchableOpacity>
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // // // // // // //             data={upcomingTrips}
// // // // // // // // // // // // // // // // // //             renderItem={renderTripCard}
// // // // // // // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // // // // // // //             snapToInterval={width * 0.75 + 16}
// // // // // // // // // // // // // // // // // //             decelerationRate="fast"
// // // // // // // // // // // // // // // // // //             contentContainerStyle={styles.carouselList}
// // // // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // // //         {/* Insights Section (Tips & News) */}
// // // // // // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // // // // // //           <Text style={styles.sectionTitle}>For You</Text>
          
// // // // // // // // // // // // // // // // // //           <View style={styles.insightCard}>
// // // // // // // // // // // // // // // // // //             <View style={styles.insightIconContainer}>
// // // // // // // // // // // // // // // // // //               <Ionicons name="bulb-outline" size={24} color="#FBBF24" />
// // // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // // //             <View style={styles.insightTextContent}>
// // // // // // // // // // // // // // // // // //               <Text style={styles.insightTitle}>AI Tip of the Day</Text>
// // // // // // // // // // // // // // // // // //               <Text style={styles.insightDesc}>Booking flights on Tuesdays usually saves you up to 15% on international travel.</Text>
// // // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // // //           </View>

// // // // // // // // // // // // // // // // // //           <View style={styles.insightCard}>
// // // // // // // // // // // // // // // // // //             <View style={[styles.insightIconContainer, { backgroundColor: '#3B82F620' }]}>
// // // // // // // // // // // // // // // // // //               <Ionicons name="newspaper-outline" size={24} color="#3B82F6" />
// // // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // // //             <View style={styles.insightTextContent}>
// // // // // // // // // // // // // // // // // //               <Text style={styles.insightTitle}>Travel News</Text>
// // // // // // // // // // // // // // // // // //               <Text style={styles.insightDesc}>New digital nomad visa announced for Spain starting this winter.</Text>
// // // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // // //         </View>
        
// // // // // // // // // // // // // // // // // //         {/* Bottom padding so FAB doesn't cover content */}
// // // // // // // // // // // // // // // // // //         <View style={{ height: 80 }} />
// // // // // // // // // // // // // // // // // //       </ScrollView>

// // // // // // // // // // // // // // // // // //       {/* Floating AI Chat Button */}
// // // // // // // // // // // // // // // // // //       <TouchableOpacity style={styles.fab} activeOpacity={0.9}>
// // // // // // // // // // // // // // // // // //         <Ionicons name="chatbubbles" size={28} color="#FFF" />
// // // // // // // // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // // // // // // // //     </SafeAreaView>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // // // // // // //   container: {
// // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // //     backgroundColor: '#0F172A', // Deep dark blue/gray for that AI tech vibe
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   scrollContent: {
// // // // // // // // // // // // // // // // // //     padding: 20,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   header: {
// // // // // // // // // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // // //     marginBottom: 24,
// // // // // // // // // // // // // // // // // //     marginTop: 10,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   greeting: {
// // // // // // // // // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // // // // // // // // //     color: '#94A3B8',
// // // // // // // // // // // // // // // // // //     fontFamily: 'System',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   userName: {
// // // // // // // // // // // // // // // // // //     fontSize: 22,
// // // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // // //     color: '#F8FAFC',
// // // // // // // // // // // // // // // // // //     marginTop: 4,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   profileAvatar: {
// // // // // // // // // // // // // // // // // //     width: 48,
// // // // // // // // // // // // // // // // // //     height: 48,
// // // // // // // // // // // // // // // // // //     borderRadius: 24,
// // // // // // // // // // // // // // // // // //     borderWidth: 2,
// // // // // // // // // // // // // // // // // //     borderColor: '#8B5CF6',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   avatarImage: {
// // // // // // // // // // // // // // // // // //     width: '100%',
// // // // // // // // // // // // // // // // // //     height: '100%',
// // // // // // // // // // // // // // // // // //     borderRadius: 24,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   aiButton: {
// // // // // // // // // // // // // // // // // //     backgroundColor: '#8B5CF6', // Vibrant purple
// // // // // // // // // // // // // // // // // //     borderRadius: 20,
// // // // // // // // // // // // // // // // // //     padding: 20,
// // // // // // // // // // // // // // // // // //     marginBottom: 28,
// // // // // // // // // // // // // // // // // //     shadowColor: '#8B5CF6',
// // // // // // // // // // // // // // // // // //     shadowOffset: { width: 0, height: 8 },
// // // // // // // // // // // // // // // // // //     shadowOpacity: 0.4,
// // // // // // // // // // // // // // // // // //     shadowRadius: 12,
// // // // // // // // // // // // // // // // // //     elevation: 8,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   aiButtonContent: {
// // // // // // // // // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   aiButtonTextContainer: {
// // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // //     marginLeft: 16,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   aiButtonTitle: {
// // // // // // // // // // // // // // // // // //     color: '#FFF',
// // // // // // // // // // // // // // // // // //     fontSize: 18,
// // // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   aiButtonSub: {
// // // // // // // // // // // // // // // // // //     color: '#E2E8F0',
// // // // // // // // // // // // // // // // // //     fontSize: 13,
// // // // // // // // // // // // // // // // // //     marginTop: 4,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   section: {
// // // // // // // // // // // // // // // // // //     marginBottom: 28,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   sectionHeader: {
// // // // // // // // // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // // //     marginBottom: 16,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   sectionTitle: {
// // // // // // // // // // // // // // // // // //     fontSize: 20,
// // // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // // //     color: '#F8FAFC',
// // // // // // // // // // // // // // // // // //     marginBottom: 12,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   seeAllText: {
// // // // // // // // // // // // // // // // // //     color: '#3B82F6',
// // // // // // // // // // // // // // // // // //     fontWeight: '600',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   shortcutsList: {
// // // // // // // // // // // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // // // // // // // // // // //     flexGrow: 1,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   shortcutItem: {
// // // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // // //     marginRight: 20,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   iconContainer: {
// // // // // // // // // // // // // // // // // //     width: 64,
// // // // // // // // // // // // // // // // // //     height: 64,
// // // // // // // // // // // // // // // // // //     borderRadius: 20,
// // // // // // // // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // // //     marginBottom: 8,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   shortcutText: {
// // // // // // // // // // // // // // // // // //     color: '#CBD5E1',
// // // // // // // // // // // // // // // // // //     fontSize: 13,
// // // // // // // // // // // // // // // // // //     fontWeight: '500',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   carouselList: {
// // // // // // // // // // // // // // // // // //     paddingRight: 20,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   tripCard: {
// // // // // // // // // // // // // // // // // //     width: width * 0.75,
// // // // // // // // // // // // // // // // // //     height: 200,
// // // // // // // // // // // // // // // // // //     borderRadius: 24,
// // // // // // // // // // // // // // // // // //     marginRight: 16,
// // // // // // // // // // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   tripImage: {
// // // // // // // // // // // // // // // // // //     width: '100%',
// // // // // // // // // // // // // // // // // //     height: '100%',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   tripOverlay: {
// // // // // // // // // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // // // // // // // // //     bottom: 0,
// // // // // // // // // // // // // // // // // //     left: 0,
// // // // // // // // // // // // // // // // // //     right: 0,
// // // // // // // // // // // // // // // // // //     padding: 20,
// // // // // // // // // // // // // // // // // //     backgroundColor: 'rgba(15, 23, 42, 0.7)',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   tripTitle: {
// // // // // // // // // // // // // // // // // //     color: '#FFF',
// // // // // // // // // // // // // // // // // //     fontSize: 18,
// // // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   tripDate: {
// // // // // // // // // // // // // // // // // //     color: '#CBD5E1',
// // // // // // // // // // // // // // // // // //     fontSize: 14,
// // // // // // // // // // // // // // // // // //     marginTop: 4,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   insightCard: {
// // // // // // // // // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // // // // // // // // //     backgroundColor: '#1E293B',
// // // // // // // // // // // // // // // // // //     padding: 16,
// // // // // // // // // // // // // // // // // //     borderRadius: 16,
// // // // // // // // // // // // // // // // // //     marginBottom: 12,
// // // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   insightIconContainer: {
// // // // // // // // // // // // // // // // // //     width: 48,
// // // // // // // // // // // // // // // // // //     height: 48,
// // // // // // // // // // // // // // // // // //     borderRadius: 12,
// // // // // // // // // // // // // // // // // //     backgroundColor: '#FBBF2420',
// // // // // // // // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // // //     marginRight: 16,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   insightTextContent: {
// // // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   insightTitle: {
// // // // // // // // // // // // // // // // // //     color: '#F8FAFC',
// // // // // // // // // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // // //     marginBottom: 4,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   insightDesc: {
// // // // // // // // // // // // // // // // // //     color: '#94A3B8',
// // // // // // // // // // // // // // // // // //     fontSize: 13,
// // // // // // // // // // // // // // // // // //     lineHeight: 18,
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // //   fab: {
// // // // // // // // // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // // // // // // // // //     bottom: 30,
// // // // // // // // // // // // // // // // // //     right: 20,
// // // // // // // // // // // // // // // // // //     width: 60,
// // // // // // // // // // // // // // // // // //     height: 60,
// // // // // // // // // // // // // // // // // //     borderRadius: 30,
// // // // // // // // // // // // // // // // // //     backgroundColor: '#3B82F6',
// // // // // // // // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // // //     shadowColor: '#3B82F6',
// // // // // // // // // // // // // // // // // //     shadowOffset: { width: 0, height: 4 },
// // // // // // // // // // // // // // // // // //     shadowOpacity: 0.3,
// // // // // // // // // // // // // // // // // //     shadowRadius: 8,
// // // // // // // // // // // // // // // // // //     elevation: 6,
// // // // // // // // // // // // // // // // // //     zIndex: 999, // Ensures it stays on top of all screens
// // // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // // });


// // // // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // // //   View,
// // // // // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // // // // // //   FlatList,
// // // // // // // // // // // // // // // // //   Image,
// // // // // // // // // // // // // // // // //   SafeAreaView,
// // // // // // // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// // // // // // // // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // // // // // // // // Mock Data
// // // // // // // // // // // // // // // // // const upcomingTrips = [
// // // // // // // // // // // // // // // // //   { id: '1', title: 'Kyoto, Japan', date: 'Oct 12 - Oct 20', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop' },
// // // // // // // // // // // // // // // // //   { id: '2', title: 'Amalfi Coast, Italy', date: 'Nov 05 - Nov 10', image: 'https://images.unsplash.com/photo-1610931560965-c3f915cb1d31?q=80&w=400&auto=format&fit=crop' },
// // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // const shortcuts = [
// // // // // // // // // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#10B981' },
// // // // // // // // // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#3B82F6' },
// // // // // // // // // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#8B5CF6' },
// // // // // // // // // // // // // // // // //   { id: '4', name: 'Map', icon: 'map-outline', color: '#F59E0B' },
// // // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // // export default function HomeScreen() {
// // // // // // // // // // // // // // // // //   const renderShortcut = ({ item }) => (
// // // // // // // // // // // // // // // // //     <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.7}>
// // // // // // // // // // // // // // // // //       <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
// // // // // // // // // // // // // // // // //         <Ionicons name={item.icon} size={28} color={item.color} />
// // // // // // // // // // // // // // // // //       </View>
// // // // // // // // // // // // // // // // //       <Text style={styles.shortcutText}>{item.name}</Text>
// // // // // // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // // // // // //   );

// // // // // // // // // // // // // // // // //   const renderTripCard = ({ item }) => (
// // // // // // // // // // // // // // // // //     <TouchableOpacity style={styles.tripCard} activeOpacity={0.8}>
// // // // // // // // // // // // // // // // //       <Image source={{ uri: item.image }} style={styles.tripImage} />
// // // // // // // // // // // // // // // // //       <View style={styles.tripOverlay}>
// // // // // // // // // // // // // // // // //         <Text style={styles.tripTitle}>{item.title}</Text>
// // // // // // // // // // // // // // // // //         <Text style={styles.tripDate}>{item.date}</Text>
// // // // // // // // // // // // // // // // //       </View>
// // // // // // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // // // // // //   );

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
// // // // // // // // // // // // // // // // //         {/* Header Section */}
// // // // // // // // // // // // // // // // //         <View style={styles.header}>
// // // // // // // // // // // // // // // // //           <View>
// // // // // // // // // // // // // // // // //             <Text style={styles.greeting}>Good Morning,</Text>
// // // // // // // // // // // // // // // // //             <Text style={styles.userName}>Ready for your next adventure?</Text>
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //           <TouchableOpacity style={styles.profileAvatar}>
// // // // // // // // // // // // // // // // //             <Image 
// // // // // // // // // // // // // // // // //               source={{ uri: 'https://ui-avatars.com/api/?name=User&background=8B5CF6&color=fff' }} 
// // // // // // // // // // // // // // // // //               style={styles.avatarImage} 
// // // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // //         {/* Big AI Plan Button */}
// // // // // // // // // // // // // // // // //         <TouchableOpacity style={styles.aiButton} activeOpacity={0.8}>
// // // // // // // // // // // // // // // // //           <View style={styles.aiButtonContent}>
// // // // // // // // // // // // // // // // //             <MaterialCommunityIcons name="robot-outline" size={32} color="#FFF" />
// // // // // // // // // // // // // // // // //             <View style={styles.aiButtonTextContainer}>
// // // // // // // // // // // // // // // // //               <Text style={styles.aiButtonTitle}>Plan New Trip with AI</Text>
// // // // // // // // // // // // // // // // //               <Text style={styles.aiButtonSub}>Instantly generate a personalized itinerary</Text>
// // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // //             <Ionicons name="sparkles" size={20} color="#FBBF24" />
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // // // // // //         {/* Shortcuts */}
// // // // // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // // // // // //             data={shortcuts}
// // // // // // // // // // // // // // // // //             renderItem={renderShortcut}
// // // // // // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // // // // // //             contentContainerStyle={styles.shortcutsList}
// // // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // //         {/* Upcoming Trips Carousel */}
// // // // // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // // // // // // // // //             <Text style={styles.sectionTitle}>Upcoming Plans</Text>
// // // // // // // // // // // // // // // // //             <TouchableOpacity><Text style={styles.seeAllText}>See All</Text></TouchableOpacity>
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // // // // // //             data={upcomingTrips}
// // // // // // // // // // // // // // // // //             renderItem={renderTripCard}
// // // // // // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // // // // // //             snapToInterval={width * 0.75 + 16}
// // // // // // // // // // // // // // // // //             decelerationRate="fast"
// // // // // // // // // // // // // // // // //             contentContainerStyle={styles.carouselList}
// // // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // // //         {/* Insights Section (Tips & News) */}
// // // // // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // // // // //           <Text style={styles.sectionTitle}>For You</Text>
          
// // // // // // // // // // // // // // // // //           <View style={styles.insightCard}>
// // // // // // // // // // // // // // // // //             <View style={styles.insightIconContainer}>
// // // // // // // // // // // // // // // // //               <Ionicons name="bulb-outline" size={24} color="#FBBF24" />
// // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // //             <View style={styles.insightTextContent}>
// // // // // // // // // // // // // // // // //               <Text style={styles.insightTitle}>AI Tip of the Day</Text>
// // // // // // // // // // // // // // // // //               <Text style={styles.insightDesc}>Booking flights on Tuesdays usually saves you up to 15% on international travel.</Text>
// // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // //           </View>

// // // // // // // // // // // // // // // // //           <View style={styles.insightCard}>
// // // // // // // // // // // // // // // // //             <View style={[styles.insightIconContainer, { backgroundColor: '#3B82F620' }]}>
// // // // // // // // // // // // // // // // //               <Ionicons name="newspaper-outline" size={24} color="#3B82F6" />
// // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // //             <View style={styles.insightTextContent}>
// // // // // // // // // // // // // // // // //               <Text style={styles.insightTitle}>Travel News</Text>
// // // // // // // // // // // // // // // // //               <Text style={styles.insightDesc}>New digital nomad visa announced for Spain starting this winter.</Text>
// // // // // // // // // // // // // // // // //             </View>
// // // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // // //         </View>
        
// // // // // // // // // // // // // // // // //         {/* Bottom padding so FAB doesn't cover content */}
// // // // // // // // // // // // // // // // //         <View style={{ height: 80 }} />
// // // // // // // // // // // // // // // // //       </ScrollView>

// // // // // // // // // // // // // // // // //       {/* Floating AI Chat Button */}
// // // // // // // // // // // // // // // // //       <TouchableOpacity style={styles.fab} activeOpacity={0.9}>
// // // // // // // // // // // // // // // // //         <Ionicons name="chatbubbles" size={28} color="#FFF" />
// // // // // // // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // // // // // // //     </SafeAreaView>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // // // // // //   container: {
// // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // //     backgroundColor: '#0F172A', // Deep dark blue/gray for that AI tech vibe
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   scrollContent: {
// // // // // // // // // // // // // // // // //     padding: 20,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   header: {
// // // // // // // // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // //     marginBottom: 24,
// // // // // // // // // // // // // // // // //     marginTop: 10,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   greeting: {
// // // // // // // // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // // // // // // // //     color: '#94A3B8',
// // // // // // // // // // // // // // // // //     fontFamily: 'System',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   userName: {
// // // // // // // // // // // // // // // // //     fontSize: 22,
// // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // //     color: '#F8FAFC',
// // // // // // // // // // // // // // // // //     marginTop: 4,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   profileAvatar: {
// // // // // // // // // // // // // // // // //     width: 48,
// // // // // // // // // // // // // // // // //     height: 48,
// // // // // // // // // // // // // // // // //     borderRadius: 24,
// // // // // // // // // // // // // // // // //     borderWidth: 2,
// // // // // // // // // // // // // // // // //     borderColor: '#8B5CF6',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   avatarImage: {
// // // // // // // // // // // // // // // // //     width: '100%',
// // // // // // // // // // // // // // // // //     height: '100%',
// // // // // // // // // // // // // // // // //     borderRadius: 24,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   aiButton: {
// // // // // // // // // // // // // // // // //     backgroundColor: '#8B5CF6', // Vibrant purple
// // // // // // // // // // // // // // // // //     borderRadius: 20,
// // // // // // // // // // // // // // // // //     padding: 20,
// // // // // // // // // // // // // // // // //     marginBottom: 28,
// // // // // // // // // // // // // // // // //     shadowColor: '#8B5CF6',
// // // // // // // // // // // // // // // // //     shadowOffset: { width: 0, height: 8 },
// // // // // // // // // // // // // // // // //     shadowOpacity: 0.4,
// // // // // // // // // // // // // // // // //     shadowRadius: 12,
// // // // // // // // // // // // // // // // //     elevation: 8,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   aiButtonContent: {
// // // // // // // // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   aiButtonTextContainer: {
// // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // //     marginLeft: 16,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   aiButtonTitle: {
// // // // // // // // // // // // // // // // //     color: '#FFF',
// // // // // // // // // // // // // // // // //     fontSize: 18,
// // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   aiButtonSub: {
// // // // // // // // // // // // // // // // //     color: '#E2E8F0',
// // // // // // // // // // // // // // // // //     fontSize: 13,
// // // // // // // // // // // // // // // // //     marginTop: 4,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   section: {
// // // // // // // // // // // // // // // // //     marginBottom: 28,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   sectionHeader: {
// // // // // // // // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // //     marginBottom: 16,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   sectionTitle: {
// // // // // // // // // // // // // // // // //     fontSize: 20,
// // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // //     color: '#F8FAFC',
// // // // // // // // // // // // // // // // //     marginBottom: 12,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   seeAllText: {
// // // // // // // // // // // // // // // // //     color: '#3B82F6',
// // // // // // // // // // // // // // // // //     fontWeight: '600',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   shortcutsList: {
// // // // // // // // // // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // // // // // // // // // //     flexGrow: 1,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   shortcutItem: {
// // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // //     marginRight: 20,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   iconContainer: {
// // // // // // // // // // // // // // // // //     width: 64,
// // // // // // // // // // // // // // // // //     height: 64,
// // // // // // // // // // // // // // // // //     borderRadius: 20,
// // // // // // // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // //     marginBottom: 8,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   shortcutText: {
// // // // // // // // // // // // // // // // //     color: '#CBD5E1',
// // // // // // // // // // // // // // // // //     fontSize: 13,
// // // // // // // // // // // // // // // // //     fontWeight: '500',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   carouselList: {
// // // // // // // // // // // // // // // // //     paddingRight: 20,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   tripCard: {
// // // // // // // // // // // // // // // // //     width: width * 0.75,
// // // // // // // // // // // // // // // // //     height: 200,
// // // // // // // // // // // // // // // // //     borderRadius: 24,
// // // // // // // // // // // // // // // // //     marginRight: 16,
// // // // // // // // // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   tripImage: {
// // // // // // // // // // // // // // // // //     width: '100%',
// // // // // // // // // // // // // // // // //     height: '100%',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   tripOverlay: {
// // // // // // // // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // // // // // // // //     bottom: 0,
// // // // // // // // // // // // // // // // //     left: 0,
// // // // // // // // // // // // // // // // //     right: 0,
// // // // // // // // // // // // // // // // //     padding: 20,
// // // // // // // // // // // // // // // // //     backgroundColor: 'rgba(15, 23, 42, 0.7)',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   tripTitle: {
// // // // // // // // // // // // // // // // //     color: '#FFF',
// // // // // // // // // // // // // // // // //     fontSize: 18,
// // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   tripDate: {
// // // // // // // // // // // // // // // // //     color: '#CBD5E1',
// // // // // // // // // // // // // // // // //     fontSize: 14,
// // // // // // // // // // // // // // // // //     marginTop: 4,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   insightCard: {
// // // // // // // // // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // // // // // // // // //     backgroundColor: '#1E293B',
// // // // // // // // // // // // // // // // //     padding: 16,
// // // // // // // // // // // // // // // // //     borderRadius: 16,
// // // // // // // // // // // // // // // // //     marginBottom: 12,
// // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   insightIconContainer: {
// // // // // // // // // // // // // // // // //     width: 48,
// // // // // // // // // // // // // // // // //     height: 48,
// // // // // // // // // // // // // // // // //     borderRadius: 12,
// // // // // // // // // // // // // // // // //     backgroundColor: '#FBBF2420',
// // // // // // // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // //     marginRight: 16,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   insightTextContent: {
// // // // // // // // // // // // // // // // //     flex: 1,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   insightTitle: {
// // // // // // // // // // // // // // // // //     color: '#F8FAFC',
// // // // // // // // // // // // // // // // //     fontSize: 16,
// // // // // // // // // // // // // // // // //     fontWeight: 'bold',
// // // // // // // // // // // // // // // // //     marginBottom: 4,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   insightDesc: {
// // // // // // // // // // // // // // // // //     color: '#94A3B8',
// // // // // // // // // // // // // // // // //     fontSize: 13,
// // // // // // // // // // // // // // // // //     lineHeight: 18,
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // //   fab: {
// // // // // // // // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // // // // // // // //     bottom: 30,
// // // // // // // // // // // // // // // // //     right: 20,
// // // // // // // // // // // // // // // // //     width: 60,
// // // // // // // // // // // // // // // // //     height: 60,
// // // // // // // // // // // // // // // // //     borderRadius: 30,
// // // // // // // // // // // // // // // // //     backgroundColor: '#3B82F6',
// // // // // // // // // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // // // // // // // // //     alignItems: 'center',
// // // // // // // // // // // // // // // // //     shadowColor: '#3B82F6',
// // // // // // // // // // // // // // // // //     shadowOffset: { width: 0, height: 4 },
// // // // // // // // // // // // // // // // //     shadowOpacity: 0.3,
// // // // // // // // // // // // // // // // //     shadowRadius: 8,
// // // // // // // // // // // // // // // // //     elevation: 6,
// // // // // // // // // // // // // // // // //     zIndex: 999, // Ensures it stays on top of all screens
// // // // // // // // // // // // // // // // //   },
// // // // // // // // // // // // // // // // // });










// // // // // // // // // // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // // //   View,
// // // // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // // // // //   FlatList,
// // // // // // // // // // // // // // // //   Image,
// // // // // // // // // // // // // // // //   SafeAreaView,
// // // // // // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // // // // // //   Animated,
// // // // // // // // // // // // // // // //   TextInput,
// // // // // // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // // // // // // import { LinearGradient } from 'expo-linear-gradient';

// // // // // // // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // // // // // // // --- Mock Data ---
// // // // // // // // // // // // // // // // const upcomingTrips = [
// // // // // // // // // // // // // // // //   { id: '1', title: 'Kyoto, Japan', date: 'Oct 12 - Oct 20', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop' },
// // // // // // // // // // // // // // // //   { id: '2', title: 'Amalfi Coast, Italy', date: 'Nov 05 - Nov 10', image: 'https://images.unsplash.com/photo-1610931560965-c3f915cb1d31?q=80&w=400&auto=format&fit=crop' },
// // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // const shortcuts = [
// // // // // // // // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#10B981' },
// // // // // // // // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#3B82F6' },
// // // // // // // // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#8B5CF6' },
// // // // // // // // // // // // // // // //   { id: '4', name: 'Map', icon: 'map-outline', color: '#F59E0B' },
// // // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // // export default function HomeScreen() {
// // // // // // // // // // // // // // // //   // Animation for the AI Button Pulse
// // // // // // // // // // // // // // // //   const pulseAnim = useRef(new Animated.Value(1)).current;

// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     Animated.loop(
// // // // // // // // // // // // // // // //       Animated.sequence([
// // // // // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1.03, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // // // // //       ])
// // // // // // // // // // // // // // // //     ).start();
// // // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // // //   const renderShortcut = ({ item }) => (
// // // // // // // // // // // // // // // //     <TouchableOpacity style={styles.shortcutItem} activeOpacity={0.7}>
// // // // // // // // // // // // // // // //       <LinearGradient colors={[`${item.color}40`, `${item.color}10`]} style={styles.iconContainer}>
// // // // // // // // // // // // // // // //         <Ionicons name={item.icon} size={28} color={item.color} />
// // // // // // // // // // // // // // // //       </LinearGradient>
// // // // // // // // // // // // // // // //       <Text style={styles.shortcutText}>{item.name}</Text>
// // // // // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // // // // //   );

// // // // // // // // // // // // // // // //   const renderTripCard = ({ item }) => (
// // // // // // // // // // // // // // // //     <TouchableOpacity style={styles.tripCard} activeOpacity={0.8}>
// // // // // // // // // // // // // // // //       <Image source={{ uri: item.image }} style={styles.tripImage} />
// // // // // // // // // // // // // // // //       <LinearGradient colors={['transparent', 'rgba(15, 23, 42, 0.9)']} style={styles.tripOverlay}>
// // // // // // // // // // // // // // // //         <Text style={styles.tripTitle}>{item.title}</Text>
// // // // // // // // // // // // // // // //         <View style={styles.dateBadge}>
// // // // // // // // // // // // // // // //           <Ionicons name="calendar-outline" size={12} color="#8B5CF6" />
// // // // // // // // // // // // // // // //           <Text style={styles.tripDate}>{item.date}</Text>
// // // // // // // // // // // // // // // //         </View>
// // // // // // // // // // // // // // // //       </LinearGradient>
// // // // // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // // // // //   );

// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // // // // // // // //       {/* Background Decorative AI Aura */}
// // // // // // // // // // // // // // // //       <View style={styles.blob1} />
// // // // // // // // // // // // // // // //       <View style={styles.blob2} />

// // // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
// // // // // // // // // // // // // // // //         {/* Header Section */}
// // // // // // // // // // // // // // // //         <View style={styles.header}>
// // // // // // // // // // // // // // // //           <View>
// // // // // // // // // // // // // // // //             <Text style={styles.greeting}>Welcome back,</Text>
// // // // // // // // // // // // // // // //             <Text style={styles.userName}>Explorer Alex</Text>
// // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // //           <TouchableOpacity style={styles.profileAvatar}>
// // // // // // // // // // // // // // // //             <Image 
// // // // // // // // // // // // // // // //               source={{ uri: 'https://ui-avatars.com/api/?name=Alex&background=8B5CF6&color=fff' }} 
// // // // // // // // // // // // // // // //               style={styles.avatarImage} 
// // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // //         {/* Search Bar Section */}
// // // // // // // // // // // // // // // //         <View style={styles.searchContainer}>
// // // // // // // // // // // // // // // //           <View style={styles.searchBar}>
// // // // // // // // // // // // // // // //             <Ionicons name="search-outline" size={20} color="#94A3B8" style={{ marginRight: 10 }} />
// // // // // // // // // // // // // // // //             <TextInput 
// // // // // // // // // // // // // // // //               placeholder="Search destinations, flights..." 
// // // // // // // // // // // // // // // //               placeholderTextColor="#64748B"
// // // // // // // // // // // // // // // //               style={styles.searchInput}
// // // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // // //             <TouchableOpacity style={styles.filterButton}>
// // // // // // // // // // // // // // // //               <Ionicons name="options-outline" size={18} color="#8B5CF6" />
// // // // // // // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // //         {/* Dynamic AI Plan Button */}
// // // // // // // // // // // // // // // //         <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// // // // // // // // // // // // // // // //           <TouchableOpacity activeOpacity={0.9}>
// // // // // // // // // // // // // // // //             <LinearGradient
// // // // // // // // // // // // // // // //               colors={['#8B5CF6', '#6366F1']}
// // // // // // // // // // // // // // // //               start={{ x: 0, y: 0 }}
// // // // // // // // // // // // // // // //               end={{ x: 1, y: 1 }}
// // // // // // // // // // // // // // // //               style={styles.aiButton}
// // // // // // // // // // // // // // // //             >
// // // // // // // // // // // // // // // //               <View style={styles.aiButtonContent}>
// // // // // // // // // // // // // // // //                 <View style={styles.aiIconCircle}>
// // // // // // // // // // // // // // // //                   <MaterialCommunityIcons name="robot-confused-outline" size={30} color="#FFF" />
// // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // //                 <View style={styles.aiButtonTextContainer}>
// // // // // // // // // // // // // // // //                   <Text style={styles.aiButtonTitle}>Neural Itinerary</Text>
// // // // // // // // // // // // // // // //                   <Text style={styles.aiButtonSub}>AI is ready to draft your dream trip</Text>
// // // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // // //                 <Ionicons name="sparkles" size={24} color="#FBBF24" />
// // // // // // // // // // // // // // // //               </View> 
// // // // // // // // // // // // // // // //             </LinearGradient>
// // // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // // //         </Animated.View>

// // // // // // // // // // // // // // // //         {/* Shortcuts Section */}
// // // // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // // // // //             data={shortcuts}
// // // // // // // // // // // // // // // //             renderItem={renderShortcut}
// // // // // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // // // // //             contentContainerStyle={styles.shortcutsList}
// // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // //         {/* Upcoming Trips Carousel */}
// // // // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // // // // // // // //             <Text style={styles.sectionTitle}>Active Itineraries</Text>
// // // // // // // // // // // // // // // //             <TouchableOpacity><Text style={styles.seeAllText}>View All</Text></TouchableOpacity>
// // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // // // // //             data={upcomingTrips}
// // // // // // // // // // // // // // // //             renderItem={renderTripCard}
// // // // // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // // // // //             snapToInterval={width * 0.7 + 20}
// // // // // // // // // // // // // // // //             decelerationRate="fast"
// // // // // // // // // // // // // // // //             contentContainerStyle={styles.carouselList}
// // // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // // //         {/* Glassmorphism AI Insight Card */}
// // // // // // // // // // // // // // // //         <View style={styles.glassCard}>
// // // // // // // // // // // // // // // //           <View style={styles.glassHeader}>
// // // // // // // // // // // // // // // //             <Ionicons name="analytics" size={20} color="#8B5CF6" />
// // // // // // // // // // // // // // // //             <Text style={styles.glassTitle}>AI TRAVEL INSIGHT</Text>
// // // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // // //           <Text style={styles.insightDesc}>
// // // // // // // // // // // // // // // //             Based on your interest in <Text style={{color: '#FFF', fontWeight: 'bold'}}>Kyoto</Text>, we suggest visiting Arashiyama at 6:30 AM to beat the crowds.
// // // // // // // // // // // // // // // //           </Text>
// // // // // // // // // // // // // // // //         </View>
        
// // // // // // // // // // // // // // // //         {/* Bottom Padding */}
// // // // // // // // // // // // // // // //         <View style={{ height: 100 }} />
// // // // // // // // // // // // // // // //       </ScrollView>

// // // // // // // // // // // // // // // //       {/* Floating AI Chat Button */}
// // // // // // // // // // // // // // // //       <TouchableOpacity style={styles.fab} activeOpacity={0.9}>
// // // // // // // // // // // // // // // //         <LinearGradient colors={['#3B82F6', '#2563EB']} style={styles.fabGradient}>
// // // // // // // // // // // // // // // //           <Ionicons name="chatbubble-ellipses" size={28} color="#FFF" />
// // // // // // // // // // // // // // // //         </LinearGradient>
// // // // // // // // // // // // // // // //       </TouchableOpacity>
// // // // // // // // // // // // // // // //     </SafeAreaView>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // // // // // // // // // // //   // AI Background Effects
// // // // // // // // // // // // // // // //   blob1: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: '#8B5CF6', top: -50, right: -50, opacity: 0.15 },
// // // // // // // // // // // // // // // //   blob2: { position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: '#3B82F6', bottom: 100, left: -50, opacity: 0.1 },
// // // // // // // // // // // // // // // //   scrollContent: { padding: 20 },
// // // // // // // // // // // // // // // //   header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25, marginTop: 10 },
// // // // // // // // // // // // // // // //   greeting: { fontSize: 13, color: '#64748B', textTransform: 'uppercase', letterSpacing: 1 },
// // // // // // // // // // // // // // // //   userName: { fontSize: 26, fontWeight: '800', color: '#F8FAFC' },
// // // // // // // // // // // // // // // //   profileAvatar: { padding: 3, borderRadius: 30, borderWidth: 1, borderColor: '#8B5CF6' },
// // // // // // // // // // // // // // // //   avatarImage: { width: 45, height: 45, borderRadius: 22 },
  
// // // // // // // // // // // // // // // //   // Search Bar
// // // // // // // // // // // // // // // //   searchContainer: { marginBottom: 25 },
// // // // // // // // // // // // // // // //   searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: 16, paddingHorizontal: 15, height: 55, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.05)' },
// // // // // // // // // // // // // // // //   searchInput: { flex: 1, color: '#F8FAFC', fontSize: 16 },
// // // // // // // // // // // // // // // //   filterButton: { padding: 8, backgroundColor: 'rgba(139, 92, 246, 0.1)', borderRadius: 10 },

// // // // // // // // // // // // // // // //   // AI Button
// // // // // // // // // // // // // // // //   aiButton: { borderRadius: 24, padding: 2, marginBottom: 30 },
// // // // // // // // // // // // // // // //   aiButtonContent: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)', padding: 16, borderRadius: 22 },
// // // // // // // // // // // // // // // //   aiIconCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
// // // // // // // // // // // // // // // //   aiButtonTextContainer: { flex: 1, marginLeft: 15 },
// // // // // // // // // // // // // // // //   aiButtonTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // // // // //   aiButtonSub: { color: '#DDD', fontSize: 12 },

// // // // // // // // // // // // // // // //   // Sections
// // // // // // // // // // // // // // // //   section: { marginBottom: 32 },
// // // // // // // // // // // // // // // //   sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
// // // // // // // // // // // // // // // //   sectionTitle: { fontSize: 18, fontWeight: '700', color: '#F8FAFC' },
// // // // // // // // // // // // // // // //   seeAllText: { color: '#8B5CF6', fontSize: 14 },
// // // // // // // // // // // // // // // //   shortcutItem: { alignItems: 'center', marginRight: 24 },
// // // // // // // // // // // // // // // //   iconContainer: { width: 60, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
// // // // // // // // // // // // // // // //   shortcutText: { color: '#94A3B8', fontSize: 12, fontWeight: '600' },

// // // // // // // // // // // // // // // //   // Trip Cards
// // // // // // // // // // // // // // // //   tripCard: { width: width * 0.7, height: 220, borderRadius: 30, marginRight: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
// // // // // // // // // // // // // // // //   tripImage: { width: '100%', height: '100%' },
// // // // // // // // // // // // // // // //   tripOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', padding: 20, justifyContent: 'flex-end' },
// // // // // // // // // // // // // // // //   tripTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // // // // //   dateBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)', alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, marginTop: 6 },
// // // // // // // // // // // // // // // //   tripDate: { color: '#FFF', fontSize: 11, marginLeft: 5 },

// // // // // // // // // // // // // // // //   // Glass Insights
// // // // // // // // // // // // // // // //   glassCard: { backgroundColor: 'rgba(30, 41, 59, 0.5)', borderRadius: 24, padding: 20, borderWidth: 1, borderColor: 'rgba(139, 92, 246, 0.3)' },
// // // // // // // // // // // // // // // //   glassHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
// // // // // // // // // // // // // // // //   glassTitle: { color: '#8B5CF6', fontSize: 12, fontWeight: '800', marginLeft: 8, letterSpacing: 1 },
// // // // // // // // // // // // // // // //   insightDesc: { color: '#94A3B8', fontSize: 14, lineHeight: 20 },

// // // // // // // // // // // // // // // //   // Floating Action Button
// // // // // // // // // // // // // // // //   fab: { position: 'absolute', bottom: 30, right: 20, width: 65, height: 65, borderRadius: 32.5, elevation: 10, shadowColor: '#3B82F6', shadowOpacity: 0.5, shadowRadius: 10 },
// // // // // // // // // // // // // // // //   fabGradient: { flex: 1, borderRadius: 32.5, justifyContent: 'center', alignItems: 'center' }
// // // // // // // // // // // // // // // // });





// // // // // // // // // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // // // // // // // // import {
// // // // // // // // // // // // // // //   View,
// // // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // // // //   FlatList,
// // // // // // // // // // // // // // //   Image,
// // // // // // // // // // // // // // //   SafeAreaView,
// // // // // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // // // // //   Animated,
// // // // // // // // // // // // // // //   TextInput,
// // // // // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // // // // // import { LinearGradient } from 'expo-linear-gradient';

// // // // // // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // // // // // const shortcuts = [
// // // // // // // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#10B981' },
// // // // // // // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#3B82F6' },
// // // // // // // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#8B5CF6' },
// // // // // // // // // // // // // // //   { id: '4', name: 'Map', icon: 'map-outline', color: '#F59E0B' },
// // // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // // // // // // // // // //   const pulseAnim = useRef(new Animated.Value(1)).current;

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     Animated.loop(
// // // // // // // // // // // // // // //       Animated.sequence([
// // // // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1.04, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // // // //       ])
// // // // // // // // // // // // // // //     ).start();
// // // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // // //   const renderShortcut = ({ item }) => (
// // // // // // // // // // // // // // //     <TouchableOpacity 
// // // // // // // // // // // // // // //       style={styles.shortcutItem} 
// // // // // // // // // // // // // // //       activeOpacity={0.7}
// // // // // // // // // // // // // // //       onPress={() => {
// // // // // // // // // // // // // // //         if (item.name === 'Hotels') navigation.navigate('HotelSearch');
// // // // // // // // // // // // // // //         if (item.name === 'Budget') navigation.navigate('Budget');
// // // // // // // // // // // // // // //       }}
// // // // // // // // // // // // // // //     >
// // // // // // // // // // // // // // //       <LinearGradient colors={[`${item.color}40`, `${item.color}10`]} style={styles.iconContainer}>
// // // // // // // // // // // // // // //         <Ionicons name={item.icon} size={28} color={item.color} />
// // // // // // // // // // // // // // //       </LinearGradient>
// // // // // // // // // // // // // // //       <Text style={styles.shortcutText}>{item.name}</Text>
// // // // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // // // //   );

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // // // // // // //       <View style={styles.blob1} />
// // // // // // // // // // // // // // //       <View style={styles.blob2} />

// // // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
// // // // // // // // // // // // // // //         {/* Header */}
// // // // // // // // // // // // // // //         <View style={styles.header}>
// // // // // // // // // // // // // // //           <View>
// // // // // // // // // // // // // // //             <Text style={styles.greeting}>Welcome back,</Text>
// // // // // // // // // // // // // // //             <Text style={styles.userName}>Explorer Alex</Text>
// // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // //           <View style={styles.profileAvatar}>
// // // // // // // // // // // // // // //             <Image 
// // // // // // // // // // // // // // //               source={{ uri: 'https://ui-avatars.com/api/?name=Alex&background=8B5CF6&color=fff' }} 
// // // // // // // // // // // // // // //               style={styles.avatarImage} 
// // // // // // // // // // // // // // //             />
// // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // //         {/* Search Input */}
// // // // // // // // // // // // // // //         <View style={styles.searchBar}>
// // // // // // // // // // // // // // //           <Ionicons name="search" size={20} color="#64748B" />
// // // // // // // // // // // // // // //           <TextInput 
// // // // // // // // // // // // // // //             placeholder="Search your next destination..." 
// // // // // // // // // // // // // // //             placeholderTextColor="#64748B"
// // // // // // // // // // // // // // //             style={styles.input}
// // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // //         {/* AI Action Button */}
// // // // // // // // // // // // // // //         <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// // // // // // // // // // // // // // //           <TouchableOpacity 
// // // // // // // // // // // // // // //             activeOpacity={0.9} 
// // // // // // // // // // // // // // //             onPress={() => navigation.navigate('HotelSearch')}
// // // // // // // // // // // // // // //           >
// // // // // // // // // // // // // // //             <LinearGradient colors={['#8B5CF6', '#6366F1']} style={styles.aiButton}>
// // // // // // // // // // // // // // //               <View style={styles.aiContent}>
// // // // // // // // // // // // // // //                 <MaterialCommunityIcons name="robot" size={32} color="#FFF" />
// // // // // // // // // // // // // // //                 <View style={{ marginLeft: 15, flex: 1 }}>
// // // // // // // // // // // // // // //                   <Text style={styles.aiTitle}>Plan with AI</Text>
// // // // // // // // // // // // // // //                   <Text style={styles.aiSub}>Generate a smart itinerary instantly</Text>
// // // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // // //                 <Ionicons name="sparkles" size={20} color="#FBBF24" />
// // // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // // //             </LinearGradient>
// // // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // // //         </Animated.View>

// // // // // // // // // // // // // // //         {/* Shortcuts */}
// // // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // // //           <Text style={styles.sectionTitle}>Services</Text>
// // // // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // // // //             data={shortcuts}
// // // // // // // // // // // // // // //             renderItem={renderShortcut}
// // // // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // // // //           />
// // // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // // //         {/* Quick Budget Preview */}
// // // // // // // // // // // // // // //         <TouchableOpacity 
// // // // // // // // // // // // // // //            style={styles.budgetPreview}
// // // // // // // // // // // // // // //            onPress={() => navigation.navigate('Budget')}
// // // // // // // // // // // // // // //         >
// // // // // // // // // // // // // // //           <View>
// // // // // // // // // // // // // // //             <Text style={styles.budgetLabel}>Current Trip Budget</Text>
// // // // // // // // // // // // // // //             <Text style={styles.budgetValue}>$2,120 <Text style={{fontSize: 12, color: '#94A3B8'}}>/ $5,000</Text></Text>
// // // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // // //           <Ionicons name="chevron-forward" size={20} color="#8B5CF6" />
// // // // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // // // //     </SafeAreaView>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // // // // // // // // // //   blob1: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: '#8B5CF6', top: -50, right: -50, opacity: 0.1 },
// // // // // // // // // // // // // // //   blob2: { position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: '#3B82F6', bottom: 100, left: -50, opacity: 0.1 },
// // // // // // // // // // // // // // //   scrollContent: { padding: 20 },
// // // // // // // // // // // // // // //   header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
// // // // // // // // // // // // // // //   greeting: { color: '#64748B', fontSize: 14 },
// // // // // // // // // // // // // // //   userName: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
// // // // // // // // // // // // // // //   profileAvatar: { width: 45, height: 45, borderRadius: 22, borderWidth: 1, borderColor: '#8B5CF6', overflow: 'hidden' },
// // // // // // // // // // // // // // //   avatarImage: { width: '100%', height: '100%' },
// // // // // // // // // // // // // // //   searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', padding: 15, borderRadius: 15, marginBottom: 25, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // // // // //   input: { marginLeft: 10, color: '#FFF', flex: 1 },
// // // // // // // // // // // // // // //   aiButton: { padding: 20, borderRadius: 20, marginBottom: 30 },
// // // // // // // // // // // // // // //   aiContent: { flexDirection: 'row', alignItems: 'center' },
// // // // // // // // // // // // // // //   aiTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // // // //   aiSub: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
// // // // // // // // // // // // // // //   section: { marginBottom: 30 },
// // // // // // // // // // // // // // //   sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
// // // // // // // // // // // // // // //   shortcutItem: { alignItems: 'center', marginRight: 25 },
// // // // // // // // // // // // // // //   iconContainer: { width: 60, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
// // // // // // // // // // // // // // //   shortcutText: { color: '#94A3B8', fontSize: 12 },
// // // // // // // // // // // // // // //   budgetPreview: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0F172A', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // // // // //   budgetLabel: { color: '#64748B', fontSize: 12, marginBottom: 5 },
// // // // // // // // // // // // // // //   budgetValue: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
// // // // // // // // // // // // // // // });








// // // // // // // // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // // // // // // // import {
// // // // // // // // // // // // // //   View,
// // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // // //   FlatList,
// // // // // // // // // // // // // //   Image,
// // // // // // // // // // // // // //   SafeAreaView,
// // // // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // // // //   Animated,
// // // // // // // // // // // // // //   TextInput,
// // // // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // // // // import { LinearGradient } from 'expo-linear-gradient';

// // // // // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // // // // // 1. Added 'Planner' to the shortcuts array
// // // // // // // // // // // // // // const shortcuts = [
// // // // // // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#10B981' },
// // // // // // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#3B82F6' },
// // // // // // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#8B5CF6' },
// // // // // // // // // // // // // //   { id: '4', name: 'Planner', icon: 'calendar-outline', color: '#EC4899' }, // New Feature
// // // // // // // // // // // // // //   { id: '5', name: 'Map', icon: 'map-outline', color: '#F59E0B' },
// // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // // // // // // // // //   const pulseAnim = useRef(new Animated.Value(1)).current;

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     Animated.loop(
// // // // // // // // // // // // // //       Animated.sequence([
// // // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1.04, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // // //       ])
// // // // // // // // // // // // // //     ).start();
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   const renderShortcut = ({ item }) => (
// // // // // // // // // // // // // //     <TouchableOpacity 
// // // // // // // // // // // // // //       style={styles.shortcutItem} 
// // // // // // // // // // // // // //       activeOpacity={0.7}
// // // // // // // // // // // // // //       onPress={() => {
// // // // // // // // // // // // // //         // 2. Added navigation logic for the new feature
// // // // // // // // // // // // // //         if (item.name === 'Hotels') navigation.navigate('HotelSearch');
// // // // // // // // // // // // // //         if (item.name === 'Budget') navigation.navigate('Budget');
// // // // // // // // // // // // // //         if (item.name === 'Planner') navigation.navigate('Planner'); // New Logic
// // // // // // // // // // // // // //       }}
// // // // // // // // // // // // // //     >
// // // // // // // // // // // // // //       <LinearGradient colors={[`${item.color}40`, `${item.color}10`]} style={styles.iconContainer}>
// // // // // // // // // // // // // //         <Ionicons name={item.icon} size={28} color={item.color} />
// // // // // // // // // // // // // //       </LinearGradient>
// // // // // // // // // // // // // //       <Text style={styles.shortcutText}>{item.name}</Text>
// // // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // // //   );

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // // // // // //       <View style={styles.blob1} />
// // // // // // // // // // // // // //       <View style={styles.blob2} />

// // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
// // // // // // // // // // // // // //         {/* Header */}
// // // // // // // // // // // // // //         <View style={styles.header}>
// // // // // // // // // // // // // //           <View>
// // // // // // // // // // // // // //             <Text style={styles.greeting}>Welcome back,</Text>
// // // // // // // // // // // // // //             <Text style={styles.userName}>Explorer Alex</Text>
// // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // //           <View style={styles.profileAvatar}>
// // // // // // // // // // // // // //             <Image 
// // // // // // // // // // // // // //               source={{ uri: 'https://ui-avatars.com/api/?name=Alex&background=8B5CF6&color=fff' }} 
// // // // // // // // // // // // // //               style={styles.avatarImage} 
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // //         {/* Search Input */}
// // // // // // // // // // // // // //         <View style={styles.searchBar}>
// // // // // // // // // // // // // //           <Ionicons name="search" size={20} color="#64748B" />
// // // // // // // // // // // // // //           <TextInput 
// // // // // // // // // // // // // //             placeholder="Search your next destination..." 
// // // // // // // // // // // // // //             placeholderTextColor="#64748B"
// // // // // // // // // // // // // //             style={styles.input}
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // //         {/* AI Action Button */}
// // // // // // // // // // // // // //         <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// // // // // // // // // // // // // //           <TouchableOpacity 
// // // // // // // // // // // // // //             activeOpacity={0.9} 
// // // // // // // // // // // // // //             onPress={() => navigation.navigate('HotelSearch')}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <LinearGradient colors={['#8B5CF6', '#6366F1']} style={styles.aiButton}>
// // // // // // // // // // // // // //               <View style={styles.aiContent}>
// // // // // // // // // // // // // //                 <MaterialCommunityIcons name="robot" size={32} color="#FFF" />
// // // // // // // // // // // // // //                 <View style={{ marginLeft: 15, flex: 1 }}>
// // // // // // // // // // // // // //                   <Text style={styles.aiTitle}>Plan with AI</Text>
// // // // // // // // // // // // // //                   <Text style={styles.aiSub}>Generate a smart itinerary instantly</Text>
// // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // //                 <Ionicons name="sparkles" size={20} color="#FBBF24" />
// // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // //             </LinearGradient>
// // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // //         </Animated.View>

// // // // // // // // // // // // // //         {/* Shortcuts */}
// // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // //           <Text style={styles.sectionTitle}>Services</Text>
// // // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // // //             data={shortcuts}
// // // // // // // // // // // // // //             renderItem={renderShortcut}
// // // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // //         {/* 3. New Feature: Itinerary Planner Preview Section */}
// // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // // // // // //             <Text style={styles.sectionTitle}>Next Trip Plan</Text>
// // // // // // // // // // // // // //             <TouchableOpacity onPress={() => navigation.navigate('Planner')}>
// // // // // // // // // // // // // //               <Text style={styles.seeAllText}>View Schedule</Text>
// // // // // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // // // // //           </View>
          
// // // // // // // // // // // // // //           <View style={styles.plannerCard}>
// // // // // // // // // // // // // //              <View style={styles.dateBadge}>
// // // // // // // // // // // // // //                 <Text style={styles.dateText}>12</Text>
// // // // // // // // // // // // // //                 <Text style={styles.monthText}>OCT</Text>
// // // // // // // // // // // // // //              </View>
// // // // // // // // // // // // // //              <View style={styles.plannerInfo}>
// // // // // // // // // // // // // //                 <Text style={styles.planTitle}>Tokyo City Exploration</Text>
// // // // // // // // // // // // // //                 <Text style={styles.planSub}>Shibuya Crossing & Meiji Shrine</Text>
// // // // // // // // // // // // // //              </View>
// // // // // // // // // // // // // //              <MaterialCommunityIcons name="calendar-check" size={24} color="#EC4899" />
// // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // //         {/* Quick Budget Preview */}
// // // // // // // // // // // // // //         <TouchableOpacity 
// // // // // // // // // // // // // //            style={styles.budgetPreview}
// // // // // // // // // // // // // //            onPress={() => navigation.navigate('Budget')}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <View>
// // // // // // // // // // // // // //             <Text style={styles.budgetLabel}>Current Trip Budget</Text>
// // // // // // // // // // // // // //             <Text style={styles.budgetValue}>$2,120 <Text style={{fontSize: 12, color: '#94A3B8'}}>/ $5,000</Text></Text>
// // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // //           <Ionicons name="chevron-forward" size={20} color="#8B5CF6" />
// // // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // // //     </SafeAreaView>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // // // // // // // // //   blob1: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: '#8B5CF6', top: -50, right: -50, opacity: 0.1 },
// // // // // // // // // // // // // //   blob2: { position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: '#3B82F6', bottom: 100, left: -50, opacity: 0.1 },
// // // // // // // // // // // // // //   scrollContent: { padding: 20 },
// // // // // // // // // // // // // //   header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
// // // // // // // // // // // // // //   greeting: { color: '#64748B', fontSize: 14 },
// // // // // // // // // // // // // //   userName: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
// // // // // // // // // // // // // //   profileAvatar: { width: 45, height: 45, borderRadius: 22, borderWidth: 1, borderColor: '#8B5CF6', overflow: 'hidden' },
// // // // // // // // // // // // // //   avatarImage: { width: '100%', height: '100%' },
// // // // // // // // // // // // // //   searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', padding: 15, borderRadius: 15, marginBottom: 25, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // // // //   input: { marginLeft: 10, color: '#FFF', flex: 1 },
// // // // // // // // // // // // // //   aiButton: { padding: 20, borderRadius: 20, marginBottom: 30 },
// // // // // // // // // // // // // //   aiContent: { flexDirection: 'row', alignItems: 'center' },
// // // // // // // // // // // // // //   aiTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // // //   aiSub: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
// // // // // // // // // // // // // //   section: { marginBottom: 30 },
// // // // // // // // // // // // // //   sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
// // // // // // // // // // // // // //   sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // // //   seeAllText: { color: '#8B5CF6', fontSize: 12 },
// // // // // // // // // // // // // //   shortcutItem: { alignItems: 'center', marginRight: 25 },
// // // // // // // // // // // // // //   iconContainer: { width: 60, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
// // // // // // // // // // // // // //   shortcutText: { color: '#94A3B8', fontSize: 12 },
// // // // // // // // // // // // // //   budgetPreview: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0F172A', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // // // //   budgetLabel: { color: '#64748B', fontSize: 12, marginBottom: 5 },
// // // // // // // // // // // // // //   budgetValue: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  
// // // // // // // // // // // // // //   // New Planner Styles
// // // // // // // // // // // // // //   plannerCard: { 
// // // // // // // // // // // // // //     flexDirection: 'row', 
// // // // // // // // // // // // // //     alignItems: 'center', 
// // // // // // // // // // // // // //     backgroundColor: '#0F172A', 
// // // // // // // // // // // // // //     padding: 15, 
// // // // // // // // // // // // // //     borderRadius: 20, 
// // // // // // // // // // // // // //     borderWidth: 1, 
// // // // // // // // // // // // // //     borderColor: '#1E293B' 
// // // // // // // // // // // // // //   },
// // // // // // // // // // // // // //   dateBadge: { 
// // // // // // // // // // // // // //     backgroundColor: '#1E293B', 
// // // // // // // // // // // // // //     padding: 10, 
// // // // // // // // // // // // // //     borderRadius: 12, 
// // // // // // // // // // // // // //     alignItems: 'center', 
// // // // // // // // // // // // // //     width: 50 
// // // // // // // // // // // // // //   },
// // // // // // // // // // // // // //   dateText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
// // // // // // // // // // // // // //   monthText: { color: '#EC4899', fontSize: 10, fontWeight: 'bold' },
// // // // // // // // // // // // // //   plannerInfo: { flex: 1, marginLeft: 15 },
// // // // // // // // // // // // // //   planTitle: { color: '#FFF', fontWeight: '600', fontSize: 15 },
// // // // // // // // // // // // // //   planSub: { color: '#64748B', fontSize: 12, marginTop: 2 },
// // // // // // // // // // // // // // });







// // // // // // // // // // // // // // -----nnn


// // // // // // // // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // // // // // // // import {
// // // // // // // // // // // // // //   View,
// // // // // // // // // // // // // //   Text,
// // // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // // //   FlatList,
// // // // // // // // // // // // // //   Image,
// // // // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // // // //   Animated,
// // // // // // // // // // // // // //   TextInput,
// // // // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // // // import { SafeAreaView } from 'react-native-safe-area-context'; // Updated for best practice
// // // // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // // // // import { LinearGradient } from 'expo-linear-gradient';

// // // // // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // // // // const shortcuts = [
// // // // // // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#10B981' },
// // // // // // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#3B82F6' },
// // // // // // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#8B5CF6' },
// // // // // // // // // // // // // //   { id: '4', name: 'Planner', icon: 'calendar-outline', color: '#EC4899' },
// // // // // // // // // // // // // //   { id: '5', name: 'News', icon: 'newspaper-outline', color: '#6366F1' },
// // // // // // // // // // // // // //   { id: '6', name: 'Map', icon: 'map-outline', color: '#F59E0B' },
// // // // // // // // // // // // // // ];

// // // // // // // // // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // // // // // // // // //   const pulseAnim = useRef(new Animated.Value(1)).current;

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     Animated.loop(
// // // // // // // // // // // // // //       Animated.sequence([
// // // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1.04, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // // //       ])
// // // // // // // // // // // // // //     ).start();
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   const renderShortcut = ({ item }) => (
// // // // // // // // // // // // // //     <TouchableOpacity 
// // // // // // // // // // // // // //       style={styles.shortcutItem} 
// // // // // // // // // // // // // //       activeOpacity={0.7}
// // // // // // // // // // // // // //       onPress={() => {
// // // // // // // // // // // // // //         if (item.name === 'Hotels') navigation.navigate('HotelSearch');
// // // // // // // // // // // // // //         if (item.name === 'Budget') navigation.navigate('Budget');
// // // // // // // // // // // // // //         if (item.name === 'Planner') navigation.navigate('Planner');
// // // // // // // // // // // // // //         if (item.name === 'News') navigation.navigate('News');
// // // // // // // // // // // // // //       }}
// // // // // // // // // // // // // //     >
// // // // // // // // // // // // // //       <LinearGradient colors={[`${item.color}40`, `${item.color}10`]} style={styles.iconContainer}>
// // // // // // // // // // // // // //         <Ionicons name={item.icon} size={28} color={item.color} />
// // // // // // // // // // // // // //       </LinearGradient>
// // // // // // // // // // // // // //       <Text style={styles.shortcutText}>{item.name}</Text>
// // // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // // //   );

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // // // // // //       {/* Background Decorative Blobs */}
// // // // // // // // // // // // // //       <View style={styles.blob1} />
// // // // // // // // // // // // // //       <View style={styles.blob2} />

// // // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
// // // // // // // // // // // // // //         {/* Header */}
// // // // // // // // // // // // // //         <View style={styles.header}>
// // // // // // // // // // // // // //           <View>
// // // // // // // // // // // // // //             <Text style={styles.greeting}>Welcome back,</Text>
// // // // // // // // // // // // // //             <Text style={styles.userName}>Explorer Alex</Text>
// // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // //           {/* FIXED: Changed div to View to prevent crash */}
// // // // // // // // // // // // // //           <View style={styles.profileAvatar}>
// // // // // // // // // // // // // //             <Image 
// // // // // // // // // // // // // //               source={{ uri: 'https://ui-avatars.com/api/?name=Alex&background=8B5CF6&color=fff' }} 
// // // // // // // // // // // // // //               style={styles.avatarImage} 
// // // // // // // // // // // // // //             />
// // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // //         {/* Search Input */}
// // // // // // // // // // // // // //         <View style={styles.searchBar}>
// // // // // // // // // // // // // //           <Ionicons name="search" size={20} color="#64748B" />
// // // // // // // // // // // // // //           <TextInput 
// // // // // // // // // // // // // //             placeholder="Search your next destination..." 
// // // // // // // // // // // // // //             placeholderTextColor="#64748B"
// // // // // // // // // // // // // //             style={styles.input}
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // //         {/* AI Action Button */}
// // // // // // // // // // // // // //         <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// // // // // // // // // // // // // //           <TouchableOpacity 
// // // // // // // // // // // // // //             activeOpacity={0.9} 
// // // // // // // // // // // // // //             onPress={() => navigation.navigate('Planner')}
// // // // // // // // // // // // // //           >
// // // // // // // // // // // // // //             <LinearGradient colors={['#8B5CF6', '#6366F1']} style={styles.aiButton}>
// // // // // // // // // // // // // //               <View style={styles.aiContent}>
// // // // // // // // // // // // // //                 <MaterialCommunityIcons name="robot" size={32} color="#FFF" />
// // // // // // // // // // // // // //                 <View style={{ marginLeft: 15, flex: 1 }}>
// // // // // // // // // // // // // //                   <Text style={styles.aiTitle}>Plan with AI</Text>
// // // // // // // // // // // // // //                   <Text style={styles.aiSub}>Generate a smart itinerary instantly</Text>
// // // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // // //                 <Ionicons name="sparkles" size={20} color="#FBBF24" />
// // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // //             </LinearGradient>
// // // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // // //         </Animated.View>

// // // // // // // // // // // // // //         {/* Services Shortcuts */}
// // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // //           <Text style={styles.sectionTitle}>Services</Text>
// // // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // // //             data={shortcuts}
// // // // // // // // // // // // // //             renderItem={renderShortcut}
// // // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // // //           />
// // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // //         {/* Next Trip Plan Section */}
// // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // // // // // //             <Text style={styles.sectionTitle}>Next Trip Plan</Text>
// // // // // // // // // // // // // //             <TouchableOpacity onPress={() => navigation.navigate('Planner')}>
// // // // // // // // // // // // // //               <Text style={styles.seeAllText}>View Schedule</Text>
// // // // // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // // // // //           </View>
          
// // // // // // // // // // // // // //           <View style={styles.plannerCard}>
// // // // // // // // // // // // // //              <View style={styles.dateBadge}>
// // // // // // // // // // // // // //                 <Text style={styles.dateText}>12</Text>
// // // // // // // // // // // // // //                 <Text style={styles.monthText}>OCT</Text>
// // // // // // // // // // // // // //              </View>
// // // // // // // // // // // // // //              <View style={styles.plannerInfo}>
// // // // // // // // // // // // // //                 <Text style={styles.planTitle}>Tokyo City Exploration</Text>
// // // // // // // // // // // // // //                 <Text style={styles.planSub}>Shibuya Crossing & Meiji Shrine</Text>
// // // // // // // // // // // // // //              </View>
// // // // // // // // // // // // // //              <MaterialCommunityIcons name="calendar-check" size={24} color="#EC4899" />
// // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // //         {/* News Preview Section */}
// // // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // // // // // //             <Text style={styles.sectionTitle}>Latest Startup News</Text>
// // // // // // // // // // // // // //             <TouchableOpacity onPress={() => navigation.navigate('News')}>
// // // // // // // // // // // // // //               <Text style={styles.seeAllText}>Read More</Text>
// // // // // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // //           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
// // // // // // // // // // // // // //             <TouchableOpacity 
// // // // // // // // // // // // // //               style={styles.newsCard} 
// // // // // // // // // // // // // //               onPress={() => navigation.navigate('News')}
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               <Image 
// // // // // // // // // // // // // //                 source={{ uri: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400' }} 
// // // // // // // // // // // // // //                 style={styles.newsImage} 
// // // // // // // // // // // // // //               />
// // // // // // // // // // // // // //               <View style={styles.newsOverlay}>
// // // // // // // // // // // // // //                 <Text style={styles.newsTag}>Trending</Text>
// // // // // // // // // // // // // //                 <Text style={styles.newsTitle}>AI in Travel: The 2026 Shift</Text>
// // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // //             </TouchableOpacity>
            
// // // // // // // // // // // // // //             <TouchableOpacity 
// // // // // // // // // // // // // //               style={[styles.newsCard, { marginLeft: 15 }]} 
// // // // // // // // // // // // // //               onPress={() => navigation.navigate('News')}
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               <Image 
// // // // // // // // // // // // // //                 source={{ uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400' }} 
// // // // // // // // // // // // // //                 style={styles.newsImage} 
// // // // // // // // // // // // // //               />
// // // // // // // // // // // // // //               <View style={styles.newsOverlay}>
// // // // // // // // // // // // // //                 <Text style={[styles.newsTag, { backgroundColor: '#10B981' }]}>Growth</Text>
// // // // // // // // // // // // // //                 <Text style={styles.newsTitle}>Sustainable Tech Startups</Text>
// // // // // // // // // // // // // //               </View>
// // // // // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // // // // //           </ScrollView>
// // // // // // // // // // // // // //         </View>

// // // // // // // // // // // // // //         {/* Quick Budget Preview */}
// // // // // // // // // // // // // //         <TouchableOpacity 
// // // // // // // // // // // // // //            style={styles.budgetPreview}
// // // // // // // // // // // // // //            onPress={() => navigation.navigate('Budget')}
// // // // // // // // // // // // // //         >
// // // // // // // // // // // // // //           <View>
// // // // // // // // // // // // // //             <Text style={styles.budgetLabel}>Current Trip Budget</Text>
// // // // // // // // // // // // // //             <Text style={styles.budgetValue}>$2,120 <Text style={{fontSize: 12, color: '#94A3B8'}}>/ $5,000</Text></Text>
// // // // // // // // // // // // // //           </View>
// // // // // // // // // // // // // //           <Ionicons name="chevron-forward" size={20} color="#8B5CF6" />
// // // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // // //     </SafeAreaView>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // // // // // // // // //   blob1: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: '#8B5CF6', top: -50, right: -50, opacity: 0.1 },
// // // // // // // // // // // // // //   blob2: { position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: '#3B82F6', bottom: 100, left: -50, opacity: 0.1 },
// // // // // // // // // // // // // //   scrollContent: { padding: 20 },
// // // // // // // // // // // // // //   header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
// // // // // // // // // // // // // //   greeting: { color: '#64748B', fontSize: 14 },
// // // // // // // // // // // // // //   userName: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
// // // // // // // // // // // // // //   profileAvatar: { width: 45, height: 45, borderRadius: 22, borderWidth: 1, borderColor: '#8B5CF6', overflow: 'hidden' },
// // // // // // // // // // // // // //   avatarImage: { width: '100%', height: '100%' },
// // // // // // // // // // // // // //   searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', padding: 15, borderRadius: 15, marginBottom: 25, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // // // //   input: { marginLeft: 10, color: '#FFF', flex: 1 },
// // // // // // // // // // // // // //   aiButton: { padding: 20, borderRadius: 20, marginBottom: 30 },
// // // // // // // // // // // // // //   aiContent: { flexDirection: 'row', alignItems: 'center' },
// // // // // // // // // // // // // //   aiTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // // //   aiSub: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
// // // // // // // // // // // // // //   section: { marginBottom: 30 },
// // // // // // // // // // // // // //   sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
// // // // // // // // // // // // // //   sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // // //   seeAllText: { color: '#8B5CF6', fontSize: 12 },
// // // // // // // // // // // // // //   shortcutItem: { alignItems: 'center', marginRight: 25 },
// // // // // // // // // // // // // //   iconContainer: { width: 60, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
// // // // // // // // // // // // // //   shortcutText: { color: '#94A3B8', fontSize: 12 },
// // // // // // // // // // // // // //   budgetPreview: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0F172A', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // // // //   budgetLabel: { color: '#64748B', fontSize: 12, marginBottom: 5 },
// // // // // // // // // // // // // //   budgetValue: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  
// // // // // // // // // // // // // //   plannerCard: { 
// // // // // // // // // // // // // //     flexDirection: 'row', 
// // // // // // // // // // // // // //     alignItems: 'center', 
// // // // // // // // // // // // // //     backgroundColor: '#0F172A', 
// // // // // // // // // // // // // //     padding: 15, 
// // // // // // // // // // // // // //     borderRadius: 20, 
// // // // // // // // // // // // // //     borderWidth: 1, 
// // // // // // // // // // // // // //     borderColor: '#1E293B' 
// // // // // // // // // // // // // //   },
// // // // // // // // // // // // // //   dateBadge: { 
// // // // // // // // // // // // // //     backgroundColor: '#1E293B', 
// // // // // // // // // // // // // //     padding: 10, 
// // // // // // // // // // // // // //     borderRadius: 12, 
// // // // // // // // // // // // // //     alignItems: 'center', 
// // // // // // // // // // // // // //     width: 50 
// // // // // // // // // // // // // //   },
// // // // // // // // // // // // // //   dateText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
// // // // // // // // // // // // // //   monthText: { color: '#EC4899', fontSize: 10, fontWeight: 'bold' },
// // // // // // // // // // // // // //   plannerInfo: { flex: 1, marginLeft: 15 },
// // // // // // // // // // // // // //   planTitle: { color: '#FFF', fontWeight: '600', fontSize: 15 },
// // // // // // // // // // // // // //   planSub: { color: '#64748B', fontSize: 12, marginTop: 2 },

// // // // // // // // // // // // // //   newsCard: { width: 280, height: 160, borderRadius: 20, overflow: 'hidden', backgroundColor: '#0F172A' },
// // // // // // // // // // // // // //   newsImage: { width: '100%', height: '100%', opacity: 0.6 },
// // // // // // // // // // // // // //   newsOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 15 },
// // // // // // // // // // // // // //   newsTag: { alignSelf: 'flex-start', backgroundColor: '#6366F1', color: '#FFF', fontSize: 10, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5, marginBottom: 5 },
// // // // // // // // // // // // // //   newsTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
// // // // // // // // // // // // // // });










// // // // // // // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // // // // // // import {
// // // // // // // // // // // // //   View,
// // // // // // // // // // // // //   Text,
// // // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // // //   FlatList,
// // // // // // // // // // // // //   Image,
// // // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // // //   Animated,
// // // // // // // // // // // // //   TextInput,
// // // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // // // import { LinearGradient } from 'expo-linear-gradient';

// // // // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // // // const shortcuts = [
// // // // // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#10B981' },
// // // // // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#3B82F6' },
// // // // // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#8B5CF6' },
// // // // // // // // // // // // //   { id: '4', name: 'Planner', icon: 'calendar-outline', color: '#EC4899' },
// // // // // // // // // // // // //   { id: '5', name: 'News', icon: 'newspaper-outline', color: '#6366F1' },
// // // // // // // // // // // // //   { id: '6', name: 'Live Map', icon: 'navigate-outline', color: '#F59E0B' }, // Updated Name & Icon
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // // // // // // // //   const pulseAnim = useRef(new Animated.Value(1)).current;

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     Animated.loop(
// // // // // // // // // // // // //       Animated.sequence([
// // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1.04, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // // //       ])
// // // // // // // // // // // // //     ).start();
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   const renderShortcut = ({ item }) => (
// // // // // // // // // // // // //     <TouchableOpacity 
// // // // // // // // // // // // //       style={styles.shortcutItem} 
// // // // // // // // // // // // //       activeOpacity={0.7}
// // // // // // // // // // // // //       onPress={() => {
// // // // // // // // // // // // //         if (item.name === 'Hotels') navigation.navigate('HotelSearch');
// // // // // // // // // // // // //         if (item.name === 'Budget') navigation.navigate('Budget');
// // // // // // // // // // // // //         if (item.name === 'Planner') navigation.navigate('Planner');
// // // // // // // // // // // // //         if (item.name === 'News') navigation.navigate('News');
// // // // // // // // // // // // //         if (item.name === 'Live Map') navigation.navigate('LiveNavigation'); // Added Navigation
// // // // // // // // // // // // //       }}
// // // // // // // // // // // // //     >
// // // // // // // // // // // // //       <LinearGradient colors={[`${item.color}40`, `${item.color}10`]} style={styles.iconContainer}>
// // // // // // // // // // // // //         <Ionicons name={item.icon} size={28} color={item.color} />
// // // // // // // // // // // // //       </LinearGradient>
// // // // // // // // // // // // //       <Text style={styles.shortcutText}>{item.name}</Text>
// // // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // // // // //       <View style={styles.blob1} />
// // // // // // // // // // // // //       <View style={styles.blob2} />

// // // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
// // // // // // // // // // // // //         {/* Header */}
// // // // // // // // // // // // //         <View style={styles.header}>
// // // // // // // // // // // // //           <View>
// // // // // // // // // // // // //             <Text style={styles.greeting}>Welcome back,</Text>
// // // // // // // // // // // // //             <Text style={styles.userName}>Chaitanya Patil</Text> 
// // // // // // // // // // // // //           </View>
// // // // // // // // // // // // //           <View style={styles.profileAvatar}>
// // // // // // // // // // // // //             <Image 
// // // // // // // // // // // // //               source={{ uri: 'https://ui-avatars.com/api/?name=Chaitanya&background=8B5CF6&color=fff' }} 
// // // // // // // // // // // // //               style={styles.avatarImage} 
// // // // // // // // // // // // //             />
// // // // // // // // // // // // //           </View>
// // // // // // // // // // // // //         </View>

// // // // // // // // // // // // //         {/* Search Input */}
// // // // // // // // // // // // //         <View style={styles.searchBar}>
// // // // // // // // // // // // //           <Ionicons name="search" size={20} color="#64748B" />
// // // // // // // // // // // // //           <TextInput 
// // // // // // // // // // // // //             placeholder="Search your next destination..." 
// // // // // // // // // // // // //             placeholderTextColor="#64748B"
// // // // // // // // // // // // //             style={styles.input}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </View>

// // // // // // // // // // // // //         {/* AI Action Button */}
// // // // // // // // // // // // //         <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
// // // // // // // // // // // // //           <TouchableOpacity 
// // // // // // // // // // // // //             activeOpacity={0.9} 
// // // // // // // // // // // // //             onPress={() => navigation.navigate('Planner')}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <LinearGradient colors={['#8B5CF6', '#6366F1']} style={styles.aiButton}>
// // // // // // // // // // // // //               <View style={styles.aiContent}>
// // // // // // // // // // // // //                 <MaterialCommunityIcons name="robot" size={32} color="#FFF" />
// // // // // // // // // // // // //                 <View style={{ marginLeft: 15, flex: 1 }}>
// // // // // // // // // // // // //                   <Text style={styles.aiTitle}>Plan with AI</Text>
// // // // // // // // // // // // //                   <Text style={styles.aiSub}>Generate a smart itinerary instantly</Text>
// // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // //                 <Ionicons name="sparkles" size={20} color="#FBBF24" />
// // // // // // // // // // // // //               </View>
// // // // // // // // // // // // //             </LinearGradient>
// // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // //         </Animated.View>

// // // // // // // // // // // // //         {/* Services Shortcuts */}
// // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // //           <Text style={styles.sectionTitle}>Services</Text>
// // // // // // // // // // // // //           <FlatList
// // // // // // // // // // // // //             data={shortcuts}
// // // // // // // // // // // // //             renderItem={renderShortcut}
// // // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // // //             horizontal
// // // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // // //           />
// // // // // // // // // // // // //         </View>

// // // // // // // // // // // // //         {/* NEW: Map Navigation Section */}
// // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // // // // //             <Text style={styles.sectionTitle}>Smart Navigation</Text>
// // // // // // // // // // // // //             <TouchableOpacity onPress={() => navigation.navigate('LiveNavigation')}>
// // // // // // // // // // // // //               <Text style={styles.seeAllText}>Open Full Map</Text>
// // // // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // // // //           </View>
          
// // // // // // // // // // // // //           <TouchableOpacity 
// // // // // // // // // // // // //             style={styles.navPreviewCard}
// // // // // // // // // // // // //             onPress={() => navigation.navigate('LiveNavigation')}
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             <LinearGradient 
// // // // // // // // // // // // //               colors={['rgba(16, 185, 129, 0.2)', 'rgba(15, 23, 42, 1)']} 
// // // // // // // // // // // // //               style={styles.navGradient}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <View style={styles.navInfo}>
// // // // // // // // // // // // //                 <Ionicons name="navigate-circle" size={40} color="#10B981" />
// // // // // // // // // // // // //                 <View style={{marginLeft: 15, flex: 1}}>
// // // // // // // // // // // // //                   <Text style={styles.navTitle}>Active Route</Text>
// // // // // // // // // // // // //                   <Text style={styles.navSub}>Tracking Gateway of India...</Text>
// // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // //                 <View style={styles.navBadge}>
// // // // // // // // // // // // //                   <Text style={styles.navBadgeText}>LIVE</Text>
// // // // // // // // // // // // //                 </View>
// // // // // // // // // // // // //               </View>
// // // // // // // // // // // // //             </LinearGradient>
// // // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // // //         </View>

// // // // // // // // // // // // //         {/* Next Trip Plan Section */}
// // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // // // // //             <Text style={styles.sectionTitle}>Next Trip Plan</Text>
// // // // // // // // // // // // //             <TouchableOpacity onPress={() => navigation.navigate('Planner')}>
// // // // // // // // // // // // //               <Text style={styles.seeAllText}>View Schedule</Text>
// // // // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // // // //           </View>
          
// // // // // // // // // // // // //           <View style={styles.plannerCard}>
// // // // // // // // // // // // //               <View style={styles.dateBadge}>
// // // // // // // // // // // // //                 <Text style={styles.dateText}>12</Text>
// // // // // // // // // // // // //                 <Text style={styles.monthText}>OCT</Text>
// // // // // // // // // // // // //               </View>
// // // // // // // // // // // // //               <View style={styles.plannerInfo}>
// // // // // // // // // // // // //                 <Text style={styles.planTitle}>Tokyo City Exploration</Text>
// // // // // // // // // // // // //                 <Text style={styles.planSub}>Shibuya Crossing & Meiji Shrine</Text>
// // // // // // // // // // // // //               </View>
// // // // // // // // // // // // //               <MaterialCommunityIcons name="calendar-check" size={24} color="#EC4899" />
// // // // // // // // // // // // //           </View>
// // // // // // // // // // // // //         </View>

// // // // // // // // // // // // //         {/* News Preview Section */}
// // // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // // // // //             <Text style={styles.sectionTitle}>Latest Startup News</Text>
// // // // // // // // // // // // //             <TouchableOpacity onPress={() => navigation.navigate('News')}>
// // // // // // // // // // // // //               <Text style={styles.seeAllText}>Read More</Text>
// // // // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // // // //           </View>
// // // // // // // // // // // // //           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
// // // // // // // // // // // // //             <TouchableOpacity 
// // // // // // // // // // // // //               style={styles.newsCard} 
// // // // // // // // // // // // //               onPress={() => navigation.navigate('News')}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               <Image 
// // // // // // // // // // // // //                 source={{ uri: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400' }} 
// // // // // // // // // // // // //                 style={styles.newsImage} 
// // // // // // // // // // // // //               />
// // // // // // // // // // // // //               <View style={styles.newsOverlay}>
// // // // // // // // // // // // //                 <Text style={styles.newsTag}>Trending</Text>
// // // // // // // // // // // // //                 <Text style={styles.newsTitle}>AI in Travel: The 2026 Shift</Text>
// // // // // // // // // // // // //               </View>
// // // // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // // // //           </ScrollView>
// // // // // // // // // // // // //         </View>

// // // // // // // // // // // // //         {/* Quick Budget Preview */}
// // // // // // // // // // // // //         <TouchableOpacity 
// // // // // // // // // // // // //            style={styles.budgetPreview}
// // // // // // // // // // // // //            onPress={() => navigation.navigate('Budget')}
// // // // // // // // // // // // //         >
// // // // // // // // // // // // //           <View>
// // // // // // // // // // // // //             <Text style={styles.budgetLabel}>Current Trip Budget</Text>
// // // // // // // // // // // // //             <Text style={styles.budgetValue}>$2,120 <Text style={{fontSize: 12, color: '#94A3B8'}}>/ $5,000</Text></Text>
// // // // // // // // // // // // //           </View>
// // // // // // // // // // // // //           <Ionicons name="chevron-forward" size={20} color="#8B5CF6" />
// // // // // // // // // // // // //         </TouchableOpacity>

// // // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // // //     </SafeAreaView>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // // // // // // // //   blob1: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: '#8B5CF6', top: -50, right: -50, opacity: 0.1 },
// // // // // // // // // // // // //   blob2: { position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: '#3B82F6', bottom: 100, left: -50, opacity: 0.1 },
// // // // // // // // // // // // //   scrollContent: { padding: 20 },
// // // // // // // // // // // // //   header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
// // // // // // // // // // // // //   greeting: { color: '#64748B', fontSize: 14 },
// // // // // // // // // // // // //   userName: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
// // // // // // // // // // // // //   profileAvatar: { width: 45, height: 45, borderRadius: 22, borderWidth: 1, borderColor: '#8B5CF6', overflow: 'hidden' },
// // // // // // // // // // // // //   avatarImage: { width: '100%', height: '100%' },
// // // // // // // // // // // // //   searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', padding: 15, borderRadius: 15, marginBottom: 25, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // // //   input: { marginLeft: 10, color: '#FFF', flex: 1 },
// // // // // // // // // // // // //   aiButton: { padding: 20, borderRadius: 20, marginBottom: 30 },
// // // // // // // // // // // // //   aiContent: { flexDirection: 'row', alignItems: 'center' },
// // // // // // // // // // // // //   aiTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // //   aiSub: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
// // // // // // // // // // // // //   section: { marginBottom: 30 },
// // // // // // // // // // // // //   sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
// // // // // // // // // // // // //   sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // // //   seeAllText: { color: '#8B5CF6', fontSize: 12 },
// // // // // // // // // // // // //   shortcutItem: { alignItems: 'center', marginRight: 25 },
// // // // // // // // // // // // //   iconContainer: { width: 60, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
// // // // // // // // // // // // //   shortcutText: { color: '#94A3B8', fontSize: 12 },
// // // // // // // // // // // // //   budgetPreview: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#0F172A', padding: 20, borderRadius: 20, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // // //   budgetLabel: { color: '#64748B', fontSize: 12, marginBottom: 5 },
// // // // // // // // // // // // //   budgetValue: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  
// // // // // // // // // // // // //   // Navigation Preview Card
// // // // // // // // // // // // //   navPreviewCard: { borderRadius: 20, overflow: 'hidden', borderWidth: 1, borderColor: '#1E293B', backgroundColor: '#0F172A' },
// // // // // // // // // // // // //   navGradient: { padding: 20 },
// // // // // // // // // // // // //   navInfo: { flexDirection: 'row', alignItems: 'center' },
// // // // // // // // // // // // //   navTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
// // // // // // // // // // // // //   navSub: { color: '#94A3B8', fontSize: 12, marginTop: 2 },
// // // // // // // // // // // // //   navBadge: { backgroundColor: 'rgba(239, 68, 68, 0.2)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
// // // // // // // // // // // // //   navBadgeText: { color: '#EF4444', fontSize: 10, fontWeight: 'bold' },

// // // // // // // // // // // // //   plannerCard: { 
// // // // // // // // // // // // //     flexDirection: 'row', 
// // // // // // // // // // // // //     alignItems: 'center', 
// // // // // // // // // // // // //     backgroundColor: '#0F172A', 
// // // // // // // // // // // // //     padding: 15, 
// // // // // // // // // // // // //     borderRadius: 20, 
// // // // // // // // // // // // //     borderWidth: 1, 
// // // // // // // // // // // // //     borderColor: '#1E293B' 
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   dateBadge: { 
// // // // // // // // // // // // //     backgroundColor: '#1E293B', 
// // // // // // // // // // // // //     padding: 10, 
// // // // // // // // // // // // //     borderRadius: 12, 
// // // // // // // // // // // // //     alignItems: 'center', 
// // // // // // // // // // // // //     width: 50 
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   dateText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
// // // // // // // // // // // // //   monthText: { color: '#EC4899', fontSize: 10, fontWeight: 'bold' },
// // // // // // // // // // // // //   plannerInfo: { flex: 1, marginLeft: 15 },
// // // // // // // // // // // // //   planTitle: { color: '#FFF', fontWeight: '600', fontSize: 15 },
// // // // // // // // // // // // //   planSub: { color: '#64748B', fontSize: 12, marginTop: 2 },

// // // // // // // // // // // // //   newsCard: { width: 280, height: 160, borderRadius: 20, overflow: 'hidden', backgroundColor: '#0F172A' },
// // // // // // // // // // // // //   newsImage: { width: '100%', height: '100%', opacity: 0.6 },
// // // // // // // // // // // // //   newsOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 15 },
// // // // // // // // // // // // //   newsTag: { alignSelf: 'flex-start', backgroundColor: '#6366F1', color: '#FFF', fontSize: 10, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 5, marginBottom: 5 },
// // // // // // // // // // // // //   newsTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
// // // // // // // // // // // // // });












// // // // // // // // // // // // import React, { useEffect, useRef, useState } from 'react'; // Added useState
// // // // // // // // // // // // import {
// // // // // // // // // // // //   View,
// // // // // // // // // // // //   Text,
// // // // // // // // // // // //   StyleSheet,
// // // // // // // // // // // //   ScrollView,
// // // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // // //   FlatList,
// // // // // // // // // // // //   Image,
// // // // // // // // // // // //   Dimensions,
// // // // // // // // // // // //   Animated,
// // // // // // // // // // // //   TextInput,
// // // // // // // // // // // //   ActivityIndicator, // Added for loading state
// // // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // // // // // // // // import axios from 'axios'; // Ensure axios is installed

// // // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // // const shortcuts = [
// // // // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#10B981' },
// // // // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#3B82F6' },
// // // // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#8B5CF6' },
// // // // // // // // // // // //   { id: '4', name: 'Planner', icon: 'calendar-outline', color: '#EC4899' },
// // // // // // // // // // // //   { id: '5', name: 'News', icon: 'newspaper-outline', color: '#6366F1' },
// // // // // // // // // // // //   { id: '6', name: 'Live Map', icon: 'navigate-outline', color: '#F59E0B' },
// // // // // // // // // // // // ];

// // // // // // // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // // // // // // //   const pulseAnim = useRef(new Animated.Value(1)).current;
  
// // // // // // // // // // // //   // ====================== NEW STATE FOR SEARCH ======================
// // // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // // // // // //   const [cityImages, setCityImages] = useState([]);
// // // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     Animated.loop(
// // // // // // // // // // // //       Animated.sequence([
// // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1.04, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // // //       ])
// // // // // // // // // // // //     ).start();
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   // ====================== FETCH IMAGES LOGIC ======================
// // // // // // // // // // // //   const handleSearch = async () => {
// // // // // // // // // // // //     if (!searchQuery.trim()) return;
// // // // // // // // // // // //     setLoading(true);
// // // // // // // // // // // //     try {
// // // // // // // // // // // //       // Replace with your local IP if testing on a physical device
// // // // // // // // // // // //       const response = await axios.get(`http://10.176.82.30:3000/api/photos?query=${searchQuery}`);
// // // // // // // // // // // //       if (response.data.success) {
// // // // // // // // // // // //         setCityImages(response.data.photos);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     } catch (error) {
// // // // // // // // // // // //       console.error("Search fetch failed", error);
// // // // // // // // // // // //     } finally {
// // // // // // // // // // // //       setLoading(false);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const renderShortcut = ({ item }) => (
// // // // // // // // // // // //     <TouchableOpacity 
// // // // // // // // // // // //       style={styles.shortcutItem} 
// // // // // // // // // // // //       activeOpacity={0.7}
// // // // // // // // // // // //       onPress={() => {
// // // // // // // // // // // //         if (item.name === 'Hotels') navigation.navigate('HotelSearch');
// // // // // // // // // // // //         if (item.name === 'Budget') navigation.navigate('Budget');
// // // // // // // // // // // //         if (item.name === 'Planner') navigation.navigate('Planner');
// // // // // // // // // // // //         if (item.name === 'News') navigation.navigate('News');
// // // // // // // // // // // //         if (item.name === 'Live Map') navigation.navigate('LiveNavigation');
// // // // // // // // // // // //       }}
// // // // // // // // // // // //     >
// // // // // // // // // // // //       <LinearGradient colors={[`${item.color}40`, `${item.color}10`]} style={styles.iconContainer}>
// // // // // // // // // // // //         <Ionicons name={item.icon} size={28} color={item.color} />
// // // // // // // // // // // //       </LinearGradient>
// // // // // // // // // // // //       <Text style={styles.shortcutText}>{item.name}</Text>
// // // // // // // // // // // //     </TouchableOpacity>
// // // // // // // // // // // //   );

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // // // //       <View style={styles.blob1} />
// // // // // // // // // // // //       <View style={styles.blob2} />

// // // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
// // // // // // // // // // // //         {/* Header */}
// // // // // // // // // // // //         <View style={styles.header}>
// // // // // // // // // // // //           <View>
// // // // // // // // // // // //             <Text style={styles.greeting}>Welcome back,</Text>
// // // // // // // // // // // //             <Text style={styles.userName}>Chaitanya Patil</Text> 
// // // // // // // // // // // //           </View>
// // // // // // // // // // // //           <View style={styles.profileAvatar}>
// // // // // // // // // // // //             <Image 
// // // // // // // // // // // //               source={{ uri: 'https://ui-avatars.com/api/?name=Chaitanya&background=8B5CF6&color=fff' }} 
// // // // // // // // // // // //               style={styles.avatarImage} 
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </View>
// // // // // // // // // // // //         </View>

// // // // // // // // // // // //         {/* Search Input */}
// // // // // // // // // // // //         <View style={styles.searchBar}>
// // // // // // // // // // // //           <Ionicons name="search" size={20} color="#64748B" />
// // // // // // // // // // // //           <TextInput 
// // // // // // // // // // // //             placeholder="Search your next destination..." 
// // // // // // // // // // // //             placeholderTextColor="#64748B"
// // // // // // // // // // // //             style={styles.input}
// // // // // // // // // // // //             value={searchQuery}
// // // // // // // // // // // //             onChangeText={setSearchQuery}
// // // // // // // // // // // //             onSubmitEditing={handleSearch} // Triggers search on 'Enter'
// // // // // // // // // // // //             returnKeyType="search"
// // // // // // // // // // // //           />
// // // // // // // // // // // //           {loading && <ActivityIndicator size="small" color="#8B5CF6" />}
// // // // // // // // // // // //         </View>

// // // // // // // // // // // //         {/* ====================== NEW: CITY IMAGE CAROUSEL ====================== */}
// // // // // // // // // // // //         {cityImages.length > 0 && (
// // // // // // // // // // // //           <View style={styles.carouselContainer}>
// // // // // // // // // // // //             <Text style={styles.sectionTitle}>Explore {searchQuery}</Text>
// // // // // // // // // // // //             <FlatList
// // // // // // // // // // // //               data={cityImages}
// // // // // // // // // // // //               horizontal
// // // // // // // // // // // //               showsHorizontalScrollIndicator={false}
// // // // // // // // // // // //               keyExtractor={(item) => item.id}
// // // // // // // // // // // //               snapToInterval={width * 0.7 + 15}
// // // // // // // // // // // //               decelerationRate="fast"
// // // // // // // // // // // //               renderItem={({ item }) => (
// // // // // // // // // // // //                 <View style={styles.cityCard}>
// // // // // // // // // // // //                   <Image source={{ uri: item.url }} style={styles.cityImage} />
// // // // // // // // // // // //                   <View style={styles.cityInfoOverlay}>
// // // // // // // // // // // //                     <Text style={styles.photographerText}>By {item.photographer}</Text>
// // // // // // // // // // // //                   </View>
// // // // // // // // // // // //                 </View>
// // // // // // // // // // // //               )}
// // // // // // // // // // // //             />
// // // // // // // // // // // //           </View>
// // // // // // // // // // // //         )}

// // // // // // // // // // // //         {/* AI Action Button */}
// // // // // // // // // // // //         <Animated.View style={{ transform: [{ scale: pulseAnim }], marginTop: cityImages.length > 0 ? 10 : 0 }}>
// // // // // // // // // // // //           <TouchableOpacity 
// // // // // // // // // // // //             activeOpacity={0.9} 
// // // // // // // // // // // //             onPress={() => navigation.navigate('Planner')}
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <LinearGradient colors={['#8B5CF6', '#6366F1']} style={styles.aiButton}>
// // // // // // // // // // // //               <View style={styles.aiContent}>
// // // // // // // // // // // //                 <MaterialCommunityIcons name="robot" size={32} color="#FFF" />
// // // // // // // // // // // //                 <View style={{ marginLeft: 15, flex: 1 }}>
// // // // // // // // // // // //                   <Text style={styles.aiTitle}>Plan with AI</Text>
// // // // // // // // // // // //                   <Text style={styles.aiSub}>Generate a smart itinerary instantly</Text>
// // // // // // // // // // // //                 </View>
// // // // // // // // // // // //                 <Ionicons name="sparkles" size={20} color="#FBBF24" />
// // // // // // // // // // // //               </View>
// // // // // // // // // // // //             </LinearGradient>
// // // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // // //         </Animated.View>

// // // // // // // // // // // //         {/* Rest of your sections (Services, Navigation, News, etc.) */}
// // // // // // // // // // // //         {/* ... [Keep all your existing sections below] ... */}
        
// // // // // // // // // // // //         {/* Services Shortcuts */}
// // // // // // // // // // // //         <View style={styles.section}>
// // // // // // // // // // // //           <Text style={styles.sectionTitle}>Services</Text>
// // // // // // // // // // // //           <FlatList
// // // // // // // // // // // //             data={shortcuts}
// // // // // // // // // // // //             renderItem={renderShortcut}
// // // // // // // // // // // //             keyExtractor={item => item.id}
// // // // // // // // // // // //             horizontal
// // // // // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // // // // //           />
// // // // // // // // // // // //         </View>

// // // // // // // // // // // //         {/* [Keep the rest of your original components here] */}

// // // // // // // // // // // //       </ScrollView>
// // // // // // // // // // // //     </SafeAreaView>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // // //   // ... [Keep all your existing styles]
// // // // // // // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // // // // // // //   blob1: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: '#8B5CF6', top: -50, right: -50, opacity: 0.1 },
// // // // // // // // // // // //   blob2: { position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: '#3B82F6', bottom: 100, left: -50, opacity: 0.1 },
// // // // // // // // // // // //   scrollContent: { padding: 20 },
// // // // // // // // // // // //   header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
// // // // // // // // // // // //   greeting: { color: '#64748B', fontSize: 14 },
// // // // // // // // // // // //   userName: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
// // // // // // // // // // // //   profileAvatar: { width: 45, height: 45, borderRadius: 22, borderWidth: 1, borderColor: '#8B5CF6', overflow: 'hidden' },
// // // // // // // // // // // //   avatarImage: { width: '100%', height: '100%' },
// // // // // // // // // // // //   searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', padding: 15, borderRadius: 15, marginBottom: 25, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // // //   input: { marginLeft: 10, color: '#FFF', flex: 1 },
  
// // // // // // // // // // // //   // NEW CAROUSEL STYLES
// // // // // // // // // // // //   carouselContainer: { marginBottom: 25 },
// // // // // // // // // // // //   cityCard: { 
// // // // // // // // // // // //     width: width * 0.7, 
// // // // // // // // // // // //     height: 180, 
// // // // // // // // // // // //     marginRight: 15, 
// // // // // // // // // // // //     borderRadius: 20, 
// // // // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // // // //     backgroundColor: '#1E293B'
// // // // // // // // // // // //   },
// // // // // // // // // // // //   cityImage: { width: '100%', height: '100%', resizeMode: 'cover' },
// // // // // // // // // // // //   cityInfoOverlay: {
// // // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // // //     bottom: 0,
// // // // // // // // // // // //     left: 0,
// // // // // // // // // // // //     right: 0,
// // // // // // // // // // // //     padding: 10,
// // // // // // // // // // // //     backgroundColor: 'rgba(0,0,0,0.3)'
// // // // // // // // // // // //   },
// // // // // // // // // // // //   photographerText: { color: '#FFF', fontSize: 10, opacity: 0.8 },

// // // // // // // // // // // //   aiButton: { padding: 20, borderRadius: 20, marginBottom: 30 },
// // // // // // // // // // // //   aiContent: { flexDirection: 'row', alignItems: 'center' },
// // // // // // // // // // // //   aiTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // // //   aiSub: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
// // // // // // // // // // // //   section: { marginBottom: 30 },
// // // // // // // // // // // //   sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
// // // // // // // // // // // //   shortcutItem: { alignItems: 'center', marginRight: 25 },
// // // // // // // // // // // //   iconContainer: { width: 60, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
// // // // // // // // // // // //   shortcutText: { color: '#94A3B8', fontSize: 12 },
// // // // // // // // // // // //   // ... [Include other styles as needed]
// // // // // // // // // // // // });











// // // // // // // // // // // import React, { useEffect, useRef, useState } from 'react';
// // // // // // // // // // // import {
// // // // // // // // // // //   View,
// // // // // // // // // // //   Text,
// // // // // // // // // // //   StyleSheet,
// // // // // // // // // // //   ScrollView,
// // // // // // // // // // //   TouchableOpacity,
// // // // // // // // // // //   FlatList,
// // // // // // // // // // //   Image,
// // // // // // // // // // //   Dimensions,
// // // // // // // // // // //   Animated,
// // // // // // // // // // //   TextInput,
// // // // // // // // // // //   ActivityIndicator,
// // // // // // // // // // // } from 'react-native';
// // // // // // // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // // // // // // // import axios from 'axios';

// // // // // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // // // // const shortcuts = [
// // // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#10B981' },
// // // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#3B82F6' },
// // // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#8B5CF6' },
// // // // // // // // // // //   { id: '4', name: 'Planner', icon: 'calendar-outline', color: '#EC4899' },
// // // // // // // // // // //   { id: '5', name: 'News', icon: 'newspaper-outline', color: '#6366F1' },
// // // // // // // // // // //   { id: '6', name: 'Map', icon: 'navigate-outline', color: '#F59E0B' },
// // // // // // // // // // // ];

// // // // // // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // // // // // //   const pulseAnim = useRef(new Animated.Value(1)).current;
// // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // // // // //   const [cityImages, setCityImages] = useState([]);
// // // // // // // // // // //   const [loading, setLoading] = useState(false);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     Animated.loop(
// // // // // // // // // // //       Animated.sequence([
// // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1.04, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // //         Animated.timing(pulseAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
// // // // // // // // // // //       ])
// // // // // // // // // // //     ).start();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const handleSearch = async () => {
// // // // // // // // // // //     if (!searchQuery.trim()) return;
// // // // // // // // // // //     setLoading(true);
// // // // // // // // // // //     try {
// // // // // // // // // // //       // Keep your current IP logic
// // // // // // // // // // //       const response = await axios.get(`http://10.176.82.30:3000/api/photos?query=${searchQuery}`);
// // // // // // // // // // //       if (response.data.success) {
// // // // // // // // // // //         setCityImages(response.data.photos);
// // // // // // // // // // //       }
// // // // // // // // // // //     } catch (error) {
// // // // // // // // // // //       console.error("Search fetch failed", error);
// // // // // // // // // // //     } finally {
// // // // // // // // // // //       setLoading(false);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // // //       <View style={styles.blob1} />
// // // // // // // // // // //       <View style={styles.blob2} />

// // // // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
// // // // // // // // // // //         {/* 1. Header */}
// // // // // // // // // // //         <View style={styles.header}>
// // // // // // // // // // //           <View>
// // // // // // // // // // //             <Text style={styles.greeting}>Welcome back,</Text>
// // // // // // // // // // //             <Text style={styles.userName}>Chaitanya Patil</Text> 
// // // // // // // // // // //           </View>
// // // // // // // // // // //           <View style={styles.profileAvatar}>
// // // // // // // // // // //             <Image 
// // // // // // // // // // //               source={{ uri: 'https://ui-avatars.com/api/?name=Chaitanya&background=8B5CF6&color=fff' }} 
// // // // // // // // // // //               style={styles.avatarImage} 
// // // // // // // // // // //             />
// // // // // // // // // // //           </View>
// // // // // // // // // // //         </View>

// // // // // // // // // // //         {/* 2. Search Input */}
// // // // // // // // // // //         <View style={styles.searchBar}>
// // // // // // // // // // //           <Ionicons name="search" size={20} color="#64748B" />
// // // // // // // // // // //           <TextInput 
// // // // // // // // // // //             placeholder="Search your next destination..." 
// // // // // // // // // // //             placeholderTextColor="#64748B"
// // // // // // // // // // //             style={styles.input}
// // // // // // // // // // //             value={searchQuery}
// // // // // // // // // // //             onChangeText={setSearchQuery}
// // // // // // // // // // //             onSubmitEditing={handleSearch}
// // // // // // // // // // //             returnKeyType="search"
// // // // // // // // // // //           />
// // // // // // // // // // //           {loading && <ActivityIndicator size="small" color="#8B5CF6" />}
// // // // // // // // // // //         </View>

// // // // // // // // // // //         {/* 3. Modern Services Grid (Rearranged to be prominent) */}
// // // // // // // // // // //         <View style={styles.servicesGrid}>
// // // // // // // // // // //           {shortcuts.map((item) => (
// // // // // // // // // // //             <TouchableOpacity 
// // // // // // // // // // //               key={item.id}
// // // // // // // // // // //               style={styles.gridItem} 
// // // // // // // // // // //               activeOpacity={0.7}
// // // // // // // // // // //               onPress={() => {
// // // // // // // // // // //                 if (item.name === 'Hotels') navigation.navigate('HotelSearch');
// // // // // // // // // // //                 if (item.name === 'Budget') navigation.navigate('Budget');
// // // // // // // // // // //                 if (item.name === 'Planner') navigation.navigate('Planner');
// // // // // // // // // // //                 if (item.name === 'News') navigation.navigate('News');
// // // // // // // // // // //                 if (item.name === 'Map') navigation.navigate('LiveNavigation');
// // // // // // // // // // //               }}
// // // // // // // // // // //             >
// // // // // // // // // // //               <LinearGradient colors={[`${item.color}30`, `${item.color}10`]} style={styles.gridIconContainer}>
// // // // // // // // // // //                 <Ionicons name={item.icon} size={24} color={item.color} />
// // // // // // // // // // //               </LinearGradient>
// // // // // // // // // // //               <Text style={styles.gridText}>{item.name}</Text>
// // // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </View>

// // // // // // // // // // //         {/* 4. AI Action Button */}
// // // // // // // // // // //         <Animated.View style={{ transform: [{ scale: pulseAnim }], marginVertical: 20 }}>
// // // // // // // // // // //           <TouchableOpacity 
// // // // // // // // // // //             activeOpacity={0.9} 
// // // // // // // // // // //             onPress={() => navigation.navigate('Planner')}
// // // // // // // // // // //           >
// // // // // // // // // // //             <LinearGradient colors={['#8B5CF6', '#6366F1']} style={styles.aiButton}>
// // // // // // // // // // //               <View style={styles.aiContent}>
// // // // // // // // // // //                 <MaterialCommunityIcons name="robot" size={32} color="#FFF" />
// // // // // // // // // // //                 <View style={{ marginLeft: 15, flex: 1 }}>
// // // // // // // // // // //                   <Text style={styles.aiTitle}>Plan with AI</Text>
// // // // // // // // // // //                   <Text style={styles.aiSub}>Generate a smart itinerary instantly</Text>
// // // // // // // // // // //                 </View>
// // // // // // // // // // //                 <Ionicons name="sparkles" size={20} color="#FBBF24" />
// // // // // // // // // // //               </View>
// // // // // // // // // // //             </LinearGradient>
// // // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // // //         </Animated.View>

// // // // // // // // // // //         {/* 5. City Image Carousel (Appears on Search) */}
// // // // // // // // // // //         {cityImages.length > 0 && (
// // // // // // // // // // //           <View style={styles.carouselSection}>
// // // // // // // // // // //             <Text style={styles.sectionTitle}>Explore {searchQuery}</Text>
// // // // // // // // // // //             <FlatList
// // // // // // // // // // //               data={cityImages}
// // // // // // // // // // //               horizontal
// // // // // // // // // // //               showsHorizontalScrollIndicator={false}
// // // // // // // // // // //               keyExtractor={(item) => item.id}
// // // // // // // // // // //               snapToInterval={width * 0.75}
// // // // // // // // // // //               decelerationRate="fast"
// // // // // // // // // // //               renderItem={({ item }) => (
// // // // // // // // // // //                 <View style={styles.cityCard}>
// // // // // // // // // // //                   <Image source={{ uri: item.url }} style={styles.cityImage} />
// // // // // // // // // // //                   <LinearGradient 
// // // // // // // // // // //                     colors={['transparent', 'rgba(0,0,0,0.8)']} 
// // // // // // // // // // //                     style={styles.cityInfoOverlay}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     <Text style={styles.photographerText}>Photo by {item.photographer}</Text>
// // // // // // // // // // //                   </LinearGradient>
// // // // // // // // // // //                 </View>
// // // // // // // // // // //               )}
// // // // // // // // // // //             />
// // // // // // // // // // //           </View>
// // // // // // // // // // //         )}

// // // // // // // // // // //         {/* Keep other existing sections (Navigation Preview, News, etc.) */}

// // // // // // // // // // //       </ScrollView>
// // // // // // // // // // //     </SafeAreaView>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // // //   container: { flex: 1, backgroundColor: '#020617' },
// // // // // // // // // // //   blob1: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: '#8B5CF6', top: -50, right: -50, opacity: 0.1 },
// // // // // // // // // // //   blob2: { position: 'absolute', width: 150, height: 150, borderRadius: 75, backgroundColor: '#3B82F6', bottom: 100, left: -50, opacity: 0.1 },
// // // // // // // // // // //   scrollContent: { padding: 20 },
// // // // // // // // // // //   header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
// // // // // // // // // // //   greeting: { color: '#64748B', fontSize: 14 },
// // // // // // // // // // //   userName: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
// // // // // // // // // // //   profileAvatar: { width: 45, height: 45, borderRadius: 22, borderWidth: 1, borderColor: '#8B5CF6' },
// // // // // // // // // // //   avatarImage: { width: '100%', height: '100%', borderRadius: 22 },
// // // // // // // // // // //   searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#0F172A', padding: 15, borderRadius: 15, marginBottom: 20, borderWidth: 1, borderColor: '#1E293B' },
// // // // // // // // // // //   input: { marginLeft: 10, color: '#FFF', flex: 1 },

// // // // // // // // // // //   // MODERN GRID LAYOUT
// // // // // // // // // // //   servicesGrid: { 
// // // // // // // // // // //     flexDirection: 'row', 
// // // // // // // // // // //     flexWrap: 'wrap', 
// // // // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // // // //     marginBottom: 10 
// // // // // // // // // // //   },
// // // // // // // // // // //   gridItem: { 
// // // // // // // // // // //     width: (width - 60) / 3, // 3 Columns
// // // // // // // // // // //     alignItems: 'center', 
// // // // // // // // // // //     marginBottom: 20 
// // // // // // // // // // //   },
// // // // // // // // // // //   gridIconContainer: { 
// // // // // // // // // // //     width: 65, 
// // // // // // // // // // //     height: 65, 
// // // // // // // // // // //     borderRadius: 20, 
// // // // // // // // // // //     justifyContent: 'center', 
// // // // // // // // // // //     alignItems: 'center', 
// // // // // // // // // // //     marginBottom: 8,
// // // // // // // // // // //     borderWidth: 1,
// // // // // // // // // // //     borderColor: 'rgba(255,255,255,0.05)'
// // // // // // // // // // //   },
// // // // // // // // // // //   gridText: { color: '#94A3B8', fontSize: 12, fontWeight: '500' },

// // // // // // // // // // //   aiButton: { padding: 20, borderRadius: 24 },
// // // // // // // // // // //   aiContent: { flexDirection: 'row', alignItems: 'center' },
// // // // // // // // // // //   aiTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
// // // // // // // // // // //   aiSub: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },

// // // // // // // // // // //   carouselSection: { marginBottom: 30 },
// // // // // // // // // // //   sectionTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
// // // // // // // // // // //   cityCard: { 
// // // // // // // // // // //     width: width * 0.7, 
// // // // // // // // // // //     height: 200, 
// // // // // // // // // // //     marginRight: 15, 
// // // // // // // // // // //     borderRadius: 24, 
// // // // // // // // // // //     overflow: 'hidden' 
// // // // // // // // // // //   },
// // // // // // // // // // //   cityImage: { width: '100%', height: '100%' },
// // // // // // // // // // //   cityInfoOverlay: {
// // // // // // // // // // //     position: 'absolute',
// // // // // // // // // // //     bottom: 0,
// // // // // // // // // // //     left: 0,
// // // // // // // // // // //     right: 0,
// // // // // // // // // // //     padding: 15,
// // // // // // // // // // //     height: 60,
// // // // // // // // // // //     justifyContent: 'flex-end'
// // // // // // // // // // //   },
// // // // // // // // // // //   photographerText: { color: '#FFF', fontSize: 10, opacity: 0.7 },
// // // // // // // // // // // });










// // // // // // // // // // import React, { useEffect, useRef, useState } from 'react';
// // // // // // // // // // import {
// // // // // // // // // //   View,
// // // // // // // // // //   Text,
// // // // // // // // // //   StyleSheet,
// // // // // // // // // //   ScrollView,
// // // // // // // // // //   TouchableOpacity,
// // // // // // // // // //   FlatList,
// // // // // // // // // //   Image,
// // // // // // // // // //   Dimensions,
// // // // // // // // // //   Animated,
// // // // // // // // // //   TextInput,
// // // // // // // // // //   ActivityIndicator,
// // // // // // // // // //   ImageBackground,
// // // // // // // // // // } from 'react-native';
// // // // // // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // // // // // import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
// // // // // // // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // // // // // // import axios from 'axios';

// // // // // // // // // // const { width, height } = Dimensions.get('window');

// // // // // // // // // // const shortcuts = [
// // // // // // // // // //   { id: '1', name: 'Budget', icon: 'wallet-outline', color: '#FF6B6B', lightColor: '#FF6B6B' },
// // // // // // // // // //   { id: '2', name: 'Flights', icon: 'airplane-outline', color: '#4ECDC4', lightColor: '#4ECDC4' },
// // // // // // // // // //   { id: '3', name: 'Hotels', icon: 'bed-outline', color: '#FFE66D', lightColor: '#FFE66D' },
// // // // // // // // // //   { id: '4', name: 'Planner', icon: 'calendar-outline', color: '#95E1D3', lightColor: '#95E1D3' },
// // // // // // // // // //   { id: '5', name: 'News', icon: 'newspaper-outline', color: '#F38181', lightColor: '#F38181' },
// // // // // // // // // //   { id: '6', name: 'Map', icon: 'navigate-outline', color: '#AA96DA', lightColor: '#AA96DA' },
// // // // // // // // // // ];

// // // // // // // // // // // Particle element for AI effects
// // // // // // // // // // const Particle = ({ x, y, delay }) => {
// // // // // // // // // //   const moveAnim = useRef(new Animated.Value(0)).current;

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     Animated.loop(
// // // // // // // // // //       Animated.sequence([
// // // // // // // // // //         Animated.timing(moveAnim, { 
// // // // // // // // // //           toValue: 1, 
// // // // // // // // // //           duration: 3000, 
// // // // // // // // // //           useNativeDriver: true 
// // // // // // // // // //         }),
// // // // // // // // // //         Animated.timing(moveAnim, { 
// // // // // // // // // //           toValue: 0, 
// // // // // // // // // //           duration: 0, 
// // // // // // // // // //           useNativeDriver: true 
// // // // // // // // // //         }),
// // // // // // // // // //       ])
// // // // // // // // // //     ).start();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const translateY = moveAnim.interpolate({
// // // // // // // // // //     inputRange: [0, 1],
// // // // // // // // // //     outputRange: [0, -60],
// // // // // // // // // //   });

// // // // // // // // // //   const opacity = moveAnim.interpolate({
// // // // // // // // // //     inputRange: [0, 0.8, 1],
// // // // // // // // // //     outputRange: [0, 1, 0],
// // // // // // // // // //   });

// // // // // // // // // //   return (
// // // // // // // // // //     <Animated.View
// // // // // // // // // //       style={[
// // // // // // // // // //         styles.particle,
// // // // // // // // // //         {
// // // // // // // // // //           left: x,
// // // // // // // // // //           top: y,
// // // // // // // // // //           transform: [{ translateY }],
// // // // // // // // // //           opacity,
// // // // // // // // // //           marginTop: delay,
// // // // // // // // // //         },
// // // // // // // // // //       ]}
// // // // // // // // // //     >
// // // // // // // // // //       <View style={[styles.particleDot, { backgroundColor: '#4ECDC4' }]} />
// // // // // // // // // //     </Animated.View>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // // // // //   const scrollAnim = useRef(new Animated.Value(0)).current;
// // // // // // // // // //   const pulseAnim = useRef(new Animated.Value(0)).current;
// // // // // // // // // //   const rotateAnim = useRef(new Animated.Value(0)).current;
// // // // // // // // // //   const cardSlideAnim = useRef(new Animated.Value(-50)).current;
// // // // // // // // // //   const opacityAnim = useRef(new Animated.Value(0)).current;
// // // // // // // // // //   const floatAnim = useRef(new Animated.Value(0)).current;
  
// // // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // // // //   const [cityImages, setCityImages] = useState([]);
// // // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // // //   const [particles, setParticles] = useState([]);

// // // // // // // // // //   // Staggered entrance with multiple animations
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     Animated.sequence([
// // // // // // // // // //       Animated.parallel([
// // // // // // // // // //         Animated.timing(cardSlideAnim, { 
// // // // // // // // // //           toValue: 0, 
// // // // // // // // // //           duration: 1000, 
// // // // // // // // // //           useNativeDriver: true 
// // // // // // // // // //         }),
// // // // // // // // // //         Animated.timing(opacityAnim, { 
// // // // // // // // // //           toValue: 1, 
// // // // // // // // // //           duration: 1000, 
// // // // // // // // // //           useNativeDriver: true 
// // // // // // // // // //         }),
// // // // // // // // // //       ]),
// // // // // // // // // //     ]).start();

// // // // // // // // // //     // Floating animation for decorative elements
// // // // // // // // // //     Animated.loop(
// // // // // // // // // //       Animated.sequence([
// // // // // // // // // //         Animated.timing(floatAnim, { 
// // // // // // // // // //           toValue: 1, 
// // // // // // // // // //           duration: 4000, 
// // // // // // // // // //           useNativeDriver: true 
// // // // // // // // // //         }),
// // // // // // // // // //         Animated.timing(floatAnim, { 
// // // // // // // // // //           toValue: 0, 
// // // // // // // // // //           duration: 4000, 
// // // // // // // // // //           useNativeDriver: true 
// // // // // // // // // //         }),
// // // // // // // // // //       ])
// // // // // // // // // //     ).start();

// // // // // // // // // //     // Rotation for AI spinner
// // // // // // // // // //     Animated.loop(
// // // // // // // // // //       Animated.timing(rotateAnim, { 
// // // // // // // // // //         toValue: 1, 
// // // // // // // // // //         duration: 6000, 
// // // // // // // // // //         useNativeDriver: true 
// // // // // // // // // //       })
// // // // // // // // // //     ).start();

// // // // // // // // // //     // Pulse for interactive elements
// // // // // // // // // //     Animated.loop(
// // // // // // // // // //       Animated.sequence([
// // // // // // // // // //         Animated.timing(pulseAnim, { 
// // // // // // // // // //           toValue: 1, 
// // // // // // // // // //           duration: 2000, 
// // // // // // // // // //           useNativeDriver: true 
// // // // // // // // // //         }),
// // // // // // // // // //         Animated.timing(pulseAnim, { 
// // // // // // // // // //           toValue: 0, 
// // // // // // // // // //           duration: 2000, 
// // // // // // // // // //           useNativeDriver: true 
// // // // // // // // // //         }),
// // // // // // // // // //       ])
// // // // // // // // // //     ).start();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const handleSearch = async () => {
// // // // // // // // // //     if (!searchQuery.trim()) return;
    
// // // // // // // // // //     // Trigger particle burst effect
// // // // // // // // // //     const newParticles = Array.from({ length: 8 }, (_, i) => ({
// // // // // // // // // //       id: i,
// // // // // // // // // //       x: Math.random() * width - width / 2,
// // // // // // // // // //       y: Math.random() * 100,
// // // // // // // // // //     }));
// // // // // // // // // //     setParticles(newParticles);
    
// // // // // // // // // //     setLoading(true);
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await axios.get(
// // // // // // // // // //         `http://10.176.82.30:3000/api/photos?query=${searchQuery}`
// // // // // // // // // //       );
// // // // // // // // // //       if (response.data.success) {
// // // // // // // // // //         setCityImages(response.data.photos);
// // // // // // // // // //       }
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Search fetch failed", error);
// // // // // // // // // //     } finally {
// // // // // // // // // //       setLoading(false);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const rotateZ = rotateAnim.interpolate({
// // // // // // // // // //     inputRange: [0, 1],
// // // // // // // // // //     outputRange: [0, 360],
// // // // // // // // // //   });
  
// // // // // // // // // //   const rotateString = rotateAnim.interpolate({
// // // // // // // // // //     inputRange: [0, 1],
// // // // // // // // // //     outputRange: ['0deg', '360deg'],
// // // // // // // // // //   });

// // // // // // // // // //   const floatY = floatAnim.interpolate({
// // // // // // // // // //     inputRange: [0, 1],
// // // // // // // // // //     outputRange: [0, -15],
// // // // // // // // // //   });

// // // // // // // // // //   return (
// // // // // // // // // //     <SafeAreaView style={styles.container}>
// // // // // // // // // //       {/* ANIMATED GRADIENT BACKGROUND */}
// // // // // // // // // //       <View style={styles.bgGradientContainer}>
// // // // // // // // // //         <LinearGradient 
// // // // // // // // // //           colors={['#F8F9FF', '#FFF5E6', '#E8F8F5']} 
// // // // // // // // // //           start={{ x: 0, y: 0 }} 
// // // // // // // // // //           end={{ x: 1, y: 1 }}
// // // // // // // // // //           style={styles.bgGradient}
// // // // // // // // // //         />
        
// // // // // // // // // //         {/* Floating gradient blobs */}
// // // // // // // // // //         <Animated.View 
// // // // // // // // // //           style={[
// // // // // // // // // //             styles.floatingBlob,
// // // // // // // // // //             styles.blob1,
// // // // // // // // // //             { transform: [{ translateY: floatY }] }
// // // // // // // // // //           ]} 
// // // // // // // // // //         />
// // // // // // // // // //         <Animated.View 
// // // // // // // // // //           style={[
// // // // // // // // // //             styles.floatingBlob,
// // // // // // // // // //             styles.blob2,
// // // // // // // // // //             { transform: [{ translateY: floatY }] }
// // // // // // // // // //           ]} 
// // // // // // // // // //         />
// // // // // // // // // //         <Animated.View 
// // // // // // // // // //           style={[
// // // // // // // // // //             styles.floatingBlob,
// // // // // // // // // //             styles.blob3,
// // // // // // // // // //             { transform: [{ translateY: floatY }] }
// // // // // // // // // //           ]} 
// // // // // // // // // //         />

// // // // // // // // // //         {/* Decorative circles */}
// // // // // // // // // //         <View style={[styles.decorativeCircle, styles.circle1]} />
// // // // // // // // // //         <View style={[styles.decorativeCircle, styles.circle2]} />
// // // // // // // // // //         <View style={[styles.decorativeCircle, styles.circle3]} />
// // // // // // // // // //       </View>

// // // // // // // // // //       <ScrollView 
// // // // // // // // // //         showsVerticalScrollIndicator={false} 
// // // // // // // // // //         contentContainerStyle={styles.scrollContent}
// // // // // // // // // //         scrollEventThrottle={16}
// // // // // // // // // //       >
// // // // // // // // // //         {/* WELCOME HEADER */}
// // // // // // // // // //         <Animated.View 
// // // // // // // // // //           style={[
// // // // // // // // // //             styles.headerWrapper,
// // // // // // // // // //             { 
// // // // // // // // // //               transform: [{ translateY: cardSlideAnim }],
// // // // // // // // // //               opacity: opacityAnim
// // // // // // // // // //             }
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <View style={styles.header}>
// // // // // // // // // //             <View style={styles.greetingContainer}>
// // // // // // // // // //               <Text style={styles.greeting}>✨ Welcome back</Text>
// // // // // // // // // //               <Text style={styles.userName}>Chaitanya</Text>
// // // // // // // // // //               <View style={styles.underline} />
// // // // // // // // // //             </View>
// // // // // // // // // //             <TouchableOpacity style={styles.profileAvatar} activeOpacity={0.7}>
// // // // // // // // // //               <LinearGradient 
// // // // // // // // // //                 colors={['#FF6B6B', '#FFE66D']} 
// // // // // // // // // //                 start={{ x: 0, y: 0 }} 
// // // // // // // // // //                 end={{ x: 1, y: 1 }}
// // // // // // // // // //                 style={styles.avatarGradient}
// // // // // // // // // //               >
// // // // // // // // // //                 <Image 
// // // // // // // // // //                   source={{ 
// // // // // // // // // //                     uri: 'https://ui-avatars.com/api/?name=Chaitanya&background=random&color=fff&size=90' 
// // // // // // // // // //                   }} 
// // // // // // // // // //                   style={styles.avatarImage} 
// // // // // // // // // //                 />
// // // // // // // // // //               </LinearGradient>
// // // // // // // // // //             </TouchableOpacity>
// // // // // // // // // //           </View>
// // // // // // // // // //         </Animated.View>

// // // // // // // // // //         {/* SEARCH BAR WITH AI VIBES */}
// // // // // // // // // //         <Animated.View 
// // // // // // // // // //           style={[
// // // // // // // // // //             styles.searchWrapper,
// // // // // // // // // //             { 
// // // // // // // // // //               transform: [{ translateY: cardSlideAnim }],
// // // // // // // // // //               opacity: opacityAnim
// // // // // // // // // //             }
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <LinearGradient 
// // // // // // // // // //             colors={['#4ECDC420', '#95E1D320']} 
// // // // // // // // // //             style={styles.searchGradientBg}
// // // // // // // // // //           >
// // // // // // // // // //             <View style={styles.searchContainer}>
// // // // // // // // // //               <View style={styles.searchIconWrapper}>
// // // // // // // // // //                 <Animated.View style={{ 
// // // // // // // // // //                   transform: [{ 
// // // // // // // // // //                     rotate: rotateAnim.interpolate({
// // // // // // // // // //                       inputRange: [0, 1],
// // // // // // // // // //                       outputRange: ['0deg', '360deg'],
// // // // // // // // // //                     })
// // // // // // // // // //                   }] 
// // // // // // // // // //                 }}>
// // // // // // // // // //                   <Ionicons name="sparkles" size={20} color="#4ECDC4" />
// // // // // // // // // //                 </Animated.View>
// // // // // // // // // //               </View>
// // // // // // // // // //               <TextInput 
// // // // // // // // // //                 placeholder="Where to next?" 
// // // // // // // // // //                 placeholderTextColor="#999"
// // // // // // // // // //                 style={styles.input}
// // // // // // // // // //                 value={searchQuery}
// // // // // // // // // //                 onChangeText={setSearchQuery}
// // // // // // // // // //                 onSubmitEditing={handleSearch}
// // // // // // // // // //                 returnKeyType="search"
// // // // // // // // // //               />
// // // // // // // // // //               {loading && (
// // // // // // // // // //                 <ActivityIndicator size="small" color="#FF6B6B" />
// // // // // // // // // //               )}
// // // // // // // // // //             </View>
// // // // // // // // // //           </LinearGradient>
          
// // // // // // // // // //           {/* Particle burst on search */}
// // // // // // // // // //           {particles.map((particle) => (
// // // // // // // // // //             <Particle 
// // // // // // // // // //               key={particle.id} 
// // // // // // // // // //               x={particle.x + width / 2} 
// // // // // // // // // //               y={particle.y}
// // // // // // // // // //               delay={particle.id * 50}
// // // // // // // // // //             />
// // // // // // // // // //           ))}
// // // // // // // // // //         </Animated.View>

// // // // // // // // // //         {/* AI TRIP PLANNER CARD - PREMIUM */}
// // // // // // // // // //         <Animated.View 
// // // // // // // // // //           style={[
// // // // // // // // // //             styles.aiCardWrapper,
// // // // // // // // // //             { 
// // // // // // // // // //               transform: [{ translateY: cardSlideAnim }],
// // // // // // // // // //               opacity: opacityAnim
// // // // // // // // // //             }
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <TouchableOpacity 
// // // // // // // // // //             activeOpacity={0.85}
// // // // // // // // // //             onPress={() => navigation.navigate('Planner')}
// // // // // // // // // //             style={styles.aiCardOuter}
// // // // // // // // // //           >
// // // // // // // // // //             <LinearGradient 
// // // // // // // // // //               colors={['#95E1D3', '#4ECDC4', '#45B7AA']} 
// // // // // // // // // //               start={{ x: 0, y: 0 }} 
// // // // // // // // // //               end={{ x: 1, y: 1 }}
// // // // // // // // // //               style={styles.aiCardGradient}
// // // // // // // // // //             >
// // // // // // // // // //               <View style={styles.aiCard}>
// // // // // // // // // //                 {/* AI Glow effect */}
// // // // // // // // // //                 <View style={styles.aiGlowBg} />
                
// // // // // // // // // //                 <View style={styles.aiContent}>
// // // // // // // // // //                   <View style={styles.aiIconWrapper}>
// // // // // // // // // //                     <Animated.View 
// // // // // // // // // //                       style={[
// // // // // // // // // //                         styles.aiIconSpinner,
// // // // // // // // // //                         { 
// // // // // // // // // //                           transform: [{ 
// // // // // // // // // //                             rotate: rotateAnim.interpolate({
// // // // // // // // // //                               inputRange: [0, 1],
// // // // // // // // // //                               outputRange: ['0deg', '360deg'],
// // // // // // // // // //                             })
// // // // // // // // // //                           }] 
// // // // // // // // // //                         }
// // // // // // // // // //                       ]}
// // // // // // // // // //                     >
// // // // // // // // // //                       <MaterialCommunityIcons 
// // // // // // // // // //                         name="robot-industrial" 
// // // // // // // // // //                         size={32} 
// // // // // // // // // //                         color="#FFF" 
// // // // // // // // // //                       />
// // // // // // // // // //                     </Animated.View>
// // // // // // // // // //                   </View>
                  
// // // // // // // // // //                   <View style={styles.aiTextContent}>
// // // // // // // // // //                     <Text style={styles.aiTitle}>🚀 Smart Trip Planner</Text>
// // // // // // // // // //                     <Text style={styles.aiSubtitle}>AI generates perfect itineraries</Text>
// // // // // // // // // //                   </View>
                  
// // // // // // // // // //                   <View style={styles.aiArrowBadge}>
// // // // // // // // // //                     <Ionicons name="arrow-forward" size={18} color="#FFF" />
// // // // // // // // // //                   </View>
// // // // // // // // // //                 </View>

// // // // // // // // // //                 {/* Animated border */}
// // // // // // // // // //                 <View style={styles.aiCardBorder} />
// // // // // // // // // //               </View>
// // // // // // // // // //             </LinearGradient>
// // // // // // // // // //           </TouchableOpacity>
// // // // // // // // // //         </Animated.View>

// // // // // // // // // //         {/* SERVICES GRID - VIBRANT */}
// // // // // // // // // //         <Animated.View 
// // // // // // // // // //           style={[
// // // // // // // // // //             styles.servicesWrapper,
// // // // // // // // // //             { 
// // // // // // // // // //               transform: [{ translateY: cardSlideAnim }],
// // // // // // // // // //               opacity: opacityAnim
// // // // // // // // // //             }
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <View style={styles.sectionHeader}>
// // // // // // // // // //             <Text style={styles.sectionLabel}>Quick Access 🎯</Text>
// // // // // // // // // //             <View style={styles.sectionDot} />
// // // // // // // // // //           </View>
          
// // // // // // // // // //           <View style={styles.servicesGrid}>
// // // // // // // // // //             {shortcuts.map((item, index) => (
// // // // // // // // // //               <Animated.View 
// // // // // // // // // //                 key={item.id}
// // // // // // // // // //                 style={[
// // // // // // // // // //                   styles.gridItemWrapper,
// // // // // // // // // //                   {
// // // // // // // // // //                     opacity: opacityAnim,
// // // // // // // // // //                     transform: [{ 
// // // // // // // // // //                       translateY: cardSlideAnim.interpolate({
// // // // // // // // // //                         inputRange: [-50, 0],
// // // // // // // // // //                         outputRange: [-50 + index * 5, 0],
// // // // // // // // // //                       })
// // // // // // // // // //                     }],
// // // // // // // // // //                   }
// // // // // // // // // //                 ]}
// // // // // // // // // //               >
// // // // // // // // // //                 <TouchableOpacity 
// // // // // // // // // //                   style={styles.gridItem} 
// // // // // // // // // //                   activeOpacity={0.7}
// // // // // // // // // //                   onPress={() => {
// // // // // // // // // //                     if (item.name === 'Hotels') navigation.navigate('HotelSearch');
// // // // // // // // // //                     if (item.name === 'Budget') navigation.navigate('Budget');
// // // // // // // // // //                     if (item.name === 'Planner') navigation.navigate('Planner');
// // // // // // // // // //                     if (item.name === 'News') navigation.navigate('News');
// // // // // // // // // //                     if (item.name === 'Map') navigation.navigate('LiveNavigation');
// // // // // // // // // //                   }}
// // // // // // // // // //                 >
// // // // // // // // // //                   <LinearGradient 
// // // // // // // // // //                     colors={[`${item.color}30`, `${item.color}10`]} 
// // // // // // // // // //                     start={{ x: 0, y: 0 }}
// // // // // // // // // //                     end={{ x: 1, y: 1 }}
// // // // // // // // // //                     style={styles.gridIconContainer}
// // // // // // // // // //                   >
// // // // // // // // // //                     <View style={[styles.gridIconBg, { backgroundColor: `${item.color}20` }]}>
// // // // // // // // // //                       <Ionicons name={item.icon} size={26} color={item.color} />
// // // // // // // // // //                     </View>
// // // // // // // // // //                   </LinearGradient>
// // // // // // // // // //                   <Text style={styles.gridText}>{item.name}</Text>
// // // // // // // // // //                 </TouchableOpacity>
// // // // // // // // // //               </Animated.View>
// // // // // // // // // //             ))}
// // // // // // // // // //           </View>
// // // // // // // // // //         </Animated.View>

// // // // // // // // // //         {/* CITY CAROUSEL */}
// // // // // // // // // //         {cityImages.length > 0 && (
// // // // // // // // // //           <Animated.View 
// // // // // // // // // //             style={[
// // // // // // // // // //               styles.carouselWrapper,
// // // // // // // // // //               { 
// // // // // // // // // //                 transform: [{ translateY: cardSlideAnim }],
// // // // // // // // // //                 opacity: opacityAnim
// // // // // // // // // //               }
// // // // // // // // // //             ]}
// // // // // // // // // //           >
// // // // // // // // // //             <View style={styles.carouselHeader}>
// // // // // // // // // //               <Text style={styles.sectionLabel}>Explore {searchQuery} 🌍</Text>
// // // // // // // // // //             </View>
// // // // // // // // // //             <FlatList
// // // // // // // // // //               data={cityImages}
// // // // // // // // // //               horizontal
// // // // // // // // // //               showsHorizontalScrollIndicator={false}
// // // // // // // // // //               keyExtractor={(item) => item.id}
// // // // // // // // // //               snapToInterval={width * 0.75}
// // // // // // // // // //               decelerationRate="fast"
// // // // // // // // // //               contentContainerStyle={styles.carouselContent}
// // // // // // // // // //               renderItem={({ item }) => (
// // // // // // // // // //                 <TouchableOpacity activeOpacity={0.9} style={styles.cityCardWrapper}>
// // // // // // // // // //                   <View style={styles.cityCard}>
// // // // // // // // // //                     <Image source={{ uri: item.url }} style={styles.cityImage} />
                    
// // // // // // // // // //                     {/* Premium overlay gradient */}
// // // // // // // // // //                     <LinearGradient 
// // // // // // // // // //                       colors={['transparent', 'rgba(79, 205, 196, 0.3)', 'rgba(0,0,0,0.85)']} 
// // // // // // // // // //                       style={styles.cityInfoOverlay}
// // // // // // // // // //                     >
// // // // // // // // // //                       <View style={styles.cityInfo}>
// // // // // // // // // //                         <View style={styles.cityBadge}>
// // // // // // // // // //                           <Text style={styles.cityBadgeText}>✨ Featured</Text>
// // // // // // // // // //                         </View>
// // // // // // // // // //                         <Text style={styles.cityName}>{searchQuery}</Text>
// // // // // // // // // //                         <View style={styles.cityMeta}>
// // // // // // // // // //                           <MaterialCommunityIcons name="camera-multiple-outline" size={12} color="#E8F8F5" />
// // // // // // // // // //                           <Text style={styles.photographerText}>{item.photographer}</Text>
// // // // // // // // // //                         </View>
// // // // // // // // // //                       </View>
// // // // // // // // // //                     </LinearGradient>
// // // // // // // // // //                   </View>
// // // // // // // // // //                 </TouchableOpacity>
// // // // // // // // // //               )}
// // // // // // // // // //             />
// // // // // // // // // //           </Animated.View>
// // // // // // // // // //         )}

// // // // // // // // // //         {/* DECORATIVE FOOTER */}
// // // // // // // // // //         <Animated.View 
// // // // // // // // // //           style={[
// // // // // // // // // //             styles.footerSection,
// // // // // // // // // //             { 
// // // // // // // // // //               transform: [{ translateY: cardSlideAnim }],
// // // // // // // // // //               opacity: opacityAnim
// // // // // // // // // //             }
// // // // // // // // // //           ]}
// // // // // // // // // //         >
// // // // // // // // // //           <View style={styles.footerContent}>
// // // // // // // // // //             <Text style={styles.footerText}>🎉 Ready to explore the world?</Text>
// // // // // // // // // //             <Text style={styles.footerSubtext}>Use AI to plan your perfect trip</Text>
// // // // // // // // // //           </View>
// // // // // // // // // //         </Animated.View>

// // // // // // // // // //         <View style={{ height: 40 }} />
// // // // // // // // // //       </ScrollView>
// // // // // // // // // //     </SafeAreaView>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // // //   container: { 
// // // // // // // // // //     flex: 1, 
// // // // // // // // // //     backgroundColor: '#FFF',
// // // // // // // // // //   },
  
// // // // // // // // // //   // BACKGROUND ELEMENTS
// // // // // // // // // //   bgGradientContainer: {
// // // // // // // // // //     position: 'absolute',
// // // // // // // // // //     width: '100%',
// // // // // // // // // //     height: '100%',
// // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // //   },
// // // // // // // // // //   bgGradient: {
// // // // // // // // // //     position: 'absolute',
// // // // // // // // // //     width: '100%',
// // // // // // // // // //     height: '100%',
// // // // // // // // // //   },
// // // // // // // // // //   floatingBlob: {
// // // // // // // // // //     position: 'absolute',
// // // // // // // // // //     borderRadius: 9999,
// // // // // // // // // //   },
// // // // // // // // // //   blob1: { 
// // // // // // // // // //     width: 300, 
// // // // // // // // // //     height: 300, 
// // // // // // // // // //     backgroundColor: '#4ECDC420', 
// // // // // // // // // //     top: -100, 
// // // // // // // // // //     right: -50,
// // // // // // // // // //     borderRadius: 200,
// // // // // // // // // //   },
// // // // // // // // // //   blob2: { 
// // // // // // // // // //     width: 250, 
// // // // // // // // // //     height: 250, 
// // // // // // // // // //     backgroundColor: '#FF6B6B15', 
// // // // // // // // // //     bottom: 250, 
// // // // // // // // // //     left: -80,
// // // // // // // // // //     borderRadius: 150,
// // // // // // // // // //   },
// // // // // // // // // //   blob3: { 
// // // // // // // // // //     width: 200, 
// // // // // // // // // //     height: 200, 
// // // // // // // // // //     backgroundColor: '#FFE66D20', 
// // // // // // // // // //     bottom: -50, 
// // // // // // // // // //     right: 100,
// // // // // // // // // //     borderRadius: 100,
// // // // // // // // // //   },
// // // // // // // // // //   decorativeCircle: {
// // // // // // // // // //     position: 'absolute',
// // // // // // // // // //     borderRadius: 9999,
// // // // // // // // // //     borderWidth: 2,
// // // // // // // // // //   },
// // // // // // // // // //   circle1: {
// // // // // // // // // //     width: 150,
// // // // // // // // // //     height: 150,
// // // // // // // // // //     borderColor: '#4ECDC430',
// // // // // // // // // //     top: 100,
// // // // // // // // // //     left: 20,
// // // // // // // // // //   },
// // // // // // // // // //   circle2: {
// // // // // // // // // //     width: 100,
// // // // // // // // // //     height: 100,
// // // // // // // // // //     borderColor: '#FF6B6B20',
// // // // // // // // // //     top: 400,
// // // // // // // // // //     right: 40,
// // // // // // // // // //   },
// // // // // // // // // //   circle3: {
// // // // // // // // // //     width: 80,
// // // // // // // // // //     height: 80,
// // // // // // // // // //     borderColor: '#95E1D330',
// // // // // // // // // //     bottom: 200,
// // // // // // // // // //     left: 50,
// // // // // // // // // //   },

// // // // // // // // // //   // SCROLL CONTENT
// // // // // // // // // //   scrollContent: { 
// // // // // // // // // //     paddingHorizontal: 20, 
// // // // // // // // // //     paddingTop: 12,
// // // // // // // // // //     paddingBottom: 20,
// // // // // // // // // //   },

// // // // // // // // // //   // PARTICLE EFFECT
// // // // // // // // // //   particle: {
// // // // // // // // // //     position: 'absolute',
// // // // // // // // // //     width: 8,
// // // // // // // // // //     height: 8,
// // // // // // // // // //   },
// // // // // // // // // //   particleDot: {
// // // // // // // // // //     width: 6,
// // // // // // // // // //     height: 6,
// // // // // // // // // //     borderRadius: 3,
// // // // // // // // // //   },

// // // // // // // // // //   // HEADER
// // // // // // // // // //   headerWrapper: {
// // // // // // // // // //     marginBottom: 24,
// // // // // // // // // //   },
// // // // // // // // // //   header: { 
// // // // // // // // // //     flexDirection: 'row', 
// // // // // // // // // //     justifyContent: 'space-between', 
// // // // // // // // // //     alignItems: 'flex-start',
// // // // // // // // // //   },
// // // // // // // // // //   greetingContainer: {
// // // // // // // // // //     flex: 1,
// // // // // // // // // //   },
// // // // // // // // // //   greeting: { 
// // // // // // // // // //     color: '#666',
// // // // // // // // // //     fontSize: 13,
// // // // // // // // // //     fontWeight: '600',
// // // // // // // // // //     letterSpacing: 0.5,
// // // // // // // // // //   },
// // // // // // // // // //   userName: { 
// // // // // // // // // //     color: '#1A1A1A', 
// // // // // // // // // //     fontSize: 32, 
// // // // // // // // // //     fontWeight: '800',
// // // // // // // // // //     marginTop: 4,
// // // // // // // // // //     letterSpacing: -0.5,
// // // // // // // // // //   },
// // // // // // // // // //   underline: {
// // // // // // // // // //     width: 50,
// // // // // // // // // //     height: 4,
// // // // // // // // // //     backgroundColor: '#4ECDC4',
// // // // // // // // // //     marginTop: 8,
// // // // // // // // // //     borderRadius: 2,
// // // // // // // // // //   },
// // // // // // // // // //   profileAvatar: { 
// // // // // // // // // //     width: 56, 
// // // // // // // // // //     height: 56, 
// // // // // // // // // //     borderRadius: 28, 
// // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // //     borderWidth: 3, 
// // // // // // // // // //     borderColor: '#FFF',
// // // // // // // // // //     shadowColor: '#FF6B6B',
// // // // // // // // // //     shadowOffset: { width: 0, height: 4 },
// // // // // // // // // //     shadowOpacity: 0.3,
// // // // // // // // // //     shadowRadius: 8,
// // // // // // // // // //     elevation: 5,
// // // // // // // // // //   },
// // // // // // // // // //   avatarGradient: {
// // // // // // // // // //     width: '100%',
// // // // // // // // // //     height: '100%',
// // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //   },
// // // // // // // // // //   avatarImage: { 
// // // // // // // // // //     width: 52, 
// // // // // // // // // //     height: 52, 
// // // // // // // // // //     borderRadius: 26,
// // // // // // // // // //   },

// // // // // // // // // //   // SEARCH BAR
// // // // // // // // // //   searchWrapper: {
// // // // // // // // // //     marginBottom: 24,
// // // // // // // // // //     position: 'relative',
// // // // // // // // // //   },
// // // // // // // // // //   searchGradientBg: {
// // // // // // // // // //     borderRadius: 20,
// // // // // // // // // //     padding: 2,
// // // // // // // // // //   },
// // // // // // // // // //   searchContainer: { 
// // // // // // // // // //     flexDirection: 'row', 
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     backgroundColor: '#FFF',
// // // // // // // // // //     paddingHorizontal: 14,
// // // // // // // // // //     paddingVertical: 12,
// // // // // // // // // //     borderRadius: 18,
// // // // // // // // // //     borderWidth: 2,
// // // // // // // // // //     borderColor: '#4ECDC420',
// // // // // // // // // //   },
// // // // // // // // // //   searchIconWrapper: {
// // // // // // // // // //     marginRight: 12,
// // // // // // // // // //   },
// // // // // // // // // //   input: { 
// // // // // // // // // //     color: '#1A1A1A', 
// // // // // // // // // //     flex: 1,
// // // // // // // // // //     fontSize: 16,
// // // // // // // // // //     fontWeight: '500',
// // // // // // // // // //   },

// // // // // // // // // //   // AI CARD
// // // // // // // // // //   aiCardWrapper: {
// // // // // // // // // //     marginBottom: 28,
// // // // // // // // // //   },
// // // // // // // // // //   aiCardOuter: {
// // // // // // // // // //     borderRadius: 24,
// // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // //     shadowColor: '#4ECDC4',
// // // // // // // // // //     shadowOffset: { width: 0, height: 8 },
// // // // // // // // // //     shadowOpacity: 0.3,
// // // // // // // // // //     shadowRadius: 12,
// // // // // // // // // //     elevation: 8,
// // // // // // // // // //   },
// // // // // // // // // //   aiCardGradient: {
// // // // // // // // // //     borderRadius: 24,
// // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // //   },
// // // // // // // // // //   aiCard: {
// // // // // // // // // //     padding: 20,
// // // // // // // // // //     position: 'relative',
// // // // // // // // // //   },
// // // // // // // // // //   aiGlowBg: {
// // // // // // // // // //     position: 'absolute',
// // // // // // // // // //     width: 200,
// // // // // // // // // //     height: 200,
// // // // // // // // // //     borderRadius: 100,
// // // // // // // // // //     backgroundColor: '#FFF',
// // // // // // // // // //     opacity: 0.1,
// // // // // // // // // //     top: -50,
// // // // // // // // // //     right: -50,
// // // // // // // // // //   },
// // // // // // // // // //   aiContent: {
// // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // // //     zIndex: 2,
// // // // // // // // // //   },
// // // // // // // // // //   aiIconWrapper: {
// // // // // // // // // //     width: 56,
// // // // // // // // // //     height: 56,
// // // // // // // // // //     borderRadius: 16,
// // // // // // // // // //     backgroundColor: 'rgba(255,255,255,0.2)',
// // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     marginRight: 12,
// // // // // // // // // //   },
// // // // // // // // // //   aiIconSpinner: {
// // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //   },
// // // // // // // // // //   aiTextContent: {
// // // // // // // // // //     flex: 1,
// // // // // // // // // //   },
// // // // // // // // // //   aiTitle: { 
// // // // // // // // // //     color: '#FFF', 
// // // // // // // // // //     fontSize: 18, 
// // // // // // // // // //     fontWeight: '700',
// // // // // // // // // //     letterSpacing: -0.3,
// // // // // // // // // //   },
// // // // // // // // // //   aiSubtitle: { 
// // // // // // // // // //     color: 'rgba(255,255,255,0.85)', 
// // // // // // // // // //     fontSize: 12,
// // // // // // // // // //     marginTop: 2,
// // // // // // // // // //     fontWeight: '500',
// // // // // // // // // //   },
// // // // // // // // // //   aiArrowBadge: {
// // // // // // // // // //     width: 44,
// // // // // // // // // //     height: 44,
// // // // // // // // // //     borderRadius: 12,
// // // // // // // // // //     backgroundColor: 'rgba(255,255,255,0.25)',
// // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     marginLeft: 12,
// // // // // // // // // //   },
// // // // // // // // // //   aiCardBorder: {
// // // // // // // // // //     position: 'absolute',
// // // // // // // // // //     top: 0,
// // // // // // // // // //     left: 0,
// // // // // // // // // //     right: 0,
// // // // // // // // // //     height: 2,
// // // // // // // // // //     backgroundColor: 'rgba(255,255,255,0.3)',
// // // // // // // // // //   },

// // // // // // // // // //   // SERVICES GRID
// // // // // // // // // //   servicesWrapper: {
// // // // // // // // // //     marginBottom: 32,
// // // // // // // // // //   },
// // // // // // // // // //   sectionHeader: {
// // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     marginBottom: 16,
// // // // // // // // // //   },
// // // // // // // // // //   sectionLabel: {
// // // // // // // // // //     color: '#1A1A1A',
// // // // // // // // // //     fontSize: 14,
// // // // // // // // // //     fontWeight: '700',
// // // // // // // // // //     letterSpacing: 0.3,
// // // // // // // // // //   },
// // // // // // // // // //   sectionDot: {
// // // // // // // // // //     width: 6,
// // // // // // // // // //     height: 6,
// // // // // // // // // //     borderRadius: 3,
// // // // // // // // // //     backgroundColor: '#FF6B6B',
// // // // // // // // // //     marginLeft: 8,
// // // // // // // // // //   },
// // // // // // // // // //   servicesGrid: { 
// // // // // // // // // //     flexDirection: 'row', 
// // // // // // // // // //     flexWrap: 'wrap', 
// // // // // // // // // //     justifyContent: 'space-between',
// // // // // // // // // //     gap: 12,
// // // // // // // // // //   },
// // // // // // // // // //   gridItemWrapper: {
// // // // // // // // // //     width: (width - 52) / 3,
// // // // // // // // // //   },
// // // // // // // // // //   gridItem: { 
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     padding: 4,
// // // // // // // // // //   },
// // // // // // // // // //   gridIconContainer: { 
// // // // // // // // // //     width: 75, 
// // // // // // // // // //     height: 75, 
// // // // // // // // // //     borderRadius: 20, 
// // // // // // // // // //     justifyContent: 'center', 
// // // // // // // // // //     alignItems: 'center', 
// // // // // // // // // //     marginBottom: 10,
// // // // // // // // // //     borderWidth: 2,
// // // // // // // // // //     borderColor: '#FFF',
// // // // // // // // // //     shadowColor: '#000',
// // // // // // // // // //     shadowOffset: { width: 0, height: 4 },
// // // // // // // // // //     shadowOpacity: 0.1,
// // // // // // // // // //     shadowRadius: 6,
// // // // // // // // // //     elevation: 3,
// // // // // // // // // //   },
// // // // // // // // // //   gridIconBg: {
// // // // // // // // // //     width: 65,
// // // // // // // // // //     height: 65,
// // // // // // // // // //     borderRadius: 16,
// // // // // // // // // //     justifyContent: 'center',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //   },
// // // // // // // // // //   gridText: { 
// // // // // // // // // //     color: '#1A1A1A', 
// // // // // // // // // //     fontSize: 13, 
// // // // // // // // // //     fontWeight: '600',
// // // // // // // // // //     textAlign: 'center',
// // // // // // // // // //     letterSpacing: 0.2,
// // // // // // // // // //   },

// // // // // // // // // //   // CAROUSEL
// // // // // // // // // //   carouselWrapper: {
// // // // // // // // // //     marginBottom: 16,
// // // // // // // // // //   },
// // // // // // // // // //   carouselHeader: {
// // // // // // // // // //     marginBottom: 16,
// // // // // // // // // //   },
// // // // // // // // // //   carouselContent: {
// // // // // // // // // //     paddingRight: 20,
// // // // // // // // // //   },
// // // // // // // // // //   cityCardWrapper: {
// // // // // // // // // //     marginRight: 16,
// // // // // // // // // //   },
// // // // // // // // // //   cityCard: { 
// // // // // // // // // //     width: width * 0.72, 
// // // // // // // // // //     height: 260, 
// // // // // // // // // //     borderRadius: 24, 
// // // // // // // // // //     overflow: 'hidden',
// // // // // // // // // //     shadowColor: '#000',
// // // // // // // // // //     shadowOffset: { width: 0, height: 10 },
// // // // // // // // // //     shadowOpacity: 0.25,
// // // // // // // // // //     shadowRadius: 15,
// // // // // // // // // //     elevation: 10,
// // // // // // // // // //   },
// // // // // // // // // //   cityImage: { 
// // // // // // // // // //     width: '100%', 
// // // // // // // // // //     height: '100%',
// // // // // // // // // //   },
// // // // // // // // // //   cityInfoOverlay: {
// // // // // // // // // //     position: 'absolute',
// // // // // // // // // //     bottom: 0,
// // // // // // // // // //     left: 0,
// // // // // // // // // //     right: 0,
// // // // // // // // // //     paddingHorizontal: 16,
// // // // // // // // // //     paddingVertical: 16,
// // // // // // // // // //     minHeight: 110,
// // // // // // // // // //     justifyContent: 'flex-end',
// // // // // // // // // //   },
// // // // // // // // // //   cityInfo: {
// // // // // // // // // //     alignItems: 'flex-start',
// // // // // // // // // //   },
// // // // // // // // // //   cityBadge: {
// // // // // // // // // //     backgroundColor: 'rgba(255,255,255,0.25)',
// // // // // // // // // //     paddingHorizontal: 10,
// // // // // // // // // //     paddingVertical: 4,
// // // // // // // // // //     borderRadius: 12,
// // // // // // // // // //     marginBottom: 8,
// // // // // // // // // //   },
// // // // // // // // // //   cityBadgeText: {
// // // // // // // // // //     color: '#FFF',
// // // // // // // // // //     fontSize: 10,
// // // // // // // // // //     fontWeight: '600',
// // // // // // // // // //   },
// // // // // // // // // //   cityName: {
// // // // // // // // // //     color: '#FFF',
// // // // // // // // // //     fontSize: 20,
// // // // // // // // // //     fontWeight: '800',
// // // // // // // // // //     marginBottom: 6,
// // // // // // // // // //   },
// // // // // // // // // //   cityMeta: {
// // // // // // // // // //     flexDirection: 'row',
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //   },
// // // // // // // // // //   photographerText: { 
// // // // // // // // // //     color: '#E8F8F5', 
// // // // // // // // // //     fontSize: 12, 
// // // // // // // // // //     marginLeft: 6,
// // // // // // // // // //     fontWeight: '500',
// // // // // // // // // //   },

// // // // // // // // // //   // FOOTER
// // // // // // // // // //   footerSection: {
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //     paddingVertical: 24,
// // // // // // // // // //     marginTop: 20,
// // // // // // // // // //   },
// // // // // // // // // //   footerContent: {
// // // // // // // // // //     alignItems: 'center',
// // // // // // // // // //   },
// // // // // // // // // //   footerText: {
// // // // // // // // // //     color: '#1A1A1A',
// // // // // // // // // //     fontSize: 16,
// // // // // // // // // //     fontWeight: '700',
// // // // // // // // // //   },
// // // // // // // // // //   footerSubtext: {
// // // // // // // // // //     color: '#666',
// // // // // // // // // //     fontSize: 13,
// // // // // // // // // //     marginTop: 6,
// // // // // // // // // //   },
// // // // // // // // // // });





// // // // // // // // // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // // // // // // // // import {
// // // // // // // // //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// // // // // // // // //   FlatList, Image, Dimensions, Animated, TextInput,
// // // // // // // // //   ActivityIndicator, StatusBar,
// // // // // // // // // } from 'react-native';
// // // // // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // // // // import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
// // // // // // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // // // // // import axios from 'axios';

// // // // // // // // // const { width, height } = Dimensions.get('window');

// // // // // // // // // /* ── DATA ───────────────────────────────────────────── */
// // // // // // // // // const shortcuts = [
// // // // // // // // //   { id:'1', name:'Budget',  icon:'wallet-outline',    color:'#FF6B6B' },
// // // // // // // // //   { id:'2', name:'Flights', icon:'airplane-outline',  color:'#4ECDC4' },
// // // // // // // // //   { id:'3', name:'Hotels',  icon:'bed-outline',        color:'#FFE66D' },
// // // // // // // // //   { id:'4', name:'Planner', icon:'calendar-outline',  color:'#A78BFA' },
// // // // // // // // //   { id:'5', name:'News',    icon:'newspaper-outline', color:'#F38181' },
// // // // // // // // //   { id:'6', name:'Map',     icon:'navigate-outline',  color:'#34D399' },
// // // // // // // // // ];

// // // // // // // // // const trending = [
// // // // // // // // //   { id:'t1', city:'Tokyo',    tag:'Most Visited', emoji:'🗼', color:['#FF6B6B','#FF8E53'] },
// // // // // // // // //   { id:'t2', city:'Paris',    tag:'Romantic',     emoji:'🗽', color:['#4ECDC4','#45B7AA'] },
// // // // // // // // //   { id:'t3', city:'Bali',     tag:'Top Rated',    emoji:'🌴', color:['#A78BFA','#7C3AED'] },
// // // // // // // // //   { id:'t4', city:'Dubai',    tag:'Luxury',       emoji:'🏙️', color:['#FFE66D','#F59E0B'] },
// // // // // // // // //   { id:'t5', city:'NYC',      tag:'Adventure',    emoji:'🌃', color:['#34D399','#059669'] },
// // // // // // // // // ];

// // // // // // // // // const aiStats = [
// // // // // // // // //   { label:'Trips Planned', value:'2.4M+', icon:'map-outline',         color:'#4ECDC4' },
// // // // // // // // //   { label:'AI Accuracy',   value:'98.7%', icon:'analytics-outline',    color:'#A78BFA' },
// // // // // // // // //   { label:'Destinations',  value:'190+',  icon:'earth-outline',        color:'#FF6B6B' },
// // // // // // // // //   { label:'Happy Users',   value:'500K',  icon:'happy-outline',        color:'#FFE66D' },
// // // // // // // // // ];

// // // // // // // // // const recentSearches = ['Goa', 'Maldives', 'Jaipur', 'Singapore'];

// // // // // // // // // /* ── Animated City Card ─────────────────────────────── */
// // // // // // // // // const CityCard = ({ item, index, query }) => {
// // // // // // // // //   const scale   = useRef(new Animated.Value(0.3)).current;
// // // // // // // // //   const opacity = useRef(new Animated.Value(0)).current;
// // // // // // // // //   const slideY  = useRef(new Animated.Value(80)).current;
// // // // // // // // //   const glow    = useRef(new Animated.Value(0)).current;
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     Animated.sequence([
// // // // // // // // //       Animated.delay(index * 130),
// // // // // // // // //       Animated.parallel([
// // // // // // // // //         Animated.spring(scale,   { toValue:1, friction:6, tension:80, useNativeDriver:true }),
// // // // // // // // //         Animated.timing(opacity, { toValue:1, duration:400, useNativeDriver:true }),
// // // // // // // // //         Animated.spring(slideY,  { toValue:0, friction:7, tension:60, useNativeDriver:true }),
// // // // // // // // //       ]),
// // // // // // // // //     ]).start();
// // // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // // //       Animated.timing(glow, { toValue:1, duration:2200, useNativeDriver:true }),
// // // // // // // // //       Animated.timing(glow, { toValue:0, duration:2200, useNativeDriver:true }),
// // // // // // // // //     ])).start();
// // // // // // // // //   }, []);
// // // // // // // // //   const glowOp = glow.interpolate({ inputRange:[0,1], outputRange:[0.3,1] });
// // // // // // // // //   return (
// // // // // // // // //     <Animated.View style={[styles.cityCardWrap, { opacity, transform:[{scale},{translateY:slideY}] }]}>
// // // // // // // // //       <TouchableOpacity activeOpacity={0.88} style={styles.cityCard}>
// // // // // // // // //         <Image source={{ uri: item.url }} style={styles.cityImg} />
// // // // // // // // //         <Animated.View style={[styles.scanLine, { opacity: glowOp }]} />
// // // // // // // // //         <LinearGradient colors={['transparent','rgba(6,6,20,0.5)','rgba(6,6,20,0.95)']} style={styles.cityOverlay}>
// // // // // // // // //           <View style={styles.cityBadge}>
// // // // // // // // //             <View style={styles.badgeDot} />
// // // // // // // // //             <Text style={styles.cityBadgeTxt}>✦ FEATURED</Text>
// // // // // // // // //           </View>
// // // // // // // // //           <Text style={styles.cityName}>{query}</Text>
// // // // // // // // //           <View style={styles.cityMeta}>
// // // // // // // // //             <Ionicons name="camera-outline" size={11} color="#4ECDC4" />
// // // // // // // // //             <Text style={styles.photoTxt}> {item.photographer}</Text>
// // // // // // // // //           </View>
// // // // // // // // //         </LinearGradient>
// // // // // // // // //         <View style={styles.neonCorner} />
// // // // // // // // //       </TouchableOpacity>
// // // // // // // // //     </Animated.View>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // /* ── Particle ───────────────────────────────────────── */
// // // // // // // // // const Particle = ({ x, y, delay, color }) => {
// // // // // // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // // //       Animated.delay(delay),
// // // // // // // // //       Animated.timing(a, { toValue:1, duration:1600, useNativeDriver:true }),
// // // // // // // // //       Animated.timing(a, { toValue:0, duration:0,    useNativeDriver:true }),
// // // // // // // // //     ])).start();
// // // // // // // // //   }, []);
// // // // // // // // //   const tY = a.interpolate({ inputRange:[0,1], outputRange:[0,-80] });
// // // // // // // // //   const op = a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] });
// // // // // // // // //   return (
// // // // // // // // //     <Animated.View style={[styles.particle, { left:x, top:y, opacity:op, transform:[{translateY:tY}] }]}>
// // // // // // // // //       <View style={[styles.particleDot, { backgroundColor:color, shadowColor:color, shadowOpacity:1, shadowRadius:5 }]} />
// // // // // // // // //     </Animated.View>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // /* ── Trending Card ──────────────────────────────────── */
// // // // // // // // // const TrendCard = ({ item, index }) => {
// // // // // // // // //   const slideX = useRef(new Animated.Value(60)).current;
// // // // // // // // //   const op     = useRef(new Animated.Value(0)).current;
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     Animated.sequence([
// // // // // // // // //       Animated.delay(index * 100),
// // // // // // // // //       Animated.parallel([
// // // // // // // // //         Animated.spring(slideX, { toValue:0, friction:7, tension:70, useNativeDriver:true }),
// // // // // // // // //         Animated.timing(op, { toValue:1, duration:400, useNativeDriver:true }),
// // // // // // // // //       ]),
// // // // // // // // //     ]).start();
// // // // // // // // //   }, []);
// // // // // // // // //   return (
// // // // // // // // //     <Animated.View style={{ opacity:op, transform:[{translateX:slideX}] }}>
// // // // // // // // //       <TouchableOpacity activeOpacity={0.82} style={styles.trendCard}>
// // // // // // // // //         <LinearGradient colors={item.color} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendGrad}>
// // // // // // // // //           <Text style={styles.trendEmoji}>{item.emoji}</Text>
// // // // // // // // //           <Text style={styles.trendCity}>{item.city}</Text>
// // // // // // // // //           <View style={styles.trendTagWrap}>
// // // // // // // // //             <Text style={styles.trendTag}>{item.tag}</Text>
// // // // // // // // //           </View>
// // // // // // // // //           <View style={styles.trendGlow} />
// // // // // // // // //         </LinearGradient>
// // // // // // // // //       </TouchableOpacity>
// // // // // // // // //     </Animated.View>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // /* ── Stat Card ──────────────────────────────────────── */
// // // // // // // // // const StatCard = ({ item, delay }) => {
// // // // // // // // //   const pop = useRef(new Animated.Value(0)).current;
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     Animated.sequence([
// // // // // // // // //       Animated.delay(delay),
// // // // // // // // //       Animated.spring(pop, { toValue:1, friction:6, tension:80, useNativeDriver:true }),
// // // // // // // // //     ]).start();
// // // // // // // // //   }, []);
// // // // // // // // //   return (
// // // // // // // // //     <Animated.View style={[styles.statCard, { transform:[{scale:pop}] }]}>
// // // // // // // // //       <LinearGradient colors={['#12122A','#1A1A3A']} style={styles.statGrad}>
// // // // // // // // //         <View style={[styles.statIconWrap, { borderColor:`${item.color}40`, shadowColor:item.color }]}>
// // // // // // // // //           <Ionicons name={item.icon} size={18} color={item.color} />
// // // // // // // // //         </View>
// // // // // // // // //         <Text style={[styles.statValue, { color:item.color }]}>{item.value}</Text>
// // // // // // // // //         <Text style={styles.statLabel}>{item.label}</Text>
// // // // // // // // //       </LinearGradient>
// // // // // // // // //     </Animated.View>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // /* ── Main ───────────────────────────────────────────── */
// // // // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // // //   const [cityImages,  setCityImages]  = useState([]);
// // // // // // // // //   const [loading,    setLoading]      = useState(false);
// // // // // // // // //   const [particles,  setParticles]    = useState([]);
// // // // // // // // //   const [focused,    setFocused]      = useState(false);
// // // // // // // // //   const [imageKey,   setImageKey]     = useState(0);
// // // // // // // // //   const [aiTyping,   setAiTyping]     = useState('');

// // // // // // // // //   const slideAnim  = useRef(new Animated.Value(-60)).current;
// // // // // // // // //   const fadeAnim   = useRef(new Animated.Value(0)).current;
// // // // // // // // //   const rotateAnim = useRef(new Animated.Value(0)).current;
// // // // // // // // //   const pulseAnim  = useRef(new Animated.Value(0)).current;
// // // // // // // // //   const floatAnim  = useRef(new Animated.Value(0)).current;
// // // // // // // // //   const scanAnim   = useRef(new Animated.Value(0)).current;
// // // // // // // // //   const heroAnim   = useRef(new Animated.Value(0)).current;
// // // // // // // // //   const glowBorderAnim = useRef(new Animated.Value(0)).current;

// // // // // // // // //   const aiPhrases = ['Plan smarter...', 'Explore further...', 'Discover hidden gems...', 'Adventures await...'];
// // // // // // // // //   const phraseIdx = useRef(0);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     // Entrance
// // // // // // // // //     Animated.parallel([
// // // // // // // // //       Animated.spring(slideAnim, { toValue:0, friction:8, tension:55, useNativeDriver:true }),
// // // // // // // // //       Animated.timing(fadeAnim,  { toValue:1, duration:900, useNativeDriver:true }),
// // // // // // // // //     ]).start();

// // // // // // // // //     // Loops
// // // // // // // // //     Animated.loop(Animated.timing(rotateAnim, { toValue:1, duration:5000, useNativeDriver:true })).start();
// // // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // // //       Animated.timing(pulseAnim,  { toValue:1, duration:1800, useNativeDriver:true }),
// // // // // // // // //       Animated.timing(pulseAnim,  { toValue:0, duration:1800, useNativeDriver:true }),
// // // // // // // // //     ])).start();
// // // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // // //       Animated.timing(floatAnim,  { toValue:1, duration:4500, useNativeDriver:true }),
// // // // // // // // //       Animated.timing(floatAnim,  { toValue:0, duration:4500, useNativeDriver:true }),
// // // // // // // // //     ])).start();
// // // // // // // // //     Animated.loop(Animated.timing(scanAnim,   { toValue:1, duration:3500, useNativeDriver:true })).start();
// // // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // // //       Animated.timing(heroAnim,   { toValue:1, duration:3000, useNativeDriver:true }),
// // // // // // // // //       Animated.timing(heroAnim,   { toValue:0, duration:3000, useNativeDriver:true }),
// // // // // // // // //     ])).start();
// // // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // // //       Animated.timing(glowBorderAnim, { toValue:1, duration:2000, useNativeDriver:true }),
// // // // // // // // //       Animated.timing(glowBorderAnim, { toValue:0, duration:2000, useNativeDriver:true }),
// // // // // // // // //     ])).start();

// // // // // // // // //     // AI typing effect
// // // // // // // // //     let charIdx = 0;
// // // // // // // // //     let phrase = aiPhrases[phraseIdx.current];
// // // // // // // // //     const typer = setInterval(() => {
// // // // // // // // //       charIdx++;
// // // // // // // // //       if (charIdx <= phrase.length) {
// // // // // // // // //         setAiTyping(phrase.slice(0, charIdx));
// // // // // // // // //       } else {
// // // // // // // // //         clearInterval(typer);
// // // // // // // // //         setTimeout(() => {
// // // // // // // // //           phraseIdx.current = (phraseIdx.current + 1) % aiPhrases.length;
// // // // // // // // //           charIdx = 0;
// // // // // // // // //           phrase = aiPhrases[phraseIdx.current];
// // // // // // // // //           const t2 = setInterval(() => {
// // // // // // // // //             charIdx++;
// // // // // // // // //             if (charIdx <= phrase.length) setAiTyping(phrase.slice(0, charIdx));
// // // // // // // // //             else clearInterval(t2);
// // // // // // // // //           }, 60);
// // // // // // // // //         }, 1800);
// // // // // // // // //       }
// // // // // // // // //     }, 60);
// // // // // // // // //     return () => clearInterval(typer);
// // // // // // // // //   }, []);

// // // // // // // // //   const handleSearch = useCallback(async () => {
// // // // // // // // //     if (!searchQuery.trim()) return;
// // // // // // // // //     setParticles(Array.from({ length:12 }, (_, i) => ({
// // // // // // // // //       id:i,
// // // // // // // // //       x: Math.random() * (width - 40) + 20,
// // // // // // // // //       y: Math.random() * 50,
// // // // // // // // //       color: ['#4ECDC4','#A78BFA','#FF6B6B','#FFE66D','#34D399'][i % 5],
// // // // // // // // //     })));
// // // // // // // // //     setLoading(true); setCityImages([]);
// // // // // // // // //     try {
// // // // // // // // //       const res = await axios.get(`http://10.176.82.30:3000/api/photos?query=${searchQuery}`);
// // // // // // // // //       if (res.data.success) { setCityImages(res.data.photos); setImageKey(k => k+1); }
// // // // // // // // //     } catch(e) { console.error(e); }
// // // // // // // // //     finally { setLoading(false); }
// // // // // // // // //   }, [searchQuery]);

// // // // // // // // //   const rotStr   = rotateAnim.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
// // // // // // // // //   const floatY   = floatAnim.interpolate({ inputRange:[0,1], outputRange:[0,-20] });
// // // // // // // // //   const pulseS   = pulseAnim.interpolate({ inputRange:[0,1], outputRange:[1, 1.08] });
// // // // // // // // //   const scanX    = scanAnim.interpolate({ inputRange:[0,1], outputRange:[-width, width] });
// // // // // // // // //   const heroGlow = heroAnim.interpolate({ inputRange:[0,1], outputRange:[0.3, 1] });
// // // // // // // // //   const borderC  = glowBorderAnim.interpolate({ inputRange:[0,1], outputRange:[0.3, 0.9] });

// // // // // // // // //   return (
// // // // // // // // //     <SafeAreaView style={styles.root}>
// // // // // // // // //       <StatusBar barStyle="light-content" backgroundColor="#060614" />

// // // // // // // // //       {/* ── BACKGROUND ── */}
// // // // // // // // //       <View style={StyleSheet.absoluteFill}>
// // // // // // // // //         <LinearGradient colors={['#060614','#0A0A1E','#0D0D2B']} style={StyleSheet.absoluteFill} />
// // // // // // // // //         <Animated.View style={[styles.blob, { width:340, height:340, backgroundColor:'#4ECDC40E', top:-100, right:-80, transform:[{translateY:floatY}] }]} />
// // // // // // // // //         <Animated.View style={[styles.blob, { width:280, height:280, backgroundColor:'#A78BFA0A', bottom:320, left:-100, transform:[{translateY:floatY}] }]} />
// // // // // // // // //         <Animated.View style={[styles.blob, { width:220, height:220, backgroundColor:'#FF6B6B08', bottom:80,  right:50,  transform:[{translateY:floatY}] }]} />
// // // // // // // // //         {/* Grid overlay */}
// // // // // // // // //         <View style={styles.gridOverlay} pointerEvents="none">
// // // // // // // // //           {Array.from({length:8}).map((_,i) => (
// // // // // // // // //             <View key={i} style={[styles.gridLine, { top: i * (height/8) }]} />
// // // // // // // // //           ))}
// // // // // // // // //         </View>
// // // // // // // // //         {/* Moving scan line */}
// // // // // // // // //         <Animated.View style={[styles.bgScan, { transform:[{translateX:scanX}] }]} />
// // // // // // // // //       </View>

// // // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

// // // // // // // // //         {/* ── HEADER ── */}
// // // // // // // // //         <Animated.View style={[styles.headerWrap, { opacity:fadeAnim, transform:[{translateY:slideAnim}] }]}>
// // // // // // // // //           <View style={styles.header}>
// // // // // // // // //             <View>
// // // // // // // // //               <View style={styles.onlinePill}>
// // // // // // // // //                 <Animated.View style={[styles.onlineDot, { transform:[{scale:pulseS}] }]} />
// // // // // // // // //                 <Text style={styles.onlineTxt}>AI · ONLINE</Text>
// // // // // // // // //               </View>
// // // // // // // // //               <Text style={styles.greet}>Good Evening,</Text>
// // // // // // // // //               <Text style={styles.userName}>Chaitanya 👋</Text>
// // // // // // // // //               <LinearGradient colors={['#4ECDC4','#A78BFA']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameLine} />
// // // // // // // // //             </View>
// // // // // // // // //             <View>
// // // // // // // // //               <Animated.View style={[styles.avatarRing, { transform:[{scale:pulseS}] }]} />
// // // // // // // // //               <LinearGradient colors={['#4ECDC4','#A78BFA']} style={styles.avatarGrad}>
// // // // // // // // //                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=0D0D2B&color=4ECDC4&size=100' }} style={styles.avatar} />
// // // // // // // // //               </LinearGradient>
// // // // // // // // //             </View>
// // // // // // // // //           </View>
// // // // // // // // //         </Animated.View>

// // // // // // // // //         {/* ── AI HERO SECTION ── */}
// // // // // // // // //         <Animated.View style={[styles.heroWrap, { opacity:fadeAnim, transform:[{translateY:slideAnim}] }]}>
// // // // // // // // //           <LinearGradient colors={['#0F0F2E','#141430','#1A1A3A']} style={styles.heroCard}>
// // // // // // // // //             <LinearGradient colors={['#4ECDC4','#A78BFA','#FF6B6B']} style={styles.heroTopBorder} />
// // // // // // // // //             <View style={styles.heroContent}>
// // // // // // // // //               {/* Left: AI brain icon */}
// // // // // // // // //               <View style={styles.heroBrainWrap}>
// // // // // // // // //                 <Animated.View style={[styles.heroBrainRing, { opacity:heroGlow, transform:[{scale:pulseS}] }]} />
// // // // // // // // //                 <LinearGradient colors={['#4ECDC420','#A78BFA20']} style={styles.heroBrainBg}>
// // // // // // // // //                   <Animated.View style={{ transform:[{rotate:rotStr}] }}>
// // // // // // // // //                     <MaterialCommunityIcons name="brain" size={36} color="#4ECDC4" />
// // // // // // // // //                   </Animated.View>
// // // // // // // // //                 </LinearGradient>
// // // // // // // // //               </View>
// // // // // // // // //               {/* Right: AI typing */}
// // // // // // // // //               <View style={styles.heroText}>
// // // // // // // // //                 <Text style={styles.heroLabel}>NEURAL TRAVEL AI</Text>
// // // // // // // // //                 <Text style={styles.heroTyping}>{aiTyping}<Text style={styles.cursor}>|</Text></Text>
// // // // // // // // //                 <TouchableOpacity
// // // // // // // // //                   style={styles.heroBtn}
// // // // // // // // //                   onPress={() => navigation.navigate('Planner')}
// // // // // // // // //                   activeOpacity={0.8}
// // // // // // // // //                 >
// // // // // // // // //                   <LinearGradient colors={['#4ECDC4','#A78BFA']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnGrad}>
// // // // // // // // //                     <Text style={styles.heroBtnTxt}>Start Planning</Text>
// // // // // // // // //                     <Ionicons name="arrow-forward" size={13} color="#FFF" />
// // // // // // // // //                   </LinearGradient>
// // // // // // // // //                 </TouchableOpacity>
// // // // // // // // //               </View>
// // // // // // // // //             </View>
// // // // // // // // //             {/* Floating particles inside hero */}
// // // // // // // // //             <View style={styles.heroParticles} pointerEvents="none">
// // // // // // // // //               {[0,1,2,3].map(i => (
// // // // // // // // //                 <View key={i} style={[styles.heroDot, {
// // // // // // // // //                   left: 20 + i*30, top: 10 + (i%2)*20,
// // // // // // // // //                   backgroundColor: ['#4ECDC4','#A78BFA','#FF6B6B','#FFE66D'][i],
// // // // // // // // //                   shadowColor: ['#4ECDC4','#A78BFA','#FF6B6B','#FFE66D'][i],
// // // // // // // // //                 }]} />
// // // // // // // // //               ))}
// // // // // // // // //             </View>
// // // // // // // // //           </LinearGradient>
// // // // // // // // //         </Animated.View>

// // // // // // // // //         {/* ── SEARCH BAR ── */}
// // // // // // // // //         <Animated.View style={[styles.searchWrap, { opacity:fadeAnim, transform:[{translateY:slideAnim}] }]}>
// // // // // // // // //           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*70} color={p.color} />)}
// // // // // // // // //           <Animated.View style={[styles.searchOuter, focused && { borderColor:'#4ECDC480' }]}>
// // // // // // // // //             <LinearGradient colors={focused ? ['#4ECDC415','#A78BFA15'] : ['#12122A','#0F0F22']} style={styles.searchInner}>
// // // // // // // // //               <Animated.View style={{ transform:[{ rotate:rotStr }], marginRight:10 }}>
// // // // // // // // //                 <Ionicons name="sparkles" size={17} color="#4ECDC4" />
// // // // // // // // //               </Animated.View>
// // // // // // // // //               <TextInput
// // // // // // // // //                 placeholder="Search destinations..."
// // // // // // // // //                 placeholderTextColor="#3A3A6A"
// // // // // // // // //                 style={styles.input}
// // // // // // // // //                 value={searchQuery}
// // // // // // // // //                 onChangeText={setSearchQuery}
// // // // // // // // //                 onSubmitEditing={handleSearch}
// // // // // // // // //                 onFocus={() => setFocused(true)}
// // // // // // // // //                 onBlur={() => setFocused(false)}
// // // // // // // // //                 returnKeyType="search"
// // // // // // // // //               />
// // // // // // // // //               {loading
// // // // // // // // //                 ? <ActivityIndicator size="small" color="#4ECDC4" />
// // // // // // // // //                 : <TouchableOpacity onPress={handleSearch} style={styles.srchBtn}>
// // // // // // // // //                     <LinearGradient colors={['#4ECDC4','#A78BFA']} style={styles.srchBtnGrad}>
// // // // // // // // //                       <Ionicons name="search" size={14} color="#FFF" />
// // // // // // // // //                     </LinearGradient>
// // // // // // // // //                   </TouchableOpacity>
// // // // // // // // //               }
// // // // // // // // //             </LinearGradient>
// // // // // // // // //           </Animated.View>
// // // // // // // // //           {/* Recent searches */}
// // // // // // // // //           <View style={styles.recentRow}>
// // // // // // // // //             <Text style={styles.recentLabel}>Recent: </Text>
// // // // // // // // //             {recentSearches.map(r => (
// // // // // // // // //               <TouchableOpacity key={r} style={styles.recentPill} onPress={() => setSearchQuery(r)}>
// // // // // // // // //                 <Text style={styles.recentTxt}>{r}</Text>
// // // // // // // // //               </TouchableOpacity>
// // // // // // // // //             ))}
// // // // // // // // //           </View>
// // // // // // // // //         </Animated.View>

// // // // // // // // //         {/* ── CITY IMAGES (below search) ── */}
// // // // // // // // //         {(cityImages.length > 0 || loading) && (
// // // // // // // // //           <Animated.View style={[styles.carouselWrap, { opacity:fadeAnim }]}>
// // // // // // // // //             <View style={styles.secHeader}>
// // // // // // // // //               <Animated.View style={[styles.liveDot, { transform:[{scale:pulseS}] }]} />
// // // // // // // // //               <Text style={styles.secLabel}>Exploring  {searchQuery}</Text>
// // // // // // // // //               <View style={styles.secLine} />
// // // // // // // // //               <Text style={styles.secCount}>{cityImages.length} results</Text>
// // // // // // // // //             </View>
// // // // // // // // //             {loading
// // // // // // // // //               ? <View style={styles.loadBox}>
// // // // // // // // //                   <ActivityIndicator size="large" color="#4ECDC4" />
// // // // // // // // //                   <Text style={styles.loadTxt}>Neural scan in progress...</Text>
// // // // // // // // //                 </View>
// // // // // // // // //               : <FlatList
// // // // // // // // //                   key={imageKey}
// // // // // // // // //                   data={cityImages}
// // // // // // // // //                   horizontal
// // // // // // // // //                   showsHorizontalScrollIndicator={false}
// // // // // // // // //                   keyExtractor={it => it.id}
// // // // // // // // //                   snapToInterval={width*0.73+16}
// // // // // // // // //                   decelerationRate="fast"
// // // // // // // // //                   contentContainerStyle={{ paddingRight:20 }}
// // // // // // // // //                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={searchQuery} />}
// // // // // // // // //                 />
// // // // // // // // //             }
// // // // // // // // //           </Animated.View>
// // // // // // // // //         )}

// // // // // // // // //         {/* ── QUICK ACCESS GRID ── */}
// // // // // // // // //         <Animated.View style={[styles.gridWrap, { opacity:fadeAnim, transform:[{translateY:slideAnim}] }]}>
// // // // // // // // //           <View style={styles.secHeader}>
// // // // // // // // //             <Text style={styles.secLabel}>Quick Access ⚡</Text>
// // // // // // // // //             <View style={styles.secLine} />
// // // // // // // // //           </View>
// // // // // // // // //           <View style={styles.grid}>
// // // // // // // // //             {shortcuts.map((item, i) => (
// // // // // // // // //               <Animated.View key={item.id} style={[styles.gridItemWrap, { opacity:fadeAnim }]}>
// // // // // // // // //                 <TouchableOpacity
// // // // // // // // //                   style={styles.gridItem}
// // // // // // // // //                   activeOpacity={0.75}
// // // // // // // // //                   onPress={() => {
// // // // // // // // //                     if (item.name==='Hotels')  navigation.navigate('HotelSearch');
// // // // // // // // //                     if (item.name==='Budget')  navigation.navigate('Budget');
// // // // // // // // //                     if (item.name==='Planner') navigation.navigate('Planner');
// // // // // // // // //                     if (item.name==='News')    navigation.navigate('News');
// // // // // // // // //                     if (item.name==='Map')     navigation.navigate('LiveNavigation');
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   <View style={[styles.gridRing, { borderColor:`${item.color}50`, shadowColor:item.color }]} />
// // // // // // // // //                   <LinearGradient colors={['#141430','#0F0F28']} style={[styles.gridIconBox, { borderColor:`${item.color}35` }]}>
// // // // // // // // //                     <View style={[styles.gridIconInner, { backgroundColor:`${item.color}18` }]}>
// // // // // // // // //                       <Ionicons name={item.icon} size={23} color={item.color} />
// // // // // // // // //                     </View>
// // // // // // // // //                   </LinearGradient>
// // // // // // // // //                   <Text style={styles.gridTxt}>{item.name}</Text>
// // // // // // // // //                 </TouchableOpacity>
// // // // // // // // //               </Animated.View>
// // // // // // // // //             ))}
// // // // // // // // //           </View>
// // // // // // // // //         </Animated.View>

// // // // // // // // //         {/* ── TRENDING DESTINATIONS ── */}
// // // // // // // // //         <Animated.View style={[styles.trendWrap, { opacity:fadeAnim, transform:[{translateY:slideAnim}] }]}>
// // // // // // // // //           <View style={styles.secHeader}>
// // // // // // // // //             <Text style={styles.secLabel}>Trending 🔥</Text>
// // // // // // // // //             <View style={styles.secLine} />
// // // // // // // // //             <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
// // // // // // // // //           </View>
// // // // // // // // //           <FlatList
// // // // // // // // //             data={trending}
// // // // // // // // //             horizontal
// // // // // // // // //             showsHorizontalScrollIndicator={false}
// // // // // // // // //             keyExtractor={it => it.id}
// // // // // // // // //             contentContainerStyle={{ paddingRight:20, gap:12 }}
// // // // // // // // //             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
// // // // // // // // //           />
// // // // // // // // //         </Animated.View>

// // // // // // // // //         {/* ── AI STATS BAR ── */}
// // // // // // // // //         <Animated.View style={[styles.statsWrap, { opacity:fadeAnim, transform:[{translateY:slideAnim}] }]}>
// // // // // // // // //           <View style={styles.secHeader}>
// // // // // // // // //             <Text style={styles.secLabel}>AI Intelligence 🧠</Text>
// // // // // // // // //             <View style={styles.secLine} />
// // // // // // // // //           </View>
// // // // // // // // //           <View style={styles.statsGrid}>
// // // // // // // // //             {aiStats.map((s,i) => <StatCard key={i} item={s} delay={i*100} />)}
// // // // // // // // //           </View>
// // // // // // // // //         </Animated.View>

// // // // // // // // //         {/* ── WEATHER WIDGET (display only) ── */}
// // // // // // // // //         <Animated.View style={[styles.weatherWrap, { opacity:fadeAnim, transform:[{translateY:slideAnim}] }]}>
// // // // // // // // //           <LinearGradient colors={['#0F2027','#203A43','#2C5364']} style={styles.weatherCard}>
// // // // // // // // //             <LinearGradient colors={['#4ECDC4','#A78BFA']} style={styles.weatherTopBorder} />
// // // // // // // // //             <View style={styles.weatherRow}>
// // // // // // // // //               <View>
// // // // // // // // //                 <Text style={styles.weatherCity}>📍 Hyderabad</Text>
// // // // // // // // //                 <Text style={styles.weatherTemp}>28°C</Text>
// // // // // // // // //                 <Text style={styles.weatherDesc}>Partly Cloudy · Feels 31°C</Text>
// // // // // // // // //               </View>
// // // // // // // // //               <View style={styles.weatherRight}>
// // // // // // // // //                 <Text style={styles.weatherEmoji}>⛅</Text>
// // // // // // // // //                 <View style={styles.weatherMiniStats}>
// // // // // // // // //                   {[['💧','72%'],['💨','14km/h'],['👁','10km']].map(([ic,v])=>(
// // // // // // // // //                     <View key={v} style={styles.miniStat}>
// // // // // // // // //                       <Text style={styles.miniIcon}>{ic}</Text>
// // // // // // // // //                       <Text style={styles.miniVal}>{v}</Text>
// // // // // // // // //                     </View>
// // // // // // // // //                   ))}
// // // // // // // // //                 </View>
// // // // // // // // //               </View>
// // // // // // // // //             </View>
// // // // // // // // //             <View style={styles.weatherForecast}>
// // // // // // // // //               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
// // // // // // // // //                 <View key={d} style={styles.forecastDay}>
// // // // // // // // //                   <Text style={styles.forecastLabel}>{d}</Text>
// // // // // // // // //                   <Text style={styles.forecastEmoji}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
// // // // // // // // //                   <Text style={styles.forecastTemp}>{[28,24,26,31,23][i]}°</Text>
// // // // // // // // //                 </View>
// // // // // // // // //               ))}
// // // // // // // // //             </View>
// // // // // // // // //           </LinearGradient>
// // // // // // // // //         </Animated.View>

// // // // // // // // //         {/* ── AI RECOMMENDATION BANNER ── */}
// // // // // // // // //         <Animated.View style={[styles.bannerWrap, { opacity:fadeAnim }]}>
// // // // // // // // //           <LinearGradient colors={['#A78BFA','#7C3AED','#6D28D9']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.banner}>
// // // // // // // // //             <LinearGradient colors={['#A78BFA','#FF6B6B']} style={styles.bannerTopBorder} />
// // // // // // // // //             <View style={styles.bannerContent}>
// // // // // // // // //               <View style={styles.bannerLeft}>
// // // // // // // // //                 <Text style={styles.bannerEye}>🤖</Text>
// // // // // // // // //               </View>
// // // // // // // // //               <View style={styles.bannerText}>
// // // // // // // // //                 <Text style={styles.bannerTitle}>AI Pick of the Day</Text>
// // // // // // // // //                 <Text style={styles.bannerSub}>Santorini, Greece · Best time: Apr–Jun</Text>
// // // // // // // // //                 <View style={styles.bannerTags}>
// // // // // // // // //                   {['Beach','Romantic','Photography'].map(t=>(
// // // // // // // // //                     <View key={t} style={styles.bannerTag}>
// // // // // // // // //                       <Text style={styles.bannerTagTxt}>{t}</Text>
// // // // // // // // //                     </View>
// // // // // // // // //                   ))}
// // // // // // // // //                 </View>
// // // // // // // // //               </View>
// // // // // // // // //             </View>
// // // // // // // // //             <View style={[styles.cardBlob, { backgroundColor:'#FFF', opacity:0.05, width:120, height:120, top:-30, right:-20 }]} />
// // // // // // // // //           </LinearGradient>
// // // // // // // // //         </Animated.View>

// // // // // // // // //         {/* ── FOOTER ── */}
// // // // // // // // //         <Animated.View style={[styles.footer, { opacity:fadeAnim }]}>
// // // // // // // // //           <LinearGradient colors={['#12122A00','#12122AFF']} style={styles.footerGrad}>
// // // // // // // // //             <Animated.View style={{ transform:[{rotate:rotStr}] }}>
// // // // // // // // //               <MaterialCommunityIcons name="brain" size={26} color="#4ECDC4" />
// // // // // // // // //             </Animated.View>
// // // // // // // // //             <Text style={styles.footerTitle}>Neural Travel Engine v2.0</Text>
// // // // // // // // //             <Text style={styles.footerSub}>AI · Precision · Adventure</Text>
// // // // // // // // //             <View style={styles.footerDots}>
// // // // // // // // //               {['#4ECDC4','#A78BFA','#FF6B6B'].map(c=>(
// // // // // // // // //                 <Animated.View key={c} style={[styles.footerDot, { backgroundColor:c, shadowColor:c, transform:[{scale:pulseS}] }]} />
// // // // // // // // //               ))}
// // // // // // // // //             </View>
// // // // // // // // //           </LinearGradient>
// // // // // // // // //         </Animated.View>

// // // // // // // // //         <View style={{ height:50 }} />
// // // // // // // // //       </ScrollView>
// // // // // // // // //     </SafeAreaView>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // /* ── STYLES ────────────────────────────────────────── */
// // // // // // // // // const S = (width - 68) / 3;
// // // // // // // // // const styles = StyleSheet.create({
// // // // // // // // //   root:       { flex:1, backgroundColor:'#060614' },
// // // // // // // // //   scroll:     { paddingHorizontal:20, paddingTop:10, paddingBottom:20 },

// // // // // // // // //   // Background
// // // // // // // // //   blob:       { position:'absolute', borderRadius:9999 },
// // // // // // // // //   gridOverlay:{ position:'absolute', width:'100%', height:'100%' },
// // // // // // // // //   gridLine:   { position:'absolute', width:'100%', height:1, backgroundColor:'#FFFFFF08' },
// // // // // // // // //   bgScan:     { position:'absolute', top:'25%', width:180, height:2, backgroundColor:'#4ECDC450',
// // // // // // // // //                 shadowColor:'#4ECDC4', shadowOpacity:1, shadowRadius:10, elevation:3 },

// // // // // // // // //   // Header
// // // // // // // // //   headerWrap: { marginBottom:26 },
// // // // // // // // //   header:     { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
// // // // // // // // //   onlinePill: { flexDirection:'row', alignItems:'center', marginBottom:6 },
// // // // // // // // //   onlineDot:  { width:7, height:7, borderRadius:4, backgroundColor:'#34D399', marginRight:6,
// // // // // // // // //                 shadowColor:'#34D399', shadowOpacity:1, shadowRadius:6, elevation:2 },
// // // // // // // // //   onlineTxt:  { color:'#34D399', fontSize:10, fontWeight:'800', letterSpacing:2 },
// // // // // // // // //   greet:      { color:'#6868AA', fontSize:13 },
// // // // // // // // //   userName:   { color:'#E8E8FF', fontSize:28, fontWeight:'800', letterSpacing:-0.5, marginTop:2 },
// // // // // // // // //   nameLine:   { width:50, height:3, borderRadius:2, marginTop:8, shadowColor:'#4ECDC4', shadowOpacity:0.8, shadowRadius:8, elevation:2 },
// // // // // // // // //   avatarRing: { position:'absolute', top:-5, left:-5, width:68, height:68, borderRadius:34, borderWidth:1.5, borderColor:'#4ECDC440' },
// // // // // // // // //   avatarGrad: { width:58, height:58, borderRadius:29, padding:2, justifyContent:'center', alignItems:'center' },
// // // // // // // // //   avatar:     { width:54, height:54, borderRadius:27 },

// // // // // // // // //   // AI Hero
// // // // // // // // //   heroWrap:        { marginBottom:24 },
// // // // // // // // //   heroCard:        { borderRadius:22, overflow:'hidden', borderWidth:1, borderColor:'#1E1E4A', position:'relative' },
// // // // // // // // //   heroTopBorder:   { height:2, borderTopLeftRadius:22, borderTopRightRadius:22 },
// // // // // // // // //   heroContent:     { flexDirection:'row', alignItems:'center', padding:18, gap:14 },
// // // // // // // // //   heroBrainWrap:   { position:'relative', width:70, height:70, justifyContent:'center', alignItems:'center' },
// // // // // // // // //   heroBrainRing:   { position:'absolute', width:70, height:70, borderRadius:35, borderWidth:1.5, borderColor:'#4ECDC460', shadowColor:'#4ECDC4', shadowOpacity:0.8, shadowRadius:10, elevation:3 },
// // // // // // // // //   heroBrainBg:     { width:60, height:60, borderRadius:18, justifyContent:'center', alignItems:'center' },
// // // // // // // // //   heroText:        { flex:1 },
// // // // // // // // //   heroLabel:       { color:'#4ECDC4', fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
// // // // // // // // //   heroTyping:      { color:'#E8E8FF', fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
// // // // // // // // //   cursor:          { color:'#4ECDC4' },
// // // // // // // // //   heroBtn:         { marginTop:14, alignSelf:'flex-start', borderRadius:10, overflow:'hidden' },
// // // // // // // // //   heroBtnGrad:     { flexDirection:'row', alignItems:'center', paddingHorizontal:14, paddingVertical:8, gap:6 },
// // // // // // // // //   heroBtnTxt:      { color:'#FFF', fontSize:12, fontWeight:'700' },
// // // // // // // // //   heroParticles:   { position:'absolute', right:10, top:10, flexDirection:'row', gap:4 },
// // // // // // // // //   heroDot:         { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

// // // // // // // // //   // Search
// // // // // // // // //   searchWrap:  { marginBottom:24, position:'relative' },
// // // // // // // // //   searchOuter: { borderRadius:18, borderWidth:1.5, borderColor:'#1A1A3F', overflow:'hidden' },
// // // // // // // // //   searchInner: { flexDirection:'row', alignItems:'center', paddingHorizontal:14, paddingVertical:13 },
// // // // // // // // //   input:       { flex:1, color:'#E0E0FF', fontSize:15, fontWeight:'500' },
// // // // // // // // //   srchBtn:     { borderRadius:10, overflow:'hidden' },
// // // // // // // // //   srchBtnGrad: { paddingHorizontal:12, paddingVertical:8 },
// // // // // // // // //   recentRow:   { flexDirection:'row', alignItems:'center', marginTop:10, flexWrap:'wrap', gap:6 },
// // // // // // // // //   recentLabel: { color:'#4A4A7A', fontSize:11 },
// // // // // // // // //   recentPill:  { backgroundColor:'#1A1A3A', paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:'#2A2A50' },
// // // // // // // // //   recentTxt:   { color:'#8888CC', fontSize:11, fontWeight:'600' },
// // // // // // // // //   particle:    { position:'absolute' },
// // // // // // // // //   particleDot: { width:6, height:6, borderRadius:3 },

// // // // // // // // //   // Carousel
// // // // // // // // //   carouselWrap:{ marginBottom:28 },
// // // // // // // // //   loadBox:     { alignItems:'center', paddingVertical:40 },
// // // // // // // // //   loadTxt:     { color:'#4A4A7A', marginTop:12, fontSize:13 },
// // // // // // // // //   cityCardWrap:{ marginRight:16 },
// // // // // // // // //   cityCard:    { width:width*0.72, height:255, borderRadius:22, overflow:'hidden', borderWidth:1, borderColor:'#4ECDC425' },
// // // // // // // // //   cityImg:     { width:'100%', height:'100%' },
// // // // // // // // //   scanLine:    { position:'absolute', left:0, right:0, top:'45%', height:1.5, backgroundColor:'#4ECDC4',
// // // // // // // // //                  shadowColor:'#4ECDC4', shadowOpacity:1, shadowRadius:8, elevation:3 },
// // // // // // // // //   cityOverlay: { position:'absolute', bottom:0, left:0, right:0, padding:14, paddingTop:40 },
// // // // // // // // //   cityBadge:   { flexDirection:'row', alignItems:'center', backgroundColor:'rgba(78,205,196,0.22)', alignSelf:'flex-start',
// // // // // // // // //                  paddingHorizontal:10, paddingVertical:4, borderRadius:20, marginBottom:8, borderWidth:1, borderColor:'#4ECDC455' },
// // // // // // // // //   badgeDot:    { width:5, height:5, borderRadius:3, backgroundColor:'#4ECDC4', marginRight:5 },
// // // // // // // // //   cityBadgeTxt:{ color:'#4ECDC4', fontSize:8, fontWeight:'800', letterSpacing:1.5 },
// // // // // // // // //   cityName:    { color:'#E8E8FF', fontSize:20, fontWeight:'800', letterSpacing:-0.3, marginBottom:5 },
// // // // // // // // //   cityMeta:    { flexDirection:'row', alignItems:'center' },
// // // // // // // // //   photoTxt:    { color:'#8888CC', fontSize:11 },
// // // // // // // // //   neonCorner:  { position:'absolute', top:0, right:0, width:40, height:40, borderTopWidth:2, borderRightWidth:2, borderColor:'#4ECDC4', borderTopRightRadius:22 },

// // // // // // // // //   // Grid
// // // // // // // // //   gridWrap:      { marginBottom:28 },
// // // // // // // // //   grid:          { flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', gap:14 },
// // // // // // // // //   gridItemWrap:  { width:S },
// // // // // // // // //   gridItem:      { alignItems:'center', position:'relative' },
// // // // // // // // //   gridRing:      { position:'absolute', top:-2, left:'50%', marginLeft:-37, width:74, height:74, borderRadius:20, borderWidth:1.5, shadowOpacity:0.5, shadowRadius:8, elevation:3 },
// // // // // // // // //   gridIconBox:   { width:70, height:70, borderRadius:18, justifyContent:'center', alignItems:'center', marginBottom:8, borderWidth:1 },
// // // // // // // // //   gridIconInner: { width:60, height:60, borderRadius:14, justifyContent:'center', alignItems:'center' },
// // // // // // // // //   gridTxt:       { color:'#C0C0FF', fontSize:12, fontWeight:'600', textAlign:'center' },

// // // // // // // // //   // Trending
// // // // // // // // //   trendWrap:  { marginBottom:28 },
// // // // // // // // //   trendCard:  { width:130, height:155, borderRadius:20, overflow:'hidden', shadowColor:'#000', shadowOpacity:0.3, shadowRadius:10, elevation:6 },
// // // // // // // // //   trendGrad:  { flex:1, padding:14, justifyContent:'flex-end', position:'relative' },
// // // // // // // // //   trendEmoji: { fontSize:30, marginBottom:4 },
// // // // // // // // //   trendCity:  { color:'#FFF', fontSize:16, fontWeight:'800' },
// // // // // // // // //   trendTagWrap:{ backgroundColor:'rgba(255,255,255,0.22)', alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:12, marginTop:5 },
// // // // // // // // //   trendTag:   { color:'#FFF', fontSize:9, fontWeight:'700' },
// // // // // // // // //   trendGlow:  { position:'absolute', top:-20, right:-20, width:80, height:80, borderRadius:40, backgroundColor:'#FFFFFF15' },

// // // // // // // // //   // Stats
// // // // // // // // //   statsWrap: { marginBottom:24 },
// // // // // // // // //   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // // // // // //   statCard:  { width:(width-52)/2 },
// // // // // // // // //   statGrad:  { padding:16, borderRadius:18, borderWidth:1, borderColor:'#1E1E4A', alignItems:'center' },
// // // // // // // // //   statIconWrap:{ width:40, height:40, borderRadius:12, borderWidth:1.5, justifyContent:'center', alignItems:'center', marginBottom:10, shadowOpacity:0.5, shadowRadius:8, elevation:3 },
// // // // // // // // //   statValue: { fontSize:22, fontWeight:'800', letterSpacing:-0.5 },
// // // // // // // // //   statLabel: { color:'#6868AA', fontSize:11, marginTop:4, fontWeight:'500', textAlign:'center' },

// // // // // // // // //   // Weather
// // // // // // // // //   weatherWrap: { marginBottom:24 },
// // // // // // // // //   weatherCard: { borderRadius:22, overflow:'hidden', borderWidth:1, borderColor:'#1E2E3A' },
// // // // // // // // //   weatherTopBorder:{ height:2 },
// // // // // // // // //   weatherRow:  { flexDirection:'row', justifyContent:'space-between', padding:18 },
// // // // // // // // //   weatherCity: { color:'#8888CC', fontSize:12, fontWeight:'600', marginBottom:6 },
// // // // // // // // //   weatherTemp: { color:'#E8E8FF', fontSize:44, fontWeight:'800', letterSpacing:-2 },
// // // // // // // // //   weatherDesc: { color:'#6868AA', fontSize:12, marginTop:4 },
// // // // // // // // //   weatherRight:{ alignItems:'flex-end', justifyContent:'space-between' },
// // // // // // // // //   weatherEmoji:{ fontSize:48 },
// // // // // // // // //   weatherMiniStats:{ flexDirection:'row', gap:8, marginTop:4 },
// // // // // // // // //   miniStat:    { alignItems:'center' },
// // // // // // // // //   miniIcon:    { fontSize:12 },
// // // // // // // // //   miniVal:     { color:'#8888CC', fontSize:10, fontWeight:'600' },
// // // // // // // // //   weatherForecast:{ flexDirection:'row', justifyContent:'space-around', borderTopWidth:1, borderColor:'#1E2E3A', paddingVertical:14, paddingHorizontal:10 },
// // // // // // // // //   forecastDay: { alignItems:'center', gap:4 },
// // // // // // // // //   forecastLabel:{ color:'#6868AA', fontSize:10, fontWeight:'600' },
// // // // // // // // //   forecastEmoji:{ fontSize:18 },
// // // // // // // // //   forecastTemp:{ color:'#C0C0FF', fontSize:12, fontWeight:'700' },

// // // // // // // // //   // Banner
// // // // // // // // //   bannerWrap:    { marginBottom:28 },
// // // // // // // // //   banner:        { borderRadius:22, overflow:'hidden', borderWidth:1, borderColor:'#3A1E5A', position:'relative' },
// // // // // // // // //   bannerTopBorder:{ height:2 },
// // // // // // // // //   bannerContent: { flexDirection:'row', padding:18, gap:14, alignItems:'center' },
// // // // // // // // //   bannerLeft:    { width:50, height:50, borderRadius:14, backgroundColor:'rgba(255,255,255,0.15)', justifyContent:'center', alignItems:'center' },
// // // // // // // // //   bannerEye:     { fontSize:28 },
// // // // // // // // //   bannerText:    { flex:1 },
// // // // // // // // //   bannerTitle:   { color:'#FFF', fontSize:16, fontWeight:'800', marginBottom:4 },
// // // // // // // // //   bannerSub:     { color:'rgba(255,255,255,0.7)', fontSize:12 },
// // // // // // // // //   bannerTags:    { flexDirection:'row', gap:6, marginTop:10 },
// // // // // // // // //   bannerTag:     { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
// // // // // // // // //   bannerTagTxt:  { color:'#FFF', fontSize:10, fontWeight:'600' },
// // // // // // // // //   cardBlob:      { position:'absolute', borderRadius:9999 },

// // // // // // // // //   // Section header
// // // // // // // // //   secHeader: { flexDirection:'row', alignItems:'center', marginBottom:14, gap:8 },
// // // // // // // // //   secLabel:  { color:'#C0C0FF', fontSize:14, fontWeight:'700', letterSpacing:0.3 },
// // // // // // // // //   secLine:   { flex:1, height:1, backgroundColor:'#1E1E3A' },
// // // // // // // // //   secCount:  { color:'#4A4A7A', fontSize:11 },
// // // // // // // // //   liveDot:   { width:8, height:8, borderRadius:4, backgroundColor:'#FF6B6B', shadowColor:'#FF6B6B', shadowOpacity:1, shadowRadius:6, elevation:2 },
// // // // // // // // //   seeAll:    { color:'#4ECDC4', fontSize:12, fontWeight:'700' },

// // // // // // // // //   // Footer
// // // // // // // // //   footer:      { marginTop:10, marginBottom:10 },
// // // // // // // // //   footerGrad:  { alignItems:'center', paddingVertical:28, paddingHorizontal:30, borderRadius:22, borderWidth:1, borderColor:'#1A1A3A', gap:6 },
// // // // // // // // //   footerTitle: { color:'#C0C0FF', fontSize:14, fontWeight:'700', marginTop:6 },
// // // // // // // // //   footerSub:   { color:'#4A4A7A', fontSize:11, letterSpacing:1 },
// // // // // // // // //   footerDots:  { flexDirection:'row', gap:10, marginTop:10 },
// // // // // // // // //   footerDot:   { width:8, height:8, borderRadius:4, shadowOpacity:1, shadowRadius:5, elevation:2 },
// // // // // // // // // });





// // // // // // // // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // // // // // // // import {
// // // // // // // //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// // // // // // // //   FlatList, Image, Dimensions, Animated, TextInput,
// // // // // // // //   ActivityIndicator, StatusBar,
// // // // // // // // } from 'react-native';
// // // // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // // // // import axios from 'axios';

// // // // // // // // const { width } = Dimensions.get('window');

// // // // // // // // /* ═══════════════════════════════════════════════════
// // // // // // // //    ⚡ OBSIDIAN GOLD – Design Tokens
// // // // // // // //    Palette: Ultra-Dark Purple + Obsidian Black + Pure White + 24K Gold
// // // // // // // // ═══════════════════════════════════════════════════ */
// // // // // // // // const T = {
// // // // // // // //   bg:      '#080808',   // very dark green-black
// // // // // // // //   surf:    '#0F0F0F',   // dark forest surface
// // // // // // // //   card:    '#120F00',   // card background
// // // // // // // //   card2:   '#161200',   // alt card
// // // // // // // //   border:  '#1E1E1E',
// // // // // // // //   border2: '#282828',

// // // // // // // //   mint:    '#FFFFFF',   // primary — electric violet
// // // // // // // //   mintL:   '#F5C518',   // light violet
// // // // // // // //   mintD:   '#C9A227',   // medium purple
// // // // // // // //   purple:  '#F5C518',   // secondary — neon cyan
// // // // // // // //   purpleL: '#E8B820',   // light cyan
// // // // // // // //   pink:    '#B8860B',   // accent — burnt orange
// // // // // // // //   pinkL:   '#DAA520',   // light amber
// // // // // // // //   gold:    '#FFF9E6',   // neon lime
// // // // // // // //   sky:     '#C9A227',   // hot pink

// // // // // // // //   t1: '#FFFFFF',  // primary text — violet-tinted white
// // // // // // // //   t2: '#C9A227',  // secondary
// // // // // // // //   t3: '#666666',  // muted
// // // // // // // // };

// // // // // // // // /* ═══ Data ══════════════════════════════════════════ */
// // // // // // // // const shortcuts = [
// // // // // // // //   { id:'1', name:'Budget',  icon:'wallet-outline',    c: T.pink,   bg:'#141200' },
// // // // // // // //   { id:'2', name:'Flights', icon:'airplane-outline',  c: T.mint,   bg:'#120F00' },
// // // // // // // //   { id:'3', name:'Hotels',  icon:'bed-outline',        c: T.gold,   bg:'#161200' },
// // // // // // // //   { id:'4', name:'Planner', icon:'calendar-outline',  c: T.purple, bg:'#111000' },
// // // // // // // //   { id:'5', name:'News',    icon:'newspaper-outline', c: T.sky,    bg:'#141100' },
// // // // // // // //   { id:'6', name:'Map',     icon:'navigate-outline',  c: T.pinkL,  bg:'#181300' },
// // // // // // // // ];

// // // // // // // // const trending = [
// // // // // // // //   { id:'t1', city:'Tokyo',     sub:'Japan',      emoji:'🗼', g:['#FFFFFF','#F5C518'] },
// // // // // // // //   { id:'t2', city:'Santorini', sub:'Greece',    emoji:'🏛️', g:['#B8860B','#C9A227'] },
// // // // // // // //   { id:'t3', city:'Bali',      sub:'Indonesia', emoji:'🌴', g:['#FFF9E6','#F5C518'] },
// // // // // // // //   { id:'t4', city:'Dubai',     sub:'UAE',       emoji:'🏙️', g:['#DAA520','#B8860B'] },
// // // // // // // //   { id:'t5', city:'Maldives',  sub:'South Asia',emoji:'🏝️', g:['#C9A227','#FFFFFF'] },
// // // // // // // // ];

// // // // // // // // const aiPhrases = ['Discover the world...', 'Find hidden gems...', 'Plan your adventure...', 'Explore smarter...'];

// // // // // // // // /* ═══ Shimmer Effect ════════════════════════════════ */
// // // // // // // // const Shimmer = ({ w, h, br=10 }) => {
// // // // // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // // // // //   useEffect(() => {
// // // // // // // //     Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
// // // // // // // //   }, []);
// // // // // // // //   const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w, w] });
// // // // // // // //   return (
// // // // // // // //     <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#1E1E1E', overflow:'hidden' }}>
// // // // // // // //       <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
// // // // // // // //         <LinearGradient colors={['transparent','#FFFFFF12','transparent']} start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
// // // // // // // //       </Animated.View>
// // // // // // // //     </View>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // /* ═══ Animated Number Counter ═══════════════════════ */
// // // // // // // // const Counter = ({ target, suffix = '', color }) => {
// // // // // // // //   const [val, setVal] = useState(0);
// // // // // // // //   useEffect(() => {
// // // // // // // //     let start = 0;
// // // // // // // //     const num = parseFloat(target);
// // // // // // // //     const step = num / 40;
// // // // // // // //     const t = setInterval(() => {
// // // // // // // //       start += step;
// // // // // // // //       if (start >= num) { setVal(num); clearInterval(t); }
// // // // // // // //       else setVal(Math.floor(start * 10) / 10);
// // // // // // // //     }, 35);
// // // // // // // //     return () => clearInterval(t);
// // // // // // // //   }, []);
// // // // // // // //   return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
// // // // // // // // };

// // // // // // // // /* ═══ Glow Dot ══════════════════════════════════════ */
// // // // // // // // const GlowDot = ({ color, size=8, pulseAnim }) => (
// // // // // // // //   <Animated.View style={[styles.glowDot, {
// // // // // // // //     width:size, height:size, borderRadius:size/2,
// // // // // // // //     backgroundColor:color,
// // // // // // // //     shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
// // // // // // // //     transform:[{ scale: pulseAnim }],
// // // // // // // //   }]} />
// // // // // // // // );

// // // // // // // // /* ═══ City Card ═════════════════════════════════════ */
// // // // // // // // const CityCard = ({ item, index, query }) => {
// // // // // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // // // // //   const sc = useRef(new Animated.Value(0.8)).current;
// // // // // // // //   const sl = useRef(new Animated.Value(50)).current;
// // // // // // // //   useEffect(() => {
// // // // // // // //     Animated.sequence([
// // // // // // // //       Animated.delay(index * 100),
// // // // // // // //       Animated.parallel([
// // // // // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
// // // // // // // //         Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
// // // // // // // //         Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
// // // // // // // //       ]),
// // // // // // // //     ]).start();
// // // // // // // //   }, []);
// // // // // // // //   return (
// // // // // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
// // // // // // // //       <View style={styles.cityCard}>
// // // // // // // //         <Image source={{ uri: item.url }} style={styles.cityImg} />
// // // // // // // //         {/* Aurora tint overlay */}
// // // // // // // //         <LinearGradient
// // // // // // // //           colors={['transparent','rgba(245,197,24,0.08)','rgba(0,0,0,0.90)']}
// // // // // // // //           style={styles.cityGrad}
// // // // // // // //         >
// // // // // // // //           <View style={styles.cityTopRow}>
// // // // // // // //             <View style={[styles.liveChip, { borderColor: T.mint+'60' }]}>
// // // // // // // //               <View style={[styles.liveDot, { backgroundColor: T.mint, shadowColor: T.mint }]} />
// // // // // // // //               <Text style={[styles.liveChipTxt, { color: T.mintL }]}>LIVE</Text>
// // // // // // // //             </View>
// // // // // // // //           </View>
// // // // // // // //           <Text style={styles.cityName}>{query}</Text>
// // // // // // // //           <View style={styles.cityMeta}>
// // // // // // // //             <Ionicons name="camera-outline" size={11} color={T.t3} />
// // // // // // // //             <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
// // // // // // // //           </View>
// // // // // // // //         </LinearGradient>
// // // // // // // //         {/* Mint corner accent */}
// // // // // // // //         <View style={[styles.cornerAccent, { borderColor: T.mint }]} />
// // // // // // // //       </View>
// // // // // // // //     </Animated.View>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // /* ═══ Trend Card ════════════════════════════════════ */
// // // // // // // // const TrendCard = ({ item, index }) => {
// // // // // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // // // // //   const sc = useRef(new Animated.Value(0.88)).current;
// // // // // // // //   useEffect(() => {
// // // // // // // //     Animated.sequence([
// // // // // // // //       Animated.delay(index * 90),
// // // // // // // //       Animated.parallel([
// // // // // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
// // // // // // // //         Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
// // // // // // // //       ]),
// // // // // // // //     ]).start();
// // // // // // // //   }, []);
// // // // // // // //   return (
// // // // // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
// // // // // // // //       <TouchableOpacity activeOpacity={0.82}>
// // // // // // // //         <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
// // // // // // // //           <Text style={styles.trendEmoji}>{item.emoji}</Text>
// // // // // // // //           <Text style={styles.trendCity}>{item.city}</Text>
// // // // // // // //           <Text style={styles.trendSub}>{item.sub}</Text>
// // // // // // // //           <View style={styles.trendBadge}>
// // // // // // // //             <Ionicons name="trending-up" size={10} color="#FFF" />
// // // // // // // //             <Text style={styles.trendBadgeTxt}>Trending</Text>
// // // // // // // //           </View>
// // // // // // // //           {/* Glass circle */}
// // // // // // // //           <View style={styles.trendCircle} />
// // // // // // // //         </LinearGradient>
// // // // // // // //       </TouchableOpacity>
// // // // // // // //     </Animated.View>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // /* ═══ Particle ══════════════════════════════════════ */
// // // // // // // // const Particle = ({ x, y, delay, color }) => {
// // // // // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // // // // //   useEffect(() => {
// // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // //       Animated.delay(delay),
// // // // // // // //       Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
// // // // // // // //       Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
// // // // // // // //     ])).start();
// // // // // // // //   }, []);
// // // // // // // //   return (
// // // // // // // //     <Animated.View style={[styles.particle, {
// // // // // // // //       left:x, top:y,
// // // // // // // //       opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
// // // // // // // //       transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
// // // // // // // //     }]}>
// // // // // // // //       <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
// // // // // // // //     </Animated.View>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // /* ═══════════════════════════════════════════════════
// // // // // // // //    MAIN SCREEN
// // // // // // // // ═══════════════════════════════════════════════════ */
// // // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // // //   const [query,     setQuery]     = useState('');
// // // // // // // //   const [images,    setImages]    = useState([]);
// // // // // // // //   const [loading,   setLoading]   = useState(false);
// // // // // // // //   const [particles, setParticles] = useState([]);
// // // // // // // //   const [focused,   setFocused]   = useState(false);
// // // // // // // //   const [imgKey,    setImgKey]    = useState(0);
// // // // // // // //   const [aiText,    setAiText]    = useState('');

// // // // // // // //   const fade   = useRef(new Animated.Value(0)).current;
// // // // // // // //   const slideY = useRef(new Animated.Value(40)).current;
// // // // // // // //   const pulse  = useRef(new Animated.Value(0)).current;
// // // // // // // //   const float  = useRef(new Animated.Value(0)).current;
// // // // // // // //   const spin   = useRef(new Animated.Value(0)).current;
// // // // // // // //   const aurora = useRef(new Animated.Value(0)).current;
// // // // // // // //   const phraseIdx = useRef(0);

// // // // // // // //   useEffect(() => {
// // // // // // // //     Animated.parallel([
// // // // // // // //       Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
// // // // // // // //       Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
// // // // // // // //     ]).start();

// // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // //       Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
// // // // // // // //       Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
// // // // // // // //     ])).start();
// // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // //       Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
// // // // // // // //       Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
// // // // // // // //     ])).start();
// // // // // // // //     Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
// // // // // // // //     // Aurora shift
// // // // // // // //     Animated.loop(Animated.sequence([
// // // // // // // //       Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
// // // // // // // //       Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
// // // // // // // //     ])).start();

// // // // // // // //     // Typewriter
// // // // // // // //     const typePhrase = () => {
// // // // // // // //       const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
// // // // // // // //       const t = setInterval(() => {
// // // // // // // //         i++; setAiText(ph.slice(0,i));
// // // // // // // //         if (i >= ph.length) {
// // // // // // // //           clearInterval(t);
// // // // // // // //           setTimeout(() => { phraseIdx.current = (phraseIdx.current+1)%aiPhrases.length; typePhrase(); }, 2000);
// // // // // // // //         }
// // // // // // // //       }, 55);
// // // // // // // //       return t;
// // // // // // // //     };
// // // // // // // //     const t = typePhrase();
// // // // // // // //     return () => clearInterval(t);
// // // // // // // //   }, []);

// // // // // // // //   const handleSearch = useCallback(async () => {
// // // // // // // //     if (!query.trim()) return;
// // // // // // // //     setParticles(Array.from({length:12}, (_,i) => ({
// // // // // // // //       id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
// // // // // // // //       color:[T.mint,T.purple,T.pink,T.gold,T.sky][i%5],
// // // // // // // //     })));
// // // // // // // //     setLoading(true); setImages([]);
// // // // // // // //     try {
// // // // // // // //       const r = await axios.get(`http://10.176.82.30:3000/api/photos?query=${query}`);
// // // // // // // //       if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
// // // // // // // //     } catch(e) { console.error(e); }
// // // // // // // //     finally { setLoading(false); }
// // // // // // // //   }, [query]);

// // // // // // // //   const spinStr = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
// // // // // // // //   const floatY  = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
// // // // // // // //   const pulseS  = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
// // // // // // // //   const auroraX = aurora.interpolate({ inputRange:[0,1], outputRange:[0, 30] });
// // // // // // // //   const auroraO = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });

// // // // // // // //   return (
// // // // // // // //     <SafeAreaView style={styles.root}>
// // // // // // // //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// // // // // // // //       {/* ── AURORA BACKGROUND ─────────────────────── */}
// // // // // // // //       <View style={StyleSheet.absoluteFill} pointerEvents="none">
// // // // // // // //         <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />

// // // // // // // //         {/* Aurora bands - shift horizontally */}
// // // // // // // //         <Animated.View style={[styles.auroraband, {
// // // // // // // //           backgroundColor: T.mint+'0D', top:60, height:220,
// // // // // // // //           transform:[{translateX:auroraX}], opacity:auroraO,
// // // // // // // //         }]} />
// // // // // // // //         <Animated.View style={[styles.auroraband, {
// // // // // // // //           backgroundColor: T.purple+'0A', top:130, height:180,
// // // // // // // //           transform:[{translateX: auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
// // // // // // // //           opacity:auroraO,
// // // // // // // //         }]} />

// // // // // // // //         {/* Blobs */}
// // // // // // // //         <Animated.View style={[styles.blob, {
// // // // // // // //           backgroundColor: T.mint+'10', width:350, height:350,
// // // // // // // //           top:-100, right:-80, transform:[{translateY:floatY}],
// // // // // // // //         }]} />
// // // // // // // //         <Animated.View style={[styles.blob, {
// // // // // // // //           backgroundColor: T.purple+'0C', width:280, height:280,
// // // // // // // //           bottom:350, left:-90, transform:[{translateY:floatY}],
// // // // // // // //         }]} />
// // // // // // // //         <Animated.View style={[styles.blob, {
// // // // // // // //           backgroundColor: T.pink+'08', width:200, height:200,
// // // // // // // //           bottom:100, right:40, transform:[{translateY:floatY}],
// // // // // // // //         }]} />

// // // // // // // //         {/* Floating decorative rings */}
// // // // // // // //         <Animated.View style={[styles.decRing, {
// // // // // // // //           borderColor: T.mint+'18', width:260, height:260, borderRadius:130,
// // // // // // // //           top:80, right:-100, transform:[{translateY:floatY}],
// // // // // // // //         }]} />
// // // // // // // //         <Animated.View style={[styles.decRing, {
// // // // // // // //           borderColor: T.purple+'14', width:180, height:180, borderRadius:90,
// // // // // // // //           bottom:200, left:-60, transform:[{translateY:floatY}],
// // // // // // // //         }]} />
// // // // // // // //       </View>

// // // // // // // //       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

// // // // // // // //         {/* ── HEADER ──────────────────────────────── */}
// // // // // // // //         <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // // //           <View style={styles.header}>
// // // // // // // //             <View>
// // // // // // // //               <View style={styles.aiBadge}>
// // // // // // // //                 <GlowDot color={T.mint} pulseAnim={pulseS} />
// // // // // // // //                 <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
// // // // // // // //               </View>
// // // // // // // //               <Text style={styles.greet}>Good Evening 🌙</Text>
// // // // // // // //               <View style={styles.nameRow}>
// // // // // // // //                 <Text style={styles.name}>Chaitanya</Text>
// // // // // // // //                 <Text style={styles.nameWave}>👋</Text>
// // // // // // // //               </View>
// // // // // // // //               {/* Aurora name underline */}
// // // // // // // //               <LinearGradient colors={['#FFFFFF','#C9A227','#555555']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
// // // // // // // //             </View>
// // // // // // // //             <View>
// // // // // // // //               <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
// // // // // // // //               <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
// // // // // // // //                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=F5C518&size=100' }} style={styles.avatar} />
// // // // // // // //               </LinearGradient>
// // // // // // // //             </View>
// // // // // // // //           </View>
// // // // // // // //         </Animated.View>

// // // // // // // //         {/* ── HERO CARD (unique diagonal) ─────────── */}
// // // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // // //           <View style={styles.heroOuter}>
// // // // // // // //             {/* Triple gradient border effect */}
// // // // // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#333333']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
// // // // // // // //               <View style={styles.heroCard}>
// // // // // // // //                 {/* Background diagonal slice */}
// // // // // // // //                 <LinearGradient
// // // // // // // //                   colors={[T.mint+'20', T.purple+'18', 'transparent']}
// // // // // // // //                   start={{x:0,y:0}} end={{x:1,y:1}}
// // // // // // // //                   style={StyleSheet.absoluteFill}
// // // // // // // //                 />
// // // // // // // //                 <View style={styles.heroContent}>
// // // // // // // //                   <View style={styles.heroLeft}>
// // // // // // // //                     {/* Rotating orbit ring */}
// // // // // // // //                     <View style={styles.orbitWrap}>
// // // // // // // //                       <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
// // // // // // // //                       <View style={[styles.orbitCore, { backgroundColor: T.mint+'30', borderColor: T.mint+'50' }]}>
// // // // // // // //                         <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
// // // // // // // //                       </View>
// // // // // // // //                     </View>
// // // // // // // //                   </View>
// // // // // // // //                   <View style={styles.heroRight}>
// // // // // // // //                     <Text style={styles.heroPre}>⚡ GOLD AI ENGINE</Text>
// // // // // // // //                     <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
// // // // // // // //                     <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
// // // // // // // //                       <LinearGradient colors={[T.mint, T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
// // // // // // // //                         <Text style={styles.heroBtnTxt}>Plan Trip</Text>
// // // // // // // //                         <Ionicons name="arrow-forward" size={13} color={T.bg} />
// // // // // // // //                       </LinearGradient>
// // // // // // // //                     </TouchableOpacity>
// // // // // // // //                   </View>
// // // // // // // //                 </View>
// // // // // // // //                 {/* Decorative dots pattern */}
// // // // // // // //                 <View style={styles.dotGrid} pointerEvents="none">
// // // // // // // //                   {Array.from({length:6}).map((_,i) => (
// // // // // // // //                     <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
// // // // // // // //                   ))}
// // // // // // // //                 </View>
// // // // // // // //               </View>
// // // // // // // //             </LinearGradient>
// // // // // // // //           </View>
// // // // // // // //         </Animated.View>

// // // // // // // //         {/* ── SEARCH ──────────────────────────────── */}
// // // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
// // // // // // // //           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
// // // // // // // //           <View style={[styles.searchBox, focused && { borderColor: T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}>
// // // // // // // //             <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
// // // // // // // //             <TextInput
// // // // // // // //               placeholder="Where to next?"
// // // // // // // //               placeholderTextColor={T.t3}
// // // // // // // //               style={styles.searchInput}
// // // // // // // //               value={query}
// // // // // // // //               onChangeText={setQuery}
// // // // // // // //               onSubmitEditing={handleSearch}
// // // // // // // //               onFocus={() => setFocused(true)}
// // // // // // // //               onBlur={() => setFocused(false)}
// // // // // // // //               returnKeyType="search"
// // // // // // // //             />
// // // // // // // //             {loading
// // // // // // // //               ? <ActivityIndicator size="small" color={T.mint} />
// // // // // // // //               : query.length > 0 && (
// // // // // // // //                 <TouchableOpacity onPress={handleSearch}>
// // // // // // // //                   <LinearGradient colors={[T.mint, T.mintD]} style={styles.goBtn}>
// // // // // // // //                     <Ionicons name="arrow-forward" size={14} color={T.bg} />
// // // // // // // //                   </LinearGradient>
// // // // // // // //                 </TouchableOpacity>
// // // // // // // //               )
// // // // // // // //             }
// // // // // // // //           </View>
// // // // // // // //           {/* Quick search tags */}
// // // // // // // //           <View style={styles.tagsRow}>
// // // // // // // //             {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
// // // // // // // //               <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
// // // // // // // //                 <Text style={styles.tagPillTxt}>{t}</Text>
// // // // // // // //               </TouchableOpacity>
// // // // // // // //             ))}
// // // // // // // //           </View>
// // // // // // // //         </Animated.View>

// // // // // // // //         {/* ── CITY RESULTS ────────────────────────── */}
// // // // // // // //         {(images.length > 0 || loading) && (
// // // // // // // //           <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // // // // //             <View style={styles.secRow}>
// // // // // // // //               <View style={styles.secLeft}>
// // // // // // // //                 <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
// // // // // // // //                 <Text style={styles.secTitle}> Results for "{query}"</Text>
// // // // // // // //               </View>
// // // // // // // //               <Text style={styles.secBadge}>{images.length} photos</Text>
// // // // // // // //             </View>
// // // // // // // //             {loading
// // // // // // // //               ? <View style={styles.loadBox}>
// // // // // // // //                   <View style={styles.shimmerRow}>
// // // // // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // // // // //                   </View>
// // // // // // // //                 </View>
// // // // // // // //               : <FlatList
// // // // // // // //                   key={imgKey} data={images} horizontal
// // // // // // // //                   showsHorizontalScrollIndicator={false}
// // // // // // // //                   keyExtractor={it => it.id}
// // // // // // // //                   snapToInterval={width*0.72+14}
// // // // // // // //                   decelerationRate="fast"
// // // // // // // //                   contentContainerStyle={{ paddingRight:20 }}
// // // // // // // //                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
// // // // // // // //                 />
// // // // // // // //             }
// // // // // // // //           </Animated.View>
// // // // // // // //         )}

// // // // // // // //         {/* ── QUICK ACCESS —Bento style ────────────── */}
// // // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // // //           <Text style={styles.secTitle2}>Quick Access</Text>
// // // // // // // //           <View style={styles.bento}>
// // // // // // // //             {shortcuts.map((item) => (
// // // // // // // //               <TouchableOpacity
// // // // // // // //                 key={item.id}
// // // // // // // //                 style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
// // // // // // // //                 activeOpacity={0.75}
// // // // // // // //                 onPress={() => {
// // // // // // // //                   if (item.name==='Hotels')  navigation.navigate('HotelSearch');
// // // // // // // //                   if (item.name==='Budget')  navigation.navigate('Budget');
// // // // // // // //                   if (item.name==='Planner') navigation.navigate('Planner');
// // // // // // // //                   if (item.name==='News')    navigation.navigate('News');
// // // // // // // //                   if (item.name==='Map')     navigation.navigate('LiveNavigation');
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
// // // // // // // //                   <Ionicons name={item.icon} size={22} color={item.c} />
// // // // // // // //                 </View>
// // // // // // // //                 <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
// // // // // // // //                 {/* Corner dot accent */}
// // // // // // // //                 <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
// // // // // // // //               </TouchableOpacity>
// // // // // // // //             ))}
// // // // // // // //           </View>
// // // // // // // //         </Animated.View>

// // // // // // // //         {/* ── TRENDING ────────────────────────────── */}
// // // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // // //           <View style={styles.secRow}>
// // // // // // // //             <Text style={styles.secTitle2}>Trending 🔥</Text>
// // // // // // // //             <TouchableOpacity>
// // // // // // // //               <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
// // // // // // // //             </TouchableOpacity>
// // // // // // // //           </View>
// // // // // // // //           <FlatList
// // // // // // // //             data={trending} horizontal showsHorizontalScrollIndicator={false}
// // // // // // // //             keyExtractor={it => it.id}
// // // // // // // //             contentContainerStyle={{ gap:12, paddingRight:20 }}
// // // // // // // //             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
// // // // // // // //           />
// // // // // // // //         </Animated.View>

// // // // // // // //         {/* ── STATS — Counter animation ────────────── */}
// // // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // // //           <Text style={styles.secTitle2}>By the Numbers</Text>
// // // // // // // //           <View style={styles.statsGrid}>
// // // // // // // //             {[
// // // // // // // //               { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
// // // // // // // //               { label:'AI Accuracy',   num:'98.7', suf:'%',  color:T.purple },
// // // // // // // //               { label:'Destinations',  num:'190',  suf:'+',  color:T.pink },
// // // // // // // //               { label:'Happy Users',   num:'500',  suf:'K',  color:T.gold },
// // // // // // // //             ].map((s,i) => (
// // // // // // // //               <View key={i} style={[styles.statCard, { borderColor: s.color+'30' }]}>
// // // // // // // //                 <LinearGradient colors={[s.color+'18', 'transparent']} style={StyleSheet.absoluteFill} />
// // // // // // // //                 <Counter target={s.num} suffix={s.suf} color={s.color} />
// // // // // // // //                 <Text style={styles.statLabel}>{s.label}</Text>
// // // // // // // //               </View>
// // // // // // // //             ))}
// // // // // // // //           </View>
// // // // // // // //         </Animated.View>

// // // // // // // //         {/* ── WEATHER WIDGET ──────────────────────── */}
// // // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // // //           <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
// // // // // // // //             {/* Mint strip */}
// // // // // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
// // // // // // // //             <View style={styles.weatherBody}>
// // // // // // // //               <View>
// // // // // // // //                 <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
// // // // // // // //                 <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
// // // // // // // //                 <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
// // // // // // // //               </View>
// // // // // // // //               <View style={styles.wtRight}>
// // // // // // // //                 <Text style={styles.wtEmoji}>⛅</Text>
// // // // // // // //                 <View style={styles.wtMinis}>
// // // // // // // //                   {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
// // // // // // // //                     <View key={v} style={styles.wtMini}>
// // // // // // // //                       <Text>{ic}</Text>
// // // // // // // //                       <Text style={styles.wtMiniV}>{v}</Text>
// // // // // // // //                     </View>
// // // // // // // //                   ))}
// // // // // // // //                 </View>
// // // // // // // //               </View>
// // // // // // // //             </View>
// // // // // // // //             <View style={[styles.wtLine, { backgroundColor:T.border }]} />
// // // // // // // //             <View style={styles.wtForecast}>
// // // // // // // //               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
// // // // // // // //                 <View key={d} style={styles.wtDay}>
// // // // // // // //                   <Text style={styles.wtDayL}>{d}</Text>
// // // // // // // //                   <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
// // // // // // // //                   <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
// // // // // // // //                 </View>
// // // // // // // //               ))}
// // // // // // // //             </View>
// // // // // // // //           </View>
// // // // // // // //         </Animated.View>

// // // // // // // //         {/* ── AI PICK BANNER ──────────────────────── */}
// // // // // // // //         <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // // // // //           <LinearGradient colors={['#161200','#282828','#444444']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
// // // // // // // //             <View style={styles.pickInner}>
// // // // // // // //               <View style={styles.pickTopRow}>
// // // // // // // //                 <View style={styles.pickBadge}>
// // // // // // // //                   <Text style={styles.pickBadgeTxt}>✦ AI PICK</Text>
// // // // // // // //                 </View>
// // // // // // // //                 <Text style={styles.pickDot}>TODAY</Text>
// // // // // // // //               </View>
// // // // // // // //               <Text style={styles.pickTitle}>Santorini, Greece</Text>
// // // // // // // //               <Text style={styles.pickSub}>Perfect season · April – June</Text>
// // // // // // // //               <View style={styles.pickTagsRow}>
// // // // // // // //                 {['Romantic','Beach','Scenic'].map(t=>(
// // // // // // // //                   <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
// // // // // // // //                 ))}
// // // // // // // //               </View>
// // // // // // // //             </View>
// // // // // // // //             <Text style={styles.pickEmoji}>🏛️</Text>
// // // // // // // //             <View style={styles.pickCircle1} />
// // // // // // // //             <View style={styles.pickCircle2} />
// // // // // // // //           </LinearGradient>
// // // // // // // //         </Animated.View>

// // // // // // // //         {/* ── FOOTER ──────────────────────────────── */}
// // // // // // // //         <Animated.View style={[styles.footer, { opacity:fade }]}>
// // // // // // // //           <LinearGradient colors={[T.mint+'15', T.purple+'10']} style={styles.footerCard}>
// // // // // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
// // // // // // // //             <Animated.View style={{ transform:[{rotate:spinStr}] }}>
// // // // // // // //               <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
// // // // // // // //             </Animated.View>
// // // // // // // //             <Text style={styles.footerTitle}>Gold Travel AI</Text>
// // // // // // // //             <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
// // // // // // // //             <View style={styles.footerPills}>
// // // // // // // //               {[T.mint, T.purple, T.pink, T.gold].map(c=>(
// // // // // // // //                 <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
// // // // // // // //               ))}
// // // // // // // //             </View>
// // // // // // // //           </LinearGradient>
// // // // // // // //         </Animated.View>

// // // // // // // //         <View style={{ height:50 }} />
// // // // // // // //       </ScrollView>
// // // // // // // //     </SafeAreaView>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* ═══ Styles ════════════════════════════════════════ */
// // // // // // // // const BW = (width - 72) / 3;

// // // // // // // // const styles = StyleSheet.create({
// // // // // // // //   root:   { flex:1, backgroundColor:T.bg },
// // // // // // // //   scroll: { paddingHorizontal:20, paddingTop:12 },
// // // // // // // //   section:{ marginBottom:26 },

// // // // // // // //   // Background
// // // // // // // //   auroraband:{ position:'absolute', left:0, right:0, borderRadius:40 },
// // // // // // // //   blob:      { position:'absolute', borderRadius:9999 },
// // // // // // // //   decRing:   { position:'absolute', borderWidth:1 },

// // // // // // // //   // Header
// // // // // // // //   headerWrap:{ marginBottom:24 },
// // // // // // // //   header:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
// // // // // // // //   aiBadge:   { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
// // // // // // // //   aiBadgeTxt:{ color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
// // // // // // // //   glowDot:   {},
// // // // // // // //   greet:     { color:T.t2, fontSize:13, fontWeight:'500' },
// // // // // // // //   nameRow:   { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
// // // // // // // //   name:      { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
// // // // // // // //   nameWave:  { fontSize:26 },
// // // // // // // //   nameBar:   { width:60, height:3, borderRadius:2, marginTop:10 },
// // // // // // // //   avatarHalo:{ position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
// // // // // // // //   avatarGrad:{ width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
// // // // // // // //   avatar:    { width:55, height:55, borderRadius:28 },

// // // // // // // //   // Hero
// // // // // // // //   heroOuter: { borderRadius:22, overflow:'hidden' },
// // // // // // // //   heroBorder:{ padding:1.5, borderRadius:22 },
// // // // // // // //   heroCard:  { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
// // // // // // // //   heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
// // // // // // // //   heroLeft:  {},
// // // // // // // //   orbitWrap: { width:60, height:60, justifyContent:'center', alignItems:'center' },
// // // // // // // //   orbit:     { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
// // // // // // // //   orbitCore: { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
// // // // // // // //   heroRight: { flex:1 },
// // // // // // // //   heroPre:   { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
// // // // // // // //   heroType:  { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
// // // // // // // //   heroBtn:   { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
// // // // // // // //   heroBtnG:  { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
// // // // // // // //   heroBtnTxt:{ color:T.bg, fontSize:13, fontWeight:'800' },
// // // // // // // //   dotGrid:   { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
// // // // // // // //   dotGridItem:{ width:5, height:5, borderRadius:3 },

// // // // // // // //   // Search
// // // // // // // //   searchBox: { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
// // // // // // // //                borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
// // // // // // // //   searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
// // // // // // // //   goBtn:     { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
// // // // // // // //   tagsRow:   { flexDirection:'row', gap:8, flexWrap:'wrap' },
// // // // // // // //   tagPill:   { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
// // // // // // // //   tagPillTxt:{ color:T.t2, fontSize:11, fontWeight:'600' },
// // // // // // // //   particle:  { position:'absolute' },
// // // // // // // //   pDot:      { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

// // // // // // // //   // City cards
// // // // // // // //   cityCard:  { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
// // // // // // // //   cityImg:   { width:'100%', height:'100%' },
// // // // // // // //   cityGrad:  { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
// // // // // // // //   cityTopRow:{ position:'absolute', top:14, left:14 },
// // // // // // // //   liveChip:  { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
// // // // // // // //   liveDot:   { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
// // // // // // // //   liveChipTxt:{ fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // // // // //   cityName:  { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
// // // // // // // //   cityMeta:  { flexDirection:'row', alignItems:'center' },
// // // // // // // //   cityMetaTxt:{ color:T.t3, fontSize:11 },
// // // // // // // //   cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
// // // // // // // //   shimmerRow:{ flexDirection:'row', gap:14 },
// // // // // // // //   loadBox:   { paddingVertical:10 },
// // // // // // // //   secRow:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
// // // // // // // //   secLeft:   { flexDirection:'row', alignItems:'center' },
// // // // // // // //   secTitle:  { color:T.t1, fontSize:15, fontWeight:'700' },
// // // // // // // //   secTitle2: { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
// // // // // // // //   secBadge:  { color:T.t3, fontSize:11 },
// // // // // // // //   seeAll:    { fontSize:13, fontWeight:'600' },

// // // // // // // //   // Bento grid
// // // // // // // //   bento:     { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // // // // //   bentoItem: { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
// // // // // // // //                alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
// // // // // // // //   bentoIcon: { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
// // // // // // // //   bentoTxt:  { fontSize:12, fontWeight:'700' },
// // // // // // // //   bentoDot:  { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },

// // // // // // // //   // Trending
// // // // // // // //   trendCard: { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
// // // // // // // //   trendEmoji:{ fontSize:30, marginBottom:4 },
// // // // // // // //   trendCity: { color:'#FFF', fontSize:16, fontWeight:'800' },
// // // // // // // //   trendSub:  { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
// // // // // // // //   trendBadge:{ flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)', alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
// // // // // // // //   trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
// // // // // // // //   trendCircle:{ position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20, backgroundColor:'rgba(255,255,255,0.08)' },

// // // // // // // //   // Stats
// // // // // // // //   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // // // // //   statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
// // // // // // // //   statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
// // // // // // // //   statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

// // // // // // // //   // Weather
// // // // // // // //   weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
// // // // // // // //   weatherStrip: { height:2 },
// // // // // // // //   weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
// // // // // // // //   wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
// // // // // // // //   wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
// // // // // // // //   wtDeg:     { fontSize:24, fontWeight:'400' },
// // // // // // // //   wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
// // // // // // // //   wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
// // // // // // // //   wtEmoji:   { fontSize:44 },
// // // // // // // //   wtMinis:   { flexDirection:'row', gap:10 },
// // // // // // // //   wtMini:    { alignItems:'center', gap:2 },
// // // // // // // //   wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // // // // //   wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
// // // // // // // //   wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
// // // // // // // //   wtDay:     { alignItems:'center', gap:4 },
// // // // // // // //   wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // // // // //   wtDayIc:   { fontSize:18 },
// // // // // // // //   wtDayT:    { fontSize:12, fontWeight:'700' },

// // // // // // // //   // Pick
// // // // // // // //   pickCard:  { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
// // // // // // // //   pickInner: { flex:1 },
// // // // // // // //   pickTopRow:{ flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
// // // // // // // //   pickBadge: { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
// // // // // // // //   pickBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // // // // //   pickDot:   { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
// // // // // // // //   pickTitle: { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
// // // // // // // //   pickSub:   { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
// // // // // // // //   pickTagsRow:{ flexDirection:'row', gap:6 },
// // // // // // // //   pickTag:   { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
// // // // // // // //   pickTagTxt:{ color:'#FFF', fontSize:10, fontWeight:'600' },
// // // // // // // //   pickEmoji: { fontSize:54 },
// // // // // // // //   pickCircle1:{ position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
// // // // // // // //   pickCircle2:{ position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

// // // // // // // //   // Footer
// // // // // // // //   footer:     { marginBottom:10 },
// // // // // // // //   footerCard: { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
// // // // // // // //   footerStrip:{ position:'absolute', top:0, left:0, right:0, height:2 },
// // // // // // // //   footerTitle:{ color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
// // // // // // // //   footerSub:  { color:T.t3, fontSize:11, letterSpacing:1 },
// // // // // // // //   footerPills:{ flexDirection:'row', gap:8, marginTop:10 },
// // // // // // // //   fpill:      { width:28, height:6, borderRadius:3 },
// // // // // // // // });









// // // // // // // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // // // // // // import {
// // // // // // //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// // // // // // //   FlatList, Image, Dimensions, Animated, TextInput,
// // // // // // //   ActivityIndicator, StatusBar,
// // // // // // // } from 'react-native';
// // // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // // // import axios from 'axios';

// // // // // // // const { width } = Dimensions.get('window');

// // // // // // // /* ═══════════════════════════════════════════════════
// // // // // // //    ⚡ OBSIDIAN GOLD – Design Tokens
// // // // // // //    Palette: Ultra-Dark Purple + Obsidian Black + Pure White + 24K Gold
// // // // // // // ═══════════════════════════════════════════════════ */
// // // // // // // const T = {
// // // // // // //   bg:      '#080808',   // very dark green-black
// // // // // // //   surf:    '#0F0F0F',   // dark forest surface
// // // // // // //   card:    '#120F00',   // card background
// // // // // // //   card2:   '#161200',   // alt card
// // // // // // //   border:  '#1E1E1E',
// // // // // // //   border2: '#282828',

// // // // // // //   mint:    '#FFFFFF',   // primary — electric violet
// // // // // // //   mintL:   '#F5C518',   // light violet
// // // // // // //   mintD:   '#C9A227',   // medium purple
// // // // // // //   purple:  '#F5C518',   // secondary — neon cyan
// // // // // // //   purpleL: '#E8B820',   // light cyan
// // // // // // //   pink:    '#B8860B',   // accent — burnt orange
// // // // // // //   pinkL:   '#DAA520',   // light amber
// // // // // // //   gold:    '#FFF9E6',   // neon lime
// // // // // // //   sky:     '#C9A227',   // hot pink

// // // // // // //   t1: '#FFFFFF',  // primary text — violet-tinted white
// // // // // // //   t2: '#C9A227',  // secondary
// // // // // // //   t3: '#666666',  // muted
// // // // // // // };

// // // // // // // /* ═══ Data ══════════════════════════════════════════ */
// // // // // // // const shortcuts = [
// // // // // // //   { id:'1', name:'Budget',  icon:'wallet-outline',    c: T.pink,   bg:'#141200' },
// // // // // // //   { id:'2', name:'Flights', icon:'airplane-outline',  c: T.mint,   bg:'#120F00' },
// // // // // // //   { id:'3', name:'Hotels',  icon:'bed-outline',        c: T.gold,   bg:'#161200' },
// // // // // // //   { id:'4', name:'Planner', icon:'calendar-outline',  c: T.purple, bg:'#111000' },
// // // // // // //   { id:'5', name:'News',    icon:'newspaper-outline', c: T.sky,    bg:'#141100' },
// // // // // // //   { id:'6', name:'Map',     icon:'navigate-outline',  c: T.pinkL,  bg:'#181300' },
// // // // // // // ];

// // // // // // // const trending = [
// // // // // // //   { id:'t1', city:'Tokyo',     sub:'Japan',      emoji:'🗼', g:['#FFFFFF','#F5C518'] },
// // // // // // //   { id:'t2', city:'Santorini', sub:'Greece',    emoji:'🏛️', g:['#B8860B','#C9A227'] },
// // // // // // //   { id:'t3', city:'Bali',      sub:'Indonesia', emoji:'🌴', g:['#FFF9E6','#F5C518'] },
// // // // // // //   { id:'t4', city:'Dubai',     sub:'UAE',       emoji:'🏙️', g:['#DAA520','#B8860B'] },
// // // // // // //   { id:'t5', city:'Maldives',  sub:'South Asia',emoji:'🏝️', g:['#C9A227','#FFFFFF'] },
// // // // // // // ];

// // // // // // // const aiPhrases = ['Discover the world...', 'Find hidden gems...', 'Plan your adventure...', 'Explore smarter...'];

// // // // // // // /* ═══ Shimmer Effect ════════════════════════════════ */
// // // // // // // const Shimmer = ({ w, h, br=10 }) => {
// // // // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // // // //   useEffect(() => {
// // // // // // //     Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
// // // // // // //   }, []);
// // // // // // //   const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w, w] });
// // // // // // //   return (
// // // // // // //     <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#1E1E1E', overflow:'hidden' }}>
// // // // // // //       <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
// // // // // // //         <LinearGradient colors={['transparent','#FFFFFF12','transparent']} start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
// // // // // // //       </Animated.View>
// // // // // // //     </View>
// // // // // // //   );
// // // // // // // };

// // // // // // // /* ═══ Animated Number Counter ═══════════════════════ */
// // // // // // // const Counter = ({ target, suffix = '', color }) => {
// // // // // // //   const [val, setVal] = useState(0);
// // // // // // //   useEffect(() => {
// // // // // // //     let start = 0;
// // // // // // //     const num = parseFloat(target);
// // // // // // //     const step = num / 40;
// // // // // // //     const t = setInterval(() => {
// // // // // // //       start += step;
// // // // // // //       if (start >= num) { setVal(num); clearInterval(t); }
// // // // // // //       else setVal(Math.floor(start * 10) / 10);
// // // // // // //     }, 35);
// // // // // // //     return () => clearInterval(t);
// // // // // // //   }, []);
// // // // // // //   return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
// // // // // // // };

// // // // // // // /* ═══ Glow Dot ══════════════════════════════════════ */
// // // // // // // const GlowDot = ({ color, size=8, pulseAnim }) => (
// // // // // // //   <Animated.View style={[styles.glowDot, {
// // // // // // //     width:size, height:size, borderRadius:size/2,
// // // // // // //     backgroundColor:color,
// // // // // // //     shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
// // // // // // //     transform:[{ scale: pulseAnim }],
// // // // // // //   }]} />
// // // // // // // );

// // // // // // // /* ═══ City Card ═════════════════════════════════════ */
// // // // // // // const CityCard = ({ item, index, query }) => {
// // // // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // // // //   const sc = useRef(new Animated.Value(0.8)).current;
// // // // // // //   const sl = useRef(new Animated.Value(50)).current;
// // // // // // //   useEffect(() => {
// // // // // // //     Animated.sequence([
// // // // // // //       Animated.delay(index * 100),
// // // // // // //       Animated.parallel([
// // // // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
// // // // // // //         Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
// // // // // // //         Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
// // // // // // //       ]),
// // // // // // //     ]).start();
// // // // // // //   }, []);
// // // // // // //   return (
// // // // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
// // // // // // //       <View style={styles.cityCard}>
// // // // // // //         <Image source={{ uri: item.url }} style={styles.cityImg} />
// // // // // // //         {/* Aurora tint overlay */}
// // // // // // //         <LinearGradient
// // // // // // //           colors={['transparent','rgba(245,197,24,0.08)','rgba(0,0,0,0.90)']}
// // // // // // //           style={styles.cityGrad}
// // // // // // //         >
// // // // // // //           <View style={styles.cityTopRow}>
// // // // // // //             <View style={[styles.liveChip, { borderColor: T.mint+'60' }]}>
// // // // // // //               <View style={[styles.liveDot, { backgroundColor: T.mint, shadowColor: T.mint }]} />
// // // // // // //               <Text style={[styles.liveChipTxt, { color: T.mintL }]}>LIVE</Text>
// // // // // // //             </View>
// // // // // // //           </View>
// // // // // // //           <Text style={styles.cityName}>{query}</Text>
// // // // // // //           <View style={styles.cityMeta}>
// // // // // // //             <Ionicons name="camera-outline" size={11} color={T.t3} />
// // // // // // //             <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
// // // // // // //           </View>
// // // // // // //         </LinearGradient>
// // // // // // //         {/* Mint corner accent */}
// // // // // // //         <View style={[styles.cornerAccent, { borderColor: T.mint }]} />
// // // // // // //       </View>
// // // // // // //     </Animated.View>
// // // // // // //   );
// // // // // // // };

// // // // // // // /* ═══ Trend Card ════════════════════════════════════ */
// // // // // // // const TrendCard = ({ item, index }) => {
// // // // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // // // //   const sc = useRef(new Animated.Value(0.88)).current;
// // // // // // //   useEffect(() => {
// // // // // // //     Animated.sequence([
// // // // // // //       Animated.delay(index * 90),
// // // // // // //       Animated.parallel([
// // // // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
// // // // // // //         Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
// // // // // // //       ]),
// // // // // // //     ]).start();
// // // // // // //   }, []);
// // // // // // //   return (
// // // // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
// // // // // // //       <TouchableOpacity activeOpacity={0.82}>
// // // // // // //         <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
// // // // // // //           <Text style={styles.trendEmoji}>{item.emoji}</Text>
// // // // // // //           <Text style={styles.trendCity}>{item.city}</Text>
// // // // // // //           <Text style={styles.trendSub}>{item.sub}</Text>
// // // // // // //           <View style={styles.trendBadge}>
// // // // // // //             <Ionicons name="trending-up" size={10} color="#FFF" />
// // // // // // //             <Text style={styles.trendBadgeTxt}>Trending</Text>
// // // // // // //           </View>
// // // // // // //           {/* Glass circle */}
// // // // // // //           <View style={styles.trendCircle} />
// // // // // // //         </LinearGradient>
// // // // // // //       </TouchableOpacity>
// // // // // // //     </Animated.View>
// // // // // // //   );
// // // // // // // };

// // // // // // // /* ═══ Particle ══════════════════════════════════════ */
// // // // // // // const Particle = ({ x, y, delay, color }) => {
// // // // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // // // //   useEffect(() => {
// // // // // // //     Animated.loop(Animated.sequence([
// // // // // // //       Animated.delay(delay),
// // // // // // //       Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
// // // // // // //       Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
// // // // // // //     ])).start();
// // // // // // //   }, []);
// // // // // // //   return (
// // // // // // //     <Animated.View style={[styles.particle, {
// // // // // // //       left:x, top:y,
// // // // // // //       opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
// // // // // // //       transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
// // // // // // //     }]}>
// // // // // // //       <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
// // // // // // //     </Animated.View>
// // // // // // //   );
// // // // // // // };

// // // // // // // /* ═══════════════════════════════════════════════════
// // // // // // //    MAIN SCREEN
// // // // // // // ═══════════════════════════════════════════════════ */
// // // // // // // export default function HomeScreen({ navigation }) {
// // // // // // //   const [query,     setQuery]     = useState('');
// // // // // // //   const [images,    setImages]    = useState([]);
// // // // // // //   const [loading,   setLoading]   = useState(false);
// // // // // // //   const [particles, setParticles] = useState([]);
// // // // // // //   const [focused,   setFocused]   = useState(false);
// // // // // // //   const [imgKey,    setImgKey]    = useState(0);
// // // // // // //   const [aiText,    setAiText]    = useState('');
// // // // // // //   const inputRef = useRef(null);

// // // // // // //   const fade   = useRef(new Animated.Value(0)).current;
// // // // // // //   const slideY = useRef(new Animated.Value(40)).current;
// // // // // // //   const pulse  = useRef(new Animated.Value(0)).current;
// // // // // // //   const float  = useRef(new Animated.Value(0)).current;
// // // // // // //   const spin   = useRef(new Animated.Value(0)).current;
// // // // // // //   const aurora = useRef(new Animated.Value(0)).current;
// // // // // // //   const phraseIdx = useRef(0);

// // // // // // //   useEffect(() => {
// // // // // // //     Animated.parallel([
// // // // // // //       Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
// // // // // // //       Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
// // // // // // //     ]).start();

// // // // // // //     Animated.loop(Animated.sequence([
// // // // // // //       Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
// // // // // // //       Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
// // // // // // //     ])).start();
// // // // // // //     Animated.loop(Animated.sequence([
// // // // // // //       Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
// // // // // // //       Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
// // // // // // //     ])).start();
// // // // // // //     Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
// // // // // // //     // Aurora shift
// // // // // // //     Animated.loop(Animated.sequence([
// // // // // // //       Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
// // // // // // //       Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
// // // // // // //     ])).start();

// // // // // // //     // Typewriter
// // // // // // //     const typePhrase = () => {
// // // // // // //       const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
// // // // // // //       const t = setInterval(() => {
// // // // // // //         i++; setAiText(ph.slice(0,i));
// // // // // // //         if (i >= ph.length) {
// // // // // // //           clearInterval(t);
// // // // // // //           setTimeout(() => { phraseIdx.current = (phraseIdx.current+1)%aiPhrases.length; typePhrase(); }, 2000);
// // // // // // //         }
// // // // // // //       }, 55);
// // // // // // //       return t;
// // // // // // //     };
// // // // // // //     const t = typePhrase();
// // // // // // //     return () => clearInterval(t);
// // // // // // //   }, []);

// // // // // // //   const handleSearch = useCallback(async () => {
// // // // // // //     if (!query.trim()) return;
// // // // // // //     setParticles(Array.from({length:12}, (_,i) => ({
// // // // // // //       id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
// // // // // // //       color:[T.mint,T.purple,T.pink,T.gold,T.sky][i%5],
// // // // // // //     })));
// // // // // // //     setLoading(true); setImages([]);
// // // // // // //     try {
// // // // // // //       const r = await axios.get(`http://10.176.82.30:3000/api/photos?query=${query}`);
// // // // // // //       if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
// // // // // // //     } catch(e) { console.error(e); }
// // // // // // //     finally { setLoading(false); }
// // // // // // //   }, [query]);

// // // // // // //   const spinStr = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
// // // // // // //   const floatY  = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
// // // // // // //   const pulseS  = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
// // // // // // //   const auroraX = aurora.interpolate({ inputRange:[0,1], outputRange:[0, 30] });
// // // // // // //   const auroraO = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });

// // // // // // //   return (
// // // // // // //     <SafeAreaView style={styles.root}>
// // // // // // //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// // // // // // //       {/* ── AURORA BACKGROUND ─────────────────────── */}
// // // // // // //       <View style={StyleSheet.absoluteFill} pointerEvents="none">
// // // // // // //         <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />

// // // // // // //         {/* Aurora bands - shift horizontally */}
// // // // // // //         <Animated.View style={[styles.auroraband, {
// // // // // // //           backgroundColor: T.mint+'0D', top:60, height:220,
// // // // // // //           transform:[{translateX:auroraX}], opacity:auroraO,
// // // // // // //         }]} />
// // // // // // //         <Animated.View style={[styles.auroraband, {
// // // // // // //           backgroundColor: T.purple+'0A', top:130, height:180,
// // // // // // //           transform:[{translateX: auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
// // // // // // //           opacity:auroraO,
// // // // // // //         }]} />

// // // // // // //         {/* Blobs */}
// // // // // // //         <Animated.View style={[styles.blob, {
// // // // // // //           backgroundColor: T.mint+'10', width:350, height:350,
// // // // // // //           top:-100, right:-80, transform:[{translateY:floatY}],
// // // // // // //         }]} />
// // // // // // //         <Animated.View style={[styles.blob, {
// // // // // // //           backgroundColor: T.purple+'0C', width:280, height:280,
// // // // // // //           bottom:350, left:-90, transform:[{translateY:floatY}],
// // // // // // //         }]} />
// // // // // // //         <Animated.View style={[styles.blob, {
// // // // // // //           backgroundColor: T.pink+'08', width:200, height:200,
// // // // // // //           bottom:100, right:40, transform:[{translateY:floatY}],
// // // // // // //         }]} />

// // // // // // //         {/* Floating decorative rings */}
// // // // // // //         <Animated.View style={[styles.decRing, {
// // // // // // //           borderColor: T.mint+'18', width:260, height:260, borderRadius:130,
// // // // // // //           top:80, right:-100, transform:[{translateY:floatY}],
// // // // // // //         }]} />
// // // // // // //         <Animated.View style={[styles.decRing, {
// // // // // // //           borderColor: T.purple+'14', width:180, height:180, borderRadius:90,
// // // // // // //           bottom:200, left:-60, transform:[{translateY:floatY}],
// // // // // // //         }]} />
// // // // // // //       </View>

// // // // // // //       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

// // // // // // //         {/* ── HEADER ──────────────────────────────── */}
// // // // // // //         <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // //           <View style={styles.header}>
// // // // // // //             <View>
// // // // // // //               <View style={styles.aiBadge}>
// // // // // // //                 <GlowDot color={T.mint} pulseAnim={pulseS} />
// // // // // // //                 <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
// // // // // // //               </View>
// // // // // // //               <Text style={styles.greet}>Good Evening 🌙</Text>
// // // // // // //               <View style={styles.nameRow}>
// // // // // // //                 <Text style={styles.name}>Chaitanya</Text>
// // // // // // //                 <Text style={styles.nameWave}>👋</Text>
// // // // // // //               </View>
// // // // // // //               {/* Aurora name underline */}
// // // // // // //               <LinearGradient colors={['#FFFFFF','#C9A227','#555555']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
// // // // // // //             </View>
// // // // // // //             <View>
// // // // // // //               <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
// // // // // // //               <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
// // // // // // //                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=F5C518&size=100' }} style={styles.avatar} />
// // // // // // //               </LinearGradient>
// // // // // // //             </View>
// // // // // // //           </View>
// // // // // // //         </Animated.View>

// // // // // // //         {/* ── HERO CARD (unique diagonal) ─────────── */}
// // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // //           <View style={styles.heroOuter}>
// // // // // // //             {/* Triple gradient border effect */}
// // // // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#333333']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
// // // // // // //               <View style={styles.heroCard}>
// // // // // // //                 {/* Background diagonal slice */}
// // // // // // //                 <LinearGradient
// // // // // // //                   colors={[T.mint+'20', T.purple+'18', 'transparent']}
// // // // // // //                   start={{x:0,y:0}} end={{x:1,y:1}}
// // // // // // //                   style={StyleSheet.absoluteFill}
// // // // // // //                 />
// // // // // // //                 <View style={styles.heroContent}>
// // // // // // //                   <View style={styles.heroLeft}>
// // // // // // //                     {/* Rotating orbit ring */}
// // // // // // //                     <View style={styles.orbitWrap}>
// // // // // // //                       <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
// // // // // // //                       <View style={[styles.orbitCore, { backgroundColor: T.mint+'30', borderColor: T.mint+'50' }]}>
// // // // // // //                         <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
// // // // // // //                       </View>
// // // // // // //                     </View>
// // // // // // //                   </View>
// // // // // // //                   <View style={styles.heroRight}>
// // // // // // //                     <Text style={styles.heroPre}>⚡ GOLD AI ENGINE</Text>
// // // // // // //                     <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
// // // // // // //                     <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
// // // // // // //                       <LinearGradient colors={[T.mint, T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
// // // // // // //                         <Text style={styles.heroBtnTxt}>Plan Trip</Text>
// // // // // // //                         <Ionicons name="arrow-forward" size={13} color={T.bg} />
// // // // // // //                       </LinearGradient>
// // // // // // //                     </TouchableOpacity>
// // // // // // //                   </View>
// // // // // // //                 </View>
// // // // // // //                 {/* Decorative dots pattern */}
// // // // // // //                 <View style={styles.dotGrid} pointerEvents="none">
// // // // // // //                   {Array.from({length:6}).map((_,i) => (
// // // // // // //                     <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
// // // // // // //                   ))}
// // // // // // //                 </View>
// // // // // // //               </View>
// // // // // // //             </LinearGradient>
// // // // // // //           </View>
// // // // // // //         </Animated.View>

// // // // // // //         {/* ── SEARCH ──────────────────────────────── */}
// // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
// // // // // // //           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
// // // // // // //           <TouchableOpacity
// // // // // // //             activeOpacity={1}
// // // // // // //             onPress={() => inputRef.current && inputRef.current.focus()}
// // // // // // //             style={[styles.searchBox, focused && { borderColor: T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}
// // // // // // //           >
// // // // // // //             <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
// // // // // // //             <TextInput
// // // // // // //               ref={inputRef}
// // // // // // //               placeholder="Where to next?"
// // // // // // //               placeholderTextColor={T.t3}
// // // // // // //               style={styles.searchInput}
// // // // // // //               value={query}
// // // // // // //               onChangeText={setQuery}
// // // // // // //               onSubmitEditing={handleSearch}
// // // // // // //               onFocus={() => setFocused(true)}
// // // // // // //               onBlur={() => setFocused(false)}
// // // // // // //               returnKeyType="search"
// // // // // // //               blurOnSubmit={false}
// // // // // // //               autoCorrect={false}
// // // // // // //               autoCapitalize="none"
// // // // // // //               underlineColorAndroid="transparent"
// // // // // // //             />
// // // // // // //             {loading
// // // // // // //               ? <ActivityIndicator size="small" color={T.mint} />
// // // // // // //               : query.length > 0 && (
// // // // // // //                 <TouchableOpacity onPress={handleSearch}>
// // // // // // //                   <LinearGradient colors={[T.mint, T.mintD]} style={styles.goBtn}>
// // // // // // //                     <Ionicons name="arrow-forward" size={14} color={T.bg} />
// // // // // // //                   </LinearGradient>
// // // // // // //                 </TouchableOpacity>
// // // // // // //               )
// // // // // // //             }
// // // // // // //           </TouchableOpacity>
// // // // // // //           {/* Quick search tags */}
// // // // // // //           <View style={styles.tagsRow}>
// // // // // // //             {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
// // // // // // //               <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
// // // // // // //                 <Text style={styles.tagPillTxt}>{t}</Text>
// // // // // // //               </TouchableOpacity>
// // // // // // //             ))}
// // // // // // //           </View>
// // // // // // //         </Animated.View>

// // // // // // //         {/* ── CITY RESULTS ────────────────────────── */}
// // // // // // //         {(images.length > 0 || loading) && (
// // // // // // //           <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // // // //             <View style={styles.secRow}>
// // // // // // //               <View style={styles.secLeft}>
// // // // // // //                 <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
// // // // // // //                 <Text style={styles.secTitle}> Results for "{query}"</Text>
// // // // // // //               </View>
// // // // // // //               <Text style={styles.secBadge}>{images.length} photos</Text>
// // // // // // //             </View>
// // // // // // //             {loading
// // // // // // //               ? <View style={styles.loadBox}>
// // // // // // //                   <View style={styles.shimmerRow}>
// // // // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // // // //                   </View>
// // // // // // //                 </View>
// // // // // // //               : <FlatList
// // // // // // //                   key={imgKey} data={images} horizontal
// // // // // // //                   showsHorizontalScrollIndicator={false}
// // // // // // //                   keyExtractor={it => it.id}
// // // // // // //                   snapToInterval={width*0.72+14}
// // // // // // //                   decelerationRate="fast"
// // // // // // //                   contentContainerStyle={{ paddingRight:20 }}
// // // // // // //                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
// // // // // // //                 />
// // // // // // //             }
// // // // // // //           </Animated.View>
// // // // // // //         )}

// // // // // // //         {/* ── QUICK ACCESS —Bento style ────────────── */}
// // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // //           <Text style={styles.secTitle2}>Quick Access</Text>
// // // // // // //           <View style={styles.bento}>
// // // // // // //             {shortcuts.map((item) => (
// // // // // // //               <TouchableOpacity
// // // // // // //                 key={item.id}
// // // // // // //                 style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
// // // // // // //                 activeOpacity={0.75}
// // // // // // //                 onPress={() => {
// // // // // // //                   if (item.name==='Hotels')  navigation.navigate('HotelSearch');
// // // // // // //                   if (item.name==='Budget')  navigation.navigate('Budget');
// // // // // // //                   if (item.name==='Planner') navigation.navigate('Planner');
// // // // // // //                   if (item.name==='News')    navigation.navigate('News');
// // // // // // //                   if (item.name==='Map')     navigation.navigate('LiveNavigation');
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
// // // // // // //                   <Ionicons name={item.icon} size={22} color={item.c} />
// // // // // // //                 </View>
// // // // // // //                 <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
// // // // // // //                 {/* Corner dot accent */}
// // // // // // //                 <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
// // // // // // //               </TouchableOpacity>
// // // // // // //             ))}
// // // // // // //           </View>
// // // // // // //         </Animated.View>

// // // // // // //         {/* ── TRENDING ────────────────────────────── */}
// // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // //           <View style={styles.secRow}>
// // // // // // //             <Text style={styles.secTitle2}>Trending 🔥</Text>
// // // // // // //             <TouchableOpacity>
// // // // // // //               <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
// // // // // // //             </TouchableOpacity>
// // // // // // //           </View>
// // // // // // //           <FlatList
// // // // // // //             data={trending} horizontal showsHorizontalScrollIndicator={false}
// // // // // // //             keyExtractor={it => it.id}
// // // // // // //             contentContainerStyle={{ gap:12, paddingRight:20 }}
// // // // // // //             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
// // // // // // //           />
// // // // // // //         </Animated.View>

// // // // // // //         {/* ── STATS — Counter animation ────────────── */}
// // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // //           <Text style={styles.secTitle2}>By the Numbers</Text>
// // // // // // //           <View style={styles.statsGrid}>
// // // // // // //             {[
// // // // // // //               { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
// // // // // // //               { label:'AI Accuracy',   num:'98.7', suf:'%',  color:T.purple },
// // // // // // //               { label:'Destinations',  num:'190',  suf:'+',  color:T.pink },
// // // // // // //               { label:'Happy Users',   num:'500',  suf:'K',  color:T.gold },
// // // // // // //             ].map((s,i) => (
// // // // // // //               <View key={i} style={[styles.statCard, { borderColor: s.color+'30' }]}>
// // // // // // //                 <LinearGradient colors={[s.color+'18', 'transparent']} style={StyleSheet.absoluteFill} />
// // // // // // //                 <Counter target={s.num} suffix={s.suf} color={s.color} />
// // // // // // //                 <Text style={styles.statLabel}>{s.label}</Text>
// // // // // // //               </View>
// // // // // // //             ))}
// // // // // // //           </View>
// // // // // // //         </Animated.View>

// // // // // // //         {/* ── WEATHER WIDGET ──────────────────────── */}
// // // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // // //           <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
// // // // // // //             {/* Mint strip */}
// // // // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
// // // // // // //             <View style={styles.weatherBody}>
// // // // // // //               <View>
// // // // // // //                 <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
// // // // // // //                 <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
// // // // // // //                 <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
// // // // // // //               </View>
// // // // // // //               <View style={styles.wtRight}>
// // // // // // //                 <Text style={styles.wtEmoji}>⛅</Text>
// // // // // // //                 <View style={styles.wtMinis}>
// // // // // // //                   {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
// // // // // // //                     <View key={v} style={styles.wtMini}>
// // // // // // //                       <Text>{ic}</Text>
// // // // // // //                       <Text style={styles.wtMiniV}>{v}</Text>
// // // // // // //                     </View>
// // // // // // //                   ))}
// // // // // // //                 </View>
// // // // // // //               </View>
// // // // // // //             </View>
// // // // // // //             <View style={[styles.wtLine, { backgroundColor:T.border }]} />
// // // // // // //             <View style={styles.wtForecast}>
// // // // // // //               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
// // // // // // //                 <View key={d} style={styles.wtDay}>
// // // // // // //                   <Text style={styles.wtDayL}>{d}</Text>
// // // // // // //                   <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
// // // // // // //                   <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
// // // // // // //                 </View>
// // // // // // //               ))}
// // // // // // //             </View>
// // // // // // //           </View>
// // // // // // //         </Animated.View>

// // // // // // //         {/* ── AI PICK BANNER ──────────────────────── */}
// // // // // // //         <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // // // //           <LinearGradient colors={['#161200','#282828','#444444']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
// // // // // // //             <View style={styles.pickInner}>
// // // // // // //               <View style={styles.pickTopRow}>
// // // // // // //                 <View style={styles.pickBadge}>
// // // // // // //                   <Text style={styles.pickBadgeTxt}>✦ AI PICK</Text>
// // // // // // //                 </View>
// // // // // // //                 <Text style={styles.pickDot}>TODAY</Text>
// // // // // // //               </View>
// // // // // // //               <Text style={styles.pickTitle}>Santorini, Greece</Text>
// // // // // // //               <Text style={styles.pickSub}>Perfect season · April – June</Text>
// // // // // // //               <View style={styles.pickTagsRow}>
// // // // // // //                 {['Romantic','Beach','Scenic'].map(t=>(
// // // // // // //                   <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
// // // // // // //                 ))}
// // // // // // //               </View>
// // // // // // //             </View>
// // // // // // //             <Text style={styles.pickEmoji}>🏛️</Text>
// // // // // // //             <View style={styles.pickCircle1} />
// // // // // // //             <View style={styles.pickCircle2} />
// // // // // // //           </LinearGradient>
// // // // // // //         </Animated.View>

// // // // // // //         {/* ── FOOTER ──────────────────────────────── */}
// // // // // // //         <Animated.View style={[styles.footer, { opacity:fade }]}>
// // // // // // //           <LinearGradient colors={[T.mint+'15', T.purple+'10']} style={styles.footerCard}>
// // // // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
// // // // // // //             <Animated.View style={{ transform:[{rotate:spinStr}] }}>
// // // // // // //               <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
// // // // // // //             </Animated.View>
// // // // // // //             <Text style={styles.footerTitle}>Gold Travel AI</Text>
// // // // // // //             <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
// // // // // // //             <View style={styles.footerPills}>
// // // // // // //               {[T.mint, T.purple, T.pink, T.gold].map(c=>(
// // // // // // //                 <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
// // // // // // //               ))}
// // // // // // //             </View>
// // // // // // //           </LinearGradient>
// // // // // // //         </Animated.View>

// // // // // // //         <View style={{ height:50 }} />
// // // // // // //       </ScrollView>
// // // // // // //     </SafeAreaView>
// // // // // // //   );
// // // // // // // }

// // // // // // // /* ═══ Styles ════════════════════════════════════════ */
// // // // // // // const BW = (width - 72) / 3;

// // // // // // // const styles = StyleSheet.create({
// // // // // // //   root:   { flex:1, backgroundColor:T.bg },
// // // // // // //   scroll: { paddingHorizontal:20, paddingTop:12 },
// // // // // // //   section:{ marginBottom:26 },

// // // // // // //   // Background
// // // // // // //   auroraband:{ position:'absolute', left:0, right:0, borderRadius:40 },
// // // // // // //   blob:      { position:'absolute', borderRadius:9999 },
// // // // // // //   decRing:   { position:'absolute', borderWidth:1 },

// // // // // // //   // Header
// // // // // // //   headerWrap:{ marginBottom:24 },
// // // // // // //   header:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
// // // // // // //   aiBadge:   { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
// // // // // // //   aiBadgeTxt:{ color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
// // // // // // //   glowDot:   {},
// // // // // // //   greet:     { color:T.t2, fontSize:13, fontWeight:'500' },
// // // // // // //   nameRow:   { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
// // // // // // //   name:      { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
// // // // // // //   nameWave:  { fontSize:26 },
// // // // // // //   nameBar:   { width:60, height:3, borderRadius:2, marginTop:10 },
// // // // // // //   avatarHalo:{ position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
// // // // // // //   avatarGrad:{ width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
// // // // // // //   avatar:    { width:55, height:55, borderRadius:28 },

// // // // // // //   // Hero
// // // // // // //   heroOuter: { borderRadius:22, overflow:'hidden' },
// // // // // // //   heroBorder:{ padding:1.5, borderRadius:22 },
// // // // // // //   heroCard:  { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
// // // // // // //   heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
// // // // // // //   heroLeft:  {},
// // // // // // //   orbitWrap: { width:60, height:60, justifyContent:'center', alignItems:'center' },
// // // // // // //   orbit:     { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
// // // // // // //   orbitCore: { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
// // // // // // //   heroRight: { flex:1 },
// // // // // // //   heroPre:   { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
// // // // // // //   heroType:  { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
// // // // // // //   heroBtn:   { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
// // // // // // //   heroBtnG:  { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
// // // // // // //   heroBtnTxt:{ color:T.bg, fontSize:13, fontWeight:'800' },
// // // // // // //   dotGrid:   { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
// // // // // // //   dotGridItem:{ width:5, height:5, borderRadius:3 },

// // // // // // //   // Search
// // // // // // //   searchBox: { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
// // // // // // //                borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
// // // // // // //   searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
// // // // // // //   goBtn:     { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
// // // // // // //   tagsRow:   { flexDirection:'row', gap:8, flexWrap:'wrap' },
// // // // // // //   tagPill:   { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
// // // // // // //   tagPillTxt:{ color:T.t2, fontSize:11, fontWeight:'600' },
// // // // // // //   particle:  { position:'absolute' },
// // // // // // //   pDot:      { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

// // // // // // //   // City cards
// // // // // // //   cityCard:  { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
// // // // // // //   cityImg:   { width:'100%', height:'100%' },
// // // // // // //   cityGrad:  { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
// // // // // // //   cityTopRow:{ position:'absolute', top:14, left:14 },
// // // // // // //   liveChip:  { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
// // // // // // //   liveDot:   { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
// // // // // // //   liveChipTxt:{ fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // // // //   cityName:  { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
// // // // // // //   cityMeta:  { flexDirection:'row', alignItems:'center' },
// // // // // // //   cityMetaTxt:{ color:T.t3, fontSize:11 },
// // // // // // //   cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
// // // // // // //   shimmerRow:{ flexDirection:'row', gap:14 },
// // // // // // //   loadBox:   { paddingVertical:10 },
// // // // // // //   secRow:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
// // // // // // //   secLeft:   { flexDirection:'row', alignItems:'center' },
// // // // // // //   secTitle:  { color:T.t1, fontSize:15, fontWeight:'700' },
// // // // // // //   secTitle2: { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
// // // // // // //   secBadge:  { color:T.t3, fontSize:11 },
// // // // // // //   seeAll:    { fontSize:13, fontWeight:'600' },

// // // // // // //   // Bento grid
// // // // // // //   bento:     { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // // // //   bentoItem: { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
// // // // // // //                alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
// // // // // // //   bentoIcon: { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
// // // // // // //   bentoTxt:  { fontSize:12, fontWeight:'700' },
// // // // // // //   bentoDot:  { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },

// // // // // // //   // Trending
// // // // // // //   trendCard: { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
// // // // // // //   trendEmoji:{ fontSize:30, marginBottom:4 },
// // // // // // //   trendCity: { color:'#FFF', fontSize:16, fontWeight:'800' },
// // // // // // //   trendSub:  { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
// // // // // // //   trendBadge:{ flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)', alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
// // // // // // //   trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
// // // // // // //   trendCircle:{ position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20, backgroundColor:'rgba(255,255,255,0.08)' },

// // // // // // //   // Stats
// // // // // // //   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // // // //   statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
// // // // // // //   statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
// // // // // // //   statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

// // // // // // //   // Weather
// // // // // // //   weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
// // // // // // //   weatherStrip: { height:2 },
// // // // // // //   weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
// // // // // // //   wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
// // // // // // //   wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
// // // // // // //   wtDeg:     { fontSize:24, fontWeight:'400' },
// // // // // // //   wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
// // // // // // //   wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
// // // // // // //   wtEmoji:   { fontSize:44 },
// // // // // // //   wtMinis:   { flexDirection:'row', gap:10 },
// // // // // // //   wtMini:    { alignItems:'center', gap:2 },
// // // // // // //   wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // // // //   wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
// // // // // // //   wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
// // // // // // //   wtDay:     { alignItems:'center', gap:4 },
// // // // // // //   wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // // // //   wtDayIc:   { fontSize:18 },
// // // // // // //   wtDayT:    { fontSize:12, fontWeight:'700' },

// // // // // // //   // Pick
// // // // // // //   pickCard:  { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
// // // // // // //   pickInner: { flex:1 },
// // // // // // //   pickTopRow:{ flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
// // // // // // //   pickBadge: { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
// // // // // // //   pickBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // // // //   pickDot:   { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
// // // // // // //   pickTitle: { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
// // // // // // //   pickSub:   { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
// // // // // // //   pickTagsRow:{ flexDirection:'row', gap:6 },
// // // // // // //   pickTag:   { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
// // // // // // //   pickTagTxt:{ color:'#FFF', fontSize:10, fontWeight:'600' },
// // // // // // //   pickEmoji: { fontSize:54 },
// // // // // // //   pickCircle1:{ position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
// // // // // // //   pickCircle2:{ position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

// // // // // // //   // Footer
// // // // // // //   footer:     { marginBottom:10 },
// // // // // // //   footerCard: { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
// // // // // // //   footerStrip:{ position:'absolute', top:0, left:0, right:0, height:2 },
// // // // // // //   footerTitle:{ color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
// // // // // // //   footerSub:  { color:T.t3, fontSize:11, letterSpacing:1 },
// // // // // // //   footerPills:{ flexDirection:'row', gap:8, marginTop:10 },
// // // // // // //   fpill:      { width:28, height:6, borderRadius:3 },
// // // // // // // });
// // // // // // // // 






// // // // // // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // // // // // import {
// // // // // //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// // // // // //   FlatList, Image, Dimensions, Animated, TextInput,
// // // // // //   ActivityIndicator, StatusBar,
// // // // // // } from 'react-native';
// // // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // // import axios from 'axios';

// // // // // // const { width } = Dimensions.get('window');

// // // // // // /* ═══════════════════════════════════════════════════
// // // // // //    ⚡ OBSIDIAN GOLD – Design Tokens
// // // // // //    Palette: Ultra-Dark Purple + Obsidian Black + Pure White + 24K Gold
// // // // // // ═══════════════════════════════════════════════════ */
// // // // // // const T = {
// // // // // //   bg:      '#080808',   // very dark green-black
// // // // // //   surf:    '#0F0F0F',   // dark forest surface
// // // // // //   card:    '#120F00',   // card background
// // // // // //   card2:   '#161200',   // alt card
// // // // // //   border:  '#1E1E1E',
// // // // // //   border2: '#282828',

// // // // // //   mint:    '#FFFFFF',   // primary — electric violet
// // // // // //   mintL:   '#F5C518',   // light violet
// // // // // //   mintD:   '#C9A227',   // medium purple
// // // // // //   purple:  '#F5C518',   // secondary — neon cyan
// // // // // //   purpleL: '#E8B820',   // light cyan
// // // // // //   pink:    '#B8860B',   // accent — burnt orange
// // // // // //   pinkL:   '#DAA520',   // light amber
// // // // // //   gold:    '#FFF9E6',   // neon lime
// // // // // //   sky:     '#C9A227',   // hot pink

// // // // // //   t1: '#FFFFFF',  // primary text — violet-tinted white
// // // // // //   t2: '#C9A227',  // secondary
// // // // // //   t3: '#666666',  // muted
// // // // // // };

// // // // // // /* ═══ Data ══════════════════════════════════════════ */
// // // // // // const shortcuts = [
// // // // // //   { id:'1', name:'Budget',  icon:'wallet-outline',    c: T.pink,   bg:'#141200' },
// // // // // //   { id:'2', name:'Flights', icon:'airplane-outline',  c: T.mint,   bg:'#120F00' },
// // // // // //   { id:'3', name:'Hotels',  icon:'bed-outline',        c: T.gold,   bg:'#161200' },
// // // // // //   { id:'4', name:'Planner', icon:'calendar-outline',  c: T.purple, bg:'#111000' },
// // // // // //   { id:'5', name:'News',    icon:'newspaper-outline', c: T.sky,    bg:'#141100' },
// // // // // //   { id:'6', name:'Map',     icon:'navigate-outline',  c: T.pinkL,  bg:'#181300' },
// // // // // // ];

// // // // // // const trending = [
// // // // // //   { id:'t1', city:'Tokyo',     sub:'Japan',      emoji:'🗼', g:['#FFFFFF','#F5C518'] },
// // // // // //   { id:'t2', city:'Santorini', sub:'Greece',    emoji:'🏛️', g:['#B8860B','#C9A227'] },
// // // // // //   { id:'t3', city:'Bali',      sub:'Indonesia', emoji:'🌴', g:['#FFF9E6','#F5C518'] },
// // // // // //   { id:'t4', city:'Dubai',     sub:'UAE',       emoji:'🏙️', g:['#DAA520','#B8860B'] },
// // // // // //   { id:'t5', city:'Maldives',  sub:'South Asia',emoji:'🏝️', g:['#C9A227','#FFFFFF'] },
// // // // // // ];

// // // // // // const aiPhrases = ['Discover the world...', 'Find hidden gems...', 'Plan your adventure...', 'Explore smarter...'];

// // // // // // /* ═══ ✈ Flying Airplane ══════════════════════════ */
// // // // // // const FlyingPlane = ({ animVal, top, color }) => {
// // // // // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[-60, width+60] });
// // // // // //   const ty = animVal.interpolate({ inputRange:[0,0.5,1], outputRange:[0,-18,0] });
// // // // // //   const op = animVal.interpolate({ inputRange:[0,0.05,0.95,1], outputRange:[0,1,1,0] });
// // // // // //   return (
// // // // // //     <Animated.View style={[
// // // // // //       styles.bgPlane,
// // // // // //       { top, opacity:op, transform:[{translateX:tx},{translateY:ty}] }
// // // // // //     ]}>
// // // // // //       <Ionicons name="airplane" size={18} color={color} />
// // // // // //       {/* Dashed trail dots */}
// // // // // //       {[-20,-36,-52,-68].map(x => (
// // // // // //         <View key={x} style={[styles.trailDot, { right:-x, opacity: Math.abs(x)/80, backgroundColor:color }]} />
// // // // // //       ))}
// // // // // //     </Animated.View>
// // // // // //   );
// // // // // // };

// // // // // // /* ═══ 📍 Pulsing Location Pin ════════════════════ */
// // // // // // const LocationPin = ({ x, y, delay, color, pulseVal }) => {
// // // // // //   const ringScale = pulseVal.interpolate({ inputRange:[0,1], outputRange:[1, 2.2] });
// // // // // //   const ringOp    = pulseVal.interpolate({ inputRange:[0,1], outputRange:[0.6, 0] });
// // // // // //   return (
// // // // // //     <View style={[styles.bgPin, { left:x, top:y }]}>
// // // // // //       <Animated.View style={[styles.pinRing, { width:28, height:28, borderRadius:14,
// // // // // //         borderColor:color, transform:[{scale:ringScale}], opacity:ringOp }]} />
// // // // // //       <View style={[styles.pinDot, { backgroundColor:color }]} />
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // /* ═══ ☁ Drifting Cloud ═══════════════════════════ */
// // // // // // const DriftCloud = ({ animVal, top, size=1, opacity=0.07 }) => {
// // // // // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[width+100, -300] });
// // // // // //   return (
// // // // // //     <Animated.View style={[styles.bgCloud, { top, opacity, transform:[{translateX:tx},{scale:size}] }]}>
// // // // // //       <View style={[styles.cloudBody, { width:80, height:30 }]} />
// // // // // //       <View style={[styles.cloudPuff, { width:44, height:44, top:-20, left:10 }]} />
// // // // // //       <View style={[styles.cloudPuff, { width:34, height:34, top:-14, left:36 }]} />
// // // // // //     </Animated.View>
// // // // // //   );
// // // // // // };

// // // // // // /* ═══ Shimmer Effect ════════════════════════════════ */
// // // // // // const Shimmer = ({ w, h, br=10 }) => {
// // // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // // //   useEffect(() => {
// // // // // //     Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
// // // // // //   }, []);
// // // // // //   const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w, w] });
// // // // // //   return (
// // // // // //     <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#1E1E1E', overflow:'hidden' }}>
// // // // // //       <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
// // // // // //         <LinearGradient colors={['transparent','#FFFFFF12','transparent']} start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
// // // // // //       </Animated.View>
// // // // // //     </View>
// // // // // //   );
// // // // // // };

// // // // // // /* ═══ Animated Number Counter ═══════════════════════ */
// // // // // // const Counter = ({ target, suffix = '', color }) => {
// // // // // //   const [val, setVal] = useState(0);
// // // // // //   useEffect(() => {
// // // // // //     let start = 0;
// // // // // //     const num = parseFloat(target);
// // // // // //     const step = num / 40;
// // // // // //     const t = setInterval(() => {
// // // // // //       start += step;
// // // // // //       if (start >= num) { setVal(num); clearInterval(t); }
// // // // // //       else setVal(Math.floor(start * 10) / 10);
// // // // // //     }, 35);
// // // // // //     return () => clearInterval(t);
// // // // // //   }, []);
// // // // // //   return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
// // // // // // };

// // // // // // /* ═══ Glow Dot ══════════════════════════════════════ */
// // // // // // const GlowDot = ({ color, size=8, pulseAnim }) => (
// // // // // //   <Animated.View style={[styles.glowDot, {
// // // // // //     width:size, height:size, borderRadius:size/2,
// // // // // //     backgroundColor:color,
// // // // // //     shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
// // // // // //     transform:[{ scale: pulseAnim }],
// // // // // //   }]} />
// // // // // // );

// // // // // // /* ═══ City Card ═════════════════════════════════════ */
// // // // // // const CityCard = ({ item, index, query }) => {
// // // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // // //   const sc = useRef(new Animated.Value(0.8)).current;
// // // // // //   const sl = useRef(new Animated.Value(50)).current;
// // // // // //   useEffect(() => {
// // // // // //     Animated.sequence([
// // // // // //       Animated.delay(index * 100),
// // // // // //       Animated.parallel([
// // // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
// // // // // //         Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
// // // // // //         Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
// // // // // //       ]),
// // // // // //     ]).start();
// // // // // //   }, []);
// // // // // //   return (
// // // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
// // // // // //       <View style={styles.cityCard}>
// // // // // //         <Image source={{ uri: item.url }} style={styles.cityImg} />
// // // // // //         {/* Aurora tint overlay */}
// // // // // //         <LinearGradient
// // // // // //           colors={['transparent','rgba(245,197,24,0.08)','rgba(0,0,0,0.90)']}
// // // // // //           style={styles.cityGrad}
// // // // // //         >
// // // // // //           <View style={styles.cityTopRow}>
// // // // // //             <View style={[styles.liveChip, { borderColor: T.mint+'60' }]}>
// // // // // //               <View style={[styles.liveDot, { backgroundColor: T.mint, shadowColor: T.mint }]} />
// // // // // //               <Text style={[styles.liveChipTxt, { color: T.mintL }]}>LIVE</Text>
// // // // // //             </View>
// // // // // //           </View>
// // // // // //           <Text style={styles.cityName}>{query}</Text>
// // // // // //           <View style={styles.cityMeta}>
// // // // // //             <Ionicons name="camera-outline" size={11} color={T.t3} />
// // // // // //             <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
// // // // // //           </View>
// // // // // //         </LinearGradient>
// // // // // //         {/* Mint corner accent */}
// // // // // //         <View style={[styles.cornerAccent, { borderColor: T.mint }]} />
// // // // // //       </View>
// // // // // //     </Animated.View>
// // // // // //   );
// // // // // // };

// // // // // // /* ═══ Trend Card ════════════════════════════════════ */
// // // // // // const TrendCard = ({ item, index }) => {
// // // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // // //   const sc = useRef(new Animated.Value(0.88)).current;
// // // // // //   useEffect(() => {
// // // // // //     Animated.sequence([
// // // // // //       Animated.delay(index * 90),
// // // // // //       Animated.parallel([
// // // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
// // // // // //         Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
// // // // // //       ]),
// // // // // //     ]).start();
// // // // // //   }, []);
// // // // // //   return (
// // // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
// // // // // //       <TouchableOpacity activeOpacity={0.82}>
// // // // // //         <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
// // // // // //           <Text style={styles.trendEmoji}>{item.emoji}</Text>
// // // // // //           <Text style={styles.trendCity}>{item.city}</Text>
// // // // // //           <Text style={styles.trendSub}>{item.sub}</Text>
// // // // // //           <View style={styles.trendBadge}>
// // // // // //             <Ionicons name="trending-up" size={10} color="#FFF" />
// // // // // //             <Text style={styles.trendBadgeTxt}>Trending</Text>
// // // // // //           </View>
// // // // // //           {/* Glass circle */}
// // // // // //           <View style={styles.trendCircle} />
// // // // // //         </LinearGradient>
// // // // // //       </TouchableOpacity>
// // // // // //     </Animated.View>
// // // // // //   );
// // // // // // };

// // // // // // /* ═══ Particle ══════════════════════════════════════ */
// // // // // // const Particle = ({ x, y, delay, color }) => {
// // // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // // //   useEffect(() => {
// // // // // //     Animated.loop(Animated.sequence([
// // // // // //       Animated.delay(delay),
// // // // // //       Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
// // // // // //       Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
// // // // // //     ])).start();
// // // // // //   }, []);
// // // // // //   return (
// // // // // //     <Animated.View style={[styles.particle, {
// // // // // //       left:x, top:y,
// // // // // //       opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
// // // // // //       transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
// // // // // //     }]}>
// // // // // //       <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
// // // // // //     </Animated.View>
// // // // // //   );
// // // // // // };

// // // // // // /* ═══════════════════════════════════════════════════
// // // // // //    MAIN SCREEN
// // // // // // ═══════════════════════════════════════════════════ */
// // // // // // export default function HomeScreen({ navigation }) {
// // // // // //   const [query,     setQuery]     = useState('');
// // // // // //   const [images,    setImages]    = useState([]);
// // // // // //   const [loading,   setLoading]   = useState(false);
// // // // // //   const [particles, setParticles] = useState([]);
// // // // // //   const [focused,   setFocused]   = useState(false);
// // // // // //   const [imgKey,    setImgKey]    = useState(0);
// // // // // //   const [aiText,    setAiText]    = useState('');
// // // // // //   const inputRef = useRef(null);

// // // // // //   const fade   = useRef(new Animated.Value(0)).current;
// // // // // //   const slideY = useRef(new Animated.Value(40)).current;
// // // // // //   const pulse  = useRef(new Animated.Value(0)).current;
// // // // // //   const float  = useRef(new Animated.Value(0)).current;
// // // // // //   const spin   = useRef(new Animated.Value(0)).current;
// // // // // //   const aurora = useRef(new Animated.Value(0)).current;
// // // // // //   // Travel bg animations
// // // // // //   const plane1  = useRef(new Animated.Value(0)).current;
// // // // // //   const plane2  = useRef(new Animated.Value(0)).current;
// // // // // //   const pin1    = useRef(new Animated.Value(0)).current;
// // // // // //   const cloud1  = useRef(new Animated.Value(0)).current;
// // // // // //   const cloud2  = useRef(new Animated.Value(0)).current;
// // // // // //   const compass = useRef(new Animated.Value(0)).current;
// // // // // //   const phraseIdx = useRef(0);

// // // // // //   useEffect(() => {
// // // // // //     Animated.parallel([
// // // // // //       Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
// // // // // //       Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
// // // // // //     ]).start();

// // // // // //     Animated.loop(Animated.sequence([
// // // // // //       Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
// // // // // //       Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
// // // // // //     ])).start();
// // // // // //     Animated.loop(Animated.sequence([
// // // // // //       Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
// // // // // //       Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
// // // // // //     ])).start();
// // // // // //     Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
// // // // // //     // Aurora shift
// // // // // //     Animated.loop(Animated.sequence([
// // // // // //       Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
// // // // // //       Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
// // // // // //     ])).start();

// // // // // //     // ✈ Airplane 1 — slow crossing
// // // // // //     Animated.loop(Animated.sequence([
// // // // // //       Animated.timing(plane1, { toValue:1, duration:9000, useNativeDriver:true }),
// // // // // //       Animated.delay(4000),
// // // // // //       Animated.timing(plane1, { toValue:0, duration:0, useNativeDriver:true }),
// // // // // //       Animated.delay(3000),
// // // // // //     ])).start();
// // // // // //     // ✈ Airplane 2 — offset crossing
// // // // // //     Animated.loop(Animated.sequence([
// // // // // //       Animated.delay(6000),
// // // // // //       Animated.timing(plane2, { toValue:1, duration:11000, useNativeDriver:true }),
// // // // // //       Animated.delay(2000),
// // // // // //       Animated.timing(plane2, { toValue:0, duration:0, useNativeDriver:true }),
// // // // // //     ])).start();
// // // // // //     // 📍 Pin pulse
// // // // // //     Animated.loop(Animated.sequence([
// // // // // //       Animated.timing(pin1, { toValue:1, duration:1500, useNativeDriver:true }),
// // // // // //       Animated.timing(pin1, { toValue:0, duration:600, useNativeDriver:true }),
// // // // // //       Animated.delay(2000),
// // // // // //     ])).start();
// // // // // //     // ☁ Cloud drift 1
// // // // // //     Animated.loop(Animated.sequence([
// // // // // //       Animated.timing(cloud1, { toValue:1, duration:28000, useNativeDriver:true }),
// // // // // //       Animated.timing(cloud1, { toValue:0, duration:0, useNativeDriver:true }),
// // // // // //     ])).start();
// // // // // //     // ☁ Cloud drift 2
// // // // // //     Animated.loop(Animated.sequence([
// // // // // //       Animated.delay(14000),
// // // // // //       Animated.timing(cloud2, { toValue:1, duration:22000, useNativeDriver:true }),
// // // // // //       Animated.timing(cloud2, { toValue:0, duration:0, useNativeDriver:true }),
// // // // // //     ])).start();
// // // // // //     // 🧭 Compass slow spin
// // // // // //     Animated.loop(Animated.timing(compass, { toValue:1, duration:20000, useNativeDriver:true })).start();

// // // // // //     // Typewriter
// // // // // //     const typePhrase = () => {
// // // // // //       const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
// // // // // //       const t = setInterval(() => {
// // // // // //         i++; setAiText(ph.slice(0,i));
// // // // // //         if (i >= ph.length) {
// // // // // //           clearInterval(t);
// // // // // //           setTimeout(() => { phraseIdx.current = (phraseIdx.current+1)%aiPhrases.length; typePhrase(); }, 2000);
// // // // // //         }
// // // // // //       }, 55);
// // // // // //       return t;
// // // // // //     };
// // // // // //     const t = typePhrase();
// // // // // //     return () => clearInterval(t);
// // // // // //   }, []);

// // // // // //   const handleSearch = useCallback(async () => {
// // // // // //     if (!query.trim()) return;
// // // // // //     setParticles(Array.from({length:12}, (_,i) => ({
// // // // // //       id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
// // // // // //       color:[T.mint,T.purple,T.pink,T.gold,T.sky][i%5],
// // // // // //     })));
// // // // // //     setLoading(true); setImages([]);
// // // // // //     try {
// // // // // //       const r = await axios.get(`http://10.176.82.30:3000/api/photos?query=${query}`);
// // // // // //       if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
// // // // // //     } catch(e) { console.error(e); }
// // // // // //     finally { setLoading(false); }
// // // // // //   }, [query]);

// // // // // //   const spinStr  = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
// // // // // //   const floatY   = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
// // // // // //   const pulseS   = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
// // // // // //   const auroraX  = aurora.interpolate({ inputRange:[0,1], outputRange:[0, 30] });
// // // // // //   const auroraO  = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });
// // // // // //   const compassR = compass.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });

// // // // // //   return (
// // // // // //     <SafeAreaView style={styles.root}>
// // // // // //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// // // // // //       {/* ── TRAVEL BG ANIMATIONS ──────────────────── */}
// // // // // //       <View style={StyleSheet.absoluteFill} pointerEvents="none">
// // // // // //         <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />

// // // // // //         {/* Aurora bands */}
// // // // // //         <Animated.View style={[styles.auroraband, {
// // // // // //           backgroundColor: T.mint+'0D', top:60, height:220,
// // // // // //           transform:[{translateX:auroraX}], opacity:auroraO,
// // // // // //         }]} />
// // // // // //         <Animated.View style={[styles.auroraband, {
// // // // // //           backgroundColor: T.purple+'0A', top:130, height:180,
// // // // // //           transform:[{translateX: auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
// // // // // //           opacity:auroraO,
// // // // // //         }]} />

// // // // // //         {/* ✈ Flying planes */}
// // // // // //         <FlyingPlane animVal={plane1} top={120} color={T.mint+'50'} />
// // // // // //         <FlyingPlane animVal={plane2} top={280} color={T.purple+'40'} />

// // // // // //         {/* ☁ Drifting clouds */}
// // // // // //         <DriftCloud animVal={cloud1} top={80}  size={1.2} opacity={0.06} />
// // // // // //         <DriftCloud animVal={cloud2} top={200} size={0.8} opacity={0.04} />

// // // // // //         {/* 📍 Pulsing location pins */}
// // // // // //         <LocationPin x={width*0.15} y={180} color={T.gold+'80'} pulseVal={pin1} />
// // // // // //         <LocationPin x={width*0.72} y={350} color={T.mint+'70'} pulseVal={pin1} />
// // // // // //         <LocationPin x={width*0.40} y={520} color={T.purple+'60'} pulseVal={pin1} />

// // // // // //         {/* Dashed route line connecting pins */}
// // // // // //         <View style={styles.routeLine} />

// // // // // //         {/* 🧭 Slow-spinning compass rose (corner) */}
// // // // // //         <Animated.View style={[styles.bgCompass, { transform:[{rotate:compassR}] }]}>
// // // // // //           <Ionicons name="compass-outline" size={90} color={T.mint+'15'} />
// // // // // //         </Animated.View>

// // // // // //         {/* Floating map coordinate dots */}
// // // // // //         {[
// // // // // //           { x:width*0.1,  y:400, color:T.mint+'30' },
// // // // // //           { x:width*0.6,  y:160, color:T.gold+'25' },
// // // // // //           { x:width*0.85, y:480, color:T.purple+'30' },
// // // // // //           { x:width*0.3,  y:620, color:T.mint+'20' },
// // // // // //         ].map((d, i) => (
// // // // // //           <Animated.View key={i} style={[styles.mapDot, {
// // // // // //             left:d.x, top:d.y, backgroundColor:d.color,
// // // // // //             transform:[{scale: pulse.interpolate({inputRange:[0,1],outputRange:[1,1.5]})}],
// // // // // //           }]} />
// // // // // //         ))}

// // // // // //         {/* Blobs */}
// // // // // //         <Animated.View style={[styles.blob, {
// // // // // //           backgroundColor: T.mint+'10', width:350, height:350,
// // // // // //           top:-100, right:-80, transform:[{translateY:floatY}],
// // // // // //         }]} />
// // // // // //         <Animated.View style={[styles.blob, {
// // // // // //           backgroundColor: T.purple+'0C', width:280, height:280,
// // // // // //           bottom:350, left:-90, transform:[{translateY:floatY}],
// // // // // //         }]} />
// // // // // //         <Animated.View style={[styles.blob, {
// // // // // //           backgroundColor: T.pink+'08', width:200, height:200,
// // // // // //           bottom:100, right:40, transform:[{translateY:floatY}],
// // // // // //         }]} />

// // // // // //         {/* Floating decorative rings */}
// // // // // //         <Animated.View style={[styles.decRing, {
// // // // // //           borderColor: T.mint+'18', width:260, height:260, borderRadius:130,
// // // // // //           top:80, right:-100, transform:[{translateY:floatY}],
// // // // // //         }]} />
// // // // // //         <Animated.View style={[styles.decRing, {
// // // // // //           borderColor: T.purple+'14', width:180, height:180, borderRadius:90,
// // // // // //           bottom:200, left:-60, transform:[{translateY:floatY}],
// // // // // //         }]} />
// // // // // //       </View>

// // // // // //       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

// // // // // //         {/* ── HEADER ──────────────────────────────── */}
// // // // // //         <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // //           <View style={styles.header}>
// // // // // //             <View>
// // // // // //               <View style={styles.aiBadge}>
// // // // // //                 <GlowDot color={T.mint} pulseAnim={pulseS} />
// // // // // //                 <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
// // // // // //               </View>
// // // // // //               <Text style={styles.greet}>Good Evening 🌙</Text>
// // // // // //               <View style={styles.nameRow}>
// // // // // //                 <Text style={styles.name}>Chaitanya</Text>
// // // // // //                 <Text style={styles.nameWave}>👋</Text>
// // // // // //               </View>
// // // // // //               {/* Aurora name underline */}
// // // // // //               <LinearGradient colors={['#FFFFFF','#C9A227','#555555']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
// // // // // //             </View>
// // // // // //             <View>
// // // // // //               <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
// // // // // //               <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
// // // // // //                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=F5C518&size=100' }} style={styles.avatar} />
// // // // // //               </LinearGradient>
// // // // // //             </View>
// // // // // //           </View>
// // // // // //         </Animated.View>

// // // // // //         {/* ── HERO CARD (unique diagonal) ─────────── */}
// // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // //           <View style={styles.heroOuter}>
// // // // // //             {/* Triple gradient border effect */}
// // // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#333333']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
// // // // // //               <View style={styles.heroCard}>
// // // // // //                 {/* Background diagonal slice */}
// // // // // //                 <LinearGradient
// // // // // //                   colors={[T.mint+'20', T.purple+'18', 'transparent']}
// // // // // //                   start={{x:0,y:0}} end={{x:1,y:1}}
// // // // // //                   style={StyleSheet.absoluteFill}
// // // // // //                 />
// // // // // //                 <View style={styles.heroContent}>
// // // // // //                   <View style={styles.heroLeft}>
// // // // // //                     {/* Rotating orbit ring */}
// // // // // //                     <View style={styles.orbitWrap}>
// // // // // //                       <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
// // // // // //                       <View style={[styles.orbitCore, { backgroundColor: T.mint+'30', borderColor: T.mint+'50' }]}>
// // // // // //                         <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
// // // // // //                       </View>
// // // // // //                     </View>
// // // // // //                   </View>
// // // // // //                   <View style={styles.heroRight}>
// // // // // //                     <Text style={styles.heroPre}>⚡ GOLD AI ENGINE</Text>
// // // // // //                     <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
// // // // // //                     <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
// // // // // //                       <LinearGradient colors={[T.mint, T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
// // // // // //                         <Text style={styles.heroBtnTxt}>Plan Trip</Text>
// // // // // //                         <Ionicons name="arrow-forward" size={13} color={T.bg} />
// // // // // //                       </LinearGradient>
// // // // // //                     </TouchableOpacity>
// // // // // //                   </View>
// // // // // //                 </View>
// // // // // //                 {/* Decorative dots pattern */}
// // // // // //                 <View style={styles.dotGrid} pointerEvents="none">
// // // // // //                   {Array.from({length:6}).map((_,i) => (
// // // // // //                     <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
// // // // // //                   ))}
// // // // // //                 </View>
// // // // // //               </View>
// // // // // //             </LinearGradient>
// // // // // //           </View>
// // // // // //         </Animated.View>

// // // // // //         {/* ── SEARCH ──────────────────────────────── */}
// // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
// // // // // //           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
// // // // // //           <TouchableOpacity
// // // // // //             activeOpacity={1}
// // // // // //             onPress={() => inputRef.current && inputRef.current.focus()}
// // // // // //             style={[styles.searchBox, focused && { borderColor: T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}
// // // // // //           >
// // // // // //             <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
// // // // // //             <TextInput
// // // // // //               ref={inputRef}
// // // // // //               placeholder="Where to next?"
// // // // // //               placeholderTextColor={T.t3}
// // // // // //               style={styles.searchInput}
// // // // // //               value={query}
// // // // // //               onChangeText={setQuery}
// // // // // //               onSubmitEditing={handleSearch}
// // // // // //               onFocus={() => setFocused(true)}
// // // // // //               onBlur={() => setFocused(false)}
// // // // // //               returnKeyType="search"
// // // // // //               blurOnSubmit={false}
// // // // // //               autoCorrect={false}
// // // // // //               autoCapitalize="none"
// // // // // //               underlineColorAndroid="transparent"
// // // // // //             />
// // // // // //             {loading
// // // // // //               ? <ActivityIndicator size="small" color={T.mint} />
// // // // // //               : query.length > 0 && (
// // // // // //                 <TouchableOpacity onPress={handleSearch}>
// // // // // //                   <LinearGradient colors={[T.mint, T.mintD]} style={styles.goBtn}>
// // // // // //                     <Ionicons name="arrow-forward" size={14} color={T.bg} />
// // // // // //                   </LinearGradient>
// // // // // //                 </TouchableOpacity>
// // // // // //               )
// // // // // //             }
// // // // // //           </TouchableOpacity>
// // // // // //           {/* Quick search tags */}
// // // // // //           <View style={styles.tagsRow}>
// // // // // //             {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
// // // // // //               <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
// // // // // //                 <Text style={styles.tagPillTxt}>{t}</Text>
// // // // // //               </TouchableOpacity>
// // // // // //             ))}
// // // // // //           </View>
// // // // // //         </Animated.View>

// // // // // //         {/* ── CITY RESULTS ────────────────────────── */}
// // // // // //         {(images.length > 0 || loading) && (
// // // // // //           <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // // //             <View style={styles.secRow}>
// // // // // //               <View style={styles.secLeft}>
// // // // // //                 <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
// // // // // //                 <Text style={styles.secTitle}> Results for "{query}"</Text>
// // // // // //               </View>
// // // // // //               <Text style={styles.secBadge}>{images.length} photos</Text>
// // // // // //             </View>
// // // // // //             {loading
// // // // // //               ? <View style={styles.loadBox}>
// // // // // //                   <View style={styles.shimmerRow}>
// // // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // // //                   </View>
// // // // // //                 </View>
// // // // // //               : <FlatList
// // // // // //                   key={imgKey} data={images} horizontal
// // // // // //                   showsHorizontalScrollIndicator={false}
// // // // // //                   keyExtractor={it => it.id}
// // // // // //                   snapToInterval={width*0.72+14}
// // // // // //                   decelerationRate="fast"
// // // // // //                   contentContainerStyle={{ paddingRight:20 }}
// // // // // //                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
// // // // // //                 />
// // // // // //             }
// // // // // //           </Animated.View>
// // // // // //         )}

// // // // // //         {/* ── QUICK ACCESS —Bento style ────────────── */}
// // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // //           <Text style={styles.secTitle2}>Quick Access</Text>
// // // // // //           <View style={styles.bento}>
// // // // // //             {shortcuts.map((item) => (
// // // // // //               <TouchableOpacity
// // // // // //                 key={item.id}
// // // // // //                 style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
// // // // // //                 activeOpacity={0.75}
// // // // // //                 onPress={() => {
// // // // // //                   if (item.name==='Hotels')  navigation.navigate('HotelSearch');
// // // // // //                   if (item.name==='Budget')  navigation.navigate('Budget');
// // // // // //                   if (item.name==='Planner') navigation.navigate('Planner');
// // // // // //                   if (item.name==='News')    navigation.navigate('News');
// // // // // //                   if (item.name==='Map')     navigation.navigate('LiveNavigation');
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
// // // // // //                   <Ionicons name={item.icon} size={22} color={item.c} />
// // // // // //                 </View>
// // // // // //                 <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
// // // // // //                 {/* Corner dot accent */}
// // // // // //                 <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
// // // // // //               </TouchableOpacity>
// // // // // //             ))}
// // // // // //           </View>
// // // // // //         </Animated.View>

// // // // // //         {/* ── TRENDING ────────────────────────────── */}
// // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // //           <View style={styles.secRow}>
// // // // // //             <Text style={styles.secTitle2}>Trending 🔥</Text>
// // // // // //             <TouchableOpacity>
// // // // // //               <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
// // // // // //             </TouchableOpacity>
// // // // // //           </View>
// // // // // //           <FlatList
// // // // // //             data={trending} horizontal showsHorizontalScrollIndicator={false}
// // // // // //             keyExtractor={it => it.id}
// // // // // //             contentContainerStyle={{ gap:12, paddingRight:20 }}
// // // // // //             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
// // // // // //           />
// // // // // //         </Animated.View>

// // // // // //         {/* ── STATS — Counter animation ────────────── */}
// // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // //           <Text style={styles.secTitle2}>By the Numbers</Text>
// // // // // //           <View style={styles.statsGrid}>
// // // // // //             {[
// // // // // //               { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
// // // // // //               { label:'AI Accuracy',   num:'98.7', suf:'%',  color:T.purple },
// // // // // //               { label:'Destinations',  num:'190',  suf:'+',  color:T.pink },
// // // // // //               { label:'Happy Users',   num:'500',  suf:'K',  color:T.gold },
// // // // // //             ].map((s,i) => (
// // // // // //               <View key={i} style={[styles.statCard, { borderColor: s.color+'30' }]}>
// // // // // //                 <LinearGradient colors={[s.color+'18', 'transparent']} style={StyleSheet.absoluteFill} />
// // // // // //                 <Counter target={s.num} suffix={s.suf} color={s.color} />
// // // // // //                 <Text style={styles.statLabel}>{s.label}</Text>
// // // // // //               </View>
// // // // // //             ))}
// // // // // //           </View>
// // // // // //         </Animated.View>

// // // // // //         {/* ── WEATHER WIDGET ──────────────────────── */}
// // // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // // //           <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
// // // // // //             {/* Mint strip */}
// // // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
// // // // // //             <View style={styles.weatherBody}>
// // // // // //               <View>
// // // // // //                 <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
// // // // // //                 <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
// // // // // //                 <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
// // // // // //               </View>
// // // // // //               <View style={styles.wtRight}>
// // // // // //                 <Text style={styles.wtEmoji}>⛅</Text>
// // // // // //                 <View style={styles.wtMinis}>
// // // // // //                   {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
// // // // // //                     <View key={v} style={styles.wtMini}>
// // // // // //                       <Text>{ic}</Text>
// // // // // //                       <Text style={styles.wtMiniV}>{v}</Text>
// // // // // //                     </View>
// // // // // //                   ))}
// // // // // //                 </View>
// // // // // //               </View>
// // // // // //             </View>
// // // // // //             <View style={[styles.wtLine, { backgroundColor:T.border }]} />
// // // // // //             <View style={styles.wtForecast}>
// // // // // //               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
// // // // // //                 <View key={d} style={styles.wtDay}>
// // // // // //                   <Text style={styles.wtDayL}>{d}</Text>
// // // // // //                   <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
// // // // // //                   <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
// // // // // //                 </View>
// // // // // //               ))}
// // // // // //             </View>
// // // // // //           </View>
// // // // // //         </Animated.View>

// // // // // //         {/* ── AI PICK BANNER ──────────────────────── */}
// // // // // //         <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // // //           <LinearGradient colors={['#161200','#282828','#444444']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
// // // // // //             <View style={styles.pickInner}>
// // // // // //               <View style={styles.pickTopRow}>
// // // // // //                 <View style={styles.pickBadge}>
// // // // // //                   <Text style={styles.pickBadgeTxt}>✦ AI PICK</Text>
// // // // // //                 </View>
// // // // // //                 <Text style={styles.pickDot}>TODAY</Text>
// // // // // //               </View>
// // // // // //               <Text style={styles.pickTitle}>Santorini, Greece</Text>
// // // // // //               <Text style={styles.pickSub}>Perfect season · April – June</Text>
// // // // // //               <View style={styles.pickTagsRow}>
// // // // // //                 {['Romantic','Beach','Scenic'].map(t=>(
// // // // // //                   <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
// // // // // //                 ))}
// // // // // //               </View>
// // // // // //             </View>
// // // // // //             <Text style={styles.pickEmoji}>🏛️</Text>
// // // // // //             <View style={styles.pickCircle1} />
// // // // // //             <View style={styles.pickCircle2} />
// // // // // //           </LinearGradient>
// // // // // //         </Animated.View>

// // // // // //         {/* ── FOOTER ──────────────────────────────── */}
// // // // // //         <Animated.View style={[styles.footer, { opacity:fade }]}>
// // // // // //           <LinearGradient colors={[T.mint+'15', T.purple+'10']} style={styles.footerCard}>
// // // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
// // // // // //             <Animated.View style={{ transform:[{rotate:spinStr}] }}>
// // // // // //               <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
// // // // // //             </Animated.View>
// // // // // //             <Text style={styles.footerTitle}>Gold Travel AI</Text>
// // // // // //             <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
// // // // // //             <View style={styles.footerPills}>
// // // // // //               {[T.mint, T.purple, T.pink, T.gold].map(c=>(
// // // // // //                 <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
// // // // // //               ))}
// // // // // //             </View>
// // // // // //           </LinearGradient>
// // // // // //         </Animated.View>

// // // // // //         <View style={{ height:50 }} />
// // // // // //       </ScrollView>
// // // // // //     </SafeAreaView>
// // // // // //   );
// // // // // // }

// // // // // // /* ═══ Styles ════════════════════════════════════════ */
// // // // // // const BW = (width - 72) / 3;

// // // // // // const styles = StyleSheet.create({
// // // // // //   root:   { flex:1, backgroundColor:T.bg },
// // // // // //   scroll: { paddingHorizontal:20, paddingTop:12 },
// // // // // //   section:{ marginBottom:26 },

// // // // // //   // Background
// // // // // //   auroraband:{ position:'absolute', left:0, right:0, borderRadius:40 },
// // // // // //   blob:      { position:'absolute', borderRadius:9999 },
// // // // // //   decRing:   { position:'absolute', borderWidth:1 },

// // // // // //   // Header
// // // // // //   headerWrap:{ marginBottom:24 },
// // // // // //   header:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
// // // // // //   aiBadge:   { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
// // // // // //   aiBadgeTxt:{ color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
// // // // // //   glowDot:   {},
// // // // // //   greet:     { color:T.t2, fontSize:13, fontWeight:'500' },
// // // // // //   nameRow:   { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
// // // // // //   name:      { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
// // // // // //   nameWave:  { fontSize:26 },
// // // // // //   nameBar:   { width:60, height:3, borderRadius:2, marginTop:10 },
// // // // // //   avatarHalo:{ position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
// // // // // //   avatarGrad:{ width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
// // // // // //   avatar:    { width:55, height:55, borderRadius:28 },

// // // // // //   // Hero
// // // // // //   heroOuter: { borderRadius:22, overflow:'hidden' },
// // // // // //   heroBorder:{ padding:1.5, borderRadius:22 },
// // // // // //   heroCard:  { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
// // // // // //   heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
// // // // // //   heroLeft:  {},
// // // // // //   orbitWrap: { width:60, height:60, justifyContent:'center', alignItems:'center' },
// // // // // //   orbit:     { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
// // // // // //   orbitCore: { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
// // // // // //   heroRight: { flex:1 },
// // // // // //   heroPre:   { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
// // // // // //   heroType:  { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
// // // // // //   heroBtn:   { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
// // // // // //   heroBtnG:  { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
// // // // // //   heroBtnTxt:{ color:T.bg, fontSize:13, fontWeight:'800' },
// // // // // //   dotGrid:   { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
// // // // // //   dotGridItem:{ width:5, height:5, borderRadius:3 },

// // // // // //   // Search
// // // // // //   searchBox: { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
// // // // // //                borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
// // // // // //   searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
// // // // // //   goBtn:     { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
// // // // // //   tagsRow:   { flexDirection:'row', gap:8, flexWrap:'wrap' },
// // // // // //   tagPill:   { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
// // // // // //   tagPillTxt:{ color:T.t2, fontSize:11, fontWeight:'600' },
// // // // // //   particle:  { position:'absolute' },
// // // // // //   pDot:      { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

// // // // // //   // City cards
// // // // // //   cityCard:  { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
// // // // // //   cityImg:   { width:'100%', height:'100%' },
// // // // // //   cityGrad:  { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
// // // // // //   cityTopRow:{ position:'absolute', top:14, left:14 },
// // // // // //   liveChip:  { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
// // // // // //   liveDot:   { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
// // // // // //   liveChipTxt:{ fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // // //   cityName:  { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
// // // // // //   cityMeta:  { flexDirection:'row', alignItems:'center' },
// // // // // //   cityMetaTxt:{ color:T.t3, fontSize:11 },
// // // // // //   cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
// // // // // //   shimmerRow:{ flexDirection:'row', gap:14 },
// // // // // //   loadBox:   { paddingVertical:10 },
// // // // // //   secRow:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
// // // // // //   secLeft:   { flexDirection:'row', alignItems:'center' },
// // // // // //   secTitle:  { color:T.t1, fontSize:15, fontWeight:'700' },
// // // // // //   secTitle2: { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
// // // // // //   secBadge:  { color:T.t3, fontSize:11 },
// // // // // //   seeAll:    { fontSize:13, fontWeight:'600' },

// // // // // //   // Bento grid
// // // // // //   bento:     { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // // //   bentoItem: { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
// // // // // //                alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
// // // // // //   bentoIcon: { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
// // // // // //   bentoTxt:  { fontSize:12, fontWeight:'700' },
// // // // // //   bentoDot:  { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },

// // // // // //   // Trending
// // // // // //   trendCard: { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
// // // // // //   trendEmoji:{ fontSize:30, marginBottom:4 },
// // // // // //   trendCity: { color:'#FFF', fontSize:16, fontWeight:'800' },
// // // // // //   trendSub:  { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
// // // // // //   trendBadge:{ flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)', alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
// // // // // //   trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
// // // // // //   trendCircle:{ position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20, backgroundColor:'rgba(255,255,255,0.08)' },

// // // // // //   // Stats
// // // // // //   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // // //   statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
// // // // // //   statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
// // // // // //   statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

// // // // // //   // Weather
// // // // // //   weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
// // // // // //   weatherStrip: { height:2 },
// // // // // //   weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
// // // // // //   wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
// // // // // //   wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
// // // // // //   wtDeg:     { fontSize:24, fontWeight:'400' },
// // // // // //   wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
// // // // // //   wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
// // // // // //   wtEmoji:   { fontSize:44 },
// // // // // //   wtMinis:   { flexDirection:'row', gap:10 },
// // // // // //   wtMini:    { alignItems:'center', gap:2 },
// // // // // //   wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // // //   wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
// // // // // //   wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
// // // // // //   wtDay:     { alignItems:'center', gap:4 },
// // // // // //   wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // // //   wtDayIc:   { fontSize:18 },
// // // // // //   wtDayT:    { fontSize:12, fontWeight:'700' },

// // // // // //   // Pick
// // // // // //   pickCard:  { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
// // // // // //   pickInner: { flex:1 },
// // // // // //   pickTopRow:{ flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
// // // // // //   pickBadge: { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
// // // // // //   pickBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // // //   pickDot:   { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
// // // // // //   pickTitle: { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
// // // // // //   pickSub:   { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
// // // // // //   pickTagsRow:{ flexDirection:'row', gap:6 },
// // // // // //   pickTag:   { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
// // // // // //   pickTagTxt:{ color:'#FFF', fontSize:10, fontWeight:'600' },
// // // // // //   pickEmoji: { fontSize:54 },
// // // // // //   pickCircle1:{ position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
// // // // // //   pickCircle2:{ position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

// // // // // //   // Footer
// // // // // //   footer:     { marginBottom:10 },
// // // // // //   footerCard: { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
// // // // // //   footerStrip:{ position:'absolute', top:0, left:0, right:0, height:2 },
// // // // // //   footerTitle:{ color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
// // // // // //   footerSub:  { color:T.t3, fontSize:11, letterSpacing:1 },
// // // // // //   footerPills:{ flexDirection:'row', gap:8, marginTop:10 },
// // // // // //   fpill:      { width:28, height:6, borderRadius:3 },
// // // // // // });






// // // // // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // // // // import {
// // // // //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// // // // //   FlatList, Image, Dimensions, Animated, TextInput,
// // // // //   ActivityIndicator, StatusBar,
// // // // // } from 'react-native';
// // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // import axios from 'axios';

// // // // // const { width } = Dimensions.get('window');

// // // // // /* ═══════════════════════════════════════════════════
// // // // //    ⚡ OBSIDIAN GOLD – Design Tokens
// // // // //    Palette: Ultra-Dark Purple + Obsidian Black + Pure White + 24K Gold
// // // // // ═══════════════════════════════════════════════════ */
// // // // // const T = {
// // // // //   bg:      '#080808',   // very dark green-black
// // // // //   surf:    '#0F0F0F',   // dark forest surface
// // // // //   card:    '#120F00',   // card background
// // // // //   card2:   '#161200',   // alt card
// // // // //   border:  '#1E1E1E',
// // // // //   border2: '#282828',

// // // // //   mint:    '#FFFFFF',   // primary — electric violet
// // // // //   mintL:   '#F5C518',   // light violet
// // // // //   mintD:   '#C9A227',   // medium purple
// // // // //   purple:  '#F5C518',   // secondary — neon cyan
// // // // //   purpleL: '#E8B820',   // light cyan
// // // // //   pink:    '#B8860B',   // accent — burnt orange
// // // // //   pinkL:   '#DAA520',   // light amber
// // // // //   gold:    '#FFF9E6',   // neon lime
// // // // //   sky:     '#C9A227',   // hot pink

// // // // //   t1: '#FFFFFF',  // primary text — violet-tinted white
// // // // //   t2: '#C9A227',  // secondary
// // // // //   t3: '#666666',  // muted
// // // // // };

// // // // // /* ═══ Data ══════════════════════════════════════════ */
// // // // // const shortcuts = [
// // // // //   { id:'1', name:'Budget',  icon:'wallet-outline',    c: T.pink,   bg:'#141200' },
// // // // //   { id:'2', name:'Flights', icon:'airplane-outline',  c: T.mint,   bg:'#120F00' },
// // // // //   { id:'3', name:'Hotels',  icon:'bed-outline',        c: T.gold,   bg:'#161200' },
// // // // //   { id:'4', name:'Planner', icon:'calendar-outline',  c: T.purple, bg:'#111000' },
// // // // //   { id:'5', name:'News',    icon:'newspaper-outline', c: T.sky,    bg:'#141100' },
// // // // //   { id:'6', name:'Map',     icon:'navigate-outline',  c: T.pinkL,  bg:'#181300' },
// // // // // ];

// // // // // const trending = [
// // // // //   { id:'t1', city:'Tokyo',     sub:'Japan',      emoji:'🗼', g:['#FFFFFF','#F5C518'] },
// // // // //   { id:'t2', city:'Santorini', sub:'Greece',    emoji:'🏛️', g:['#B8860B','#C9A227'] },
// // // // //   { id:'t3', city:'Bali',      sub:'Indonesia', emoji:'🌴', g:['#FFF9E6','#F5C518'] },
// // // // //   { id:'t4', city:'Dubai',     sub:'UAE',       emoji:'🏙️', g:['#DAA520','#B8860B'] },
// // // // //   { id:'t5', city:'Maldives',  sub:'South Asia',emoji:'🏝️', g:['#C9A227','#FFFFFF'] },
// // // // // ];

// // // // // const aiPhrases = ['Discover the world...', 'Find hidden gems...', 'Plan your adventure...', 'Explore smarter...'];

// // // // // /* ═══ ✈ Flying Airplane ══════════════════════════ */
// // // // // const FlyingPlane = ({ animVal, top, color }) => {
// // // // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[-60, width+60] });
// // // // //   const ty = animVal.interpolate({ inputRange:[0,0.5,1], outputRange:[0,-18,0] });
// // // // //   const op = animVal.interpolate({ inputRange:[0,0.05,0.95,1], outputRange:[0,1,1,0] });
// // // // //   return (
// // // // //     <Animated.View style={[
// // // // //       styles.bgPlane,
// // // // //       { top, opacity:op, transform:[{translateX:tx},{translateY:ty}] }
// // // // //     ]}>
// // // // //       <Ionicons name="airplane" size={18} color={color} />
// // // // //       {/* Dashed trail dots */}
// // // // //       {[-20,-36,-52,-68].map(x => (
// // // // //         <View key={x} style={[styles.trailDot, { right:-x, opacity: Math.abs(x)/80, backgroundColor:color }]} />
// // // // //       ))}
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══ 📍 Pulsing Location Pin ════════════════════ */
// // // // // const LocationPin = ({ x, y, delay, color, pulseVal }) => {
// // // // //   const ringScale = pulseVal.interpolate({ inputRange:[0,1], outputRange:[1, 2.2] });
// // // // //   const ringOp    = pulseVal.interpolate({ inputRange:[0,1], outputRange:[0.6, 0] });
// // // // //   return (
// // // // //     <View style={[styles.bgPin, { left:x, top:y }]}>
// // // // //       <Animated.View style={[styles.pinRing, { width:28, height:28, borderRadius:14,
// // // // //         borderColor:color, transform:[{scale:ringScale}], opacity:ringOp }]} />
// // // // //       <View style={[styles.pinDot, { backgroundColor:color }]} />
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // /* ═══ ☁ Drifting Cloud ═══════════════════════════ */
// // // // // const DriftCloud = ({ animVal, top, size=1, opacity=0.07 }) => {
// // // // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[width+100, -300] });
// // // // //   return (
// // // // //     <Animated.View style={[styles.bgCloud, { top, opacity, transform:[{translateX:tx},{scale:size}] }]}>
// // // // //       <View style={[styles.cloudBody, { width:80, height:30 }]} />
// // // // //       <View style={[styles.cloudPuff, { width:44, height:44, top:-20, left:10 }]} />
// // // // //       <View style={[styles.cloudPuff, { width:34, height:34, top:-14, left:36 }]} />
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══ Shimmer Effect ════════════════════════════════ */
// // // // // const Shimmer = ({ w, h, br=10 }) => {
// // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // //   useEffect(() => {
// // // // //     Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
// // // // //   }, []);
// // // // //   const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w, w] });
// // // // //   return (
// // // // //     <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#1E1E1E', overflow:'hidden' }}>
// // // // //       <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
// // // // //         <LinearGradient colors={['transparent','#FFFFFF12','transparent']} start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
// // // // //       </Animated.View>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // /* ═══ Animated Number Counter ═══════════════════════ */
// // // // // const Counter = ({ target, suffix = '', color }) => {
// // // // //   const [val, setVal] = useState(0);
// // // // //   useEffect(() => {
// // // // //     let start = 0;
// // // // //     const num = parseFloat(target);
// // // // //     const step = num / 40;
// // // // //     const t = setInterval(() => {
// // // // //       start += step;
// // // // //       if (start >= num) { setVal(num); clearInterval(t); }
// // // // //       else setVal(Math.floor(start * 10) / 10);
// // // // //     }, 35);
// // // // //     return () => clearInterval(t);
// // // // //   }, []);
// // // // //   return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
// // // // // };

// // // // // /* ═══ Glow Dot ══════════════════════════════════════ */
// // // // // const GlowDot = ({ color, size=8, pulseAnim }) => (
// // // // //   <Animated.View style={[styles.glowDot, {
// // // // //     width:size, height:size, borderRadius:size/2,
// // // // //     backgroundColor:color,
// // // // //     shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
// // // // //     transform:[{ scale: pulseAnim }],
// // // // //   }]} />
// // // // // );

// // // // // /* ═══ City Card ═════════════════════════════════════ */
// // // // // const CityCard = ({ item, index, query }) => {
// // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // //   const sc = useRef(new Animated.Value(0.8)).current;
// // // // //   const sl = useRef(new Animated.Value(50)).current;
// // // // //   useEffect(() => {
// // // // //     Animated.sequence([
// // // // //       Animated.delay(index * 100),
// // // // //       Animated.parallel([
// // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
// // // // //         Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
// // // // //         Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
// // // // //       ]),
// // // // //     ]).start();
// // // // //   }, []);
// // // // //   return (
// // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
// // // // //       <View style={styles.cityCard}>
// // // // //         <Image source={{ uri: item.url }} style={styles.cityImg} />
// // // // //         {/* Aurora tint overlay */}
// // // // //         <LinearGradient
// // // // //           colors={['transparent','rgba(245,197,24,0.08)','rgba(0,0,0,0.90)']}
// // // // //           style={styles.cityGrad}
// // // // //         >
// // // // //           <View style={styles.cityTopRow}>
// // // // //             <View style={[styles.liveChip, { borderColor: T.mint+'60' }]}>
// // // // //               <View style={[styles.liveDot, { backgroundColor: T.mint, shadowColor: T.mint }]} />
// // // // //               <Text style={[styles.liveChipTxt, { color: T.mintL }]}>LIVE</Text>
// // // // //             </View>
// // // // //           </View>
// // // // //           <Text style={styles.cityName}>{query}</Text>
// // // // //           <View style={styles.cityMeta}>
// // // // //             <Ionicons name="camera-outline" size={11} color={T.t3} />
// // // // //             <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
// // // // //           </View>
// // // // //         </LinearGradient>
// // // // //         {/* Mint corner accent */}
// // // // //         <View style={[styles.cornerAccent, { borderColor: T.mint }]} />
// // // // //       </View>
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══ Trend Card ════════════════════════════════════ */
// // // // // const TrendCard = ({ item, index }) => {
// // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // //   const sc = useRef(new Animated.Value(0.88)).current;
// // // // //   useEffect(() => {
// // // // //     Animated.sequence([
// // // // //       Animated.delay(index * 90),
// // // // //       Animated.parallel([
// // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
// // // // //         Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
// // // // //       ]),
// // // // //     ]).start();
// // // // //   }, []);
// // // // //   return (
// // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
// // // // //       <TouchableOpacity activeOpacity={0.82}>
// // // // //         <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
// // // // //           <Text style={styles.trendEmoji}>{item.emoji}</Text>
// // // // //           <Text style={styles.trendCity}>{item.city}</Text>
// // // // //           <Text style={styles.trendSub}>{item.sub}</Text>
// // // // //           <View style={styles.trendBadge}>
// // // // //             <Ionicons name="trending-up" size={10} color="#FFF" />
// // // // //             <Text style={styles.trendBadgeTxt}>Trending</Text>
// // // // //           </View>
// // // // //           {/* Glass circle */}
// // // // //           <View style={styles.trendCircle} />
// // // // //         </LinearGradient>
// // // // //       </TouchableOpacity>
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══ Particle ══════════════════════════════════════ */
// // // // // const Particle = ({ x, y, delay, color }) => {
// // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // //   useEffect(() => {
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.delay(delay),
// // // // //       Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
// // // // //       Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //   }, []);
// // // // //   return (
// // // // //     <Animated.View style={[styles.particle, {
// // // // //       left:x, top:y,
// // // // //       opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
// // // // //       transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
// // // // //     }]}>
// // // // //       <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══════════════════════════════════════════════════
// // // // //    MAIN SCREEN
// // // // // ═══════════════════════════════════════════════════ */
// // // // // export default function HomeScreen({ navigation }) {
// // // // //   const [query,     setQuery]     = useState('');
// // // // //   const [images,    setImages]    = useState([]);
// // // // //   const [loading,   setLoading]   = useState(false);
// // // // //   const [particles, setParticles] = useState([]);
// // // // //   const [focused,   setFocused]   = useState(false);
// // // // //   const [imgKey,    setImgKey]    = useState(0);
// // // // //   const [aiText,    setAiText]    = useState('');
// // // // //   const inputRef = useRef(null);

// // // // //   const fade   = useRef(new Animated.Value(0)).current;
// // // // //   const slideY = useRef(new Animated.Value(40)).current;
// // // // //   const pulse  = useRef(new Animated.Value(0)).current;
// // // // //   const float  = useRef(new Animated.Value(0)).current;
// // // // //   const spin   = useRef(new Animated.Value(0)).current;
// // // // //   const aurora = useRef(new Animated.Value(0)).current;
// // // // //   // Travel bg animations
// // // // //   const plane1  = useRef(new Animated.Value(0)).current;
// // // // //   const plane2  = useRef(new Animated.Value(0)).current;
// // // // //   const pin1    = useRef(new Animated.Value(0)).current;
// // // // //   const cloud1  = useRef(new Animated.Value(0)).current;
// // // // //   const cloud2  = useRef(new Animated.Value(0)).current;
// // // // //   const compass = useRef(new Animated.Value(0)).current;
// // // // //   const phraseIdx = useRef(0);

// // // // //   useEffect(() => {
// // // // //     Animated.parallel([
// // // // //       Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
// // // // //       Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
// // // // //     ]).start();

// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
// // // // //       Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
// // // // //       Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
// // // // //     // Aurora shift
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
// // // // //       Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
// // // // //     ])).start();

// // // // //     // ✈ Airplane 1 — slow crossing
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(plane1, { toValue:1, duration:9000, useNativeDriver:true }),
// // // // //       Animated.delay(4000),
// // // // //       Animated.timing(plane1, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //       Animated.delay(3000),
// // // // //     ])).start();
// // // // //     // ✈ Airplane 2 — offset crossing
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.delay(6000),
// // // // //       Animated.timing(plane2, { toValue:1, duration:11000, useNativeDriver:true }),
// // // // //       Animated.delay(2000),
// // // // //       Animated.timing(plane2, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     // 📍 Pin pulse
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(pin1, { toValue:1, duration:1500, useNativeDriver:true }),
// // // // //       Animated.timing(pin1, { toValue:0, duration:600, useNativeDriver:true }),
// // // // //       Animated.delay(2000),
// // // // //     ])).start();
// // // // //     // ☁ Cloud drift 1
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(cloud1, { toValue:1, duration:28000, useNativeDriver:true }),
// // // // //       Animated.timing(cloud1, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     // ☁ Cloud drift 2
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.delay(14000),
// // // // //       Animated.timing(cloud2, { toValue:1, duration:22000, useNativeDriver:true }),
// // // // //       Animated.timing(cloud2, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     // 🧭 Compass slow spin
// // // // //     Animated.loop(Animated.timing(compass, { toValue:1, duration:20000, useNativeDriver:true })).start();

// // // // //     // Typewriter
// // // // //     const typePhrase = () => {
// // // // //       const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
// // // // //       const t = setInterval(() => {
// // // // //         i++; setAiText(ph.slice(0,i));
// // // // //         if (i >= ph.length) {
// // // // //           clearInterval(t);
// // // // //           setTimeout(() => { phraseIdx.current = (phraseIdx.current+1)%aiPhrases.length; typePhrase(); }, 2000);
// // // // //         }
// // // // //       }, 55);
// // // // //       return t;
// // // // //     };
// // // // //     const t = typePhrase();
// // // // //     return () => clearInterval(t);
// // // // //   }, []);

// // // // //   const handleSearch = useCallback(async () => {
// // // // //     if (!query.trim()) return;
// // // // //     setParticles(Array.from({length:12}, (_,i) => ({
// // // // //       id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
// // // // //       color:[T.mint,T.purple,T.pink,T.gold,T.sky][i%5],
// // // // //     })));
// // // // //     setLoading(true); setImages([]);
// // // // //     try {
// // // // //       const r = await axios.get(`http://10.176.82.30:3000/api/photos?query=${query}`);
// // // // //       if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
// // // // //     } catch(e) { console.error(e); }
// // // // //     finally { setLoading(false); }
// // // // //   }, [query]);

// // // // //   const spinStr  = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
// // // // //   const floatY   = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
// // // // //   const pulseS   = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
// // // // //   const auroraX  = aurora.interpolate({ inputRange:[0,1], outputRange:[0, 30] });
// // // // //   const auroraO  = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });
// // // // //   const compassR = compass.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });

// // // // //   return (
// // // // //     <SafeAreaView style={styles.root}>
// // // // //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// // // // //       {/* ── TRAVEL BG ANIMATIONS ──────────────────── */}
// // // // //       <View style={StyleSheet.absoluteFill} pointerEvents="none">
// // // // //         <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />

// // // // //         {/* Aurora bands */}
// // // // //         <Animated.View style={[styles.auroraband, {
// // // // //           backgroundColor: T.mint+'0D', top:60, height:220,
// // // // //           transform:[{translateX:auroraX}], opacity:auroraO,
// // // // //         }]} />
// // // // //         <Animated.View style={[styles.auroraband, {
// // // // //           backgroundColor: T.purple+'0A', top:130, height:180,
// // // // //           transform:[{translateX: auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
// // // // //           opacity:auroraO,
// // // // //         }]} />

// // // // //         {/* ✈ Flying planes (Sunset Orange & Sky Blue) */}
// // // // //         <FlyingPlane animVal={plane1} top={120} color={'rgba(255, 107, 74, 0.45)'} />
// // // // //         <FlyingPlane animVal={plane2} top={280} color={'rgba(56, 189, 248, 0.4)'} />

// // // // //         {/* ☁ Drifting clouds */}
// // // // //         <DriftCloud animVal={cloud1} top={80}  size={1.2} opacity={0.07} />
// // // // //         <DriftCloud animVal={cloud2} top={200} size={0.8} opacity={0.05} />

// // // // //         {/* 📍 Pulsing location pins (Sunset, Sky, Coral) */}
// // // // //         <LocationPin x={width*0.15} y={180} color={'rgba(255, 107, 74, 0.6)'} pulseVal={pin1} />
// // // // //         <LocationPin x={width*0.72} y={350} color={'rgba(56, 189, 248, 0.6)'} pulseVal={pin1} />
// // // // //         <LocationPin x={width*0.40} y={520} color={'rgba(244, 63, 94, 0.5)'} pulseVal={pin1} />

// // // // //         {/* Dashed route line connecting pins */}
// // // // //         <View style={styles.routeLine} />

// // // // //         {/* 🧭 Slow-spinning compass rose (corner) */}
// // // // //         <Animated.View style={[styles.bgCompass, { transform:[{rotate:compassR}] }]}>
// // // // //           <Ionicons name="compass-outline" size={140} color={'rgba(255, 255, 255, 0.03)'} />
// // // // //         </Animated.View>

// // // // //         {/* Floating map coordinate dots */}
// // // // //         {[
// // // // //           { x:width*0.1,  y:400, color:'rgba(255, 107, 74, 0.25)' },
// // // // //           { x:width*0.6,  y:160, color:'rgba(56, 189, 248, 0.25)' },
// // // // //           { x:width*0.85, y:480, color:'rgba(244, 63, 94, 0.25)' },
// // // // //           { x:width*0.3,  y:620, color:'rgba(255, 255, 255, 0.15)' },
// // // // //         ].map((d, i) => (
// // // // //           <Animated.View key={i} style={[styles.mapDot, {
// // // // //             left:d.x, top:d.y, backgroundColor:d.color,
// // // // //             transform:[{scale: pulse.interpolate({inputRange:[0,1],outputRange:[1,1.5]})}],
// // // // //           }]} />
// // // // //         ))}

// // // // //         {/* Blobs */}
// // // // //         <Animated.View style={[styles.blob, {
// // // // //           backgroundColor: T.mint+'10', width:350, height:350,
// // // // //           top:-100, right:-80, transform:[{translateY:floatY}],
// // // // //         }]} />
// // // // //         <Animated.View style={[styles.blob, {
// // // // //           backgroundColor: T.purple+'0C', width:280, height:280,
// // // // //           bottom:350, left:-90, transform:[{translateY:floatY}],
// // // // //         }]} />
// // // // //         <Animated.View style={[styles.blob, {
// // // // //           backgroundColor: T.pink+'08', width:200, height:200,
// // // // //           bottom:100, right:40, transform:[{translateY:floatY}],
// // // // //         }]} />

// // // // //         {/* Floating decorative rings */}
// // // // //         <Animated.View style={[styles.decRing, {
// // // // //           borderColor: T.mint+'18', width:260, height:260, borderRadius:130,
// // // // //           top:80, right:-100, transform:[{translateY:floatY}],
// // // // //         }]} />
// // // // //         <Animated.View style={[styles.decRing, {
// // // // //           borderColor: T.purple+'14', width:180, height:180, borderRadius:90,
// // // // //           bottom:200, left:-60, transform:[{translateY:floatY}],
// // // // //         }]} />
// // // // //       </View>

// // // // //       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

// // // // //         {/* ── HEADER ──────────────────────────────── */}
// // // // //         <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <View style={styles.header}>
// // // // //             <View>
// // // // //               <View style={styles.aiBadge}>
// // // // //                 <GlowDot color={T.mint} pulseAnim={pulseS} />
// // // // //                 <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
// // // // //               </View>
// // // // //               <Text style={styles.greet}>Good Evening 🌙</Text>
// // // // //               <View style={styles.nameRow}>
// // // // //                 <Text style={styles.name}>Chaitanya</Text>
// // // // //                 <Text style={styles.nameWave}>👋</Text>
// // // // //               </View>
// // // // //               {/* Aurora name underline */}
// // // // //               <LinearGradient colors={['#FFFFFF','#C9A227','#555555']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
// // // // //             </View>
// // // // //             <View>
// // // // //               <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
// // // // //               <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
// // // // //                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=F5C518&size=100' }} style={styles.avatar} />
// // // // //               </LinearGradient>
// // // // //             </View>
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── HERO CARD (unique diagonal) ─────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <View style={styles.heroOuter}>
// // // // //             {/* Triple gradient border effect */}
// // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#333333']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
// // // // //               <View style={styles.heroCard}>
// // // // //                 {/* Background diagonal slice */}
// // // // //                 <LinearGradient
// // // // //                   colors={[T.mint+'20', T.purple+'18', 'transparent']}
// // // // //                   start={{x:0,y:0}} end={{x:1,y:1}}
// // // // //                   style={StyleSheet.absoluteFill}
// // // // //                 />
// // // // //                 <View style={styles.heroContent}>
// // // // //                   <View style={styles.heroLeft}>
// // // // //                     {/* Rotating orbit ring */}
// // // // //                     <View style={styles.orbitWrap}>
// // // // //                       <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
// // // // //                       <View style={[styles.orbitCore, { backgroundColor: T.mint+'30', borderColor: T.mint+'50' }]}>
// // // // //                         <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
// // // // //                       </View>
// // // // //                     </View>
// // // // //                   </View>
// // // // //                   <View style={styles.heroRight}>
// // // // //                     <Text style={styles.heroPre}>⚡ GOLD AI ENGINE</Text>
// // // // //                     <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
// // // // //                     <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
// // // // //                       <LinearGradient colors={[T.mint, T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
// // // // //                         <Text style={styles.heroBtnTxt}>Plan Trip</Text>
// // // // //                         <Ionicons name="arrow-forward" size={13} color={T.bg} />
// // // // //                       </LinearGradient>
// // // // //                     </TouchableOpacity>
// // // // //                   </View>
// // // // //                 </View>
// // // // //                 {/* Decorative dots pattern */}
// // // // //                 <View style={styles.dotGrid} pointerEvents="none">
// // // // //                   {Array.from({length:6}).map((_,i) => (
// // // // //                     <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
// // // // //                   ))}
// // // // //                 </View>
// // // // //               </View>
// // // // //             </LinearGradient>
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── SEARCH ──────────────────────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
// // // // //           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
// // // // //           <TouchableOpacity
// // // // //             activeOpacity={1}
// // // // //             onPress={() => inputRef.current && inputRef.current.focus()}
// // // // //             style={[styles.searchBox, focused && { borderColor: T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}
// // // // //           >
// // // // //             <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
// // // // //             <TextInput
// // // // //               ref={inputRef}
// // // // //               placeholder="Where to next?"
// // // // //               placeholderTextColor={T.t3}
// // // // //               style={styles.searchInput}
// // // // //               value={query}
// // // // //               onChangeText={setQuery}
// // // // //               onSubmitEditing={handleSearch}
// // // // //               onFocus={() => setFocused(true)}
// // // // //               onBlur={() => setFocused(false)}
// // // // //               returnKeyType="search"
// // // // //               blurOnSubmit={false}
// // // // //               autoCorrect={false}
// // // // //               autoCapitalize="none"
// // // // //               underlineColorAndroid="transparent"
// // // // //             />
// // // // //             {loading
// // // // //               ? <ActivityIndicator size="small" color={T.mint} />
// // // // //               : query.length > 0 && (
// // // // //                 <TouchableOpacity onPress={handleSearch}>
// // // // //                   <LinearGradient colors={[T.mint, T.mintD]} style={styles.goBtn}>
// // // // //                     <Ionicons name="arrow-forward" size={14} color={T.bg} />
// // // // //                   </LinearGradient>
// // // // //                 </TouchableOpacity>
// // // // //               )
// // // // //             }
// // // // //           </TouchableOpacity>
// // // // //           {/* Quick search tags */}
// // // // //           <View style={styles.tagsRow}>
// // // // //             {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
// // // // //               <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
// // // // //                 <Text style={styles.tagPillTxt}>{t}</Text>
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── CITY RESULTS ────────────────────────── */}
// // // // //         {(images.length > 0 || loading) && (
// // // // //           <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // //             <View style={styles.secRow}>
// // // // //               <View style={styles.secLeft}>
// // // // //                 <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
// // // // //                 <Text style={styles.secTitle}> Results for "{query}"</Text>
// // // // //               </View>
// // // // //               <Text style={styles.secBadge}>{images.length} photos</Text>
// // // // //             </View>
// // // // //             {loading
// // // // //               ? <View style={styles.loadBox}>
// // // // //                   <View style={styles.shimmerRow}>
// // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // //                   </View>
// // // // //                 </View>
// // // // //               : <FlatList
// // // // //                   key={imgKey} data={images} horizontal
// // // // //                   showsHorizontalScrollIndicator={false}
// // // // //                   keyExtractor={it => it.id}
// // // // //                   snapToInterval={width*0.72+14}
// // // // //                   decelerationRate="fast"
// // // // //                   contentContainerStyle={{ paddingRight:20 }}
// // // // //                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
// // // // //                 />
// // // // //             }
// // // // //           </Animated.View>
// // // // //         )}

// // // // //         {/* ── QUICK ACCESS —Bento style ────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <Text style={styles.secTitle2}>Quick Access</Text>
// // // // //           <View style={styles.bento}>
// // // // //             {shortcuts.map((item) => (
// // // // //               <TouchableOpacity
// // // // //                 key={item.id}
// // // // //                 style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
// // // // //                 activeOpacity={0.75}
// // // // //                 onPress={() => {
// // // // //                   if (item.name==='Hotels')  navigation.navigate('HotelSearch');
// // // // //                   if (item.name==='Budget')  navigation.navigate('Budget');
// // // // //                   if (item.name==='Planner') navigation.navigate('Planner');
// // // // //                   if (item.name==='News')    navigation.navigate('News');
// // // // //                   if (item.name==='Map')     navigation.navigate('LiveNavigation');
// // // // //                 }}
// // // // //               >
// // // // //                 <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
// // // // //                   <Ionicons name={item.icon} size={22} color={item.c} />
// // // // //                 </View>
// // // // //                 <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
// // // // //                 {/* Corner dot accent */}
// // // // //                 <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── TRENDING ────────────────────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <View style={styles.secRow}>
// // // // //             <Text style={styles.secTitle2}>Trending 🔥</Text>
// // // // //             <TouchableOpacity>
// // // // //               <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
// // // // //             </TouchableOpacity>
// // // // //           </View>
// // // // //           <FlatList
// // // // //             data={trending} horizontal showsHorizontalScrollIndicator={false}
// // // // //             keyExtractor={it => it.id}
// // // // //             contentContainerStyle={{ gap:12, paddingRight:20 }}
// // // // //             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
// // // // //           />
// // // // //         </Animated.View>

// // // // //         {/* ── STATS — Counter animation ────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <Text style={styles.secTitle2}>By the Numbers</Text>
// // // // //           <View style={styles.statsGrid}>
// // // // //             {[
// // // // //               { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
// // // // //               { label:'AI Accuracy',   num:'98.7', suf:'%',  color:T.purple },
// // // // //               { label:'Destinations',  num:'190',  suf:'+',  color:T.pink },
// // // // //               { label:'Happy Users',   num:'500',  suf:'K',  color:T.gold },
// // // // //             ].map((s,i) => (
// // // // //               <View key={i} style={[styles.statCard, { borderColor: s.color+'30' }]}>
// // // // //                 <LinearGradient colors={[s.color+'18', 'transparent']} style={StyleSheet.absoluteFill} />
// // // // //                 <Counter target={s.num} suffix={s.suf} color={s.color} />
// // // // //                 <Text style={styles.statLabel}>{s.label}</Text>
// // // // //               </View>
// // // // //             ))}
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── WEATHER WIDGET ──────────────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
// // // // //             {/* Mint strip */}
// // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
// // // // //             <View style={styles.weatherBody}>
// // // // //               <View>
// // // // //                 <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
// // // // //                 <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
// // // // //                 <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
// // // // //               </View>
// // // // //               <View style={styles.wtRight}>
// // // // //                 <Text style={styles.wtEmoji}>⛅</Text>
// // // // //                 <View style={styles.wtMinis}>
// // // // //                   {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
// // // // //                     <View key={v} style={styles.wtMini}>
// // // // //                       <Text>{ic}</Text>
// // // // //                       <Text style={styles.wtMiniV}>{v}</Text>
// // // // //                     </View>
// // // // //                   ))}
// // // // //                 </View>
// // // // //               </View>
// // // // //             </View>
// // // // //             <View style={[styles.wtLine, { backgroundColor:T.border }]} />
// // // // //             <View style={styles.wtForecast}>
// // // // //               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
// // // // //                 <View key={d} style={styles.wtDay}>
// // // // //                   <Text style={styles.wtDayL}>{d}</Text>
// // // // //                   <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
// // // // //                   <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
// // // // //                 </View>
// // // // //               ))}
// // // // //             </View>
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── AI PICK BANNER ──────────────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // //           <LinearGradient colors={['#161200','#282828','#444444']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
// // // // //             <View style={styles.pickInner}>
// // // // //               <View style={styles.pickTopRow}>
// // // // //                 <View style={styles.pickBadge}>
// // // // //                   <Text style={styles.pickBadgeTxt}>✦ AI PICK</Text>
// // // // //                 </View>
// // // // //                 <Text style={styles.pickDot}>TODAY</Text>
// // // // //               </View>
// // // // //               <Text style={styles.pickTitle}>Santorini, Greece</Text>
// // // // //               <Text style={styles.pickSub}>Perfect season · April – June</Text>
// // // // //               <View style={styles.pickTagsRow}>
// // // // //                 {['Romantic','Beach','Scenic'].map(t=>(
// // // // //                   <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
// // // // //                 ))}
// // // // //               </View>
// // // // //             </View>
// // // // //             <Text style={styles.pickEmoji}>🏛️</Text>
// // // // //             <View style={styles.pickCircle1} />
// // // // //             <View style={styles.pickCircle2} />
// // // // //           </LinearGradient>
// // // // //         </Animated.View>

// // // // //         {/* ── FOOTER ──────────────────────────────── */}
// // // // //         <Animated.View style={[styles.footer, { opacity:fade }]}>
// // // // //           <LinearGradient colors={[T.mint+'15', T.purple+'10']} style={styles.footerCard}>
// // // // //             <LinearGradient colors={['#FFFFFF','#B8860B','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
// // // // //             <Animated.View style={{ transform:[{rotate:spinStr}] }}>
// // // // //               <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
// // // // //             </Animated.View>
// // // // //             <Text style={styles.footerTitle}>Gold Travel AI</Text>
// // // // //             <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
// // // // //             <View style={styles.footerPills}>
// // // // //               {[T.mint, T.purple, T.pink, T.gold].map(c=>(
// // // // //                 <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
// // // // //               ))}
// // // // //             </View>
// // // // //           </LinearGradient>
// // // // //         </Animated.View>

// // // // //         <View style={{ height:50 }} />
// // // // //       </ScrollView>
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // }

// // // // // /* ═══ Styles ════════════════════════════════════════ */
// // // // // const BW = (width - 72) / 3;

// // // // // const styles = StyleSheet.create({
// // // // //   root:   { flex:1, backgroundColor:T.bg },
// // // // //   scroll: { paddingHorizontal:20, paddingTop:12 },
// // // // //   section:{ marginBottom:26 },

// // // // //   // Background
// // // // //   auroraband:{ position:'absolute', left:0, right:0, borderRadius:40 },
// // // // //   blob:      { position:'absolute', borderRadius:9999 },
// // // // //   decRing:   { position:'absolute', borderWidth:1 },
// // // // //   bgPlane:   { position:'absolute', left:0, flexDirection:'row', alignItems:'center' },
// // // // //   trailDot:  { position:'absolute', width:3, height:3, borderRadius:1.5 },
// // // // //   bgPin:     { position:'absolute', width:28, height:28, justifyContent:'center', alignItems:'center' },
// // // // //   pinRing:   { position:'absolute', borderWidth:1.5 },
// // // // //   pinDot:    { width:8, height:8, borderRadius:4, shadowOpacity:1, shadowRadius:5 },
// // // // //   bgCloud:   { position:'absolute', right:0 },
// // // // //   cloudBody: { backgroundColor:'rgba(255,255,255,0.8)', borderRadius:20 },
// // // // //   cloudPuff: { position:'absolute', backgroundColor:'rgba(255,255,255,0.8)', borderRadius:22 },
// // // // //   bgCompass: { position:'absolute', bottom:-40, left:-40, opacity:0.6 },
// // // // //   mapDot:    { position:'absolute', width:4, height:4, borderRadius:2 },
// // // // //   routeLine: { position:'absolute', width:300, height:300, borderRadius:150, borderWidth:1, borderStyle:'dashed', borderColor:'rgba(255,255,255,0.03)', top:100, left:-100, transform:[{rotate:'30deg'}] },

// // // // //   // Header
// // // // //   headerWrap:{ marginBottom:24 },
// // // // //   header:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
// // // // //   aiBadge:   { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
// // // // //   aiBadgeTxt:{ color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
// // // // //   glowDot:   {},
// // // // //   greet:     { color:T.t2, fontSize:13, fontWeight:'500' },
// // // // //   nameRow:   { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
// // // // //   name:      { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
// // // // //   nameWave:  { fontSize:26 },
// // // // //   nameBar:   { width:60, height:3, borderRadius:2, marginTop:10 },
// // // // //   avatarHalo:{ position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
// // // // //   avatarGrad:{ width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
// // // // //   avatar:    { width:55, height:55, borderRadius:28 },

// // // // //   // Hero
// // // // //   heroOuter: { borderRadius:22, overflow:'hidden' },
// // // // //   heroBorder:{ padding:1.5, borderRadius:22 },
// // // // //   heroCard:  { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
// // // // //   heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
// // // // //   heroLeft:  {},
// // // // //   orbitWrap: { width:60, height:60, justifyContent:'center', alignItems:'center' },
// // // // //   orbit:     { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
// // // // //   orbitCore: { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
// // // // //   heroRight: { flex:1 },
// // // // //   heroPre:   { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
// // // // //   heroType:  { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
// // // // //   heroBtn:   { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
// // // // //   heroBtnG:  { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
// // // // //   heroBtnTxt:{ color:T.bg, fontSize:13, fontWeight:'800' },
// // // // //   dotGrid:   { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
// // // // //   dotGridItem:{ width:5, height:5, borderRadius:3 },

// // // // //   // Search
// // // // //   searchBox: { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
// // // // //                borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
// // // // //   searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
// // // // //   goBtn:     { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
// // // // //   tagsRow:   { flexDirection:'row', gap:8, flexWrap:'wrap' },
// // // // //   tagPill:   { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
// // // // //   tagPillTxt:{ color:T.t2, fontSize:11, fontWeight:'600' },
// // // // //   particle:  { position:'absolute' },
// // // // //   pDot:      { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

// // // // //   // City cards
// // // // //   cityCard:  { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
// // // // //   cityImg:   { width:'100%', height:'100%' },
// // // // //   cityGrad:  { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
// // // // //   cityTopRow:{ position:'absolute', top:14, left:14 },
// // // // //   liveChip:  { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
// // // // //   liveDot:   { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
// // // // //   liveChipTxt:{ fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // //   cityName:  { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
// // // // //   cityMeta:  { flexDirection:'row', alignItems:'center' },
// // // // //   cityMetaTxt:{ color:T.t3, fontSize:11 },
// // // // //   cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
// // // // //   shimmerRow:{ flexDirection:'row', gap:14 },
// // // // //   loadBox:   { paddingVertical:10 },
// // // // //   secRow:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
// // // // //   secLeft:   { flexDirection:'row', alignItems:'center' },
// // // // //   secTitle:  { color:T.t1, fontSize:15, fontWeight:'700' },
// // // // //   secTitle2: { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
// // // // //   secBadge:  { color:T.t3, fontSize:11 },
// // // // //   seeAll:    { fontSize:13, fontWeight:'600' },

// // // // //   // Bento grid
// // // // //   bento:     { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // //   bentoItem: { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
// // // // //                alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
// // // // //   bentoIcon: { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
// // // // //   bentoTxt:  { fontSize:12, fontWeight:'700' },
// // // // //   bentoDot:  { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },

// // // // //   // Trending
// // // // //   trendCard: { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
// // // // //   trendEmoji:{ fontSize:30, marginBottom:4 },
// // // // //   trendCity: { color:'#FFF', fontSize:16, fontWeight:'800' },
// // // // //   trendSub:  { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
// // // // //   trendBadge:{ flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)', alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
// // // // //   trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
// // // // //   trendCircle:{ position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20, backgroundColor:'rgba(255,255,255,0.08)' },

// // // // //   // Stats
// // // // //   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // //   statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
// // // // //   statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
// // // // //   statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

// // // // //   // Weather
// // // // //   weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
// // // // //   weatherStrip: { height:2 },
// // // // //   weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
// // // // //   wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
// // // // //   wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
// // // // //   wtDeg:     { fontSize:24, fontWeight:'400' },
// // // // //   wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
// // // // //   wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
// // // // //   wtEmoji:   { fontSize:44 },
// // // // //   wtMinis:   { flexDirection:'row', gap:10 },
// // // // //   wtMini:    { alignItems:'center', gap:2 },
// // // // //   wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // //   wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
// // // // //   wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
// // // // //   wtDay:     { alignItems:'center', gap:4 },
// // // // //   wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // //   wtDayIc:   { fontSize:18 },
// // // // //   wtDayT:    { fontSize:12, fontWeight:'700' },

// // // // //   // Pick
// // // // //   pickCard:  { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
// // // // //   pickInner: { flex:1 },
// // // // //   pickTopRow:{ flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
// // // // //   pickBadge: { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
// // // // //   pickBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // //   pickDot:   { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
// // // // //   pickTitle: { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
// // // // //   pickSub:   { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
// // // // //   pickTagsRow:{ flexDirection:'row', gap:6 },
// // // // //   pickTag:   { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
// // // // //   pickTagTxt:{ color:'#FFF', fontSize:10, fontWeight:'600' },
// // // // //   pickEmoji: { fontSize:54 },
// // // // //   pickCircle1:{ position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
// // // // //   pickCircle2:{ position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

// // // // //   // Footer
// // // // //   footer:     { marginBottom:10 },
// // // // //   footerCard: { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
// // // // //   footerStrip:{ position:'absolute', top:0, left:0, right:0, height:2 },
// // // // //   footerTitle:{ color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
// // // // //   footerSub:  { color:T.t3, fontSize:11, letterSpacing:1 },
// // // // //   footerPills:{ flexDirection:'row', gap:8, marginTop:10 },
// // // // //   fpill:      { width:28, height:6, borderRadius:3 },
// // // // // });






// // // // // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // // // // import {
// // // // //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// // // // //   FlatList, Image, Dimensions, Animated, TextInput,
// // // // //   ActivityIndicator, StatusBar,
// // // // // } from 'react-native';
// // // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // // import axios from 'axios';

// // // // // const { width } = Dimensions.get('window');

// // // // // /* ═══════════════════════════════════════════════════
// // // // //    ⬛ OBSIDIAN – Design Tokens
// // // // //    Palette: Jet Black + Pure White + Platinum + Charcoal
// // // // // ═══════════════════════════════════════════════════ */
// // // // // const T = {
// // // // //   // Surfaces — true black scale
// // // // //   bg:      '#050505',   // jet black
// // // // //   surf:    '#0C0C0C',   // near black
// // // // //   card:    '#131313',   // card
// // // // //   card2:   '#1A1A1A',   // elevated card
// // // // //   border:  '#242424',   // subtle border
// // // // //   border2: '#303030',   // visible border

// // // // //   // Tones — crisp monochrome
// // // // //   mint:    '#FFFFFF',   // pure white — primary
// // // // //   mintL:   '#F0F0F0',   // off-white
// // // // //   mintD:   '#C4C4C4',   // platinum
// // // // //   purple:  '#909090',   // medium gray
// // // // //   purpleL: '#B8B8B8',   // light silver
// // // // //   pink:    '#505050',   // dark gray
// // // // //   pinkL:   '#787878',   // medium silver
// // // // //   gold:    '#E8E8E8',   // near-white
// // // // //   sky:     '#D0D0D0',   // silver

// // // // //   // Text
// // // // //   t1: '#FFFFFF',    // primary — pure white
// // // // //   t2: '#B0B0B0',    // secondary — silver
// // // // //   t3: '#4A4A4A',    // muted — charcoal
// // // // // };

// // // // // /* ═══ Data ══════════════════════════════════════════ */
// // // // // const shortcuts = [
// // // // //   { id:'1', name:'Budget',  icon:'wallet-outline',    c: '#FFFFFF', bg:'#111111' },
// // // // //   { id:'2', name:'Flights', icon:'airplane-outline',  c: '#FFFFFF', bg:'#0C0C0C' },
// // // // //   { id:'3', name:'Hotels',  icon:'bed-outline',        c: '#E8E8E8', bg:'#151515' },
// // // // //   { id:'4', name:'Planner', icon:'calendar-outline',  c: '#C4C4C4', bg:'#0E0E0E' },
// // // // //   { id:'5', name:'News',    icon:'newspaper-outline', c: '#D0D0D0', bg:'#121212' },
// // // // //   { id:'6', name:'Map',     icon:'navigate-outline',  c: '#B8B8B8', bg:'#141414' },
// // // // // ];

// // // // // const trending = [
// // // // //   { id:'t1', city:'Tokyo',     sub:'Japan',      emoji:'🗼', g:['#151515','#2C2C2C'] },
// // // // //   { id:'t2', city:'Santorini', sub:'Greece',    emoji:'🏛️', g:['#282828','#404040'] },
// // // // //   { id:'t3', city:'Bali',      sub:'Indonesia', emoji:'🌴', g:['#1E1E1E','#383838'] },
// // // // //   { id:'t4', city:'Dubai',     sub:'UAE',       emoji:'🏙️', g:['#222222','#3C3C3C'] },
// // // // //   { id:'t5', city:'Maldives',  sub:'South Asia',emoji:'🏝️', g:['#1A1A1A','#303030'] },
// // // // // ];

// // // // // const aiPhrases = ['Discover the world...', 'Find hidden gems...', 'Plan your adventure...', 'Explore smarter...'];

// // // // // /* ═══ ✈ Flying Airplane ══════════════════════════ */
// // // // // const FlyingPlane = ({ animVal, top, color }) => {
// // // // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[-60, width+60] });
// // // // //   const ty = animVal.interpolate({ inputRange:[0,0.5,1], outputRange:[0,-18,0] });
// // // // //   const op = animVal.interpolate({ inputRange:[0,0.05,0.95,1], outputRange:[0,1,1,0] });
// // // // //   return (
// // // // //     <Animated.View style={[
// // // // //       styles.bgPlane,
// // // // //       { top, opacity:op, transform:[{translateX:tx},{translateY:ty}] }
// // // // //     ]}>
// // // // //       <Ionicons name="airplane" size={18} color={color} />
// // // // //       {/* Dashed trail dots */}
// // // // //       {[-20,-36,-52,-68].map(x => (
// // // // //         <View key={x} style={[styles.trailDot, { right:-x, opacity: Math.abs(x)/80, backgroundColor:color }]} />
// // // // //       ))}
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══ 📍 Pulsing Location Pin ════════════════════ */
// // // // // const LocationPin = ({ x, y, delay, color, pulseVal }) => {
// // // // //   const ringScale = pulseVal.interpolate({ inputRange:[0,1], outputRange:[1, 2.2] });
// // // // //   const ringOp    = pulseVal.interpolate({ inputRange:[0,1], outputRange:[0.6, 0] });
// // // // //   return (
// // // // //     <View style={[styles.bgPin, { left:x, top:y }]}>
// // // // //       <Animated.View style={[styles.pinRing, { width:28, height:28, borderRadius:14,
// // // // //         borderColor:color, transform:[{scale:ringScale}], opacity:ringOp }]} />
// // // // //       <View style={[styles.pinDot, { backgroundColor:color }]} />
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // /* ═══ ☁ Drifting Cloud ═══════════════════════════ */
// // // // // const DriftCloud = ({ animVal, top, size=1, opacity=0.07 }) => {
// // // // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[width+100, -300] });
// // // // //   return (
// // // // //     <Animated.View style={[styles.bgCloud, { top, opacity, transform:[{translateX:tx},{scale:size}] }]}>
// // // // //       <View style={[styles.cloudBody, { width:80, height:30 }]} />
// // // // //       <View style={[styles.cloudPuff, { width:44, height:44, top:-20, left:10 }]} />
// // // // //       <View style={[styles.cloudPuff, { width:34, height:34, top:-14, left:36 }]} />
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══ Shimmer Effect ════════════════════════════════ */
// // // // // const Shimmer = ({ w, h, br=10 }) => {
// // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // //   useEffect(() => {
// // // // //     Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
// // // // //   }, []);
// // // // //   const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w, w] });
// // // // //   return (
// // // // //     <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#222222', overflow:'hidden' }}>
// // // // //       <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
// // // // //         <LinearGradient colors={['transparent','#FFFFFF12','transparent']} start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
// // // // //       </Animated.View>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // /* ═══ Animated Number Counter ═══════════════════════ */
// // // // // const Counter = ({ target, suffix = '', color }) => {
// // // // //   const [val, setVal] = useState(0);
// // // // //   useEffect(() => {
// // // // //     let start = 0;
// // // // //     const num = parseFloat(target);
// // // // //     const step = num / 40;
// // // // //     const t = setInterval(() => {
// // // // //       start += step;
// // // // //       if (start >= num) { setVal(num); clearInterval(t); }
// // // // //       else setVal(Math.floor(start * 10) / 10);
// // // // //     }, 35);
// // // // //     return () => clearInterval(t);
// // // // //   }, []);
// // // // //   return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
// // // // // };

// // // // // /* ═══ Glow Dot ══════════════════════════════════════ */
// // // // // const GlowDot = ({ color, size=8, pulseAnim }) => (
// // // // //   <Animated.View style={[styles.glowDot, {
// // // // //     width:size, height:size, borderRadius:size/2,
// // // // //     backgroundColor:color,
// // // // //     shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
// // // // //     transform:[{ scale: pulseAnim }],
// // // // //   }]} />
// // // // // );

// // // // // /* ═══ City Card ═════════════════════════════════════ */
// // // // // const CityCard = ({ item, index, query }) => {
// // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // //   const sc = useRef(new Animated.Value(0.8)).current;
// // // // //   const sl = useRef(new Animated.Value(50)).current;
// // // // //   useEffect(() => {
// // // // //     Animated.sequence([
// // // // //       Animated.delay(index * 100),
// // // // //       Animated.parallel([
// // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
// // // // //         Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
// // // // //         Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
// // // // //       ]),
// // // // //     ]).start();
// // // // //   }, []);
// // // // //   return (
// // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
// // // // //       <View style={styles.cityCard}>
// // // // //         <Image source={{ uri: item.url }} style={styles.cityImg} />
// // // // //         {/* Aurora tint overlay */}
// // // // //         <LinearGradient
// // // // //           colors={['transparent','rgba(255,255,255,0.05)','rgba(0,0,0,0.90)']}
// // // // //           style={styles.cityGrad}
// // // // //         >
// // // // //           <View style={styles.cityTopRow}>
// // // // //             <View style={[styles.liveChip, { borderColor: T.mint+'60' }]}>
// // // // //               <View style={[styles.liveDot, { backgroundColor: T.mint, shadowColor: T.mint }]} />
// // // // //               <Text style={[styles.liveChipTxt, { color: T.mintL }]}>LIVE</Text>
// // // // //             </View>
// // // // //           </View>
// // // // //           <Text style={styles.cityName}>{query}</Text>
// // // // //           <View style={styles.cityMeta}>
// // // // //             <Ionicons name="camera-outline" size={11} color={T.t3} />
// // // // //             <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
// // // // //           </View>
// // // // //         </LinearGradient>
// // // // //         {/* Mint corner accent */}
// // // // //         <View style={[styles.cornerAccent, { borderColor: T.mint }]} />
// // // // //       </View>
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══ Trend Card ════════════════════════════════════ */
// // // // // const TrendCard = ({ item, index }) => {
// // // // //   const op = useRef(new Animated.Value(0)).current;
// // // // //   const sc = useRef(new Animated.Value(0.88)).current;
// // // // //   useEffect(() => {
// // // // //     Animated.sequence([
// // // // //       Animated.delay(index * 90),
// // // // //       Animated.parallel([
// // // // //         Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
// // // // //         Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
// // // // //       ]),
// // // // //     ]).start();
// // // // //   }, []);
// // // // //   return (
// // // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
// // // // //       <TouchableOpacity activeOpacity={0.82}>
// // // // //         <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
// // // // //           <Text style={styles.trendEmoji}>{item.emoji}</Text>
// // // // //           <Text style={styles.trendCity}>{item.city}</Text>
// // // // //           <Text style={styles.trendSub}>{item.sub}</Text>
// // // // //           <View style={styles.trendBadge}>
// // // // //             <Ionicons name="trending-up" size={10} color="#FFF" />
// // // // //             <Text style={styles.trendBadgeTxt}>Trending</Text>
// // // // //           </View>
// // // // //           {/* Glass circle */}
// // // // //           <View style={styles.trendCircle} />
// // // // //         </LinearGradient>
// // // // //       </TouchableOpacity>
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══ Particle ══════════════════════════════════════ */
// // // // // const Particle = ({ x, y, delay, color }) => {
// // // // //   const a = useRef(new Animated.Value(0)).current;
// // // // //   useEffect(() => {
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.delay(delay),
// // // // //       Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
// // // // //       Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //   }, []);
// // // // //   return (
// // // // //     <Animated.View style={[styles.particle, {
// // // // //       left:x, top:y,
// // // // //       opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
// // // // //       transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
// // // // //     }]}>
// // // // //       <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
// // // // //     </Animated.View>
// // // // //   );
// // // // // };

// // // // // /* ═══════════════════════════════════════════════════
// // // // //    MAIN SCREEN
// // // // // ═══════════════════════════════════════════════════ */
// // // // // export default function HomeScreen({ navigation }) {
// // // // //   const [query,     setQuery]     = useState('');
// // // // //   const [images,    setImages]    = useState([]);
// // // // //   const [loading,   setLoading]   = useState(false);
// // // // //   const [particles, setParticles] = useState([]);
// // // // //   const [focused,   setFocused]   = useState(false);
// // // // //   const [imgKey,    setImgKey]    = useState(0);
// // // // //   const [aiText,    setAiText]    = useState('');
// // // // //   const inputRef = useRef(null);

// // // // //   const fade   = useRef(new Animated.Value(0)).current;
// // // // //   const slideY = useRef(new Animated.Value(40)).current;
// // // // //   const pulse  = useRef(new Animated.Value(0)).current;
// // // // //   const float  = useRef(new Animated.Value(0)).current;
// // // // //   const spin   = useRef(new Animated.Value(0)).current;
// // // // //   const aurora = useRef(new Animated.Value(0)).current;
// // // // //   // Travel bg animations
// // // // //   const plane1  = useRef(new Animated.Value(0)).current;
// // // // //   const plane2  = useRef(new Animated.Value(0)).current;
// // // // //   const pin1    = useRef(new Animated.Value(0)).current;
// // // // //   const cloud1  = useRef(new Animated.Value(0)).current;
// // // // //   const cloud2  = useRef(new Animated.Value(0)).current;
// // // // //   const compass = useRef(new Animated.Value(0)).current;
// // // // //   const phraseIdx = useRef(0);

// // // // //   useEffect(() => {
// // // // //     Animated.parallel([
// // // // //       Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
// // // // //       Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
// // // // //     ]).start();

// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
// // // // //       Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
// // // // //       Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
// // // // //     // Aurora shift
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
// // // // //       Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
// // // // //     ])).start();

// // // // //     // ✈ Airplane 1 — slow crossing
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(plane1, { toValue:1, duration:9000, useNativeDriver:true }),
// // // // //       Animated.delay(4000),
// // // // //       Animated.timing(plane1, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //       Animated.delay(3000),
// // // // //     ])).start();
// // // // //     // ✈ Airplane 2 — offset crossing
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.delay(6000),
// // // // //       Animated.timing(plane2, { toValue:1, duration:11000, useNativeDriver:true }),
// // // // //       Animated.delay(2000),
// // // // //       Animated.timing(plane2, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     // 📍 Pin pulse
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(pin1, { toValue:1, duration:1500, useNativeDriver:true }),
// // // // //       Animated.timing(pin1, { toValue:0, duration:600, useNativeDriver:true }),
// // // // //       Animated.delay(2000),
// // // // //     ])).start();
// // // // //     // ☁ Cloud drift 1
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.timing(cloud1, { toValue:1, duration:28000, useNativeDriver:true }),
// // // // //       Animated.timing(cloud1, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     // ☁ Cloud drift 2
// // // // //     Animated.loop(Animated.sequence([
// // // // //       Animated.delay(14000),
// // // // //       Animated.timing(cloud2, { toValue:1, duration:22000, useNativeDriver:true }),
// // // // //       Animated.timing(cloud2, { toValue:0, duration:0, useNativeDriver:true }),
// // // // //     ])).start();
// // // // //     // 🧭 Compass slow spin
// // // // //     Animated.loop(Animated.timing(compass, { toValue:1, duration:20000, useNativeDriver:true })).start();

// // // // //     // Typewriter
// // // // //     const typePhrase = () => {
// // // // //       const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
// // // // //       const t = setInterval(() => {
// // // // //         i++; setAiText(ph.slice(0,i));
// // // // //         if (i >= ph.length) {
// // // // //           clearInterval(t);
// // // // //           setTimeout(() => { phraseIdx.current = (phraseIdx.current+1)%aiPhrases.length; typePhrase(); }, 2000);
// // // // //         }
// // // // //       }, 55);
// // // // //       return t;
// // // // //     };
// // // // //     const t = typePhrase();
// // // // //     return () => clearInterval(t);
// // // // //   }, []);

// // // // //   const handleSearch = useCallback(async () => {
// // // // //     if (!query.trim()) return;
// // // // //     setParticles(Array.from({length:12}, (_,i) => ({
// // // // //       id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
// // // // //       color:[T.mint,T.purple,T.pink,T.gold,T.sky][i%5],
// // // // //     })));
// // // // //     setLoading(true); setImages([]);
// // // // //     try {
// // // // //       const r = await axios.get(`http://10.98.19.30:3000/api/photos?query=${query}`);
// // // // //       if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
// // // // //     } catch(e) { console.error(e); }
// // // // //     finally { setLoading(false); }
// // // // //   }, [query]);

// // // // //   const spinStr  = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
// // // // //   const floatY   = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
// // // // //   const pulseS   = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
// // // // //   const auroraX  = aurora.interpolate({ inputRange:[0,1], outputRange:[0, 30] });
// // // // //   const auroraO  = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });
// // // // //   const compassR = compass.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });

// // // // //   return (
// // // // //     <SafeAreaView style={styles.root}>
// // // // //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// // // // //       {/* ── TRAVEL BG ANIMATIONS ──────────────────── */}
// // // // //       <View style={StyleSheet.absoluteFill} pointerEvents="none">
// // // // //         <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />

// // // // //         {/* Aurora bands */}
// // // // //         <Animated.View style={[styles.auroraband, {
// // // // //           backgroundColor: T.mint+'0D', top:60, height:220,
// // // // //           transform:[{translateX:auroraX}], opacity:auroraO,
// // // // //         }]} />
// // // // //         <Animated.View style={[styles.auroraband, {
// // // // //           backgroundColor: T.purple+'0A', top:130, height:180,
// // // // //           transform:[{translateX: auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
// // // // //           opacity:auroraO,
// // // // //         }]} />

// // // // //         {/* ✈ Flying planes (Sunset Orange & Sky Blue) */}
// // // // //         <FlyingPlane animVal={plane1} top={120} color={'rgba(255, 107, 74, 0.45)'} />
// // // // //         <FlyingPlane animVal={plane2} top={280} color={'rgba(56, 189, 248, 0.4)'} />

// // // // //         {/* ☁ Drifting clouds */}
// // // // //         <DriftCloud animVal={cloud1} top={80}  size={1.2} opacity={0.07} />
// // // // //         <DriftCloud animVal={cloud2} top={200} size={0.8} opacity={0.05} />

// // // // //         {/* 📍 Pulsing location pins (Sunset, Sky, Coral) */}
// // // // //         <LocationPin x={width*0.15} y={180} color={'rgba(255, 107, 74, 0.6)'} pulseVal={pin1} />
// // // // //         <LocationPin x={width*0.72} y={350} color={'rgba(56, 189, 248, 0.6)'} pulseVal={pin1} />
// // // // //         <LocationPin x={width*0.40} y={520} color={'rgba(244, 63, 94, 0.5)'} pulseVal={pin1} />

// // // // //         {/* Dashed route line connecting pins */}
// // // // //         <View style={styles.routeLine} />

// // // // //         {/* 🧭 Slow-spinning compass rose (corner) */}
// // // // //         <Animated.View style={[styles.bgCompass, { transform:[{rotate:compassR}] }]}>
// // // // //           <Ionicons name="compass-outline" size={140} color={'rgba(255, 255, 255, 0.03)'} />
// // // // //         </Animated.View>

// // // // //         {/* Floating map coordinate dots */}
// // // // //         {[
// // // // //           { x:width*0.1,  y:400, color:'rgba(255, 107, 74, 0.25)' },
// // // // //           { x:width*0.6,  y:160, color:'rgba(56, 189, 248, 0.25)' },
// // // // //           { x:width*0.85, y:480, color:'rgba(244, 63, 94, 0.25)' },
// // // // //           { x:width*0.3,  y:620, color:'rgba(255, 255, 255, 0.15)' },
// // // // //         ].map((d, i) => (
// // // // //           <Animated.View key={i} style={[styles.mapDot, {
// // // // //             left:d.x, top:d.y, backgroundColor:d.color,
// // // // //             transform:[{scale: pulse.interpolate({inputRange:[0,1],outputRange:[1,1.5]})}],
// // // // //           }]} />
// // // // //         ))}

// // // // //         {/* Blobs */}
// // // // //         <Animated.View style={[styles.blob, {
// // // // //           backgroundColor: T.mint+'10', width:350, height:350,
// // // // //           top:-100, right:-80, transform:[{translateY:floatY}],
// // // // //         }]} />
// // // // //         <Animated.View style={[styles.blob, {
// // // // //           backgroundColor: T.purple+'0C', width:280, height:280,
// // // // //           bottom:350, left:-90, transform:[{translateY:floatY}],
// // // // //         }]} />
// // // // //         <Animated.View style={[styles.blob, {
// // // // //           backgroundColor: T.pink+'08', width:200, height:200,
// // // // //           bottom:100, right:40, transform:[{translateY:floatY}],
// // // // //         }]} />

// // // // //         {/* Floating decorative rings */}
// // // // //         <Animated.View style={[styles.decRing, {
// // // // //           borderColor: T.mint+'18', width:260, height:260, borderRadius:130,
// // // // //           top:80, right:-100, transform:[{translateY:floatY}],
// // // // //         }]} />
// // // // //         <Animated.View style={[styles.decRing, {
// // // // //           borderColor: T.purple+'14', width:180, height:180, borderRadius:90,
// // // // //           bottom:200, left:-60, transform:[{translateY:floatY}],
// // // // //         }]} />
// // // // //       </View>

// // // // //       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

// // // // //         {/* ── HEADER ──────────────────────────────── */}
// // // // //         <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <View style={styles.header}>
// // // // //             <View>
// // // // //               <View style={styles.aiBadge}>
// // // // //                 <GlowDot color={T.mint} pulseAnim={pulseS} />
// // // // //                 <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
// // // // //               </View>
// // // // //               <Text style={styles.greet}>Good Evening 🌙</Text>
// // // // //               <View style={styles.nameRow}>
// // // // //                 <Text style={styles.name}>Chaitanya</Text>
// // // // //                 <Text style={styles.nameWave}>👋</Text>
// // // // //               </View>
// // // // //               {/* Aurora name underline */}
// // // // //               <LinearGradient colors={['#FFFFFF','#888888','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
// // // // //             </View>
// // // // //             <View>
// // // // //               <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
// // // // //               <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
// // // // //                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=FFFFFF&size=100' }} style={styles.avatar} />
// // // // //               </LinearGradient>
// // // // //             </View>
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── HERO CARD (unique diagonal) ─────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <View style={styles.heroOuter}>
// // // // //             {/* Triple gradient border effect */}
// // // // //             <LinearGradient colors={['#FFFFFF','#888888','#0F0F0F']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
// // // // //               <View style={styles.heroCard}>
// // // // //                 {/* Background diagonal slice */}
// // // // //                 <LinearGradient
// // // // //                   colors={[T.mint+'20', T.purple+'18', 'transparent']}
// // // // //                   start={{x:0,y:0}} end={{x:1,y:1}}
// // // // //                   style={StyleSheet.absoluteFill}
// // // // //                 />
// // // // //                 <View style={styles.heroContent}>
// // // // //                   <View style={styles.heroLeft}>
// // // // //                     {/* Rotating orbit ring */}
// // // // //                     <View style={styles.orbitWrap}>
// // // // //                       <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
// // // // //                       <View style={[styles.orbitCore, { backgroundColor: T.mint+'30', borderColor: T.mint+'50' }]}>
// // // // //                         <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
// // // // //                       </View>
// // // // //                     </View>
// // // // //                   </View>
// // // // //                   <View style={styles.heroRight}>
// // // // //                     <Text style={styles.heroPre}>⚡ MONO AI ENGINE</Text>
// // // // //                     <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
// // // // //                     <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
// // // // //                       <LinearGradient colors={[T.mint, T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
// // // // //                         <Text style={styles.heroBtnTxt}>Plan Trip</Text>
// // // // //                         <Ionicons name="arrow-forward" size={13} color={T.bg} />
// // // // //                       </LinearGradient>
// // // // //                     </TouchableOpacity>
// // // // //                   </View>
// // // // //                 </View>
// // // // //                 {/* Decorative dots pattern */}
// // // // //                 <View style={styles.dotGrid} pointerEvents="none">
// // // // //                   {Array.from({length:6}).map((_,i) => (
// // // // //                     <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
// // // // //                   ))}
// // // // //                 </View>
// // // // //               </View>
// // // // //             </LinearGradient>
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── SEARCH ──────────────────────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
// // // // //           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
// // // // //           <TouchableOpacity
// // // // //             activeOpacity={1}
// // // // //             onPress={() => inputRef.current && inputRef.current.focus()}
// // // // //             style={[styles.searchBox, focused && { borderColor: T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}
// // // // //           >
// // // // //             <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
// // // // //             <TextInput
// // // // //               ref={inputRef}
// // // // //               placeholder="Where to next?"
// // // // //               placeholderTextColor={T.t3}
// // // // //               style={styles.searchInput}
// // // // //               value={query}
// // // // //               onChangeText={setQuery}
// // // // //               onSubmitEditing={handleSearch}
// // // // //               onFocus={() => setFocused(true)}
// // // // //               onBlur={() => setFocused(false)}
// // // // //               returnKeyType="search"
// // // // //               blurOnSubmit={false}
// // // // //               autoCorrect={false}
// // // // //               autoCapitalize="none"
// // // // //               underlineColorAndroid="transparent"
// // // // //             />
// // // // //             {loading
// // // // //               ? <ActivityIndicator size="small" color={T.mint} />
// // // // //               : query.length > 0 && (
// // // // //                 <TouchableOpacity onPress={handleSearch}>
// // // // //                   <LinearGradient colors={[T.mint, T.mintD]} style={styles.goBtn}>
// // // // //                     <Ionicons name="arrow-forward" size={14} color={T.bg} />
// // // // //                   </LinearGradient>
// // // // //                 </TouchableOpacity>
// // // // //               )
// // // // //             }
// // // // //           </TouchableOpacity>
// // // // //           {/* Quick search tags */}
// // // // //           <View style={styles.tagsRow}>
// // // // //             {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
// // // // //               <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
// // // // //                 <Text style={styles.tagPillTxt}>{t}</Text>
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── CITY RESULTS ────────────────────────── */}
// // // // //         {(images.length > 0 || loading) && (
// // // // //           <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // //             <View style={styles.secRow}>
// // // // //               <View style={styles.secLeft}>
// // // // //                 <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
// // // // //                 <Text style={styles.secTitle}> Results for "{query}"</Text>
// // // // //               </View>
// // // // //               <Text style={styles.secBadge}>{images.length} photos</Text>
// // // // //             </View>
// // // // //             {loading
// // // // //               ? <View style={styles.loadBox}>
// // // // //                   <View style={styles.shimmerRow}>
// // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // // //                   </View>
// // // // //                 </View>
// // // // //               : <FlatList
// // // // //                   key={imgKey} data={images} horizontal
// // // // //                   showsHorizontalScrollIndicator={false}
// // // // //                   keyExtractor={it => it.id}
// // // // //                   snapToInterval={width*0.72+14}
// // // // //                   decelerationRate="fast"
// // // // //                   contentContainerStyle={{ paddingRight:20 }}
// // // // //                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
// // // // //                 />
// // // // //             }
// // // // //           </Animated.View>
// // // // //         )}

// // // // //         {/* ── QUICK ACCESS —Bento style ────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <Text style={styles.secTitle2}>Quick Access</Text>
// // // // //           <View style={styles.bento}>
// // // // //             {shortcuts.map((item) => (
// // // // //               <TouchableOpacity
// // // // //                 key={item.id}
// // // // //                 style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
// // // // //                 activeOpacity={0.75}
// // // // //                 onPress={() => {
// // // // //                   if (item.name==='Hotels')  navigation.navigate('HotelSearch');
// // // // //                   if (item.name==='Budget')  navigation.navigate('Budget');
// // // // //                   if (item.name==='Planner') navigation.navigate('Planner');
// // // // //                   if (item.name==='News')    navigation.navigate('News');
// // // // //                   if (item.name==='Map')     navigation.navigate('LiveNavigation');
// // // // //                 }}
// // // // //               >
// // // // //                 <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
// // // // //                   <Ionicons name={item.icon} size={22} color={item.c} />
// // // // //                 </View>
// // // // //                 <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
// // // // //                 {/* Corner dot accent */}
// // // // //                 <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
// // // // //               </TouchableOpacity>
// // // // //             ))}
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── TRENDING ────────────────────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <View style={styles.secRow}>
// // // // //             <Text style={styles.secTitle2}>Trending 🔥</Text>
// // // // //             <TouchableOpacity>
// // // // //               <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
// // // // //             </TouchableOpacity>
// // // // //           </View>
// // // // //           <FlatList
// // // // //             data={trending} horizontal showsHorizontalScrollIndicator={false}
// // // // //             keyExtractor={it => it.id}
// // // // //             contentContainerStyle={{ gap:12, paddingRight:20 }}
// // // // //             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
// // // // //           />
// // // // //         </Animated.View>

// // // // //         {/* ── STATS — Counter animation ────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <Text style={styles.secTitle2}>By the Numbers</Text>
// // // // //           <View style={styles.statsGrid}>
// // // // //             {[
// // // // //               { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
// // // // //               { label:'AI Accuracy',   num:'98.7', suf:'%',  color:T.purple },
// // // // //               { label:'Destinations',  num:'190',  suf:'+',  color:T.pink },
// // // // //               { label:'Happy Users',   num:'500',  suf:'K',  color:T.gold },
// // // // //             ].map((s,i) => (
// // // // //               <View key={i} style={[styles.statCard, { borderColor: s.color+'30' }]}>
// // // // //                 <LinearGradient colors={[s.color+'18', 'transparent']} style={StyleSheet.absoluteFill} />
// // // // //                 <Counter target={s.num} suffix={s.suf} color={s.color} />
// // // // //                 <Text style={styles.statLabel}>{s.label}</Text>
// // // // //               </View>
// // // // //             ))}
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── WEATHER WIDGET ──────────────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // // //           <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
// // // // //             {/* Mint strip */}
// // // // //             <LinearGradient colors={['#FFFFFF','#888888','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
// // // // //             <View style={styles.weatherBody}>
// // // // //               <View>
// // // // //                 <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
// // // // //                 <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
// // // // //                 <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
// // // // //               </View>
// // // // //               <View style={styles.wtRight}>
// // // // //                 <Text style={styles.wtEmoji}>⛅</Text>
// // // // //                 <View style={styles.wtMinis}>
// // // // //                   {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
// // // // //                     <View key={v} style={styles.wtMini}>
// // // // //                       <Text>{ic}</Text>
// // // // //                       <Text style={styles.wtMiniV}>{v}</Text>
// // // // //                     </View>
// // // // //                   ))}
// // // // //                 </View>
// // // // //               </View>
// // // // //             </View>
// // // // //             <View style={[styles.wtLine, { backgroundColor:T.border }]} />
// // // // //             <View style={styles.wtForecast}>
// // // // //               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
// // // // //                 <View key={d} style={styles.wtDay}>
// // // // //                   <Text style={styles.wtDayL}>{d}</Text>
// // // // //                   <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
// // // // //                   <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
// // // // //                 </View>
// // // // //               ))}
// // // // //             </View>
// // // // //           </View>
// // // // //         </Animated.View>

// // // // //         {/* ── AI PICK BANNER ──────────────────────── */}
// // // // //         <Animated.View style={[styles.section, { opacity:fade }]}>
// // // // //           <LinearGradient colors={['#041228','#222222','#1D4060']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
// // // // //             <View style={styles.pickInner}>
// // // // //               <View style={styles.pickTopRow}>
// // // // //                 <View style={styles.pickBadge}>
// // // // //                   <Text style={styles.pickBadgeTxt}>✦ AI PICK</Text>
// // // // //                 </View>
// // // // //                 <Text style={styles.pickDot}>TODAY</Text>
// // // // //               </View>
// // // // //               <Text style={styles.pickTitle}>Santorini, Greece</Text>
// // // // //               <Text style={styles.pickSub}>Perfect season · April – June</Text>
// // // // //               <View style={styles.pickTagsRow}>
// // // // //                 {['Romantic','Beach','Scenic'].map(t=>(
// // // // //                   <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
// // // // //                 ))}
// // // // //               </View>
// // // // //             </View>
// // // // //             <Text style={styles.pickEmoji}>🏛️</Text>
// // // // //             <View style={styles.pickCircle1} />
// // // // //             <View style={styles.pickCircle2} />
// // // // //           </LinearGradient>
// // // // //         </Animated.View>

// // // // //         {/* ── FOOTER ──────────────────────────────── */}
// // // // //         <Animated.View style={[styles.footer, { opacity:fade }]}>
// // // // //           <LinearGradient colors={[T.mint+'15', T.purple+'10']} style={styles.footerCard}>
// // // // //             <LinearGradient colors={['#FFFFFF','#888888','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
// // // // //             <Animated.View style={{ transform:[{rotate:spinStr}] }}>
// // // // //               <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
// // // // //             </Animated.View>
// // // // //             <Text style={styles.footerTitle}>Mono Travel AI</Text>
// // // // //             <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
// // // // //             <View style={styles.footerPills}>
// // // // //               {[T.mint, T.purple, T.pink, T.gold].map(c=>(
// // // // //                 <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
// // // // //               ))}
// // // // //             </View>
// // // // //           </LinearGradient>
// // // // //         </Animated.View>

// // // // //         <View style={{ height:50 }} />
// // // // //       </ScrollView>
// // // // //     </SafeAreaView>
// // // // //   );
// // // // // }

// // // // // /* ═══ Styles ════════════════════════════════════════ */
// // // // // const BW = (width - 72) / 3;

// // // // // const styles = StyleSheet.create({
// // // // //   root:   { flex:1, backgroundColor:T.bg },
// // // // //   scroll: { paddingHorizontal:20, paddingTop:12 },
// // // // //   section:{ marginBottom:26 },

// // // // //   // Background
// // // // //   auroraband:{ position:'absolute', left:0, right:0, borderRadius:40 },
// // // // //   blob:      { position:'absolute', borderRadius:9999 },
// // // // //   decRing:   { position:'absolute', borderWidth:1 },
// // // // //   bgPlane:   { position:'absolute', left:0, flexDirection:'row', alignItems:'center' },
// // // // //   trailDot:  { position:'absolute', width:3, height:3, borderRadius:1.5 },
// // // // //   bgPin:     { position:'absolute', width:28, height:28, justifyContent:'center', alignItems:'center' },
// // // // //   pinRing:   { position:'absolute', borderWidth:1.5 },
// // // // //   pinDot:    { width:8, height:8, borderRadius:4, shadowOpacity:1, shadowRadius:5 },
// // // // //   bgCloud:   { position:'absolute', right:0 },
// // // // //   cloudBody: { backgroundColor:'rgba(255,255,255,0.8)', borderRadius:20 },
// // // // //   cloudPuff: { position:'absolute', backgroundColor:'rgba(255,255,255,0.8)', borderRadius:22 },
// // // // //   bgCompass: { position:'absolute', bottom:-40, left:-40, opacity:0.6 },
// // // // //   mapDot:    { position:'absolute', width:4, height:4, borderRadius:2 },
// // // // //   routeLine: { position:'absolute', width:300, height:300, borderRadius:150, borderWidth:1, borderStyle:'dashed', borderColor:'rgba(255,255,255,0.03)', top:100, left:-100, transform:[{rotate:'30deg'}] },

// // // // //   // Header
// // // // //   headerWrap:{ marginBottom:24 },
// // // // //   header:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
// // // // //   aiBadge:   { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
// // // // //   aiBadgeTxt:{ color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
// // // // //   glowDot:   {},
// // // // //   greet:     { color:T.t2, fontSize:13, fontWeight:'500' },
// // // // //   nameRow:   { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
// // // // //   name:      { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
// // // // //   nameWave:  { fontSize:26 },
// // // // //   nameBar:   { width:60, height:3, borderRadius:2, marginTop:10 },
// // // // //   avatarHalo:{ position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
// // // // //   avatarGrad:{ width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
// // // // //   avatar:    { width:55, height:55, borderRadius:28 },

// // // // //   // Hero
// // // // //   heroOuter: { borderRadius:22, overflow:'hidden' },
// // // // //   heroBorder:{ padding:1.5, borderRadius:22 },
// // // // //   heroCard:  { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
// // // // //   heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
// // // // //   heroLeft:  {},
// // // // //   orbitWrap: { width:60, height:60, justifyContent:'center', alignItems:'center' },
// // // // //   orbit:     { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
// // // // //   orbitCore: { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
// // // // //   heroRight: { flex:1 },
// // // // //   heroPre:   { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
// // // // //   heroType:  { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
// // // // //   heroBtn:   { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
// // // // //   heroBtnG:  { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
// // // // //   heroBtnTxt:{ color:T.bg, fontSize:13, fontWeight:'800' },
// // // // //   dotGrid:   { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
// // // // //   dotGridItem:{ width:5, height:5, borderRadius:3 },

// // // // //   // Search
// // // // //   searchBox: { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
// // // // //                borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
// // // // //   searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
// // // // //   goBtn:     { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
// // // // //   tagsRow:   { flexDirection:'row', gap:8, flexWrap:'wrap' },
// // // // //   tagPill:   { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
// // // // //   tagPillTxt:{ color:T.t2, fontSize:11, fontWeight:'600' },
// // // // //   particle:  { position:'absolute' },
// // // // //   pDot:      { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

// // // // //   // City cards
// // // // //   cityCard:  { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
// // // // //   cityImg:   { width:'100%', height:'100%' },
// // // // //   cityGrad:  { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
// // // // //   cityTopRow:{ position:'absolute', top:14, left:14 },
// // // // //   liveChip:  { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
// // // // //   liveDot:   { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
// // // // //   liveChipTxt:{ fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // //   cityName:  { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
// // // // //   cityMeta:  { flexDirection:'row', alignItems:'center' },
// // // // //   cityMetaTxt:{ color:T.t3, fontSize:11 },
// // // // //   cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
// // // // //   shimmerRow:{ flexDirection:'row', gap:14 },
// // // // //   loadBox:   { paddingVertical:10 },
// // // // //   secRow:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
// // // // //   secLeft:   { flexDirection:'row', alignItems:'center' },
// // // // //   secTitle:  { color:T.t1, fontSize:15, fontWeight:'700' },
// // // // //   secTitle2: { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
// // // // //   secBadge:  { color:T.t3, fontSize:11 },
// // // // //   seeAll:    { fontSize:13, fontWeight:'600' },

// // // // //   // Bento grid
// // // // //   bento:     { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // //   bentoItem: { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
// // // // //                alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
// // // // //   bentoIcon: { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
// // // // //   bentoTxt:  { fontSize:12, fontWeight:'700' },
// // // // //   bentoDot:  { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },

// // // // //   // Trending
// // // // //   trendCard: { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
// // // // //   trendEmoji:{ fontSize:30, marginBottom:4 },
// // // // //   trendCity: { color:'#FFF', fontSize:16, fontWeight:'800' },
// // // // //   trendSub:  { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
// // // // //   trendBadge:{ flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)', alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
// // // // //   trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
// // // // //   trendCircle:{ position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20, backgroundColor:'rgba(255,255,255,0.08)' },

// // // // //   // Stats
// // // // //   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // // //   statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
// // // // //   statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
// // // // //   statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

// // // // //   // Weather
// // // // //   weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
// // // // //   weatherStrip: { height:2 },
// // // // //   weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
// // // // //   wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
// // // // //   wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
// // // // //   wtDeg:     { fontSize:24, fontWeight:'400' },
// // // // //   wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
// // // // //   wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
// // // // //   wtEmoji:   { fontSize:44 },
// // // // //   wtMinis:   { flexDirection:'row', gap:10 },
// // // // //   wtMini:    { alignItems:'center', gap:2 },
// // // // //   wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // //   wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
// // // // //   wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
// // // // //   wtDay:     { alignItems:'center', gap:4 },
// // // // //   wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
// // // // //   wtDayIc:   { fontSize:18 },
// // // // //   wtDayT:    { fontSize:12, fontWeight:'700' },

// // // // //   // Pick
// // // // //   pickCard:  { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
// // // // //   pickInner: { flex:1 },
// // // // //   pickTopRow:{ flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
// // // // //   pickBadge: { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
// // // // //   pickBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // // //   pickDot:   { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
// // // // //   pickTitle: { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
// // // // //   pickSub:   { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
// // // // //   pickTagsRow:{ flexDirection:'row', gap:6 },
// // // // //   pickTag:   { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
// // // // //   pickTagTxt:{ color:'#FFF', fontSize:10, fontWeight:'600' },
// // // // //   pickEmoji: { fontSize:54 },
// // // // //   pickCircle1:{ position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
// // // // //   pickCircle2:{ position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

// // // // //   // Footer
// // // // //   footer:     { marginBottom:10 },
// // // // //   footerCard: { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
// // // // //   footerStrip:{ position:'absolute', top:0, left:0, right:0, height:2 },
// // // // //   footerTitle:{ color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
// // // // //   footerSub:  { color:T.t3, fontSize:11, letterSpacing:1 },
// // // // //   footerPills:{ flexDirection:'row', gap:8, marginTop:10 },
// // // // //   fpill:      { width:28, height:6, borderRadius:3 },
// // // // // });






// // // // // new



// // // // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // // // import {
// // // //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// // // //   FlatList, Image, Dimensions, Animated, TextInput,
// // // //   ActivityIndicator, StatusBar,
// // // // } from 'react-native';
// // // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // // import { LinearGradient } from 'expo-linear-gradient';
// // // // import axios from 'axios';

// // // // const { width } = Dimensions.get('window');

// // // // /* ═══════════════════════════════════════════════════
// // // //    ⬛ OBSIDIAN – Design Tokens
// // // //    Palette: Jet Black + Pure White + Platinum + Charcoal
// // // // ═══════════════════════════════════════════════════ */
// // // // const T = {
// // // //   // Surfaces — true black scale
// // // //   bg:      '#050505',   // jet black
// // // //   surf:    '#0C0C0C',   // near black
// // // //   card:    '#131313',   // card
// // // //   card2:   '#1A1A1A',   // elevated card
// // // //   border:  '#242424',   // subtle border
// // // //   border2: '#303030',   // visible border

// // // //   // Tones — crisp monochrome
// // // //   mint:    '#FFFFFF',   // pure white — primary
// // // //   mintL:   '#F0F0F0',   // off-white
// // // //   mintD:   '#C4C4C4',   // platinum
// // // //   purple:  '#909090',   // medium gray
// // // //   purpleL: '#B8B8B8',   // light silver
// // // //   pink:    '#505050',   // dark gray
// // // //   pinkL:   '#787878',   // medium silver
// // // //   gold:    '#E8E8E8',   // near-white
// // // //   sky:     '#D0D0D0',   // silver

// // // //   // Text
// // // //   t1: '#FFFFFF',    // primary — pure white
// // // //   t2: '#B0B0B0',    // secondary — silver
// // // //   t3: '#4A4A4A',    // muted — charcoal
// // // // };

// // // // /* ═══ Data ══════════════════════════════════════════ */
// // // // const shortcuts = [
// // // //   { id:'1', name:'Budget',  icon:'wallet-outline',    c: '#FFFFFF', bg:'#111111' },
// // // //   { id:'2', name:'Flights', icon:'airplane-outline',  c: '#FFFFFF', bg:'#0C0C0C' },
// // // //   { id:'3', name:'Hotels',  icon:'bed-outline',        c: '#E8E8E8', bg:'#151515' },
// // // //   { id:'4', name:'Planner', icon:'calendar-outline',  c: '#C4C4C4', bg:'#0E0E0E' },
// // // //   { id:'5', name:'News',    icon:'newspaper-outline', c: '#D0D0D0', bg:'#121212' },
// // // //   { id:'6', name:'Map',     icon:'navigate-outline',  c: '#B8B8B8', bg:'#141414' },
// // // // ];

// // // // const trending = [
// // // //   { id:'t1', city:'Tokyo',     sub:'Japan',      emoji:'🗼', g:['#151515','#2C2C2C'] },
// // // //   { id:'t2', city:'Santorini', sub:'Greece',    emoji:'🏛️', g:['#282828','#404040'] },
// // // //   { id:'t3', city:'Bali',      sub:'Indonesia', emoji:'🌴', g:['#1E1E1E','#383838'] },
// // // //   { id:'t4', city:'Dubai',     sub:'UAE',       emoji:'🏙️', g:['#222222','#3C3C3C'] },
// // // //   { id:'t5', city:'Maldives',  sub:'South Asia',emoji:'🏝️', g:['#1A1A1A','#303030'] },
// // // // ];

// // // // const aiPhrases = ['Discover the world...', 'Find hidden gems...', 'Plan your adventure...', 'Explore smarter...'];

// // // // /* ═══ ✈ Flying Airplane ══════════════════════════ */
// // // // const FlyingPlane = ({ animVal, top, color }) => {
// // // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[-60, width+60] });
// // // //   const ty = animVal.interpolate({ inputRange:[0,0.5,1], outputRange:[0,-18,0] });
// // // //   const op = animVal.interpolate({ inputRange:[0,0.05,0.95,1], outputRange:[0,1,1,0] });
// // // //   return (
// // // //     <Animated.View style={[
// // // //       styles.bgPlane,
// // // //       { top, opacity:op, transform:[{translateX:tx},{translateY:ty}] }
// // // //     ]}>
// // // //       <Ionicons name="airplane" size={18} color={color} />
// // // //       {/* Dashed trail dots */}
// // // //       {[-20,-36,-52,-68].map(x => (
// // // //         <View key={x} style={[styles.trailDot, { right:-x, opacity: Math.abs(x)/80, backgroundColor:color }]} />
// // // //       ))}
// // // //     </Animated.View>
// // // //   );
// // // // };

// // // // /* ═══ 📍 Pulsing Location Pin ════════════════════ */
// // // // const LocationPin = ({ x, y, delay, color, pulseVal }) => {
// // // //   const ringScale = pulseVal.interpolate({ inputRange:[0,1], outputRange:[1, 2.2] });
// // // //   const ringOp    = pulseVal.interpolate({ inputRange:[0,1], outputRange:[0.6, 0] });
// // // //   return (
// // // //     <View style={[styles.bgPin, { left:x, top:y }]}>
// // // //       <Animated.View style={[styles.pinRing, { width:28, height:28, borderRadius:14,
// // // //         borderColor:color, transform:[{scale:ringScale}], opacity:ringOp }]} />
// // // //       <View style={[styles.pinDot, { backgroundColor:color }]} />
// // // //     </View>
// // // //   );
// // // // };

// // // // /* ═══ ☁ Drifting Cloud ═══════════════════════════ */
// // // // const DriftCloud = ({ animVal, top, size=1, opacity=0.07 }) => {
// // // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[width+100, -300] });
// // // //   return (
// // // //     <Animated.View style={[styles.bgCloud, { top, opacity, transform:[{translateX:tx},{scale:size}] }]}>
// // // //       <View style={[styles.cloudBody, { width:80, height:30 }]} />
// // // //       <View style={[styles.cloudPuff, { width:44, height:44, top:-20, left:10 }]} />
// // // //       <View style={[styles.cloudPuff, { width:34, height:34, top:-14, left:36 }]} />
// // // //     </Animated.View>
// // // //   );
// // // // };

// // // // /* ═══ Shimmer Effect ════════════════════════════════ */
// // // // const Shimmer = ({ w, h, br=10 }) => {
// // // //   const a = useRef(new Animated.Value(0)).current;
// // // //   useEffect(() => {
// // // //     Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
// // // //   }, []);
// // // //   const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w, w] });
// // // //   return (
// // // //     <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#222222', overflow:'hidden' }}>
// // // //       <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
// // // //         <LinearGradient colors={['transparent','#FFFFFF12','transparent']} start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
// // // //       </Animated.View>
// // // //     </View>
// // // //   );
// // // // };

// // // // /* ═══ Animated Number Counter ═══════════════════════ */
// // // // const Counter = ({ target, suffix = '', color }) => {
// // // //   const [val, setVal] = useState(0);
// // // //   useEffect(() => {
// // // //     let start = 0;
// // // //     const num = parseFloat(target);
// // // //     const step = num / 40;
// // // //     const t = setInterval(() => {
// // // //       start += step;
// // // //       if (start >= num) { setVal(num); clearInterval(t); }
// // // //       else setVal(Math.floor(start * 10) / 10);
// // // //     }, 35);
// // // //     return () => clearInterval(t);
// // // //   }, []);
// // // //   return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
// // // // };

// // // // /* ═══ Glow Dot ══════════════════════════════════════ */
// // // // const GlowDot = ({ color, size=8, pulseAnim }) => (
// // // //   <Animated.View style={[styles.glowDot, {
// // // //     width:size, height:size, borderRadius:size/2,
// // // //     backgroundColor:color,
// // // //     shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
// // // //     transform:[{ scale: pulseAnim }],
// // // //   }]} />
// // // // );

// // // // /* ═══ City Card ═════════════════════════════════════ */
// // // // const CityCard = ({ item, index, query }) => {
// // // //   const op = useRef(new Animated.Value(0)).current;
// // // //   const sc = useRef(new Animated.Value(0.8)).current;
// // // //   const sl = useRef(new Animated.Value(50)).current;
// // // //   useEffect(() => {
// // // //     Animated.sequence([
// // // //       Animated.delay(index * 100),
// // // //       Animated.parallel([
// // // //         Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
// // // //         Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
// // // //         Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
// // // //       ]),
// // // //     ]).start();
// // // //   }, []);
// // // //   return (
// // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
// // // //       <View style={styles.cityCard}>
// // // //         <Image source={{ uri: item.url }} style={styles.cityImg} />
// // // //         {/* Aurora tint overlay */}
// // // //         <LinearGradient
// // // //           colors={['transparent','rgba(255,255,255,0.05)','rgba(0,0,0,0.90)']}
// // // //           style={styles.cityGrad}
// // // //         >
// // // //           <View style={styles.cityTopRow}>
// // // //             <View style={[styles.liveChip, { borderColor: T.mint+'60' }]}>
// // // //               <View style={[styles.liveDot, { backgroundColor: T.mint, shadowColor: T.mint }]} />
// // // //               <Text style={[styles.liveChipTxt, { color: T.mintL }]}>LIVE</Text>
// // // //             </View>
// // // //           </View>
// // // //           <Text style={styles.cityName}>{query}</Text>
// // // //           <View style={styles.cityMeta}>
// // // //             <Ionicons name="camera-outline" size={11} color={T.t3} />
// // // //             <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
// // // //           </View>
// // // //         </LinearGradient>
// // // //         {/* Mint corner accent */}
// // // //         <View style={[styles.cornerAccent, { borderColor: T.mint }]} />
// // // //       </View>
// // // //     </Animated.View>
// // // //   );
// // // // };

// // // // /* ═══ Trend Card ════════════════════════════════════ */
// // // // const TrendCard = ({ item, index }) => {
// // // //   const op = useRef(new Animated.Value(0)).current;
// // // //   const sc = useRef(new Animated.Value(0.88)).current;
// // // //   useEffect(() => {
// // // //     Animated.sequence([
// // // //       Animated.delay(index * 90),
// // // //       Animated.parallel([
// // // //         Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
// // // //         Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
// // // //       ]),
// // // //     ]).start();
// // // //   }, []);
// // // //   return (
// // // //     <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
// // // //       <TouchableOpacity activeOpacity={0.82}>
// // // //         <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
// // // //           <Text style={styles.trendEmoji}>{item.emoji}</Text>
// // // //           <Text style={styles.trendCity}>{item.city}</Text>
// // // //           <Text style={styles.trendSub}>{item.sub}</Text>
// // // //           <View style={styles.trendBadge}>
// // // //             <Ionicons name="trending-up" size={10} color="#FFF" />
// // // //             <Text style={styles.trendBadgeTxt}>Trending</Text>
// // // //           </View>
// // // //           {/* Glass circle */}
// // // //           <View style={styles.trendCircle} />
// // // //         </LinearGradient>
// // // //       </TouchableOpacity>
// // // //     </Animated.View>
// // // //   );
// // // // };

// // // // /* ═══ Particle ══════════════════════════════════════ */
// // // // const Particle = ({ x, y, delay, color }) => {
// // // //   const a = useRef(new Animated.Value(0)).current;
// // // //   useEffect(() => {
// // // //     Animated.loop(Animated.sequence([
// // // //       Animated.delay(delay),
// // // //       Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
// // // //       Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
// // // //     ])).start();
// // // //   }, []);
// // // //   return (
// // // //     <Animated.View style={[styles.particle, {
// // // //       left:x, top:y,
// // // //       opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
// // // //       transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
// // // //     }]}>
// // // //       <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
// // // //     </Animated.View>
// // // //   );
// // // // };

// // // // /* ═══════════════════════════════════════════════════
// // // //    MAIN SCREEN
// // // // ═══════════════════════════════════════════════════ */
// // // // export default function HomeScreen({ navigation }) {
// // // //   const [query,     setQuery]     = useState('');
// // // //   const [images,    setImages]    = useState([]);
// // // //   const [loading,   setLoading]   = useState(false);
// // // //   const [particles, setParticles] = useState([]);
// // // //   const [focused,   setFocused]   = useState(false);
// // // //   const [imgKey,    setImgKey]    = useState(0);
// // // //   const [aiText,    setAiText]    = useState('');
// // // //   const inputRef = useRef(null);

// // // //   const fade   = useRef(new Animated.Value(0)).current;
// // // //   const slideY = useRef(new Animated.Value(40)).current;
// // // //   const pulse  = useRef(new Animated.Value(0)).current;
// // // //   const float  = useRef(new Animated.Value(0)).current;
// // // //   const spin   = useRef(new Animated.Value(0)).current;
// // // //   const aurora = useRef(new Animated.Value(0)).current;
// // // //   // Travel bg animations
// // // //   const plane1  = useRef(new Animated.Value(0)).current;
// // // //   const plane2  = useRef(new Animated.Value(0)).current;
// // // //   const pin1    = useRef(new Animated.Value(0)).current;
// // // //   const cloud1  = useRef(new Animated.Value(0)).current;
// // // //   const cloud2  = useRef(new Animated.Value(0)).current;
// // // //   const compass = useRef(new Animated.Value(0)).current;
// // // //   const phraseIdx = useRef(0);

// // // //   useEffect(() => {
// // // //     Animated.parallel([
// // // //       Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
// // // //       Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
// // // //     ]).start();

// // // //     Animated.loop(Animated.sequence([
// // // //       Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
// // // //       Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
// // // //     ])).start();
// // // //     Animated.loop(Animated.sequence([
// // // //       Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
// // // //       Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
// // // //     ])).start();
// // // //     Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
// // // //     // Aurora shift
// // // //     Animated.loop(Animated.sequence([
// // // //       Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
// // // //       Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
// // // //     ])).start();

// // // //     // ✈ Airplane 1 — slow crossing
// // // //     Animated.loop(Animated.sequence([
// // // //       Animated.timing(plane1, { toValue:1, duration:9000, useNativeDriver:true }),
// // // //       Animated.delay(4000),
// // // //       Animated.timing(plane1, { toValue:0, duration:0, useNativeDriver:true }),
// // // //       Animated.delay(3000),
// // // //     ])).start();
// // // //     // ✈ Airplane 2 — offset crossing
// // // //     Animated.loop(Animated.sequence([
// // // //       Animated.delay(6000),
// // // //       Animated.timing(plane2, { toValue:1, duration:11000, useNativeDriver:true }),
// // // //       Animated.delay(2000),
// // // //       Animated.timing(plane2, { toValue:0, duration:0, useNativeDriver:true }),
// // // //     ])).start();
// // // //     // 📍 Pin pulse
// // // //     Animated.loop(Animated.sequence([
// // // //       Animated.timing(pin1, { toValue:1, duration:1500, useNativeDriver:true }),
// // // //       Animated.timing(pin1, { toValue:0, duration:600, useNativeDriver:true }),
// // // //       Animated.delay(2000),
// // // //     ])).start();
// // // //     // ☁ Cloud drift 1
// // // //     Animated.loop(Animated.sequence([
// // // //       Animated.timing(cloud1, { toValue:1, duration:28000, useNativeDriver:true }),
// // // //       Animated.timing(cloud1, { toValue:0, duration:0, useNativeDriver:true }),
// // // //     ])).start();
// // // //     // ☁ Cloud drift 2
// // // //     Animated.loop(Animated.sequence([
// // // //       Animated.delay(14000),
// // // //       Animated.timing(cloud2, { toValue:1, duration:22000, useNativeDriver:true }),
// // // //       Animated.timing(cloud2, { toValue:0, duration:0, useNativeDriver:true }),
// // // //     ])).start();
// // // //     // 🧭 Compass slow spin
// // // //     Animated.loop(Animated.timing(compass, { toValue:1, duration:20000, useNativeDriver:true })).start();

// // // //     // Typewriter
// // // //     const typePhrase = () => {
// // // //       const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
// // // //       const t = setInterval(() => {
// // // //         i++; setAiText(ph.slice(0,i));
// // // //         if (i >= ph.length) {
// // // //           clearInterval(t);
// // // //           setTimeout(() => { phraseIdx.current = (phraseIdx.current+1)%aiPhrases.length; typePhrase(); }, 2000);
// // // //         }
// // // //       }, 55);
// // // //       return t;
// // // //     };
// // // //     const t = typePhrase();
// // // //     return () => clearInterval(t);
// // // //   }, []);

// // // //   const handleSearch = useCallback(async () => {
// // // //     if (!query.trim()) return;
// // // //     setParticles(Array.from({length:12}, (_,i) => ({
// // // //       id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
// // // //       color:[T.mint,T.purple,T.pink,T.gold,T.sky][i%5],
// // // //     })));
// // // //     setLoading(true); setImages([]);
// // // //     try {
// // // //       const r = await axios.get(`http://10.153.63.30:3000/api/photos?query=${query}`);
// // // //       if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
// // // //     } catch(e) { console.error(e); }
// // // //     finally { setLoading(false); }
// // // //   }, [query]);

// // // //   const spinStr  = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
// // // //   const floatY   = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
// // // //   const pulseS   = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
// // // //   const auroraX  = aurora.interpolate({ inputRange:[0,1], outputRange:[0, 30] });
// // // //   const auroraO  = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });
// // // //   const compassR = compass.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });

// // // //   return (
// // // //     <SafeAreaView style={styles.root}>
// // // //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// // // //       {/* ── TRAVEL BG ANIMATIONS ──────────────────── */}
// // // //       <View style={StyleSheet.absoluteFill} pointerEvents="none">
// // // //         <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />

// // // //         {/* Aurora bands */}
// // // //         <Animated.View style={[styles.auroraband, {
// // // //           backgroundColor: T.mint+'0D', top:60, height:220,
// // // //           transform:[{translateX:auroraX}], opacity:auroraO,
// // // //         }]} />
// // // //         <Animated.View style={[styles.auroraband, {
// // // //           backgroundColor: T.purple+'0A', top:130, height:180,
// // // //           transform:[{translateX: auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
// // // //           opacity:auroraO,
// // // //         }]} />

// // // //         {/* ✈ Flying planes (Sunset Orange & Sky Blue) */}
// // // //         <FlyingPlane animVal={plane1} top={120} color={'rgba(255, 107, 74, 0.45)'} />
// // // //         <FlyingPlane animVal={plane2} top={280} color={'rgba(56, 189, 248, 0.4)'} />

// // // //         {/* ☁ Drifting clouds */}
// // // //         <DriftCloud animVal={cloud1} top={80}  size={1.2} opacity={0.07} />
// // // //         <DriftCloud animVal={cloud2} top={200} size={0.8} opacity={0.05} />

// // // //         {/* 📍 Pulsing location pins (Sunset, Sky, Coral) */}
// // // //         <LocationPin x={width*0.15} y={180} color={'rgba(255, 107, 74, 0.6)'} pulseVal={pin1} />
// // // //         <LocationPin x={width*0.72} y={350} color={'rgba(56, 189, 248, 0.6)'} pulseVal={pin1} />
// // // //         <LocationPin x={width*0.40} y={520} color={'rgba(244, 63, 94, 0.5)'} pulseVal={pin1} />

// // // //         {/* Dashed route line connecting pins */}
// // // //         <View style={styles.routeLine} />

// // // //         {/* 🧭 Slow-spinning compass rose (corner) */}
// // // //         <Animated.View style={[styles.bgCompass, { transform:[{rotate:compassR}] }]}>
// // // //           <Ionicons name="compass-outline" size={140} color={'rgba(255, 255, 255, 0.03)'} />
// // // //         </Animated.View>

// // // //         {/* Floating map coordinate dots */}
// // // //         {[
// // // //           { x:width*0.1,  y:400, color:'rgba(255, 107, 74, 0.25)' },
// // // //           { x:width*0.6,  y:160, color:'rgba(56, 189, 248, 0.25)' },
// // // //           { x:width*0.85, y:480, color:'rgba(244, 63, 94, 0.25)' },
// // // //           { x:width*0.3,  y:620, color:'rgba(255, 255, 255, 0.15)' },
// // // //         ].map((d, i) => (
// // // //           <Animated.View key={i} style={[styles.mapDot, {
// // // //             left:d.x, top:d.y, backgroundColor:d.color,
// // // //             transform:[{scale: pulse.interpolate({inputRange:[0,1],outputRange:[1,1.5]})}],
// // // //           }]} />
// // // //         ))}

// // // //         {/* Blobs */}
// // // //         <Animated.View style={[styles.blob, {
// // // //           backgroundColor: T.mint+'10', width:350, height:350,
// // // //           top:-100, right:-80, transform:[{translateY:floatY}],
// // // //         }]} />
// // // //         <Animated.View style={[styles.blob, {
// // // //           backgroundColor: T.purple+'0C', width:280, height:280,
// // // //           bottom:350, left:-90, transform:[{translateY:floatY}],
// // // //         }]} />
// // // //         <Animated.View style={[styles.blob, {
// // // //           backgroundColor: T.pink+'08', width:200, height:200,
// // // //           bottom:100, right:40, transform:[{translateY:floatY}],
// // // //         }]} />

// // // //         {/* Floating decorative rings */}
// // // //         <Animated.View style={[styles.decRing, {
// // // //           borderColor: T.mint+'18', width:260, height:260, borderRadius:130,
// // // //           top:80, right:-100, transform:[{translateY:floatY}],
// // // //         }]} />
// // // //         <Animated.View style={[styles.decRing, {
// // // //           borderColor: T.purple+'14', width:180, height:180, borderRadius:90,
// // // //           bottom:200, left:-60, transform:[{translateY:floatY}],
// // // //         }]} />
// // // //       </View>

// // // //       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

// // // //         {/* ── HEADER ──────────────────────────────── */}
// // // //         <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // //           <View style={styles.header}>
// // // //             <View>
// // // //               <View style={styles.aiBadge}>
// // // //                 <GlowDot color={T.mint} pulseAnim={pulseS} />
// // // //                 <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
// // // //               </View>
// // // //               <Text style={styles.greet}>Good Evening 🌙</Text>
// // // //               <View style={styles.nameRow}>
// // // //                 <Text style={styles.name}>Chaitanya</Text>
// // // //                 <Text style={styles.nameWave}>👋</Text>
// // // //               </View>
// // // //               {/* Aurora name underline */}
// // // //               <LinearGradient colors={['#FFFFFF','#888888','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
// // // //             </View>
// // // //             <View>
// // // //               <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
// // // //               <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
// // // //                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=FFFFFF&size=100' }} style={styles.avatar} />
// // // //               </LinearGradient>
// // // //             </View>
// // // //           </View>
// // // //         </Animated.View>

// // // //         {/* ── HERO CARD (unique diagonal) ─────────── */}
// // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // //           <View style={styles.heroOuter}>
// // // //             {/* Triple gradient border effect */}
// // // //             <LinearGradient colors={['#FFFFFF','#888888','#0F0F0F']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
// // // //               <View style={styles.heroCard}>
// // // //                 {/* Background diagonal slice */}
// // // //                 <LinearGradient
// // // //                   colors={[T.mint+'20', T.purple+'18', 'transparent']}
// // // //                   start={{x:0,y:0}} end={{x:1,y:1}}
// // // //                   style={StyleSheet.absoluteFill}
// // // //                 />
// // // //                 <View style={styles.heroContent}>
// // // //                   <View style={styles.heroLeft}>
// // // //                     {/* Rotating orbit ring */}
// // // //                     <View style={styles.orbitWrap}>
// // // //                       <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
// // // //                       <View style={[styles.orbitCore, { backgroundColor: T.mint+'30', borderColor: T.mint+'50' }]}>
// // // //                         <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
// // // //                       </View>
// // // //                     </View>
// // // //                   </View>
// // // //                   <View style={styles.heroRight}>
// // // //                     <Text style={styles.heroPre}>⚡ MONO AI ENGINE</Text>
// // // //                     <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
// // // //                     <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
// // // //                       <LinearGradient colors={[T.mint, T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
// // // //                         <Text style={styles.heroBtnTxt}>Plan Trip</Text>
// // // //                         <Ionicons name="arrow-forward" size={13} color={T.bg} />
// // // //                       </LinearGradient>
// // // //                     </TouchableOpacity>
// // // //                   </View>
// // // //                 </View>
// // // //                 {/* Decorative dots pattern */}
// // // //                 <View style={styles.dotGrid} pointerEvents="none">
// // // //                   {Array.from({length:6}).map((_,i) => (
// // // //                     <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
// // // //                   ))}
// // // //                 </View>
// // // //               </View>
// // // //             </LinearGradient>
// // // //           </View>
// // // //         </Animated.View>

// // // //         {/* ── SEARCH ──────────────────────────────── */}
// // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
// // // //           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
// // // //           <TouchableOpacity
// // // //             activeOpacity={1}
// // // //             onPress={() => inputRef.current && inputRef.current.focus()}
// // // //             style={[styles.searchBox, focused && { borderColor: T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}
// // // //           >
// // // //             <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
// // // //             <TextInput
// // // //               ref={inputRef}
// // // //               placeholder="Where to next?"
// // // //               placeholderTextColor={T.t3}
// // // //               style={styles.searchInput}
// // // //               value={query}
// // // //               onChangeText={setQuery}
// // // //               onSubmitEditing={handleSearch}
// // // //               onFocus={() => setFocused(true)}
// // // //               onBlur={() => setFocused(false)}
// // // //               returnKeyType="search"
// // // //               blurOnSubmit={false}
// // // //               autoCorrect={false}
// // // //               autoCapitalize="none"
// // // //               underlineColorAndroid="transparent"
// // // //             />
// // // //             {loading
// // // //               ? <ActivityIndicator size="small" color={T.mint} />
// // // //               : query.length > 0 && (
// // // //                 <TouchableOpacity onPress={handleSearch}>
// // // //                   <LinearGradient colors={[T.mint, T.mintD]} style={styles.goBtn}>
// // // //                     <Ionicons name="arrow-forward" size={14} color={T.bg} />
// // // //                   </LinearGradient>
// // // //                 </TouchableOpacity>
// // // //               )
// // // //             }
// // // //           </TouchableOpacity>
// // // //           {/* Quick search tags */}
// // // //           <View style={styles.tagsRow}>
// // // //             {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
// // // //               <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
// // // //                 <Text style={styles.tagPillTxt}>{t}</Text>
// // // //               </TouchableOpacity>
// // // //             ))}
// // // //           </View>
// // // //         </Animated.View>

// // // //         {/* ── CITY RESULTS ────────────────────────── */}
// // // //         {(images.length > 0 || loading) && (
// // // //           <Animated.View style={[styles.section, { opacity:fade }]}>
// // // //             <View style={styles.secRow}>
// // // //               <View style={styles.secLeft}>
// // // //                 <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
// // // //                 <Text style={styles.secTitle}> Results for "{query}"</Text>
// // // //               </View>
// // // //               <Text style={styles.secBadge}>{images.length} photos</Text>
// // // //             </View>
// // // //             {loading
// // // //               ? <View style={styles.loadBox}>
// // // //                   <View style={styles.shimmerRow}>
// // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // // //                   </View>
// // // //                 </View>
// // // //               : <FlatList
// // // //                   key={imgKey} data={images} horizontal
// // // //                   showsHorizontalScrollIndicator={false}
// // // //                   keyExtractor={it => it.id}
// // // //                   snapToInterval={width*0.72+14}
// // // //                   decelerationRate="fast"
// // // //                   contentContainerStyle={{ paddingRight:20 }}
// // // //                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
// // // //                 />
// // // //             }
// // // //           </Animated.View>
// // // //         )}

// // // //         {/* ── QUICK ACCESS —Bento style ────────────── */}
// // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // //           <Text style={styles.secTitle2}>Quick Access</Text>
// // // //           <View style={styles.bento}>
// // // //             {shortcuts.map((item) => (
// // // //               <TouchableOpacity
// // // //                 key={item.id}
// // // //                 style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
// // // //                 activeOpacity={0.75}
// // // //                 onPress={() => {
// // // //                   if (item.name==='Hotels')  navigation.navigate('HotelSearch');
// // // //                   if (item.name==='Budget')  navigation.navigate('Budget');
// // // //                   if (item.name==='Planner') navigation.navigate('Planner');
// // // //                   if (item.name==='News')    navigation.navigate('News');
// // // //                   if (item.name==='Map')     navigation.navigate('LiveNavigation');
// // // //                 if (item.name==='Flights') navigation.navigate('Flights');
// // // //                 }}
// // // //               >
// // // //                 <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
// // // //                   <Ionicons name={item.icon} size={22} color={item.c} />
// // // //                 </View>
// // // //                 <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
// // // //                 {/* Corner dot accent */}
// // // //                 <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
// // // //               </TouchableOpacity>
// // // //             ))}
// // // //           </View>
// // // //         </Animated.View>

// // // //         {/* ── TRENDING ────────────────────────────── */}
// // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // //           <View style={styles.secRow}>
// // // //             <Text style={styles.secTitle2}>Trending 🔥</Text>
// // // //             <TouchableOpacity>
// // // //               <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
// // // //             </TouchableOpacity>
// // // //           </View>
// // // //           <FlatList
// // // //             data={trending} horizontal showsHorizontalScrollIndicator={false}
// // // //             keyExtractor={it => it.id}
// // // //             contentContainerStyle={{ gap:12, paddingRight:20 }}
// // // //             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
// // // //           />
// // // //         </Animated.View>

// // // //         {/* ── STATS — Counter animation ────────────── */}
// // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // //           <Text style={styles.secTitle2}>By the Numbers</Text>
// // // //           <View style={styles.statsGrid}>
// // // //             {[
// // // //               { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
// // // //               { label:'AI Accuracy',   num:'98.7', suf:'%',  color:T.purple },
// // // //               { label:'Destinations',  num:'190',  suf:'+',  color:T.pink },
// // // //               { label:'Happy Users',   num:'500',  suf:'K',  color:T.gold },
// // // //             ].map((s,i) => (
// // // //               <View key={i} style={[styles.statCard, { borderColor: s.color+'30' }]}>
// // // //                 <LinearGradient colors={[s.color+'18', 'transparent']} style={StyleSheet.absoluteFill} />
// // // //                 <Counter target={s.num} suffix={s.suf} color={s.color} />
// // // //                 <Text style={styles.statLabel}>{s.label}</Text>
// // // //               </View>
// // // //             ))}
// // // //           </View>
// // // //         </Animated.View>

// // // //         {/* ── WEATHER WIDGET ──────────────────────── */}
// // // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // // //           <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
// // // //             {/* Mint strip */}
// // // //             <LinearGradient colors={['#FFFFFF','#888888','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
// // // //             <View style={styles.weatherBody}>
// // // //               <View>
// // // //                 <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
// // // //                 <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
// // // //                 <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
// // // //               </View>
// // // //               <View style={styles.wtRight}>
// // // //                 <Text style={styles.wtEmoji}>⛅</Text>
// // // //                 <View style={styles.wtMinis}>
// // // //                   {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
// // // //                     <View key={v} style={styles.wtMini}>
// // // //                       <Text>{ic}</Text>
// // // //                       <Text style={styles.wtMiniV}>{v}</Text>
// // // //                     </View>
// // // //                   ))}
// // // //                 </View>
// // // //               </View>
// // // //             </View>
// // // //             <View style={[styles.wtLine, { backgroundColor:T.border }]} />
// // // //             <View style={styles.wtForecast}>
// // // //               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
// // // //                 <View key={d} style={styles.wtDay}>
// // // //                   <Text style={styles.wtDayL}>{d}</Text>
// // // //                   <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
// // // //                   <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
// // // //                 </View>
// // // //               ))}
// // // //             </View>
// // // //           </View>
// // // //         </Animated.View>

// // // //         {/* ── AI PICK BANNER ──────────────────────── */}
// // // //         <Animated.View style={[styles.section, { opacity:fade }]}>
// // // //           <LinearGradient colors={['#041228','#222222','#1D4060']} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
// // // //             <View style={styles.pickInner}>
// // // //               <View style={styles.pickTopRow}>
// // // //                 <View style={styles.pickBadge}>
// // // //                   <Text style={styles.pickBadgeTxt}>✦ AI PICK</Text>
// // // //                 </View>
// // // //                 <Text style={styles.pickDot}>TODAY</Text>
// // // //               </View>
// // // //               <Text style={styles.pickTitle}>Santorini, Greece</Text>
// // // //               <Text style={styles.pickSub}>Perfect season · April – June</Text>
// // // //               <View style={styles.pickTagsRow}>
// // // //                 {['Romantic','Beach','Scenic'].map(t=>(
// // // //                   <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
// // // //                 ))}
// // // //               </View>
// // // //             </View>
// // // //             <Text style={styles.pickEmoji}>🏛️</Text>
// // // //             <View style={styles.pickCircle1} />
// // // //             <View style={styles.pickCircle2} />
// // // //           </LinearGradient>
// // // //         </Animated.View>

// // // //         {/* ── FOOTER ──────────────────────────────── */}
// // // //         <Animated.View style={[styles.footer, { opacity:fade }]}>
// // // //           <LinearGradient colors={[T.mint+'15', T.purple+'10']} style={styles.footerCard}>
// // // //             <LinearGradient colors={['#FFFFFF','#888888','#444444']} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
// // // //             <Animated.View style={{ transform:[{rotate:spinStr}] }}>
// // // //               <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
// // // //             </Animated.View>
// // // //             <Text style={styles.footerTitle}>Mono Travel AI</Text>
// // // //             <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
// // // //             <View style={styles.footerPills}>
// // // //               {[T.mint, T.purple, T.pink, T.gold].map(c=>(
// // // //                 <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
// // // //               ))}
// // // //             </View>
// // // //           </LinearGradient>
// // // //         </Animated.View>

// // // //         <View style={{ height:50 }} />
// // // //       </ScrollView>
// // // //     </SafeAreaView>
// // // //   );
// // // // }

// // // // /* ═══ Styles ════════════════════════════════════════ */
// // // // const BW = (width - 72) / 3;

// // // // const styles = StyleSheet.create({
// // // //   root:   { flex:1, backgroundColor:T.bg },
// // // //   scroll: { paddingHorizontal:20, paddingTop:12 },
// // // //   section:{ marginBottom:26 },

// // // //   // Background
// // // //   auroraband:{ position:'absolute', left:0, right:0, borderRadius:40 },
// // // //   blob:      { position:'absolute', borderRadius:9999 },
// // // //   decRing:   { position:'absolute', borderWidth:1 },
// // // //   bgPlane:   { position:'absolute', left:0, flexDirection:'row', alignItems:'center' },
// // // //   trailDot:  { position:'absolute', width:3, height:3, borderRadius:1.5 },
// // // //   bgPin:     { position:'absolute', width:28, height:28, justifyContent:'center', alignItems:'center' },
// // // //   pinRing:   { position:'absolute', borderWidth:1.5 },
// // // //   pinDot:    { width:8, height:8, borderRadius:4, shadowOpacity:1, shadowRadius:5 },
// // // //   bgCloud:   { position:'absolute', right:0 },
// // // //   cloudBody: { backgroundColor:'rgba(255,255,255,0.8)', borderRadius:20 },
// // // //   cloudPuff: { position:'absolute', backgroundColor:'rgba(255,255,255,0.8)', borderRadius:22 },
// // // //   bgCompass: { position:'absolute', bottom:-40, left:-40, opacity:0.6 },
// // // //   mapDot:    { position:'absolute', width:4, height:4, borderRadius:2 },
// // // //   routeLine: { position:'absolute', width:300, height:300, borderRadius:150, borderWidth:1, borderStyle:'dashed', borderColor:'rgba(255,255,255,0.03)', top:100, left:-100, transform:[{rotate:'30deg'}] },

// // // //   // Header
// // // //   headerWrap:{ marginBottom:24 },
// // // //   header:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
// // // //   aiBadge:   { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
// // // //   aiBadgeTxt:{ color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
// // // //   glowDot:   {},
// // // //   greet:     { color:T.t2, fontSize:13, fontWeight:'500' },
// // // //   nameRow:   { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
// // // //   name:      { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
// // // //   nameWave:  { fontSize:26 },
// // // //   nameBar:   { width:60, height:3, borderRadius:2, marginTop:10 },
// // // //   avatarHalo:{ position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
// // // //   avatarGrad:{ width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
// // // //   avatar:    { width:55, height:55, borderRadius:28 },

// // // //   // Hero
// // // //   heroOuter: { borderRadius:22, overflow:'hidden' },
// // // //   heroBorder:{ padding:1.5, borderRadius:22 },
// // // //   heroCard:  { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
// // // //   heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
// // // //   heroLeft:  {},
// // // //   orbitWrap: { width:60, height:60, justifyContent:'center', alignItems:'center' },
// // // //   orbit:     { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
// // // //   orbitCore: { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
// // // //   heroRight: { flex:1 },
// // // //   heroPre:   { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
// // // //   heroType:  { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
// // // //   heroBtn:   { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
// // // //   heroBtnG:  { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
// // // //   heroBtnTxt:{ color:T.bg, fontSize:13, fontWeight:'800' },
// // // //   dotGrid:   { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
// // // //   dotGridItem:{ width:5, height:5, borderRadius:3 },

// // // //   // Search
// // // //   searchBox: { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
// // // //                borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
// // // //   searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
// // // //   goBtn:     { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
// // // //   tagsRow:   { flexDirection:'row', gap:8, flexWrap:'wrap' },
// // // //   tagPill:   { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
// // // //   tagPillTxt:{ color:T.t2, fontSize:11, fontWeight:'600' },
// // // //   particle:  { position:'absolute' },
// // // //   pDot:      { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

// // // //   // City cards
// // // //   cityCard:  { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
// // // //   cityImg:   { width:'100%', height:'100%' },
// // // //   cityGrad:  { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
// // // //   cityTopRow:{ position:'absolute', top:14, left:14 },
// // // //   liveChip:  { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
// // // //   liveDot:   { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
// // // //   liveChipTxt:{ fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // //   cityName:  { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
// // // //   cityMeta:  { flexDirection:'row', alignItems:'center' },
// // // //   cityMetaTxt:{ color:T.t3, fontSize:11 },
// // // //   cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
// // // //   shimmerRow:{ flexDirection:'row', gap:14 },
// // // //   loadBox:   { paddingVertical:10 },
// // // //   secRow:    { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
// // // //   secLeft:   { flexDirection:'row', alignItems:'center' },
// // // //   secTitle:  { color:T.t1, fontSize:15, fontWeight:'700' },
// // // //   secTitle2: { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
// // // //   secBadge:  { color:T.t3, fontSize:11 },
// // // //   seeAll:    { fontSize:13, fontWeight:'600' },

// // // //   // Bento grid
// // // //   bento:     { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // //   bentoItem: { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
// // // //                alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
// // // //   bentoIcon: { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
// // // //   bentoTxt:  { fontSize:12, fontWeight:'700' },
// // // //   bentoDot:  { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },

// // // //   // Trending
// // // //   trendCard: { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
// // // //   trendEmoji:{ fontSize:30, marginBottom:4 },
// // // //   trendCity: { color:'#FFF', fontSize:16, fontWeight:'800' },
// // // //   trendSub:  { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
// // // //   trendBadge:{ flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)', alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
// // // //   trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
// // // //   trendCircle:{ position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20, backgroundColor:'rgba(255,255,255,0.08)' },

// // // //   // Stats
// // // //   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // // //   statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
// // // //   statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
// // // //   statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

// // // //   // Weather
// // // //   weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
// // // //   weatherStrip: { height:2 },
// // // //   weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
// // // //   wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
// // // //   wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
// // // //   wtDeg:     { fontSize:24, fontWeight:'400' },
// // // //   wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
// // // //   wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
// // // //   wtEmoji:   { fontSize:44 },
// // // //   wtMinis:   { flexDirection:'row', gap:10 },
// // // //   wtMini:    { alignItems:'center', gap:2 },
// // // //   wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
// // // //   wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
// // // //   wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
// // // //   wtDay:     { alignItems:'center', gap:4 },
// // // //   wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
// // // //   wtDayIc:   { fontSize:18 },
// // // //   wtDayT:    { fontSize:12, fontWeight:'700' },

// // // //   // Pick
// // // //   pickCard:  { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
// // // //   pickInner: { flex:1 },
// // // //   pickTopRow:{ flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
// // // //   pickBadge: { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
// // // //   pickBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // // //   pickDot:   { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
// // // //   pickTitle: { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
// // // //   pickSub:   { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
// // // //   pickTagsRow:{ flexDirection:'row', gap:6 },
// // // //   pickTag:   { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
// // // //   pickTagTxt:{ color:'#FFF', fontSize:10, fontWeight:'600' },
// // // //   pickEmoji: { fontSize:54 },
// // // //   pickCircle1:{ position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
// // // //   pickCircle2:{ position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

// // // //   // Footer
// // // //   footer:     { marginBottom:10 },
// // // //   footerCard: { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
// // // //   footerStrip:{ position:'absolute', top:0, left:0, right:0, height:2 },
// // // //   footerTitle:{ color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
// // // //   footerSub:  { color:T.t3, fontSize:11, letterSpacing:1 },
// // // //   footerPills:{ flexDirection:'row', gap:8, marginTop:10 },
// // // //   fpill:      { width:28, height:6, borderRadius:3 },
// // // // });











// // // // new 2-->
// // // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // // import {
// // //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// // //   FlatList, Image, Dimensions, Animated, TextInput,
// // //   ActivityIndicator, StatusBar,
// // // } from 'react-native';
// // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // import { LinearGradient } from 'expo-linear-gradient';
// // // import axios from 'axios';

// // // const { width } = Dimensions.get('window');

// // // /* ═══ Design Tokens ════════════════════════════════ */
// // // const T = {
// // //   bg:      '#050505',
// // //   surf:    '#0C0C0C',
// // //   card:    '#131313',
// // //   card2:   '#1A1A1A',
// // //   border:  '#242424',
// // //   border2: '#303030',
// // //   mint:    '#FFFFFF',
// // //   mintL:   '#F0F0F0',
// // //   mintD:   '#C4C4C4',
// // //   purple:  '#909090',
// // //   purpleL: '#B8B8B8',
// // //   pink:    '#505050',
// // //   pinkL:   '#787878',
// // //   gold:    '#FFD97D',   // ← real gold for Memory
// // //   goldD:   '#E8E8E8',
// // //   sky:     '#D0D0D0',
// // //   t1: '#FFFFFF',
// // //   t2: '#B0B0B0',
// // //   t3: '#4A4A4A',
// // // };

// // // /* ═══ Data ════════════════════════════════════════ */
// // // const shortcuts = [
// // //   { id:'1', name:'Budget',  icon:'wallet-outline',               c:'#FFFFFF', bg:'#111111' },
// // //   { id:'2', name:'Flights', icon:'airplane',                     c:'#FFFFFF', bg:'#0C0C0C' },  // ← fixed
// // //   { id:'3', name:'Hotels',  icon:'bed-outline',                  c:'#E8E8E8', bg:'#151515' },
// // //   { id:'4', name:'Planner', icon:'calendar-outline',             c:'#C4C4C4', bg:'#0E0E0E' },
// // //   { id:'5', name:'News',    icon:'newspaper',                    c:'#D0D0D0', bg:'#121212' },  // ← fixed
// // //   { id:'6', name:'Map',     icon:'navigation',                   c:'#B8B8B8', bg:'#141414' },  // ← fixed
// // //   { id:'7', name:'Memory',  icon:'book-open-page-variant',       c:'#FFD97D', bg:'#181208' },
// // // ];

// // // const trending = [
// // //   { id:'t1', city:'Tokyo',     sub:'Japan',       emoji:'🗼', g:['#151515','#2C2C2C'] },
// // //   { id:'t2', city:'Santorini', sub:'Greece',      emoji:'🏛️', g:['#282828','#404040'] },
// // //   { id:'t3', city:'Bali',      sub:'Indonesia',   emoji:'🌴', g:['#1E1E1E','#383838'] },
// // //   { id:'t4', city:'Dubai',     sub:'UAE',         emoji:'🏙️', g:['#222222','#3C3C3C'] },
// // //   { id:'t5', city:'Maldives',  sub:'South Asia',  emoji:'🏝️', g:['#1A1A1A','#303030'] },
// // // ];

// // // const aiPhrases = [
// // //   'Discover the world...',
// // //   'Find hidden gems...',
// // //   'Plan your adventure...',
// // //   'Explore smarter...',
// // // ];

// // // /* ═══ ✈ Flying Airplane ═══════════════════════════ */
// // // const FlyingPlane = ({ animVal, top, color }) => {
// // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[-60, width+60] });
// // //   const ty = animVal.interpolate({ inputRange:[0,0.5,1], outputRange:[0,-18,0] });
// // //   const op = animVal.interpolate({ inputRange:[0,0.05,0.95,1], outputRange:[0,1,1,0] });
// // //   return (
// // //     <Animated.View style={[styles.bgPlane, { top, opacity:op, transform:[{translateX:tx},{translateY:ty}] }]}>
// // //       <Ionicons name="airplane" size={18} color={color} />
// // //       {[-20,-36,-52,-68].map(x => (
// // //         <View key={x} style={[styles.trailDot, { right:-x, opacity:Math.abs(x)/80, backgroundColor:color }]} />
// // //       ))}
// // //     </Animated.View>
// // //   );
// // // };

// // // /* ═══ 📍 Pulsing Location Pin ══════════════════════ */
// // // const LocationPin = ({ x, y, color, pulseVal }) => {
// // //   const ringScale = pulseVal.interpolate({ inputRange:[0,1], outputRange:[1,2.2] });
// // //   const ringOp    = pulseVal.interpolate({ inputRange:[0,1], outputRange:[0.6,0] });
// // //   return (
// // //     <View style={[styles.bgPin, { left:x, top:y }]}>
// // //       <Animated.View style={[styles.pinRing, { width:28, height:28, borderRadius:14,
// // //         borderColor:color, transform:[{scale:ringScale}], opacity:ringOp }]} />
// // //       <View style={[styles.pinDot, { backgroundColor:color }]} />
// // //     </View>
// // //   );
// // // };

// // // /* ═══ ☁ Drifting Cloud ═══════════════════════════ */
// // // const DriftCloud = ({ animVal, top, size=1, opacity=0.07 }) => {
// // //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[width+100,-300] });
// // //   return (
// // //     <Animated.View style={[styles.bgCloud, { top, opacity, transform:[{translateX:tx},{scale:size}] }]}>
// // //       <View style={[styles.cloudBody, { width:80, height:30 }]} />
// // //       <View style={[styles.cloudPuff, { width:44, height:44, top:-20, left:10 }]} />
// // //       <View style={[styles.cloudPuff, { width:34, height:34, top:-14, left:36 }]} />
// // //     </Animated.View>
// // //   );
// // // };

// // // /* ═══ Shimmer ════════════════════════════════════ */
// // // const Shimmer = ({ w, h, br=10 }) => {
// // //   const a = useRef(new Animated.Value(0)).current;
// // //   useEffect(() => {
// // //     Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
// // //   }, []);
// // //   const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w,w] });
// // //   return (
// // //     <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#222222', overflow:'hidden' }}>
// // //       <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
// // //         <LinearGradient colors={['transparent','#FFFFFF12','transparent']}
// // //           start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
// // //       </Animated.View>
// // //     </View>
// // //   );
// // // };

// // // /* ═══ Counter ════════════════════════════════════ */
// // // const Counter = ({ target, suffix='', color }) => {
// // //   const [val, setVal] = useState(0);
// // //   useEffect(() => {
// // //     let start = 0;
// // //     const num = parseFloat(target);
// // //     const step = num / 40;
// // //     const t = setInterval(() => {
// // //       start += step;
// // //       if (start >= num) { setVal(num); clearInterval(t); }
// // //       else setVal(Math.floor(start * 10) / 10);
// // //     }, 35);
// // //     return () => clearInterval(t);
// // //   }, []);
// // //   return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
// // // };

// // // /* ═══ GlowDot ════════════════════════════════════ */
// // // const GlowDot = ({ color, size=8, pulseAnim }) => (
// // //   <Animated.View style={[styles.glowDot, {
// // //     width:size, height:size, borderRadius:size/2,
// // //     backgroundColor:color,
// // //     shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
// // //     transform:[{scale:pulseAnim}],
// // //   }]} />
// // // );

// // // /* ═══ City Card ══════════════════════════════════ */
// // // const CityCard = ({ item, index, query }) => {
// // //   const op = useRef(new Animated.Value(0)).current;
// // //   const sc = useRef(new Animated.Value(0.8)).current;
// // //   const sl = useRef(new Animated.Value(50)).current;
// // //   useEffect(() => {
// // //     Animated.sequence([
// // //       Animated.delay(index * 100),
// // //       Animated.parallel([
// // //         Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
// // //         Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
// // //         Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
// // //       ]),
// // //     ]).start();
// // //   }, []);
// // //   return (
// // //     <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
// // //       <View style={styles.cityCard}>
// // //         <Image source={{ uri:item.url }} style={styles.cityImg} />
// // //         <LinearGradient colors={['transparent','rgba(255,255,255,0.05)','rgba(0,0,0,0.90)']} style={styles.cityGrad}>
// // //           <View style={styles.cityTopRow}>
// // //             <View style={[styles.liveChip, { borderColor:T.mint+'60' }]}>
// // //               <View style={[styles.liveDot, { backgroundColor:T.mint, shadowColor:T.mint }]} />
// // //               <Text style={[styles.liveChipTxt, { color:T.mintL }]}>LIVE</Text>
// // //             </View>
// // //           </View>
// // //           <Text style={styles.cityName}>{query}</Text>
// // //           <View style={styles.cityMeta}>
// // //             <Ionicons name="camera-outline" size={11} color={T.t3} />
// // //             <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
// // //           </View>
// // //         </LinearGradient>
// // //         <View style={[styles.cornerAccent, { borderColor:T.mint }]} />
// // //       </View>
// // //     </Animated.View>
// // //   );
// // // };

// // // /* ═══ Trend Card ═════════════════════════════════ */
// // // const TrendCard = ({ item, index }) => {
// // //   const op = useRef(new Animated.Value(0)).current;
// // //   const sc = useRef(new Animated.Value(0.88)).current;
// // //   useEffect(() => {
// // //     Animated.sequence([
// // //       Animated.delay(index * 90),
// // //       Animated.parallel([
// // //         Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
// // //         Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
// // //       ]),
// // //     ]).start();
// // //   }, []);
// // //   return (
// // //     <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
// // //       <TouchableOpacity activeOpacity={0.82}>
// // //         <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
// // //           <Text style={styles.trendEmoji}>{item.emoji}</Text>
// // //           <Text style={styles.trendCity}>{item.city}</Text>
// // //           <Text style={styles.trendSub}>{item.sub}</Text>
// // //           <View style={styles.trendBadge}>
// // //             <Ionicons name="trending-up" size={10} color="#FFF" />
// // //             <Text style={styles.trendBadgeTxt}>Trending</Text>
// // //           </View>
// // //           <View style={styles.trendCircle} />
// // //         </LinearGradient>
// // //       </TouchableOpacity>
// // //     </Animated.View>
// // //   );
// // // };

// // // /* ═══ Particle ═══════════════════════════════════ */
// // // const Particle = ({ x, y, delay, color }) => {
// // //   const a = useRef(new Animated.Value(0)).current;
// // //   useEffect(() => {
// // //     Animated.loop(Animated.sequence([
// // //       Animated.delay(delay),
// // //       Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
// // //       Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
// // //     ])).start();
// // //   }, []);
// // //   return (
// // //     <Animated.View style={[styles.particle, {
// // //       left:x, top:y,
// // //       opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
// // //       transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
// // //     }]}>
// // //       <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
// // //     </Animated.View>
// // //   );
// // // };

// // // /* ═══ ✦ Memory Book Promo Banner ════════════════ */
// // // const MemoryBanner = ({ onPress, pulseAnim, spinStr }) => {
// // //   const sc = useRef(new Animated.Value(0.92)).current;
// // //   const op = useRef(new Animated.Value(0)).current;
// // //   useEffect(() => {
// // //     Animated.parallel([
// // //       Animated.spring(sc, { toValue:1, friction:7, tension:60, useNativeDriver:true }),
// // //       Animated.timing(op, { toValue:1, duration:500, useNativeDriver:true }),
// // //     ]).start();
// // //   }, []);
// // //   return (
// // //     <Animated.View style={{ opacity:op, transform:[{scale:sc}], marginBottom:26 }}>
// // //       <TouchableOpacity onPress={onPress} activeOpacity={0.88}>
// // //         <LinearGradient
// // //           colors={['#1C1608', '#2A1F08', '#181208']}
// // //           start={{x:0,y:0}} end={{x:1,y:1}}
// // //           style={styles.memBanner}
// // //         >
// // //           {/* Top gradient strip — gold */}
// // //           <LinearGradient
// // //             colors={[T.gold, '#FFC107', 'transparent']}
// // //             start={{x:0,y:0}} end={{x:1,y:0}}
// // //             style={styles.memStrip}
// // //           />

// // //           {/* Decorative circle */}
// // //           <View style={styles.memCircle1} />
// // //           <View style={styles.memCircle2} />

// // //           {/* Left side */}
// // //           <View style={{ flex:1 }}>
// // //             <View style={styles.memBadgeRow}>
// // //               <Animated.View style={[styles.memBadgeDot, { transform:[{scale:pulseAnim}] }]} />
// // //               <Text style={styles.memBadgeTxt}>  NEW FEATURE</Text>
// // //             </View>
// // //             <Text style={styles.memTitle}>Tour Memory{'\n'}Book</Text>
// // //             <Text style={styles.memSub}>Upload photos · AI captions · Export PDF</Text>

// // //             {/* Feature pills */}
// // //             <View style={styles.memPillRow}>
// // //               {['📷 Photos','⚡ AI Captions','📄 PDF Export'].map(p => (
// // //                 <View key={p} style={styles.memPill}>
// // //                   <Text style={styles.memPillTxt}>{p}</Text>
// // //                 </View>
// // //               ))}
// // //             </View>
// // //           </View>

// // //           {/* Right icon */}
// // //           <View style={styles.memIconWrap}>
// // //             <Animated.View style={[styles.memIconOrbit, { transform:[{rotate:spinStr}] }]} />
// // //             <View style={styles.memIconCore}>
// // //               <Text style={{ fontSize:34 }}>📖</Text>
// // //             </View>
// // //           </View>
// // //         </LinearGradient>
// // //       </TouchableOpacity>
// // //     </Animated.View>
// // //   );
// // // };

// // // /* ═══════════════════════════════════════════════════
// // //    MAIN SCREEN
// // // ═══════════════════════════════════════════════════ */
// // // export default function HomeScreen({ navigation }) {
// // //   const [query,     setQuery]     = useState('');
// // //   const [images,    setImages]    = useState([]);
// // //   const [loading,   setLoading]   = useState(false);
// // //   const [particles, setParticles] = useState([]);
// // //   const [focused,   setFocused]   = useState(false);
// // //   const [imgKey,    setImgKey]    = useState(0);
// // //   const [aiText,    setAiText]    = useState('');

// // //   const inputRef = useRef(null);
// // //   const fade     = useRef(new Animated.Value(0)).current;
// // //   const slideY   = useRef(new Animated.Value(40)).current;
// // //   const pulse    = useRef(new Animated.Value(0)).current;
// // //   const float    = useRef(new Animated.Value(0)).current;
// // //   const spin     = useRef(new Animated.Value(0)).current;
// // //   const aurora   = useRef(new Animated.Value(0)).current;
// // //   const plane1   = useRef(new Animated.Value(0)).current;
// // //   const plane2   = useRef(new Animated.Value(0)).current;
// // //   const pin1     = useRef(new Animated.Value(0)).current;
// // //   const cloud1   = useRef(new Animated.Value(0)).current;
// // //   const cloud2   = useRef(new Animated.Value(0)).current;
// // //   const compass  = useRef(new Animated.Value(0)).current;
// // //   const phraseIdx = useRef(0);

// // //   useEffect(() => {
// // //     Animated.parallel([
// // //       Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
// // //       Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
// // //     ]).start();

// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
// // //       Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
// // //     ])).start();
// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
// // //       Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
// // //     ])).start();
// // //     Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
// // //       Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
// // //     ])).start();

// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(plane1, { toValue:1, duration:9000, useNativeDriver:true }),
// // //       Animated.delay(4000),
// // //       Animated.timing(plane1, { toValue:0, duration:0, useNativeDriver:true }),
// // //       Animated.delay(3000),
// // //     ])).start();
// // //     Animated.loop(Animated.sequence([
// // //       Animated.delay(6000),
// // //       Animated.timing(plane2, { toValue:1, duration:11000, useNativeDriver:true }),
// // //       Animated.delay(2000),
// // //       Animated.timing(plane2, { toValue:0, duration:0, useNativeDriver:true }),
// // //     ])).start();
// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(pin1, { toValue:1, duration:1500, useNativeDriver:true }),
// // //       Animated.timing(pin1, { toValue:0, duration:600, useNativeDriver:true }),
// // //       Animated.delay(2000),
// // //     ])).start();
// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(cloud1, { toValue:1, duration:28000, useNativeDriver:true }),
// // //       Animated.timing(cloud1, { toValue:0, duration:0, useNativeDriver:true }),
// // //     ])).start();
// // //     Animated.loop(Animated.sequence([
// // //       Animated.delay(14000),
// // //       Animated.timing(cloud2, { toValue:1, duration:22000, useNativeDriver:true }),
// // //       Animated.timing(cloud2, { toValue:0, duration:0, useNativeDriver:true }),
// // //     ])).start();
// // //     Animated.loop(Animated.timing(compass, { toValue:1, duration:20000, useNativeDriver:true })).start();

// // //     // Typewriter
// // //     const typePhrase = () => {
// // //       const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
// // //       const t = setInterval(() => {
// // //         i++; setAiText(ph.slice(0, i));
// // //         if (i >= ph.length) {
// // //           clearInterval(t);
// // //           setTimeout(() => { phraseIdx.current = (phraseIdx.current+1) % aiPhrases.length; typePhrase(); }, 2000);
// // //         }
// // //       }, 55);
// // //       return t;
// // //     };
// // //     const t = typePhrase();
// // //     return () => clearInterval(t);
// // //   }, []);

// // //   const handleSearch = useCallback(async () => {
// // //     if (!query.trim()) return;
// // //     setParticles(Array.from({length:12}, (_,i) => ({
// // //       id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
// // //       color:[T.mint, T.purple, T.pink, T.gold, T.sky][i%5],
// // //     })));
// // //     setLoading(true); setImages([]);
// // //     try {
// // //       const r = await axios.get(`http://10.153.63.30:3000/api/photos?query=${query}`);
// // //       if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
// // //     } catch(e) { console.error(e); }
// // //     finally { setLoading(false); }
// // //   }, [query]);

// // //   const spinStr  = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
// // //   const floatY   = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
// // //   const pulseS   = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
// // //   const auroraX  = aurora.interpolate({ inputRange:[0,1], outputRange:[0,30] });
// // //   const auroraO  = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });
// // //   const compassR = compass.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });

// // //   const navigateTo = (name) => {
// // //     const routes = {
// // //       Hotels:  'HotelSearch',
// // //       Budget:  'Budget',
// // //       Planner: 'Planner',
// // //       News:    'News',
// // //       Map:     'LiveNavigation',
// // //       Flights: 'Flights',
// // //       Memory:  'Memory',        // ← NEW
// // //     };
// // //     if (routes[name]) navigation.navigate(routes[name]);
// // //   };

// // //   return (
// // //     <SafeAreaView style={styles.root}>
// // //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// // //       {/* ── TRAVEL BG ─────────────────────────── */}
// // //       <View style={StyleSheet.absoluteFill} pointerEvents="none">
// // //         <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />
// // //         <Animated.View style={[styles.auroraband, {
// // //           backgroundColor:T.mint+'0D', top:60, height:220,
// // //           transform:[{translateX:auroraX}], opacity:auroraO,
// // //         }]} />
// // //         <Animated.View style={[styles.auroraband, {
// // //           backgroundColor:T.purple+'0A', top:130, height:180,
// // //           transform:[{translateX:auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
// // //           opacity:auroraO,
// // //         }]} />
// // //         <FlyingPlane animVal={plane1} top={120} color="rgba(255,107,74,0.45)" />
// // //         <FlyingPlane animVal={plane2} top={280} color="rgba(56,189,248,0.4)" />
// // //         <DriftCloud  animVal={cloud1} top={80}  size={1.2} opacity={0.07} />
// // //         <DriftCloud  animVal={cloud2} top={200} size={0.8} opacity={0.05} />
// // //         <LocationPin x={width*0.15} y={180} color="rgba(255,107,74,0.6)"  pulseVal={pin1} />
// // //         <LocationPin x={width*0.72} y={350} color="rgba(56,189,248,0.6)"  pulseVal={pin1} />
// // //         <LocationPin x={width*0.40} y={520} color="rgba(244,63,94,0.5)"   pulseVal={pin1} />
// // //         <View style={styles.routeLine} />
// // //         <Animated.View style={[styles.bgCompass, { transform:[{rotate:compassR}] }]}>
// // //           <Ionicons name="compass-outline" size={140} color="rgba(255,255,255,0.03)" />
// // //         </Animated.View>
// // //         {[
// // //           { x:width*0.1,  y:400, color:'rgba(255,107,74,0.25)' },
// // //           { x:width*0.6,  y:160, color:'rgba(56,189,248,0.25)' },
// // //           { x:width*0.85, y:480, color:'rgba(244,63,94,0.25)' },
// // //           { x:width*0.3,  y:620, color:'rgba(255,255,255,0.15)' },
// // //         ].map((d,i) => (
// // //           <Animated.View key={i} style={[styles.mapDot, {
// // //             left:d.x, top:d.y, backgroundColor:d.color,
// // //             transform:[{scale:pulse.interpolate({inputRange:[0,1],outputRange:[1,1.5]})}],
// // //           }]} />
// // //         ))}
// // //         <Animated.View style={[styles.blob, { backgroundColor:T.mint+'10', width:350, height:350,
// // //           top:-100, right:-80, transform:[{translateY:floatY}] }]} />
// // //         <Animated.View style={[styles.blob, { backgroundColor:T.purple+'0C', width:280, height:280,
// // //           bottom:350, left:-90, transform:[{translateY:floatY}] }]} />
// // //         <Animated.View style={[styles.blob, { backgroundColor:T.pink+'08', width:200, height:200,
// // //           bottom:100, right:40, transform:[{translateY:floatY}] }]} />
// // //         <Animated.View style={[styles.decRing, { borderColor:T.mint+'18', width:260, height:260, borderRadius:130,
// // //           top:80, right:-100, transform:[{translateY:floatY}] }]} />
// // //         <Animated.View style={[styles.decRing, { borderColor:T.purple+'14', width:180, height:180, borderRadius:90,
// // //           bottom:200, left:-60, transform:[{translateY:floatY}] }]} />
// // //       </View>

// // //       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

// // //         {/* ── HEADER ─────────────────────────── */}
// // //         <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // //           <View style={styles.header}>
// // //             <View>
// // //               <View style={styles.aiBadge}>
// // //                 <GlowDot color={T.mint} pulseAnim={pulseS} />
// // //                 <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
// // //               </View>
// // //               <Text style={styles.greet}>Good Evening 🌙</Text>
// // //               <View style={styles.nameRow}>
// // //                 <Text style={styles.name}>Chaitanya</Text>
// // //                 <Text style={styles.nameWave}>👋</Text>
// // //               </View>
// // //               <LinearGradient colors={['#FFFFFF','#888888','#444444']}
// // //                 start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
// // //             </View>
// // //             <View>
// // //               <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
// // //               <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
// // //                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=FFFFFF&size=100' }} style={styles.avatar} />
// // //               </LinearGradient>
// // //             </View>
// // //           </View>
// // //         </Animated.View>

// // //         {/* ── HERO CARD ──────────────────────── */}
// // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // //           <View style={styles.heroOuter}>
// // //             <LinearGradient colors={['#FFFFFF','#888888','#0F0F0F']}
// // //               start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
// // //               <View style={styles.heroCard}>
// // //                 <LinearGradient colors={[T.mint+'20', T.purple+'18','transparent']}
// // //                   start={{x:0,y:0}} end={{x:1,y:1}} style={StyleSheet.absoluteFill} />
// // //                 <View style={styles.heroContent}>
// // //                   <View style={styles.heroLeft}>
// // //                     <View style={styles.orbitWrap}>
// // //                       <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
// // //                       <View style={[styles.orbitCore, { backgroundColor:T.mint+'30', borderColor:T.mint+'50' }]}>
// // //                         <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
// // //                       </View>
// // //                     </View>
// // //                   </View>
// // //                   <View style={styles.heroRight}>
// // //                     <Text style={styles.heroPre}>⚡ MONO AI ENGINE</Text>
// // //                     <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
// // //                     <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
// // //                       <LinearGradient colors={[T.mint,T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
// // //                         <Text style={styles.heroBtnTxt}>Plan Trip</Text>
// // //                         <Ionicons name="arrow-forward" size={13} color={T.bg} />
// // //                       </LinearGradient>
// // //                     </TouchableOpacity>
// // //                   </View>
// // //                 </View>
// // //                 <View style={styles.dotGrid} pointerEvents="none">
// // //                   {Array.from({length:6}).map((_,i) => (
// // //                     <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
// // //                   ))}
// // //                 </View>
// // //               </View>
// // //             </LinearGradient>
// // //           </View>
// // //         </Animated.View>

// // //         {/* ── SEARCH ─────────────────────────── */}
// // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
// // //           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
// // //           <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()}
// // //             style={[styles.searchBox, focused && { borderColor:T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}>
// // //             <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
// // //             <TextInput
// // //               ref={inputRef}
// // //               placeholder="Where to next?"
// // //               placeholderTextColor={T.t3}
// // //               style={styles.searchInput}
// // //               value={query}
// // //               onChangeText={setQuery}
// // //               onSubmitEditing={handleSearch}
// // //               onFocus={() => setFocused(true)}
// // //               onBlur={() => setFocused(false)}
// // //               returnKeyType="search"
// // //               blurOnSubmit={false}
// // //               autoCorrect={false}
// // //               autoCapitalize="none"
// // //               underlineColorAndroid="transparent"
// // //             />
// // //             {loading
// // //               ? <ActivityIndicator size="small" color={T.mint} />
// // //               : query.length > 0 && (
// // //                 <TouchableOpacity onPress={handleSearch}>
// // //                   <LinearGradient colors={[T.mint,T.mintD]} style={styles.goBtn}>
// // //                     <Ionicons name="arrow-forward" size={14} color={T.bg} />
// // //                   </LinearGradient>
// // //                 </TouchableOpacity>
// // //               )
// // //             }
// // //           </TouchableOpacity>
// // //           <View style={styles.tagsRow}>
// // //             {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
// // //               <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
// // //                 <Text style={styles.tagPillTxt}>{t}</Text>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </View>
// // //         </Animated.View>

// // //         {/* ── CITY RESULTS ───────────────────── */}
// // //         {(images.length > 0 || loading) && (
// // //           <Animated.View style={[styles.section, { opacity:fade }]}>
// // //             <View style={styles.secRow}>
// // //               <View style={styles.secLeft}>
// // //                 <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
// // //                 <Text style={styles.secTitle}> Results for "{query}"</Text>
// // //               </View>
// // //               <Text style={styles.secBadge}>{images.length} photos</Text>
// // //             </View>
// // //             {loading
// // //               ? <View style={styles.loadBox}>
// // //                   <View style={styles.shimmerRow}>
// // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // //                     <Shimmer w={width*0.72} h={240} br={20} />
// // //                   </View>
// // //                 </View>
// // //               : <FlatList key={imgKey} data={images} horizontal
// // //                   showsHorizontalScrollIndicator={false}
// // //                   keyExtractor={it => it.id}
// // //                   snapToInterval={width*0.72+14}
// // //                   decelerationRate="fast"
// // //                   contentContainerStyle={{ paddingRight:20 }}
// // //                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
// // //                 />
// // //             }
// // //           </Animated.View>
// // //         )}

// // //         {/* ── QUICK ACCESS ───────────────────── */}
// // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // //           <Text style={styles.secTitle2}>Quick Access</Text>
// // //           <View style={styles.bento}>
// // //             {shortcuts.map((item) => (
// // //               <TouchableOpacity key={item.id}
// // //                 style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
// // //                 activeOpacity={0.75}
// // //                 onPress={() => navigateTo(item.name)}
// // //               >
// // //                 {/* Gold shimmer ring for Memory */}
// // //                 {item.name === 'Memory' && (
// // //                   <Animated.View style={[styles.memBentoRing, {
// // //                     borderColor: T.gold+'50',
// // //                     transform:[{scale:pulseS}],
// // //                   }]} />
// // //                 )}
// // //                 <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
// // //                   <MaterialCommunityIcons name={item.icon} size={22} color={item.c} />
// // //                 </View>
// // //                 <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
// // //                 <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
// // //               </TouchableOpacity>
// // //             ))}
// // //           </View>
// // //         </Animated.View>

// // //         {/* ── ✦ MEMORY BOOK PROMO BANNER ─────── */}
// // //         <Animated.View style={{ opacity:fade, transform:[{translateY:slideY}] }}>
// // //           <MemoryBanner
// // //             onPress={() => navigation.navigate('Memory')}
// // //             pulseAnim={pulseS}
// // //             spinStr={spinStr}
// // //           />
// // //         </Animated.View>

// // //         {/* ── TRENDING ───────────────────────── */}
// // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // //           <View style={styles.secRow}>
// // //             <Text style={styles.secTitle2}>Trending 🔥</Text>
// // //             <TouchableOpacity>
// // //               <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //           <FlatList data={trending} horizontal showsHorizontalScrollIndicator={false}
// // //             keyExtractor={it=>it.id}
// // //             contentContainerStyle={{ gap:12, paddingRight:20 }}
// // //             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
// // //           />
// // //         </Animated.View>

// // //         {/* ── STATS ──────────────────────────── */}
// // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // //           <Text style={styles.secTitle2}>By the Numbers</Text>
// // //           <View style={styles.statsGrid}>
// // //             {[
// // //               { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
// // //               { label:'AI Accuracy',   num:'98.7',suf:'%',  color:T.purple },
// // //               { label:'Destinations',  num:'190', suf:'+',  color:T.pink },
// // //               { label:'Happy Users',   num:'500', suf:'K',  color:T.gold },
// // //             ].map((s,i) => (
// // //               <View key={i} style={[styles.statCard, { borderColor:s.color+'30' }]}>
// // //                 <LinearGradient colors={[s.color+'18','transparent']} style={StyleSheet.absoluteFill} />
// // //                 <Counter target={s.num} suffix={s.suf} color={s.color} />
// // //                 <Text style={styles.statLabel}>{s.label}</Text>
// // //               </View>
// // //             ))}
// // //           </View>
// // //         </Animated.View>

// // //         {/* ── WEATHER ────────────────────────── */}
// // //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// // //           <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
// // //             <LinearGradient colors={['#FFFFFF','#888888','#444444']}
// // //               start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
// // //             <View style={styles.weatherBody}>
// // //               <View>
// // //                 <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
// // //                 <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
// // //                 <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
// // //               </View>
// // //               <View style={styles.wtRight}>
// // //                 <Text style={styles.wtEmoji}>⛅</Text>
// // //                 <View style={styles.wtMinis}>
// // //                   {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
// // //                     <View key={v} style={styles.wtMini}><Text>{ic}</Text><Text style={styles.wtMiniV}>{v}</Text></View>
// // //                   ))}
// // //                 </View>
// // //               </View>
// // //             </View>
// // //             <View style={[styles.wtLine, { backgroundColor:T.border }]} />
// // //             <View style={styles.wtForecast}>
// // //               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
// // //                 <View key={d} style={styles.wtDay}>
// // //                   <Text style={styles.wtDayL}>{d}</Text>
// // //                   <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
// // //                   <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
// // //                 </View>
// // //               ))}
// // //             </View>
// // //           </View>
// // //         </Animated.View>

// // //         {/* ── AI PICK ────────────────────────── */}
// // //         <Animated.View style={[styles.section, { opacity:fade }]}>
// // //           <LinearGradient colors={['#041228','#222222','#1D4060']}
// // //             start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
// // //             <View style={styles.pickInner}>
// // //               <View style={styles.pickTopRow}>
// // //                 <View style={styles.pickBadge}><Text style={styles.pickBadgeTxt}>✦ AI PICK</Text></View>
// // //                 <Text style={styles.pickDot}>TODAY</Text>
// // //               </View>
// // //               <Text style={styles.pickTitle}>Santorini, Greece</Text>
// // //               <Text style={styles.pickSub}>Perfect season · April – June</Text>
// // //               <View style={styles.pickTagsRow}>
// // //                 {['Romantic','Beach','Scenic'].map(t=>(
// // //                   <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
// // //                 ))}
// // //               </View>
// // //             </View>
// // //             <Text style={styles.pickEmoji}>🏛️</Text>
// // //             <View style={styles.pickCircle1} />
// // //             <View style={styles.pickCircle2} />
// // //           </LinearGradient>
// // //         </Animated.View>

// // //         {/* ── FOOTER ─────────────────────────── */}
// // //         <Animated.View style={[styles.footer, { opacity:fade }]}>
// // //           <LinearGradient colors={[T.mint+'15',T.purple+'10']} style={styles.footerCard}>
// // //             <LinearGradient colors={['#FFFFFF','#888888','#444444']}
// // //               start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
// // //             <Animated.View style={{ transform:[{rotate:spinStr}] }}>
// // //               <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
// // //             </Animated.View>
// // //             <Text style={styles.footerTitle}>Mono Travel AI</Text>
// // //             <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
// // //             <View style={styles.footerPills}>
// // //               {[T.mint,T.purple,T.pink,T.gold].map(c=>(
// // //                 <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
// // //               ))}
// // //             </View>
// // //           </LinearGradient>
// // //         </Animated.View>

// // //         <View style={{ height:50 }} />
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // /* ═══ Styles ════════════════════════════════════ */
// // // const BW = (width - 72) / 3;
// // // const styles = StyleSheet.create({
// // //   root:   { flex:1, backgroundColor:T.bg },
// // //   scroll: { paddingHorizontal:20, paddingTop:12 },
// // //   section:{ marginBottom:26 },

// // //   // BG
// // //   auroraband: { position:'absolute', left:0, right:0, borderRadius:40 },
// // //   blob:       { position:'absolute', borderRadius:9999 },
// // //   decRing:    { position:'absolute', borderWidth:1 },
// // //   bgPlane:    { position:'absolute', left:0, flexDirection:'row', alignItems:'center' },
// // //   trailDot:   { position:'absolute', width:3, height:3, borderRadius:1.5 },
// // //   bgPin:      { position:'absolute', width:28, height:28, justifyContent:'center', alignItems:'center' },
// // //   pinRing:    { position:'absolute', borderWidth:1.5 },
// // //   pinDot:     { width:8, height:8, borderRadius:4, shadowOpacity:1, shadowRadius:5 },
// // //   bgCloud:    { position:'absolute', right:0 },
// // //   cloudBody:  { backgroundColor:'rgba(255,255,255,0.8)', borderRadius:20 },
// // //   cloudPuff:  { position:'absolute', backgroundColor:'rgba(255,255,255,0.8)', borderRadius:22 },
// // //   bgCompass:  { position:'absolute', bottom:-40, left:-40, opacity:0.6 },
// // //   mapDot:     { position:'absolute', width:4, height:4, borderRadius:2 },
// // //   routeLine:  { position:'absolute', width:300, height:300, borderRadius:150, borderWidth:1,
// // //                 borderStyle:'dashed', borderColor:'rgba(255,255,255,0.03)', top:100, left:-100, transform:[{rotate:'30deg'}] },

// // //   // Header
// // //   headerWrap: { marginBottom:24 },
// // //   header:     { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
// // //   aiBadge:    { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
// // //   aiBadgeTxt: { color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
// // //   glowDot:    {},
// // //   greet:      { color:T.t2, fontSize:13, fontWeight:'500' },
// // //   nameRow:    { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
// // //   name:       { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
// // //   nameWave:   { fontSize:26 },
// // //   nameBar:    { width:60, height:3, borderRadius:2, marginTop:10 },
// // //   avatarHalo: { position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
// // //   avatarGrad: { width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
// // //   avatar:     { width:55, height:55, borderRadius:28 },

// // //   // Hero
// // //   heroOuter:  { borderRadius:22, overflow:'hidden' },
// // //   heroBorder: { padding:1.5, borderRadius:22 },
// // //   heroCard:   { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
// // //   heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
// // //   heroLeft:   {},
// // //   orbitWrap:  { width:60, height:60, justifyContent:'center', alignItems:'center' },
// // //   orbit:      { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
// // //   orbitCore:  { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
// // //   heroRight:  { flex:1 },
// // //   heroPre:    { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
// // //   heroType:   { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
// // //   heroBtn:    { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
// // //   heroBtnG:   { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
// // //   heroBtnTxt: { color:T.bg, fontSize:13, fontWeight:'800' },
// // //   dotGrid:    { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
// // //   dotGridItem:{ width:5, height:5, borderRadius:3 },

// // //   // Search
// // //   searchBox:  { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
// // //                 borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
// // //   searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
// // //   goBtn:      { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
// // //   tagsRow:    { flexDirection:'row', gap:8, flexWrap:'wrap' },
// // //   tagPill:    { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
// // //   tagPillTxt: { color:T.t2, fontSize:11, fontWeight:'600' },
// // //   particle:   { position:'absolute' },
// // //   pDot:       { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

// // //   // City cards
// // //   cityCard:    { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
// // //   cityImg:     { width:'100%', height:'100%' },
// // //   cityGrad:    { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
// // //   cityTopRow:  { position:'absolute', top:14, left:14 },
// // //   liveChip:    { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
// // //   liveDot:     { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
// // //   liveChipTxt: { fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // //   cityName:    { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
// // //   cityMeta:    { flexDirection:'row', alignItems:'center' },
// // //   cityMetaTxt: { color:T.t3, fontSize:11 },
// // //   cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
// // //   shimmerRow:  { flexDirection:'row', gap:14 },
// // //   loadBox:     { paddingVertical:10 },
// // //   secRow:      { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
// // //   secLeft:     { flexDirection:'row', alignItems:'center' },
// // //   secTitle:    { color:T.t1, fontSize:15, fontWeight:'700' },
// // //   secTitle2:   { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
// // //   secBadge:    { color:T.t3, fontSize:11 },
// // //   seeAll:      { fontSize:13, fontWeight:'600' },

// // //   // Bento
// // //   bento:       { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // //   bentoItem:   { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
// // //                  alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
// // //   bentoIcon:   { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
// // //   bentoTxt:    { fontSize:12, fontWeight:'700' },
// // //   bentoDot:    { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },
// // //   memBentoRing:{ position:'absolute', width:70, height:70, borderRadius:35, borderWidth:1, borderStyle:'dashed' },

// // //   // Memory Banner
// // //   memBanner:   { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center',
// // //                  padding:20, borderWidth:1, borderColor:'#2A1F08', position:'relative' },
// // //   memStrip:    { position:'absolute', top:0, left:0, right:0, height:2 },
// // //   memCircle1:  { position:'absolute', width:180, height:180, borderRadius:90, top:-60, right:-40,
// // //                  backgroundColor:'rgba(255,217,125,0.06)' },
// // //   memCircle2:  { position:'absolute', width:90, height:90, borderRadius:45, bottom:-30, left:60,
// // //                  backgroundColor:'rgba(255,217,125,0.04)' },
// // //   memBadgeRow: { flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,217,125,0.1)',
// // //                  paddingHorizontal:10, paddingVertical:3, borderRadius:20, alignSelf:'flex-start',
// // //                  marginBottom:10, borderWidth:1, borderColor:'rgba(255,217,125,0.2)' },
// // //   memBadgeDot: { width:6, height:6, borderRadius:3, backgroundColor:T.gold },
// // //   memBadgeTxt: { color:T.gold, fontSize:8, fontWeight:'900', letterSpacing:1.5 },
// // //   memTitle:    { color:T.mint, fontSize:22, fontWeight:'900', letterSpacing:-0.5, lineHeight:28, marginBottom:6 },
// // //   memSub:      { color:T.t3, fontSize:11, marginBottom:12 },
// // //   memPillRow:  { flexDirection:'row', gap:6, flexWrap:'wrap' },
// // //   memPill:     { backgroundColor:'rgba(255,217,125,0.1)', paddingHorizontal:8, paddingVertical:3,
// // //                  borderRadius:10, borderWidth:1, borderColor:'rgba(255,217,125,0.2)' },
// // //   memPillTxt:  { color:T.gold, fontSize:9, fontWeight:'700' },
// // //   memIconWrap: { width:72, height:72, justifyContent:'center', alignItems:'center', position:'relative' },
// // //   memIconOrbit:{ position:'absolute', width:72, height:72, borderRadius:36, borderWidth:1,
// // //                  borderColor:'rgba(255,217,125,0.3)', borderStyle:'dashed' },
// // //   memIconCore: { width:60, height:60, borderRadius:18, backgroundColor:'rgba(255,217,125,0.12)',
// // //                  borderWidth:1, borderColor:'rgba(255,217,125,0.25)', justifyContent:'center', alignItems:'center' },

// // //   // Trending
// // //   trendCard:    { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
// // //   trendEmoji:   { fontSize:30, marginBottom:4 },
// // //   trendCity:    { color:'#FFF', fontSize:16, fontWeight:'800' },
// // //   trendSub:     { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
// // //   trendBadge:   { flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)',
// // //                   alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
// // //   trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
// // //   trendCircle:  { position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20,
// // //                   backgroundColor:'rgba(255,255,255,0.08)' },

// // //   // Stats
// // //   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
// // //   statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
// // //   statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
// // //   statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

// // //   // Weather
// // //   weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
// // //   weatherStrip: { height:2 },
// // //   weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
// // //   wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
// // //   wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
// // //   wtDeg:     { fontSize:24, fontWeight:'400' },
// // //   wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
// // //   wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
// // //   wtEmoji:   { fontSize:44 },
// // //   wtMinis:   { flexDirection:'row', gap:10 },
// // //   wtMini:    { alignItems:'center', gap:2 },
// // //   wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
// // //   wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
// // //   wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
// // //   wtDay:     { alignItems:'center', gap:4 },
// // //   wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
// // //   wtDayIc:   { fontSize:18 },
// // //   wtDayT:    { fontSize:12, fontWeight:'700' },

// // //   // Pick banner
// // //   pickCard:     { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
// // //   pickInner:    { flex:1 },
// // //   pickTopRow:   { flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
// // //   pickBadge:    { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
// // //   pickBadgeTxt: { color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// // //   pickDot:      { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
// // //   pickTitle:    { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
// // //   pickSub:      { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
// // //   pickTagsRow:  { flexDirection:'row', gap:6 },
// // //   pickTag:      { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
// // //   pickTagTxt:   { color:'#FFF', fontSize:10, fontWeight:'600' },
// // //   pickEmoji:    { fontSize:54 },
// // //   pickCircle1:  { position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
// // //   pickCircle2:  { position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

// // //   // Footer
// // //   footer:      { marginBottom:10 },
// // //   footerCard:  { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
// // //   footerStrip: { position:'absolute', top:0, left:0, right:0, height:2 },
// // //   footerTitle: { color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
// // //   footerSub:   { color:T.t3, fontSize:11, letterSpacing:1 },
// // //   footerPills: { flexDirection:'row', gap:8, marginTop:10 },
// // //   fpill:       { width:28, height:6, borderRadius:3 },
// // // });












// // // new 6
// // // new 2-->
// // import React, { useEffect, useRef, useState, useCallback } from 'react';
// // import {
// //   View, Text, StyleSheet, ScrollView, TouchableOpacity,
// //   FlatList, Image, Dimensions, Animated, TextInput,
// //   ActivityIndicator, StatusBar,
// // } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import axios from 'axios';

// // const { width } = Dimensions.get('window');

// // /* ═══ Design Tokens ════════════════════════════════ */
// // const T = {
// //   bg:      '#050505',
// //   surf:    '#0C0C0C',
// //   card:    '#131313',
// //   card2:   '#1A1A1A',
// //   border:  '#242424',
// //   border2: '#303030',
// //   mint:    '#FFFFFF',
// //   mintL:   '#F0F0F0',
// //   mintD:   '#C4C4C4',
// //   purple:  '#909090',
// //   purpleL: '#B8B8B8',
// //   pink:    '#505050',
// //   pinkL:   '#787878',
// //   gold:    '#FFD97D',   
// //   goldD:   '#E8E8E8',
// //   sky:     '#D0D0D0',
// //   t1: '#FFFFFF',
// //   t2: '#B0B0B0',
// //   t3: '#4A4A4A',
// //   // ✨ NEW: Added specific color for Packing List (Neon Green)
// //   neonGreen: '#4ADE80', 
// // };

// // /* ═══ Data ════════════════════════════════════════ */
// // const shortcuts = [
// //   { id:'1', name:'Budget',  icon:'wallet-outline',               c:'#FFFFFF', bg:'#111111' },
// //   { id:'2', name:'Flights', icon:'airplane',                     c:'#FFFFFF', bg:'#0C0C0C' },  
// //   { id:'3', name:'Hotels',  icon:'bed-outline',                  c:'#E8E8E8', bg:'#151515' },
// //   { id:'4', name:'Planner', icon:'calendar-outline',             c:'#C4C4C4', bg:'#0E0E0E' },
// //   { id:'5', name:'News',    icon:'newspaper',                    c:'#D0D0D0', bg:'#121212' },  
// //   { id:'6', name:'Map',     icon:'navigation',                   c:'#B8B8B8', bg:'#141414' },  
// //   { id:'7', name:'Memory',  icon:'book-open-page-variant',       c:'#FFD97D', bg:'#181208' },
// //   // ✨ NEW: Added Smart Packing
// //   { id:'8', name:'Packing', icon:'bag-suitcase',                 c:T.neonGreen, bg:'#0A1A0E' },
// // ];

// // const trending = [
// //   { id:'t1', city:'Tokyo',     sub:'Japan',       emoji:'🗼', g:['#151515','#2C2C2C'] },
// //   { id:'t2', city:'Santorini', sub:'Greece',      emoji:'🏛️', g:['#282828','#404040'] },
// //   { id:'t3', city:'Bali',      sub:'Indonesia',   emoji:'🌴', g:['#1E1E1E','#383838'] },
// //   { id:'t4', city:'Dubai',     sub:'UAE',         emoji:'🏙️', g:['#222222','#3C3C3C'] },
// //   { id:'t5', city:'Maldives',  sub:'South Asia',  emoji:'🏝️', g:['#1A1A1A','#303030'] },
// // ];

// // const aiPhrases = [
// //   'Discover the world...',
// //   'Find hidden gems...',
// //   'Plan your adventure...',
// //   'Explore smarter...',
// // ];

// // /* ═══ ✈ Flying Airplane ═══════════════════════════ */
// // const FlyingPlane = ({ animVal, top, color }) => {
// //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[-60, width+60] });
// //   const ty = animVal.interpolate({ inputRange:[0,0.5,1], outputRange:[0,-18,0] });
// //   const op = animVal.interpolate({ inputRange:[0,0.05,0.95,1], outputRange:[0,1,1,0] });
// //   return (
// //     <Animated.View style={[styles.bgPlane, { top, opacity:op, transform:[{translateX:tx},{translateY:ty}] }]}>
// //       <Ionicons name="airplane" size={18} color={color} />
// //       {[-20,-36,-52,-68].map(x => (
// //         <View key={x} style={[styles.trailDot, { right:-x, opacity:Math.abs(x)/80, backgroundColor:color }]} />
// //       ))}
// //     </Animated.View>
// //   );
// // };

// // /* ═══ 📍 Pulsing Location Pin ══════════════════════ */
// // const LocationPin = ({ x, y, color, pulseVal }) => {
// //   const ringScale = pulseVal.interpolate({ inputRange:[0,1], outputRange:[1,2.2] });
// //   const ringOp    = pulseVal.interpolate({ inputRange:[0,1], outputRange:[0.6,0] });
// //   return (
// //     <View style={[styles.bgPin, { left:x, top:y }]}>
// //       <Animated.View style={[styles.pinRing, { width:28, height:28, borderRadius:14,
// //         borderColor:color, transform:[{scale:ringScale}], opacity:ringOp }]} />
// //       <View style={[styles.pinDot, { backgroundColor:color }]} />
// //     </View>
// //   );
// // };

// // /* ═══ ☁ Drifting Cloud ═══════════════════════════ */
// // const DriftCloud = ({ animVal, top, size=1, opacity=0.07 }) => {
// //   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[width+100,-300] });
// //   return (
// //     <Animated.View style={[styles.bgCloud, { top, opacity, transform:[{translateX:tx},{scale:size}] }]}>
// //       <View style={[styles.cloudBody, { width:80, height:30 }]} />
// //       <View style={[styles.cloudPuff, { width:44, height:44, top:-20, left:10 }]} />
// //       <View style={[styles.cloudPuff, { width:34, height:34, top:-14, left:36 }]} />
// //     </Animated.View>
// //   );
// // };

// // /* ═══ Shimmer ════════════════════════════════════ */
// // const Shimmer = ({ w, h, br=10 }) => {
// //   const a = useRef(new Animated.Value(0)).current;
// //   useEffect(() => {
// //     Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
// //   }, []);
// //   const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w,w] });
// //   return (
// //     <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#222222', overflow:'hidden' }}>
// //       <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
// //         <LinearGradient colors={['transparent','#FFFFFF12','transparent']}
// //           start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
// //       </Animated.View>
// //     </View>
// //   );
// // };

// // /* ═══ Counter ════════════════════════════════════ */
// // const Counter = ({ target, suffix='', color }) => {
// //   const [val, setVal] = useState(0);
// //   useEffect(() => {
// //     let start = 0;
// //     const num = parseFloat(target);
// //     const step = num / 40;
// //     const t = setInterval(() => {
// //       start += step;
// //       if (start >= num) { setVal(num); clearInterval(t); }
// //       else setVal(Math.floor(start * 10) / 10);
// //     }, 35);
// //     return () => clearInterval(t);
// //   }, []);
// //   return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
// // };

// // /* ═══ GlowDot ════════════════════════════════════ */
// // const GlowDot = ({ color, size=8, pulseAnim }) => (
// //   <Animated.View style={[styles.glowDot, {
// //     width:size, height:size, borderRadius:size/2,
// //     backgroundColor:color,
// //     shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
// //     transform:[{scale:pulseAnim}],
// //   }]} />
// // );

// // /* ═══ City Card ══════════════════════════════════ */
// // const CityCard = ({ item, index, query }) => {
// //   const op = useRef(new Animated.Value(0)).current;
// //   const sc = useRef(new Animated.Value(0.8)).current;
// //   const sl = useRef(new Animated.Value(50)).current;
// //   useEffect(() => {
// //     Animated.sequence([
// //       Animated.delay(index * 100),
// //       Animated.parallel([
// //         Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
// //         Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
// //         Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
// //       ]),
// //     ]).start();
// //   }, []);
// //   return (
// //     <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
// //       <View style={styles.cityCard}>
// //         <Image source={{ uri:item.url }} style={styles.cityImg} />
// //         <LinearGradient colors={['transparent','rgba(255,255,255,0.05)','rgba(0,0,0,0.90)']} style={styles.cityGrad}>
// //           <View style={styles.cityTopRow}>
// //             <View style={[styles.liveChip, { borderColor:T.mint+'60' }]}>
// //               <View style={[styles.liveDot, { backgroundColor:T.mint, shadowColor:T.mint }]} />
// //               <Text style={[styles.liveChipTxt, { color:T.mintL }]}>LIVE</Text>
// //             </View>
// //           </View>
// //           <Text style={styles.cityName}>{query}</Text>
// //           <View style={styles.cityMeta}>
// //             <Ionicons name="camera-outline" size={11} color={T.t3} />
// //             <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
// //           </View>
// //         </LinearGradient>
// //         <View style={[styles.cornerAccent, { borderColor:T.mint }]} />
// //       </View>
// //     </Animated.View>
// //   );
// // };

// // /* ═══ Trend Card ═════════════════════════════════ */
// // const TrendCard = ({ item, index }) => {
// //   const op = useRef(new Animated.Value(0)).current;
// //   const sc = useRef(new Animated.Value(0.88)).current;
// //   useEffect(() => {
// //     Animated.sequence([
// //       Animated.delay(index * 90),
// //       Animated.parallel([
// //         Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
// //         Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
// //       ]),
// //     ]).start();
// //   }, []);
// //   return (
// //     <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
// //       <TouchableOpacity activeOpacity={0.82}>
// //         <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
// //           <Text style={styles.trendEmoji}>{item.emoji}</Text>
// //           <Text style={styles.trendCity}>{item.city}</Text>
// //           <Text style={styles.trendSub}>{item.sub}</Text>
// //           <View style={styles.trendBadge}>
// //             <Ionicons name="trending-up" size={10} color="#FFF" />
// //             <Text style={styles.trendBadgeTxt}>Trending</Text>
// //           </View>
// //           <View style={styles.trendCircle} />
// //         </LinearGradient>
// //       </TouchableOpacity>
// //     </Animated.View>
// //   );
// // };

// // /* ═══ Particle ═══════════════════════════════════ */
// // const Particle = ({ x, y, delay, color }) => {
// //   const a = useRef(new Animated.Value(0)).current;
// //   useEffect(() => {
// //     Animated.loop(Animated.sequence([
// //       Animated.delay(delay),
// //       Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
// //       Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
// //     ])).start();
// //   }, []);
// //   return (
// //     <Animated.View style={[styles.particle, {
// //       left:x, top:y,
// //       opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
// //       transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
// //     }]}>
// //       <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
// //     </Animated.View>
// //   );
// // };

// // /* ═══ ✦ Memory Book Promo Banner ════════════════ */
// // const MemoryBanner = ({ onPress, pulseAnim, spinStr }) => {
// //   const sc = useRef(new Animated.Value(0.92)).current;
// //   const op = useRef(new Animated.Value(0)).current;
// //   useEffect(() => {
// //     Animated.parallel([
// //       Animated.spring(sc, { toValue:1, friction:7, tension:60, useNativeDriver:true }),
// //       Animated.timing(op, { toValue:1, duration:500, useNativeDriver:true }),
// //     ]).start();
// //   }, []);
// //   return (
// //     <Animated.View style={{ opacity:op, transform:[{scale:sc}], marginBottom:26 }}>
// //       <TouchableOpacity onPress={onPress} activeOpacity={0.88}>
// //         <LinearGradient
// //           colors={['#1C1608', '#2A1F08', '#181208']}
// //           start={{x:0,y:0}} end={{x:1,y:1}}
// //           style={styles.memBanner}
// //         >
// //           <LinearGradient
// //             colors={[T.gold, '#FFC107', 'transparent']}
// //             start={{x:0,y:0}} end={{x:1,y:0}}
// //             style={styles.memStrip}
// //           />
// //           <View style={styles.memCircle1} />
// //           <View style={styles.memCircle2} />
// //           <View style={{ flex:1 }}>
// //             <View style={styles.memBadgeRow}>
// //               <Animated.View style={[styles.memBadgeDot, { transform:[{scale:pulseAnim}] }]} />
// //               <Text style={styles.memBadgeTxt}>  NEW FEATURE</Text>
// //             </View>
// //             <Text style={styles.memTitle}>Tour Memory{'\n'}Book</Text>
// //             <Text style={styles.memSub}>Upload photos · AI captions · Export PDF</Text>
// //             <View style={styles.memPillRow}>
// //               {['📷 Photos','⚡ AI Captions','📄 PDF Export'].map(p => (
// //                 <View key={p} style={styles.memPill}>
// //                   <Text style={styles.memPillTxt}>{p}</Text>
// //                 </View>
// //               ))}
// //             </View>
// //           </View>
// //           <View style={styles.memIconWrap}>
// //             <Animated.View style={[styles.memIconOrbit, { transform:[{rotate:spinStr}] }]} />
// //             <View style={styles.memIconCore}>
// //               <Text style={{ fontSize:34 }}>📖</Text>
// //             </View>
// //           </View>
// //         </LinearGradient>
// //       </TouchableOpacity>
// //     </Animated.View>
// //   );
// // };

// // /* ═══════════════════════════════════════════════════
// //    MAIN SCREEN
// // ═══════════════════════════════════════════════════ */
// // export default function HomeScreen({ navigation }) {
// //   const [query,     setQuery]     = useState('');
// //   const [images,    setImages]    = useState([]);
// //   const [loading,   setLoading]   = useState(false);
// //   const [particles, setParticles] = useState([]);
// //   const [focused,   setFocused]   = useState(false);
// //   const [imgKey,    setImgKey]    = useState(0);
// //   const [aiText,    setAiText]    = useState('');

// //   const inputRef = useRef(null);
// //   const fade     = useRef(new Animated.Value(0)).current;
// //   const slideY   = useRef(new Animated.Value(40)).current;
// //   const pulse    = useRef(new Animated.Value(0)).current;
// //   const float    = useRef(new Animated.Value(0)).current;
// //   const spin     = useRef(new Animated.Value(0)).current;
// //   const aurora   = useRef(new Animated.Value(0)).current;
// //   const plane1   = useRef(new Animated.Value(0)).current;
// //   const plane2   = useRef(new Animated.Value(0)).current;
// //   const pin1     = useRef(new Animated.Value(0)).current;
// //   const cloud1   = useRef(new Animated.Value(0)).current;
// //   const cloud2   = useRef(new Animated.Value(0)).current;
// //   const compass  = useRef(new Animated.Value(0)).current;
// //   const phraseIdx = useRef(0);

// //   useEffect(() => {
// //     Animated.parallel([
// //       Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
// //       Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
// //     ]).start();

// //     Animated.loop(Animated.sequence([
// //       Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
// //       Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
// //     ])).start();
// //     Animated.loop(Animated.sequence([
// //       Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
// //       Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
// //     ])).start();
// //     Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
// //     Animated.loop(Animated.sequence([
// //       Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
// //       Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
// //     ])).start();

// //     Animated.loop(Animated.sequence([
// //       Animated.timing(plane1, { toValue:1, duration:9000, useNativeDriver:true }),
// //       Animated.delay(4000),
// //       Animated.timing(plane1, { toValue:0, duration:0, useNativeDriver:true }),
// //       Animated.delay(3000),
// //     ])).start();
// //     Animated.loop(Animated.sequence([
// //       Animated.delay(6000),
// //       Animated.timing(plane2, { toValue:1, duration:11000, useNativeDriver:true }),
// //       Animated.delay(2000),
// //       Animated.timing(plane2, { toValue:0, duration:0, useNativeDriver:true }),
// //     ])).start();
// //     Animated.loop(Animated.sequence([
// //       Animated.timing(pin1, { toValue:1, duration:1500, useNativeDriver:true }),
// //       Animated.timing(pin1, { toValue:0, duration:600, useNativeDriver:true }),
// //       Animated.delay(2000),
// //     ])).start();
// //     Animated.loop(Animated.sequence([
// //       Animated.timing(cloud1, { toValue:1, duration:28000, useNativeDriver:true }),
// //       Animated.timing(cloud1, { toValue:0, duration:0, useNativeDriver:true }),
// //     ])).start();
// //     Animated.loop(Animated.sequence([
// //       Animated.delay(14000),
// //       Animated.timing(cloud2, { toValue:1, duration:22000, useNativeDriver:true }),
// //       Animated.timing(cloud2, { toValue:0, duration:0, useNativeDriver:true }),
// //     ])).start();
// //     Animated.loop(Animated.timing(compass, { toValue:1, duration:20000, useNativeDriver:true })).start();

// //     const typePhrase = () => {
// //       const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
// //       const t = setInterval(() => {
// //         i++; setAiText(ph.slice(0, i));
// //         if (i >= ph.length) {
// //           clearInterval(t);
// //           setTimeout(() => { phraseIdx.current = (phraseIdx.current+1) % aiPhrases.length; typePhrase(); }, 2000);
// //         }
// //       }, 55);
// //       return t;
// //     };
// //     const t = typePhrase();
// //     return () => clearInterval(t);
// //   }, []);

// //   const handleSearch = useCallback(async () => {
// //     if (!query.trim()) return;
// //     setParticles(Array.from({length:12}, (_,i) => ({
// //       id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
// //       color:[T.mint, T.purple, T.pink, T.gold, T.sky][i%5],
// //     })));
// //     setLoading(true); setImages([]);
// //     try {
// //       const r = await axios.get(`http://10.153.63.30:3000/api/photos?query=${query}`);
// //       if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
// //     } catch(e) { console.error(e); }
// //     finally { setLoading(false); }
// //   }, [query]);

// //   const spinStr  = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
// //   const floatY   = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
// //   const pulseS   = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
// //   const auroraX  = aurora.interpolate({ inputRange:[0,1], outputRange:[0,30] });
// //   const auroraO  = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });
// //   const compassR = compass.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });

// //   const navigateTo = (name) => {
// //     const routes = {
// //       Hotels:  'HotelSearch',
// //       Budget:  'Budget',
// //       Planner: 'Planner',
// //       News:    'News',
// //       Map:     'LiveNavigation',
// //       Flights: 'Flights',
// //       Memory:  'Memory',        
// //       Packing: 'SmartPacking', // ✨ NEW: Maps to SmartPackingScreen
// //     };
// //     if (routes[name]) navigation.navigate(routes[name]);
// //   };

// //   return (
// //     <SafeAreaView style={styles.root}>
// //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// //       {/* ── TRAVEL BG ─────────────────────────── */}
// //       <View style={StyleSheet.absoluteFill} pointerEvents="none">
// //         <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />
// //         <Animated.View style={[styles.auroraband, {
// //           backgroundColor:T.mint+'0D', top:60, height:220,
// //           transform:[{translateX:auroraX}], opacity:auroraO,
// //         }]} />
// //         <Animated.View style={[styles.auroraband, {
// //           backgroundColor:T.purple+'0A', top:130, height:180,
// //           transform:[{translateX:auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
// //           opacity:auroraO,
// //         }]} />
// //         <FlyingPlane animVal={plane1} top={120} color="rgba(255,107,74,0.45)" />
// //         <FlyingPlane animVal={plane2} top={280} color="rgba(56,189,248,0.4)" />
// //         <DriftCloud  animVal={cloud1} top={80}  size={1.2} opacity={0.07} />
// //         <DriftCloud  animVal={cloud2} top={200} size={0.8} opacity={0.05} />
// //         <LocationPin x={width*0.15} y={180} color="rgba(255,107,74,0.6)"  pulseVal={pin1} />
// //         <LocationPin x={width*0.72} y={350} color="rgba(56,189,248,0.6)"  pulseVal={pin1} />
// //         <LocationPin x={width*0.40} y={520} color="rgba(244,63,94,0.5)"   pulseVal={pin1} />
// //         <View style={styles.routeLine} />
// //         <Animated.View style={[styles.bgCompass, { transform:[{rotate:compassR}] }]}>
// //           <Ionicons name="compass-outline" size={140} color="rgba(255,255,255,0.03)" />
// //         </Animated.View>
// //         {[
// //           { x:width*0.1,  y:400, color:'rgba(255,107,74,0.25)' },
// //           { x:width*0.6,  y:160, color:'rgba(56,189,248,0.25)' },
// //           { x:width*0.85, y:480, color:'rgba(244,63,94,0.25)' },
// //           { x:width*0.3,  y:620, color:'rgba(255,255,255,0.15)' },
// //         ].map((d,i) => (
// //           <Animated.View key={i} style={[styles.mapDot, {
// //             left:d.x, top:d.y, backgroundColor:d.color,
// //             transform:[{scale:pulse.interpolate({inputRange:[0,1],outputRange:[1,1.5]})}],
// //           }]} />
// //         ))}
// //         <Animated.View style={[styles.blob, { backgroundColor:T.mint+'10', width:350, height:350,
// //           top:-100, right:-80, transform:[{translateY:floatY}] }]} />
// //         <Animated.View style={[styles.blob, { backgroundColor:T.purple+'0C', width:280, height:280,
// //           bottom:350, left:-90, transform:[{translateY:floatY}] }]} />
// //         <Animated.View style={[styles.blob, { backgroundColor:T.pink+'08', width:200, height:200,
// //           bottom:100, right:40, transform:[{translateY:floatY}] }]} />
// //         <Animated.View style={[styles.decRing, { borderColor:T.mint+'18', width:260, height:260, borderRadius:130,
// //           top:80, right:-100, transform:[{translateY:floatY}] }]} />
// //         <Animated.View style={[styles.decRing, { borderColor:T.purple+'14', width:180, height:180, borderRadius:90,
// //           bottom:200, left:-60, transform:[{translateY:floatY}] }]} />
// //       </View>

// //       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

// //         {/* ── HEADER ─────────────────────────── */}
// //         <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
// //           <View style={styles.header}>
// //             <View>
// //               <View style={styles.aiBadge}>
// //                 <GlowDot color={T.mint} pulseAnim={pulseS} />
// //                 <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
// //               </View>
// //               <Text style={styles.greet}>Good Evening 🌙</Text>
// //               <View style={styles.nameRow}>
// //                 <Text style={styles.name}>Chaitanya</Text>
// //                 <Text style={styles.nameWave}>👋</Text>
// //               </View>
// //               <LinearGradient colors={['#FFFFFF','#888888','#444444']}
// //                 start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
// //             </View>
// //             <View>
// //               <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
// //               <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
// //                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=FFFFFF&size=100' }} style={styles.avatar} />
// //               </LinearGradient>
// //             </View>
// //           </View>
// //         </Animated.View>

// //         {/* ── HERO CARD ──────────────────────── */}
// //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// //           <View style={styles.heroOuter}>
// //             <LinearGradient colors={['#FFFFFF','#888888','#0F0F0F']}
// //               start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
// //               <View style={styles.heroCard}>
// //                 <LinearGradient colors={[T.mint+'20', T.purple+'18','transparent']}
// //                   start={{x:0,y:0}} end={{x:1,y:1}} style={StyleSheet.absoluteFill} />
// //                 <View style={styles.heroContent}>
// //                   <View style={styles.heroLeft}>
// //                     <View style={styles.orbitWrap}>
// //                       <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
// //                       <View style={[styles.orbitCore, { backgroundColor:T.mint+'30', borderColor:T.mint+'50' }]}>
// //                         <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
// //                       </View>
// //                     </View>
// //                   </View>
// //                   <View style={styles.heroRight}>
// //                     <Text style={styles.heroPre}>⚡ MONO AI ENGINE</Text>
// //                     <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
// //                     <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
// //                       <LinearGradient colors={[T.mint,T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
// //                         <Text style={styles.heroBtnTxt}>Plan Trip</Text>
// //                         <Ionicons name="arrow-forward" size={13} color={T.bg} />
// //                       </LinearGradient>
// //                     </TouchableOpacity>
// //                   </View>
// //                 </View>
// //                 <View style={styles.dotGrid} pointerEvents="none">
// //                   {Array.from({length:6}).map((_,i) => (
// //                     <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
// //                   ))}
// //                 </View>
// //               </View>
// //             </LinearGradient>
// //           </View>
// //         </Animated.View>

// //         {/* ── SEARCH ─────────────────────────── */}
// //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
// //           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
// //           <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()}
// //             style={[styles.searchBox, focused && { borderColor:T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}>
// //             <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
// //             <TextInput
// //               ref={inputRef}
// //               placeholder="Where to next?"
// //               placeholderTextColor={T.t3}
// //               style={styles.searchInput}
// //               value={query}
// //               onChangeText={setQuery}
// //               onSubmitEditing={handleSearch}
// //               onFocus={() => setFocused(true)}
// //               onBlur={() => setFocused(false)}
// //               returnKeyType="search"
// //               blurOnSubmit={false}
// //               autoCorrect={false}
// //               autoCapitalize="none"
// //               underlineColorAndroid="transparent"
// //             />
// //             {loading
// //               ? <ActivityIndicator size="small" color={T.mint} />
// //               : query.length > 0 && (
// //                 <TouchableOpacity onPress={handleSearch}>
// //                   <LinearGradient colors={[T.mint,T.mintD]} style={styles.goBtn}>
// //                     <Ionicons name="arrow-forward" size={14} color={T.bg} />
// //                   </LinearGradient>
// //                 </TouchableOpacity>
// //               )
// //             }
// //           </TouchableOpacity>
// //           <View style={styles.tagsRow}>
// //             {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
// //               <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
// //                 <Text style={styles.tagPillTxt}>{t}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </Animated.View>

// //         {/* ── CITY RESULTS ───────────────────── */}
// //         {(images.length > 0 || loading) && (
// //           <Animated.View style={[styles.section, { opacity:fade }]}>
// //             <View style={styles.secRow}>
// //               <View style={styles.secLeft}>
// //                 <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
// //                 <Text style={styles.secTitle}> Results for "{query}"</Text>
// //               </View>
// //               <Text style={styles.secBadge}>{images.length} photos</Text>
// //             </View>
// //             {loading
// //               ? <View style={styles.loadBox}>
// //                   <View style={styles.shimmerRow}>
// //                     <Shimmer w={width*0.72} h={240} br={20} />
// //                     <Shimmer w={width*0.72} h={240} br={20} />
// //                   </View>
// //                 </View>
// //               : <FlatList key={imgKey} data={images} horizontal
// //                   showsHorizontalScrollIndicator={false}
// //                   keyExtractor={it => it.id}
// //                   snapToInterval={width*0.72+14}
// //                   decelerationRate="fast"
// //                   contentContainerStyle={{ paddingRight:20 }}
// //                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
// //                 />
// //             }
// //           </Animated.View>
// //         )}

// //         {/* ── QUICK ACCESS ───────────────────── */}
// //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// //           <Text style={styles.secTitle2}>Quick Access</Text>
// //           <View style={styles.bento}>
// //             {shortcuts.map((item) => (
// //               <TouchableOpacity key={item.id}
// //                 style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
// //                 activeOpacity={0.75}
// //                 onPress={() => navigateTo(item.name)}
// //               >
// //                 {/* Gold shimmer ring for Memory */}
// //                 {item.name === 'Memory' && (
// //                   <Animated.View style={[styles.memBentoRing, {
// //                     borderColor: T.gold+'50',
// //                     transform:[{scale:pulseS}],
// //                   }]} />
// //                 )}
// //                 {/* ✨ NEW: Green Neon ring for Packing */}
// //                 {item.name === 'Packing' && (
// //                   <Animated.View style={[styles.memBentoRing, {
// //                     borderColor: T.neonGreen+'50',
// //                     transform:[{scale:pulseS}],
// //                   }]} />
// //                 )}
// //                 <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
// //                   <MaterialCommunityIcons name={item.icon} size={22} color={item.c} />
// //                 </View>
// //                 <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
// //                 <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
// //               </TouchableOpacity>
// //             ))}
// //           </View>
// //         </Animated.View>

// //         {/* ── ✦ MEMORY BOOK PROMO BANNER ─────── */}
// //         <Animated.View style={{ opacity:fade, transform:[{translateY:slideY}] }}>
// //           <MemoryBanner
// //             onPress={() => navigation.navigate('Memory')}
// //             pulseAnim={pulseS}
// //             spinStr={spinStr}
// //           />
// //         </Animated.View>

// //         {/* ── TRENDING ───────────────────────── */}
// //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// //           <View style={styles.secRow}>
// //             <Text style={styles.secTitle2}>Trending 🔥</Text>
// //             <TouchableOpacity>
// //               <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
// //             </TouchableOpacity>
// //           </View>
// //           <FlatList data={trending} horizontal showsHorizontalScrollIndicator={false}
// //             keyExtractor={it=>it.id}
// //             contentContainerStyle={{ gap:12, paddingRight:20 }}
// //             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
// //           />
// //         </Animated.View>

// //         {/* ── STATS ──────────────────────────── */}
// //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// //           <Text style={styles.secTitle2}>By the Numbers</Text>
// //           <View style={styles.statsGrid}>
// //             {[
// //               { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
// //               { label:'AI Accuracy',   num:'98.7',suf:'%',  color:T.purple },
// //               { label:'Destinations',  num:'190', suf:'+',  color:T.pink },
// //               { label:'Happy Users',   num:'500', suf:'K',  color:T.gold },
// //             ].map((s,i) => (
// //               <View key={i} style={[styles.statCard, { borderColor:s.color+'30' }]}>
// //                 <LinearGradient colors={[s.color+'18','transparent']} style={StyleSheet.absoluteFill} />
// //                 <Counter target={s.num} suffix={s.suf} color={s.color} />
// //                 <Text style={styles.statLabel}>{s.label}</Text>
// //               </View>
// //             ))}
// //           </View>
// //         </Animated.View>

// //         {/* ── WEATHER ────────────────────────── */}
// //         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
// //           <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
// //             <LinearGradient colors={['#FFFFFF','#888888','#444444']}
// //               start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
// //             <View style={styles.weatherBody}>
// //               <View>
// //                 <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
// //                 <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
// //                 <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
// //               </View>
// //               <View style={styles.wtRight}>
// //                 <Text style={styles.wtEmoji}>⛅</Text>
// //                 <View style={styles.wtMinis}>
// //                   {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
// //                     <View key={v} style={styles.wtMini}><Text>{ic}</Text><Text style={styles.wtMiniV}>{v}</Text></View>
// //                   ))}
// //                 </View>
// //               </View>
// //             </View>
// //             <View style={[styles.wtLine, { backgroundColor:T.border }]} />
// //             <View style={styles.wtForecast}>
// //               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
// //                 <View key={d} style={styles.wtDay}>
// //                   <Text style={styles.wtDayL}>{d}</Text>
// //                   <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
// //                   <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
// //                 </View>
// //               ))}
// //             </View>
// //           </View>
// //         </Animated.View>

// //         {/* ── AI PICK ────────────────────────── */}
// //         <Animated.View style={[styles.section, { opacity:fade }]}>
// //           <LinearGradient colors={['#041228','#222222','#1D4060']}
// //             start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
// //             <View style={styles.pickInner}>
// //               <View style={styles.pickTopRow}>
// //                 <View style={styles.pickBadge}><Text style={styles.pickBadgeTxt}>✦ AI PICK</Text></View>
// //                 <Text style={styles.pickDot}>TODAY</Text>
// //               </View>
// //               <Text style={styles.pickTitle}>Santorini, Greece</Text>
// //               <Text style={styles.pickSub}>Perfect season · April – June</Text>
// //               <View style={styles.pickTagsRow}>
// //                 {['Romantic','Beach','Scenic'].map(t=>(
// //                   <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
// //                 ))}
// //               </View>
// //             </View>
// //             <Text style={styles.pickEmoji}>🏛️</Text>
// //             <View style={styles.pickCircle1} />
// //             <View style={styles.pickCircle2} />
// //           </LinearGradient>
// //         </Animated.View>

// //         {/* ── FOOTER ─────────────────────────── */}
// //         <Animated.View style={[styles.footer, { opacity:fade }]}>
// //           <LinearGradient colors={[T.mint+'15',T.purple+'10']} style={styles.footerCard}>
// //             <LinearGradient colors={['#FFFFFF','#888888','#444444']}
// //               start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
// //             <Animated.View style={{ transform:[{rotate:spinStr}] }}>
// //               <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
// //             </Animated.View>
// //             <Text style={styles.footerTitle}>Mono Travel AI</Text>
// //             <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
// //             <View style={styles.footerPills}>
// //               {[T.mint,T.purple,T.pink,T.gold].map(c=>(
// //                 <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
// //               ))}
// //             </View>
// //           </LinearGradient>
// //         </Animated.View>

// //         <View style={{ height:50 }} />
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // /* ═══ Styles ════════════════════════════════════ */
// // const BW = (width - 72) / 3;
// // const styles = StyleSheet.create({
// //   root:   { flex:1, backgroundColor:T.bg },
// //   scroll: { paddingHorizontal:20, paddingTop:12 },
// //   section:{ marginBottom:26 },

// //   // BG
// //   auroraband: { position:'absolute', left:0, right:0, borderRadius:40 },
// //   blob:       { position:'absolute', borderRadius:9999 },
// //   decRing:    { position:'absolute', borderWidth:1 },
// //   bgPlane:    { position:'absolute', left:0, flexDirection:'row', alignItems:'center' },
// //   trailDot:   { position:'absolute', width:3, height:3, borderRadius:1.5 },
// //   bgPin:      { position:'absolute', width:28, height:28, justifyContent:'center', alignItems:'center' },
// //   pinRing:    { position:'absolute', borderWidth:1.5 },
// //   pinDot:     { width:8, height:8, borderRadius:4, shadowOpacity:1, shadowRadius:5 },
// //   bgCloud:    { position:'absolute', right:0 },
// //   cloudBody:  { backgroundColor:'rgba(255,255,255,0.8)', borderRadius:20 },
// //   cloudPuff:  { position:'absolute', backgroundColor:'rgba(255,255,255,0.8)', borderRadius:22 },
// //   bgCompass:  { position:'absolute', bottom:-40, left:-40, opacity:0.6 },
// //   mapDot:     { position:'absolute', width:4, height:4, borderRadius:2 },
// //   routeLine:  { position:'absolute', width:300, height:300, borderRadius:150, borderWidth:1,
// //                 borderStyle:'dashed', borderColor:'rgba(255,255,255,0.03)', top:100, left:-100, transform:[{rotate:'30deg'}] },

// //   // Header
// //   headerWrap: { marginBottom:24 },
// //   header:     { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
// //   aiBadge:    { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
// //   aiBadgeTxt: { color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
// //   glowDot:    {},
// //   greet:      { color:T.t2, fontSize:13, fontWeight:'500' },
// //   nameRow:    { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
// //   name:       { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
// //   nameWave:   { fontSize:26 },
// //   nameBar:    { width:60, height:3, borderRadius:2, marginTop:10 },
// //   avatarHalo: { position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
// //   avatarGrad: { width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
// //   avatar:     { width:55, height:55, borderRadius:28 },

// //   // Hero
// //   heroOuter:  { borderRadius:22, overflow:'hidden' },
// //   heroBorder: { padding:1.5, borderRadius:22 },
// //   heroCard:   { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
// //   heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
// //   heroLeft:   {},
// //   orbitWrap:  { width:60, height:60, justifyContent:'center', alignItems:'center' },
// //   orbit:      { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
// //   orbitCore:  { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
// //   heroRight:  { flex:1 },
// //   heroPre:    { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
// //   heroType:   { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
// //   heroBtn:    { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
// //   heroBtnG:   { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
// //   heroBtnTxt: { color:T.bg, fontSize:13, fontWeight:'800' },
// //   dotGrid:    { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
// //   dotGridItem:{ width:5, height:5, borderRadius:3 },

// //   // Search
// //   searchBox:  { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
// //                 borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
// //   searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
// //   goBtn:      { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
// //   tagsRow:    { flexDirection:'row', gap:8, flexWrap:'wrap' },
// //   tagPill:    { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
// //   tagPillTxt: { color:T.t2, fontSize:11, fontWeight:'600' },
// //   particle:   { position:'absolute' },
// //   pDot:       { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

// //   // City cards
// //   cityCard:    { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
// //   cityImg:     { width:'100%', height:'100%' },
// //   cityGrad:    { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
// //   cityTopRow:  { position:'absolute', top:14, left:14 },
// //   liveChip:    { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
// //   liveDot:     { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
// //   liveChipTxt: { fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// //   cityName:    { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
// //   cityMeta:    { flexDirection:'row', alignItems:'center' },
// //   cityMetaTxt: { color:T.t3, fontSize:11 },
// //   cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
// //   shimmerRow:  { flexDirection:'row', gap:14 },
// //   loadBox:     { paddingVertical:10 },
// //   secRow:      { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
// //   secLeft:     { flexDirection:'row', alignItems:'center' },
// //   secTitle:    { color:T.t1, fontSize:15, fontWeight:'700' },
// //   secTitle2:   { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
// //   secBadge:    { color:T.t3, fontSize:11 },
// //   seeAll:      { fontSize:13, fontWeight:'600' },

// //   // Bento
// //   bento:       { flexDirection:'row', flexWrap:'wrap', gap:12 },
// //   bentoItem:   { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
// //                  alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
// //   bentoIcon:   { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
// //   bentoTxt:    { fontSize:12, fontWeight:'700' },
// //   bentoDot:    { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },
// //   memBentoRing:{ position:'absolute', width:70, height:70, borderRadius:35, borderWidth:1, borderStyle:'dashed' },

// //   // Memory Banner
// //   memBanner:   { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center',
// //                  padding:20, borderWidth:1, borderColor:'#2A1F08', position:'relative' },
// //   memStrip:    { position:'absolute', top:0, left:0, right:0, height:2 },
// //   memCircle1:  { position:'absolute', width:180, height:180, borderRadius:90, top:-60, right:-40,
// //                  backgroundColor:'rgba(255,217,125,0.06)' },
// //   memCircle2:  { position:'absolute', width:90, height:90, borderRadius:45, bottom:-30, left:60,
// //                  backgroundColor:'rgba(255,217,125,0.04)' },
// //   memBadgeRow: { flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,217,125,0.1)',
// //                  paddingHorizontal:10, paddingVertical:3, borderRadius:20, alignSelf:'flex-start',
// //                  marginBottom:10, borderWidth:1, borderColor:'rgba(255,217,125,0.2)' },
// //   memBadgeDot: { width:6, height:6, borderRadius:3, backgroundColor:T.gold },
// //   memBadgeTxt: { color:T.gold, fontSize:8, fontWeight:'900', letterSpacing:1.5 },
// //   memTitle:    { color:T.mint, fontSize:22, fontWeight:'900', letterSpacing:-0.5, lineHeight:28, marginBottom:6 },
// //   memSub:      { color:T.t3, fontSize:11, marginBottom:12 },
// //   memPillRow:  { flexDirection:'row', gap:6, flexWrap:'wrap' },
// //   memPill:     { backgroundColor:'rgba(255,217,125,0.1)', paddingHorizontal:8, paddingVertical:3,
// //                  borderRadius:10, borderWidth:1, borderColor:'rgba(255,217,125,0.2)' },
// //   memPillTxt:  { color:T.gold, fontSize:9, fontWeight:'700' },
// //   memIconWrap: { width:72, height:72, justifyContent:'center', alignItems:'center', position:'relative' },
// //   memIconOrbit:{ position:'absolute', width:72, height:72, borderRadius:36, borderWidth:1,
// //                  borderColor:'rgba(255,217,125,0.3)', borderStyle:'dashed' },
// //   memIconCore: { width:60, height:60, borderRadius:18, backgroundColor:'rgba(255,217,125,0.12)',
// //                  borderWidth:1, borderColor:'rgba(255,217,125,0.25)', justifyContent:'center', alignItems:'center' },

// //   // Trending
// //   trendCard:    { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
// //   trendEmoji:   { fontSize:30, marginBottom:4 },
// //   trendCity:    { color:'#FFF', fontSize:16, fontWeight:'800' },
// //   trendSub:     { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
// //   trendBadge:   { flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)',
// //                   alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
// //   trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
// //   trendCircle:  { position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20,
// //                   backgroundColor:'rgba(255,255,255,0.08)' },

// //   // Stats
// //   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
// //   statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
// //   statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
// //   statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

// //   // Weather
// //   weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
// //   weatherStrip: { height:2 },
// //   weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
// //   wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
// //   wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
// //   wtDeg:     { fontSize:24, fontWeight:'400' },
// //   wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
// //   wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
// //   wtEmoji:   { fontSize:44 },
// //   wtMinis:   { flexDirection:'row', gap:10 },
// //   wtMini:    { alignItems:'center', gap:2 },
// //   wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
// //   wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
// //   wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
// //   wtDay:     { alignItems:'center', gap:4 },
// //   wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
// //   wtDayIc:   { fontSize:18 },
// //   wtDayT:    { fontSize:12, fontWeight:'700' },

// //   // Pick banner
// //   pickCard:     { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
// //   pickInner:    { flex:1 },
// //   pickTopRow:   { flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
// //   pickBadge:    { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
// //   pickBadgeTxt: { color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
// //   pickDot:      { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
// //   pickTitle:    { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
// //   pickSub:      { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
// //   pickTagsRow:  { flexDirection:'row', gap:6 },
// //   pickTag:      { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
// //   pickTagTxt:   { color:'#FFF', fontSize:10, fontWeight:'600' },
// //   pickEmoji:    { fontSize:54 },
// //   pickCircle1:  { position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
// //   pickCircle2:  { position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

// //   // Footer
// //   footer:      { marginBottom:10 },
// //   footerCard:  { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
// //   footerStrip: { position:'absolute', top:0, left:0, right:0, height:2 },
// //   footerTitle: { color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
// //   footerSub:   { color:T.t3, fontSize:11, letterSpacing:1 },
// //   footerPills: { flexDirection:'row', gap:8, marginTop:10 },
// //   fpill:       { width:28, height:6, borderRadius:3 },
// // });









// // 55
// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import {
//   View, Text, StyleSheet, ScrollView, TouchableOpacity,
//   FlatList, Image, Dimensions, Animated, TextInput,
//   ActivityIndicator, StatusBar, KeyboardAvoidingView, Platform,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import axios from 'axios';

// const { width } = Dimensions.get('window');

// /* ═══ Design Tokens ════════════════════════════════ */
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
//   purpleL: '#B8B8B8',
//   pink:    '#505050',
//   pinkL:   '#787878',
//   gold:    '#FFD97D',   
//   goldD:   '#E8E8E8',
//   sky:     '#D0D0D0',
//   t1: '#FFFFFF',
//   t2: '#B0B0B0',
//   t3: '#4A4A4A',
//   neonGreen: '#4ADE80', 
//   aiBlue:  '#38BDF8', // New token for AI accents
// };

// /* ═══ Data ════════════════════════════════════════ */
// const shortcuts = [
//   { id:'1', name:'Budget',  icon:'wallet-outline',               c:'#FFFFFF', bg:'#111111' },
//   { id:'2', name:'Flights', icon:'airplane',                     c:'#FFFFFF', bg:'#0C0C0C' },  
//   { id:'3', name:'Hotels',  icon:'bed-outline',                  c:'#E8E8E8', bg:'#151515' },
//   { id:'4', name:'Planner', icon:'calendar-outline',             c:'#C4C4C4', bg:'#0E0E0E' },
//   { id:'5', name:'News',    icon:'newspaper',                    c:'#D0D0D0', bg:'#121212' },  
//   { id:'6', name:'Map',     icon:'navigation',                   c:'#B8B8B8', bg:'#141414' },  
//   { id:'7', name:'Memory',  icon:'book-open-page-variant',       c:'#FFD97D', bg:'#181208' },
//   { id:'8', name:'Packing', icon:'bag-suitcase',                 c:T.neonGreen, bg:'#0A1A0E' },
//   // ✨ NEW: Added Travel AI
//   { id:'9', name:'Travel AI', icon:'robot-outline',              c:T.aiBlue, bg:'#081014' },
// ];

// const trending = [
//   { id:'t1', city:'Tokyo',     sub:'Japan',       emoji:'🗼', g:['#151515','#2C2C2C'] },
//   { id:'t2', city:'Santorini', sub:'Greece',      emoji:'🏛️', g:['#282828','#404040'] },
//   { id:'t3', city:'Bali',      sub:'Indonesia',   emoji:'🌴', g:['#1E1E1E','#383838'] },
//   { id:'t4', city:'Dubai',     sub:'UAE',         emoji:'🏙️', g:['#222222','#3C3C3C'] },
//   { id:'t5', city:'Maldives',  sub:'South Asia',  emoji:'🏝️', g:['#1A1A1A','#303030'] },
// ];

// const aiPhrases = [
//   'Discover the world...',
//   'Find hidden gems...',
//   'Plan your adventure...',
//   'Explore smarter...',
// ];

// /* ═══ ✈ Flying Airplane ═══════════════════════════ */
// const FlyingPlane = ({ animVal, top, color }) => {
//   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[-60, width+60] });
//   const ty = animVal.interpolate({ inputRange:[0,0.5,1], outputRange:[0,-18,0] });
//   const op = animVal.interpolate({ inputRange:[0,0.05,0.95,1], outputRange:[0,1,1,0] });
//   return (
//     <Animated.View style={[styles.bgPlane, { top, opacity:op, transform:[{translateX:tx},{translateY:ty}] }]}>
//       <Ionicons name="airplane" size={18} color={color} />
//       {[-20,-36,-52,-68].map(x => (
//         <View key={x} style={[styles.trailDot, { right:-x, opacity:Math.abs(x)/80, backgroundColor:color }]} />
//       ))}
//     </Animated.View>
//   );
// };

// /* ═══ 📍 Pulsing Location Pin ══════════════════════ */
// const LocationPin = ({ x, y, color, pulseVal }) => {
//   const ringScale = pulseVal.interpolate({ inputRange:[0,1], outputRange:[1,2.2] });
//   const ringOp    = pulseVal.interpolate({ inputRange:[0,1], outputRange:[0.6,0] });
//   return (
//     <View style={[styles.bgPin, { left:x, top:y }]}>
//       <Animated.View style={[styles.pinRing, { width:28, height:28, borderRadius:14,
//         borderColor:color, transform:[{scale:ringScale}], opacity:ringOp }]} />
//       <View style={[styles.pinDot, { backgroundColor:color }]} />
//     </View>
//   );
// };

// /* ═══ ☁ Drifting Cloud ═══════════════════════════ */
// const DriftCloud = ({ animVal, top, size=1, opacity=0.07 }) => {
//   const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[width+100,-300] });
//   return (
//     <Animated.View style={[styles.bgCloud, { top, opacity, transform:[{translateX:tx},{scale:size}] }]}>
//       <View style={[styles.cloudBody, { width:80, height:30 }]} />
//       <View style={[styles.cloudPuff, { width:44, height:44, top:-20, left:10 }]} />
//       <View style={[styles.cloudPuff, { width:34, height:34, top:-14, left:36 }]} />
//     </Animated.View>
//   );
// };

// /* ═══ Shimmer ════════════════════════════════════ */
// const Shimmer = ({ w, h, br=10 }) => {
//   const a = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
//   }, []);
//   const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w,w] });
//   return (
//     <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#222222', overflow:'hidden' }}>
//       <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
//         <LinearGradient colors={['transparent','#FFFFFF12','transparent']}
//           start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
//       </Animated.View>
//     </View>
//   );
// };

// /* ═══ Counter ════════════════════════════════════ */
// const Counter = ({ target, suffix='', color }) => {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     let start = 0;
//     const num = parseFloat(target);
//     const step = num / 40;
//     const t = setInterval(() => {
//       start += step;
//       if (start >= num) { setVal(num); clearInterval(t); }
//       else setVal(Math.floor(start * 10) / 10);
//     }, 35);
//     return () => clearInterval(t);
//   }, []);
//   return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
// };

// /* ═══ GlowDot ════════════════════════════════════ */
// const GlowDot = ({ color, size=8, pulseAnim }) => (
//   <Animated.View style={[styles.glowDot, {
//     width:size, height:size, borderRadius:size/2,
//     backgroundColor:color,
//     shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
//     transform:[{scale:pulseAnim}],
//   }]} />
// );

// /* ═══ City Card ══════════════════════════════════ */
// const CityCard = ({ item, index, query }) => {
//   const op = useRef(new Animated.Value(0)).current;
//   const sc = useRef(new Animated.Value(0.8)).current;
//   const sl = useRef(new Animated.Value(50)).current;
//   useEffect(() => {
//     Animated.sequence([
//       Animated.delay(index * 100),
//       Animated.parallel([
//         Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
//         Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
//         Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
//       ]),
//     ]).start();
//   }, []);
//   return (
//     <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
//       <View style={styles.cityCard}>
//         <Image source={{ uri:item.url }} style={styles.cityImg} />
//         <LinearGradient colors={['transparent','rgba(255,255,255,0.05)','rgba(0,0,0,0.90)']} style={styles.cityGrad}>
//           <View style={styles.cityTopRow}>
//             <View style={[styles.liveChip, { borderColor:T.mint+'60' }]}>
//               <View style={[styles.liveDot, { backgroundColor:T.mint, shadowColor:T.mint }]} />
//               <Text style={[styles.liveChipTxt, { color:T.mintL }]}>LIVE</Text>
//             </View>
//           </View>
//           <Text style={styles.cityName}>{query}</Text>
//           <View style={styles.cityMeta}>
//             <Ionicons name="camera-outline" size={11} color={T.t3} />
//             <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
//           </View>
//         </LinearGradient>
//         <View style={[styles.cornerAccent, { borderColor:T.mint }]} />
//       </View>
//     </Animated.View>
//   );
// };

// /* ═══ Trend Card ═════════════════════════════════ */
// const TrendCard = ({ item, index }) => {
//   const op = useRef(new Animated.Value(0)).current;
//   const sc = useRef(new Animated.Value(0.88)).current;
//   useEffect(() => {
//     Animated.sequence([
//       Animated.delay(index * 90),
//       Animated.parallel([
//         Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
//         Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
//       ]),
//     ]).start();
//   }, []);
//   return (
//     <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
//       <TouchableOpacity activeOpacity={0.82}>
//         <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
//           <Text style={styles.trendEmoji}>{item.emoji}</Text>
//           <Text style={styles.trendCity}>{item.city}</Text>
//           <Text style={styles.trendSub}>{item.sub}</Text>
//           <View style={styles.trendBadge}>
//             <Ionicons name="trending-up" size={10} color="#FFF" />
//             <Text style={styles.trendBadgeTxt}>Trending</Text>
//           </View>
//           <View style={styles.trendCircle} />
//         </LinearGradient>
//       </TouchableOpacity>
//     </Animated.View>
//   );
// };

// /* ═══ Particle ═══════════════════════════════════ */
// const Particle = ({ x, y, delay, color }) => {
//   const a = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     Animated.loop(Animated.sequence([
//       Animated.delay(delay),
//       Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
//       Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
//     ])).start();
//   }, []);
//   return (
//     <Animated.View style={[styles.particle, {
//       left:x, top:y,
//       opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
//       transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
//     }]}>
//       <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
//     </Animated.View>
//   );
// };

// /* ═══ ✦ Memory Book Promo Banner ════════════════ */
// const MemoryBanner = ({ onPress, pulseAnim, spinStr }) => {
//   const sc = useRef(new Animated.Value(0.92)).current;
//   const op = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     Animated.parallel([
//       Animated.spring(sc, { toValue:1, friction:7, tension:60, useNativeDriver:true }),
//       Animated.timing(op, { toValue:1, duration:500, useNativeDriver:true }),
//     ]).start();
//   }, []);
//   return (
//     <Animated.View style={{ opacity:op, transform:[{scale:sc}], marginBottom:26 }}>
//       <TouchableOpacity onPress={onPress} activeOpacity={0.88}>
//         <LinearGradient
//           colors={['#1C1608', '#2A1F08', '#181208']}
//           start={{x:0,y:0}} end={{x:1,y:1}}
//           style={styles.memBanner}
//         >
//           <LinearGradient
//             colors={[T.gold, '#FFC107', 'transparent']}
//             start={{x:0,y:0}} end={{x:1,y:0}}
//             style={styles.memStrip}
//           />
//           <View style={styles.memCircle1} />
//           <View style={styles.memCircle2} />
//           <View style={{ flex:1 }}>
//             <View style={styles.memBadgeRow}>
//               <Animated.View style={[styles.memBadgeDot, { transform:[{scale:pulseAnim}] }]} />
//               <Text style={styles.memBadgeTxt}>  NEW FEATURE</Text>
//             </View>
//             <Text style={styles.memTitle}>Tour Memory{'\n'}Book</Text>
//             <Text style={styles.memSub}>Upload photos · AI captions · Export PDF</Text>
//             <View style={styles.memPillRow}>
//               {['📷 Photos','⚡ AI Captions','📄 PDF Export'].map(p => (
//                 <View key={p} style={styles.memPill}>
//                   <Text style={styles.memPillTxt}>{p}</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//           <View style={styles.memIconWrap}>
//             <Animated.View style={[styles.memIconOrbit, { transform:[{rotate:spinStr}] }]} />
//             <View style={styles.memIconCore}>
//               <Text style={{ fontSize:34 }}>📖</Text>
//             </View>
//           </View>
//         </LinearGradient>
//       </TouchableOpacity>
//     </Animated.View>
//   );
// };

// /* ═══════════════════════════════════════════════════
//    1. NEW SCREEN: TRAVEL AI ASSISTANT
//    (Placed right before HomeScreen as requested)
// ═══════════════════════════════════════════════════ */
// const TravelAIScreen = () => {
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([
//     { id: 1, type: 'bot', text: 'Hello! I am your Travel AI. Ask me anything about destinations, visas, or packing tips! ✈️' }
//   ]);
//   const [typing, setTyping] = useState(false);
//   const fadeAnim = useRef(new Animated.Value(0)).current;
//   const scrollViewRef = useRef();

//   useEffect(() => {
//     Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
//   }, []);

//   // Simulate AI Response
//   const handleSend = () => {
//     if (!input.trim()) return;
    
//     const userMsg = { id: Date.now(), type: 'user', text: input };
//     setMessages(prev => [...prev, userMsg]);
//     setInput('');
//     setTyping(true);

//     // Simulate "thinking" delay
//     setTimeout(() => {
//       const botResponses = [
//         `Interesting question about "${input}"! I recommend checking local guidelines before you travel.`,
//         `For "${input}", the best time to visit is usually during the dry season. Would you like flight estimates?`,
//         `I found 3 hidden gems related to "${input}". Should I list them?`,
//         `Safety in "${input}" is generally good for tourists. Always keep your passport secure!`
//       ];
//       const randomResp = botResponses[Math.floor(Math.random() * botResponses.length)];
      
//       const botMsg = { id: Date.now() + 1, type: 'bot', text: randomResp };
//       setMessages(prev => [...prev, botMsg]);
//       setTyping(false);
//     }, 1500);
//   };

//   return (
//     <SafeAreaView style={styles.aiRoot}>
//       <StatusBar barStyle="light-content" />
      
//       {/* Header */}
//       <View style={styles.aiHeader}>
//         <View style={styles.aiHeaderCenter}>
//           <View style={styles.aiAvatarSmall}>
//             <MaterialCommunityIcons name="brain" size={20} color={T.aiBlue} />
//           </View>
//           <View>
//             <Text style={styles.aiHeaderTitle}>Mono AI</Text>
//             <View style={styles.aiStatusRow}>
//               <View style={[styles.aiStatusDot, { backgroundColor: T.neonGreen }]} />
//               <Text style={styles.aiStatusText}>Online</Text>
//             </View>
//           </View>
//         </View>
//         <View style={{ width: 40 }} />
//       </View>

//       {/* Chat Area */}
//       <KeyboardAvoidingView 
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={{ flex: 1 }}
//         keyboardVerticalOffset={10}
//       >
//         <Animated.ScrollView 
//           ref={scrollViewRef}
//           onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
//           style={{ flex: 1, opacity: fadeAnim }} 
//           contentContainerStyle={styles.aiChatContainer}
//         >
//           {messages.map(msg => (
//             <View key={msg.id} style={[
//               styles.msgBubble, 
//               msg.type === 'user' ? styles.msgUser : styles.msgBot
//             ]}>
//               {msg.type === 'bot' && (
//                 <View style={styles.msgBotIcon}>
//                   <MaterialCommunityIcons name="sparkles" size={14} color={T.aiBlue} />
//                 </View>
//               )}
//               <Text style={[styles.msgText, msg.type === 'user' && { color: T.bg }]}>
//                 {msg.text}
//               </Text>
//             </View>
//           ))}
//           {typing && (
//             <View style={[styles.msgBubble, styles.msgBot]}>
//               <View style={styles.typingIndicator}>
//                 <View style={styles.typingDot} />
//                 <View style={[styles.typingDot, { bottom: -2, opacity: 0.6 }]} />
//                 <View style={[styles.typingDot, { bottom: -4, opacity: 0.3 }]} />
//               </View>
//             </View>
//           )}
//         </Animated.ScrollView>

//         {/* Input Area */}
//         <View style={styles.aiInputWrap}>
//           <LinearGradient 
//             colors={['#111111', '#050505']} 
//             style={styles.aiInputGrad}
//           >
//             <TextInput 
//               value={input}
//               onChangeText={setInput}
//               placeholder="Ask about travel tips..."
//               placeholderTextColor={T.t3}
//               style={styles.aiInput}
//               onSubmitEditing={handleSend}
//             />
//             <TouchableOpacity onPress={handleSend} style={styles.aiSendBtn}>
//               <Ionicons name="send" size={18} color={T.bg} />
//             </TouchableOpacity>
//           </LinearGradient>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// /* ═══════════════════════════════════════════════════
//    MAIN SCREEN
// ═══════════════════════════════════════════════════ */
// export default function HomeScreen({ navigation }) {
//   const [query,     setQuery]     = useState('');
//   const [images,    setImages]    = useState([]);
//   const [loading,   setLoading]   = useState(false);
//   const [particles, setParticles] = useState([]);
//   const [focused,   setFocused]   = useState(false);
//   const [imgKey,    setImgKey]    = useState(0);
//   const [aiText,    setAiText]    = useState('');

//   const inputRef = useRef(null);
//   const fade     = useRef(new Animated.Value(0)).current;
//   const slideY   = useRef(new Animated.Value(40)).current;
//   const pulse    = useRef(new Animated.Value(0)).current;
//   const float    = useRef(new Animated.Value(0)).current;
//   const spin     = useRef(new Animated.Value(0)).current;
//   const aurora   = useRef(new Animated.Value(0)).current;
//   const plane1   = useRef(new Animated.Value(0)).current;
//   const plane2   = useRef(new Animated.Value(0)).current;
//   const pin1     = useRef(new Animated.Value(0)).current;
//   const cloud1   = useRef(new Animated.Value(0)).current;
//   const cloud2   = useRef(new Animated.Value(0)).current;
//   const compass  = useRef(new Animated.Value(0)).current;
//   const phraseIdx = useRef(0);

//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
//       Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
//     ]).start();

//     Animated.loop(Animated.sequence([
//       Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
//       Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
//     ])).start();
//     Animated.loop(Animated.sequence([
//       Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
//       Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
//     ])).start();
//     Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
//     Animated.loop(Animated.sequence([
//       Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
//       Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
//     ])).start();

//     Animated.loop(Animated.sequence([
//       Animated.timing(plane1, { toValue:1, duration:9000, useNativeDriver:true }),
//       Animated.delay(4000),
//       Animated.timing(plane1, { toValue:0, duration:0, useNativeDriver:true }),
//       Animated.delay(3000),
//     ])).start();
//     Animated.loop(Animated.sequence([
//       Animated.delay(6000),
//       Animated.timing(plane2, { toValue:1, duration:11000, useNativeDriver:true }),
//       Animated.delay(2000),
//       Animated.timing(plane2, { toValue:0, duration:0, useNativeDriver:true }),
//     ])).start();
//     Animated.loop(Animated.sequence([
//       Animated.timing(pin1, { toValue:1, duration:1500, useNativeDriver:true }),
//       Animated.timing(pin1, { toValue:0, duration:600, useNativeDriver:true }),
//       Animated.delay(2000),
//     ])).start();
//     Animated.loop(Animated.sequence([
//       Animated.timing(cloud1, { toValue:1, duration:28000, useNativeDriver:true }),
//       Animated.timing(cloud1, { toValue:0, duration:0, useNativeDriver:true }),
//     ])).start();
//     Animated.loop(Animated.sequence([
//       Animated.delay(14000),
//       Animated.timing(cloud2, { toValue:1, duration:22000, useNativeDriver:true }),
//       Animated.timing(cloud2, { toValue:0, duration:0, useNativeDriver:true }),
//     ])).start();
//     Animated.loop(Animated.timing(compass, { toValue:1, duration:20000, useNativeDriver:true })).start();

//     const typePhrase = () => {
//       const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
//       const t = setInterval(() => {
//         i++; setAiText(ph.slice(0, i));
//         if (i >= ph.length) {
//           clearInterval(t);
//           setTimeout(() => { phraseIdx.current = (phraseIdx.current+1) % aiPhrases.length; typePhrase(); }, 2000);
//         }
//       }, 55);
//       return t;
//     };
//     const t = typePhrase();
//     return () => clearInterval(t);
//   }, []);

//   const handleSearch = useCallback(async () => {
//     if (!query.trim()) return;
//     setParticles(Array.from({length:12}, (_,i) => ({
//       id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
//       color:[T.mint, T.purple, T.pink, T.gold, T.sky][i%5],
//     })));
//     setLoading(true); setImages([]);
//     try {
//     const r = await axios.get(`https://semproject-1a4i.vercel.app/api/photos?q=${encodeURIComponent(query)}`);
//       if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
//     } catch(e) { console.error(e); }
//     finally { setLoading(false); }
//   }, [query]);

//   const spinStr  = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
//   const floatY   = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
//   const pulseS   = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
//   const auroraX  = aurora.interpolate({ inputRange:[0,1], outputRange:[0,30] });
//   const auroraO  = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });
//   const compassR = compass.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });

//   const navigateTo = (name) => {
//     const routes = {
//       Hotels:  'HotelSearch',
//       Budget:  'Budget',
//       Planner: 'Planner',
//       News:    'News',
//       Map:     'LiveNavigation',
//       Flights: 'Flights',
//       Memory:  'Memory',        
//       Packing: 'SmartPacking', 
//       'Travel AI': 'TravelAI', // ✨ NEW: Route added
//     };
//     if (routes[name]) navigation.navigate(routes[name]);
//   };

//   return (
//     <SafeAreaView style={styles.root}>
//       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

//       {/* ── TRAVEL BG ─────────────────────────── */}
//       <View style={StyleSheet.absoluteFill} pointerEvents="none">
//         <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />
//         <Animated.View style={[styles.auroraband, {
//           backgroundColor:T.mint+'0D', top:60, height:220,
//           transform:[{translateX:auroraX}], opacity:auroraO,
//         }]} />
//         <Animated.View style={[styles.auroraband, {
//           backgroundColor:T.purple+'0A', top:130, height:180,
//           transform:[{translateX:auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
//           opacity:auroraO,
//         }]} />
//         <FlyingPlane animVal={plane1} top={120} color="rgba(255,107,74,0.45)" />
//         <FlyingPlane animVal={plane2} top={280} color="rgba(56,189,248,0.4)" />
//         <DriftCloud  animVal={cloud1} top={80}  size={1.2} opacity={0.07} />
//         <DriftCloud  animVal={cloud2} top={200} size={0.8} opacity={0.05} />
//         <LocationPin x={width*0.15} y={180} color="rgba(255,107,74,0.6)"  pulseVal={pin1} />
//         <LocationPin x={width*0.72} y={350} color="rgba(56,189,248,0.6)"  pulseVal={pin1} />
//         <LocationPin x={width*0.40} y={520} color="rgba(244,63,94,0.5)"   pulseVal={pin1} />
//         <View style={styles.routeLine} />
//         <Animated.View style={[styles.bgCompass, { transform:[{rotate:compassR}] }]}>
//           <Ionicons name="compass-outline" size={140} color="rgba(255,255,255,0.03)" />
//         </Animated.View>
//         {[
//           { x:width*0.1,  y:400, color:'rgba(255,107,74,0.25)' },
//           { x:width*0.6,  y:160, color:'rgba(56,189,248,0.25)' },
//           { x:width*0.85, y:480, color:'rgba(244,63,94,0.25)' },
//           { x:width*0.3,  y:620, color:'rgba(255,255,255,0.15)' },
//         ].map((d,i) => (
//           <Animated.View key={i} style={[styles.mapDot, {
//             left:d.x, top:d.y, backgroundColor:d.color,
//             transform:[{scale:pulse.interpolate({inputRange:[0,1],outputRange:[1,1.5]})}],
//           }]} />
//         ))}
//         <Animated.View style={[styles.blob, { backgroundColor:T.mint+'10', width:350, height:350,
//           top:-100, right:-80, transform:[{translateY:floatY}] }]} />
//         <Animated.View style={[styles.blob, { backgroundColor:T.purple+'0C', width:280, height:280,
//           bottom:350, left:-90, transform:[{translateY:floatY}] }]} />
//         <Animated.View style={[styles.blob, { backgroundColor:T.pink+'08', width:200, height:200,
//           bottom:100, right:40, transform:[{translateY:floatY}] }]} />
//         <Animated.View style={[styles.decRing, { borderColor:T.mint+'18', width:260, height:260, borderRadius:130,
//           top:80, right:-100, transform:[{translateY:floatY}] }]} />
//         <Animated.View style={[styles.decRing, { borderColor:T.purple+'14', width:180, height:180, borderRadius:90,
//           bottom:200, left:-60, transform:[{translateY:floatY}] }]} />
//       </View>

//       <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

//         {/* ── HEADER ─────────────────────────── */}
//         <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
//           <View style={styles.header}>
//             <View>
//               <View style={styles.aiBadge}>
//                 <GlowDot color={T.mint} pulseAnim={pulseS} />
//                 <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
//               </View>
//               <Text style={styles.greet}>Good Evening 🌙</Text>
//               <View style={styles.nameRow}>
//                 <Text style={styles.name}>Chaitanya</Text>
//                 <Text style={styles.nameWave}>👋</Text>
//               </View>
//               <LinearGradient colors={['#FFFFFF','#888888','#444444']}
//                 start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
//             </View>
//             <View>
//               <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
//               <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
//                 <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=FFFFFF&size=100' }} style={styles.avatar} />
//               </LinearGradient>
//             </View>
//           </View>
//         </Animated.View>

//         {/* ── HERO CARD ──────────────────────── */}
//         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
//           <View style={styles.heroOuter}>
//             <LinearGradient colors={['#FFFFFF','#888888','#0F0F0F']}
//               start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
//               <View style={styles.heroCard}>
//                 <LinearGradient colors={[T.mint+'20', T.purple+'18','transparent']}
//                   start={{x:0,y:0}} end={{x:1,y:1}} style={StyleSheet.absoluteFill} />
//                 <View style={styles.heroContent}>
//                   <View style={styles.heroLeft}>
//                     <View style={styles.orbitWrap}>
//                       <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
//                       <View style={[styles.orbitCore, { backgroundColor:T.mint+'30', borderColor:T.mint+'50' }]}>
//                         <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
//                       </View>
//                     </View>
//                   </View>
//                   <View style={styles.heroRight}>
//                     <Text style={styles.heroPre}>⚡ MONO AI ENGINE</Text>
//                     <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
//                     <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
//                       <LinearGradient colors={[T.mint,T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
//                         <Text style={styles.heroBtnTxt}>Plan Trip</Text>
//                         <Ionicons name="arrow-forward" size={13} color={T.bg} />
//                       </LinearGradient>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//                 <View style={styles.dotGrid} pointerEvents="none">
//                   {Array.from({length:6}).map((_,i) => (
//                     <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
//                   ))}
//                 </View>
//               </View>
//             </LinearGradient>
//           </View>
//         </Animated.View>

//         {/* ── SEARCH ─────────────────────────── */}
//         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
//           {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
//           <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()}
//             style={[styles.searchBox, focused && { borderColor:T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}>
//             <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
//             <TextInput
//               ref={inputRef}
//               placeholder="Where to next?"
//               placeholderTextColor={T.t3}
//               style={styles.searchInput}
//               value={query}
//               onChangeText={setQuery}
//               onSubmitEditing={handleSearch}
//               onFocus={() => setFocused(true)}
//               onBlur={() => setFocused(false)}
//               returnKeyType="search"
//               blurOnSubmit={false}
//               autoCorrect={false}
//               autoCapitalize="none"
//               underlineColorAndroid="transparent"
//             />
//             {loading
//               ? <ActivityIndicator size="small" color={T.mint} />
//               : query.length > 0 && (
//                 <TouchableOpacity onPress={handleSearch}>
//                   <LinearGradient colors={[T.mint,T.mintD]} style={styles.goBtn}>
//                     <Ionicons name="arrow-forward" size={14} color={T.bg} />
//                   </LinearGradient>
//                 </TouchableOpacity>
//               )
//             }
//           </TouchableOpacity>
//           <View style={styles.tagsRow}>
//             {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
//               <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
//                 <Text style={styles.tagPillTxt}>{t}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </Animated.View>

//         {/* ── CITY RESULTS ───────────────────── */}
//         {(images.length > 0 || loading) && (
//           <Animated.View style={[styles.section, { opacity:fade }]}>
//             <View style={styles.secRow}>
//               <View style={styles.secLeft}>
//                 <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
//                 <Text style={styles.secTitle}> Results for "{query}"</Text>
//               </View>
//               <Text style={styles.secBadge}>{images.length} photos</Text>
//             </View>
//             {loading
//               ? <View style={styles.loadBox}>
//                   <View style={styles.shimmerRow}>
//                     <Shimmer w={width*0.72} h={240} br={20} />
//                     <Shimmer w={width*0.72} h={240} br={20} />
//                   </View>
//                 </View>
//               : <FlatList key={imgKey} data={images} horizontal
//                   showsHorizontalScrollIndicator={false}
//                   keyExtractor={it => it.id}
//                   snapToInterval={width*0.72+14}
//                   decelerationRate="fast"
//                   contentContainerStyle={{ paddingRight:20 }}
//                   renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
//                 />
//             }
//           </Animated.View>
//         )}

//         {/* ── QUICK ACCESS ───────────────────── */}
//         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
//           <Text style={styles.secTitle2}>Quick Access</Text>
//           <View style={styles.bento}>
//             {shortcuts.map((item) => (
//               <TouchableOpacity key={item.id}
//                 style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
//                 activeOpacity={0.75}
//                 onPress={() => navigateTo(item.name)}
//               >
//                 {/* Gold shimmer ring for Memory */}
//                 {item.name === 'Memory' && (
//                   <Animated.View style={[styles.memBentoRing, {
//                     borderColor: T.gold+'50',
//                     transform:[{scale:pulseS}],
//                   }]} />
//                 )}
//                 {/* Green Neon ring for Packing */}
//                 {item.name === 'Packing' && (
//                   <Animated.View style={[styles.memBentoRing, {
//                     borderColor: T.neonGreen+'50',
//                     transform:[{scale:pulseS}],
//                   }]} />
//                 )}
//                 {/* Blue Neon ring for Travel AI */}
//                 {item.name === 'Travel AI' && (
//                   <Animated.View style={[styles.memBentoRing, {
//                     borderColor: T.aiBlue+'50',
//                     transform:[{scale:pulseS}],
//                   }]} />
//                 )}
//                 <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
//                   <MaterialCommunityIcons name={item.icon} size={22} color={item.c} />
//                 </View>
//                 <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
//                 <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
//               </TouchableOpacity>
//             ))}
//           </View>
//         </Animated.View>

//         {/* ── ✦ MEMORY BOOK PROMO BANNER ─────── */}
//         <Animated.View style={{ opacity:fade, transform:[{translateY:slideY}] }}>
//           <MemoryBanner
//             onPress={() => navigation.navigate('Memory')}
//             pulseAnim={pulseS}
//             spinStr={spinStr}
//           />
//         </Animated.View>

//         {/* ── TRENDING ───────────────────────── */}
//         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
//           <View style={styles.secRow}>
//             <Text style={styles.secTitle2}>Trending 🔥</Text>
//             <TouchableOpacity>
//               <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
//             </TouchableOpacity>
//           </View>
//           <FlatList data={trending} horizontal showsHorizontalScrollIndicator={false}
//             keyExtractor={it=>it.id}
//             contentContainerStyle={{ gap:12, paddingRight:20 }}
//             renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
//           />
//         </Animated.View>

//         {/* ── STATS ──────────────────────────── */}
//         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
//           <Text style={styles.secTitle2}>By the Numbers</Text>
//           <View style={styles.statsGrid}>
//             {[
//               { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
//               { label:'AI Accuracy',   num:'98.7',suf:'%',  color:T.purple },
//               { label:'Destinations',  num:'190', suf:'+',  color:T.pink },
//               { label:'Happy Users',   num:'500', suf:'K',  color:T.gold },
//             ].map((s,i) => (
//               <View key={i} style={[styles.statCard, { borderColor:s.color+'30' }]}>
//                 <LinearGradient colors={[s.color+'18','transparent']} style={StyleSheet.absoluteFill} />
//                 <Counter target={s.num} suffix={s.suf} color={s.color} />
//                 <Text style={styles.statLabel}>{s.label}</Text>
//               </View>
//             ))}
//           </View>
//         </Animated.View>

//         {/* ── WEATHER ────────────────────────── */}
//         <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
//           <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
//             <LinearGradient colors={['#FFFFFF','#888888','#444444']}
//               start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
//             <View style={styles.weatherBody}>
//               <View>
//                 <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
//                 <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
//                 <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
//               </View>
//               <View style={styles.wtRight}>
//                 <Text style={styles.wtEmoji}>⛅</Text>
//                 <View style={styles.wtMinis}>
//                   {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
//                     <View key={v} style={styles.wtMini}><Text>{ic}</Text><Text style={styles.wtMiniV}>{v}</Text></View>
//                   ))}
//                 </View>
//               </View>
//             </View>
//             <View style={[styles.wtLine, { backgroundColor:T.border }]} />
//             <View style={styles.wtForecast}>
//               {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
//                 <View key={d} style={styles.wtDay}>
//                   <Text style={styles.wtDayL}>{d}</Text>
//                   <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
//                   <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
//                 </View>
//               ))}
//             </View>
//           </View>
//         </Animated.View>

//         {/* ── AI PICK ────────────────────────── */}
//         <Animated.View style={[styles.section, { opacity:fade }]}>
//           <LinearGradient colors={['#041228','#222222','#1D4060']}
//             start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
//             <View style={styles.pickInner}>
//               <View style={styles.pickTopRow}>
//                 <View style={styles.pickBadge}><Text style={styles.pickBadgeTxt}>✦ AI PICK</Text></View>
//                 <Text style={styles.pickDot}>TODAY</Text>
//               </View>
//               <Text style={styles.pickTitle}>Santorini, Greece</Text>
//               <Text style={styles.pickSub}>Perfect season · April – June</Text>
//               <View style={styles.pickTagsRow}>
//                 {['Romantic','Beach','Scenic'].map(t=>(
//                   <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
//                 ))}
//               </View>
//             </View>
//             <Text style={styles.pickEmoji}>🏛️</Text>
//             <View style={styles.pickCircle1} />
//             <View style={styles.pickCircle2} />
//           </LinearGradient>
//         </Animated.View>

//         {/* ── FOOTER ─────────────────────────── */}
//         <Animated.View style={[styles.footer, { opacity:fade }]}>
//           <LinearGradient colors={[T.mint+'15',T.purple+'10']} style={styles.footerCard}>
//             <LinearGradient colors={['#FFFFFF','#888888','#444444']}
//               start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
//             <Animated.View style={{ transform:[{rotate:spinStr}] }}>
//               <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
//             </Animated.View>
//             <Text style={styles.footerTitle}>Mono Travel AI</Text>
//             <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
//             <View style={styles.footerPills}>
//               {[T.mint,T.purple,T.pink,T.gold].map(c=>(
//                 <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
//               ))}
//             </View>
//           </LinearGradient>
//         </Animated.View>

//         <View style={{ height:50 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// /* ═══ Styles ════════════════════════════════════ */
// const BW = (width - 72) / 3;
// const styles = StyleSheet.create({
//   root:   { flex:1, backgroundColor:T.bg },
//   scroll: { paddingHorizontal:20, paddingTop:12 },
//   section:{ marginBottom:26 },

//   // BG
//   auroraband: { position:'absolute', left:0, right:0, borderRadius:40 },
//   blob:       { position:'absolute', borderRadius:9999 },
//   decRing:    { position:'absolute', borderWidth:1 },
//   bgPlane:    { position:'absolute', left:0, flexDirection:'row', alignItems:'center' },
//   trailDot:   { position:'absolute', width:3, height:3, borderRadius:1.5 },
//   bgPin:      { position:'absolute', width:28, height:28, justifyContent:'center', alignItems:'center' },
//   pinRing:    { position:'absolute', borderWidth:1.5 },
//   pinDot:     { width:8, height:8, borderRadius:4, shadowOpacity:1, shadowRadius:5 },
//   bgCloud:    { position:'absolute', right:0 },
//   cloudBody:  { backgroundColor:'rgba(255,255,255,0.8)', borderRadius:20 },
//   cloudPuff:  { position:'absolute', backgroundColor:'rgba(255,255,255,0.8)', borderRadius:22 },
//   bgCompass:  { position:'absolute', bottom:-40, left:-40, opacity:0.6 },
//   mapDot:     { position:'absolute', width:4, height:4, borderRadius:2 },
//   routeLine:  { position:'absolute', width:300, height:300, borderRadius:150, borderWidth:1,
//                 borderStyle:'dashed', borderColor:'rgba(255,255,255,0.03)', top:100, left:-100, transform:[{rotate:'30deg'}] },

//   // Header
//   headerWrap: { marginBottom:24 },
//   header:     { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
//   aiBadge:    { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
//   aiBadgeTxt: { color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
//   glowDot:    {},
//   greet:      { color:T.t2, fontSize:13, fontWeight:'500' },
//   nameRow:    { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
//   name:       { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
//   nameWave:   { fontSize:26 },
//   nameBar:    { width:60, height:3, borderRadius:2, marginTop:10 },
//   avatarHalo: { position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
//   avatarGrad: { width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
//   avatar:     { width:55, height:55, borderRadius:28 },

//   // Hero
//   heroOuter:  { borderRadius:22, overflow:'hidden' },
//   heroBorder: { padding:1.5, borderRadius:22 },
//   heroCard:   { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
//   heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
//   heroLeft:   {},
//   orbitWrap:  { width:60, height:60, justifyContent:'center', alignItems:'center' },
//   orbit:      { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
//   orbitCore:  { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
//   heroRight:  { flex:1 },
//   heroPre:    { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
//   heroType:   { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
//   heroBtn:    { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
//   heroBtnG:   { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
//   heroBtnTxt: { color:T.bg, fontSize:13, fontWeight:'800' },
//   dotGrid:    { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
//   dotGridItem:{ width:5, height:5, borderRadius:3 },

//   // Search
//   searchBox:  { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
//                 borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
//   searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
//   goBtn:      { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
//   tagsRow:    { flexDirection:'row', gap:8, flexWrap:'wrap' },
//   tagPill:    { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
//   tagPillTxt: { color:T.t2, fontSize:11, fontWeight:'600' },
//   particle:   { position:'absolute' },
//   pDot:       { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

//   // City cards
//   cityCard:    { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
//   cityImg:     { width:'100%', height:'100%' },
//   cityGrad:    { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
//   cityTopRow:  { position:'absolute', top:14, left:14 },
//   liveChip:    { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
//   liveDot:     { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
//   liveChipTxt: { fontSize:9, fontWeight:'800', letterSpacing:1.5 },
//   cityName:    { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
//   cityMeta:    { flexDirection:'row', alignItems:'center' },
//   cityMetaTxt: { color:T.t3, fontSize:11 },
//   cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
//   shimmerRow:  { flexDirection:'row', gap:14 },
//   loadBox:     { paddingVertical:10 },
//   secRow:      { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
//   secLeft:     { flexDirection:'row', alignItems:'center' },
//   secTitle:    { color:T.t1, fontSize:15, fontWeight:'700' },
//   secTitle2:   { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
//   secBadge:    { color:T.t3, fontSize:11 },
//   seeAll:      { fontSize:13, fontWeight:'600' },

//   // Bento
//   bento:       { flexDirection:'row', flexWrap:'wrap', gap:12 },
//   bentoItem:   { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
//                  alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
//   bentoIcon:   { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
//   bentoTxt:    { fontSize:12, fontWeight:'700' },
//   bentoDot:    { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },
//   memBentoRing:{ position:'absolute', width:70, height:70, borderRadius:35, borderWidth:1, borderStyle:'dashed' },

//   // Memory Banner
//   memBanner:   { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center',
//                  padding:20, borderWidth:1, borderColor:'#2A1F08', position:'relative' },
//   memStrip:    { position:'absolute', top:0, left:0, right:0, height:2 },
//   memCircle1:  { position:'absolute', width:180, height:180, borderRadius:90, top:-60, right:-40,
//                  backgroundColor:'rgba(255,217,125,0.06)' },
//   memCircle2:  { position:'absolute', width:90, height:90, borderRadius:45, bottom:-30, left:60,
//                  backgroundColor:'rgba(255,217,125,0.04)' },
//   memBadgeRow: { flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,217,125,0.1)',
//                  paddingHorizontal:10, paddingVertical:3, borderRadius:20, alignSelf:'flex-start',
//                  marginBottom:10, borderWidth:1, borderColor:'rgba(255,217,125,0.2)' },
//   memBadgeDot: { width:6, height:6, borderRadius:3, backgroundColor:T.gold },
//   memBadgeTxt: { color:T.gold, fontSize:8, fontWeight:'900', letterSpacing:1.5 },
//   memTitle:    { color:T.mint, fontSize:22, fontWeight:'900', letterSpacing:-0.5, lineHeight:28, marginBottom:6 },
//   memSub:      { color:T.t3, fontSize:11, marginBottom:12 },
//   memPillRow:  { flexDirection:'row', gap:6, flexWrap:'wrap' },
//   memPill:     { backgroundColor:'rgba(255,217,125,0.1)', paddingHorizontal:8, paddingVertical:3,
//                  borderRadius:10, borderWidth:1, borderColor:'rgba(255,217,125,0.2)' },
//   memPillTxt:  { color:T.gold, fontSize:9, fontWeight:'700' },
//   memIconWrap: { width:72, height:72, justifyContent:'center', alignItems:'center', position:'relative' },
//   memIconOrbit:{ position:'absolute', width:72, height:72, borderRadius:36, borderWidth:1,
//                  borderColor:'rgba(255,217,125,0.3)', borderStyle:'dashed' },
//   memIconCore: { width:60, height:60, borderRadius:18, backgroundColor:'rgba(255,217,125,0.12)',
//                  borderWidth:1, borderColor:'rgba(255,217,125,0.25)', justifyContent:'center', alignItems:'center' },

//   // Trending
//   trendCard:    { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
//   trendEmoji:   { fontSize:30, marginBottom:4 },
//   trendCity:    { color:'#FFF', fontSize:16, fontWeight:'800' },
//   trendSub:     { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
//   trendBadge:   { flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)',
//                   alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
//   trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
//   trendCircle:  { position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20,
//                   backgroundColor:'rgba(255,255,255,0.08)' },

//   // Stats
//   statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
//   statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
//   statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
//   statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

//   // Weather
//   weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
//   weatherStrip: { height:2 },
//   weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
//   wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
//   wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
//   wtDeg:     { fontSize:24, fontWeight:'400' },
//   wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
//   wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
//   wtEmoji:   { fontSize:44 },
//   wtMinis:   { flexDirection:'row', gap:10 },
//   wtMini:    { alignItems:'center', gap:2 },
//   wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
//   wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
//   wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
//   wtDay:     { alignItems:'center', gap:4 },
//   wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
//   wtDayIc:   { fontSize:18 },
//   wtDayT:    { fontSize:12, fontWeight:'700' },

//   // Pick banner
//   pickCard:     { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
//   pickInner:    { flex:1 },
//   pickTopRow:   { flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
//   pickBadge:    { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
//   pickBadgeTxt: { color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
//   pickDot:      { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
//   pickTitle:    { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
//   pickSub:      { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
//   pickTagsRow:  { flexDirection:'row', gap:6 },
//   pickTag:      { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
//   pickTagTxt:   { color:'#FFF', fontSize:10, fontWeight:'600' },
//   pickEmoji:    { fontSize:54 },
//   pickCircle1:  { position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
//   pickCircle2:  { position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

//   // Footer
//   footer:      { marginBottom:10 },
//   footerCard:  { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
//   footerStrip: { position:'absolute', top:0, left:0, right:0, height:2 },
//   footerTitle: { color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
//   footerSub:   { color:T.t3, fontSize:11, letterSpacing:1 },
//   footerPills: { flexDirection:'row', gap:8, marginTop:10 },
//   fpill:       { width:28, height:6, borderRadius:3 },

//   // ── NEW: AI Chat Screen Styles ──
//   aiRoot:       { flex:1, backgroundColor:T.bg },
//   aiHeader:     { flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, paddingVertical:15, borderBottomWidth:1, borderBottomColor:T.border },
//   aiHeaderCenter:{ flexDirection:'row', alignItems:'center', gap:12 },
//   aiHeaderTitle: { color:T.t1, fontSize:18, fontWeight:'800' },
//   aiStatusRow:  { flexDirection:'row', alignItems:'center', gap:4 },
//   aiStatusDot:  { width:6, height:6, borderRadius:3 },
//   aiStatusText: { color:T.t3, fontSize:10, fontWeight:'600' },
//   aiAvatarSmall:{ width:40, height:40, borderRadius:20, backgroundColor:'#0B1E2D', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:T.aiBlue+'30' },
//   aiChatContainer:{ padding:20, paddingBottom:10 },
//   msgBubble:    { maxWidth:'85%', padding:14, borderRadius:18, marginBottom:12 },
//   msgUser:      { alignSelf:'flex-end', backgroundColor:T.aiBlue, borderBottomRightRadius:4 },
//   msgBot:       { alignSelf:'flex-start', backgroundColor:T.card, borderBottomLeftRadius:4, borderWidth:1, borderColor:T.border },
//   msgBotIcon:   { marginBottom:6 },
//   msgText:      { color:T.t1, fontSize:14, lineHeight:20 },
//   typingIndicator:{ flexDirection:'row', alignItems:'center', height:20 },
//   typingDot:    { width:6, height:6, borderRadius:3, backgroundColor:T.t3, marginRight:4 },
//   aiInputWrap:  { padding:16, borderTopWidth:1, borderTopColor:T.border, backgroundColor:T.bg },
//   aiInputGrad:  { flexDirection:'row', alignItems:'center', borderRadius:30, borderWidth:1, borderColor:T.border2, paddingHorizontal:16, height:50 },
//   aiInput:      { flex:1, color:T.t1, fontSize:15 },
//   aiSendBtn:    { width:36, height:36, borderRadius:18, backgroundColor:T.aiBlue, justifyContent:'center', alignItems:'center' },
// });














// gkmbfmbglmb
// 55
import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  FlatList, Image, Dimensions, Animated, TextInput,
  ActivityIndicator, StatusBar, KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const { width } = Dimensions.get('window');

/* ═══ Design Tokens ════════════════════════════════ */
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
  purpleL: '#B8B8B8',
  pink:    '#505050',
  pinkL:   '#787878',
  gold:    '#FFD97D',   
  goldD:   '#E8E8E8',
  sky:     '#D0D0D0',
  t1: '#FFFFFF',
  t2: '#B0B0B0',
  t3: '#4A4A4A',
  neonGreen: '#4ADE80', 
  aiBlue:  '#38BDF8', // New token for AI accents
};

/* ═══ Data ════════════════════════════════════════ */
const shortcuts = [
  { id:'1', name:'Budget',  icon:'wallet-outline',               c:'#FFFFFF', bg:'#111111' },
  { id:'2', name:'Flights', icon:'airplane',                     c:'#FFFFFF', bg:'#0C0C0C' },  
  { id:'3', name:'Hotels',  icon:'bed-outline',                  c:'#E8E8E8', bg:'#151515' },
  { id:'4', name:'Planner', icon:'calendar-outline',             c:'#C4C4C4', bg:'#0E0E0E' },
  { id:'5', name:'News',    icon:'newspaper',                    c:'#D0D0D0', bg:'#121212' },  
  // Removed 'Map' shortcut here
  { id:'7', name:'Memory',  icon:'book-open-page-variant',       c:'#FFD97D', bg:'#181208' },
  { id:'8', name:'Packing', icon:'bag-suitcase',                 c:T.neonGreen, bg:'#0A1A0E' },
  // ✨ NEW: Added Travel AI
  { id:'9', name:'Travel AI', icon:'robot-outline',              c:T.aiBlue, bg:'#081014' },
  { 
  id:'10', 
  name:'Translate', 
  icon:'translate', 
  c:'#A78BFA', 
  bg:'#110D1A' 
},
];

const trending = [
  { id:'t1', city:'Tokyo',     sub:'Japan',       emoji:'🗼', g:['#151515','#2C2C2C'] },
  { id:'t2', city:'Santorini', sub:'Greece',      emoji:'🏛️', g:['#282828','#404040'] },
  { id:'t3', city:'Bali',      sub:'Indonesia',   emoji:'🌴', g:['#1E1E1E','#383838'] },
  { id:'t4', city:'Dubai',     sub:'UAE',         emoji:'🏙️', g:['#222222','#3C3C3C'] },
  { id:'t5', city:'Maldives',  sub:'South Asia',  emoji:'🏝️', g:['#1A1A1A','#303030'] },
];

const aiPhrases = [
  'Discover the world...',
  'Find hidden gems...',
  'Plan your adventure...',
  'Explore smarter...',
];

/* ═══ ✈ Flying Airplane ═══════════════════════════ */
const FlyingPlane = ({ animVal, top, color }) => {
  const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[-60, width+60] });
  const ty = animVal.interpolate({ inputRange:[0,0.5,1], outputRange:[0,-18,0] });
  const op = animVal.interpolate({ inputRange:[0,0.05,0.95,1], outputRange:[0,1,1,0] });
  return (
    <Animated.View style={[styles.bgPlane, { top, opacity:op, transform:[{translateX:tx},{translateY:ty}] }]}>
      <Ionicons name="airplane" size={18} color={color} />
      {[-20,-36,-52,-68].map(x => (
        <View key={x} style={[styles.trailDot, { right:-x, opacity:Math.abs(x)/80, backgroundColor:color }]} />
      ))}
    </Animated.View>
  );
};

/* ═══ 📍 Pulsing Location Pin ══════════════════════ */
const LocationPin = ({ x, y, color, pulseVal }) => {
  const ringScale = pulseVal.interpolate({ inputRange:[0,1], outputRange:[1,2.2] });
  const ringOp    = pulseVal.interpolate({ inputRange:[0,1], outputRange:[0.6,0] });
  return (
    <View style={[styles.bgPin, { left:x, top:y }]}>
      <Animated.View style={[styles.pinRing, { width:28, height:28, borderRadius:14,
        borderColor:color, transform:[{scale:ringScale}], opacity:ringOp }]} />
      <View style={[styles.pinDot, { backgroundColor:color }]} />
    </View>
  );
};

/* ═══ ☁ Drifting Cloud ═══════════════════════════ */
const DriftCloud = ({ animVal, top, size=1, opacity=0.07 }) => {
  const tx = animVal.interpolate({ inputRange:[0,1], outputRange:[width+100,-300] });
  return (
    <Animated.View style={[styles.bgCloud, { top, opacity, transform:[{translateX:tx},{scale:size}] }]}>
      <View style={[styles.cloudBody, { width:80, height:30 }]} />
      <View style={[styles.cloudPuff, { width:44, height:44, top:-20, left:10 }]} />
      <View style={[styles.cloudPuff, { width:34, height:34, top:-14, left:36 }]} />
    </Animated.View>
  );
};

/* ═══ Shimmer ════════════════════════════════════ */
const Shimmer = ({ w, h, br=10 }) => {
  const a = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.timing(a, { toValue:1, duration:1400, useNativeDriver:true })).start();
  }, []);
  const tx = a.interpolate({ inputRange:[0,1], outputRange:[-w,w] });
  return (
    <View style={{ width:w, height:h, borderRadius:br, backgroundColor:'#222222', overflow:'hidden' }}>
      <Animated.View style={{ flex:1, transform:[{translateX:tx}] }}>
        <LinearGradient colors={['transparent','#FFFFFF12','transparent']}
          start={{x:0,y:0}} end={{x:1,y:0}} style={StyleSheet.absoluteFill} />
      </Animated.View>
    </View>
  );
};

/* ═══ Counter ════════════════════════════════════ */
const Counter = ({ target, suffix='', color }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const num = parseFloat(target);
    const step = num / 40;
    const t = setInterval(() => {
      start += step;
      if (start >= num) { setVal(num); clearInterval(t); }
      else setVal(Math.floor(start * 10) / 10);
    }, 35);
    return () => clearInterval(t);
  }, []);
  return <Text style={[styles.statVal, { color }]}>{val}{suffix}</Text>;
};

/* ═══ GlowDot ════════════════════════════════════ */
const GlowDot = ({ color, size=8, pulseAnim }) => (
  <Animated.View style={[styles.glowDot, {
    width:size, height:size, borderRadius:size/2,
    backgroundColor:color,
    shadowColor:color, shadowOpacity:0.9, shadowRadius:6, elevation:3,
    transform:[{scale:pulseAnim}],
  }]} />
);

/* ═══ City Card ══════════════════════════════════ */
const CityCard = ({ item, index, query }) => {
  const op = useRef(new Animated.Value(0)).current;
  const sc = useRef(new Animated.Value(0.8)).current;
  const sl = useRef(new Animated.Value(50)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.delay(index * 100),
      Animated.parallel([
        Animated.spring(sc, { toValue:1, friction:7, tension:80, useNativeDriver:true }),
        Animated.spring(sl, { toValue:0, friction:8, tension:60, useNativeDriver:true }),
        Animated.timing(op, { toValue:1, duration:300, useNativeDriver:true }),
      ]),
    ]).start();
  }, []);
  return (
    <Animated.View style={{ opacity:op, transform:[{scale:sc},{translateY:sl}], marginRight:14 }}>
      <View style={styles.cityCard}>
        <Image source={{ uri:item.url }} style={styles.cityImg} />
        <LinearGradient colors={['transparent','rgba(255,255,255,0.05)','rgba(0,0,0,0.90)']} style={styles.cityGrad}>
          <View style={styles.cityTopRow}>
            <View style={[styles.liveChip, { borderColor:T.mint+'60' }]}>
              <View style={[styles.liveDot, { backgroundColor:T.mint, shadowColor:T.mint }]} />
              <Text style={[styles.liveChipTxt, { color:T.mintL }]}>LIVE</Text>
            </View>
          </View>
          <Text style={styles.cityName}>{query}</Text>
          <View style={styles.cityMeta}>
            <Ionicons name="camera-outline" size={11} color={T.t3} />
            <Text style={styles.cityMetaTxt}> {item.photographer}</Text>
          </View>
        </LinearGradient>
        <View style={[styles.cornerAccent, { borderColor:T.mint }]} />
      </View>
    </Animated.View>
  );
};

/* ═══ Trend Card ═════════════════════════════════ */
const TrendCard = ({ item, index }) => {
  const op = useRef(new Animated.Value(0)).current;
  const sc = useRef(new Animated.Value(0.88)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.delay(index * 90),
      Animated.parallel([
        Animated.spring(sc, { toValue:1, friction:7, tension:70, useNativeDriver:true }),
        Animated.timing(op, { toValue:1, duration:280, useNativeDriver:true }),
      ]),
    ]).start();
  }, []);
  return (
    <Animated.View style={{ opacity:op, transform:[{scale:sc}] }}>
      <TouchableOpacity activeOpacity={0.82}>
        <LinearGradient colors={item.g} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.trendCard}>
          <Text style={styles.trendEmoji}>{item.emoji}</Text>
          <Text style={styles.trendCity}>{item.city}</Text>
          <Text style={styles.trendSub}>{item.sub}</Text>
          <View style={styles.trendBadge}>
            <Ionicons name="trending-up" size={10} color="#FFF" />
            <Text style={styles.trendBadgeTxt}>Trending</Text>
          </View>
          <View style={styles.trendCircle} />
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

/* ═══ Particle ═══════════════════════════════════ */
const Particle = ({ x, y, delay, color }) => {
  const a = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.sequence([
      Animated.delay(delay),
      Animated.timing(a, { toValue:1, duration:1500, useNativeDriver:true }),
      Animated.timing(a, { toValue:0, duration:0, useNativeDriver:true }),
    ])).start();
  }, []);
  return (
    <Animated.View style={[styles.particle, {
      left:x, top:y,
      opacity:  a.interpolate({ inputRange:[0,0.5,1], outputRange:[0,1,0] }),
      transform:[{ translateY: a.interpolate({ inputRange:[0,1], outputRange:[0,-70] }) }],
    }]}>
      <View style={[styles.pDot, { backgroundColor:color, shadowColor:color }]} />
    </Animated.View>
  );
};

/* ═══ ✦ Memory Book Promo Banner ════════════════ */
const MemoryBanner = ({ onPress, pulseAnim, spinStr }) => {
  const sc = useRef(new Animated.Value(0.92)).current;
  const op = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.spring(sc, { toValue:1, friction:7, tension:60, useNativeDriver:true }),
      Animated.timing(op, { toValue:1, duration:500, useNativeDriver:true }),
    ]).start();
  }, []);
  return (
    <Animated.View style={{ opacity:op, transform:[{scale:sc}], marginBottom:26 }}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.88}>
        <LinearGradient
          colors={['#1C1608', '#2A1F08', '#181208']}
          start={{x:0,y:0}} end={{x:1,y:1}}
          style={styles.memBanner}
        >
          <LinearGradient
            colors={[T.gold, '#FFC107', 'transparent']}
            start={{x:0,y:0}} end={{x:1,y:0}}
            style={styles.memStrip}
          />
          <View style={styles.memCircle1} />
          <View style={styles.memCircle2} />
          <View style={{ flex:1 }}>
            <View style={styles.memBadgeRow}>
              <Animated.View style={[styles.memBadgeDot, { transform:[{scale:pulseAnim}] }]} />
              <Text style={styles.memBadgeTxt}>  NEW FEATURE</Text>
            </View>
            <Text style={styles.memTitle}>Tour Memory{'\n'}Book</Text>
            <Text style={styles.memSub}>Upload photos · AI captions · Export PDF</Text>
            <View style={styles.memPillRow}>
              {['📷 Photos','⚡ AI Captions','📄 PDF Export'].map(p => (
                <View key={p} style={styles.memPill}>
                  <Text style={styles.memPillTxt}>{p}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.memIconWrap}>
            <Animated.View style={[styles.memIconOrbit, { transform:[{rotate:spinStr}] }]} />
            <View style={styles.memIconCore}>
              <Text style={{ fontSize:34 }}>📖</Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

/* ═══════════════════════════════════════════════════
   1. NEW SCREEN: TRAVEL AI ASSISTANT
═══════════════════════════════════════════════════ */
const TravelAIScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am your Travel AI. Ask me anything about destinations, visas, or packing tips! ✈️' }
  ]);
  const [typing, setTyping] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef();

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
  }, []);

  // Simulate AI Response
  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    // Simulate "thinking" delay
    setTimeout(() => {
      const botResponses = [
        `Interesting question about "${input}"! I recommend checking local guidelines before you travel.`,
        `For "${input}", the best time to visit is usually during the dry season. Would you like flight estimates?`,
        `I found 3 hidden gems related to "${input}". Should I list them?`,
        `Safety in "${input}" is generally good for tourists. Always keep your passport secure!`
      ];
      const randomResp = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMsg = { id: Date.now() + 1, type: 'bot', text: randomResp };
      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.aiRoot}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.aiHeader}>
        <View style={styles.aiHeaderCenter}>
          <View style={styles.aiAvatarSmall}>
            <MaterialCommunityIcons name="brain" size={20} color={T.aiBlue} />
          </View>
          <View>
            <Text style={styles.aiHeaderTitle}>Mono AI</Text>
            <View style={styles.aiStatusRow}>
              <View style={[styles.aiStatusDot, { backgroundColor: T.neonGreen }]} />
              <Text style={styles.aiStatusText}>Online</Text>
            </View>
          </View>
        </View>
        <View style={{ width: 40 }} />
      </View>

      {/* Chat Area */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={10}
      >
        <Animated.ScrollView 
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
          style={{ flex: 1, opacity: fadeAnim }} 
          contentContainerStyle={styles.aiChatContainer}
        >
          {messages.map(msg => (
            <View key={msg.id} style={[
              styles.msgBubble, 
              msg.type === 'user' ? styles.msgUser : styles.msgBot
            ]}>
              {msg.type === 'bot' && (
                <View style={styles.msgBotIcon}>
                  <MaterialCommunityIcons name="sparkles" size={14} color={T.aiBlue} />
                </View>
              )}
              <Text style={[styles.msgText, msg.type === 'user' && { color: T.bg }]}>
                {msg.text}
              </Text>
            </View>
          ))}
          {typing && (
            <View style={[styles.msgBubble, styles.msgBot]}>
              <View style={styles.typingIndicator}>
                <View style={styles.typingDot} />
                <View style={[styles.typingDot, { bottom: -2, opacity: 0.6 }]} />
                <View style={[styles.typingDot, { bottom: -4, opacity: 0.3 }]} />
              </View>
            </View>
          )}
        </Animated.ScrollView>

        {/* Input Area */}
        <View style={styles.aiInputWrap}>
          <LinearGradient 
            colors={['#111111', '#050505']} 
            style={styles.aiInputGrad}
          >
            <TextInput 
              value={input}
              onChangeText={setInput}
              placeholder="Ask about travel tips..."
              placeholderTextColor={T.t3}
              style={styles.aiInput}
              onSubmitEditing={handleSend}
            />
            <TouchableOpacity onPress={handleSend} style={styles.aiSendBtn}>
              <Ionicons name="send" size={18} color={T.bg} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

/* ═══════════════════════════════════════════════════
   MAIN SCREEN
═══════════════════════════════════════════════════ */
export default function HomeScreen({ navigation }) {
  const [query,     setQuery]     = useState('');
  const [images,    setImages]    = useState([]);
  const [loading,   setLoading]   = useState(false);
  const [particles, setParticles] = useState([]);
  const [focused,   setFocused]   = useState(false);
  const [imgKey,    setImgKey]    = useState(0);
  const [aiText,    setAiText]    = useState('');

  const inputRef = useRef(null);
  const fade     = useRef(new Animated.Value(0)).current;
  const slideY   = useRef(new Animated.Value(40)).current;
  const pulse    = useRef(new Animated.Value(0)).current;
  const float    = useRef(new Animated.Value(0)).current;
  const spin     = useRef(new Animated.Value(0)).current;
  const aurora   = useRef(new Animated.Value(0)).current;
  const plane1   = useRef(new Animated.Value(0)).current;
  const plane2   = useRef(new Animated.Value(0)).current;
  const pin1     = useRef(new Animated.Value(0)).current;
  const cloud1   = useRef(new Animated.Value(0)).current;
  const cloud2   = useRef(new Animated.Value(0)).current;
  const compass  = useRef(new Animated.Value(0)).current;
  const phraseIdx = useRef(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade,   { toValue:1, duration:800, useNativeDriver:true }),
      Animated.spring(slideY, { toValue:0, friction:9, tension:55, useNativeDriver:true }),
    ]).start();

    Animated.loop(Animated.sequence([
      Animated.timing(pulse, { toValue:1, duration:2000, useNativeDriver:true }),
      Animated.timing(pulse, { toValue:0, duration:2000, useNativeDriver:true }),
    ])).start();
    Animated.loop(Animated.sequence([
      Animated.timing(float, { toValue:1, duration:5000, useNativeDriver:true }),
      Animated.timing(float, { toValue:0, duration:5000, useNativeDriver:true }),
    ])).start();
    Animated.loop(Animated.timing(spin, { toValue:1, duration:7000, useNativeDriver:true })).start();
    Animated.loop(Animated.sequence([
      Animated.timing(aurora, { toValue:1, duration:6000, useNativeDriver:true }),
      Animated.timing(aurora, { toValue:0, duration:6000, useNativeDriver:true }),
    ])).start();

    Animated.loop(Animated.sequence([
      Animated.timing(plane1, { toValue:1, duration:9000, useNativeDriver:true }),
      Animated.delay(4000),
      Animated.timing(plane1, { toValue:0, duration:0, useNativeDriver:true }),
      Animated.delay(3000),
    ])).start();
    Animated.loop(Animated.sequence([
      Animated.delay(6000),
      Animated.timing(plane2, { toValue:1, duration:11000, useNativeDriver:true }),
      Animated.delay(2000),
      Animated.timing(plane2, { toValue:0, duration:0, useNativeDriver:true }),
    ])).start();
    Animated.loop(Animated.sequence([
      Animated.timing(pin1, { toValue:1, duration:1500, useNativeDriver:true }),
      Animated.timing(pin1, { toValue:0, duration:600, useNativeDriver:true }),
      Animated.delay(2000),
    ])).start();
    Animated.loop(Animated.sequence([
      Animated.timing(cloud1, { toValue:1, duration:28000, useNativeDriver:true }),
      Animated.timing(cloud1, { toValue:0, duration:0, useNativeDriver:true }),
    ])).start();
    Animated.loop(Animated.sequence([
      Animated.delay(14000),
      Animated.timing(cloud2, { toValue:1, duration:22000, useNativeDriver:true }),
      Animated.timing(cloud2, { toValue:0, duration:0, useNativeDriver:true }),
    ])).start();
    Animated.loop(Animated.timing(compass, { toValue:1, duration:20000, useNativeDriver:true })).start();

    const typePhrase = () => {
      const ph = aiPhrases[phraseIdx.current]; let i = 0; setAiText('');
      const t = setInterval(() => {
        i++; setAiText(ph.slice(0, i));
        if (i >= ph.length) {
          clearInterval(t);
          setTimeout(() => { phraseIdx.current = (phraseIdx.current+1) % aiPhrases.length; typePhrase(); }, 2000);
        }
      }, 55);
      return t;
    };
    const t = typePhrase();
    return () => clearInterval(t);
  }, []);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;
    setParticles(Array.from({length:12}, (_,i) => ({
      id:i, x:30+Math.random()*(width-60), y:Math.random()*40,
      color:[T.mint, T.purple, T.pink, T.gold, T.sky][i%5],
    })));
    setLoading(true); setImages([]);
    try {
    const r = await axios.get(`https://semproject-1a4i.vercel.app/api/photos?q=${encodeURIComponent(query)}`);
      if (r.data.success) { setImages(r.data.photos); setImgKey(k=>k+1); }
    } catch(e) { console.error(e); }
    finally { setLoading(false); }
  }, [query]);

  const spinStr  = spin.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });
  const floatY   = float.interpolate({ inputRange:[0,1], outputRange:[0,-14] });
  const pulseS   = pulse.interpolate({ inputRange:[0,1], outputRange:[1,1.07] });
  const auroraX  = aurora.interpolate({ inputRange:[0,1], outputRange:[0,30] });
  const auroraO  = aurora.interpolate({ inputRange:[0,0.5,1], outputRange:[0.4,1,0.4] });
  const compassR = compass.interpolate({ inputRange:[0,1], outputRange:['0deg','360deg'] });

  const navigateTo = (name) => {
  const routes = {
    Hotels: 'HotelSearch',
    Budget: 'Budget',
    Planner: 'Planner',
    News: 'News',
    Flights: 'Flights',
    Memory: 'Memory',
    Packing: 'SmartPacking',
    'Travel AI': 'TravelAI',

    // 🌍 NEW
    Translate: 'Translate',
  };

  if (routes[name]) {
    navigation.navigate(routes[name]);
  }
};

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={T.bg} />

      {/* ── TRAVEL BG ─────────────────────────── */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View style={[StyleSheet.absoluteFill, { backgroundColor:T.bg }]} />
        <Animated.View style={[styles.auroraband, {
          backgroundColor:T.mint+'0D', top:60, height:220,
          transform:[{translateX:auroraX}], opacity:auroraO,
        }]} />
        <Animated.View style={[styles.auroraband, {
          backgroundColor:T.purple+'0A', top:130, height:180,
          transform:[{translateX:auroraX.interpolate({inputRange:[0,30],outputRange:[30,0]})}],
          opacity:auroraO,
        }]} />
        <FlyingPlane animVal={plane1} top={120} color="rgba(255,107,74,0.45)" />
        <FlyingPlane animVal={plane2} top={280} color="rgba(56,189,248,0.4)" />
        <DriftCloud  animVal={cloud1} top={80}  size={1.2} opacity={0.07} />
        <DriftCloud  animVal={cloud2} top={200} size={0.8} opacity={0.05} />
        <LocationPin x={width*0.15} y={180} color="rgba(255,107,74,0.6)"  pulseVal={pin1} />
        <LocationPin x={width*0.72} y={350} color="rgba(56,189,248,0.6)"  pulseVal={pin1} />
        <LocationPin x={width*0.40} y={520} color="rgba(244,63,94,0.5)"   pulseVal={pin1} />
        <View style={styles.routeLine} />
        <Animated.View style={[styles.bgCompass, { transform:[{rotate:compassR}] }]}>
          <Ionicons name="compass-outline" size={140} color="rgba(255,255,255,0.03)" />
        </Animated.View>
        {[
          { x:width*0.1,  y:400, color:'rgba(255,107,74,0.25)' },
          { x:width*0.6,  y:160, color:'rgba(56,189,248,0.25)' },
          { x:width*0.85, y:480, color:'rgba(244,63,94,0.25)' },
          { x:width*0.3,  y:620, color:'rgba(255,255,255,0.15)' },
        ].map((d,i) => (
          <Animated.View key={i} style={[styles.mapDot, {
            left:d.x, top:d.y, backgroundColor:d.color,
            transform:[{scale:pulse.interpolate({inputRange:[0,1],outputRange:[1,1.5]})}],
          }]} />
        ))}
        <Animated.View style={[styles.blob, { backgroundColor:T.mint+'10', width:350, height:350,
          top:-100, right:-80, transform:[{translateY:floatY}] }]} />
        <Animated.View style={[styles.blob, { backgroundColor:T.purple+'0C', width:280, height:280,
          bottom:350, left:-90, transform:[{translateY:floatY}] }]} />
        <Animated.View style={[styles.blob, { backgroundColor:T.pink+'08', width:200, height:200,
          bottom:100, right:40, transform:[{translateY:floatY}] }]} />
        <Animated.View style={[styles.decRing, { borderColor:T.mint+'18', width:260, height:260, borderRadius:130,
          top:80, right:-100, transform:[{translateY:floatY}] }]} />
        <Animated.View style={[styles.decRing, { borderColor:T.purple+'14', width:180, height:180, borderRadius:90,
          bottom:200, left:-60, transform:[{translateY:floatY}] }]} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

        {/* ── HEADER ─────────────────────────── */}
        <Animated.View style={[styles.headerWrap, { opacity:fade, transform:[{translateY:slideY}] }]}>
          <View style={styles.header}>
            <View>
              <View style={styles.aiBadge}>
                <GlowDot color={T.mint} pulseAnim={pulseS} />
                <Text style={styles.aiBadgeTxt}>AI · ACTIVE</Text>
              </View>
              <Text style={styles.greet}>Good Evening 🌙</Text>
              <View style={styles.nameRow}>
                <Text style={styles.name}>Chaitanya</Text>
                <Text style={styles.nameWave}>👋</Text>
              </View>
              <LinearGradient colors={['#FFFFFF','#888888','#444444']}
                start={{x:0,y:0}} end={{x:1,y:0}} style={styles.nameBar} />
            </View>
            <View>
              <Animated.View style={[styles.avatarHalo, { transform:[{scale:pulseS}], borderColor:T.mint+'40' }]} />
              <LinearGradient colors={[T.mint, T.purple]} style={styles.avatarGrad}>
                <Image source={{ uri:'https://ui-avatars.com/api/?name=CP&background=080808&color=FFFFFF&size=100' }} style={styles.avatar} />
              </LinearGradient>
            </View>
          </View>
        </Animated.View>

        {/* ── HERO CARD ──────────────────────── */}
        <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
          <View style={styles.heroOuter}>
            <LinearGradient colors={['#FFFFFF','#888888','#0F0F0F']}
              start={{x:0,y:0}} end={{x:1,y:1}} style={styles.heroBorder}>
              <View style={styles.heroCard}>
                <LinearGradient colors={[T.mint+'20', T.purple+'18','transparent']}
                  start={{x:0,y:0}} end={{x:1,y:1}} style={StyleSheet.absoluteFill} />
                <View style={styles.heroContent}>
                  <View style={styles.heroLeft}>
                    <View style={styles.orbitWrap}>
                      <Animated.View style={[styles.orbit, { transform:[{rotate:spinStr}] }]} />
                      <View style={[styles.orbitCore, { backgroundColor:T.mint+'30', borderColor:T.mint+'50' }]}>
                        <MaterialCommunityIcons name="lightning-bolt" size={26} color={T.mintL} />
                      </View>
                    </View>
                  </View>
                  <View style={styles.heroRight}>
                    <Text style={styles.heroPre}>⚡ MONO AI ENGINE</Text>
                    <Text style={styles.heroType}>{aiText}<Text style={{color:T.mint}}>│</Text></Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Planner')} style={styles.heroBtn}>
                      <LinearGradient colors={[T.mint,T.mintD]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.heroBtnG}>
                        <Text style={styles.heroBtnTxt}>Plan Trip</Text>
                        <Ionicons name="arrow-forward" size={13} color={T.bg} />
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.dotGrid} pointerEvents="none">
                  {Array.from({length:6}).map((_,i) => (
                    <View key={i} style={[styles.dotGridItem, { opacity:0.15+(i*0.05), backgroundColor:T.mint }]} />
                  ))}
                </View>
              </View>
            </LinearGradient>
          </View>
        </Animated.View>

        {/* ── SEARCH ─────────────────────────── */}
        <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}], position:'relative' }]}>
          {particles.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.id*60} color={p.color} />)}
          <TouchableOpacity activeOpacity={1} onPress={() => inputRef.current?.focus()}
            style={[styles.searchBox, focused && { borderColor:T.mint+'80', shadowColor:T.mint, shadowOpacity:0.25, shadowRadius:15, elevation:6 }]}>
            <Ionicons name="search-outline" size={17} color={focused ? T.mint : T.t3} style={{ marginRight:10 }} />
            <TextInput
              ref={inputRef}
              placeholder="Where to next?"
              placeholderTextColor={T.t3}
              style={styles.searchInput}
              value={query}
              onChangeText={setQuery}
              onSubmitEditing={handleSearch}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              returnKeyType="search"
              blurOnSubmit={false}
              autoCorrect={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
            />
            {loading
              ? <ActivityIndicator size="small" color={T.mint} />
              : query.length > 0 && (
                <TouchableOpacity onPress={handleSearch}>
                  <LinearGradient colors={[T.mint,T.mintD]} style={styles.goBtn}>
                    <Ionicons name="arrow-forward" size={14} color={T.bg} />
                  </LinearGradient>
                </TouchableOpacity>
              )
            }
          </TouchableOpacity>
          <View style={styles.tagsRow}>
            {['Goa ✦','Maldives ✦','Japan ✦','Bali ✦'].map(t => (
              <TouchableOpacity key={t} style={styles.tagPill} onPress={() => setQuery(t.replace(' ✦',''))}>
                <Text style={styles.tagPillTxt}>{t}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        {/* ── CITY RESULTS ───────────────────── */}
        {(images.length > 0 || loading) && (
          <Animated.View style={[styles.section, { opacity:fade }]}>
            <View style={styles.secRow}>
              <View style={styles.secLeft}>
                <GlowDot color={T.pink} size={7} pulseAnim={pulseS} />
                <Text style={styles.secTitle}> Results for "{query}"</Text>
              </View>
              <Text style={styles.secBadge}>{images.length} photos</Text>
            </View>
            {loading
              ? <View style={styles.loadBox}>
                  <View style={styles.shimmerRow}>
                    <Shimmer w={width*0.72} h={240} br={20} />
                    <Shimmer w={width*0.72} h={240} br={20} />
                  </View>
                </View>
              : <FlatList key={imgKey} data={images} horizontal
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={it => it.id}
                  snapToInterval={width*0.72+14}
                  decelerationRate="fast"
                  contentContainerStyle={{ paddingRight:20 }}
                  renderItem={({ item, index }) => <CityCard item={item} index={index} query={query} />}
                />
            }
          </Animated.View>
        )}

        {/* ── QUICK ACCESS ───────────────────── */}
        <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
          <Text style={styles.secTitle2}>Quick Access</Text>
          <View style={styles.bento}>
            {shortcuts.map((item) => (
              <TouchableOpacity key={item.id}
                style={[styles.bentoItem, { backgroundColor:item.bg, borderColor:item.c+'35' }]}
                activeOpacity={0.75}
                onPress={() => navigateTo(item.name)}
              >
                {/* Gold shimmer ring for Memory */}
                {item.name === 'Memory' && (
                  <Animated.View style={[styles.memBentoRing, {
                    borderColor: T.gold+'50',
                    transform:[{scale:pulseS}],
                  }]} />
                )}
                {/* Green Neon ring for Packing */}
                {item.name === 'Packing' && (
                  <Animated.View style={[styles.memBentoRing, {
                    borderColor: T.neonGreen+'50',
                    transform:[{scale:pulseS}],
                  }]} />
                )}
                {/* Blue Neon ring for Travel AI */}
                {item.name === 'Travel AI' && (
                  <Animated.View style={[styles.memBentoRing, {
                    borderColor: T.aiBlue+'50',
                    transform:[{scale:pulseS}],
                  }]} />
                )}
                <View style={[styles.bentoIcon, { backgroundColor:item.c+'22' }]}>
                  <MaterialCommunityIcons name={item.icon} size={22} color={item.c} />
                </View>
                <Text style={[styles.bentoTxt, { color:item.c }]}>{item.name}</Text>
                <View style={[styles.bentoDot, { backgroundColor:item.c }]} />
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>

        {/* ── ✦ MEMORY BOOK PROMO BANNER ─────── */}
        <Animated.View style={{ opacity:fade, transform:[{translateY:slideY}] }}>
          <MemoryBanner
            onPress={() => navigation.navigate('Memory')}
            pulseAnim={pulseS}
            spinStr={spinStr}
          />
        </Animated.View>

        {/* ── TRENDING ───────────────────────── */}
        <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
          <View style={styles.secRow}>
            <Text style={styles.secTitle2}>Trending 🔥</Text>
            <TouchableOpacity>
              <Text style={[styles.seeAll, { color:T.mintL }]}>See all →</Text>
            </TouchableOpacity>
          </View>
          <FlatList data={trending} horizontal showsHorizontalScrollIndicator={false}
            keyExtractor={it=>it.id}
            contentContainerStyle={{ gap:12, paddingRight:20 }}
            renderItem={({ item, index }) => <TrendCard item={item} index={index} />}
          />
        </Animated.View>

        {/* ── STATS ──────────────────────────── */}
        <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
          <Text style={styles.secTitle2}>By the Numbers</Text>
          <View style={styles.statsGrid}>
            {[
              { label:'Trips Planned', num:'2.4', suf:'M+', color:T.mint },
              { label:'AI Accuracy',   num:'98.7',suf:'%',  color:T.purple },
              { label:'Destinations',  num:'190', suf:'+',  color:T.pink },
              { label:'Happy Users',   num:'500', suf:'K',  color:T.gold },
            ].map((s,i) => (
              <View key={i} style={[styles.statCard, { borderColor:s.color+'30' }]}>
                <LinearGradient colors={[s.color+'18','transparent']} style={StyleSheet.absoluteFill} />
                <Counter target={s.num} suffix={s.suf} color={s.color} />
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>
        </Animated.View>

        {/* ── WEATHER ────────────────────────── */}
        <Animated.View style={[styles.section, { opacity:fade, transform:[{translateY:slideY}] }]}>
          <View style={[styles.weatherCard, { backgroundColor:T.card, borderColor:T.border }]}>
            <LinearGradient colors={['#FFFFFF','#888888','#444444']}
              start={{x:0,y:0}} end={{x:1,y:0}} style={styles.weatherStrip} />
            <View style={styles.weatherBody}>
              <View>
                <Text style={styles.wtCity}>📍 Hyderabad, IN</Text>
                <Text style={styles.wtTemp}>28<Text style={styles.wtDeg}>°C</Text></Text>
                <Text style={styles.wtDesc}>Partly Cloudy · Feels 31°C</Text>
              </View>
              <View style={styles.wtRight}>
                <Text style={styles.wtEmoji}>⛅</Text>
                <View style={styles.wtMinis}>
                  {[['💧','72%'],['🌬️','14km/h'],['👁️','10km']].map(([ic,v])=>(
                    <View key={v} style={styles.wtMini}><Text>{ic}</Text><Text style={styles.wtMiniV}>{v}</Text></View>
                  ))}
                </View>
              </View>
            </View>
            <View style={[styles.wtLine, { backgroundColor:T.border }]} />
            <View style={styles.wtForecast}>
              {['Mon','Tue','Wed','Thu','Fri'].map((d,i)=>(
                <View key={d} style={styles.wtDay}>
                  <Text style={styles.wtDayL}>{d}</Text>
                  <Text style={styles.wtDayIc}>{['🌤','🌧','⛅','☀️','🌩'][i]}</Text>
                  <Text style={[styles.wtDayT, { color:i===3?T.gold:T.t2 }]}>{[28,24,26,31,23][i]}°</Text>
                </View>
              ))}
            </View>
          </View>
        </Animated.View>

        {/* ── AI PICK ────────────────────────── */}
        <Animated.View style={[styles.section, { opacity:fade }]}>
          <LinearGradient colors={['#041228','#222222','#1D4060']}
            start={{x:0,y:0}} end={{x:1,y:1}} style={styles.pickCard}>
            <View style={styles.pickInner}>
              <View style={styles.pickTopRow}>
                <View style={styles.pickBadge}><Text style={styles.pickBadgeTxt}>✦ AI PICK</Text></View>
                <Text style={styles.pickDot}>TODAY</Text>
              </View>
              <Text style={styles.pickTitle}>Santorini, Greece</Text>
              <Text style={styles.pickSub}>Perfect season · April – June</Text>
              <View style={styles.pickTagsRow}>
                {['Romantic','Beach','Scenic'].map(t=>(
                  <View key={t} style={styles.pickTag}><Text style={styles.pickTagTxt}>{t}</Text></View>
                ))}
              </View>
            </View>
            <Text style={styles.pickEmoji}>🏛️</Text>
            <View style={styles.pickCircle1} />
            <View style={styles.pickCircle2} />
          </LinearGradient>
        </Animated.View>

        {/* ── FOOTER ─────────────────────────── */}
        <Animated.View style={[styles.footer, { opacity:fade }]}>
          <LinearGradient colors={[T.mint+'15',T.purple+'10']} style={styles.footerCard}>
            <LinearGradient colors={['#FFFFFF','#888888','#444444']}
              start={{x:0,y:0}} end={{x:1,y:0}} style={styles.footerStrip} />
            <Animated.View style={{ transform:[{rotate:spinStr}] }}>
              <MaterialCommunityIcons name="lightning-bolt-circle" size={34} color={T.mint} />
            </Animated.View>
            <Text style={styles.footerTitle}>Mono Travel AI</Text>
            <Text style={styles.footerSub}>Smart · Fast · Personal</Text>
            <View style={styles.footerPills}>
              {[T.mint,T.purple,T.pink,T.gold].map(c=>(
                <Animated.View key={c} style={[styles.fpill, { backgroundColor:c, transform:[{scale:pulseS}] }]} />
              ))}
            </View>
          </LinearGradient>
        </Animated.View>

        <View style={{ height:50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ═══ Styles ════════════════════════════════════ */
const BW = (width - 72) / 3;
const styles = StyleSheet.create({
  root:   { flex:1, backgroundColor:T.bg },
  scroll: { paddingHorizontal:20, paddingTop:12 },
  section:{ marginBottom:26 },

  // BG
  auroraband: { position:'absolute', left:0, right:0, borderRadius:40 },
  blob:       { position:'absolute', borderRadius:9999 },
  decRing:    { position:'absolute', borderWidth:1 },
  bgPlane:    { position:'absolute', left:0, flexDirection:'row', alignItems:'center' },
  trailDot:   { position:'absolute', width:3, height:3, borderRadius:1.5 },
  bgPin:      { position:'absolute', width:28, height:28, justifyContent:'center', alignItems:'center' },
  pinRing:    { position:'absolute', borderWidth:1.5 },
  pinDot:     { width:8, height:8, borderRadius:4, shadowOpacity:1, shadowRadius:5 },
  bgCloud:    { position:'absolute', right:0 },
  cloudBody:  { backgroundColor:'rgba(255,255,255,0.8)', borderRadius:20 },
  cloudPuff:  { position:'absolute', backgroundColor:'rgba(255,255,255,0.8)', borderRadius:22 },
  bgCompass:  { position:'absolute', bottom:-40, left:-40, opacity:0.6 },
  mapDot:     { position:'absolute', width:4, height:4, borderRadius:2 },
  routeLine:  { position:'absolute', width:300, height:300, borderRadius:150, borderWidth:1,
                borderStyle:'dashed', borderColor:'rgba(255,255,255,0.03)', top:100, left:-100, transform:[{rotate:'30deg'}] },

  // Header
  headerWrap: { marginBottom:24 },
  header:     { flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
  aiBadge:    { flexDirection:'row', alignItems:'center', gap:6, marginBottom:8 },
  aiBadgeTxt: { color:T.mint, fontSize:10, fontWeight:'800', letterSpacing:2 },
  glowDot:    {},
  greet:      { color:T.t2, fontSize:13, fontWeight:'500' },
  nameRow:    { flexDirection:'row', alignItems:'center', gap:6, marginTop:2 },
  name:       { color:T.t1, fontSize:30, fontWeight:'800', letterSpacing:-0.8 },
  nameWave:   { fontSize:26 },
  nameBar:    { width:60, height:3, borderRadius:2, marginTop:10 },
  avatarHalo: { position:'absolute', top:-6, left:-6, width:72, height:72, borderRadius:36, borderWidth:1.5 },
  avatarGrad: { width:60, height:60, borderRadius:30, padding:2.5, justifyContent:'center', alignItems:'center' },
  avatar:     { width:55, height:55, borderRadius:28 },

  // Hero
  heroOuter:  { borderRadius:22, overflow:'hidden' },
  heroBorder: { padding:1.5, borderRadius:22 },
  heroCard:   { backgroundColor:T.card, borderRadius:21, overflow:'hidden', padding:18 },
  heroContent:{ flexDirection:'row', alignItems:'center', gap:14 },
  heroLeft:   {},
  orbitWrap:  { width:60, height:60, justifyContent:'center', alignItems:'center' },
  orbit:      { position:'absolute', width:60, height:60, borderRadius:30, borderWidth:1.5, borderColor:T.mint+'50', borderStyle:'dashed' },
  orbitCore:  { width:48, height:48, borderRadius:14, borderWidth:1, justifyContent:'center', alignItems:'center' },
  heroRight:  { flex:1 },
  heroPre:    { color:T.mint, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:6 },
  heroType:   { color:T.t1, fontSize:15, fontWeight:'600', lineHeight:22, minHeight:44 },
  heroBtn:    { marginTop:12, alignSelf:'flex-start', borderRadius:12, overflow:'hidden' },
  heroBtnG:   { flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingVertical:9, gap:8 },
  heroBtnTxt: { color:T.bg, fontSize:13, fontWeight:'800' },
  dotGrid:    { position:'absolute', right:14, top:16, flexDirection:'row', flexWrap:'wrap', width:40, gap:5 },
  dotGridItem:{ width:5, height:5, borderRadius:3 },

  // Search
  searchBox:  { flexDirection:'row', alignItems:'center', backgroundColor:T.card, borderRadius:18,
                borderWidth:1.5, borderColor:T.border, paddingHorizontal:14, paddingVertical:13, marginBottom:10 },
  searchInput:{ flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
  goBtn:      { width:34, height:34, borderRadius:10, justifyContent:'center', alignItems:'center' },
  tagsRow:    { flexDirection:'row', gap:8, flexWrap:'wrap' },
  tagPill:    { backgroundColor:T.surf, paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border2 },
  tagPillTxt: { color:T.t2, fontSize:11, fontWeight:'600' },
  particle:   { position:'absolute' },
  pDot:       { width:5, height:5, borderRadius:3, shadowOpacity:1, shadowRadius:4, elevation:2 },

  // City cards
  cityCard:    { width:width*0.72, height:248, borderRadius:22, overflow:'hidden', marginRight:14, borderWidth:1, borderColor:T.mint+'20' },
  cityImg:     { width:'100%', height:'100%' },
  cityGrad:    { position:'absolute', bottom:0, left:0, right:0, padding:15, paddingTop:60 },
  cityTopRow:  { position:'absolute', top:14, left:14 },
  liveChip:    { flexDirection:'row', alignItems:'center', borderWidth:1, paddingHorizontal:10, paddingVertical:4, borderRadius:20, backgroundColor:'rgba(0,0,0,0.4)' },
  liveDot:     { width:6, height:6, borderRadius:3, marginRight:5, shadowOpacity:1, shadowRadius:6, elevation:2 },
  liveChipTxt: { fontSize:9, fontWeight:'800', letterSpacing:1.5 },
  cityName:    { color:'#FFF', fontSize:20, fontWeight:'800', marginBottom:5 },
  cityMeta:    { flexDirection:'row', alignItems:'center' },
  cityMetaTxt: { color:T.t3, fontSize:11 },
  cornerAccent:{ position:'absolute', top:0, right:0, width:38, height:38, borderTopWidth:2, borderRightWidth:2, borderTopRightRadius:22 },
  shimmerRow:  { flexDirection:'row', gap:14 },
  loadBox:     { paddingVertical:10 },
  secRow:      { flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:14 },
  secLeft:     { flexDirection:'row', alignItems:'center' },
  secTitle:    { color:T.t1, fontSize:15, fontWeight:'700' },
  secTitle2:   { color:T.t1, fontSize:16, fontWeight:'700', marginBottom:14 },
  secBadge:    { color:T.t3, fontSize:11 },
  seeAll:      { fontSize:13, fontWeight:'600' },

  // Bento
  bento:       { flexDirection:'row', flexWrap:'wrap', gap:12 },
  bentoItem:   { width:BW, paddingVertical:16, paddingHorizontal:10, borderRadius:18, borderWidth:1,
                 alignItems:'center', gap:8, position:'relative', overflow:'hidden' },
  bentoIcon:   { width:48, height:48, borderRadius:13, justifyContent:'center', alignItems:'center' },
  bentoTxt:    { fontSize:12, fontWeight:'700' },
  bentoDot:    { position:'absolute', top:10, right:10, width:5, height:5, borderRadius:3, opacity:0.7 },
  memBentoRing:{ position:'absolute', width:70, height:70, borderRadius:35, borderWidth:1, borderStyle:'dashed' },

  // Memory Banner
  memBanner:   { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center',
                 padding:20, borderWidth:1, borderColor:'#2A1F08', position:'relative' },
  memStrip:    { position:'absolute', top:0, left:0, right:0, height:2 },
  memCircle1:  { position:'absolute', width:180, height:180, borderRadius:90, top:-60, right:-40,
                 backgroundColor:'rgba(255,217,125,0.06)' },
  memCircle2:  { position:'absolute', width:90, height:90, borderRadius:45, bottom:-30, left:60,
                 backgroundColor:'rgba(255,217,125,0.04)' },
  memBadgeRow: { flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,217,125,0.1)',
                 paddingHorizontal:10, paddingVertical:3, borderRadius:20, alignSelf:'flex-start',
                 marginBottom:10, borderWidth:1, borderColor:'rgba(255,217,125,0.2)' },
  memBadgeDot: { width:6, height:6, borderRadius:3, backgroundColor:T.gold },
  memBadgeTxt: { color:T.gold, fontSize:8, fontWeight:'900', letterSpacing:1.5 },
  memTitle:    { color:T.mint, fontSize:22, fontWeight:'900', letterSpacing:-0.5, lineHeight:28, marginBottom:6 },
  memSub:      { color:T.t3, fontSize:11, marginBottom:12 },
  memPillRow:  { flexDirection:'row', gap:6, flexWrap:'wrap' },
  memPill:     { backgroundColor:'rgba(255,217,125,0.1)', paddingHorizontal:8, paddingVertical:3,
                 borderRadius:10, borderWidth:1, borderColor:'rgba(255,217,125,0.2)' },
  memPillTxt:  { color:T.gold, fontSize:9, fontWeight:'700' },
  memIconWrap: { width:72, height:72, justifyContent:'center', alignItems:'center', position:'relative' },
  memIconOrbit:{ position:'absolute', width:72, height:72, borderRadius:36, borderWidth:1,
                 borderColor:'rgba(255,217,125,0.3)', borderStyle:'dashed' },
  memIconCore: { width:60, height:60, borderRadius:18, backgroundColor:'rgba(255,217,125,0.12)',
                 borderWidth:1, borderColor:'rgba(255,217,125,0.25)', justifyContent:'center', alignItems:'center' },

  // Trending
  trendCard:    { width:135, height:162, borderRadius:20, overflow:'hidden', padding:14, justifyContent:'flex-end' },
  trendEmoji:   { fontSize:30, marginBottom:4 },
  trendCity:    { color:'#FFF', fontSize:16, fontWeight:'800' },
  trendSub:     { color:'rgba(255,255,255,0.65)', fontSize:10, marginTop:2 },
  trendBadge:   { flexDirection:'row', alignItems:'center', gap:4, backgroundColor:'rgba(255,255,255,0.2)',
                  alignSelf:'flex-start', paddingHorizontal:8, paddingVertical:3, borderRadius:10, marginTop:8 },
  trendBadgeTxt:{ color:'#FFF', fontSize:9, fontWeight:'700' },
  trendCircle:  { position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-20,
                  backgroundColor:'rgba(255,255,255,0.08)' },

  // Stats
  statsGrid: { flexDirection:'row', flexWrap:'wrap', gap:12 },
  statCard:  { width:(width-52)/2, borderRadius:18, borderWidth:1, padding:16, alignItems:'center', overflow:'hidden' },
  statVal:   { fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
  statLabel: { color:T.t3, fontSize:11, marginTop:5, fontWeight:'500', textAlign:'center' },

  // Weather
  weatherCard:  { borderRadius:20, borderWidth:1, overflow:'hidden' },
  weatherStrip: { height:2 },
  weatherBody:  { flexDirection:'row', justifyContent:'space-between', padding:18, paddingBottom:14 },
  wtCity:    { color:T.t3, fontSize:12, fontWeight:'600', marginBottom:6 },
  wtTemp:    { color:T.t1, fontSize:46, fontWeight:'900', letterSpacing:-2 },
  wtDeg:     { fontSize:24, fontWeight:'400' },
  wtDesc:    { color:T.t3, fontSize:12, marginTop:3 },
  wtRight:   { alignItems:'flex-end', justifyContent:'space-between' },
  wtEmoji:   { fontSize:44 },
  wtMinis:   { flexDirection:'row', gap:10 },
  wtMini:    { alignItems:'center', gap:2 },
  wtMiniV:   { color:T.t3, fontSize:10, fontWeight:'600' },
  wtLine:    { height:1, marginHorizontal:18, marginBottom:14 },
  wtForecast:{ flexDirection:'row', justifyContent:'space-around', paddingBottom:16, paddingHorizontal:10 },
  wtDay:     { alignItems:'center', gap:4 },
  wtDayL:    { color:T.t3, fontSize:10, fontWeight:'600' },
  wtDayIc:   { fontSize:18 },
  wtDayT:    { fontSize:12, fontWeight:'700' },

  // Pick banner
  pickCard:     { borderRadius:22, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:20 },
  pickInner:    { flex:1 },
  pickTopRow:   { flexDirection:'row', alignItems:'center', gap:10, marginBottom:8 },
  pickBadge:    { backgroundColor:'rgba(255,255,255,0.2)', paddingHorizontal:10, paddingVertical:3, borderRadius:20 },
  pickBadgeTxt: { color:'#FFF', fontSize:9, fontWeight:'800', letterSpacing:1.5 },
  pickDot:      { color:'rgba(255,255,255,0.5)', fontSize:9, fontWeight:'700', letterSpacing:1.5 },
  pickTitle:    { color:'#FFF', fontSize:22, fontWeight:'900', letterSpacing:-0.5, marginBottom:4 },
  pickSub:      { color:'rgba(255,255,255,0.65)', fontSize:12, marginBottom:12 },
  pickTagsRow:  { flexDirection:'row', gap:6 },
  pickTag:      { backgroundColor:'rgba(255,255,255,0.18)', paddingHorizontal:10, paddingVertical:4, borderRadius:20 },
  pickTagTxt:   { color:'#FFF', fontSize:10, fontWeight:'600' },
  pickEmoji:    { fontSize:54 },
  pickCircle1:  { position:'absolute', width:150, height:150, borderRadius:75, top:-50, right:-20, backgroundColor:'rgba(255,255,255,0.07)' },
  pickCircle2:  { position:'absolute', width:80, height:80, borderRadius:40, bottom:-20, left:100, backgroundColor:'rgba(255,255,255,0.05)' },

  // Footer
  footer:      { marginBottom:10 },
  footerCard:  { borderRadius:22, alignItems:'center', paddingVertical:28, paddingHorizontal:24, gap:6, borderWidth:1, borderColor:T.border, overflow:'hidden' },
  footerStrip: { position:'absolute', top:0, left:0, right:0, height:2 },
  footerTitle: { color:T.t1, fontSize:15, fontWeight:'800', letterSpacing:0.3, marginTop:4 },
  footerSub:   { color:T.t3, fontSize:11, letterSpacing:1 },
  footerPills: { flexDirection:'row', gap:8, marginTop:10 },
  fpill:       { width:28, height:6, borderRadius:3 },

  // ── NEW: AI Chat Screen Styles ──
  aiRoot:       { flex:1, backgroundColor:T.bg },
  aiHeader:     { flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:20, paddingVertical:15, borderBottomWidth:1, borderBottomColor:T.border },
  aiHeaderCenter:{ flexDirection:'row', alignItems:'center', gap:12 },
  aiHeaderTitle: { color:T.t1, fontSize:18, fontWeight:'800' },
  aiStatusRow:  { flexDirection:'row', alignItems:'center', gap:4 },
  aiStatusDot:  { width:6, height:6, borderRadius:3 },
  aiStatusText: { color:T.t3, fontSize:10, fontWeight:'600' },
  aiAvatarSmall:{ width:40, height:40, borderRadius:20, backgroundColor:'#0B1E2D', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:T.aiBlue+'30' },
  aiChatContainer:{ padding:20, paddingBottom:10 },
  msgBubble:    { maxWidth:'85%', padding:14, borderRadius:18, marginBottom:12 },
  msgUser:      { alignSelf:'flex-end', backgroundColor:T.aiBlue, borderBottomRightRadius:4 },
  msgBot:       { alignSelf:'flex-start', backgroundColor:T.card, borderBottomLeftRadius:4, borderWidth:1, borderColor:T.border },
  msgBotIcon:   { marginBottom:6 },
  msgText:      { color:T.t1, fontSize:14, lineHeight:20 },
  typingIndicator:{ flexDirection:'row', alignItems:'center', height:20 },
  typingDot:    { width:6, height:6, borderRadius:3, backgroundColor:T.t3, marginRight:4 },
  aiInputWrap:  { padding:16, borderTopWidth:1, borderTopColor:T.border, backgroundColor:T.bg },
  aiInputGrad:  { flexDirection:'row', alignItems:'center', borderRadius:30, borderWidth:1, borderColor:T.border2, paddingHorizontal:16, height:50 },
  aiInput:      { flex:1, color:T.t1, fontSize:15 },
  aiSendBtn:    { width:36, height:36, borderRadius:18, backgroundColor:T.aiBlue, justifyContent:'center', alignItems:'center' },
});