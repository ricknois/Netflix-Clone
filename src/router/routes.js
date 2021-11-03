import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Pages";
import {
  HomeIcon,
  ComingSoonIcon,
  SearchIcon,
  MoreIcon,
  DownloadIcon,
} from "../../assets/svg";
import Icon from "../../assets/Home Icon.png";
import { Image } from "react-native";
import theme from "../global/themes/theme";
import { Background, HeaderSearch } from "../Components";

export default function Router() {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarBackground: () => <Background />,
        tabBarIcon: ({ focused }) => {
          let color = theme.colors.white50;
          focused ? (color = theme.colors.white) : null;
          if (route.name === "Home") {
            return <HomeIcon color={color} />;
          } else if (route.name === "Search") {
            return <SearchIcon color={color} />;
          } else if (route.name === "Coming Soon") {
            return <ComingSoonIcon color={color} />;
          } else if (route.name === "Downloads") {
            return <DownloadIcon color={color} />;
          } else if (route.name === "More") {
            return <MoreIcon color={color} />;
          }
        },
        tabBarActiveTintColor: `${theme.colors.white}`,
        tabBarInactiveTintColor: `${theme.colors.white50}`,
      })}
    >
      <Screen name="Home" component={Home} options={{}} />
      <Screen
        name="Search"
        component={Home}
        options={{
          headerShown: true,
          header: ({ navigation, route, options }) => <HeaderSearch />,
        }}
      />
      <Screen name="Coming Soon" component={Home} options={{}} />
      <Screen name="Downloads" component={Home} options={{}} />
      <Screen name="More" component={Home} options={{}} />
    </Navigator>
  );
}
