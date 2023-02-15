import "./App.css";
import Block from "./Block";
import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState(null);
  const [visible, setVisible] = useState(false);
  const [blockData, setBlockData] = useState([]);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    async function getBlockNumber() {
      const blockNumber = await alchemy.core.getBlockNumber();
      setBlockNumber(blockNumber);
    }

    getBlockNumber();
  });

  useEffect(() => {
    if (!blockNumber) return;

    async function getBlockData(blockNumber) {
      const fetchedData = [];
      for (let i = 0; i < 5; ++i) {
        const data = await alchemy.core.getBlockWithTransactions(
          blockNumber - i
        );
        fetchedData.push(data);
      }
      setBlockData(fetchedData);
    }

    getBlockData(blockNumber);
  }, [blockNumber]);

  return (
    <div className="App">
      <h1 style={{ marginBottom: "16px" }}>Five latest blocks</h1>
      <div style={{ display: "flex" }}>
        {blockData.map((block) => (
          <Block
            blockData={block}
            key={block.hash}
            onClick={() => console.log("click")}
          />
        ))}
      </div>
      <Modal
        visible={visible}
        setVisible={setVisible}
        heading={"Block"}
        data={modalData}
      />
    </div>
  );
}

export default App;
