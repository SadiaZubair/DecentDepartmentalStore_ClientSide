import React from "react";
import Ticker from "react-ticker";
import './ticker.css'
const MoveStuffAround = () => (
  <div className="ticker">
    <Ticker  style={{width:'80%',height:'fit-content', margin:'auto', marginBottom:'10px', backgroundColor:'#0277BD'}}>
      {({ index }) => (
        <span className="ticker_content">
         Orders placed from 11 am to 6 pm will be delivered on the same day . Orders placed after 6 pm will be delievred the Next Day
        </span>
      )}
    </Ticker>
  </div>
);

export default MoveStuffAround;