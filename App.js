import React from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import WebView from 'react-native-webview'

const data = [
  {
    text: '',
    image: require('./assets/1.jpeg'),
  },
  {
    text: '',
    image: require('./assets/2.jpeg'),
  },
  {
    text: '',
    image: require('./assets/3.jpeg'),
  },
];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    color: '#000',
    marginTop: 92,
    fontSize:30,
    textAlign: 'center',
  },
});

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    }
  }

  _renderItem = ({ item }) => {
    return (
      <ImageBackground style={styles.slide} source={item.image}>
        <Text style={styles.text}>{item.text}</Text>
      </ImageBackground>
    );
  };

  _keyExtractor = (item) => item.text;

  _onDone = () => {
    this.setState({ showRealApp: true });
  }

  render() {
    const { showRealApp } = this.state
    if (showRealApp) {
      return (<WebView
        source={{ uri: 'https://doctorsonlineapp.org' }}
      />)
    } else {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onDone={this._onDone}
            data={data}
          />
        </View>
      );
    }
  }
}