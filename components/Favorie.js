// Components/Favorites.js

import React from 'react'
import { StyleSheet,FlatList,View} from 'react-native'
import FilmItem from './FilmItem'
import {connect} from 'react-redux'

class Favorie extends React.Component {

    _displayDetailForFilm = (movie) => {
        console.log("Display film with id "+movie.id)
        this.props.navigation.navigate("FilmDetail", { film: movie })
      }

  render() {

    return (
        <View style={{paddingTop:50}}>
        <FlatList
        data={this.props.favoritesFilm}
          keyExtractor={(item)=>item.id.toString()}
        renderItem={({item}) =>(<FilmItem  
          isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false} 
          displayDetailForFilm={this._displayDetailForFilm} 
          film={item} 
        >
        </FilmItem>
       
        )}/>
         </View>
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
    return {
      favoritesFilm: state.favoritesFilm
    }
  }
  export default connect(mapStateToProps)(Favorie)
