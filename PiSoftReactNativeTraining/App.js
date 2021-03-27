import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png"
            }}
            style={{ width: 200, height: 200 }}
          />
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              padding: 10,
              fontWeight: "bold"
            }}
          >
            PiSoft Team Training
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png"
            }}
            style={{ width: 50, height: 50 }}
          />

          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              borderRadius: 5
            }}
            placeholder="You can type in me"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png"
            }}
            style={{ width: 50, height: 50 }}
          />

          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              borderRadius: 5
            }}
            placeholder="You can type in me"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://reactnative.dev/docs/assets/p_cat2.png"
            }}
            style={{ width: 50, height: 50 }}
          />

          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              borderRadius: 5
            }}
            placeholder="You can type in me"
          />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
