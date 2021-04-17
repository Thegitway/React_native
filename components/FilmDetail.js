// Components/FilmItem.js

import React from 'react'
import {View, StyleSheet,ActivityIndicator,TouchableOpacity,Image,Button,Text} from 'react-native'
import {getImage} from '../API/TMDB'
import {connect} from 'react-redux'
import {getVideo} from '../API/TMDB'
import YoutubePlayer from "react-native-yt-player";

class FilmDetail extends React.Component {



  _toggleFavorite()
  {
    const action ={type:"FAVORITE", value:this.props.navigation.state.params.film}
    //envoie de l'action vers le store
    this.props.dispatch(action)
  }
 
  getVideos=()=>{
    getVideo(this.props.navigation.state.params.film.id).then(video=>{
      console.log(video.results[0].key)
     return video.results[0].key
  })
}
  

  _displayFavoriteImage()
  {
    var sourceImage=require("../assets/img/ic_favorite_border.png")
    if(this.props.favoritesFilm.findIndex(item=>item.id===this.props.navigation.state.params.film.id)!==-1)
    sourceImage=require("../assets/img/ic_favorite.png")
    return (
      <Image
      source={sourceImage}
      style={styles.favortieImage}/>
    )
  }
  

  componentDidUpdate()
  { 
    console.log(this.props.favoritesFilm)
  }

  // Components/FilmItem.js
render() {
  
  const value=this.props.navigation.state.params.film
  
 
  return (

    <View >
     <Image
        style={styles.image}
        source={{uri: getImage(value.poster_path)}}
      />
     <YoutubePlayer
      videoId={"vM-Bja2Gy04"}
      autoPlay
      onStart={() => console.log("onStart")}
      onEnd={() => alert("on End")}
      />
      

              <Text style={styles.title} >{value.title}</Text>

              <TouchableOpacity style={styles.favorisButton} 
      onPress={()=>this._toggleFavorite()}>
        {this._displayFavoriteImage()}
      </TouchableOpacity>

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
    
  },
  title:{
    
    fontSize:35,
    margin:10,
    fontWeight:"bold",
    
    alignSelf:"center"
  },
  description:{
    padding:10,
    
  },
  data:{fontWeight:'500',
paddingLeft:8},
favorisButton:{
  alignItems:"center"
},
favortieImage:{
  width:40,
  height:40
}


})


//connect le state de l'application avec le props du filmDetail
const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}
export default connect(mapStateToProps)(FilmDetail)