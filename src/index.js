/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './component/app.js';

class Main extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById('root'));
