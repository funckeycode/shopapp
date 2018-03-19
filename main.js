import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import style from './styles/style.css'

ReactDOM.render(<App headerProp="Header from Props..." contentProp="Content from props..." />, document.getElementById('app'));