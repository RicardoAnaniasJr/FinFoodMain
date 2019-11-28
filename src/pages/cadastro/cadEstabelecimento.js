import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Picker,
  alert,
  Alert,
  CheckBox
} from "react-native";
import FormRow from "../../components/FormRow";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Button from "../../components/Button";
import config from "../../../firebase";
import firebase from "firebase";

export default class cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextInputLocal: "",
      TextInputTelefone: "",
      TextInputRua: "",
      TextInputNumero: "",
      language: ""
    };

    this.onChange = this.onChange.bind(this);
    this.CheckTextInput = this.CheckTextInput.bind(this);
  }

  onChange(key, value) {
    this.setState({ TextInputLocal: value });
    this.setState({ TextInputTelefone: value });
    this.setState({ TextInputRua: value });
    this.setState({ TextInputNumero: value });
    this.setState({ language: value });
  }

  CheckTextInput() {
    const TextinputLocal = this.state.TextInputLocal;
    const TextInputTelefone = this.state.TextInputTelefone;
    const TextInputRua = this.state.TextInputRua;
    const TextInputNumero = this.state.TextInputNumero;
    const language = this.state.language;

    if (
      TextinputLocal == "" ||
      TextInputRua == "" ||
      TextInputNumero == "" ||
      TextInputTelefone == ""
    ) {
      Alert.alert("Preencha todos os campos!");
    }
    if (this.state.TextInputTelefone.length < 8) {
      Alert.alert("Número de telefone inválido!");
    }
    if (language == "-selecione-") {
      Alert.alert("Voce deve selecionar uma modalidade");
    } else {
      Alert.alert("Sucesso!");
      firebase
        .database()
        .ref("locais/001")
        .set({
          local: TextinputLocal,
          rua: TextInputRua,
          numero: TextInputNumero,
          telefone: TextInputTelefone
        });
      //gravar no banco
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            style={styles.seta}
            source={require("../../../assets/ArrowIcon.png")}
          />

          <Text style={styles.title}> ESTABELECIMENTO </Text>
        </View>
        <View style={styles.barra}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/avatar2.png")}
          />
        </View>

        <View style={styles.campo}>
          <FormRow>
            <TextInput
              //value={this.state.TextInputLocal}
              onChangeText={value => this.onChange("TextInputLocal", value)}
              placeholder="insira o nome do local"
            />
          </FormRow>
          <FormRow>
            <Picker
              selectedValue={this.state.language}
              style={{ height: 30 }}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }
            >
              <Picker.Item label="-selecione-" value="-selecione-" />
              <Picker.Item label="Lanchonete" value="Lanchonete" />
              <Picker.Item label="Distribuidora" value="Distribuidora" />
              <Picker.Item label="Restaurante" value="Restaurante" />
              <Picker.Item label="churrascaria" value="churrascaria" />
              <Picker.Item label="panificadora" value="panificadora" />
            </Picker>
          </FormRow>

          <FormRow>
            <TextInput
              value={this.state.TextInputTelefone}
              // type={'cel-phone'}
              // options={{
              //     dddMask: '+99 99 '
              //  }}
              onChangeText={value => this.onChange("TextInputTelefone", value)}
              placeholder="Telefone"
              keyboardType="numeric"
            />
          </FormRow>
          <FormRow>
            <TextInput
              //value={this.state.TextInputRua}
              onChangeText={value => this.onChange("TextInputRua", value)}
              placeholder="Nome da rua"
            />
          </FormRow>
          <FormRow>
            <TextInput
              //value={this.state.TextInputNumero}
              onChangeText={value => this.onChange("TextInputNumero", value)}
              placeholder="numero"
              keyboardType="numeric"
            />
          </FormRow>

          <TouchableOpacity onPress={this.CheckTextInput}>
            <Button>
              <Text style={styles.TextBotao}>Cadastrar</Text>
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const widthWindow = Dimensions.get("window").width;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "white"
  },
  top: {
    width: wp("100%"),
    height: hp("7%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "5%"
  },
  seta: {
    width: wp("10%"),
    height: hp("5%"),
    alignSelf: "flex-start",
    marginTop: "3%",
    color: "white",
    textShadowColor: "#919191",
    textShadowOffset: { width: 0.8, height: 0.8 },
    textShadowRadius: 6,
    alignSelf: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    color: "black",
    marginTop: "5%",
    textShadowColor: "#919191",
    textShadowOffset: { width: 0.8, height: 0.8 },
    textShadowRadius: 6,
    alignSelf: "center"
  },
  barra: {
    backgroundColor: "#f28d5e",
    width: wp("100%"),
    height: hp("8%"),
    marginTop: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  avatar: {
    width: wp("30%"),
    height: hp("18%"),
    marginTop: "-10%",
    borderRadius: 100
  },

  campo: {
    margin: 10,
    width: wp("90%"),
    alignSelf: "center"
  },
  TextBotao: {
    color: "white",
    fontSize: 20,
    textShadowColor: "#919191",
    textShadowOffset: { width: 0.8, height: 0.8 },
    textShadowRadius: 6,
    alignSelf: "center"
  }
});
