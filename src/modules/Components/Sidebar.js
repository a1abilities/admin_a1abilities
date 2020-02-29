import React from 'react';

export default function Sidebar(){
    return (    
        <aside className="sidebar">
        <div className="sidebar-container">
        <div className="sidebar-header">
            <div className="brand">
            <div className="logo">
                <span className="l l1" />
                <span className="l l2" />
                <span className="l l3" />
                <span className="l l4" />
                <span className="l l5" />
            </div> Modular Admin
            </div>
        </div>
        <nav className="menu">
            <ul className="sidebar-menu metismenu" id="sidebar-menu">
                <li>
                    <a href="/"> <i className="fa fa-home" /> Dashboard </a>
                </li>
                <li>
                    <a href="/Services"> <i className="fa fa-th-large" /> Services </a>
                </li>
            <li>
                <a href="/OurTechnology">
                <i className="fa fa-area-chart" /> Technology
                </a>
            </li>
            <li>
                <a href="/About">
                <i className="fa fa-table" /> About 
                </a>
            </li>
            <li>
                <a href="/OurGoals">
                <i className="fa fa-pencil-square-o" /> Goals </a>
            </li>
            <li>
                <a href="/Portfolio">
                <i className="fa fa-desktop" /> Portfolio 
                </a>
            </li>
            <li>
                <a href="/WhyUs">
                <i className="fa fa-bell" /> Why Us 
                </a>
            </li>        
            <li>
               <a href="/OurPartners">
                <i className="fa fa-flask" />  Our Partners 
                 </a>
             </li>
             <li>
                <a href="/Contact">
                <i className="fa fa-file-text-o" /> Contact 
                </a>
                </li>
                                
            </ul>
        </nav>
        </div>
        </aside>   
    )
}