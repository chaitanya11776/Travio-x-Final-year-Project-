
// // // // ╔══════════════════════════════════════════════════════════════╗
// // // // ║      TravioX — Complete React Native App (App.js)           ║
// // // // ║      Feature: Multi-Language Audio (EN/HI/MR)               ║
// // // // ╚══════════════════════════════════════════════════════════════╝

// // // import React, { useState, useEffect, useRef, useCallback } from 'react';
// // // import {
// // //   View, Text, TextInput, TouchableOpacity, StyleSheet,
// // //   ScrollView, ActivityIndicator, Alert, Animated,
// // //   Dimensions, StatusBar, Platform, KeyboardAvoidingView,
// // // } from 'react-native';
// // // import { SafeAreaView } from 'react-native-safe-area-context';
// // // import { Audio } from 'expo-av';
// // // import * as FileSystem from 'expo-file-system/legacy';

// // // const { width } = Dimensions.get('window');
// // // const API_URL = 'http://10.88.222.30:3000'; // 👈 CHANGE TO YOUR LOCAL IP

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🎨  DESIGN TOKENS
// // // // ═══════════════════════════════════════════════════════════════
// // // const T = {
// // //   bg:        '#0e0f14',
// // //   surface:   '#16181f',
// // //   surfaceHi: '#1e2029',
// // //   border:    '#272a35',
// // //   accent:    '#e8a045',
// // //   accentSoft:'#e8a04520',
// // //   blue:      '#5b9cf6',
// // //   blueSoft:  '#5b9cf615',
// // //   green:     '#4ade80',
// // //   greenSoft: '#4ade8015',
// // //   red:       '#f87171',
// // //   text:      '#e8eaf0',
// // //   textSub:   '#7c8095',
// // //   textMuted: '#3d4155',
// // //   radius:    16,
// // //   radiusSm:  10,
// // //   shadow: {
// // //     shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
// // //     shadowOpacity: 0.4, shadowRadius: 12, elevation: 8,
// // //   },
// // // };

// // // const safeStr = (val) => {
// // //   if (!val) return '';
// // //   if (typeof val === 'string') return val;
// // //   if (Array.isArray(val)) return val.join(', ');
// // //   if (typeof val === 'object') return Object.values(val).join(', ');
// // //   return String(val);
// // // };

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🎧  AUDIO PLAYER HOOK
// // // // ═══════════════════════════════════════════════════════════════
// // // const useAudioPlayer = () => {
// // //   const soundRef = useRef(null);
// // //   const isActiveRef = useRef(false);
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const [currentChunk, setCurrentChunk] = useState(0);
// // //   const [totalChunks, setTotalChunks] = useState(0);

// // //   const stopAudio = useCallback(async () => {
// // //     isActiveRef.current = false;
// // //     setIsPlaying(false);
// // //     setCurrentChunk(0);
// // //     setTotalChunks(0);
// // //     if (soundRef.current) {
// // //       try { await soundRef.current.stopAsync(); await soundRef.current.unloadAsync(); } catch (_) {}
// // //       soundRef.current = null;
// // //     }
// // //   }, []);

// // //   const playSegments = useCallback(async (segments = []) => {
// // //     await stopAudio();
// // //     if (!segments.length) return;
// // //     isActiveRef.current = true;
// // //     setIsPlaying(true);
// // //     setTotalChunks(segments.length);
// // //     await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

// // //     for (let i = 0; i < segments.length; i++) {
// // //       if (!isActiveRef.current) break;
// // //       setCurrentChunk(i + 1);
// // //       try {
// // //         const uri = `${FileSystem.documentDirectory}tx_chunk_${i}.wav`;
// // //         await FileSystem.writeAsStringAsync(uri, segments[i], { encoding: FileSystem.EncodingType.Base64 });
// // //         await new Promise(async (resolve) => {
// // //           const { sound } = await Audio.Sound.createAsync(
// // //             { uri },
// // //             { shouldPlay: true },
// // //             (s) => { if (s.didJustFinish || s.error) { sound.unloadAsync().catch(() => {}); resolve(); } }
// // //           );
// // //           soundRef.current = sound;
// // //         });
// // //       } catch (e) { console.warn(`chunk ${i} error`, e.message); }
// // //     }
// // //     isActiveRef.current = false;
// // //     setIsPlaying(false);
// // //   }, [stopAudio]);

// // //   useEffect(() => () => { stopAudio(); }, [stopAudio]);
// // //   return { playSegments, stopAudio, isPlaying, currentChunk, totalChunks };
// // // };

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🧩  SHARED COMPONENTS
// // // // ═══════════════════════════════════════════════════════════════
// // // const FadeIn = ({ children, delay = 0, style }) => {
// // //   const op = useRef(new Animated.Value(0)).current;
// // //   const ty = useRef(new Animated.Value(24)).current;
// // //   useEffect(() => {
// // //     Animated.parallel([
// // //       Animated.timing(op, { toValue: 1, duration: 450, delay, useNativeDriver: true }),
// // //       Animated.spring(ty, { toValue: 0, tension: 55, friction: 9, delay, useNativeDriver: true }),
// // //     ]).start();
// // //   }, []);
// // //   return <Animated.View style={[{ opacity: op, transform: [{ translateY: ty }] }, style]}>{children}</Animated.View>;
// // // };

// // // const Pill = ({ label, active, onPress, small }) => (
// // //   <TouchableOpacity
// // //     style={[ss.pill, active && ss.pillActive, small && ss.pillSmall]}
// // //     onPress={onPress}
// // //     activeOpacity={0.75}
// // //   >
// // //     <Text style={[ss.pillText, active && ss.pillTextActive]}>{label}</Text>
// // //   </TouchableOpacity>
// // // );

// // // const SectionTitle = ({ icon, title, subtitle }) => (
// // //   <View style={ss.sectionHeader}>
// // //     {icon && <Text style={ss.sectionIcon}>{icon}</Text>}
// // //     <View>
// // //       <Text style={ss.sectionTitle}>{title}</Text>
// // //       {subtitle && <Text style={ss.sectionSubtitle}>{subtitle}</Text>}
// // //     </View>
// // //   </View>
// // // );

// // // const AudioBar = ({ isPlaying, currentChunk, totalChunks, onStop }) => {
// // //   if (!isPlaying) return null;
// // //   const pct = totalChunks > 0 ? currentChunk / totalChunks : 0;
// // //   return (
// // //     <FadeIn style={ss.audioBar}>
// // //       <Text style={{ fontSize: 22 }}>🔊</Text>
// // //       <View style={ss.audioBarInfo}>
// // //         <Text style={ss.audioBarTitle}>Playing Audio...</Text>
// // //         <View style={ss.audioBarTrack}>
// // //           <View style={[ss.audioBarFill, { width: `${pct * 100}%` }]} />
// // //         </View>
// // //         <Text style={ss.audioBarSub}>Part {currentChunk} of {totalChunks}</Text>
// // //       </View>
// // //       <TouchableOpacity style={ss.stopBtn} onPress={onStop}>
// // //         <Text style={ss.stopBtnTxt}>■</Text>
// // //       </TouchableOpacity>
// // //     </FadeIn>
// // //   );
// // // };

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🏠  SCREEN 1 — DISCOVER (WITH LANGUAGE SELECTOR)
// // // // ═══════════════════════════════════════════════════════════════
// // // const DiscoverScreen = () => {
// // //   const [city, setCity] = useState('');
// // //   const [audioLang, setAudioLang] = useState('en-IN');
// // //   const [loading, setLoading] = useState(false);
// // //   const [info, setInfo] = useState(null);
// // //   const [lastCity, setLastCity] = useState('');
// // //   const { playSegments, stopAudio, isPlaying, currentChunk, totalChunks } = useAudioPlayer();

// // //   const SUGGESTIONS = ['Mumbai', 'Jaipur', 'Goa', 'Manali', 'Varanasi', 'Hampi'];
// // //   const LANGS = [
// // //     { code: 'en-IN', label: 'English' },
// // //     { code: 'hi-IN', label: 'Hindi' },
// // //     { code: 'mr-IN', label: 'Marathi' },
// // //   ];

// // //   const discover = async () => {
// // //     const c = city.trim();
// // //     if (!c) return Alert.alert('Enter City', 'Please type a destination city first.');
// // //     setLoading(true); setInfo(null);
// // //     try {
// // //       const res = await fetch(`${API_URL}/api/destination-info`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ city: c, language: audioLang }),
// // //       });
// // //       const json = await res.json();
// // //       if (!json.success) throw new Error(json.error || 'Failed');

// // //       const rawInfo = json.data.info;
// // //       const safeInfo = {
// // //         history: safeStr(rawInfo.history),
// // //         bestTime: safeStr(rawInfo.bestTime),
// // //         food: safeStr(rawInfo.food),
// // //         culture: safeStr(rawInfo.culture),
// // //         hiddenGem: safeStr(rawInfo.hiddenGem),
// // //         summary: safeStr(rawInfo.summary),
// // //       };

// // //       setInfo(safeInfo);
// // //       setLastCity(c);
// // //       const segs = json.data.audioSegments || [];
// // //       if (segs.length) await playSegments(segs);
// // //     } catch (e) {
// // //       Alert.alert('Error', e.message);
// // //     } finally { setLoading(false); }
// // //   };

// // //   const replay = async () => {
// // //     if (!lastCity) return;
// // //     setLoading(true);
// // //     try {
// // //       const res = await fetch(`${API_URL}/api/destination-info`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ city: lastCity, language: audioLang }),
// // //       });
// // //       const json = await res.json();
// // //       const segs = json.data?.audioSegments || [];
// // //       if (segs.length) await playSegments(segs);
// // //     } catch (e) { Alert.alert('Error', 'Could not replay audio.'); }
// // //     finally { setLoading(false); }
// // //   };

// // //   return (
// // //     <SafeAreaView style={ss.screen}>
// // //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />
// // //       <ScrollView contentContainerStyle={ss.scroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        
// // //         <FadeIn style={ss.discoverHeader}>
// // //           <Text style={ss.discoverLogo}>✈ TravioX</Text>
// // //           <Text style={ss.discoverTagline}>AI-powered audio travel guides</Text>
// // //         </FadeIn>

// // //         <FadeIn delay={120} style={ss.card}>
// // //           <Text style={ss.fieldLabel}>WHERE TO?</Text>
// // //           <View style={ss.inputRow}>
// // //             <Text style={{ fontSize: 16 }}>🗺️</Text>
// // //             <TextInput
// // //               style={ss.input}
// // //               placeholder="Mumbai, Jaipur, Goa…"
// // //               placeholderTextColor={T.textMuted}
// // //               value={city}
// // //               onChangeText={setCity}
// // //               returnKeyType="search"
// // //               onSubmitEditing={discover}
// // //             />
// // //           </View>

// // //           {/* City Suggestions */}
// // //           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
// // //             {SUGGESTIONS.map((s) => (
// // //               <TouchableOpacity key={s} style={ss.chip} onPress={() => setCity(s)}>
// // //                 <Text style={ss.chipText}>{s}</Text>
// // //               </TouchableOpacity>
// // //             ))}
// // //           </ScrollView>

// // //           {/* 👇 NEW: Language Selection */}
// // //           <Text style={ss.fieldLabel}>🎧 AUDIO LANGUAGE</Text>
// // //           <View style={ss.langRow}>
// // //             {LANGS.map((l) => (
// // //               <Pill 
// // //                 key={l.code} 
// // //                 label={l.label} 
// // //                 active={audioLang === l.code} 
// // //                 onPress={() => setAudioLang(l.code)} 
// // //                 small 
// // //               />
// // //             ))}
// // //           </View>

// // //           <TouchableOpacity
// // //             style={[ss.primaryBtn, loading && ss.btnDisabled]}
// // //             onPress={discover}
// // //             disabled={loading}
// // //           >
// // //             {loading
// // //               ? <ActivityIndicator color={T.bg} />
// // //               : <Text style={ss.primaryBtnText}>🔊 Discover & Listen</Text>
// // //             }
// // //           </TouchableOpacity>
// // //         </FadeIn>

// // //         <AudioBar isPlaying={isPlaying} currentChunk={currentChunk} totalChunks={totalChunks} onStop={stopAudio} />

// // //         {info && (
// // //           <>
// // //             <FadeIn delay={80} style={ss.card}>
// // //               <View style={ss.infoCardTop}>
// // //                 <View style={ss.cityBadge}><Text style={{ fontSize: 24 }}>📍</Text></View>
// // //                 <View>
// // //                   <Text style={ss.cityName}>{lastCity}</Text>
// // //                   <Text style={ss.cityLabel}>DESTINATION GUIDE</Text>
// // //                 </View>
// // //               </View>

// // //               {[
// // //                 { icon: '📖', label: 'History', value: info.history, color: T.blue },
// // //                 { icon: '🌤️', label: 'Best Time', value: info.bestTime, color: T.green },
// // //                 { icon: '🍲', label: 'Famous Food', value: info.food, color: T.accent },
// // //                 { icon: '🎭', label: 'Culture', value: info.culture, color: '#c084fc' },
// // //                 { icon: '💎', label: 'Hidden Gem', value: info.hiddenGem, color: '#f472b6' },
// // //               ].filter(r => r.value).map((row, i) => (
// // //                 <View key={i} style={[ss.infoRow, { borderLeftColor: row.color }]}>
// // //                   <View style={ss.infoRowHead}>
// // //                     <Text>{row.icon}</Text>
// // //                     <Text style={[ss.infoRowLabel, { color: row.color }]}>{row.label}</Text>
// // //                   </View>
// // //                   <Text style={ss.infoRowVal}>{row.value}</Text>
// // //                 </View>
// // //               ))}
// // //             </FadeIn>

// // //             <FadeIn delay={700} style={ss.actionRow}>
// // //               <TouchableOpacity
// // //                 style={[ss.actionBtn, { borderColor: T.blue + '50', backgroundColor: T.blueSoft }]}
// // //                 onPress={isPlaying ? stopAudio : replay}
// // //                 disabled={loading}
// // //               >
// // //                 <Text style={ss.actionBtnText}>{isPlaying ? '⏹ Stop' : '🔁 Replay'}</Text>
// // //               </TouchableOpacity>
// // //               <TouchableOpacity
// // //                 style={[ss.actionBtn, { borderColor: T.green + '50', backgroundColor: T.greenSoft }]}
// // //                 onPress={() => { stopAudio(); setInfo(null); setCity(''); setLastCity(''); }}
// // //               >
// // //                 <Text style={ss.actionBtnText}>🌏 New City</Text>
// // //               </TouchableOpacity>
// // //             </FadeIn>
// // //           </>
// // //         )}
// // //         <View style={{ height: 60 }} />
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // ═══════════════════════════════════════════════════════════════
// // // // 📋  SCREEN 2 — PLANNER
// // // // ═══════════════════════════════════════════════════════════════
// // // const PlannerScreen = () => {
// // //   const [city, setCity] = useState('');
// // //   const [days, setDays] = useState('5');
// // //   const [loading, setLoading] = useState(false);
// // //   const [plan, setPlan] = useState(null);

// // //   const generate = async () => {
// // //     if(!city) return;
// // //     setLoading(true); setPlan(null);
// // //     try {
// // //       const res = await fetch(`${API_URL}/api/ai-planner`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ city, days: parseInt(days) })
// // //       });
// // //       const json = await res.json();
// // //       if(json.success) setPlan(json.data);
// // //     } catch (e) { Alert.alert('Error', e.message) }
// // //     finally { setLoading(false); }
// // //   };

// // //   return (
// // //     <SafeAreaView style={ss.screen}>
// // //       <ScrollView contentContainerStyle={ss.scroll}>
// // //         <SectionTitle icon="📋" title="Itinerary Planner" />
// // //         <FadeIn style={ss.card}>
// // //           <Text style={ss.fieldLabel}>DESTINATION</Text>
// // //           <View style={ss.inputRow}>
// // //             <TextInput style={ss.input} placeholder="City..." placeholderTextColor={T.textMuted} value={city} onChangeText={setCity} />
// // //           </View>
// // //           <Text style={ss.fieldLabel}>DAYS</Text>
// // //           <View style={ss.pillsWrap}>
// // //             {['3','5','7'].map(d => <Pill key={d} label={`${d}D`} active={days===d} onPress={()=>setDays(d)} />)}
// // //           </View>
// // //           <TouchableOpacity style={ss.primaryBtn} onPress={generate} disabled={loading}>
// // //             {loading ? <ActivityIndicator color={T.bg}/> : <Text style={ss.primaryBtnText}>Generate Plan</Text>}
// // //           </TouchableOpacity>
// // //         </FadeIn>

// // //         {plan && plan.itinerary && plan.itinerary.map((d, i) => (
// // //           <FadeIn key={i} delay={i*100} style={ss.card}>
// // //             <Text style={ss.dayTheme}>Day {d.day}: {d.theme}</Text>
// // //             {d.activities && d.activities.map((a, ai) => (
// // //               <View key={ai} style={{marginTop:8, borderLeftWidth:2, borderLeftColor:T.border, paddingLeft:8}}>
// // //                 <Text style={{color:T.accent, fontSize:12}}>{a.time}</Text>
// // //                 <Text style={{color:T.text, fontWeight:'700'}}>{a.task}</Text>
// // //                 <Text style={{color:T.textSub}}>{a.description}</Text>
// // //               </View>
// // //             ))}
// // //           </FadeIn>
// // //         ))}
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // ═══════════════════════════════════════════════════════════════
// // // // 💰  SCREEN 3 — BUDGET
// // // // ═══════════════════════════════════════════════════════════════
// // // const BudgetScreen = () => {
// // //   const [city, setCity] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const [budget, setBudget] = useState(null);

// // //   const generate = async () => {
// // //     if(!city) return;
// // //     setLoading(true); setBudget(null);
// // //     try {
// // //       const res = await fetch(`${API_URL}/api/ai-budget`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ city, days: 5, travelers: 2 })
// // //       });
// // //       const json = await res.json();
// // //       if(json.success) setBudget(json.data);
// // //     } catch(e) { Alert.alert('Error', e.message) }
// // //     finally { setLoading(false); }
// // //   };

// // //   return (
// // //     <SafeAreaView style={ss.screen}>
// // //       <ScrollView contentContainerStyle={ss.scroll}>
// // //         <SectionTitle icon="💰" title="Budget Planner" />
// // //         <FadeIn style={ss.card}>
// // //            <Text style={ss.fieldLabel}>DESTINATION</Text>
// // //            <View style={ss.inputRow}>
// // //              <TextInput style={ss.input} placeholder="City..." placeholderTextColor={T.textMuted} value={city} onChangeText={setCity} />
// // //            </View>
// // //            <TouchableOpacity style={ss.primaryBtn} onPress={generate} disabled={loading}>
// // //              {loading ? <ActivityIndicator color={T.bg}/> : <Text style={ss.primaryBtnText}>Calculate</Text>}
// // //            </TouchableOpacity>
// // //         </FadeIn>

// // //         {budget && (
// // //           <FadeIn style={ss.card}>
// // //             <Text style={ss.cityName}>₹{budget.summary?.grandTotal?.toLocaleString('en-IN')}</Text>
// // //             <Text style={ss.textMuted}>Estimated Total Budget</Text>
// // //             <View style={{marginTop:12}}>
// // //               <Text style={ss.textSub}>🏨 Stay: ₹{budget.summary?.stayTotal}</Text>
// // //               <Text style={ss.textSub}>🍽️ Food: ₹{budget.summary?.foodTotal}</Text>
// // //               <Text style={ss.textSub}>🚗 Transport: ₹{budget.summary?.transportTotal}</Text>
// // //             </View>
// // //           </FadeIn>
// // //         )}
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🧳  SCREEN 4 — PACKING
// // // // ═══════════════════════════════════════════════════════════════
// // // const PackingScreen = () => {
// // //   const [dest, setDest] = useState('');
// // //   const [loading, setLoading] = useState(false);
// // //   const [data, setData] = useState(null);
// // //   const [checked, setChecked] = useState({});

// // //   const generate = async () => {
// // //     if(!dest) return;
// // //     setLoading(true); setData(null); setChecked({});
// // //     try {
// // //       const res = await fetch(`${API_URL}/api/smart-packing`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ destination: dest, duration: 5 })
// // //       });
// // //       const json = await res.json();
// // //       if(json.success) setData(json.data);
// // //     } catch(e) { Alert.alert('Error', e.message) }
// // //     finally { setLoading(false); }
// // //   };

// // //   const toggle = (k) => setChecked(p => ({ ...p, [k]: !p[k] }));

// // //   return (
// // //     <SafeAreaView style={ss.screen}>
// // //       <ScrollView contentContainerStyle={ss.scroll}>
// // //         <SectionTitle icon="🧳" title="Smart Packing" />
// // //         <FadeIn style={ss.card}>
// // //           <Text style={ss.fieldLabel}>DESTINATION</Text>
// // //           <View style={ss.inputRow}>
// // //             <TextInput style={ss.input} placeholder="Where?" placeholderTextColor={T.textMuted} value={dest} onChangeText={setDest} />
// // //           </View>
// // //           <TouchableOpacity style={ss.primaryBtn} onPress={generate} disabled={loading}>
// // //              {loading ? <ActivityIndicator color={T.bg}/> : <Text style={ss.primaryBtnText}>Generate List</Text>}
// // //           </TouchableOpacity>
// // //         </FadeIn>

// // //         {data && data.categories && data.categories.map((cat, ci) => (
// // //           <FadeIn key={ci} delay={ci*80} style={ss.card}>
// // //             <Text style={ss.dayTheme}>{cat.icon} {cat.name}</Text>
// // //             {cat.items && cat.items.map((item, ii) => {
// // //               const k = `${ci}-${ii}`;
// // //               return (
// // //                 <TouchableOpacity key={ii} style={ss.packItem} onPress={() => toggle(k)}>
// // //                   <View style={[ss.checkbox, checked[k] && ss.checkboxChecked]}>
// // //                     {checked[k] && <Text style={{color:T.bg}}>✓</Text>}
// // //                   </View>
// // //                   <View style={{flex:1}}>
// // //                     <Text style={[ss.text, checked[k] && {textDecorationLine:'line-through'}]}>{item.item}</Text>
// // //                     <Text style={ss.textMuted}>{item.reason}</Text>
// // //                   </View>
// // //                 </TouchableOpacity>
// // //               );
// // //             })}
// // //           </FadeIn>
// // //         ))}
// // //       </ScrollView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🤖  SCREEN 5 — CHAT
// // // // ═══════════════════════════════════════════════════════════════
// // // const ChatScreen = () => {
// // //   const [messages, setMessages] = useState([{role:'assistant', content:'Hello! Ask me anything about travel.'}]);
// // //   const [input, setInput] = useState('');
// // //   const [loading, setLoading] = useState(false);

// // //   const send = async () => {
// // //     if(!input.trim()) return;
// // //     const newMsgs = [...messages, {role:'user', content:input}];
// // //     setMessages(newMsgs);
// // //     setInput('');
// // //     setLoading(true);
// // //     try {
// // //       const res = await fetch(`${API_URL}/api/ai-chat`, {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify({ message: input, history: newMsgs.slice(-6) })
// // //       });
// // //       const json = await res.json();
// // //       if(json.success) setMessages(p => [...p, {role:'assistant', content: json.reply}]);
// // //     } catch(e) { Alert.alert('Error', e.message) }
// // //     finally { setLoading(false); }
// // //   };

// // //   return (
// // //     <SafeAreaView style={ss.screen}>
// // //       <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
// // //         <ScrollView style={{flex:1, padding:16}} contentContainerStyle={{paddingBottom:20}}>
// // //           {messages.map((m,i) => (
// // //             <View key={i} style={[ss.bubble, m.role==='user' ? ss.bubbleUser : ss.bubbleBot]}>
// // //               <Text style={{color: m.role==='user' ? T.bg : T.text}}>{m.content}</Text>
// // //             </View>
// // //           ))}
// // //         </ScrollView>
// // //         <View style={ss.chatInputRow}>
// // //           <TextInput style={ss.chatInput} placeholder="Ask..." placeholderTextColor={T.textMuted} value={input} onChangeText={setInput} />
// // //           <TouchableOpacity style={ss.sendBtn} onPress={send} disabled={loading}>
// // //             <Text style={{color:T.bg, fontWeight:'900'}}>↑</Text>
// // //           </TouchableOpacity>
// // //         </View>
// // //       </KeyboardAvoidingView>
// // //     </SafeAreaView>
// // //   );
// // // };

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🏠  TAB BAR & MAIN APP
// // // // ═══════════════════════════════════════════════════════════════
// // // const TABS = [
// // //   { key: 'discover', icon: '🔊', label: 'Discover' },
// // //   { key: 'planner',  icon: '📋', label: 'Planner'  },
// // //   { key: 'budget',   icon: '💰', label: 'Budget'   },
// // //   { key: 'packing',  icon: '🧳', label: 'Packing'  },
// // //   { key: 'chat',     icon: '🤖', label: 'Chat'     },
// // // ];

// // // const SCREENS = {
// // //   discover: DiscoverScreen,
// // //   planner: PlannerScreen,
// // //   budget: BudgetScreen,
// // //   packing: PackingScreen,
// // //   chat: ChatScreen,
// // // };

// // // export default function App() {
// // //   const [activeTab, setActiveTab] = useState('discover');
// // //   const ActiveScreen = SCREENS[activeTab];

// // //   return (
// // //     <View style={{ flex: 1, backgroundColor: T.bg }}>
// // //       <ActiveScreen />
// // //       <View style={ss.tabBar}>
// // //         {TABS.map(tab => {
// // //           const active = activeTab === tab.key;
// // //           return (
// // //             <TouchableOpacity key={tab.key} style={ss.tabItem} onPress={() => setActiveTab(tab.key)}>
// // //               <Text style={ss.tabIcon}>{tab.icon}</Text>
// // //               <Text style={[ss.tabLabel, active && {color:T.accent}]}>{tab.label}</Text>
// // //             </TouchableOpacity>
// // //           );
// // //         })}
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🎨  STYLES
// // // // ═══════════════════════════════════════════════════════════════
// // // const ss = StyleSheet.create({
// // //   screen: { flex: 1, backgroundColor: T.bg },
// // //   scroll: { padding: 16, paddingBottom: 80 },
  
// // //   // Header & Sections
// // //   discoverHeader: { alignItems: 'center', marginBottom: 24, marginTop: 8 },
// // //   discoverLogo: { fontSize: 36, fontWeight: '900', color: T.text },
// // //   discoverTagline: { fontSize: 12, color: T.textSub, marginTop: 2 },
// // //   sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 18, marginTop: 4 },
// // //   sectionTitle: { fontSize: 22, fontWeight: '800', color: T.text },
// // //   sectionSubtitle: { fontSize: 12, color: T.textSub, marginTop: 1 },

// // //   // Card
// // //   card: {
// // //     backgroundColor: T.surface, borderRadius: T.radius,
// // //     padding: 18, marginBottom: 14, borderWidth: 1, borderColor: T.border,
// // //   },

// // //   // Inputs
// // //   fieldLabel: { fontSize: 10, letterSpacing: 2.5, color: T.accent, fontWeight: '800', marginBottom: 8 },
// // //   inputRow: {
// // //     flexDirection: 'row', alignItems: 'center', gap: 10,
// // //     backgroundColor: T.bg, borderRadius: T.radiusSm,
// // //     borderWidth: 1, borderColor: T.border, paddingHorizontal: 14, marginBottom: 14,
// // //   },
// // //   input: { flex: 1, paddingVertical: 13, fontSize: 15, color: T.text },

// // //   // Pills
// // //   pillsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 14 },
// // //   pill: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20, borderWidth: 1, borderColor: T.border, backgroundColor: T.bg },
// // //   pillActive: { borderColor: T.accent, backgroundColor: T.accentSoft },
// // //   pillText: { fontSize: 13, color: T.textSub, fontWeight: '600' },
// // //   pillTextActive: { color: T.accent },
// // //   pillSmall: { paddingHorizontal: 10, paddingVertical: 5 },
// // //   langRow: { flexDirection: 'row', gap: 8, marginBottom: 18 },

// // //   chip: { backgroundColor: T.surfaceHi, borderWidth: 1, borderColor: T.border, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 7, marginRight: 8 },
// // //   chipText: { color: T.textSub, fontSize: 12, fontWeight: '600' },

// // //   // Buttons
// // //   primaryBtn: { backgroundColor: T.accent, borderRadius: T.radiusSm, paddingVertical: 15, alignItems: 'center' },
// // //   primaryBtnText: { color: T.bg, fontSize: 15, fontWeight: '800' },
// // //   btnDisabled: { opacity: 0.5 },

// // //   // Info Display
// // //   infoCardTop: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 18, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: T.border },
// // //   cityBadge: { width: 48, height: 48, borderRadius: 14, backgroundColor: T.accentSoft, alignItems: 'center', justifyContent: 'center' },
// // //   cityName: { fontSize: 22, fontWeight: '800', color: T.text },
// // //   cityLabel: { fontSize: 10, color: T.textSub, letterSpacing: 2, fontWeight: '700', marginTop: 2 },
  
// // //   infoRow: { marginBottom: 13, paddingLeft: 12, borderLeftWidth: 3, borderRadius: 2 },
// // //   infoRowHead: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
// // //   infoRowLabel: { fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
// // //   infoRowVal: { fontSize: 14, color: T.textSub, lineHeight: 22 },

// // //   // Audio
// // //   audioBar: {
// // //     backgroundColor: '#0f2340', borderRadius: T.radius, borderWidth: 1, borderColor: '#1e3a5f',
// // //     padding: 14, marginBottom: 14, flexDirection: 'row', alignItems: 'center', gap: 12,
// // //   },
// // //   audioBarInfo: { flex: 1 },
// // //   audioBarTitle: { color: '#90cdf4', fontWeight: '700', fontSize: 13, marginBottom: 5 },
// // //   audioBarTrack: { height: 4, backgroundColor: T.border, borderRadius: 2, overflow: 'hidden', marginBottom: 4 },
// // //   audioBarFill: { height: 4, backgroundColor: T.accent, borderRadius: 2 },
// // //   audioBarSub: { color: T.textSub, fontSize: 11 },
// // //   stopBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: T.surfaceHi, alignItems: 'center', justifyContent: 'center' },
// // //   stopBtnTxt: { color: T.red, fontSize: 13, fontWeight: '900' },

// // //   // Action Row
// // //   actionRow: { flexDirection: 'row', gap: 12, marginBottom: 14 },
// // //   actionBtn: { flex: 1, paddingVertical: 13, borderRadius: 12, alignItems: 'center', borderWidth: 1 },
// // //   actionBtnText: { color: T.text, fontSize: 13, fontWeight: '700' },

// // //   // Planner/Packing/Budget Specific
// // //   dayTheme: { fontSize: 16, fontWeight: '700', color: T.text, marginBottom: 8 },
// // //   packItem: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8 },
// // //   checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: T.border, alignItems: 'center', justifyContent: 'center' },
// // //   checkboxChecked: { backgroundColor: T.green, borderColor: T.green },

// // //   // Chat
// // //   bubble: { maxWidth: '85%', borderRadius: 18, padding: 12, marginBottom: 8 },
// // //   bubbleUser: { backgroundColor: T.accent, alignSelf: 'flex-end', borderBottomRightRadius: 4 },
// // //   bubbleBot: { backgroundColor: T.surfaceHi, alignSelf: 'flex-start', borderBottomLeftRadius: 4 },
// // //   chatInputRow: { flexDirection: 'row', gap: 10, padding: 12, borderTopWidth: 1, borderTopColor: T.border, backgroundColor: T.surface },
// // //   chatInput: { flex: 1, backgroundColor: T.bg, borderWidth: 1, borderColor: T.border, borderRadius: 16, paddingHorizontal: 14, paddingVertical: 10, color: T.text, fontSize: 14, maxHeight: 100 },
// // //   sendBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: T.accent, alignItems: 'center', justifyContent: 'center' },

// // //   // Tab Bar
// // //   tabBar: {
// // //     flexDirection: 'row', backgroundColor: T.surface,
// // //     borderTopWidth: 1, borderTopColor: T.border,
// // //     paddingBottom: Platform.OS === 'ios' ? 20 : 8, paddingTop: 8,
// // //   },
// // //   tabItem: { flex: 1, alignItems: 'center', gap: 3 },
// // //   tabIcon: { fontSize: 18 },
// // //   tabLabel: { fontSize: 10, color: T.textMuted, fontWeight: '600' },

// // //   text: { color: T.text },
// // //   textSub: { color: T.textSub },
// // //   textMuted: { color: T.textMuted },
// // //   blueSoft: { backgroundColor: '#5b9cf615' },
// // //   greenSoft: { backgroundColor: '#4ade8015' },
// // // });





















// // // ╔══════════════════════════════════════════════════════════════╗
// // // ║      TravioX — Complete React Native App (App.js)           ║
// // // ║      FIX: Audio Stop Button Logic Corrected                 ║
// // // ╚══════════════════════════════════════════════════════════════╝

// // import React, { useState, useEffect, useRef, useCallback } from 'react';
// // import {
// //   View, Text, TextInput, TouchableOpacity, StyleSheet,
// //   ScrollView, ActivityIndicator, Alert, Animated,
// //   Dimensions, StatusBar, Platform, KeyboardAvoidingView,
// // } from 'react-native';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { Audio } from 'expo-av';
// // import * as FileSystem from 'expo-file-system/legacy';

// // const { width } = Dimensions.get('window');
// // const API_URL = 'http://10.88.222.30:3000'; // 👈 CHANGE TO YOUR LOCAL IP

// // // ═══════════════════════════════════════════════════════════════
// // // 🎨  DESIGN TOKENS
// // // ═══════════════════════════════════════════════════════════════
// // const T = {
// //   bg:        '#0e0f14',
// //   surface:   '#16181f',
// //   surfaceHi: '#1e2029',
// //   border:    '#272a35',
// //   accent:    '#e8a045',
// //   accentSoft:'#e8a04520',
// //   blue:      '#5b9cf6',
// //   blueSoft:  '#5b9cf615',
// //   green:     '#4ade80',
// //   greenSoft: '#4ade8015',
// //   red:       '#f87171',
// //   text:      '#e8eaf0',
// //   textSub:   '#7c8095',
// //   textMuted: '#3d4155',
// //   radius:    16,
// //   radiusSm:  10,
// //   shadow: {
// //     shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.4, shadowRadius: 12, elevation: 8,
// //   },
// // };

// // const safeStr = (val) => {
// //   if (!val) return '';
// //   if (typeof val === 'string') return val;
// //   if (Array.isArray(val)) return val.join(', ');
// //   if (typeof val === 'object') return Object.values(val).join(', ');
// //   return String(val);
// // };

// // // ═══════════════════════════════════════════════════════════════
// // // 🎧  AUDIO PLAYER HOOK (FIXED)
// // // ═══════════════════════════════════════════════════════════════
// // const useAudioPlayer = () => {
// //   const soundRef = useRef(null);
// //   // Use a ref to track if we are playing to prevent race conditions
// //   const isPlayingRef = useRef(false);
  
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [currentChunk, setCurrentChunk] = useState(0);
// //   const [totalChunks, setTotalChunks] = useState(0);

// //   // ✅ FIX: Improved stop logic
// //   const stopAudio = useCallback(async () => {
// //     // 1. Immediately mark as stopped to break the playback loop
// //     isPlayingRef.current = false;
    
// //     // 2. Update UI state
// //     setIsPlaying(false);
// //     setCurrentChunk(0);
// //     setTotalChunks(0);

// //     // 3. Unload the sound object safely
// //     if (soundRef.current) {
// //       try {
// //         const status = await soundRef.current.getStatusAsync();
// //         if (status.isLoaded) {
// //           await soundRef.current.stopAsync();
// //           await soundRef.current.unloadAsync();
// //         }
// //       } catch (e) {
// //         console.warn('Stop error:', e);
// //       } finally {
// //         soundRef.current = null;
// //       }
// //     }
// //   }, []);

// //   const playSegments = useCallback(async (segments = []) => {
// //     // Stop any existing audio first
// //     await stopAudio();
    
// //     if (!segments.length) return;

// //     // Set playing state
// //     isPlayingRef.current = true;
// //     setIsPlaying(true);
// //     setTotalChunks(segments.length);

// //     await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

// //     for (let i = 0; i < segments.length; i++) {
// //       // ✅ CRITICAL: Check if we should stop before playing next chunk
// //       if (!isPlayingRef.current) break;

// //       setCurrentChunk(i + 1);
      
// //       try {
// //         const uri = `${FileSystem.documentDirectory}tx_chunk_${i}.wav`;
// //         await FileSystem.writeAsStringAsync(uri, segments[i], { encoding: FileSystem.EncodingType.Base64 });
        
// //         // Wait for playback to finish
// //         await new Promise(async (resolve) => {
// //           const { sound } = await Audio.Sound.createAsync(
// //             { uri },
// //             { shouldPlay: true },
// //             (status) => {
// //               if (status.didJustFinish || status.error) {
// //                 sound.unloadAsync().catch(() => {});
// //                 resolve();
// //               }
// //             }
// //           );
// //           soundRef.current = sound;
// //         });

// //       } catch (e) {
// //         console.warn(`chunk ${i} error`, e.message);
// //       }
// //     }

// //     // Playback finished naturally
// //     isPlayingRef.current = false;
// //     setIsPlaying(false);
// //   }, [stopAudio]);

// //   // Cleanup on unmount
// //   useEffect(() => {
// //     return () => { stopAudio(); };
// //   }, [stopAudio]);

// //   return { playSegments, stopAudio, isPlaying, currentChunk, totalChunks };
// // };

// // // ═══════════════════════════════════════════════════════════════
// // // 🧩  SHARED COMPONENTS
// // // ═══════════════════════════════════════════════════════════════
// // const FadeIn = ({ children, delay = 0, style }) => {
// //   const op = useRef(new Animated.Value(0)).current;
// //   const ty = useRef(new Animated.Value(24)).current;
// //   useEffect(() => {
// //     Animated.parallel([
// //       Animated.timing(op, { toValue: 1, duration: 450, delay, useNativeDriver: true }),
// //       Animated.spring(ty, { toValue: 0, tension: 55, friction: 9, delay, useNativeDriver: true }),
// //     ]).start();
// //   }, []);
// //   return <Animated.View style={[{ opacity: op, transform: [{ translateY: ty }] }, style]}>{children}</Animated.View>;
// // };

// // const Pill = ({ label, active, onPress, small }) => (
// //   <TouchableOpacity
// //     style={[ss.pill, active && ss.pillActive, small && ss.pillSmall]}
// //     onPress={onPress}
// //     activeOpacity={0.75}
// //   >
// //     <Text style={[ss.pillText, active && ss.pillTextActive]}>{label}</Text>
// //   </TouchableOpacity>
// // );

// // const SectionTitle = ({ icon, title, subtitle }) => (
// //   <View style={ss.sectionHeader}>
// //     {icon && <Text style={ss.sectionIcon}>{icon}</Text>}
// //     <View>
// //       <Text style={ss.sectionTitle}>{title}</Text>
// //       {subtitle && <Text style={ss.sectionSubtitle}>{subtitle}</Text>}
// //     </View>
// //   </View>
// // );

// // const AudioBar = ({ isPlaying, currentChunk, totalChunks, onStop }) => {
// //   if (!isPlaying) return null;
// //   const pct = totalChunks > 0 ? currentChunk / totalChunks : 0;
// //   return (
// //     <FadeIn style={ss.audioBar}>
// //       <Text style={{ fontSize: 22 }}>🔊</Text>
// //       <View style={ss.audioBarInfo}>
// //         <Text style={ss.audioBarTitle}>Playing Audio...</Text>
// //         <View style={ss.audioBarTrack}>
// //           <View style={[ss.audioBarFill, { width: `${pct * 100}%` }]} />
// //         </View>
// //         <Text style={ss.audioBarSub}>Part {currentChunk} of {totalChunks}</Text>
// //       </View>
// //       {/* ✅ FIX: Ensure onPress waits for stopAudio */}
// //       <TouchableOpacity style={ss.stopBtn} onPress={onStop}>
// //         <Text style={ss.stopBtnTxt}>■</Text>
// //       </TouchableOpacity>
// //     </FadeIn>
// //   );
// // };

// // // ═══════════════════════════════════════════════════════════════
// // // 🏠  SCREEN 1 — DISCOVER
// // // ═══════════════════════════════════════════════════════════════
// // const DiscoverScreen = () => {
// //   const [city, setCity] = useState('');
// //   const [audioLang, setAudioLang] = useState('en-IN');
// //   const [loading, setLoading] = useState(false);
// //   const [info, setInfo] = useState(null);
// //   const [lastCity, setLastCity] = useState('');
// //   const { playSegments, stopAudio, isPlaying, currentChunk, totalChunks } = useAudioPlayer();

// //   const SUGGESTIONS = ['Mumbai', 'Jaipur', 'Goa', 'Manali', 'Varanasi', 'Hampi'];
// //   const LANGS = [
// //     { code: 'en-IN', label: 'English' },
// //     { code: 'hi-IN', label: 'Hindi' },
// //     { code: 'mr-IN', label: 'Marathi' },
// //   ];

// //   const discover = async () => {
// //     const c = city.trim();
// //     if (!c) return Alert.alert('Enter City', 'Please type a destination city first.');
    
// //     // Stop any existing audio before new request
// //     if (isPlaying) await stopAudio();
    
// //     setLoading(true); setInfo(null);
// //     try {
// //       const res = await fetch(`${API_URL}/api/destination-info`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ city: c, language: audioLang }),
// //       });
// //       const json = await res.json();
// //       if (!json.success) throw new Error(json.error || 'Failed');

// //       const rawInfo = json.data.info;
// //       const safeInfo = {
// //         history: safeStr(rawInfo.history),
// //         bestTime: safeStr(rawInfo.bestTime),
// //         food: safeStr(rawInfo.food),
// //         culture: safeStr(rawInfo.culture),
// //         hiddenGem: safeStr(rawInfo.hiddenGem),
// //         summary: safeStr(rawInfo.summary),
// //       };

// //       setInfo(safeInfo);
// //       setLastCity(c);
// //       const segs = json.data.audioSegments || [];
// //       if (segs.length) await playSegments(segs);
// //     } catch (e) {
// //       Alert.alert('Error', e.message);
// //     } finally { setLoading(false); }
// //   };

// //   const replay = async () => {
// //     if (!lastCity) return;
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`${API_URL}/api/destination-info`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ city: lastCity, language: audioLang }),
// //       });
// //       const json = await res.json();
// //       const segs = json.data?.audioSegments || [];
// //       if (segs.length) await playSegments(segs);
// //     } catch (e) { Alert.alert('Error', 'Could not replay audio.'); }
// //     finally { setLoading(false); }
// //   };

// //   return (
// //     <SafeAreaView style={ss.screen}>
// //       <StatusBar barStyle="light-content" backgroundColor={T.bg} />
// //       <ScrollView contentContainerStyle={ss.scroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        
// //         <FadeIn style={ss.discoverHeader}>
// //           <Text style={ss.discoverLogo}>✈ TravioX</Text>
// //           <Text style={ss.discoverTagline}>AI-powered audio travel guides</Text>
// //         </FadeIn>

// //         <FadeIn delay={120} style={ss.card}>
// //           <Text style={ss.fieldLabel}>WHERE TO?</Text>
// //           <View style={ss.inputRow}>
// //             <Text style={{ fontSize: 16 }}>🗺️</Text>
// //             <TextInput
// //               style={ss.input}
// //               placeholder="Mumbai, Jaipur, Goa…"
// //               placeholderTextColor={T.textMuted}
// //               value={city}
// //               onChangeText={setCity}
// //               returnKeyType="search"
// //               onSubmitEditing={discover}
// //             />
// //           </View>

// //           {/* City Suggestions */}
// //           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
// //             {SUGGESTIONS.map((s) => (
// //               <TouchableOpacity key={s} style={ss.chip} onPress={() => setCity(s)}>
// //                 <Text style={ss.chipText}>{s}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>

// //           {/* Language Selection */}
// //           <Text style={ss.fieldLabel}>🎧 AUDIO LANGUAGE</Text>
// //           <View style={ss.langRow}>
// //             {LANGS.map((l) => (
// //               <Pill 
// //                 key={l.code} 
// //                 label={l.label} 
// //                 active={audioLang === l.code} 
// //                 onPress={() => setAudioLang(l.code)} 
// //                 small 
// //               />
// //             ))}
// //           </View>

// //           <TouchableOpacity
// //             style={[ss.primaryBtn, loading && ss.btnDisabled]}
// //             onPress={discover}
// //             disabled={loading}
// //           >
// //             {loading
// //               ? <ActivityIndicator color={T.bg} />
// //               : <Text style={ss.primaryBtnText}>🔊 Discover & Listen</Text>
// //             }
// //           </TouchableOpacity>
// //         </FadeIn>

// //         {/* ✅ Pass stopAudio directly to onStop */}
// //         <AudioBar 
// //           isPlaying={isPlaying} 
// //           currentChunk={currentChunk} 
// //           totalChunks={totalChunks} 
// //           onStop={stopAudio} 
// //         />

// //         {info && (
// //           <>
// //             <FadeIn delay={80} style={ss.card}>
// //               <View style={ss.infoCardTop}>
// //                 <View style={ss.cityBadge}><Text style={{ fontSize: 24 }}>📍</Text></View>
// //                 <View>
// //                   <Text style={ss.cityName}>{lastCity}</Text>
// //                   <Text style={ss.cityLabel}>DESTINATION GUIDE</Text>
// //                 </View>
// //               </View>

// //               {[
// //                 { icon: '📖', label: 'History', value: info.history, color: T.blue },
// //                 { icon: '🌤️', label: 'Best Time', value: info.bestTime, color: T.green },
// //                 { icon: '🍲', label: 'Famous Food', value: info.food, color: T.accent },
// //                 { icon: '🎭', label: 'Culture', value: info.culture, color: '#c084fc' },
// //                 { icon: '💎', label: 'Hidden Gem', value: info.hiddenGem, color: '#f472b6' },
// //               ].filter(r => r.value).map((row, i) => (
// //                 <View key={i} style={[ss.infoRow, { borderLeftColor: row.color }]}>
// //                   <View style={ss.infoRowHead}>
// //                     <Text>{row.icon}</Text>
// //                     <Text style={[ss.infoRowLabel, { color: row.color }]}>{row.label}</Text>
// //                   </View>
// //                   <Text style={ss.infoRowVal}>{row.value}</Text>
// //                 </View>
// //               ))}
// //             </FadeIn>

// //             <FadeIn delay={700} style={ss.actionRow}>
// //               <TouchableOpacity
// //                 style={[ss.actionBtn, { borderColor: T.blue + '50', backgroundColor: T.blueSoft }]}
// //                 onPress={isPlaying ? stopAudio : replay}
// //                 disabled={loading}
// //               >
// //                 <Text style={ss.actionBtnText}>{isPlaying ? '⏹ Stop' : '🔁 Replay'}</Text>
// //               </TouchableOpacity>
// //               <TouchableOpacity
// //                 style={[ss.actionBtn, { borderColor: T.green + '50', backgroundColor: T.greenSoft }]}
// //                 onPress={() => { stopAudio(); setInfo(null); setCity(''); setLastCity(''); }}
// //               >
// //                 <Text style={ss.actionBtnText}>🌏 New City</Text>
// //               </TouchableOpacity>
// //             </FadeIn>
// //           </>
// //         )}
// //         <View style={{ height: 60 }} />
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // ═══════════════════════════════════════════════════════════════
// // // 📋  SCREEN 2 — PLANNER
// // // ═══════════════════════════════════════════════════════════════
// // const PlannerScreen = () => {
// //   const [city, setCity] = useState('');
// //   const [days, setDays] = useState('5');
// //   const [loading, setLoading] = useState(false);
// //   const [plan, setPlan] = useState(null);

// //   const generate = async () => {
// //     if(!city) return;
// //     setLoading(true); setPlan(null);
// //     try {
// //       const res = await fetch(`${API_URL}/api/ai-planner`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ city, days: parseInt(days) })
// //       });
// //       const json = await res.json();
// //       if(json.success) setPlan(json.data);
// //     } catch (e) { Alert.alert('Error', e.message) }
// //     finally { setLoading(false); }
// //   };

// //   return (
// //     <SafeAreaView style={ss.screen}>
// //       <ScrollView contentContainerStyle={ss.scroll}>
// //         <SectionTitle icon="📋" title="Itinerary Planner" />
// //         <FadeIn style={ss.card}>
// //           <Text style={ss.fieldLabel}>DESTINATION</Text>
// //           <View style={ss.inputRow}>
// //             <TextInput style={ss.input} placeholder="City..." placeholderTextColor={T.textMuted} value={city} onChangeText={setCity} />
// //           </View>
// //           <Text style={ss.fieldLabel}>DAYS</Text>
// //           <View style={ss.pillsWrap}>
// //             {['3','5','7'].map(d => <Pill key={d} label={`${d}D`} active={days===d} onPress={()=>setDays(d)} />)}
// //           </View>
// //           <TouchableOpacity style={ss.primaryBtn} onPress={generate} disabled={loading}>
// //             {loading ? <ActivityIndicator color={T.bg}/> : <Text style={ss.primaryBtnText}>Generate Plan</Text>}
// //           </TouchableOpacity>
// //         </FadeIn>

// //         {plan && plan.itinerary && plan.itinerary.map((d, i) => (
// //           <FadeIn key={i} delay={i*100} style={ss.card}>
// //             <Text style={ss.dayTheme}>Day {d.day}: {d.theme}</Text>
// //             {d.activities && d.activities.map((a, ai) => (
// //               <View key={ai} style={{marginTop:8, borderLeftWidth:2, borderLeftColor:T.border, paddingLeft:8}}>
// //                 <Text style={{color:T.accent, fontSize:12}}>{a.time}</Text>
// //                 <Text style={{color:T.text, fontWeight:'700'}}>{a.task}</Text>
// //                 <Text style={{color:T.textSub}}>{a.description}</Text>
// //               </View>
// //             ))}
// //           </FadeIn>
// //         ))}
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // ═══════════════════════════════════════════════════════════════
// // // 💰  SCREEN 3 — BUDGET
// // // ═══════════════════════════════════════════════════════════════
// // const BudgetScreen = () => {
// //   const [city, setCity] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [budget, setBudget] = useState(null);

// //   const generate = async () => {
// //     if(!city) return;
// //     setLoading(true); setBudget(null);
// //     try {
// //       const res = await fetch(`${API_URL}/api/ai-budget`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ city, days: 5, travelers: 2 })
// //       });
// //       const json = await res.json();
// //       if(json.success) setBudget(json.data);
// //     } catch(e) { Alert.alert('Error', e.message) }
// //     finally { setLoading(false); }
// //   };

// //   return (
// //     <SafeAreaView style={ss.screen}>
// //       <ScrollView contentContainerStyle={ss.scroll}>
// //         <SectionTitle icon="💰" title="Budget Planner" />
// //         <FadeIn style={ss.card}>
// //            <Text style={ss.fieldLabel}>DESTINATION</Text>
// //            <View style={ss.inputRow}>
// //              <TextInput style={ss.input} placeholder="City..." placeholderTextColor={T.textMuted} value={city} onChangeText={setCity} />
// //            </View>
// //            <TouchableOpacity style={ss.primaryBtn} onPress={generate} disabled={loading}>
// //              {loading ? <ActivityIndicator color={T.bg}/> : <Text style={ss.primaryBtnText}>Calculate</Text>}
// //            </TouchableOpacity>
// //         </FadeIn>

// //         {budget && (
// //           <FadeIn style={ss.card}>
// //             <Text style={ss.cityName}>₹{budget.summary?.grandTotal?.toLocaleString('en-IN')}</Text>
// //             <Text style={ss.textMuted}>Estimated Total Budget</Text>
// //             <View style={{marginTop:12}}>
// //               <Text style={ss.textSub}>🏨 Stay: ₹{budget.summary?.stayTotal}</Text>
// //               <Text style={ss.textSub}>🍽️ Food: ₹{budget.summary?.foodTotal}</Text>
// //               <Text style={ss.textSub}>🚗 Transport: ₹{budget.summary?.transportTotal}</Text>
// //             </View>
// //           </FadeIn>
// //         )}
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // ═══════════════════════════════════════════════════════════════
// // // 🧳  SCREEN 4 — PACKING
// // // ═══════════════════════════════════════════════════════════════
// // const PackingScreen = () => {
// //   const [dest, setDest] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [data, setData] = useState(null);
// //   const [checked, setChecked] = useState({});

// //   const generate = async () => {
// //     if(!dest) return;
// //     setLoading(true); setData(null); setChecked({});
// //     try {
// //       const res = await fetch(`${API_URL}/api/smart-packing`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ destination: dest, duration: 5 })
// //       });
// //       const json = await res.json();
// //       if(json.success) setData(json.data);
// //     } catch(e) { Alert.alert('Error', e.message) }
// //     finally { setLoading(false); }
// //   };

// //   const toggle = (k) => setChecked(p => ({ ...p, [k]: !p[k] }));

// //   return (
// //     <SafeAreaView style={ss.screen}>
// //       <ScrollView contentContainerStyle={ss.scroll}>
// //         <SectionTitle icon="🧳" title="Smart Packing" />
// //         <FadeIn style={ss.card}>
// //           <Text style={ss.fieldLabel}>DESTINATION</Text>
// //           <View style={ss.inputRow}>
// //             <TextInput style={ss.input} placeholder="Where?" placeholderTextColor={T.textMuted} value={dest} onChangeText={setDest} />
// //           </View>
// //           <TouchableOpacity style={ss.primaryBtn} onPress={generate} disabled={loading}>
// //              {loading ? <ActivityIndicator color={T.bg}/> : <Text style={ss.primaryBtnText}>Generate List</Text>}
// //           </TouchableOpacity>
// //         </FadeIn>

// //         {data && data.categories && data.categories.map((cat, ci) => (
// //           <FadeIn key={ci} delay={ci*80} style={ss.card}>
// //             <Text style={ss.dayTheme}>{cat.icon} {cat.name}</Text>
// //             {cat.items && cat.items.map((item, ii) => {
// //               const k = `${ci}-${ii}`;
// //               return (
// //                 <TouchableOpacity key={ii} style={ss.packItem} onPress={() => toggle(k)}>
// //                   <View style={[ss.checkbox, checked[k] && ss.checkboxChecked]}>
// //                     {checked[k] && <Text style={{color:T.bg}}>✓</Text>}
// //                   </View>
// //                   <View style={{flex:1}}>
// //                     <Text style={[ss.text, checked[k] && {textDecorationLine:'line-through'}]}>{item.item}</Text>
// //                     <Text style={ss.textMuted}>{item.reason}</Text>
// //                   </View>
// //                 </TouchableOpacity>
// //               );
// //             })}
// //           </FadeIn>
// //         ))}
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // // ═══════════════════════════════════════════════════════════════
// // // 🤖  SCREEN 5 — CHAT
// // // ═══════════════════════════════════════════════════════════════
// // const ChatScreen = () => {
// //   const [messages, setMessages] = useState([{role:'assistant', content:'Hello! Ask me anything about travel.'}]);
// //   const [input, setInput] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const send = async () => {
// //     if(!input.trim()) return;
// //     const newMsgs = [...messages, {role:'user', content:input}];
// //     setMessages(newMsgs);
// //     setInput('');
// //     setLoading(true);
// //     try {
// //       const res = await fetch(`${API_URL}/api/ai-chat`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ message: input, history: newMsgs.slice(-6) })
// //       });
// //       const json = await res.json();
// //       if(json.success) setMessages(p => [...p, {role:'assistant', content: json.reply}]);
// //     } catch(e) { Alert.alert('Error', e.message) }
// //     finally { setLoading(false); }
// //   };

// //   return (
// //     <SafeAreaView style={ss.screen}>
// //       <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
// //         <ScrollView style={{flex:1, padding:16}} contentContainerStyle={{paddingBottom:20}}>
// //           {messages.map((m,i) => (
// //             <View key={i} style={[ss.bubble, m.role==='user' ? ss.bubbleUser : ss.bubbleBot]}>
// //               <Text style={{color: m.role==='user' ? T.bg : T.text}}>{m.content}</Text>
// //             </View>
// //           ))}
// //         </ScrollView>
// //         <View style={ss.chatInputRow}>
// //           <TextInput style={ss.chatInput} placeholder="Ask..." placeholderTextColor={T.textMuted} value={input} onChangeText={setInput} />
// //           <TouchableOpacity style={ss.sendBtn} onPress={send} disabled={loading}>
// //             <Text style={{color:T.bg, fontWeight:'900'}}>↑</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </KeyboardAvoidingView>
// //     </SafeAreaView>
// //   );
// // };

// // // ═══════════════════════════════════════════════════════════════
// // // 🏠  TAB BAR & MAIN APP
// // // ═══════════════════════════════════════════════════════════════
// // const TABS = [
// //   { key: 'discover', icon: '🔊', label: 'Discover' },
// //   { key: 'planner',  icon: '📋', label: 'Planner'  },
// //   { key: 'budget',   icon: '💰', label: 'Budget'   },
// //   { key: 'packing',  icon: '🧳', label: 'Packing'  },
// //   { key: 'chat',     icon: '🤖', label: 'Chat'     },
// // ];

// // const SCREENS = {
// //   discover: DiscoverScreen,
// //   planner: PlannerScreen,
// //   budget: BudgetScreen,
// //   packing: PackingScreen,
// //   chat: ChatScreen,
// // };

// // export default function App() {
// //   const [activeTab, setActiveTab] = useState('discover');
// //   const ActiveScreen = SCREENS[activeTab];

// //   return (
// //     <View style={{ flex: 1, backgroundColor: T.bg }}>
// //       <ActiveScreen />
// //       <View style={ss.tabBar}>
// //         {TABS.map(tab => {
// //           const active = activeTab === tab.key;
// //           return (
// //             <TouchableOpacity key={tab.key} style={ss.tabItem} onPress={() => setActiveTab(tab.key)}>
// //               <Text style={ss.tabIcon}>{tab.icon}</Text>
// //               <Text style={[ss.tabLabel, active && {color:T.accent}]}>{tab.label}</Text>
// //             </TouchableOpacity>
// //           );
// //         })}
// //       </View>
// //     </View>
// //   );
// // }

// // // ═══════════════════════════════════════════════════════════════
// // // 🎨  STYLES
// // // ═══════════════════════════════════════════════════════════════
// // const ss = StyleSheet.create({
// //   screen: { flex: 1, backgroundColor: T.bg },
// //   scroll: { padding: 16, paddingBottom: 80 },
  
// //   // Header & Sections
// //   discoverHeader: { alignItems: 'center', marginBottom: 24, marginTop: 8 },
// //   discoverLogo: { fontSize: 36, fontWeight: '900', color: T.text },
// //   discoverTagline: { fontSize: 12, color: T.textSub, marginTop: 2 },
// //   sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 18, marginTop: 4 },
// //   sectionTitle: { fontSize: 22, fontWeight: '800', color: T.text },
// //   sectionSubtitle: { fontSize: 12, color: T.textSub, marginTop: 1 },

// //   // Card
// //   card: {
// //     backgroundColor: T.surface, borderRadius: T.radius,
// //     padding: 18, marginBottom: 14, borderWidth: 1, borderColor: T.border,
// //   },

// //   // Inputs
// //   fieldLabel: { fontSize: 10, letterSpacing: 2.5, color: T.accent, fontWeight: '800', marginBottom: 8 },
// //   inputRow: {
// //     flexDirection: 'row', alignItems: 'center', gap: 10,
// //     backgroundColor: T.bg, borderRadius: T.radiusSm,
// //     borderWidth: 1, borderColor: T.border, paddingHorizontal: 14, marginBottom: 14,
// //   },
// //   input: { flex: 1, paddingVertical: 13, fontSize: 15, color: T.text },

// //   // Pills
// //   pillsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 14 },
// //   pill: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20, borderWidth: 1, borderColor: T.border, backgroundColor: T.bg },
// //   pillActive: { borderColor: T.accent, backgroundColor: T.accentSoft },
// //   pillText: { fontSize: 13, color: T.textSub, fontWeight: '600' },
// //   pillTextActive: { color: T.accent },
// //   pillSmall: { paddingHorizontal: 10, paddingVertical: 5 },
// //   langRow: { flexDirection: 'row', gap: 8, marginBottom: 18 },

// //   chip: { backgroundColor: T.surfaceHi, borderWidth: 1, borderColor: T.border, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 7, marginRight: 8 },
// //   chipText: { color: T.textSub, fontSize: 12, fontWeight: '600' },

// //   // Buttons
// //   primaryBtn: { backgroundColor: T.accent, borderRadius: T.radiusSm, paddingVertical: 15, alignItems: 'center' },
// //   primaryBtnText: { color: T.bg, fontSize: 15, fontWeight: '800' },
// //   btnDisabled: { opacity: 0.5 },

// //   // Info Display
// //   infoCardTop: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 18, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: T.border },
// //   cityBadge: { width: 48, height: 48, borderRadius: 14, backgroundColor: T.accentSoft, alignItems: 'center', justifyContent: 'center' },
// //   cityName: { fontSize: 22, fontWeight: '800', color: T.text },
// //   cityLabel: { fontSize: 10, color: T.textSub, letterSpacing: 2, fontWeight: '700', marginTop: 2 },
  
// //   infoRow: { marginBottom: 13, paddingLeft: 12, borderLeftWidth: 3, borderRadius: 2 },
// //   infoRowHead: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
// //   infoRowLabel: { fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
// //   infoRowVal: { fontSize: 14, color: T.textSub, lineHeight: 22 },

// //   // Audio
// //   audioBar: {
// //     backgroundColor: '#0f2340', borderRadius: T.radius, borderWidth: 1, borderColor: '#1e3a5f',
// //     padding: 14, marginBottom: 14, flexDirection: 'row', alignItems: 'center', gap: 12,
// //   },
// //   audioBarInfo: { flex: 1 },
// //   audioBarTitle: { color: '#90cdf4', fontWeight: '700', fontSize: 13, marginBottom: 5 },
// //   audioBarTrack: { height: 4, backgroundColor: T.border, borderRadius: 2, overflow: 'hidden', marginBottom: 4 },
// //   audioBarFill: { height: 4, backgroundColor: T.accent, borderRadius: 2 },
// //   audioBarSub: { color: T.textSub, fontSize: 11 },
// //   stopBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: T.surfaceHi, alignItems: 'center', justifyContent: 'center' },
// //   stopBtnTxt: { color: T.red, fontSize: 13, fontWeight: '900' },

// //   // Action Row
// //   actionRow: { flexDirection: 'row', gap: 12, marginBottom: 14 },
// //   actionBtn: { flex: 1, paddingVertical: 13, borderRadius: 12, alignItems: 'center', borderWidth: 1 },
// //   actionBtnText: { color: T.text, fontSize: 13, fontWeight: '700' },

// //   // Planner/Packing/Budget Specific
// //   dayTheme: { fontSize: 16, fontWeight: '700', color: T.text, marginBottom: 8 },
// //   packItem: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8 },
// //   checkbox: { width: 22, height: 22, borderRadius: 6, borderWidth: 2, borderColor: T.border, alignItems: 'center', justifyContent: 'center' },
// //   checkboxChecked: { backgroundColor: T.green, borderColor: T.green },

// //   // Chat
// //   bubble: { maxWidth: '85%', borderRadius: 18, padding: 12, marginBottom: 8 },
// //   bubbleUser: { backgroundColor: T.accent, alignSelf: 'flex-end', borderBottomRightRadius: 4 },
// //   bubbleBot: { backgroundColor: T.surfaceHi, alignSelf: 'flex-start', borderBottomLeftRadius: 4 },
// //   chatInputRow: { flexDirection: 'row', gap: 10, padding: 12, borderTopWidth: 1, borderTopColor: T.border, backgroundColor: T.surface },
// //   chatInput: { flex: 1, backgroundColor: T.bg, borderWidth: 1, borderColor: T.border, borderRadius: 16, paddingHorizontal: 14, paddingVertical: 10, color: T.text, fontSize: 14, maxHeight: 100 },
// //   sendBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: T.accent, alignItems: 'center', justifyContent: 'center' },

// //   // Tab Bar
// //   tabBar: {
// //     flexDirection: 'row', backgroundColor: T.surface,
// //     borderTopWidth: 1, borderTopColor: T.border,
// //     paddingBottom: Platform.OS === 'ios' ? 20 : 8, paddingTop: 8,
// //   },
// //   tabItem: { flex: 1, alignItems: 'center', gap: 3 },
// //   tabIcon: { fontSize: 18 },
// //   tabLabel: { fontSize: 10, color: T.textMuted, fontWeight: '600' },

// //   text: { color: T.text },
// //   textSub: { color: T.textSub },
// //   textMuted: { color: T.textMuted },
// //   blueSoft: { backgroundColor: '#5b9cf615' },
// //   greenSoft: { backgroundColor: '#4ade8015' },
// // });






















// // ╔══════════════════════════════════════════════════════════════╗
// // ║      TravioX — Optimized React Native App (App.js)          ║
// // ║      FIX: Tab Bar position safe area added                  ║
// // ╚══════════════════════════════════════════════════════════════╝

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import {
//   View, Text, TextInput, TouchableOpacity, StyleSheet,
//   ScrollView, ActivityIndicator, Alert, Animated,
//   Dimensions, StatusBar, Platform, KeyboardAvoidingView,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Audio } from 'expo-av';
// import * as FileSystem from 'expo-file-system/legacy';

// const { width } = Dimensions.get('window');
// const API_URL = 'https://semproject-1a4i.vercel.app'; // 👈 CHANGE TO YOUR LOCAL IP

// // ═══════════════════════════════════════════════════════════════
// // 🎨  DESIGN TOKENS
// // ═══════════════════════════════════════════════════════════════
// const T = {
//   bg:        '#0e0f14',
//   surface:   '#16181f',
//   surfaceHi: '#1e2029',
//   border:    '#272a35',
//   accent:    '#e8a045',
//   accentSoft:'#e8a04520',
//   blue:      '#5b9cf6',
//   blueSoft:  '#5b9cf615',
//   green:     '#4ade80',
//   greenSoft: '#4ade8015',
//   red:       '#f87171',
//   text:      '#e8eaf0',
//   textSub:   '#7c8095',
//   textMuted: '#3d4155',
//   radius:    16,
//   radiusSm:  10,
//   shadow: {
//     shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.4, shadowRadius: 12, elevation: 8,
//   },
// };

// const safeStr = (val) => {
//   if (!val) return '';
//   if (typeof val === 'string') return val;
//   if (Array.isArray(val)) return val.join(', ');
//   if (typeof val === 'object') return Object.values(val).join(', ');
//   return String(val);
// };

// // ═══════════════════════════════════════════════════════════════
// // 🎧  AUDIO PLAYER HOOK (FIXED)
// // ═══════════════════════════════════════════════════════════════
// const useAudioPlayer = () => {
//   const soundRef = useRef(null);
//   const isPlayingRef = useRef(false);
  
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentChunk, setCurrentChunk] = useState(0);
//   const [totalChunks, setTotalChunks] = useState(0);

//   const stopAudio = useCallback(async () => {
//     isPlayingRef.current = false;
//     setIsPlaying(false);
//     setCurrentChunk(0);
//     setTotalChunks(0);

//     if (soundRef.current) {
//       try {
//         const status = await soundRef.current.getStatusAsync();
//         if (status.isLoaded) {
//           await soundRef.current.stopAsync();
//           await soundRef.current.unloadAsync();
//         }
//       } catch (e) {
//         console.warn('Stop error:', e);
//       } finally {
//         soundRef.current = null;
//       }
//     }
//   }, []);

//   const playSegments = useCallback(async (segments = []) => {
//     await stopAudio();
    
//     if (!segments.length) return;

//     isPlayingRef.current = true;
//     setIsPlaying(true);
//     setTotalChunks(segments.length);

//     await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

//     for (let i = 0; i < segments.length; i++) {
//       if (!isPlayingRef.current) break;

//       setCurrentChunk(i + 1);
      
//       try {
//         const uri = `${FileSystem.documentDirectory}tx_chunk_${i}.wav`;
//         await FileSystem.writeAsStringAsync(uri, segments[i], { encoding: FileSystem.EncodingType.Base64 });
        
//         await new Promise(async (resolve) => {
//           const { sound } = await Audio.Sound.createAsync(
//             { uri },
//             { shouldPlay: true },
//             (status) => {
//               if (status.didJustFinish || status.error) {
//                 sound.unloadAsync().catch(() => {});
//                 resolve();
//               }
//             }
//           );
//           soundRef.current = sound;
//         });

//       } catch (e) {
//         console.warn(`chunk ${i} error`, e.message);
//       }
//     }

//     isPlayingRef.current = false;
//     setIsPlaying(false);
//   }, [stopAudio]);

//   useEffect(() => {
//     return () => { stopAudio(); };
//   }, [stopAudio]);

//   return { playSegments, stopAudio, isPlaying, currentChunk, totalChunks };
// };

// // ═══════════════════════════════════════════════════════════════
// // 🧩  SHARED COMPONENTS
// // ═══════════════════════════════════════════════════════════════
// const FadeIn = ({ children, delay = 0, style }) => {
//   const op = useRef(new Animated.Value(0)).current;
//   const ty = useRef(new Animated.Value(24)).current;
//   useEffect(() => {
//     Animated.parallel([
//       Animated.timing(op, { toValue: 1, duration: 450, delay, useNativeDriver: true }),
//       Animated.spring(ty, { toValue: 0, tension: 55, friction: 9, delay, useNativeDriver: true }),
//     ]).start();
//   }, []);
//   return <Animated.View style={[{ opacity: op, transform: [{ translateY: ty }] }, style]}>{children}</Animated.View>;
// };

// const Pill = ({ label, active, onPress, small }) => (
//   <TouchableOpacity
//     style={[ss.pill, active && ss.pillActive, small && ss.pillSmall]}
//     onPress={onPress}
//     activeOpacity={0.75}
//   >
//     <Text style={[ss.pillText, active && ss.pillTextActive]}>{label}</Text>
//   </TouchableOpacity>
// );

// const AudioBar = ({ isPlaying, currentChunk, totalChunks, onStop }) => {
//   if (!isPlaying) return null;
//   const pct = totalChunks > 0 ? currentChunk / totalChunks : 0;
//   return (
//     <FadeIn style={ss.audioBar}>
//       <Text style={{ fontSize: 22 }}>🔊</Text>
//       <View style={ss.audioBarInfo}>
//         <Text style={ss.audioBarTitle}>Playing Audio...</Text>
//         <View style={ss.audioBarTrack}>
//           <View style={[ss.audioBarFill, { width: `${pct * 100}%` }]} />
//         </View>
//         <Text style={ss.audioBarSub}>Part {currentChunk} of {totalChunks}</Text>
//       </View>
//       <TouchableOpacity style={ss.stopBtn} onPress={onStop}>
//         <Text style={ss.stopBtnTxt}>■</Text>
//       </TouchableOpacity>
//     </FadeIn>
//   );
// };

// // ═══════════════════════════════════════════════════════════════
// // 🏠  SCREEN 1 — DISCOVER
// // ═══════════════════════════════════════════════════════════════
// const DiscoverScreen = () => {
//   const [city, setCity] = useState('');
//   const [audioLang, setAudioLang] = useState('en-IN');
//   const [loading, setLoading] = useState(false);
//   const [info, setInfo] = useState(null);
//   const [lastCity, setLastCity] = useState('');
//   const { playSegments, stopAudio, isPlaying, currentChunk, totalChunks } = useAudioPlayer();

//   const SUGGESTIONS = ['Mumbai', 'Jaipur', 'Goa', 'Manali', 'Varanasi', 'Hampi'];
//   const LANGS = [
//     { code: 'en-IN', label: 'English' },
//     { code: 'hi-IN', label: 'Hindi' },
//     { code: 'mr-IN', label: 'Marathi' },
//   ];

//   const discover = async () => {
//     const c = city.trim();
//     if (!c) return Alert.alert('Enter City', 'Please type a destination city first.');
    
//     if (isPlaying) await stopAudio();
    
//     setLoading(true); setInfo(null);
//     try {
//       const res = await fetch(`${API_URL}/api/destination-info`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ city: c, language: audioLang }),
//       });
//       const json = await res.json();
//       if (!json.success) throw new Error(json.error || 'Failed');

//       const rawInfo = json.data.info;
//       const safeInfo = {
//         history: safeStr(rawInfo.history),
//         bestTime: safeStr(rawInfo.bestTime),
//         food: safeStr(rawInfo.food),
//         culture: safeStr(rawInfo.culture),
//         hiddenGem: safeStr(rawInfo.hiddenGem),
//         summary: safeStr(rawInfo.summary),
//       };

//       setInfo(safeInfo);
//       setLastCity(c);
//       const segs = json.data.audioSegments || [];
//       if (segs.length) await playSegments(segs);
//     } catch (e) {
//       Alert.alert('Error', e.message);
//     } finally { setLoading(false); }
//   };

//   const replay = async () => {
//     if (!lastCity) return;
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_URL}/api/destination-info`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ city: lastCity, language: audioLang }),
//       });
//       const json = await res.json();
//       const segs = json.data?.audioSegments || [];
//       if (segs.length) await playSegments(segs);
//     } catch (e) { Alert.alert('Error', 'Could not replay audio.'); }
//     finally { setLoading(false); }
//   };

//   return (
//     <SafeAreaView style={ss.screen}>
//       <StatusBar barStyle="light-content" backgroundColor={T.bg} />
//       <ScrollView contentContainerStyle={ss.scroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        
//         <FadeIn style={ss.discoverHeader}>
//           <Text style={ss.discoverLogo}>✈ TravioX</Text>
//           <Text style={ss.discoverTagline}>AI-powered audio travel guides</Text>
//         </FadeIn>

//         <FadeIn delay={120} style={ss.card}>
//           <Text style={ss.fieldLabel}>WHERE TO?</Text>
//           <View style={ss.inputRow}>
//             <Text style={{ fontSize: 16 }}>🗺️</Text>
//             <TextInput
//               style={ss.input}
//               placeholder="Mumbai, Jaipur, Goa…"
//               placeholderTextColor={T.textMuted}
//               value={city}
//               onChangeText={setCity}
//               returnKeyType="search"
//               onSubmitEditing={discover}
//             />
//           </View>

//           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
//             {SUGGESTIONS.map((s) => (
//               <TouchableOpacity key={s} style={ss.chip} onPress={() => setCity(s)}>
//                 <Text style={ss.chipText}>{s}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>

//           <Text style={ss.fieldLabel}>🎧 AUDIO LANGUAGE</Text>
//           <View style={ss.langRow}>
//             {LANGS.map((l) => (
//               <Pill 
//                 key={l.code} 
//                 label={l.label} 
//                 active={audioLang === l.code} 
//                 onPress={() => setAudioLang(l.code)} 
//                 small 
//               />
//             ))}
//           </View>

//           <TouchableOpacity
//             style={[ss.primaryBtn, loading && ss.btnDisabled]}
//             onPress={discover}
//             disabled={loading}
//           >
//             {loading
//               ? <ActivityIndicator color={T.bg} />
//               : <Text style={ss.primaryBtnText}>🔊 Discover & Listen</Text>
//             }
//           </TouchableOpacity>
//         </FadeIn>

//         <AudioBar 
//           isPlaying={isPlaying} 
//           currentChunk={currentChunk} 
//           totalChunks={totalChunks} 
//           onStop={stopAudio} 
//         />

//         {info && (
//           <>
//             <FadeIn delay={80} style={ss.card}>
//               <View style={ss.infoCardTop}>
//                 <View style={ss.cityBadge}><Text style={{ fontSize: 24 }}>📍</Text></View>
//                 <View>
//                   <Text style={ss.cityName}>{lastCity}</Text>
//                   <Text style={ss.cityLabel}>DESTINATION GUIDE</Text>
//                 </View>
//               </View>

//               {[
//                 { icon: '📖', label: 'History', value: info.history, color: T.blue },
//                 { icon: '🌤️', label: 'Best Time', value: info.bestTime, color: T.green },
//                 { icon: '🍲', label: 'Famous Food', value: info.food, color: T.accent },
//                 { icon: '🎭', label: 'Culture', value: info.culture, color: '#c084fc' },
//                 { icon: '💎', label: 'Hidden Gem', value: info.hiddenGem, color: '#f472b6' },
//               ].filter(r => r.value).map((row, i) => (
//                 <View key={i} style={[ss.infoRow, { borderLeftColor: row.color }]}>
//                   <View style={ss.infoRowHead}>
//                     <Text>{row.icon}</Text>
//                     <Text style={[ss.infoRowLabel, { color: row.color }]}>{row.label}</Text>
//                   </View>
//                   <Text style={ss.infoRowVal}>{row.value}</Text>
//                 </View>
//               ))}
//             </FadeIn>

//             <FadeIn delay={700} style={ss.actionRow}>
//               <TouchableOpacity
//                 style={[ss.actionBtn, { borderColor: T.blue + '50', backgroundColor: T.blueSoft }]}
//                 onPress={isPlaying ? stopAudio : replay}
//                 disabled={loading}
//               >
//                 <Text style={ss.actionBtnText}>{isPlaying ? '⏹ Stop' : '🔁 Replay'}</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[ss.actionBtn, { borderColor: T.green + '50', backgroundColor: T.greenSoft }]}
//                 onPress={() => { stopAudio(); setInfo(null); setCity(''); setLastCity(''); }}
//               >
//                 <Text style={ss.actionBtnText}>🌏 New City</Text>
//               </TouchableOpacity>
//             </FadeIn>
//           </>
//         )}
//         <View style={{ height: 60 }} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // ═══════════════════════════════════════════════════════════════
// // 🤖  SCREEN 2 — CHAT
// // ═══════════════════════════════════════════════════════════════
// const ChatScreen = () => {
//   const [messages, setMessages] = useState([{role:'assistant', content:'Hello! Ask me anything about travel.'}]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);

//   const send = async () => {
//     if(!input.trim()) return;
//     const newMsgs = [...messages, {role:'user', content:input}];
//     setMessages(newMsgs);
//     setInput('');
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_URL}/api/ai-chat`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: input, history: newMsgs.slice(-6) })
//       });
//       const json = await res.json();
//       if(json.success) setMessages(p => [...p, {role:'assistant', content: json.reply}]);
//     } catch(e) { Alert.alert('Error', e.message) }
//     finally { setLoading(false); }
//   };

//   return (
//     <SafeAreaView style={ss.screen}>
//       <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//         <ScrollView style={{flex:1, padding:16}} contentContainerStyle={{paddingBottom:20}}>
//           {messages.map((m,i) => (
//             <View key={i} style={[ss.bubble, m.role==='user' ? ss.bubbleUser : ss.bubbleBot]}>
//               <Text style={{color: m.role==='user' ? T.bg : T.text}}>{m.content}</Text>
//             </View>
//           ))}
//         </ScrollView>
//         <View style={ss.chatInputRow}>
//           <TextInput style={ss.chatInput} placeholder="Ask..." placeholderTextColor={T.textMuted} value={input} onChangeText={setInput} />
//           <TouchableOpacity style={ss.sendBtn} onPress={send} disabled={loading}>
//             <Text style={{color:T.bg, fontWeight:'900'}}>↑</Text>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// // ═══════════════════════════════════════════════════════════════
// // 🏠  TAB BAR & MAIN APP
// // ═══════════════════════════════════════════════════════════════
// const TABS = [
//   { key: 'discover', icon: '🔊', label: 'Discover' },
//   { key: 'chat',     icon: '🤖', label: 'Chat'     },
// ];

// const SCREENS = {
//   discover: DiscoverScreen,
//   chat: ChatScreen,
// };

// export default function App() {
//   const [activeTab, setActiveTab] = useState('discover');
//   const ActiveScreen = SCREENS[activeTab];

//   return (
//     <View style={{ flex: 1, backgroundColor: T.bg }}>
//       <ActiveScreen />
//       {/* ✅ FIX: Wrapped TabBar in SafeAreaView to push it above system buttons */}
//       <SafeAreaView style={{ backgroundColor: T.surface }}>
//         <View style={ss.tabBar}>
//           {TABS.map(tab => {
//             const active = activeTab === tab.key;
//             return (
//               <TouchableOpacity key={tab.key} style={ss.tabItem} onPress={() => setActiveTab(tab.key)}>
//                 <Text style={ss.tabIcon}>{tab.icon}</Text>
//                 <Text style={[ss.tabLabel, active && {color:T.accent}]}>{tab.label}</Text>
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//       </SafeAreaView>
//     </View>
//   );
// }

// // ═══════════════════════════════════════════════════════════════
// // 🎨  STYLES
// // ═══════════════════════════════════════════════════════════════
// const ss = StyleSheet.create({
//   screen: { flex: 1, backgroundColor: T.bg },
//   scroll: { padding: 16, paddingBottom: 80 },
  
//   // Header & Sections
//   discoverHeader: { alignItems: 'center', marginBottom: 24, marginTop: 8 },
//   discoverLogo: { fontSize: 36, fontWeight: '900', color: T.text },
//   discoverTagline: { fontSize: 12, color: T.textSub, marginTop: 2 },

//   // Card
//   card: {
//     backgroundColor: T.surface, borderRadius: T.radius,
//     padding: 18, marginBottom: 14, borderWidth: 1, borderColor: T.border,
//   },

//   // Inputs
//   fieldLabel: { fontSize: 10, letterSpacing: 2.5, color: T.accent, fontWeight: '800', marginBottom: 8 },
//   inputRow: {
//     flexDirection: 'row', alignItems: 'center', gap: 10,
//     backgroundColor: T.bg, borderRadius: T.radiusSm,
//     borderWidth: 1, borderColor: T.border, paddingHorizontal: 14, marginBottom: 14,
//   },
//   input: { flex: 1, paddingVertical: 13, fontSize: 15, color: T.text },

//   // Pills
//   pill: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20, borderWidth: 1, borderColor: T.border, backgroundColor: T.bg },
//   pillActive: { borderColor: T.accent, backgroundColor: T.accentSoft },
//   pillText: { fontSize: 13, color: T.textSub, fontWeight: '600' },
//   pillTextActive: { color: T.accent },
//   pillSmall: { paddingHorizontal: 10, paddingVertical: 5 },
//   langRow: { flexDirection: 'row', gap: 8, marginBottom: 18 },

//   chip: { backgroundColor: T.surfaceHi, borderWidth: 1, borderColor: T.border, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 7, marginRight: 8 },
//   chipText: { color: T.textSub, fontSize: 12, fontWeight: '600' },

//   // Buttons
//   primaryBtn: { backgroundColor: T.accent, borderRadius: T.radiusSm, paddingVertical: 15, alignItems: 'center' },
//   primaryBtnText: { color: T.bg, fontSize: 15, fontWeight: '800' },
//   btnDisabled: { opacity: 0.5 },

//   // Info Display
//   infoCardTop: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 18, paddingBottom: 14, borderBottomWidth: 1, borderBottomColor: T.border },
//   cityBadge: { width: 48, height: 48, borderRadius: 14, backgroundColor: T.accentSoft, alignItems: 'center', justifyContent: 'center' },
//   cityName: { fontSize: 22, fontWeight: '800', color: T.text },
//   cityLabel: { fontSize: 10, color: T.textSub, letterSpacing: 2, fontWeight: '700', marginTop: 2 },
  
//   infoRow: { marginBottom: 13, paddingLeft: 12, borderLeftWidth: 3, borderRadius: 2 },
//   infoRowHead: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
//   infoRowLabel: { fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
//   infoRowVal: { fontSize: 14, color: T.textSub, lineHeight: 22 },

//   // Audio
//   audioBar: {
//     backgroundColor: '#0f2340', borderRadius: T.radius, borderWidth: 1, borderColor: '#1e3a5f',
//     padding: 14, marginBottom: 14, flexDirection: 'row', alignItems: 'center', gap: 12,
//   },
//   audioBarInfo: { flex: 1 },
//   audioBarTitle: { color: '#90cdf4', fontWeight: '700', fontSize: 13, marginBottom: 5 },
//   audioBarTrack: { height: 4, backgroundColor: T.border, borderRadius: 2, overflow: 'hidden', marginBottom: 4 },
//   audioBarFill: { height: 4, backgroundColor: T.accent, borderRadius: 2 },
//   audioBarSub: { color: T.textSub, fontSize: 11 },
//   stopBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: T.surfaceHi, alignItems: 'center', justifyContent: 'center' },
//   stopBtnTxt: { color: T.red, fontSize: 13, fontWeight: '900' },

//   // Action Row
//   actionRow: { flexDirection: 'row', gap: 12, marginBottom: 14 },
//   actionBtn: { flex: 1, paddingVertical: 13, borderRadius: 12, alignItems: 'center', borderWidth: 1 },
//   actionBtnText: { color: T.text, fontSize: 13, fontWeight: '700' },

//   // Chat
//   bubble: { maxWidth: '85%', borderRadius: 18, padding: 12, marginBottom: 8 },
//   bubbleUser: { backgroundColor: T.accent, alignSelf: 'flex-end', borderBottomRightRadius: 4 },
//   bubbleBot: { backgroundColor: T.surfaceHi, alignSelf: 'flex-start', borderBottomLeftRadius: 4 },
//   chatInputRow: { flexDirection: 'row', gap: 10, padding: 12, borderTopWidth: 1, borderTopColor: T.border, backgroundColor: T.surface },
//   chatInput: { flex: 1, backgroundColor: T.bg, borderWidth: 1, borderColor: T.border, borderRadius: 16, paddingHorizontal: 14, paddingVertical: 10, color: T.text, fontSize: 14, maxHeight: 100 },
//   sendBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: T.accent, alignItems: 'center', justifyContent: 'center' },

//   // Tab Bar
//   tabBar: {
//     flexDirection: 'row', 
//     backgroundColor: T.surface,
//     borderTopWidth: 1, 
//     borderTopColor: T.border,
//     paddingTop: 8, // Padding top inside the tab bar
//     // Removed hardcoded bottom padding, handled by SafeAreaView wrapper
//   },
//   tabItem: { flex: 1, alignItems: 'center', gap: 3 },
//   tabIcon: { fontSize: 18 },
//   tabLabel: { fontSize: 10, color: T.textMuted, fontWeight: '600' },

//   text: { color: T.text },
//   textSub: { color: T.textSub },
//   textMuted: { color: T.textMuted },
//   blueSoft: { backgroundColor: '#5b9cf615' },
//   greenSoft: { backgroundColor: '#4ade8015' },
// });




import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  Animated,
  Dimensions,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';

const { width } = Dimensions.get('window');
const API_URL = 'https://semproject-1a4i.vercel.app';

// ═══════════════════════════════════════════════════════════════
// 🎨  DESIGN TOKENS
// ═══════════════════════════════════════════════════════════════
const T = {
  bg: '#0e0f14',
  surface: '#16181f',
  surfaceHi: '#1e2029',
  border: '#272a35',
  accent: '#e8a045',
  accentSoft: '#e8a04520',
  blue: '#5b9cf6',
  blueSoft: '#5b9cf615',
  green: '#4ade80',
  greenSoft: '#4ade8015',
  red: '#f87171',
  text: '#e8eaf0',
  textSub: '#7c8095',
  textMuted: '#3d4155',
  radius: 16,
  radiusSm: 10,
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
};

const safeStr = (val) => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (Array.isArray(val)) return val.join(', ');
  if (typeof val === 'object') return Object.values(val).join(', ');
  return String(val);
};

// ═══════════════════════════════════════════════════════════════
// 🎧  AUDIO PLAYER HOOK (ROBUST & ERROR-FREE)
// ═══════════════════════════════════════════════════════════════
const useAudioPlayer = () => {
  const soundRef = useRef(null);
  const isPlayingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChunk, setCurrentChunk] = useState(0);
  const [totalChunks, setTotalChunks] = useState(0);

  const stopAudio = useCallback(async () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    setCurrentChunk(0);
    setTotalChunks(0);

    if (soundRef.current) {
      try {
        const status = await soundRef.current.getStatusAsync();
        if (status.isLoaded) {
          await soundRef.current.stopAsync();
          await soundRef.current.unloadAsync();
        }
      } catch (e) {
        console.warn('Stop error:', e.message);
      } finally {
        soundRef.current = null;
      }
    }
  }, []);

  const playSegments = useCallback(
    async (segments = []) => {
      await stopAudio();

      if (!segments || !segments.length) return;

      isPlayingRef.current = true;
      setIsPlaying(true);
      setTotalChunks(segments.length);

      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: false,
          shouldDuckAndroid: true,
        });
      } catch (e) {
        console.warn('Audio mode config notice:', e.message);
      }

      for (let i = 0; i < segments.length; i++) {
        if (!isPlayingRef.current) break;

        setCurrentChunk(i + 1);

        try {
          const base64Data = segments[i];
          let audioUri = `data:audio/wav;base64,${base64Data}`;

          // File system cache fallback if data URI fails on older devices
          if (FileSystem.documentDirectory) {
            try {
              const fileUri = `${FileSystem.documentDirectory}tx_chunk_${i}.wav`;
              await FileSystem.writeAsStringAsync(fileUri, base64Data, {
                encoding: 'base64',
              });
              audioUri = fileUri;
            } catch (fsErr) {
              console.warn('FileSystem write notice, using data URI fallback:', fsErr.message);
            }
          }

          await new Promise(async (resolve) => {
            try {
              const { sound } = await Audio.Sound.createAsync(
                { uri: audioUri },
                { shouldPlay: true }
              );

              soundRef.current = sound;

              sound.setOnPlaybackStatusUpdate((status) => {
                if (status.didJustFinish || status.error) {
                  sound.unloadAsync().catch(() => {});
                  soundRef.current = null;
                  resolve();
                }
              });
            } catch (err) {
              console.warn(`Chunk ${i} playback notice:`, err.message);
              resolve();
            }
          });
        } catch (e) {
          console.warn(`Chunk ${i} error:`, e.message);
        }
      }

      isPlayingRef.current = false;
      setIsPlaying(false);
    },
    [stopAudio]
  );

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, [stopAudio]);

  return { playSegments, stopAudio, isPlaying, currentChunk, totalChunks };
};

// ═══════════════════════════════════════════════════════════════
// 🧩  SHARED COMPONENTS
// ═══════════════════════════════════════════════════════════════
const FadeIn = ({ children, delay = 0, style }) => {
  const op = useRef(new Animated.Value(0)).current;
  const ty = useRef(new Animated.Value(24)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(op, { toValue: 1, duration: 450, delay, useNativeDriver: true }),
      Animated.spring(ty, { toValue: 0, tension: 55, friction: 9, delay, useNativeDriver: true }),
    ]).start();
  }, []);
  return <Animated.View style={[{ opacity: op, transform: [{ translateY: ty }] }, style]}>{children}</Animated.View>;
};

const Pill = ({ label, active, onPress, small }) => (
  <TouchableOpacity
    style={[ss.pill, active && ss.pillActive, small && ss.pillSmall]}
    onPress={onPress}
    activeOpacity={0.75}
  >
    <Text style={[ss.pillText, active && ss.pillTextActive]}>{label}</Text>
  </TouchableOpacity>
);

const AudioBar = ({ isPlaying, currentChunk, totalChunks, onStop }) => {
  if (!isPlaying) return null;
  const pct = totalChunks > 0 ? currentChunk / totalChunks : 0;
  return (
    <FadeIn style={ss.audioBar}>
      <Text style={{ fontSize: 22 }}>🔊</Text>
      <View style={ss.audioBarInfo}>
        <Text style={ss.audioBarTitle}>Playing Audio Guide...</Text>
        <View style={ss.audioBarTrack}>
          <View style={[ss.audioBarFill, { width: `${pct * 100}%` }]} />
        </View>
        <Text style={ss.audioBarSub}>
          Part {currentChunk} of {totalChunks}
        </Text>
      </View>
      <TouchableOpacity style={ss.stopBtn} onPress={onStop}>
        <Text style={ss.stopBtnTxt}>■</Text>
      </TouchableOpacity>
    </FadeIn>
  );
};

// ═══════════════════════════════════════════════════════════════
// 🏠  SCREEN 1 — DISCOVER
// ═══════════════════════════════════════════════════════════════
const DiscoverScreen = () => {
  const [city, setCity] = useState('');
  const [audioLang, setAudioLang] = useState('en-IN');
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [lastCity, setLastCity] = useState('');
  const { playSegments, stopAudio, isPlaying, currentChunk, totalChunks } = useAudioPlayer();

  const SUGGESTIONS = ['Mumbai', 'Jaipur', 'Goa', 'Manali', 'Varanasi', 'Hampi'];
  const LANGS = [
    { code: 'en-IN', label: 'English' },
    { code: 'hi-IN', label: 'Hindi' },
    { code: 'mr-IN', label: 'Marathi' },
  ];

  const discover = async () => {
    const c = city.trim();
    if (!c) return Alert.alert('Enter City', 'Please type a destination city first.');

    if (isPlaying) await stopAudio();

    setLoading(true);
    setInfo(null);
    try {
      const res = await fetch(`${API_URL}/api/destination-info`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city: c, language: audioLang }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error || 'Failed to fetch destination guide');

      const rawInfo = json.data?.info || {};
      const safeInfo = {
        history: safeStr(rawInfo.history),
        bestTime: safeStr(rawInfo.bestTime),
        food: safeStr(rawInfo.food),
        culture: safeStr(rawInfo.culture),
        hiddenGem: safeStr(rawInfo.hiddenGem),
        summary: safeStr(rawInfo.summary),
      };

      setInfo(safeInfo);
      setLastCity(c);
      const segs = json.data?.audioSegments || [];
      if (segs.length) await playSegments(segs);
    } catch (e) {
      Alert.alert('Error', e.message || 'Could not load destination guide.');
    } finally {
      setLoading(false);
    }
  };

  const replay = async () => {
    if (!lastCity) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/destination-info`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city: lastCity, language: audioLang }),
      });
      const json = await res.json();
      const segs = json.data?.audioSegments || [];
      if (segs.length) await playSegments(segs);
    } catch (e) {
      Alert.alert('Error', 'Could not replay audio guide.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={ss.screen}>
      <StatusBar barStyle="light-content" backgroundColor={T.bg} />
      <ScrollView
        contentContainerStyle={ss.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <FadeIn style={ss.discoverHeader}>
          <Text style={ss.discoverLogo}>✈ TravioX</Text>
          <Text style={ss.discoverTagline}>AI-powered audio travel guides</Text>
        </FadeIn>

        <FadeIn delay={120} style={ss.card}>
          <Text style={ss.fieldLabel}>WHERE TO?</Text>
          <View style={ss.inputRow}>
            <Text style={{ fontSize: 16 }}>🗺️</Text>
            <TextInput
              style={ss.input}
              placeholder="Mumbai, Jaipur, Goa…"
              placeholderTextColor={T.textMuted}
              value={city}
              onChangeText={setCity}
              returnKeyType="search"
              onSubmitEditing={discover}
            />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
            {SUGGESTIONS.map((s) => (
              <TouchableOpacity key={s} style={ss.chip} onPress={() => setCity(s)}>
                <Text style={ss.chipText}>{s}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <Text style={ss.fieldLabel}>🎧 AUDIO LANGUAGE</Text>
          <View style={ss.langRow}>
            {LANGS.map((l) => (
              <Pill
                key={l.code}
                label={l.label}
                active={audioLang === l.code}
                onPress={() => setAudioLang(l.code)}
                small
              />
            ))}
          </View>

          <TouchableOpacity
            style={[ss.primaryBtn, loading && ss.btnDisabled]}
            onPress={discover}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color={T.bg} />
            ) : (
              <Text style={ss.primaryBtnText}>🔊 Discover & Listen</Text>
            )}
          </TouchableOpacity>
        </FadeIn>

        <AudioBar
          isPlaying={isPlaying}
          currentChunk={currentChunk}
          totalChunks={totalChunks}
          onStop={stopAudio}
        />

        {info && (
          <>
            <FadeIn delay={80} style={ss.card}>
              <View style={ss.infoCardTop}>
                <View style={ss.cityBadge}>
                  <Text style={{ fontSize: 24 }}>📍</Text>
                </View>
                <View>
                  <Text style={ss.cityName}>{lastCity}</Text>
                  <Text style={ss.cityLabel}>DESTINATION GUIDE</Text>
                </View>
              </View>

              {[
                { icon: '📖', label: 'History', value: info.history, color: T.blue },
                { icon: '🌤️', label: 'Best Time', value: info.bestTime, color: T.green },
                { icon: '🍲', label: 'Famous Food', value: info.food, color: T.accent },
                { icon: '🎭', label: 'Culture', value: info.culture, color: '#c084fc' },
                { icon: '💎', label: 'Hidden Gem', value: info.hiddenGem, color: '#f472b6' },
              ]
                .filter((r) => r.value)
                .map((row, i) => (
                  <View key={i} style={[ss.infoRow, { borderLeftColor: row.color }]}>
                    <View style={ss.infoRowHead}>
                      <Text>{row.icon}</Text>
                      <Text style={[ss.infoRowLabel, { color: row.color }]}>{row.label}</Text>
                    </View>
                    <Text style={ss.infoRowVal}>{row.value}</Text>
                  </View>
                ))}
            </FadeIn>

            <FadeIn delay={700} style={ss.actionRow}>
              <TouchableOpacity
                style={[ss.actionBtn, { borderColor: T.blue + '50', backgroundColor: T.blueSoft }]}
                onPress={isPlaying ? stopAudio : replay}
                disabled={loading}
              >
                <Text style={ss.actionBtnText}>{isPlaying ? '⏹ Stop' : '🔁 Replay'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ss.actionBtn, { borderColor: T.green + '50', backgroundColor: T.greenSoft }]}
                onPress={() => {
                  stopAudio();
                  setInfo(null);
                  setCity('');
                  setLastCity('');
                }}
              >
                <Text style={ss.actionBtnText}>🌏 New City</Text>
              </TouchableOpacity>
            </FadeIn>
          </>
        )}
        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

// ═══════════════════════════════════════════════════════════════
// 🤖  SCREEN 2 — CHAT
// ═══════════════════════════════════════════════════════════════
const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am TravioX AI. Ask me anything about travel.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input.trim() };
    const newMsgs = [...messages, userMsg];
    setMessages(newMsgs);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/ai-chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.content,
          history: newMsgs.slice(-6),
        }),
      });
      const json = await res.json();
      if (json.success && json.reply) {
        setMessages((p) => [...p, { role: 'assistant', content: json.reply }]);
      } else {
        throw new Error(json.error || 'Failed to receive response');
      }
    } catch (e) {
      Alert.alert('Error', e.message || 'Chat service unavailable.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={ss.screen}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView style={{ flex: 1, padding: 16 }} contentContainerStyle={{ paddingBottom: 20 }}>
          {messages.map((m, i) => (
            <View key={i} style={[ss.bubble, m.role === 'user' ? ss.bubbleUser : ss.bubbleBot]}>
              <Text style={{ color: m.role === 'user' ? T.bg : T.text }}>{m.content}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={ss.chatInputRow}>
          <TextInput
            style={ss.chatInput}
            placeholder="Ask anything..."
            placeholderTextColor={T.textMuted}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={send}
          />
          <TouchableOpacity style={ss.sendBtn} onPress={send} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color={T.bg} />
            ) : (
              <Text style={{ color: T.bg, fontWeight: '900' }}>↑</Text>
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// ═══════════════════════════════════════════════════════════════
// 🏠  TAB BAR & MAIN APP
// ═══════════════════════════════════════════════════════════════
const TABS = [
  { key: 'discover', icon: '🔊', label: 'Discover' },
  { key: 'chat', icon: '🤖', label: 'Chat' },
];

const SCREENS = {
  discover: DiscoverScreen,
  chat: ChatScreen,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('discover');
  const ActiveScreen = SCREENS[activeTab];

  return (
    <View style={{ flex: 1, backgroundColor: T.bg }}>
      <ActiveScreen />
      <SafeAreaView edges={['bottom']} style={{ backgroundColor: T.surface }}>
        <View style={ss.tabBar}>
          {TABS.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <TouchableOpacity
                key={tab.key}
                style={ss.tabItem}
                onPress={() => setActiveTab(tab.key)}
              >
                <Text style={ss.tabIcon}>{tab.icon}</Text>
                <Text style={[ss.tabLabel, active && { color: T.accent }]}>{tab.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════
// 🎨  STYLES
// ═══════════════════════════════════════════════════════════════
const ss = StyleSheet.create({
  screen: { flex: 1, backgroundColor: T.bg },
  scroll: { padding: 16, paddingBottom: 80 },

  // Header & Sections
  discoverHeader: { alignItems: 'center', marginBottom: 24, marginTop: 8 },
  discoverLogo: { fontSize: 36, fontWeight: '900', color: T.text },
  discoverTagline: { fontSize: 12, color: T.textSub, marginTop: 2 },

  // Card
  card: {
    backgroundColor: T.surface,
    borderRadius: T.radius,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: T.border,
  },

  // Inputs
  fieldLabel: {
    fontSize: 10,
    letterSpacing: 2.5,
    color: T.accent,
    fontWeight: '800',
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: T.bg,
    borderRadius: T.radiusSm,
    borderWidth: 1,
    borderColor: T.border,
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  input: { flex: 1, paddingVertical: 13, fontSize: 15, color: T.text },

  // Pills
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: T.border,
    backgroundColor: T.bg,
  },
  pillActive: { borderColor: T.accent, backgroundColor: T.accentSoft },
  pillText: { fontSize: 13, color: T.textSub, fontWeight: '600' },
  pillTextActive: { color: T.accent },
  pillSmall: { paddingHorizontal: 10, paddingVertical: 5 },
  langRow: { flexDirection: 'row', gap: 8, marginBottom: 18 },

  chip: {
    backgroundColor: T.surfaceHi,
    borderWidth: 1,
    borderColor: T.border,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginRight: 8,
  },
  chipText: { color: T.textSub, fontSize: 12, fontWeight: '600' },

  // Buttons
  primaryBtn: {
    backgroundColor: T.accent,
    borderRadius: T.radiusSm,
    paddingVertical: 15,
    alignItems: 'center',
  },
  primaryBtnText: { color: T.bg, fontSize: 15, fontWeight: '800' },
  btnDisabled: { opacity: 0.5 },

  // Info Display
  infoCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: T.border,
  },
  cityBadge: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: T.accentSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityName: { fontSize: 22, fontWeight: '800', color: T.text },
  cityLabel: { fontSize: 10, color: T.textSub, letterSpacing: 2, fontWeight: '700', marginTop: 2 },

  infoRow: { marginBottom: 13, paddingLeft: 12, borderLeftWidth: 3, borderRadius: 2 },
  infoRowHead: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
  infoRowLabel: { fontSize: 10, fontWeight: '800', letterSpacing: 1.5 },
  infoRowVal: { fontSize: 14, color: T.textSub, lineHeight: 22 },

  // Audio
  audioBar: {
    backgroundColor: '#0f2340',
    borderRadius: T.radius,
    borderWidth: 1,
    borderColor: '#1e3a5f',
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  audioBarInfo: { flex: 1 },
  audioBarTitle: { color: '#90cdf4', fontWeight: '700', fontSize: 13, marginBottom: 5 },
  audioBarTrack: { height: 4, backgroundColor: T.border, borderRadius: 2, overflow: 'hidden', marginBottom: 4 },
  audioBarFill: { height: 4, backgroundColor: T.accent, borderRadius: 2 },
  audioBarSub: { color: T.textSub, fontSize: 11 },
  stopBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: T.surfaceHi,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopBtnTxt: { color: T.red, fontSize: 13, fontWeight: '900' },

  // Action Row
  actionRow: { flexDirection: 'row', gap: 12, marginBottom: 14 },
  actionBtn: { flex: 1, paddingVertical: 13, borderRadius: 12, alignItems: 'center', borderWidth: 1 },
  actionBtnText: { color: T.text, fontSize: 13, fontWeight: '700' },

  // Chat
  bubble: { maxWidth: '85%', borderRadius: 18, padding: 12, marginBottom: 8 },
  bubbleUser: { backgroundColor: T.accent, alignSelf: 'flex-end', borderBottomRightRadius: 4 },
  bubbleBot: { backgroundColor: T.surfaceHi, alignSelf: 'flex-start', borderBottomLeftRadius: 4 },
  chatInputRow: {
    flexDirection: 'row',
    gap: 10,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: T.border,
    backgroundColor: T.surface,
  },
  chatInput: {
    flex: 1,
    backgroundColor: T.bg,
    borderWidth: 1,
    borderColor: T.border,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: T.text,
    fontSize: 14,
    maxHeight: 100,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: T.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Tab Bar
  tabBar: {
    flexDirection: 'row',
    backgroundColor: T.surface,
    borderTopWidth: 1,
    borderTopColor: T.border,
    paddingTop: 8,
    paddingBottom: 6,
  },
  tabItem: { flex: 1, alignItems: 'center', gap: 3 },
  tabIcon: { fontSize: 18 },
  tabLabel: { fontSize: 10, color: T.textMuted, fontWeight: '600' },
});