import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to the Home Page</h2>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  heading: {
    fontSize: "2em",
    color: "#333",
  },
};

export default Home;
