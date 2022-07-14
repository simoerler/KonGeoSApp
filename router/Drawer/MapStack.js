import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import MapScreen from "../../screens/MapScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const MapStack = createStackNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions: {
            title: 'KonGeoS Wien Karte',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default MapStack
