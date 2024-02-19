import React from "react";

export default function BoxModel() {
  return (
    <div style={{ backgroundColor: "orange", width: "500px", margin: "100px" }}>
      <div style={{ alignItems: "center",
    margin:"30px",
    padding:"20px",
    backgroundColor:"white"
    }}>
        <div
          style={{
            color: "Pink",
            backgroundColor: "black",
            fontSize: "50px",
            margin: "20px",
            alignContent:"center"
          }}
        >
          Simplilearn
        </div>

        <div
          style={{
            color: "Pink",
            backgroundColor: "black",
            fontSize: "30px",
            margin: "15px",
          }}
        >
          World's #1 online certification course provider
        </div>
      </div>
    </div>
  );
}
