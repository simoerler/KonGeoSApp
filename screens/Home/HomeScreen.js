import React from 'react'
import {StatusBar, Button,View} from 'react-native';
import TimetablePager from "../../components/Home/TimetablePager";
import MainNotification from "../../components/Home/MainNotification";

// function HomeScreen({ navigation }) {
//     return (
//         <View>
//             <StatusBar barStyle="light-content"/>
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                <Button
//                  onPress={() => navigation.navigate('Notifications')}
//                  title="Go to notifications"
//                 />
//             </View>
//       </View>
//     );
//   }

//   export default HomeScreen;

 const HomeScreen = props => {
     return (
         <View>
             <StatusBar barStyle="light-content"/>
             <View style={{height: '97%', marginTop: '3%'} }>
                 <MainNotification navigation={props.navigation}/>
             </View>
         </View>
     )
 };


 
//                 <MainNotification navigation={props.navigation}/>
//                 <TimetablePager navigation={props.navigation}/>
// const style = {
//     view:{
//         height: '97%',
//         marginTop: '3%'
//     }
// };

 export default HomeScreen;