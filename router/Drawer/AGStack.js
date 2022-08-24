import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import AGScreen from "../../screens/AGScreen";

/*
* Stack which makes it possible to attach additional screens available only from AGScreen
* */

const AGStack = createStackNavigator({
    Contact: {
        screen: AGScreen,
        navigationOptions: {
            title: 'Arbeitsgruppen',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default AGStack
