import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          color="orange"
          title="Alert module alert"
          onPress={() => {
            Alert.alert("Button Clicked", "You have clicked the button!", [
              { text: "Close" },
            ]);
          }}
        />

        <Button
          color="red"
          title="Normal Alert"
          onPress={() => {
            alert("Normal Alert");
          }}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
