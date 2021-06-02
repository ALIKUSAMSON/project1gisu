  import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  return (
        <View style={styles.body}>
          <Text style={styles.text}>COVID-LIGHT</Text>
          <Text>fight covid 19</Text>
        </View>

  );
};

const styles = StyleSheet.create({
body:{
  flex:1,
  alignItems:'center',
  backgroundColor:'grey',
  justifyContent:'center',
},
text:{
  fontSize:45,
  fontWeight:'bold',
  alignItems:'center',
  justifyContent:'center',
  color:'pink',
},
});

export default App;
