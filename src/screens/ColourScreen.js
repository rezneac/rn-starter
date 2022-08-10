import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native"

const ColourScreen = () => {
    const [colours, setColour] = useState([]);
    console.log(colours);

    return (
        <View>
            <Button
                title="Add a colour"
                onPress={() => {
                    setColour([...colours, randomRGB()]);
                }} />
            
            <FlatList
                keyExtractor={item => item}
                data={colours}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />
        </View>
    );
}

const randomRGB = () => {
    const red = Math.floor(Math.random(0) * 255);
    const green = Math.floor(Math.random(0) * 255);
    const blue = Math.floor(Math.random(0) * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColourScreen;