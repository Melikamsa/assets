import { useEffect, useState } from "react";
import axios from "axios";
import Boxes from "./Components/Boxes/Boxes.jsx";
import AssetsTable from "./Components/AssetsTable/AssetsTable.jsx";
import "./App.css";

function App() {
  const [assets, setAssets] = useState([]);
  const [filterAssets, setFilterAssets] = useState([]);
  const [domainData, setDomainData] = useState({});
  const [ipData, setIpData] = useState({});
  const [cloudData, setCloudData] = useState({});

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/cf756b59-d746-4518-8221-55de4a7a8611")
      .then((res) => {
        setAssets(res.data.assets);
        setFilterAssets(res.data.assets);
        setDomainData(res.data.domain);
        setIpData(res.data.ip);
        setCloudData(res.data.cloud);
      })
      .catch((err) => console.log("API Error:", err));
  }, []);

  const filteredAssets = (type) => {
    const filtered = assets.filter((ass) => ass.type === type);
    setFilterAssets(filtered.slice(0, 3));
  };

  return (
    <div className="app">
      <div className="containerBox">
        <Boxes
          imgUrl={"/EarthPlanet.png"}
          onFilter={filteredAssets}
          filterType="domain"
          title="Domains"
          data={domainData}
          bgColorClass="bg-orange"
        />
        <Boxes
          imgUrl={"/EarthPlanet.png"}
          onFilter={filteredAssets}
          filterType="ip"
          title="IP Addresses"
          data={ipData}
          bgColorClass="bg-purple"
        />
        <Boxes
          imgUrl={"/UploadtoCloud.png"}
          onFilter={filteredAssets}
          filterType="cloud"
          title="Cloud Accounts"
          data={cloudData}
          bgColorClass="bg-yellow"
        />
      </div>

      <AssetsTable assets={filterAssets} />
    </div>
  );
}

export default App;
