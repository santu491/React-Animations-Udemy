import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
//import { Transition } from "react-transition-group";
import Transition from 'react-transition-group/Transition'

class App extends Component {
  state = {
    modalIsOpen: false,
    showBox:false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  openBox=()=>{
    this.setState((prevState)=>{
      return {showBox:!prevState.showBox}
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.openBox}>Toggle</button><br/>
       { 
       //this.state.showBox&&
       <Transition in={this.state.showBox} timeout={1000}
       mountOnEnter
       unmountOnExit
       >
         {state=>(
            <div style={{backgroundColor:"red",width:80,
            height:80,
            transition:"opacity 1s ease-out",
            opacity:state==='exiting'?0:1,
            margin:"auto"}}
            ></div>
         )}
      
       </Transition>
       
       }
        {this.state.modalIsOpen && <Modal show={this.state.modalIsOpen} closed={this.closeModal} />}
        {this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
