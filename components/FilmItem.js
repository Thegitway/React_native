import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function FimlItem() {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
       <Image style={styles.image} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>

       <View >
       <Text style ={styles.title}>Title</Text>
       <Text style={styles.description}>Desctiption</Text>
       </View>
       <View style={{flex:1, backgroundColor:"red"}}>
         <Text style ={styles.vote}>Vote</Text>
         <Text style={styles.date}>tokdsjfnsqkdfjndskto</Text>
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
        flex:3,
        paddingLeft:'80%',
       
      },
      date:{
        flex:1,
        paddingLeft:'60%',
       
      },
      description:{
        flex:3,
        paddingLeft:10,
        fontSize:11
      },
     
      
});
