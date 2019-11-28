import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Container, Footer, FooterTab, Button, Header, Root, Icon } from 'native-base';


export default class Perfil extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <Text style={styles.main}>lopes@gmail.com</Text>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}></Text>
                        <Text style={styles.info}>perfil finfood</Text>
                        <Text style={styles.description}></Text>

                        <TouchableOpacity style={styles.buttonContainer}
                            onPress={() => this.props.navigation.replace('cadEstabelecimento')}>
                            <Text style={styles.info}>Estabelecimento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.info}>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.info}>Locais Favoritos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={styles.fo2}>
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
                            <Button vertical onPress={() => this.props.navigation.replace('perfil')}>
                                <Icon name='person' />
                                <Text>Perfil</Text>
                            </Button>
                        </FooterTab>
                    </Footer> */}
                {/* </View> */}

            </View >
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#f28d5e",
        height: 100,
    },
    fo2: {
        flex: 1,
        paddingVertical: 390,
    },

    main: {
        marginLeft: 135,
        fontSize: 22,
        // fontWeight: 600

    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: "center",
        position: "absolute",
        marginTop: 50
    },
    name: {
        fontSize: 22,
        color: "black",
        fontWeight: "600",
        alignSelf: "center",

    },
    body: {
        marginTop: 10,
    },
    bodyContent: {
        flex: 1,
        alignItems: "center",
        padding: 30,
        marginTop: 20
    },
    info: {
        fontSize: 24,
        color: "black",
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: "center"
    },
    buttonContainer: {
        marginTop: 40,
        height: 65,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
        width: 300,
        borderRadius: 10,
        backgroundColor: "#f28d5e",
    },
});