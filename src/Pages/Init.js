import React from "react";
import App from "../App";
import GastMain from "./GastMain";

function Init() {
  const Status = sessionStorage.getItem("userid");
  const Success = sessionStorage.getItem("logged");

  let what = null;
  if (parseInt(Status) > 0 && parseInt(Success) > 0) {
    what = 1;
  }

  return <div>{what ? <App /> : <GastMain />}</div>;
}

export default Init;
