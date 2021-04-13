import React from "react";
import "./App.css";
import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components//layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ParOuImpar from "./components/condicional/ParOuImpar";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#13 - Mega" color="#B9006E">
        <Mega qtde={8}></Mega>
      </Card>

      <Card titulo="#12 - Contador" color="#424242">
        <Contador numeroInicial={10}></Contador>
      </Card>
      <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
        <Input></Input>
      </Card>
      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        {/* <UsuarioInfo usuario={{}} />
                <UsuarioInfo /> */}
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="#06 - Repeticao" color="#00C8F8">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#4 Desafio Aleatório" color="#fa6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#2 comParametro" color="#e8b71a">
        <ComParametro
          titulo="Situação do Aluno "
          aluno="Pedro Silva "
          nota={9.3}
        />
      </Card>

      <Card titulo="#1 Primeiro Componente" color="#588c73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
