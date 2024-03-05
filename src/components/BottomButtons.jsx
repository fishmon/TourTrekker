import React from 'react';
import { Link } from 'react-router-dom';

const BottomButtons = () => {
  return (
    <div className="fixed-bottom bg-light p-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/info" className="btn btn-primary btn-block rounded-pill">Info</Link>
          </div>
          <div className="col">
            <Link to="/forecast" className="btn btn-secondary btn-block rounded-pill">Weather</Link>
          </div>
          <div className="col">
            <Link to="/places" className="btn btn-success btn-block rounded-pill"> Touristic places</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomButtons;

