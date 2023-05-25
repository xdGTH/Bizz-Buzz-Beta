import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";

const VendorMenu = () => {
  return (
    <>
      <Box height={35} />
      <div className="text-center">
        <div className="list-group">
          <h4>Vendor Panel</h4>
          <NavLink
            to="/dashboard/vendor/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/vendor/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/vendor/barchart"
            className="list-group-item list-group-item-action"
          >
            Bar Chart
          </NavLink>
          <NavLink
            to="/dashboard/vendor/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        
        </div>
      </div>
    </>
  );
};

export default VendorMenu;