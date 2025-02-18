import { Image, ScrollView, StyleSheet } from "react-native";

import TestDom from "@/components/TestDom";

export default function HomeScreen() {
	return (
		<ScrollView style={{ backgroundColor: "white" }}>
			<TestDom dom={{ matchContents: true }} />
		</ScrollView>
	);
}
