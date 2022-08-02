import {Container} from "unstated";
import * as firebase from "firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

require("firebase/database");

export class FirebaseContainer extends Container {
    state = {
        weekDaysArray: [],
        message: "",
        notificationsArray: [],
        presentationsArray: [],
        postersArray: []
    };

    constructor() {
        super();
        //this.loadLocalDataCopy();
        this.connectToFirebase();
    }

    //============================================
   /* loadLocalDataCopy = async () => {
            const weekDaysData = await AsyncStorage.getItem("/weekDaysArray");
           // const messageData = await AsyncStorage.getItem('message');
            //const notificationsData = await AsyncStorage.getItem('notificationsArray');
            //const presentationsData = await AsyncStorage.getItem('presentationsArray');
            //const postersData = await AsyncStorage.getItem('postersArray');

            if(weekDaysData)
                console.log("HERE I AM");
                this.setState({
                    weekDaysArray: JSON.parse(weekDaysData),
                    //message: JSON.parse(messageData),
                    //notificationsArray: JSON.parse(notificationsData),
                   // presentationsArray: JSON.parse(presentationsData),
                   // postersArray: JSON.parse(postersData),
                });
    };*/

    connectToFirebase = () => {
        console.log("I AM HERE!!!");
        //var ref = ;
        /*ref.on("value", function(snapshot) {
            console.log(snapshot.val());
         }, function (error) {
            console.log("Error: " + error.code);
         });*/

        
         firebase.database().ref("/message/message").on("value", snap => {
            this.setState({
                message: snap.val()
            });
            console.log(snap.val());
            console.log("I AM also HERE!!!");
        AsyncStorage.setItem('message', JSON.stringify(snap.val()), (e) => {console.log(e)} );
        }
        );
        console.log("I AM HERE as well !!!");
       
       
        firebase.database().ref('/Zeitplan/').on("value", snap => {
                this.setState({
                    weekDaysArray: snap.val()
                });
                console.log(snap.val());
                console.log("hierhierhier");
            AsyncStorage.setItem('weekDaysArray', JSON.stringify(snap.val()), (e) => {console.log(e)} );
            }
        );
        console.log("hier");

       /* firebase.database().ref('message').on('value', snap => {
                this.setState({
                    message: snap.val()
                });
            AsyncStorage.setItem('message', JSON.stringify(snap.val()));
            }
        );*/

        firebase.database().ref('notifications').on('value', snap => {
            this.setState({
                notificationsArray: snap.val()
            });
            AsyncStorage.setItem('notificationsArray', JSON.stringify(snap.val()));
        });

       /* firebase.database().ref('posters').on('value', snap => {
            this.setState({
                postersArray: snap.val()
            });
            AsyncStorage.setItem('postersArray', JSON.stringify(snap.val()));
        });

        firebase.database().ref('presentations').on('value', snap => {
            this.setState({
                presentationsArray: snap.val()
            });
            AsyncStorage.setItem('presentationsArray', JSON.stringify(snap.val()));
        })*/
    };
}