import styled from "styled-components";
import React from 'react';
import "./Humberger.scss";

function Humburger() {
  return (
    <div className="hum-con">
        <div className="lines active" id="1"></div>
        <div className="lines active" id="2"></div>
        <div className="lines active" id="3"></div>
    </div>
  )
}

export default Humburger
