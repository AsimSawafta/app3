import React from "react";

const containerStyle = {
  backgroundColor: "#464E47",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const headerStyle = {
  color: "#F46036",
};

const inputStyle = {
  padding: "5px",
  border: "1px solid #F46036",
};

const Child = ({ sendDataToParent, dataToChild }) => {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>I'm the child page</h2>
      <p style={{ color: "#F46036", fontWeight: "bold" }}>
        Receive from parent by props:
        <br />
        <span style={{ color: "#CCFCCB" }}>{dataToChild}</span>
      </p>
      <p style={{ color: "#F46036", fontWeight: "bold" }}>
        Enter data to pass to parent:
      </p>
      <input
        style={inputStyle}
        onChange={(e) => sendDataToParent(e.target.value)} // Send data to the parent
      />
    </div>
  );
};

export default Child;
