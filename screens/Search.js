import React, { Component} from 'react';
import { Text, StyleSheet, View} from "react-native";


export default class SearchScreen extends Component{
render(){
    return(

        <View style={styles.container}>
        <Text style={styles.text}> Search Screen</Text>
        
        
        
        </View>
    )
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"purple",
    justifyContent: "center",
    alignItems:"center"

},
text:{
    color: "black",
    fontSize:100
    


}


})