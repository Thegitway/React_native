// Components/FilmItem.js

import React from 'react'
import {View,Text} from 'react-native'

class FilmItem extends React.Component {
  // Components/FilmItem.js
render() {
const value=this.props.navigation.state.params.idFilm
  return (
    <View >
        <Text>Detail du film {value}</Text>
      </View>
  )
}
}



export default FilmItem