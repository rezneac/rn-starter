import React from "react";
import { Text, StyleSheet, View } from "react-native";

const myName = "Anatolie";

const ComponentsScreen = () => {
    return <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        <Text style={styles.subHeading}>My name is {myName}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeading:{
        fontSize: 20
    }
});

export default ComponentsScreen;