 import React from "react";
 import {View, Text, StyleSheet} from "react-native";

 const FirstTask = () => {
   const yourname = "vedant React native "
    return (
     <View>
       <Text style={styles.textStyleone}> vedant sen first task </Text>
       <Text style={styles.textStyletwo}> react native</Text>
       <Text style={styles.textStyle}> hello  {yourname} </Text>
     </View> 
    );
};
const styles = StyleSheet.create({
  textStyleone: {
    color: "blue",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",

  },
  textStyletwo:{
    color: "orangered",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle:{
    color: "yellow",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

});
 
export default FirstTask;
