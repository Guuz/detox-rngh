/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import {TouchableHighlight as RNGHTouchableHighlight, RectButton} from 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const [taps, setTaps] = React.useState<string[]>([])

  function addTap(tapName: string) {
    setTaps((taps) => [...taps, tapName])
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.scrollView}>
          <SafeAreaView>
            <View style={styles.buttons}>

              <TouchableHighlight onPress={() => addTap('React Native TouchableHighlight pressed')}>
                <Text>React Native</Text>
              </TouchableHighlight>

              <Button title="React Native Button" onPress={() => addTap('React Native Button pressed')} />

              <RNGHTouchableHighlight onPress={() => addTap('React Native RNGHTouchableHighlight pressed')}>
                <Text>React Native Gesture Handler</Text>
              </RNGHTouchableHighlight>

              <RectButton onPress={() => addTap('RectButton pressed')}>
                <Text>RectButton</Text>
              </RectButton>

            </View>
            <View style={styles.buttons}>
              {taps.map((tap, i) => <Text key={i}>{tap}</Text>)}
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
