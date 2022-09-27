import {Image, ScrollView, Text, View} from "react-native";
import React from "react";
import styles from "./ActivityStyles";
import MapsDirections from "./MapsDirections"
import colors from "../colors";


const ActivityDetails = props => {
    const {navigation} = props;
    const activityDetails = navigation.getParam('activity', 'default value');
    console.log("ActivityDetails: " + activityDetails);

    let image = require('../../assets/images/Places/tu_wien.jpg');
    if (activityDetails.place === "Hauptbahnhof Wien")
        image = require('../../assets/images/Places/wien_hauptbahnhof.jpg');
    if (activityDetails.place === "Unterkunft")
        image = require('../../assets/images/Places/unterkunft.jpg');
    if (activityDetails.place === "TU Wien")
        image = require('../../assets/images/Places/tu_wien.jpg');
    if (activityDetails.place === "Fotoort")
        image = require('../../assets/images/gruppenfoto.jpg');


    return (
        <View>
            <Image
                source={image}
                style={{width: '100%', height: 180}}/>
            {/*<Text key ={activityDetails.name}> {activityDetails.name}</Text>*/}

            {/* Place & Address*/}
            <View style={styles.PlaceAddress}>
                <Text key={activityDetails.placeDetails}
                      style={styles.placeTextStyle}> {activityDetails.placeDetails} </Text>
                <Text key={activityDetails.address}
                      style={styles.addressText}> {activityDetails.address} </Text>
                <Text key={activityDetails}
                      style={styles.timeText}>{activityDetails.startTime} - {activityDetails.endTime}</Text>
            </View>

            {/* Check on Map & Map Directions buttons*/}
            <ScrollView>
                <View style={styles.button}>
                    {activityDetails.latitude &&
                    <MapsDirections DestinationLatitude={activityDetails.latitude}
                                    DestinationLongitude={activityDetails.longitude}
                                    placeName={activityDetails.place}/>}
                    {activityDetails.latitude2 && (
                        <>
                            <View style={{
                                borderWidth: 1,
                                borderColor: colors.kongeosBlue,
                                marginTop: '2%',
                                borderRadius: 5,
                                width: '90%',
                                marginLeft: '5%'
                            }}/>
                            <MapsDirections DestinationLatitude={activityDetails.latitude2}
                                            DestinationLongitude={activityDetails.longitude2}
                                            placeName={activityDetails.place2}/>
                        </>)}
                </View>

                {/*/Activities' Details*/}
                <View style={styles.activitiesDetails}>
                    <Text key={activityDetails.activityDetails}
                          style={styles.detailsText}> {activityDetails.activityDetails} </Text>
                </View>
            </ScrollView>
        </View>
    )
};

export default ActivityDetails