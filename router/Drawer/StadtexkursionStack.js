import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import StadtexkursionScreen from "../../screens/StadtexkursionScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const StadtexkursionStack = createStackNavigator({
    Stadtexkursion: {
        screen: StadtexkursionScreen,
        navigationOptions: {
            title: 'Fachexkursionen',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default StadtexkursionStack
