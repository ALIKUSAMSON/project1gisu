import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class startscreen extends React.Component {
 
    render(){
        return (
            <View style={styles.body}>
              <Text style={styles.text}>Contents</Text>
              
            </View>
    
      );
    }

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

