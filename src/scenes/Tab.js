import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  Text,
} from 'react-native';
import { styles } from '../styles/common';

function Tab({ route, navigation }) {
  const { title, artist } = route.params;

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.text}>
        <Text style={styles.link}>{title}</Text>
        <Text style={styles.text}> by </Text>
        <Text
          style={styles.link}
          onPress={() => {
            navigation.navigate('Tab', {
              artist: "Metallica",
              title: "Enter Sandman",
            });
          }}
        >
          {artist}
        </Text>
      </Text>
      <Text style={styles.text}>
        tab: NYI
      </Text>
      <Button
        title="go to tabs"
        onPress={() => navigation.navigate('Tabs')}
      />
    </SafeAreaView>
  );
}

export default Tab;
