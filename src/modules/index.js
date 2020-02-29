import React from 'react';
import { Component } from 'react';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';

export default class Portfolio extends Component {
    render(){
        return (
          <div>
                 <Header />
                 <Sidebar />
                  <div className="sidebar-overlay" id="sidebar-overlay" />
                  <div className="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle" />
                  <div className="mobile-menu-handle" />
                  
                </div>
          )
    }
}