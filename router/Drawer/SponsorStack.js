import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import SponsorScreen from "../../screens/SponsorScreen";

/*
* Stack which makes it possible to attach additional screens available only from SponsorScreen
* */

const SponsorStack = createStackNavigator({
    Contact: {
        screen: SponsorScreen,
        navigationOptions: {
            title: 'Sponsoren',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default SponsorStack
