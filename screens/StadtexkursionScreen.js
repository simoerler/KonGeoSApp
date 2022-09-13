import React from 'react';
import {StatusBar,ScrollView, Text, View} from 'react-native';
import styles from '../components/styles';
import cont_styles from '../components/cont_style';

class StadtexkursionScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={{height: '90%'}}>
                    <StatusBar barStyle="light-content"/>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Innenstadt Führung </Text>
                            <Text style={cont_styles.numberText}> Die Innere Stadt (1. Bezirk) umfasst das historische Zentrum von Wien (seit 2001 UNESCO-Weltkulturerbe) und ist gleichzeitig auch geschäftliches und verwaltungstechnisches Zentrum der Stadt.
</Text> 
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Parlamentsführung </Text>
                            <Text style={cont_styles.numberText}> Die Führung findet in der Hofburg statt mit Informationen über die bisherige Verwendung und derzeitigen Nutzung der Säle durch National- und Bundesrat, sowie der Gesetzgebung und Sanierung des Parlaments.
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Time Travel </Text>
                            <Text style={cont_styles.numberText}>Eine Zeitreise im 5D-Kino in den Gewölben des Klosters St. Michael versetzt Besucher in die Zeit des römischen Wiens, Pest, zweiten Türkenbelagerung, Habsburger-Show, beiden Weltkriege, Unterzeichnung des Staatsvertrages und interaktive Fiakerfahrt durch Wien.
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}> Katakomben (Stephansdom) </Text>
                            <Text style={cont_styles.numberText}>Eine Führung in die Katakomben unterhalb des Stephansdoms.
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}>Naturhistorisches Museum </Text>
                            <Text style={cont_styles.numberText}>Das Naturhistorische Museum ist eines der prachtvollsten Gebäude der Wiener Ringstraße und beherbergt eine der größten und traditionsreichsten Naturaliensammlungen der Welt.
</Text>
                    </View>

                    <View style={styles.whiteBigContainer}>
                            <Text style={cont_styles.nameText}>Technisches Museum </Text>
                            <Text style={cont_styles.numberText}>Das Technische Museum Wien ist eine Welt für sich mit vielen interaktiven Objekten.
</Text>
                    </View>
                    

                </View>
            </ScrollView>
        )
    }
}

export default StadtexkursionScreen;