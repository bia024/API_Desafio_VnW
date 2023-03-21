import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Box = styled.section`
  margin: 0;
  padding: 0;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Caixa = styled.div`
  width: 25%;
  border: inset orange;
  background-color: blue;
  border-width: 1rem;
  border-radius: 20px;
  img {
    width: 20vw;
    height: 20vh;
  }
`;

const Ttl = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: black;
  text-shadow: -1px -1px 0px orange, -1px 1px 0px orange, 1px -1px 0px orange,
    1px 0px 0px orange;
`;
const Api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character"
});

class App extends Component {
  state = {
    informacoes: []
  };

  componentDidMount() {
    this.PegarPersonagem();
  }

  PegarPersonagem = async () => {
    const resposta = await Api.get();
    console.log(resposta.data.results);

    const itens = resposta.data.results.map((item) => {
      return {
        ...item
      };
    });

    this.setState({
      informacoes: itens
    });
  };

  render() {
    return (
      <Box>
        {this.state.informacoes.map((batata) => (
          <Caixa>
            <img src={batata.image} alt={batata.name} />
            <Ttl> {batata.name} </Ttl>
            <Ttl> {batata.species} </Ttl>
          </Caixa>
        ))}
      </Box>
    );
  }
}
export default App;
