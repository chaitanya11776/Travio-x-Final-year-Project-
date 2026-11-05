// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "./screen/HomeScreen";
// import BudgetScreen from "./screen/BudgetScreen";
// import Flight from "./screen/Flight";
// import Hotel from "./screen/Hotel";
// import LiveNavigationScreen from "./screen/LiveNavigationScreen";
// import Memory from "./screen/Memory";
// import NewsScreen from "./screen/NewsScreen";
// import PlannerScreen from "./screen/PlannerScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
// return ( <NavigationContainer>
// <Stack.Navigator
// initialRouteName="Home"
// screenOptions={{
// headerShown: false,
// }}
// >
// <Stack.Screen name="Home" component={HomeScreen} />
// <Stack.Screen name="Budget" component={BudgetScreen} />
// <Stack.Screen name="Flights" component={Flight} />
// <Stack.Screen name="HotelSearch" component={Hotel} />
// <Stack.Screen
// name="LiveNavigation"
// component={LiveNavigationScreen}
// />
// <Stack.Screen name="Memory" component={Memory} />
// <Stack.Screen name="News" component={NewsScreen} />
// <Stack.Screen name="Planner" component={PlannerScreen} />
// </Stack.Navigator> </NavigationContainer>
// );
// }


// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from "./screen/HomeScreen";
// import BudgetScreen from "./screen/BudgetScreen";
// import Flight from "./screen/Flight";
// import Hotel from "./screen/Hotel";
// import LiveNavigationScreen from "./screen/LiveNavigationScreen";
// import Memory from "./screen/Memory";
// import NewsScreen from "./screen/NewsScreen";
// import PlannerScreen from "./screen/PlannerScreen";
// import SmartPacking from "./screen/SmartPackingScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//         />

//         <Stack.Screen
//           name="Budget"
//           component={BudgetScreen}
//         />

//         <Stack.Screen
//           name="Flights"
//           component={Flight}
//         />

//         <Stack.Screen
//           name="HotelSearch"
//           component={Hotel}
//         />

//         <Stack.Screen
//           name="LiveNavigation"
//           component={LiveNavigationScreen}
//         />

//         <Stack.Screen
//           name="Memory"
//           component={Memory}
//         />

//         <Stack.Screen
//           name="News"
//           component={NewsScreen}
//         />

//         <Stack.Screen
//           name="Planner"
//           component={PlannerScreen}
//         />

//         <Stack.Screen
//           name="SmartPacking"
//           component={SmartPacking}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }








// /new
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screen/HomeScreen";
import BudgetScreen from "./screen/BudgetScreen";
import Flight from "./screen/Flight";
import Hotel from "./screen/Hotel";
import LiveNavigationScreen from "./screen/LiveNavigationScreen";
import Memory from "./screen/Memory";
import NewsScreen from "./screen/NewsScreen";
import TravelAIScreen from "./screen/TravelAudio";
import PlannerScreen from "./screen/PlannerScreen";
import SmartPacking from "./screen/SmartPackingScreen";
import TranslateScreen from "./screen/TranslateScreen"; // ✅ NEW

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Home */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        {/* Budget */}
        <Stack.Screen
          name="Budget"
          component={BudgetScreen}
        />

        {/* Flights */}
        <Stack.Screen
          name="Flights"
          component={Flight}
        />
        <Stack.Screen
  name="TravelAI"
  component={TravelAIScreen}
/>

        {/* Hotels */}
        <Stack.Screen
          name="HotelSearch"
          component={Hotel}
        />

        {/* Live Navigation */}
        <Stack.Screen
          name="LiveNavigation"
          component={LiveNavigationScreen}
        />

        {/* Memory */}
        <Stack.Screen
          name="Memory"
          component={Memory}
        />

        {/* News */}
        <Stack.Screen
          name="News"
          component={NewsScreen}
        />

        {/* Planner */}
        <Stack.Screen
          name="Planner"
          component={PlannerScreen}
        />

        {/* Smart Packing */}
        <Stack.Screen
          name="SmartPacking"
          component={SmartPacking}
        />

        {/* 🌍 Live Translation */}
        <Stack.Screen
          name="Translate"
          component={TranslateScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}