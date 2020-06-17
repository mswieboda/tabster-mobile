import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  Text,
} from 'react-native';
import { styles } from '../styles/common';
import { getTab } from '../apis/tabs';

function Tab({ route, navigation }) {
  const params = route.params;

  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [tabID, setTabID] = useState(null);
  const [artist, setArtist] = useState(null);
  const [createdByUsername, setCreatedByUsername] = useState(null);
  const [tab, setTab] = useState(null);
  const [title, setTitle] = useState(null);

  const [error, setError] = useState(null);

  const sameTabLoaded = (artist, title, params) => {
    if (!artist || !title || !params.artist || !params.title) return false;

    function toLowerURL(artistName, title) {
      return `${artistName}/${title}`.toLowerCase();
    }

    return toLowerURL(artist.name, title) === toLowerURL(params.artist, params.title);
  };

  useEffect(function loadTab() {
    if (loading || error || (loaded && sameTabLoaded(artist, title, params))) {
      return;
    }

    if (loading || error || loaded) return;

    setLoading(true);

    getTab(params.artist, params.title).then(response => {
      const data = response.data;

      setTabID(data.id);
      setArtist(data.artist);
      setCreatedByUsername(data.created_by_username);
      setTab(data.tab);
      setTitle(data.title);

      setLoaded(true);
      setLoading(false);
    }).catch(e => {
      const data = e.response && e.response.data;
      const message = data ? data.message : e.message;

      setError(message);
      console.log(message);

      setLoaded(true);
      setLoading(false);
    });
  }, [loading, loaded, error, artist, title, params]);

  let message = null;

  if (!loaded) {
    message = "loading...";
  }

  if (error) {
    message = error;

    if (error === "Tab not found") {
      message = "No tab found.";
    }
  }

  return (
    <SafeAreaView style={styles.body}>
      {message &&
        <Text style={styles.text}>{message}</Text>
      }
      {!loading && !error && artist &&
        <>
          <Text style={styles.text}>
            <Text style={styles.link}>{title}</Text>
            <Text style={styles.text}> by </Text>
            <Text style={styles.link}>{artist && artist.name}</Text>
          </Text>
          <Text style={styles.text}>{tab}</Text>
        </>
      }
    </SafeAreaView>
  );
}

export default Tab;
