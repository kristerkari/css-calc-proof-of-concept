import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { process, measure, setRefs } from "./process-calc";

const styles = {
  wrapper: {
    width: "100%",
    height: 240,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  hex1: {
    width: 75,
    height: 75
  },
  hex2: {
    width: 150,
    height: 150
  },
  hex3: {
    width: 200,
    height: 200
  },
  color1: {
    backgroundColor: "#39D"
  },
  color2: {
    backgroundColor: "#93D"
  },
  color3: {
    backgroundColor: "#D93"
  },
  hexagonWrapper: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    position: "relative"
  },
  hexagon: {
    height: "100%",
    width: "calc(100% * 0.57735)",
    marginLeft: "auto",
    marginRight: "auto"
  },
  hexagonBefore: {
    position: "absolute",
    top: 0,
    right: "calc((100% / 2) - ((100% * 0.57735) / 2))",
    height: "100%",
    width: "calc(100% * 0.57735)",
    transform: [{ rotateZ: "60deg" }]
  },
  hexagonAfter: {
    position: "absolute",
    top: 0,
    right: "calc((100% / 2) - ((100% * 0.57735) / 2))",
    height: "100%",
    width: "calc(100% * 0.57735)",
    transform: [{ rotateZ: "-60deg" }]
  }
};

// these are unique references for each element.
// they can be generated with a Babel transform:
//
// "zdqghqgf"
// "gwbdrklb"

setRefs(["zdqghqgf", "lhovr", "ojvzbbjt"]);

export default class App extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={[styles.hex1, styles.hexagonWrapper]}>
          <View
            style={[styles.color1, process(styles.hexagonBefore, "zdqghqgf")]}
            onLayout={measure("zdqghqgf", this)}
          />
          <View
            style={[styles.color1, process(styles.hexagon, "zdqghqgf")]}
            onLayout={measure("zdqghqgf", this)}
          />
          <View
            style={[styles.color1, process(styles.hexagonAfter, "zdqghqgf")]}
            onLayout={measure("zdqghqgf", this)}
          />
        </View>
        <View style={[styles.hex2, styles.hexagonWrapper]}>
          <View
            style={[styles.color2, process(styles.hexagonBefore, "lhovr")]}
            onLayout={measure("lhovr", this)}
          />
          <View
            style={[styles.color2, process(styles.hexagon, "lhovr")]}
            onLayout={measure("lhovr", this)}
          />
          <View
            style={[styles.color2, process(styles.hexagonAfter, "lhovr")]}
            onLayout={measure("lhovr", this)}
          />
        </View>
        <View style={[styles.hex3, styles.hexagonWrapper]}>
          <View
            style={[styles.color3, process(styles.hexagonBefore, "ojvzbbjt")]}
            onLayout={measure("ojvzbbjt", this)}
          />
          <View
            style={[styles.color3, process(styles.hexagon, "ojvzbbjt")]}
            onLayout={measure("ojvzbbjt", this)}
          />
          <View
            style={[styles.color3, process(styles.hexagonAfter, "ojvzbbjt")]}
            onLayout={measure("ojvzbbjt", this)}
          />
        </View>
      </View>
    );
  }
}
