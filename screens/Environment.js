import React, {Component} from "react";
import {View, Text,StyleSheet, TouchableOpacity} from "react-native";

export default class EnvironmentScreen extends Component{
   

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {{
                    fontSize: 30,
                    backgroundColor: "yellow"
                }}> Environment </Text>

        <Text> </Text>
        <Text style={styles.points}>1) Is this Object Hurting the Environment (Answer with Yes or No): </Text>
        <Text> </Text>
     

        <TouchableOpacity style = {styles.Buttons}
            onPress = {() => this.props.navigation.navigate("FeedScreen")}        
        >
            <Text style = {{fontSize: 20, color: "white"}}> Back </Text>
        </TouchableOpacity>
            </View>
            
            
        );
    }
}

const styles = StyleSheet.create({
    container:{ 
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: 100 
      },
    points:{
      fontSize: 20
    },  buttons: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor:"red",
      margin: 10,
      width: 200,
      height: 50,
    }
  })