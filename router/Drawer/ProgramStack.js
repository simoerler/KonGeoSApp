import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import ProgramScreen from "../../screens/ProgramScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const ProgramStack = createStackNavigator({
    Program: {
        screen: ProgramScreen,
        navigationOptions: {
            title: 'Programm',
        }
    },
}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default ProgramStack