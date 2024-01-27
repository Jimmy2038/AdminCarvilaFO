import React from 'react';

const ModalNotif = () => {
    return (
        <>
        <div className="modal fade modal-notif modal-slide" tabIndex="-1" role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="defaultModalLabel">Notifications</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="list-group list-group-flush my-n3">
                        <div className="list-group-item bg-transparent">
                            <div className="row align-items-center">
                            <div className="col-auto">
                                <span className="fe fe-box fe-24"></span>
                            </div>
                            <div className="col">
                                <small><strong>Package has uploaded successfull</strong></small>
                                <div className="my-0 text-muted small">Package is zipped and uploaded</div>
                                <small className="badge badge-pill badge-light text-muted">1m ago</small>
                            </div>
                            </div>
                        </div>
                        <div className="list-group-item bg-transparent">
                            <div className="row align-items-center">
                            <div className="col-auto">
                                <span className="fe fe-download fe-24"></span>
                            </div>
                            <div className="col">
                                <small><strong>Widgets are updated successfull</strong></small>
                                <div className="my-0 text-muted small">Just create new layout Index, form, table</div>
                                <small className="badge badge-pill badge-light text-muted">2m ago</small>
                            </div>
                            </div>
                        </div>
                        <div className="list-group-item bg-transparent">
                            <div className="row align-items-center">
                            <div className="col-auto">
                                <span className="fe fe-inbox fe-24"></span>
                            </div>
                            <div className="col">
                                <small><strong>Notifications have been sent</strong></small>
                                <div className="my-0 text-muted small">Fusce dapibus, tellus ac cursus commodo</div>
                                <small className="badge badge-pill badge-light text-muted">30m ago</small>
                            </div>
                            </div> 
                        </div>
                        <div className="list-group-item bg-transparent">
                            <div className="row align-items-center">
                            <div className="col-auto">
                                <span className="fe fe-link fe-24"></span>
                            </div>
                            <div className="col">
                                <small><strong>Link was attached to menu</strong></small>
                                <div className="my-0 text-muted small">New layout has been attached to the menu</div>
                                <small className="badge badge-pill badge-light text-muted">1h ago</small>
                            </div>
                            </div>
                        </div> 
                        </div> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal">Clear All</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ModalNotif;
