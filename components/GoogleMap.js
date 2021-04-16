import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import React from 'react'
class GoogleMap extends React.Component {
    render(){

       
        return (
            <MapView
            style={{ flex: 1,padding:8 }}
   
            provider={PROVIDER_GOOGLE}
   
            showsUserLocation
   
            initialRegion={{
            latitude: 33.59592329733971,
            longitude:-7.668089045208418,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421}}
         >   
    <Marker
    coordinate={{ latitude : 33.59592329733971 , longitude :-7.668089045208418 }
} 
    /></MapView>)
    }}

    export default GoogleMap