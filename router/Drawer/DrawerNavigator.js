import { createDrawerNavigator } from 'react-navigation-drawer';
import {Icon} from "react-native-elements";
import ActivityScreen from "../../screens/Home/ActivityScreen";
import colors from "../../components/colors";
import React from "react";
import HomeStack from "./HomeStack";
import ContactStack from "./ContactStack";
import MapStack from "./MapStack";
import NotificationsStack from "./NotificationsStack";
import ProgramStack from "./ProgramStack";
import PresentationStack from "./PresentationStack";
import StadtexkursionStack from "./StadtexkursionStack";
import AGStack from "./AGStack";
import SponsorStack from "./SponsorStack";
//import GameStack from "./GameStack";


/*
* Core of navigation.
* Contains single screens or stacks for elements with multiple screens.
* */

const DrawerNavigator = createDrawerNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                drawerLabel: 'Hi KonGeoS Wien!',
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
        Map: {
            screen: MapStack,
            navigationOptions: {
                drawerLabel: 'KonGeoS Karte',
                drawerIcon: <Icon name='map'/>
            }
        },
        Notifications: {
            screen: NotificationsStack,
            navigationOptions: {
                drawerLabel: 'Benachrichtigungen',
                drawerIcon: <Icon name='bell' type='octicon'/>
            }
        },

        Stadtexkursionen: {
            screen: StadtexkursionStack,
            navigationOptions: {
                drawerLabel: 'Stadtexkursionen',
                drawerIcon: <Icon name='bank' type='material-community'/>
            }
        },
        Presentations: {
            screen: PresentationStack,
            navigationOptions: {
                drawerLabel: 'Fachexkursionen',
                drawerIcon: <Icon name='traffic-cone' type='material-community'/>
            }
        },

        AGs: {
            screen: AGStack,
            navigationOptions: {
                drawerLabel: 'AGs',
                drawerIcon: <Icon name='presentation' type='material-community'/>
            }
        },

        Sponsoren: {
            screen: SponsorStack,
            navigationOptions: {
                drawerLabel: 'Sponsoren',
                drawerIcon: <Icon name='currency-eur' type='material-community'/>
            }
        },

        Program: {
            screen: ProgramStack,
            navigationOptions: {
                drawerLabel: 'Programm',
                drawerIcon: <Icon name='videogame-asset' type='material'/>
            }
        },

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
