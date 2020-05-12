import React from 'react';
import {MaterialIcons} from '@expo/vector-icons'
import { View, StyleSheet,Text, Image, ImageBackground } from 'react-native';

const Header = ({navigation, title}) => {
  const openMenu = () =>{
    navigation.openDrawer()
  }

  return (
    <View style={styles.header}> 
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../assets/heart_logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    letterSpacing: 2,
  },
  icon: {
    color: 'white'
  },
  logo: {
    width:26,
    height: 26,
    marginHorizontal: 10
  }
})

export default Header;