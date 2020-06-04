import React from 'react';
import { Component } from 'react';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import FetchAPI from '../api/APIs.js';

export default class Home extends Component {
    render(){


  const handleSubmit = async () => {
   
        let formData = new FormData();
        formData.append('data', JSON.stringify());
        formData.append('images', document.getElementById('upload_image').files[0]);
        const response = await FetchAPI.addUpdateFormContent({ formData: formData });
       
  }
  const selectImage = (e) => {    
    if(document.getElementById('upload_image').files && document.getElementById('upload_image').files[0]){
      let reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('imagePreview').style.backgroundImage = 'url(' + e.target.result + ')';
      };
      reader.readAsDataURL(document.getElementById('upload_image').files[0]);
      document.getElementById('closeFrame').click();
    }
  } 
        return (
          <div>
                 <Header />
                 <Sidebar />
                  <div className="sidebar-overlay" id="sidebar-overlay" />
                  <div className="sidebar-mobile-menu-handle" id="sidebar-mobile-menu-handle" />
                  <div className="mobile-menu-handle" />
                  <article className="content responsive-tables-page">
                    <div className="title-block">
                        <h1 className="title"> Banner Image
                     
                     
                      </h1>
                   <p className="title-description"></p>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label text-xs-right"> Images: </label>
                        <div className="col-sm-10">
                          <div className="images-container">
                            <div className="image-container">                              
                              <div id = "imagePreview" className="image" style={{backgroundImage: ``}} />  
                              {/* <a href={API_URL + "/api/download?path=customer/" + inputs.id_proof }  download >{inputs.id_proof}</a> */}
                              <img src=''/>
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
                          <button type="button"  className="btn btn-primary" onClick={handleSubmit}>   Submit </button>
                        </div>
                      </div>
                    
                </article>
                <div className="modal fade" id="modal-media">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Choose Image</h4>
                        <button type="button" id="closeFrame" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                          <span className="sr-only">Close</span>
                        </button>
                      </div>
                      <div className="modal-body modal-tab-container">
                        <ul className="nav nav-tabs modal-tabs" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" href="#upload" data-toggle="tab" role="tab">Upload</a>
                          </li>
                        </ul>
                        <div className="tab-content modal-tab-content">                       
                            <div className="upload-container">
                              <div id="dropzone">
                              <form className="dropzone needsclick dz-clickable" id="demo-upload">
                                  <div className="dz-message-block">
                                    <div className="dz-message ">
                                      <input accept="image/gif, image/jpeg, image/png, image/jpg"  style ={{display: 'none'}} id="upload_image" type="file" onChange ={(e) => {selectImage(e)}} />
                                        <label htmlFor="upload_image">
                                          Click to upload.
                                        </label>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
          )
    }
}