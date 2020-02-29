import React, {useState } from 'react';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';

// import api
import FetchAPI from '../api/APIs.js';

export default function Editor(props) {
  const type = props.type;
  const operation = props.operation;
  const [inputs, setInputs] = useState({name:'', content: ''});

  const handleChange  = (props) => {
    setInputs({...inputs, [props.target.name]: props.target.value});
  }

  const handleSubmit = async () => {
    if(inputs.name !=='' && inputs.content !== ''){
      try{
        if(operation==='add'){
          const result = await FetchAPI.addFormContent({
            type: type,
            title: inputs.name,
            content: inputs.content,
          });
        }        
      }catch(e){
        console.log('Error...',e);
      }
    }else{
      alert('Need all fields')
    }
  }


        return (
         <div>
                <Header/>
                <Sidebar/>  
            
                <div>
                <div className="sidebar-overlay" id="sidebar-overlay" />
                <div className="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle" />
                <div className="mobile-menu-handle" />
                <article className="content item-editor-page">
                  <div className="title-block">
                    <h3 className="title"> Add new item <span className="sparkline bar" data-type="bar" />
                    </h3>
                  </div>
                  <form name="item">
                    <div className="card card-block">
                      <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right" > Name: </label>
                        <div className="col-sm-10">
                          <input className="form-control boxed" placeholder type="text" name="name" onChange={handleChange } />
                          
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right"> Content: </label>
                        <div className="col-sm-10">
                          <textarea className="form-control boxed " rows="8" type="text" name="content" onChange={handleChange } />
                        </div>
                      </div>                     
                      <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right"> Images: </label>
                        <div className="col-sm-10">
                          <div className="images-container">
                            <div className="image-container">
                              <div className="controls">
                                <a href="#" className="control-btn remove" data-toggle="modal" data-target="#confirm-modal">
                                  <i className="fa fa-trash-o" />
                                </a>
                              </div>
                              <div className="image" style={{backgroundImage: 'url("https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg")'}} />
                            </div>
                           
                            <a href="#" className="add-image" data-toggle="modal" data-target="#modal-media">
                              <div className="image-container new">
                                <div className="image">
                                  <i className="fa fa-plus" />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-10 col-sm-offset-2">
                          <button type="button" className="btn btn-primary" onClick={handleSubmit}> Submit </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </article>
                <div className="modal fade" id="modal-media">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Media Library</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          <span className="sr-only">Close</span>
                        </button>
                      </div>
                      <div className="modal-body modal-tab-container">
                        <ul className="nav nav-tabs modal-tabs" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link" href="#gallery" data-toggle="tab" role="tab">Gallery</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" href="#upload" data-toggle="tab" role="tab">Upload</a>
                          </li>
                        </ul>
                        <div className="tab-content modal-tab-content">
                          <div className="tab-pane fade" id="gallery" role="tabpanel">
                            <div className="images-container">
                              <div className="row">
                                <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                                  <div className="image-container">
                                    <div className="image" style={{backgroundImage: 'url("https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg")'}} />
                                  </div>
                                </div>                              
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade active in" id="upload" role="tabpanel">
                            <div className="upload-container">
                              <div id="dropzone">
                                <form action="/" method="POST" encType="multipart/form-data" className="dropzone needsclick dz-clickable" id="demo-upload">
                                  <div className="dz-message-block">
                                    <div className="dz-message needsclick"> Drop files here or click to upload. </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Insert Selected</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="confirm-modal">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title"><i className="fa fa-warning" /> Alert</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Are you sure want to do this?</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Yes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="ref" id="ref">
                  <div className="color-primary" />
                  <div className="chart">
                    <div className="color-primary" />
                    <div className="color-secondary" />
                  </div>
                </div>
              </div>

              </div>
            );      
        };