import React from "react";
import qr from "../../Assets/qrcode.png";
const BackPart = ({ TheamColor }) => {
  return (
    <div className={`card backpart my-4 ${TheamColor}`}>
      <div className="box">
        <img src={qr} className="img-fluid" alt="scabber" srcset="" />
      </div>
    </div>
  );
};

export default BackPart;
