import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import firebase from 'firebase';


const LocaisCard = ({pro}) =>(
    
    console.log(pro),
    <View style={styles.container}>
        <View style={styles.card}>
            </View>
            <View style={styles.nameLocais}>
                    <Text style={styles.TitleCard}>{`${pro.aaabbb.name}`}</Text>
         
                    <Text style={styles.SubTitleCard}>{`${pro.aaabbb.name}`}</Text>
            </View>
        </View> 
)
const styles = StyleSheet.create({
    container:{
        flex:1,
        // elevation:10,
        width: '100%',
        padding:5,
        height: Dimensions.get('window').width/2,
    },
    card: {
        flex:1,
        // backgroundColor:'blue',
        borderWidth:1,
        // elevation:0.2,
        borderRadius:10,
        height: Dimensions.get('window').width/8,
        flexDirection: 'row',
        paddingLeft: 10
    },
    foto:{
        flex:1,
        height: 100,
        width: 100,
        // borderRadius: 400/2,
        // borderWidth:1,
        alignSelf: 'center',
    },
    nameLocais:{
        flex:3,
        // borderWidth:1,
        // borderColor:'red',
        alignItems:'center',
        alignSelf:'center',
        // alignContent:'center',
        height:'100%'
    },
    TitleWrapper:{
        backgroundColor:'black',
        height: 50,
        position:'absolute',
        bottom:0,
        opacity:.8,
        width:'100%',
        paddingTop: 10,
        paddingLeft:10,
        alignItems:'center'
    },
    TitleCard:{
        // color:'blue',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20,
    },
    SubTitleCard:{
        // color:'blue',
        // fontWeight: 'bold',
        fontSize: 15,
        marginTop: 20,
    },
    isFirstColumn:{
        paddingLeft:10,
    },
    lastColumn:{
        paddingRight:10,
    }
})
export default LocaisCard;