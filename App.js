import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button,Image, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { Dimensions } from "react-native";
const win = Dimensions.get('window');
export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
       <Image style={styles.image} source={{uri:"./assets/icon.png"}}/>

       <View >
       <Text style ={styles.title}>Title</Text>
       <Text style={styles.description}>Desctiption</Text>
       </View>
       <View style={{flex:1, backgroundColor:"red"}}>
         <Text style ={styles.vote}>Vote</Text>
         <Text style={styles.vote}>tokdsjfnsqkdfjndskto</Text>
        </View>
       

      </View>
       
      

    </View>
   
  );
}

//google map 
// video bonde annonce + noter
//noter le film apres visionage 

const styles = StyleSheet.create({
  container: {
        height:'20%',
        width:'100%',
        backgroundColor:"red"
      },
      row: {
        flexDirection:"row",
        flex:1
      },
      column: {
        flex:1
      },
      image:{
        backgroundColor:"grey",
       height:'100%',
       width:'20%',
      },
      title:{
        flex:1,
        paddingLeft:10,
        fontWeight:'bold'
      },
      vote:{
        flex:1,
        paddingLeft:'70%',
       
      },
      description:{
        flex:3,
        paddingLeft:10,
        fontSize:11
      },
     
      
});
