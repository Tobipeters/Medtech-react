import React from "react";
import LoaderGif from "../assets/images/Loader.gif";
const style = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: 'rgba(240,240,240, .8)',
  position: 'fixed',
  right: '0',
  top: '0',
  left: '0',
  bottom: '0'
};

const Loader = () => {
  return (
    <div style={style}>
      <img src={LoaderGif} width="200" height="200" />
    </div>
  );
};

export default Loader
