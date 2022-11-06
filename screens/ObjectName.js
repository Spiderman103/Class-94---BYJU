import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default class ObjectNameScreen extends Component{
    
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {{fontSize: 30, backgroundColor: "green"}}> Object Name </Text>

                <Text> </Text>
        <Text style={styles.points}>1) Name of Object: </Text>
        <Text> </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('FeedScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
            </View>
        )
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
    },
      buttons: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor:"green",
      margin: 10,
      width: 200,
      height: 50,
    }
  })

  