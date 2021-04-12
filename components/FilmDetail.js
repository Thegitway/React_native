// Components/FilmItem.js

import React from 'react'
import {View, StyleSheet,Image,Text} from 'react-native'
import {getImage} from '../API/TMDB'
class FilmItem extends React.Component {
  // Components/FilmItem.js
render() {
const value=this.props.navigation.state.params.film
console.log(value)
  return (
    <View >
     <Image
        style={styles.image}
        source={{uri: getImage(value.poster_path)}}
      />
              <Text style={styles.title} >{value.title}</Text>

        <Text style={styles.description} >{value.overview}</Text>
        <Text style={styles.data} >Date de sortie: {value.release_date}</Text>
        <Text style={styles.data} >Note: {value.vote_average}</Text>
        <Text style={styles.data} >Nombre de vote: {value.vote_count}</Text>


      </View>
  )
}
}
const styles = StyleSheet.create({
  image: {
    height:190,
    flex:3
  },
  title:{
    flex:1,
    fontSize:35,
    margin:10,
    fontWeight:"bold",
    
    alignSelf:"center"
  },
  description:{
    padding:10,
    flex:4,
  },
  data:{fontWeight:'500',
paddingLeft:8}


})



export default FilmItem