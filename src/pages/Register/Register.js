import React from "react";

export default function Register() {
  return (
    <div>
      <div class="row justify-content-center">
        <div className="col-md-5">
          <div>
            <input
              type="text"
              placeholder="enter ur name"
              className="form-controll"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}
