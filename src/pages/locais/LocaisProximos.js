import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LocaisCard from '../../components/LocaisCard';

  export default class LocaisProximos extends Component {
    constructor(props){
      super(props);
      this.state = {
        pro:[],
      }
    }
    

  render(){
    console.log(this.state.pro)
    return(
      <View style={styles.container}>
      <View style={styles.fLat}>
        <Text>{`${this.state.pro}`}</Text>
       <FlatList
              data={this.state.pro}
              renderItem={({ item }) => (
               <LocaisCard data={item}
               />
              )}
              keyExtractor={item => item.id}
              numColumns={2}
            />  
      </View>
    {/* <Text>1515151515</Text> */}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  fLat:{
    // flex:1
  },
  haeder:{
    // flex:1,
    height: 90,
    backgroundColor: 'black'
    
  },  
})