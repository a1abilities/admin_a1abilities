import React ,{Compoent} from 'react';

class ImageUpload extends Compoent {
 constructor(props)
 {
     super(props);
     this.state ={}
 }
  render(){
    return(
   <div>
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
                              <div className="image" style={{backgroundImage: 'url("   ")'}} />
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
                     


   </div>
    )
  }
}