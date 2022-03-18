import React from "react";

export default function Register() {
  return (
    <div>
      <div class="row justify-content-center">
        <div className="col-md-5">
          <div>
            <input
              type="text"
              placeholder="name"
              className="form-control"
              required
            />
            <input
              type="email"
              placeholder="email"
              className="form-control"
              required
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              required
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
