import React from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';

export default class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>   
      <Text style={styles.starttext}>Nutrifit</Text>
      <Text style={styles.slogan}>live long</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ff6900'
  },
  starttext:{
    fontSize:40,
    color:'white',
    fontWeight: 'bold'
  },
  slogan: {
    color:'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
});