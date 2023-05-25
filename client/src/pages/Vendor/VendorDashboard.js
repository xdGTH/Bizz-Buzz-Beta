import React from "react";
import Layout from "../../components/Layout/Layout";
import VendorMenu from "../../components/Layout/VendorMenu";
import { useAuth } from "../../context/auth";
import { Card, Avatar } from "antd";
import { UserOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons";
import Box from "@mui/material/Box";

const VendorDashboard = () => {
  const [auth] = useAuth();

  const containerStyle = {
    margin: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const cardStyle = {
    width: '100%',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const infoStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    margin: '10px 0',
  };

  return (
    <Layout title={"Dashboard - Bizzbuzz"}>
      <Box height={45} />
      <div className="container-fluid" style={containerStyle}>
        <div className="row">
          <div className="col-md-3">
            <VendorMenu />
          </div>
          <div className="col-md-9">
            <div style={cardStyle}>
              <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Dashboard</h2>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar size={80} icon={<UserOutlined />} />
                <h3 style={{ margin: '10px 0', textAlign: 'center' }}>{auth?.user?.name}</h3>
              </div>
              <hr />
              <div style={{ textAlign: 'left' }}>
                <div style={infoStyle}>
                  <MailOutlined style={{ marginRight: '10px' }} />
                  <p><strong>Email:</strong> {auth?.user?.email}</p>
                </div>
                <div style={infoStyle}>
                  <EnvironmentOutlined style={{ marginRight: '10px' }} />
                  <p><strong>Address:</strong> {auth?.user?.address}</p>
                </div>
              </div>
              <hr />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card title="Orders" style={{ width: '48%' }}>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>3</p>
                  <p style={{ fontSize: '16px', margin: 0 }}>Total Orders</p>
                </Card>
                <Card title="Account Balance" style={{ width: '48%' }}>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>$500</p>
                  <p style={{ fontSize: '16px', margin: 0 }}>Current Balance</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VendorDashboard;