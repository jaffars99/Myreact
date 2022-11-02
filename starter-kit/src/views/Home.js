// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   CardText,
//   CardLink
// } from "reactstrap"
import React from 'react'
//import ReactDOM from 'react-dom/client';
 import Navbar from './navbar' 
import Mainpage from './mainpage'
// import './component/nav.css';
import Products from './Product'
import Feature from './Feature'
import About from './aboute'
import Award  from './Award'
import Collab from './collab'
import Stats from './stats'
// import Footer from './footer'
// import { Component } from 'react'

class Home extends React.Component {
  render() {
      return (
      <div>
        <Navbar />
    <Mainpage />
    <Products/>
    <Feature/>
    <About/>
    <Award/>
    <Collab/>
    <Stats/>
    
      </div>
      )
  }
}

export default Home
