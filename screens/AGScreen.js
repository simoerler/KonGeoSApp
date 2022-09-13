import React from 'react';
import {Image, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import * as OpenAnything from 'react-native-openanything';
import styles from '../components/styles';
import cont_styles from '../components/cont_style';
import * as WebBrowser from 'expo-web-browser';

class AGScreen extends React.Component {

    render() {
        return (
            <ScrollView>
                <View style={{height: '90%'}}>
                    <StatusBar barStyle="light-content"/>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> AG Nachwuchs </Text>
                            <Text style={cont_styles.numberText}> Die AG Nachwuchs beschäftigt sich mit der Nachwuchsgewinnung und-förderung im Bereich der Geodäsie. So ist sie z.B für eine Erstsemestrigen Umfrage an allen KonGeoS-Hochschulen und deren Auswertung verantwortlich. Des Weiteren tauschen sich die Teilnehmer*innen über die verschiedenen Konzepte und Herangehensweisen zur Nachwuchsgewinnung und deren Erfolg aus.
</Text> 
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> AG PR </Text>
                            <Text style={cont_styles.numberText}> Die AG PR beschäftigt sich mit der Außendarstellung und der öffentlichen Werbung der KonGeoS in Politik und Wirtschaft. Weitere Themen sind der Stand der KonGeoS auf der Fachmesse INTERGEO und die Zusammenarbeit mit dem Förderverein. Außerdem ist die AG zuständig für die offizielle Website der KonGeoS.
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> AG Projekt </Text>
                            <Text style={cont_styles.numberText}>Die AG Projekt beschäftigt sich mit aktuellen Problemen und Fragestellungen rund um die KonGeoS. Themen waren beispielsweise der Zusammenschluss von ARGEOS und KonVerS oder ein Leitfaden zu Organisation von KonGeoS-Treffen.
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> AG Studium und Lehre </Text>
                            <Text style={cont_styles.numberText}>Die AG Studium und Lehre beschäftigt sich mit der Vernetzung und dem Informationsaustausch zwischen den Hochschulen und Studiengängen. Dies betrifft vor allem den Austausch über Studieninhalte, die Umsetzung des Bologna-Prozesses oder Besonderheiten der Studiengänge.
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> AG Vereine und Verbände </Text>
                            <Text style={cont_styles.numberText}>Die AG Vereine und Verbände beschäftigt sich mit den Inhalten der Vereine und Verbände der Geodäsie. Im Besonderen beschäftigt sich die AG mit den im Arbeitskreis 1 des DVB diskutierten Themen und Themen des VDV.
</Text>
                    </View>
                    

                </View>
            </ScrollView>
        )
    }
}

export default AGScreen;
