import React from "react";

function Modal({ visible, setVisible, heading, data }) {
  return (
    <div
      style={{
        display: visible ? "block" : "none",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "green",
          opacity: "0.3",
          position: "absolute",
        }}
        onClick={() => setVisible(false)}
      ></div>
      <div
        style={{
          width: "60%",
          minWidth: "300px",
          minHeight: "400px",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          background: "white",
          position: "relative",
        }}
      >
        <h2
          style={{
            padding: "4px 8px",
          }}
        >
          {heading}
        </h2>
        <ul style={{ listStyleType: "none" }}>
          {Object.keys(data).map((key) => (
            <li>
              <span
                style={{
                  color: "orange",
                  width: "100px",
                  display: "inline-block",
                  marginRight: "20px",
                }}
              >
                {key}
              </span>{" "}
              {data[key]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
