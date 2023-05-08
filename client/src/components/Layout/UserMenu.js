import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from './../../pages/user/Dashboard';
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
        <NavLink
            to="/dashboard/user"
           
          >
           <h4>Dash Board</h4>
          </NavLink>
          
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
