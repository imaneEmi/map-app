import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants';
import * as Location from 'expo-location';

const height = Dimensions.get('window').height 

const Map = () => {
    const [location, setLocation] = useState({
        latitude: 0, longitude: 0, latitudeDelta: 0.015,
        longitudeDelta: 0.0121
    });
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let locationJson = await Location.getCurrentPositionAsync({});
            console.log(locationJson.coords.latitude)
            setLocation({
                latitude: locationJson.coords.latitude,
                longitude: locationJson.coords.longitude,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009
            });
        })();
    }, []);

    return (
        <MapView
            style={styles.map}
            loadingEnabled={true}
            region={location}
        >
            <MapView.Marker
                coordinate={location}
                title={'Current Position'}
                description={''}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height
    }
})

export default Map