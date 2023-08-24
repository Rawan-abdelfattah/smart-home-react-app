import React from 'react';

export default function Footer() {

  return (
    <div className="bg-main-light p-3  fixed-bottom  " style={{height:'260px'}} >
      <div className='ms-4'>
<h3>Smart Home</h3>
      <p className="text-secondary">
        We will send you a link, open it on your phone to download the app.
      </p>
      <form action="">
        <div className="row">
          <div className="col-md-9 ">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="col-md-3 pt-1">
            <button className="btn bg-main text-white gy-2 bg-info" >
              Share App Link
            </button>
          </div>
        </div>
      </form>
      <hr />
      <p>&copy; 2023 Your Website. All rights reserved.</p>
      </div>
      
    </div>
  );
}
