import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/common';
import { getNewest } from '../apis/tabs';
import TabList from '../components/TabList';

function Tabs({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    if (loaded || loading) {
      return;
    }

    setLoading(true);

    getNewest().then(response => {
      setTabs(response.data);

      setLoaded(true);
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoaded(true);
      setLoading(false);
      setError(error.message);
    });
  }, [loaded, loading]);

  if (!loaded) {
    return <Text>loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.body}>
      <TabList
        navigation={navigation}
        tabs={tabs}
        renderTabText={tab => `${tab.artist} - ${tab.title}`}
      />
    </View>
  );
}

export default Tabs;
