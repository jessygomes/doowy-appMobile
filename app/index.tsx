import { FlatList, Text, View } from "react-native";

import { eventData } from "@/data/data";

import CardEvent_Big from "@/components/shared/Cards Event/CardEvent_Big";
import CardEvent_Small from "@/components/shared/Cards Event/CardEvent_Small";

export default function HomeScreen() {
  return (
    <>
      <FlatList
        data={eventData}
        renderItem={({ item }) => <CardEvent_Big event={item} />}
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
        // className="justify-center"
        // contentContainerStyle={{ gap: 20, backgroundColor: "blue" }}

        contentContainerClassName="gap-2 justify-center bg-dark-400"
      />

      <FlatList
        data={eventData}
        renderItem={({ item }) => <CardEvent_Small event={item} />}
        // className="justify-center"
        // contentContainerStyle={{ gap: 20, backgroundColor: "blue" }}
        contentContainerClassName="gap-2 justify-center bg-dark-400"
      />
    </>
  );
}
