import {
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";

import ActionCard from "@/components/ActionCard";
import ContactList from "@/components/ContactLists";
import ElevatedCards from "@/components/ElevatedCards";
import FancyCards from "@/components/FancyCard";
import FlatCard from "@/components/FlatCard";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCards/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
