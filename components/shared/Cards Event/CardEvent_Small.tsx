import { Image, Text, View } from "react-native";

import { Event } from "@/types";

import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";

export default function CardEvent_Small({ event }: { event: Event }) {
  return (
    <View className="p-4 flex-row gap-2 bg-dark w-full rounded-lg">
      <Image
        source={require("../../../assets/images/publication-neon.jpg")}
        style={{ width: "40%", height: "100%" }}
        className="rounded-tl-lg rounded-r-lg object-cover"
      />

      <View className="flex-1 gap-1">
        <View className="flex-row justify-between">
          {/* Titre */}
          <Text className="flex-shrink font-bold text-xl text-white tracking-widest px-1 py-1 rounded-b-lg">
            {event.title}
          </Text>
          <View className="flex-row items-center gap-2">
            <Entypo name="location-pin" size={16} color="white" />
            <Text className="text-white">{event.departement}</Text>
          </View>
        </View>
        <View className="items-center justify-between gap-2 bg-dark-500 p-2 rounded-lg">
          <View className="flex-row items-center gap-2">
            <Fontisto name="date" size={16} color="white" />
            <Text className="text-white">
              {new Date(event.startDateTime).toLocaleDateString("fr-FR")}
            </Text>
          </View>
        </View>
        <View className="flex-row gap-1">
          <Text className="text-white text-center bg-dark-500 py-1 w-24 rounded-lg flex-1">
            {event.price}
          </Text>
          <Text className="text-white text-center bg-dark-500 py-1 w-24 rounded-lg flex-1">
            {event.category}
          </Text>
        </View>
      </View>
    </View>
  );
}
