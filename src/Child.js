import React, { useState } from "react";
import "./Child.css"
import boy from "./assets/boy.jpg";

export default function Child({ name }) {
  const [patsOnBillysHead, setPatsOnBillysHead] = useState(0);

  function patBillysHead() {
    setPatsOnBillysHead(patsOnBillysHead + 1);
  }

  return (
    <div>
      <h2>{name}</h2>
      <img onClick={patBillysHead} src={boy} alt={name} title={name} />
      <p>Number of pats 👋: {patsOnBillysHead}</p>
    </div>
  );
}

