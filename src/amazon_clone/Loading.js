import React from "react";
import Gif from "./assets/images/loading.gif";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position:'fixed',
        top:'0',
        left:'0',
        zIndex:'999',
        background:'#00000055',
        border:'none'
      }} >
      <img style={{ width: "70px", }} src={Gif} alt="refresh" />
    </div>
  );
};

export default Loading;
