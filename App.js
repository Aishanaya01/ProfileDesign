import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}></View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image style={{height:100, width:160, marginTop:-250,borderRadius:140}} source={require('./assets/profile.jpg')}/>
        <Text style={{maxWidth:200}}>"Software Developer" </Text>
      </View>
      <View style={styles.details_container}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Aishanaya Shukla</Text>
        </View>
        <View style={styles.item}>
        <Text style={styles.label}>City:</Text>
          <Text style={styles.data}>Kanpur</Text>
        </View>
        <View style={styles.item}>
        <Text style={styles.label}>Fav Color:</Text>
          <Text style={styles.data}>Black</Text>
        </View>
        <View style={styles.item}>
        <Text style={styles.label}>Job:</Text>
          <Text style={styles.data}>Fronend Developer</Text>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    
  },
  avatar_container:{
    justifyContent:'center',
    alignItems:'center',
    flex:0.4
  },
  details_container:{
    backgroundColor:'white',
    flex:0.6,
  },
  item:{
   
    borderBottomWidth:1,
    borderBottomColor:'black',
    flex:0.25,
    flexDirection:'row',
    paddingHorizontal:20,
    alignItems:'center',
  },
  label:{
    flex:0.9,
    color:'orange',
    fontSize:29,
  },
  data:{
    fontSize:25,

  }
});
