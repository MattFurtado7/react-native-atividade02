import React from "react";
import styled from "styled-components/native";
import {StyleSheet, Image, Text, View} from 'react-native';

const Div = styled.View`
  width: 150px;
  height: 150px;
  flex-direction: row;
  justify-content: center;
`;

const Img = styled.View`
  width: 150px;
  height: 150px;
`;

const imgLarge = styled.View`
  width: 150px;
  height: 150px;
`;

const Pagina = styled.View`
  flex: 1;
  justify-content: center;
  align-itens: center;
  background-color: blank;
`;

const Texto = styled.Text`
  color: Black;
  font-size: 20px;
`;



export default function App() {
  return (
    <Pagina>

      <Texto>Galeria de</Texto>
      <Texto>Matheus A. Furtado</Texto>
      <Texto>Tema: Portifólio de mídias digitais</Texto>

      <Div>
        <Img>
        <Image source={require('./src/img/apple.png')}
        style={{width: 350, height: 300, backgroundColor:'#AAA'}}
        resizeMode='stretch'/>
        </Img>
      </Div>

    </Pagina>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
