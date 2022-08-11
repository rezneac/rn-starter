import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import ColourCounter from "../components/ColourCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const Colour_Increment = 15;

    const setColour = (colour, change) => {
        switch (colour) {
            case "red":
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return;
            case "blue":
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return;
            case "green":
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return;
            default:
                return;

        }

    };

    return (
        <View>
            <ColourCounter
                onIncrease={() => setColour("red", Colour_Increment)}
                onDecrease={() => setColour("red", -1 * Colour_Increment)}
                colour="Red" />
            <ColourCounter
                onIncrease={() => setColour("blue", Colour_Increment)}
                onDecrease={() => setColour("blue", -1 * Colour_Increment)}
                colour="Blue" />
            <ColourCounter
                onIncrease={() => setColour("green", Colour_Increment)}
                onDecrease={() => setColour("green", -1 * Colour_Increment)}
                colour="Green" />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;