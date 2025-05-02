import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'

const index = () => {
  const [items, setItems] = useState([])
  const fetchData = async () => {
    try {
      const res = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const gridWidgetCard = res?.data?.data?.cards.find((card) =>
        card.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget')
      const infoItems = gridWidgetCard?.card?.card?.imageGridCards?.info || [];
      setItems(infoItems)


    }

    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <View className='mt-6'>
      <Text className='text-xl font-bold ml-4 mb-2'>Devesh,What's on your mind?</Text>
      <ScrollView
       horizontal
       showsHorizontalScrollIndicator={false}
       className="pl-4"
      >{items.map((item, index) => (
        <View key={index}>
          <Image source={{
            uri: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item?.imageId}`,
          }}
            className="w-28 h-28  object-cover"
            resizeMode="cover"
          />
        </View>
      ))}</ScrollView>
    </View>
  )
}

export default index


// import { Text, View, Image, ScrollView } from "react-native";
// import "../global.css";
// import Topbar from "./(tabs)/_topbar";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Index() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );
//       const restaurants =
//         res.data.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants || [];
//       setData(restaurants);
//     };
//     fetchData();
//   }, []);

//   return (
//     <View className="bg-white min-h-screen">
//       <Topbar />
//       <Text className="text-xl font-bold px-4 pt-4">
//         Restaurants with online food delivery in Chhindwara
//       </Text>

//       <ScrollView className="px-4 pt-2">
//         {data.map((item, index) => (
//           <View
//             key={index}
//             className="bg-white rounded-xl shadow-sm p-3 mb-4 flex-row items-start"
//           >
//             <Image
//               source={{
//                 uri:
//                   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//                   item.info.cloudinaryImageId,
//               }}
//               className="w-24 h-24 rounded-lg"
//             />
//             <View className="flex-1 pl-3">
//               <Text className="font-semibold text-lg">{item.info.name}</Text>
//               <Text className="text-gray-600 text-sm">
//                 ⭐ {item.info.avgRating} • {item.info.sla.deliveryTime} mins
//               </Text>
//               <Text className="text-gray-500 text-sm mt-1">
//                 {item.info.cuisines.join(", ")}
//               </Text>
//               <Text className="text-gray-400 text-sm">
//                 {item.info.areaName}
//               </Text>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }
// import { Text, View, Image, FlatList, ScrollView } from "react-native";
// import "../global.css";
// import Topbar from "./(tabs)/_topbar";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Index() {
//   const [data, setData] = useState([]);
//   const [topChains, setTopChains] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );

//       // Restaurant List
//       const restaurants =
//         res.data.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants || [];
//       setData(restaurants);

//       // Top Chains List
//       const chains =
//         res.data.data.cards[3]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants || [];
//       setTopChains(chains);
//     };
//     fetchData();
//   }, []);

//   // Card component for restaurants
//   const renderRestaurantCard = ({ item }) => (
//     <View className="bg-white rounded-xl shadow-sm p-2 m-2 w-[46%]">
//       <Image
//         source={{
//           uri:
//             "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//             item.info.cloudinaryImageId,
//         }}
//         className="h-28 w-full rounded-lg"
//         resizeMode="cover"
//       />
//       <Text className="font-semibold text-base mt-2">{item.info.name}</Text>
//       <Text className="text-gray-600 text-xs">
//         ⭐ {item.info.avgRating} • {item.info.sla.deliveryTime} mins
//       </Text>
//       <Text className="text-gray-500 text-xs mt-1" numberOfLines={1}>
//         {item.info.cuisines.join(", ")}
//       </Text>
//       <Text className="text-gray-400 text-xs">{item.info.areaName}</Text>
//     </View>
//   );

//   return (
//     <View className="bg-white min-h-screen">
//       <Topbar />

//       {/* Top Chains */}
//       <Text className="text-xl font-bold px-4 pt-4">
//         Top restaurant chains in Chhindwara
//       </Text>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         className="px-4 pt-2"
//       >
//         {topChains.map((item, index) => (
//           <View key={index} className="mr-3">
//             <Image
//               source={{
//                 uri:
//                   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//                   item.info.cloudinaryImageId,
//               }}
//               className="h-28 w-28 rounded-xl"
//               resizeMode="cover"
//             />
//           </View>
//         ))}
//       </ScrollView>

//       {/* Restaurants with online delivery */}
//       <Text className="text-xl font-bold px-4 pt-4">
//         Restaurants with online food delivery in Chhindwara
//       </Text>

//       <FlatList
//         data={data}
//         numColumns={2}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={renderRestaurantCard}
//         contentContainerStyle={{ paddingHorizontal: 8, paddingTop: 8 }}
//       />
//     </View>
//   );
// }
