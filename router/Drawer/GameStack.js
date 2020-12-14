import {createStackNavigator} from "react-navigation-stack";
import React from "react";
import {headerNavigationOptions} from "../routerTools";
import PostersScreen from "../../screens/PostersScreen";
import HomeScreen from "../../hannovergame/HomeScreen";
import Introduction from "../../hannovergame/Introduction";
import QRScanner from "../../hannovergame/QRScanner";
import GameScreen from "../../hannovergame/GameScreen";
import WinnerScreen from "../../hannovergame/WinnerScreen";
import TreasureScreen from "../../hannovergame/TreasureScreen";
import RulesScreen from "../../hannovergame/RulesScreen";
import ScenarioScreen from "../../hannovergame/ScenarioScreen";

/*
* Stack which makes it possible to attach additional screens available only from MapScreen
* */

const GameStack = createStackNavigator({
    // Posters: {
    //     screen: PostersScreen,
    //     navigationOptions: {
    //         title: 'Posters',
    //     }
    // },
    HomeScreen: {screen: HomeScreen},
    Introduction: {screen: Introduction},
    QRScanner: {screen: QRScanner},
    GameScreen: {screen: GameScreen},
    WinnerScreen: {screen: WinnerScreen},
    TreasureScreen: {screen: TreasureScreen},
    RulesScreen: {screen: RulesScreen},
    ScenarioScreen: {screen: ScenarioScreen}

}, {
    defaultNavigationOptions: headerNavigationOptions
});

export default GameStack