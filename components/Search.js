
import React from 'react'
import { FlatList,StyleSheet, View, TextInput,ActivityIndicator, Button} from 'react-native'
import FilmItem from '../components/FilmItem.js';
import {getFilm} from '../API/TMDB'
import {connect} from 'react-redux'

class Search extends React.Component {
    constructor(props)
    {
      super(props)
      this.page=0
      this.totalPage=0
      this.state={films:[],
    isLoading:false
}  
      this.searchText=""
    }

    _displayDetailForFilm = (movie) => {
      console.log("Display film with id "+movie.id)
      this.props.navigation.navigate("FilmDetail", { film: movie })
    }

    getFilms=()=>{
        this.setState({isLoading:true})
        getFilm(this.searchText,this.page+1).then(movie=>
            {this.page=movie.page
                this.totalPage=movie.total_pages 
                this.setState({films:[...this.state.films,...movie.results],isLoading:false})

    })

}

_searchFilms=()=> {
    this.page = 0
    this.totalPage = 0
    this.setState({
      films: [],
    }, () => { 
        console.log("Page : " + this.page + " / TotalPages : " + this.totalPage + " / Nombre de films : " + this.state.films.length)
        this.getFilms() 
    })
}

  loadingScreen()
  {
      if (this.state.isLoading)
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          </View>
      )
  }

updateText(text)
{
    this.searchText=text
}

render() {
  return (
    <View>
        <TextInput onSubmitEditing={()=> this._searchFilms()} onChangeText={(text)=> this.updateText(text)} style={styles.container} placeholder='Title of the movie'>
            </TextInput><View style={styles.buttons}>
                <Button onPress={()=> this._searchFilms()} color="red" title='Search'>
                    </Button>
                    </View>
                    <FlatList
  data={this.state.films}
  extraData={this.props.favoritesFilm}
    keyExtractor={(item)=>item.id.toString()}
  onEndReachedThreshold={0.5}
  onEndReached={()=>{
    if(this.page<this.totalPage)
    this.getFilms()
  }}
  renderItem={({item}) =>(<FilmItem  
    isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false} 
    displayDetailForFilm={this._displayDetailForFilm} 
    film={item} 
  >
  </FilmItem>
  
  )}
  
 /* onEndReachedThreshold={0.5}
  onEndReached={()=>{
    if(this.page<this.totalPage)
    {
     
        this.getFilms()
        console.log("get le film ="+this.page+" / "+this.totalPage)

    }
}}*//>
  { this.loadingScreen()}
  </View>
 
  )
}
}

const styles = StyleSheet.create({
  container: {
    
    height: 40,
    borderColor:'black',
    margin:8,
    padding:10,
    borderWidth:2,
    flexDirection: 'row',
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 200,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
buttons:{
    width:"50%",
    margin:10,
    alignSelf:'center'
}})


//connect le state de l'application avec le props du search
const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}
export default connect(mapStateToProps)(Search)
