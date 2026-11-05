// // import React, { useState } from "react";

// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TextInput,
// //   TouchableOpacity,
// //   ScrollView,
// //   KeyboardAvoidingView,
// //   Platform,
// //   Alert,
// //   ActivityIndicator,
// // } from "react-native";

// // import { SafeAreaView } from "react-native-safe-area-context";

// // import Ionicons from "@expo/vector-icons/Ionicons";
// // import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";


// // // ======================================================
// // // BACKEND URL
// // // ======================================================

// // // IMPORTANT:
// // // Replace this with your computer's local IP.
// // //
// // // Example:
// // // http://192.168.1.10:3000
// // //
// // // Android emulator:
// // // http://10.0.2.2:3000
// // //
// // // iOS simulator:
// // // http://localhost:3000

// // const API_BASE_URL = "http://10.52.69.30:3000";


// // // ======================================================
// // // SARVAM LANGUAGES
// // // ======================================================

// // const LANGUAGES = [
// //   {
// //     code: "en-IN",
// //     name: "English",
// //     nativeName: "English",
// //   },
// //   {
// //     code: "hi-IN",
// //     name: "Hindi",
// //     nativeName: "हिन्दी",
// //   },
// //   {
// //     code: "mr-IN",
// //     name: "Marathi",
// //     nativeName: "मराठी",
// //   },
// //   {
// //     code: "gu-IN",
// //     name: "Gujarati",
// //     nativeName: "ગુજરાતી",
// //   },
// //   {
// //     code: "bn-IN",
// //     name: "Bengali",
// //     nativeName: "বাংলা",
// //   },
// //   {
// //     code: "ta-IN",
// //     name: "Tamil",
// //     nativeName: "தமிழ்",
// //   },
// //   {
// //     code: "te-IN",
// //     name: "Telugu",
// //     nativeName: "తెలుగు",
// //   },
// //   {
// //     code: "kn-IN",
// //     name: "Kannada",
// //     nativeName: "ಕನ್ನಡ",
// //   },
// //   {
// //     code: "ml-IN",
// //     name: "Malayalam",
// //     nativeName: "മലയാളം",
// //   },
// //   {
// //     code: "pa-IN",
// //     name: "Punjabi",
// //     nativeName: "ਪੰਜਾਬੀ",
// //   },
// //   {
// //     code: "od-IN",
// //     name: "Odia",
// //     nativeName: "ଓଡ଼ିଆ",
// //   },
// //   {
// //     code: "as-IN",
// //     name: "Assamese",
// //     nativeName: "অসমীয়া",
// //   },
// //   {
// //     code: "ur-IN",
// //     name: "Urdu",
// //     nativeName: "اردو",
// //   },
// //   {
// //     code: "ne-IN",
// //     name: "Nepali",
// //     nativeName: "नेपाली",
// //   },
// //   {
// //     code: "kok-IN",
// //     name: "Konkani",
// //     nativeName: "कोंकणी",
// //   },
// //   {
// //     code: "mai-IN",
// //     name: "Maithili",
// //     nativeName: "मैथिली",
// //   },
// //   {
// //     code: "sa-IN",
// //     name: "Sanskrit",
// //     nativeName: "संस्कृतम्",
// //   },
// //   {
// //     code: "mni-IN",
// //     name: "Manipuri",
// //     nativeName: "মৈতৈলোন্",
// //   },
// //   {
// //     code: "brx-IN",
// //     name: "Bodo",
// //     nativeName: "बड़ो",
// //   },
// //   {
// //     code: "sat-IN",
// //     name: "Santali",
// //     nativeName: "ᱥᱟᱱᱛᱟᱞᱤ",
// //   },
// //   {
// //     code: "ks-IN",
// //     name: "Kashmiri",
// //     nativeName: "कॉशुर",
// //   },
// //   {
// //     code: "doi-IN",
// //     name: "Dogri",
// //     nativeName: "डोगरी",
// //   },
// // ];


// // // ======================================================
// // // QUICK TRAVEL PHRASES
// // // ======================================================

// // const QUICK_PHRASES = [
// //   "Where is the nearest hotel?",
// //   "How much does this cost?",
// //   "Where is the railway station?",
// //   "I need help.",
// //   "Please take me to the airport.",
// //   "I don't understand.",
// //   "Can you speak slowly?",
// //   "Where is the bathroom?",
// // ];


// // // ======================================================
// // // COMPONENT
// // // ======================================================

// // export default function TranslateScreen({ navigation }) {
// //   const [sourceLanguage, setSourceLanguage] = useState("en-IN");

// //   const [targetLanguage, setTargetLanguage] = useState("hi-IN");

// //   const [inputText, setInputText] = useState("");

// //   const [translatedText, setTranslatedText] = useState("");

// //   const [loading, setLoading] = useState(false);

// //   const [showSourceLanguages, setShowSourceLanguages] =
// //     useState(false);

// //   const [showTargetLanguages, setShowTargetLanguages] =
// //     useState(false);


// //   // ====================================================
// //   // LANGUAGE NAME
// //   // ====================================================

// //   const getLanguage = (code) => {
// //     return (
// //       LANGUAGES.find((language) => language.code === code) ||
// //       LANGUAGES[0]
// //     );
// //   };


// //   // ====================================================
// //   // TRANSLATE
// //   // ====================================================

// //   const translateText = async () => {
// //     if (!inputText.trim()) {
// //       Alert.alert(
// //         "Enter text",
// //         "Please enter something to translate."
// //       );

// //       return;
// //     }

// //     if (sourceLanguage === targetLanguage) {
// //       setTranslatedText(inputText.trim());
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       setTranslatedText("");

// //       const response = await fetch(
// //         `${API_BASE_URL}/api/translate`,
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type": "application/json",
// //           },

// //           body: JSON.stringify({
// //             text: inputText.trim(),

// //             sourceLanguage: sourceLanguage,

// //             targetLanguage: targetLanguage,
// //           }),
// //         }
// //       );


// //       const data = await response.json();


// //       if (!response.ok) {
// //         throw new Error(
// //           data?.message ||
// //           data?.error ||
// //           "Translation failed"
// //         );
// //       }


// //       const result =
// //         data?.data?.translatedText ||
// //         data?.translatedText ||
// //         data?.translation;


// //       if (!result) {
// //         throw new Error(
// //           "Translation response is empty."
// //         );
// //       }


// //       setTranslatedText(result);

// //     } catch (error) {
// //       console.log(
// //         "TRANSLATION ERROR:",
// //         error
// //       );

// //       Alert.alert(
// //         "Translation Error",
// //         error.message ||
// //         "Unable to translate text."
// //       );

// //     } finally {
// //       setLoading(false);
// //     }
// //   };


// //   // ====================================================
// //   // SWAP LANGUAGES
// //   // ====================================================

// //   const swapLanguages = () => {
// //     const oldSource = sourceLanguage;

// //     setSourceLanguage(targetLanguage);

// //     setTargetLanguage(oldSource);

// //     if (translatedText) {
// //       setInputText(translatedText);

// //       setTranslatedText("");
// //     }
// //   };


// //   // ====================================================
// //   // SELECT PHRASE
// //   // ====================================================

// //   const selectPhrase = (phrase) => {
// //     setInputText(phrase);

// //     setTranslatedText("");
// //   };


// //   // ====================================================
// //   // CLEAR
// //   // ====================================================

// //   const clearText = () => {
// //     setInputText("");

// //     setTranslatedText("");
// //   };


// //   // ====================================================
// //   // COPY-STYLE BUTTON
// //   // ====================================================

// //   const showCopiedMessage = () => {
// //     Alert.alert(
// //       "Translation",
// //       "Use your device's text selection/copy option to copy the translation."
// //     );
// //   };


// //   // ====================================================
// //   // UI
// //   // ====================================================

// //   return (
// //     <SafeAreaView style={styles.safeArea}>

// //       <KeyboardAvoidingView
// //         style={styles.container}
// //         behavior={
// //           Platform.OS === "ios"
// //             ? "padding"
// //             : undefined
// //         }
// //       >

// //         <ScrollView
// //           showsVerticalScrollIndicator={false}
// //           keyboardShouldPersistTaps="handled"
// //         >

// //           {/* ==========================================
// //               HEADER
// //           ========================================== */}

// //           <View style={styles.header}>

// //             <TouchableOpacity
// //               style={styles.backButton}
// //               onPress={() => navigation.goBack()}
// //             >
// //               <Ionicons
// //                 name="arrow-back"
// //                 size={23}
// //                 color="#FFFFFF"
// //               />
// //             </TouchableOpacity>


// //             <View style={styles.headerTitleContainer}>

// //               <Text style={styles.headerTitle}>
// //                 Live Translation
// //               </Text>

// //               <Text style={styles.headerSubtitle}>
// //                 Your travel language assistant
// //               </Text>

// //             </View>


// //             <View style={styles.headerIcon}>

// //               <MaterialCommunityIcons
// //                 name="translate"
// //                 size={24}
// //                 color="#A78BFA"
// //               />

// //             </View>

// //           </View>


// //           {/* ==========================================
// //               LANGUAGE SELECTOR
// //           ========================================== */}

// //           <View style={styles.languageCard}>

// //             {/* SOURCE */}

// //             <View style={styles.languageColumn}>

// //               <Text style={styles.smallLabel}>
// //                 FROM
// //               </Text>

// //               <TouchableOpacity
// //                 style={styles.languageButton}
// //                 onPress={() =>
// //                   setShowSourceLanguages(
// //                     !showSourceLanguages
// //                   )
// //                 }
// //               >

// //                 <View>

// //                   <Text style={styles.languageName}>
// //                     {getLanguage(sourceLanguage).name}
// //                   </Text>

// //                   <Text style={styles.nativeName}>
// //                     {getLanguage(sourceLanguage).nativeName}
// //                   </Text>

// //                 </View>

// //                 <Ionicons
// //                   name={
// //                     showSourceLanguages
// //                       ? "chevron-up"
// //                       : "chevron-down"
// //                   }
// //                   size={18}
// //                   color="#A0A0A0"
// //                 />

// //               </TouchableOpacity>


// //               {showSourceLanguages && (
// //                 <View style={styles.languageList}>

// //                   <ScrollView
// //                     nestedScrollEnabled
// //                     style={{
// //                       maxHeight: 240,
// //                     }}
// //                   >

// //                     {LANGUAGES.map((language) => (

// //                       <TouchableOpacity
// //                         key={language.code}
// //                         style={[
// //                           styles.languageOption,

// //                           sourceLanguage ===
// //                             language.code &&
// //                             styles.selectedLanguage,
// //                         ]}
// //                         onPress={() => {

// //                           setSourceLanguage(
// //                             language.code
// //                           );

// //                           setShowSourceLanguages(
// //                             false
// //                           );

// //                         }}
// //                       >

// //                         <Text
// //                           style={
// //                             styles.optionLanguageName
// //                           }
// //                         >
// //                           {language.name}
// //                         </Text>

// //                         <Text
// //                           style={
// //                             styles.optionNativeName
// //                           }
// //                         >
// //                           {language.nativeName}
// //                         </Text>

// //                       </TouchableOpacity>

// //                     ))}

// //                   </ScrollView>

// //                 </View>
// //               )}

// //             </View>


// //             {/* SWAP */}

// //             <TouchableOpacity
// //               style={styles.swapButton}
// //               onPress={swapLanguages}
// //             >

// //               <Ionicons
// //                 name="swap-horizontal"
// //                 size={22}
// //                 color="#FFFFFF"
// //               />

// //             </TouchableOpacity>


// //             {/* TARGET */}

// //             <View style={styles.languageColumn}>

// //               <Text style={styles.smallLabel}>
// //                 TO
// //               </Text>

// //               <TouchableOpacity
// //                 style={styles.languageButton}
// //                 onPress={() =>
// //                   setShowTargetLanguages(
// //                     !showTargetLanguages
// //                   )
// //                 }
// //               >

// //                 <View>

// //                   <Text style={styles.languageName}>
// //                     {getLanguage(targetLanguage).name}
// //                   </Text>

// //                   <Text style={styles.nativeName}>
// //                     {getLanguage(targetLanguage).nativeName}
// //                   </Text>

// //                 </View>

// //                 <Ionicons
// //                   name={
// //                     showTargetLanguages
// //                       ? "chevron-up"
// //                       : "chevron-down"
// //                   }
// //                   size={18}
// //                   color="#A0A0A0"
// //                 />

// //               </TouchableOpacity>


// //               {showTargetLanguages && (
// //                 <View style={styles.languageList}>

// //                   <ScrollView
// //                     nestedScrollEnabled
// //                     style={{
// //                       maxHeight: 240,
// //                     }}
// //                   >

// //                     {LANGUAGES.map((language) => (

// //                       <TouchableOpacity
// //                         key={language.code}
// //                         style={[
// //                           styles.languageOption,

// //                           targetLanguage ===
// //                             language.code &&
// //                             styles.selectedLanguage,
// //                         ]}
// //                         onPress={() => {

// //                           setTargetLanguage(
// //                             language.code
// //                           );

// //                           setShowTargetLanguages(
// //                             false
// //                           );

// //                         }}
// //                       >

// //                         <Text
// //                           style={
// //                             styles.optionLanguageName
// //                           }
// //                         >
// //                           {language.name}
// //                         </Text>

// //                         <Text
// //                           style={
// //                             styles.optionNativeName
// //                           }
// //                         >
// //                           {language.nativeName}
// //                         </Text>

// //                       </TouchableOpacity>

// //                     ))}

// //                   </ScrollView>

// //                 </View>
// //               )}

// //             </View>

// //           </View>


// //           {/* ==========================================
// //               INPUT
// //           ========================================== */}

// //           <View style={styles.sectionHeader}>

// //             <Text style={styles.sectionTitle}>
// //               Enter text
// //             </Text>

// //             {inputText.length > 0 && (
// //               <TouchableOpacity
// //                 onPress={clearText}
// //               >
// //                 <Text style={styles.clearText}>
// //                   Clear
// //                 </Text>
// //               </TouchableOpacity>
// //             )}

// //           </View>


// //           <View style={styles.textCard}>

// //             <TextInput
// //               value={inputText}
// //               onChangeText={setInputText}
// //               placeholder="Type something to translate..."
// //               placeholderTextColor="#666666"
// //               multiline
// //               textAlignVertical="top"
// //               style={styles.input}
// //             />


// //             <View style={styles.inputBottom}>

// //               <Text style={styles.characterCount}>
// //                 {inputText.length} characters
// //               </Text>

// //             </View>

// //           </View>


// //           {/* ==========================================
// //               TRANSLATE BUTTON
// //           ========================================== */}

// //           <TouchableOpacity
// //             style={[
// //               styles.translateButton,

// //               loading &&
// //                 styles.translateButtonDisabled,
// //             ]}
// //             onPress={translateText}
// //             disabled={loading}
// //           >

// //             {loading ? (
// //               <ActivityIndicator
// //                 size="small"
// //                 color="#FFFFFF"
// //               />
// //             ) : (
// //               <MaterialCommunityIcons
// //                 name="translate"
// //                 size={21}
// //                 color="#FFFFFF"
// //               />
// //             )}

// //             <Text style={styles.translateButtonText}>
// //               {loading
// //                 ? "Translating..."
// //                 : "Translate"}
// //             </Text>

// //           </TouchableOpacity>


// //           {/* ==========================================
// //               RESULT
// //           ========================================== */}

// //           {translatedText ? (

// //             <View style={styles.resultContainer}>

// //               <View style={styles.resultHeader}>

// //                 <View>

// //                   <Text style={styles.resultLabel}>
// //                     TRANSLATION
// //                   </Text>

// //                   <Text style={styles.resultLanguage}>
// //                     {getLanguage(targetLanguage).name}
// //                   </Text>

// //                 </View>


// //                 <TouchableOpacity
// //                   style={styles.resultAction}
// //                   onPress={showCopiedMessage}
// //                 >

// //                   <Ionicons
// //                     name="copy-outline"
// //                     size={19}
// //                     color="#B0B0B0"
// //                   />

// //                 </TouchableOpacity>

// //               </View>


// //               <Text style={styles.resultText}>
// //                 {translatedText}
// //               </Text>

// //             </View>

// //           ) : null}


// //           {/* ==========================================
// //               QUICK PHRASES
// //           ========================================== */}

// //           <View style={styles.quickSection}>

// //             <Text style={styles.sectionTitle}>
// //               Quick travel phrases
// //             </Text>

// //             <Text style={styles.sectionDescription}>
// //               Tap a phrase to translate it instantly.
// //             </Text>


// //             <View style={styles.phraseContainer}>

// //               {QUICK_PHRASES.map(
// //                 (phrase, index) => (

// //                   <TouchableOpacity
// //                     key={index}
// //                     style={styles.phraseButton}
// //                     onPress={() =>
// //                       selectPhrase(phrase)
// //                     }
// //                   >

// //                     <Text
// //                       style={styles.phraseText}
// //                     >
// //                       {phrase}
// //                     </Text>

// //                     <Ionicons
// //                       name="arrow-forward"
// //                       size={15}
// //                       color="#777777"
// //                     />

// //                   </TouchableOpacity>

// //                 )
// //               )}

// //             </View>

// //           </View>


// //           {/* ==========================================
// //               INFO
// //           ========================================== */}

// //           <View style={styles.infoCard}>

// //             <MaterialCommunityIcons
// //               name="earth"
// //               size={24}
// //               color="#A78BFA"
// //             />

// //             <View style={styles.infoContent}>

// //               <Text style={styles.infoTitle}>
// //                 Travel without language barriers
// //               </Text>

// //               <Text style={styles.infoText}>
// //                 Translate useful travel conversations
// //                 between supported Indian languages
// //                 using Sarvam AI.
// //               </Text>

// //             </View>

// //           </View>


// //           <View style={styles.bottomSpace} />

// //         </ScrollView>

// //       </KeyboardAvoidingView>

// //     </SafeAreaView>
// //   );
// // }


// // // ======================================================
// // // STYLES
// // // ======================================================

// // const styles = StyleSheet.create({

// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: "#050505",
// //   },

// //   container: {
// //     flex: 1,
// //     backgroundColor: "#050505",
// //   },


// //   // HEADER

// //   header: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: 18,
// //     paddingTop: 12,
// //     paddingBottom: 18,
// //   },

// //   backButton: {
// //     width: 42,
// //     height: 42,
// //     borderRadius: 14,
// //     backgroundColor: "#131313",
// //     borderWidth: 1,
// //     borderColor: "#242424",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },

// //   headerTitleContainer: {
// //     flex: 1,
// //     marginLeft: 13,
// //   },

// //   headerTitle: {
// //     color: "#FFFFFF",
// //     fontSize: 21,
// //     fontWeight: "800",
// //   },

// //   headerSubtitle: {
// //     color: "#777777",
// //     fontSize: 12,
// //     marginTop: 3,
// //   },

// //   headerIcon: {
// //     width: 42,
// //     height: 42,
// //     borderRadius: 14,
// //     backgroundColor: "#110D1A",
// //     borderWidth: 1,
// //     borderColor: "#302344",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },


// //   // LANGUAGE

// //   languageCard: {
// //     marginHorizontal: 16,
// //     padding: 14,
// //     backgroundColor: "#101010",
// //     borderRadius: 18,
// //     borderWidth: 1,
// //     borderColor: "#242424",
// //     flexDirection: "row",
// //     alignItems: "flex-end",
// //     gap: 8,
// //   },

// //   languageColumn: {
// //     flex: 1,
// //     position: "relative",
// //   },

// //   smallLabel: {
// //     color: "#666666",
// //     fontSize: 10,
// //     fontWeight: "800",
// //     letterSpacing: 1,
// //     marginBottom: 7,
// //   },

// //   languageButton: {
// //     minHeight: 58,
// //     backgroundColor: "#181818",
// //     borderRadius: 13,
// //     borderWidth: 1,
// //     borderColor: "#292929",
// //     paddingHorizontal: 12,
// //     paddingVertical: 9,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },

// //   languageName: {
// //     color: "#FFFFFF",
// //     fontSize: 14,
// //     fontWeight: "700",
// //   },

// //   nativeName: {
// //     color: "#777777",
// //     fontSize: 11,
// //     marginTop: 3,
// //   },

// //   swapButton: {
// //     width: 42,
// //     height: 42,
// //     borderRadius: 13,
// //     backgroundColor: "#242424",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: 8,
// //   },

// //   languageList: {
// //     position: "absolute",
// //     top: 86,
// //     left: 0,
// //     right: 0,
// //     zIndex: 100,
// //     elevation: 20,
// //     backgroundColor: "#181818",
// //     borderRadius: 13,
// //     borderWidth: 1,
// //     borderColor: "#333333",
// //     overflow: "hidden",
// //   },

// //   languageOption: {
// //     paddingHorizontal: 12,
// //     paddingVertical: 11,
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#242424",
// //   },

// //   selectedLanguage: {
// //     backgroundColor: "#24202C",
// //   },

// //   optionLanguageName: {
// //     color: "#FFFFFF",
// //     fontSize: 13,
// //     fontWeight: "600",
// //   },

// //   optionNativeName: {
// //     color: "#777777",
// //     fontSize: 11,
// //     marginTop: 2,
// //   },


// //   // SECTION

// //   sectionHeader: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     marginHorizontal: 18,
// //     marginTop: 25,
// //     marginBottom: 9,
// //   },

// //   sectionTitle: {
// //     color: "#FFFFFF",
// //     fontSize: 16,
// //     fontWeight: "800",
// //   },

// //   clearText: {
// //     color: "#A78BFA",
// //     fontSize: 13,
// //     fontWeight: "600",
// //   },


// //   // INPUT

// //   textCard: {
// //     marginHorizontal: 16,
// //     minHeight: 170,
// //     backgroundColor: "#101010",
// //     borderRadius: 18,
// //     borderWidth: 1,
// //     borderColor: "#242424",
// //     overflow: "hidden",
// //   },

// //   input: {
// //     flex: 1,
// //     minHeight: 135,
// //     color: "#FFFFFF",
// //     fontSize: 16,
// //     lineHeight: 24,
// //     padding: 16,
// //   },

// //   inputBottom: {
// //     paddingHorizontal: 16,
// //     paddingBottom: 12,
// //   },

// //   characterCount: {
// //     color: "#555555",
// //     fontSize: 11,
// //   },


// //   // BUTTON

// //   translateButton: {
// //     marginHorizontal: 16,
// //     marginTop: 13,
// //     height: 54,
// //     borderRadius: 16,
// //     backgroundColor: "#7C5CFC",
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     gap: 9,
// //   },

// //   translateButtonDisabled: {
// //     opacity: 0.65,
// //   },

// //   translateButtonText: {
// //     color: "#FFFFFF",
// //     fontSize: 15,
// //     fontWeight: "800",
// //   },


// //   // RESULT

// //   resultContainer: {
// //     marginHorizontal: 16,
// //     marginTop: 18,
// //     padding: 17,
// //     backgroundColor: "#101010",
// //     borderRadius: 18,
// //     borderWidth: 1,
// //     borderColor: "#302344",
// //   },

// //   resultHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },

// //   resultLabel: {
// //     color: "#A78BFA",
// //     fontSize: 10,
// //     fontWeight: "900",
// //     letterSpacing: 1,
// //   },

// //   resultLanguage: {
// //     color: "#777777",
// //     fontSize: 11,
// //     marginTop: 3,
// //   },

// //   resultAction: {
// //     width: 38,
// //     height: 38,
// //     borderRadius: 11,
// //     backgroundColor: "#191919",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },

// //   resultText: {
// //     color: "#FFFFFF",
// //     fontSize: 19,
// //     lineHeight: 29,
// //     fontWeight: "600",
// //     marginTop: 18,
// //   },


// //   // QUICK PHRASES

// //   quickSection: {
// //     marginHorizontal: 16,
// //     marginTop: 28,
// //   },

// //   sectionDescription: {
// //     color: "#666666",
// //     fontSize: 12,
// //     marginTop: 4,
// //     marginBottom: 12,
// //   },

// //   phraseContainer: {
// //     gap: 8,
// //   },

// //   phraseButton: {
// //     minHeight: 49,
// //     paddingHorizontal: 14,
// //     borderRadius: 13,
// //     backgroundColor: "#101010",
// //     borderWidth: 1,
// //     borderColor: "#222222",
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },

// //   phraseText: {
// //     flex: 1,
// //     color: "#C7C7C7",
// //     fontSize: 13,
// //     marginRight: 10,
// //   },


// //   // INFO

// //   infoCard: {
// //     marginHorizontal: 16,
// //     marginTop: 26,
// //     padding: 16,
// //     backgroundColor: "#0E0C12",
// //     borderRadius: 17,
// //     borderWidth: 1,
// //     borderColor: "#292030",
// //     flexDirection: "row",
// //   },

// //   infoContent: {
// //     flex: 1,
// //     marginLeft: 13,
// //   },

// //   infoTitle: {
// //     color: "#FFFFFF",
// //     fontSize: 13,
// //     fontWeight: "800",
// //   },

// //   infoText: {
// //     color: "#777777",
// //     fontSize: 11,
// //     lineHeight: 17,
// //     marginTop: 5,
// //   },

// //   bottomSpace: {
// //     height: 40,
// //   },

// // });


















// // import React, { useEffect, useState } from "react";

// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TextInput,
// //   TouchableOpacity,
// //   ScrollView,
// //   KeyboardAvoidingView,
// //   Platform,
// //   Alert,
// //   ActivityIndicator,
// // } from "react-native";

// // import { SafeAreaView } from "react-native-safe-area-context";

// // import Ionicons from "@expo/vector-icons/Ionicons";
// // import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// // import { Audio } from "expo-av";
// // import * as FileSystem from "expo-file-system/legacy";


// // // ======================================================
// // // BACKEND
// // // ======================================================

// // const API_BASE_URL = "https://semproject-1a4i.vercel.app";


// // // ======================================================
// // // SARVAM LANGUAGESss
// // // ======================================================

// // const LANGUAGES = [
// //   {
// //     code: "en-IN",
// //     name: "English",
// //     nativeName: "English",
// //   },
// //   {
// //     code: "hi-IN",
// //     name: "Hindi",
// //     nativeName: "हिन्दी",
// //   },
// //   {
// //     code: "mr-IN",
// //     name: "Marathi",
// //     nativeName: "मराठी",
// //   },
// //   {
// //     code: "gu-IN",
// //     name: "Gujarati",
// //     nativeName: "ગુજરાતી",
// //   },
// //   {
// //     code: "bn-IN",
// //     name: "Bengali",
// //     nativeName: "বাংলা",
// //   },
// //   {
// //     code: "ta-IN",
// //     name: "Tamil",
// //     nativeName: "தமிழ்",
// //   },
// //   {
// //     code: "te-IN",
// //     name: "Telugu",
// //     nativeName: "తెలుగు",
// //   },
// //   {
// //     code: "kn-IN",
// //     name: "Kannada",
// //     nativeName: "ಕನ್ನಡ",
// //   },
// //   {
// //     code: "ml-IN",
// //     name: "Malayalam",
// //     nativeName: "മലയാളം",
// //   },
// //   {
// //     code: "pa-IN",
// //     name: "Punjabi",
// //     nativeName: "ਪੰਜਾਬੀ",
// //   },
// //   {
// //     code: "od-IN",
// //     name: "Odia",
// //     nativeName: "ଓଡ଼ିଆ",
// //   },
// //   {
// //     code: "as-IN",
// //     name: "Assamese",
// //     nativeName: "অসমীয়া",
// //   },
// //   {
// //     code: "ur-IN",
// //     name: "Urdu",
// //     nativeName: "اردو",
// //   },
// //   {
// //     code: "ne-IN",
// //     name: "Nepali",
// //     nativeName: "नेपाली",
// //   },
// //   {
// //     code: "kok-IN",
// //     name: "Konkani",
// //     nativeName: "कोंकणी",
// //   },
// //   {
// //     code: "mai-IN",
// //     name: "Maithili",
// //     nativeName: "मैथिली",
// //   },
// //   {
// //     code: "sa-IN",
// //     name: "Sanskrit",
// //     nativeName: "संस्कृतम्",
// //   },
// //   {
// //     code: "mni-IN",
// //     name: "Manipuri",
// //     nativeName: "মৈতৈলোন্",
// //   },
// //   {
// //     code: "brx-IN",
// //     name: "Bodo",
// //     nativeName: "बड़ो",
// //   },
// //   {
// //     code: "sat-IN",
// //     name: "Santali",
// //     nativeName: "ᱥᱟᱱᱛᱟᱞᱤ",
// //   },
// //   {
// //     code: "ks-IN",
// //     name: "Kashmiri",
// //     nativeName: "कॉशुर",
// //   },
// //   {
// //     code: "doi-IN",
// //     name: "Dogri",
// //     nativeName: "डोगरी",
// //   },
// // ];


// // // ======================================================
// // // QUICK TRAVEL PHRASES
// // // ======================================================

// // const QUICK_PHRASES = [
// //   "Where is the nearest hotel?",
// //   "How much does this cost?",
// //   "Where is the railway station?",
// //   "I need help.",
// //   "Please take me to the airport.",
// //   "I don't understand.",
// //   "Can you speak slowly?",
// //   "Where is the bathroom?",
// // ];


// // // ======================================================
// // // SCREEN
// // // ======================================================

// // export default function TranslateScreen({ navigation }) {

// //   // ----------------------------------------------------
// //   // STATES
// //   // ----------------------------------------------------

// //   const [sourceLanguage, setSourceLanguage] =
// //     useState("en-IN");

// //   const [targetLanguage, setTargetLanguage] =
// //     useState("hi-IN");

// //   const [inputText, setInputText] =
// //     useState("");

// //   const [translatedText, setTranslatedText] =
// //     useState("");

// //   const [loading, setLoading] =
// //     useState(false);

// //   const [speaking, setSpeaking] =
// //     useState(false);

// //   const [sound, setSound] =
// //     useState(null);

// //   const [showSourceLanguages, setShowSourceLanguages] =
// //     useState(false);

// //   const [showTargetLanguages, setShowTargetLanguages] =
// //     useState(false);


// //   // ====================================================
// //   // CLEAN AUDIO WHEN SCREEN CLOSES
// //   // ====================================================

// //   useEffect(() => {

// //     return () => {

// //       if (sound) {
// //         sound.unloadAsync().catch(() => {});
// //       }

// //     };

// //   }, [sound]);


// //   // ====================================================
// //   // GET LANGUAGE
// //   // ====================================================

// //   const getLanguage = (code) => {

// //     return (
// //       LANGUAGES.find(
// //         (language) =>
// //           language.code === code
// //       ) || LANGUAGES[0]
// //     );

// //   };


// //   // ====================================================
// //   // TRANSLATE
// //   // ====================================================

// //   const translateText = async () => {

// //     if (!inputText.trim()) {

// //       Alert.alert(
// //         "Enter text",
// //         "Please enter something to translate."
// //       );

// //       return;
// //     }


// //     if (sourceLanguage === targetLanguage) {

// //       setTranslatedText(
// //         inputText.trim()
// //       );

// //       return;
// //     }


// //     try {

// //       setLoading(true);

// //       setTranslatedText("");


// //       const response = await fetch(
// //         `${API_BASE_URL}/api/translate`,
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type":
// //               "application/json",
// //           },

// //           body: JSON.stringify({

// //             text:
// //               inputText.trim(),

// //             sourceLanguage:
// //               sourceLanguage,

// //             targetLanguage:
// //               targetLanguage,

// //           }),
// //         }
// //       );


// //       const data =
// //         await response.json();


// //       if (!response.ok) {

// //         throw new Error(
// //           data?.message ||
// //           data?.error ||
// //           "Translation failed"
// //         );

// //       }


// //       const result =
// //         data?.data?.translatedText ||
// //         data?.translatedText ||
// //         data?.translation;


// //       if (!result) {

// //         throw new Error(
// //           "Translation response is empty."
// //         );

// //       }


// //       setTranslatedText(result);


// //     } catch (error) {

// //       console.log(
// //         "TRANSLATION ERROR:",
// //         error
// //       );


// //       Alert.alert(
// //         "Translation Error",
// //         error.message ||
// //         "Unable to translate text."
// //       );


// //     } finally {

// //       setLoading(false);

// //     }

// //   };


// //   // ====================================================
// //   // SWAP LANGUAGES
// //   // ====================================================

// //   const swapLanguages = () => {

// //     const oldSource =
// //       sourceLanguage;


// //     setSourceLanguage(
// //       targetLanguage
// //     );

// //     setTargetLanguage(
// //       oldSource
// //     );


// //     if (translatedText) {

// //       setInputText(
// //         translatedText
// //       );

// //       setTranslatedText("");

// //     }

// //   };


// //   // ====================================================
// //   // QUICK PHRASE
// //   // ====================================================

// //   const selectPhrase = (phrase) => {

// //     setInputText(phrase);

// //     setTranslatedText("");

// //   };


// //   // ====================================================
// //   // CLEAR
// //   // ====================================================

// //   const clearText = () => {

// //     setInputText("");

// //     setTranslatedText("");

// //   };


// //   // ====================================================
// //   // SPEAK TRANSLATION
// //   // ====================================================

// //   const speakTranslation = async () => {

// //     if (!translatedText?.trim()) {

// //       Alert.alert(
// //         "Nothing to play",
// //         "Translate something first."
// //       );

// //       return;
// //     }


// //     try {

// //       setSpeaking(true);


// //       // Stop old audio

// //       if (sound) {

// //         await sound
// //           .stopAsync()
// //           .catch(() => {});

// //         await sound
// //           .unloadAsync()
// //           .catch(() => {});

// //         setSound(null);

// //       }


// //       // ------------------------------------------------
// //       // CALL EXISTING BACKEND TTS
// //       // ------------------------------------------------

// //       const response = await fetch(
// //         `${API_BASE_URL}/api/text-to-speech`,
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type":
// //               "application/json",
// //           },

// //           body: JSON.stringify({

// //             text:
// //               translatedText.trim(),

// //             languageCode:
// //               targetLanguage,

// //           }),

// //         }
// //       );


// //       const data =
// //         await response.json();


// //       if (!response.ok) {

// //         throw new Error(
// //           data?.message ||
// //           data?.error ||
// //           "Audio generation failed"
// //         );

// //       }


// //       // ------------------------------------------------
// //       // SUPPORT COMMON RESPONSE FORMATS
// //       // ------------------------------------------------

// //       const base64Audio =
// //         data?.data?.audio ||
// //         data?.audio ||
// //         data?.data?.audioBase64 ||
// //         data?.audioBase64;


// //       if (!base64Audio) {

// //         console.log(
// //           "TTS RESPONSE:",
// //           data
// //         );

// //         throw new Error(
// //           "No audio received from server."
// //         );

// //       }


// //       // ------------------------------------------------
// //       // CREATE TEMP AUDIO FILE
// //       // ------------------------------------------------

// //       const fileUri =
// //         `${FileSystem.cacheDirectory}translation_${Date.now()}.wav`;


// //       await FileSystem.writeAsStringAsync(
// //         fileUri,
// //         base64Audio,
// //         {
// //           encoding:
// //             FileSystem.EncodingType.Base64,
// //         }
// //       );


// //       // ------------------------------------------------
// //       // PLAY AUDIO
// //       // ------------------------------------------------

// //       const result =
// //         await Audio.Sound.createAsync(
// //           {
// //             uri: fileUri,
// //           },
// //           {
// //             shouldPlay: true,
// //           }
// //         );


// //       const newSound =
// //         result.sound;


// //       setSound(newSound);


// //       newSound.setOnPlaybackStatusUpdate(
// //         (status) => {

// //           if (
// //             status.isLoaded &&
// //             status.didJustFinish
// //           ) {

// //             setSpeaking(false);

// //           }

// //         }
// //       );


// //     } catch (error) {

// //       console.log(
// //         "TTS ERROR:",
// //         error
// //       );


// //       Alert.alert(
// //         "Audio Error",
// //         error.message ||
// //         "Unable to play translation."
// //       );


// //       setSpeaking(false);

// //     }

// //   };


// //   // ====================================================
// //   // STOP AUDIO
// //   // ====================================================

// //   const stopSpeaking = async () => {

// //     try {

// //       if (sound) {

// //         await sound.stopAsync();

// //         setSpeaking(false);

// //       }

// //     } catch (error) {

// //       console.log(
// //         "STOP AUDIO ERROR:",
// //         error
// //       );

// //       setSpeaking(false);

// //     }

// //   };


// //   // ====================================================
// //   // UI
// //   // ====================================================

// //   return (

// //     <SafeAreaView
// //       style={styles.safeArea}
// //     >

// //       <KeyboardAvoidingView
// //         style={styles.container}
// //         behavior={
// //           Platform.OS === "ios"
// //             ? "padding"
// //             : undefined
// //         }
// //       >

// //         <ScrollView
// //           showsVerticalScrollIndicator={
// //             false
// //           }
// //           keyboardShouldPersistTaps="handled"
// //         >


// //           {/* =========================================
// //               HEADER
// //           ========================================= */}

// //           <View style={styles.header}>

// //             <TouchableOpacity
// //               style={styles.backButton}
// //               onPress={() =>
// //                 navigation.goBack()
// //               }
// //             >

// //               <Ionicons
// //                 name="arrow-back"
// //                 size={23}
// //                 color="#FFFFFF"
// //               />

// //             </TouchableOpacity>


// //             <View
// //               style={
// //                 styles.headerTitleContainer
// //               }
// //             >

// //               <Text
// //                 style={styles.headerTitle}
// //               >
// //                 Live Translation
// //               </Text>


// //               <Text
// //                 style={styles.headerSubtitle}
// //               >
// //                 Your travel language assistant
// //               </Text>

// //             </View>


// //             <View
// //               style={styles.headerIcon}
// //             >

// //               <MaterialCommunityIcons
// //                 name="translate"
// //                 size={24}
// //                 color="#A78BFA"
// //               />

// //             </View>

// //           </View>


// //           {/* =========================================
// //               LANGUAGE SELECTOR
// //           ========================================= */}

// //           <View
// //             style={styles.languageCard}
// //           >


// //             {/* SOURCE */}

// //             <View
// //               style={styles.languageColumn}
// //             >

// //               <Text
// //                 style={styles.smallLabel}
// //               >
// //                 FROM
// //               </Text>


// //               <TouchableOpacity
// //                 style={
// //                   styles.languageButton
// //                 }
// //                 onPress={() => {

// //                   setShowSourceLanguages(
// //                     !showSourceLanguages
// //                   );

// //                   setShowTargetLanguages(
// //                     false
// //                   );

// //                 }}
// //               >

// //                 <View>

// //                   <Text
// //                     style={styles.languageName}
// //                   >
// //                     {
// //                       getLanguage(
// //                         sourceLanguage
// //                       ).name
// //                     }
// //                   </Text>


// //                   <Text
// //                     style={styles.nativeName}
// //                   >
// //                     {
// //                       getLanguage(
// //                         sourceLanguage
// //                       ).nativeName
// //                     }
// //                   </Text>

// //                 </View>


// //                 <Ionicons
// //                   name={
// //                     showSourceLanguages
// //                       ? "chevron-up"
// //                       : "chevron-down"
// //                   }
// //                   size={18}
// //                   color="#A0A0A0"
// //                 />

// //               </TouchableOpacity>


// //               {showSourceLanguages && (

// //                 <View
// //                   style={styles.languageList}
// //                 >

// //                   <ScrollView
// //                     nestedScrollEnabled
// //                     showsVerticalScrollIndicator={
// //                       false
// //                     }
// //                     style={{
// //                       maxHeight: 240,
// //                     }}
// //                   >

// //                     {LANGUAGES.map(
// //                       (language) => (

// //                         <TouchableOpacity
// //                           key={
// //                             language.code
// //                           }
// //                           style={[
// //                             styles.languageOption,

// //                             sourceLanguage ===
// //                               language.code &&
// //                               styles.selectedLanguage,
// //                           ]}
// //                           onPress={() => {

// //                             setSourceLanguage(
// //                               language.code
// //                             );

// //                             setShowSourceLanguages(
// //                               false
// //                             );

// //                           }}
// //                         >

// //                           <Text
// //                             style={
// //                               styles.optionLanguageName
// //                             }
// //                           >
// //                             {
// //                               language.name
// //                             }
// //                           </Text>


// //                           <Text
// //                             style={
// //                               styles.optionNativeName
// //                             }
// //                           >
// //                             {
// //                               language.nativeName
// //                             }
// //                           </Text>

// //                         </TouchableOpacity>

// //                       )
// //                     )}

// //                   </ScrollView>

// //                 </View>

// //               )}

// //             </View>


// //             {/* SWAP */}

// //             <TouchableOpacity
// //               style={styles.swapButton}
// //               onPress={
// //                 swapLanguages
// //               }
// //             >

// //               <Ionicons
// //                 name="swap-horizontal"
// //                 size={22}
// //                 color="#FFFFFF"
// //               />

// //             </TouchableOpacity>


// //             {/* TARGET */}

// //             <View
// //               style={styles.languageColumn}
// //             >

// //               <Text
// //                 style={styles.smallLabel}
// //               >
// //                 TO
// //               </Text>


// //               <TouchableOpacity
// //                 style={
// //                   styles.languageButton
// //                 }
// //                 onPress={() => {

// //                   setShowTargetLanguages(
// //                     !showTargetLanguages
// //                   );

// //                   setShowSourceLanguages(
// //                     false
// //                   );

// //                 }}
// //               >

// //                 <View>

// //                   <Text
// //                     style={styles.languageName}
// //                   >
// //                     {
// //                       getLanguage(
// //                         targetLanguage
// //                       ).name
// //                     }
// //                   </Text>


// //                   <Text
// //                     style={styles.nativeName}
// //                   >
// //                     {
// //                       getLanguage(
// //                         targetLanguage
// //                       ).nativeName
// //                     }
// //                   </Text>

// //                 </View>


// //                 <Ionicons
// //                   name={
// //                     showTargetLanguages
// //                       ? "chevron-up"
// //                       : "chevron-down"
// //                   }
// //                   size={18}
// //                   color="#A0A0A0"
// //                 />

// //               </TouchableOpacity>


// //               {showTargetLanguages && (

// //                 <View
// //                   style={styles.languageList}
// //                 >

// //                   <ScrollView
// //                     nestedScrollEnabled
// //                     showsVerticalScrollIndicator={
// //                       false
// //                     }
// //                     style={{
// //                       maxHeight: 240,
// //                     }}
// //                   >

// //                     {LANGUAGES.map(
// //                       (language) => (

// //                         <TouchableOpacity
// //                           key={
// //                             language.code
// //                           }
// //                           style={[
// //                             styles.languageOption,

// //                             targetLanguage ===
// //                               language.code &&
// //                               styles.selectedLanguage,
// //                           ]}
// //                           onPress={() => {

// //                             setTargetLanguage(
// //                               language.code
// //                             );

// //                             setShowTargetLanguages(
// //                               false
// //                             );

// //                           }}
// //                         >

// //                           <Text
// //                             style={
// //                               styles.optionLanguageName
// //                             }
// //                           >
// //                             {
// //                               language.name
// //                             }
// //                           </Text>


// //                           <Text
// //                             style={
// //                               styles.optionNativeName
// //                             }
// //                           >
// //                             {
// //                               language.nativeName
// //                             }
// //                           </Text>

// //                         </TouchableOpacity>

// //                       )
// //                     )}

// //                   </ScrollView>

// //                 </View>

// //               )}

// //             </View>

// //           </View>


// //           {/* =========================================
// //               INPUT HEADER
// //           ========================================= */}

// //           <View
// //             style={styles.sectionHeader}
// //           >

// //             <Text
// //               style={styles.sectionTitle}
// //             >
// //               Enter text
// //             </Text>


// //             {inputText.length > 0 && (

// //               <TouchableOpacity
// //                 onPress={clearText}
// //               >

// //                 <Text
// //                   style={styles.clearText}
// //                 >
// //                   Clear
// //                 </Text>

// //               </TouchableOpacity>

// //             )}

// //           </View>


// //           {/* =========================================
// //               TEXT INPUT
// //           ========================================= */}

// //           <View
// //             style={styles.textCard}
// //           >

// //             <TextInput
// //               value={inputText}
// //               onChangeText={
// //                 setInputText
// //               }
// //               placeholder={
// //                 "Type something to translate..."
// //               }
// //               placeholderTextColor="#666666"
// //               multiline
// //               textAlignVertical="top"
// //               style={styles.input}
// //             />


// //             <View
// //               style={styles.inputBottom}
// //             >

// //               <Text
// //                 style={
// //                   styles.characterCount
// //                 }
// //               >
// //                 {inputText.length} characters
// //               </Text>

// //             </View>

// //           </View>


// //           {/* =========================================
// //               TRANSLATE BUTTON
// //           ========================================= */}

// //           <TouchableOpacity
// //             style={[
// //               styles.translateButton,

// //               loading &&
// //                 styles.translateButtonDisabled,
// //             ]}
// //             onPress={
// //               translateText
// //             }
// //             disabled={loading}
// //           >

// //             {loading ? (

// //               <ActivityIndicator
// //                 size="small"
// //                 color="#FFFFFF"
// //               />

// //             ) : (

// //               <MaterialCommunityIcons
// //                 name="translate"
// //                 size={21}
// //                 color="#FFFFFF"
// //               />

// //             )}


// //             <Text
// //               style={
// //                 styles.translateButtonText
// //               }
// //             >
// //               {loading
// //                 ? "Translating..."
// //                 : "Translate"}
// //             </Text>

// //           </TouchableOpacity>


// //           {/* =========================================
// //               RESULT
// //           ========================================= */}

// //           {translatedText ? (

// //             <View
// //               style={
// //                 styles.resultContainer
// //               }
// //             >

// //               <View
// //                 style={styles.resultHeader}
// //               >

// //                 <View>

// //                   <Text
// //                     style={
// //                       styles.resultLabel
// //                     }
// //                   >
// //                     TRANSLATION
// //                   </Text>


// //                   <Text
// //                     style={
// //                       styles.resultLanguage
// //                     }
// //                   >
// //                     {
// //                       getLanguage(
// //                         targetLanguage
// //                       ).name
// //                     }
// //                   </Text>

// //                 </View>


// //                 <Ionicons
// //                   name="checkmark-circle"
// //                   size={22}
// //                   color="#A78BFA"
// //                 />

// //               </View>


// //               <Text
// //                 style={styles.resultText}
// //               >
// //                 {translatedText}
// //               </Text>


// //               {/* AUDIO BUTTON */}

// //               <TouchableOpacity
// //                 style={
// //                   styles.audioButton
// //                 }
// //                 onPress={
// //                   speaking
// //                     ? stopSpeaking
// //                     : speakTranslation
// //                 }
// //               >

// //                 <Ionicons
// //                   name={
// //                     speaking
// //                       ? "stop"
// //                       : "volume-high"
// //                   }
// //                   size={20}
// //                   color="#FFFFFF"
// //                 />


// //                 <Text
// //                   style={
// //                     styles.audioButtonText
// //                   }
// //                 >
// //                   {speaking
// //                     ? "Stop"
// //                     : "Listen"}
// //                 </Text>

// //               </TouchableOpacity>

// //             </View>

// //           ) : null}


// //           {/* =========================================
// //               QUICK PHRASES
// //           ========================================= */}

// //           <View
// //             style={styles.quickSection}
// //           >

// //             <Text
// //               style={styles.sectionTitle}
// //             >
// //               Quick travel phrases
// //             </Text>


// //             <Text
// //               style={
// //                 styles.sectionDescription
// //               }
// //             >
// //               Tap a phrase to translate it.
// //             </Text>


// //             <View
// //               style={
// //                 styles.phraseContainer
// //               }
// //             >

// //               {QUICK_PHRASES.map(
// //                 (phrase, index) => (

// //                   <TouchableOpacity
// //                     key={index}
// //                     style={
// //                       styles.phraseButton
// //                     }
// //                     onPress={() =>
// //                       selectPhrase(
// //                         phrase
// //                       )
// //                     }
// //                   >

// //                     <Text
// //                       style={
// //                         styles.phraseText
// //                       }
// //                     >
// //                       {phrase}
// //                     </Text>


// //                     <Ionicons
// //                       name="arrow-forward"
// //                       size={15}
// //                       color="#777777"
// //                     />

// //                   </TouchableOpacity>

// //                 )
// //               )}

// //             </View>

// //           </View>


// //           {/* =========================================
// //               INFO
// //           ========================================= */}

// //           <View
// //             style={styles.infoCard}
// //           >

// //             <MaterialCommunityIcons
// //               name="earth"
// //               size={24}
// //               color="#A78BFA"
// //             />


// //             <View
// //               style={styles.infoContent}
// //             >

// //               <Text
// //                 style={styles.infoTitle}
// //               >
// //                 Travel without language barriers
// //               </Text>


// //               <Text
// //                 style={styles.infoText}
// //               >
// //                 Translate useful travel phrases
// //                 between supported Indian languages
// //                 and listen to the translation.
// //               </Text>

// //             </View>

// //           </View>


// //           <View
// //             style={styles.bottomSpace}
// //           />

// //         </ScrollView>

// //       </KeyboardAvoidingView>

// //     </SafeAreaView>
// //   );
// // }


// // // ======================================================
// // // STYLES
// // // ======================================================

// // const styles = StyleSheet.create({

// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: "#050505",
// //   },

// //   container: {
// //     flex: 1,
// //     backgroundColor: "#050505",
// //   },


// //   // ----------------------------------------------------
// //   // HEADER
// //   // ----------------------------------------------------

// //   header: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     paddingHorizontal: 18,
// //     paddingTop: 12,
// //     paddingBottom: 18,
// //   },

// //   backButton: {
// //     width: 42,
// //     height: 42,
// //     borderRadius: 14,
// //     backgroundColor: "#131313",
// //     borderWidth: 1,
// //     borderColor: "#242424",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },

// //   headerTitleContainer: {
// //     flex: 1,
// //     marginLeft: 13,
// //   },

// //   headerTitle: {
// //     color: "#FFFFFF",
// //     fontSize: 21,
// //     fontWeight: "800",
// //   },

// //   headerSubtitle: {
// //     color: "#777777",
// //     fontSize: 12,
// //     marginTop: 3,
// //   },

// //   headerIcon: {
// //     width: 42,
// //     height: 42,
// //     borderRadius: 14,
// //     backgroundColor: "#110D1A",
// //     borderWidth: 1,
// //     borderColor: "#302344",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },


// //   // ----------------------------------------------------
// //   // LANGUAGE
// //   // ----------------------------------------------------

// //   languageCard: {
// //     marginHorizontal: 16,
// //     padding: 14,
// //     backgroundColor: "#101010",
// //     borderRadius: 18,
// //     borderWidth: 1,
// //     borderColor: "#242424",
// //     flexDirection: "row",
// //     alignItems: "flex-end",
// //     gap: 8,
// //   },

// //   languageColumn: {
// //     flex: 1,
// //     position: "relative",
// //   },

// //   smallLabel: {
// //     color: "#666666",
// //     fontSize: 10,
// //     fontWeight: "800",
// //     letterSpacing: 1,
// //     marginBottom: 7,
// //   },

// //   languageButton: {
// //     minHeight: 58,
// //     backgroundColor: "#181818",
// //     borderRadius: 13,
// //     borderWidth: 1,
// //     borderColor: "#292929",
// //     paddingHorizontal: 12,
// //     paddingVertical: 9,
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },

// //   languageName: {
// //     color: "#FFFFFF",
// //     fontSize: 14,
// //     fontWeight: "700",
// //   },

// //   nativeName: {
// //     color: "#777777",
// //     fontSize: 11,
// //     marginTop: 3,
// //   },

// //   swapButton: {
// //     width: 42,
// //     height: 42,
// //     borderRadius: 13,
// //     backgroundColor: "#242424",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: 8,
// //   },

// //   languageList: {
// //     position: "absolute",
// //     top: 86,
// //     left: 0,
// //     right: 0,
// //     zIndex: 100,
// //     elevation: 20,
// //     backgroundColor: "#181818",
// //     borderRadius: 13,
// //     borderWidth: 1,
// //     borderColor: "#333333",
// //     overflow: "hidden",
// //   },

// //   languageOption: {
// //     paddingHorizontal: 12,
// //     paddingVertical: 11,
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#242424",
// //   },

// //   selectedLanguage: {
// //     backgroundColor: "#24202C",
// //   },

// //   optionLanguageName: {
// //     color: "#FFFFFF",
// //     fontSize: 13,
// //     fontWeight: "600",
// //   },

// //   optionNativeName: {
// //     color: "#777777",
// //     fontSize: 11,
// //     marginTop: 2,
// //   },


// //   // ----------------------------------------------------
// //   // SECTION
// //   // ----------------------------------------------------

// //   sectionHeader: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //     marginHorizontal: 18,
// //     marginTop: 25,
// //     marginBottom: 9,
// //   },

// //   sectionTitle: {
// //     color: "#FFFFFF",
// //     fontSize: 16,
// //     fontWeight: "800",
// //   },

// //   clearText: {
// //     color: "#A78BFA",
// //     fontSize: 13,
// //     fontWeight: "600",
// //   },


// //   // ----------------------------------------------------
// //   // INPUT
// //   // ----------------------------------------------------

// //   textCard: {
// //     marginHorizontal: 16,
// //     minHeight: 170,
// //     backgroundColor: "#101010",
// //     borderRadius: 18,
// //     borderWidth: 1,
// //     borderColor: "#242424",
// //     overflow: "hidden",
// //   },

// //   input: {
// //     minHeight: 135,
// //     color: "#FFFFFF",
// //     fontSize: 16,
// //     lineHeight: 24,
// //     padding: 16,
// //   },

// //   inputBottom: {
// //     paddingHorizontal: 16,
// //     paddingBottom: 12,
// //   },

// //   characterCount: {
// //     color: "#555555",
// //     fontSize: 11,
// //   },


// //   // ----------------------------------------------------
// //   // TRANSLATE
// //   // ----------------------------------------------------

// //   translateButton: {
// //     marginHorizontal: 16,
// //     marginTop: 13,
// //     height: 54,
// //     borderRadius: 16,
// //     backgroundColor: "#7C5CFC",
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     gap: 9,
// //   },

// //   translateButtonDisabled: {
// //     opacity: 0.65,
// //   },

// //   translateButtonText: {
// //     color: "#FFFFFF",
// //     fontSize: 15,
// //     fontWeight: "800",
// //   },


// //   // ----------------------------------------------------
// //   // RESULT
// //   // ----------------------------------------------------

// //   resultContainer: {
// //     marginHorizontal: 16,
// //     marginTop: 18,
// //     padding: 17,
// //     backgroundColor: "#101010",
// //     borderRadius: 18,
// //     borderWidth: 1,
// //     borderColor: "#302344",
// //   },

// //   resultHeader: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //   },

// //   resultLabel: {
// //     color: "#A78BFA",
// //     fontSize: 10,
// //     fontWeight: "900",
// //     letterSpacing: 1,
// //   },

// //   resultLanguage: {
// //     color: "#777777",
// //     fontSize: 11,
// //     marginTop: 3,
// //   },

// //   resultText: {
// //     color: "#FFFFFF",
// //     fontSize: 19,
// //     lineHeight: 29,
// //     fontWeight: "600",
// //     marginTop: 18,
// //   },


// //   // ----------------------------------------------------
// //   // AUDIO
// //   // ----------------------------------------------------

// //   audioButton: {
// //     height: 48,
// //     marginTop: 18,
// //     borderRadius: 14,
// //     backgroundColor: "#7C5CFC",
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     gap: 8,
// //   },

// //   audioButtonText: {
// //     color: "#FFFFFF",
// //     fontSize: 14,
// //     fontWeight: "800",
// //   },


// //   // ----------------------------------------------------
// //   // QUICK PHRASES
// //   // ----------------------------------------------------

// //   quickSection: {
// //     marginHorizontal: 16,
// //     marginTop: 28,
// //   },

// //   sectionDescription: {
// //     color: "#666666",
// //     fontSize: 12,
// //     marginTop: 4,
// //     marginBottom: 12,
// //   },

// //   phraseContainer: {
// //     gap: 8,
// //   },

// //   phraseButton: {
// //     minHeight: 49,
// //     paddingHorizontal: 14,
// //     borderRadius: 13,
// //     backgroundColor: "#101010",
// //     borderWidth: 1,
// //     borderColor: "#222222",
// //     flexDirection: "row",
// //     alignItems: "center",
// //     justifyContent: "space-between",
// //   },

// //   phraseText: {
// //     flex: 1,
// //     color: "#C7C7C7",
// //     fontSize: 13,
// //     marginRight: 10,
// //   },


// //   // ----------------------------------------------------
// //   // INFO
// //   // ----------------------------------------------------

// //   infoCard: {
// //     marginHorizontal: 16,
// //     marginTop: 26,
// //     padding: 16,
// //     backgroundColor: "#0E0C12",
// //     borderRadius: 17,
// //     borderWidth: 1,
// //     borderColor: "#292030",
// //     flexDirection: "row",
// //   },

// //   infoContent: {
// //     flex: 1,
// //     marginLeft: 13,
// //   },

// //   infoTitle: {
// //     color: "#FFFFFF",
// //     fontSize: 13,
// //     fontWeight: "800",
// //   },

// //   infoText: {
// //     color: "#777777",
// //     fontSize: 11,
// //     lineHeight: 17,
// //     marginTop: 5,
// //   },

// //   bottomSpace: {
// //     height: 40,
// //   },

// // });








// import React, { useEffect, useState } from "react";

// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
//   Alert,
//   ActivityIndicator,
// } from "react-native";

// import { SafeAreaView } from "react-native-safe-area-context";

// import Ionicons from "@expo/vector-icons/Ionicons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// import { Audio } from "expo-av";
// import * as FileSystem from "expo-file-system/legacy";

// // ======================================================
// // BACKEND
// // ======================================================

// const API_BASE_URL = "https://semproject-1a4i.vercel.app";

// // ======================================================
// // SARVAM LANGUAGES
// // ======================================================

// const LANGUAGES = [
//   {
//     code: "en-IN",
//     name: "English",
//     nativeName: "English",
//   },
//   {
//     code: "hi-IN",
//     name: "Hindi",
//     nativeName: "हिन्दी",
//   },
//   {
//     code: "mr-IN",
//     name: "Marathi",
//     nativeName: "मराठी",
//   },
//   {
//     code: "gu-IN",
//     name: "Gujarati",
//     nativeName: "ગુજરાતી",
//   },
//   {
//     code: "bn-IN",
//     name: "Bengali",
//     nativeName: "বাংলা",
//   },
//   {
//     code: "ta-IN",
//     name: "Tamil",
//     nativeName: "தமிழ்",
//   },
//   {
//     code: "te-IN",
//     name: "Telugu",
//     nativeName: "తెలుగు",
//   },
//   {
//     code: "kn-IN",
//     name: "Kannada",
//     nativeName: "ಕನ್ನಡ",
//   },
//   {
//     code: "ml-IN",
//     name: "Malayalam",
//     nativeName: "മലയാളം",
//   },
//   {
//     code: "pa-IN",
//     name: "Punjabi",
//     nativeName: "ਪੰਜਾਬੀ",
//   },
//   {
//     code: "od-IN",
//     name: "Odia",
//     nativeName: "ଓଡ଼ିଆ",
//   },
//   {
//     code: "as-IN",
//     name: "Assamese",
//     nativeName: "অসমীয়া",
//   },
//   {
//     code: "ur-IN",
//     name: "Urdu",
//     nativeName: "اردو",
//   },
//   {
//     code: "ne-IN",
//     name: "Nepali",
//     nativeName: "नेपाली",
//   },
//   {
//     code: "kok-IN",
//     name: "Konkani",
//     nativeName: "कोंकणी",
//   },
//   {
//     code: "mai-IN",
//     name: "Maithili",
//     nativeName: "मैथिली",
//   },
//   {
//     code: "sa-IN",
//     name: "Sanskrit",
//     nativeName: "संस्कृतम्",
//   },
//   {
//     code: "mni-IN",
//     name: "Manipuri",
//     nativeName: "মৈতৈলোন্",
//   },
//   {
//     code: "brx-IN",
//     name: "Bodo",
//     nativeName: "बड़ो",
//   },
//   {
//     code: "sat-IN",
//     name: "Santali",
//     nativeName: "ᱥᱟᱱᱛᱟᱞ",
//   },
//   {
//     code: "ks-IN",
//     name: "Kashmiri",
//     nativeName: "कॉशुर",
//   },
//   {
//     code: "doi-IN",
//     name: "Dogri",
//     nativeName: "डोगरी",
//   },
// ];

// // ======================================================
// // SARVAM TTS SUPPORTED LANGUAGES
// // ======================================================

// const TTS_SUPPORTED_LANGUAGES = [
//   "en-IN",
//   "hi-IN",
//   "bn-IN",
//   "ta-IN",
//   "te-IN",
//   "kn-IN",
//   "ml-IN",
//   "mr-IN",
//   "gu-IN",
//   "pa-IN",
//   "od-IN",
// ];

// // ======================================================
// // QUICK TRAVEL PHRASES
// // ======================================================

// const QUICK_PHRASES = [
//   "Where is the nearest hotel?",
//   "How much does this cost?",
//   "Where is the railway station?",
//   "I need help.",
//   "Please take me to the airport.",
//   "I don't understand.",
//   "Can you speak slowly?",
//   "Where is the bathroom?",
// ];

// // ======================================================
// // SCREEN
// // ======================================================

// export default function TranslateScreen({ navigation }) {
//   // ----------------------------------------------------
//   // STATES
//   // ----------------------------------------------------

//   const [sourceLanguage, setSourceLanguage] =
//     useState("en-IN");

//   const [targetLanguage, setTargetLanguage] =
//     useState("hi-IN");

//   const [inputText, setInputText] =
//     useState("");

//   const [translatedText, setTranslatedText] =
//     useState("");

//   const [loading, setLoading] =
//     useState(false);

//   const [speaking, setSpeaking] =
//     useState(false);

//   const [sound, setSound] =
//     useState(null);

//   const [showSourceLanguages, setShowSourceLanguages] =
//     useState(false);

//   const [showTargetLanguages, setShowTargetLanguages] =
//     useState(false);

//   // ====================================================
//   // CLEAN AUDIO
//   // ====================================================

//   useEffect(() => {
//     return () => {
//       if (sound) {
//         sound.unloadAsync().catch(() => {});
//       }
//     };
//   }, [sound]);

//   // ====================================================
//   // GET LANGUAGE
//   // ====================================================

//   const getLanguage = (code) => {
//     return (
//       LANGUAGES.find(
//         (language) =>
//           language.code === code
//       ) || LANGUAGES[0]
//     );
//   };

//   // ====================================================
//   // TRANSLATE
//   // ====================================================

//   const translateText = async () => {
//     if (!inputText.trim()) {
//       Alert.alert(
//         "Enter text",
//         "Please enter something to translate."
//       );
//       return;
//     }

//     if (sourceLanguage === targetLanguage) {
//       setTranslatedText(inputText.trim());
//       return;
//     }

//     try {
//       setLoading(true);
//       setTranslatedText("");

//       console.log(
//         "================================"
//       );

//       console.log(
//         "TRANSLATION REQUEST"
//       );

//       console.log(
//         "URL:",
//         `${API_BASE_URL}/api/translate`
//       );

//       console.log(
//         "TEXT:",
//         inputText.trim()
//       );

//       console.log(
//         "SOURCE:",
//         sourceLanguage
//       );

//       console.log(
//         "TARGET:",
//         targetLanguage
//       );

//       console.log(
//         "================================"
//       );

//       const response = await fetch(
//         `${API_BASE_URL}/api/translate`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",

//             Accept:
//               "application/json",
//           },

//           body: JSON.stringify({
//             text: inputText.trim(),

//             sourceLanguage:
//               sourceLanguage,

//             targetLanguage:
//               targetLanguage,
//           }),
//         }
//       );

//       // =================================================
//       // IMPORTANT
//       // Read response as TEXT first
//       // =================================================

//       const rawResponse =
//         await response.text();

//       console.log(
//         "================================"
//       );

//       console.log(
//         "TRANSLATION STATUS:",
//         response.status
//       );

//       console.log(
//         "TRANSLATION RAW RESPONSE:"
//       );

//       console.log(
//         rawResponse
//       );

//       console.log(
//         "================================"
//       );

//       // =================================================
//       // PARSE JSON SAFELY
//       // =================================================

//       let data;

//       try {
//         data =
//           JSON.parse(rawResponse);
//       } catch (parseError) {
//         throw new Error(
//           `Server returned non-JSON response (${response.status}): ${rawResponse.substring(
//             0,
//             300
//           )}`
//         );
//       }

//       // =================================================
//       // HTTP ERROR
//       // =================================================

//       if (!response.ok) {
//         throw new Error(
//           data?.message ||
//             data?.error ||
//             "Translation failed"
//         );
//       }

//       // =================================================
//       // GET TRANSLATED TEXT
//       // =================================================

//       const result =
//         data?.data?.translatedText ||
//         data?.translatedText ||
//         data?.translation;

//       console.log(
//         "TRANSLATED RESULT:",
//         result
//       );

//       if (!result) {
//         console.log(
//           "FULL TRANSLATION DATA:",
//           data
//         );

//         throw new Error(
//           "Translation response is empty."
//         );
//       }

//       setTranslatedText(result);

//     } catch (error) {
//       console.log(
//         "================================"
//       );

//       console.log(
//         "TRANSLATION ERROR:",
//         error?.message ||
//           error
//       );

//       console.log(
//         "================================"
//       );

//       Alert.alert(
//         "Translation Error",
//         error?.message ||
//           "Unable to translate text."
//       );

//     } finally {
//       setLoading(false);
//     }
//   };

//   // ====================================================
//   // SWAP LANGUAGES
//   // ====================================================

//   const swapLanguages = () => {
//     const oldSource =
//       sourceLanguage;

//     setSourceLanguage(
//       targetLanguage
//     );

//     setTargetLanguage(
//       oldSource
//     );

//     if (translatedText) {
//       setInputText(
//         translatedText
//       );

//       setTranslatedText("");
//     }
//   };

//   // ====================================================
//   // QUICK PHRASE
//   // ====================================================

//   const selectPhrase = (phrase) => {
//     setInputText(phrase);
//     setTranslatedText("");
//   };

//   // ====================================================
//   // CLEAR
//   // ====================================================

//   const clearText = () => {
//     setInputText("");
//     setTranslatedText("");
//   };

//   // ====================================================
//   // SPEAK TRANSLATION
//   // ====================================================

//   const speakTranslation = async () => {
//     if (!translatedText?.trim()) {
//       Alert.alert(
//         "Nothing to play",
//         "Translate something first."
//       );

//       return;
//     }

//     // ==================================================
//     // CHECK TTS LANGUAGE
//     // ==================================================

//     if (
//       !TTS_SUPPORTED_LANGUAGES.includes(
//         targetLanguage
//       )
//     ) {
//       Alert.alert(
//         "Audio unavailable",
//         `${getLanguage(targetLanguage).name} is supported for translation, but audio is not currently supported by the TTS service.`
//       );

//       return;
//     }

//     try {
//       setSpeaking(true);

//       // =================================================
//       // STOP OLD AUDIO
//       // =================================================

//       if (sound) {
//         await sound
//           .stopAsync()
//           .catch(() => {});

//         await sound
//           .unloadAsync()
//           .catch(() => {});

//         setSound(null);
//       }

//       console.log(
//         "================================"
//       );

//       console.log(
//         "TTS REQUEST"
//       );

//       console.log(
//         "URL:",
//         `${API_BASE_URL}/api/text-to-speech`
//       );

//       console.log(
//         "LANGUAGE:",
//         targetLanguage
//       );

//       console.log(
//         "TEXT:",
//         translatedText.trim()
//       );

//       console.log(
//         "================================"
//       );

//       // =================================================
//       // CALL BACKEND TTS
//       // =================================================

//       const response = await fetch(
//         `${API_BASE_URL}/api/text-to-speech`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/json",

//             Accept:
//               "application/json",
//           },

//           body: JSON.stringify({
//             text:
//               translatedText.trim(),

//             languageCode:
//               targetLanguage,
//           }),
//         }
//       );

//       // =================================================
//       // READ RESPONSE SAFELY
//       // =================================================

//       const rawResponse =
//         await response.text();

//       console.log(
//         "TTS STATUS:",
//         response.status
//       );

//       console.log(
//         "TTS RAW RESPONSE:",
//         rawResponse.substring(
//           0,
//           500
//         )
//       );

//       let data;

//       try {
//         data =
//           JSON.parse(rawResponse);
//       } catch (parseError) {
//         throw new Error(
//           `TTS server returned non-JSON response (${response.status}).`
//         );
//       }

//       if (!response.ok) {
//         throw new Error(
//           data?.message ||
//             data?.error ||
//             "Audio generation failed"
//         );
//       }

//       // =================================================
//       // GET BASE64 AUDIO
//       // =================================================

//       const base64Audio =
//         data?.data?.audios?.[0] ||
//         data?.audios?.[0] ||
//         data?.data?.audio ||
//         data?.audio ||
//         data?.data?.audioBase64 ||
//         data?.audioBase64;

//       if (!base64Audio) {
//         console.log(
//           "FULL TTS RESPONSE:",
//           data
//         );

//         throw new Error(
//           "No audio received from server."
//         );
//       }

//       // =================================================
//       // CREATE TEMP AUDIO FILE
//       // =================================================

//       const fileUri =
//         `${FileSystem.cacheDirectory}translation_${Date.now()}.wav`;

//       await FileSystem.writeAsStringAsync(
//         fileUri,

//         base64Audio,

//         {
//           encoding:
//             FileSystem.EncodingType.Base64,
//         }
//       );

//       console.log(
//         "AUDIO FILE:",
//         fileUri
//       );

//       // =================================================
//       // PLAY AUDIO
//       // =================================================

//       const result =
//         await Audio.Sound.createAsync(
//           {
//             uri: fileUri,
//           },

//           {
//             shouldPlay: true,
//           }
//         );

//       const newSound =
//         result.sound;

//       setSound(newSound);

//       // =================================================
//       // PLAYBACK STATUS
//       // =================================================

//       newSound.setOnPlaybackStatusUpdate(
//         (status) => {
//           if (
//             status.isLoaded &&
//             status.didJustFinish
//           ) {
//             setSpeaking(false);
//           }
//         }
//       );

//     } catch (error) {
//       console.log(
//         "================================"
//       );

//       console.log(
//         "TTS ERROR:",
//         error?.message ||
//           error
//       );

//       console.log(
//         "================================"
//       );

//       Alert.alert(
//         "Audio Error",
//         error?.message ||
//           "Unable to play translation."
//       );

//       setSpeaking(false);
//     }
//   };

//   // ====================================================
//   // STOP AUDIO
//   // ====================================================

//   const stopSpeaking = async () => {
//     try {
//       if (sound) {
//         await sound
//           .stopAsync()
//           .catch(() => {});

//         await sound
//           .unloadAsync()
//           .catch(() => {});

//         setSound(null);
//       }

//       setSpeaking(false);

//     } catch (error) {
//       console.log(
//         "STOP AUDIO ERROR:",
//         error
//       );

//       setSpeaking(false);
//     }
//   };

//   // ====================================================
//   // UI
//   // ====================================================

//   return (
//     <SafeAreaView
//       style={styles.safeArea}
//     >
//       <KeyboardAvoidingView
//         style={styles.container}
//         behavior={
//           Platform.OS === "ios"
//             ? "padding"
//             : undefined
//         }
//       >
//         <ScrollView
//           showsVerticalScrollIndicator={
//             false
//           }
//           keyboardShouldPersistTaps="handled"
//         >

//           {/* =========================================
//               HEADER
//           ========================================= */}

//           <View
//             style={styles.header}
//           >
//             <TouchableOpacity
//               style={
//                 styles.backButton
//               }
//               onPress={() =>
//                 navigation.goBack()
//               }
//             >
//               <Ionicons
//                 name="arrow-back"
//                 size={23}
//                 color="#FFFFFF"
//               />
//             </TouchableOpacity>

//             <View
//               style={
//                 styles.headerTitleContainer
//               }
//             >
//               <Text
//                 style={
//                   styles.headerTitle
//                 }
//               >
//                 Live Translation
//               </Text>

//               <Text
//                 style={
//                   styles.headerSubtitle
//                 }
//               >
//                 Your travel language assistant
//               </Text>
//             </View>

//             <View
//               style={
//                 styles.headerIcon
//               }
//             >
//               <MaterialCommunityIcons
//                 name="translate"
//                 size={24}
//                 color="#A78BFA"
//               />
//             </View>
//           </View>

//           {/* =========================================
//               LANGUAGE SELECTOR
//           ========================================= */}

//           <View
//             style={
//               styles.languageCard
//             }
//           >

//             {/* SOURCE */}

//             <View
//               style={
//                 styles.languageColumn
//               }
//             >
//               <Text
//                 style={
//                   styles.smallLabel
//                 }
//               >
//                 FROM
//               </Text>

//               <TouchableOpacity
//                 style={
//                   styles.languageButton
//                 }
//                 onPress={() => {
//                   setShowSourceLanguages(
//                     !showSourceLanguages
//                   );

//                   setShowTargetLanguages(
//                     false
//                   );
//                 }}
//               >
//                 <View>
//                   <Text
//                     style={
//                       styles.languageName
//                     }
//                   >
//                     {
//                       getLanguage(
//                         sourceLanguage
//                       ).name
//                     }
//                   </Text>

//                   <Text
//                     style={
//                       styles.nativeName
//                     }
//                   >
//                     {
//                       getLanguage(
//                         sourceLanguage
//                       ).nativeName
//                     }
//                   </Text>
//                 </View>

//                 <Ionicons
//                   name={
//                     showSourceLanguages
//                       ? "chevron-up"
//                       : "chevron-down"
//                   }
//                   size={18}
//                   color="#A0A0A0"
//                 />
//               </TouchableOpacity>

//               {showSourceLanguages && (
//                 <View
//                   style={
//                     styles.languageList
//                   }
//                 >
//                   <ScrollView
//                     nestedScrollEnabled
//                     showsVerticalScrollIndicator={
//                       false
//                     }
//                     style={{
//                       maxHeight: 240,
//                     }}
//                   >
//                     {LANGUAGES.map(
//                       (language) => (
//                         <TouchableOpacity
//                           key={
//                             language.code
//                           }
//                           style={[
//                             styles.languageOption,

//                             sourceLanguage ===
//                               language.code &&
//                               styles.selectedLanguage,
//                           ]}
//                           onPress={() => {
//                             setSourceLanguage(
//                               language.code
//                             );

//                             setShowSourceLanguages(
//                               false
//                             );
//                           }}
//                         >
//                           <Text
//                             style={
//                               styles.optionLanguageName
//                             }
//                           >
//                             {
//                               language.name
//                             }
//                           </Text>

//                           <Text
//                             style={
//                               styles.optionNativeName
//                             }
//                           >
//                             {
//                               language.nativeName
//                             }
//                           </Text>
//                         </TouchableOpacity>
//                       )
//                     )}
//                   </ScrollView>
//                 </View>
//               )}
//             </View>

//             {/* SWAP */}

//             <TouchableOpacity
//               style={
//                 styles.swapButton
//               }
//               onPress={
//                 swapLanguages
//               }
//             >
//               <Ionicons
//                 name="swap-horizontal"
//                 size={22}
//                 color="#FFFFFF"
//               />
//             </TouchableOpacity>

//             {/* TARGET */}

//             <View
//               style={
//                 styles.languageColumn
//               }
//             >
//               <Text
//                 style={
//                   styles.smallLabel
//                 }
//               >
//                 TO
//               </Text>

//               <TouchableOpacity
//                 style={
//                   styles.languageButton
//                 }
//                 onPress={() => {
//                   setShowTargetLanguages(
//                     !showTargetLanguages
//                   );

//                   setShowSourceLanguages(
//                     false
//                   );
//                 }}
//               >
//                 <View>
//                   <Text
//                     style={
//                       styles.languageName
//                     }
//                   >
//                     {
//                       getLanguage(
//                         targetLanguage
//                       ).name
//                     }
//                   </Text>

//                   <Text
//                     style={
//                       styles.nativeName
//                     }
//                   >
//                     {
//                       getLanguage(
//                         targetLanguage
//                       ).nativeName
//                     }
//                   </Text>
//                 </View>

//                 <Ionicons
//                   name={
//                     showTargetLanguages
//                       ? "chevron-up"
//                       : "chevron-down"
//                   }
//                   size={18}
//                   color="#A0A0A0"
//                 />
//               </TouchableOpacity>

//               {showTargetLanguages && (
//                 <View
//                   style={
//                     styles.languageList
//                   }
//                 >
//                   <ScrollView
//                     nestedScrollEnabled
//                     showsVerticalScrollIndicator={
//                       false
//                     }
//                     style={{
//                       maxHeight: 240,
//                     }}
//                   >
//                     {LANGUAGES.map(
//                       (language) => (
//                         <TouchableOpacity
//                           key={
//                             language.code
//                           }
//                           style={[
//                             styles.languageOption,

//                             targetLanguage ===
//                               language.code &&
//                               styles.selectedLanguage,
//                           ]}
//                           onPress={() => {
//                             setTargetLanguage(
//                               language.code
//                             );

//                             setShowTargetLanguages(
//                               false
//                             );
//                           }}
//                         >
//                           <Text
//                             style={
//                               styles.optionLanguageName
//                             }
//                           >
//                             {
//                               language.name
//                             }
//                           </Text>

//                           <Text
//                             style={
//                               styles.optionNativeName
//                             }
//                           >
//                             {
//                               language.nativeName
//                             }
//                           </Text>
//                         </TouchableOpacity>
//                       )
//                     )}
//                   </ScrollView>
//                 </View>
//               )}
//             </View>
//           </View>

//           {/* =========================================
//               INPUT HEADER
//           ========================================= */}

//           <View
//             style={
//               styles.sectionHeader
//             }
//           >
//             <Text
//               style={
//                 styles.sectionTitle
//               }
//             >
//               Enter text
//             </Text>

//             {inputText.length > 0 && (
//               <TouchableOpacity
//                 onPress={
//                   clearText
//                 }
//               >
//                 <Text
//                   style={
//                     styles.clearText
//                   }
//                 >
//                   Clear
//                 </Text>
//               </TouchableOpacity>
//             )}
//           </View>

//           {/* =========================================
//               TEXT INPUT
//           ========================================= */}

//           <View
//             style={
//               styles.textCard
//             }
//           >
//             <TextInput
//               value={inputText}
//               onChangeText={
//                 setInputText
//               }
//               placeholder="Type something to translate..."
//               placeholderTextColor="#666666"
//               multiline
//               textAlignVertical="top"
//               style={
//                 styles.input
//               }
//             />

//             <View
//               style={
//                 styles.inputBottom
//               }
//             >
//               <Text
//                 style={
//                   styles.characterCount
//                 }
//               >
//                 {inputText.length} characters
//               </Text>
//             </View>
//           </View>

//           {/* =========================================
//               TRANSLATE BUTTON
//           ========================================= */}

//           <TouchableOpacity
//             style={[
//               styles.translateButton,

//               loading &&
//                 styles.translateButtonDisabled,
//             ]}
//             onPress={
//               translateText
//             }
//             disabled={loading}
//           >
//             {loading ? (
//               <ActivityIndicator
//                 size="small"
//                 color="#FFFFFF"
//               />
//             ) : (
//               <MaterialCommunityIcons
//                 name="translate"
//                 size={21}
//                 color="#FFFFFF"
//               />
//             )}

//             <Text
//               style={
//                 styles.translateButtonText
//               }
//             >
//               {loading
//                 ? "Translating..."
//                 : "Translate"}
//             </Text>
//           </TouchableOpacity>

//           {/* =========================================
//               RESULT
//           ========================================= */}

//           {translatedText ? (
//             <View
//               style={
//                 styles.resultContainer
//               }
//             >
//               <View
//                 style={
//                   styles.resultHeader
//                 }
//               >
//                 <View>
//                   <Text
//                     style={
//                       styles.resultLabel
//                     }
//                   >
//                     TRANSLATION
//                   </Text>

//                   <Text
//                     style={
//                       styles.resultLanguage
//                     }
//                   >
//                     {
//                       getLanguage(
//                         targetLanguage
//                       ).name
//                     }
//                   </Text>
//                 </View>

//                 <Ionicons
//                   name="checkmark-circle"
//                   size={22}
//                   color="#A78BFA"
//                 />
//               </View>

//               <Text
//                 style={
//                   styles.resultText
//                 }
//               >
//                 {translatedText}
//               </Text>

//               {/* AUDIO BUTTON */}

//               <TouchableOpacity
//                 style={
//                   styles.audioButton
//                 }
//                 onPress={
//                   speaking
//                     ? stopSpeaking
//                     : speakTranslation
//                 }
//               >
//                 <Ionicons
//                   name={
//                     speaking
//                       ? "stop"
//                       : "volume-high"
//                   }
//                   size={20}
//                   color="#FFFFFF"
//                 />

//                 <Text
//                   style={
//                     styles.audioButtonText
//                   }
//                 >
//                   {speaking
//                     ? "Stop"
//                     : "Listen"}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           ) : null}

//           {/* =========================================
//               QUICK PHRASES
//           ========================================= */}

//           <View
//             style={
//               styles.quickSection
//             }
//           >
//             <Text
//               style={
//                 styles.sectionTitle
//               }
//             >
//               Quick travel phrases
//             </Text>

//             <Text
//               style={
//                 styles.sectionDescription
//               }
//             >
//               Tap a phrase to translate it.
//             </Text>

//             <View
//               style={
//                 styles.phraseContainer
//               }
//             >
//               {QUICK_PHRASES.map(
//                 (phrase, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={
//                       styles.phraseButton
//                     }
//                     onPress={() =>
//                       selectPhrase(
//                         phrase
//                       )
//                     }
//                   >
//                     <Text
//                       style={
//                         styles.phraseText
//                       }
//                     >
//                       {phrase}
//                     </Text>

//                     <Ionicons
//                       name="arrow-forward"
//                       size={15}
//                       color="#777777"
//                     />
//                   </TouchableOpacity>
//                 )
//               )}
//             </View>
//           </View>

//           {/* =========================================
//               INFO
//           ========================================= */}

//           <View
//             style={
//               styles.infoCard
//             }
//           >
//             <MaterialCommunityIcons
//               name="earth"
//               size={24}
//               color="#A78BFA"
//             />

//             <View
//               style={
//                 styles.infoContent
//               }
//             >
//               <Text
//                 style={
//                   styles.infoTitle
//                 }
//               >
//                 Travel without language barriers
//               </Text>

//               <Text
//                 style={
//                   styles.infoText
//                 }
//               >
//                 Translate useful travel phrases
//                 between supported Indian languages
//                 and listen to the translation.
//               </Text>
//             </View>
//           </View>

//           <View
//             style={
//               styles.bottomSpace
//             }
//           />
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// // ======================================================
// // STYLES
// // ======================================================

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#050505",
//   },

//   container: {
//     flex: 1,
//     backgroundColor: "#050505",
//   },

//   // ----------------------------------------------------
//   // HEADER
//   // ----------------------------------------------------

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 18,
//     paddingTop: 12,
//     paddingBottom: 18,
//   },

//   backButton: {
//     width: 42,
//     height: 42,
//     borderRadius: 14,
//     backgroundColor: "#131313",
//     borderWidth: 1,
//     borderColor: "#242424",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   headerTitleContainer: {
//     flex: 1,
//     marginLeft: 13,
//   },

//   headerTitle: {
//     color: "#FFFFFF",
//     fontSize: 21,
//     fontWeight: "800",
//   },

//   headerSubtitle: {
//     color: "#777777",
//     fontSize: 12,
//     marginTop: 3,
//   },

//   headerIcon: {
//     width: 42,
//     height: 42,
//     borderRadius: 14,
//     backgroundColor: "#110D1A",
//     borderWidth: 1,
//     borderColor: "#302344",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   // ----------------------------------------------------
//   // LANGUAGE
//   // ----------------------------------------------------

//   languageCard: {
//     marginHorizontal: 16,
//     padding: 14,
//     backgroundColor: "#101010",
//     borderRadius: 18,
//     borderWidth: 1,
//     borderColor: "#242424",
//     flexDirection: "row",
//     alignItems: "flex-end",
//     gap: 8,
//   },

//   languageColumn: {
//     flex: 1,
//     position: "relative",
//   },

//   smallLabel: {
//     color: "#666666",
//     fontSize: 10,
//     fontWeight: "800",
//     letterSpacing: 1,
//     marginBottom: 7,
//   },

//   languageButton: {
//     minHeight: 58,
//     backgroundColor: "#181818",
//     borderRadius: 13,
//     borderWidth: 1,
//     borderColor: "#292929",
//     paddingHorizontal: 12,
//     paddingVertical: 9,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },

//   languageName: {
//     color: "#FFFFFF",
//     fontSize: 14,
//     fontWeight: "700",
//   },

//   nativeName: {
//     color: "#777777",
//     fontSize: 11,
//     marginTop: 3,
//   },

//   swapButton: {
//     width: 42,
//     height: 42,
//     borderRadius: 13,
//     backgroundColor: "#242424",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 8,
//   },

//   languageList: {
//     position: "absolute",
//     top: 86,
//     left: 0,
//     right: 0,
//     zIndex: 100,
//     elevation: 20,
//     backgroundColor: "#181818",
//     borderRadius: 13,
//     borderWidth: 1,
//     borderColor: "#333333",
//     overflow: "hidden",
//   },

//   languageOption: {
//     paddingHorizontal: 12,
//     paddingVertical: 11,
//     borderBottomWidth: 1,
//     borderBottomColor: "#242424",
//   },

//   selectedLanguage: {
//     backgroundColor: "#24202C",
//   },

//   optionLanguageName: {
//     color: "#FFFFFF",
//     fontSize: 13,
//     fontWeight: "600",
//   },

//   optionNativeName: {
//     color: "#777777",
//     fontSize: 11,
//     marginTop: 2,
//   },

//   // ----------------------------------------------------
//   // SECTION
//   // ----------------------------------------------------

//   sectionHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginHorizontal: 18,
//     marginTop: 25,
//     marginBottom: 9,
//   },

//   sectionTitle: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "800",
//   },

//   clearText: {
//     color: "#A78BFA",
//     fontSize: 13,
//     fontWeight: "600",
//   },

//   // ----------------------------------------------------
//   // INPUT
//   // ----------------------------------------------------

//   textCard: {
//     marginHorizontal: 16,
//     minHeight: 170,
//     backgroundColor: "#101010",
//     borderRadius: 18,
//     borderWidth: 1,
//     borderColor: "#242424",
//     overflow: "hidden",
//   },

//   input: {
//     minHeight: 135,
//     color: "#FFFFFF",
//     fontSize: 16,
//     lineHeight: 24,
//     padding: 16,
//   },

//   inputBottom: {
//     paddingHorizontal: 16,
//     paddingBottom: 12,
//   },

//   characterCount: {
//     color: "#555555",
//     fontSize: 11,
//   },

//   // ----------------------------------------------------
//   // TRANSLATE
//   // ----------------------------------------------------

//   translateButton: {
//     marginHorizontal: 16,
//     marginTop: 13,
//     height: 54,
//     borderRadius: 16,
//     backgroundColor: "#7C5CFC",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 9,
//   },

//   translateButtonDisabled: {
//     opacity: 0.65,
//   },

//   translateButtonText: {
//     color: "#FFFFFF",
//     fontSize: 15,
//     fontWeight: "800",
//   },

//   // ----------------------------------------------------
//   // RESULT
//   // ----------------------------------------------------

//   resultContainer: {
//     marginHorizontal: 16,
//     marginTop: 18,
//     padding: 17,
//     backgroundColor: "#101010",
//     borderRadius: 18,
//     borderWidth: 1,
//     borderColor: "#302344",
//   },

//   resultHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   resultLabel: {
//     color: "#A78BFA",
//     fontSize: 10,
//     fontWeight: "900",
//     letterSpacing: 1,
//   },

//   resultLanguage: {
//     color: "#777777",
//     fontSize: 11,
//     marginTop: 3,
//   },

//   resultText: {
//     color: "#FFFFFF",
//     fontSize: 19,
//     lineHeight: 29,
//     fontWeight: "600",
//     marginTop: 18,
//   },

//   // ----------------------------------------------------
//   // AUDIO
//   // ----------------------------------------------------

//   audioButton: {
//     height: 48,
//     marginTop: 18,
//     borderRadius: 14,
//     backgroundColor: "#7C5CFC",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 8,
//   },

//   audioButtonText: {
//     color: "#FFFFFF",
//     fontSize: 14,
//     fontWeight: "800",
//   },

//   // ----------------------------------------------------
//   // QUICK PHRASES
//   // ----------------------------------------------------

//   quickSection: {
//     marginHorizontal: 16,
//     marginTop: 28,
//   },

//   sectionDescription: {
//     color: "#666666",
//     fontSize: 12,
//     marginTop: 4,
//     marginBottom: 12,
//   },

//   phraseContainer: {
//     gap: 8,
//   },

//   phraseButton: {
//     minHeight: 49,
//     paddingHorizontal: 14,
//     borderRadius: 13,
//     backgroundColor: "#101010",
//     borderWidth: 1,
//     borderColor: "#222222",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },

//   phraseText: {
//     flex: 1,
//     color: "#C7C7C7",
//     fontSize: 13,
//     marginRight: 10,
//   },

//   // ----------------------------------------------------
//   // INFO
//   // ----------------------------------------------------

//   infoCard: {
//     marginHorizontal: 16,
//     marginTop: 26,
//     padding: 16,
//     backgroundColor: "#0E0C12",
//     borderRadius: 17,
//     borderWidth: 1,
//     borderColor: "#292030",
//     flexDirection: "row",
//   },

//   infoContent: {
//     flex: 1,
//     marginLeft: 13,
//   },

//   infoTitle: {
//     color: "#FFFFFF",
//     fontSize: 13,
//     fontWeight: "800",
//   },

//   infoText: {
//     color: "#777777",
//     fontSize: 11,
//     lineHeight: 17,
//     marginTop: 5,
//   },

//   bottomSpace: {
//     height: 40,
//   },
// });










import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system/legacy";

// ======================================================
// BACKEND
// ======================================================

const API_BASE_URL = "https://semproject-1a4i.vercel.app";

// ======================================================
// SARVAM LANGUAGES
// ======================================================

const LANGUAGES = [
  {
    code: "en-IN",
    name: "English",
    nativeName: "English",
  },
  {
    code: "hi-IN",
    name: "Hindi",
    nativeName: "हिन्दी",
  },
  {
    code: "mr-IN",
    name: "Marathi",
    nativeName: "मराठी",
  },
  {
    code: "gu-IN",
    name: "Gujarati",
    nativeName: "ગુજરાતી",
  },
  {
    code: "bn-IN",
    name: "Bengali",
    nativeName: "বাংলা",
  },
  {
    code: "ta-IN",
    name: "Tamil",
    nativeName: "தமிழ்",
  },
  {
    code: "te-IN",
    name: "Telugu",
    nativeName: "తెలుగు",
  },
  {
    code: "kn-IN",
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
  },
  {
    code: "ml-IN",
    name: "Malayalam",
    nativeName: "മലയാളം",
  },
  {
    code: "pa-IN",
    name: "Punjabi",
    nativeName: "ਪੰਜਾਬੀ",
  },
  {
    code: "od-IN",
    name: "Odia",
    nativeName: "ଓଡ଼ିଆ",
  },
  {
    code: "as-IN",
    name: "Assamese",
    nativeName: "অসমীয়া",
  },
  {
    code: "ur-IN",
    name: "Urdu",
    nativeName: "اردو",
  },
  {
    code: "ne-IN",
    name: "Nepali",
    nativeName: "नेपाली",
  },
  {
    code: "kok-IN",
    name: "Konkani",
    nativeName: "कोंकणी",
  },
  {
    code: "mai-IN",
    name: "Maithili",
    nativeName: "मैथिली",
  },
  {
    code: "sa-IN",
    name: "Sanskrit",
    nativeName: "संस्कृतम्",
  },
  {
    code: "mni-IN",
    name: "Manipuri",
    nativeName: "মৈতৈলোন্",
  },
  {
    code: "brx-IN",
    name: "Bodo",
    nativeName: "बड़ो",
  },
  {
    code: "sat-IN",
    name: "Santali",
    nativeName: "ᱥᱟᱱᱛᱟᱞ",
  },
  {
    code: "ks-IN",
    name: "Kashmiri",
    nativeName: "कॉशुर",
  },
  {
    code: "doi-IN",
    name: "Dogri",
    nativeName: "डोगरी",
  },
];

// ======================================================
// SARVAM TTS SUPPORTED LANGUAGES
// ======================================================

const TTS_SUPPORTED_LANGUAGES = [
  "en-IN",
  "hi-IN",
  "bn-IN",
  "ta-IN",
  "te-IN",
  "kn-IN",
  "ml-IN",
  "mr-IN",
  "gu-IN",
  "pa-IN",
  "od-IN",
];

// ======================================================
// QUICK TRAVEL PHRASES
// ======================================================

const QUICK_PHRASES = [
  "Where is the nearest hotel?",
  "How much does this cost?",
  "Where is the railway station?",
  "I need help.",
  "Please take me to the airport.",
  "I don't understand.",
  "Can you speak slowly?",
  "Where is the bathroom?",
];

// ======================================================
// SCREEN
// ======================================================

export default function TranslateScreen({ navigation }) {
  // ----------------------------------------------------
  // STATES
  // ----------------------------------------------------

  const [sourceLanguage, setSourceLanguage] =
    useState("en-IN");

  const [targetLanguage, setTargetLanguage] =
    useState("hi-IN");

  const [inputText, setInputText] =
    useState("");

  const [translatedText, setTranslatedText] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [speaking, setSpeaking] =
    useState(false);

  const [sound, setSound] =
    useState(null);

  const [showSourceLanguages, setShowSourceLanguages] =
    useState(false);

  const [showTargetLanguages, setShowTargetLanguages] =
    useState(false);

  // ====================================================
  // CLEAN AUDIO
  // ====================================================

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync().catch(() => {});
      }
    };
  }, [sound]);

  // ====================================================
  // GET LANGUAGE
  // ====================================================

  const getLanguage = (code) => {
    return (
      LANGUAGES.find(
        (language) =>
          language.code === code
      ) || LANGUAGES[0]
    );
  };

  // ====================================================
  // TRANSLATE
  // ====================================================

  const translateText = async () => {
    if (!inputText.trim()) {
      Alert.alert(
        "Enter text",
        "Please enter something to translate."
      );
      return;
    }

    if (sourceLanguage === targetLanguage) {
      setTranslatedText(inputText.trim());
      return;
    }

    try {
      setLoading(true);
      setTranslatedText("");

      console.log(
        "================================"
      );

      console.log(
        "TRANSLATION REQUEST"
      );

      console.log(
        "URL:",
        `${API_BASE_URL}/api/translate`
      );

      console.log(
        "TEXT:",
        inputText.trim()
      );

      console.log(
        "SOURCE:",
        sourceLanguage
      );

      console.log(
        "TARGET:",
        targetLanguage
      );

      console.log(
        "================================"
      );

      const response = await fetch(
        `${API_BASE_URL}/api/translate`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Accept:
              "application/json",
          },

          body: JSON.stringify({
            text: inputText.trim(),

            sourceLanguage:
              sourceLanguage,

            targetLanguage:
              targetLanguage,
          }),
        }
      );

      // =================================================
      // IMPORTANT
      // Read response as TEXT first
      // =================================================

      const rawResponse =
        await response.text();

      console.log(
        "================================"
      );

      console.log(
        "TRANSLATION STATUS:",
        response.status
      );

      console.log(
        "TRANSLATION RAW RESPONSE:"
      );

      console.log(
        rawResponse
      );

      console.log(
        "================================"
      );

      // =================================================
      // PARSE JSON SAFELY
      // =================================================

      let data;

      try {
        data =
          JSON.parse(rawResponse);
      } catch (parseError) {
        throw new Error(
          `Server returned non-JSON response (${response.status}): ${rawResponse.substring(
            0,
            300
          )}`
        );
      }

      // =================================================
      // HTTP ERROR
      // =================================================

      if (!response.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            "Translation failed"
        );
      }

      // =================================================
      // GET TRANSLATED TEXT
      // =================================================

      const result =
        data?.data?.translatedText ||
        data?.translatedText ||
        data?.translation;

      console.log(
        "TRANSLATED RESULT:",
        result
      );

      if (!result) {
        console.log(
          "FULL TRANSLATION DATA:",
          data
        );

        throw new Error(
          "Translation response is empty."
        );
      }

      setTranslatedText(result);

    } catch (error) {
      console.log(
        "================================"
      );

      console.log(
        "TRANSLATION ERROR:",
        error?.message ||
          error
      );

      console.log(
        "================================"
      );

      Alert.alert(
        "Translation Error",
        error?.message ||
          "Unable to translate text."
      );

    } finally {
      setLoading(false);
    }
  };

  // ====================================================
  // SWAP LANGUAGES
  // ====================================================

  const swapLanguages = () => {
    const oldSource =
      sourceLanguage;

    setSourceLanguage(
      targetLanguage
    );

    setTargetLanguage(
      oldSource
    );

    if (translatedText) {
      setInputText(
        translatedText
      );

      setTranslatedText("");
    }
  };

  // ====================================================
  // QUICK PHRASE
  // ====================================================

  const selectPhrase = (phrase) => {
    setInputText(phrase);
    setTranslatedText("");
  };

  // ====================================================
  // CLEAR
  // ====================================================

  const clearText = () => {
    setInputText("");
    setTranslatedText("");
  };

  // ====================================================
  // SPEAK TRANSLATION
  // ====================================================

  const speakTranslation = async () => {
    if (!translatedText?.trim()) {
      Alert.alert(
        "Nothing to play",
        "Translate something first."
      );

      return;
    }

    // ==================================================
    // CHECK TTS LANGUAGE
    // ==================================================

    if (
      !TTS_SUPPORTED_LANGUAGES.includes(
        targetLanguage
      )
    ) {
      Alert.alert(
        "Audio unavailable",
        `${getLanguage(targetLanguage).name} is supported for translation, but audio is not currently supported by the TTS service.`
      );

      return;
    }

    try {
      setSpeaking(true);

      // =================================================
      // STOP OLD AUDIO
      // =================================================

      if (sound) {
        await sound
          .stopAsync()
          .catch(() => {});

        await sound
          .unloadAsync()
          .catch(() => {});

        setSound(null);
      }

      console.log(
        "================================"
      );

      console.log(
        "TTS REQUEST"
      );

      console.log(
        "URL:",
        `${API_BASE_URL}/api/text-to-speech`
      );

      console.log(
        "LANGUAGE:",
        targetLanguage
      );

      console.log(
        "TEXT:",
        translatedText.trim()
      );

      console.log(
        "================================"
      );

      // =================================================
      // CALL BACKEND TTS
      // =================================================

      const response = await fetch(
        `${API_BASE_URL}/api/text-to-speech`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Accept:
              "application/json",
          },

          body: JSON.stringify({
            text:
              translatedText.trim(),

            languageCode:
              targetLanguage,
          }),
        }
      );

      // =================================================
      // READ RESPONSE SAFELY
      // =================================================

      const rawResponse =
        await response.text();

      console.log(
        "TTS STATUS:",
        response.status
      );

      console.log(
        "TTS RAW RESPONSE:",
        rawResponse.substring(
          0,
          500
        )
      );

      let data;

      try {
        data =
          JSON.parse(rawResponse);
      } catch (parseError) {
        throw new Error(
          `TTS server returned non-JSON response (${response.status}).`
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.message ||
            data?.error ||
            "Audio generation failed"
        );
      }

      // =================================================
      // GET BASE64 AUDIO
      // =================================================

      const base64Audio =
        data?.data?.audios?.[0] ||
        data?.audios?.[0] ||
        data?.data?.audio ||
        data?.audio ||
        data?.data?.audioBase64 ||
        data?.audioBase64;

      if (!base64Audio) {
        console.log(
          "FULL TTS RESPONSE:",
          data
        );

        throw new Error(
          "No audio received from server."
        );
      }

      // =================================================
      // CREATE TEMP AUDIO FILE
      // =================================================

      const fileUri =
        `${FileSystem.cacheDirectory}translation_${Date.now()}.wav`;

      await FileSystem.writeAsStringAsync(
        fileUri,

        base64Audio,

        {
          encoding:
            FileSystem.EncodingType.Base64,
        }
      );

      console.log(
        "AUDIO FILE:",
        fileUri
      );

      // =================================================
      // PLAY AUDIO
      // =================================================

      const result =
        await Audio.Sound.createAsync(
          {
            uri: fileUri,
          },

          {
            shouldPlay: true,
          }
        );

      const newSound =
        result.sound;

      setSound(newSound);

      // =================================================
      // PLAYBACK STATUS
      // =================================================

      newSound.setOnPlaybackStatusUpdate(
        (status) => {
          if (
            status.isLoaded &&
            status.didJustFinish
          ) {
            setSpeaking(false);
          }
        }
      );

    } catch (error) {
      console.log(
        "================================"
      );

      console.log(
        "TTS ERROR:",
        error?.message ||
          error
      );

      console.log(
        "================================"
      );

      Alert.alert(
        "Audio Error",
        error?.message ||
          "Unable to play translation."
      );

      setSpeaking(false);
    }
  };

  // ====================================================
  // STOP AUDIO
  // ====================================================

  const stopSpeaking = async () => {
    try {
      if (sound) {
        await sound
          .stopAsync()
          .catch(() => {});

        await sound
          .unloadAsync()
          .catch(() => {});

        setSound(null);
      }

      setSpeaking(false);

    } catch (error) {
      console.log(
        "STOP AUDIO ERROR:",
        error
      );

      setSpeaking(false);
    }
  };

  // ====================================================
  // UI
  // ====================================================

  return (
    <SafeAreaView
      style={styles.safeArea}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={
          Platform.OS === "ios"
            ? "padding"
            : undefined
        }
      >
        <ScrollView
          showsVerticalScrollIndicator={
            false
          }
          keyboardShouldPersistTaps="handled"
        >

          {/* =========================================
              HEADER
          ========================================= */}

          <View
            style={styles.header}
          >
            <TouchableOpacity
              style={
                styles.backButton
              }
              onPress={() =>
                navigation.goBack()
              }
            >
              <Ionicons
                name="arrow-back"
                size={23}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <View
              style={
                styles.headerTitleContainer
              }
            >
              <Text
                style={
                  styles.headerTitle
                }
              >
                Live Translation
              </Text>

              <Text
                style={
                  styles.headerSubtitle
                }
              >
                Your travel language assistant
              </Text>
            </View>

            <View
              style={
                styles.headerIcon
              }
            >
              <MaterialCommunityIcons
                name="translate"
                size={24}
                color="#A78BFA"
              />
            </View>
          </View>

          {/* =========================================
              LANGUAGE SELECTOR
          ========================================= */}

          <View
            style={
              styles.languageCard
            }
          >

            {/* SOURCE */}

            <View
              style={
                styles.languageColumn
              }
            >
              <Text
                style={
                  styles.smallLabel
                }
              >
                FROM
              </Text>

              <TouchableOpacity
                style={
                  styles.languageButton
                }
                onPress={() => {
                  setShowSourceLanguages(
                    !showSourceLanguages
                  );

                  setShowTargetLanguages(
                    false
                  );
                }}
              >
                <View>
                  <Text
                    style={
                      styles.languageName
                    }
                  >
                    {
                      getLanguage(
                        sourceLanguage
                      ).name
                    }
                  </Text>

                  <Text
                    style={
                      styles.nativeName
                    }
                  >
                    {
                      getLanguage(
                        sourceLanguage
                      ).nativeName
                    }
                  </Text>
                </View>

                <Ionicons
                  name={
                    showSourceLanguages
                      ? "chevron-up"
                      : "chevron-down"
                  }
                  size={18}
                  color="#A0A0A0"
                />
              </TouchableOpacity>

              {showSourceLanguages && (
                <View
                  style={
                    styles.languageList
                  }
                >
                  <ScrollView
                    nestedScrollEnabled
                    showsVerticalScrollIndicator={
                      false
                    }
                    style={{
                      maxHeight: 240,
                    }}
                  >
                    {LANGUAGES.map(
                      (language) => (
                        <TouchableOpacity
                          key={
                            language.code
                          }
                          style={[
                            styles.languageOption,

                            sourceLanguage ===
                              language.code &&
                              styles.selectedLanguage,
                          ]}
                          onPress={() => {
                            setSourceLanguage(
                              language.code
                            );

                            setShowSourceLanguages(
                              false
                            );
                          }}
                        >
                          <Text
                            style={
                              styles.optionLanguageName
                            }
                          >
                            {
                              language.name
                            }
                          </Text>

                          <Text
                            style={
                              styles.optionNativeName
                            }
                          >
                            {
                              language.nativeName
                            }
                          </Text>
                        </TouchableOpacity>
                      )
                    )}
                  </ScrollView>
                </View>
              )}
            </View>

            {/* SWAP */}

            <TouchableOpacity
              style={
                styles.swapButton
              }
              onPress={
                swapLanguages
              }
            >
              <Ionicons
                name="swap-horizontal"
                size={22}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            {/* TARGET */}

            <View
              style={
                styles.languageColumn
              }
            >
              <Text
                style={
                  styles.smallLabel
                }
              >
                TO
              </Text>

              <TouchableOpacity
                style={
                  styles.languageButton
                }
                onPress={() => {
                  setShowTargetLanguages(
                    !showTargetLanguages
                  );

                  setShowSourceLanguages(
                    false
                  );
                }}
              >
                <View>
                  <Text
                    style={
                      styles.languageName
                    }
                  >
                    {
                      getLanguage(
                        targetLanguage
                      ).name
                    }
                  </Text>

                  <Text
                    style={
                      styles.nativeName
                    }
                  >
                    {
                      getLanguage(
                        targetLanguage
                      ).nativeName
                    }
                  </Text>
                </View>

                <Ionicons
                  name={
                    showTargetLanguages
                      ? "chevron-up"
                      : "chevron-down"
                  }
                  size={18}
                  color="#A0A0A0"
                />
              </TouchableOpacity>

              {showTargetLanguages && (
                <View
                  style={
                    styles.languageList
                  }
                >
                  <ScrollView
                    nestedScrollEnabled
                    showsVerticalScrollIndicator={
                      false
                    }
                    style={{
                      maxHeight: 240,
                    }}
                  >
                    {LANGUAGES.map(
                      (language) => (
                        <TouchableOpacity
                          key={
                            language.code
                          }
                          style={[
                            styles.languageOption,

                            targetLanguage ===
                              language.code &&
                              styles.selectedLanguage,
                          ]}
                          onPress={() => {
                            setTargetLanguage(
                              language.code
                            );

                            setShowTargetLanguages(
                              false
                            );
                          }}
                        >
                          <Text
                            style={
                              styles.optionLanguageName
                            }
                          >
                            {
                              language.name
                            }
                          </Text>

                          <Text
                            style={
                              styles.optionNativeName
                            }
                          >
                            {
                              language.nativeName
                            }
                          </Text>
                        </TouchableOpacity>
                      )
                    )}
                  </ScrollView>
                </View>
              )}
            </View>
          </View>

          {/* =========================================
              INPUT HEADER
          ========================================= */}

          <View
            style={
              styles.sectionHeader
            }
          >
            <Text
              style={
                styles.sectionTitle
              }
            >
              Enter text
            </Text>

            {inputText.length > 0 && (
              <TouchableOpacity
                onPress={
                  clearText
                }
              >
                <Text
                  style={
                    styles.clearText
                  }
                >
                  Clear
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {/* =========================================
              TEXT INPUT
          ========================================= */}

          <View
            style={
              styles.textCard
            }
          >
            <TextInput
              value={inputText}
              onChangeText={
                setInputText
              }
              placeholder="Type something to translate..."
              placeholderTextColor="#666666"
              multiline
              textAlignVertical="top"
              style={
                styles.input
              }
            />

            <View
              style={
                styles.inputBottom
              }
            >
              <Text
                style={
                  styles.characterCount
                }
              >
                {inputText.length} characters
              </Text>
            </View>
          </View>

          {/* =========================================
              TRANSLATE BUTTON
          ========================================= */}

          <TouchableOpacity
            style={[
              styles.translateButton,

              loading &&
                styles.translateButtonDisabled,
            ]}
            onPress={
              translateText
            }
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator
                size="small"
                color="#FFFFFF"
              />
            ) : (
              <MaterialCommunityIcons
                name="translate"
                size={21}
                color="#FFFFFF"
              />
            )}

            <Text
              style={
                styles.translateButtonText
              }
            >
              {loading
                ? "Translating..."
                : "Translate"}
            </Text>
          </TouchableOpacity>

          {/* =========================================
              RESULT
          ========================================= */}

          {translatedText ? (
            <View
              style={
                styles.resultContainer
              }
            >
              <View
                style={
                  styles.resultHeader
                }
              >
                <View>
                  <Text
                    style={
                      styles.resultLabel
                    }
                  >
                    TRANSLATION
                  </Text>

                  <Text
                    style={
                      styles.resultLanguage
                    }
                  >
                    {
                      getLanguage(
                        targetLanguage
                      ).name
                    }
                  </Text>
                </View>

                <Ionicons
                  name="checkmark-circle"
                  size={22}
                  color="#A78BFA"
                />
              </View>

              <Text
                style={
                  styles.resultText
                }
              >
                {translatedText}
              </Text>

              {/* AUDIO BUTTON */}

              <TouchableOpacity
                style={
                  styles.audioButton
                }
                onPress={
                  speaking
                    ? stopSpeaking
                    : speakTranslation
                }
              >
                <Ionicons
                  name={
                    speaking
                      ? "stop"
                      : "volume-high"
                  }
                  size={20}
                  color="#FFFFFF"
                />

                <Text
                  style={
                    styles.audioButtonText
                  }
                >
                  {speaking
                    ? "Stop"
                    : "Listen"}
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}

          {/* =========================================
              QUICK PHRASES
          ========================================= */}

          <View
            style={
              styles.quickSection
            }
          >
            <Text
              style={
                styles.sectionTitle
              }
            >
              Quick travel phrases
            </Text>

            <Text
              style={
                styles.sectionDescription
              }
            >
              Tap a phrase to translate it.
            </Text>

            <View
              style={
                styles.phraseContainer
              }
            >
              {QUICK_PHRASES.map(
                (phrase, index) => (
                  <TouchableOpacity
                    key={index}
                    style={
                      styles.phraseButton
                    }
                    onPress={() =>
                      selectPhrase(
                        phrase
                      )
                    }
                  >
                    <Text
                      style={
                        styles.phraseText
                      }
                    >
                      {phrase}
                    </Text>

                    <Ionicons
                      name="arrow-forward"
                      size={15}
                      color="#777777"
                    />
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>

          {/* =========================================
              INFO
          ========================================= */}

          <View
            style={
              styles.infoCard
            }
          >
            <MaterialCommunityIcons
              name="earth"
              size={24}
              color="#A78BFA"
            />

            <View
              style={
                styles.infoContent
              }
            >
              <Text
                style={
                  styles.infoTitle
                }
              >
                Travel without language barriers
              </Text>

              <Text
                style={
                  styles.infoText
                }
              >
                Translate useful travel phrases
                between supported Indian languages
                and listen to the translation.
              </Text>
            </View>
          </View>

          <View
            style={
              styles.bottomSpace
            }
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// ======================================================
// STYLES
// ======================================================

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#050505",
  },

  container: {
    flex: 1,
    backgroundColor: "#050505",
  },

  // ----------------------------------------------------
  // HEADER
  // ----------------------------------------------------

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 18,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#131313",
    borderWidth: 1,
    borderColor: "#242424",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitleContainer: {
    flex: 1,
    marginLeft: 13,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "800",
  },

  headerSubtitle: {
    color: "#777777",
    fontSize: 12,
    marginTop: 3,
  },

  headerIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#110D1A",
    borderWidth: 1,
    borderColor: "#302344",
    alignItems: "center",
    justifyContent: "center",
  },

  // ----------------------------------------------------
  // LANGUAGE
  // ----------------------------------------------------

  languageCard: {
    marginHorizontal: 16,
    padding: 14,
    backgroundColor: "#101010",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#242424",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },

  languageColumn: {
    flex: 1,
    position: "relative",
  },

  smallLabel: {
    color: "#666666",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 7,
  },

  languageButton: {
    minHeight: 58,
    backgroundColor: "#181818",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#292929",
    paddingHorizontal: 12,
    paddingVertical: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  languageName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  nativeName: {
    color: "#777777",
    fontSize: 11,
    marginTop: 3,
  },

  swapButton: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#242424",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  languageList: {
    position: "absolute",
    top: 86,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 20,
    backgroundColor: "#181818",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#333333",
    overflow: "hidden",
  },

  languageOption: {
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: "#242424",
  },

  selectedLanguage: {
    backgroundColor: "#24202C",
  },

  optionLanguageName: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },

  optionNativeName: {
    color: "#777777",
    fontSize: 11,
    marginTop: 2,
  },

  // ----------------------------------------------------
  // SECTION
  // ----------------------------------------------------

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginTop: 25,
    marginBottom: 9,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  clearText: {
    color: "#A78BFA",
    fontSize: 13,
    fontWeight: "600",
  },

  // ----------------------------------------------------
  // INPUT
  // ----------------------------------------------------

  textCard: {
    marginHorizontal: 16,
    minHeight: 170,
    backgroundColor: "#101010",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#242424",
    overflow: "hidden",
  },

  input: {
    minHeight: 135,
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 24,
    padding: 16,
  },

  inputBottom: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },

  characterCount: {
    color: "#555555",
    fontSize: 11,
  },

  // ----------------------------------------------------
  // TRANSLATE
  // ----------------------------------------------------

  translateButton: {
    marginHorizontal: 16,
    marginTop: 13,
    height: 54,
    borderRadius: 16,
    backgroundColor: "#7C5CFC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },

  translateButtonDisabled: {
    opacity: 0.65,
  },

  translateButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  // ----------------------------------------------------
  // RESULT
  // ----------------------------------------------------

  resultContainer: {
    marginHorizontal: 16,
    marginTop: 18,
    padding: 17,
    backgroundColor: "#101010",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#302344",
  },

  resultHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  resultLabel: {
    color: "#A78BFA",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },

  resultLanguage: {
    color: "#777777",
    fontSize: 11,
    marginTop: 3,
  },

  resultText: {
    color: "#FFFFFF",
    fontSize: 19,
    lineHeight: 29,
    fontWeight: "600",
    marginTop: 18,
  },

  // ----------------------------------------------------
  // AUDIO
  // ----------------------------------------------------

  audioButton: {
    height: 48,
    marginTop: 18,
    borderRadius: 14,
    backgroundColor: "#7C5CFC",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  audioButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  // ----------------------------------------------------
  // QUICK PHRASES
  // ----------------------------------------------------

  quickSection: {
    marginHorizontal: 16,
    marginTop: 28,
  },

  sectionDescription: {
    color: "#666666",
    fontSize: 12,
    marginTop: 4,
    marginBottom: 12,
  },

  phraseContainer: {
    gap: 8,
  },

  phraseButton: {
    minHeight: 49,
    paddingHorizontal: 14,
    borderRadius: 13,
    backgroundColor: "#101010",
    borderWidth: 1,
    borderColor: "#222222",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  phraseText: {
    flex: 1,
    color: "#C7C7C7",
    fontSize: 13,
    marginRight: 10,
  },

  // ----------------------------------------------------
  // INFO
  // ----------------------------------------------------

  infoCard: {
    marginHorizontal: 16,
    marginTop: 26,
    padding: 16,
    backgroundColor: "#0E0C12",
    borderRadius: 17,
    borderWidth: 1,
    borderColor: "#292030",
    flexDirection: "row",
  },

  infoContent: {
    flex: 1,
    marginLeft: 13,
  },

  infoTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  infoText: {
    color: "#777777",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 5,
  },

  bottomSpace: {
    height: 40,
  },
});