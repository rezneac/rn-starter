import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title='Go to Components Demo'
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />
      <Button
        onPress={() => navigation.navigate("Colour")}
        title="Go to Colour Screen"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
