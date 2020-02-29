import React from 'react';
import { Component } from 'react';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';

export default class OurPartners extends Component {
    render(){
        return (
          <div>
                 <Header />
                 <Sidebar />
                  <div className="sidebar-overlay" id="sidebar-overlay" />
                  <div className="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle" />
                  <div className="mobile-menu-handle" />
                  <article className="content responsive-tables-page">
                    <div className="title-block">
                      <h1 className="title"> Our Partners </h1>
                      <p className="title-description"></p>
                    </div>
                    <section className="section">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card">
                            <div className="card-block">
                              <div className="card-title-block">
                                <h3 className="title"></h3>
                              </div>
                              <section className="example">
                                <div className="table-responsive">
                                  <table className="table table-striped table-bordered table-hover">
                                    <thead>
                                      <tr>
                                        <th>S No.</th>
                                        <th>Our Partners Name </th>
                                        <th> Update</th>
                                        <th> Delete</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Sarga Technology</td>
                                        <td><button type="button" className="btn btn-success-outline" onclick="window.location.href='/editor.html'">Update</button></td>
                                        <td><button type="button" className="btn btn-danger-outline">Delete</button></td> 
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Rentronics</td>
                                        <td><button type="button" className="btn btn-success-outline" onclick="window.location.href='/editor.html'">Update</button></td>
                                        <td><button type="button" className="btn btn-danger-outline">Delete</button></td> 
                                      </tr>
                                     
                                    </tbody>
                                  </table>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
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
}