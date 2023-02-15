function Block({ blockData }) {
  return (
    <div
      style={{
        border: "1px solid black",
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
