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
          background: "black",
          opacity: "0.1",
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
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
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
            <li key={key}>
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
              {typeof data[key] === "object" ? (
                data[key].length ? (
                  <a
                    href={`https://etherscan.io/txs?block=${data.number}`}
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      textDecoration: "underline",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    {data[key].length} {key}
                  </a>
                ) : (
                  data[key].toString()
                )
              ) : (
                data[key]
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Modal;
