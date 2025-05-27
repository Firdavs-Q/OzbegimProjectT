import React from 'react';
import "./css/asosiy.css"
import MenuBar from "./models/menuBar"

const TuristAsosiyP = () => {
    return (
        // T turist
        //A Asosy
        <div className="TAcontainer">
         <div className="TAheader">
           <MenuBar/>
         </div>
         <div className="contentBody">
            <div className="joylarCartasi">
              <span> <h3>Oq-Saroy</h3> <h5>Shahrisabiz</h5></span>
              <span> <h3>Registon</h3> <h5>Samarqand</h5></span>
            </div>
            <div className="malumotCartasi">

            </div>
         </div>
        </div>
    );
}
export default TuristAsosiyP;