import React from 'react';
import { Link } from 'react-router-dom';

const BottomButtons = () => {
  return (
    <div className="fixed-bottom bg-light p-3">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <Link to="/info" className="btn btn-primary btn-outline-primary text-light">Info</Link>
          </div>
          <div className="col">
            <Link to="/forecast" className="btn btn-secondary btn-outline-secondary text-light">Weather</Link>
          </div>
          <div className="col">
            <Link to="/places" className="btn btn-success btn-outline-success text-light"> Touristic places</Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default BottomButtons;

