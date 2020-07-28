import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './components/reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'

//o thunk ajuda a permitir atualizar os states após carregar as requisições api do detalhe dos pokemons
const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));