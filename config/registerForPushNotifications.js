import * as Notifications from 'expo-notifications';
import * as firebase from "firebase";
import NotificationsScreen from '../screens/NotificationsScreen';

export async function registerForPushNotificationsAsync() {
    console.log("I'm registering");
    const {status: existingStatus} = await Notifications.requestPermissionsAsync();
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
        // Android remote notification permissions are granted during the app
        // install, so this will only ask on iOS
        const {status} = await Notifications.getPermissionsAsync();//Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
        console.log("PERMISSION IS NOT GRANTED");
    }
    console.log("PERMISSION IS GRANTED");

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
        return;
    }

    // Get the token that uniquely identifies this device
    const token = await Notifications.getExpoPushTokenAsync();
    const tokenNumber = token.data.slice(18, 40);
    // POST the token to our backend so we can use it to send pushes from there
    const updates = {};
    updates['/' + tokenNumber] = token;
    await firebase.database().ref('/usersTokens/').update(updates);
}