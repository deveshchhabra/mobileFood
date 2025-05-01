import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import 'nativewind';
import "../../global.css"


const Topbar = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      const gridWidgetCard = res?.data?.data?.cards.find(
        (card) =>
          card.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget'
      );

      const infoItems = gridWidgetCard?.card?.card?.imageGridCards?.info || [];
      setItems(infoItems);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
// {console.log(items)}
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className="mt-6">
      <Text className="text-lg font-bold ml-4 mb-2">
        What's on your mind?
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pl-4"
      >
        {items.map((item, index) => (
          <View key={index} className="mr-8 items-center ">
            <Image
              source={{
                uri: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item?.imageId}`,
              }}
              className="w-28 h-28  object-cover"
              resizeMode="cover"
            />
           
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Topbar;