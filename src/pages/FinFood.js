import React, { Component } from 'react';
import { View,
   StyleSheet, Image,Text, Dimensions, 
   TextInput, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';


export default class FinFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            pass  :  '',
            loading: false,
        };
      }
      componentDidMount(){
        firebaseConfig = {
            apiKey: "AIzaSyAwjI5Du4Jrbf8zXVKFjyH8w5L4oRJkp2o",
            authDomain: "finfood-4fef1.firebaseapp.com",
            databaseURL: "https://finfood-4fef1.firebaseio.com",
            projectId: "finfood-4fef1",
            storageBucket: "finfood-4fef1.appspot.com",
            messagingSenderId: "1056002227709",
            appId: "1:1056002227709:web:803a20f1bf6a6c5cb6ed94",
            measurementId: "G-FXSLK475Z4"
          };
         firebase.initializeApp(firebaseConfig);
        }
      
   
      onChangeHandler(key, value){
       this.setState({[key]: value})
     }
   
     async logInFb() {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync('415838172682892', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            this.props.navigation.replace('Map');
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }

       signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: '194496618363-j6io8om9ojjc3jsfncbh67s9ejcnk0gs.apps.googleusercontent.com',
            // iosClientId: YOUR_CLIENT_ID_HERE,
            // behavior: 'web',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
              this.props.navigation.replace('Map');
              return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }
     
      tryLogin(){
        this.setState({ loading: true, messagem: '' });
        const { email, pass } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then(() => {
                this.props.navigation.replace('Map');
                // this.setState.loading = false;
        
        })
        .catch(() => {
        this.setState({messagem: 'Nao Cadastrado'});
        // this.setState.loading = true;
             })
        
              
         }
     
     
     /*criando botao de login*/
     RenderButtonLogin(){
         if(this.state.loading)
        return <ActivityIndicator />;
        return(
                <TouchableOpacity 
                onPress={() => this.tryLogin()}
                    style={[styles.button, styles.lCor]}>
                    <Text style={styles.TextBotao, alignItems='center'}> Login </Text>
                </TouchableOpacity>
               
            )
        }

        render() {
            return (
                <View style={styles.Container}>
                <View style={{ backgroundColor: '#E0E0E0', height: 100 }}>
                </View>
                    <View style={styles.avatar}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../../assets/avatar.png')}
                            />
                    </View>
                    
                    <FormRow>
                        {/* Input Login */}
                        <TextInput
                            value={this.state.email}
                            onChangeText={value => this.onChangeHandler('email', value)}
                            keyboardType='email-address'
                            placeholder="Email"

                        />
                    </FormRow>
                    
                    <FormRow>
                        {/* Input Senha */}
                        <TextInput
                            value={this.state.pass}
                            onChangeText={value => this.onChangeHandler('pass', value)}
                            placeholder='******'
                            secureTextEntry
                        />
                    </FormRow>
              
                    <Text
                        style={styles.forgot}
                        accessibilityRole='link'
                    >
                        ESQUECI A SENHA

                        </Text>

                   { this.RenderButtonLogin() }
                    <TouchableOpacity
                   /*crinado botao do facebook */
                        style={[styles.button, styles.bBlue]}
                        onPress={this.logInFb.bind(this)}
                        >
                        <Image
                            style={styles.Image}
                            // source={require('../../../assets/facebook.png')}
                            source={require('../../assets/face.png')}
                            />
                        <Text style={{ color: 'white', fontSize: 20, marginTop: 5, fontWeight: '500' }}> Entrar com Facebook </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    /*crinado botao do google */
                        style={[styles.button, styles.cRed]}
                        onPress={() => this.signInWithGoogleAsync()}


                    >
                        <Image
                            style={styles.Image}
                            // source={require('../../../assets/google.png')}
                            source={require('../../assets/Gogle.png')}

                        />
                        <Text style={{ color: 'white', fontSize: 20, marginTop: 5, fontWeight: '500' }}> Entrar com Email </Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.replace('CadPessoa')} >
                    <Text
                        style={{ alignSelf: 'center', margin: 10, fontWeight: '800' }}
                        accessibilityRole='link'
                    >
                        CADASTRE-SE

                        </Text>
                        </TouchableOpacity>

            </View >
        );
    }
}
const widthWindow = Dimensions.get('window').width;
const styles = StyleSheet.create({

    Container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Input:{
        alignItems:'center',
        // borderWidth:0.5,
        elevation:1,
        margin:10,
        // borderBottomColor:'black',
        borderRadius: 5,
        width: widthWindow-100,
        height: 45,
        paddingLeft: 10
        
    },
    bBlue:{
        backgroundColor:'#3b5998'
    },
    lCor:{
        backgroundColor:'#3dd189'
    },
    cRed:{
        backgroundColor:'#DC5247'
    },

    avatar: {
        alignItems: 'center',
        marginTop: -50,
    },
    forgot: {
        alignSelf: 'flex-end',
        margin: 10,
        fontSize: 14,
        fontWeight: '800'

    },
    button: {
        width: 250,
        // backgroundColor: '#0352fc',
        padding: 10,
        margin: 10,
        justifyContent: 'space-evenly',
        borderRadius: 8,
        elevation: 4,
        alignItems: 'stretch',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    TextBotao: {
        color: 'white',
        fontSize: 20,
        textShadowColor: '#919191',
        textShadowOffset: { width: 0.8, height: 0.8 },
        textShadowRadius: 6,
    },
    Image: {
        width: 40,
        height: 40,
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },


})