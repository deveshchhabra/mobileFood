// import React, { useEffect, useState } from 'react'
// import { View, Text, Image, FlatList } from 'react-native'
// import Topbar from './components/_topbar'
// import axios from 'axios'
// import { Link, useNavigation } from 'expo-router'
// import onboarding from './onboarding'
// const index = () => {
//   const [Data, setData] = useState([])
//   const fetchData = async () => {
//     const res = await axios.get(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6045877&lng=77.1043464&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     )
//     const restaurants = res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
//     console.log(restaurants)
//     setData(restaurants)

//   }
//   useEffect(() => {
//     fetchData()
//   }, [])
//   const renderRestaurantCard = ({ item }) => {
//     const discountInfo = item?.info?.aggregatedDiscountInfoV3;
//     return (

//       <View className='bg-white shadow-md rounded-xl m-2 p-2 w-[46%] '>
//         <Image
//           source={{
//             uri:
//               "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
//               item.info.cloudinaryImageId,
//           }}
//           className='h-28 w-full rounded-lg'
//           resizeMode='cover'

//         />
//         <Text className='font-semibold text-base mt-2'>{item?.info?.name}</Text>
//         {discountInfo && (
//   <View className=" left-2 bg-black  py-1 rounded text-xs">
//     <Text className="  text-xs">
//       {discountInfo.header} {discountInfo.subHeader}
//     </Text>
//   </View>
// )}



//         <Text className="text-gray-600 text-xs">
//           ⭐ {item.info.avgRating} • {item.info.sla.deliveryTime} mins
//         </Text>
//         <Text className="text-gray-400 text-xm">{item.info.areaName}</Text>

//       </View>
//     )
//   }


//   return (
//     <View>
       

//       <Topbar />
//       <Text className="text-xl font-bold px-4 pt-4">
//         Restaurants with online food delivery in ,Delhi
//       </Text>
//       <FlatList data={Data}
//         numColumns={2}
//         keyExtractor={(items, index) => index.toString()}
//         renderItem={renderRestaurantCard}
//         contentContainerStyle={{ paddingHorizontal: 8, paddingTop: 8 }}

//       />

//     </View>
//   )
// }

// export default index

// import { Link } from 'expo-router';
// import { TouchableOpacity, Text, View } from 'react-native';

// export default function HomeScreen() {

//   return (
//     <View className="flex-1 items-center justify-center">
//       {/* <TouchableOpacity
//         onPress={() => navigation.navigate('Onboarding')}
//         className="bg-blue-500 px-4 py-2 rounded"
//       >
//         <Text className="text-white">Go to Onboarding</Text>
//       </TouchableOpacity> */}
//     <Link href='/Onboarding'>Go to Onboarding</Link>
//     <Link href='/movie/devesh'>Avenger Movie</Link>

//     </View>
//   );
// }

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const index = () => {
//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   )
// }

// export default index

// const styles = StyleSheet.create({})
