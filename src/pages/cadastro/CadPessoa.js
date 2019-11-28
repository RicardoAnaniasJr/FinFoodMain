import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions, Picker, alert, Alert, CheckBox, value } from 'react-native';
import FormRow from '../../components/FormRow';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../../components/Button';



export default class CadPessoa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nome: '',
            Email: '',
            cpf: '',
            Senha: '',
            ConSenha: ''
        };

        this.onChange = this.onChange.bind(this);
        this.CheckText = this.CheckText.bind(this);
    }

    onChange(key, value) {
        this.setState({ Nome: value });
        this.setState({ Email: value });
        this.setState({ cpf: value });
        this.setState({ Senha: value });
        this.setState({ ConSenha: value });

    }
    CheckText() {
        const Nome = this.state.Nome;
        const Email = this.state.Email;
        const cpf = this.state.cpf;
        const Senha = this.state.Senha;
        const ConSenha = this.state.ConSenha;

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image
                        style={styles.seta}
                        source={require('../../../assets/ArrowIcon.png')}
                    />

                    <Text style={styles.title}> BEM VINDO </Text>
                </View>

                <View style={styles.barra}>
                    <Text style={styles.Icon}>
                        CADASTRE-SE
                    </Text>
                    <Image
                        style={styles.avatar}
                        source={require('../../../assets/avatar2.png')}
                    />
                </View>
                <View style={styles.campo}>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('Nome', value)}
                            placeholder="insira o seu nome"

                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('Email', value)}
                            placeholder="insira seu email"
                            keyboardType='email-address'
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('cpf', value)}
                            placeholder="CPF"
                            keyboardType="numeric"
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('senha', value)}
                            placeholder="Senha"
                            secureTextEntry={true}
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            onChangeText={value => this.onChange('ConSenha', value)}
                            placeholder="Confirmar senha"
                            secureTextEntry={true}
                        />
                    </FormRow>


                    <Button
                        onPress={this.CheckTextInput}
                    ><Text style={styles.TextButton}>Cadastrar</Text></Button>

                </View>
            </View >
        );
    }
}

const widthWindow = Dimensions.get('window').width;
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white'
    },
    top: {
        width: wp('100%'),
        height: hp('7%'),
        marginTop: ('0%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: ('5%')
    },
    seta: {
        width: wp('10%'),
        height: hp('5%'),
        marginTop: ('-3%'),
        alignSelf: 'flex-start',
        marginTop: ('3%'),
        color: 'white',
        textShadowColor: '#919191',
        textShadowOffset: { width: 0.8, height: 0.8 },
        textShadowRadius: 6,
        alignSelf: 'center',
        marginLeft: -50

    },
    title: {
        fontSize: 25,
        fontWeight: '800',
        color: 'black',
        marginTop: ('3%'),
        color: 'black',
        textShadowColor: '#919191',
        textShadowOffset: { width: 0.8, height: 0.8 },
        textShadowRadius: 6,
        alignSelf: 'center'

    },
    barra: {
        //barra de estilização contendo icone e texto (cadastre-se)
        backgroundColor: '#f28d5e',
        width: wp('100%'),
        height: hp('8%'),
        marginTop: ('10%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    Icon: {
        //style do text
        fontSize: 25,
        fontWeight: '800',
        color: 'black',
        marginTop: ('6%'),
        color: 'white',
        textShadowColor: '#919191',
        textShadowOffset: { width: 0.8, height: 0.8 },
        textShadowRadius: 6,
        alignSelf: 'center'
    },
    avatar: {
        width: wp('30%'),
        height: hp('18%'),
        marginTop: ('-10%'),
        borderRadius: 100
    },
    campo: {
        margin: 10,
        width: wp('90%'),
        alignSelf: 'center'
    },
    TextButton: {
        color: 'white',
        fontSize: 20,
        textShadowColor: '#919191',
        textShadowOffset: { width: 0.8, height: 0.8 },
        textShadowRadius: 6,
        alignSelf: 'center'
    }

})