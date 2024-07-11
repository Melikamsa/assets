import React from "react";
import "../../Styles/AssetsTable.css"

const AssetsTable = ({ assets }) => {
  return (
    <div className="assetsBox">
    <h4 className="assetsHeader">Assets</h4>
      <table>
        <thead>
          <tr>
            <th>Grade</th>
            <th>Name</th>
            <th>Total Vuln</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, i) => {
            return (
              <tr className="assetsRowTD" key={i}>
                <td>{asset.grade}</td>
                <td>{asset.name}</td>
                <td>{asset.total_vuls}</td>
                <td>{asset.lastSeen}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
