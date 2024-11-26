import { Event } from "@/types";
import { Image, Text, View } from "react-native";

import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";

export default function CardEvent_Big({ event }: { event: Event }) {
  return (
    <View className="p-4 gap-2 bg-dark w-5/6 rounded-lg h-[305px]">
      {/* <Image /> */}
      <Image
        source={require("../../../assets/images/publication-neon.jpg")}
        style={{ width: "100%", height: 200 }}
        className="rounded-tl-lg rounded-r-lg object-cover"
      />

      {/* Titre */}
      <View className="flex-row items-center justify-between gap-2">
        <Text className="flex-shrink font-bold text-2xl text-white tracking-widest px-1 py-1 rounded-b-lg">
          {event.title}
        </Text>
        {/* Prix et Catégorie */}
        <View className="flex-row gap-1">
          <Text className="text-white text-center bg-dark-500 py-1 w-24 rounded-lg">
            {event.price}
          </Text>
          <Text className="text-white text-center bg-dark-500 py-1 w-24 rounded-lg">
            {event.category}
          </Text>
        </View>
        {/* Département */}
      </View>

      {/* Date  */}
      <View className="flex-row items-center justify-between gap-2 bg-dark-500 p-2 rounded-lg">
        <View className="flex-row items-center gap-2">
          <Fontisto name="date" size={16} color="white" />
          <Text className="text-white">
            {new Date(event.startDateTime).toLocaleDateString("fr-FR")}
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Entypo name="location-pin" size={16} color="white" />
          <Text className="text-white">{event.departement}</Text>
        </View>
      </View>
    </View>
  );
}
