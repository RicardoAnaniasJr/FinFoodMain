import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FinFood from './src/pages/FinFood';
import LocaisProximos from './src/pages/locais/LocaisProximos'
import ScreenDoMapa from './src/pages/ScreenDoMapa';
import cadEstabelecimento from './src/pages/cadastro/cadEstabelecimento';
import CadPessoa from './src/pages/cadastro/CadPessoa';
import Perfil from './src/pages/perfil/perfil'



const AppNavigator = createStackNavigator({
  'Home': {
    screen: FinFood,
    navigationOptions: {
      headerTransparent: 'false'
    },
  },

  'ProxLocal': {
    screen: LocaisProximos,
    navigationOptions: {
      headerTransparent: 'false'
    }
  },
  'Map': {
    screen: ScreenDoMapa,
    navigationOptions: {
      headerTransparent: 'false'
    }
  },

  'Perfil': {
    screen: Perfil,
    navigationOptions: {
      headerTransparent: 'false'
    }
  },

  'cadEstabelecimento': {
    screen: cadEstabelecimento,
    navigationOptions: {
      headerTransparent: 'false'
    }
  },

  'CadPessoa': {
    screen: CadPessoa,
    navigationOptions: {
      headerTransparent: 'false'
    }
  }
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;