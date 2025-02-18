import { Image, ScrollView, StyleSheet } from "react-native";

import TestDom from "@/components/TestDom";

export default function HomeScreen() {
	return (
		<ScrollView style={{ backgroundColor: "white" }}>
			{/* //! Uncomment below to see how it gets fixed  */}
			{/* <TestDom dom={{ matchContents: true }} /> */}
			<TestDom />
		</ScrollView>
	);
}
