import React from "react";
import VendorMenu from "../../components/Layout/VendorMenu";
import Layout from "./../../components/Layout/Layout";
import Box  from "@mui/material/Box";

const VendorUsers = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <Box height={45} />
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <VendorMenu/>
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorUsers;
