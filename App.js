import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './src/screens/Customcomponent';
import FirstTask from './src/screens/firsttask';

export default function App() {
    const myname = "vedant sen";
    const myelement = <Text>hello world i am vedant</Text>;
    const getFullName = (Firstname, Secndname, thirdname)=> {
        return `My Name is ${Firstname} ${Secndname} ${thirdname} `;
    };

    return ( 
       <View style = {styles.container} >
        <Text> hello {myname} </Text>
         <CustomComponent />
         <FirstTask/>
         {myelement}
         <Text>Hiii  {getFullName("Vedant","Sen","Here")}</Text>
         
        <StatusBar style = "auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});



// import React from "react";
// import {Text , StyleSheet} from "react-native";

// const App = () => {

//   return <Text styles={styles.textStyle}> Hello i am vedant sen here</Text>;
// };
// const styles = StyleSheet.create({
//   textStyle: {
//     color: "red",
//   },

// });

// export default App;