import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [dice1, setDice1] = useState('1');
  const [dice2, setDice2] = useState('1');

  const handleRoll = () => {
    const dice1Random = (Math.floor(Math.random() * 6) + 1).toString();
    const dice2Random = (Math.floor(Math.random() * 6) + 1).toString();
    setDice1(dice1Random);
    setDice2(dice2Random);
  };

  const dice = {
    1: require("./assets/dice_1.png"),
    2: require("./assets/dice_2.png"),
    3: require("./assets/dice_3.png"),
    4: require("./assets/dice_4.png"),
    5: require("./assets/dice_5.png"),
    6: require("./assets/dice_6.png"),
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={dice[dice1]}
          style={styles.imgStyle}
        />
        <Image
          source={dice[dice2]}
          style={styles.imgStyle}
        />
      </View>

      <TouchableOpacity
        style={{
          paddingHorizontal: 30,
          paddingVertical: 15,
          backgroundColor: "#f39c12",
          margin: 20,
          borderRadius: 4,
        }}
        onPress={handleRoll}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          Roll the Dice
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
