import React from 'react';
import { RiEyeLine, RiHeart3Line, RiImageLine } from 'react-icons/ri';


function NFTPreview(props) {
  return (
    <div className="preview" id="1preview">
      <div className="nimage">
        <img src={props.url} className="pq1" alt="NFT Preview" />
      </div>
      <div className="otherdetails">
        <div>
          <h2 className="titleofnft">{props.title}</h2>
          <h3 style={{ fontSize: '20px', marginBottom: '30px' }}>Owned by <span style={{ color: 'royalblue' }}>{props.creator}</span></h3>
        </div>
        <div className="icons">
          <div><RiEyeLine/><span className="articles">143 Views</span></div>
          <div><RiHeart3Line/><span className="articles">4 Likes</span></div>
          <div><RiImageLine/><span className="articles">Art</span></div>
        </div>
        <div className="price_stat">
          <div style={{ padding: '15px' }}>
            <h3 style={{ color: 'royalblue' }}>Current Price</h3>
            <h1 style={{ marginBottom: '15px' }}>0.05ETH <span style={{ fontSize: '20px' }}>118.31$</span></h1>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button className="buybtn" style={{ width: '50%', fontFamily: 'sans-serif', backgroundColor: 'royalblue', border: 'none', height: '40px', fontSize: '1.2rem', borderRadius: '2rem', marginBottom: '15px' }}>Buy Now</button>
          </div>
        </div>
        <div className="nftabout"></div>
      </div>
      <div><i className="ri-close-circle-line preview_close" id="preview-close"></i></div>
    </div>
  );
}

export default NFTPreview;
