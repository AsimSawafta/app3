import React, { useState } from "react";
import Child from "./Child";

const containerStyle = {
  backgroundColor: "#CCFCCB",
  height: "100vh",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const headerStyle = {
  color: "#464E47",
};

const Parent = () => {
  const [dataFromChild, setDataFromChild] = useState(""); // State to hold data from Child
  const [dataToChild, setDataToChild] = useState(""); // State to send data to Child

  // Function to update dataFromChild state
  const updateDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>I'm the parent page</h2>
      <p style={{ color: "#464E47", fontWeight: "bold" }}>
        Receive from child:
        <br />
        <span style={{ color: "#F46036" }}>{dataFromChild}</span>
      </p>
      <p style={{ color: "#464E47", fontWeight: "bold" }}>
        Enter data to pass to child:
      </p>
      <input
        style={{ padding: "5px", border: "1px solid " }}
        onChange={(e) => setDataToChild(e.target.value)} // Update dataToChild state
      />
      <Child sendDataToParent={updateDataFromChild} dataToChild={dataToChild} />
    </div>
  );
};

export default Parent;

