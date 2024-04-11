import React from "react";
import './Fine.css';
function Fine(props){
    return<>
        
      <div className="for_zoom">
      <img className="nft" src={props.url}></img>
      </div>
    </>
}

export default Fine;