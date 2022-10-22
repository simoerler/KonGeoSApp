import React, {Component} from 'react';
import {Image, StyleSheet, View, ActivityIndicator} from 'react-native';
import MapView , {PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location'
import colors from "../components/colors";
import {Icon} from "react-native-elements";


class MapScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            //cokolwiek: 1
        };
    }

    componentDidMount() {
        this.setState({latitude:  48.2015, longitude: 16.36741, error:null});
       /* GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            console.log("Location:" + location);
            this.setState({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                error: null})
        })
        .catch(error => {
            this.setState({latitude:  48.2015, longitude: 16.361741, error: error.message});
            const { code, message } = error;
            console.warn(code, message);
            console.log("ERROR in MAP");
        });*/
    }

    // componentWillMount() {
    //     //Hack to ensure the showsMyLocationButton is shown initially. Idea is to force a repaint
    //     setTimeout(()=>{this.setState({cokolwiek: 0})}, 500);
    // }

    render() {
        return (
            <View style={[styles.container]}>
                {this.state.latitude ?
                    <MapView
                        customMapStyle={mapStyle}
                        style={StyleSheet.absoluteFillObject}
                        provider={PROVIDER_GOOGLE}
                        mapType='standard'
                        showsScale={true}
                        showsCompass={true}
                        showsPointsOfInterest={false}
                        initialRegion={{
                            latitude:  48.195,
                            longitude: 16.352,
                            latitudeDelta: 0.08,
                            longitudeDelta: 0.07
                        }}>

                        <MapView.Marker
                            coordinate={{latitude: 48.19879240550767, longitude: 16.367422409222545}}
                            title="Freihaus TU Wien">
                            <Icon
                                name='school'
                                raised={true}
                                size={15}
                                color={colors.kongeosOrange}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.19640597839531, longitude: 16.3696721919337}}
                            title="Gußhaus TU Wien">
                            <Icon
                                name='school'
                                raised={true}
                                size={15}
                                color={colors.kongeosOrange}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.1852640, longitude: 16.3763637}}
                            title="Hauptbahnhof">
                            <Icon
                                name='train'
                                raised={true}
                                size={15}
                                color={colors.kongeosOrange}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.201574297382265, longitude: 16.362008882939314}}
                            title="Unterkunft">
                            <Icon
                                name='hotel'
                                raised={true}
                                size={15}
                                color={colors.kongeosOrange}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.20518009045662, longitude:  16.359867730646407}}
                            title="Naturhistorisches Museum Wien">
                            <Icon
                                name='museum'
                                raised={true}
                                size={15}
                                color={colors.kongeosBlue}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.19042486183227, longitude:  16.317866338307887}}
                            title="Technisches Museum Wien">
                            <Icon
                                name='museum'
                                raised={true}
                                size={15}
                                color={colors.kongeosBlue}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.208059565762625, longitude:  16.3587301487519}}
                            title="Parlament">
                            <Icon
                                name='museum'
                                raised={true}
                                size={15}
                                color={colors.kongeosBlue}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.20827478137735, longitude: 16.36834293331926}}
                            title="Time Travel Vienna">
                            <Icon
                                name='museum'
                                raised={true}
                                size={15}
                                color={colors.kongeosBlue}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.21766524714572, longitude: 16.3421124184863}}
                            title="all iN club">
                            <Icon
                                name='local-bar'
                                raised={true}
                                size={15}
                                color={colors.kongeosBlue}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.208338945585346, longitude: 16.373468607462957}}
                            title="Stephansdom">
                            <Icon
                                name='museum'
                                raised={true}
                                size={15}
                                color={colors.kongeosBlue}
                                reverse={true}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{latitude: 48.1969455289014, longitude: 16.360785301288203}}
                            title='Saurier-Unterkunft (Wombats Hostel)'>
                            <Icon
                                name='hotel'
                                raised={true}
                                size={15}
                                color={colors.kongeosOrange}
                                reverse={true}
                            />
                        </MapView.Marker>
                        

                    </MapView>
                    :
                    <ActivityIndicator size="large" color="#0000ff"/>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

const mapStyle = [
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e8f4cc"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
];

export default MapScreen;
