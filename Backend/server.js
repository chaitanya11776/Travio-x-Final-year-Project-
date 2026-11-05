// // // // // // require("dotenv").config();
// // // // // // const express = require("express");
// // // // // // const cors = require("cors");
// // // // // // const axios = require("axios");
// // // // // // const Groq = require("groq-sdk");

// // // // // // const app = express();
// // // // // // const PORT = process.env.PORT || 3000;

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🔑  API KEYS — Loaded from process.env (.env or Vercel Environment Variables)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // const GROQ_API_KEY = process.env.GROQ_API_KEY;
// // // // // // const SERPAPI_KEY = process.env.SERPAPI_KEY;
// // // // // // const RAPID_API_KEY = process.env.RAPID_API_KEY;
// // // // // // const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
// // // // // // const SARVAM_API_KEY = process.env.SARVAM_API_KEY;
// // // // // // const CREATOMATE_API_KEY = process.env.CREATOMATE_API_KEY;
// // // // // // const CREATOMATE_TEMPLATE_ID = process.env.CREATOMATE_TEMPLATE_ID;
// // // // // // const GEOAPIFY_KEY = process.env.GEOAPIFY_KEY;

// // // // // // // Log key availability without exiting process
// // // // // // // const REQUIRED_KEYS = [
// // // // // //   "GROQ_API_KEY",
// // // // // //   "SERPAPI_KEY",
// // // // // //   "RAPID_API_KEY",
// // // // // //   "UNSPLASH_ACCESS_KEY",
// // // // // //   "SARVAM_API_KEY",
// // // // // //   "CREATOMATE_API_KEY",
// // // // // //   "GEOAPIFY_KEY",
// // // // // // ];

// // // // // // const missingKeys = REQUIRED_KEYS.filter((k) => !process.env[k]);
// // // // // // if (missingKeys.length > 0) {
// // // // // //   console.warn(`⚠️ Warning: Missing environment variables: ${missingKeys.join(", ")}`);
// // // // // //   console.warn("Add these in Vercel Project Settings -> Environment Variables for full AI features.");
// // // // // // } else {
// // // // // //   console.log("✅ All required environment variables loaded.");
// // // // // // }

// // // // // // const groq = new Groq({ apiKey: GROQ_API_KEY || "dummy_key" });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // ⚙️  MIDDLEWARE
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.use(cors());
// // // // // // app.use(express.json({ limit: "50mb" }));
// // // // // // app.use(express.urlencoded({ limit: "50mb", extended: true }));
// // // // // // app.use(express.static("public"));

// // // // // // app.use((req, _res, next) => {
// // // // // //   console.log(`📥 ${req.method} ${req.path}`);
// // // // // //   next();
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🛠️  HELPERS
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // const getFormattedDate = (daysFromNow) => {
// // // // // //   const d = new Date();
// // // // // //   d.setDate(d.getDate() + daysFromNow);
// // // // // //   return d.toISOString().split("T")[0];
// // // // // // };

// // // // // // const handleError = (res, statusCode, message, details = null) => {
// // // // // //   console.error(`❌ Error (${statusCode}): ${message}`, details || "");
// // // // // //   res.status(statusCode).json({
// // // // // //     success: false,
// // // // // //     error: message,
// // // // // //     ...(details ? { details } : {}),
// // // // // //   });
// // // // // // };

// // // // // // const parseNumeric = (val, fallback = 0) => {
// // // // // //   if (typeof val === "number" && !isNaN(val)) return val;
// // // // // //   if (!val) return fallback;
// // // // // //   const cleaned = String(val).replace(/[^0-9.-]+/g, "");
// // // // // //   const num = parseFloat(cleaned);
// // // // // //   return isNaN(num) ? fallback : num;
// // // // // // };

// // // // // // const normalizeToString = (val) => {
// // // // // //   if (!val) return "";
// // // // // //   if (typeof val === "string") return val;
// // // // // //   if (Array.isArray(val)) return val.join(", ");
// // // // // //   if (typeof val === "object") {
// // // // // //     if (val.dishes)
// // // // // //       return Array.isArray(val.dishes) ? val.dishes.join(", ") : String(val.dishes);
// // // // // //     return Object.values(val).join(", ");
// // // // // //   }
// // // // // //   return String(val);
// // // // // // };

// // // // // // const sanitizeDestinationInfo = (info) => ({
// // // // // //   history: normalizeToString(info.history),
// // // // // //   bestTime: normalizeToString(info.bestTime),
// // // // // //   food: normalizeToString(info.food),
// // // // // //   culture: normalizeToString(info.culture),
// // // // // //   hiddenGem: normalizeToString(info.hiddenGem),
// // // // // //   summary: normalizeToString(info.summary),
// // // // // // });

// // // // // // const splitIntoChunks = (text, maxLen = 490) => {
// // // // // //   const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// // // // // //   const chunks = [];
// // // // // //   let current = "";
// // // // // //   for (const sentence of sentences) {
// // // // // //     if ((current + sentence).length <= maxLen) {
// // // // // //       current += sentence;
// // // // // //     } else {
// // // // // //       if (current.trim()) chunks.push(current.trim());
// // // // // //       if (sentence.length > maxLen) {
// // // // // //         const words = sentence.split(" ");
// // // // // //         let wordChunk = "";
// // // // // //         for (const word of words) {
// // // // // //           if ((wordChunk + " " + word).length <= maxLen) {
// // // // // //             wordChunk += (wordChunk ? " " : "") + word;
// // // // // //           } else {
// // // // // //             if (wordChunk) chunks.push(wordChunk.trim());
// // // // // //             wordChunk = word;
// // // // // //           }
// // // // // //         }
// // // // // //         current = wordChunk;
// // // // // //       } else {
// // // // // //         current = sentence;
// // // // // //       }
// // // // // //     }
// // // // // //   }
// // // // // //   if (current.trim()) chunks.push(current.trim());
// // // // // //   return chunks.filter(Boolean);
// // // // // // };

// // // // // // const translateText = async (text, targetLang) => {
// // // // // //   if (targetLang === "en-IN" || !text || !SARVAM_API_KEY) return text;
// // // // // //   try {
// // // // // //     const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// // // // // //     const translatedChunks = [];
// // // // // //     let currentChunk = "";
// // // // // //     for (const sentence of sentences) {
// // // // // //       if ((currentChunk + sentence).length < 900) {
// // // // // //         currentChunk += sentence;
// // // // // //       } else {
// // // // // //         if (currentChunk) {
// // // // // //           const res = await axios.post(
// // // // // //             "https://api.sarvam.ai/translate",
// // // // // //             {
// // // // // //               input: currentChunk,
// // // // // //               source_language_code: "en-IN",
// // // // // //               target_language_code: targetLang,
// // // // // //               speaker_gender: "Female",
// // // // // //             },
// // // // // //             {
// // // // // //               headers: {
// // // // // //                 "api-subscription-key": SARVAM_API_KEY,
// // // // // //                 "Content-Type": "application/json",
// // // // // //               },
// // // // // //               timeout: 6000,
// // // // // //             }
// // // // // //           );
// // // // // //           translatedChunks.push(res.data.translated_text || currentChunk);
// // // // // //         }
// // // // // //         currentChunk = sentence;
// // // // // //       }
// // // // // //     }
// // // // // //     if (currentChunk) {
// // // // // //       const res = await axios.post(
// // // // // //         "https://api.sarvam.ai/translate",
// // // // // //         {
// // // // // //           input: currentChunk,
// // // // // //           source_language_code: "en-IN",
// // // // // //           target_language_code: targetLang,
// // // // // //           speaker_gender: "Female",
// // // // // //         },
// // // // // //         {
// // // // // //           headers: {
// // // // // //             "api-subscription-key": SARVAM_API_KEY,
// // // // // //             "Content-Type": "application/json",
// // // // // //           },
// // // // // //           timeout: 6000,
// // // // // //         }
// // // // // //       );
// // // // // //       translatedChunks.push(res.data.translated_text || currentChunk);
// // // // // //     }
// // // // // //     return translatedChunks.join(" ");
// // // // // //   } catch (err) {
// // // // // //     console.warn("Translation Notice:", err.response?.data || err.message);
// // // // // //     return text;
// // // // // //   }
// // // // // // };

// // // // // // const generateSarvamAudio = async (text, language = "en-IN", speaker = "meera") => {
// // // // // //   if (!SARVAM_API_KEY || !text) return [];
// // // // // //   try {
// // // // // //     const chunks = splitIntoChunks(text, 490).slice(0, 3);
// // // // // //     const audioSegments = [];
// // // // // //     for (let i = 0; i < chunks.length; i++) {
// // // // // //       const chunk = chunks[i];
// // // // // //       const ttsRes = await axios.post(
// // // // // //         "https://api.sarvam.ai/text-to-speech",
// // // // // //         { inputs: [chunk], target_language_code: language, speaker_id: speaker },
// // // // // //         {
// // // // // //           headers: {
// // // // // //             "api-subscription-key": SARVAM_API_KEY,
// // // // // //             "Content-Type": "application/json",
// // // // // //           },
// // // // // //           timeout: 5000,
// // // // // //         }
// // // // // //       );
// // // // // //       if (ttsRes.data?.audios?.[0]) {
// // // // // //         audioSegments.push(ttsRes.data.audios[0]);
// // // // // //       }
// // // // // //     }
// // // // // //     return audioSegments;
// // // // // //   } catch (err) {
// // // // // //     console.warn("Sarvam TTS Notice:", err.response?.data || err.message);
// // // // // //     return [];
// // // // // //   }
// // // // // // };

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // ✅  HEALTH CHECK
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.get("/api/health", (_req, res) => {
// // // // // //   res.json({
// // // // // //     success: true,
// // // // // //     message: "TravioX API is running ✈️",
// // // // // //     timestamp: new Date().toISOString(),
// // // // // //     keys_configured: {
// // // // // //       groq: !!GROQ_API_KEY,
// // // // // //       serpapi: !!SERPAPI_KEY,
// // // // // //       rapidapi: !!RAPID_API_KEY,
// // // // // //       unsplash: !!UNSPLASH_ACCESS_KEY,
// // // // // //       sarvam: !!SARVAM_API_KEY,
// // // // // //       creatomate: !!CREATOMATE_API_KEY,
// // // // // //       geoapify: !!GEOAPIFY_KEY,
// // // // // //     },
// // // // // //   });
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🗺️  LIVE MAP — GEOCODE SEARCH (Geoapify)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.post("/api/live-map/geocode", async (req, res) => {
// // // // // //   const { query } = req.body;
// // // // // //   if (!query || !query.trim()) {
// // // // // //     return handleError(res, 400, "query is required");
// // // // // //   }
// // // // // //   if (!GEOAPIFY_KEY) {
// // // // // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // // // // //   }
// // // // // //   try {
// // // // // //     const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
// // // // // //       params: { text: query.trim(), apiKey: GEOAPIFY_KEY, limit: 1, format: "json" },
// // // // // //       timeout: 6000,
// // // // // //     });
// // // // // //     const results = response.data?.results;
// // // // // //     if (!results || results.length === 0) {
// // // // // //       return res.status(404).json({ success: false, error: "Location not found" });
// // // // // //     }
// // // // // //     const place = results[0];
// // // // // //     res.json({
// // // // // //       success: true,
// // // // // //       result: {
// // // // // //         latitude: place.lat,
// // // // // //         longitude: place.lon,
// // // // // //         label: place.formatted || query,
// // // // // //         country: place.country || "",
// // // // // //         city: place.city || place.county || "",
// // // // // //       },
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Geocoding failed", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ─────────────────────────────────────────────────────────────
// // // // // // // Routing
// // // // // // app.post("/api/live-map/route", async (req, res) => {
// // // // // //   const { startLat, startLon, endLat, endLon, mode = "drive" } = req.body;
// // // // // //   if (!startLat || !startLon || !endLat || !endLon) {
// // // // // //     return handleError(res, 400, "startLat, startLon, endLat, endLon are all required");
// // // // // //   }
// // // // // //   if (!GEOAPIFY_KEY) {
// // // // // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // // // // //   }
// // // // // //   const validModes = ["drive", "walk", "bicycle", "transit"];
// // // // // //   const routeMode = validModes.includes(mode) ? mode : "drive";
// // // // // //   try {
// // // // // //     const url = "https://api.geoapify.com/v1/routing";
// // // // // //     const response = await axios.get(url, {
// // // // // //       params: {
// // // // // //         waypoints: `${startLat},${startLon}|${endLat},${endLon}`,
// // // // // //         mode: routeMode,
// // // // // //         apiKey: GEOAPIFY_KEY,
// // // // // //         format: "json",
// // // // // //       },
// // // // // //       timeout: 8000,
// // // // // //     });
// // // // // //     const features = response.data?.features;
// // // // // //     if (!features || features.length === 0) {
// // // // // //       return res.status(404).json({ success: false, error: "No route found" });
// // // // // //     }
// // // // // //     const feature = features[0];
// // // // // //     const props = feature.properties;
// // // // // //     let allCoords = [];
// // // // // //     const geom = feature.geometry;
// // // // // //     if (geom.type === "MultiLineString") {
// // // // // //       geom.coordinates.forEach((line) => {
// // // // // //         line.forEach(([lon, lat]) => allCoords.push({ latitude: lat, longitude: lon }));
// // // // // //       });
// // // // // //     } else if (geom.type === "LineString") {
// // // // // //       geom.coordinates.forEach(([lon, lat]) =>
// // // // // //         allCoords.push({ latitude: lat, longitude: lon })
// // // // // //       );
// // // // // //     }
// // // // // //     res.json({
// // // // // //       success: true,
// // // // // //       route: {
// // // // // //         coordinates: allCoords,
// // // // // //         distance_km: parseFloat((props.distance / 1000).toFixed(2)),
// // // // // //         duration_min: Math.round(props.time / 60),
// // // // // //         mode: routeMode,
// // // // // //       },
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Route calculation failed", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ─────────────────────────────────────────────────────────────
// // // // // // // Reverse Geocode
// // // // // // app.get("/api/live-map/reverse", async (req, res) => {
// // // // // //   const { lat, lon } = req.query;
// // // // // //   if (!lat || !lon) return handleError(res, 400, "lat and lon are required");
// // // // // //   if (!GEOAPIFY_KEY) {
// // // // // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // // // // //   }
// // // // // //   try {
// // // // // //     const response = await axios.get("https://api.geoapify.com/v1/geocode/reverse", {
// // // // // //       params: { lat, lon, apiKey: GEOAPIFY_KEY, format: "json" },
// // // // // //       timeout: 6000,
// // // // // //     });
// // // // // //     const results = response.data?.results;
// // // // // //     const label =
// // // // // //       results?.[0]?.formatted || `${parseFloat(lat).toFixed(4)}, ${parseFloat(lon).toFixed(4)}`;
// // // // // //     res.json({ success: true, label });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Reverse geocoding failed", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 📰  NEWS (RapidAPI)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.get("/api/startup-news", async (req, res) => {
// // // // // //   const userQuery = req.query.q || "Travel";
// // // // // //   if (!RAPID_API_KEY) {
// // // // // //     return handleError(res, 500, "RAPID_API_KEY is not configured on server");
// // // // // //   }
// // // // // //   try {
// // // // // //     const response = await axios.get("https://real-time-news-data.p.rapidapi.com/search", {
// // // // // //       params: {
// // // // // //         query: userQuery,
// // // // // //         limit: 10,
// // // // // //         time_published: "anytime",
// // // // // //         country: "US",
// // // // // //         lang: "en",
// // // // // //       },
// // // // // //       headers: {
// // // // // //         "x-rapidapi-key": RAPID_API_KEY,
// // // // // //         "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
// // // // // //       },
// // // // // //       timeout: 8000,
// // // // // //     });
// // // // // //     const formattedNews = (response.data.data || []).map((item) => ({
// // // // // //       title: item.title,
// // // // // //       summary: item.snippet || item.summary || "No summary available",
// // // // // //       link: item.link,
// // // // // //       published_date: item.published_datetime_utc || "",
// // // // // //       image_url:
// // // // // //         item.photo_url || item.thumbnail || "https://via.placeholder.com/400x200",
// // // // // //     }));
// // // // // //     res.json({ success: true, results: formattedNews });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "News fetch failed", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🧳  SMART PACKING LIST (Groq)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.post("/api/smart-packing", async (req, res) => {
// // // // // //   const destination = req.body.destination || req.body.city || req.body.place || "Goa";
// // // // // //   const tripType = req.body.tripType || "Leisure";
// // // // // //   const duration = parseInt(req.body.duration || req.body.days || 5, 10);
// // // // // //   const gender = req.body.gender || "Unspecified";
// // // // // //   const luggageType = req.body.luggageType || "Backpack";
// // // // // //   const specialActivities = Array.isArray(req.body.specialActivities) ? req.body.specialActivities : [];

// // // // // //   try {
// // // // // //     let packingData = null;

// // // // // //     if (GROQ_API_KEY) {
// // // // // //       try {
// // // // // //         const activitiesStr = specialActivities.length > 0 ? specialActivities.join(", ") : "None";
// // // // // //         const prompt = `You are a geo-climate travel expert. Analyze location "${destination}".
// // // // // // Trip: ${tripType} | ${duration} days | Gender: ${gender} | Luggage: ${luggageType} | Activities: ${activitiesStr}
// // // // // // ${tripType === "Family" ? "Include 'Kids & Baby Essentials' (icon: '🍼') category." : ""}
// // // // // // Return STRICT JSON:
// // // // // // {
// // // // // //   "weather_summary": "Climate analysis for ${destination}",
// // // // // //   "categories": [
// // // // // //     {
// // // // // //       "name": "Layering & Clothing",
// // // // // //       "icon": "🧥",
// // // // // //       "items": [{"item": "Comfortable clothes", "essential": true, "reason": "Daily wear"}]
// // // // // //     },
// // // // // //     {"name": "Footwear", "icon": "🥾", "items": [{"item": "Walking shoes", "essential": true, "reason": "Sightseeing"}]},
// // // // // //     {"name": "Toiletries & Health", "icon": "🧴", "items": [{"item": "Sunscreen & Moisturizer", "essential": true, "reason": "Skin protection"}]},
// // // // // //     {"name": "Electronics", "icon": "🔌", "items": [{"item": "Power bank & Chargers", "essential": true, "reason": "Phone backup"}]},
// // // // // //     {"name": "Documents & Essentials", "icon": "📄", "items": [{"item": "ID Proof & Tickets", "essential": true, "reason": "Identity verification"}]}
// // // // // //   ],
// // // // // //   "pro_tips": ["Carry local currency and hydration supplies for ${destination}"]
// // // // // // }`;

// // // // // //         const completion = await groq.chat.completions.create({
// // // // // //           messages: [
// // // // // //             { role: "system", content: "You are an expert packing advisor. Return valid JSON only without markdown." },
// // // // // //             { role: "user", content: prompt },
// // // // // //           ],
// // // // // //           model: "llama-3.3-70b-versatile",
// // // // // //           response_format: { type: "json_object" },
// // // // // //           temperature: 0.4,
// // // // // //           max_tokens: 1500,
// // // // // //         });

// // // // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // // // //         packingData = JSON.parse(cleanContent);
// // // // // //       } catch (gErr) {
// // // // // //         console.warn("Groq packing notice:", gErr.message);
// // // // // //       }
// // // // // //     }

// // // // // //     if (!packingData || !packingData.categories) {
// // // // // //       packingData = {
// // // // // //         weather_summary: `Pleasant weather expected in ${destination}.`,
// // // // // //         categories: [
// // // // // //           {
// // // // // //             name: "Layering & Clothing",
// // // // // //             icon: "🧥",
// // // // // //             items: [
// // // // // //               { item: "Light breathable shirts/t-shirts (4-5 pairs)", essential: true, reason: "Daytime comfort" },
// // // // // //               { item: "Comfortable pants or shorts (2-3 pairs)", essential: true, reason: "Sightseeing" },
// // // // // //             ],
// // // // // //           },
// // // // // //           {
// // // // // //             name: "Footwear",
// // // // // //             icon: "🥾",
// // // // // //             items: [
// // // // // //               { item: "Comfortable walking shoes", essential: true, reason: "Long walks" },
// // // // // //               { item: "Flip flops or sandals", essential: false, reason: "Relaxation" },
// // // // // //             ],
// // // // // //           },
// // // // // //           {
// // // // // //             name: "Toiletries & Health",
// // // // // //             icon: "🧴",
// // // // // //             items: [
// // // // // //               { item: "Sunscreen SPF 50+", essential: true, reason: "Sun protection" },
// // // // // //               { item: "Basic first aid & personal meds", essential: true, reason: "Emergencies" },
// // // // // //             ],
// // // // // //           },
// // // // // //           {
// // // // // //             name: "Electronics",
// // // // // //             icon: "🔌",
// // // // // //             items: [
// // // // // //               { item: "Power bank 10,000mAh", essential: true, reason: "On-the-go charging" },
// // // // // //               { item: "Universal charging adapter", essential: true, reason: "Device charging" },
// // // // // //             ],
// // // // // //           },
// // // // // //           {
// // // // // //             name: "Documents & Essentials",
// // // // // //             icon: "📄",
// // // // // //             items: [
// // // // // //               { item: "Government ID & Hotel booking copy", essential: true, reason: "Check-in" },
// // // // // //               { item: "Cash & backup cards", essential: true, reason: "Local shopping" },
// // // // // //             ],
// // // // // //           },
// // // // // //         ],
// // // // // //         pro_tips: [`Stay hydrated and keep local emergency contacts saved while in ${destination}.`],
// // // // // //       };
// // // // // //     }

// // // // // //     res.json({ success: true, data: packingData });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Failed to generate packing list", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🗺️  DESTINATION INFO + AUDIO (Groq + Sarvam Fallback)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.post("/api/destination-info", async (req, res) => {
// // // // // //   const city = req.body.city || req.body.destination || req.body.place || "Mumbai";
// // // // // //   const language = req.body.language || "en-IN";

// // // // // //   try {
// // // // // //     let infoData = null;

// // // // // //     if (GROQ_API_KEY) {
// // // // // //       try {
// // // // // //         const prompt = `You are an expert travel guide. Generate travel summary for ${city}, India.
// // // // // // Return STRICT JSON:
// // // // // // {
// // // // // //   "history": "3 sentences covering origin, historical significance.",
// // // // // //   "bestTime": "Which months/season and exactly why.",
// // // // // //   "food": "Name 3 must-try local dishes as a comma-separated string.",
// // // // // //   "culture": "2 sentences on local traditions.",
// // // // // //   "hiddenGem": "One underrated spot.",
// // // // // //   "summary": "A vivid 3-sentence overview."
// // // // // // }`;

// // // // // //         const completion = await groq.chat.completions.create({
// // // // // //           messages: [
// // // // // //             { role: "system", content: "You are an expert travel assistant. Return valid JSON only without markdown." },
// // // // // //             { role: "user", content: prompt },
// // // // // //           ],
// // // // // //           model: "llama-3.3-70b-versatile",
// // // // // //           response_format: { type: "json_object" },
// // // // // //           temperature: 0.6,
// // // // // //           max_tokens: 1000,
// // // // // //         });

// // // // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // // // //         const rawInfo = JSON.parse(cleanContent);
// // // // // //         infoData = sanitizeDestinationInfo(rawInfo);
// // // // // //       } catch (groqErr) {
// // // // // //         console.warn("Groq destination-info notice:", groqErr.message);
// // // // // //       }
// // // // // //     }

// // // // // //     if (!infoData) {
// // // // // //       infoData = {
// // // // // //         history: `${city} boasts a vibrant history with century-old architecture and culturally rich roots.`,
// // // // // //         bestTime: "October to March for optimal sightseeing weather.",
// // // // // //         food: "Local Street Food, Regional Speciality Thali, Traditional Dessert",
// // // // // //         culture: "Known for hospitable locals and colorful festivals.",
// // // // // //         hiddenGem: "Historic backstreets and local viewpoints.",
// // // // // //         summary: `Discover the unforgettable heritage, vibrant markets, and rich cuisine of ${city}.`,
// // // // // //       };
// // // // // //     }

// // // // // //     let narrationScript = `Welcome to ${city}. ${infoData.summary} Best time to visit is ${infoData.bestTime}. Must-try foods: ${infoData.food}.`;
// // // // // //     let audioSegments = [];

// // // // // //     if (SARVAM_API_KEY) {
// // // // // //       try {
// // // // // //         if (language !== "en-IN") {
// // // // // //           narrationScript = await translateText(narrationScript, language);
// // // // // //         }
// // // // // //         audioSegments = await generateSarvamAudio(narrationScript, language);
// // // // // //       } catch (sErr) {
// // // // // //         console.warn("Sarvam audio notice:", sErr.message);
// // // // // //       }
// // // // // //     }

// // // // // //     res.json({
// // // // // //       success: true,
// // // // // //       data: {
// // // // // //         info: infoData,
// // // // // //         audioSegments,
// // // // // //         audioBase64: audioSegments[0] || null,
// // // // // //         generatedLanguage: language,
// // // // // //       },
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Failed to generate destination info", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🔊  TEXT-TO-SPEECH (Direct)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.post("/api/text-to-speech", async (req, res) => {
// // // // // //   const { prompt, text, language = "en-IN", speaker = "meera" } = req.body;
// // // // // //   try {
// // // // // //     let finalText = text;
// // // // // //     if (!finalText && prompt && GROQ_API_KEY) {
// // // // // //       const completion = await groq.chat.completions.create({
// // // // // //         messages: [
// // // // // //           { role: "system", content: "You are a helpful travel assistant. Keep responses under 200 words." },
// // // // // //           { role: "user", content: prompt },
// // // // // //         ],
// // // // // //         model: "llama-3.3-70b-versatile",
// // // // // //         temperature: 0.7,
// // // // // //         max_tokens: 300,
// // // // // //       });
// // // // // //       finalText = completion.choices[0].message.content;
// // // // // //     }

// // // // // //     if (!finalText) finalText = "Welcome to your TravioX journey.";
// // // // // //     finalText = normalizeToString(finalText);

// // // // // //     const audioSegments = await generateSarvamAudio(finalText, language, speaker);
// // // // // //     res.json({
// // // // // //       success: true,
// // // // // //       audioSegments,
// // // // // //       audioBase64: audioSegments[0] || null,
// // // // // //       textUsed: finalText,
// // // // // //       totalChunks: audioSegments.length,
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Failed to generate speech", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 💰  AI BUDGET PLANNER (Groq with Full Numeric Validation & Fallback)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.post("/api/ai-budget", async (req, res) => {
// // // // // //   const city = req.body.city || req.body.destination || req.body.place || req.body.location || "";
// // // // // //   const travelers = Math.max(parseInt(req.body.travelers || 2, 10) || 2, 1);
// // // // // //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 5, 10) || 5, 1), 30);
// // // // // //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.style || "Mid-range";

// // // // // //   if (!city || !city.trim()) {
// // // // // //     return handleError(res, 400, "City name is required");
// // // // // //   }

// // // // // //   try {
// // // // // //     let budgetData = null;

// // // // // //     if (GROQ_API_KEY) {
// // // // // //       try {
// // // // // //         const prompt = `Create a detailed day-by-day travel budget for ${city.trim()}, India.
// // // // // // Travelers: ${travelers} | Days: ${days} | Style: ${tripVibe}.
// // // // // // Return ONLY valid JSON matching this exact structure:
// // // // // // {
// // // // // //   "dailyPlan": [
// // // // // //     {
// // // // // //       "day": 1,
// // // // // //       "title": "Arrival and City Tour",
// // // // // //       "activities": [{"item": "Iconic Sightseeing", "cost": 500}],
// // // // // //       "accommodation": 2500,
// // // // // //       "food": 1000,
// // // // // //       "transport": 500
// // // // // //     }
// // // // // //   ],
// // // // // //   "summary": {
// // // // // //     "stayTotal": ${days * 2500},
// // // // // //     "foodTotal": ${days * 1000},
// // // // // //     "transportTotal": ${days * 500},
// // // // // //     "activitiesTotal": ${days * 500},
// // // // // //     "miscellaneous": 1000,
// // // // // //     "grandTotal": ${days * 4500 + 1000}
// // // // // //   },
// // // // // //   "expertAdvice": "3 practical money-saving tips specific to ${city.trim()}",
// // // // // //   "bestDeals": ["Use metro or shared rides", "Book accommodation in advance", "Try local dhabas and food markets"]
// // // // // // }`;

// // // // // //         const completion = await groq.chat.completions.create({
// // // // // //           messages: [
// // // // // //             {
// // // // // //               role: "system",
// // // // // //               content: "You are an expert travel budget planner. You must return valid JSON only. Do not include markdown codeblocks or extra text.",
// // // // // //             },
// // // // // //             { role: "user", content: prompt },
// // // // // //           ],
// // // // // //           model: "llama-3.3-70b-versatile",
// // // // // //           response_format: { type: "json_object" },
// // // // // //           temperature: 0.5,
// // // // // //           max_tokens: 2500,
// // // // // //         });

// // // // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // // // //         const cleanContent = rawContent
// // // // // //           .replace(/^```json\s*/i, "")
// // // // // //           .replace(/^```\s*/i, "")
// // // // // //           .replace(/```\s*$/i, "")
// // // // // //           .trim();

// // // // // //         budgetData = JSON.parse(cleanContent);
// // // // // //       } catch (groqErr) {
// // // // // //         console.error("Groq AI Budget Error:", groqErr.message);
// // // // // //       }
// // // // // //     }

// // // // // //     // Dynamic fallback calculation if Groq failed or key missing
// // // // // //     if (!budgetData || !budgetData.dailyPlan) {
// // // // // //       const stayRate = tripVibe.toLowerCase().includes("luxury") ? 6000 : tripVibe.toLowerCase().includes("budget") ? 1200 : 2500;
// // // // // //       const foodRate = tripVibe.toLowerCase().includes("luxury") ? 2500 : tripVibe.toLowerCase().includes("budget") ? 500 : 1000;
// // // // // //       const transportRate = tripVibe.toLowerCase().includes("luxury") ? 1500 : tripVibe.toLowerCase().includes("budget") ? 300 : 600;
// // // // // //       const actRate = tripVibe.toLowerCase().includes("luxury") ? 2000 : tripVibe.toLowerCase().includes("budget") ? 400 : 800;

// // // // // //       const dailyPlan = [];
// // // // // //       for (let d = 1; d <= days; d++) {
// // // // // //         dailyPlan.push({
// // // // // //           day: d,
// // // // // //           title: d === 1 ? `Day 1: Arrival & Exploring ${city}` : d === 2 ? `Day 2: Heritage & Local Flavors` : `Day ${d}: Highlights & Activities in ${city}`,
// // // // // //           activities: [
// // // // // //             { item: `Sightseeing & Attractions in ${city}`, cost: actRate },
// // // // // //           ],
// // // // // //           accommodation: stayRate,
// // // // // //           food: foodRate,
// // // // // //           transport: transportRate,
// // // // // //         });
// // // // // //       }

// // // // // //       const stayTotal = stayRate * days;
// // // // // //       const foodTotal = foodRate * days;
// // // // // //       const transportTotal = transportRate * days;
// // // // // //       const activitiesTotal = actRate * days;
// // // // // //       const miscellaneous = Math.round((stayTotal + foodTotal) * 0.1);
// // // // // //       const grandTotal = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;

// // // // // //       budgetData = {
// // // // // //         dailyPlan,
// // // // // //         summary: {
// // // // // //           stayTotal,
// // // // // //           foodTotal,
// // // // // //           transportTotal,
// // // // // //           activitiesTotal,
// // // // // //           miscellaneous,
// // // // // //           grandTotal,
// // // // // //         },
// // // // // //         expertAdvice: `Book stays early in ${city} and opt for public transit or passes to save on daily travel costs.`,
// // // // // //         bestDeals: [
// // // // // //           "Use shared cabs or metro for local transit",
// // // // // //           "Dine at authentic local restaurants instead of tourist hotspots",
// // // // // //           "Look for combo attraction passes online",
// // // // // //         ],
// // // // // //       };
// // // // // //     }

// // // // // //     // Sanitize and ensure numeric consistency
// // // // // //     const rawSummary = budgetData.summary || {};
// // // // // //     const stayTotal = parseNumeric(rawSummary.stayTotal, 0);
// // // // // //     const foodTotal = parseNumeric(rawSummary.foodTotal, 0);
// // // // // //     const transportTotal = parseNumeric(rawSummary.transportTotal, 0);
// // // // // //     const activitiesTotal = parseNumeric(rawSummary.activitiesTotal, 0);
// // // // // //     const miscellaneous = parseNumeric(rawSummary.miscellaneous, 0);
// // // // // //     const calculatedGrand = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;
// // // // // //     const grandTotal = parseNumeric(rawSummary.grandTotal, calculatedGrand) || calculatedGrand;
// // // // // //     const averageDailyBudget = Math.round(grandTotal / days) || Math.round(calculatedGrand / days);

// // // // // //     const sanitizedData = {
// // // // // //       dailyPlan: Array.isArray(budgetData.dailyPlan)
// // // // // //         ? budgetData.dailyPlan.map((d, idx) => ({
// // // // // //             day: parseNumeric(d.day, idx + 1),
// // // // // //             title: d.title || `Day ${idx + 1}`,
// // // // // //             activities: Array.isArray(d.activities)
// // // // // //               ? d.activities.map((a) => ({
// // // // // //                   item: a.item || "Sightseeing",
// // // // // //                   cost: parseNumeric(a.cost, 0),
// // // // // //                 }))
// // // // // //               : [],
// // // // // //             accommodation: parseNumeric(d.accommodation, 0),
// // // // // //             food: parseNumeric(d.food, 0),
// // // // // //             transport: parseNumeric(d.transport, 0),
// // // // // //           }))
// // // // // //         : [],
// // // // // //       summary: {
// // // // // //         stayTotal,
// // // // // //         foodTotal,
// // // // // //         transportTotal,
// // // // // //         activitiesTotal,
// // // // // //         miscellaneous,
// // // // // //         grandTotal,
// // // // // //       },
// // // // // //       expertAdvice: normalizeToString(budgetData.expertAdvice || `Enjoy your trip to ${city}!`),
// // // // // //       bestDeals: Array.isArray(budgetData.bestDeals)
// // // // // //         ? budgetData.bestDeals.map((item) => normalizeToString(item))
// // // // // //         : ["Book early for best rates", "Eat at local eateries", "Use public transit"],
// // // // // //       averageDailyBudget,
// // // // // //     };

// // // // // //     res.json({
// // // // // //       success: true,
// // // // // //       data: sanitizedData,
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     console.error("Budget Generation Critical Error:", err);
// // // // // //     handleError(res, 500, "Failed to generate budget", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 📋  AI ITINERARY PLANNER (Groq)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.post("/api/ai-planner", async (req, res) => {
// // // // // //   const city = req.body.city || req.body.destination || req.body.place || "Jaipur";
// // // // // //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 3, 10), 1), 7);
// // // // // //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.tripType || "Balanced";

// // // // // //   try {
// // // // // //     let planData = null;

// // // // // //     if (GROQ_API_KEY) {
// // // // // //       try {
// // // // // //         const prompt = `Create a detailed ${days}-day travel itinerary for ${city}, India. Vibe: ${tripVibe}.
// // // // // // Return valid JSON with format:
// // // // // // {
// // // // // //   "itinerary": [
// // // // // //     {
// // // // // //       "day": 1,
// // // // // //       "theme": "Arrival & City Highlights",
// // // // // //       "activities": [
// // // // // //         {"time": "Morning", "task": "Sightseeing", "description": "Explore top historical landmarks", "tips": "Start early"},
// // // // // //         {"time": "Afternoon", "task": "Local Cuisine", "description": "Enjoy traditional regional food", "tips": "Visit famous local eatery"},
// // // // // //         {"time": "Evening", "task": "Sunset & Stroll", "description": "Scenic sunset and market walk", "tips": "Great photography spot"}
// // // // // //       ]
// // // // // //     }
// // // // // //   ],
// // // // // //   "travel_tips": ["Carry comfortable walking shoes", "Keep cash handy for street vendors"],
// // // // // //   "must_try_experiences": ["Local heritage walk", "Authentic regional street food"]
// // // // // // }`;

// // // // // //         const completion = await groq.chat.completions.create({
// // // // // //           messages: [
// // // // // //             { role: "system", content: "You are a professional travel planner. You must return valid JSON only without markdown formatting." },
// // // // // //             { role: "user", content: prompt },
// // // // // //           ],
// // // // // //           model: "llama-3.3-70b-versatile",
// // // // // //           response_format: { type: "json_object" },
// // // // // //           temperature: 0.5,
// // // // // //           max_tokens: 2200,
// // // // // //         });

// // // // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // // // //         planData = JSON.parse(cleanContent);
// // // // // //       } catch (groqErr) {
// // // // // //         console.warn("Groq planner notice:", groqErr.message);
// // // // // //       }
// // // // // //     }

// // // // // //     if (!planData || !planData.itinerary) {
// // // // // //       const fallbackItinerary = [];
// // // // // //       for (let d = 1; d <= days; d++) {
// // // // // //         fallbackItinerary.push({
// // // // // //           day: d,
// // // // // //           theme: d === 1 ? `Welcome to ${city} & Iconic Landmarks` : d === 2 ? `Heritage, Culture & Local Flavors` : `Hidden Gems & Panoramic Views`,
// // // // // //           activities: [
// // // // // //             { time: "Morning", task: `Explore top sights in ${city}`, description: `Start the day visiting iconic landmarks and cultural attractions.`, tips: "Arrive early to avoid queues." },
// // // // // //             { time: "Afternoon", task: "Culinary Walk & Markets", description: `Taste signature regional dishes and shop at local bazaars.`, tips: "Look for popular local food stalls." },
// // // // // //             { time: "Evening", task: "Sunset & Scenic Spot", description: `Relax and watch the sunset from a popular viewpoint or promenade.`, tips: "Ideal time for photos." },
// // // // // //           ],
// // // // // //         });
// // // // // //       }
// // // // // //       planData = {
// // // // // //         itinerary: fallbackItinerary,
// // // // // //         travel_tips: ["Keep cash handy for local vendors", "Use ride-sharing or local transit for easy travel", "Stay hydrated and wear comfortable walking shoes"],
// // // // // //         must_try_experiences: [`Signature food trail in ${city}`, `Heritage landmark tour`, `Sunset photography spot`],
// // // // // //       };
// // // // // //     }

// // // // // //     res.json({ success: true, data: planData });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "AI Planner failed", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🤖  AI CHAT (Groq)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.post("/api/ai-chat", async (req, res) => {
// // // // // //   const { message, history = [] } = req.body;
// // // // // //   if (!message) return handleError(res, 400, "Message is required");
// // // // // //   if (!GROQ_API_KEY) return handleError(res, 500, "GROQ_API_KEY is not configured");

// // // // // //   try {
// // // // // //     const messages = [
// // // // // //       { role: "system", content: "You are TravioX, an expert Indian travel assistant. Keep responses helpful, engaging and concise." },
// // // // // //       ...history.slice(-8),
// // // // // //       { role: "user", content: message },
// // // // // //     ];
// // // // // //     const completion = await groq.chat.completions.create({
// // // // // //       messages,
// // // // // //       model: "llama-3.3-70b-versatile",
// // // // // //       temperature: 0.7,
// // // // // //       max_tokens: 400,
// // // // // //     });
// // // // // //     res.json({ success: true, reply: completion.choices[0].message.content });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "AI Chat failed", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 📷  PHOTOS (Unsplash)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.get("/api/photos", async (req, res) => {
// // // // // //   const query = req.query.q;
// // // // // //   if (!query || query.trim() === "") {
// // // // // //     return res.status(400).json({ success: false, error: "Query parameter 'q' is required" });
// // // // // //   }
// // // // // //   if (!UNSPLASH_ACCESS_KEY) {
// // // // // //     return handleError(res, 500, "UNSPLASH_ACCESS_KEY is not configured");
// // // // // //   }
// // // // // //   try {
// // // // // //     const response = await axios.get("https://api.unsplash.com/search/photos", {
// // // // // //       params: { query: query.trim(), per_page: 8, client_id: UNSPLASH_ACCESS_KEY },
// // // // // //       timeout: 6000,
// // // // // //     });
// // // // // //     res.json({
// // // // // //       success: true,
// // // // // //       photos: response.data.results.map((img) => ({
// // // // // //         id: img.id,
// // // // // //         url: img.urls.regular,
// // // // // //         thumb: img.urls.thumb,
// // // // // //         description: img.alt_description || "",
// // // // // //         credit: img.user?.name || "Unsplash",
// // // // // //       })),
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Failed to fetch images", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // ✈️  FLIGHTS (SerpApi)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.get("/api/flights", async (req, res) => {
// // // // // //   let { departure_id = "BOM", arrival_id = "DEL" } = req.query;
// // // // // //   if (!departure_id || !arrival_id || departure_id.length !== 3 || arrival_id.length !== 3) {
// // // // // //     return res.status(400).json({
// // // // // //       success: false,
// // // // // //       error: "Please use valid 3-letter airport codes (e.g., BOM, DEL)",
// // // // // //     });
// // // // // //   }
// // // // // //   if (!SERPAPI_KEY) {
// // // // // //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// // // // // //   }

// // // // // //   const nextMonth = new Date();
// // // // // //   nextMonth.setDate(nextMonth.getDate() + 30);
// // // // // //   const travelDate = nextMonth.toISOString().split("T")[0];

// // // // // //   try {
// // // // // //     const response = await axios.get("https://serpapi.com/search", {
// // // // // //       params: {
// // // // // //         engine: "google_flights",
// // // // // //         departure_id: departure_id.toUpperCase(),
// // // // // //         arrival_id: arrival_id.toUpperCase(),
// // // // // //         outbound_date: travelDate,
// // // // // //         type: "2",
// // // // // //         currency: "INR",
// // // // // //         hl: "en",
// // // // // //         gl: "us",
// // // // // //         api_key: SERPAPI_KEY,
// // // // // //       },
// // // // // //       timeout: 10000,
// // // // // //     });

// // // // // //     const results = [
// // // // // //       ...(response.data.best_flights || []),
// // // // // //       ...(response.data.other_flights || []),
// // // // // //     ];

// // // // // //     if (results.length === 0) {
// // // // // //       return res.json({ success: true, flights: [], message: "No flights found." });
// // // // // //     }

// // // // // //     const formatted = results.slice(0, 10).map((f) => {
// // // // // //       const leg = f.flights?.[0] || {};
// // // // // //       return {
// // // // // //         airline: leg.airline || "Airline",
// // // // // //         logo: leg.airline_logo || "",
// // // // // //         flight_number: leg.flight_number || "",
// // // // // //         departure: leg.departure_airport?.id || departure_id,
// // // // // //         departure_name: leg.departure_airport?.name || departure_id,
// // // // // //         arrival: leg.arrival_airport?.id || arrival_id,
// // // // // //         arrival_name: leg.arrival_airport?.name || arrival_id,
// // // // // //         departure_time: leg.departure_airport?.time?.split(" ")[1] || "10:00",
// // // // // //         arrival_time: leg.arrival_airport?.time?.split(" ")[1] || "12:30",
// // // // // //         duration: f.total_duration || 120,
// // // // // //         status: f.type || "Available",
// // // // // //         url: `https://www.google.com/travel/flights?q=flights%20from%20${departure_id}%20to%20${arrival_id}%20on%20${travelDate}`,
// // // // // //       };
// // // // // //     });

// // // // // //     res.json({ success: true, flights: formatted });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Flight search failed", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🏨  HOTELS (SerpApi)
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.get("/api/hotels", async (req, res) => {
// // // // // //   const { q = "Mumbai" } = req.query;
// // // // // //   if (!SERPAPI_KEY) {
// // // // // //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// // // // // //   }
// // // // // //   try {
// // // // // //     const response = await axios.get("https://serpapi.com/search", {
// // // // // //       params: {
// // // // // //         engine: "google_hotels",
// // // // // //         q: `${q} hotels`,
// // // // // //         check_in_date: getFormattedDate(1),
// // // // // //         check_out_date: getFormattedDate(3),
// // // // // //         api_key: SERPAPI_KEY,
// // // // // //         currency: "INR",
// // // // // //         gl: "in",
// // // // // //       },
// // // // // //       timeout: 10000,
// // // // // //     });
// // // // // //     const hotels = (response.data.properties || []).slice(0, 8).map((h) => ({
// // // // // //       name: h.name,
// // // // // //       rating: h.overall_rating || "N/A",
// // // // // //       price: h.rate_per_night?.lowest || "N/A",
// // // // // //       thumbnail: h.images?.[0]?.thumbnail || "https://via.placeholder.com/300",
// // // // // //       link: h.link || "#",
// // // // // //     }));
// // // // // //     res.json({ success: true, hotels });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Hotel search failed", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 📖  TRAVEL MEMORY BUILDER
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // async function analyzeTravelMoment(m, i) {
// // // // // //   const userNote = (m.user_note || "").trim();
// // // // // //   const rawBase64 = m.image_base64 || "";
// // // // // //   const cleanBase64 = rawBase64.replace(/^data:image\/\w+;base64,/, "").trim();

// // // // // //   if (cleanBase64 && GROQ_API_KEY) {
// // // // // //     try {
// // // // // //       const visionPrompt = `Analyze this travel photo. Traveler note: "${userNote || "Vacation"}". Return JSON: {"mood":"One word","mood_emoji":"emoji","scene_description":"1 sentence"}`;
// // // // // //       const visionRes = await groq.chat.completions.create({
// // // // // //         messages: [
// // // // // //           {
// // // // // //             role: "user",
// // // // // //             content: [
// // // // // //               { type: "text", text: visionPrompt },
// // // // // //               { type: "image_url", image_url: { url: `data:image/jpeg;base64,${cleanBase64}` } },
// // // // // //             ],
// // // // // //           },
// // // // // //         ],
// // // // // //         model: "llama-3.2-11b-vision-preview",
// // // // // //         response_format: { type: "json_object" },
// // // // // //         temperature: 0.4,
// // // // // //         max_tokens: 120,
// // // // // //       });
// // // // // //       const parsed = JSON.parse(visionRes.choices[0].message.content);
// // // // // //       return {
// // // // // //         index: i,
// // // // // //         user_note: userNote,
// // // // // //         mood: parsed.mood || "Adventurous",
// // // // // //         mood_emoji: parsed.mood_emoji || "✨",
// // // // // //         scene_description: parsed.scene_description || userNote || "A special travel memory.",
// // // // // //       };
// // // // // //     } catch (visionErr) {
// // // // // //       console.warn(`Vision fallback for moment #${i + 1}`);
// // // // // //     }
// // // // // //   }

// // // // // //   return {
// // // // // //     index: i,
// // // // // //     user_note: userNote,
// // // // // //     mood: "Memorable",
// // // // // //     mood_emoji: "📸",
// // // // // //     scene_description: userNote || "A wonderful travel moment captured in time.",
// // // // // //   };
// // // // // // }

// // // // // // app.post("/api/travel-memory-builder", async (req, res) => {
// // // // // //   const { moments } = req.body;
// // // // // //   if (!moments || !Array.isArray(moments) || moments.length < 2) {
// // // // // //     return res.status(400).json({ success: false, error: "Provide at least 2 moments" });
// // // // // //   }
// // // // // //   if (!GROQ_API_KEY) {
// // // // // //     return handleError(res, 500, "GROQ_API_KEY is not configured");
// // // // // //   }

// // // // // //   try {
// // // // // //     const scenePromises = moments.map((m, i) => analyzeTravelMoment(m, i));
// // // // // //     const scenes = await Promise.all(scenePromises);

// // // // // //     const storyPrompt = `Create a travel diary and social captions from moments: ${JSON.stringify(scenes)}.
// // // // // // Return JSON:
// // // // // // {
// // // // // //   "trip_title": "4-6 word evocative title",
// // // // // //   "travel_story": "A rich 3-4 paragraph narrative connecting these moments.",
// // // // // //   "timeline": [{"moment_index": 0, "social_caption": "Caption with 3 hashtags"}],
// // // // // //   "tags": ["travel", "wanderlust", "explore", "memories", "adventure"],
// // // // // //   "highlight_quote": "One unforgettable quote"
// // // // // // }`;

// // // // // //     const storyRes = await groq.chat.completions.create({
// // // // // //       messages: [
// // // // // //         { role: "system", content: "Return JSON only without markdown." },
// // // // // //         { role: "user", content: storyPrompt },
// // // // // //       ],
// // // // // //       model: "llama-3.3-70b-versatile",
// // // // // //       response_format: { type: "json_object" },
// // // // // //       temperature: 0.6,
// // // // // //       max_tokens: 1800,
// // // // // //     });

// // // // // //     let storyData;
// // // // // //     try {
// // // // // //       storyData = JSON.parse(storyRes.choices[0].message.content);
// // // // // //     } catch {
// // // // // //       storyData = {
// // // // // //         trip_title: "Echoes of the Road",
// // // // // //         travel_story: "Every journey writes a new chapter in our memories.",
// // // // // //         tags: ["wanderlust", "explore", "memories"],
// // // // // //         highlight_quote: "Collect moments, not things.",
// // // // // //         timeline: [],
// // // // // //       };
// // // // // //     }

// // // // // //     const timeline = scenes.map((s, i) => {
// // // // // //       const match = storyData.timeline?.find((t) => t.moment_index === i || t.index === i);
// // // // // //       return {
// // // // // //         ...s,
// // // // // //         social_caption: match?.social_caption || `${s.scene_description || s.user_note} ✨ #travel #adventure`,
// // // // // //       };
// // // // // //     });

// // // // // //     res.json({
// // // // // //       success: true,
// // // // // //       data: {
// // // // // //         trip_title: storyData.trip_title || "A Journey Remembered",
// // // // // //         travel_story: storyData.travel_story || "Memories forged along the open road.",
// // // // // //         tags: storyData.tags || ["travel", "wanderlust", "memories"],
// // // // // //         highlight_quote: storyData.highlight_quote || "Collect moments, not things.",
// // // // // //         timeline,
// // // // // //         created_at: new Date().toISOString(),
// // // // // //       },
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Memory builder failed", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🎬  CREATOMATE VIDEO GENERATOR
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // function buildSlideshowRenderScript(imageUrls, captions = []) {
// // // // // //   const photos = imageUrls.slice(0, 4);
// // // // // //   const slideDuration = 3.5;
// // // // // //   const elements = [];

// // // // // //   photos.forEach((url, i) => {
// // // // // //     elements.push({
// // // // // //       type: "image",
// // // // // //       source: url,
// // // // // //       track: 1,
// // // // // //       duration: slideDuration,
// // // // // //       clip: true,
// // // // // //       animations: [
// // // // // //         { type: "scale", start_scale: i % 2 === 0 ? "100%" : "112%", end_scale: i % 2 === 0 ? "112%" : "100%", easing: "linear" },
// // // // // //         ...(i > 0 ? [{ type: "fade", transition: true, duration: 0.6 }] : []),
// // // // // //       ],
// // // // // //     });
// // // // // //   });

// // // // // //   if (Array.isArray(captions) && captions.length > 0) {
// // // // // //     photos.forEach((_, i) => {
// // // // // //       const cap = captions[i];
// // // // // //       if (cap && typeof cap === "string" && cap.trim()) {
// // // // // //         elements.push({
// // // // // //           type: "text",
// // // // // //           text: cap.trim().substring(0, 100),
// // // // // //           track: 2,
// // // // // //           time: i * slideDuration,
// // // // // //           duration: slideDuration,
// // // // // //           y: "85%",
// // // // // //           width: "86%",
// // // // // //           fill_color: "#ffffff",
// // // // // //           background_color: "rgba(10, 10, 10, 0.75)",
// // // // // //           background_border_radius: "12 px",
// // // // // //           padding: "14 px",
// // // // // //           font_size: "30 px",
// // // // // //           font_weight: "700",
// // // // // //           text_alignment: "center",
// // // // // //           animations: [
// // // // // //             { type: "fade", duration: 0.4 },
// // // // // //             { type: "fade", duration: 0.4, transition: false, time: slideDuration - 0.4, reversed: true },
// // // // // //           ],
// // // // // //         });
// // // // // //       }
// // // // // //     });
// // // // // //   }

// // // // // //   return {
// // // // // //     output_format: "mp4",
// // // // // //     width: 1080,
// // // // // //     height: 1920,
// // // // // //     frame_rate: 30,
// // // // // //     elements,
// // // // // //   };
// // // // // // }

// // // // // // app.post("/api/generate-video", async (req, res) => {
// // // // // //   const { imageUrls, captions } = req.body;
// // // // // //   if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length < 2) {
// // // // // //     return res.status(400).json({ success: false, error: "Provide at least 2 image URLs" });
// // // // // //   }
// // // // // //   if (!CREATOMATE_API_KEY) {
// // // // // //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// // // // // //   }

// // // // // //   try {
// // // // // //     const videoMoments = imageUrls.slice(0, 4);
// // // // // //     let renderResponse = null;

// // // // // //     if (CREATOMATE_TEMPLATE_ID) {
// // // // // //       try {
// // // // // //         const modifications = {};
// // // // // //         videoMoments.forEach((url, i) => {
// // // // // //           modifications[`Background-${i + 1}.source`] = url;
// // // // // //         });
// // // // // //         if (captions && captions.length > 0) {
// // // // // //           captions.slice(0, videoMoments.length).forEach((caption, i) => {
// // // // // //             modifications[`Text-${i + 1}.text`] = (caption || "").substring(0, 150);
// // // // // //           });
// // // // // //         }
// // // // // //         const tplRes = await axios.post(
// // // // // //           "https://api.creatomate.com/v2/renders",
// // // // // //           { template_id: CREATOMATE_TEMPLATE_ID, modifications },
// // // // // //           {
// // // // // //             headers: {
// // // // // //               Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// // // // // //               "Content-Type": "application/json",
// // // // // //             },
// // // // // //             timeout: 6000,
// // // // // //           }
// // // // // //         );
// // // // // //         renderResponse = tplRes.data;
// // // // // //       } catch (tplErr) {
// // // // // //         console.warn("Template render notice:", tplErr.message);
// // // // // //       }
// // // // // //     }

// // // // // //     if (!renderResponse) {
// // // // // //       const source = buildSlideshowRenderScript(videoMoments, captions);
// // // // // //       const scriptRes = await axios.post(
// // // // // //         "https://api.creatomate.com/v2/renders",
// // // // // //         { source },
// // // // // //         {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// // // // // //             "Content-Type": "application/json",
// // // // // //           },
// // // // // //           timeout: 6000,
// // // // // //         }
// // // // // //       );
// // // // // //       renderResponse = scriptRes.data;
// // // // // //     }

// // // // // //     const initialRender = Array.isArray(renderResponse) ? renderResponse[0] : renderResponse;
// // // // // //     if (!initialRender || !initialRender.id) {
// // // // // //       throw new Error("Invalid response from Creatomate");
// // // // // //     }

// // // // // //     res.json({
// // // // // //       success: true,
// // // // // //       videoUrl: initialRender.url,
// // // // // //       status: initialRender.status,
// // // // // //       renderId: initialRender.id,
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Failed to generate video", err.message);
// // // // // //   }
// // // // // // });

// // // // // // app.get("/api/video-status/:id", async (req, res) => {
// // // // // //   if (!CREATOMATE_API_KEY) {
// // // // // //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// // // // // //   }
// // // // // //   try {
// // // // // //     const statusRes = await axios.get(`https://api.creatomate.com/v2/renders/${req.params.id}`, {
// // // // // //       headers: { Authorization: `Bearer ${CREATOMATE_API_KEY}` },
// // // // // //       timeout: 6000,
// // // // // //     });
// // // // // //     const data = Array.isArray(statusRes.data) ? statusRes.data[0] : statusRes.data;
// // // // // //     res.json({
// // // // // //       success: true,
// // // // // //       status: data.status,
// // // // // //       videoUrl: data.url,
// // // // // //       errorMessage: data.error_message,
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     handleError(res, 500, "Failed to fetch video status", err.message);
// // // // // //   }
// // // // // // });

// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // // 🚀  START SERVER
// // // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // app.listen(PORT, () => {
// // // // // //   console.log(`\n✈️  TravioX Server running on port ${PORT}`);
// // // // // //   console.log(`   Health: http://localhost:${PORT}/api/health\n`);
// // // // // // });

// // // // // // module.exports = app;



















// // // // // require("dotenv").config();
// // // // // const express = require("express");
// // // // // const cors = require("cors");
// // // // // const axios = require("axios");
// // // // // const Groq = require("groq-sdk");

// // // // // const app = express();
// // // // // const PORT = process.env.PORT || 3000;

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🔑  API KEYS — Loaded from process.env (.env or Vercel Environment Variables)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // const GROQ_API_KEY = process.env.GROQ_API_KEY;
// // // // // const SERPAPI_KEY = process.env.SERPAPI_KEY;
// // // // // const RAPID_API_KEY = process.env.RAPID_API_KEY;
// // // // // const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
// // // // // const SARVAM_API_KEY = process.env.SARVAM_API_KEY;
// // // // // const CREATOMATE_API_KEY = process.env.CREATOMATE_API_KEY;
// // // // // const CREATOMATE_TEMPLATE_ID = process.env.CREATOMATE_TEMPLATE_ID;
// // // // // const GEOAPIFY_KEY = process.env.GEOAPIFY_KEY;

// // // // // // Log key availability without exiting process
// // // // // const REQUIRED_KEYS = [
// // // // //   "GROQ_API_KEY",
// // // // //   "SERPAPI_KEY",
// // // // //   "RAPID_API_KEY",
// // // // //   "UNSPLASH_ACCESS_KEY",
// // // // //   "SARVAM_API_KEY",
// // // // //   "CREATOMATE_API_KEY",
// // // // //   "GEOAPIFY_KEY",
// // // // // ];

// // // // // const missingKeys = REQUIRED_KEYS.filter((k) => !process.env[k]);
// // // // // if (missingKeys.length > 0) {
// // // // //   console.warn(`⚠️ Warning: Missing environment variables: ${missingKeys.join(", ")}`);
// // // // //   console.warn("Add these in Vercel Project Settings -> Environment Variables for full AI features.");
// // // // // } else {
// // // // //   console.log("✅ All required environment variables loaded.");
// // // // // }

// // // // // const groq = new Groq({ apiKey: GROQ_API_KEY || "dummy_key" });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // ⚙️  MIDDLEWARE
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.use(cors());
// // // // // app.use(express.json({ limit: "50mb" }));
// // // // // app.use(express.urlencoded({ limit: "50mb", extended: true }));
// // // // // app.use(express.static("public"));

// // // // // app.use((req, _res, next) => {
// // // // //   console.log(`📥 ${req.method} ${req.path}`);
// // // // //   next();
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🛠️  HELPERS
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // const getFormattedDate = (daysFromNow) => {
// // // // //   const d = new Date();
// // // // //   d.setDate(d.getDate() + daysFromNow);
// // // // //   return d.toISOString().split("T")[0];
// // // // // };

// // // // // const handleError = (res, statusCode, message, details = null) => {
// // // // //   console.error(`❌ Error (${statusCode}): ${message}`, details || "");
// // // // //   res.status(statusCode).json({
// // // // //     success: false,
// // // // //     error: message,
// // // // //     ...(details ? { details } : {}),
// // // // //   });
// // // // // };

// // // // // const parseNumeric = (val, fallback = 0) => {
// // // // //   if (typeof val === "number" && !isNaN(val)) return val;
// // // // //   if (!val) return fallback;
// // // // //   const cleaned = String(val).replace(/[^0-9.-]+/g, "");
// // // // //   const num = parseFloat(cleaned);
// // // // //   return isNaN(num) ? fallback : num;
// // // // // };

// // // // // const normalizeToString = (val) => {
// // // // //   if (!val) return "";
// // // // //   if (typeof val === "string") return val;
// // // // //   if (Array.isArray(val)) return val.join(", ");
// // // // //   if (typeof val === "object") {
// // // // //     if (val.dishes)
// // // // //       return Array.isArray(val.dishes) ? val.dishes.join(", ") : String(val.dishes);
// // // // //     return Object.values(val).join(", ");
// // // // //   }
// // // // //   return String(val);
// // // // // };

// // // // // const sanitizeDestinationInfo = (info) => ({
// // // // //   history: normalizeToString(info.history),
// // // // //   bestTime: normalizeToString(info.bestTime),
// // // // //   food: normalizeToString(info.food),
// // // // //   culture: normalizeToString(info.culture),
// // // // //   hiddenGem: normalizeToString(info.hiddenGem),
// // // // //   summary: normalizeToString(info.summary),
// // // // // });

// // // // // const splitIntoChunks = (text, maxLen = 490) => {
// // // // //   const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// // // // //   const chunks = [];
// // // // //   let current = "";
// // // // //   for (const sentence of sentences) {
// // // // //     if ((current + sentence).length <= maxLen) {
// // // // //       current += sentence;
// // // // //     } else {
// // // // //       if (current.trim()) chunks.push(current.trim());
// // // // //       if (sentence.length > maxLen) {
// // // // //         const words = sentence.split(" ");
// // // // //         let wordChunk = "";
// // // // //         for (const word of words) {
// // // // //           if ((wordChunk + " " + word).length <= maxLen) {
// // // // //             wordChunk += (wordChunk ? " " : "") + word;
// // // // //           } else {
// // // // //             if (wordChunk) chunks.push(wordChunk.trim());
// // // // //             wordChunk = word;
// // // // //           }
// // // // //         }
// // // // //         current = wordChunk;
// // // // //       } else {
// // // // //         current = sentence;
// // // // //       }
// // // // //     }
// // // // //   }
// // // // //   if (current.trim()) chunks.push(current.trim());
// // // // //   return chunks.filter(Boolean);
// // // // // };

// // // // // const translateText = async (text, targetLang) => {
// // // // //   if (targetLang === "en-IN" || !text || !SARVAM_API_KEY) return text;
// // // // //   try {
// // // // //     const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// // // // //     const translatedChunks = [];
// // // // //     let currentChunk = "";
// // // // //     for (const sentence of sentences) {
// // // // //       if ((currentChunk + sentence).length < 900) {
// // // // //         currentChunk += sentence;
// // // // //       } else {
// // // // //         if (currentChunk) {
// // // // //           const res = await axios.post(
// // // // //             "https://api.sarvam.ai/translate",
// // // // //             {
// // // // //               input: currentChunk,
// // // // //               source_language_code: "en-IN",
// // // // //               target_language_code: targetLang,
// // // // //               speaker_gender: "Female",
// // // // //             },
// // // // //             {
// // // // //               headers: {
// // // // //                 "api-subscription-key": SARVAM_API_KEY,
// // // // //                 "Content-Type": "application/json",
// // // // //               },
// // // // //               timeout: 6000,
// // // // //             }
// // // // //           );
// // // // //           translatedChunks.push(res.data.translated_text || currentChunk);
// // // // //         }
// // // // //         currentChunk = sentence;
// // // // //       }
// // // // //     }
// // // // //     if (currentChunk) {
// // // // //       const res = await axios.post(
// // // // //         "https://api.sarvam.ai/translate",
// // // // //         {
// // // // //           input: currentChunk,
// // // // //           source_language_code: "en-IN",
// // // // //           target_language_code: targetLang,
// // // // //           speaker_gender: "Female",
// // // // //         },
// // // // //         {
// // // // //           headers: {
// // // // //             "api-subscription-key": SARVAM_API_KEY,
// // // // //             "Content-Type": "application/json",
// // // // //           },
// // // // //           timeout: 6000,
// // // // //         }
// // // // //       );
// // // // //       translatedChunks.push(res.data.translated_text || currentChunk);
// // // // //     }
// // // // //     return translatedChunks.join(" ");
// // // // //   } catch (err) {
// // // // //     console.warn("Translation Notice:", err.response?.data || err.message);
// // // // //     return text;
// // // // //   }
// // // // // };

// // // // // const generateSarvamAudio = async (text, language = "en-IN", speaker = "meera") => {
// // // // //   if (!SARVAM_API_KEY || !text) return [];
// // // // //   try {
// // // // //     const chunks = splitIntoChunks(text, 490).slice(0, 3);
// // // // //     const audioSegments = [];
// // // // //     for (let i = 0; i < chunks.length; i++) {
// // // // //       const chunk = chunks[i];
// // // // //       const ttsRes = await axios.post(
// // // // //         "https://api.sarvam.ai/text-to-speech",
// // // // //         { inputs: [chunk], target_language_code: language, speaker_id: speaker },
// // // // //         {
// // // // //           headers: {
// // // // //             "api-subscription-key": SARVAM_API_KEY,
// // // // //             "Content-Type": "application/json",
// // // // //           },
// // // // //           timeout: 5000,
// // // // //         }
// // // // //       );
// // // // //       if (ttsRes.data?.audios?.[0]) {
// // // // //         audioSegments.push(ttsRes.data.audios[0]);
// // // // //       }
// // // // //     }
// // // // //     return audioSegments;
// // // // //   } catch (err) {
// // // // //     console.warn("Sarvam TTS Notice:", err.response?.data || err.message);
// // // // //     return [];
// // // // //   }
// // // // // };

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // ✅  HEALTH CHECK
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.get("/api/health", (_req, res) => {
// // // // //   res.json({
// // // // //     success: true,
// // // // //     message: "TravioX API is running ✈️",
// // // // //     timestamp: new Date().toISOString(),
// // // // //     keys_configured: {
// // // // //       groq: !!GROQ_API_KEY,
// // // // //       serpapi: !!SERPAPI_KEY,
// // // // //       rapidapi: !!RAPID_API_KEY,
// // // // //       unsplash: !!UNSPLASH_ACCESS_KEY,
// // // // //       sarvam: !!SARVAM_API_KEY,
// // // // //       creatomate: !!CREATOMATE_API_KEY,
// // // // //       geoapify: !!GEOAPIFY_KEY,
// // // // //     },
// // // // //   });
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🗺️  LIVE MAP — GEOCODE SEARCH (Geoapify)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.post("/api/live-map/geocode", async (req, res) => {
// // // // //   const { query } = req.body;
// // // // //   if (!query || !query.trim()) {
// // // // //     return handleError(res, 400, "query is required");
// // // // //   }
// // // // //   if (!GEOAPIFY_KEY) {
// // // // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // // // //   }
// // // // //   try {
// // // // //     const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
// // // // //       params: { text: query.trim(), apiKey: GEOAPIFY_KEY, limit: 1, format: "json" },
// // // // //       timeout: 6000,
// // // // //     });
// // // // //     const results = response.data?.results;
// // // // //     if (!results || results.length === 0) {
// // // // //       return res.status(404).json({ success: false, error: "Location not found" });
// // // // //     }
// // // // //     const place = results[0];
// // // // //     res.json({
// // // // //       success: true,
// // // // //       result: {
// // // // //         latitude: place.lat,
// // // // //         longitude: place.lon,
// // // // //         label: place.formatted || query,
// // // // //         country: place.country || "",
// // // // //         city: place.city || place.county || "",
// // // // //       },
// // // // //     });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Geocoding failed", err.message);
// // // // //   }
// // // // // });

// // // // // // ─────────────────────────────────────────────────────────────
// // // // // // Routing
// // // // // app.post("/api/live-map/route", async (req, res) => {
// // // // //   const { startLat, startLon, endLat, endLon, mode = "drive" } = req.body;
// // // // //   if (!startLat || !startLon || !endLat || !endLon) {
// // // // //     return handleError(res, 400, "startLat, startLon, endLat, endLon are all required");
// // // // //   }
// // // // //   if (!GEOAPIFY_KEY) {
// // // // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // // // //   }
// // // // //   const validModes = ["drive", "walk", "bicycle", "transit"];
// // // // //   const routeMode = validModes.includes(mode) ? mode : "drive";
// // // // //   try {
// // // // //     const url = "https://api.geoapify.com/v1/routing";
// // // // //     const response = await axios.get(url, {
// // // // //       params: {
// // // // //         waypoints: `${startLat},${startLon}|${endLat},${endLon}`,
// // // // //         mode: routeMode,
// // // // //         apiKey: GEOAPIFY_KEY,
// // // // //         format: "json",
// // // // //       },
// // // // //       timeout: 8000,
// // // // //     });
// // // // //     const features = response.data?.features;
// // // // //     if (!features || features.length === 0) {
// // // // //       return res.status(404).json({ success: false, error: "No route found" });
// // // // //     }
// // // // //     const feature = features[0];
// // // // //     const props = feature.properties;
// // // // //     let allCoords = [];
// // // // //     const geom = feature.geometry;
// // // // //     if (geom.type === "MultiLineString") {
// // // // //       geom.coordinates.forEach((line) => {
// // // // //         line.forEach(([lon, lat]) => allCoords.push({ latitude: lat, longitude: lon }));
// // // // //       });
// // // // //     } else if (geom.type === "LineString") {
// // // // //       geom.coordinates.forEach(([lon, lat]) =>
// // // // //         allCoords.push({ latitude: lat, longitude: lon })
// // // // //       );
// // // // //     }
// // // // //     res.json({
// // // // //       success: true,
// // // // //       route: {
// // // // //         coordinates: allCoords,
// // // // //         distance_km: parseFloat((props.distance / 1000).toFixed(2)),
// // // // //         duration_min: Math.round(props.time / 60),
// // // // //         mode: routeMode,
// // // // //       },
// // // // //     });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Route calculation failed", err.message);
// // // // //   }
// // // // // });

// // // // // // ─────────────────────────────────────────────────────────────
// // // // // // Reverse Geocode
// // // // // app.get("/api/live-map/reverse", async (req, res) => {
// // // // //   const { lat, lon } = req.query;
// // // // //   if (!lat || !lon) return handleError(res, 400, "lat and lon are required");
// // // // //   if (!GEOAPIFY_KEY) {
// // // // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // // // //   }
// // // // //   try {
// // // // //     const response = await axios.get("https://api.geoapify.com/v1/geocode/reverse", {
// // // // //       params: { lat, lon, apiKey: GEOAPIFY_KEY, format: "json" },
// // // // //       timeout: 6000,
// // // // //     });
// // // // //     const results = response.data?.results;
// // // // //     const label =
// // // // //       results?.[0]?.formatted || `${parseFloat(lat).toFixed(4)}, ${parseFloat(lon).toFixed(4)}`;
// // // // //     res.json({ success: true, label });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Reverse geocoding failed", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 📰  NEWS (RapidAPI)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.get("/api/startup-news", async (req, res) => {
// // // // //   const userQuery = req.query.q || "Travel";
// // // // //   if (!RAPID_API_KEY) {
// // // // //     return handleError(res, 500, "RAPID_API_KEY is not configured on server");
// // // // //   }
// // // // //   try {
// // // // //     const response = await axios.get("https://real-time-news-data.p.rapidapi.com/search", {
// // // // //       params: {
// // // // //         query: userQuery,
// // // // //         limit: 10,
// // // // //         time_published: "anytime",
// // // // //         country: "US",
// // // // //         lang: "en",
// // // // //       },
// // // // //       headers: {
// // // // //         "x-rapidapi-key": RAPID_API_KEY,
// // // // //         "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
// // // // //       },
// // // // //       timeout: 8000,
// // // // //     });
// // // // //     const formattedNews = (response.data.data || []).map((item) => ({
// // // // //       title: item.title,
// // // // //       summary: item.snippet || item.summary || "No summary available",
// // // // //       link: item.link,
// // // // //       published_date: item.published_datetime_utc || "",
// // // // //       image_url:
// // // // //         item.photo_url || item.thumbnail || "https://via.placeholder.com/400x200",
// // // // //     }));
// // // // //     res.json({ success: true, results: formattedNews });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "News fetch failed", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🧳  SMART PACKING LIST (Groq)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.post("/api/smart-packing", async (req, res) => {
// // // // //   const destination = req.body.destination || req.body.city || req.body.place || "Goa";
// // // // //   const tripType = req.body.tripType || "Leisure";
// // // // //   const duration = parseInt(req.body.duration || req.body.days || 5, 10);
// // // // //   const gender = req.body.gender || "Unspecified";
// // // // //   const luggageType = req.body.luggageType || "Backpack";
// // // // //   const specialActivities = Array.isArray(req.body.specialActivities) ? req.body.specialActivities : [];

// // // // //   try {
// // // // //     let packingData = null;

// // // // //     if (GROQ_API_KEY) {
// // // // //       try {
// // // // //         const activitiesStr = specialActivities.length > 0 ? specialActivities.join(", ") : "None";
// // // // //         const prompt = `You are a geo-climate travel expert. Analyze location "${destination}".
// // // // // Trip: ${tripType} | ${duration} days | Gender: ${gender} | Luggage: ${luggageType} | Activities: ${activitiesStr}
// // // // // ${tripType === "Family" ? "Include 'Kids & Baby Essentials' (icon: '🍼') category." : ""}
// // // // // Return STRICT JSON:
// // // // // {
// // // // //   "weather_summary": "Climate analysis for ${destination}",
// // // // //   "categories": [
// // // // //     {
// // // // //       "name": "Layering & Clothing",
// // // // //       "icon": "🧥",
// // // // //       "items": [{"item": "Comfortable clothes", "essential": true, "reason": "Daily wear"}]
// // // // //     },
// // // // //     {"name": "Footwear", "icon": "🥾", "items": [{"item": "Walking shoes", "essential": true, "reason": "Sightseeing"}]},
// // // // //     {"name": "Toiletries & Health", "icon": "🧴", "items": [{"item": "Sunscreen & Moisturizer", "essential": true, "reason": "Skin protection"}]},
// // // // //     {"name": "Electronics", "icon": "🔌", "items": [{"item": "Power bank & Chargers", "essential": true, "reason": "Phone backup"}]},
// // // // //     {"name": "Documents & Essentials", "icon": "📄", "items": [{"item": "ID Proof & Tickets", "essential": true, "reason": "Identity verification"}]}
// // // // //   ],
// // // // //   "pro_tips": ["Carry local currency and hydration supplies for ${destination}"]
// // // // // }`;

// // // // //         const completion = await groq.chat.completions.create({
// // // // //           messages: [
// // // // //             { role: "system", content: "You are an expert packing advisor. Return valid JSON only without markdown." },
// // // // //             { role: "user", content: prompt },
// // // // //           ],
// // // // //           model: "llama-3.3-70b-versatile",
// // // // //           response_format: { type: "json_object" },
// // // // //           temperature: 0.4,
// // // // //           max_tokens: 1500,
// // // // //         });

// // // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // // //         packingData = JSON.parse(cleanContent);
// // // // //       } catch (gErr) {
// // // // //         console.warn("Groq packing notice:", gErr.message);
// // // // //       }
// // // // //     }

// // // // //     if (!packingData || !packingData.categories) {
// // // // //       packingData = {
// // // // //         weather_summary: `Pleasant weather expected in ${destination}.`,
// // // // //         categories: [
// // // // //           {
// // // // //             name: "Layering & Clothing",
// // // // //             icon: "🧥",
// // // // //             items: [
// // // // //               { item: "Light breathable shirts/t-shirts (4-5 pairs)", essential: true, reason: "Daytime comfort" },
// // // // //               { item: "Comfortable pants or shorts (2-3 pairs)", essential: true, reason: "Sightseeing" },
// // // // //             ],
// // // // //           },
// // // // //           {
// // // // //             name: "Footwear",
// // // // //             icon: "🥾",
// // // // //             items: [
// // // // //               { item: "Comfortable walking shoes", essential: true, reason: "Long walks" },
// // // // //               { item: "Flip flops or sandals", essential: false, reason: "Relaxation" },
// // // // //             ],
// // // // //           },
// // // // //           {
// // // // //             name: "Toiletries & Health",
// // // // //             icon: "🧴",
// // // // //             items: [
// // // // //               { item: "Sunscreen SPF 50+", essential: true, reason: "Sun protection" },
// // // // //               { item: "Basic first aid & personal meds", essential: true, reason: "Emergencies" },
// // // // //             ],
// // // // //           },
// // // // //           {
// // // // //             name: "Electronics",
// // // // //             icon: "🔌",
// // // // //             items: [
// // // // //               { item: "Power bank 10,000mAh", essential: true, reason: "On-the-go charging" },
// // // // //               { item: "Universal charging adapter", essential: true, reason: "Device charging" },
// // // // //             ],
// // // // //           },
// // // // //           {
// // // // //             name: "Documents & Essentials",
// // // // //             icon: "📄",
// // // // //             items: [
// // // // //               { item: "Government ID & Hotel booking copy", essential: true, reason: "Check-in" },
// // // // //               { item: "Cash & backup cards", essential: true, reason: "Local shopping" },
// // // // //             ],
// // // // //           },
// // // // //         ],
// // // // //         pro_tips: [`Stay hydrated and keep local emergency contacts saved while in ${destination}.`],
// // // // //       };
// // // // //     }

// // // // //     res.json({ success: true, data: packingData });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Failed to generate packing list", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🗺️  DESTINATION INFO + AUDIO (Groq + Sarvam Fallback)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.post("/api/destination-info", async (req, res) => {
// // // // //   const city = req.body.city || req.body.destination || req.body.place || "Mumbai";
// // // // //   const language = req.body.language || "en-IN";

// // // // //   try {
// // // // //     let infoData = null;

// // // // //     if (GROQ_API_KEY) {
// // // // //       try {
// // // // //         const prompt = `You are an expert travel guide. Generate travel summary for ${city}, India.
// // // // // Return STRICT JSON:
// // // // // {
// // // // //   "history": "3 sentences covering origin, historical significance.",
// // // // //   "bestTime": "Which months/season and exactly why.",
// // // // //   "food": "Name 3 must-try local dishes as a comma-separated string.",
// // // // //   "culture": "2 sentences on local traditions.",
// // // // //   "hiddenGem": "One underrated spot.",
// // // // //   "summary": "A vivid 3-sentence overview."
// // // // // }`;

// // // // //         const completion = await groq.chat.completions.create({
// // // // //           messages: [
// // // // //             { role: "system", content: "You are an expert travel assistant. Return valid JSON only without markdown." },
// // // // //             { role: "user", content: prompt },
// // // // //           ],
// // // // //           model: "llama-3.3-70b-versatile",
// // // // //           response_format: { type: "json_object" },
// // // // //           temperature: 0.6,
// // // // //           max_tokens: 1000,
// // // // //         });

// // // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // // //         const rawInfo = JSON.parse(cleanContent);
// // // // //         infoData = sanitizeDestinationInfo(rawInfo);
// // // // //       } catch (groqErr) {
// // // // //         console.warn("Groq destination-info notice:", groqErr.message);
// // // // //       }
// // // // //     }

// // // // //     if (!infoData) {
// // // // //       infoData = {
// // // // //         history: `${city} boasts a vibrant history with century-old architecture and culturally rich roots.`,
// // // // //         bestTime: "October to March for optimal sightseeing weather.",
// // // // //         food: "Local Street Food, Regional Speciality Thali, Traditional Dessert",
// // // // //         culture: "Known for hospitable locals and colorful festivals.",
// // // // //         hiddenGem: "Historic backstreets and local viewpoints.",
// // // // //         summary: `Discover the unforgettable heritage, vibrant markets, and rich cuisine of ${city}.`,
// // // // //       };
// // // // //     }

// // // // //     let narrationScript = `Welcome to ${city}. ${infoData.summary} Best time to visit is ${infoData.bestTime}. Must-try foods: ${infoData.food}.`;
// // // // //     let audioSegments = [];

// // // // //     if (SARVAM_API_KEY) {
// // // // //       try {
// // // // //         if (language !== "en-IN") {
// // // // //           narrationScript = await translateText(narrationScript, language);
// // // // //         }
// // // // //         audioSegments = await generateSarvamAudio(narrationScript, language);
// // // // //       } catch (sErr) {
// // // // //         console.warn("Sarvam audio notice:", sErr.message);
// // // // //       }
// // // // //     }

// // // // //     res.json({
// // // // //       success: true,
// // // // //       data: {
// // // // //         info: infoData,
// // // // //         audioSegments,
// // // // //         audioBase64: audioSegments[0] || null,
// // // // //         generatedLanguage: language,
// // // // //       },
// // // // //     });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Failed to generate destination info", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🔊  TEXT-TO-SPEECH (Direct)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.post("/api/text-to-speech", async (req, res) => {
// // // // //   const { prompt, text, language = "en-IN", speaker = "meera" } = req.body;
// // // // //   try {
// // // // //     let finalText = text;
// // // // //     if (!finalText && prompt && GROQ_API_KEY) {
// // // // //       const completion = await groq.chat.completions.create({
// // // // //         messages: [
// // // // //           { role: "system", content: "You are a helpful travel assistant. Keep responses under 200 words." },
// // // // //           { role: "user", content: prompt },
// // // // //         ],
// // // // //         model: "llama-3.3-70b-versatile",
// // // // //         temperature: 0.7,
// // // // //         max_tokens: 300,
// // // // //       });
// // // // //       finalText = completion.choices[0].message.content;
// // // // //     }

// // // // //     if (!finalText) finalText = "Welcome to your TravioX journey.";
// // // // //     finalText = normalizeToString(finalText);

// // // // //     const audioSegments = await generateSarvamAudio(finalText, language, speaker);
// // // // //     res.json({
// // // // //       success: true,
// // // // //       audioSegments,
// // // // //       audioBase64: audioSegments[0] || null,
// // // // //       textUsed: finalText,
// // // // //       totalChunks: audioSegments.length,
// // // // //     });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Failed to generate speech", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 💰  AI BUDGET PLANNER (Groq with Full Numeric Validation & Fallback)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.post("/api/ai-budget", async (req, res) => {
// // // // //   const city = req.body.city || req.body.destination || req.body.place || req.body.location || "";
// // // // //   const travelers = Math.max(parseInt(req.body.travelers || 2, 10) || 2, 1);
// // // // //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 5, 10) || 5, 1), 30);
// // // // //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.style || "Mid-range";

// // // // //   if (!city || !city.trim()) {
// // // // //     return handleError(res, 400, "City name is required");
// // // // //   }

// // // // //   try {
// // // // //     let budgetData = null;

// // // // //     if (GROQ_API_KEY) {
// // // // //       try {
// // // // //         const prompt = `Create a detailed day-by-day travel budget for ${city.trim()}, India.
// // // // // Travelers: ${travelers} | Days: ${days} | Style: ${tripVibe}.
// // // // // Return ONLY valid JSON matching this exact structure:
// // // // // {
// // // // //   "dailyPlan": [
// // // // //     {
// // // // //       "day": 1,
// // // // //       "title": "Arrival and City Tour",
// // // // //       "activities": [{"item": "Iconic Sightseeing", "cost": 500}],
// // // // //       "accommodation": 2500,
// // // // //       "food": 1000,
// // // // //       "transport": 500
// // // // //     }
// // // // //   ],
// // // // //   "summary": {
// // // // //     "stayTotal": ${days * 2500},
// // // // //     "foodTotal": ${days * 1000},
// // // // //     "transportTotal": ${days * 500},
// // // // //     "activitiesTotal": ${days * 500},
// // // // //     "miscellaneous": 1000,
// // // // //     "grandTotal": ${days * 4500 + 1000}
// // // // //   },
// // // // //   "expertAdvice": "3 practical money-saving tips specific to ${city.trim()}",
// // // // //   "bestDeals": ["Use metro or shared rides", "Book accommodation in advance", "Try local dhabas and food markets"]
// // // // // }`;

// // // // //         const completion = await groq.chat.completions.create({
// // // // //           messages: [
// // // // //             {
// // // // //               role: "system",
// // // // //               content: "You are an expert travel budget planner. You must return valid JSON only. Do not include markdown codeblocks or extra text.",
// // // // //             },
// // // // //             { role: "user", content: prompt },
// // // // //           ],
// // // // //           model: "llama-3.3-70b-versatile",
// // // // //           response_format: { type: "json_object" },
// // // // //           temperature: 0.5,
// // // // //           max_tokens: 2500,
// // // // //         });

// // // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // // //         const cleanContent = rawContent
// // // // //           .replace(/^```json\s*/i, "")
// // // // //           .replace(/^```\s*/i, "")
// // // // //           .replace(/```\s*$/i, "")
// // // // //           .trim();

// // // // //         budgetData = JSON.parse(cleanContent);
// // // // //       } catch (groqErr) {
// // // // //         console.error("Groq AI Budget Error:", groqErr.message);
// // // // //       }
// // // // //     }

// // // // //     // Dynamic fallback calculation if Groq failed or key missing
// // // // //     if (!budgetData || !budgetData.dailyPlan) {
// // // // //       const stayRate = tripVibe.toLowerCase().includes("luxury") ? 6000 : tripVibe.toLowerCase().includes("budget") ? 1200 : 2500;
// // // // //       const foodRate = tripVibe.toLowerCase().includes("luxury") ? 2500 : tripVibe.toLowerCase().includes("budget") ? 500 : 1000;
// // // // //       const transportRate = tripVibe.toLowerCase().includes("luxury") ? 1500 : tripVibe.toLowerCase().includes("budget") ? 300 : 600;
// // // // //       const actRate = tripVibe.toLowerCase().includes("luxury") ? 2000 : tripVibe.toLowerCase().includes("budget") ? 400 : 800;

// // // // //       const dailyPlan = [];
// // // // //       for (let d = 1; d <= days; d++) {
// // // // //         dailyPlan.push({
// // // // //           day: d,
// // // // //           title: d === 1 ? `Day 1: Arrival & Exploring ${city}` : d === 2 ? `Day 2: Heritage & Local Flavors` : `Day ${d}: Highlights & Activities in ${city}`,
// // // // //           activities: [
// // // // //             { item: `Sightseeing & Attractions in ${city}`, cost: actRate },
// // // // //           ],
// // // // //           accommodation: stayRate,
// // // // //           food: foodRate,
// // // // //           transport: transportRate,
// // // // //         });
// // // // //       }

// // // // //       const stayTotal = stayRate * days;
// // // // //       const foodTotal = foodRate * days;
// // // // //       const transportTotal = transportRate * days;
// // // // //       const activitiesTotal = actRate * days;
// // // // //       const miscellaneous = Math.round((stayTotal + foodTotal) * 0.1);
// // // // //       const grandTotal = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;

// // // // //       budgetData = {
// // // // //         dailyPlan,
// // // // //         summary: {
// // // // //           stayTotal,
// // // // //           foodTotal,
// // // // //           transportTotal,
// // // // //           activitiesTotal,
// // // // //           miscellaneous,
// // // // //           grandTotal,
// // // // //         },
// // // // //         expertAdvice: `Book stays early in ${city} and opt for public transit or passes to save on daily travel costs.`,
// // // // //         bestDeals: [
// // // // //           "Use shared cabs or metro for local transit",
// // // // //           "Dine at authentic local restaurants instead of tourist hotspots",
// // // // //           "Look for combo attraction passes online",
// // // // //         ],
// // // // //       };
// // // // //     }

// // // // //     // Sanitize and ensure numeric consistency
// // // // //     const rawSummary = budgetData.summary || {};
// // // // //     const stayTotal = parseNumeric(rawSummary.stayTotal, 0);
// // // // //     const foodTotal = parseNumeric(rawSummary.foodTotal, 0);
// // // // //     const transportTotal = parseNumeric(rawSummary.transportTotal, 0);
// // // // //     const activitiesTotal = parseNumeric(rawSummary.activitiesTotal, 0);
// // // // //     const miscellaneous = parseNumeric(rawSummary.miscellaneous, 0);
// // // // //     const calculatedGrand = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;
// // // // //     const grandTotal = parseNumeric(rawSummary.grandTotal, calculatedGrand) || calculatedGrand;
// // // // //     const averageDailyBudget = Math.round(grandTotal / days) || Math.round(calculatedGrand / days);

// // // // //     const sanitizedData = {
// // // // //       dailyPlan: Array.isArray(budgetData.dailyPlan)
// // // // //         ? budgetData.dailyPlan.map((d, idx) => ({
// // // // //             day: parseNumeric(d.day, idx + 1),
// // // // //             title: d.title || `Day ${idx + 1}`,
// // // // //             activities: Array.isArray(d.activities)
// // // // //               ? d.activities.map((a) => ({
// // // // //                   item: a.item || "Sightseeing",
// // // // //                   cost: parseNumeric(a.cost, 0),
// // // // //                 }))
// // // // //               : [],
// // // // //             accommodation: parseNumeric(d.accommodation, 0),
// // // // //             food: parseNumeric(d.food, 0),
// // // // //             transport: parseNumeric(d.transport, 0),
// // // // //           }))
// // // // //         : [],
// // // // //       summary: {
// // // // //         stayTotal,
// // // // //         foodTotal,
// // // // //         transportTotal,
// // // // //         activitiesTotal,
// // // // //         miscellaneous,
// // // // //         grandTotal,
// // // // //       },
// // // // //       expertAdvice: normalizeToString(budgetData.expertAdvice || `Enjoy your trip to ${city}!`),
// // // // //       bestDeals: Array.isArray(budgetData.bestDeals)
// // // // //         ? budgetData.bestDeals.map((item) => normalizeToString(item))
// // // // //         : ["Book early for best rates", "Eat at local eateries", "Use public transit"],
// // // // //       averageDailyBudget,
// // // // //     };

// // // // //     res.json({
// // // // //       success: true,
// // // // //       data: sanitizedData,
// // // // //     });
// // // // //   } catch (err) {
// // // // //     console.error("Budget Generation Critical Error:", err);
// // // // //     handleError(res, 500, "Failed to generate budget", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 📋  AI ITINERARY PLANNER (Groq)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.post("/api/ai-planner", async (req, res) => {
// // // // //   const city = req.body.city || req.body.destination || req.body.place || "Jaipur";
// // // // //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 3, 10), 1), 7);
// // // // //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.tripType || "Balanced";

// // // // //   try {
// // // // //     let planData = null;

// // // // //     if (GROQ_API_KEY) {
// // // // //       try {
// // // // //         const prompt = `Create a detailed ${days}-day travel itinerary for ${city}, India. Vibe: ${tripVibe}.
// // // // // Return valid JSON with format:
// // // // // {
// // // // //   "itinerary": [
// // // // //     {
// // // // //       "day": 1,
// // // // //       "theme": "Arrival & City Highlights",
// // // // //       "activities": [
// // // // //         {"time": "Morning", "task": "Sightseeing", "description": "Explore top historical landmarks", "tips": "Start early"},
// // // // //         {"time": "Afternoon", "task": "Local Cuisine", "description": "Enjoy traditional regional food", "tips": "Visit famous local eatery"},
// // // // //         {"time": "Evening", "task": "Sunset & Stroll", "description": "Scenic sunset and market walk", "tips": "Great photography spot"}
// // // // //       ]
// // // // //     }
// // // // //   ],
// // // // //   "travel_tips": ["Carry comfortable walking shoes", "Keep cash handy for street vendors"],
// // // // //   "must_try_experiences": ["Local heritage walk", "Authentic regional street food"]
// // // // // }`;

// // // // //         const completion = await groq.chat.completions.create({
// // // // //           messages: [
// // // // //             { role: "system", content: "You are a professional travel planner. You must return valid JSON only without markdown formatting." },
// // // // //             { role: "user", content: prompt },
// // // // //           ],
// // // // //           model: "llama-3.3-70b-versatile",
// // // // //           response_format: { type: "json_object" },
// // // // //           temperature: 0.5,
// // // // //           max_tokens: 2200,
// // // // //         });

// // // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // // //         planData = JSON.parse(cleanContent);
// // // // //       } catch (groqErr) {
// // // // //         console.warn("Groq planner notice:", groqErr.message);
// // // // //       }
// // // // //     }

// // // // //     if (!planData || !planData.itinerary) {
// // // // //       const fallbackItinerary = [];
// // // // //       for (let d = 1; d <= days; d++) {
// // // // //         fallbackItinerary.push({
// // // // //           day: d,
// // // // //           theme: d === 1 ? `Welcome to ${city} & Iconic Landmarks` : d === 2 ? `Heritage, Culture & Local Flavors` : `Hidden Gems & Panoramic Views`,
// // // // //           activities: [
// // // // //             { time: "Morning", task: `Explore top sights in ${city}`, description: `Start the day visiting iconic landmarks and cultural attractions.`, tips: "Arrive early to avoid queues." },
// // // // //             { time: "Afternoon", task: "Culinary Walk & Markets", description: `Taste signature regional dishes and shop at local bazaars.`, tips: "Look for popular local food stalls." },
// // // // //             { time: "Evening", task: "Sunset & Scenic Spot", description: `Relax and watch the sunset from a popular viewpoint or promenade.`, tips: "Ideal time for photos." },
// // // // //           ],
// // // // //         });
// // // // //       }
// // // // //       planData = {
// // // // //         itinerary: fallbackItinerary,
// // // // //         travel_tips: ["Keep cash handy for local vendors", "Use ride-sharing or local transit for easy travel", "Stay hydrated and wear comfortable walking shoes"],
// // // // //         must_try_experiences: [`Signature food trail in ${city}`, `Heritage landmark tour`, `Sunset photography spot`],
// // // // //       };
// // // // //     }

// // // // //     res.json({ success: true, data: planData });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "AI Planner failed", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🤖  AI CHAT (Groq)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.post("/api/ai-chat", async (req, res) => {
// // // // //   const { message, history = [] } = req.body;
// // // // //   if (!message) return handleError(res, 400, "Message is required");
// // // // //   if (!GROQ_API_KEY) return handleError(res, 500, "GROQ_API_KEY is not configured");

// // // // //   try {
// // // // //     const messages = [
// // // // //       { role: "system", content: "You are TravioX, an expert Indian travel assistant. Keep responses helpful, engaging and concise." },
// // // // //       ...history.slice(-8),
// // // // //       { role: "user", content: message },
// // // // //     ];
// // // // //     const completion = await groq.chat.completions.create({
// // // // //       messages,
// // // // //       model: "llama-3.3-70b-versatile",
// // // // //       temperature: 0.7,
// // // // //       max_tokens: 400,
// // // // //     });
// // // // //     res.json({ success: true, reply: completion.choices[0].message.content });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "AI Chat failed", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 📷  PHOTOS (Unsplash)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.get("/api/photos", async (req, res) => {
// // // // //   const query = req.query.q;
// // // // //   if (!query || query.trim() === "") {
// // // // //     return res.status(400).json({ success: false, error: "Query parameter 'q' is required" });
// // // // //   }
// // // // //   if (!UNSPLASH_ACCESS_KEY) {
// // // // //     return handleError(res, 500, "UNSPLASH_ACCESS_KEY is not configured");
// // // // //   }
// // // // //   try {
// // // // //     const response = await axios.get("https://api.unsplash.com/search/photos", {
// // // // //       params: { query: query.trim(), per_page: 8, client_id: UNSPLASH_ACCESS_KEY },
// // // // //       timeout: 6000,
// // // // //     });
// // // // //     res.json({
// // // // //       success: true,
// // // // //       photos: response.data.results.map((img) => ({
// // // // //         id: img.id,
// // // // //         url: img.urls.regular,
// // // // //         thumb: img.urls.thumb,
// // // // //         description: img.alt_description || "",
// // // // //         credit: img.user?.name || "Unsplash",
// // // // //       })),
// // // // //     });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Failed to fetch images", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // ✈️  FLIGHTS (SerpApi)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.get("/api/flights", async (req, res) => {
// // // // //   let { departure_id = "BOM", arrival_id = "DEL" } = req.query;
// // // // //   if (!departure_id || !arrival_id || departure_id.length !== 3 || arrival_id.length !== 3) {
// // // // //     return res.status(400).json({
// // // // //       success: false,
// // // // //       error: "Please use valid 3-letter airport codes (e.g., BOM, DEL)",
// // // // //     });
// // // // //   }
// // // // //   if (!SERPAPI_KEY) {
// // // // //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// // // // //   }

// // // // //   const nextMonth = new Date();
// // // // //   nextMonth.setDate(nextMonth.getDate() + 30);
// // // // //   const travelDate = nextMonth.toISOString().split("T")[0];

// // // // //   try {
// // // // //     const response = await axios.get("https://serpapi.com/search", {
// // // // //       params: {
// // // // //         engine: "google_flights",
// // // // //         departure_id: departure_id.toUpperCase(),
// // // // //         arrival_id: arrival_id.toUpperCase(),
// // // // //         outbound_date: travelDate,
// // // // //         type: "2",
// // // // //         currency: "INR",
// // // // //         hl: "en",
// // // // //         gl: "us",
// // // // //         api_key: SERPAPI_KEY,
// // // // //       },
// // // // //       timeout: 10000,
// // // // //     });

// // // // //     const results = [
// // // // //       ...(response.data.best_flights || []),
// // // // //       ...(response.data.other_flights || []),
// // // // //     ];

// // // // //     if (results.length === 0) {
// // // // //       return res.json({ success: true, flights: [], message: "No flights found." });
// // // // //     }

// // // // //     const formatted = results.slice(0, 10).map((f) => {
// // // // //       const leg = f.flights?.[0] || {};
// // // // //       return {
// // // // //         airline: leg.airline || "Airline",
// // // // //         logo: leg.airline_logo || "",
// // // // //         flight_number: leg.flight_number || "",
// // // // //         departure: leg.departure_airport?.id || departure_id,
// // // // //         departure_name: leg.departure_airport?.name || departure_id,
// // // // //         arrival: leg.arrival_airport?.id || arrival_id,
// // // // //         arrival_name: leg.arrival_airport?.name || arrival_id,
// // // // //         departure_time: leg.departure_airport?.time?.split(" ")[1] || "10:00",
// // // // //         arrival_time: leg.arrival_airport?.time?.split(" ")[1] || "12:30",
// // // // //         duration: f.total_duration || 120,
// // // // //         status: f.type || "Available",
// // // // //         url: `https://www.google.com/travel/flights?q=flights%20from%20${departure_id}%20to%20${arrival_id}%20on%20${travelDate}`,
// // // // //       };
// // // // //     });

// // // // //     res.json({ success: true, flights: formatted });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Flight search failed", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🏨  HOTELS (SerpApi)
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.get("/api/hotels", async (req, res) => {
// // // // //   const { q = "Mumbai" } = req.query;
// // // // //   if (!SERPAPI_KEY) {
// // // // //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// // // // //   }
// // // // //   try {
// // // // //     const response = await axios.get("https://serpapi.com/search", {
// // // // //       params: {
// // // // //         engine: "google_hotels",
// // // // //         q: `${q} hotels`,
// // // // //         check_in_date: getFormattedDate(1),
// // // // //         check_out_date: getFormattedDate(3),
// // // // //         api_key: SERPAPI_KEY,
// // // // //         currency: "INR",
// // // // //         gl: "in",
// // // // //       },
// // // // //       timeout: 10000,
// // // // //     });
// // // // //     const hotels = (response.data.properties || []).slice(0, 8).map((h) => ({
// // // // //       name: h.name,
// // // // //       rating: h.overall_rating || "N/A",
// // // // //       price: h.rate_per_night?.lowest || "N/A",
// // // // //       thumbnail: h.images?.[0]?.thumbnail || "https://via.placeholder.com/300",
// // // // //       link: h.link || "#",
// // // // //     }));
// // // // //     res.json({ success: true, hotels });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Hotel search failed", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 📖  TRAVEL MEMORY BUILDER
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // async function analyzeTravelMoment(m, i) {
// // // // //   const userNote = (m.user_note || "").trim();
// // // // //   const rawBase64 = m.image_base64 || "";
// // // // //   const cleanBase64 = rawBase64.replace(/^data:image\/\w+;base64,/, "").trim();

// // // // //   if (cleanBase64 && GROQ_API_KEY) {
// // // // //     try {
// // // // //       const visionPrompt = `Analyze this travel photo. Traveler note: "${userNote || "Vacation"}". Return JSON: {"mood":"One word","mood_emoji":"emoji","scene_description":"1 sentence"}`;
// // // // //       const visionRes = await groq.chat.completions.create({
// // // // //         messages: [
// // // // //           {
// // // // //             role: "user",
// // // // //             content: [
// // // // //               { type: "text", text: visionPrompt },
// // // // //               { type: "image_url", image_url: { url: `data:image/jpeg;base64,${cleanBase64}` } },
// // // // //             ],
// // // // //           },
// // // // //         ],
// // // // //         model: "llama-3.2-11b-vision-preview",
// // // // //         response_format: { type: "json_object" },
// // // // //         temperature: 0.4,
// // // // //         max_tokens: 120,
// // // // //       });
// // // // //       const parsed = JSON.parse(visionRes.choices[0].message.content);
// // // // //       return {
// // // // //         index: i,
// // // // //         user_note: userNote,
// // // // //         mood: parsed.mood || "Adventurous",
// // // // //         mood_emoji: parsed.mood_emoji || "✨",
// // // // //         scene_description: parsed.scene_description || userNote || "A special travel memory.",
// // // // //       };
// // // // //     } catch (visionErr) {
// // // // //       console.warn(`Vision fallback for moment #${i + 1}`);
// // // // //     }
// // // // //   }

// // // // //   return {
// // // // //     index: i,
// // // // //     user_note: userNote,
// // // // //     mood: "Memorable",
// // // // //     mood_emoji: "📸",
// // // // //     scene_description: userNote || "A wonderful travel moment captured in time.",
// // // // //   };
// // // // // }

// // // // // app.post("/api/travel-memory-builder", async (req, res) => {
// // // // //   const { moments } = req.body;
// // // // //   if (!moments || !Array.isArray(moments) || moments.length < 2) {
// // // // //     return res.status(400).json({ success: false, error: "Provide at least 2 moments" });
// // // // //   }
// // // // //   if (!GROQ_API_KEY) {
// // // // //     return handleError(res, 500, "GROQ_API_KEY is not configured");
// // // // //   }

// // // // //   try {
// // // // //     const scenePromises = moments.map((m, i) => analyzeTravelMoment(m, i));
// // // // //     const scenes = await Promise.all(scenePromises);

// // // // //     const storyPrompt = `Create a travel diary and social captions from moments: ${JSON.stringify(scenes)}.
// // // // // Return JSON:
// // // // // {
// // // // //   "trip_title": "4-6 word evocative title",
// // // // //   "travel_story": "A rich 3-4 paragraph narrative connecting these moments.",
// // // // //   "timeline": [{"moment_index": 0, "social_caption": "Caption with 3 hashtags"}],
// // // // //   "tags": ["travel", "wanderlust", "explore", "memories", "adventure"],
// // // // //   "highlight_quote": "One unforgettable quote"
// // // // // }`;

// // // // //     const storyRes = await groq.chat.completions.create({
// // // // //       messages: [
// // // // //         { role: "system", content: "Return JSON only without markdown." },
// // // // //         { role: "user", content: storyPrompt },
// // // // //       ],
// // // // //       model: "llama-3.3-70b-versatile",
// // // // //       response_format: { type: "json_object" },
// // // // //       temperature: 0.6,
// // // // //       max_tokens: 1800,
// // // // //     });

// // // // //     let storyData;
// // // // //     try {
// // // // //       storyData = JSON.parse(storyRes.choices[0].message.content);
// // // // //     } catch {
// // // // //       storyData = {
// // // // //         trip_title: "Echoes of the Road",
// // // // //         travel_story: "Every journey writes a new chapter in our memories.",
// // // // //         tags: ["wanderlust", "explore", "memories"],
// // // // //         highlight_quote: "Collect moments, not things.",
// // // // //         timeline: [],
// // // // //       };
// // // // //     }

// // // // //     const timeline = scenes.map((s, i) => {
// // // // //       const match = storyData.timeline?.find((t) => t.moment_index === i || t.index === i);
// // // // //       return {
// // // // //         ...s,
// // // // //         social_caption: match?.social_caption || `${s.scene_description || s.user_note} ✨ #travel #adventure`,
// // // // //       };
// // // // //     });

// // // // //     res.json({
// // // // //       success: true,
// // // // //       data: {
// // // // //         trip_title: storyData.trip_title || "A Journey Remembered",
// // // // //         travel_story: storyData.travel_story || "Memories forged along the open road.",
// // // // //         tags: storyData.tags || ["travel", "wanderlust", "memories"],
// // // // //         highlight_quote: storyData.highlight_quote || "Collect moments, not things.",
// // // // //         timeline,
// // // // //         created_at: new Date().toISOString(),
// // // // //       },
// // // // //     });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Memory builder failed", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🎬  CREATOMATE VIDEO GENERATOR
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // function buildSlideshowRenderScript(imageUrls, captions = []) {
// // // // //   const photos = imageUrls.slice(0, 4);
// // // // //   const slideDuration = 3.5;
// // // // //   const elements = [];

// // // // //   photos.forEach((url, i) => {
// // // // //     elements.push({
// // // // //       type: "image",
// // // // //       source: url,
// // // // //       track: 1,
// // // // //       duration: slideDuration,
// // // // //       clip: true,
// // // // //       animations: [
// // // // //         { type: "scale", start_scale: i % 2 === 0 ? "100%" : "112%", end_scale: i % 2 === 0 ? "112%" : "100%", easing: "linear" },
// // // // //         ...(i > 0 ? [{ type: "fade", transition: true, duration: 0.6 }] : []),
// // // // //       ],
// // // // //     });
// // // // //   });

// // // // //   if (Array.isArray(captions) && captions.length > 0) {
// // // // //     photos.forEach((_, i) => {
// // // // //       const cap = captions[i];
// // // // //       if (cap && typeof cap === "string" && cap.trim()) {
// // // // //         elements.push({
// // // // //           type: "text",
// // // // //           text: cap.trim().substring(0, 100),
// // // // //           track: 2,
// // // // //           time: i * slideDuration,
// // // // //           duration: slideDuration,
// // // // //           y: "85%",
// // // // //           width: "86%",
// // // // //           fill_color: "#ffffff",
// // // // //           background_color: "rgba(10, 10, 10, 0.75)",
// // // // //           background_border_radius: "12 px",
// // // // //           padding: "14 px",
// // // // //           font_size: "30 px",
// // // // //           font_weight: "700",
// // // // //           text_alignment: "center",
// // // // //           animations: [
// // // // //             { type: "fade", duration: 0.4 },
// // // // //             { type: "fade", duration: 0.4, transition: false, time: slideDuration - 0.4, reversed: true },
// // // // //           ],
// // // // //         });
// // // // //       }
// // // // //     });
// // // // //   }

// // // // //   return {
// // // // //     output_format: "mp4",
// // // // //     width: 1080,
// // // // //     height: 1920,
// // // // //     frame_rate: 30,
// // // // //     elements,
// // // // //   };
// // // // // }

// // // // // app.post("/api/generate-video", async (req, res) => {
// // // // //   const { imageUrls, captions } = req.body;
// // // // //   if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length < 2) {
// // // // //     return res.status(400).json({ success: false, error: "Provide at least 2 image URLs" });
// // // // //   }
// // // // //   if (!CREATOMATE_API_KEY) {
// // // // //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// // // // //   }

// // // // //   try {
// // // // //     const videoMoments = imageUrls.slice(0, 4);
// // // // //     let renderResponse = null;

// // // // //     if (CREATOMATE_TEMPLATE_ID) {
// // // // //       try {
// // // // //         const modifications = {};
// // // // //         videoMoments.forEach((url, i) => {
// // // // //           modifications[`Background-${i + 1}.source`] = url;
// // // // //         });
// // // // //         if (captions && captions.length > 0) {
// // // // //           captions.slice(0, videoMoments.length).forEach((caption, i) => {
// // // // //             modifications[`Text-${i + 1}.text`] = (caption || "").substring(0, 150);
// // // // //           });
// // // // //         }
// // // // //         const tplRes = await axios.post(
// // // // //           "https://api.creatomate.com/v2/renders",
// // // // //           { template_id: CREATOMATE_TEMPLATE_ID, modifications },
// // // // //           {
// // // // //             headers: {
// // // // //               Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// // // // //               "Content-Type": "application/json",
// // // // //             },
// // // // //             timeout: 6000,
// // // // //           }
// // // // //         );
// // // // //         renderResponse = tplRes.data;
// // // // //       } catch (tplErr) {
// // // // //         console.warn("Template render notice:", tplErr.message);
// // // // //       }
// // // // //     }

// // // // //     if (!renderResponse) {
// // // // //       const source = buildSlideshowRenderScript(videoMoments, captions);
// // // // //       const scriptRes = await axios.post(
// // // // //         "https://api.creatomate.com/v2/renders",
// // // // //         { source },
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// // // // //             "Content-Type": "application/json",
// // // // //           },
// // // // //           timeout: 6000,
// // // // //         }
// // // // //       );
// // // // //       renderResponse = scriptRes.data;
// // // // //     }

// // // // //     const initialRender = Array.isArray(renderResponse) ? renderResponse[0] : renderResponse;
// // // // //     if (!initialRender || !initialRender.id) {
// // // // //       throw new Error("Invalid response from Creatomate");
// // // // //     }

// // // // //     res.json({
// // // // //       success: true,
// // // // //       videoUrl: initialRender.url,
// // // // //       status: initialRender.status,
// // // // //       renderId: initialRender.id,
// // // // //     });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Failed to generate video", err.message);
// // // // //   }
// // // // // });

// // // // // app.get("/api/video-status/:id", async (req, res) => {
// // // // //   if (!CREATOMATE_API_KEY) {
// // // // //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// // // // //   }
// // // // //   try {
// // // // //     const statusRes = await axios.get(`https://api.creatomate.com/v2/renders/${req.params.id}`, {
// // // // //       headers: { Authorization: `Bearer ${CREATOMATE_API_KEY}` },
// // // // //       timeout: 6000,
// // // // //     });
// // // // //     const data = Array.isArray(statusRes.data) ? statusRes.data[0] : statusRes.data;
// // // // //     res.json({
// // // // //       success: true,
// // // // //       status: data.status,
// // // // //       videoUrl: data.url,
// // // // //       errorMessage: data.error_message,
// // // // //     });
// // // // //   } catch (err) {
// // // // //     handleError(res, 500, "Failed to fetch video status", err.message);
// // // // //   }
// // // // // });

// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // // 🚀  START SERVER
// // // // // // ═══════════════════════════════════════════════════════════════
// // // // // app.listen(PORT, () => {
// // // // //   console.log(`\n✈️  TravioX Server running on port ${PORT}`);
// // // // //   console.log(`   Health: http://localhost:${PORT}/api/health\n`);
// // // // // });

// // // // // module.exports = app;










// // // // require("dotenv").config();
// // // // const express = require("express");
// // // // const cors = require("cors");
// // // // const axios = require("axios");
// // // // const Groq = require("groq-sdk");

// // // // const app = express();
// // // // const PORT = process.env.PORT || 3000;

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🔑  API KEYS — Loaded from process.env (.env or Vercel Environment Variables)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // const GROQ_API_KEY = process.env.GROQ_API_KEY;
// // // // const SERPAPI_KEY = process.env.SERPAPI_KEY;
// // // // const RAPID_API_KEY = process.env.RAPID_API_KEY;
// // // // const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
// // // // const SARVAM_API_KEY = process.env.SARVAM_API_KEY;
// // // // const CREATOMATE_API_KEY = process.env.CREATOMATE_API_KEY;
// // // // const CREATOMATE_TEMPLATE_ID = process.env.CREATOMATE_TEMPLATE_ID;
// // // // const GEOAPIFY_KEY = process.env.GEOAPIFY_KEY;

// // // // // Log key availability without exiting process
// // // // const REQUIRED_KEYS = [
// // // //   "GROQ_API_KEY",
// // // //   "SERPAPI_KEY",
// // // //   "RAPID_API_KEY",
// // // //   "UNSPLASH_ACCESS_KEY",
// // // //   "SARVAM_API_KEY",
// // // //   "CREATOMATE_API_KEY",
// // // //   "GEOAPIFY_KEY",
// // // // ];

// // // // const missingKeys = REQUIRED_KEYS.filter((k) => !process.env[k]);
// // // // if (missingKeys.length > 0) {
// // // //   console.warn(`⚠️ Warning: Missing environment variables: ${missingKeys.join(", ")}`);
// // // //   console.warn("Add these in Vercel Project Settings -> Environment Variables for full AI features.");
// // // // } else {
// // // //   console.log("✅ All required environment variables loaded.");
// // // // }

// // // // const groq = new Groq({ apiKey: GROQ_API_KEY || "dummy_key" });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // ⚙️  MIDDLEWARE
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.use(cors());
// // // // app.use(express.json({ limit: "50mb" }));
// // // // app.use(express.urlencoded({ limit: "50mb", extended: true }));
// // // // app.use(express.static("public"));

// // // // app.use((req, _res, next) => {
// // // //   console.log(`📥 ${req.method} ${req.path}`);
// // // //   next();
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🛠️  HELPERS
// // // // // ═══════════════════════════════════════════════════════════════
// // // // const getFormattedDate = (daysFromNow) => {
// // // //   const d = new Date();
// // // //   d.setDate(d.getDate() + daysFromNow);
// // // //   return d.toISOString().split("T")[0];
// // // // };

// // // // const handleError = (res, statusCode, message, details = null) => {
// // // //   console.error(`❌ Error (${statusCode}): ${message}`, details || "");
// // // //   res.status(statusCode).json({
// // // //     success: false,
// // // //     error: message,
// // // //     ...(details ? { details } : {}),
// // // //   });
// // // // };

// // // // const parseNumeric = (val, fallback = 0) => {
// // // //   if (typeof val === "number" && !isNaN(val)) return val;
// // // //   if (!val) return fallback;
// // // //   const cleaned = String(val).replace(/[^0-9.-]+/g, "");
// // // //   const num = parseFloat(cleaned);
// // // //   return isNaN(num) ? fallback : num;
// // // // };

// // // // const normalizeToString = (val) => {
// // // //   if (!val) return "";
// // // //   if (typeof val === "string") return val;
// // // //   if (Array.isArray(val)) return val.join(", ");
// // // //   if (typeof val === "object") {
// // // //     if (val.dishes)
// // // //       return Array.isArray(val.dishes) ? val.dishes.join(", ") : String(val.dishes);
// // // //     return Object.values(val).join(", ");
// // // //   }
// // // //   return String(val);
// // // // };

// // // // const sanitizeDestinationInfo = (info) => ({
// // // //   history: normalizeToString(info.history),
// // // //   bestTime: normalizeToString(info.bestTime),
// // // //   food: normalizeToString(info.food),
// // // //   culture: normalizeToString(info.culture),
// // // //   hiddenGem: normalizeToString(info.hiddenGem),
// // // //   summary: normalizeToString(info.summary),
// // // // });

// // // // const splitIntoChunks = (text, maxLen = 490) => {
// // // //   const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// // // //   const chunks = [];
// // // //   let current = "";
// // // //   for (const sentence of sentences) {
// // // //     if ((current + sentence).length <= maxLen) {
// // // //       current += sentence;
// // // //     } else {
// // // //       if (current.trim()) chunks.push(current.trim());
// // // //       if (sentence.length > maxLen) {
// // // //         const words = sentence.split(" ");
// // // //         let wordChunk = "";
// // // //         for (const word of words) {
// // // //           if ((wordChunk + " " + word).length <= maxLen) {
// // // //             wordChunk += (wordChunk ? " " : "") + word;
// // // //           } else {
// // // //             if (wordChunk) chunks.push(wordChunk.trim());
// // // //             wordChunk = word;
// // // //           }
// // // //         }
// // // //         current = wordChunk;
// // // //       } else {
// // // //         current = sentence;
// // // //       }
// // // //     }
// // // //   }
// // // //   if (current.trim()) chunks.push(current.trim());
// // // //   return chunks.filter(Boolean);
// // // // };

// // // // const translateText = async (text, targetLang) => {
// // // //   if (targetLang === "en-IN" || !text || !SARVAM_API_KEY) return text;
// // // //   try {
// // // //     const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// // // //     const translatedChunks = [];
// // // //     let currentChunk = "";
// // // //     for (const sentence of sentences) {
// // // //       if ((currentChunk + sentence).length < 900) {
// // // //         currentChunk += sentence;
// // // //       } else {
// // // //         if (currentChunk) {
// // // //           const res = await axios.post(
// // // //             "https://api.sarvam.ai/translate",
// // // //             {
// // // //               input: currentChunk,
// // // //               source_language_code: "en-IN",
// // // //               target_language_code: targetLang,
// // // //               speaker_gender: "Female",
// // // //             },
// // // //             {
// // // //               headers: {
// // // //                 "api-subscription-key": SARVAM_API_KEY,
// // // //                 "Content-Type": "application/json",
// // // //               },
// // // //               timeout: 6000,
// // // //             }
// // // //           );
// // // //           translatedChunks.push(res.data.translated_text || currentChunk);
// // // //         }
// // // //         currentChunk = sentence;
// // // //       }
// // // //     }
// // // //     if (currentChunk) {
// // // //       const res = await axios.post(
// // // //         "https://api.sarvam.ai/translate",
// // // //         {
// // // //           input: currentChunk,
// // // //           source_language_code: "en-IN",
// // // //           target_language_code: targetLang,
// // // //           speaker_gender: "Female",
// // // //         },
// // // //         {
// // // //           headers: {
// // // //             "api-subscription-key": SARVAM_API_KEY,
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //           timeout: 6000,
// // // //         }
// // // //       );
// // // //       translatedChunks.push(res.data.translated_text || currentChunk);
// // // //     }
// // // //     return translatedChunks.join(" ");
// // // //   } catch (err) {
// // // //     console.warn("Translation Notice:", err.response?.data || err.message);
// // // //     return text;
// // // //   }
// // // // };

// // // // const generateSarvamAudio = async (text, language = "en-IN", speaker = "meera") => {
// // // //   if (!SARVAM_API_KEY || !text) return [];
// // // //   try {
// // // //     const chunks = splitIntoChunks(text, 490).slice(0, 3);
// // // //     const audioSegments = [];
// // // //     for (let i = 0; i < chunks.length; i++) {
// // // //       const chunk = chunks[i];
// // // //       const ttsRes = await axios.post(
// // // //         "https://api.sarvam.ai/text-to-speech",
// // // //         { inputs: [chunk], target_language_code: language, speaker_id: speaker },
// // // //         {
// // // //           headers: {
// // // //             "api-subscription-key": SARVAM_API_KEY,
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //           timeout: 5000,
// // // //         }
// // // //       );
// // // //       if (ttsRes.data?.audios?.[0]) {
// // // //         audioSegments.push(ttsRes.data.audios[0]);
// // // //       }
// // // //     }
// // // //     return audioSegments;
// // // //   } catch (err) {
// // // //     console.warn("Sarvam TTS Notice:", err.response?.data || err.message);
// // // //     return [];
// // // //   }
// // // // };

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // ✅  HEALTH CHECK
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.get("/api/health", (_req, res) => {
// // // //   res.json({
// // // //     success: true,
// // // //     message: "TravioX API is running ✈️",
// // // //     timestamp: new Date().toISOString(),
// // // //     keys_configured: {
// // // //       groq: !!GROQ_API_KEY,
// // // //       serpapi: !!SERPAPI_KEY,
// // // //       rapidapi: !!RAPID_API_KEY,
// // // //       unsplash: !!UNSPLASH_ACCESS_KEY,
// // // //       sarvam: !!SARVAM_API_KEY,
// // // //       creatomate: !!CREATOMATE_API_KEY,
// // // //       geoapify: !!GEOAPIFY_KEY,
// // // //     },
// // // //   });
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🗺️  LIVE MAP — GEOCODE SEARCH (Geoapify)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.post("/api/live-map/geocode", async (req, res) => {
// // // //   const { query } = req.body;
// // // //   if (!query || !query.trim()) {
// // // //     return handleError(res, 400, "query is required");
// // // //   }
// // // //   if (!GEOAPIFY_KEY) {
// // // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // // //   }
// // // //   try {
// // // //     const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
// // // //       params: { text: query.trim(), apiKey: GEOAPIFY_KEY, limit: 1, format: "json" },
// // // //       timeout: 6000,
// // // //     });
// // // //     const results = response.data?.results;
// // // //     if (!results || results.length === 0) {
// // // //       return res.status(404).json({ success: false, error: "Location not found" });
// // // //     }
// // // //     const place = results[0];
// // // //     res.json({
// // // //       success: true,
// // // //       result: {
// // // //         latitude: place.lat,
// // // //         longitude: place.lon,
// // // //         label: place.formatted || query,
// // // //         country: place.country || "",
// // // //         city: place.city || place.county || "",
// // // //       },
// // // //     });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Geocoding failed", err.message);
// // // //   }
// // // // });

// // // // // ─────────────────────────────────────────────────────────────
// // // // // Routing
// // // // app.post("/api/live-map/route", async (req, res) => {
// // // //   const { startLat, startLon, endLat, endLon, mode = "drive" } = req.body;
// // // //   if (!startLat || !startLon || !endLat || !endLon) {
// // // //     return handleError(res, 400, "startLat, startLon, endLat, endLon are all required");
// // // //   }
// // // //   if (!GEOAPIFY_KEY) {
// // // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // // //   }
// // // //   const validModes = ["drive", "walk", "bicycle", "transit"];
// // // //   const routeMode = validModes.includes(mode) ? mode : "drive";
// // // //   try {
// // // //     const url = "https://api.geoapify.com/v1/routing";
// // // //     const response = await axios.get(url, {
// // // //       params: {
// // // //         waypoints: `${startLat},${startLon}|${endLat},${endLon}`,
// // // //         mode: routeMode,
// // // //         apiKey: GEOAPIFY_KEY,
// // // //         format: "json",
// // // //       },
// // // //       timeout: 8000,
// // // //     });
// // // //     const features = response.data?.features;
// // // //     if (!features || features.length === 0) {
// // // //       return res.status(404).json({ success: false, error: "No route found" });
// // // //     }
// // // //     const feature = features[0];
// // // //     const props = feature.properties;
// // // //     let allCoords = [];
// // // //     const geom = feature.geometry;
// // // //     if (geom.type === "MultiLineString") {
// // // //       geom.coordinates.forEach((line) => {
// // // //         line.forEach(([lon, lat]) => allCoords.push({ latitude: lat, longitude: lon }));
// // // //       });
// // // //     } else if (geom.type === "LineString") {
// // // //       geom.coordinates.forEach(([lon, lat]) =>
// // // //         allCoords.push({ latitude: lat, longitude: lon })
// // // //       );
// // // //     }
// // // //     res.json({
// // // //       success: true,
// // // //       route: {
// // // //         coordinates: allCoords,
// // // //         distance_km: parseFloat((props.distance / 1000).toFixed(2)),
// // // //         duration_min: Math.round(props.time / 60),
// // // //         mode: routeMode,
// // // //       },
// // // //     });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Route calculation failed", err.message);
// // // //   }
// // // // });

// // // // // ─────────────────────────────────────────────────────────────
// // // // // Reverse Geocode
// // // // app.get("/api/live-map/reverse", async (req, res) => {
// // // //   const { lat, lon } = req.query;
// // // //   if (!lat || !lon) return handleError(res, 400, "lat and lon are required");
// // // //   if (!GEOAPIFY_KEY) {
// // // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // // //   }
// // // //   try {
// // // //     const response = await axios.get("https://api.geoapify.com/v1/geocode/reverse", {
// // // //       params: { lat, lon, apiKey: GEOAPIFY_KEY, format: "json" },
// // // //       timeout: 6000,
// // // //     });
// // // //     const results = response.data?.results;
// // // //     const label =
// // // //       results?.[0]?.formatted || `${parseFloat(lat).toFixed(4)}, ${parseFloat(lon).toFixed(4)}`;
// // // //     res.json({ success: true, label });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Reverse geocoding failed", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 📰  NEWS (RapidAPI)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.get("/api/startup-news", async (req, res) => {
// // // //   const userQuery = req.query.q || "Travel";
// // // //   if (!RAPID_API_KEY) {
// // // //     return handleError(res, 500, "RAPID_API_KEY is not configured on server");
// // // //   }
// // // //   try {
// // // //     const response = await axios.get("https://real-time-news-data.p.rapidapi.com/search", {
// // // //       params: {
// // // //         query: userQuery,
// // // //         limit: 10,
// // // //         time_published: "anytime",
// // // //         country: "US",
// // // //         lang: "en",
// // // //       },
// // // //       headers: {
// // // //         "x-rapidapi-key": RAPID_API_KEY,
// // // //         "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
// // // //       },
// // // //       timeout: 8000,
// // // //     });
// // // //     const formattedNews = (response.data.data || []).map((item) => ({
// // // //       title: item.title,
// // // //       summary: item.snippet || item.summary || "No summary available",
// // // //       link: item.link,
// // // //       published_date: item.published_datetime_utc || "",
// // // //       image_url:
// // // //         item.photo_url || item.thumbnail || "https://via.placeholder.com/400x200",
// // // //     }));
// // // //     res.json({ success: true, results: formattedNews });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "News fetch failed", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🧳  SMART PACKING LIST (Groq)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.post("/api/smart-packing", async (req, res) => {
// // // //   const destination = req.body.destination || req.body.city || req.body.place || "Goa";
// // // //   const tripType = req.body.tripType || "Leisure";
// // // //   const duration = parseInt(req.body.duration || req.body.days || 5, 10);
// // // //   const gender = req.body.gender || "Unspecified";
// // // //   const luggageType = req.body.luggageType || "Backpack";
// // // //   const specialActivities = Array.isArray(req.body.specialActivities) ? req.body.specialActivities : [];

// // // //   try {
// // // //     let packingData = null;

// // // //     if (GROQ_API_KEY) {
// // // //       try {
// // // //         const activitiesStr = specialActivities.length > 0 ? specialActivities.join(", ") : "None";
// // // //         const prompt = `You are a geo-climate travel expert. Analyze location "${destination}".
// // // // Trip: ${tripType} | ${duration} days | Gender: ${gender} | Luggage: ${luggageType} | Activities: ${activitiesStr}
// // // // ${tripType === "Family" ? "Include 'Kids & Baby Essentials' (icon: '🍼') category." : ""}
// // // // Return STRICT JSON:
// // // // {
// // // //   "weather_summary": "Climate analysis for ${destination}",
// // // //   "categories": [
// // // //     {
// // // //       "name": "Layering & Clothing",
// // // //       "icon": "🧥",
// // // //       "items": [{"item": "Comfortable clothes", "essential": true, "reason": "Daily wear"}]
// // // //     },
// // // //     {"name": "Footwear", "icon": "🥾", "items": [{"item": "Walking shoes", "essential": true, "reason": "Sightseeing"}]},
// // // //     {"name": "Toiletries & Health", "icon": "🧴", "items": [{"item": "Sunscreen & Moisturizer", "essential": true, "reason": "Skin protection"}]},
// // // //     {"name": "Electronics", "icon": "🔌", "items": [{"item": "Power bank & Chargers", "essential": true, "reason": "Phone backup"}]},
// // // //     {"name": "Documents & Essentials", "icon": "📄", "items": [{"item": "ID Proof & Tickets", "essential": true, "reason": "Identity verification"}]}
// // // //   ],
// // // //   "pro_tips": ["Carry local currency and hydration supplies for ${destination}"]
// // // // }`;

// // // //         const completion = await groq.chat.completions.create({
// // // //           messages: [
// // // //             { role: "system", content: "You are an expert packing advisor. Return valid JSON only without markdown." },
// // // //             { role: "user", content: prompt },
// // // //           ],
// // // //           model: "llama-3.3-70b-versatile",
// // // //           response_format: { type: "json_object" },
// // // //           temperature: 0.4,
// // // //           max_tokens: 1500,
// // // //         });

// // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // //         packingData = JSON.parse(cleanContent);
// // // //       } catch (gErr) {
// // // //         console.warn("Groq packing notice:", gErr.message);
// // // //       }
// // // //     }

// // // //     if (!packingData || !packingData.categories) {
// // // //       packingData = {
// // // //         weather_summary: `Pleasant weather expected in ${destination}.`,
// // // //         categories: [
// // // //           {
// // // //             name: "Layering & Clothing",
// // // //             icon: "🧥",
// // // //             items: [
// // // //               { item: "Light breathable shirts/t-shirts (4-5 pairs)", essential: true, reason: "Daytime comfort" },
// // // //               { item: "Comfortable pants or shorts (2-3 pairs)", essential: true, reason: "Sightseeing" },
// // // //             ],
// // // //           },
// // // //           {
// // // //             name: "Footwear",
// // // //             icon: "🥾",
// // // //             items: [
// // // //               { item: "Comfortable walking shoes", essential: true, reason: "Long walks" },
// // // //               { item: "Flip flops or sandals", essential: false, reason: "Relaxation" },
// // // //             ],
// // // //           },
// // // //           {
// // // //             name: "Toiletries & Health",
// // // //             icon: "🧴",
// // // //             items: [
// // // //               { item: "Sunscreen SPF 50+", essential: true, reason: "Sun protection" },
// // // //               { item: "Basic first aid & personal meds", essential: true, reason: "Emergencies" },
// // // //             ],
// // // //           },
// // // //           {
// // // //             name: "Electronics",
// // // //             icon: "🔌",
// // // //             items: [
// // // //               { item: "Power bank 10,000mAh", essential: true, reason: "On-the-go charging" },
// // // //               { item: "Universal charging adapter", essential: true, reason: "Device charging" },
// // // //             ],
// // // //           },
// // // //           {
// // // //             name: "Documents & Essentials",
// // // //             icon: "📄",
// // // //             items: [
// // // //               { item: "Government ID & Hotel booking copy", essential: true, reason: "Check-in" },
// // // //               { item: "Cash & backup cards", essential: true, reason: "Local shopping" },
// // // //             ],
// // // //           },
// // // //         ],
// // // //         pro_tips: [`Stay hydrated and keep local emergency contacts saved while in ${destination}.`],
// // // //       };
// // // //     }

// // // //     res.json({ success: true, data: packingData });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Failed to generate packing list", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🗺️  DESTINATION INFO + AUDIO (Groq + Sarvam Fallback)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.post("/api/destination-info", async (req, res) => {
// // // //   const city = req.body.city || req.body.destination || req.body.place || "Mumbai";
// // // //   const language = req.body.language || "en-IN";

// // // //   try {
// // // //     let infoData = null;

// // // //     if (GROQ_API_KEY) {
// // // //       try {
// // // //         const prompt = `You are an expert travel guide. Generate travel summary for ${city}, India.
// // // // Return STRICT JSON:
// // // // {
// // // //   "history": "3 sentences covering origin, historical significance.",
// // // //   "bestTime": "Which months/season and exactly why.",
// // // //   "food": "Name 3 must-try local dishes as a comma-separated string.",
// // // //   "culture": "2 sentences on local traditions.",
// // // //   "hiddenGem": "One underrated spot.",
// // // //   "summary": "A vivid 3-sentence overview."
// // // // }`;

// // // //         const completion = await groq.chat.completions.create({
// // // //           messages: [
// // // //             { role: "system", content: "You are an expert travel assistant. Return valid JSON only without markdown." },
// // // //             { role: "user", content: prompt },
// // // //           ],
// // // //           model: "llama-3.3-70b-versatile",
// // // //           response_format: { type: "json_object" },
// // // //           temperature: 0.6,
// // // //           max_tokens: 1000,
// // // //         });

// // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // //         const rawInfo = JSON.parse(cleanContent);
// // // //         infoData = sanitizeDestinationInfo(rawInfo);
// // // //       } catch (groqErr) {
// // // //         console.warn("Groq destination-info notice:", groqErr.message);
// // // //       }
// // // //     }

// // // //     if (!infoData) {
// // // //       infoData = {
// // // //         history: `${city} boasts a vibrant history with century-old architecture and culturally rich roots.`,
// // // //         bestTime: "October to March for optimal sightseeing weather.",
// // // //         food: "Local Street Food, Regional Speciality Thali, Traditional Dessert",
// // // //         culture: "Known for hospitable locals and colorful festivals.",
// // // //         hiddenGem: "Historic backstreets and local viewpoints.",
// // // //         summary: `Discover the unforgettable heritage, vibrant markets, and rich cuisine of ${city}.`,
// // // //       };
// // // //     }

// // // //     let narrationScript = `Welcome to ${city}. ${infoData.summary} Best time to visit is ${infoData.bestTime}. Must-try foods: ${infoData.food}.`;
// // // //     let audioSegments = [];

// // // //     if (SARVAM_API_KEY) {
// // // //       try {
// // // //         if (language !== "en-IN") {
// // // //           narrationScript = await translateText(narrationScript, language);
// // // //         }
// // // //         audioSegments = await generateSarvamAudio(narrationScript, language);
// // // //       } catch (sErr) {
// // // //         console.warn("Sarvam audio notice:", sErr.message);
// // // //       }
// // // //     }

// // // //     res.json({
// // // //       success: true,
// // // //       data: {
// // // //         info: infoData,
// // // //         audioSegments,
// // // //         audioBase64: audioSegments[0] || null,
// // // //         generatedLanguage: language,
// // // //       },
// // // //     });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Failed to generate destination info", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🔊  TEXT-TO-SPEECH (Direct)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.post("/api/text-to-speech", async (req, res) => {
// // // //   const { prompt, text, language = "en-IN", speaker = "meera" } = req.body;
// // // //   try {
// // // //     let finalText = text;
// // // //     if (!finalText && prompt && GROQ_API_KEY) {
// // // //       const completion = await groq.chat.completions.create({
// // // //         messages: [
// // // //           { role: "system", content: "You are a helpful travel assistant. Keep responses under 200 words." },
// // // //           { role: "user", content: prompt },
// // // //         ],
// // // //         model: "llama-3.3-70b-versatile",
// // // //         temperature: 0.7,
// // // //         max_tokens: 300,
// // // //       });
// // // //       finalText = completion.choices[0].message.content;
// // // //     }

// // // //     if (!finalText) finalText = "Welcome to your TravioX journey.";
// // // //     finalText = normalizeToString(finalText);

// // // //     const audioSegments = await generateSarvamAudio(finalText, language, speaker);
// // // //     res.json({
// // // //       success: true,
// // // //       audioSegments,
// // // //       audioBase64: audioSegments[0] || null,
// // // //       textUsed: finalText,
// // // //       totalChunks: audioSegments.length,
// // // //     });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Failed to generate speech", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 💰  AI BUDGET PLANNER (Groq with Full Numeric Validation & Fallback)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.post("/api/ai-budget", async (req, res) => {
// // // //   const city = req.body.city || req.body.destination || req.body.place || req.body.location || "";
// // // //   const travelers = Math.max(parseInt(req.body.travelers || 2, 10) || 2, 1);
// // // //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 5, 10) || 5, 1), 30);
// // // //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.style || "Mid-range";

// // // //   if (!city || !city.trim()) {
// // // //     return handleError(res, 400, "City name is required");
// // // //   }

// // // //   try {
// // // //     let budgetData = null;

// // // //     if (GROQ_API_KEY) {
// // // //       try {
// // // //         const prompt = `Create a detailed day-by-day travel budget for ${city.trim()}, India.
// // // // Travelers: ${travelers} | Days: ${days} | Style: ${tripVibe}.
// // // // Return ONLY valid JSON matching this exact structure:
// // // // {
// // // //   "dailyPlan": [
// // // //     {
// // // //       "day": 1,
// // // //       "title": "Arrival and City Tour",
// // // //       "activities": [{"item": "Iconic Sightseeing", "cost": 500}],
// // // //       "accommodation": 2500,
// // // //       "food": 1000,
// // // //       "transport": 500
// // // //     }
// // // //   ],
// // // //   "summary": {
// // // //     "stayTotal": ${days * 2500},
// // // //     "foodTotal": ${days * 1000},
// // // //     "transportTotal": ${days * 500},
// // // //     "activitiesTotal": ${days * 500},
// // // //     "miscellaneous": 1000,
// // // //     "grandTotal": ${days * 4500 + 1000}
// // // //   },
// // // //   "expertAdvice": "3 practical money-saving tips specific to ${city.trim()}",
// // // //   "bestDeals": ["Use metro or shared rides", "Book accommodation in advance", "Try local dhabas and food markets"]
// // // // }`;

// // // //         const completion = await groq.chat.completions.create({
// // // //           messages: [
// // // //             {
// // // //               role: "system",
// // // //               content: "You are an expert travel budget planner. You must return valid JSON only. Do not include markdown codeblocks or extra text.",
// // // //             },
// // // //             { role: "user", content: prompt },
// // // //           ],
// // // //           model: "llama-3.3-70b-versatile",
// // // //           response_format: { type: "json_object" },
// // // //           temperature: 0.5,
// // // //           max_tokens: 2500,
// // // //         });

// // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // //         const cleanContent = rawContent
// // // //           .replace(/^```json\s*/i, "")
// // // //           .replace(/^```\s*/i, "")
// // // //           .replace(/```\s*$/i, "")
// // // //           .trim();

// // // //         budgetData = JSON.parse(cleanContent);
// // // //       } catch (groqErr) {
// // // //         console.error("Groq AI Budget Error:", groqErr.message);
// // // //       }
// // // //     }

// // // //     // Dynamic fallback calculation if Groq failed or key missing
// // // //     if (!budgetData || !budgetData.dailyPlan) {
// // // //       const stayRate = tripVibe.toLowerCase().includes("luxury") ? 6000 : tripVibe.toLowerCase().includes("budget") ? 1200 : 2500;
// // // //       const foodRate = tripVibe.toLowerCase().includes("luxury") ? 2500 : tripVibe.toLowerCase().includes("budget") ? 500 : 1000;
// // // //       const transportRate = tripVibe.toLowerCase().includes("luxury") ? 1500 : tripVibe.toLowerCase().includes("budget") ? 300 : 600;
// // // //       const actRate = tripVibe.toLowerCase().includes("luxury") ? 2000 : tripVibe.toLowerCase().includes("budget") ? 400 : 800;

// // // //       const dailyPlan = [];
// // // //       for (let d = 1; d <= days; d++) {
// // // //         dailyPlan.push({
// // // //           day: d,
// // // //           title: d === 1 ? `Day 1: Arrival & Exploring ${city}` : d === 2 ? `Day 2: Heritage & Local Flavors` : `Day ${d}: Highlights & Activities in ${city}`,
// // // //           activities: [
// // // //             { item: `Sightseeing & Attractions in ${city}`, cost: actRate },
// // // //           ],
// // // //           accommodation: stayRate,
// // // //           food: foodRate,
// // // //           transport: transportRate,
// // // //         });
// // // //       }

// // // //       const stayTotal = stayRate * days;
// // // //       const foodTotal = foodRate * days;
// // // //       const transportTotal = transportRate * days;
// // // //       const activitiesTotal = actRate * days;
// // // //       const miscellaneous = Math.round((stayTotal + foodTotal) * 0.1);
// // // //       const grandTotal = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;

// // // //       budgetData = {
// // // //         dailyPlan,
// // // //         summary: {
// // // //           stayTotal,
// // // //           foodTotal,
// // // //           transportTotal,
// // // //           activitiesTotal,
// // // //           miscellaneous,
// // // //           grandTotal,
// // // //         },
// // // //         expertAdvice: `Book stays early in ${city} and opt for public transit or passes to save on daily travel costs.`,
// // // //         bestDeals: [
// // // //           "Use shared cabs or metro for local transit",
// // // //           "Dine at authentic local restaurants instead of tourist hotspots",
// // // //           "Look for combo attraction passes online",
// // // //         ],
// // // //       };
// // // //     }

// // // //     // Sanitize and ensure numeric consistency
// // // //     const rawSummary = budgetData.summary || {};
// // // //     const stayTotal = parseNumeric(rawSummary.stayTotal, 0);
// // // //     const foodTotal = parseNumeric(rawSummary.foodTotal, 0);
// // // //     const transportTotal = parseNumeric(rawSummary.transportTotal, 0);
// // // //     const activitiesTotal = parseNumeric(rawSummary.activitiesTotal, 0);
// // // //     const miscellaneous = parseNumeric(rawSummary.miscellaneous, 0);
// // // //     const calculatedGrand = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;
// // // //     const grandTotal = parseNumeric(rawSummary.grandTotal, calculatedGrand) || calculatedGrand;
// // // //     const averageDailyBudget = Math.round(grandTotal / days) || Math.round(calculatedGrand / days);

// // // //     const sanitizedData = {
// // // //       dailyPlan: Array.isArray(budgetData.dailyPlan)
// // // //         ? budgetData.dailyPlan.map((d, idx) => ({
// // // //             day: parseNumeric(d.day, idx + 1),
// // // //             title: d.title || `Day ${idx + 1}`,
// // // //             activities: Array.isArray(d.activities)
// // // //               ? d.activities.map((a) => ({
// // // //                   item: a.item || "Sightseeing",
// // // //                   cost: parseNumeric(a.cost, 0),
// // // //                 }))
// // // //               : [],
// // // //             accommodation: parseNumeric(d.accommodation, 0),
// // // //             food: parseNumeric(d.food, 0),
// // // //             transport: parseNumeric(d.transport, 0),
// // // //           }))
// // // //         : [],
// // // //       summary: {
// // // //         stayTotal,
// // // //         foodTotal,
// // // //         transportTotal,
// // // //         activitiesTotal,
// // // //         miscellaneous,
// // // //         grandTotal,
// // // //       },
// // // //       expertAdvice: normalizeToString(budgetData.expertAdvice || `Enjoy your trip to ${city}!`),
// // // //       bestDeals: Array.isArray(budgetData.bestDeals)
// // // //         ? budgetData.bestDeals.map((item) => normalizeToString(item))
// // // //         : ["Book early for best rates", "Eat at local eateries", "Use public transit"],
// // // //       averageDailyBudget,
// // // //     };

// // // //     res.json({
// // // //       success: true,
// // // //       data: sanitizedData,
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Budget Generation Critical Error:", err);
// // // //     handleError(res, 500, "Failed to generate budget", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 📋  AI ITINERARY PLANNER (Groq)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.post("/api/ai-planner", async (req, res) => {
// // // //   const city = req.body.city || req.body.destination || req.body.place || "Jaipur";
// // // //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 3, 10), 1), 7);
// // // //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.tripType || "Balanced";

// // // //   try {
// // // //     let planData = null;

// // // //     if (GROQ_API_KEY) {
// // // //       try {
// // // //         const prompt = `Create a detailed ${days}-day travel itinerary for ${city}, India. Vibe: ${tripVibe}.
// // // // Return valid JSON with format:
// // // // {
// // // //   "itinerary": [
// // // //     {
// // // //       "day": 1,
// // // //       "theme": "Arrival & City Highlights",
// // // //       "activities": [
// // // //         {"time": "Morning", "task": "Sightseeing", "description": "Explore top historical landmarks", "tips": "Start early"},
// // // //         {"time": "Afternoon", "task": "Local Cuisine", "description": "Enjoy traditional regional food", "tips": "Visit famous local eatery"},
// // // //         {"time": "Evening", "task": "Sunset & Stroll", "description": "Scenic sunset and market walk", "tips": "Great photography spot"}
// // // //       ]
// // // //     }
// // // //   ],
// // // //   "travel_tips": ["Carry comfortable walking shoes", "Keep cash handy for street vendors"],
// // // //   "must_try_experiences": ["Local heritage walk", "Authentic regional street food"]
// // // // }`;

// // // //         const completion = await groq.chat.completions.create({
// // // //           messages: [
// // // //             { role: "system", content: "You are a professional travel planner. You must return valid JSON only without markdown formatting." },
// // // //             { role: "user", content: prompt },
// // // //           ],
// // // //           model: "llama-3.3-70b-versatile",
// // // //           response_format: { type: "json_object" },
// // // //           temperature: 0.5,
// // // //           max_tokens: 2200,
// // // //         });

// // // //         const rawContent = completion.choices[0]?.message?.content || "";
// // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // //         planData = JSON.parse(cleanContent);
// // // //       } catch (groqErr) {
// // // //         console.warn("Groq planner notice:", groqErr.message);
// // // //       }
// // // //     }

// // // //     if (!planData || !planData.itinerary) {
// // // //       const fallbackItinerary = [];
// // // //       for (let d = 1; d <= days; d++) {
// // // //         fallbackItinerary.push({
// // // //           day: d,
// // // //           theme: d === 1 ? `Welcome to ${city} & Iconic Landmarks` : d === 2 ? `Heritage, Culture & Local Flavors` : `Hidden Gems & Panoramic Views`,
// // // //           activities: [
// // // //             { time: "Morning", task: `Explore top sights in ${city}`, description: `Start the day visiting iconic landmarks and cultural attractions.`, tips: "Arrive early to avoid queues." },
// // // //             { time: "Afternoon", task: "Culinary Walk & Markets", description: `Taste signature regional dishes and shop at local bazaars.`, tips: "Look for popular local food stalls." },
// // // //             { time: "Evening", task: "Sunset & Scenic Spot", description: `Relax and watch the sunset from a popular viewpoint or promenade.`, tips: "Ideal time for photos." },
// // // //           ],
// // // //         });
// // // //       }
// // // //       planData = {
// // // //         itinerary: fallbackItinerary,
// // // //         travel_tips: ["Keep cash handy for local vendors", "Use ride-sharing or local transit for easy travel", "Stay hydrated and wear comfortable walking shoes"],
// // // //         must_try_experiences: [`Signature food trail in ${city}`, `Heritage landmark tour`, `Sunset photography spot`],
// // // //       };
// // // //     }

// // // //     res.json({ success: true, data: planData });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "AI Planner failed", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🤖  AI CHAT (Groq)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.post("/api/ai-chat", async (req, res) => {
// // // //   const { message, history = [] } = req.body;
// // // //   if (!message) return handleError(res, 400, "Message is required");
// // // //   if (!GROQ_API_KEY) return handleError(res, 500, "GROQ_API_KEY is not configured");

// // // //   try {
// // // //     const messages = [
// // // //       { role: "system", content: "You are TravioX, an expert Indian travel assistant. Keep responses helpful, engaging and concise." },
// // // //       ...history.slice(-8),
// // // //       { role: "user", content: message },
// // // //     ];
// // // //     const completion = await groq.chat.completions.create({
// // // //       messages,
// // // //       model: "llama-3.3-70b-versatile",
// // // //       temperature: 0.7,
// // // //       max_tokens: 400,
// // // //     });
// // // //     res.json({ success: true, reply: completion.choices[0].message.content });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "AI Chat failed", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 📷  PHOTOS (Unsplash)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.get("/api/photos", async (req, res) => {
// // // //   const query = req.query.q;
// // // //   if (!query || query.trim() === "") {
// // // //     return res.status(400).json({ success: false, error: "Query parameter 'q' is required" });
// // // //   }
// // // //   if (!UNSPLASH_ACCESS_KEY) {
// // // //     return handleError(res, 500, "UNSPLASH_ACCESS_KEY is not configured");
// // // //   }
// // // //   try {
// // // //     const response = await axios.get("https://api.unsplash.com/search/photos", {
// // // //       params: { query: query.trim(), per_page: 8, client_id: UNSPLASH_ACCESS_KEY },
// // // //       timeout: 6000,
// // // //     });
// // // //     res.json({
// // // //       success: true,
// // // //       photos: response.data.results.map((img) => ({
// // // //         id: img.id,
// // // //         url: img.urls.regular,
// // // //         thumb: img.urls.thumb,
// // // //         description: img.alt_description || "",
// // // //         credit: img.user?.name || "Unsplash",
// // // //       })),
// // // //     });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Failed to fetch images", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // ✈️  FLIGHTS (SerpApi)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.get("/api/flights", async (req, res) => {
// // // //   let { departure_id = "BOM", arrival_id = "DEL" } = req.query;
// // // //   if (!departure_id || !arrival_id || departure_id.length !== 3 || arrival_id.length !== 3) {
// // // //     return res.status(400).json({
// // // //       success: false,
// // // //       error: "Please use valid 3-letter airport codes (e.g., BOM, DEL)",
// // // //     });
// // // //   }
// // // //   if (!SERPAPI_KEY) {
// // // //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// // // //   }

// // // //   const nextMonth = new Date();
// // // //   nextMonth.setDate(nextMonth.getDate() + 30);
// // // //   const travelDate = nextMonth.toISOString().split("T")[0];

// // // //   try {
// // // //     const response = await axios.get("https://serpapi.com/search", {
// // // //       params: {
// // // //         engine: "google_flights",
// // // //         departure_id: departure_id.toUpperCase(),
// // // //         arrival_id: arrival_id.toUpperCase(),
// // // //         outbound_date: travelDate,
// // // //         type: "2",
// // // //         currency: "INR",
// // // //         hl: "en",
// // // //         gl: "us",
// // // //         api_key: SERPAPI_KEY,
// // // //       },
// // // //       timeout: 10000,
// // // //     });

// // // //     const results = [
// // // //       ...(response.data.best_flights || []),
// // // //       ...(response.data.other_flights || []),
// // // //     ];

// // // //     if (results.length === 0) {
// // // //       return res.json({ success: true, flights: [], message: "No flights found." });
// // // //     }

// // // //     const formatted = results.slice(0, 10).map((f) => {
// // // //       const leg = f.flights?.[0] || {};
// // // //       return {
// // // //         airline: leg.airline || "Airline",
// // // //         logo: leg.airline_logo || "",
// // // //         flight_number: leg.flight_number || "",
// // // //         departure: leg.departure_airport?.id || departure_id,
// // // //         departure_name: leg.departure_airport?.name || departure_id,
// // // //         arrival: leg.arrival_airport?.id || arrival_id,
// // // //         arrival_name: leg.arrival_airport?.name || arrival_id,
// // // //         departure_time: leg.departure_airport?.time?.split(" ")[1] || "10:00",
// // // //         arrival_time: leg.arrival_airport?.time?.split(" ")[1] || "12:30",
// // // //         duration: f.total_duration || 120,
// // // //         status: f.type || "Available",
// // // //         url: `https://www.google.com/travel/flights?q=flights%20from%20${departure_id}%20to%20${arrival_id}%20on%20${travelDate}`,
// // // //       };
// // // //     });

// // // //     res.json({ success: true, flights: formatted });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Flight search failed", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🏨  HOTELS (SerpApi)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.get("/api/hotels", async (req, res) => {
// // // //   const { q = "Mumbai" } = req.query;
// // // //   if (!SERPAPI_KEY) {
// // // //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// // // //   }
// // // //   try {
// // // //     const response = await axios.get("https://serpapi.com/search", {
// // // //       params: {
// // // //         engine: "google_hotels",
// // // //         q: `${q} hotels`,
// // // //         check_in_date: getFormattedDate(1),
// // // //         check_out_date: getFormattedDate(3),
// // // //         api_key: SERPAPI_KEY,
// // // //         currency: "INR",
// // // //         gl: "in",
// // // //       },
// // // //       timeout: 10000,
// // // //     });
// // // //     const hotels = (response.data.properties || []).slice(0, 8).map((h) => ({
// // // //       name: h.name,
// // // //       rating: h.overall_rating || "N/A",
// // // //       price: h.rate_per_night?.lowest || "N/A",
// // // //       thumbnail: h.images?.[0]?.thumbnail || "https://via.placeholder.com/300",
// // // //       link: h.link || "#",
// // // //     }));
// // // //     res.json({ success: true, hotels });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Hotel search failed", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 📖  TRAVEL MEMORY BUILDER (Fast, Robust & Vercel Optimized)
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.post("/api/travel-memory-builder", async (req, res) => {
// // // //   const { moments } = req.body;
// // // //   if (!moments || !Array.isArray(moments) || moments.length < 2) {
// // // //     return res.status(400).json({ success: false, error: "Provide at least 2 moments" });
// // // //   }

// // // //   try {
// // // //     const momentNotes = moments.map((m, i) => ({
// // // //       index: i,
// // // //       note: (m.user_note || m.note || `Moment ${i + 1}`).trim(),
// // // //     }));

// // // //     let storyData = null;

// // // //     if (GROQ_API_KEY) {
// // // //       try {
// // // //         const prompt = `A traveler captured ${momentNotes.length} memorable moments on their trip with the following personal notes:
// // // // ${JSON.stringify(momentNotes, null, 2)}

// // // // Craft an evocative, atmospheric travel diary and social media package based on these moments.
// // // // Return ONLY valid JSON matching this exact structure:
// // // // {
// // // //   "trip_title": "4-6 word evocative, poetic title for this journey",
// // // //   "travel_story": "A rich 3-4 paragraph narrative connecting these moments into an unforgettable adventure.",
// // // //   "highlight_quote": "One unforgettable quote summing up the soul of this trip",
// // // //   "tags": ["travel", "wanderlust", "memories", "explore", "adventure"],
// // // //   "timeline": [
// // // //     {
// // // //       "moment_index": 0,
// // // //       "mood": "1-word mood (e.g. Wonder, Serene, Adventurous, Euphoric, Nostalgic)",
// // // //       "mood_emoji": "1 matching emoji (e.g. 🌅, 🍜, 🏔️, 🏛️, ✨)",
// // // //       "scene_description": "Vivid 1-sentence description of the scene",
// // // //       "social_caption": "Engaging Instagram/TikTok caption with 3 trending hashtags"
// // // //     }
// // // //   ]
// // // // }

// // // // IMPORTANT: Provide an item in "timeline" for every moment index from 0 to ${momentNotes.length - 1}.`;

// // // //         const storyRes = await groq.chat.completions.create({
// // // //           messages: [
// // // //             {
// // // //               role: "system",
// // // //               content: "You are an acclaimed travel writer and storyteller. You must return valid JSON only without markdown codeblocks or extra text.",
// // // //             },
// // // //             { role: "user", content: prompt },
// // // //           ],
// // // //           model: "llama-3.3-70b-versatile",
// // // //           response_format: { type: "json_object" },
// // // //           temperature: 0.6,
// // // //           max_tokens: 2200,
// // // //         });

// // // //         const rawContent = storyRes.choices[0]?.message?.content || "";
// // // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // // //         storyData = JSON.parse(cleanContent);
// // // //       } catch (groqErr) {
// // // //         console.error("Groq Memory Builder Error:", groqErr.message);
// // // //       }
// // // //     }

// // // //     // Dynamic fallback if Groq is slow/down/unconfigured
// // // //     if (!storyData || !storyData.travel_story) {
// // // //       const defaultMoods = [
// // // //         { mood: "Adventurous", emoji: "🧭" },
// // // //         { mood: "Serene", emoji: "🌅" },
// // // //         { mood: "Euphoric", emoji: "✨" },
// // // //         { mood: "Wonder", emoji: "🏔️" },
// // // //         { mood: "Nostalgic", emoji: "📸" },
// // // //         { mood: "Joyful", emoji: "☕" },
// // // //       ];

// // // //       const fallbackTimeline = momentNotes.map((m, i) => {
// // // //         const moodObj = defaultMoods[i % defaultMoods.length];
// // // //         return {
// // // //           moment_index: i,
// // // //           mood: moodObj.mood,
// // // //           mood_emoji: moodObj.emoji,
// // // //           scene_description: m.note || `A special memory from moment #${i + 1}.`,
// // // //           social_caption: `${m.note || "Collecting memories along the way"} ✨ #travel #wanderlust #memories`,
// // // //         };
// // // //       });

// // // //       storyData = {
// // // //         trip_title: "Echoes of the Open Road",
// // // //         travel_story: `Every journey leaves a mark on our soul. From the early morning departures to the quiet reflections as dusk settled, each chapter carried its own distinctive rhythm.\n\nTraveling through these places was a reminder that the best moments are often the unscripted ones—the spontaneous encounters, the shared laughter, and the breathtaking vistas that photos can only begin to capture.\n\nThese memories stand as tokens of adventure, reminding us why we wander and inspiring the journeys yet to come.`,
// // // //         highlight_quote: "We travel not to escape life, but for life not to escape us.",
// // // //         tags: ["wanderlust", "traveldiaries", "explore", "memories", "adventure"],
// // // //         timeline: fallbackTimeline,
// // // //       };
// // // //     }

// // // //     // Ensure all moments have a timeline entry with complete fields
// // // //     const timeline = momentNotes.map((m, i) => {
// // // //       const match = storyData.timeline?.find((t) => t.moment_index === i || t.index === i);
// // // //       return {
// // // //         index: i,
// // // //         user_note: m.note,
// // // //         mood: match?.mood || "Memorable",
// // // //         mood_emoji: match?.mood_emoji || "📸",
// // // //         scene_description: match?.scene_description || m.note || `Travel memory #${i + 1}`,
// // // //         social_caption: match?.social_caption || `${m.note || "Travel memories"} ✨ #travel #wanderlust`,
// // // //       };
// // // //     });

// // // //     res.json({
// // // //       success: true,
// // // //       data: {
// // // //         trip_title: storyData.trip_title || "A Journey Remembered",
// // // //         travel_story: storyData.travel_story || "Memories forged along the open road.",
// // // //         highlight_quote: storyData.highlight_quote || "Collect moments, not things.",
// // // //         tags: Array.isArray(storyData.tags) ? storyData.tags : ["travel", "wanderlust", "memories"],
// // // //         timeline,
// // // //         created_at: new Date().toISOString(),
// // // //       },
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Memory Builder Critical Error:", err);
// // // //     handleError(res, 500, "Memory builder failed", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🎬  CREATOMATE VIDEO GENERATOR
// // // // // ═══════════════════════════════════════════════════════════════
// // // // function buildSlideshowRenderScript(imageUrls, captions = []) {
// // // //   const photos = imageUrls.slice(0, 4);
// // // //   const slideDuration = 3.5;
// // // //   const elements = [];

// // // //   photos.forEach((url, i) => {
// // // //     elements.push({
// // // //       type: "image",
// // // //       source: url,
// // // //       track: 1,
// // // //       duration: slideDuration,
// // // //       clip: true,
// // // //       animations: [
// // // //         { type: "scale", start_scale: i % 2 === 0 ? "100%" : "112%", end_scale: i % 2 === 0 ? "112%" : "100%", easing: "linear" },
// // // //         ...(i > 0 ? [{ type: "fade", transition: true, duration: 0.6 }] : []),
// // // //       ],
// // // //     });
// // // //   });

// // // //   if (Array.isArray(captions) && captions.length > 0) {
// // // //     photos.forEach((_, i) => {
// // // //       const cap = captions[i];
// // // //       if (cap && typeof cap === "string" && cap.trim()) {
// // // //         elements.push({
// // // //           type: "text",
// // // //           text: cap.trim().substring(0, 100),
// // // //           track: 2,
// // // //           time: i * slideDuration,
// // // //           duration: slideDuration,
// // // //           y: "85%",
// // // //           width: "86%",
// // // //           fill_color: "#ffffff",
// // // //           background_color: "rgba(10, 10, 10, 0.75)",
// // // //           background_border_radius: "12 px",
// // // //           padding: "14 px",
// // // //           font_size: "30 px",
// // // //           font_weight: "700",
// // // //           text_alignment: "center",
// // // //           animations: [
// // // //             { type: "fade", duration: 0.4 },
// // // //             { type: "fade", duration: 0.4, transition: false, time: slideDuration - 0.4, reversed: true },
// // // //           ],
// // // //         });
// // // //       }
// // // //     });
// // // //   }

// // // //   return {
// // // //     output_format: "mp4",
// // // //     width: 1080,
// // // //     height: 1920,
// // // //     frame_rate: 30,
// // // //     elements,
// // // //   };
// // // // }

// // // // app.post("/api/generate-video", async (req, res) => {
// // // //   const { imageUrls, captions } = req.body;
// // // //   if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length < 2) {
// // // //     return res.status(400).json({ success: false, error: "Provide at least 2 image URLs" });
// // // //   }
// // // //   if (!CREATOMATE_API_KEY) {
// // // //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// // // //   }

// // // //   try {
// // // //     const videoMoments = imageUrls.slice(0, 4);
// // // //     let renderResponse = null;

// // // //     if (CREATOMATE_TEMPLATE_ID) {
// // // //       try {
// // // //         const modifications = {};
// // // //         videoMoments.forEach((url, i) => {
// // // //           modifications[`Background-${i + 1}.source`] = url;
// // // //         });
// // // //         if (captions && captions.length > 0) {
// // // //           captions.slice(0, videoMoments.length).forEach((caption, i) => {
// // // //             modifications[`Text-${i + 1}.text`] = (caption || "").substring(0, 150);
// // // //           });
// // // //         }
// // // //         const tplRes = await axios.post(
// // // //           "https://api.creatomate.com/v2/renders",
// // // //           { template_id: CREATOMATE_TEMPLATE_ID, modifications },
// // // //           {
// // // //             headers: {
// // // //               Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// // // //               "Content-Type": "application/json",
// // // //             },
// // // //             timeout: 6000,
// // // //           }
// // // //         );
// // // //         renderResponse = tplRes.data;
// // // //       } catch (tplErr) {
// // // //         console.warn("Template render notice:", tplErr.message);
// // // //       }
// // // //     }

// // // //     if (!renderResponse) {
// // // //       const source = buildSlideshowRenderScript(videoMoments, captions);
// // // //       const scriptRes = await axios.post(
// // // //         "https://api.creatomate.com/v2/renders",
// // // //         { source },
// // // //         {
// // // //           headers: {
// // // //             Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// // // //             "Content-Type": "application/json",
// // // //           },
// // // //           timeout: 6000,
// // // //         }
// // // //       );
// // // //       renderResponse = scriptRes.data;
// // // //     }

// // // //     const initialRender = Array.isArray(renderResponse) ? renderResponse[0] : renderResponse;
// // // //     if (!initialRender || !initialRender.id) {
// // // //       throw new Error("Invalid response from Creatomate");
// // // //     }

// // // //     res.json({
// // // //       success: true,
// // // //       videoUrl: initialRender.url,
// // // //       status: initialRender.status,
// // // //       renderId: initialRender.id,
// // // //     });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Failed to generate video", err.message);
// // // //   }
// // // // });

// // // // app.get("/api/video-status/:id", async (req, res) => {
// // // //   if (!CREATOMATE_API_KEY) {
// // // //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// // // //   }
// // // //   try {
// // // //     const statusRes = await axios.get(`https://api.creatomate.com/v2/renders/${req.params.id}`, {
// // // //       headers: { Authorization: `Bearer ${CREATOMATE_API_KEY}` },
// // // //       timeout: 6000,
// // // //     });
// // // //     const data = Array.isArray(statusRes.data) ? statusRes.data[0] : statusRes.data;
// // // //     res.json({
// // // //       success: true,
// // // //       status: data.status,
// // // //       videoUrl: data.url,
// // // //       errorMessage: data.error_message,
// // // //     });
// // // //   } catch (err) {
// // // //     handleError(res, 500, "Failed to fetch video status", err.message);
// // // //   }
// // // // });

// // // // // ═══════════════════════════════════════════════════════════════
// // // // // 🚀  START SERVER
// // // // // ═══════════════════════════════════════════════════════════════
// // // // app.listen(PORT, () => {
// // // //   console.log(`\n✈️  TravioX Server running on port ${PORT}`);
// // // //   console.log(`   Health: http://localhost:${PORT}/api/health\n`);
// // // // });

// // // // module.exports = app;







// // // require("dotenv").config();
// // // const express = require("express");
// // // const cors = require("cors");
// // // const axios = require("axios");
// // // const Groq = require("groq-sdk");

// // // const app = express();
// // // const PORT = process.env.PORT || 3000;

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🔑  API KEYS — Loaded from process.env (.env or Vercel Environment Variables)
// // // // ═══════════════════════════════════════════════════════════════
// // // const GROQ_API_KEY = process.env.GROQ_API_KEY;
// // // const SERPAPI_KEY = process.env.SERPAPI_KEY;
// // // const RAPID_API_KEY = process.env.RAPID_API_KEY;
// // // const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
// // // const SARVAM_API_KEY = process.env.SARVAM_API_KEY;
// // // const CREATOMATE_API_KEY = process.env.CREATOMATE_API_KEY;
// // // const CREATOMATE_TEMPLATE_ID = process.env.CREATOMATE_TEMPLATE_ID;
// // // const GEOAPIFY_KEY = process.env.GEOAPIFY_KEY;

// // // // Log key availability without exiting process
// // // const REQUIRED_KEYS = [
// // //   "GROQ_API_KEY",
// // //   "SERPAPI_KEY",
// // //   "RAPID_API_KEY",
// // //   "UNSPLASH_ACCESS_KEY",
// // //   "SARVAM_API_KEY",
// // //   "CREATOMATE_API_KEY",
// // //   "GEOAPIFY_KEY",
// // // ];

// // // const missingKeys = REQUIRED_KEYS.filter((k) => !process.env[k]);
// // // if (missingKeys.length > 0) {
// // //   console.warn(`⚠️ Warning: Missing environment variables: ${missingKeys.join(", ")}`);
// // //   console.warn("Add these in Vercel Project Settings -> Environment Variables for full AI features.");
// // // } else {
// // //   console.log("✅ All required environment variables loaded.");
// // // }

// // // const groq = new Groq({ apiKey: GROQ_API_KEY || "dummy_key" });

// // // // ═══════════════════════════════════════════════════════════════
// // // // ⚙️  MIDDLEWARE
// // // // ═══════════════════════════════════════════════════════════════
// // // app.use(cors());
// // // app.use(express.json({ limit: "50mb" }));
// // // app.use(express.urlencoded({ limit: "50mb", extended: true }));
// // // app.use(express.static("public"));

// // // app.use((req, _res, next) => {
// // //   console.log(`📥 ${req.method} ${req.path}`);
// // //   next();
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🛠️  HELPERS
// // // // ═══════════════════════════════════════════════════════════════
// // // const getFormattedDate = (daysFromNow) => {
// // //   const d = new Date();
// // //   d.setDate(d.getDate() + daysFromNow);
// // //   return d.toISOString().split("T")[0];
// // // };

// // // const handleError = (res, statusCode, message, details = null) => {
// // //   console.error(`❌ Error (${statusCode}): ${message}`, details || "");
// // //   res.status(statusCode).json({
// // //     success: false,
// // //     error: message,
// // //     ...(details ? { details } : {}),
// // //   });
// // // };

// // // const parseNumeric = (val, fallback = 0) => {
// // //   if (typeof val === "number" && !isNaN(val)) return val;
// // //   if (!val) return fallback;
// // //   const cleaned = String(val).replace(/[^0-9.-]+/g, "");
// // //   const num = parseFloat(cleaned);
// // //   return isNaN(num) ? fallback : num;
// // // };

// // // const normalizeToString = (val) => {
// // //   if (!val) return "";
// // //   if (typeof val === "string") return val;
// // //   if (Array.isArray(val)) return val.join(", ");
// // //   if (typeof val === "object") {
// // //     if (val.dishes)
// // //       return Array.isArray(val.dishes) ? val.dishes.join(", ") : String(val.dishes);
// // //     return Object.values(val).join(", ");
// // //   }
// // //   return String(val);
// // // };

// // // const sanitizeDestinationInfo = (info) => ({
// // //   history: normalizeToString(info.history),
// // //   bestTime: normalizeToString(info.bestTime),
// // //   food: normalizeToString(info.food),
// // //   culture: normalizeToString(info.culture),
// // //   hiddenGem: normalizeToString(info.hiddenGem),
// // //   summary: normalizeToString(info.summary),
// // // });

// // // const splitIntoChunks = (text, maxLen = 490) => {
// // //   const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// // //   const chunks = [];
// // //   let current = "";
// // //   for (const sentence of sentences) {
// // //     if ((current + sentence).length <= maxLen) {
// // //       current += sentence;
// // //     } else {
// // //       if (current.trim()) chunks.push(current.trim());
// // //       if (sentence.length > maxLen) {
// // //         const words = sentence.split(" ");
// // //         let wordChunk = "";
// // //         for (const word of words) {
// // //           if ((wordChunk + " " + word).length <= maxLen) {
// // //             wordChunk += (wordChunk ? " " : "") + word;
// // //           } else {
// // //             if (wordChunk) chunks.push(wordChunk.trim());
// // //             wordChunk = word;
// // //           }
// // //         }
// // //         current = wordChunk;
// // //       } else {
// // //         current = sentence;
// // //       }
// // //     }
// // //   }
// // //   if (current.trim()) chunks.push(current.trim());
// // //   return chunks.filter(Boolean);
// // // };

// // // const translateText = async (text, targetLang) => {
// // //   if (targetLang === "en-IN" || !text || !SARVAM_API_KEY) return text;
// // //   try {
// // //     const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// // //     const translatedChunks = [];
// // //     let currentChunk = "";
// // //     for (const sentence of sentences) {
// // //       if ((currentChunk + sentence).length < 900) {
// // //         currentChunk += sentence;
// // //       } else {
// // //         if (currentChunk) {
// // //           const res = await axios.post(
// // //             "https://api.sarvam.ai/translate",
// // //             {
// // //               input: currentChunk,
// // //               source_language_code: "en-IN",
// // //               target_language_code: targetLang,
// // //               speaker_gender: "Female",
// // //             },
// // //             {
// // //               headers: {
// // //                 "api-subscription-key": SARVAM_API_KEY,
// // //                 "Content-Type": "application/json",
// // //               },
// // //               timeout: 6000,
// // //             }
// // //           );
// // //           translatedChunks.push(res.data.translated_text || currentChunk);
// // //         }
// // //         currentChunk = sentence;
// // //       }
// // //     }
// // //     if (currentChunk) {
// // //       const res = await axios.post(
// // //         "https://api.sarvam.ai/translate",
// // //         {
// // //           input: currentChunk,
// // //           source_language_code: "en-IN",
// // //           target_language_code: targetLang,
// // //           speaker_gender: "Female",
// // //         },
// // //         {
// // //           headers: {
// // //             "api-subscription-key": SARVAM_API_KEY,
// // //             "Content-Type": "application/json",
// // //           },
// // //           timeout: 6000,
// // //         }
// // //       );
// // //       translatedChunks.push(res.data.translated_text || currentChunk);
// // //     }
// // //     return translatedChunks.join(" ");
// // //   } catch (err) {
// // //     console.warn("Translation Notice:", err.response?.data || err.message);
// // //     return text;
// // //   }
// // // };

// // // const generateSarvamAudio = async (text, language = "en-IN", speaker = "meera") => {
// // //   if (!SARVAM_API_KEY || !text) return [];
// // //   try {
// // //     const chunks = splitIntoChunks(text, 490).slice(0, 3);
// // //     const audioSegments = [];
// // //     for (let i = 0; i < chunks.length; i++) {
// // //       const chunk = chunks[i];
// // //       const ttsRes = await axios.post(
// // //         "https://api.sarvam.ai/text-to-speech",
// // //         { inputs: [chunk], target_language_code: language, speaker_id: speaker },
// // //         {
// // //           headers: {
// // //             "api-subscription-key": SARVAM_API_KEY,
// // //             "Content-Type": "application/json",
// // //           },
// // //           timeout: 5000,
// // //         }
// // //       );
// // //       if (ttsRes.data?.audios?.[0]) {
// // //         audioSegments.push(ttsRes.data.audios[0]);
// // //       }
// // //     }
// // //     return audioSegments;
// // //   } catch (err) {
// // //     console.warn("Sarvam TTS Notice:", err.response?.data || err.message);
// // //     return [];
// // //   }
// // // };

// // // // ═══════════════════════════════════════════════════════════════
// // // // ✅  HEALTH CHECK
// // // // ═══════════════════════════════════════════════════════════════
// // // app.get("/api/health", (_req, res) => {
// // //   res.json({
// // //     success: true,
// // //     message: "TravioX API is running ✈️",
// // //     timestamp: new Date().toISOString(),
// // //     keys_configured: {
// // //       groq: !!GROQ_API_KEY,
// // //       serpapi: !!SERPAPI_KEY,
// // //       rapidapi: !!RAPID_API_KEY,
// // //       unsplash: !!UNSPLASH_ACCESS_KEY,
// // //       sarvam: !!SARVAM_API_KEY,
// // //       creatomate: !!CREATOMATE_API_KEY,
// // //       geoapify: !!GEOAPIFY_KEY,
// // //     },
// // //   });
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🗺️  LIVE MAP — GEOCODE SEARCH (Geoapify)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.post("/api/live-map/geocode", async (req, res) => {
// // //   const { query } = req.body;
// // //   if (!query || !query.trim()) {
// // //     return handleError(res, 400, "query is required");
// // //   }
// // //   if (!GEOAPIFY_KEY) {
// // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // //   }
// // //   try {
// // //     const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
// // //       params: { text: query.trim(), apiKey: GEOAPIFY_KEY, limit: 1, format: "json" },
// // //       timeout: 6000,
// // //     });
// // //     const results = response.data?.results;
// // //     if (!results || results.length === 0) {
// // //       return res.status(404).json({ success: false, error: "Location not found" });
// // //     }
// // //     const place = results[0];
// // //     res.json({
// // //       success: true,
// // //       result: {
// // //         latitude: place.lat,
// // //         longitude: place.lon,
// // //         label: place.formatted || query,
// // //         country: place.country || "",
// // //         city: place.city || place.county || "",
// // //       },
// // //     });
// // //   } catch (err) {
// // //     handleError(res, 500, "Geocoding failed", err.message);
// // //   }
// // // });

// // // // ─────────────────────────────────────────────────────────────
// // // // Routing
// // // app.post("/api/live-map/route", async (req, res) => {
// // //   const { startLat, startLon, endLat, endLon, mode = "drive" } = req.body;
// // //   if (!startLat || !startLon || !endLat || !endLon) {
// // //     return handleError(res, 400, "startLat, startLon, endLat, endLon are all required");
// // //   }
// // //   if (!GEOAPIFY_KEY) {
// // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // //   }
// // //   const validModes = ["drive", "walk", "bicycle", "transit"];
// // //   const routeMode = validModes.includes(mode) ? mode : "drive";
// // //   try {
// // //     const url = "https://api.geoapify.com/v1/routing";
// // //     const response = await axios.get(url, {
// // //       params: {
// // //         waypoints: `${startLat},${startLon}|${endLat},${endLon}`,
// // //         mode: routeMode,
// // //         apiKey: GEOAPIFY_KEY,
// // //         format: "json",
// // //       },
// // //       timeout: 8000,
// // //     });
// // //     const features = response.data?.features;
// // //     if (!features || features.length === 0) {
// // //       return res.status(404).json({ success: false, error: "No route found" });
// // //     }
// // //     const feature = features[0];
// // //     const props = feature.properties;
// // //     let allCoords = [];
// // //     const geom = feature.geometry;
// // //     if (geom.type === "MultiLineString") {
// // //       geom.coordinates.forEach((line) => {
// // //         line.forEach(([lon, lat]) => allCoords.push({ latitude: lat, longitude: lon }));
// // //       });
// // //     } else if (geom.type === "LineString") {
// // //       geom.coordinates.forEach(([lon, lat]) =>
// // //         allCoords.push({ latitude: lat, longitude: lon })
// // //       );
// // //     }
// // //     res.json({
// // //       success: true,
// // //       route: {
// // //         coordinates: allCoords,
// // //         distance_km: parseFloat((props.distance / 1000).toFixed(2)),
// // //         duration_min: Math.round(props.time / 60),
// // //         mode: routeMode,
// // //       },
// // //     });
// // //   } catch (err) {
// // //     handleError(res, 500, "Route calculation failed", err.message);
// // //   }
// // // });

// // // // ─────────────────────────────────────────────────────────────
// // // // Reverse Geocode
// // // app.get("/api/live-map/reverse", async (req, res) => {
// // //   const { lat, lon } = req.query;
// // //   if (!lat || !lon) return handleError(res, 400, "lat and lon are required");
// // //   if (!GEOAPIFY_KEY) {
// // //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// // //   }
// // //   try {
// // //     const response = await axios.get("https://api.geoapify.com/v1/geocode/reverse", {
// // //       params: { lat, lon, apiKey: GEOAPIFY_KEY, format: "json" },
// // //       timeout: 6000,
// // //     });
// // //     const results = response.data?.results;
// // //     const label =
// // //       results?.[0]?.formatted || `${parseFloat(lat).toFixed(4)}, ${parseFloat(lon).toFixed(4)}`;
// // //     res.json({ success: true, label });
// // //   } catch (err) {
// // //     handleError(res, 500, "Reverse geocoding failed", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 📰  NEWS (RapidAPI)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.get("/api/startup-news", async (req, res) => {
// // //   const userQuery = req.query.q || "Travel";
// // //   if (!RAPID_API_KEY) {
// // //     return handleError(res, 500, "RAPID_API_KEY is not configured on server");
// // //   }
// // //   try {
// // //     const response = await axios.get("https://real-time-news-data.p.rapidapi.com/search", {
// // //       params: {
// // //         query: userQuery,
// // //         limit: 10,
// // //         time_published: "anytime",
// // //         country: "US",
// // //         lang: "en",
// // //       },
// // //       headers: {
// // //         "x-rapidapi-key": RAPID_API_KEY,
// // //         "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
// // //       },
// // //       timeout: 8000,
// // //     });
// // //     const formattedNews = (response.data.data || []).map((item) => ({
// // //       title: item.title,
// // //       summary: item.snippet || item.summary || "No summary available",
// // //       link: item.link,
// // //       published_date: item.published_datetime_utc || "",
// // //       image_url:
// // //         item.photo_url || item.thumbnail || "https://via.placeholder.com/400x200",
// // //     }));
// // //     res.json({ success: true, results: formattedNews });
// // //   } catch (err) {
// // //     handleError(res, 500, "News fetch failed", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🧳  SMART PACKING LIST (Groq)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.post("/api/smart-packing", async (req, res) => {
// // //   const destination = req.body.destination || req.body.city || req.body.place || "Goa";
// // //   const tripType = req.body.tripType || "Leisure";
// // //   const duration = parseInt(req.body.duration || req.body.days || 5, 10);
// // //   const gender = req.body.gender || "Unspecified";
// // //   const luggageType = req.body.luggageType || "Backpack";
// // //   const specialActivities = Array.isArray(req.body.specialActivities) ? req.body.specialActivities : [];

// // //   try {
// // //     let packingData = null;

// // //     if (GROQ_API_KEY) {
// // //       try {
// // //         const activitiesStr = specialActivities.length > 0 ? specialActivities.join(", ") : "None";
// // //         const prompt = `You are a geo-climate travel expert. Analyze location "${destination}".
// // // Trip: ${tripType} | ${duration} days | Gender: ${gender} | Luggage: ${luggageType} | Activities: ${activitiesStr}
// // // ${tripType === "Family" ? "Include 'Kids & Baby Essentials' (icon: '🍼') category." : ""}
// // // Return STRICT JSON:
// // // {
// // //   "weather_summary": "Climate analysis for ${destination}",
// // //   "categories": [
// // //     {
// // //       "name": "Layering & Clothing",
// // //       "icon": "🧥",
// // //       "items": [{"item": "Comfortable clothes", "essential": true, "reason": "Daily wear"}]
// // //     },
// // //     {"name": "Footwear", "icon": "🥾", "items": [{"item": "Walking shoes", "essential": true, "reason": "Sightseeing"}]},
// // //     {"name": "Toiletries & Health", "icon": "🧴", "items": [{"item": "Sunscreen & Moisturizer", "essential": true, "reason": "Skin protection"}]},
// // //     {"name": "Electronics", "icon": "🔌", "items": [{"item": "Power bank & Chargers", "essential": true, "reason": "Phone backup"}]},
// // //     {"name": "Documents & Essentials", "icon": "📄", "items": [{"item": "ID Proof & Tickets", "essential": true, "reason": "Identity verification"}]}
// // //   ],
// // //   "pro_tips": ["Carry local currency and hydration supplies for ${destination}"]
// // // }`;

// // //         const completion = await groq.chat.completions.create({
// // //           messages: [
// // //             { role: "system", content: "You are an expert packing advisor. Return valid JSON only without markdown." },
// // //             { role: "user", content: prompt },
// // //           ],
// // //           model: "llama-3.3-70b-versatile",
// // //           response_format: { type: "json_object" },
// // //           temperature: 0.4,
// // //           max_tokens: 1500,
// // //         });

// // //         const rawContent = completion.choices[0]?.message?.content || "";
// // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // //         packingData = JSON.parse(cleanContent);
// // //       } catch (gErr) {
// // //         console.warn("Groq packing notice:", gErr.message);
// // //       }
// // //     }

// // //     if (!packingData || !packingData.categories) {
// // //       packingData = {
// // //         weather_summary: `Pleasant weather expected in ${destination}.`,
// // //         categories: [
// // //           {
// // //             name: "Layering & Clothing",
// // //             icon: "🧥",
// // //             items: [
// // //               { item: "Light breathable shirts/t-shirts (4-5 pairs)", essential: true, reason: "Daytime comfort" },
// // //               { item: "Comfortable pants or shorts (2-3 pairs)", essential: true, reason: "Sightseeing" },
// // //             ],
// // //           },
// // //           {
// // //             name: "Footwear",
// // //             icon: "🥾",
// // //             items: [
// // //               { item: "Comfortable walking shoes", essential: true, reason: "Long walks" },
// // //               { item: "Flip flops or sandals", essential: false, reason: "Relaxation" },
// // //             ],
// // //           },
// // //           {
// // //             name: "Toiletries & Health",
// // //             icon: "🧴",
// // //             items: [
// // //               { item: "Sunscreen SPF 50+", essential: true, reason: "Sun protection" },
// // //               { item: "Basic first aid & personal meds", essential: true, reason: "Emergencies" },
// // //             ],
// // //           },
// // //           {
// // //             name: "Electronics",
// // //             icon: "🔌",
// // //             items: [
// // //               { item: "Power bank 10,000mAh", essential: true, reason: "On-the-go charging" },
// // //               { item: "Universal charging adapter", essential: true, reason: "Device charging" },
// // //             ],
// // //           },
// // //           {
// // //             name: "Documents & Essentials",
// // //             icon: "📄",
// // //             items: [
// // //               { item: "Government ID & Hotel booking copy", essential: true, reason: "Check-in" },
// // //               { item: "Cash & backup cards", essential: true, reason: "Local shopping" },
// // //             ],
// // //           },
// // //         ],
// // //         pro_tips: [`Stay hydrated and keep local emergency contacts saved while in ${destination}.`],
// // //       };
// // //     }

// // //     res.json({ success: true, data: packingData });
// // //   } catch (err) {
// // //     handleError(res, 500, "Failed to generate packing list", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🗺️  DESTINATION INFO + AUDIO (Groq + Sarvam Fallback)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.post("/api/destination-info", async (req, res) => {
// // //   const city = req.body.city || req.body.destination || req.body.place || "Mumbai";
// // //   const language = req.body.language || "en-IN";

// // //   try {
// // //     let infoData = null;

// // //     if (GROQ_API_KEY) {
// // //       try {
// // //         const prompt = `You are an expert travel guide. Generate travel summary for ${city}, India.
// // // Return STRICT JSON:
// // // {
// // //   "history": "3 sentences covering origin, historical significance.",
// // //   "bestTime": "Which months/season and exactly why.",
// // //   "food": "Name 3 must-try local dishes as a comma-separated string.",
// // //   "culture": "2 sentences on local traditions.",
// // //   "hiddenGem": "One underrated spot.",
// // //   "summary": "A vivid 3-sentence overview."
// // // }`;

// // //         const completion = await groq.chat.completions.create({
// // //           messages: [
// // //             { role: "system", content: "You are an expert travel assistant. Return valid JSON only without markdown." },
// // //             { role: "user", content: prompt },
// // //           ],
// // //           model: "llama-3.3-70b-versatile",
// // //           response_format: { type: "json_object" },
// // //           temperature: 0.6,
// // //           max_tokens: 1000,
// // //         });

// // //         const rawContent = completion.choices[0]?.message?.content || "";
// // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // //         const rawInfo = JSON.parse(cleanContent);
// // //         infoData = sanitizeDestinationInfo(rawInfo);
// // //       } catch (groqErr) {
// // //         console.warn("Groq destination-info notice:", groqErr.message);
// // //       }
// // //     }

// // //     if (!infoData) {
// // //       infoData = {
// // //         history: `${city} boasts a vibrant history with century-old architecture and culturally rich roots.`,
// // //         bestTime: "October to March for optimal sightseeing weather.",
// // //         food: "Local Street Food, Regional Speciality Thali, Traditional Dessert",
// // //         culture: "Known for hospitable locals and colorful festivals.",
// // //         hiddenGem: "Historic backstreets and local viewpoints.",
// // //         summary: `Discover the unforgettable heritage, vibrant markets, and rich cuisine of ${city}.`,
// // //       };
// // //     }

// // //     let narrationScript = `Welcome to ${city}. ${infoData.summary} Best time to visit is ${infoData.bestTime}. Must-try foods: ${infoData.food}.`;
// // //     let audioSegments = [];

// // //     if (SARVAM_API_KEY) {
// // //       try {
// // //         if (language !== "en-IN") {
// // //           narrationScript = await translateText(narrationScript, language);
// // //         }
// // //         audioSegments = await generateSarvamAudio(narrationScript, language);
// // //       } catch (sErr) {
// // //         console.warn("Sarvam audio notice:", sErr.message);
// // //       }
// // //     }

// // //     res.json({
// // //       success: true,
// // //       data: {
// // //         info: infoData,
// // //         audioSegments,
// // //         audioBase64: audioSegments[0] || null,
// // //         generatedLanguage: language,
// // //       },
// // //     });
// // //   } catch (err) {
// // //     handleError(res, 500, "Failed to generate destination info", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🔊  TEXT-TO-SPEECH (Direct)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.post("/api/text-to-speech", async (req, res) => {
// // //   const { prompt, text, language = "en-IN", speaker = "meera" } = req.body;
// // //   try {
// // //     let finalText = text;
// // //     if (!finalText && prompt && GROQ_API_KEY) {
// // //       const completion = await groq.chat.completions.create({
// // //         messages: [
// // //           { role: "system", content: "You are a helpful travel assistant. Keep responses under 200 words." },
// // //           { role: "user", content: prompt },
// // //         ],
// // //         model: "llama-3.3-70b-versatile",
// // //         temperature: 0.7,
// // //         max_tokens: 300,
// // //       });
// // //       finalText = completion.choices[0].message.content;
// // //     }

// // //     if (!finalText) finalText = "Welcome to your TravioX journey.";
// // //     finalText = normalizeToString(finalText);

// // //     const audioSegments = await generateSarvamAudio(finalText, language, speaker);
// // //     res.json({
// // //       success: true,
// // //       audioSegments,
// // //       audioBase64: audioSegments[0] || null,
// // //       textUsed: finalText,
// // //       totalChunks: audioSegments.length,
// // //     });
// // //   } catch (err) {
// // //     handleError(res, 500, "Failed to generate speech", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 💰  AI BUDGET PLANNER (Groq with Full Numeric Validation & Fallback)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.post("/api/ai-budget", async (req, res) => {
// // //   const city = req.body.city || req.body.destination || req.body.place || req.body.location || "";
// // //   const travelers = Math.max(parseInt(req.body.travelers || 2, 10) || 2, 1);
// // //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 5, 10) || 5, 1), 30);
// // //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.style || "Mid-range";

// // //   if (!city || !city.trim()) {
// // //     return handleError(res, 400, "City name is required");
// // //   }

// // //   try {
// // //     let budgetData = null;

// // //     if (GROQ_API_KEY) {
// // //       try {
// // //         const prompt = `Create a detailed day-by-day travel budget for ${city.trim()}, India.
// // // Travelers: ${travelers} | Days: ${days} | Style: ${tripVibe}.
// // // Return ONLY valid JSON matching this exact structure:
// // // {
// // //   "dailyPlan": [
// // //     {
// // //       "day": 1,
// // //       "title": "Arrival and City Tour",
// // //       "activities": [{"item": "Iconic Sightseeing", "cost": 500}],
// // //       "accommodation": 2500,
// // //       "food": 1000,
// // //       "transport": 500
// // //     }
// // //   ],
// // //   "summary": {
// // //     "stayTotal": ${days * 2500},
// // //     "foodTotal": ${days * 1000},
// // //     "transportTotal": ${days * 500},
// // //     "activitiesTotal": ${days * 500},
// // //     "miscellaneous": 1000,
// // //     "grandTotal": ${days * 4500 + 1000}
// // //   },
// // //   "expertAdvice": "3 practical money-saving tips specific to ${city.trim()}",
// // //   "bestDeals": ["Use metro or shared rides", "Book accommodation in advance", "Try local dhabas and food markets"]
// // // }`;

// // //         const completion = await groq.chat.completions.create({
// // //           messages: [
// // //             {
// // //               role: "system",
// // //               content: "You are an expert travel budget planner. You must return valid JSON only. Do not include markdown codeblocks or extra text.",
// // //             },
// // //             { role: "user", content: prompt },
// // //           ],
// // //           model: "llama-3.3-70b-versatile",
// // //           response_format: { type: "json_object" },
// // //           temperature: 0.5,
// // //           max_tokens: 2500,
// // //         });

// // //         const rawContent = completion.choices[0]?.message?.content || "";
// // //         const cleanContent = rawContent
// // //           .replace(/^```json\s*/i, "")
// // //           .replace(/^```\s*/i, "")
// // //           .replace(/```\s*$/i, "")
// // //           .trim();

// // //         budgetData = JSON.parse(cleanContent);
// // //       } catch (groqErr) {
// // //         console.error("Groq AI Budget Error:", groqErr.message);
// // //       }
// // //     }

// // //     // Dynamic fallback calculation if Groq failed or key missing
// // //     if (!budgetData || !budgetData.dailyPlan) {
// // //       const stayRate = tripVibe.toLowerCase().includes("luxury") ? 6000 : tripVibe.toLowerCase().includes("budget") ? 1200 : 2500;
// // //       const foodRate = tripVibe.toLowerCase().includes("luxury") ? 2500 : tripVibe.toLowerCase().includes("budget") ? 500 : 1000;
// // //       const transportRate = tripVibe.toLowerCase().includes("luxury") ? 1500 : tripVibe.toLowerCase().includes("budget") ? 300 : 600;
// // //       const actRate = tripVibe.toLowerCase().includes("luxury") ? 2000 : tripVibe.toLowerCase().includes("budget") ? 400 : 800;

// // //       const dailyPlan = [];
// // //       for (let d = 1; d <= days; d++) {
// // //         dailyPlan.push({
// // //           day: d,
// // //           title: d === 1 ? `Day 1: Arrival & Exploring ${city}` : d === 2 ? `Day 2: Heritage & Local Flavors` : `Day ${d}: Highlights & Activities in ${city}`,
// // //           activities: [
// // //             { item: `Sightseeing & Attractions in ${city}`, cost: actRate },
// // //           ],
// // //           accommodation: stayRate,
// // //           food: foodRate,
// // //           transport: transportRate,
// // //         });
// // //       }

// // //       const stayTotal = stayRate * days;
// // //       const foodTotal = foodRate * days;
// // //       const transportTotal = transportRate * days;
// // //       const activitiesTotal = actRate * days;
// // //       const miscellaneous = Math.round((stayTotal + foodTotal) * 0.1);
// // //       const grandTotal = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;

// // //       budgetData = {
// // //         dailyPlan,
// // //         summary: {
// // //           stayTotal,
// // //           foodTotal,
// // //           transportTotal,
// // //           activitiesTotal,
// // //           miscellaneous,
// // //           grandTotal,
// // //         },
// // //         expertAdvice: `Book stays early in ${city} and opt for public transit or passes to save on daily travel costs.`,
// // //         bestDeals: [
// // //           "Use shared cabs or metro for local transit",
// // //           "Dine at authentic local restaurants instead of tourist hotspots",
// // //           "Look for combo attraction passes online",
// // //         ],
// // //       };
// // //     }

// // //     // Sanitize and ensure numeric consistency
// // //     const rawSummary = budgetData.summary || {};
// // //     const stayTotal = parseNumeric(rawSummary.stayTotal, 0);
// // //     const foodTotal = parseNumeric(rawSummary.foodTotal, 0);
// // //     const transportTotal = parseNumeric(rawSummary.transportTotal, 0);
// // //     const activitiesTotal = parseNumeric(rawSummary.activitiesTotal, 0);
// // //     const miscellaneous = parseNumeric(rawSummary.miscellaneous, 0);
// // //     const calculatedGrand = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;
// // //     const grandTotal = parseNumeric(rawSummary.grandTotal, calculatedGrand) || calculatedGrand;
// // //     const averageDailyBudget = Math.round(grandTotal / days) || Math.round(calculatedGrand / days);

// // //     const sanitizedData = {
// // //       dailyPlan: Array.isArray(budgetData.dailyPlan)
// // //         ? budgetData.dailyPlan.map((d, idx) => ({
// // //             day: parseNumeric(d.day, idx + 1),
// // //             title: d.title || `Day ${idx + 1}`,
// // //             activities: Array.isArray(d.activities)
// // //               ? d.activities.map((a) => ({
// // //                   item: a.item || "Sightseeing",
// // //                   cost: parseNumeric(a.cost, 0),
// // //                 }))
// // //               : [],
// // //             accommodation: parseNumeric(d.accommodation, 0),
// // //             food: parseNumeric(d.food, 0),
// // //             transport: parseNumeric(d.transport, 0),
// // //           }))
// // //         : [],
// // //       summary: {
// // //         stayTotal,
// // //         foodTotal,
// // //         transportTotal,
// // //         activitiesTotal,
// // //         miscellaneous,
// // //         grandTotal,
// // //       },
// // //       expertAdvice: normalizeToString(budgetData.expertAdvice || `Enjoy your trip to ${city}!`),
// // //       bestDeals: Array.isArray(budgetData.bestDeals)
// // //         ? budgetData.bestDeals.map((item) => normalizeToString(item))
// // //         : ["Book early for best rates", "Eat at local eateries", "Use public transit"],
// // //       averageDailyBudget,
// // //     };

// // //     res.json({
// // //       success: true,
// // //       data: sanitizedData,
// // //     });
// // //   } catch (err) {
// // //     console.error("Budget Generation Critical Error:", err);
// // //     handleError(res, 500, "Failed to generate budget", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 📋  AI ITINERARY PLANNER (Groq)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.post("/api/ai-planner", async (req, res) => {
// // //   const city = req.body.city || req.body.destination || req.body.place || "Jaipur";
// // //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 3, 10), 1), 7);
// // //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.tripType || "Balanced";

// // //   try {
// // //     let planData = null;

// // //     if (GROQ_API_KEY) {
// // //       try {
// // //         const prompt = `Create a detailed ${days}-day travel itinerary for ${city}, India. Vibe: ${tripVibe}.
// // // Return valid JSON with format:
// // // {
// // //   "itinerary": [
// // //     {
// // //       "day": 1,
// // //       "theme": "Arrival & City Highlights",
// // //       "activities": [
// // //         {"time": "Morning", "task": "Sightseeing", "description": "Explore top historical landmarks", "tips": "Start early"},
// // //         {"time": "Afternoon", "task": "Local Cuisine", "description": "Enjoy traditional regional food", "tips": "Visit famous local eatery"},
// // //         {"time": "Evening", "task": "Sunset & Stroll", "description": "Scenic sunset and market walk", "tips": "Great photography spot"}
// // //       ]
// // //     }
// // //   ],
// // //   "travel_tips": ["Carry comfortable walking shoes", "Keep cash handy for street vendors"],
// // //   "must_try_experiences": ["Local heritage walk", "Authentic regional street food"]
// // // }`;

// // //         const completion = await groq.chat.completions.create({
// // //           messages: [
// // //             { role: "system", content: "You are a professional travel planner. You must return valid JSON only without markdown formatting." },
// // //             { role: "user", content: prompt },
// // //           ],
// // //           model: "llama-3.3-70b-versatile",
// // //           response_format: { type: "json_object" },
// // //           temperature: 0.5,
// // //           max_tokens: 2200,
// // //         });

// // //         const rawContent = completion.choices[0]?.message?.content || "";
// // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // //         planData = JSON.parse(cleanContent);
// // //       } catch (groqErr) {
// // //         console.warn("Groq planner notice:", groqErr.message);
// // //       }
// // //     }

// // //     if (!planData || !planData.itinerary) {
// // //       const fallbackItinerary = [];
// // //       for (let d = 1; d <= days; d++) {
// // //         fallbackItinerary.push({
// // //           day: d,
// // //           theme: d === 1 ? `Welcome to ${city} & Iconic Landmarks` : d === 2 ? `Heritage, Culture & Local Flavors` : `Hidden Gems & Panoramic Views`,
// // //           activities: [
// // //             { time: "Morning", task: `Explore top sights in ${city}`, description: `Start the day visiting iconic landmarks and cultural attractions.`, tips: "Arrive early to avoid queues." },
// // //             { time: "Afternoon", task: "Culinary Walk & Markets", description: `Taste signature regional dishes and shop at local bazaars.`, tips: "Look for popular local food stalls." },
// // //             { time: "Evening", task: "Sunset & Scenic Spot", description: `Relax and watch the sunset from a popular viewpoint or promenade.`, tips: "Ideal time for photos." },
// // //           ],
// // //         });
// // //       }
// // //       planData = {
// // //         itinerary: fallbackItinerary,
// // //         travel_tips: ["Keep cash handy for local vendors", "Use ride-sharing or local transit for easy travel", "Stay hydrated and wear comfortable walking shoes"],
// // //         must_try_experiences: [`Signature food trail in ${city}`, `Heritage landmark tour`, `Sunset photography spot`],
// // //       };
// // //     }

// // //     res.json({ success: true, data: planData });
// // //   } catch (err) {
// // //     handleError(res, 500, "AI Planner failed", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🤖  AI CHAT (Groq)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.post("/api/ai-chat", async (req, res) => {
// // //   const { message, history = [] } = req.body;
// // //   if (!message) return handleError(res, 400, "Message is required");
// // //   if (!GROQ_API_KEY) return handleError(res, 500, "GROQ_API_KEY is not configured");

// // //   try {
// // //     const messages = [
// // //       { role: "system", content: "You are TravioX, an expert Indian travel assistant. Keep responses helpful, engaging and concise." },
// // //       ...history.slice(-8),
// // //       { role: "user", content: message },
// // //     ];
// // //     const completion = await groq.chat.completions.create({
// // //       messages,
// // //       model: "llama-3.3-70b-versatile",
// // //       temperature: 0.7,
// // //       max_tokens: 400,
// // //     });
// // //     res.json({ success: true, reply: completion.choices[0].message.content });
// // //   } catch (err) {
// // //     handleError(res, 500, "AI Chat failed", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 📷  PHOTOS (Unsplash)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.get("/api/photos", async (req, res) => {
// // //   const query = req.query.q;
// // //   if (!query || query.trim() === "") {
// // //     return res.status(400).json({ success: false, error: "Query parameter 'q' is required" });
// // //   }
// // //   if (!UNSPLASH_ACCESS_KEY) {
// // //     return handleError(res, 500, "UNSPLASH_ACCESS_KEY is not configured");
// // //   }
// // //   try {
// // //     const response = await axios.get("https://api.unsplash.com/search/photos", {
// // //       params: { query: query.trim(), per_page: 8, client_id: UNSPLASH_ACCESS_KEY },
// // //       timeout: 6000,
// // //     });
// // //     res.json({
// // //       success: true,
// // //       photos: response.data.results.map((img) => ({
// // //         id: img.id,
// // //         url: img.urls.regular,
// // //         thumb: img.urls.thumb,
// // //         description: img.alt_description || "",
// // //         credit: img.user?.name || "Unsplash",
// // //       })),
// // //     });
// // //   } catch (err) {
// // //     handleError(res, 500, "Failed to fetch images", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // ✈️  FLIGHTS (SerpApi)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.get("/api/flights", async (req, res) => {
// // //   let { departure_id = "BOM", arrival_id = "DEL" } = req.query;
// // //   if (!departure_id || !arrival_id || departure_id.length !== 3 || arrival_id.length !== 3) {
// // //     return res.status(400).json({
// // //       success: false,
// // //       error: "Please use valid 3-letter airport codes (e.g., BOM, DEL)",
// // //     });
// // //   }
// // //   if (!SERPAPI_KEY) {
// // //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// // //   }

// // //   const nextMonth = new Date();
// // //   nextMonth.setDate(nextMonth.getDate() + 30);
// // //   const travelDate = nextMonth.toISOString().split("T")[0];

// // //   try {
// // //     const response = await axios.get("https://serpapi.com/search", {
// // //       params: {
// // //         engine: "google_flights",
// // //         departure_id: departure_id.toUpperCase(),
// // //         arrival_id: arrival_id.toUpperCase(),
// // //         outbound_date: travelDate,
// // //         type: "2",
// // //         currency: "INR",
// // //         hl: "en",
// // //         gl: "us",
// // //         api_key: SERPAPI_KEY,
// // //       },
// // //       timeout: 10000,
// // //     });

// // //     const results = [
// // //       ...(response.data.best_flights || []),
// // //       ...(response.data.other_flights || []),
// // //     ];

// // //     if (results.length === 0) {
// // //       return res.json({ success: true, flights: [], message: "No flights found." });
// // //     }

// // //     const formatted = results.slice(0, 10).map((f) => {
// // //       const leg = f.flights?.[0] || {};
// // //       return {
// // //         airline: leg.airline || "Airline",
// // //         logo: leg.airline_logo || "",
// // //         flight_number: leg.flight_number || "",
// // //         departure: leg.departure_airport?.id || departure_id,
// // //         departure_name: leg.departure_airport?.name || departure_id,
// // //         arrival: leg.arrival_airport?.id || arrival_id,
// // //         arrival_name: leg.arrival_airport?.name || arrival_id,
// // //         departure_time: leg.departure_airport?.time?.split(" ")[1] || "10:00",
// // //         arrival_time: leg.arrival_airport?.time?.split(" ")[1] || "12:30",
// // //         duration: f.total_duration || 120,
// // //         status: f.type || "Available",
// // //         url: `https://www.google.com/travel/flights?q=flights%20from%20${departure_id}%20to%20${arrival_id}%20on%20${travelDate}`,
// // //       };
// // //     });

// // //     res.json({ success: true, flights: formatted });
// // //   } catch (err) {
// // //     handleError(res, 500, "Flight search failed", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🏨  HOTELS (SerpApi)
// // // // ═══════════════════════════════════════════════════════════════
// // // app.get("/api/hotels", async (req, res) => {
// // //   const { q = "Mumbai" } = req.query;
// // //   if (!SERPAPI_KEY) {
// // //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// // //   }
// // //   try {
// // //     const response = await axios.get("https://serpapi.com/search", {
// // //       params: {
// // //         engine: "google_hotels",
// // //         q: `${q} hotels`,
// // //         check_in_date: getFormattedDate(1),
// // //         check_out_date: getFormattedDate(3),
// // //         api_key: SERPAPI_KEY,
// // //         currency: "INR",
// // //         gl: "in",
// // //       },
// // //       timeout: 10000,
// // //     });
// // //     const hotels = (response.data.properties || []).slice(0, 8).map((h) => ({
// // //       name: h.name,
// // //       rating: h.overall_rating || "N/A",
// // //       price: h.rate_per_night?.lowest || "N/A",
// // //       thumbnail: h.images?.[0]?.thumbnail || "https://via.placeholder.com/300",
// // //       link: h.link || "#",
// // //     }));
// // //     res.json({ success: true, hotels });
// // //   } catch (err) {
// // //     handleError(res, 500, "Hotel search failed", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 📖  TRAVEL MEMORY BUILDER (Groq Vision + AI Storyteller)
// // // // ═══════════════════════════════════════════════════════════════
// // // async function analyzePhotoWithVision(m, i) {
// // //   const note = (m.user_note || m.note || "").trim();
// // //   const rawBase64 = m.image_base64 || m.base64 || "";
// // //   const imageUrl = m.image_url || m.url || (typeof m.uri === "string" && m.uri.startsWith("http") ? m.uri : "");
// // //   const cleanBase64 = rawBase64.replace(/^data:image\/\w+;base64,/, "").trim();

// // //   // If photo (base64 or remote URL) is provided, inspect with Groq Vision
// // //   if (GROQ_API_KEY && (cleanBase64 || imageUrl)) {
// // //     try {
// // //       const imageContent = cleanBase64
// // //         ? { type: "image_url", image_url: { url: `data:image/jpeg;base64,${cleanBase64}` } }
// // //         : { type: "image_url", image_url: { url: imageUrl } };

// // //       const visionPrompt = `You are an AI travel vision analyst inspecting photo #${i + 1} of a trip.
// // // Traveler's note: "${note || "Scenic travel moment"}".
// // // Examine the image carefully (scenery, landmarks, architecture, nature, food, culture, lighting, colors, activities) and return valid JSON:
// // // {
// // //   "visual_description": "Vivid 1-2 sentence description detailing exactly what is seen in the photo and the atmosphere",
// // //   "mood": "1-word mood (e.g. Wonder, Serene, Adventurous, Euphoric, Vibrant, Majestic, Cozy, Free)",
// // //   "mood_emoji": "1 matching emoji (e.g. 🌅, 🏔️, 🍜, 🏛️, ✨, 🌊, 🌸, ⛺)"
// // // }`;

// // //       const visionRes = await groq.chat.completions.create({
// // //         messages: [
// // //           {
// // //             role: "system",
// // //             content: "You are a travel vision analyst. You must return valid JSON only.",
// // //           },
// // //           {
// // //             role: "user",
// // //             content: [
// // //               { type: "text", text: visionPrompt },
// // //               imageContent,
// // //             ],
// // //           },
// // //         ],
// // //         model: "llama-3.2-11b-vision-preview",
// // //         response_format: { type: "json_object" },
// // //         temperature: 0.3,
// // //         max_tokens: 220,
// // //       });

// // //       const parsed = JSON.parse(visionRes.choices[0]?.message?.content || "{}");
// // //       return {
// // //         index: i,
// // //         note: note || parsed.visual_description || `Moment #${i + 1}`,
// // //         visual_description: parsed.visual_description || note || `Scene #${i + 1}`,
// // //         mood: parsed.mood || "Adventurous",
// // //         mood_emoji: parsed.mood_emoji || "✨",
// // //       };
// // //     } catch (visionErr) {
// // //       console.warn(`Vision analysis notice for photo #${i + 1}:`, visionErr.message);
// // //     }
// // //   }

// // //   return {
// // //     index: i,
// // //     note: note || `Moment #${i + 1}`,
// // //     visual_description: note || `Special travel memory #${i + 1}`,
// // //     mood: "Memorable",
// // //     mood_emoji: "📸",
// // //   };
// // // }

// // // app.post("/api/travel-memory-builder", async (req, res) => {
// // //   const { moments } = req.body;
// // //   if (!moments || !Array.isArray(moments) || moments.length < 2) {
// // //     return res.status(400).json({ success: false, error: "Provide at least 2 moments" });
// // //   }

// // //   try {
// // //     console.log(`📸 Analyzing ${moments.length} photos with AI Vision...`);

// // //     // Analyze all photos concurrently with Groq Vision
// // //     const sceneAnalyses = await Promise.all(
// // //       moments.map((m, i) => analyzePhotoWithVision(m, i))
// // //     );

// // //     let storyData = null;

// // //     if (GROQ_API_KEY) {
// // //       try {
// // //         const storyPrompt = `You are an acclaimed travel writer. A traveler captured these moments with photos and notes:
// // // ${JSON.stringify(sceneAnalyses, null, 2)}

// // // Craft an evocative travel diary that incorporates the visual details from the photos and the traveler's personal notes.
// // // Return ONLY valid JSON matching this exact structure:
// // // {
// // //   "trip_title": "4-6 word evocative, poetic title for this journey",
// // //   "travel_story": "A rich 3-4 paragraph narrative vividly weaving the visual scenes from the photos and personal notes into an unforgettable journey.",
// // //   "highlight_quote": "One poetic line summing up the soul of this trip",
// // //   "tags": ["travel", "wanderlust", "memories", "explore", "adventure"],
// // //   "timeline": [
// // //     {
// // //       "moment_index": 0,
// // //       "mood": "1-word mood",
// // //       "mood_emoji": "1 matching emoji",
// // //       "scene_description": "1 vivid sentence describing what is seen in the photo and the experience",
// // //       "social_caption": "Engaging Instagram/TikTok caption highlighting the visual scene with 3 trending hashtags"
// // //     }
// // //   ]
// // // }

// // // IMPORTANT: Provide an entry in "timeline" for every moment index from 0 to ${sceneAnalyses.length - 1}.`;

// // //         const storyRes = await groq.chat.completions.create({
// // //           messages: [
// // //             {
// // //               role: "system",
// // //               content: "You are an acclaimed travel author and storyteller. You must return valid JSON only without markdown codeblocks or extra text.",
// // //             },
// // //             { role: "user", content: storyPrompt },
// // //           ],
// // //           model: "llama-3.3-70b-versatile",
// // //           response_format: { type: "json_object" },
// // //           temperature: 0.6,
// // //           max_tokens: 2200,
// // //         });

// // //         const rawContent = storyRes.choices[0]?.message?.content || "";
// // //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// // //         storyData = JSON.parse(cleanContent);
// // //       } catch (groqErr) {
// // //         console.error("Groq Memory Builder Story Error:", groqErr.message);
// // //       }
// // //     }

// // //     // Dynamic fallback if Groq text is slow/down
// // //     if (!storyData || !storyData.travel_story) {
// // //       const fallbackTimeline = sceneAnalyses.map((s, i) => ({
// // //         moment_index: i,
// // //         mood: s.mood || "Adventurous",
// // //         mood_emoji: s.mood_emoji || "✨",
// // //         scene_description: s.visual_description || s.note || `A special memory from moment #${i + 1}.`,
// // //         social_caption: `${s.visual_description || s.note || "Collecting memories along the way"} ✨ #travel #wanderlust #memories`,
// // //       }));

// // //       storyData = {
// // //         trip_title: "Echoes of the Open Road",
// // //         travel_story: `Every journey leaves a mark on our soul. From the early morning departures to the quiet reflections as dusk settled, each chapter carried its own distinctive rhythm.\n\nTraveling through these places was a reminder that the best moments are often the unscripted ones—the spontaneous encounters, the shared laughter, and the breathtaking vistas that photos can only begin to capture.\n\nThese memories stand as tokens of adventure, reminding us why we wander and inspiring the journeys yet to come.`,
// // //         highlight_quote: "We travel not to escape life, but for life not to escape us.",
// // //         tags: ["wanderlust", "traveldiaries", "explore", "memories", "adventure"],
// // //         timeline: fallbackTimeline,
// // //       };
// // //     }

// // //     // Ensure all moments have a complete timeline entry
// // //     const timeline = sceneAnalyses.map((s, i) => {
// // //       const match = storyData.timeline?.find((t) => t.moment_index === i || t.index === i);
// // //       return {
// // //         index: i,
// // //         user_note: s.note,
// // //         mood: match?.mood || s.mood || "Memorable",
// // //         mood_emoji: match?.mood_emoji || s.mood_emoji || "📸",
// // //         scene_description: match?.scene_description || s.visual_description || s.note || `Travel memory #${i + 1}`,
// // //         social_caption: match?.social_caption || `${s.visual_description || s.note || "Travel memories"} ✨ #travel #wanderlust`,
// // //       };
// // //     });

// // //     res.json({
// // //       success: true,
// // //       data: {
// // //         trip_title: storyData.trip_title || "A Journey Remembered",
// // //         travel_story: storyData.travel_story || "Memories forged along the open road.",
// // //         highlight_quote: storyData.highlight_quote || "Collect moments, not things.",
// // //         tags: Array.isArray(storyData.tags) ? storyData.tags : ["travel", "wanderlust", "memories"],
// // //         timeline,
// // //         created_at: new Date().toISOString(),
// // //       },
// // //     });
// // //   } catch (err) {
// // //     console.error("Memory Builder Critical Error:", err);
// // //     handleError(res, 500, "Memory builder failed", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🎬  CREATOMATE VIDEO GENERATOR
// // // // ═══════════════════════════════════════════════════════════════
// // // function buildSlideshowRenderScript(imageUrls, captions = []) {
// // //   const photos = imageUrls.slice(0, 4);
// // //   const slideDuration = 3.5;
// // //   const elements = [];

// // //   photos.forEach((url, i) => {
// // //     elements.push({
// // //       type: "image",
// // //       source: url,
// // //       track: 1,
// // //       duration: slideDuration,
// // //       clip: true,
// // //       animations: [
// // //         { type: "scale", start_scale: i % 2 === 0 ? "100%" : "112%", end_scale: i % 2 === 0 ? "112%" : "100%", easing: "linear" },
// // //         ...(i > 0 ? [{ type: "fade", transition: true, duration: 0.6 }] : []),
// // //       ],
// // //     });
// // //   });

// // //   if (Array.isArray(captions) && captions.length > 0) {
// // //     photos.forEach((_, i) => {
// // //       const cap = captions[i];
// // //       if (cap && typeof cap === "string" && cap.trim()) {
// // //         elements.push({
// // //           type: "text",
// // //           text: cap.trim().substring(0, 100),
// // //           track: 2,
// // //           time: i * slideDuration,
// // //           duration: slideDuration,
// // //           y: "85%",
// // //           width: "86%",
// // //           fill_color: "#ffffff",
// // //           background_color: "rgba(10, 10, 10, 0.75)",
// // //           background_border_radius: "12 px",
// // //           padding: "14 px",
// // //           font_size: "30 px",
// // //           font_weight: "700",
// // //           text_alignment: "center",
// // //           animations: [
// // //             { type: "fade", duration: 0.4 },
// // //             { type: "fade", duration: 0.4, transition: false, time: slideDuration - 0.4, reversed: true },
// // //           ],
// // //         });
// // //       }
// // //     });
// // //   }

// // //   return {
// // //     output_format: "mp4",
// // //     width: 1080,
// // //     height: 1920,
// // //     frame_rate: 30,
// // //     elements,
// // //   };
// // // }

// // // app.post("/api/generate-video", async (req, res) => {
// // //   const { imageUrls, captions } = req.body;
// // //   if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length < 2) {
// // //     return res.status(400).json({ success: false, error: "Provide at least 2 image URLs" });
// // //   }
// // //   if (!CREATOMATE_API_KEY) {
// // //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// // //   }

// // //   try {
// // //     const videoMoments = imageUrls.slice(0, 4);
// // //     let renderResponse = null;

// // //     if (CREATOMATE_TEMPLATE_ID) {
// // //       try {
// // //         const modifications = {};
// // //         videoMoments.forEach((url, i) => {
// // //           modifications[`Background-${i + 1}.source`] = url;
// // //         });
// // //         if (captions && captions.length > 0) {
// // //           captions.slice(0, videoMoments.length).forEach((caption, i) => {
// // //             modifications[`Text-${i + 1}.text`] = (caption || "").substring(0, 150);
// // //           });
// // //         }
// // //         const tplRes = await axios.post(
// // //           "https://api.creatomate.com/v2/renders",
// // //           { template_id: CREATOMATE_TEMPLATE_ID, modifications },
// // //           {
// // //             headers: {
// // //               Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// // //               "Content-Type": "application/json",
// // //             },
// // //             timeout: 6000,
// // //           }
// // //         );
// // //         renderResponse = tplRes.data;
// // //       } catch (tplErr) {
// // //         console.warn("Template render notice:", tplErr.message);
// // //       }
// // //     }

// // //     if (!renderResponse) {
// // //       const source = buildSlideshowRenderScript(videoMoments, captions);
// // //       const scriptRes = await axios.post(
// // //         "https://api.creatomate.com/v2/renders",
// // //         { source },
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// // //             "Content-Type": "application/json",
// // //           },
// // //           timeout: 6000,
// // //         }
// // //       );
// // //       renderResponse = scriptRes.data;
// // //     }

// // //     const initialRender = Array.isArray(renderResponse) ? renderResponse[0] : renderResponse;
// // //     if (!initialRender || !initialRender.id) {
// // //       throw new Error("Invalid response from Creatomate");
// // //     }

// // //     res.json({
// // //       success: true,
// // //       videoUrl: initialRender.url,
// // //       status: initialRender.status,
// // //       renderId: initialRender.id,
// // //     });
// // //   } catch (err) {
// // //     handleError(res, 500, "Failed to generate video", err.message);
// // //   }
// // // });

// // // app.get("/api/video-status/:id", async (req, res) => {
// // //   if (!CREATOMATE_API_KEY) {
// // //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// // //   }
// // //   try {
// // //     const statusRes = await axios.get(`https://api.creatomate.com/v2/renders/${req.params.id}`, {
// // //       headers: { Authorization: `Bearer ${CREATOMATE_API_KEY}` },
// // //       timeout: 6000,
// // //     });
// // //     const data = Array.isArray(statusRes.data) ? statusRes.data[0] : statusRes.data;
// // //     res.json({
// // //       success: true,
// // //       status: data.status,
// // //       videoUrl: data.url,
// // //       errorMessage: data.error_message,
// // //     });
// // //   } catch (err) {
// // //     handleError(res, 500, "Failed to fetch video status", err.message);
// // //   }
// // // });

// // // // ═══════════════════════════════════════════════════════════════
// // // // 🚀  START SERVER
// // // // ═══════════════════════════════════════════════════════════════
// // // app.listen(PORT, () => {
// // //   console.log(`\n✈️  TravioX Server running on port ${PORT}`);
// // //   console.log(`   Health: http://localhost:${PORT}/api/health\n`);
// // // });

// // // module.exports = app;







// // require("dotenv").config();
// // const express = require("express");
// // const cors = require("cors");
// // const axios = require("axios");
// // const Groq = require("groq-sdk");

// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // // ═══════════════════════════════════════════════════════════════
// // // 🔑  API KEYS — Loaded from process.env (.env or Vercel Environment Variables)
// // // ═══════════════════════════════════════════════════════════════
// // const GROQ_API_KEY = process.env.GROQ_API_KEY;
// // const SERPAPI_KEY = process.env.SERPAPI_KEY;
// // const RAPID_API_KEY = process.env.RAPID_API_KEY;
// // const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
// // const SARVAM_API_KEY = process.env.SARVAM_API_KEY;
// // const CREATOMATE_API_KEY = process.env.CREATOMATE_API_KEY;
// // const CREATOMATE_TEMPLATE_ID = process.env.CREATOMATE_TEMPLATE_ID;
// // const GEOAPIFY_KEY = process.env.GEOAPIFY_KEY;

// // // Log key availability without exiting process
// // const REQUIRED_KEYS = [
// //   "GROQ_API_KEY",
// //   "SERPAPI_KEY",
// //   "RAPID_API_KEY",
// //   "UNSPLASH_ACCESS_KEY",
// //   "SARVAM_API_KEY",
// //   "CREATOMATE_API_KEY",
// //   "GEOAPIFY_KEY",
// // ];

// // const missingKeys = REQUIRED_KEYS.filter((k) => !process.env[k]);
// // if (missingKeys.length > 0) {
// //   console.warn(`⚠️ Warning: Missing environment variables: ${missingKeys.join(", ")}`);
// //   console.warn("Add these in Vercel Project Settings -> Environment Variables for full AI features.");
// // } else {
// //   console.log("✅ All required environment variables loaded.");
// // }

// // const groq = new Groq({ apiKey: GROQ_API_KEY || "dummy_key" });

// // // ═══════════════════════════════════════════════════════════════
// // // ⚙️  MIDDLEWARE
// // // ═══════════════════════════════════════════════════════════════
// // app.use(cors());
// // app.use(express.json({ limit: "50mb" }));
// // app.use(express.urlencoded({ limit: "50mb", extended: true }));
// // app.use(express.static("public"));

// // app.use((req, _res, next) => {
// //   console.log(`📥 ${req.method} ${req.path}`);
// //   next();
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🛠️  HELPERS
// // // ═══════════════════════════════════════════════════════════════
// // const getFormattedDate = (daysFromNow) => {
// //   const d = new Date();
// //   d.setDate(d.getDate() + daysFromNow);
// //   return d.toISOString().split("T")[0];
// // };

// // const handleError = (res, statusCode, message, details = null) => {
// //   console.error(`❌ Error (${statusCode}): ${message}`, details || "");
// //   res.status(statusCode).json({
// //     success: false,
// //     error: message,
// //     ...(details ? { details } : {}),
// //   });
// // };

// // const parseNumeric = (val, fallback = 0) => {
// //   if (typeof val === "number" && !isNaN(val)) return val;
// //   if (!val) return fallback;
// //   const cleaned = String(val).replace(/[^0-9.-]+/g, "");
// //   const num = parseFloat(cleaned);
// //   return isNaN(num) ? fallback : num;
// // };

// // const normalizeToString = (val) => {
// //   if (!val) return "";
// //   if (typeof val === "string") return val;
// //   if (Array.isArray(val)) return val.join(", ");
// //   if (typeof val === "object") {
// //     if (val.dishes)
// //       return Array.isArray(val.dishes) ? val.dishes.join(", ") : String(val.dishes);
// //     return Object.values(val).join(", ");
// //   }
// //   return String(val);
// // };

// // const sanitizeDestinationInfo = (info) => ({
// //   history: normalizeToString(info.history),
// //   bestTime: normalizeToString(info.bestTime),
// //   food: normalizeToString(info.food),
// //   culture: normalizeToString(info.culture),
// //   hiddenGem: normalizeToString(info.hiddenGem),
// //   summary: normalizeToString(info.summary),
// // });

// // const splitIntoChunks = (text, maxLen = 490) => {
// //   const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// //   const chunks = [];
// //   let current = "";
// //   for (const sentence of sentences) {
// //     if ((current + sentence).length <= maxLen) {
// //       current += sentence;
// //     } else {
// //       if (current.trim()) chunks.push(current.trim());
// //       if (sentence.length > maxLen) {
// //         const words = sentence.split(" ");
// //         let wordChunk = "";
// //         for (const word of words) {
// //           if ((wordChunk + " " + word).length <= maxLen) {
// //             wordChunk += (wordChunk ? " " : "") + word;
// //           } else {
// //             if (wordChunk) chunks.push(wordChunk.trim());
// //             wordChunk = word;
// //           }
// //         }
// //         current = wordChunk;
// //       } else {
// //         current = sentence;
// //       }
// //     }
// //   }
// //   if (current.trim()) chunks.push(current.trim());
// //   return chunks.filter(Boolean);
// // };

// // const translateText = async (text, targetLang) => {
// //   if (targetLang === "en-IN" || !text || !SARVAM_API_KEY) return text;
// //   try {
// //     const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
// //     const translatedChunks = [];
// //     let currentChunk = "";
// //     for (const sentence of sentences) {
// //       if ((currentChunk + sentence).length < 900) {
// //         currentChunk += sentence;
// //       } else {
// //         if (currentChunk) {
// //           const res = await axios.post(
// //             "https://api.sarvam.ai/translate",
// //             {
// //               input: currentChunk,
// //               source_language_code: "en-IN",
// //               target_language_code: targetLang,
// //               speaker_gender: "Female",
// //             },
// //             {
// //               headers: {
// //                 "api-subscription-key": SARVAM_API_KEY,
// //                 "Content-Type": "application/json",
// //               },
// //               timeout: 6000,
// //             }
// //           );
// //           translatedChunks.push(res.data.translated_text || currentChunk);
// //         }
// //         currentChunk = sentence;
// //       }
// //     }
// //     if (currentChunk) {
// //       const res = await axios.post(
// //         "https://api.sarvam.ai/translate",
// //         {
// //           input: currentChunk,
// //           source_language_code: "en-IN",
// //           target_language_code: targetLang,
// //           speaker_gender: "Female",
// //         },
// //         {
// //           headers: {
// //             "api-subscription-key": SARVAM_API_KEY,
// //             "Content-Type": "application/json",
// //           },
// //           timeout: 6000,
// //         }
// //       );
// //       translatedChunks.push(res.data.translated_text || currentChunk);
// //     }
// //     return translatedChunks.join(" ");
// //   } catch (err) {
// //     console.warn("Translation Notice:", err.response?.data || err.message);
// //     return text;
// //   }
// // };

// // const generateSarvamAudio = async (text, language = "en-IN", speaker = "meera") => {
// //   if (!SARVAM_API_KEY || !text) return [];
// //   try {
// //     const chunks = splitIntoChunks(text, 490).slice(0, 3);
// //     const audioSegments = [];
// //     for (let i = 0; i < chunks.length; i++) {
// //       const chunk = chunks[i];
// //       const ttsRes = await axios.post(
// //         "https://api.sarvam.ai/text-to-speech",
// //         { inputs: [chunk], target_language_code: language, speaker_id: speaker },
// //         {
// //           headers: {
// //             "api-subscription-key": SARVAM_API_KEY,
// //             "Content-Type": "application/json",
// //           },
// //           timeout: 5000,
// //         }
// //       );
// //       if (ttsRes.data?.audios?.[0]) {
// //         audioSegments.push(ttsRes.data.audios[0]);
// //       }
// //     }
// //     return audioSegments;
// //   } catch (err) {
// //     console.warn("Sarvam TTS Notice:", err.response?.data || err.message);
// //     return [];
// //   }
// // };

// // // ═══════════════════════════════════════════════════════════════
// // // ✅  HEALTH CHECK
// // // ═══════════════════════════════════════════════════════════════
// // app.get("/api/health", (_req, res) => {
// //   res.json({
// //     success: true,
// //     message: "TravioX API is running ✈️",
// //     timestamp: new Date().toISOString(),
// //     keys_configured: {
// //       groq: !!GROQ_API_KEY,
// //       serpapi: !!SERPAPI_KEY,
// //       rapidapi: !!RAPID_API_KEY,
// //       unsplash: !!UNSPLASH_ACCESS_KEY,
// //       sarvam: !!SARVAM_API_KEY,
// //       creatomate: !!CREATOMATE_API_KEY,
// //       geoapify: !!GEOAPIFY_KEY,
// //     },
// //   });
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🗺️  LIVE MAP — GEOCODE SEARCH (Geoapify)
// // // ═══════════════════════════════════════════════════════════════
// // app.post("/api/live-map/geocode", async (req, res) => {
// //   const { query } = req.body;
// //   if (!query || !query.trim()) {
// //     return handleError(res, 400, "query is required");
// //   }
// //   if (!GEOAPIFY_KEY) {
// //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// //   }
// //   try {
// //     const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
// //       params: { text: query.trim(), apiKey: GEOAPIFY_KEY, limit: 1, format: "json" },
// //       timeout: 6000,
// //     });
// //     const results = response.data?.results;
// //     if (!results || results.length === 0) {
// //       return res.status(404).json({ success: false, error: "Location not found" });
// //     }
// //     const place = results[0];
// //     res.json({
// //       success: true,
// //       result: {
// //         latitude: place.lat,
// //         longitude: place.lon,
// //         label: place.formatted || query,
// //         country: place.country || "",
// //         city: place.city || place.county || "",
// //       },
// //     });
// //   } catch (err) {
// //     handleError(res, 500, "Geocoding failed", err.message);
// //   }
// // });

// // // ─────────────────────────────────────────────────────────────
// // // Routing
// // app.post("/api/live-map/route", async (req, res) => {
// //   const { startLat, startLon, endLat, endLon, mode = "drive" } = req.body;
// //   if (!startLat || !startLon || !endLat || !endLon) {
// //     return handleError(res, 400, "startLat, startLon, endLat, endLon are all required");
// //   }
// //   if (!GEOAPIFY_KEY) {
// //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// //   }
// //   const validModes = ["drive", "walk", "bicycle", "transit"];
// //   const routeMode = validModes.includes(mode) ? mode : "drive";
// //   try {
// //     const url = "https://api.geoapify.com/v1/routing";
// //     const response = await axios.get(url, {
// //       params: {
// //         waypoints: `${startLat},${startLon}|${endLat},${endLon}`,
// //         mode: routeMode,
// //         apiKey: GEOAPIFY_KEY,
// //         format: "json",
// //       },
// //       timeout: 8000,
// //     });
// //     const features = response.data?.features;
// //     if (!features || features.length === 0) {
// //       return res.status(404).json({ success: false, error: "No route found" });
// //     }
// //     const feature = features[0];
// //     const props = feature.properties;
// //     let allCoords = [];
// //     const geom = feature.geometry;
// //     if (geom.type === "MultiLineString") {
// //       geom.coordinates.forEach((line) => {
// //         line.forEach(([lon, lat]) => allCoords.push({ latitude: lat, longitude: lon }));
// //       });
// //     } else if (geom.type === "LineString") {
// //       geom.coordinates.forEach(([lon, lat]) =>
// //         allCoords.push({ latitude: lat, longitude: lon })
// //       );
// //     }
// //     res.json({
// //       success: true,
// //       route: {
// //         coordinates: allCoords,
// //         distance_km: parseFloat((props.distance / 1000).toFixed(2)),
// //         duration_min: Math.round(props.time / 60),
// //         mode: routeMode,
// //       },
// //     });
// //   } catch (err) {
// //     handleError(res, 500, "Route calculation failed", err.message);
// //   }
// // });

// // // ─────────────────────────────────────────────────────────────
// // // Reverse Geocode
// // app.get("/api/live-map/reverse", async (req, res) => {
// //   const { lat, lon } = req.query;
// //   if (!lat || !lon) return handleError(res, 400, "lat and lon are required");
// //   if (!GEOAPIFY_KEY) {
// //     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
// //   }
// //   try {
// //     const response = await axios.get("https://api.geoapify.com/v1/geocode/reverse", {
// //       params: { lat, lon, apiKey: GEOAPIFY_KEY, format: "json" },
// //       timeout: 6000,
// //     });
// //     const results = response.data?.results;
// //     const label =
// //       results?.[0]?.formatted || `${parseFloat(lat).toFixed(4)}, ${parseFloat(lon).toFixed(4)}`;
// //     res.json({ success: true, label });
// //   } catch (err) {
// //     handleError(res, 500, "Reverse geocoding failed", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 📰  NEWS (RapidAPI)
// // // ═══════════════════════════════════════════════════════════════
// // app.get("/api/startup-news", async (req, res) => {
// //   const userQuery = req.query.q || "Travel";
// //   if (!RAPID_API_KEY) {
// //     return handleError(res, 500, "RAPID_API_KEY is not configured on server");
// //   }
// //   try {
// //     const response = await axios.get("https://real-time-news-data.p.rapidapi.com/search", {
// //       params: {
// //         query: userQuery,
// //         limit: 10,
// //         time_published: "anytime",
// //         country: "US",
// //         lang: "en",
// //       },
// //       headers: {
// //         "x-rapidapi-key": RAPID_API_KEY,
// //         "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
// //       },
// //       timeout: 8000,
// //     });
// //     const formattedNews = (response.data.data || []).map((item) => ({
// //       title: item.title,
// //       summary: item.snippet || item.summary || "No summary available",
// //       link: item.link,
// //       published_date: item.published_datetime_utc || "",
// //       image_url:
// //         item.photo_url || item.thumbnail || "https://via.placeholder.com/400x200",
// //     }));
// //     res.json({ success: true, results: formattedNews });
// //   } catch (err) {
// //     handleError(res, 500, "News fetch failed", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🧳  SMART PACKING LIST (Groq)
// // // ═══════════════════════════════════════════════════════════════
// // app.post("/api/smart-packing", async (req, res) => {
// //   const destination = req.body.destination || req.body.city || req.body.place || "Goa";
// //   const tripType = req.body.tripType || "Leisure";
// //   const duration = parseInt(req.body.duration || req.body.days || 5, 10);
// //   const gender = req.body.gender || "Unspecified";
// //   const luggageType = req.body.luggageType || "Backpack";
// //   const specialActivities = Array.isArray(req.body.specialActivities) ? req.body.specialActivities : [];

// //   try {
// //     let packingData = null;

// //     if (GROQ_API_KEY) {
// //       try {
// //         const activitiesStr = specialActivities.length > 0 ? specialActivities.join(", ") : "None";
// //         const prompt = `You are a geo-climate travel expert. Analyze location "${destination}".
// // Trip: ${tripType} | ${duration} days | Gender: ${gender} | Luggage: ${luggageType} | Activities: ${activitiesStr}
// // ${tripType === "Family" ? "Include 'Kids & Baby Essentials' (icon: '🍼') category." : ""}
// // Return STRICT JSON:
// // {
// //   "weather_summary": "Climate analysis for ${destination}",
// //   "categories": [
// //     {
// //       "name": "Layering & Clothing",
// //       "icon": "🧥",
// //       "items": [{"item": "Comfortable clothes", "essential": true, "reason": "Daily wear"}]
// //     },
// //     {"name": "Footwear", "icon": "🥾", "items": [{"item": "Walking shoes", "essential": true, "reason": "Sightseeing"}]},
// //     {"name": "Toiletries & Health", "icon": "🧴", "items": [{"item": "Sunscreen & Moisturizer", "essential": true, "reason": "Skin protection"}]},
// //     {"name": "Electronics", "icon": "🔌", "items": [{"item": "Power bank & Chargers", "essential": true, "reason": "Phone backup"}]},
// //     {"name": "Documents & Essentials", "icon": "📄", "items": [{"item": "ID Proof & Tickets", "essential": true, "reason": "Identity verification"}]}
// //   ],
// //   "pro_tips": ["Carry local currency and hydration supplies for ${destination}"]
// // }`;

// //         const completion = await groq.chat.completions.create({
// //           messages: [
// //             { role: "system", content: "You are an expert packing advisor. Return valid JSON only without markdown." },
// //             { role: "user", content: prompt },
// //           ],
// //           model: "llama-3.3-70b-versatile",
// //           response_format: { type: "json_object" },
// //           temperature: 0.4,
// //           max_tokens: 1500,
// //         });

// //         const rawContent = completion.choices[0]?.message?.content || "";
// //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// //         packingData = JSON.parse(cleanContent);
// //       } catch (gErr) {
// //         console.warn("Groq packing notice:", gErr.message);
// //       }
// //     }

// //     if (!packingData || !packingData.categories) {
// //       packingData = {
// //         weather_summary: `Pleasant weather expected in ${destination}.`,
// //         categories: [
// //           {
// //             name: "Layering & Clothing",
// //             icon: "🧥",
// //             items: [
// //               { item: "Light breathable shirts/t-shirts (4-5 pairs)", essential: true, reason: "Daytime comfort" },
// //               { item: "Comfortable pants or shorts (2-3 pairs)", essential: true, reason: "Sightseeing" },
// //             ],
// //           },
// //           {
// //             name: "Footwear",
// //             icon: "🥾",
// //             items: [
// //               { item: "Comfortable walking shoes", essential: true, reason: "Long walks" },
// //               { item: "Flip flops or sandals", essential: false, reason: "Relaxation" },
// //             ],
// //           },
// //           {
// //             name: "Toiletries & Health",
// //             icon: "🧴",
// //             items: [
// //               { item: "Sunscreen SPF 50+", essential: true, reason: "Sun protection" },
// //               { item: "Basic first aid & personal meds", essential: true, reason: "Emergencies" },
// //             ],
// //           },
// //           {
// //             name: "Electronics",
// //             icon: "🔌",
// //             items: [
// //               { item: "Power bank 10,000mAh", essential: true, reason: "On-the-go charging" },
// //               { item: "Universal charging adapter", essential: true, reason: "Device charging" },
// //             ],
// //           },
// //           {
// //             name: "Documents & Essentials",
// //             icon: "📄",
// //             items: [
// //               { item: "Government ID & Hotel booking copy", essential: true, reason: "Check-in" },
// //               { item: "Cash & backup cards", essential: true, reason: "Local shopping" },
// //             ],
// //           },
// //         ],
// //         pro_tips: [`Stay hydrated and keep local emergency contacts saved while in ${destination}.`],
// //       };
// //     }

// //     res.json({ success: true, data: packingData });
// //   } catch (err) {
// //     handleError(res, 500, "Failed to generate packing list", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🗺️  DESTINATION INFO + AUDIO (Groq + Sarvam Fallback)
// // // ═══════════════════════════════════════════════════════════════
// // app.post("/api/destination-info", async (req, res) => {
// //   const city = req.body.city || req.body.destination || req.body.place || "Mumbai";
// //   const language = req.body.language || "en-IN";

// //   try {
// //     let infoData = null;

// //     if (GROQ_API_KEY) {
// //       try {
// //         const prompt = `You are an expert travel guide. Generate travel summary for ${city}, India.
// // Return STRICT JSON:
// // {
// //   "history": "3 sentences covering origin, historical significance.",
// //   "bestTime": "Which months/season and exactly why.",
// //   "food": "Name 3 must-try local dishes as a comma-separated string.",
// //   "culture": "2 sentences on local traditions.",
// //   "hiddenGem": "One underrated spot.",
// //   "summary": "A vivid 3-sentence overview."
// // }`;

// //         const completion = await groq.chat.completions.create({
// //           messages: [
// //             { role: "system", content: "You are an expert travel assistant. Return valid JSON only without markdown." },
// //             { role: "user", content: prompt },
// //           ],
// //           model: "llama-3.3-70b-versatile",
// //           response_format: { type: "json_object" },
// //           temperature: 0.6,
// //           max_tokens: 1000,
// //         });

// //         const rawContent = completion.choices[0]?.message?.content || "";
// //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// //         const rawInfo = JSON.parse(cleanContent);
// //         infoData = sanitizeDestinationInfo(rawInfo);
// //       } catch (groqErr) {
// //         console.warn("Groq destination-info notice:", groqErr.message);
// //       }
// //     }

// //     if (!infoData) {
// //       infoData = {
// //         history: `${city} boasts a vibrant history with century-old architecture and culturally rich roots.`,
// //         bestTime: "October to March for optimal sightseeing weather.",
// //         food: "Local Street Food, Regional Speciality Thali, Traditional Dessert",
// //         culture: "Known for hospitable locals and colorful festivals.",
// //         hiddenGem: "Historic backstreets and local viewpoints.",
// //         summary: `Discover the unforgettable heritage, vibrant markets, and rich cuisine of ${city}.`,
// //       };
// //     }

// //     let narrationScript = `Welcome to ${city}. ${infoData.summary} Best time to visit is ${infoData.bestTime}. Must-try foods: ${infoData.food}.`;
// //     let audioSegments = [];

// //     if (SARVAM_API_KEY) {
// //       try {
// //         if (language !== "en-IN") {
// //           narrationScript = await translateText(narrationScript, language);
// //         }
// //         audioSegments = await generateSarvamAudio(narrationScript, language);
// //       } catch (sErr) {
// //         console.warn("Sarvam audio notice:", sErr.message);
// //       }
// //     }

// //     res.json({
// //       success: true,
// //       data: {
// //         info: infoData,
// //         audioSegments,
// //         audioBase64: audioSegments[0] || null,
// //         generatedLanguage: language,
// //       },
// //     });
// //   } catch (err) {
// //     handleError(res, 500, "Failed to generate destination info", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🔊  TEXT-TO-SPEECH (Direct)
// // // ═══════════════════════════════════════════════════════════════
// // app.post("/api/text-to-speech", async (req, res) => {
// //   const { prompt, text, language = "en-IN", speaker = "meera" } = req.body;
// //   try {
// //     let finalText = text;
// //     if (!finalText && prompt && GROQ_API_KEY) {
// //       const completion = await groq.chat.completions.create({
// //         messages: [
// //           { role: "system", content: "You are a helpful travel assistant. Keep responses under 200 words." },
// //           { role: "user", content: prompt },
// //         ],
// //         model: "llama-3.3-70b-versatile",
// //         temperature: 0.7,
// //         max_tokens: 300,
// //       });
// //       finalText = completion.choices[0].message.content;
// //     }

// //     if (!finalText) finalText = "Welcome to your TravioX journey.";
// //     finalText = normalizeToString(finalText);

// //     const audioSegments = await generateSarvamAudio(finalText, language, speaker);
// //     res.json({
// //       success: true,
// //       audioSegments,
// //       audioBase64: audioSegments[0] || null,
// //       textUsed: finalText,
// //       totalChunks: audioSegments.length,
// //     });
// //   } catch (err) {
// //     handleError(res, 500, "Failed to generate speech", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🌐  TRANSLATION (Sarvam AI + Groq AI Fallback)
// // // ═══════════════════════════════════════════════════════════════
// // app.all("/api/translate", async (req, res) => {
// //   const text = (req.body?.text || req.body?.input || req.body?.q || req.query?.text || req.query?.q || "").trim();
// //   const sourceLang = req.body?.source || req.body?.source_language_code || req.body?.from || req.query?.source || "en-IN";
// //   const targetLang = req.body?.target || req.body?.target_language_code || req.body?.to || req.query?.target || "hi-IN";

// //   if (!text) {
// //     return handleError(res, 400, "Text to translate is required");
// //   }

// //   // If source and target are identical
// //   if (sourceLang === targetLang) {
// //     return res.json({
// //       success: true,
// //       translatedText: text,
// //       translated_text: text,
// //       translation: text,
// //       source: sourceLang,
// //       target: targetLang,
// //       data: { translatedText: text, translated_text: text, source: sourceLang, target: targetLang },
// //     });
// //   }

// //   try {
// //     let translatedText = "";

// //     // 1. Try Sarvam AI Translation first if key is available
// //     if (SARVAM_API_KEY) {
// //       try {
// //         const sarvamRes = await axios.post(
// //           "https://api.sarvam.ai/translate",
// //           {
// //             input: text,
// //             source_language_code: sourceLang,
// //             target_language_code: targetLang,
// //             speaker_gender: "Female",
// //           },
// //           {
// //             headers: {
// //               "api-subscription-key": SARVAM_API_KEY,
// //               "Content-Type": "application/json",
// //             },
// //             timeout: 6000,
// //           }
// //         );
// //         if (sarvamRes.data?.translated_text) {
// //           translatedText = sarvamRes.data.translated_text;
// //         }
// //       } catch (sarvamErr) {
// //         console.warn("Sarvam translate notice:", sarvamErr.response?.data || sarvamErr.message);
// //       }
// //     }

// //     // 2. High-accuracy AI Fallback with Groq if Sarvam didn't return text
// //     if (!translatedText && GROQ_API_KEY) {
// //       try {
// //         const prompt = `Translate the following text from ${sourceLang} to ${targetLang}.
// // Text: "${text}"
// // Return ONLY the direct, natural translation without explanations, quotes, or notes.`;

// //         const groqRes = await groq.chat.completions.create({
// //           messages: [
// //             {
// //               role: "system",
// //               content: "You are a professional travel translator. Return only the translated text without extra formatting or quotes.",
// //             },
// //             { role: "user", content: prompt },
// //           ],
// //           model: "llama-3.3-70b-versatile",
// //           temperature: 0.3,
// //           max_tokens: 400,
// //         });

// //         translatedText = (groqRes.choices[0]?.message?.content || "").replace(/^["']|["']$/g, "").trim();
// //       } catch (groqErr) {
// //         console.warn("Groq translate notice:", groqErr.message);
// //       }
// //     }

// //     if (!translatedText) {
// //       translatedText = text; // fallback to original
// //     }

// //     res.json({
// //       success: true,
// //       translatedText,
// //       translated_text: translatedText,
// //       translation: translatedText,
// //       source: sourceLang,
// //       target: targetLang,
// //       data: {
// //         translatedText,
// //         translated_text: translatedText,
// //         translation: translatedText,
// //         source: sourceLang,
// //         target: targetLang,
// //       },
// //     });
// //   } catch (err) {
// //     handleError(res, 500, "Translation failed", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 💰  AI BUDGET PLANNER (Groq with Full Numeric Validation & Fallback)
// // // ═══════════════════════════════════════════════════════════════
// // app.post("/api/ai-budget", async (req, res) => {
// //   const city = req.body.city || req.body.destination || req.body.place || req.body.location || "";
// //   const travelers = Math.max(parseInt(req.body.travelers || 2, 10) || 2, 1);
// //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 5, 10) || 5, 1), 30);
// //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.style || "Mid-range";

// //   if (!city || !city.trim()) {
// //     return handleError(res, 400, "City name is required");
// //   }

// //   try {
// //     let budgetData = null;

// //     if (GROQ_API_KEY) {
// //       try {
// //         const prompt = `Create a detailed day-by-day travel budget for ${city.trim()}, India.
// // Travelers: ${travelers} | Days: ${days} | Style: ${tripVibe}.
// // Return ONLY valid JSON matching this exact structure:
// // {
// //   "dailyPlan": [
// //     {
// //       "day": 1,
// //       "title": "Arrival and City Tour",
// //       "activities": [{"item": "Iconic Sightseeing", "cost": 500}],
// //       "accommodation": 2500,
// //       "food": 1000,
// //       "transport": 500
// //     }
// //   ],
// //   "summary": {
// //     "stayTotal": ${days * 2500},
// //     "foodTotal": ${days * 1000},
// //     "transportTotal": ${days * 500},
// //     "activitiesTotal": ${days * 500},
// //     "miscellaneous": 1000,
// //     "grandTotal": ${days * 4500 + 1000}
// //   },
// //   "expertAdvice": "3 practical money-saving tips specific to ${city.trim()}",
// //   "bestDeals": ["Use metro or shared rides", "Book accommodation in advance", "Try local dhabas and food markets"]
// // }`;

// //         const completion = await groq.chat.completions.create({
// //           messages: [
// //             {
// //               role: "system",
// //               content: "You are an expert travel budget planner. You must return valid JSON only. Do not include markdown codeblocks or extra text.",
// //             },
// //             { role: "user", content: prompt },
// //           ],
// //           model: "llama-3.3-70b-versatile",
// //           response_format: { type: "json_object" },
// //           temperature: 0.5,
// //           max_tokens: 2500,
// //         });

// //         const rawContent = completion.choices[0]?.message?.content || "";
// //         const cleanContent = rawContent
// //           .replace(/^```json\s*/i, "")
// //           .replace(/^```\s*/i, "")
// //           .replace(/```\s*$/i, "")
// //           .trim();

// //         budgetData = JSON.parse(cleanContent);
// //       } catch (groqErr) {
// //         console.error("Groq AI Budget Error:", groqErr.message);
// //       }
// //     }

// //     // Dynamic fallback calculation if Groq failed or key missing
// //     if (!budgetData || !budgetData.dailyPlan) {
// //       const stayRate = tripVibe.toLowerCase().includes("luxury") ? 6000 : tripVibe.toLowerCase().includes("budget") ? 1200 : 2500;
// //       const foodRate = tripVibe.toLowerCase().includes("luxury") ? 2500 : tripVibe.toLowerCase().includes("budget") ? 500 : 1000;
// //       const transportRate = tripVibe.toLowerCase().includes("luxury") ? 1500 : tripVibe.toLowerCase().includes("budget") ? 300 : 600;
// //       const actRate = tripVibe.toLowerCase().includes("luxury") ? 2000 : tripVibe.toLowerCase().includes("budget") ? 400 : 800;

// //       const dailyPlan = [];
// //       for (let d = 1; d <= days; d++) {
// //         dailyPlan.push({
// //           day: d,
// //           title: d === 1 ? `Day 1: Arrival & Exploring ${city}` : d === 2 ? `Day 2: Heritage & Local Flavors` : `Day ${d}: Highlights & Activities in ${city}`,
// //           activities: [
// //             { item: `Sightseeing & Attractions in ${city}`, cost: actRate },
// //           ],
// //           accommodation: stayRate,
// //           food: foodRate,
// //           transport: transportRate,
// //         });
// //       }

// //       const stayTotal = stayRate * days;
// //       const foodTotal = foodRate * days;
// //       const transportTotal = transportRate * days;
// //       const activitiesTotal = actRate * days;
// //       const miscellaneous = Math.round((stayTotal + foodTotal) * 0.1);
// //       const grandTotal = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;

// //       budgetData = {
// //         dailyPlan,
// //         summary: {
// //           stayTotal,
// //           foodTotal,
// //           transportTotal,
// //           activitiesTotal,
// //           miscellaneous,
// //           grandTotal,
// //         },
// //         expertAdvice: `Book stays early in ${city} and opt for public transit or passes to save on daily travel costs.`,
// //         bestDeals: [
// //           "Use shared cabs or metro for local transit",
// //           "Dine at authentic local restaurants instead of tourist hotspots",
// //           "Look for combo attraction passes online",
// //         ],
// //       };
// //     }

// //     // Sanitize and ensure numeric consistency
// //     const rawSummary = budgetData.summary || {};
// //     const stayTotal = parseNumeric(rawSummary.stayTotal, 0);
// //     const foodTotal = parseNumeric(rawSummary.foodTotal, 0);
// //     const transportTotal = parseNumeric(rawSummary.transportTotal, 0);
// //     const activitiesTotal = parseNumeric(rawSummary.activitiesTotal, 0);
// //     const miscellaneous = parseNumeric(rawSummary.miscellaneous, 0);
// //     const calculatedGrand = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;
// //     const grandTotal = parseNumeric(rawSummary.grandTotal, calculatedGrand) || calculatedGrand;
// //     const averageDailyBudget = Math.round(grandTotal / days) || Math.round(calculatedGrand / days);

// //     const sanitizedData = {
// //       dailyPlan: Array.isArray(budgetData.dailyPlan)
// //         ? budgetData.dailyPlan.map((d, idx) => ({
// //             day: parseNumeric(d.day, idx + 1),
// //             title: d.title || `Day ${idx + 1}`,
// //             activities: Array.isArray(d.activities)
// //               ? d.activities.map((a) => ({
// //                   item: a.item || "Sightseeing",
// //                   cost: parseNumeric(a.cost, 0),
// //                 }))
// //               : [],
// //             accommodation: parseNumeric(d.accommodation, 0),
// //             food: parseNumeric(d.food, 0),
// //             transport: parseNumeric(d.transport, 0),
// //           }))
// //         : [],
// //       summary: {
// //         stayTotal,
// //         foodTotal,
// //         transportTotal,
// //         activitiesTotal,
// //         miscellaneous,
// //         grandTotal,
// //       },
// //       expertAdvice: normalizeToString(budgetData.expertAdvice || `Enjoy your trip to ${city}!`),
// //       bestDeals: Array.isArray(budgetData.bestDeals)
// //         ? budgetData.bestDeals.map((item) => normalizeToString(item))
// //         : ["Book early for best rates", "Eat at local eateries", "Use public transit"],
// //       averageDailyBudget,
// //     };

// //     res.json({
// //       success: true,
// //       data: sanitizedData,
// //     });
// //   } catch (err) {
// //     console.error("Budget Generation Critical Error:", err);
// //     handleError(res, 500, "Failed to generate budget", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 📋  AI ITINERARY PLANNER (Groq)
// // // ═══════════════════════════════════════════════════════════════
// // app.post("/api/ai-planner", async (req, res) => {
// //   const city = req.body.city || req.body.destination || req.body.place || "Jaipur";
// //   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 3, 10), 1), 7);
// //   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.tripType || "Balanced";

// //   try {
// //     let planData = null;

// //     if (GROQ_API_KEY) {
// //       try {
// //         const prompt = `Create a detailed ${days}-day travel itinerary for ${city}, India. Vibe: ${tripVibe}.
// // Return valid JSON with format:
// // {
// //   "itinerary": [
// //     {
// //       "day": 1,
// //       "theme": "Arrival & City Highlights",
// //       "activities": [
// //         {"time": "Morning", "task": "Sightseeing", "description": "Explore top historical landmarks", "tips": "Start early"},
// //         {"time": "Afternoon", "task": "Local Cuisine", "description": "Enjoy traditional regional food", "tips": "Visit famous local eatery"},
// //         {"time": "Evening", "task": "Sunset & Stroll", "description": "Scenic sunset and market walk", "tips": "Great photography spot"}
// //       ]
// //     }
// //   ],
// //   "travel_tips": ["Carry comfortable walking shoes", "Keep cash handy for street vendors"],
// //   "must_try_experiences": ["Local heritage walk", "Authentic regional street food"]
// // }`;

// //         const completion = await groq.chat.completions.create({
// //           messages: [
// //             { role: "system", content: "You are a professional travel planner. You must return valid JSON only without markdown formatting." },
// //             { role: "user", content: prompt },
// //           ],
// //           model: "llama-3.3-70b-versatile",
// //           response_format: { type: "json_object" },
// //           temperature: 0.5,
// //           max_tokens: 2200,
// //         });

// //         const rawContent = completion.choices[0]?.message?.content || "";
// //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// //         planData = JSON.parse(cleanContent);
// //       } catch (groqErr) {
// //         console.warn("Groq planner notice:", groqErr.message);
// //       }
// //     }

// //     if (!planData || !planData.itinerary) {
// //       const fallbackItinerary = [];
// //       for (let d = 1; d <= days; d++) {
// //         fallbackItinerary.push({
// //           day: d,
// //           theme: d === 1 ? `Welcome to ${city} & Iconic Landmarks` : d === 2 ? `Heritage, Culture & Local Flavors` : `Hidden Gems & Panoramic Views`,
// //           activities: [
// //             { time: "Morning", task: `Explore top sights in ${city}`, description: `Start the day visiting iconic landmarks and cultural attractions.`, tips: "Arrive early to avoid queues." },
// //             { time: "Afternoon", task: "Culinary Walk & Markets", description: `Taste signature regional dishes and shop at local bazaars.`, tips: "Look for popular local food stalls." },
// //             { time: "Evening", task: "Sunset & Scenic Spot", description: `Relax and watch the sunset from a popular viewpoint or promenade.`, tips: "Ideal time for photos." },
// //           ],
// //         });
// //       }
// //       planData = {
// //         itinerary: fallbackItinerary,
// //         travel_tips: ["Keep cash handy for local vendors", "Use ride-sharing or local transit for easy travel", "Stay hydrated and wear comfortable walking shoes"],
// //         must_try_experiences: [`Signature food trail in ${city}`, `Heritage landmark tour`, `Sunset photography spot`],
// //       };
// //     }

// //     res.json({ success: true, data: planData });
// //   } catch (err) {
// //     handleError(res, 500, "AI Planner failed", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🤖  AI CHAT (Groq)
// // // ═══════════════════════════════════════════════════════════════
// // app.post("/api/ai-chat", async (req, res) => {
// //   const { message, history = [] } = req.body;
// //   if (!message) return handleError(res, 400, "Message is required");
// //   if (!GROQ_API_KEY) return handleError(res, 500, "GROQ_API_KEY is not configured");

// //   try {
// //     const messages = [
// //       { role: "system", content: "You are TravioX, an expert Indian travel assistant. Keep responses helpful, engaging and concise." },
// //       ...history.slice(-8),
// //       { role: "user", content: message },
// //     ];
// //     const completion = await groq.chat.completions.create({
// //       messages,
// //       model: "llama-3.3-70b-versatile",
// //       temperature: 0.7,
// //       max_tokens: 400,
// //     });
// //     res.json({ success: true, reply: completion.choices[0].message.content });
// //   } catch (err) {
// //     handleError(res, 500, "AI Chat failed", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 📷  PHOTOS (Unsplash)
// // // ═══════════════════════════════════════════════════════════════
// // app.get("/api/photos", async (req, res) => {
// //   const query = req.query.q;
// //   if (!query || query.trim() === "") {
// //     return res.status(400).json({ success: false, error: "Query parameter 'q' is required" });
// //   }
// //   if (!UNSPLASH_ACCESS_KEY) {
// //     return handleError(res, 500, "UNSPLASH_ACCESS_KEY is not configured");
// //   }
// //   try {
// //     const response = await axios.get("https://api.unsplash.com/search/photos", {
// //       params: { query: query.trim(), per_page: 8, client_id: UNSPLASH_ACCESS_KEY },
// //       timeout: 6000,
// //     });
// //     res.json({
// //       success: true,
// //       photos: response.data.results.map((img) => ({
// //         id: img.id,
// //         url: img.urls.regular,
// //         thumb: img.urls.thumb,
// //         description: img.alt_description || "",
// //         credit: img.user?.name || "Unsplash",
// //       })),
// //     });
// //   } catch (err) {
// //     handleError(res, 500, "Failed to fetch images", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // ✈️  FLIGHTS (SerpApi)
// // // ═══════════════════════════════════════════════════════════════
// // app.get("/api/flights", async (req, res) => {
// //   let { departure_id = "BOM", arrival_id = "DEL" } = req.query;
// //   if (!departure_id || !arrival_id || departure_id.length !== 3 || arrival_id.length !== 3) {
// //     return res.status(400).json({
// //       success: false,
// //       error: "Please use valid 3-letter airport codes (e.g., BOM, DEL)",
// //     });
// //   }
// //   if (!SERPAPI_KEY) {
// //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// //   }

// //   const nextMonth = new Date();
// //   nextMonth.setDate(nextMonth.getDate() + 30);
// //   const travelDate = nextMonth.toISOString().split("T")[0];

// //   try {
// //     const response = await axios.get("https://serpapi.com/search", {
// //       params: {
// //         engine: "google_flights",
// //         departure_id: departure_id.toUpperCase(),
// //         arrival_id: arrival_id.toUpperCase(),
// //         outbound_date: travelDate,
// //         type: "2",
// //         currency: "INR",
// //         hl: "en",
// //         gl: "us",
// //         api_key: SERPAPI_KEY,
// //       },
// //       timeout: 10000,
// //     });

// //     const results = [
// //       ...(response.data.best_flights || []),
// //       ...(response.data.other_flights || []),
// //     ];

// //     if (results.length === 0) {
// //       return res.json({ success: true, flights: [], message: "No flights found." });
// //     }

// //     const formatted = results.slice(0, 10).map((f) => {
// //       const leg = f.flights?.[0] || {};
// //       return {
// //         airline: leg.airline || "Airline",
// //         logo: leg.airline_logo || "",
// //         flight_number: leg.flight_number || "",
// //         departure: leg.departure_airport?.id || departure_id,
// //         departure_name: leg.departure_airport?.name || departure_id,
// //         arrival: leg.arrival_airport?.id || arrival_id,
// //         arrival_name: leg.arrival_airport?.name || arrival_id,
// //         departure_time: leg.departure_airport?.time?.split(" ")[1] || "10:00",
// //         arrival_time: leg.arrival_airport?.time?.split(" ")[1] || "12:30",
// //         duration: f.total_duration || 120,
// //         status: f.type || "Available",
// //         url: `https://www.google.com/travel/flights?q=flights%20from%20${departure_id}%20to%20${arrival_id}%20on%20${travelDate}`,
// //       };
// //     });

// //     res.json({ success: true, flights: formatted });
// //   } catch (err) {
// //     handleError(res, 500, "Flight search failed", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🏨  HOTELS (SerpApi)
// // // ═══════════════════════════════════════════════════════════════
// // app.get("/api/hotels", async (req, res) => {
// //   const { q = "Mumbai" } = req.query;
// //   if (!SERPAPI_KEY) {
// //     return handleError(res, 500, "SERPAPI_KEY is not configured");
// //   }
// //   try {
// //     const response = await axios.get("https://serpapi.com/search", {
// //       params: {
// //         engine: "google_hotels",
// //         q: `${q} hotels`,
// //         check_in_date: getFormattedDate(1),
// //         check_out_date: getFormattedDate(3),
// //         api_key: SERPAPI_KEY,
// //         currency: "INR",
// //         gl: "in",
// //       },
// //       timeout: 10000,
// //     });
// //     const hotels = (response.data.properties || []).slice(0, 8).map((h) => ({
// //       name: h.name,
// //       rating: h.overall_rating || "N/A",
// //       price: h.rate_per_night?.lowest || "N/A",
// //       thumbnail: h.images?.[0]?.thumbnail || "https://via.placeholder.com/300",
// //       link: h.link || "#",
// //     }));
// //     res.json({ success: true, hotels });
// //   } catch (err) {
// //     handleError(res, 500, "Hotel search failed", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 📖  TRAVEL MEMORY BUILDER (Groq Vision + AI Storyteller)
// // // ═══════════════════════════════════════════════════════════════
// // async function analyzePhotoWithVision(m, i) {
// //   const note = (m.user_note || m.note || "").trim();
// //   const rawBase64 = m.image_base64 || m.base64 || "";
// //   const imageUrl = m.image_url || m.url || (typeof m.uri === "string" && m.uri.startsWith("http") ? m.uri : "");
// //   const cleanBase64 = rawBase64.replace(/^data:image\/\w+;base64,/, "").trim();

// //   // If photo (base64 or remote URL) is provided, inspect with Groq Vision
// //   if (GROQ_API_KEY && (cleanBase64 || imageUrl)) {
// //     try {
// //       const imageContent = cleanBase64
// //         ? { type: "image_url", image_url: { url: `data:image/jpeg;base64,${cleanBase64}` } }
// //         : { type: "image_url", image_url: { url: imageUrl } };

// //       const visionPrompt = `You are an AI travel vision analyst inspecting photo #${i + 1} of a trip.
// // Traveler's note: "${note || "Scenic travel moment"}".
// // Examine the image carefully (scenery, landmarks, architecture, nature, food, culture, lighting, colors, activities) and return valid JSON:
// // {
// //   "visual_description": "Vivid 1-2 sentence description detailing exactly what is seen in the photo and the atmosphere",
// //   "mood": "1-word mood (e.g. Wonder, Serene, Adventurous, Euphoric, Vibrant, Majestic, Cozy, Free)",
// //   "mood_emoji": "1 matching emoji (e.g. 🌅, 🏔️, 🍜, 🏛️, ✨, 🌊, 🌸, ⛺)"
// // }`;

// //       const visionRes = await groq.chat.completions.create({
// //         messages: [
// //           {
// //             role: "system",
// //             content: "You are a travel vision analyst. You must return valid JSON only.",
// //           },
// //           {
// //             role: "user",
// //             content: [
// //               { type: "text", text: visionPrompt },
// //               imageContent,
// //             ],
// //           },
// //         ],
// //         model: "llama-3.2-11b-vision-preview",
// //         response_format: { type: "json_object" },
// //         temperature: 0.3,
// //         max_tokens: 220,
// //       });

// //       const parsed = JSON.parse(visionRes.choices[0]?.message?.content || "{}");
// //       return {
// //         index: i,
// //         note: note || parsed.visual_description || `Moment #${i + 1}`,
// //         visual_description: parsed.visual_description || note || `Scene #${i + 1}`,
// //         mood: parsed.mood || "Adventurous",
// //         mood_emoji: parsed.mood_emoji || "✨",
// //       };
// //     } catch (visionErr) {
// //       console.warn(`Vision analysis notice for photo #${i + 1}:`, visionErr.message);
// //     }
// //   }

// //   return {
// //     index: i,
// //     note: note || `Moment #${i + 1}`,
// //     visual_description: note || `Special travel memory #${i + 1}`,
// //     mood: "Memorable",
// //     mood_emoji: "📸",
// //   };
// // }

// // app.post("/api/travel-memory-builder", async (req, res) => {
// //   const { moments } = req.body;
// //   if (!moments || !Array.isArray(moments) || moments.length < 2) {
// //     return res.status(400).json({ success: false, error: "Provide at least 2 moments" });
// //   }

// //   try {
// //     console.log(`📸 Analyzing ${moments.length} photos with AI Vision...`);

// //     // Analyze all photos concurrently with Groq Vision
// //     const sceneAnalyses = await Promise.all(
// //       moments.map((m, i) => analyzePhotoWithVision(m, i))
// //     );

// //     let storyData = null;

// //     if (GROQ_API_KEY) {
// //       try {
// //         const storyPrompt = `You are an acclaimed travel writer. A traveler captured these moments with photos and notes:
// // ${JSON.stringify(sceneAnalyses, null, 2)}

// // Craft an evocative travel diary that incorporates the visual details from the photos and the traveler's personal notes.
// // Return ONLY valid JSON matching this exact structure:
// // {
// //   "trip_title": "4-6 word evocative, poetic title for this journey",
// //   "travel_story": "A rich 3-4 paragraph narrative vividly weaving the visual scenes from the photos and personal notes into an unforgettable journey.",
// //   "highlight_quote": "One poetic line summing up the soul of this trip",
// //   "tags": ["travel", "wanderlust", "memories", "explore", "adventure"],
// //   "timeline": [
// //     {
// //       "moment_index": 0,
// //       "mood": "1-word mood",
// //       "mood_emoji": "1 matching emoji",
// //       "scene_description": "1 vivid sentence describing what is seen in the photo and the experience",
// //       "social_caption": "Engaging Instagram/TikTok caption highlighting the visual scene with 3 trending hashtags"
// //     }
// //   ]
// // }

// // IMPORTANT: Provide an entry in "timeline" for every moment index from 0 to ${sceneAnalyses.length - 1}.`;

// //         const storyRes = await groq.chat.completions.create({
// //           messages: [
// //             {
// //               role: "system",
// //               content: "You are an acclaimed travel author and storyteller. You must return valid JSON only without markdown codeblocks or extra text.",
// //             },
// //             { role: "user", content: storyPrompt },
// //           ],
// //           model: "llama-3.3-70b-versatile",
// //           response_format: { type: "json_object" },
// //           temperature: 0.6,
// //           max_tokens: 2200,
// //         });

// //         const rawContent = storyRes.choices[0]?.message?.content || "";
// //         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
// //         storyData = JSON.parse(cleanContent);
// //       } catch (groqErr) {
// //         console.error("Groq Memory Builder Story Error:", groqErr.message);
// //       }
// //     }

// //     // Dynamic fallback if Groq text is slow/down
// //     if (!storyData || !storyData.travel_story) {
// //       const fallbackTimeline = sceneAnalyses.map((s, i) => ({
// //         moment_index: i,
// //         mood: s.mood || "Adventurous",
// //         mood_emoji: s.mood_emoji || "✨",
// //         scene_description: s.visual_description || s.note || `A special memory from moment #${i + 1}.`,
// //         social_caption: `${s.visual_description || s.note || "Collecting memories along the way"} ✨ #travel #wanderlust #memories`,
// //       }));

// //       storyData = {
// //         trip_title: "Echoes of the Open Road",
// //         travel_story: `Every journey leaves a mark on our soul. From the early morning departures to the quiet reflections as dusk settled, each chapter carried its own distinctive rhythm.\n\nTraveling through these places was a reminder that the best moments are often the unscripted ones—the spontaneous encounters, the shared laughter, and the breathtaking vistas that photos can only begin to capture.\n\nThese memories stand as tokens of adventure, reminding us why we wander and inspiring the journeys yet to come.`,
// //         highlight_quote: "We travel not to escape life, but for life not to escape us.",
// //         tags: ["wanderlust", "traveldiaries", "explore", "memories", "adventure"],
// //         timeline: fallbackTimeline,
// //       };
// //     }

// //     // Ensure all moments have a complete timeline entry
// //     const timeline = sceneAnalyses.map((s, i) => {
// //       const match = storyData.timeline?.find((t) => t.moment_index === i || t.index === i);
// //       return {
// //         index: i,
// //         user_note: s.note,
// //         mood: match?.mood || s.mood || "Memorable",
// //         mood_emoji: match?.mood_emoji || s.mood_emoji || "📸",
// //         scene_description: match?.scene_description || s.visual_description || s.note || `Travel memory #${i + 1}`,
// //         social_caption: match?.social_caption || `${s.visual_description || s.note || "Travel memories"} ✨ #travel #wanderlust`,
// //       };
// //     });

// //     res.json({
// //       success: true,
// //       data: {
// //         trip_title: storyData.trip_title || "A Journey Remembered",
// //         travel_story: storyData.travel_story || "Memories forged along the open road.",
// //         highlight_quote: storyData.highlight_quote || "Collect moments, not things.",
// //         tags: Array.isArray(storyData.tags) ? storyData.tags : ["travel", "wanderlust", "memories"],
// //         timeline,
// //         created_at: new Date().toISOString(),
// //       },
// //     });
// //   } catch (err) {
// //     console.error("Memory Builder Critical Error:", err);
// //     handleError(res, 500, "Memory builder failed", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🎬  CREATOMATE VIDEO GENERATOR
// // // ═══════════════════════════════════════════════════════════════
// // function buildSlideshowRenderScript(imageUrls, captions = []) {
// //   const photos = imageUrls.slice(0, 4);
// //   const slideDuration = 3.5;
// //   const elements = [];

// //   photos.forEach((url, i) => {
// //     elements.push({
// //       type: "image",
// //       source: url,
// //       track: 1,
// //       duration: slideDuration,
// //       clip: true,
// //       animations: [
// //         { type: "scale", start_scale: i % 2 === 0 ? "100%" : "112%", end_scale: i % 2 === 0 ? "112%" : "100%", easing: "linear" },
// //         ...(i > 0 ? [{ type: "fade", transition: true, duration: 0.6 }] : []),
// //       ],
// //     });
// //   });

// //   if (Array.isArray(captions) && captions.length > 0) {
// //     photos.forEach((_, i) => {
// //       const cap = captions[i];
// //       if (cap && typeof cap === "string" && cap.trim()) {
// //         elements.push({
// //           type: "text",
// //           text: cap.trim().substring(0, 100),
// //           track: 2,
// //           time: i * slideDuration,
// //           duration: slideDuration,
// //           y: "85%",
// //           width: "86%",
// //           fill_color: "#ffffff",
// //           background_color: "rgba(10, 10, 10, 0.75)",
// //           background_border_radius: "12 px",
// //           padding: "14 px",
// //           font_size: "30 px",
// //           font_weight: "700",
// //           text_alignment: "center",
// //           animations: [
// //             { type: "fade", duration: 0.4 },
// //             { type: "fade", duration: 0.4, transition: false, time: slideDuration - 0.4, reversed: true },
// //           ],
// //         });
// //       }
// //     });
// //   }

// //   return {
// //     output_format: "mp4",
// //     width: 1080,
// //     height: 1920,
// //     frame_rate: 30,
// //     elements,
// //   };
// // }

// // app.post("/api/generate-video", async (req, res) => {
// //   const { imageUrls, captions } = req.body;
// //   if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length < 2) {
// //     return res.status(400).json({ success: false, error: "Provide at least 2 image URLs" });
// //   }
// //   if (!CREATOMATE_API_KEY) {
// //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// //   }

// //   try {
// //     const videoMoments = imageUrls.slice(0, 4);
// //     let renderResponse = null;

// //     if (CREATOMATE_TEMPLATE_ID) {
// //       try {
// //         const modifications = {};
// //         videoMoments.forEach((url, i) => {
// //           modifications[`Background-${i + 1}.source`] = url;
// //         });
// //         if (captions && captions.length > 0) {
// //           captions.slice(0, videoMoments.length).forEach((caption, i) => {
// //             modifications[`Text-${i + 1}.text`] = (caption || "").substring(0, 150);
// //           });
// //         }
// //         const tplRes = await axios.post(
// //           "https://api.creatomate.com/v2/renders",
// //           { template_id: CREATOMATE_TEMPLATE_ID, modifications },
// //           {
// //             headers: {
// //               Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// //               "Content-Type": "application/json",
// //             },
// //             timeout: 6000,
// //           }
// //         );
// //         renderResponse = tplRes.data;
// //       } catch (tplErr) {
// //         console.warn("Template render notice:", tplErr.message);
// //       }
// //     }

// //     if (!renderResponse) {
// //       const source = buildSlideshowRenderScript(videoMoments, captions);
// //       const scriptRes = await axios.post(
// //         "https://api.creatomate.com/v2/renders",
// //         { source },
// //         {
// //           headers: {
// //             Authorization: `Bearer ${CREATOMATE_API_KEY}`,
// //             "Content-Type": "application/json",
// //           },
// //           timeout: 6000,
// //         }
// //       );
// //       renderResponse = scriptRes.data;
// //     }

// //     const initialRender = Array.isArray(renderResponse) ? renderResponse[0] : renderResponse;
// //     if (!initialRender || !initialRender.id) {
// //       throw new Error("Invalid response from Creatomate");
// //     }

// //     res.json({
// //       success: true,
// //       videoUrl: initialRender.url,
// //       status: initialRender.status,
// //       renderId: initialRender.id,
// //     });
// //   } catch (err) {
// //     handleError(res, 500, "Failed to generate video", err.message);
// //   }
// // });

// // app.get("/api/video-status/:id", async (req, res) => {
// //   if (!CREATOMATE_API_KEY) {
// //     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
// //   }
// //   try {
// //     const statusRes = await axios.get(`https://api.creatomate.com/v2/renders/${req.params.id}`, {
// //       headers: { Authorization: `Bearer ${CREATOMATE_API_KEY}` },
// //       timeout: 6000,
// //     });
// //     const data = Array.isArray(statusRes.data) ? statusRes.data[0] : statusRes.data;
// //     res.json({
// //       success: true,
// //       status: data.status,
// //       videoUrl: data.url,
// //       errorMessage: data.error_message,
// //     });
// //   } catch (err) {
// //     handleError(res, 500, "Failed to fetch video status", err.message);
// //   }
// // });

// // // ═══════════════════════════════════════════════════════════════
// // // 🚀  START SERVER
// // // ═══════════════════════════════════════════════════════════════
// // app.listen(PORT, () => {
// //   console.log(`\n✈️  TravioX Server running on port ${PORT}`);
// //   console.log(`   Health: http://localhost:${PORT}/api/health\n`);
// // });

// // module.exports = app;





// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// const Groq = require("groq-sdk");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // ═══════════════════════════════════════════════════════════════
// // 🔑  API KEYS — Loaded from process.env (.env or Vercel Environment Variables)
// // ═══════════════════════════════════════════════════════════════
// const GROQ_API_KEY = process.env.GROQ_API_KEY;
// const SERPAPI_KEY = process.env.SERPAPI_KEY;
// const RAPID_API_KEY = process.env.RAPID_API_KEY;
// const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
// const SARVAM_API_KEY = process.env.SARVAM_API_KEY;
// const CREATOMATE_API_KEY = process.env.CREATOMATE_API_KEY;
// const CREATOMATE_TEMPLATE_ID = process.env.CREATOMATE_TEMPLATE_ID;
// const GEOAPIFY_KEY = process.env.GEOAPIFY_KEY;

// // Log key availability without exiting process
// const REQUIRED_KEYS = [
//   "GROQ_API_KEY",
//   "SERPAPI_KEY",
//   "RAPID_API_KEY",
//   "UNSPLASH_ACCESS_KEY",
//   "SARVAM_API_KEY",
//   "CREATOMATE_API_KEY",
//   "GEOAPIFY_KEY",
// ];

// const missingKeys = REQUIRED_KEYS.filter((k) => !process.env[k]);
// if (missingKeys.length > 0) {
//   console.warn(`⚠️ Warning: Missing environment variables: ${missingKeys.join(", ")}`);
//   console.warn("Add these in Vercel Project Settings -> Environment Variables for full AI features.");
// } else {
//   console.log("✅ All required environment variables loaded.");
// }

// const groq = new Groq({ apiKey: GROQ_API_KEY || "dummy_key" });

// // ═══════════════════════════════════════════════════════════════
// // ⚙️  MIDDLEWARE
// // ═══════════════════════════════════════════════════════════════
// app.use(cors());
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.static("public"));

// app.use((req, _res, next) => {
//   console.log(`📥 ${req.method} ${req.path}`);
//   next();
// });

// // ═══════════════════════════════════════════════════════════════
// // 🛠️  HELPERS
// // ═══════════════════════════════════════════════════════════════
// const getFormattedDate = (daysFromNow) => {
//   const d = new Date();
//   d.setDate(d.getDate() + daysFromNow);
//   return d.toISOString().split("T")[0];
// };

// const handleError = (res, statusCode, message, details = null) => {
//   console.error(`❌ Error (${statusCode}): ${message}`, details || "");
//   res.status(statusCode).json({
//     success: false,
//     error: message,
//     ...(details ? { details } : {}),
//   });
// };

// const parseNumeric = (val, fallback = 0) => {
//   if (typeof val === "number" && !isNaN(val)) return val;
//   if (!val) return fallback;
//   const cleaned = String(val).replace(/[^0-9.-]+/g, "");
//   const num = parseFloat(cleaned);
//   return isNaN(num) ? fallback : num;
// };

// const normalizeToString = (val) => {
//   if (!val) return "";
//   if (typeof val === "string") return val;
//   if (Array.isArray(val)) return val.join(", ");
//   if (typeof val === "object") {
//     if (val.dishes)
//       return Array.isArray(val.dishes) ? val.dishes.join(", ") : String(val.dishes);
//     return Object.values(val).join(", ");
//   }
//   return String(val);
// };

// const sanitizeDestinationInfo = (info) => ({
//   history: normalizeToString(info.history),
//   bestTime: normalizeToString(info.bestTime),
//   food: normalizeToString(info.food),
//   culture: normalizeToString(info.culture),
//   hiddenGem: normalizeToString(info.hiddenGem),
//   summary: normalizeToString(info.summary),
// });

// const splitIntoChunks = (text, maxLen = 490) => {
//   const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
//   const chunks = [];
//   let current = "";
//   for (const sentence of sentences) {
//     if ((current + sentence).length <= maxLen) {
//       current += sentence;
//     } else {
//       if (current.trim()) chunks.push(current.trim());
//       if (sentence.length > maxLen) {
//         const words = sentence.split(" ");
//         let wordChunk = "";
//         for (const word of words) {
//           if ((wordChunk + " " + word).length <= maxLen) {
//             wordChunk += (wordChunk ? " " : "") + word;
//           } else {
//             if (wordChunk) chunks.push(wordChunk.trim());
//             wordChunk = word;
//           }
//         }
//         current = wordChunk;
//       } else {
//         current = sentence;
//       }
//     }
//   }
//   if (current.trim()) chunks.push(current.trim());
//   return chunks.filter(Boolean);
// };

// const translateText = async (text, targetLang) => {
//   if (targetLang === "en-IN" || !text || !SARVAM_API_KEY) return text;
//   try {
//     const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
//     const translatedChunks = [];
//     let currentChunk = "";
//     for (const sentence of sentences) {
//       if ((currentChunk + sentence).length < 900) {
//         currentChunk += sentence;
//       } else {
//         if (currentChunk) {
//           const res = await axios.post(
//             "https://api.sarvam.ai/translate",
//             {
//               input: currentChunk,
//               source_language_code: "en-IN",
//               target_language_code: targetLang,
//               speaker_gender: "Female",
//             },
//             {
//               headers: {
//                 "api-subscription-key": SARVAM_API_KEY,
//                 "Content-Type": "application/json",
//               },
//               timeout: 6000,
//             }
//           );
//           translatedChunks.push(res.data.translated_text || currentChunk);
//         }
//         currentChunk = sentence;
//       }
//     }
//     if (currentChunk) {
//       const res = await axios.post(
//         "https://api.sarvam.ai/translate",
//         {
//           input: currentChunk,
//           source_language_code: "en-IN",
//           target_language_code: targetLang,
//           speaker_gender: "Female",
//         },
//         {
//           headers: {
//             "api-subscription-key": SARVAM_API_KEY,
//             "Content-Type": "application/json",
//           },
//           timeout: 6000,
//         }
//       );
//       translatedChunks.push(res.data.translated_text || currentChunk);
//     }
//     return translatedChunks.join(" ");
//   } catch (err) {
//     console.warn("Translation Notice:", err.response?.data || err.message);
//     return text;
//   }
// };

// const generateSarvamAudio = async (text, language = "en-IN", speaker = "meera") => {
//   if (!SARVAM_API_KEY || !text) return [];
//   try {
//     const chunks = splitIntoChunks(text, 490).slice(0, 3);
//     const audioSegments = [];
//     for (let i = 0; i < chunks.length; i++) {
//       const chunk = chunks[i];
//       const ttsRes = await axios.post(
//         "https://api.sarvam.ai/text-to-speech",
//         { inputs: [chunk], target_language_code: language, speaker_id: speaker },
//         {
//           headers: {
//             "api-subscription-key": SARVAM_API_KEY,
//             "Content-Type": "application/json",
//           },
//           timeout: 5000,
//         }
//       );
//       if (ttsRes.data?.audios?.[0]) {
//         audioSegments.push(ttsRes.data.audios[0]);
//       }
//     }
//     return audioSegments;
//   } catch (err) {
//     console.warn("Sarvam TTS Notice:", err.response?.data || err.message);
//     return [];
//   }
// };

// // ═══════════════════════════════════════════════════════════════
// // ✅  HEALTH CHECK
// // ═══════════════════════════════════════════════════════════════
// app.get("/api/health", (_req, res) => {
//   res.json({
//     success: true,
//     message: "TravioX API is running ✈️",
//     timestamp: new Date().toISOString(),
//     keys_configured: {
//       groq: !!GROQ_API_KEY,
//       serpapi: !!SERPAPI_KEY,
//       rapidapi: !!RAPID_API_KEY,
//       unsplash: !!UNSPLASH_ACCESS_KEY,
//       sarvam: !!SARVAM_API_KEY,
//       creatomate: !!CREATOMATE_API_KEY,
//       geoapify: !!GEOAPIFY_KEY,
//     },
//   });
// });

// // ═══════════════════════════════════════════════════════════════
// // 🗺️  LIVE MAP — GEOCODE SEARCH (Geoapify)
// // ═══════════════════════════════════════════════════════════════
// app.post("/api/live-map/geocode", async (req, res) => {
//   const { query } = req.body;
//   if (!query || !query.trim()) {
//     return handleError(res, 400, "query is required");
//   }
//   if (!GEOAPIFY_KEY) {
//     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
//   }
//   try {
//     const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
//       params: { text: query.trim(), apiKey: GEOAPIFY_KEY, limit: 1, format: "json" },
//       timeout: 6000,
//     });
//     const results = response.data?.results;
//     if (!results || results.length === 0) {
//       return res.status(404).json({ success: false, error: "Location not found" });
//     }
//     const place = results[0];
//     res.json({
//       success: true,
//       result: {
//         latitude: place.lat,
//         longitude: place.lon,
//         label: place.formatted || query,
//         country: place.country || "",
//         city: place.city || place.county || "",
//       },
//     });
//   } catch (err) {
//     handleError(res, 500, "Geocoding failed", err.message);
//   }
// });

// // ─────────────────────────────────────────────────────────────
// // Routing
// app.post("/api/live-map/route", async (req, res) => {
//   const { startLat, startLon, endLat, endLon, mode = "drive" } = req.body;
//   if (!startLat || !startLon || !endLat || !endLon) {
//     return handleError(res, 400, "startLat, startLon, endLat, endLon are all required");
//   }
//   if (!GEOAPIFY_KEY) {
//     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
//   }
//   const validModes = ["drive", "walk", "bicycle", "transit"];
//   const routeMode = validModes.includes(mode) ? mode : "drive";
//   try {
//     const url = "https://api.geoapify.com/v1/routing";
//     const response = await axios.get(url, {
//       params: {
//         waypoints: `${startLat},${startLon}|${endLat},${endLon}`,
//         mode: routeMode,
//         apiKey: GEOAPIFY_KEY,
//         format: "json",
//       },
//       timeout: 8000,
//     });
//     const features = response.data?.features;
//     if (!features || features.length === 0) {
//       return res.status(404).json({ success: false, error: "No route found" });
//     }
//     const feature = features[0];
//     const props = feature.properties;
//     let allCoords = [];
//     const geom = feature.geometry;
//     if (geom.type === "MultiLineString") {
//       geom.coordinates.forEach((line) => {
//         line.forEach(([lon, lat]) => allCoords.push({ latitude: lat, longitude: lon }));
//       });
//     } else if (geom.type === "LineString") {
//       geom.coordinates.forEach(([lon, lat]) =>
//         allCoords.push({ latitude: lat, longitude: lon })
//       );
//     }
//     res.json({
//       success: true,
//       route: {
//         coordinates: allCoords,
//         distance_km: parseFloat((props.distance / 1000).toFixed(2)),
//         duration_min: Math.round(props.time / 60),
//         mode: routeMode,
//       },
//     });
//   } catch (err) {
//     handleError(res, 500, "Route calculation failed", err.message);
//   }
// });

// // ─────────────────────────────────────────────────────────────
// // Reverse Geocode
// app.get("/api/live-map/reverse", async (req, res) => {
//   const { lat, lon } = req.query;
//   if (!lat || !lon) return handleError(res, 400, "lat and lon are required");
//   if (!GEOAPIFY_KEY) {
//     return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
//   }
//   try {
//     const response = await axios.get("https://api.geoapify.com/v1/geocode/reverse", {
//       params: { lat, lon, apiKey: GEOAPIFY_KEY, format: "json" },
//       timeout: 6000,
//     });
//     const results = response.data?.results;
//     const label =
//       results?.[0]?.formatted || `${parseFloat(lat).toFixed(4)}, ${parseFloat(lon).toFixed(4)}`;
//     res.json({ success: true, label });
//   } catch (err) {
//     handleError(res, 500, "Reverse geocoding failed", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 📰  NEWS (RapidAPI)
// // ═══════════════════════════════════════════════════════════════
// app.get("/api/startup-news", async (req, res) => {
//   const userQuery = req.query.q || "Travel";
//   if (!RAPID_API_KEY) {
//     return handleError(res, 500, "RAPID_API_KEY is not configured on server");
//   }
//   try {
//     const response = await axios.get("https://real-time-news-data.p.rapidapi.com/search", {
//       params: {
//         query: userQuery,
//         limit: 10,
//         time_published: "anytime",
//         country: "US",
//         lang: "en",
//       },
//       headers: {
//         "x-rapidapi-key": RAPID_API_KEY,
//         "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
//       },
//       timeout: 8000,
//     });
//     const formattedNews = (response.data.data || []).map((item) => ({
//       title: item.title,
//       summary: item.snippet || item.summary || "No summary available",
//       link: item.link,
//       published_date: item.published_datetime_utc || "",
//       image_url:
//         item.photo_url || item.thumbnail || "https://via.placeholder.com/400x200",
//     }));
//     res.json({ success: true, results: formattedNews });
//   } catch (err) {
//     handleError(res, 500, "News fetch failed", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 🧳  SMART PACKING LIST (Groq)
// // ═══════════════════════════════════════════════════════════════
// app.post("/api/smart-packing", async (req, res) => {
//   const destination = req.body.destination || req.body.city || req.body.place || "Goa";
//   const tripType = req.body.tripType || "Leisure";
//   const duration = parseInt(req.body.duration || req.body.days || 5, 10);
//   const gender = req.body.gender || "Unspecified";
//   const luggageType = req.body.luggageType || "Backpack";
//   const specialActivities = Array.isArray(req.body.specialActivities) ? req.body.specialActivities : [];

//   try {
//     let packingData = null;

//     if (GROQ_API_KEY) {
//       try {
//         const activitiesStr = specialActivities.length > 0 ? specialActivities.join(", ") : "None";
//         const prompt = `You are a geo-climate travel expert. Analyze location "${destination}".
// Trip: ${tripType} | ${duration} days | Gender: ${gender} | Luggage: ${luggageType} | Activities: ${activitiesStr}
// ${tripType === "Family" ? "Include 'Kids & Baby Essentials' (icon: '🍼') category." : ""}
// Return STRICT JSON:
// {
//   "weather_summary": "Climate analysis for ${destination}",
//   "categories": [
//     {
//       "name": "Layering & Clothing",
//       "icon": "🧥",
//       "items": [{"item": "Comfortable clothes", "essential": true, "reason": "Daily wear"}]
//     },
//     {"name": "Footwear", "icon": "🥾", "items": [{"item": "Walking shoes", "essential": true, "reason": "Sightseeing"}]},
//     {"name": "Toiletries & Health", "icon": "🧴", "items": [{"item": "Sunscreen & Moisturizer", "essential": true, "reason": "Skin protection"}]},
//     {"name": "Electronics", "icon": "🔌", "items": [{"item": "Power bank & Chargers", "essential": true, "reason": "Phone backup"}]},
//     {"name": "Documents & Essentials", "icon": "📄", "items": [{"item": "ID Proof & Tickets", "essential": true, "reason": "Identity verification"}]}
//   ],
//   "pro_tips": ["Carry local currency and hydration supplies for ${destination}"]
// }`;

//         const completion = await groq.chat.completions.create({
//           messages: [
//             { role: "system", content: "You are an expert packing advisor. Return valid JSON only without markdown." },
//             { role: "user", content: prompt },
//           ],
//           model: "llama-3.3-70b-versatile",
//           response_format: { type: "json_object" },
//           temperature: 0.4,
//           max_tokens: 1500,
//         });

//         const rawContent = completion.choices[0]?.message?.content || "";
//         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
//         packingData = JSON.parse(cleanContent);
//       } catch (gErr) {
//         console.warn("Groq packing notice:", gErr.message);
//       }
//     }

//     if (!packingData || !packingData.categories) {
//       packingData = {
//         weather_summary: `Pleasant weather expected in ${destination}.`,
//         categories: [
//           {
//             name: "Layering & Clothing",
//             icon: "🧥",
//             items: [
//               { item: "Light breathable shirts/t-shirts (4-5 pairs)", essential: true, reason: "Daytime comfort" },
//               { item: "Comfortable pants or shorts (2-3 pairs)", essential: true, reason: "Sightseeing" },
//             ],
//           },
//           {
//             name: "Footwear",
//             icon: "🥾",
//             items: [
//               { item: "Comfortable walking shoes", essential: true, reason: "Long walks" },
//               { item: "Flip flops or sandals", essential: false, reason: "Relaxation" },
//             ],
//           },
//           {
//             name: "Toiletries & Health",
//             icon: "🧴",
//             items: [
//               { item: "Sunscreen SPF 50+", essential: true, reason: "Sun protection" },
//               { item: "Basic first aid & personal meds", essential: true, reason: "Emergencies" },
//             ],
//           },
//           {
//             name: "Electronics",
//             icon: "🔌",
//             items: [
//               { item: "Power bank 10,000mAh", essential: true, reason: "On-the-go charging" },
//               { item: "Universal charging adapter", essential: true, reason: "Device charging" },
//             ],
//           },
//           {
//             name: "Documents & Essentials",
//             icon: "📄",
//             items: [
//               { item: "Government ID & Hotel booking copy", essential: true, reason: "Check-in" },
//               { item: "Cash & backup cards", essential: true, reason: "Local shopping" },
//             ],
//           },
//         ],
//         pro_tips: [`Stay hydrated and keep local emergency contacts saved while in ${destination}.`],
//       };
//     }

//     res.json({ success: true, data: packingData });
//   } catch (err) {
//     handleError(res, 500, "Failed to generate packing list", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 🗺️  DESTINATION INFO + AUDIO (Groq + Sarvam Fallback)
// // ═══════════════════════════════════════════════════════════════
// app.post("/api/destination-info", async (req, res) => {
//   const city = req.body.city || req.body.destination || req.body.place || "Mumbai";
//   const language = req.body.language || "en-IN";

//   try {
//     let infoData = null;

//     if (GROQ_API_KEY) {
//       try {
//         const prompt = `You are an expert travel guide. Generate travel summary for ${city}, India.
// Return STRICT JSON:
// {
//   "history": "3 sentences covering origin, historical significance.",
//   "bestTime": "Which months/season and exactly why.",
//   "food": "Name 3 must-try local dishes as a comma-separated string.",
//   "culture": "2 sentences on local traditions.",
//   "hiddenGem": "One underrated spot.",
//   "summary": "A vivid 3-sentence overview."
// }`;

//         const completion = await groq.chat.completions.create({
//           messages: [
//             { role: "system", content: "You are an expert travel assistant. Return valid JSON only without markdown." },
//             { role: "user", content: prompt },
//           ],
//           model: "llama-3.3-70b-versatile",
//           response_format: { type: "json_object" },
//           temperature: 0.6,
//           max_tokens: 1000,
//         });

//         const rawContent = completion.choices[0]?.message?.content || "";
//         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
//         const rawInfo = JSON.parse(cleanContent);
//         infoData = sanitizeDestinationInfo(rawInfo);
//       } catch (groqErr) {
//         console.warn("Groq destination-info notice:", groqErr.message);
//       }
//     }

//     if (!infoData) {
//       infoData = {
//         history: `${city} boasts a vibrant history with century-old architecture and culturally rich roots.`,
//         bestTime: "October to March for optimal sightseeing weather.",
//         food: "Local Street Food, Regional Speciality Thali, Traditional Dessert",
//         culture: "Known for hospitable locals and colorful festivals.",
//         hiddenGem: "Historic backstreets and local viewpoints.",
//         summary: `Discover the unforgettable heritage, vibrant markets, and rich cuisine of ${city}.`,
//       };
//     }

//     let narrationScript = `Welcome to ${city}. ${infoData.summary} Best time to visit is ${infoData.bestTime}. Must-try foods: ${infoData.food}.`;
//     let audioSegments = [];

//     if (SARVAM_API_KEY) {
//       try {
//         if (language !== "en-IN") {
//           narrationScript = await translateText(narrationScript, language);
//         }
//         audioSegments = await generateSarvamAudio(narrationScript, language);
//       } catch (sErr) {
//         console.warn("Sarvam audio notice:", sErr.message);
//       }
//     }

//     res.json({
//       success: true,
//       data: {
//         info: infoData,
//         audioSegments,
//         audioBase64: audioSegments[0] || null,
//         generatedLanguage: language,
//       },
//     });
//   } catch (err) {
//     handleError(res, 500, "Failed to generate destination info", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 🔊  TEXT-TO-SPEECH (Direct)
// // ═══════════════════════════════════════════════════════════════
// app.post("/api/text-to-speech", async (req, res) => {
//   const { prompt, text, language = "en-IN", speaker = "meera" } = req.body;
//   try {
//     let finalText = text;
//     if (!finalText && prompt && GROQ_API_KEY) {
//       const completion = await groq.chat.completions.create({
//         messages: [
//           { role: "system", content: "You are a helpful travel assistant. Keep responses under 200 words." },
//           { role: "user", content: prompt },
//         ],
//         model: "llama-3.3-70b-versatile",
//         temperature: 0.7,
//         max_tokens: 300,
//       });
//       finalText = completion.choices[0].message.content;
//     }

//     if (!finalText) finalText = "Welcome to your TravioX journey.";
//     finalText = normalizeToString(finalText);

//     const audioSegments = await generateSarvamAudio(finalText, language, speaker);
//     res.json({
//       success: true,
//       audioSegments,
//       audioBase64: audioSegments[0] || null,
//       textUsed: finalText,
//       totalChunks: audioSegments.length,
//     });
//   } catch (err) {
//     handleError(res, 500, "Failed to generate speech", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 🌐  MULTI-LANGUAGE REGISTRY & TRANSLATOR (Sarvam + Groq AI)
// // ═══════════════════════════════════════════════════════════════
// const SUPPORTED_LANGUAGES = [
//   { code: "en-IN", name: "English", nativeName: "English", flag: "🇬🇧", sarvam: true },
//   { code: "hi-IN", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", sarvam: true },
//   { code: "mr-IN", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳", sarvam: true },
//   { code: "bn-IN", name: "Bengali", nativeName: "বাংলা", flag: "🇮🇳", sarvam: true },
//   { code: "ta-IN", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳", sarvam: true },
//   { code: "te-IN", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳", sarvam: true },
//   { code: "kn-IN", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳", sarvam: true },
//   { code: "gu-IN", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳", sarvam: true },
//   { code: "pa-IN", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳", sarvam: true },
//   { code: "ml-IN", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳", sarvam: true },
//   { code: "od-IN", name: "Odia", nativeName: "ଓଡ଼ିଆ", flag: "🇮🇳", sarvam: true },
//   { code: "es-ES", name: "Spanish", nativeName: "Español", flag: "🇪🇸", sarvam: false },
//   { code: "fr-FR", name: "French", nativeName: "Français", flag: "🇫🇷", sarvam: false },
//   { code: "de-DE", name: "German", nativeName: "Deutsch", flag: "🇩🇪", sarvam: false },
//   { code: "ja-JP", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", sarvam: false },
//   { code: "ar-SA", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", sarvam: false },
//   { code: "ru-RU", name: "Russian", nativeName: "Русский", flag: "🇷🇺", sarvam: false },
//   { code: "zh-CN", name: "Chinese", nativeName: "中文", flag: "🇨🇳", sarvam: false },
//   { code: "it-IT", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", sarvam: false },
//   { code: "pt-PT", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", sarvam: false },
// ];

// function resolveLangCode(lang, defaultCode = "hi-IN") {
//   if (!lang) return defaultCode;
//   const l = String(lang).trim().toLowerCase();
//   if (l === "en" || l.startsWith("en-") || l === "english") return "en-IN";
//   if (l === "hi" || l.startsWith("hi-") || l === "hindi") return "hi-IN";
//   if (l === "mr" || l.startsWith("mr-") || l === "marathi") return "mr-IN";
//   if (l === "bn" || l.startsWith("bn-") || l === "bengali" || l === "bangla") return "bn-IN";
//   if (l === "ta" || l.startsWith("ta-") || l === "tamil") return "ta-IN";
//   if (l === "te" || l.startsWith("te-") || l === "telugu") return "te-IN";
//   if (l === "kn" || l.startsWith("kn-") || l === "kannada") return "kn-IN";
//   if (l === "gu" || l.startsWith("gu-") || l === "gujarati") return "gu-IN";
//   if (l === "pa" || l.startsWith("pa-") || l === "punjabi") return "pa-IN";
//   if (l === "ml" || l.startsWith("ml-") || l === "malayalam") return "ml-IN";
//   if (l === "od" || l === "or" || l.startsWith("od-") || l.startsWith("or-") || l === "odia") return "od-IN";
//   if (l === "es" || l.startsWith("es-") || l === "spanish") return "es-ES";
//   if (l === "fr" || l.startsWith("fr-") || l === "french") return "fr-FR";
//   if (l === "de" || l.startsWith("de-") || l === "german") return "de-DE";
//   if (l === "ja" || l.startsWith("ja-") || l === "japanese") return "ja-JP";
//   if (l === "ar" || l.startsWith("ar-") || l === "arabic") return "ar-SA";
//   if (l === "ru" || l.startsWith("ru-") || l === "russian") return "ru-RU";
//   if (l === "zh" || l.startsWith("zh-") || l === "chinese") return "zh-CN";
//   if (l === "it" || l.startsWith("it-") || l === "italian") return "it-IT";
//   if (l === "pt" || l.startsWith("pt-") || l === "portuguese") return "pt-PT";
//   return lang;
// }

// app.get("/api/languages", (_req, res) => {
//   res.json({ success: true, languages: SUPPORTED_LANGUAGES });
// });

// app.all("/api/translate", async (req, res) => {
//   const text = (req.body?.text || req.body?.input || req.body?.q || req.query?.text || req.query?.q || "").trim();
//   const rawSource = req.body?.source || req.body?.source_language_code || req.body?.from || req.query?.source || "en-IN";
//   const rawTarget = req.body?.target || req.body?.target_language_code || req.body?.to || req.query?.target || "hi-IN";

//   const sourceLang = resolveLangCode(rawSource, "en-IN");
//   const targetLang = resolveLangCode(rawTarget, "hi-IN");

//   if (!text) {
//     return handleError(res, 400, "Text to translate is required");
//   }

//   // If source and target are identical
//   if (sourceLang === targetLang) {
//     return res.json({
//       success: true,
//       translatedText: text,
//       translated_text: text,
//       translation: text,
//       pronunciation: text,
//       source: sourceLang,
//       target: targetLang,
//       data: { translatedText: text, translated_text: text, source: sourceLang, target: targetLang },
//     });
//   }

//   try {
//     let translatedText = "";
//     let pronunciation = "";

//     // 1. Try Sarvam AI Translation first if applicable
//     const isSarvamTarget = SUPPORTED_LANGUAGES.some((l) => l.code === targetLang && l.sarvam);
//     const isSarvamSource = SUPPORTED_LANGUAGES.some((l) => l.code === sourceLang && l.sarvam);

//     if (SARVAM_API_KEY && isSarvamTarget && isSarvamSource) {
//       try {
//         const sarvamRes = await axios.post(
//           "https://api.sarvam.ai/translate",
//           {
//             input: text,
//             source_language_code: sourceLang,
//             target_language_code: targetLang,
//             speaker_gender: "Female",
//           },
//           {
//             headers: {
//               "api-subscription-key": SARVAM_API_KEY,
//               "Content-Type": "application/json",
//             },
//             timeout: 6000,
//           }
//         );
//         if (sarvamRes.data?.translated_text) {
//           translatedText = sarvamRes.data.translated_text;
//         }
//       } catch (sarvamErr) {
//         console.warn("Sarvam translate notice:", sarvamErr.response?.data || sarvamErr.message);
//       }
//     }

//     // 2. High-accuracy AI Fallback & Global Multi-Language Translation with Groq
//     if (!translatedText && GROQ_API_KEY) {
//       try {
//         const sourceMeta = SUPPORTED_LANGUAGES.find((l) => l.code === sourceLang)?.name || sourceLang;
//         const targetMeta = SUPPORTED_LANGUAGES.find((l) => l.code === targetLang)?.name || targetLang;

//         const prompt = `You are an expert multilingual travel translator.
// Translate this text from ${sourceMeta} (${sourceLang}) to ${targetMeta} (${targetLang}).
// Original Text: "${text}"

// Return STRICT JSON with this exact format:
// {
//   "translation": "Natural, direct translated text in native script",
//   "pronunciation": "Romanized English phonetic pronunciation guide (e.g. for Hindi: 'Aap kaise hain?')"
// }`;

//         const groqRes = await groq.chat.completions.create({
//           messages: [
//             {
//               role: "system",
//               content: "You are a professional travel translator. Return valid JSON only with keys translation and pronunciation.",
//             },
//             { role: "user", content: prompt },
//           ],
//           model: "llama-3.3-70b-versatile",
//           response_format: { type: "json_object" },
//           temperature: 0.2,
//           max_tokens: 500,
//         });

//         const rawContent = groqRes.choices[0]?.message?.content || "";
//         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
//         const parsed = JSON.parse(cleanContent);
//         translatedText = parsed.translation || "";
//         pronunciation = parsed.pronunciation || "";
//       } catch (groqErr) {
//         console.warn("Groq translate notice:", groqErr.message);
//       }
//     }

//     if (!translatedText) {
//       translatedText = text;
//     }

//     res.json({
//       success: true,
//       translatedText,
//       translated_text: translatedText,
//       translation: translatedText,
//       pronunciation: pronunciation || translatedText,
//       source: sourceLang,
//       target: targetLang,
//       data: {
//         translatedText,
//         translated_text: translatedText,
//         translation: translatedText,
//         pronunciation: pronunciation || translatedText,
//         source: sourceLang,
//         target: targetLang,
//       },
//     });
//   } catch (err) {
//     handleError(res, 500, "Translation failed", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 💰  AI BUDGET PLANNER (Groq with Full Numeric Validation & Fallback)
// // ═══════════════════════════════════════════════════════════════
// app.post("/api/ai-budget", async (req, res) => {
//   const city = req.body.city || req.body.destination || req.body.place || req.body.location || "";
//   const travelers = Math.max(parseInt(req.body.travelers || 2, 10) || 2, 1);
//   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 5, 10) || 5, 1), 30);
//   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.style || "Mid-range";

//   if (!city || !city.trim()) {
//     return handleError(res, 400, "City name is required");
//   }

//   try {
//     let budgetData = null;

//     if (GROQ_API_KEY) {
//       try {
//         const prompt = `Create a detailed day-by-day travel budget for ${city.trim()}, India.
// Travelers: ${travelers} | Days: ${days} | Style: ${tripVibe}.
// Return ONLY valid JSON matching this exact structure:
// {
//   "dailyPlan": [
//     {
//       "day": 1,
//       "title": "Arrival and City Tour",
//       "activities": [{"item": "Iconic Sightseeing", "cost": 500}],
//       "accommodation": 2500,
//       "food": 1000,
//       "transport": 500
//     }
//   ],
//   "summary": {
//     "stayTotal": ${days * 2500},
//     "foodTotal": ${days * 1000},
//     "transportTotal": ${days * 500},
//     "activitiesTotal": ${days * 500},
//     "miscellaneous": 1000,
//     "grandTotal": ${days * 4500 + 1000}
//   },
//   "expertAdvice": "3 practical money-saving tips specific to ${city.trim()}",
//   "bestDeals": ["Use metro or shared rides", "Book accommodation in advance", "Try local dhabas and food markets"]
// }`;

//         const completion = await groq.chat.completions.create({
//           messages: [
//             {
//               role: "system",
//               content: "You are an expert travel budget planner. You must return valid JSON only. Do not include markdown codeblocks or extra text.",
//             },
//             { role: "user", content: prompt },
//           ],
//           model: "llama-3.3-70b-versatile",
//           response_format: { type: "json_object" },
//           temperature: 0.5,
//           max_tokens: 2500,
//         });

//         const rawContent = completion.choices[0]?.message?.content || "";
//         const cleanContent = rawContent
//           .replace(/^```json\s*/i, "")
//           .replace(/^```\s*/i, "")
//           .replace(/```\s*$/i, "")
//           .trim();

//         budgetData = JSON.parse(cleanContent);
//       } catch (groqErr) {
//         console.error("Groq AI Budget Error:", groqErr.message);
//       }
//     }

//     // Dynamic fallback calculation if Groq failed or key missing
//     if (!budgetData || !budgetData.dailyPlan) {
//       const stayRate = tripVibe.toLowerCase().includes("luxury") ? 6000 : tripVibe.toLowerCase().includes("budget") ? 1200 : 2500;
//       const foodRate = tripVibe.toLowerCase().includes("luxury") ? 2500 : tripVibe.toLowerCase().includes("budget") ? 500 : 1000;
//       const transportRate = tripVibe.toLowerCase().includes("luxury") ? 1500 : tripVibe.toLowerCase().includes("budget") ? 300 : 600;
//       const actRate = tripVibe.toLowerCase().includes("luxury") ? 2000 : tripVibe.toLowerCase().includes("budget") ? 400 : 800;

//       const dailyPlan = [];
//       for (let d = 1; d <= days; d++) {
//         dailyPlan.push({
//           day: d,
//           title: d === 1 ? `Day 1: Arrival & Exploring ${city}` : d === 2 ? `Day 2: Heritage & Local Flavors` : `Day ${d}: Highlights & Activities in ${city}`,
//           activities: [
//             { item: `Sightseeing & Attractions in ${city}`, cost: actRate },
//           ],
//           accommodation: stayRate,
//           food: foodRate,
//           transport: transportRate,
//         });
//       }

//       const stayTotal = stayRate * days;
//       const foodTotal = foodRate * days;
//       const transportTotal = transportRate * days;
//       const activitiesTotal = actRate * days;
//       const miscellaneous = Math.round((stayTotal + foodTotal) * 0.1);
//       const grandTotal = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;

//       budgetData = {
//         dailyPlan,
//         summary: {
//           stayTotal,
//           foodTotal,
//           transportTotal,
//           activitiesTotal,
//           miscellaneous,
//           grandTotal,
//         },
//         expertAdvice: `Book stays early in ${city} and opt for public transit or passes to save on daily travel costs.`,
//         bestDeals: [
//           "Use shared cabs or metro for local transit",
//           "Dine at authentic local restaurants instead of tourist hotspots",
//           "Look for combo attraction passes online",
//         ],
//       };
//     }

//     // Sanitize and ensure numeric consistency
//     const rawSummary = budgetData.summary || {};
//     const stayTotal = parseNumeric(rawSummary.stayTotal, 0);
//     const foodTotal = parseNumeric(rawSummary.foodTotal, 0);
//     const transportTotal = parseNumeric(rawSummary.transportTotal, 0);
//     const activitiesTotal = parseNumeric(rawSummary.activitiesTotal, 0);
//     const miscellaneous = parseNumeric(rawSummary.miscellaneous, 0);
//     const calculatedGrand = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;
//     const grandTotal = parseNumeric(rawSummary.grandTotal, calculatedGrand) || calculatedGrand;
//     const averageDailyBudget = Math.round(grandTotal / days) || Math.round(calculatedGrand / days);

//     const sanitizedData = {
//       dailyPlan: Array.isArray(budgetData.dailyPlan)
//         ? budgetData.dailyPlan.map((d, idx) => ({
//             day: parseNumeric(d.day, idx + 1),
//             title: d.title || `Day ${idx + 1}`,
//             activities: Array.isArray(d.activities)
//               ? d.activities.map((a) => ({
//                   item: a.item || "Sightseeing",
//                   cost: parseNumeric(a.cost, 0),
//                 }))
//               : [],
//             accommodation: parseNumeric(d.accommodation, 0),
//             food: parseNumeric(d.food, 0),
//             transport: parseNumeric(d.transport, 0),
//           }))
//         : [],
//       summary: {
//         stayTotal,
//         foodTotal,
//         transportTotal,
//         activitiesTotal,
//         miscellaneous,
//         grandTotal,
//       },
//       expertAdvice: normalizeToString(budgetData.expertAdvice || `Enjoy your trip to ${city}!`),
//       bestDeals: Array.isArray(budgetData.bestDeals)
//         ? budgetData.bestDeals.map((item) => normalizeToString(item))
//         : ["Book early for best rates", "Eat at local eateries", "Use public transit"],
//       averageDailyBudget,
//     };

//     res.json({
//       success: true,
//       data: sanitizedData,
//     });
//   } catch (err) {
//     console.error("Budget Generation Critical Error:", err);
//     handleError(res, 500, "Failed to generate budget", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 📋  AI ITINERARY PLANNER (Groq)
// // ═══════════════════════════════════════════════════════════════
// app.post("/api/ai-planner", async (req, res) => {
//   const city = req.body.city || req.body.destination || req.body.place || "Jaipur";
//   const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 3, 10), 1), 7);
//   const tripVibe = req.body.tripVibe || req.body.vibe || req.body.tripType || "Balanced";

//   try {
//     let planData = null;

//     if (GROQ_API_KEY) {
//       try {
//         const prompt = `Create a detailed ${days}-day travel itinerary for ${city}, India. Vibe: ${tripVibe}.
// Return valid JSON with format:
// {
//   "itinerary": [
//     {
//       "day": 1,
//       "theme": "Arrival & City Highlights",
//       "activities": [
//         {"time": "Morning", "task": "Sightseeing", "description": "Explore top historical landmarks", "tips": "Start early"},
//         {"time": "Afternoon", "task": "Local Cuisine", "description": "Enjoy traditional regional food", "tips": "Visit famous local eatery"},
//         {"time": "Evening", "task": "Sunset & Stroll", "description": "Scenic sunset and market walk", "tips": "Great photography spot"}
//       ]
//     }
//   ],
//   "travel_tips": ["Carry comfortable walking shoes", "Keep cash handy for street vendors"],
//   "must_try_experiences": ["Local heritage walk", "Authentic regional street food"]
// }`;

//         const completion = await groq.chat.completions.create({
//           messages: [
//             { role: "system", content: "You are a professional travel planner. You must return valid JSON only without markdown formatting." },
//             { role: "user", content: prompt },
//           ],
//           model: "llama-3.3-70b-versatile",
//           response_format: { type: "json_object" },
//           temperature: 0.5,
//           max_tokens: 2200,
//         });

//         const rawContent = completion.choices[0]?.message?.content || "";
//         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
//         planData = JSON.parse(cleanContent);
//       } catch (groqErr) {
//         console.warn("Groq planner notice:", groqErr.message);
//       }
//     }

//     if (!planData || !planData.itinerary) {
//       const fallbackItinerary = [];
//       for (let d = 1; d <= days; d++) {
//         fallbackItinerary.push({
//           day: d,
//           theme: d === 1 ? `Welcome to ${city} & Iconic Landmarks` : d === 2 ? `Heritage, Culture & Local Flavors` : `Hidden Gems & Panoramic Views`,
//           activities: [
//             { time: "Morning", task: `Explore top sights in ${city}`, description: `Start the day visiting iconic landmarks and cultural attractions.`, tips: "Arrive early to avoid queues." },
//             { time: "Afternoon", task: "Culinary Walk & Markets", description: `Taste signature regional dishes and shop at local bazaars.`, tips: "Look for popular local food stalls." },
//             { time: "Evening", task: "Sunset & Scenic Spot", description: `Relax and watch the sunset from a popular viewpoint or promenade.`, tips: "Ideal time for photos." },
//           ],
//         });
//       }
//       planData = {
//         itinerary: fallbackItinerary,
//         travel_tips: ["Keep cash handy for local vendors", "Use ride-sharing or local transit for easy travel", "Stay hydrated and wear comfortable walking shoes"],
//         must_try_experiences: [`Signature food trail in ${city}`, `Heritage landmark tour`, `Sunset photography spot`],
//       };
//     }

//     res.json({ success: true, data: planData });
//   } catch (err) {
//     handleError(res, 500, "AI Planner failed", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 🤖  AI CHAT (Groq)
// // ═══════════════════════════════════════════════════════════════
// app.post("/api/ai-chat", async (req, res) => {
//   const { message, history = [] } = req.body;
//   if (!message) return handleError(res, 400, "Message is required");
//   if (!GROQ_API_KEY) return handleError(res, 500, "GROQ_API_KEY is not configured");

//   try {
//     const messages = [
//       { role: "system", content: "You are TravioX, an expert Indian travel assistant. Keep responses helpful, engaging and concise." },
//       ...history.slice(-8),
//       { role: "user", content: message },
//     ];
//     const completion = await groq.chat.completions.create({
//       messages,
//       model: "llama-3.3-70b-versatile",
//       temperature: 0.7,
//       max_tokens: 400,
//     });
//     res.json({ success: true, reply: completion.choices[0].message.content });
//   } catch (err) {
//     handleError(res, 500, "AI Chat failed", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 📷  PHOTOS (Unsplash)
// // ═══════════════════════════════════════════════════════════════
// app.get("/api/photos", async (req, res) => {
//   const query = req.query.q;
//   if (!query || query.trim() === "") {
//     return res.status(400).json({ success: false, error: "Query parameter 'q' is required" });
//   }
//   if (!UNSPLASH_ACCESS_KEY) {
//     return handleError(res, 500, "UNSPLASH_ACCESS_KEY is not configured");
//   }
//   try {
//     const response = await axios.get("https://api.unsplash.com/search/photos", {
//       params: { query: query.trim(), per_page: 8, client_id: UNSPLASH_ACCESS_KEY },
//       timeout: 6000,
//     });
//     res.json({
//       success: true,
//       photos: response.data.results.map((img) => ({
//         id: img.id,
//         url: img.urls.regular,
//         thumb: img.urls.thumb,
//         description: img.alt_description || "",
//         credit: img.user?.name || "Unsplash",
//       })),
//     });
//   } catch (err) {
//     handleError(res, 500, "Failed to fetch images", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // ✈️  FLIGHTS (SerpApi)
// // ═══════════════════════════════════════════════════════════════
// app.get("/api/flights", async (req, res) => {
//   let { departure_id = "BOM", arrival_id = "DEL" } = req.query;
//   if (!departure_id || !arrival_id || departure_id.length !== 3 || arrival_id.length !== 3) {
//     return res.status(400).json({
//       success: false,
//       error: "Please use valid 3-letter airport codes (e.g., BOM, DEL)",
//     });
//   }
//   if (!SERPAPI_KEY) {
//     return handleError(res, 500, "SERPAPI_KEY is not configured");
//   }

//   const nextMonth = new Date();
//   nextMonth.setDate(nextMonth.getDate() + 30);
//   const travelDate = nextMonth.toISOString().split("T")[0];

//   try {
//     const response = await axios.get("https://serpapi.com/search", {
//       params: {
//         engine: "google_flights",
//         departure_id: departure_id.toUpperCase(),
//         arrival_id: arrival_id.toUpperCase(),
//         outbound_date: travelDate,
//         type: "2",
//         currency: "INR",
//         hl: "en",
//         gl: "us",
//         api_key: SERPAPI_KEY,
//       },
//       timeout: 10000,
//     });

//     const results = [
//       ...(response.data.best_flights || []),
//       ...(response.data.other_flights || []),
//     ];

//     if (results.length === 0) {
//       return res.json({ success: true, flights: [], message: "No flights found." });
//     }

//     const formatted = results.slice(0, 10).map((f) => {
//       const leg = f.flights?.[0] || {};
//       return {
//         airline: leg.airline || "Airline",
//         logo: leg.airline_logo || "",
//         flight_number: leg.flight_number || "",
//         departure: leg.departure_airport?.id || departure_id,
//         departure_name: leg.departure_airport?.name || departure_id,
//         arrival: leg.arrival_airport?.id || arrival_id,
//         arrival_name: leg.arrival_airport?.name || arrival_id,
//         departure_time: leg.departure_airport?.time?.split(" ")[1] || "10:00",
//         arrival_time: leg.arrival_airport?.time?.split(" ")[1] || "12:30",
//         duration: f.total_duration || 120,
//         status: f.type || "Available",
//         url: `https://www.google.com/travel/flights?q=flights%20from%20${departure_id}%20to%20${arrival_id}%20on%20${travelDate}`,
//       };
//     });

//     res.json({ success: true, flights: formatted });
//   } catch (err) {
//     handleError(res, 500, "Flight search failed", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 🏨  HOTELS (SerpApi)
// // ═══════════════════════════════════════════════════════════════
// app.get("/api/hotels", async (req, res) => {
//   const { q = "Mumbai" } = req.query;
//   if (!SERPAPI_KEY) {
//     return handleError(res, 500, "SERPAPI_KEY is not configured");
//   }
//   try {
//     const response = await axios.get("https://serpapi.com/search", {
//       params: {
//         engine: "google_hotels",
//         q: `${q} hotels`,
//         check_in_date: getFormattedDate(1),
//         check_out_date: getFormattedDate(3),
//         api_key: SERPAPI_KEY,
//         currency: "INR",
//         gl: "in",
//       },
//       timeout: 10000,
//     });
//     const hotels = (response.data.properties || []).slice(0, 8).map((h) => ({
//       name: h.name,
//       rating: h.overall_rating || "N/A",
//       price: h.rate_per_night?.lowest || "N/A",
//       thumbnail: h.images?.[0]?.thumbnail || "https://via.placeholder.com/300",
//       link: h.link || "#",
//     }));
//     res.json({ success: true, hotels });
//   } catch (err) {
//     handleError(res, 500, "Hotel search failed", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 📖  TRAVEL MEMORY BUILDER (Groq Vision + AI Storyteller)
// // ═══════════════════════════════════════════════════════════════
// async function analyzePhotoWithVision(m, i) {
//   const note = (m.user_note || m.note || "").trim();
//   const rawBase64 = m.image_base64 || m.base64 || "";
//   const imageUrl = m.image_url || m.url || (typeof m.uri === "string" && m.uri.startsWith("http") ? m.uri : "");
//   const cleanBase64 = rawBase64.replace(/^data:image\/\w+;base64,/, "").trim();

//   // If photo (base64 or remote URL) is provided, inspect with Groq Vision
//   if (GROQ_API_KEY && (cleanBase64 || imageUrl)) {
//     try {
//       const imageContent = cleanBase64
//         ? { type: "image_url", image_url: { url: `data:image/jpeg;base64,${cleanBase64}` } }
//         : { type: "image_url", image_url: { url: imageUrl } };

//       const visionPrompt = `You are an AI travel vision analyst inspecting photo #${i + 1} of a trip.
// Traveler's note: "${note || "Scenic travel moment"}".
// Examine the image carefully (scenery, landmarks, architecture, nature, food, culture, lighting, colors, activities) and return valid JSON:
// {
//   "visual_description": "Vivid 1-2 sentence description detailing exactly what is seen in the photo and the atmosphere",
//   "mood": "1-word mood (e.g. Wonder, Serene, Adventurous, Euphoric, Vibrant, Majestic, Cozy, Free)",
//   "mood_emoji": "1 matching emoji (e.g. 🌅, 🏔️, 🍜, 🏛️, ✨, 🌊, 🌸, ⛺)"
// }`;

//       const visionRes = await groq.chat.completions.create({
//         messages: [
//           {
//             role: "system",
//             content: "You are a travel vision analyst. You must return valid JSON only.",
//           },
//           {
//             role: "user",
//             content: [
//               { type: "text", text: visionPrompt },
//               imageContent,
//             ],
//           },
//         ],
//         model: "llama-3.2-11b-vision-preview",
//         response_format: { type: "json_object" },
//         temperature: 0.3,
//         max_tokens: 220,
//       });

//       const parsed = JSON.parse(visionRes.choices[0]?.message?.content || "{}");
//       return {
//         index: i,
//         note: note || parsed.visual_description || `Moment #${i + 1}`,
//         visual_description: parsed.visual_description || note || `Scene #${i + 1}`,
//         mood: parsed.mood || "Adventurous",
//         mood_emoji: parsed.mood_emoji || "✨",
//       };
//     } catch (visionErr) {
//       console.warn(`Vision analysis notice for photo #${i + 1}:`, visionErr.message);
//     }
//   }

//   return {
//     index: i,
//     note: note || `Moment #${i + 1}`,
//     visual_description: note || `Special travel memory #${i + 1}`,
//     mood: "Memorable",
//     mood_emoji: "📸",
//   };
// }

// app.post("/api/travel-memory-builder", async (req, res) => {
//   const { moments } = req.body;
//   if (!moments || !Array.isArray(moments) || moments.length < 2) {
//     return res.status(400).json({ success: false, error: "Provide at least 2 moments" });
//   }

//   try {
//     console.log(`📸 Analyzing ${moments.length} photos with AI Vision...`);

//     // Analyze all photos concurrently with Groq Vision
//     const sceneAnalyses = await Promise.all(
//       moments.map((m, i) => analyzePhotoWithVision(m, i))
//     );

//     let storyData = null;

//     if (GROQ_API_KEY) {
//       try {
//         const storyPrompt = `You are an acclaimed travel writer. A traveler captured these moments with photos and notes:
// ${JSON.stringify(sceneAnalyses, null, 2)}

// Craft an evocative travel diary that incorporates the visual details from the photos and the traveler's personal notes.
// Return ONLY valid JSON matching this exact structure:
// {
//   "trip_title": "4-6 word evocative, poetic title for this journey",
//   "travel_story": "A rich 3-4 paragraph narrative vividly weaving the visual scenes from the photos and personal notes into an unforgettable journey.",
//   "highlight_quote": "One poetic line summing up the soul of this trip",
//   "tags": ["travel", "wanderlust", "memories", "explore", "adventure"],
//   "timeline": [
//     {
//       "moment_index": 0,
//       "mood": "1-word mood",
//       "mood_emoji": "1 matching emoji",
//       "scene_description": "1 vivid sentence describing what is seen in the photo and the experience",
//       "social_caption": "Engaging Instagram/TikTok caption highlighting the visual scene with 3 trending hashtags"
//     }
//   ]
// }

// IMPORTANT: Provide an entry in "timeline" for every moment index from 0 to ${sceneAnalyses.length - 1}.`;

//         const storyRes = await groq.chat.completions.create({
//           messages: [
//             {
//               role: "system",
//               content: "You are an acclaimed travel author and storyteller. You must return valid JSON only without markdown codeblocks or extra text.",
//             },
//             { role: "user", content: storyPrompt },
//           ],
//           model: "llama-3.3-70b-versatile",
//           response_format: { type: "json_object" },
//           temperature: 0.6,
//           max_tokens: 2200,
//         });

//         const rawContent = storyRes.choices[0]?.message?.content || "";
//         const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
//         storyData = JSON.parse(cleanContent);
//       } catch (groqErr) {
//         console.error("Groq Memory Builder Story Error:", groqErr.message);
//       }
//     }

//     // Dynamic fallback if Groq text is slow/down
//     if (!storyData || !storyData.travel_story) {
//       const fallbackTimeline = sceneAnalyses.map((s, i) => ({
//         moment_index: i,
//         mood: s.mood || "Adventurous",
//         mood_emoji: s.mood_emoji || "✨",
//         scene_description: s.visual_description || s.note || `A special memory from moment #${i + 1}.`,
//         social_caption: `${s.visual_description || s.note || "Collecting memories along the way"} ✨ #travel #wanderlust #memories`,
//       }));

//       storyData = {
//         trip_title: "Echoes of the Open Road",
//         travel_story: `Every journey leaves a mark on our soul. From the early morning departures to the quiet reflections as dusk settled, each chapter carried its own distinctive rhythm.\n\nTraveling through these places was a reminder that the best moments are often the unscripted ones—the spontaneous encounters, the shared laughter, and the breathtaking vistas that photos can only begin to capture.\n\nThese memories stand as tokens of adventure, reminding us why we wander and inspiring the journeys yet to come.`,
//         highlight_quote: "We travel not to escape life, but for life not to escape us.",
//         tags: ["wanderlust", "traveldiaries", "explore", "memories", "adventure"],
//         timeline: fallbackTimeline,
//       };
//     }

//     // Ensure all moments have a complete timeline entry
//     const timeline = sceneAnalyses.map((s, i) => {
//       const match = storyData.timeline?.find((t) => t.moment_index === i || t.index === i);
//       return {
//         index: i,
//         user_note: s.note,
//         mood: match?.mood || s.mood || "Memorable",
//         mood_emoji: match?.mood_emoji || s.mood_emoji || "📸",
//         scene_description: match?.scene_description || s.visual_description || s.note || `Travel memory #${i + 1}`,
//         social_caption: match?.social_caption || `${s.visual_description || s.note || "Travel memories"} ✨ #travel #wanderlust`,
//       };
//     });

//     res.json({
//       success: true,
//       data: {
//         trip_title: storyData.trip_title || "A Journey Remembered",
//         travel_story: storyData.travel_story || "Memories forged along the open road.",
//         highlight_quote: storyData.highlight_quote || "Collect moments, not things.",
//         tags: Array.isArray(storyData.tags) ? storyData.tags : ["travel", "wanderlust", "memories"],
//         timeline,
//         created_at: new Date().toISOString(),
//       },
//     });
//   } catch (err) {
//     console.error("Memory Builder Critical Error:", err);
//     handleError(res, 500, "Memory builder failed", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 🎬  CREATOMATE VIDEO GENERATOR
// // ═══════════════════════════════════════════════════════════════
// function buildSlideshowRenderScript(imageUrls, captions = []) {
//   const photos = imageUrls.slice(0, 4);
//   const slideDuration = 3.5;
//   const elements = [];

//   photos.forEach((url, i) => {
//     elements.push({
//       type: "image",
//       source: url,
//       track: 1,
//       duration: slideDuration,
//       clip: true,
//       animations: [
//         { type: "scale", start_scale: i % 2 === 0 ? "100%" : "112%", end_scale: i % 2 === 0 ? "112%" : "100%", easing: "linear" },
//         ...(i > 0 ? [{ type: "fade", transition: true, duration: 0.6 }] : []),
//       ],
//     });
//   });

//   if (Array.isArray(captions) && captions.length > 0) {
//     photos.forEach((_, i) => {
//       const cap = captions[i];
//       if (cap && typeof cap === "string" && cap.trim()) {
//         elements.push({
//           type: "text",
//           text: cap.trim().substring(0, 100),
//           track: 2,
//           time: i * slideDuration,
//           duration: slideDuration,
//           y: "85%",
//           width: "86%",
//           fill_color: "#ffffff",
//           background_color: "rgba(10, 10, 10, 0.75)",
//           background_border_radius: "12 px",
//           padding: "14 px",
//           font_size: "30 px",
//           font_weight: "700",
//           text_alignment: "center",
//           animations: [
//             { type: "fade", duration: 0.4 },
//             { type: "fade", duration: 0.4, transition: false, time: slideDuration - 0.4, reversed: true },
//           ],
//         });
//       }
//     });
//   }

//   return {
//     output_format: "mp4",
//     width: 1080,
//     height: 1920,
//     frame_rate: 30,
//     elements,
//   };
// }

// app.post("/api/generate-video", async (req, res) => {
//   const { imageUrls, captions } = req.body;
//   if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length < 2) {
//     return res.status(400).json({ success: false, error: "Provide at least 2 image URLs" });
//   }
//   if (!CREATOMATE_API_KEY) {
//     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
//   }

//   try {
//     const videoMoments = imageUrls.slice(0, 4);
//     let renderResponse = null;

//     if (CREATOMATE_TEMPLATE_ID) {
//       try {
//         const modifications = {};
//         videoMoments.forEach((url, i) => {
//           modifications[`Background-${i + 1}.source`] = url;
//         });
//         if (captions && captions.length > 0) {
//           captions.slice(0, videoMoments.length).forEach((caption, i) => {
//             modifications[`Text-${i + 1}.text`] = (caption || "").substring(0, 150);
//           });
//         }
//         const tplRes = await axios.post(
//           "https://api.creatomate.com/v2/renders",
//           { template_id: CREATOMATE_TEMPLATE_ID, modifications },
//           {
//             headers: {
//               Authorization: `Bearer ${CREATOMATE_API_KEY}`,
//               "Content-Type": "application/json",
//             },
//             timeout: 6000,
//           }
//         );
//         renderResponse = tplRes.data;
//       } catch (tplErr) {
//         console.warn("Template render notice:", tplErr.message);
//       }
//     }

//     if (!renderResponse) {
//       const source = buildSlideshowRenderScript(videoMoments, captions);
//       const scriptRes = await axios.post(
//         "https://api.creatomate.com/v2/renders",
//         { source },
//         {
//           headers: {
//             Authorization: `Bearer ${CREATOMATE_API_KEY}`,
//             "Content-Type": "application/json",
//           },
//           timeout: 6000,
//         }
//       );
//       renderResponse = scriptRes.data;
//     }

//     const initialRender = Array.isArray(renderResponse) ? renderResponse[0] : renderResponse;
//     if (!initialRender || !initialRender.id) {
//       throw new Error("Invalid response from Creatomate");
//     }

//     res.json({
//       success: true,
//       videoUrl: initialRender.url,
//       status: initialRender.status,
//       renderId: initialRender.id,
//     });
//   } catch (err) {
//     handleError(res, 500, "Failed to generate video", err.message);
//   }
// });

// app.get("/api/video-status/:id", async (req, res) => {
//   if (!CREATOMATE_API_KEY) {
//     return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
//   }
//   try {
//     const statusRes = await axios.get(`https://api.creatomate.com/v2/renders/${req.params.id}`, {
//       headers: { Authorization: `Bearer ${CREATOMATE_API_KEY}` },
//       timeout: 6000,
//     });
//     const data = Array.isArray(statusRes.data) ? statusRes.data[0] : statusRes.data;
//     res.json({
//       success: true,
//       status: data.status,
//       videoUrl: data.url,
//       errorMessage: data.error_message,
//     });
//   } catch (err) {
//     handleError(res, 500, "Failed to fetch video status", err.message);
//   }
// });

// // ═══════════════════════════════════════════════════════════════
// // 🚀  START SERVER
// // ═══════════════════════════════════════════════════════════════
// app.listen(PORT, () => {
//   console.log(`\n✈️  TravioX Server running on port ${PORT}`);
//   console.log(`   Health: http://localhost:${PORT}/api/health\n`);
// });

// module.exports = app;










require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const Groq = require("groq-sdk");

const app = express();
const PORT = process.env.PORT || 3000;

// ═══════════════════════════════════════════════════════════════
// 🔑  API KEYS — Loaded from process.env (.env or Vercel Environment Variables)
// ═══════════════════════════════════════════════════════════════
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const SERPAPI_KEY = process.env.SERPAPI_KEY;
const RAPID_API_KEY = process.env.RAPID_API_KEY;
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const SARVAM_API_KEY = process.env.SARVAM_API_KEY;
const CREATOMATE_API_KEY = process.env.CREATOMATE_API_KEY;
const CREATOMATE_TEMPLATE_ID = process.env.CREATOMATE_TEMPLATE_ID;
const GEOAPIFY_KEY = process.env.GEOAPIFY_KEY;

// Log key availability without exiting process
const REQUIRED_KEYS = [
  "GROQ_API_KEY",
  "SERPAPI_KEY",
  "RAPID_API_KEY",
  "UNSPLASH_ACCESS_KEY",
  "SARVAM_API_KEY",
  "CREATOMATE_API_KEY",
  "GEOAPIFY_KEY",
];

const missingKeys = REQUIRED_KEYS.filter((k) => !process.env[k]);
if (missingKeys.length > 0) {
  console.warn(`⚠️ Warning: Missing environment variables: ${missingKeys.join(", ")}`);
  console.warn("Add these in Vercel Project Settings -> Environment Variables for full AI features.");
} else {
  console.log("✅ All required environment variables loaded.");
}

const groq = new Groq({ apiKey: GROQ_API_KEY || "dummy_key" });

// ═══════════════════════════════════════════════════════════════
// ⚙️  MIDDLEWARE
// ═══════════════════════════════════════════════════════════════
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));

app.use((req, _res, next) => {
  console.log(`📥 ${req.method} ${req.path}`);
  next();
});

// ═══════════════════════════════════════════════════════════════
// 🛠️  HELPERS
// ═══════════════════════════════════════════════════════════════
const getFormattedDate = (daysFromNow) => {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().split("T")[0];
};

const handleError = (res, statusCode, message, details = null) => {
  console.error(`❌ Error (${statusCode}): ${message}`, details || "");
  res.status(statusCode).json({
    success: false,
    error: message,
    ...(details ? { details } : {}),
  });
};

const parseNumeric = (val, fallback = 0) => {
  if (typeof val === "number" && !isNaN(val)) return val;
  if (!val) return fallback;
  const cleaned = String(val).replace(/[^0-9.-]+/g, "");
  const num = parseFloat(cleaned);
  return isNaN(num) ? fallback : num;
};

const normalizeToString = (val) => {
  if (!val) return "";
  if (typeof val === "string") return val;
  if (Array.isArray(val)) return val.join(", ");
  if (typeof val === "object") {
    if (val.dishes)
      return Array.isArray(val.dishes) ? val.dishes.join(", ") : String(val.dishes);
    return Object.values(val).join(", ");
  }
  return String(val);
};

const sanitizeDestinationInfo = (info) => ({
  history: normalizeToString(info.history),
  bestTime: normalizeToString(info.bestTime),
  food: normalizeToString(info.food),
  culture: normalizeToString(info.culture),
  hiddenGem: normalizeToString(info.hiddenGem),
  summary: normalizeToString(info.summary),
});

const splitIntoChunks = (text, maxLen = 490) => {
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
  const chunks = [];
  let current = "";
  for (const sentence of sentences) {
    if ((current + sentence).length <= maxLen) {
      current += sentence;
    } else {
      if (current.trim()) chunks.push(current.trim());
      if (sentence.length > maxLen) {
        const words = sentence.split(" ");
        let wordChunk = "";
        for (const word of words) {
          if ((wordChunk + " " + word).length <= maxLen) {
            wordChunk += (wordChunk ? " " : "") + word;
          } else {
            if (wordChunk) chunks.push(wordChunk.trim());
            wordChunk = word;
          }
        }
        current = wordChunk;
      } else {
        current = sentence;
      }
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks.filter(Boolean);
};

const translateText = async (text, targetLang) => {
  if (targetLang === "en-IN" || !text || !SARVAM_API_KEY) return text;
  try {
    const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];
    const translatedChunks = [];
    let currentChunk = "";
    for (const sentence of sentences) {
      if ((currentChunk + sentence).length < 900) {
        currentChunk += sentence;
      } else {
        if (currentChunk) {
          const res = await axios.post(
            "https://api.sarvam.ai/translate",
            {
              input: currentChunk,
              source_language_code: "en-IN",
              target_language_code: targetLang,
              speaker_gender: "Female",
            },
            {
              headers: {
                "api-subscription-key": SARVAM_API_KEY,
                "Content-Type": "application/json",
              },
              timeout: 6000,
            }
          );
          translatedChunks.push(res.data.translated_text || currentChunk);
        }
        currentChunk = sentence;
      }
    }
    if (currentChunk) {
      const res = await axios.post(
        "https://api.sarvam.ai/translate",
        {
          input: currentChunk,
          source_language_code: "en-IN",
          target_language_code: targetLang,
          speaker_gender: "Female",
        },
        {
          headers: {
            "api-subscription-key": SARVAM_API_KEY,
            "Content-Type": "application/json",
          },
          timeout: 6000,
        }
      );
      translatedChunks.push(res.data.translated_text || currentChunk);
    }
    return translatedChunks.join(" ");
  } catch (err) {
    console.warn("Translation Notice:", err.response?.data || err.message);
    return text;
  }
};

const generateSarvamAudio = async (text, language = "en-IN", speaker = "meera") => {
  if (!SARVAM_API_KEY || !text) return [];
  try {
    const chunks = splitIntoChunks(text, 490).slice(0, 3);
    const audioSegments = [];
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const ttsRes = await axios.post(
        "https://api.sarvam.ai/text-to-speech",
        { inputs: [chunk], target_language_code: language, speaker_id: speaker },
        {
          headers: {
            "api-subscription-key": SARVAM_API_KEY,
            "Content-Type": "application/json",
          },
          timeout: 5000,
        }
      );
      if (ttsRes.data?.audios?.[0]) {
        audioSegments.push(ttsRes.data.audios[0]);
      }
    }
    return audioSegments;
  } catch (err) {
    console.warn("Sarvam TTS Notice:", err.response?.data || err.message);
    return [];
  }
};

// ═══════════════════════════════════════════════════════════════
// ✅  HEALTH CHECK
// ═══════════════════════════════════════════════════════════════
app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "TravioX API is running ✈️",
    timestamp: new Date().toISOString(),
    keys_configured: {
      groq: !!GROQ_API_KEY,
      serpapi: !!SERPAPI_KEY,
      rapidapi: !!RAPID_API_KEY,
      unsplash: !!UNSPLASH_ACCESS_KEY,
      sarvam: !!SARVAM_API_KEY,
      creatomate: !!CREATOMATE_API_KEY,
      geoapify: !!GEOAPIFY_KEY,
    },
  });
});

// ═══════════════════════════════════════════════════════════════
// 🗺️  LIVE MAP — GEOCODE SEARCH (Geoapify)
// ═══════════════════════════════════════════════════════════════
app.post("/api/live-map/geocode", async (req, res) => {
  const { query } = req.body;
  if (!query || !query.trim()) {
    return handleError(res, 400, "query is required");
  }
  if (!GEOAPIFY_KEY) {
    return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
  }
  try {
    const response = await axios.get("https://api.geoapify.com/v1/geocode/search", {
      params: { text: query.trim(), apiKey: GEOAPIFY_KEY, limit: 1, format: "json" },
      timeout: 6000,
    });
    const results = response.data?.results;
    if (!results || results.length === 0) {
      return res.status(404).json({ success: false, error: "Location not found" });
    }
    const place = results[0];
    res.json({
      success: true,
      result: {
        latitude: place.lat,
        longitude: place.lon,
        label: place.formatted || query,
        country: place.country || "",
        city: place.city || place.county || "",
      },
    });
  } catch (err) {
    handleError(res, 500, "Geocoding failed", err.message);
  }
});

// ─────────────────────────────────────────────────────────────
// Routing
app.post("/api/live-map/route", async (req, res) => {
  const { startLat, startLon, endLat, endLon, mode = "drive" } = req.body;
  if (!startLat || !startLon || !endLat || !endLon) {
    return handleError(res, 400, "startLat, startLon, endLat, endLon are all required");
  }
  if (!GEOAPIFY_KEY) {
    return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
  }
  const validModes = ["drive", "walk", "bicycle", "transit"];
  const routeMode = validModes.includes(mode) ? mode : "drive";
  try {
    const url = "https://api.geoapify.com/v1/routing";
    const response = await axios.get(url, {
      params: {
        waypoints: `${startLat},${startLon}|${endLat},${endLon}`,
        mode: routeMode,
        apiKey: GEOAPIFY_KEY,
        format: "json",
      },
      timeout: 8000,
    });
    const features = response.data?.features;
    if (!features || features.length === 0) {
      return res.status(404).json({ success: false, error: "No route found" });
    }
    const feature = features[0];
    const props = feature.properties;
    let allCoords = [];
    const geom = feature.geometry;
    if (geom.type === "MultiLineString") {
      geom.coordinates.forEach((line) => {
        line.forEach(([lon, lat]) => allCoords.push({ latitude: lat, longitude: lon }));
      });
    } else if (geom.type === "LineString") {
      geom.coordinates.forEach(([lon, lat]) =>
        allCoords.push({ latitude: lat, longitude: lon })
      );
    }
    res.json({
      success: true,
      route: {
        coordinates: allCoords,
        distance_km: parseFloat((props.distance / 1000).toFixed(2)),
        duration_min: Math.round(props.time / 60),
        mode: routeMode,
      },
    });
  } catch (err) {
    handleError(res, 500, "Route calculation failed", err.message);
  }
});

// ─────────────────────────────────────────────────────────────
// Reverse Geocode
app.get("/api/live-map/reverse", async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return handleError(res, 400, "lat and lon are required");
  if (!GEOAPIFY_KEY) {
    return handleError(res, 500, "GEOAPIFY_KEY is not configured on server");
  }
  try {
    const response = await axios.get("https://api.geoapify.com/v1/geocode/reverse", {
      params: { lat, lon, apiKey: GEOAPIFY_KEY, format: "json" },
      timeout: 6000,
    });
    const results = response.data?.results;
    const label =
      results?.[0]?.formatted || `${parseFloat(lat).toFixed(4)}, ${parseFloat(lon).toFixed(4)}`;
    res.json({ success: true, label });
  } catch (err) {
    handleError(res, 500, "Reverse geocoding failed", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 📰  NEWS (RapidAPI)
// ═══════════════════════════════════════════════════════════════
app.get("/api/startup-news", async (req, res) => {
  const userQuery = req.query.q || "Travel";
  if (!RAPID_API_KEY) {
    return handleError(res, 500, "RAPID_API_KEY is not configured on server");
  }
  try {
    const response = await axios.get("https://real-time-news-data.p.rapidapi.com/search", {
      params: {
        query: userQuery,
        limit: 10,
        time_published: "anytime",
        country: "US",
        lang: "en",
      },
      headers: {
        "x-rapidapi-key": RAPID_API_KEY,
        "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
      },
      timeout: 8000,
    });
    const formattedNews = (response.data.data || []).map((item) => ({
      title: item.title,
      summary: item.snippet || item.summary || "No summary available",
      link: item.link,
      published_date: item.published_datetime_utc || "",
      image_url:
        item.photo_url || item.thumbnail || "https://via.placeholder.com/400x200",
    }));
    res.json({ success: true, results: formattedNews });
  } catch (err) {
    handleError(res, 500, "News fetch failed", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 🧳  SMART PACKING LIST (Groq)
// ═══════════════════════════════════════════════════════════════
app.post("/api/smart-packing", async (req, res) => {
  const destination = req.body.destination || req.body.city || req.body.place || "Goa";
  const tripType = req.body.tripType || "Leisure";
  const duration = parseInt(req.body.duration || req.body.days || 5, 10);
  const gender = req.body.gender || "Unspecified";
  const luggageType = req.body.luggageType || "Backpack";
  const specialActivities = Array.isArray(req.body.specialActivities) ? req.body.specialActivities : [];

  try {
    let packingData = null;

    if (GROQ_API_KEY) {
      try {
        const activitiesStr = specialActivities.length > 0 ? specialActivities.join(", ") : "None";
        const prompt = `You are a geo-climate travel expert. Analyze location "${destination}".
Trip: ${tripType} | ${duration} days | Gender: ${gender} | Luggage: ${luggageType} | Activities: ${activitiesStr}
${tripType === "Family" ? "Include 'Kids & Baby Essentials' (icon: '🍼') category." : ""}
Return STRICT JSON:
{
  "weather_summary": "Climate analysis for ${destination}",
  "categories": [
    {
      "name": "Layering & Clothing",
      "icon": "🧥",
      "items": [{"item": "Comfortable clothes", "essential": true, "reason": "Daily wear"}]
    },
    {"name": "Footwear", "icon": "🥾", "items": [{"item": "Walking shoes", "essential": true, "reason": "Sightseeing"}]},
    {"name": "Toiletries & Health", "icon": "🧴", "items": [{"item": "Sunscreen & Moisturizer", "essential": true, "reason": "Skin protection"}]},
    {"name": "Electronics", "icon": "🔌", "items": [{"item": "Power bank & Chargers", "essential": true, "reason": "Phone backup"}]},
    {"name": "Documents & Essentials", "icon": "📄", "items": [{"item": "ID Proof & Tickets", "essential": true, "reason": "Identity verification"}]}
  ],
  "pro_tips": ["Carry local currency and hydration supplies for ${destination}"]
}`;

        const completion = await groq.chat.completions.create({
          messages: [
            { role: "system", content: "You are an expert packing advisor. Return valid JSON only without markdown." },
            { role: "user", content: prompt },
          ],
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" },
          temperature: 0.4,
          max_tokens: 1500,
        });

        const rawContent = completion.choices[0]?.message?.content || "";
        const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
        packingData = JSON.parse(cleanContent);
      } catch (gErr) {
        console.warn("Groq packing notice:", gErr.message);
      }
    }

    if (!packingData || !packingData.categories) {
      packingData = {
        weather_summary: `Pleasant weather expected in ${destination}.`,
        categories: [
          {
            name: "Layering & Clothing",
            icon: "🧥",
            items: [
              { item: "Light breathable shirts/t-shirts (4-5 pairs)", essential: true, reason: "Daytime comfort" },
              { item: "Comfortable pants or shorts (2-3 pairs)", essential: true, reason: "Sightseeing" },
            ],
          },
          {
            name: "Footwear",
            icon: "🥾",
            items: [
              { item: "Comfortable walking shoes", essential: true, reason: "Long walks" },
              { item: "Flip flops or sandals", essential: false, reason: "Relaxation" },
            ],
          },
          {
            name: "Toiletries & Health",
            icon: "🧴",
            items: [
              { item: "Sunscreen SPF 50+", essential: true, reason: "Sun protection" },
              { item: "Basic first aid & personal meds", essential: true, reason: "Emergencies" },
            ],
          },
          {
            name: "Electronics",
            icon: "🔌",
            items: [
              { item: "Power bank 10,000mAh", essential: true, reason: "On-the-go charging" },
              { item: "Universal charging adapter", essential: true, reason: "Device charging" },
            ],
          },
          {
            name: "Documents & Essentials",
            icon: "📄",
            items: [
              { item: "Government ID & Hotel booking copy", essential: true, reason: "Check-in" },
              { item: "Cash & backup cards", essential: true, reason: "Local shopping" },
            ],
          },
        ],
        pro_tips: [`Stay hydrated and keep local emergency contacts saved while in ${destination}.`],
      };
    }

    res.json({ success: true, data: packingData });
  } catch (err) {
    handleError(res, 500, "Failed to generate packing list", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 🗺️  DESTINATION INFO + AUDIO (Groq + Sarvam Fallback)
// ═══════════════════════════════════════════════════════════════
app.post("/api/destination-info", async (req, res) => {
  const city = req.body.city || req.body.destination || req.body.place || "Mumbai";
  const language = req.body.language || "en-IN";

  try {
    let infoData = null;

    if (GROQ_API_KEY) {
      try {
        const prompt = `You are an expert travel guide. Generate travel summary for ${city}, India.
Return STRICT JSON:
{
  "history": "3 sentences covering origin, historical significance.",
  "bestTime": "Which months/season and exactly why.",
  "food": "Name 3 must-try local dishes as a comma-separated string.",
  "culture": "2 sentences on local traditions.",
  "hiddenGem": "One underrated spot.",
  "summary": "A vivid 3-sentence overview."
}`;

        const completion = await groq.chat.completions.create({
          messages: [
            { role: "system", content: "You are an expert travel assistant. Return valid JSON only without markdown." },
            { role: "user", content: prompt },
          ],
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" },
          temperature: 0.6,
          max_tokens: 1000,
        });

        const rawContent = completion.choices[0]?.message?.content || "";
        const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
        const rawInfo = JSON.parse(cleanContent);
        infoData = sanitizeDestinationInfo(rawInfo);
      } catch (groqErr) {
        console.warn("Groq destination-info notice:", groqErr.message);
      }
    }

    if (!infoData) {
      infoData = {
        history: `${city} boasts a vibrant history with century-old architecture and culturally rich roots.`,
        bestTime: "October to March for optimal sightseeing weather.",
        food: "Local Street Food, Regional Speciality Thali, Traditional Dessert",
        culture: "Known for hospitable locals and colorful festivals.",
        hiddenGem: "Historic backstreets and local viewpoints.",
        summary: `Discover the unforgettable heritage, vibrant markets, and rich cuisine of ${city}.`,
      };
    }

    let narrationScript = `Welcome to ${city}. ${infoData.summary} Best time to visit is ${infoData.bestTime}. Must-try foods: ${infoData.food}.`;
    let audioSegments = [];

    if (SARVAM_API_KEY) {
      try {
        if (language !== "en-IN") {
          narrationScript = await translateText(narrationScript, language);
        }
        audioSegments = await generateSarvamAudio(narrationScript, language);
      } catch (sErr) {
        console.warn("Sarvam audio notice:", sErr.message);
      }
    }

    res.json({
      success: true,
      data: {
        info: infoData,
        audioSegments,
        audioBase64: audioSegments[0] || null,
        generatedLanguage: language,
      },
    });
  } catch (err) {
    handleError(res, 500, "Failed to generate destination info", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 🔊  TEXT-TO-SPEECH (Direct)
// ═══════════════════════════════════════════════════════════════
app.post("/api/text-to-speech", async (req, res) => {
  const { prompt, text, speaker = "meera" } = req.body;
  const rawLang =
    req.body?.languageCode ||
    req.body?.language ||
    req.body?.targetLanguage ||
    req.body?.target ||
    req.query?.language ||
    "en-IN";

  const language = resolveLangCode(rawLang, "en-IN");
  try {
    let finalText = text;
    if (!finalText && prompt && GROQ_API_KEY) {
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful travel assistant. Keep responses under 200 words." },
          { role: "user", content: prompt },
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 0.7,
        max_tokens: 300,
      });
      finalText = completion.choices[0].message.content;
    }

    if (!finalText) finalText = "Welcome to your TravioX journey.";
    finalText = normalizeToString(finalText);

    const audioSegments = await generateSarvamAudio(finalText, language, speaker);
    res.json({
      success: true,
      audioSegments,
      audioBase64: audioSegments[0] || null,
      audios: audioSegments,
      textUsed: finalText,
      languageUsed: language,
      totalChunks: audioSegments.length,
      data: {
        audios: audioSegments,
        audioBase64: audioSegments[0] || null,
        language: language,
      },
    });
  } catch (err) {
    handleError(res, 500, "Failed to generate speech", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 🌐  MULTI-LANGUAGE REGISTRY & TRANSLATOR (Sarvam + Groq AI)
// ═══════════════════════════════════════════════════════════════
const SUPPORTED_LANGUAGES = [
  { code: "en-IN", name: "English", nativeName: "English", flag: "🇬🇧", sarvam: true },
  { code: "hi-IN", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", sarvam: true },
  { code: "mr-IN", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳", sarvam: true },
  { code: "bn-IN", name: "Bengali", nativeName: "বাংলা", flag: "🇮🇳", sarvam: true },
  { code: "ta-IN", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳", sarvam: true },
  { code: "te-IN", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳", sarvam: true },
  { code: "kn-IN", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳", sarvam: true },
  { code: "gu-IN", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳", sarvam: true },
  { code: "pa-IN", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳", sarvam: true },
  { code: "ml-IN", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳", sarvam: true },
  { code: "od-IN", name: "Odia", nativeName: "ଓଡ଼ିଆ", flag: "🇮🇳", sarvam: true },
  { code: "as-IN", name: "Assamese", nativeName: "অসমীয়া", flag: "🇮🇳", sarvam: false },
  { code: "ur-IN", name: "Urdu", nativeName: "اردو", flag: "🇮🇳", sarvam: false },
  { code: "ne-IN", name: "Nepali", nativeName: "नेपाली", flag: "🇮🇳", sarvam: false },
  { code: "kok-IN", name: "Konkani", nativeName: "कोंकणी", flag: "🇮🇳", sarvam: false },
  { code: "mai-IN", name: "Maithili", nativeName: "मैथिली", flag: "🇮🇳", sarvam: false },
  { code: "sa-IN", name: "Sanskrit", nativeName: "संस्कृतम्", flag: "🇮🇳", sarvam: false },
  { code: "es-ES", name: "Spanish", nativeName: "Español", flag: "🇪🇸", sarvam: false },
  { code: "fr-FR", name: "French", nativeName: "Français", flag: "🇫🇷", sarvam: false },
  { code: "de-DE", name: "German", nativeName: "Deutsch", flag: "🇩🇪", sarvam: false },
  { code: "ja-JP", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", sarvam: false },
  { code: "ar-SA", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", sarvam: false },
  { code: "ru-RU", name: "Russian", nativeName: "Русский", flag: "🇷🇺", sarvam: false },
  { code: "zh-CN", name: "Chinese", nativeName: "中文", flag: "🇨🇳", sarvam: false },
  { code: "it-IT", name: "Italian", nativeName: "Italiano", flag: "🇮🇹", sarvam: false },
  { code: "pt-PT", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", sarvam: false },
];

function resolveLangCode(lang, defaultCode = "hi-IN") {
  if (!lang) return defaultCode;
  const l = String(lang).trim().toLowerCase();
  if (l === "en" || l.startsWith("en-") || l === "english") return "en-IN";
  if (l === "hi" || l.startsWith("hi-") || l === "hindi") return "hi-IN";
  if (l === "mr" || l.startsWith("mr-") || l === "marathi") return "mr-IN";
  if (l === "bn" || l.startsWith("bn-") || l === "bengali" || l === "bangla") return "bn-IN";
  if (l === "ta" || l.startsWith("ta-") || l === "tamil") return "ta-IN";
  if (l === "te" || l.startsWith("te-") || l === "telugu") return "te-IN";
  if (l === "kn" || l.startsWith("kn-") || l === "kannada") return "kn-IN";
  if (l === "gu" || l.startsWith("gu-") || l === "gujarati") return "gu-IN";
  if (l === "pa" || l.startsWith("pa-") || l === "punjabi") return "pa-IN";
  if (l === "ml" || l.startsWith("ml-") || l === "malayalam") return "ml-IN";
  if (l === "od" || l === "or" || l.startsWith("od-") || l.startsWith("or-") || l === "odia") return "od-IN";
  if (l === "as" || l.startsWith("as-") || l === "assamese") return "as-IN";
  if (l === "ur" || l.startsWith("ur-") || l === "urdu") return "ur-IN";
  if (l === "ne" || l.startsWith("ne-") || l === "nepali") return "ne-IN";
  if (l === "kok" || l.startsWith("kok-") || l === "konkani") return "kok-IN";
  if (l === "mai" || l.startsWith("mai-") || l === "maithili") return "mai-IN";
  if (l === "sa" || l.startsWith("sa-") || l === "sanskrit") return "sa-IN";
  if (l === "es" || l.startsWith("es-") || l === "spanish") return "es-ES";
  if (l === "fr" || l.startsWith("fr-") || l === "french") return "fr-FR";
  if (l === "de" || l.startsWith("de-") || l === "german") return "de-DE";
  if (l === "ja" || l.startsWith("ja-") || l === "japanese") return "ja-JP";
  if (l === "ar" || l.startsWith("ar-") || l === "arabic") return "ar-SA";
  if (l === "ru" || l.startsWith("ru-") || l === "russian") return "ru-RU";
  if (l === "zh" || l.startsWith("zh-") || l === "chinese") return "zh-CN";
  if (l === "it" || l.startsWith("it-") || l === "italian") return "it-IT";
  if (l === "pt" || l.startsWith("pt-") || l === "portuguese") return "pt-PT";
  return lang;
}

app.get("/api/languages", (_req, res) => {
  res.json({ success: true, languages: SUPPORTED_LANGUAGES });
});

app.all("/api/translate", async (req, res) => {
  const text = (req.body?.text || req.body?.input || req.body?.q || req.query?.text || req.query?.q || "").trim();
  const rawSource =
    req.body?.sourceLanguage ||
    req.body?.source_language ||
    req.body?.source ||
    req.body?.source_language_code ||
    req.body?.from ||
    req.query?.sourceLanguage ||
    req.query?.source ||
    "en-IN";

  const rawTarget =
    req.body?.targetLanguage ||
    req.body?.target_language ||
    req.body?.target ||
    req.body?.target_language_code ||
    req.body?.to ||
    req.body?.languageCode ||
    req.body?.language ||
    req.query?.targetLanguage ||
    req.query?.target ||
    "hi-IN";

  const sourceLang = resolveLangCode(rawSource, "en-IN");
  const targetLang = resolveLangCode(rawTarget, "hi-IN");

  if (!text) {
    return handleError(res, 400, "Text to translate is required");
  }

  // If source and target are identical
  if (sourceLang === targetLang) {
    return res.json({
      success: true,
      translatedText: text,
      translated_text: text,
      translation: text,
      pronunciation: text,
      source: sourceLang,
      target: targetLang,
      data: { translatedText: text, translated_text: text, source: sourceLang, target: targetLang },
    });
  }

  try {
    let translatedText = "";
    let pronunciation = "";

    // 1. Try Sarvam AI Translation first if applicable
    const isSarvamTarget = SUPPORTED_LANGUAGES.some((l) => l.code === targetLang && l.sarvam);
    const isSarvamSource = SUPPORTED_LANGUAGES.some((l) => l.code === sourceLang && l.sarvam);

    if (SARVAM_API_KEY && isSarvamTarget && isSarvamSource) {
      try {
        const sarvamRes = await axios.post(
          "https://api.sarvam.ai/translate",
          {
            input: text,
            source_language_code: sourceLang,
            target_language_code: targetLang,
            speaker_gender: "Female",
          },
          {
            headers: {
              "api-subscription-key": SARVAM_API_KEY,
              "Content-Type": "application/json",
            },
            timeout: 6000,
          }
        );
        if (sarvamRes.data?.translated_text) {
          translatedText = sarvamRes.data.translated_text;
        }
      } catch (sarvamErr) {
        console.warn("Sarvam translate notice:", sarvamErr.response?.data || sarvamErr.message);
      }
    }

    // 2. High-accuracy AI Fallback & Global Multi-Language Translation with Groq
    if (!translatedText && GROQ_API_KEY) {
      try {
        const sourceMeta = SUPPORTED_LANGUAGES.find((l) => l.code === sourceLang)?.name || sourceLang;
        const targetMeta = SUPPORTED_LANGUAGES.find((l) => l.code === targetLang)?.name || targetLang;

        const prompt = `You are an expert multilingual travel translator.
Translate this text from ${sourceMeta} (${sourceLang}) to ${targetMeta} (${targetLang}).
Original Text: "${text}"

Return STRICT JSON with this exact format:
{
  "translation": "Natural, direct translated text in native script",
  "pronunciation": "Romanized English phonetic pronunciation guide (e.g. for Hindi: 'Aap kaise hain?')"
}`;

        const groqRes = await groq.chat.completions.create({
          messages: [
            {
              role: "system",
              content: "You are a professional travel translator. Return valid JSON only with keys translation and pronunciation.",
            },
            { role: "user", content: prompt },
          ],
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" },
          temperature: 0.2,
          max_tokens: 500,
        });

        const rawContent = groqRes.choices[0]?.message?.content || "";
        const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
        const parsed = JSON.parse(cleanContent);
        translatedText = parsed.translation || "";
        pronunciation = parsed.pronunciation || "";
      } catch (groqErr) {
        console.warn("Groq translate notice:", groqErr.message);
      }
    }

    if (!translatedText) {
      translatedText = text;
    }

    res.json({
      success: true,
      translatedText,
      translated_text: translatedText,
      translation: translatedText,
      pronunciation: pronunciation || translatedText,
      source: sourceLang,
      target: targetLang,
      data: {
        translatedText,
        translated_text: translatedText,
        translation: translatedText,
        pronunciation: pronunciation || translatedText,
        source: sourceLang,
        target: targetLang,
      },
    });
  } catch (err) {
    handleError(res, 500, "Translation failed", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 💰  AI BUDGET PLANNER (Groq with Full Numeric Validation & Fallback)
// ═══════════════════════════════════════════════════════════════
app.post("/api/ai-budget", async (req, res) => {
  const city = req.body.city || req.body.destination || req.body.place || req.body.location || "";
  const travelers = Math.max(parseInt(req.body.travelers || 2, 10) || 2, 1);
  const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 5, 10) || 5, 1), 30);
  const tripVibe = req.body.tripVibe || req.body.vibe || req.body.style || "Mid-range";

  if (!city || !city.trim()) {
    return handleError(res, 400, "City name is required");
  }

  try {
    let budgetData = null;

    if (GROQ_API_KEY) {
      try {
        const prompt = `Create a detailed day-by-day travel budget for ${city.trim()}, India.
Travelers: ${travelers} | Days: ${days} | Style: ${tripVibe}.
Return ONLY valid JSON matching this exact structure:
{
  "dailyPlan": [
    {
      "day": 1,
      "title": "Arrival and City Tour",
      "activities": [{"item": "Iconic Sightseeing", "cost": 500}],
      "accommodation": 2500,
      "food": 1000,
      "transport": 500
    }
  ],
  "summary": {
    "stayTotal": ${days * 2500},
    "foodTotal": ${days * 1000},
    "transportTotal": ${days * 500},
    "activitiesTotal": ${days * 500},
    "miscellaneous": 1000,
    "grandTotal": ${days * 4500 + 1000}
  },
  "expertAdvice": "3 practical money-saving tips specific to ${city.trim()}",
  "bestDeals": ["Use metro or shared rides", "Book accommodation in advance", "Try local dhabas and food markets"]
}`;

        const completion = await groq.chat.completions.create({
          messages: [
            {
              role: "system",
              content: "You are an expert travel budget planner. You must return valid JSON only. Do not include markdown codeblocks or extra text.",
            },
            { role: "user", content: prompt },
          ],
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" },
          temperature: 0.5,
          max_tokens: 2500,
        });

        const rawContent = completion.choices[0]?.message?.content || "";
        const cleanContent = rawContent
          .replace(/^```json\s*/i, "")
          .replace(/^```\s*/i, "")
          .replace(/```\s*$/i, "")
          .trim();

        budgetData = JSON.parse(cleanContent);
      } catch (groqErr) {
        console.error("Groq AI Budget Error:", groqErr.message);
      }
    }

    // Dynamic fallback calculation if Groq failed or key missing
    if (!budgetData || !budgetData.dailyPlan) {
      const stayRate = tripVibe.toLowerCase().includes("luxury") ? 6000 : tripVibe.toLowerCase().includes("budget") ? 1200 : 2500;
      const foodRate = tripVibe.toLowerCase().includes("luxury") ? 2500 : tripVibe.toLowerCase().includes("budget") ? 500 : 1000;
      const transportRate = tripVibe.toLowerCase().includes("luxury") ? 1500 : tripVibe.toLowerCase().includes("budget") ? 300 : 600;
      const actRate = tripVibe.toLowerCase().includes("luxury") ? 2000 : tripVibe.toLowerCase().includes("budget") ? 400 : 800;

      const dailyPlan = [];
      for (let d = 1; d <= days; d++) {
        dailyPlan.push({
          day: d,
          title: d === 1 ? `Day 1: Arrival & Exploring ${city}` : d === 2 ? `Day 2: Heritage & Local Flavors` : `Day ${d}: Highlights & Activities in ${city}`,
          activities: [
            { item: `Sightseeing & Attractions in ${city}`, cost: actRate },
          ],
          accommodation: stayRate,
          food: foodRate,
          transport: transportRate,
        });
      }

      const stayTotal = stayRate * days;
      const foodTotal = foodRate * days;
      const transportTotal = transportRate * days;
      const activitiesTotal = actRate * days;
      const miscellaneous = Math.round((stayTotal + foodTotal) * 0.1);
      const grandTotal = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;

      budgetData = {
        dailyPlan,
        summary: {
          stayTotal,
          foodTotal,
          transportTotal,
          activitiesTotal,
          miscellaneous,
          grandTotal,
        },
        expertAdvice: `Book stays early in ${city} and opt for public transit or passes to save on daily travel costs.`,
        bestDeals: [
          "Use shared cabs or metro for local transit",
          "Dine at authentic local restaurants instead of tourist hotspots",
          "Look for combo attraction passes online",
        ],
      };
    }

    // Sanitize and ensure numeric consistency
    const rawSummary = budgetData.summary || {};
    const stayTotal = parseNumeric(rawSummary.stayTotal, 0);
    const foodTotal = parseNumeric(rawSummary.foodTotal, 0);
    const transportTotal = parseNumeric(rawSummary.transportTotal, 0);
    const activitiesTotal = parseNumeric(rawSummary.activitiesTotal, 0);
    const miscellaneous = parseNumeric(rawSummary.miscellaneous, 0);
    const calculatedGrand = stayTotal + foodTotal + transportTotal + activitiesTotal + miscellaneous;
    const grandTotal = parseNumeric(rawSummary.grandTotal, calculatedGrand) || calculatedGrand;
    const averageDailyBudget = Math.round(grandTotal / days) || Math.round(calculatedGrand / days);

    const sanitizedData = {
      dailyPlan: Array.isArray(budgetData.dailyPlan)
        ? budgetData.dailyPlan.map((d, idx) => ({
            day: parseNumeric(d.day, idx + 1),
            title: d.title || `Day ${idx + 1}`,
            activities: Array.isArray(d.activities)
              ? d.activities.map((a) => ({
                  item: a.item || "Sightseeing",
                  cost: parseNumeric(a.cost, 0),
                }))
              : [],
            accommodation: parseNumeric(d.accommodation, 0),
            food: parseNumeric(d.food, 0),
            transport: parseNumeric(d.transport, 0),
          }))
        : [],
      summary: {
        stayTotal,
        foodTotal,
        transportTotal,
        activitiesTotal,
        miscellaneous,
        grandTotal,
      },
      expertAdvice: normalizeToString(budgetData.expertAdvice || `Enjoy your trip to ${city}!`),
      bestDeals: Array.isArray(budgetData.bestDeals)
        ? budgetData.bestDeals.map((item) => normalizeToString(item))
        : ["Book early for best rates", "Eat at local eateries", "Use public transit"],
      averageDailyBudget,
    };

    res.json({
      success: true,
      data: sanitizedData,
    });
  } catch (err) {
    console.error("Budget Generation Critical Error:", err);
    handleError(res, 500, "Failed to generate budget", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 📋  AI ITINERARY PLANNER (Groq)
// ═══════════════════════════════════════════════════════════════
app.post("/api/ai-planner", async (req, res) => {
  const city = req.body.city || req.body.destination || req.body.place || "Jaipur";
  const days = Math.min(Math.max(parseInt(req.body.days || req.body.duration || 3, 10), 1), 7);
  const tripVibe = req.body.tripVibe || req.body.vibe || req.body.tripType || "Balanced";

  try {
    let planData = null;

    if (GROQ_API_KEY) {
      try {
        const prompt = `Create a detailed ${days}-day travel itinerary for ${city}, India. Vibe: ${tripVibe}.
Return valid JSON with format:
{
  "itinerary": [
    {
      "day": 1,
      "theme": "Arrival & City Highlights",
      "activities": [
        {"time": "Morning", "task": "Sightseeing", "description": "Explore top historical landmarks", "tips": "Start early"},
        {"time": "Afternoon", "task": "Local Cuisine", "description": "Enjoy traditional regional food", "tips": "Visit famous local eatery"},
        {"time": "Evening", "task": "Sunset & Stroll", "description": "Scenic sunset and market walk", "tips": "Great photography spot"}
      ]
    }
  ],
  "travel_tips": ["Carry comfortable walking shoes", "Keep cash handy for street vendors"],
  "must_try_experiences": ["Local heritage walk", "Authentic regional street food"]
}`;

        const completion = await groq.chat.completions.create({
          messages: [
            { role: "system", content: "You are a professional travel planner. You must return valid JSON only without markdown formatting." },
            { role: "user", content: prompt },
          ],
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" },
          temperature: 0.5,
          max_tokens: 2200,
        });

        const rawContent = completion.choices[0]?.message?.content || "";
        const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
        planData = JSON.parse(cleanContent);
      } catch (groqErr) {
        console.warn("Groq planner notice:", groqErr.message);
      }
    }

    if (!planData || !planData.itinerary) {
      const fallbackItinerary = [];
      for (let d = 1; d <= days; d++) {
        fallbackItinerary.push({
          day: d,
          theme: d === 1 ? `Welcome to ${city} & Iconic Landmarks` : d === 2 ? `Heritage, Culture & Local Flavors` : `Hidden Gems & Panoramic Views`,
          activities: [
            { time: "Morning", task: `Explore top sights in ${city}`, description: `Start the day visiting iconic landmarks and cultural attractions.`, tips: "Arrive early to avoid queues." },
            { time: "Afternoon", task: "Culinary Walk & Markets", description: `Taste signature regional dishes and shop at local bazaars.`, tips: "Look for popular local food stalls." },
            { time: "Evening", task: "Sunset & Scenic Spot", description: `Relax and watch the sunset from a popular viewpoint or promenade.`, tips: "Ideal time for photos." },
          ],
        });
      }
      planData = {
        itinerary: fallbackItinerary,
        travel_tips: ["Keep cash handy for local vendors", "Use ride-sharing or local transit for easy travel", "Stay hydrated and wear comfortable walking shoes"],
        must_try_experiences: [`Signature food trail in ${city}`, `Heritage landmark tour`, `Sunset photography spot`],
      };
    }

    res.json({ success: true, data: planData });
  } catch (err) {
    handleError(res, 500, "AI Planner failed", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 🤖  AI CHAT (Groq)
// ═══════════════════════════════════════════════════════════════
app.post("/api/ai-chat", async (req, res) => {
  const { message, history = [] } = req.body;
  if (!message) return handleError(res, 400, "Message is required");
  if (!GROQ_API_KEY) return handleError(res, 500, "GROQ_API_KEY is not configured");

  try {
    const messages = [
      { role: "system", content: "You are TravioX, an expert Indian travel assistant. Keep responses helpful, engaging and concise." },
      ...history.slice(-8),
      { role: "user", content: message },
    ];
    const completion = await groq.chat.completions.create({
      messages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 400,
    });
    res.json({ success: true, reply: completion.choices[0].message.content });
  } catch (err) {
    handleError(res, 500, "AI Chat failed", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 📷  PHOTOS (Unsplash)
// ═══════════════════════════════════════════════════════════════
app.get("/api/photos", async (req, res) => {
  const query = req.query.q;
  if (!query || query.trim() === "") {
    return res.status(400).json({ success: false, error: "Query parameter 'q' is required" });
  }
  if (!UNSPLASH_ACCESS_KEY) {
    return handleError(res, 500, "UNSPLASH_ACCESS_KEY is not configured");
  }
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: query.trim(), per_page: 8, client_id: UNSPLASH_ACCESS_KEY },
      timeout: 6000,
    });
    res.json({
      success: true,
      photos: response.data.results.map((img) => ({
        id: img.id,
        url: img.urls.regular,
        thumb: img.urls.thumb,
        description: img.alt_description || "",
        credit: img.user?.name || "Unsplash",
      })),
    });
  } catch (err) {
    handleError(res, 500, "Failed to fetch images", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// ✈️  FLIGHTS (SerpApi)
// ═══════════════════════════════════════════════════════════════
app.get("/api/flights", async (req, res) => {
  let { departure_id = "BOM", arrival_id = "DEL" } = req.query;
  if (!departure_id || !arrival_id || departure_id.length !== 3 || arrival_id.length !== 3) {
    return res.status(400).json({
      success: false,
      error: "Please use valid 3-letter airport codes (e.g., BOM, DEL)",
    });
  }
  if (!SERPAPI_KEY) {
    return handleError(res, 500, "SERPAPI_KEY is not configured");
  }

  const nextMonth = new Date();
  nextMonth.setDate(nextMonth.getDate() + 30);
  const travelDate = nextMonth.toISOString().split("T")[0];

  try {
    const response = await axios.get("https://serpapi.com/search", {
      params: {
        engine: "google_flights",
        departure_id: departure_id.toUpperCase(),
        arrival_id: arrival_id.toUpperCase(),
        outbound_date: travelDate,
        type: "2",
        currency: "INR",
        hl: "en",
        gl: "us",
        api_key: SERPAPI_KEY,
      },
      timeout: 10000,
    });

    const results = [
      ...(response.data.best_flights || []),
      ...(response.data.other_flights || []),
    ];

    if (results.length === 0) {
      return res.json({ success: true, flights: [], message: "No flights found." });
    }

    const formatted = results.slice(0, 10).map((f) => {
      const leg = f.flights?.[0] || {};
      return {
        airline: leg.airline || "Airline",
        logo: leg.airline_logo || "",
        flight_number: leg.flight_number || "",
        departure: leg.departure_airport?.id || departure_id,
        departure_name: leg.departure_airport?.name || departure_id,
        arrival: leg.arrival_airport?.id || arrival_id,
        arrival_name: leg.arrival_airport?.name || arrival_id,
        departure_time: leg.departure_airport?.time?.split(" ")[1] || "10:00",
        arrival_time: leg.arrival_airport?.time?.split(" ")[1] || "12:30",
        duration: f.total_duration || 120,
        status: f.type || "Available",
        url: `https://www.google.com/travel/flights?q=flights%20from%20${departure_id}%20to%20${arrival_id}%20on%20${travelDate}`,
      };
    });

    res.json({ success: true, flights: formatted });
  } catch (err) {
    handleError(res, 500, "Flight search failed", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 🏨  HOTELS (SerpApi)
// ═══════════════════════════════════════════════════════════════
app.get("/api/hotels", async (req, res) => {
  const { q = "Mumbai" } = req.query;
  if (!SERPAPI_KEY) {
    return handleError(res, 500, "SERPAPI_KEY is not configured");
  }
  try {
    const response = await axios.get("https://serpapi.com/search", {
      params: {
        engine: "google_hotels",
        q: `${q} hotels`,
        check_in_date: getFormattedDate(1),
        check_out_date: getFormattedDate(3),
        api_key: SERPAPI_KEY,
        currency: "INR",
        gl: "in",
      },
      timeout: 10000,
    });
    const hotels = (response.data.properties || []).slice(0, 8).map((h) => ({
      name: h.name,
      rating: h.overall_rating || "N/A",
      price: h.rate_per_night?.lowest || "N/A",
      thumbnail: h.images?.[0]?.thumbnail || "https://via.placeholder.com/300",
      link: h.link || "#",
    }));
    res.json({ success: true, hotels });
  } catch (err) {
    handleError(res, 500, "Hotel search failed", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 📖  TRAVEL MEMORY BUILDER (Groq Vision + AI Storyteller)
// ═══════════════════════════════════════════════════════════════
async function analyzePhotoWithVision(m, i) {
  const note = (m.user_note || m.note || "").trim();
  const rawBase64 = m.image_base64 || m.base64 || "";
  const imageUrl = m.image_url || m.url || (typeof m.uri === "string" && m.uri.startsWith("http") ? m.uri : "");
  const cleanBase64 = rawBase64.replace(/^data:image\/\w+;base64,/, "").trim();

  // If photo (base64 or remote URL) is provided, inspect with Groq Vision
  if (GROQ_API_KEY && (cleanBase64 || imageUrl)) {
    try {
      const imageContent = cleanBase64
        ? { type: "image_url", image_url: { url: `data:image/jpeg;base64,${cleanBase64}` } }
        : { type: "image_url", image_url: { url: imageUrl } };

      const visionPrompt = `You are an AI travel vision analyst inspecting photo #${i + 1} of a trip.
Traveler's note: "${note || "Scenic travel moment"}".
Examine the image carefully (scenery, landmarks, architecture, nature, food, culture, lighting, colors, activities) and return valid JSON:
{
  "visual_description": "Vivid 1-2 sentence description detailing exactly what is seen in the photo and the atmosphere",
  "mood": "1-word mood (e.g. Wonder, Serene, Adventurous, Euphoric, Vibrant, Majestic, Cozy, Free)",
  "mood_emoji": "1 matching emoji (e.g. 🌅, 🏔️, 🍜, 🏛️, ✨, 🌊, 🌸, ⛺)"
}`;

      const visionRes = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a travel vision analyst. You must return valid JSON only.",
          },
          {
            role: "user",
            content: [
              { type: "text", text: visionPrompt },
              imageContent,
            ],
          },
        ],
        model: "llama-3.2-11b-vision-preview",
        response_format: { type: "json_object" },
        temperature: 0.3,
        max_tokens: 220,
      });

      const parsed = JSON.parse(visionRes.choices[0]?.message?.content || "{}");
      return {
        index: i,
        note: note || parsed.visual_description || `Moment #${i + 1}`,
        visual_description: parsed.visual_description || note || `Scene #${i + 1}`,
        mood: parsed.mood || "Adventurous",
        mood_emoji: parsed.mood_emoji || "✨",
      };
    } catch (visionErr) {
      console.warn(`Vision analysis notice for photo #${i + 1}:`, visionErr.message);
    }
  }

  return {
    index: i,
    note: note || `Moment #${i + 1}`,
    visual_description: note || `Special travel memory #${i + 1}`,
    mood: "Memorable",
    mood_emoji: "📸",
  };
}

app.post("/api/travel-memory-builder", async (req, res) => {
  const { moments } = req.body;
  if (!moments || !Array.isArray(moments) || moments.length < 2) {
    return res.status(400).json({ success: false, error: "Provide at least 2 moments" });
  }

  try {
    console.log(`📸 Analyzing ${moments.length} photos with AI Vision...`);

    // Analyze all photos concurrently with Groq Vision
    const sceneAnalyses = await Promise.all(
      moments.map((m, i) => analyzePhotoWithVision(m, i))
    );

    let storyData = null;

    if (GROQ_API_KEY) {
      try {
        const storyPrompt = `You are an acclaimed travel writer. A traveler captured these moments with photos and notes:
${JSON.stringify(sceneAnalyses, null, 2)}

Craft an evocative travel diary that incorporates the visual details from the photos and the traveler's personal notes.
Return ONLY valid JSON matching this exact structure:
{
  "trip_title": "4-6 word evocative, poetic title for this journey",
  "travel_story": "A rich 3-4 paragraph narrative vividly weaving the visual scenes from the photos and personal notes into an unforgettable journey.",
  "highlight_quote": "One poetic line summing up the soul of this trip",
  "tags": ["travel", "wanderlust", "memories", "explore", "adventure"],
  "timeline": [
    {
      "moment_index": 0,
      "mood": "1-word mood",
      "mood_emoji": "1 matching emoji",
      "scene_description": "1 vivid sentence describing what is seen in the photo and the experience",
      "social_caption": "Engaging Instagram/TikTok caption highlighting the visual scene with 3 trending hashtags"
    }
  ]
}

IMPORTANT: Provide an entry in "timeline" for every moment index from 0 to ${sceneAnalyses.length - 1}.`;

        const storyRes = await groq.chat.completions.create({
          messages: [
            {
              role: "system",
              content: "You are an acclaimed travel author and storyteller. You must return valid JSON only without markdown codeblocks or extra text.",
            },
            { role: "user", content: storyPrompt },
          ],
          model: "llama-3.3-70b-versatile",
          response_format: { type: "json_object" },
          temperature: 0.6,
          max_tokens: 2200,
        });

        const rawContent = storyRes.choices[0]?.message?.content || "";
        const cleanContent = rawContent.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "").trim();
        storyData = JSON.parse(cleanContent);
      } catch (groqErr) {
        console.error("Groq Memory Builder Story Error:", groqErr.message);
      }
    }

    // Dynamic fallback if Groq text is slow/down
    if (!storyData || !storyData.travel_story) {
      const fallbackTimeline = sceneAnalyses.map((s, i) => ({
        moment_index: i,
        mood: s.mood || "Adventurous",
        mood_emoji: s.mood_emoji || "✨",
        scene_description: s.visual_description || s.note || `A special memory from moment #${i + 1}.`,
        social_caption: `${s.visual_description || s.note || "Collecting memories along the way"} ✨ #travel #wanderlust #memories`,
      }));

      storyData = {
        trip_title: "Echoes of the Open Road",
        travel_story: `Every journey leaves a mark on our soul. From the early morning departures to the quiet reflections as dusk settled, each chapter carried its own distinctive rhythm.\n\nTraveling through these places was a reminder that the best moments are often the unscripted ones—the spontaneous encounters, the shared laughter, and the breathtaking vistas that photos can only begin to capture.\n\nThese memories stand as tokens of adventure, reminding us why we wander and inspiring the journeys yet to come.`,
        highlight_quote: "We travel not to escape life, but for life not to escape us.",
        tags: ["wanderlust", "traveldiaries", "explore", "memories", "adventure"],
        timeline: fallbackTimeline,
      };
    }

    // Ensure all moments have a complete timeline entry
    const timeline = sceneAnalyses.map((s, i) => {
      const match = storyData.timeline?.find((t) => t.moment_index === i || t.index === i);
      return {
        index: i,
        user_note: s.note,
        mood: match?.mood || s.mood || "Memorable",
        mood_emoji: match?.mood_emoji || s.mood_emoji || "📸",
        scene_description: match?.scene_description || s.visual_description || s.note || `Travel memory #${i + 1}`,
        social_caption: match?.social_caption || `${s.visual_description || s.note || "Travel memories"} ✨ #travel #wanderlust`,
      };
    });

    res.json({
      success: true,
      data: {
        trip_title: storyData.trip_title || "A Journey Remembered",
        travel_story: storyData.travel_story || "Memories forged along the open road.",
        highlight_quote: storyData.highlight_quote || "Collect moments, not things.",
        tags: Array.isArray(storyData.tags) ? storyData.tags : ["travel", "wanderlust", "memories"],
        timeline,
        created_at: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error("Memory Builder Critical Error:", err);
    handleError(res, 500, "Memory builder failed", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 🎬  CREATOMATE VIDEO GENERATOR
// ═══════════════════════════════════════════════════════════════
function buildSlideshowRenderScript(imageUrls, captions = []) {
  const photos = imageUrls.slice(0, 4);
  const slideDuration = 3.5;
  const elements = [];

  photos.forEach((url, i) => {
    elements.push({
      type: "image",
      source: url,
      track: 1,
      duration: slideDuration,
      clip: true,
      animations: [
        { type: "scale", start_scale: i % 2 === 0 ? "100%" : "112%", end_scale: i % 2 === 0 ? "112%" : "100%", easing: "linear" },
        ...(i > 0 ? [{ type: "fade", transition: true, duration: 0.6 }] : []),
      ],
    });
  });

  if (Array.isArray(captions) && captions.length > 0) {
    photos.forEach((_, i) => {
      const cap = captions[i];
      if (cap && typeof cap === "string" && cap.trim()) {
        elements.push({
          type: "text",
          text: cap.trim().substring(0, 100),
          track: 2,
          time: i * slideDuration,
          duration: slideDuration,
          y: "85%",
          width: "86%",
          fill_color: "#ffffff",
          background_color: "rgba(10, 10, 10, 0.75)",
          background_border_radius: "12 px",
          padding: "14 px",
          font_size: "30 px",
          font_weight: "700",
          text_alignment: "center",
          animations: [
            { type: "fade", duration: 0.4 },
            { type: "fade", duration: 0.4, transition: false, time: slideDuration - 0.4, reversed: true },
          ],
        });
      }
    });
  }

  return {
    output_format: "mp4",
    width: 1080,
    height: 1920,
    frame_rate: 30,
    elements,
  };
}

app.post("/api/generate-video", async (req, res) => {
  const { imageUrls, captions } = req.body;
  if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length < 2) {
    return res.status(400).json({ success: false, error: "Provide at least 2 image URLs" });
  }
  if (!CREATOMATE_API_KEY) {
    return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
  }

  try {
    const videoMoments = imageUrls.slice(0, 4);
    let renderResponse = null;

    if (CREATOMATE_TEMPLATE_ID) {
      try {
        const modifications = {};
        videoMoments.forEach((url, i) => {
          modifications[`Background-${i + 1}.source`] = url;
        });
        if (captions && captions.length > 0) {
          captions.slice(0, videoMoments.length).forEach((caption, i) => {
            modifications[`Text-${i + 1}.text`] = (caption || "").substring(0, 150);
          });
        }
        const tplRes = await axios.post(
          "https://api.creatomate.com/v2/renders",
          { template_id: CREATOMATE_TEMPLATE_ID, modifications },
          {
            headers: {
              Authorization: `Bearer ${CREATOMATE_API_KEY}`,
              "Content-Type": "application/json",
            },
            timeout: 6000,
          }
        );
        renderResponse = tplRes.data;
      } catch (tplErr) {
        console.warn("Template render notice:", tplErr.message);
      }
    }

    if (!renderResponse) {
      const source = buildSlideshowRenderScript(videoMoments, captions);
      const scriptRes = await axios.post(
        "https://api.creatomate.com/v2/renders",
        { source },
        {
          headers: {
            Authorization: `Bearer ${CREATOMATE_API_KEY}`,
            "Content-Type": "application/json",
          },
          timeout: 6000,
        }
      );
      renderResponse = scriptRes.data;
    }

    const initialRender = Array.isArray(renderResponse) ? renderResponse[0] : renderResponse;
    if (!initialRender || !initialRender.id) {
      throw new Error("Invalid response from Creatomate");
    }

    res.json({
      success: true,
      videoUrl: initialRender.url,
      status: initialRender.status,
      renderId: initialRender.id,
    });
  } catch (err) {
    handleError(res, 500, "Failed to generate video", err.message);
  }
});

app.get("/api/video-status/:id", async (req, res) => {
  if (!CREATOMATE_API_KEY) {
    return handleError(res, 500, "CREATOMATE_API_KEY is not configured");
  }
  try {
    const statusRes = await axios.get(`https://api.creatomate.com/v2/renders/${req.params.id}`, {
      headers: { Authorization: `Bearer ${CREATOMATE_API_KEY}` },
      timeout: 6000,
    });
    const data = Array.isArray(statusRes.data) ? statusRes.data[0] : statusRes.data;
    res.json({
      success: true,
      status: data.status,
      videoUrl: data.url,
      errorMessage: data.error_message,
    });
  } catch (err) {
    handleError(res, 500, "Failed to fetch video status", err.message);
  }
});

// ═══════════════════════════════════════════════════════════════
// 🚀  START SERVER
// ═══════════════════════════════════════════════════════════════
app.listen(PORT, () => {
  console.log(`\n✈️  TravioX Server running on port ${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health\n`);
});

module.exports = app;
