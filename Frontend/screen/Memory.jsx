// MemoryScreen.js — Dark Mono Theme (matches HomeScreen)
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
  Animated,
  Alert,
  ActivityIndicator,
  StatusBar,
  Share,
  KeyboardAvoidingView,
  Platform,
  Linking,
  Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const SERVER_URL = 'https://semproject-1a4i.vercel.app';
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dk15xospf/image/upload';

/* ═══ Design Tokens (Dark Mono Theme) ═══════════════════════ */
const T = {
  bg: '#050505',
  surf: '#0C0C0C',
  card: '#131313',
  card2: '#1A1A1A',
  border: '#242424',
  border2: '#303030',
  mint: '#FFFFFF',
  mintL: '#F0F0F0',
  mintD: '#C4C4C4',
  purple: '#909090',
  purpleL: '#B8B8B8',
  pink: '#505050',
  pinkL: '#787878',
  gold: '#FFD97D',
  goldD: '#E8E8E8',
  sky: '#D0D0D0',
  t1: '#FFFFFF',
  t2: '#B0B0B0',
  t3: '#4A4A4A',
  green: '#38EF7D',
};

/* ═══ GlowDot ══════════════════════════════════════════════ */
const GlowDot = ({ color, size = 8, pulseAnim }) => (
  <Animated.View
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: color,
      shadowColor: color,
      shadowOpacity: 0.9,
      shadowRadius: 6,
      elevation: 3,
      transform: pulseAnim ? [{ scale: pulseAnim }] : undefined,
    }}
  />
);

export default function MemoryScreen({ navigation }) {
  const [step, setStep] = useState('input'); // 'input' | 'loading' | 'result'
  const [moments, setMoments] = useState([]);
  const [loadingText, setLoadingText] = useState('');
  const [finalMemory, setFinalMemory] = useState(null);

  // Video State
  const [videoLoading, setVideoLoading] = useState(false);
  const [videoProgressStatus, setVideoProgressStatus] = useState('');
  const [videoResultUrl, setVideoResultUrl] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(0)).current;
  const spin = useRef(new Animated.Value(0)).current;
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1, duration: 2000, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 0, duration: 2000, useNativeDriver: true }),
      ])
    ).start();

    Animated.loop(
      Animated.timing(spin, { toValue: 1, duration: 7000, useNativeDriver: true })
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(float, { toValue: 1, duration: 5000, useNativeDriver: true }),
        Animated.timing(float, { toValue: 0, duration: 5000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const pulseS = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.07] });
  const spinStr = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  const floatY = float.interpolate({ inputRange: [0, 1], outputRange: [0, -8] });

  /* ── Photo Picker ────────────────────────────────────── */
  const addPhoto = async () => {
    if (moments.length >= 6) {
      return Alert.alert('Limit Reached', 'You can add up to 6 moments per memory.');
    }

    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        return Alert.alert('Permission Needed', 'Please allow gallery access to pick travel photos.');
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 0.35, // Optimized compression for fast base64 upload & Groq Vision recognition
        base64: true,
      });

      if (!result.canceled && result.assets?.[0]) {
        const asset = result.assets[0];
        setMoments((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            uri: asset.uri,
            base64: asset.base64,
            note: '',
          },
        ]);
      }
    } catch (e) {
      Alert.alert('Error picking photo', e.message);
    }
  };

  const removePhoto = (id) => setMoments((prev) => prev.filter((m) => m.id !== id));
  const updateNote = (id, text) =>
    setMoments((prev) => prev.map((m) => (m.id === id ? { ...m, note: text } : m)));

  /* ── Generate AI Memory Story ────────────────────────── */
  const generateMemory = async () => {
    if (moments.length < 2) {
      return Alert.alert('Add More Photos', 'Please add at least 2 moments to build a memory.');
    }

    setStep('loading');
    setLoadingText('📸 Analyzing photos with AI Vision...');

    try {
      const timer1 = setTimeout(() => {
        setLoadingText('🧠 Weaving your journey into an evocative story...');
      }, 2500);

      const timer2 = setTimeout(() => {
        setLoadingText('✨ Crafting social captions and hashtags...');
      }, 5000);

      const response = await fetch(`${SERVER_URL}/api/travel-memory-builder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          moments: moments.map((m, idx) => ({
            index: idx,
            user_note: (m.note || '').trim(),
            image_base64: m.base64 ? m.base64 : undefined,
          })),
        }),
      });

      clearTimeout(timer1);
      clearTimeout(timer2);

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || 'Server failed to build memory story.');
      }

      setLoadingText('✨ Finalizing your memory diary...');
      await new Promise((r) => setTimeout(r, 600));

      setFinalMemory(data.data);
      setStep('result');
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
    } catch (err) {
      Alert.alert('Analysis Error', err.message || 'Failed to generate travel story. Please try again.');
      setStep('input');
    }
  };

  /* ── Generate MP4 Video via Creatomate with Polling ──── */
  const generateVideo = async () => {
    if (!finalMemory || videoLoading) return;

    const videoMoments = moments.slice(0, 4);
    if (moments.length > 4) {
      Alert.alert(
        'Video Slideshow Notice',
        'Video creation optimizes your first 4 moments into a cinematic reel. Continue?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Create Video', onPress: () => _doGenerateVideo(videoMoments) },
        ]
      );
    } else {
      _doGenerateVideo(videoMoments);
    }
  };

  const _doGenerateVideo = async (videoMoments) => {
    setVideoLoading(true);
    setShowVideoModal(true);
    setVideoProgressStatus('☁️ Uploading photos (1 of ' + videoMoments.length + ')...');

    try {
      const publicUrls = [];

      for (let i = 0; i < videoMoments.length; i++) {
        setVideoProgressStatus(`☁️ Uploading photo ${i + 1} of ${videoMoments.length}...`);

        const formData = new FormData();
        // Use base64 data URI to prevent native file URI issues across Android/iOS
        formData.append('file', `data:image/jpeg;base64,${videoMoments[i].base64}`);
        formData.append('upload_preset', 'traviox_unsigned');

        const uploadRes = await fetch(CLOUDINARY_URL, {
          method: 'POST',
          body: formData,
        });

        const uploadData = await uploadRes.json();
        if (uploadData.secure_url) {
          publicUrls.push(uploadData.secure_url);
        } else {
          throw new Error(`Failed to upload photo ${i + 1} to Cloudinary`);
        }
      }

      setVideoProgressStatus('🎬 Initiating video reel generation...');

      const captions = (finalMemory.timeline || [])
        .slice(0, videoMoments.length)
        .map((item) => item.social_caption || item.user_note || '');

      const videoRes = await fetch(`${SERVER_URL}/api/generate-video`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrls: publicUrls,
          captions,
        }),
      });

      const videoData = await videoRes.json();
      if (!videoData.success) {
        throw new Error(videoData.error || 'Failed to start video rendering.');
      }

      let finalUrl = videoData.videoUrl;

      // Poll Creatomate render status if rendering in progress
      if (videoData.status !== 'succeeded' && videoData.renderId) {
        setVideoProgressStatus('🎬 Rendering cinematic reel (~10-15s)...');
        const pollStart = Date.now();
        while (Date.now() - pollStart < 45000) {
          await new Promise((resolve) => setTimeout(resolve, 2500));
          try {
            const statusRes = await fetch(`${SERVER_URL}/api/video-status/${videoData.renderId}`);
            const statusData = await statusRes.json();
            if (statusData.status === 'succeeded') {
              finalUrl = statusData.videoUrl || finalUrl;
              break;
            }
            if (statusData.status === 'failed') {
              throw new Error(statusData.errorMessage || 'Video rendering failed on Creatomate.');
            }
          } catch (pollErr) {
            if (pollErr.message.includes('Video rendering failed')) throw pollErr;
          }
        }
      }

      if (!finalUrl) {
        throw new Error('Video URL not received from server.');
      }

      setVideoResultUrl(finalUrl);
      setVideoProgressStatus('🎉 Video Ready!');
      setVideoLoading(false);
    } catch (err) {
      setVideoLoading(false);
      setShowVideoModal(false);
      Alert.alert('Video Error', err.message || 'Failed to generate video.');
    }
  };

  /* ── Share Story as Text ─────────────────────────────── */
  const shareStory = async () => {
    if (!finalMemory) return;
    try {
      const tagsStr = (finalMemory.tags || []).map((t) => `#${t}`).join(' ');
      await Share.share({
        message: `✈️ ${finalMemory.trip_title}\n\n${finalMemory.travel_story}\n\n"${finalMemory.highlight_quote || ''}"\n\n${tagsStr}\n\n#TravioX #TravelMemories`,
      });
    } catch (e) {
      // User dismissed share
    }
  };

  /* ══════════════════════════════════════════════════════
     RENDER — INPUT STEP
  ══════════════════════════════════════════════════════ */
  const renderInput = () => (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
      <FlatList
        data={moments}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <>
            {/* ── Hero Banner ── */}
            <View style={styles.inputHero}>
              <LinearGradient
                colors={['#FFFFFF', '#888888', '#0F0F0F']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.heroBorder}
              >
                <View style={styles.heroCard}>
                  <LinearGradient
                    colors={[T.mint + '20', T.purple + '18', 'transparent']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={StyleSheet.absoluteFill}
                  />
                  <View style={styles.heroCardInner}>
                    <View style={styles.orbitWrap}>
                      <Animated.View style={[styles.orbit, { transform: [{ rotate: spinStr }] }]} />
                      <View style={styles.orbitCore}>
                        <MaterialCommunityIcons name="book-open-page-variant" size={24} color={T.gold} />
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <View style={styles.memBadgeRow}>
                        <Animated.View style={[styles.memBadgeDot, { transform: [{ scale: pulseS }] }]} />
                        <Text style={styles.memBadgeTxt}>  AI MEMORY & VIDEO</Text>
                      </View>
                      <Text style={styles.heroTitle}>Build Your{'\n'}Trip Memory</Text>
                      <Text style={styles.heroSub}>Add photos · AI analyzes scenes · Export MP4 Reel</Text>
                    </View>
                  </View>

                  {/* Feature pills */}
                  <View style={styles.pillRow}>
                    {[
                      { label: '🎬 4 Photos (MP4 Reel)', color: T.green },
                      { label: '⚡ AI Vision Moods', color: T.mint },
                      { label: '📝 Social Captions', color: T.gold },
                    ].map((p) => (
                      <View key={p.label} style={[styles.featurePill, { borderColor: p.color + '40' }]}>
                        <Text style={[styles.featurePillTxt, { color: p.color }]}>{p.label}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </LinearGradient>
            </View>

            {/* ── Add Photo Button ── */}
            <TouchableOpacity
              style={[styles.addPhotoBtn, moments.length >= 6 && { opacity: 0.4 }]}
              onPress={addPhoto}
              activeOpacity={0.8}
              disabled={moments.length >= 6}
            >
              <LinearGradient
                colors={[T.mint + '20', T.border]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.addPhotoGradient}
              >
                <View style={styles.addIconWrap}>
                  <Ionicons name="add" size={20} color={T.mint} />
                </View>
                <Text style={styles.addPhotoText}>Add Moment</Text>
                <View style={styles.countBadge}>
                  <Text style={styles.countBadgeTxt}>{moments.length} / 6</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            {/* ── Helper Note ── */}
            {moments.length > 0 && (
              <View style={styles.infoNote}>
                <Ionicons name="information-circle-outline" size={14} color={T.t2} />
                <Text style={styles.infoNoteTxt}>
                  First 4 photos will be animated into your MP4 video reel.
                </Text>
              </View>
            )}
          </>
        }
        ListFooterComponent={
          moments.length >= 2 ? (
            <TouchableOpacity style={styles.generateBtn} onPress={generateMemory} activeOpacity={0.85}>
              <LinearGradient
                colors={['#FFFFFF', '#C4C4C4']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.generateBtnGrad}
              >
                <MaterialCommunityIcons name="lightning-bolt" size={18} color={T.bg} />
                <Text style={styles.generateBtnText}>Generate Travel Story</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            moments.length === 1 && (
              <View style={styles.promptMore}>
                <Text style={styles.promptMoreTxt}>Add at least 1 more photo to create your story</Text>
              </View>
            )
          )
        }
        renderItem={({ item, index }) => (
          <View style={styles.momentCard}>
            <View style={styles.momentNumBadge}>
              <Text style={styles.momentNumTxt}>{index + 1}</Text>
            </View>
            <Image source={{ uri: item.uri }} style={styles.momentImage} />
            <View style={styles.momentInputWrapper}>
              <View style={styles.momentHeader}>
                <View>
                  <Text style={styles.momentLabel}>Moment #{index + 1}</Text>
                  {index < 4 ? (
                    <View style={styles.videoTagSmall}>
                      <Ionicons name="videocam-outline" size={10} color={T.green} />
                      <Text style={styles.videoTagTxt}>in MP4 video</Text>
                    </View>
                  ) : (
                    <Text style={styles.storyOnlyTag}>story only</Text>
                  )}
                </View>
                <TouchableOpacity onPress={() => removePhoto(item.id)} style={styles.removeBtn}>
                  <Ionicons name="close" size={16} color={T.t2} />
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.momentInput}
                placeholder="What happened here? (e.g. Best sunset over the ghats...)"
                placeholderTextColor={T.t3}
                multiline
                value={item.note}
                onChangeText={(text) => updateNote(item.id, text)}
              />
            </View>
          </View>
        )}
      />
    </KeyboardAvoidingView>
  );

  /* ══════════════════════════════════════════════════════
     RENDER — LOADING STEP
  ══════════════════════════════════════════════════════ */
  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <View style={styles.loadOrbitWrap}>
        <Animated.View style={[styles.loadOrbit, { transform: [{ rotate: spinStr }] }]} />
        <Animated.View
          style={[styles.loadOrbitInner, { transform: [{ rotate: spinStr }], borderColor: T.gold + '60' }]}
        />
        <View style={styles.loadOrbitCore}>
          <Text style={{ fontSize: 28 }}>📖</Text>
        </View>
      </View>
      <Text style={styles.loadingTitle}>Creating Your Memory</Text>
      <Text style={styles.loadingText}>{loadingText}</Text>
      <View style={styles.loadDots}>
        {[0, 1, 2].map((i) => (
          <Animated.View
            key={i}
            style={[
              styles.loadDot,
              {
                opacity: pulse.interpolate({
                  inputRange: [0, 1],
                  outputRange: [i === 0 ? 1 : 0.3, i === 2 ? 1 : 0.3],
                }),
              },
            ]}
          />
        ))}
      </View>
    </View>
  );

  /* ══════════════════════════════════════════════════════
     RENDER — RESULT STEP
  ══════════════════════════════════════════════════════ */
  const renderResult = () => (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
        {/* ── Hero Title Block ── */}
        <View style={styles.resultHero}>
          <LinearGradient
            colors={['#FFFFFF', '#888888', '#0F0F0F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroBorder}
          >
            <View style={[styles.heroCard, { padding: 22 }]}>
              <LinearGradient
                colors={[T.mint + '18', T.purple + '14', 'transparent']}
                style={StyleSheet.absoluteFill}
              />
              <View style={styles.aiBadge}>
                <GlowDot color={T.mint} size={6} pulseAnim={pulseS} />
                <Text style={styles.aiBadgeTxt}>AI MEMORY CURATED · READY</Text>
              </View>
              <Text style={styles.resultTitle}>{finalMemory?.trip_title}</Text>
              <View style={styles.tagRow}>
                {finalMemory?.tags?.map((tag, i) => (
                  <View key={i} style={styles.resultTag}>
                    <Text style={styles.resultTagTxt}>#{tag}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.resultStatsRow}>
                {[
                  { icon: 'images-outline', label: `${moments.length} Moments` },
                  { icon: 'videocam-outline', label: 'Reel Export Ready' },
                ].map((s, i) => (
                  <View key={i} style={styles.resultStat}>
                    <Ionicons name={s.icon} size={13} color={T.t2} />
                    <Text style={styles.resultStatTxt}>{s.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* ── Story Section ── */}
        <View style={styles.storySection}>
          <View style={styles.secRow}>
            <GlowDot color={T.mint} size={6} pulseAnim={pulseS} />
            <Text style={styles.secTitle}> The Travel Story</Text>
          </View>
          <View style={styles.storyCard}>
            <LinearGradient colors={[T.mint + '08', 'transparent']} style={StyleSheet.absoluteFill} />
            <View style={styles.storyTopAccent} />
            <MaterialCommunityIcons name="format-quote-open" size={28} color={T.t3} style={{ marginBottom: 10 }} />
            <Text style={styles.storyText}>{finalMemory?.travel_story}</Text>
            {finalMemory?.highlight_quote ? (
              <View style={styles.highlightQuoteBox}>
                <Text style={styles.highlightQuoteText}>"{finalMemory.highlight_quote}"</Text>
              </View>
            ) : null}
          </View>
        </View>

        {/* ── Moments & Captions Timeline ── */}
        <View style={styles.timelineSection}>
          <View style={styles.secRow}>
            <GlowDot color={T.gold} size={6} pulseAnim={pulseS} />
            <Text style={styles.secTitle}> Moments & AI Captions</Text>
          </View>

          {finalMemory?.timeline?.map((item, index) => (
            <View key={index} style={styles.timelineCard}>
              <View style={styles.timelineNumBadge}>
                <Text style={styles.timelineNumTxt}>{index + 1}</Text>
              </View>
              {index < 4 && (
                <View style={styles.videoChip}>
                  <Ionicons name="videocam-outline" size={10} color={T.green} />
                  <Text style={styles.videoChipTxt}>REEL</Text>
                </View>
              )}
              <Image source={{ uri: moments[index]?.uri }} style={styles.timelineImage} />
              <View style={styles.timelineContent}>
                <View style={styles.moodRow}>
                  <Text style={styles.moodEmoji}>{item.mood_emoji || '✨'}</Text>
                  <View style={styles.moodBadge}>
                    <Text style={styles.moodTxt}>{item.mood || 'Memorable'}</Text>
                  </View>
                </View>
                {item.user_note ? (
                  <View style={styles.noteBox}>
                    <Ionicons name="chatbubble-outline" size={11} color={T.t3} />
                    <Text style={styles.noteTxt}>"{item.user_note}"</Text>
                  </View>
                ) : null}
                <View style={styles.captionBox}>
                  <View style={styles.captionTopRow}>
                    <View style={styles.captionLabelDot} />
                    <Text style={styles.captionLabel}>AI CAPTION & HASHTAGS</Text>
                  </View>
                  <Text style={styles.captionText}>{item.social_caption}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* ── Export & Action Buttons ── */}
        <View style={styles.actionsSection}>
          <View style={styles.secRow}>
            <GlowDot color={T.purple} size={6} pulseAnim={pulseS} />
            <Text style={styles.secTitle}> Export & Share</Text>
          </View>

          {/* Video Button */}
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={generateVideo}
            disabled={videoLoading}
            activeOpacity={0.85}
          >
            <LinearGradient colors={['#131313', '#1A1A1A']} style={styles.actionBtnInner}>
              <View style={[styles.actionIconWrap, { borderColor: '#F1271150' }]}>
                {videoLoading ? (
                  <ActivityIndicator size="small" color="#F12711" />
                ) : (
                  <Ionicons name="videocam-outline" size={20} color="#F12711" />
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.actionBtnTitle}>Generate Cinematic MP4 Reel</Text>
                <Text style={styles.actionBtnSub}>Animated slideshow · Auto-timed · Ready to share</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={T.t3} />
            </LinearGradient>
          </TouchableOpacity>

          {/* Share Story Text Button */}
          <TouchableOpacity style={styles.actionBtn} onPress={shareStory} activeOpacity={0.85}>
            <LinearGradient colors={['#131313', '#1A1A1A']} style={styles.actionBtnInner}>
              <View style={[styles.actionIconWrap, { borderColor: T.mint + '40' }]}>
                <Ionicons name="share-social-outline" size={20} color={T.mint} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.actionBtnTitle}>Share Story & Captions</Text>
                <Text style={styles.actionBtnSub}>Share to Instagram, WhatsApp, Notes</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color={T.t3} />
            </LinearGradient>
          </TouchableOpacity>

          {/* New Trip */}
          <TouchableOpacity
            style={styles.newTripBtn}
            onPress={() => {
              setStep('input');
              setMoments([]);
              setFinalMemory(null);
              setVideoResultUrl(null);
              fadeAnim.setValue(0);
            }}
            activeOpacity={0.7}
          >
            <View style={styles.newTripInner}>
              <Ionicons name="add-circle-outline" size={16} color={T.t3} />
              <Text style={styles.newTripText}>Create New Trip Memory</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ── Video Render Progress / Result Modal ── */}
      <Modal visible={showVideoModal} transparent animationType="fade">
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <LinearGradient colors={[T.card, T.card2]} style={styles.modalContent}>
              {videoLoading ? (
                <>
                  <ActivityIndicator size="large" color={T.gold} style={{ marginBottom: 18 }} />
                  <Text style={styles.modalTitle}>Rendering Video</Text>
                  <Text style={styles.modalSub}>{videoProgressStatus}</Text>
                  <Text style={styles.modalHint}>Please keep the app open...</Text>
                </>
              ) : videoResultUrl ? (
                <>
                  <View style={styles.modalSuccessIconWrap}>
                    <Ionicons name="checkmark-circle" size={48} color={T.green} />
                  </View>
                  <Text style={styles.modalTitle}>Your Travel Reel is Ready! 🎬</Text>
                  <Text style={styles.modalSub}>
                    Rendered with smooth transitions & your AI captions.
                  </Text>

                  <TouchableOpacity
                    style={styles.modalActionPrimary}
                    onPress={() => Linking.openURL(videoResultUrl)}
                  >
                    <Ionicons name="play" size={18} color={T.bg} />
                    <Text style={styles.modalActionPrimaryTxt}>Watch Video</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalActionSecondary}
                    onPress={() =>
                      Share.share({
                        message: `Watch my travel memory reel!\n${videoResultUrl}`,
                      })
                    }
                  >
                    <Ionicons name="share-outline" size={18} color={T.t1} />
                    <Text style={styles.modalActionSecondaryTxt}>Share Video Link</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalCloseBtn}
                    onPress={() => setShowVideoModal(false)}
                  >
                    <Text style={styles.modalCloseTxt}>Close</Text>
                  </TouchableOpacity>
                </>
              ) : null}
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </Animated.View>
  );

  /* ══════════════════════════════════════════════════════
     MAIN SCREEN SHELL
  ══════════════════════════════════════════════════════ */
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor={T.bg} />

      {/* Background blobs */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View style={[StyleSheet.absoluteFill, { backgroundColor: T.bg }]} />
        <Animated.View
          style={[
            styles.blob,
            {
              backgroundColor: T.mint + '08',
              width: 300,
              height: 300,
              top: -80,
              right: -60,
              transform: [{ translateY: floatY }],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.blob,
            {
              backgroundColor: T.gold + '06',
              width: 200,
              height: 200,
              bottom: 200,
              left: -60,
              transform: [{ translateY: floatY }],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.decRing,
            {
              borderColor: T.mint + '10',
              width: 220,
              height: 220,
              borderRadius: 110,
              top: 60,
              right: -80,
              transform: [{ translateY: floatY }],
            },
          ]}
        />
      </View>

      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBackBtn}
          onPress={() => {
            if (step === 'result') {
              setStep('input');
              setMoments([]);
              setFinalMemory(null);
              setVideoResultUrl(null);
              fadeAnim.setValue(0);
            } else {
              navigation.goBack();
            }
          }}
        >
          <Ionicons name="arrow-back" size={20} color={T.t1} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          {step !== 'loading' && (
            <View style={styles.aiBadgeSmall}>
              <GlowDot color={T.mint} size={5} pulseAnim={pulseS} />
              <Text style={styles.aiBadgeSmallTxt}>AI · ACTIVE</Text>
            </View>
          )}
          <Text style={styles.headerTitle}>
            {step === 'input' ? 'Memory Builder' : step === 'loading' ? 'Creating...' : 'Your Travel Story'}
          </Text>
        </View>
        <View style={styles.headerRight}>
          {step === 'input' && moments.length > 0 && (
            <View style={styles.headerCountBadge}>
              <Text style={styles.headerCountTxt}>{moments.length}</Text>
            </View>
          )}
        </View>
      </View>

      {/* ── Gradient underline ── */}
      <LinearGradient
        colors={['#FFFFFF', '#444444', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerBar}
      />

      {step === 'input' ? renderInput() : step === 'loading' ? renderLoading() : renderResult()}
    </SafeAreaView>
  );
}

/* ═══ Styles ═══════════════════════════════════════════════ */
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: T.bg },

  // BG Elements
  blob: { position: 'absolute', borderRadius: 9999 },
  decRing: { position: 'absolute', borderWidth: 1 },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  headerBackBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: T.card,
    borderWidth: 1,
    borderColor: T.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '700', color: T.t1, letterSpacing: -0.3 },
  headerRight: { width: 38, alignItems: 'flex-end' },
  headerCountBadge: {
    backgroundColor: T.card,
    borderWidth: 1,
    borderColor: T.border2,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  headerCountTxt: { fontSize: 12, fontWeight: '700', color: T.t2 },
  headerBar: { height: 2, marginHorizontal: 20, borderRadius: 1, marginBottom: 4 },

  aiBadgeSmall: { flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 3 },
  aiBadgeSmallTxt: { color: T.mint, fontSize: 9, fontWeight: '800', letterSpacing: 2 },

  // List
  listContainer: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 40 },

  // Input Hero
  inputHero: { marginBottom: 20 },
  heroBorder: { padding: 1.5, borderRadius: 22 },
  heroCard: { backgroundColor: T.card, borderRadius: 21, overflow: 'hidden', padding: 18 },
  heroCardInner: { flexDirection: 'row', alignItems: 'flex-start', gap: 14, marginBottom: 14 },

  orbitWrap: { width: 56, height: 56, justifyContent: 'center', alignItems: 'center' },
  orbit: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1.5,
    borderColor: T.gold + '50',
    borderStyle: 'dashed',
  },
  orbitCore: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: T.gold + '15',
    borderWidth: 1,
    borderColor: T.gold + '40',
    justifyContent: 'center',
    alignItems: 'center',
  },

  memBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,217,125,0.1)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,217,125,0.2)',
  },
  memBadgeDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: T.gold },
  memBadgeTxt: { color: T.gold, fontSize: 8, fontWeight: '900', letterSpacing: 1.5 },

  heroTitle: { color: T.t1, fontSize: 20, fontWeight: '800', letterSpacing: -0.5, lineHeight: 26, marginBottom: 6 },
  heroSub: { color: T.t3, fontSize: 12, lineHeight: 18 },

  pillRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  featurePill: { backgroundColor: T.surf, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, borderWidth: 1 },
  featurePillTxt: { fontSize: 11, fontWeight: '600' },

  // Add Button
  addPhotoBtn: { borderRadius: 16, overflow: 'hidden', marginBottom: 14, borderWidth: 1, borderColor: T.border2 },
  addPhotoGradient: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 16, gap: 12 },
  addIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: T.mint + '20',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: T.mint + '30',
  },
  addPhotoText: { flex: 1, fontSize: 15, fontWeight: '600', color: T.t1 },
  countBadge: {
    backgroundColor: T.card2,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: T.border2,
  },
  countBadgeTxt: { fontSize: 13, fontWeight: '700', color: T.t2 },

  // Helper note
  infoNote: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 16, paddingHorizontal: 4 },
  infoNoteTxt: { fontSize: 12, color: T.t2, flex: 1 },
  promptMore: { alignItems: 'center', paddingVertical: 16 },
  promptMoreTxt: { color: T.t3, fontSize: 13 },

  // Moment Card
  momentCard: {
    backgroundColor: T.card,
    borderRadius: 18,
    marginBottom: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: T.border,
    flexDirection: 'row',
    position: 'relative',
  },
  momentNumBadge: {
    position: 'absolute',
    top: 10,
    left: 82,
    zIndex: 2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: T.bg,
    borderWidth: 1,
    borderColor: T.border2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  momentNumTxt: { fontSize: 11, fontWeight: '800', color: T.t1 },
  momentImage: { width: 100, height: 130, backgroundColor: T.surf },
  momentInputWrapper: { flex: 1, padding: 12 },
  momentHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 },
  momentLabel: { fontSize: 13, fontWeight: '700', color: T.t1 },
  videoTagSmall: { flexDirection: 'row', alignItems: 'center', gap: 3, marginTop: 2 },
  videoTagTxt: { fontSize: 10, color: T.green, fontWeight: '600' },
  storyOnlyTag: { fontSize: 10, color: T.t3, marginTop: 2 },
  removeBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: T.surf,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: T.border,
  },
  momentInput: { fontSize: 13, color: T.t1, minHeight: 56, textAlignVertical: 'top', lineHeight: 20 },

  // Generate Button
  generateBtn: { borderRadius: 16, overflow: 'hidden', marginTop: 16, marginBottom: 20 },
  generateBtnGrad: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, paddingVertical: 16 },
  generateBtnText: { fontSize: 16, fontWeight: '800', color: T.bg },

  // Loading Screen
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  loadOrbitWrap: { width: 100, height: 100, justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  loadOrbit: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: T.mint + '30',
    borderStyle: 'dashed',
  },
  loadOrbitInner: {
    position: 'absolute',
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  loadOrbitCore: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: T.card,
    borderWidth: 1,
    borderColor: T.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingTitle: { fontSize: 20, fontWeight: '800', color: T.t1, marginBottom: 10 },
  loadingText: { fontSize: 14, color: T.t2, textAlign: 'center', lineHeight: 22 },
  loadDots: { flexDirection: 'row', gap: 8, marginTop: 20 },
  loadDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: T.mint },

  // Result Section
  resultHero: { paddingHorizontal: 20, paddingTop: 16, marginBottom: 20 },
  aiBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 10 },
  aiBadgeTxt: { color: T.mint, fontSize: 9, fontWeight: '800', letterSpacing: 2 },
  resultTitle: { fontSize: 24, fontWeight: '900', color: T.t1, letterSpacing: -0.5, marginBottom: 14, lineHeight: 30 },
  tagRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 16 },
  resultTag: {
    backgroundColor: T.mint + '12',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: T.mint + '20',
  },
  resultTagTxt: { fontSize: 12, color: T.mintL, fontWeight: '600' },
  resultStatsRow: { flexDirection: 'row', gap: 14 },
  resultStat: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  resultStatTxt: { fontSize: 12, color: T.t2, fontWeight: '500' },

  // Story Card
  storySection: { paddingHorizontal: 20, marginBottom: 24 },
  secRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 14 },
  secTitle: { fontSize: 15, fontWeight: '700', color: T.t1 },
  storyCard: {
    backgroundColor: T.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: T.border,
    padding: 20,
    overflow: 'hidden',
  },
  storyTopAccent: { position: 'absolute', top: 0, left: 0, right: 0, height: 2, backgroundColor: T.mint + '30' },
  storyText: { fontSize: 15, color: T.t2, lineHeight: 28, fontStyle: 'italic' },
  highlightQuoteBox: {
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: T.border2,
  },
  highlightQuoteText: {
    fontSize: 14,
    color: T.gold,
    fontWeight: '700',
    fontStyle: 'italic',
    lineHeight: 22,
  },

  // Timeline
  timelineSection: { paddingHorizontal: 20, marginBottom: 24 },
  timelineCard: {
    backgroundColor: T.card,
    borderRadius: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: T.border,
    overflow: 'hidden',
    position: 'relative',
  },
  timelineNumBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 2,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: T.bg,
    borderWidth: 1,
    borderColor: T.border2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineNumTxt: { fontSize: 11, fontWeight: '800', color: T.t1 },
  videoChip: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: T.green + '40',
  },
  videoChipTxt: { fontSize: 9, fontWeight: '800', color: T.green, letterSpacing: 1 },
  timelineImage: { width: '100%', height: 200, backgroundColor: T.surf },
  timelineContent: { padding: 16 },
  moodRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  moodEmoji: { fontSize: 20 },
  moodBadge: {
    backgroundColor: T.surf,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: T.border2,
  },
  moodTxt: { fontSize: 11, fontWeight: '700', color: T.t2, textTransform: 'uppercase', letterSpacing: 1 },
  noteBox: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'flex-start',
    marginBottom: 12,
    backgroundColor: T.surf,
    padding: 10,
    borderRadius: 10,
  },
  noteTxt: { fontSize: 13, color: T.t3, fontStyle: 'italic', flex: 1, lineHeight: 18 },
  captionBox: { backgroundColor: T.card2, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: T.border2 },
  captionTopRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 6 },
  captionLabelDot: { width: 5, height: 5, borderRadius: 3, backgroundColor: T.mint },
  captionLabel: { fontSize: 10, color: T.t3, fontWeight: '700', letterSpacing: 1.5 },
  captionText: { fontSize: 14, color: T.t1, fontWeight: '600', lineHeight: 22 },

  // Actions
  actionsSection: { paddingHorizontal: 20, marginBottom: 20 },
  actionBtn: { borderRadius: 16, overflow: 'hidden', marginBottom: 12, borderWidth: 1, borderColor: T.border },
  actionBtnInner: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 14 },
  actionIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: T.surf,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnTitle: { fontSize: 15, fontWeight: '700', color: T.t1, marginBottom: 3 },
  actionBtnSub: { fontSize: 12, color: T.t3 },
  newTripBtn: { marginTop: 8, alignItems: 'center' },
  newTripInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: T.border,
    backgroundColor: T.surf,
  },
  newTripText: { fontSize: 14, fontWeight: '600', color: T.t3 },

  // Video Modal
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalCard: { width: '100%', maxWidth: 360, borderRadius: 24, overflow: 'hidden', borderWidth: 1, borderColor: T.border2 },
  modalContent: { padding: 26, alignItems: 'center' },
  modalSuccessIconWrap: { marginBottom: 16 },
  modalTitle: { fontSize: 18, fontWeight: '800', color: T.t1, textAlign: 'center', marginBottom: 8 },
  modalSub: { fontSize: 13, color: T.t2, textAlign: 'center', marginBottom: 20, lineHeight: 20 },
  modalHint: { fontSize: 11, color: T.t3, textAlign: 'center', marginTop: 10 },
  modalActionPrimary: {
    width: '100%',
    backgroundColor: T.mint,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    marginBottom: 10,
  },
  modalActionPrimaryTxt: { color: T.bg, fontSize: 15, fontWeight: '700' },
  modalActionSecondary: {
    width: '100%',
    backgroundColor: T.surf,
    borderWidth: 1,
    borderColor: T.border2,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 13,
    marginBottom: 10,
  },
  modalActionSecondaryTxt: { color: T.t1, fontSize: 14, fontWeight: '600' },
  modalCloseBtn: { paddingVertical: 10 },
  modalCloseTxt: { color: T.t3, fontSize: 13, fontWeight: '600' },
});
