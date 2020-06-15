import React, { useEffect, useState } from 'react';
import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import Video from './video_upload.js'

export default function Contact(props){
 

        return (
          <div>
                 <Header {...props}/>
                 <Sidebar />
                 <div>
  <div id="main-div">
    <form encType="multipart/form-data" name="videoUpload" id="video-upload">
      <div className="form-group">
        <label className="custom-label"> Select file to upload: </label>
        <input accept="video/mp4" name="user-file" type="file" />
      </div>
      <div className="form-group">
        <label className="custom-label" style={{verticalAlign: 'top'}}> Video Details:</label>
        <textarea rows={10} cols={80} name="details" defaultValue={""} />
      </div>
      <div style={{paddingLeft: '15%'}}>
        <input id="submit" defaultValue="Upload File" onclick="onSubmit(event)" name="submit" type="submit" />
      </div>
    </form>
  </div>
  <div style={{paddingLeft: '15%'}} id="message">
  </div>
</div>

                 


                 
                </div>
          )    
}