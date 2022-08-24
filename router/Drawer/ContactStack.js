import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import ContactScreen from "../../screens/ContactScreen";

/*
* Stack which makes it possible to attach additional screens available only from ContactScreen
* */

const ContactStack = createStackNavigator({
    Contact: {
        screen: ContactScreen,
        navigationOptions: {
            title: 'Kontaktiere uns!',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default ContactStack
