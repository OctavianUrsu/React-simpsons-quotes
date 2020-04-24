import React from "react";

const layout = props => (
  <div className="d-flex align-items-center" style={{ height: "100vh" }}>
    <div className="container">
      <div className="col-8 mx-auto text-center">
        <ul className="nav justify-content-end mb-0 ">
          <li className="nav-item">
            <a className="nav-link text-light" href="/#">
              Log-in
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/#">
              Register
            </a>
          </li>
        </ul>

        <div className="card" style={{ height: "35vh" }}>
          {props.children}
        </div>
        <p>created by Octavian Ursu</p>
      </div>
    </div>
  </div>
);

export default layout;
