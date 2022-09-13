import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {ScrollView, StyleSheet, Text,TouchableOpacity, View} from "react-native";
import React from "react";
import colors from "../colors";

const prepareWeekday =(weekDay, navigation) => {
    const eventsArray = [];
    weekDay['Activities'].map((activity, index) =>{
            eventsArray.push(
                <View><Text style={styles.eventText}>{weekDay.dayName}</Text>
                <TouchableOpacity key={activity.name + weekDay.dayName + index} activeOpacity={0.8}
                              onPress={() => navigation.navigate('Activity', {activity: activity})}>
                <View style={styles.event} key={activity.name + weekDay.dayName}>
                    <Text style={styles.eventText}>{activity.name}</Text>
                    <Text style={styles.timeText}>{activity.startTime}</Text>
                    <Text style={styles.placeText}>{activity.place}</Text>
                </View>
            </TouchableOpacity>
            </View>
            )
    });
    return eventsArray;
}


const Program = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            console.log("Program");
            return (
                <ScrollView style={{paddingBottom: 50}}>
                    {
                        firebase.state.weekDaysArray.map((weekDay, index) => (
                            prepareWeekday(weekDay, props.navigation)
                        )
                    )}
                </ScrollView>
            )
        }}
    </Subscribe>
);


export default Program

const styles = StyleSheet.create({
    event: {
        backgroundColor: colors.white,
        width: '90%',
        height: 50,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 2,
        marginBottom: 1,
        position: 'relative',
        borderRadius: 5,
        justifyContent: 'center',
        shadowColor: colors.shadow,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 2,
    },
    passedEvent: {
        backgroundColor: colors.passedEvent,
    },
    textHeading: {
        fontSize: 17,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    eventText: {
        fontSize: 17,
        color: colors.grey,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        marginLeft: 10
    },
    timeText: {
        fontSize: 12,
        color: colors.grey,
        right: 10,
        top: 10,
        position: 'absolute'
    },
    placeText: {
        fontSize: 12,
        color: colors.grey,
        right: 10,
        position: 'absolute',
        bottom: 10,
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: colors.shadow,
        // marginTop: '2%',
        borderRadius: 5,
        width: '90%',
        marginLeft: '5%',
    },
        singleNotification: {
            backgroundColor: colors.white,
            width: '90%',
            marginLeft: '5%',
            marginTop: '3%',
            marginBottom: 5,
            // height: 60,
            // height: 300,
            // position: 'relative',
            paddingTop: '3%',
            // paddingBottom: '3%',
            borderRadius: 5,
            shadowColor: colors.shadow,
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 2,
        },

        programText: {
            fontSize: 15,
            marginLeft: '5%',
            color: colors.grey,
            textAlign: 'left',
            // textAlignVertical: 'center',
            marginTop: 15
        }/*,
        notificationsDate: {
            fontSize: 10,
            height: 15,
            marginRight: '3%',
            // marginBottom: '3%',
            color: colors.grey,
            textAlign: 'right',
            // textAlignVertical: 'center',
            marginTop: 20
        },*/
    }
);