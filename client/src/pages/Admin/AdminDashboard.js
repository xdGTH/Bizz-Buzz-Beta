import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  const styles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#f7f7f7",
    },
    row: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      width: "100%",
      maxWidth: "1000px",
      padding: "1rem",
      borderRadius: "8px",
    },
    menuCol: {
      flexBasis: "250px",
      marginRight: "2rem",
    },
    card: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    },
    heading: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    infoItem: {
      fontSize: "1.2rem",
      marginBottom: "1rem",
    },
    button: {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      border: "none",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: "1rem",
    },
  };

  const handleChangeSettingsClick = () => {
    // Add code to handle the "Change Settings" button click event here
  };

  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.menuCol}>
            <AdminMenu />
          </div>
          <div style={styles.card}>
            <h2 style={styles.heading}>Admin Dashboard</h2>
            <div style={styles.infoItem}>Name: {auth?.user?.name}</div>
            <div style={styles.infoItem}>Email: {auth?.user?.email}</div>
            <div style={styles.infoItem}>Contact: {auth?.user?.phone}</div>
            <button style={styles.button} onClick={handleChangeSettingsClick}>
              Change Settings
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;