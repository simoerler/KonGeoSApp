import { createDrawerNavigator } from 'react-navigation-drawer';
import {Icon} from "react-native-elements";
import ActivityScreen from "../../screens/Home/ActivityScreen";
import colors from "../../components/colors";
import React from "react";
import HomeStack from "./HomeStack";
import ContactStack from "./ContactStack";
//import MapStack from "./MapStack";
import NotificationsStack from "./NotificationsStack";
import PostersStack from "./PostersStack";
import PresentationStack from "./PresentationStack";
//import GameStack from "./GameStack";


/*
* Core of navigation.
* Contains single screens or stacks for elements with multiple screens.
* */

const DrawerNavigator = createDrawerNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                drawerLabel: 'Hi KonGeoS 2021!',
                drawerIcon: <Icon name='home' type='octicon'/>
            }
        },
        Contact:
            {
                screen: ContactStack,
                navigationOptions: {
                    drawerLabel: 'Kontakt',
                    drawerIcon: <Icon name='phone'/>
                }
            },
        /*Map: {
            screen: MapStack,
            navigationOptions: {
                drawerLabel: 'KonGeoS map',
                drawerIcon: <Icon name='map'/>
            }
        },*/
        Notifications: {
            screen: NotificationsStack,
            navigationOptions: {
                drawerLabel: 'Benachrichtigungen',
                drawerIcon: <Icon name='bell' type='octicon'/>
            }
        },

        Presentations: {
            screen: PresentationStack,
            navigationOptions: {
                drawerLabel: 'Presentations',
                drawerIcon: <Icon name='presentation' type='material-community'/>
            }
        },

        /*Posters: {
            screen: PostersStack,
            navigationOptions: {
                drawerLabel: 'Posters',
                drawerIcon: <Icon name='file' type='octicon'/>
            }
        },*/

        /*CityGame: {
            screen: GameStack,
            navigationOptions: {
                drawerLabel: 'City Game',
                drawerIcon: <Icon name='videogame-asset' type='material'/>
            }
        },*/

        Activity: {
            screen: ActivityScreen,
            navigationOptions: {
                drawerLabel: () => null,
            }
        },

    }, {
        contentOptions: {
            activeTintColor: colors.kongeosOrange,
        },
    }
);

export default DrawerNavigator