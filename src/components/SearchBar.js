import  React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Item, Input, Icon, Button, Header } from 'native-base';

export default class SearchBar extends Component {

    render(){
        return(
            <Header  searchBar style={styles.container}>
                <Item> 
                    <Icon name='pizza' />
                    <Input placeholder='Pesquisa' />
                    <Icon name='close'/>
                </Item>
            </Header>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        borderRadius:20,
        backgroundColor: 'white',
        elevation: 10
      }
  })