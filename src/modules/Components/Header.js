import React from 'react';


export default function Header(){
    return (
      
        <header className="header">
          <div className="header-block header-block-collapse d-lg-none d-xl-none">
            <button className="collapse-btn" id="sidebar-collapse-btn">
              <i className="fa fa-bars" />
            </button>
          </div>
          <div className="header-block header-block-search">
            <form role="search">
              
            </form>
          </div>
          <div className="header-block header-block-nav">
            <ul className="nav-profile">
              <li className="notifications new">
              </li><li className="profile dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                  <div className="img" style={{backgroundImage: 'url("https://avatars3.githubusercontent.com/u/3959008?v=3&s=40")'}}>
                  </div>
                  <span className="name"> 
                    A1abilities</span>
                </a>
                <div className="dropdown-menu profile-dropdown-menu" aria-labelledby="dropdownMenu1">
                  <a className="dropdown-item" href="Login">
                    <i className="fa fa-power-off icon" /> Logout </a>
                </div>
              </li>
            </ul>
           
          </div>
        </header>
      
  );
};
    