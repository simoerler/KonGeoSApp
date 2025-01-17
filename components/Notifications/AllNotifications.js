import {Subscribe} from "unstated";
import {FirebaseContainer} from "../FirebaseContainer/FirebaseContainer";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";
import colors from "../colors";

const AllNotifications = props => (
    <Subscribe to={[FirebaseContainer]}>
        {firebase => {
            return (
                <ScrollView style={{paddingBottom: 50}}>
                    {
                        Object.entries(firebase.state.notificationsArray).map((notification, index) => (
                            <View style={styles.singleNotification} key={index}>
                                <View style={styles.lineStyle}/>
                                <Text style={styles.notificationsText}>{notification[1].content}</Text>
                                <Text style={styles.notificationsDate}>{notification[1].date}</Text>
                            </View>
                        )
                    )}
                </ScrollView>
            )
        }}
    </Subscribe>
);

export default AllNotifications

const styles = StyleSheet.create({
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

        lineStyle: {
            borderWidth: 1,
            borderColor: colors.kongeosBlue,
            marginTop: '2%',
            borderRadius: 5,
            width: '90%',
            marginLeft: '5%',
        },
        notificationsText: {
            fontSize: 15,
            marginLeft: '5%',
            color: colors.grey,
            textAlign: 'left',
            // textAlignVertical: 'center',
            marginTop: 15
        },
        notificationsDate: {
            fontSize: 10,
            height: 15,
            marginRight: '3%',
            // marginBottom: '3%',
            color: colors.grey,
            textAlign: 'right',
            // textAlignVertical: 'center',
            marginTop: 20
        },
    }
);