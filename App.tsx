/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.scrollView}>
          <SafeAreaView>
            <View style={styles.buttons}>
              <TouchableHighlight onPress={() => console.log('React Native TouchableHighlight pressed')}>
                <Text>React Native</Text>
              </TouchableHighlight>
              </View>
          </SafeAreaView>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  buttons: {
    margin: 48
  }
});

export default App;
