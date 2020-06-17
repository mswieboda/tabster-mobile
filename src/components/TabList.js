import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/common';

function TabList({tabs, renderTabText, renderEmpty, navigation}) {
  if (!tabs) return(<p>loading...</p>);
  if (!tabs.length && renderEmpty) return renderEmpty();

  return(
    <View>
      {tabs.map((tab, index) => {
        return (
          <Text
            key={index}
            artist={tab.artist}
            title={tab.title}
            style={styles.link}
            onPress={() => {
              navigation.navigate('Tab', {
                artist: tab.artist,
                title: tab.title,
              });
            }}
          >
            {renderTabText && renderTabText(tab)}
            {!renderTabText && tab.title}
          </Text>
        );
      })}
    </View>
  );
}

export default TabList;
