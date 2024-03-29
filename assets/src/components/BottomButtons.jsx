import React from 'react';
import '../components/buttons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookAtlas, faCloudSunRain, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

const BottomButtons = () => {
  return (
    <div className="fixed-bottom bg-light p-3">
      <div className="container">
        <div className="row">

          <div className="col-md-4 col-sm-12 bottom-btns">
            <Link to="/info" className="btn btn-bottom btn-block"><FontAwesomeIcon icon={faBookAtlas} /> Info</Link>
          </div>
          <div className="col-md-4 col-sm-12 bottom-btns">
            <Link to="/forecast" className="btn btn-bottom btn-block"><FontAwesomeIcon icon={faCloudSunRain} /> Weather</Link>
          </div>
          <div className="col-md-4 col-sm-12 bottom-btns">
            <Link to="/places" className="btn btn-bottom btn-block"><FontAwesomeIcon icon={faMapLocationDot} /> Touristic places</Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default BottomButtons;

