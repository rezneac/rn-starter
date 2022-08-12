import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native"
import ColourCounter from "../components/ColourCounter";

const Colour_Increment = 15;

const reducer = (state, action) => {
    //state === {red:number, green:number, blue: numbere}
    //action === {colorToChange: "red" || "green" || "blue", amount:15 || -15}

    switch (action.colorToChange) {
        case "red":
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };
        case "green":
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount };
        case "blue":
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount };
        default:
            return;
    }

};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    //Destructuring
    const { red, green, blue } = state;

    return (
        <View>
            <ColourCounter
                onIncrease={() => dispatch({ colorToChange: "red", amount: Colour_Increment })}
                onDecrease={() => dispatch({ colorToChange: "red", amount: -1 * Colour_Increment })}
                colour="Red" />
            <ColourCounter
                onIncrease={() => dispatch({ colorToChange: "blue", amount: Colour_Increment })}
                onDecrease={() => dispatch({ colorToChange: "blue", amount: -1 * Colour_Increment })}
                colour="Blue" />
            <ColourCounter
                onIncrease={() => dispatch({ colorToChange: "green", amount: Colour_Increment })}
                onDecrease={() => dispatch({ colorToChange: "green", amount: -1 * Colour_Increment })}
                colour="Green" />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;