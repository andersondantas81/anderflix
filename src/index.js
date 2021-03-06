import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';


// Desafio - implementar jogo nessa página: https://www.youtube.com/watch?v=jOAU81jdi-c :)
const Pagina404 = () => ( 
  <h1 style={{ 'text-align':'center' }}>
    Página não encontrada!
  </h1>
);

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/cadastro/video' component={CadastroVideo} />
        <Route path='/cadastro/categoria' component={CadastroCategoria} />
        <Route component={Pagina404} />
      </Switch>   
    </BrowserRouter>,
  document.getElementById('root')
);
