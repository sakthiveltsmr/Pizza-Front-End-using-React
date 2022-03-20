import React, { useState, useEffect } from "react";

export default function Pizzalist() {
  return (
    <div>
      <h2>Pizzalist</h2>

      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
