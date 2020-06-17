import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { styles } from '../styles/common';

function Tabs({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>
        newest tabs
      </Text>
      <Text
        style={styles.link}
        onPress={() => {
          navigation.navigate('Tab', {
            artist: "Charli XCX",
            title: "claws",
          });
        }}
      >
        Charli XCX - claws
      </Text>
      <Text
        style={styles.link}
        onPress={() => {
          navigation.navigate('Tab', {
            artist: "Metallica",
            title: "Enter Sandman",
          });
        }}
      >
        Metallica - Enter Sandman
      </Text>
    </SafeAreaView>
  );
}

export default Tabs;
