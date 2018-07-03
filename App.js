import React, { Component } from "react";
import { Text, View } from "react-native";
import { process, measure } from "./process-calc";

const wrapperStyles = {
  width: "100%",
  height: "100%",
  backgroundColor: "#0f0"
};

const textStyles = {
  fontSize: 32,
  textAlign: "center"
};

const styles1 = {
  backgroundColor: "#f00",
  height: "calc(20vh + 1rem)",
  width: "calc(100% - 40px)",
  marginTop: 20,
  marginLeft: "auto",
  marginRight: "auto"
};

const styles2 = {
  backgroundColor: "#ccc",
  height: "calc(20px + 100px)",
  width: "calc(45% - 4vw)",
  marginTop: "calc(10px + 10px)",
  marginLeft: "auto",
  marginRight: "auto"
};

// these are unique references for each element.
// they can be generated with a Babel transform:
//
// "zdqghqgf"
// "gwbdrklb"

export default class App extends Component {
  render() {
    return (
      <View style={wrapperStyles}>
        <View
          style={process(styles1, "zdqghqgf")}
          onLayout={measure("zdqghqgf", this)}
        >
          <Text style={textStyles}>testing CSS calc() function</Text>
        </View>
        <View
          style={process(styles2, "gwbdrklb")}
          onLayout={measure("gwbdrklb", this)}
        >
          <Text style={textStyles}>testing CSS calc() function</Text>
        </View>
      </View>
    );
  }
}
