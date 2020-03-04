import React from 'react';
import { APP_TOKEN } from '../../api/config/Constants';


export default function Header(props){

  function handleLogout(){
    APP_TOKEN.remove();
    props.history.push('/login');
  }

    return (
      
      <header className="header">
      <div className="header-block header-block-collapse d-lg-none d-xl-none">
        <button className="collapse-btn" id="sidebar-collapse-btn">
          <i className="fa fa-bars" />
        </button>
      </div>
      <div className="header-block header-block-search">
        {/* <form role="search">
          <div className="input-container">
            <i className="fa fa-search" />
            <input placeholder="Search" type="search" />
            <div className="underline" />
          </div>
        </form> */}
      </div>

      
      <div className="header-block header-block-nav">
        <ul className="nav-profile">
          <li className="notifications new">
          </li><li className="profile dropdown" >
            <a  data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              <div className="img" style={{backgroundImage: 'url("https://avatars3.githubusercontent.com/u/3959008?v=3&s=40")'}}>
              </div>
             
              <span className="name" >  
              <button onClick = {handleLogout} type="button" class="btn btn-default btn-sm">
         <i class="fa fa-sign-out"> <span > Log out</span></i>
        </button>
        
                   
                
                </span> 
               {/*  <button onClick = {handleLogout}>A1abilities</button>*/}
            </a>
            
          </li>
        </ul>

      </div>
    </header>
      
  );
};
    