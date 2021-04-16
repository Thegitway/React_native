
// Navigation/Navigation.js

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
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'description'
    }
  }
});

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator
  },
  Favorites: {
    screen: Favorie
  }
});

export default createAppContainer(MoviesTabNavigator)