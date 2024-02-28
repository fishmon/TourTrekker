import React from 'react';

const Forecast = () => {
  return (
    <div className="container-fluid mx-0 ">
    <div className="row justify-content-center mt-5">
      
      <div className="col-lg-9 pb-3">
        <section id="today" className="mt-3" role="region" aria-live="polite">
          <div className="card">
            <div className="card-header">
              Today
            </div>
            <div className="card-body">
              <h5 className="card-title" id="city-date"></h5>
              <p className="card-text" id="temp"></p>
              <p id="wind"></p>
              <p id="humidity"></p>
            </div>
          </div>
        </section>
        <section id="forecast" className="row mt-3" role="region" aria-live="polite">
          <div className="pb-3" id="temps">
            <section className="mt-3" role="region" aria-live="polite">
              <div className="card">
                <div className="card-header">
                  5-Days Forecast:
                </div>
                <div className="card-body d-flex flex-row flex-wrap d-inline-flex justify-content-between ">
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="card">
                      <div className="card-body" id="card1"></div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="card">
                      <div className="card-body" id="card2"></div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="card">
                      <div className="card-body" id="card3"></div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="card">
                      <div className="card-body" id="card4"></div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
                    <div className="card">
                      <div className="card-body" id="card5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>
  );
};

export default Forecast;
