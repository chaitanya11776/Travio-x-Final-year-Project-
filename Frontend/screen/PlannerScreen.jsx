









// // // import React, { useEffect, useRef, useState } from 'react';
// // // import {
// // //   View, Text, StyleSheet, ScrollView, TextInput,
// // //   TouchableOpacity, ActivityIndicator, Animated,
// // //   Dimensions, StatusBar, KeyboardAvoidingView, Platform,
// // // } from 'react-native';
// // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// // // import { LinearGradient } from 'expo-linear-gradient';

// // // const { width, height } = Dimensions.get('window');

// // // /* ═══ Obsidian Theme ════════════════════════════════ */
// // // const T = {
// // //   bg:      '#050505',
// // //   card:    '#131313',
// // //   card2:   '#1A1A1A',
// // //   border:  '#242424',
// // //   border2: '#303030',
// // //   mint:    '#FFFFFF',
// // //   mintD:   '#C4C4C4',
// // //   t1:      '#FFFFFF',
// // //   t2:      '#B0B0B0',
// // //   t3:      '#4A4A4A',
// // // };

// // // const inspo = [
// // //   { city:'Paris',  days:'5', emoji:'🗼', weather:'18°C ☀️' },
// // //   { city:'Bali',   days:'7', emoji:'🌴', weather:'30°C 🌤' },
// // //   { city:'Tokyo',  days:'6', emoji:'⛩️', weather:'22°C 🌸' },
// // //   { city:'Goa',    days:'4', emoji:'🏖️', weather:'32°C ☀️' },
// // //   { city:'Manali', days:'5', emoji:'🏔️', weather:'8°C ❄️'  },
// // // ];

// // // const timeIcon = (time = '') => {
// // //   const h = parseInt(time);
// // //   if (h < 12) return 'sunny-outline';
// // //   if (h < 17) return 'partly-sunny-outline';
// // //   if (h < 20) return 'sunset-outline';
// // //   return 'moon-outline';
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Floating Sparks
// // //    ────────────────────────────────────────────────────── */
// // // const FloatingSpark = ({ x, delay, size = 3 }) => {
// // //   const a = useRef(new Animated.Value(0)).current;
// // //   useEffect(() => {
// // //     Animated.loop(Animated.sequence([
// // //       Animated.delay(delay),
// // //       Animated.timing(a, { toValue: 1, duration: 3000 + Math.random() * 2000, useNativeDriver: true }),
// // //       Animated.timing(a, { toValue: 0, duration: 0, useNativeDriver: true }),
// // //     ])).start();
// // //   }, []);
// // //   const ty = a.interpolate({ inputRange: [0, 1], outputRange: [0, -height * 0.4] });
// // //   const op = a.interpolate({ inputRange: [0, 0.1, 0.8, 1], outputRange: [0, 0.7, 0.4, 0] });
// // //   const sc = a.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 1.4, 0.4] });
// // //   return (
// // //     <Animated.View style={[styles.spark, { left: x, bottom: '10%', width: size, height: size, borderRadius: size/2, opacity: op, transform: [{ translateY: ty }, { scale: sc }] }]} />
// // //   );
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Scanline Sweep
// // //    ────────────────────────────────────────────────────── */
// // // const ScanLine = () => {
// // //   const a = useRef(new Animated.Value(0)).current;
// // //   useEffect(() => {
// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(a, { toValue: 1, duration: 2200, useNativeDriver: true }),
// // //       Animated.delay(3500),
// // //       Animated.timing(a, { toValue: 0, duration: 0, useNativeDriver: true }),
// // //       Animated.delay(1200),
// // //     ])).start();
// // //   }, []);
// // //   const tx = a.interpolate({ inputRange: [0, 1], outputRange: [-30, width] });
// // //   const op = a.interpolate({ inputRange: [0, 0.05, 0.9, 1], outputRange: [0, 1, 1, 0] });
// // //   return (
// // //     <Animated.View style={[StyleSheet.absoluteFill, { overflow: 'hidden' }]} pointerEvents="none">
// // //       <Animated.View style={[styles.scanLine, { transform: [{ translateX: tx }], opacity: op }]} />
// // //     </Animated.View>
// // //   );
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Burst Particle
// // //    ────────────────────────────────────────────────────── */
// // // const BurstParticle = ({ angle, triggered }) => {
// // //   const a = useRef(new Animated.Value(0)).current;
// // //   useEffect(() => {
// // //     if (!triggered) return;
// // //     a.setValue(0);
// // //     Animated.timing(a, { toValue: 1, duration: 700, useNativeDriver: true }).start();
// // //   }, [triggered]);
// // //   const dist = 55 + Math.random() * 30;
// // //   const tx = a.interpolate({ inputRange: [0, 1], outputRange: [0, Math.cos(angle) * dist] });
// // //   const ty = a.interpolate({ inputRange: [0, 1], outputRange: [0, Math.sin(angle) * dist - 8] });
// // //   const op = a.interpolate({ inputRange: [0, 0.3, 1], outputRange: [1, 1, 0] });
// // //   const sc = a.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 0.8, 0.2] });
// // //   return <Animated.View style={[styles.burst, { opacity: op, transform: [{ translateX: tx }, { translateY: ty }, { scale: sc }] }]} />;
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Radar Ping
// // //    ────────────────────────────────────────────────────── */
// // // const RadarPing = ({ active }) => {
// // //   const r1 = useRef(new Animated.Value(0)).current;
// // //   const r2 = useRef(new Animated.Value(0)).current;
// // //   const loop = useRef(null);
// // //   useEffect(() => {
// // //     if (active) {
// // //       loop.current = Animated.loop(Animated.parallel([
// // //         Animated.timing(r1, { toValue: 1, duration: 1600, useNativeDriver: true }),
// // //         Animated.sequence([Animated.delay(400), Animated.timing(r2, { toValue: 1, duration: 1600, useNativeDriver: true })]),
// // //       ]));
// // //       loop.current.start();
// // //     } else { loop.current?.stop(); r1.setValue(0); r2.setValue(0); }
// // //   }, [active]);
// // //   const ring = (v) => ({
// // //     scale:   v.interpolate({ inputRange: [0, 1], outputRange: [0.6, 2.2] }),
// // //     opacity: v.interpolate({ inputRange: [0, 0.4, 1], outputRange: [0.5, 0.3, 0] }),
// // //   });
// // //   if (!active) return null;
// // //   const s1 = ring(r1), s2 = ring(r2);
// // //   return (
// // //     <View style={styles.radarWrap} pointerEvents="none">
// // //       <Animated.View style={[styles.radarRing, { opacity: s1.opacity, transform: [{ scale: s1.scale }] }]} />
// // //       <Animated.View style={[styles.radarRing, { opacity: s2.opacity, transform: [{ scale: s2.scale }] }]} />
// // //     </View>
// // //   );
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Typewriter
// // //    ────────────────────────────────────────────────────── */
// // // const phrases = ['Day-by-day AI travel plans', 'Personalised itineraries', 'Smart route planning', 'Instant AI generation'];
// // // const Typewriter = () => {
// // //   const [text, setText] = useState('');
// // //   const [cursor, setCursor] = useState(true);
// // //   const idx = useRef(0);
// // //   useEffect(() => {
// // //     const blink = setInterval(() => setCursor(c => !c), 530);
// // //     const type = () => {
// // //       const ph = phrases[idx.current]; let i = 0; setText('');
// // //       const t = setInterval(() => {
// // //         i++; setText(ph.slice(0, i));
// // //         if (i >= ph.length) { clearInterval(t); setTimeout(() => { idx.current = (idx.current + 1) % phrases.length; type(); }, 2200); }
// // //       }, 50);
// // //     };
// // //     type();
// // //     return () => clearInterval(blink);
// // //   }, []);
// // //   return <Text style={styles.bannerSub}>{text}<Text style={{ opacity: cursor ? 1 : 0 }}>│</Text></Text>;
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Animated Stat Counter
// // //    ────────────────────────────────────────────────────── */
// // // const StatCounter = ({ target, suffix = '', dur = 1200 }) => {
// // //   const [val, setVal] = useState(0);
// // //   useEffect(() => {
// // //     const n = parseInt(target.replace(/\D/g, '')) || 0;
// // //     let start = 0; const steps = 40;
// // //     const interval = setInterval(() => {
// // //       start++;
// // //       setVal(Math.round((start / steps) * n));
// // //       if (start >= steps) clearInterval(interval);
// // //     }, dur / steps);
// // //     return () => clearInterval(interval);
// // //   }, []);
// // //   return <Text style={styles.statVal}>{val}{suffix}</Text>;
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Orbit Ring (around button)
// // //    ────────────────────────────────────────────────────── */
// // // const OrbitRing = () => {
// // //   const a = useRef(new Animated.Value(0)).current;
// // //   useEffect(() => {
// // //     Animated.loop(Animated.timing(a, { toValue: 1, duration: 4000, useNativeDriver: true })).start();
// // //   }, []);
// // //   const rot = a.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
// // //   const pulse = useRef(new Animated.Value(1)).current;
// // //   useEffect(() => {
// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(pulse, { toValue: 1.04, duration: 1200, useNativeDriver: true }),
// // //       Animated.timing(pulse, { toValue: 1, duration: 1200, useNativeDriver: true }),
// // //     ])).start();
// // //   }, []);
// // //   return (
// // //     <Animated.View style={[styles.orbitOuter, { transform: [{ rotate: rot }, { scale: pulse }] }]} pointerEvents="none">
// // //       <View style={styles.orbitDot} />
// // //     </Animated.View>
// // //   );
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Loading Progress Steps
// // //    ────────────────────────────────────────────────────── */
// // // const loadSteps = ['Analysing destination', 'Building day-by-day plan', 'Adding local tips'];
// // // const LoadingSteps = () => {
// // //   const [step, setStep] = useState(0);
// // //   const bar = useRef(new Animated.Value(0)).current;
// // //   useEffect(() => {
// // //     const iv = setInterval(() => setStep(s => (s + 1) % loadSteps.length), 1800);
// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(bar, { toValue: 1, duration: 5400, useNativeDriver: false }),
// // //       Animated.timing(bar, { toValue: 0, duration: 0, useNativeDriver: false }),
// // //     ])).start();
// // //     return () => clearInterval(iv);
// // //   }, []);
// // //   const barW = bar.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });
// // //   return (
// // //     <View style={styles.loadStepsWrap}>
// // //       <View style={styles.loadBar}>
// // //         <Animated.View style={[styles.loadBarFill, { width: barW }]} />
// // //       </View>
// // //       {loadSteps.map((s, i) => (
// // //         <View key={i} style={styles.loadStepRow}>
// // //           <View style={[styles.loadStepDot, i <= step && styles.loadStepDotActive]}>
// // //             {i < step && <Ionicons name="checkmark" size={10} color={T.bg} />}
// // //             {i === step && <Animated.View style={styles.loadStepPulse} />}
// // //           </View>
// // //           <Text style={[styles.loadStepTxt, i === step && styles.loadStepTxtActive]}>{s}</Text>
// // //         </View>
// // //       ))}
// // //     </View>
// // //   );
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Dot Grid Background
// // //    ────────────────────────────────────────────────────── */
// // // const DotGrid = () => {
// // //   const cols = Math.ceil(width / 28);
// // //   const rows = 14;
// // //   return (
// // //     <View style={styles.dotGrid} pointerEvents="none">
// // //       {Array.from({ length: rows }).map((_, r) => (
// // //         <View key={r} style={{ flexDirection: 'row', gap: 28 }}>
// // //           {Array.from({ length: cols }).map((_, c) => (
// // //             <View key={c} style={styles.gridDot} />
// // //           ))}
// // //         </View>
// // //       ))}
// // //     </View>
// // //   );
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Day Card with spring entry
// // //    ────────────────────────────────────────────────────── */
// // // const DayCardAnimated = ({ item, dayIdx }) => {
// // //   const sc = useRef(new Animated.Value(0.9)).current;
// // //   const op = useRef(new Animated.Value(0)).current;
// // //   useEffect(() => {
// // //     Animated.sequence([
// // //       Animated.delay(dayIdx * 130),
// // //       Animated.parallel([
// // //         Animated.spring(sc, { toValue: 1, friction: 7, tension: 80, useNativeDriver: true }),
// // //         Animated.timing(op, { toValue: 1, duration: 300, useNativeDriver: true }),
// // //       ]),
// // //     ]).start();
// // //   }, []);
// // //   return (
// // //     <Animated.View style={[styles.dayCard, { opacity: op, transform: [{ scale: sc }] }]}>
// // //       <LinearGradient colors={['#1E1E1E', '#131313']} style={styles.dayHeader}>
// // //         <LinearGradient colors={['#FFF', '#C4C4C4', 'transparent']}
// // //           start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.dayStrip} />
// // //         <View style={styles.dayBadge}><Text style={styles.dayNum}>{item.day}</Text></View>
// // //         <View style={{ flex: 1 }}>
// // //           <Text style={styles.dayTitle}>Day {item.day}</Text>
// // //           <Text style={styles.dayTheme}>{item.theme}</Text>
// // //         </View>
// // //         <Ionicons name={timeIcon('9')} size={20} color={T.t3} />
// // //       </LinearGradient>
// // //       {item.activities && item.activities.map((act, i) => (
// // //         <View key={i} style={[styles.actRow, i === item.activities.length - 1 && { borderBottomWidth: 0 }]}>
// // //           <View style={styles.timeCol}>
// // //             <Ionicons name={timeIcon(act.time)} size={14} color={T.t3} />
// // //             <Text style={styles.timeText}>{act.time}</Text>
// // //             {i < item.activities.length - 1 && <View style={styles.timeLine} />}
// // //           </View>
// // //           <View style={styles.actContent}>
// // //             <Text style={styles.actTask}>{act.task}</Text>
// // //             <Text style={styles.actDesc}>{act.description}</Text>
// // //           </View>
// // //         </View>
// // //       ))}
// // //     </Animated.View>
// // //   );
// // // };

// // // /* ──────────────────────────────────────────────────────
// // //    ✦ Bouncing dots — fixed: each ref declared separately
// // //    ────────────────────────────────────────────────────── */
// // // const Dots = () => {
// // //   const a0 = useRef(new Animated.Value(0)).current;
// // //   const a1 = useRef(new Animated.Value(0)).current;
// // //   const a2 = useRef(new Animated.Value(0)).current;
// // //   const anims = [a0, a1, a2];
// // //   useEffect(() => {
// // //     anims.forEach((a, i) => Animated.loop(Animated.sequence([
// // //       Animated.delay(i * 200),
// // //       Animated.timing(a, { toValue: 1, duration: 400, useNativeDriver: true }),
// // //       Animated.timing(a, { toValue: 0, duration: 400, useNativeDriver: true }),
// // //       Animated.delay(600 - i * 200),
// // //     ])).start());
// // //   }, []);
// // //   return (
// // //     <View style={{ flexDirection: 'row', gap: 8, marginTop: 6 }}>
// // //       {anims.map((a, i) => (
// // //         <Animated.View key={i} style={[styles.loadDot, {
// // //           transform: [{ translateY: a.interpolate({ inputRange: [0, 1], outputRange: [0, -8] }) }],
// // //           opacity: a.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.3, 1, 0.3] }),
// // //         }]} />
// // //       ))}
// // //     </View>
// // //   );
// // // };

// // // /* ═══════════════════════════════════════════════════
// // //    MAIN SCREEN
// // // ═══════════════════════════════════════════════════ */
// // // export default function PlannerScreen({ navigation }) {
// // //   const [city,    setCity]    = useState('');
// // //   const [days,    setDays]    = useState('3');
// // //   const [loading, setLoading] = useState(false);
// // //   const [plan,    setPlan]    = useState(null);
// // //   const [focused, setFocused] = useState(null);
// // //   const [burst,   setBurst]   = useState(false);

// // //   const fade     = useRef(new Animated.Value(0)).current;
// // //   const slideY   = useRef(new Animated.Value(30)).current;
// // //   const pulse    = useRef(new Animated.Value(0)).current;
// // //   const float    = useRef(new Animated.Value(0)).current;
// // //   const spin     = useRef(new Animated.Value(0)).current;
// // //   const btnScale = useRef(new Animated.Value(1)).current;

// // //   const sparks     = useRef(Array.from({length:14}, (_, i) => ({ x: Math.random()*width, delay: i*500, size: 2+Math.random()*3 }))).current;
// // //   const burstAngles = useRef(Array.from({length:10}, (_, i) => (i/10)*Math.PI*2)).current;

// // //   useEffect(() => {
// // //     Animated.parallel([
// // //       Animated.timing(fade,   { toValue: 1, duration: 700, useNativeDriver: true }),
// // //       Animated.spring(slideY, { toValue: 0, friction: 9, tension: 55, useNativeDriver: true }),
// // //     ]).start();
// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(pulse, { toValue: 1, duration: 2000, useNativeDriver: true }),
// // //       Animated.timing(pulse, { toValue: 0, duration: 2000, useNativeDriver: true }),
// // //     ])).start();
// // //     Animated.loop(Animated.sequence([
// // //       Animated.timing(float, { toValue: 1, duration: 5000, useNativeDriver: true }),
// // //       Animated.timing(float, { toValue: 0, duration: 5000, useNativeDriver: true }),
// // //     ])).start();
// // //     Animated.loop(Animated.timing(spin, { toValue: 1, duration: 8000, useNativeDriver: true })).start();
// // //   }, []);

// // //   const handleGenerate = () => {
// // //     if (!city.trim()) {
// // //       alert('Please enter a city name first!');
// // //       return;
// // //     }
// // //     setBurst(true);
// // //     Animated.sequence([
// // //       Animated.timing(btnScale, { toValue: 0.93, duration: 100, useNativeDriver: true }),
// // //       Animated.spring(btnScale, { toValue: 1, friction: 5, tension: 200, useNativeDriver: true }),
// // //     ]).start();
// // //     setTimeout(() => setBurst(false), 800);
// // //     generatePlan();
// // //   };

// // //   const generatePlan = async () => {
// // //     if (!city.trim()) return;
// // //     setLoading(true); setPlan(null);
// // //     try {
// // //       const r = await fetch('http://10.98.19.30:3000/api/ai-planner', {
// // //         method: 'POST', headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ city, days: parseInt(days) }),
// // //       });
// // //       const json = await r.json();
// // //       if (json.success) setPlan(json.data);
// // //       else alert('Could not generate plan. Try again.');
// // //     } catch (e) {
// // //       console.error(e);
// // //       alert('Connection failed. Make sure you are on the same Wi-Fi as your server.');
// // //     } finally { setLoading(false); }
// // //   };

// // //   const pulseS  = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.07] });
// // //   const floatY  = float.interpolate({ inputRange: [0, 1], outputRange: [0, -10] });
// // //   const spinStr = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

// // //   return (
// // //     <SafeAreaView style={styles.root}>
// // //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />

// // //       {/* ── BG ───────────────────────────────────── */}
// // //       <View style={StyleSheet.absoluteFill} pointerEvents="none">
// // //         <View style={[StyleSheet.absoluteFill, { backgroundColor: T.bg }]} />
// // //         {/* ✦ Dot grid texture */}
// // //         <DotGrid />
// // //         {/* ✦ Floating sparks */}
// // //         {sparks.map((s, i) => <FloatingSpark key={i} x={s.x} delay={s.delay} size={s.size} />)}
// // //         <Animated.View style={[styles.blob, { width: 300, height: 300, top: -80, right: -80,
// // //           backgroundColor: 'rgba(255,255,255,0.025)', transform: [{ translateY: floatY }] }]} />
// // //         <Animated.View style={[styles.blob, { width: 220, height: 220, bottom: 180, left: -70,
// // //           backgroundColor: 'rgba(255,255,255,0.02)', transform: [{ translateY: floatY }] }]} />
// // //         <Animated.View style={[styles.decRing, { width: 340, height: 340, borderRadius: 170,
// // //           top: -120, right: -130, borderColor: 'rgba(255,255,255,0.04)', transform: [{ translateY: floatY }] }]} />
// // //         <Animated.View style={{ position: 'absolute', bottom: 60, right: 10, opacity: 0.03, transform: [{ rotate: spinStr }] }}>
// // //           <Ionicons name="compass" size={160} color="#FFF" />
// // //         </Animated.View>
// // //       </View>

// // //       <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
// // //         <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

// // //           {/* ── HEADER ────────────────────────────── */}
// // //           <Animated.View style={[styles.header, { opacity: fade, transform: [{ translateY: slideY }] }]}>
// // //             <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
// // //               <Ionicons name="chevron-back" size={22} color={T.t1} />
// // //             </TouchableOpacity>
// // //             <View style={styles.headerMid}>
// // //               <Text style={styles.headerSub}>POWERED BY AI</Text>
// // //               <Text style={styles.headerTitle}>Trip Planner</Text>
// // //             </View>
// // //             <Animated.View style={[styles.headerIcon, { transform: [{ rotate: spinStr }] }]}>
// // //               <MaterialCommunityIcons name="lightning-bolt" size={22} color={T.t1} />
// // //             </Animated.View>
// // //           </Animated.View>

// // //           {/* ── AI BANNER + SCANLINE ─────────────── */}
// // //           <Animated.View style={{ opacity: fade, marginHorizontal: 20, marginBottom: 20 }}>
// // //             <LinearGradient colors={['#1A1A1A', '#242424']} style={styles.aiBanner}>
// // //               <LinearGradient colors={[T.mint, T.mintD, 'transparent']}
// // //                 start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bannerStrip} />
// // //               {/* ✦ Scanline */}
// // //               <ScanLine />
// // //               <View style={styles.bannerLeft}>
// // //                 <View style={styles.bannerBadge}>
// // //                   <Animated.View style={[styles.badgeDot, { transform: [{ scale: pulseS }] }]} />
// // //                   <Text style={styles.bannerBadgeTxt}> AI ACTIVE</Text>
// // //                 </View>
// // //                 <Text style={styles.bannerTitle}>Smart Itinerary{'\n'}Generator</Text>
// // //                 {/* ✦ Typewriter */}
// // //                 <Typewriter />
// // //               </View>
// // //               <Text style={styles.bannerEmoji}>🗺️</Text>
// // //               <View style={styles.bannerCircle1} />
// // //               <View style={styles.bannerCircle2} />
// // //             </LinearGradient>
// // //           </Animated.View>

// // //           {/* ── STATS — animated counters ─────────── */}
// // //           <Animated.View style={[styles.statsBar, { opacity: fade }]}>
// // //             {[
// // //               { icon: 'globe-outline',    raw: '190', suffix: '+', lbl: 'Destinations' },
// // //               { icon: 'calendar-outline', raw: '30',  suffix: ' days', lbl: 'Max Plan'  },
// // //               { icon: 'flash-outline',    raw: '10',  suffix: 's', lbl: 'AI Speed'      },
// // //             ].map((s, i) => (
// // //               <View key={i} style={[styles.statItem, i < 2 && { borderRightWidth: 1, borderRightColor: T.border }]}>
// // //                 <Ionicons name={s.icon} size={15} color={T.t2} />
// // //                 {/* ✦ Animated count-up */}
// // //                 <StatCounter target={s.raw} suffix={s.suffix} />
// // //                 <Text style={styles.statLbl}>{s.lbl}</Text>
// // //               </View>
// // //             ))}
// // //           </Animated.View>

// // //           {/* ── INPUTS + RADAR PING ──────────────── */}
// // //           <Animated.View style={[styles.inputSection, { opacity: fade, transform: [{ translateY: slideY }] }]}>
// // //             <View style={[styles.inputBox, focused === 'city' && styles.inputFocused]}>
// // //               <View style={styles.locationIconWrap}>
// // //                 <Ionicons name="location-outline" size={18} color={focused === 'city' ? T.mint : T.t3} />
// // //                 {/* ✦ Radar */}
// // //                 <RadarPing active={focused === 'city'} />
// // //               </View>
// // //               <TextInput
// // //                 style={styles.input}
// // //                 placeholder="Where to? (e.g. Paris, Goa)"
// // //                 placeholderTextColor={T.t3}
// // //                 value={city}
// // //                 onChangeText={setCity}
// // //                 onFocus={() => setFocused('city')}
// // //                 onBlur={()  => setFocused(null)}
// // //                 onSubmitEditing={() => { setFocused(null); handleGenerate(); }}
// // //                 returnKeyType="search"
// // //                 blurOnSubmit={true}
// // //                 autoCorrect={false}
// // //                 autoCapitalize="words"
// // //                 underlineColorAndroid="transparent"
// // //               />
// // //             </View>
// // //             <View style={styles.daysRow}>
// // //               <View style={[styles.daysBox, focused === 'days' && styles.inputFocused]}>
// // //                 <Ionicons name="calendar-outline" size={18} color={focused === 'days' ? T.mint : T.t3} />
// // //                 <TextInput
// // //                   style={[styles.input, { width: 60 }]}
// // //                   placeholder="Days"
// // //                   placeholderTextColor={T.t3}
// // //                   keyboardType="numeric"
// // //                   value={days}
// // //                   onChangeText={v => setDays(v.replace(/[^0-9]/g, ''))}
// // //                   onFocus={() => setFocused('days')}
// // //                   onBlur={()  => setFocused(null)}
// // //                   onSubmitEditing={() => { setFocused(null); handleGenerate(); }}
// // //                   returnKeyType="search"
// // //                   blurOnSubmit={true}
// // //                   maxLength={2}
// // //                   underlineColorAndroid="transparent"
// // //                 />
// // //               </View>
// // //               {['3','5','7','10'].map(d => (
// // //                 <TouchableOpacity key={d} onPress={() => setDays(d)}
// // //                   style={[styles.dayPill, days === d && styles.dayPillActive]}>
// // //                   <Text style={[styles.dayPillTxt, days === d && styles.dayPillTxtActive]}>{d}d</Text>
// // //                 </TouchableOpacity>
// // //               ))}
// // //             </View>
// // //           </Animated.View>

// // //           {/* ── GENERATE BUTTON + ORBIT + BURST ─── */}
// // //           <Animated.View style={{ paddingHorizontal: 20, marginBottom: 24, opacity: fade }}>
// // //             <View style={styles.btnWrap}>
// // //               {/* ✦ Burst particles */}
// // //               {burstAngles.map((ang, i) => <BurstParticle key={i} angle={ang} triggered={burst} />)}
// // //               {/* ✦ Orbit ring */}
// // //               <OrbitRing />
// // //               <Animated.View style={{ transform: [{ scale: btnScale }], width: '100%' }}>
// // //                 <TouchableOpacity onPress={handleGenerate} disabled={loading} activeOpacity={0.9}>
// // //                   <LinearGradient colors={[T.mint, T.mintD]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.genBtn}>
// // //                     {loading
// // //                       ? <ActivityIndicator color={T.bg} size="small" />
// // //                       : <>
// // //                           <MaterialCommunityIcons name="lightning-bolt" size={20} color={T.bg} />
// // //                           <Text style={styles.genBtnTxt}>Generate Magic Itinerary</Text>
// // //                         </>
// // //                     }
// // //                   </LinearGradient>
// // //                 </TouchableOpacity>
// // //               </Animated.View>
// // //             </View>
// // //           </Animated.View>

// // //           {/* ── INSPIRATION CHIPS ─────────────────── */}
// // //           {!plan && !loading && (
// // //             <Animated.View style={{ opacity: fade, marginBottom: 28 }}>
// // //               <View style={styles.sectionRow}>
// // //                 <Text style={styles.sectionTitle}>Quick Inspiration</Text>
// // //                 <Text style={styles.sectionSub}>✦ Tap to fill</Text>
// // //               </View>
// // //               <ScrollView horizontal showsHorizontalScrollIndicator={false}
// // //                 contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}>
// // //                 {inspo.map(i => (
// // //                   <TouchableOpacity key={i.city} onPress={() => { setCity(i.city); setDays(i.days); }}
// // //                     style={styles.inspoChip} activeOpacity={0.78}>
// // //                     <Text style={styles.inspoEmoji}>{i.emoji}</Text>
// // //                     <Text style={styles.inspoCity}>{i.city}</Text>
// // //                     <Text style={styles.inspoDays}>{i.days} days</Text>
// // //                     {/* ✦ Weather chip */}
// // //                     <View style={styles.weatherPill}>
// // //                       <Text style={styles.weatherTxt}>{i.weather}</Text>
// // //                     </View>
// // //                   </TouchableOpacity>
// // //                 ))}
// // //               </ScrollView>
// // //             </Animated.View>
// // //           )}

// // //           {/* ── LOADING + PROGRESS STEPS ─────────── */}
// // //           {loading && (
// // //             <View style={styles.loadBox}>
// // //               <Animated.View style={{ transform: [{ rotate: spinStr }] }}>
// // //                 <MaterialCommunityIcons name="lightning-bolt-circle" size={48} color={T.mint} />
// // //               </Animated.View>
// // //               <Text style={styles.loadTitle}>AI Crafting Your Plan…</Text>
// // //               <Text style={styles.loadSub}>Analysing {city} · {days} days</Text>
// // //               <Dots />
// // //               {/* ✦ Progress steps */}
// // //               <LoadingSteps />
// // //             </View>
// // //           )}

// // //           {/* ── RESULTS ───────────────────────────── */}
// // //           {plan && (
// // //             <Animated.View style={{ opacity: fade, paddingHorizontal: 20, paddingBottom: 40 }}>
// // //               {/* ✦ Plan score card */}
// // //               <View style={styles.scoreCard}>
// // //                 <LinearGradient colors={['#1A1A1A', '#242424']} style={styles.scoreInner}>
// // //                   <LinearGradient colors={[T.mint, T.mintD, 'transparent']}
// // //                     start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.dayStrip} />
// // //                   <Text style={styles.scoreCityName}>{city}</Text>
// // //                   <Text style={styles.scoreMeta}>{days}-Day AI Itinerary</Text>
// // //                   <View style={styles.scoreRow}>
// // //                     {[
// // //                       { icon: 'star',           val: '9.4',                                      lbl: 'AI Score'    },
// // //                       { icon: 'camera-outline',  val: `${plan?.itinerary?.length ?? days}`,       lbl: 'Days'        },
// // //                       { icon: 'time-outline',    val: `${(parseInt(days) || 3) * 6}h`,            lbl: 'Activities'  },
// // //                     ].map((m, i) => (
// // //                       <View key={i} style={styles.scoreMini}>
// // //                         <Ionicons name={m.icon} size={13} color={T.t2} />
// // //                         <Text style={styles.scoreMiniVal}>{m.val}</Text>
// // //                         <Text style={styles.scoreMiniLbl}>{m.lbl}</Text>
// // //                       </View>
// // //                     ))}
// // //                   </View>
// // //                   <TouchableOpacity onPress={() => setPlan(null)} style={styles.clearBtn}>
// // //                     <Ionicons name="refresh-outline" size={16} color={T.t2} />
// // //                   </TouchableOpacity>
// // //                 </LinearGradient>
// // //               </View>

// // //               {plan.highlights && (
// // //                 <ScrollView horizontal showsHorizontalScrollIndicator={false}
// // //                   contentContainerStyle={{ gap: 8, paddingBottom: 14 }}>
// // //                   {plan.highlights.map((h, i) => (
// // //                     <View key={i} style={styles.highlightTag}><Text style={styles.highlightTxt}>{h}</Text></View>
// // //                   ))}
// // //                 </ScrollView>
// // //               )}

// // //               {plan.itinerary && plan.itinerary.map((item, dayIdx) => (
// // //                 <DayCardAnimated key={dayIdx} item={item} dayIdx={dayIdx} />
// // //               ))}
// // //             </Animated.View>
// // //           )}

// // //           <View style={{ height: 40 }} />
// // //         </ScrollView>
// // //       </KeyboardAvoidingView>
// // //     </SafeAreaView>
// // //   );
// // // }

// // // /* ═══ Styles ════════════════════════════════════════ */
// // // const styles = StyleSheet.create({
// // //   root:    { flex: 1, backgroundColor: T.bg },
// // //   blob:    { position: 'absolute', borderRadius: 9999 },
// // //   decRing: { position: 'absolute', borderWidth: 1 },

// // //   // ✦ Effects
// // //   dotGrid:          { position: 'absolute', top: 60, left: 0, gap: 28, opacity: 0.12 },
// // //   gridDot:          { width: 2, height: 2, borderRadius: 1, backgroundColor: 'rgba(255,255,255,0.25)' },
// // //   spark:            { position: 'absolute', backgroundColor: 'rgba(255,255,255,0.7)',
// // //                       shadowColor: '#FFF', shadowOpacity: 0.8, shadowRadius: 4, elevation: 2 },
// // //   scanLine:         { position: 'absolute', top: 0, bottom: 0, width: 32,
// // //                       backgroundColor: 'rgba(255,255,255,0.05)',
// // //                       shadowColor: '#FFF', shadowOpacity: 0.15, shadowRadius: 12 },
// // //   burst:            { position: 'absolute', width: 6, height: 6, borderRadius: 3,
// // //                       backgroundColor: 'rgba(255,255,255,0.9)',
// // //                       shadowColor: '#FFF', shadowOpacity: 0.9, shadowRadius: 6, elevation: 3 },
// // //   radarWrap:        { position: 'absolute', width: 26, height: 26, justifyContent: 'center', alignItems: 'center' },
// // //   radarRing:        { position: 'absolute', width: 26, height: 26, borderRadius: 13,
// // //                       borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.5)' },
// // //   locationIconWrap: { position: 'relative', width: 22, height: 22, justifyContent: 'center', alignItems: 'center' },
// // //   loadDot:          { width: 7, height: 7, borderRadius: 4, backgroundColor: T.mint,
// // //                       shadowColor: '#FFF', shadowOpacity: 0.9, shadowRadius: 5, elevation: 3 },
// // //   btnWrap:          { alignItems: 'center', justifyContent: 'center', position: 'relative' },
// // //   orbitOuter:       { position: 'absolute', width: width - 40 + 20, height: 60,
// // //                       borderRadius: 30, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)',
// // //                       borderStyle: 'dashed', justifyContent: 'flex-start', alignItems: 'center' },
// // //   orbitDot:         { position: 'absolute', top: -3, left: '50%', width: 6, height: 6,
// // //                       borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.6)',
// // //                       shadowColor: '#FFF', shadowOpacity: 0.9, shadowRadius: 5, elevation: 3 },

// // //   // Header
// // //   header:      { flexDirection:'row', alignItems:'center', paddingHorizontal:20, paddingTop:16, paddingBottom:10 },
// // //   backBtn:     { width:40, height:40, borderRadius:12, backgroundColor:T.card, justifyContent:'center',
// // //                  alignItems:'center', borderWidth:1, borderColor:T.border,
// // //                  shadowColor:'#FFF', shadowOpacity:0.06, shadowRadius:8, elevation:3 },
// // //   headerMid:   { flex:1, marginLeft:14 },
// // //   headerSub:   { color:T.t3, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:2 },
// // //   headerTitle: { color:T.t1, fontSize:22, fontWeight:'900', letterSpacing:-0.6 },
// // //   headerIcon:  { width:40, height:40, borderRadius:12, backgroundColor:T.card,
// // //                  justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:T.border },

// // //   // AI Banner
// // //   aiBanner:      { borderRadius:20, overflow:'hidden', flexDirection:'row', alignItems:'center',
// // //                    padding:18, borderWidth:1, borderColor:T.border },
// // //   bannerStrip:   { position:'absolute', top:0, left:0, right:0, height:2 },
// // //   bannerLeft:    { flex:1 },
// // //   bannerBadge:   { flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.06)',
// // //                    paddingHorizontal:8, paddingVertical:3, borderRadius:20, alignSelf:'flex-start', marginBottom:8 },
// // //   badgeDot:      { width:6, height:6, borderRadius:3, backgroundColor:T.mint,
// // //                    shadowColor:'#FFF', shadowOpacity:0.9, shadowRadius:5, elevation:3 },
// // //   bannerBadgeTxt:{ color:T.t2, fontSize:8, fontWeight:'800', letterSpacing:1.5 },
// // //   bannerTitle:   { color:T.t1, fontSize:18, fontWeight:'900', lineHeight:24, marginBottom:4 },
// // //   bannerSub:     { color:T.t3, fontSize:11, minHeight:16 },
// // //   bannerEmoji:   { fontSize:46, marginLeft:8 },
// // //   bannerCircle1: { position:'absolute', width:100, height:100, borderRadius:50, top:-30, right:-10, backgroundColor:'rgba(255,255,255,0.03)' },
// // //   bannerCircle2: { position:'absolute', width:60, height:60, borderRadius:30, bottom:-18, right:60, backgroundColor:'rgba(255,255,255,0.02)' },

// // //   // Stats
// // //   statsBar:  { flexDirection:'row', marginHorizontal:20, marginBottom:20,
// // //                backgroundColor:T.card, borderRadius:16, borderWidth:1, borderColor:T.border },
// // //   statItem:  { flex:1, alignItems:'center', paddingVertical:14, gap:3 },
// // //   statVal:   { color:T.t1, fontSize:12, fontWeight:'900' },
// // //   statLbl:   { color:T.t3, fontSize:9, fontWeight:'600' },

// // //   // Inputs
// // //   inputSection: { paddingHorizontal:20, marginBottom:16, gap:10 },
// // //   inputBox:     { flexDirection:'row', alignItems:'center', backgroundColor:'#0E0E0E',
// // //                   borderRadius:18, borderWidth:1.5, borderColor:'#262626',
// // //                   paddingHorizontal:14, paddingVertical:13, gap:10 },
// // //   inputFocused: { borderColor:'rgba(255,255,255,0.3)', shadowColor:'#FFF', shadowOpacity:0.1, shadowRadius:12, elevation:4 },
// // //   input:        { flex:1, color:T.t1, fontSize:15, fontWeight:'500' },
// // //   daysRow:      { flexDirection:'row', alignItems:'center', gap:8 },
// // //   daysBox:      { flexDirection:'row', alignItems:'center', backgroundColor:'#0E0E0E',
// // //                   borderRadius:18, borderWidth:1.5, borderColor:'#262626',
// // //                   paddingHorizontal:14, paddingVertical:13, gap:8 },
// // //   dayPill:      { paddingHorizontal:14, paddingVertical:11, borderRadius:14,
// // //                   backgroundColor:T.card, borderWidth:1, borderColor:T.border },
// // //   dayPillActive:{ backgroundColor:T.mint, borderColor:T.mint },
// // //   dayPillTxt:   { color:T.t2, fontSize:13, fontWeight:'700' },
// // //   dayPillTxtActive: { color:T.bg },

// // //   // Generate
// // //   genBtn:    { borderRadius:16, paddingVertical:16, flexDirection:'row', alignItems:'center',
// // //                justifyContent:'center', gap:10, width:'100%',
// // //                shadowColor:'#FFF', shadowOpacity:0.25, shadowRadius:14, elevation:6 },
// // //   genBtnTxt: { color:T.bg, fontSize:16, fontWeight:'900' },

// // //   // Inspiration
// // //   sectionRow:   { flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20, marginBottom:12 },
// // //   sectionTitle: { color:T.t1, fontSize:15, fontWeight:'800' },
// // //   sectionSub:   { color:T.t3, fontSize:11 },
// // //   inspoChip:    { alignItems:'center', backgroundColor:T.card, borderRadius:18, padding:12,
// // //                   borderWidth:1, borderColor:T.border, width:95, gap:3 },
// // //   inspoEmoji:   { fontSize:24 },
// // //   inspoCity:    { color:T.t1, fontSize:12, fontWeight:'800' },
// // //   inspoDays:    { color:T.t3, fontSize:9 },
// // //   weatherPill:  { backgroundColor:'rgba(255,255,255,0.06)', paddingHorizontal:6, paddingVertical:2,
// // //                   borderRadius:8, marginTop:3 },
// // //   weatherTxt:   { color:T.t2, fontSize:8, fontWeight:'700' },

// // //   // Loading
// // //   loadBox:       { alignItems:'center', paddingVertical:40, gap:8 },
// // //   loadTitle:     { color:T.t1, fontSize:18, fontWeight:'800' },
// // //   loadSub:       { color:T.t3, fontSize:13 },
// // //   loadStepsWrap: { marginTop:20, alignSelf:'stretch', paddingHorizontal:40, gap:10 },
// // //   loadBar:       { height:2, backgroundColor:T.border, borderRadius:1, marginBottom:12, overflow:'hidden' },
// // //   loadBarFill:   { height:'100%', backgroundColor:T.mint, borderRadius:1,
// // //                    shadowColor:'#FFF', shadowOpacity:0.6, shadowRadius:6 },
// // //   loadStepRow:   { flexDirection:'row', alignItems:'center', gap:10 },
// // //   loadStepDot:   { width:18, height:18, borderRadius:9, backgroundColor:T.border,
// // //                    justifyContent:'center', alignItems:'center' },
// // //   loadStepDotActive: { backgroundColor:T.mint },
// // //   loadStepPulse: { width:8, height:8, borderRadius:4, backgroundColor:T.bg },
// // //   loadStepTxt:   { color:T.t3, fontSize:12 },
// // //   loadStepTxtActive: { color:T.t1, fontWeight:'700' },

// // //   // Score card
// // //   scoreCard:    { marginBottom:16 },
// // //   scoreInner:   { borderRadius:20, overflow:'hidden', padding:18, borderWidth:1, borderColor:T.border, position:'relative' },
// // //   scoreCityName:{ color:T.t1, fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
// // //   scoreMeta:    { color:T.t3, fontSize:11, marginBottom:14, marginTop:2 },
// // //   scoreRow:     { flexDirection:'row', gap:20 },
// // //   scoreMini:    { alignItems:'center', gap:3 },
// // //   scoreMiniVal: { color:T.t1, fontSize:14, fontWeight:'900' },
// // //   scoreMiniLbl: { color:T.t3, fontSize:9 },
// // //   clearBtn:     { position:'absolute', top:14, right:14, width:32, height:32, borderRadius:9,
// // //                   backgroundColor:'rgba(255,255,255,0.06)', justifyContent:'center', alignItems:'center',
// // //                   borderWidth:1, borderColor:T.border },
// // //   highlightTag: { backgroundColor:'rgba(255,255,255,0.06)', paddingHorizontal:12, paddingVertical:5,
// // //                   borderRadius:20, borderWidth:1, borderColor:T.border },
// // //   highlightTxt: { color:T.t2, fontSize:11, fontWeight:'600' },

// // //   // Day card
// // //   dayCard:    { backgroundColor:T.card, borderRadius:20, marginBottom:16, borderWidth:1,
// // //                 borderColor:T.border, overflow:'hidden',
// // //                 shadowColor:'#FFF', shadowOpacity:0.04, shadowRadius:10, elevation:3 },
// // //   dayHeader:  { flexDirection:'row', alignItems:'center', padding:16, gap:12 },
// // //   dayStrip:   { position:'absolute', top:0, left:0, right:0, height:2 },
// // //   dayBadge:   { width:36, height:36, borderRadius:10, backgroundColor:'rgba(255,255,255,0.08)',
// // //                 justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:T.border2 },
// // //   dayNum:     { color:T.t1, fontSize:14, fontWeight:'900' },
// // //   dayTitle:   { color:T.t1, fontSize:14, fontWeight:'800' },
// // //   dayTheme:   { color:T.t3, fontSize:11, marginTop:2 },
// // //   actRow:     { flexDirection:'row', paddingHorizontal:16, paddingVertical:14,
// // //                 borderBottomWidth:1, borderBottomColor:T.border },
// // //   timeCol:    { width:54, alignItems:'center', gap:4 },
// // //   timeText:   { color:T.t3, fontSize:9, fontWeight:'700', textAlign:'center' },
// // //   timeLine:   { width:1, flex:1, backgroundColor:T.border, marginTop:4 },
// // //   actContent: { flex:1, paddingLeft:10 },
// // //   actTask:    { color:T.t1, fontWeight:'700', fontSize:14, marginBottom:4 },
// // //   actDesc:    { color:T.t3, fontSize:12, lineHeight:18 },
// // // });











import { useEffect, useRef, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TextInput,
  TouchableOpacity, ActivityIndicator, Animated,
  Dimensions, StatusBar, KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

/* ═══ Obsidian Theme ════════════════════════════════ */
const T = {
  bg:      '#050505',
  card:    '#131313',
  card2:   '#1A1A1A',
  border:  '#242424',
  border2: '#303030',
  mint:    '#FFFFFF',
  mintD:   '#C4C4C4',
  t1:      '#FFFFFF',
  t2:      '#B0B0B0',
  t3:      '#4A4A4A',
  accent:  '#00FF94', // Status Green
};

const inspo = [
  { city:'Paris',  days:'5', emoji:'🗼', weather:'18°C ☀️' },
  { city:'Bali',   days:'7', emoji:'🌴', weather:'30°C 🌤' },
  { city:'Tokyo',  days:'6', emoji:'⛩️', weather:'22°C 🌸' },
  { city:'Goa',    days:'4', emoji:'🏖️', weather:'32°C ☀️' },
  { city:'Manali', days:'5', emoji:'🏔️', weather:'8°C ❄️'  },
];

const timeIcon = (time = '') => {
  const h = parseInt(time);
  if (h < 12) return 'sunny-outline';
  if (h < 17) return 'partly-sunny-outline';
  if (h < 20) return 'sunset-outline';
  return 'moon-outline';
};

/* ──────────────────────────────────────────────────────
   ✦ Decorative Components (Sparks, Scanline, etc.)
   ────────────────────────────────────────────────────── */
const FloatingSpark = ({ x, delay, size = 3 }) => {
  const a = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.sequence([
      Animated.delay(delay),
      Animated.timing(a, { toValue: 1, duration: 3000 + Math.random() * 2000, useNativeDriver: true }),
      Animated.timing(a, { toValue: 0, duration: 0, useNativeDriver: true }),
    ])).start();
  }, []);
  const ty = a.interpolate({ inputRange: [0, 1], outputRange: [0, -height * 0.4] });
  const op = a.interpolate({ inputRange: [0, 0.1, 0.8, 1], outputRange: [0, 0.7, 0.4, 0] });
  const sc = a.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 1.4, 0.4] });
  return (
    <Animated.View style={[styles.spark, { left: x, bottom: '10%', width: size, height: size, borderRadius: size/2, opacity: op, transform: [{ translateY: ty }, { scale: sc }] }]} />
  );
};

const ScanLine = () => {
  const a = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.sequence([
      Animated.timing(a, { toValue: 1, duration: 2200, useNativeDriver: true }),
      Animated.delay(3500),
      Animated.timing(a, { toValue: 0, duration: 0, useNativeDriver: true }),
      Animated.delay(1200),
    ])).start();
  }, []);
  const tx = a.interpolate({ inputRange: [0, 1], outputRange: [-30, width] });
  const op = a.interpolate({ inputRange: [0, 0.05, 0.9, 1], outputRange: [0, 1, 1, 0] });
  return (
    <Animated.View style={[StyleSheet.absoluteFill, { overflow: 'hidden' }]} pointerEvents="none">
      <Animated.View style={[styles.scanLine, { transform: [{ translateX: tx }], opacity: op }]} />
    </Animated.View>
  );
};

const BurstParticle = ({ angle, triggered }) => {
  const a = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    if (!triggered) return;
    a.setValue(0);
    Animated.timing(a, { toValue: 1, duration: 700, useNativeDriver: true }).start();
  }, [triggered]);
  const dist = 55 + Math.random() * 30;
  const tx = a.interpolate({ inputRange: [0, 1], outputRange: [0, Math.cos(angle) * dist] });
  const ty = a.interpolate({ inputRange: [0, 1], outputRange: [0, Math.sin(angle) * dist - 8] });
  const op = a.interpolate({ inputRange: [0, 0.3, 1], outputRange: [1, 1, 0] });
  const sc = a.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 0.8, 0.2] });
  return <Animated.View style={[styles.burst, { opacity: op, transform: [{ translateX: tx }, { translateY: ty }, { scale: sc }] }]} />;
};

const Typewriter = () => {
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState(true);
  const phrases = ['Day-by-day AI travel plans', 'Personalised itineraries', 'Smart route planning', 'Instant AI generation'];
  const idx = useRef(0);
  useEffect(() => {
    const blink = setInterval(() => setCursor(c => !c), 530);
    const type = () => {
      const ph = phrases[idx.current]; let i = 0; setText('');
      const t = setInterval(() => {
        i++; setText(ph.slice(0, i));
        if (i >= ph.length) { clearInterval(t); setTimeout(() => { idx.current = (idx.current + 1) % phrases.length; type(); }, 2200); }
      }, 50);
    };
    type();
    return () => clearInterval(blink);
  }, []);
  return <Text style={styles.bannerSub}>{text}<Text style={{ opacity: cursor ? 1 : 0 }}>│</Text></Text>;
};

const StatCounter = ({ target, suffix = '', dur = 1200 }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const n = parseInt(target.replace(/\D/g, '')) || 0;
    let start = 0; const steps = 40;
    const interval = setInterval(() => {
      start++;
      setVal(Math.round((start / steps) * n));
      if (start >= steps) clearInterval(interval);
    }, dur / steps);
    return () => clearInterval(interval);
  }, []);
  return <Text style={styles.statVal}>{val}{suffix}</Text>;
};

const OrbitRing = () => {
  const a = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(Animated.timing(a, { toValue: 1, duration: 4000, useNativeDriver: true })).start();
  }, []);
  const rot = a.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  const pulse = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.loop(Animated.sequence([
      Animated.timing(pulse, { toValue: 1.04, duration: 1200, useNativeDriver: true }),
      Animated.timing(pulse, { toValue: 1, duration: 1200, useNativeDriver: true }),
    ])).start();
  }, []);
  return (
    <Animated.View style={[styles.orbitOuter, { transform: [{ rotate: rot }, { scale: pulse }] }]} pointerEvents="none">
      <View style={styles.orbitDot} />
    </Animated.View>
  );
};

const LoadingSteps = () => {
  const loadSteps = ['Analysing destination', 'Building day-by-day plan', 'Adding local tips'];
  const [step, setStep] = useState(0);
  const bar = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const iv = setInterval(() => setStep(s => (s + 1) % loadSteps.length), 1800);
    Animated.loop(Animated.sequence([
      Animated.timing(bar, { toValue: 1, duration: 5400, useNativeDriver: false }),
      Animated.timing(bar, { toValue: 0, duration: 0, useNativeDriver: false }),
    ])).start();
    return () => clearInterval(iv);
  }, []);
  const barW = bar.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });
  return (
    <View style={styles.loadStepsWrap}>
      <View style={styles.loadBar}>
        <Animated.View style={[styles.loadBarFill, { width: barW }]} />
      </View>
      {loadSteps.map((s, i) => (
        <View key={i} style={styles.loadStepRow}>
          <View style={[styles.loadStepDot, i <= step && styles.loadStepDotActive]}>
            {i < step && <Ionicons name="checkmark" size={10} color={T.bg} />}
            {i === step && <Animated.View style={styles.loadStepPulse} />}
          </View>
          <Text style={[styles.loadStepTxt, i === step && styles.loadStepTxtActive]}>{s}</Text>
        </View>
      ))}
    </View>
  );
};

const DotGrid = () => {
  const cols = Math.ceil(width / 28);
  const rows = 14;
  return (
    <View style={styles.dotGrid} pointerEvents="none">
      {Array.from({ length: rows }).map((_, r) => (
        <View key={r} style={{ flexDirection: 'row', gap: 28 }}>
          {Array.from({ length: cols }).map((_, c) => (
            <View key={c} style={styles.gridDot} />
          ))}
        </View>
      ))}
    </View>
  );
};

const DayCardAnimated = ({ item, dayIdx }) => {
  const sc = useRef(new Animated.Value(0.9)).current;
  const op = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.delay(dayIdx * 130),
      Animated.parallel([
        Animated.spring(sc, { toValue: 1, friction: 7, tension: 80, useNativeDriver: true }),
        Animated.timing(op, { toValue: 1, duration: 300, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);
  return (
    <Animated.View style={[styles.dayCard, { opacity: op, transform: [{ scale: sc }] }]}>
      <LinearGradient colors={['#1E1E1E', '#131313']} style={styles.dayHeader}>
        <LinearGradient colors={['#FFF', '#C4C4C4', 'transparent']}
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.dayStrip} />
        <View style={styles.dayBadge}><Text style={styles.dayNum}>{item.day}</Text></View>
        <View style={{ flex: 1 }}>
          <Text style={styles.dayTitle}>Day {item.day}</Text>
          <Text style={styles.dayTheme}>{item.theme}</Text>
        </View>
        <Ionicons name={timeIcon('9')} size={20} color={T.t3} />
      </LinearGradient>
      {item.activities && item.activities.map((act, i) => (
        <View key={i} style={[styles.actRow, i === item.activities.length - 1 && { borderBottomWidth: 0 }]}>
          <View style={styles.timeCol}>
            <Ionicons name={timeIcon(act.time)} size={14} color={T.t3} />
            <Text style={styles.timeText}>{act.time}</Text>
            {i < item.activities.length - 1 && <View style={styles.timeLine} />}
          </View>
          <View style={styles.actContent}>
            <Text style={styles.actTask}>{act.task}</Text>
            <Text style={styles.actDesc}>{act.description}</Text>
          </View>
        </View>
      ))}
    </Animated.View>
  );
};

const Dots = () => {
  const a0 = useRef(new Animated.Value(0)).current;
  const a1 = useRef(new Animated.Value(0)).current;
  const a2 = useRef(new Animated.Value(0)).current;
  const anims = [a0, a1, a2];
  useEffect(() => {
    anims.forEach((a, i) => Animated.loop(Animated.sequence([
      Animated.delay(i * 200),
      Animated.timing(a, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(a, { toValue: 0, duration: 400, useNativeDriver: true }),
      Animated.delay(600 - i * 200),
    ])).start());
  }, []);
  return (
    <View style={{ flexDirection: 'row', gap: 8, marginTop: 6 }}>
      {anims.map((a, i) => (
        <Animated.View key={i} style={[styles.loadDot, {
          transform: [{ translateY: a.interpolate({ inputRange: [0, 1], outputRange: [0, -8] }) }],
          opacity: a.interpolate({ inputRange: [0, 0.5, 1], outputRange: [0.3, 1, 0.3] }),
        }]} />
      ))}
    </View>
  );
};

/* ═══════════════════════════════════════════════════
   MAIN SCREEN
═══════════════════════════════════════════════════ */
export default function PlannerScreen({ navigation }) {
  const [city,    setCity]    = useState('');
  const [days,    setDays]    = useState('3');
  const [loading, setLoading] = useState(false);
  const [plan,    setPlan]    = useState(null);
  const [focused, setFocused] = useState(null);
  const [burst,   setBurst]   = useState(false);

  const fade     = useRef(new Animated.Value(0)).current;
  const slideY   = useRef(new Animated.Value(30)).current;
  const pulse    = useRef(new Animated.Value(0)).current;
  const float    = useRef(new Animated.Value(0)).current;
  const spin     = useRef(new Animated.Value(0)).current;
  const btnScale = useRef(new Animated.Value(1)).current;

  const sparks      = useRef(Array.from({length:14}, (_, i) => ({ x: Math.random()*width, delay: i*500, size: 2+Math.random()*3 }))).current;
  const burstAngles = useRef(Array.from({length:10}, (_, i) => (i/10)*Math.PI*2)).current;

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
      Animated.timing(float, { toValue: 1, duration: 5000, useNativeDriver: true }),
      Animated.timing(float, { toValue: 0, duration: 5000, useNativeDriver: true }),
    ])).start();
    Animated.loop(Animated.timing(spin, { toValue: 1, duration: 8000, useNativeDriver: true })).start();
  }, []);

  const handleGenerate = () => {
    if (!city.trim()) {
      alert('Please enter a city name first!');
      return;
    }
    setBurst(true);
    Animated.sequence([
      Animated.timing(btnScale, { toValue: 0.93, duration: 100, useNativeDriver: true }),
      Animated.spring(btnScale, { toValue: 1, friction: 5, tension: 200, useNativeDriver: true }),
    ]).start();
    setTimeout(() => setBurst(false), 800);
    generatePlan();
  };

  const generatePlan = async () => {
    if (!city.trim()) return;
    setLoading(true); setPlan(null);
    try {
      const r = await fetch('https://semproject-1a4i.vercel.app/api/ai-planner', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city, days: parseInt(days) }),
      });
      const json = await r.json();
      if (json.success) setPlan(json.data);
      else alert('Could not generate plan. Try again.');
    } catch (e) {
      console.error(e);
      alert('Connection failed. Make sure you are on the same Wi-Fi as your server.');
    } finally { setLoading(false); }
  };

  const pulseS  = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.07] });
  const floatY  = float.interpolate({ inputRange: [0, 1], outputRange: [0, -10] });
  const spinStr = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={T.bg} />

      {/* ── BG ───────────────────────────────────── */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View style={[StyleSheet.absoluteFill, { backgroundColor: T.bg }]} />
        <DotGrid />
        {sparks.map((s, i) => <FloatingSpark key={i} x={s.x} delay={s.delay} size={s.size} />)}
        <Animated.View style={[styles.blob, { width: 300, height: 300, top: -80, right: -80,
          backgroundColor: 'rgba(255,255,255,0.025)', transform: [{ translateY: floatY }] }]} />
        <Animated.View style={[styles.blob, { width: 220, height: 220, bottom: 180, left: -70,
          backgroundColor: 'rgba(255,255,255,0.02)', transform: [{ translateY: floatY }] }]} />
        <Animated.View style={[styles.decRing, { width: 340, height: 340, borderRadius: 170,
          top: -120, right: -130, borderColor: 'rgba(255,255,255,0.04)', transform: [{ translateY: floatY }] }]} />
        <Animated.View style={{ position: 'absolute', bottom: 60, right: 10, opacity: 0.03, transform: [{ rotate: spinStr }] }}>
          <Ionicons name="compass" size={160} color="#FFF" />
        </Animated.View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

          {/* ── HEADER ────────────────────────────── */}
          <Animated.View style={[styles.header, { opacity: fade, transform: [{ translateY: slideY }] }]}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
              <Ionicons name="chevron-back" size={22} color={T.t1} />
            </TouchableOpacity>
            <View style={styles.headerMid}>
              <Text style={styles.headerSub}>POWERED BY AI</Text>
              <Text style={styles.headerTitle}>Trip Planner</Text>
            </View>
            <Animated.View style={[styles.headerIcon, { transform: [{ rotate: spinStr }] }]}>
              <MaterialCommunityIcons name="lightning-bolt" size={22} color={T.t1} />
            </Animated.View>
          </Animated.View>

          {/* ── AI BANNER ─────────────── */}
          <Animated.View style={{ opacity: fade, marginHorizontal: 20, marginBottom: 20 }}>
            <LinearGradient colors={['#1A1A1A', '#242424']} style={styles.aiBanner}>
              <LinearGradient colors={[T.mint, T.mintD, 'transparent']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bannerStrip} />
              <ScanLine />
              <View style={styles.bannerLeft}>
                <View style={styles.bannerBadge}>
                  <Animated.View style={[styles.badgeDot, { transform: [{ scale: pulseS }] }]} />
                  <Text style={styles.bannerBadgeTxt}> AI ACTIVE</Text>
                </View>
                <Text style={styles.bannerTitle}>Smart Itinerary{'\n'}Generator</Text>
                <Typewriter />
              </View>
              <Text style={styles.bannerEmoji}>🗺️</Text>
            </LinearGradient>
          </Animated.View>

          {/* ── STATS ─────────── */}
          <Animated.View style={[styles.statsBar, { opacity: fade }]}>
            {[
              { icon: 'globe-outline',    raw: '190', suffix: '+', lbl: 'Destinations' },
              { icon: 'calendar-outline', raw: '30',  suffix: ' days', lbl: 'Max Plan'  },
              { icon: 'flash-outline',    raw: '10',  suffix: 's', lbl: 'AI Speed'      },
            ].map((s, i) => (
              <View key={i} style={[styles.statItem, i < 2 && { borderRightWidth: 1, borderRightColor: T.border }]}>
                <Ionicons name={s.icon} size={15} color={T.t2} />
                <StatCounter target={s.raw} suffix={s.suffix} />
                <Text style={styles.statLbl}>{s.lbl}</Text>
              </View>
            ))}
          </Animated.View>

          {/* ── UPDATED MECHANICAL INPUT SECTION ─────────────── */}
          <Animated.View style={[styles.inputSection, { opacity: fade, transform: [{ translateY: slideY }] }]}>
            <View style={styles.inputGroup}>
              {/* City Panel */}
              <View style={[styles.panelLeft, focused === 'city' && styles.panelFocused]}>
                <View style={styles.labelRow}>
                  <Text style={styles.panelLabel}>DESTINATION</Text>
                  {city.length > 0 && <View style={styles.activeIndicator} />}
                </View>
                <View style={styles.inputRow}>
                  <Ionicons name="location-sharp" size={18} color={focused === 'city' ? T.mint : T.t3} />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter City..."
                    placeholderTextColor={T.t3}
                    value={city}
                    onChangeText={setCity}
                    onFocus={() => setFocused('city')}
                    onBlur={() => setFocused(null)}
                    autoCapitalize="words"
                    returnKeyType="next"
                  />
                </View>
              </View>

              {/* Days Panel */}
              <View style={[styles.panelRight, focused === 'days' && styles.panelFocused]}>
                <Text style={styles.panelLabel}>DURATION</Text>
                <View style={styles.inputRow}>
                  <TextInput
                    style={[styles.input, { textAlign: 'center' }]}
                    placeholder="00"
                    placeholderTextColor={T.t3}
                    keyboardType="numeric"
                    value={days}
                    onChangeText={v => setDays(v.replace(/[^0-9]/g, ''))}
                    onFocus={() => setFocused('days')}
                    onBlur={() => setFocused(null)}
                    maxLength={2}
                  />
                  <Text style={styles.daysSuffix}>D</Text>
                </View>
              </View>
            </View>

            {/* Micro Pill Selectors */}
            <View style={styles.pillRow}>
              {['3','5','7','10'].map(d => (
                <TouchableOpacity 
                  key={d} 
                  onPress={() => setDays(d)}
                  style={[styles.miniPill, days === d && styles.miniPillActive]}
                >
                  <Text style={[styles.miniPillTxt, days === d && styles.miniPillTxtActive]}>{d}D</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>

          {/* ── GENERATE BUTTON ─── */}
          <Animated.View style={{ paddingHorizontal: 20, marginBottom: 24, opacity: fade }}>
            <View style={styles.btnWrap}>
              {burstAngles.map((ang, i) => <BurstParticle key={i} angle={ang} triggered={burst} />)}
              <OrbitRing />
              <Animated.View style={{ transform: [{ scale: btnScale }], width: '100%' }}>
                <TouchableOpacity onPress={handleGenerate} disabled={loading} activeOpacity={0.9}>
                  <LinearGradient colors={[T.mint, T.mintD]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.genBtn}>
                    {loading
                      ? <ActivityIndicator color={T.bg} size="small" />
                      : <>
                          <MaterialCommunityIcons name="lightning-bolt" size={20} color={T.bg} />
                          <Text style={styles.genBtnTxt}>Generate Magic Itinerary</Text>
                        </>
                    }
                  </LinearGradient>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </Animated.View>

          {/* ── INSPIRATION ─────────────────── */}
          {!plan && !loading && (
            <Animated.View style={{ opacity: fade, marginBottom: 28 }}>
              <View style={styles.sectionRow}>
                <Text style={styles.sectionTitle}>Quick Inspiration</Text>
                <Text style={styles.sectionSub}>✦ Tap to fill</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}>
                {inspo.map(i => (
                  <TouchableOpacity key={i.city} onPress={() => { setCity(i.city); setDays(i.days); }}
                    style={styles.inspoChip} activeOpacity={0.78}>
                    <Text style={styles.inspoEmoji}>{i.emoji}</Text>
                    <Text style={styles.inspoCity}>{i.city}</Text>
                    <Text style={styles.inspoDays}>{i.days} days</Text>
                    <View style={styles.weatherPill}>
                      <Text style={styles.weatherTxt}>{i.weather}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Animated.View>
          )}

          {/* ── LOADING ─────────── */}
          {loading && (
            <View style={styles.loadBox}>
              <Animated.View style={{ transform: [{ rotate: spinStr }] }}>
                <MaterialCommunityIcons name="lightning-bolt-circle" size={48} color={T.mint} />
              </Animated.View>
              <Text style={styles.loadTitle}>AI Crafting Your Plan…</Text>
              <Text style={styles.loadSub}>Analysing {city} · {days} days</Text>
              <Dots />
              <LoadingSteps />
            </View>
          )}

          {/* ── RESULTS ───────────────────────────── */}
          {plan && (
            <Animated.View style={{ opacity: fade, paddingHorizontal: 20, paddingBottom: 40 }}>
              <View style={styles.scoreCard}>
                <LinearGradient colors={['#1A1A1A', '#242424']} style={styles.scoreInner}>
                  <LinearGradient colors={[T.mint, T.mintD, 'transparent']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.dayStrip} />
                  <Text style={styles.scoreCityName}>{city}</Text>
                  <Text style={styles.scoreMeta}>{days}-Day AI Itinerary</Text>
                  <View style={styles.scoreRow}>
                    {[
                      { icon: 'star',           val: '9.4',                                     lbl: 'AI Score'    },
                      { icon: 'camera-outline',  val: `${plan?.itinerary?.length ?? days}`,        lbl: 'Days'        },
                      { icon: 'time-outline',    val: `${(parseInt(days) || 3) * 6}h`,             lbl: 'Activities'  },
                    ].map((m, i) => (
                      <View key={i} style={styles.scoreMini}>
                        <Ionicons name={m.icon} size={13} color={T.t2} />
                        <Text style={styles.scoreMiniVal}>{m.val}</Text>
                        <Text style={styles.scoreMiniLbl}>{m.lbl}</Text>
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity onPress={() => setPlan(null)} style={styles.clearBtn}>
                    <Ionicons name="refresh-outline" size={16} color={T.t2} />
                  </TouchableOpacity>
                </LinearGradient>
              </View>

              {plan.highlights && (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 8, paddingBottom: 14 }}>
                  {plan.highlights.map((h, i) => (
                    <View key={i} style={styles.highlightTag}><Text style={styles.highlightTxt}>{h}</Text></View>
                  ))}
                </ScrollView>
              )}

              {plan.itinerary && plan.itinerary.map((item, dayIdx) => (
                <DayCardAnimated key={dayIdx} item={item} dayIdx={dayIdx} />
              ))}
            </Animated.View>
          )}

          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:    { flex: 1, backgroundColor: T.bg },
  blob:    { position: 'absolute', borderRadius: 9999 },
  decRing: { position: 'absolute', borderWidth: 1 },

  // Effects
  dotGrid:  { position: 'absolute', top: 60, left: 0, gap: 28, opacity: 0.12 },
  gridDot:  { width: 2, height: 2, borderRadius: 1, backgroundColor: 'rgba(255,255,255,0.25)' },
  spark:    { position: 'absolute', backgroundColor: 'rgba(255,255,255,0.7)', elevation: 2 },
  scanLine: { position: 'absolute', top: 0, bottom: 0, width: 32, backgroundColor: 'rgba(255,255,255,0.05)' },
  burst:    { position: 'absolute', width: 6, height: 6, borderRadius: 3, backgroundColor: '#FFF', elevation: 3 },
  loadDot:  { width: 7, height: 7, borderRadius: 4, backgroundColor: T.mint, elevation: 3 },
  btnWrap:  { alignItems: 'center', justifyContent: 'center', position: 'relative' },
  orbitOuter: { position: 'absolute', width: width - 40 + 20, height: 60, borderRadius: 30, borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)', borderStyle: 'dashed' },
  orbitDot:   { position: 'absolute', top: -3, left: '50%', width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.6)' },

  // Header
  header:      { flexDirection:'row', alignItems:'center', paddingHorizontal:20, paddingTop:16, paddingBottom:10 },
  backBtn:     { width:40, height:40, borderRadius:12, backgroundColor:T.card, justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:T.border },
  headerMid:   { flex:1, marginLeft:14 },
  headerSub:   { color:T.t3, fontSize:9, fontWeight:'800', letterSpacing:2.5, marginBottom:2 },
  headerTitle: { color:T.t1, fontSize:22, fontWeight:'900', letterSpacing:-0.6 },
  headerIcon:  { width:40, height:40, borderRadius:12, backgroundColor:T.card, justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:T.border },

  // AI Banner
  aiBanner:    { borderRadius:20, overflow:'hidden', flexDirection:'row', alignItems:'center', padding:18, borderWidth:1, borderColor:T.border },
  bannerStrip: { position:'absolute', top:0, left:0, right:0, height:2 },
  bannerLeft:  { flex:1 },
  bannerBadge: { flexDirection:'row', alignItems:'center', backgroundColor:'rgba(255,255,255,0.06)', paddingHorizontal:8, paddingVertical:3, borderRadius:20, alignSelf:'flex-start', marginBottom:8 },
  badgeDot:    { width:6, height:6, borderRadius:3, backgroundColor:T.mint },
  bannerBadgeTxt:{ color:T.t2, fontSize:8, fontWeight:'800', letterSpacing:1.5 },
  bannerTitle: { color:T.t1, fontSize:18, fontWeight:'900', lineHeight:24, marginBottom:4 },
  bannerSub:   { color:T.t3, fontSize:11, minHeight:16 },
  bannerEmoji: { fontSize:46, marginLeft:8 },

  // Updated Input Styles
  inputSection: { paddingHorizontal: 20, marginBottom: 20 },
  inputGroup: {
    flexDirection: 'row',
    backgroundColor: '#0A0A0A',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#1A1A1A',
    overflow: 'hidden',
  },
  panelLeft: {
    flex: 3,
    padding: 15,
    borderRightWidth: 1.5,
    borderRightColor: '#1A1A1A',
  },
  panelRight: {
    flex: 1.2,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.02)',
    alignItems: 'center',
  },
  panelFocused: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderColor: 'rgba(255,255,255,0.2)',
  },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 8 },
  panelLabel: { color: T.t3, fontSize: 9, fontWeight: '900', letterSpacing: 1.5 },
  activeIndicator: { width: 4, height: 4, borderRadius: 2, backgroundColor: T.accent },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  input: { flex: 1, color: T.t1, fontSize: 16, fontWeight: '600' },
  daysSuffix: { color: T.t3, fontSize: 12, fontWeight: '700', marginLeft: -5 },
  pillRow: { flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 12 },
  miniPill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, backgroundColor: T.card, borderWidth: 1, borderColor: T.border },
  miniPillActive: { backgroundColor: 'rgba(255,255,255,0.1)', borderColor: T.mint },
  miniPillTxt: { color: T.t3, fontSize: 10, fontWeight: '800' },
  miniPillTxtActive: { color: T.t1 },

  // Stats
  statsBar: { flexDirection:'row', marginHorizontal:20, marginBottom:20, backgroundColor:T.card, borderRadius:16, borderWidth:1, borderColor:T.border },
  statItem: { flex:1, alignItems:'center', paddingVertical:14, gap:3 },
  statVal:  { color:T.t1, fontSize:12, fontWeight:'900' },
  statLbl:  { color:T.t3, fontSize:9, fontWeight:'600' },

  // Buttons & Inspiration
  genBtn:    { borderRadius:16, paddingVertical:16, flexDirection:'row', alignItems:'center', justifyContent:'center', gap:10, width:'100%' },
  genBtnTxt: { color:T.bg, fontSize:16, fontWeight:'900' },
  sectionRow:   { flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20, marginBottom:12 },
  sectionTitle: { color:T.t1, fontSize:15, fontWeight:'800' },
  sectionSub:   { color:T.t3, fontSize:11 },
  inspoChip:    { alignItems:'center', backgroundColor:T.card, borderRadius:18, padding:12, borderWidth:1, borderColor:T.border, width:95, gap:3 },
  inspoEmoji:   { fontSize:24 },
  inspoCity:    { color:T.t1, fontSize:12, fontWeight:'800' },
  inspoDays:    { color:T.t3, fontSize:9 },
  weatherPill:  { backgroundColor:'rgba(255,255,255,0.06)', paddingHorizontal:6, paddingVertical:2, borderRadius:8, marginTop:3 },
  weatherTxt:   { color:T.t2, fontSize:8, fontWeight:'700' },

  // Loading Results
  loadBox:       { alignItems:'center', paddingVertical:40, gap:8 },
  loadTitle:     { color:T.t1, fontSize:18, fontWeight:'800' },
  loadSub:       { color:T.t3, fontSize:13 },
  loadStepsWrap: { marginTop:20, alignSelf:'stretch', paddingHorizontal:40, gap:10 },
  loadBar:       { height:2, backgroundColor:T.border, borderRadius:1, marginBottom:12, overflow:'hidden' },
  loadBarFill:   { height:'100%', backgroundColor:T.mint },
  loadStepRow:   { flexDirection:'row', alignItems:'center', gap:10 },
  loadStepDot:   { width:18, height:18, borderRadius:9, backgroundColor:T.border, justifyContent:'center', alignItems:'center' },
  loadStepDotActive: { backgroundColor:T.mint },
  loadStepPulse: { width:8, height:8, borderRadius:4, backgroundColor:T.bg },
  loadStepTxt:   { color:T.t3, fontSize:12 },
  loadStepTxtActive: { color:T.t1, fontWeight:'700' },

  scoreCard:    { marginBottom:16 },
  scoreInner:   { borderRadius:20, overflow:'hidden', padding:18, borderWidth:1, borderColor:T.border, position:'relative' },
  scoreCityName:{ color:T.t1, fontSize:24, fontWeight:'900', letterSpacing:-0.5 },
  scoreMeta:    { color:T.t3, fontSize:11, marginBottom:14, marginTop:2 },
  scoreRow:     { flexDirection:'row', gap:20 },
  scoreMini:    { alignItems:'center', gap:3 },
  scoreMiniVal: { color:T.t1, fontSize:14, fontWeight:'900' },
  scoreMiniLbl: { color:T.t3, fontSize:9 },
  clearBtn:     { position:'absolute', top:14, right:14, width:32, height:32, borderRadius:9, backgroundColor:'rgba(255,255,255,0.06)', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:T.border },
  highlightTag: { backgroundColor:'rgba(255,255,255,0.06)', paddingHorizontal:12, paddingVertical:5, borderRadius:20, borderWidth:1, borderColor:T.border },
  highlightTxt: { color:T.t2, fontSize:11, fontWeight:'600' },

  dayCard:    { backgroundColor:T.card, borderRadius:20, marginBottom:16, borderWidth:1, borderColor:T.border, overflow:'hidden' },
  dayHeader:  { flexDirection:'row', alignItems:'center', padding:16, gap:12 },
  dayStrip:   { position:'absolute', top:0, left:0, right:0, height:2 },
  dayBadge:   { width:36, height:36, borderRadius:10, backgroundColor:'rgba(255,255,255,0.08)', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:T.border2 },
  dayNum:     { color:T.t1, fontSize:14, fontWeight:'900' },
  dayTitle:   { color:T.t1, fontSize:14, fontWeight:'800' },
  dayTheme:   { color:T.t3, fontSize:11, marginTop:2 },
  actRow:     { flexDirection:'row', paddingHorizontal:16, paddingVertical:14, borderBottomWidth:1, borderBottomColor:T.border },
  timeCol:    { width:54, alignItems:'center', gap:4 },
  timeText:   { color:T.t3, fontSize:9, fontWeight:'700', textAlign:'center' },
  timeLine:   { width:1, flex:1, backgroundColor:T.border, marginTop:4 },
  actContent: { flex:1, paddingLeft:10 },
  actTask:    { color:T.t1, fontWeight:'700', fontSize:14, marginBottom:4 },
  actDesc:    { color:T.t3, fontSize:12, lineHeight:18 },
});












// // ytt
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Audio } from 'expo-av';

// // ✅ FIX: Use legacy import for SDK 54 compatibility
// import * as FileSystem from 'expo-file-system/legacy';

// const API_URL = 'http://10.88.222.30:3000';

// const TravelAssistantScreen = () => {
//   // --- State Management ---
//   const [city, setCity] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [sound, setSound] = useState();
  
//   // Data State (Only Destination Info now)
//   const [destInfo, setDestInfo] = useState(null);

//   // Cleanup sound on unmount
//   useEffect(() => {
//     return sound ? () => sound.unloadAsync() : undefined;
//   }, [sound]);

//   // --- Discover Info & Audio Function ---
//   const handleDiscover = async () => {
//     if (!city) return Alert.alert("Error", "Please enter a city");
    
//     setLoading(true);
//     setDestInfo(null);

//     try {
//       console.log(`Fetching info for ${city}...`);
      
//       const response = await fetch(`${API_URL}/api/destination-info`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ city }),
//       });

//       const json = await response.json();

//       if (json.success && json.data) {
//         // 1. Set Text Info
//         setDestInfo(json.data.info);

//         // 2. Play Audio
//         if (json.data.audioBase64) {
//           if (sound) await sound.unloadAsync();
          
//           await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

//           const fileUri = `${FileSystem.documentDirectory}dest_audio.wav`;
          
//           // Write Base64 to File
//           await FileSystem.writeAsStringAsync(fileUri, json.data.audioBase64, {
//             encoding: FileSystem.EncodingType.Base64, 
//           });

//           console.log("Playing audio...");

//           const { sound: newSound } = await Audio.Sound.createAsync(
//             { uri: fileUri },
//             { shouldPlay: true },
//             (status) => {
//               if (status.didJustFinish) newSound.unloadAsync();
//             }
//           );
          
//           setSound(newSound);
//         }
//       } else {
//         throw new Error(json.error || "Failed to fetch info");
//       }
//     } catch (err) {
//       console.error("❌ Error:", err);
//       Alert.alert("Error", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- UI Render Helper ---
//   const renderInfo = () => {
//     if (!destInfo) return null;

//     return (
//       <View style={styles.infoCard}>
//         <Text style={styles.infoTitle}>📍 About {city}</Text>
        
//         <View style={styles.infoRow}>
//           <Text style={styles.infoLabel}>📖 History</Text>
//           <Text style={styles.infoText}>{destInfo.history}</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Text style={styles.infoLabel}>🌤️ Best Time to Visit</Text>
//           <Text style={styles.infoText}>{destInfo.bestTime}</Text>
//         </View>

//         <View style={styles.infoRow}>
//           <Text style={styles.infoLabel}>🍲 Famous Food</Text>
//           <Text style={styles.infoText}>{destInfo.food}</Text>
//         </View>

//         <View style={styles.summaryBox}>
//           <Text style={styles.summaryText}>{destInfo.summary}</Text>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <Text style={styles.header}>TravioX Discover</Text>

//         {/* Input Section */}
//         <View style={styles.inputCard}>
//           <Text style={styles.label}>Enter Destination</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="e.g. Mumbai, Goa, Jaipur"
//             value={city}
//             onChangeText={setCity}
//             placeholderTextColor="#888"
//           />

//           <TouchableOpacity 
//             style={styles.primaryBtn} 
//             onPress={handleDiscover}
//             disabled={loading}
//           >
//             {loading ? (
//               <ActivityIndicator color="#fff" />
//             ) : (
//               <Text style={styles.btnText}>🔊 Discover & Listen</Text>
//             )}
//           </TouchableOpacity>
//         </View>

//         {/* Result Section */}
//         {renderInfo()}

//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f6fa',
//   },
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 50,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#2d3436',
//     marginBottom: 20,
//     alignSelf: 'center',
//   },
//   inputCard: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     elevation: 3,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#636e72',
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#dfe6e9',
//     borderRadius: 10,
//     padding: 12,
//     fontSize: 16,
//     color: '#2d3436',
//     marginBottom: 15,
//   },
//   primaryBtn: {
//     backgroundColor: '#6c5ce7',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   // Info Card Styles
//   infoCard: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     borderLeftWidth: 5,
//     borderLeftColor: '#6c5ce7',
//     elevation: 2,
//   },
//   infoTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#2d3436',
//     marginBottom: 15,
//   },
//   infoRow: {
//     marginBottom: 15,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f2f6',
//   },
//   infoLabel: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#0984e3',
//     marginBottom: 5,
//   },
//   infoText: {
//     fontSize: 15,
//     color: '#636e72',
//     lineHeight: 22,
//   },
//   summaryBox: {
//     marginTop: 10,
//     padding: 15,
//     backgroundColor: '#e8f0fe',
//     borderRadius: 10,
//   },
//   summaryText: {
//     fontSize: 15,
//     fontStyle: 'italic',
//     color: '#2d3436',
//     lineHeight: 22,
//   },
// });

// export default TravelAssistantScreen;



// 41

