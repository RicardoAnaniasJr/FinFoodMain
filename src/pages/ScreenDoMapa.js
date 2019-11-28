import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Footer, FooterTab, Button, Header, Root, Icon } from 'native-base';
import MapClass from './MapClass';
import SearchBar from '../components/SearchBar';


export default class ScreenDoMapa extends Component {
  render() {
    return (
      <Container>
        <MapClass />
        <SearchBar />
        <View style={styles.fo2}>
          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name='home' />
                <Text>Home</Text>
              </Button>
              <Button vertical
                onPress={() => this.props.navigation.replace('ProxLocal')}
              >
                <Icon name='beer' />
                <Text>Meus Locais</Text>
              </Button>
              <Button vertical>
                <Icon name='search' />
                <Text>Lista</Text>
              </Button>
              <Button vertical onPress={() => this.props.navigation.replace('Perfil')}>
                <Icon name='person' />
                <Text>Perfil</Text>
              </Button>
            </FooterTab>
          </Footer>
        </View>
      </Container>
    )
  }


}
const styles = StyleSheet.create({
  fo2: {
    flex: 1,
    paddingVertical: 465,
  }
})
