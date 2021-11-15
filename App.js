import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

const ImgBox = styled.View`
  background-color: ${props => props.color};
  width: 200px;
  height: 200px;
  justify-content:center;
  align-items:center;
`;

const ImgLarge = styled.View`
  background-color: ${props => props.color};
  width: 400px;
  height: 200px;
  justify-content:center;
  align-items:center;
`;

const Pagina = styled.View`
  background-image: linear-gradient(#000000  60%,  #193fea);
  align-items:center;
  flex:1;
`;

const Header = styled.View`
  flex-direction: row;
  height:500px;
  flex-wrap:wrap;
  justify-content:center;
`;

const Texto = styled.Text`
  font-family: Lato;
  color: white;
`;

const Espaco = styled.View`
  width: 51px;
  height: 10px;
`;


function App() {
  return (
    <Pagina>
      <Texto>Galeria de imagens de Matheus A. Furtado</Texto>
      <Texto>Tema: Portifólio de Mídia Digital</Texto>

      <Espaco/>

      <Header>

        <Espaco/>

        <ImgBox>
          <Image source = {require('./assets/test2.png')}
            style = {{ width: 280, height: 180, backgroundColor: '#AAA' }}
            resizeMode="cover"
          />
        </ImgBox>

        <Espaco/>

        <ImgBox>
          <Image source = {require('./assets/chao.gif')}
            style = {{ width: 180, height: 180, backgroundColor: '#AAA' }}
            resizeMode='cover'
          />
        </ImgBox>

        <Espaco/>

        <ImgBox>
          <Image source = {{uri:'https://i.ibb.co/zfzgwTL/3dlayer.gif'}}
            style = {{ width: 200, height: 180, backgroundColor: '#AAA' }}
            resizeMode='strech'
          />
        </ImgBox>

        <Espaco/>

        <ImgBox>
          <Image source = {{uri:'https://i.ibb.co/3rbkR0V/ney.gif'}}
            style = {{ width: 280, height: 180, backgroundColor: '#AAA' }}
            resizeMode='cover'
          />
        </ImgBox>
        
        <Espaco/>

        <ImgLarge>
          <Image source = {{uri:'https://i.ibb.co/7GPJRdh/sofa.png'}}
            style = {{ width: 380, height: 180, backgroundColor: '#AAA' }}
            resizeMode='cover'
          />
        </ImgLarge>


      </Header>
    </Pagina>
  );
}

export default App;