import React from 'react';

const ModalShortcuts = () => {
    return (
       <>
        <div className="modal fade modal-shortcut modal-slide" tabIndex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="defaultModalLabel">Shortcuts</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body px-5">
                <div className="row align-items-center">
                  <div className="col-6 text-center">
                    <div className="squircle bg-success justify-content-center">
                      <i className="fe fe-cpu fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Control area</p>
                  </div>
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-activity fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Activity</p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-droplet fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Droplet</p>
                  </div>
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-upload-cloud fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Upload</p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-users fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Users</p>
                  </div>
                  <div className="col-6 text-center">
                    <div className="squircle bg-primary justify-content-center">
                      <i className="fe fe-settings fe-32 align-self-center text-white"></i>
                    </div>
                    <p>Settings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </>
    );
}

export default ModalShortcuts;
