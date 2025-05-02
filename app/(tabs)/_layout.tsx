import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View, useWindowDimensions } from "react-native";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

// Custom Tab Icon Component
function TabIcon({ focused, icon, title, iconSize, fontSize, padding }: any) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        style={{
          flexDirection: "row",
          paddingHorizontal: padding.horizontal,
          paddingVertical: padding.vertical,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 999,
          overflow: "hidden",
        }}
      >
        <Image
          source={icon}
          style={{ 
            tintColor: "#151312", 
            width: iconSize.focused, 
            height: iconSize.focused 
          }}
        />
        <Text style={{ 
          fontSize: fontSize,
          color: "#151312",
          marginLeft: padding.horizontal / 2,
          fontWeight: "600",
        }}>
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={icon}
        style={{ 
          tintColor: "#A8B5DB", 
          width: iconSize.regular, 
          height: iconSize.regular 
        }}
      />
    </View>
  );
}

export default function TabsLayout() {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  // Responsive calculations
  const tabBarHeight = Math.round(screenHeight * 0.06);
  const tabBarMargin = Math.round(screenWidth * 0.05);
  const tabBarBottomMargin = Math.round(screenHeight * 0.03);
  
  const iconSize = {
    focused: Math.round(tabBarHeight * 0.35),
    regular: Math.round(tabBarHeight * 0.4),
  };

  const fontSize = Math.round(screenHeight * 0.018);
  
  const padding = {
    horizontal: Math.round(screenWidth * 0.03),
    vertical: Math.round(tabBarHeight * 0.2),
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flex: 1,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0F0D23",
          borderRadius: tabBarHeight / 2,
          position: "absolute",
          left: tabBarMargin,
          right: tabBarMargin,
          bottom: tabBarBottomMargin,
          height: tabBarHeight,
          borderWidth: 1,
          borderColor: "#0F0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title="Home"
              iconSize={iconSize}
              fontSize={fontSize}
              padding={padding}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.search}
              title="Search"
              iconSize={iconSize}
              fontSize={fontSize}
              padding={padding}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          title: "Save",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.save}
              title="Save"
              iconSize={iconSize}
              fontSize={fontSize}
              padding={padding}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.person}
              title="Profile"
              iconSize={iconSize}
              fontSize={fontSize}
              padding={padding}
            />
          ),
        }}
      />
    </Tabs>
  );
}