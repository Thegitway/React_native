
// Navigation/Navigation.js
import React from 'react'
import { StyleSheet, Image } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Search from '../components/Search'
import FilmDetail from '../components/FilmDetail'
import Favorie from '../components/Favorie'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Description'
    }
  }
});

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator,
    navigationOptions: {
      tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return <Image
          source={require('../assets/img/ic_search.png')}
          style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
      }
  }},
 
 
  Favorites: {
    title:'Favories',

    screen: Favorie,
    navigationOptions: {
      tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return <Image
          source={require('../assets/img/ic_favorite.png')}
          style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
      }
    }
    },
    },
      {
      tabBarOptions: {
        activeBackgroundColor: 'red', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
        showLabel: false, // On masque les titres
        showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
      }
    }
 
)


const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
export default createAppContainer(MoviesTabNavigator)