// import logo from './logo.svg';
import './App.css';
import  Header  from "./AffiliateComponents/Header";
import {Footer} from "./AffiliateComponents/Footer";
import {Table} from "./AffiliateComponents/Table";
import React, { Component } from 'react'
//import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';

class App extends Component {
  constructor()
  {
    super()
    this.state={
      users:null,
      Calls:null
    }
  }
  componentDidMount(){

  }
  render() {
    return (
      <div>
        <Header title="Affiliate Header"/>
        
        <Footer/>
        <Table/>
        <h1 className="text-center">Fetch Data From Get Api Url</h1>
      </div>
    )
  }
}
export default App;
