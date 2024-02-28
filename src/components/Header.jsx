import React from 'react';

const Header = () => {
  return (
    <header className=" p-4 border border-black">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-2 text-center">
            <img src="#" alt="Logo" className="mr-3" />
          </div>
          <div className="col text-center">
            <input type="text" placeholder="Search..." className="form-control mx-auto w-50"  />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
