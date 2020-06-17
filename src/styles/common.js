import { colors } from './colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.bg,
    flex: 1,
  },
  text: {
    fontSize: 17,
    color: colors.dark,
  },
  link: {
    fontSize: 21,
    color: colors.primary,
  },
});


export {
  styles,
};
