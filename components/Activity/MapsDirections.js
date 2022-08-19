import getDirections from 'react-native-google-maps-directions'
import {View, Text} from 'react-native';
import React, { Component } from 'react';
import {Button} from "react-native-elements";
import GetLocation from 'react-native-get-location'
import colors from "../colors";
import styles from "./ActivityStyles";


export default class MapsDirections extends Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }
    componentDidMount() {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            console.log("Location: "+ location);
            this.setState({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                error: null,})
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        });
    }

    handleGetDirections = () => {
        const data = {
            source: {
                latitude: this.state.latitude,
                longitude: this.state.longitude
            },
            destination: {
                latitude: this.props.DestinationLatitude,
                longitude: this.props.DestinationLongitude
            },
            params: [
                {
                    key: "travelmode",
                    value: "transit"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ]
        };
        getDirections(data)
    };

    render() {
        return (
            <View >
                {this.props.placeName && <Text style={styles.detailsText}>{this.props.placeName}</Text>}
                <Button
                    onPress={this.handleGetDirections}
                    icon={{
                        size: 26,
                        name: 'location',
                        type: 'octicon',
                        color: colors.kongeosBlue,
                    }}
                    title="Get Directions"
                    type="clear"
                    titleStyle={{ color: colors.kongeosBlue, fontSize: 17 }}
                />
            </View>
        );
    }
}