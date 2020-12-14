import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import firebaseConfig from './config/firebaseConfig';
import {createAppContainer} from 'react-navigation';
import RootNavigator from './router/RootNavigator';
import {Provider} from "unstated";
import {registerForPushNotificationsAsync} from "./config/registerForPushNotifications";

console.disableYellowBox = true;
// console.ignoredYellowBox = [
//     'Setting a timer'
// ];

const AppNavigatorContainer = createAppContainer(RootNavigator);

class App extends Component {
    constructor(props) {
        super(props);
        try{
           firebase.initializeApp(firebaseConfig);
        }catch(err){
            if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error', err.stack)
                }
        }
        registerForPushNotificationsAsync();
    }

    render() {
        return (
            <Provider> 
                <AppNavigatorContainer/>
            </Provider>
           
        );
    }
}

export default App
