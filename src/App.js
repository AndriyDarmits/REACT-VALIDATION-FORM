import logo from './logo.svg';
import './App.scss';
import React, { Component } from 'react';
import Form from './components/Form'

export default class App extends Component {
  render() {
    return (
    <div className="app">
      <Form/>
    </div>)
  }
}
