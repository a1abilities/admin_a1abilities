import React from 'react';
import { Component } from 'react';

export default class Portfolio extends Component {
    render(){
        return (
        <div>
        <div className="auth">
          <div className="auth-container">
            <div className="card">
              <header className="auth-header">
                <h1 className="auth-title">
                  <div className="logo">
                    <span className="l l1" />
                    <span className="l l2" />
                    <span className="l l3" />
                    <span className="l l4" />
                    <span className="l l5" />
                  </div> Admin Login
                </h1>
              </header>
              <div className="auth-content">
                <p className="text-center">LOGIN TO CONTINUE</p>
                <form id="login-form" action="/index.html" method="GET" noValidate>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className="form-control underlined" name="username" id="username" placeholder="Your email address" required type="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control underlined" name="password" id="password" placeholder="Your password" required type="password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember">
                      <input className="checkbox" id="remember" type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <a href="reset.html" className="forgot-btn pull-right">Forgot password?</a>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="text-center">
              <a href="index.html" className="btn btn-secondary btn-sm">
                <i className="fa fa-arrow-left" /> Go to Wesite </a>
            </div>
          </div>
        </div>
        {/* Reference block for JS */}
        <div className="ref" id="ref">
          <div className="color-primary" />
          <div className="chart">
            <div className="color-primary" />
            <div className="color-secondary" />
          </div>
        </div>
      </div>
    );
  }
};