import React from "react";
import "../../App.css";
import "../../Styles/Boxes.css";
import { BsGlobe2 } from "react-icons/bs";
import { IoBugOutline } from "react-icons/io5";
import { LiaBoltSolid } from "react-icons/lia";

const Boxes = ({ imgUrl, onFilter, title, filterType, data, bgColorClass }) => {
  return (
    <div onClick={() => onFilter(filterType)} className="box">
      <div className="row1">
        <div className={`earth ${bgColorClass}`}>
          <img
            className="img"
            src={imgUrl}
            alt="EarthPlanet"
            width={50}
            height={40}
          />
          <span className="numberbgw">{data.total}</span>
        </div>

        <img
          src="/DownLeftArrow.png"
          alt="DownLeftArrow"
          width={20}
          height={20}
        />
      </div>

      <h5 className="headerText">{title}</h5>
      <hr />

      <div className="rows2">
        <div className="row2">
          <div>
            <h5>live</h5>
            <h4>{data.total_live}</h4>
          </div>
          <img alt="img" src={`/dashboardfull1.png`} width={60} height={40} />
        </div>

        <div className="row2">
          <div>
            <h5>monitored</h5>
            <h4>{data.total_monitored}</h4>
          </div>
          <img alt="img" src={`/dashboardfull1.png`} width={60} height={40} />
        </div>
      </div>
      <hr />

      <div className="row3">
        <div className="row">
          <span className="imgRow3">
            <BsGlobe2 />
          </span>

          <div className="row-text">
            <h5>IPs</h5>
            <h4>{data.ips}</h4>
          </div>
        </div>
        <div className="row">
          <span className="imgRow3">
            <LiaBoltSolid />
          </span>

          <div className="row-text">
            <h5>Ports</h5>
            <h4>{data.ports}</h4>
          </div>
        </div>
        <div className="row">
          <span className="imgRow3">
            <IoBugOutline />
          </span>

          <div className="row-text">
            <h5>Vulns</h5>
            <h4>{data.vulns}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
