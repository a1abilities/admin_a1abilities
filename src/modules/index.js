import React  from 'react';
import { Link } from 'react-router-dom';

// import Components
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';


export default function Home(props) {    
        return (
            <div>
            <Header {...props}/>
            <Sidebar />
             <div className="sidebar-overlay" id="sidebar-overlay" />
             <div className="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle" />
             <div className="mobile-menu-handle" />
             <article className="content responsive-tables-page">
               <div className="title-block">
                 <h1 className="title"> Home
                  {/* <Link to= {{pathname:"/editor", state : {type:'Events', operation: 'add'}}}><button type="button" style={{float: 'right' }}className="btn btn-success-outline">Add</button></Link> */}
                  <Link to= {{pathname:"/images", state : {type:'Home'}}}><button type="button" style={{float: 'right',marginRight:"20px" }}className="btn btn-success-outline">Banner Image</button></Link>
                 </h1>
                 <p className="title-description"></p>
                 
               </div>
               
               <div className="ref" id="ref">
                 <div className="color-primary" />
                 <div className="chart">
                   <div className="color-primary" />
                   <div className="color-secondary" />
                 </div>
               </div>
             </article>
           </div>
          )
}