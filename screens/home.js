import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Searchbar from '../components/searchbar';

function HomeScreen() {
  return (
    <View style={homeStyles.body}>
      <View style={homeStyles.header}>
        <View style={homeStyles.headerColA}>
          <Text style={{fontSize: 33, color: 'white', fontWeight: 'bold'}}>Discover Events</Text>
        </View>
        <View style={homeStyles.headerColB}>
          <TouchableOpacity>
            <Image style={{marginHorizontal: 20, width: 17, height: 20, marginTop: 2}} source={require('../assets/bell.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{width: 23, height: 23}} source={require('../assets/cog.png')}/>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        
      </View>
    </View>
  );
}

const homeStyles = StyleSheet.create({
  body: {
    backgroundColor: '#030303',
    height: '100%'
  },
  text: {
    color: 'white',
    fontSize: 24
  },
  header: {
    backgroundColor: 'transparent',
    heigh: 100,
    width: '100%',
    flexDirection: 'row'
  },
  headerColA: {
    backgroundColor: 'transparent',
    width: '70%',
    height: 100,
    justifyContent: 'center',
    paddingTop: 38,
    paddingHorizontal: 16
  },
  headerColB: {
    backgroundColor: 'transparent',
    width: '30%',
    height: 100,
    justifyContent: 'center',
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})

export default HomeScreen