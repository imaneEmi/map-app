import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
    // const [location, setLocation] = useState(null);
    // const [errorMsg, setErrorMsg] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //       let { status } = await Location.requestForegroundPermissionsAsync();
    //       if (status !== 'granted') {
    //         setErrorMsg('Permission to access location was denied');
    //         return;
    //       }
    
    //       let location = await Location.getCurrentPositionAsync({});
    //       setLocation(location);
    //     })();
    //   }, []);

    

    return (
        <MapView 
        style={styles.map} 
        loadingEnabled={true}
        region={{
            //location
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeeDelta: 0.0121
        }}
        >
            <MapView.Marker 
            coordinate={{
                //location
                latitude: 37.78825,
                longitude: -122.4324,
            }}
            title={'Title 1'}
            description={'Description 1'}
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