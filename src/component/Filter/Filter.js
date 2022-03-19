import React, { useState } from "react";

export default function Filter() {
  return (
    <div className="container">
      <div class="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded ">
        <div className="col-md-3 w-100">
          <input
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            value={searchkey}
            type="text"
            className="form-control w-100"
            placeholder="search your dishes"
          />
        </div>
      </div>
    </div>
  );
}
