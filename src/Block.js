import React from "react";

function Block({ blockData }) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(240, 46, 170, 0.2)",
        borderLeft: "1px solid rgba(240, 46, 170, 0.2)",
        borderRadius: "7px",
        boxShadow:
          "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
        padding: "4px 8px",
        margin: "0 16px",
        minHeight: "150px",
        minWidth: "150px",
        textAlign: "left",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>Block Number: {blockData.number}</div>
      {blockData && (
        <>
          <div>Block Hash: {blockData.hash.slice(0, 10)}</div>
          <div>Previous Hash: {blockData.parentHash.slice(0, 10)}</div>
        </>
      )}
    </div>
  );
}

export default Block;
