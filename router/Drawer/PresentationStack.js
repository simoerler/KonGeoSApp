import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import PresentationsScreen from "../../screens/PresentationsScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const PresentationStack = createStackNavigator({
    Presentations: {
        screen: PresentationsScreen,
        navigationOptions: {
            title: 'Fachvorträge',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default PresentationStack
