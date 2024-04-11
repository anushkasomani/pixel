import React from "react";
import NFTPreview from "../NFTPreview";

function Detail() {
  return (
    <>
      <div style={{ padding: '50px', fontSize: '50px', textAlign: 'center', fontWeight: '500' }}>OUR COLLECTIONS</div>

    
      
        <div id="f">
          <NFTPreview url='https://i.seadn.io/s/raw/files/b3a80c836d95bd54d298510ef1ad6f5f.png?auto=format&dpr=1&w=1920' creator='Balkan Brothers' title='Cartoon Canvas' />
        </div>
        <div id="s">
          <NFTPreview  url='https://i.seadn.io/s/raw/files/d62fe94fe59a2f8343ac0b1d6feb2365.jpg?auto=format&dpr=1&w=1000' creator='Etharus' title='A Digital Symphony' />
        </div>
        <div id="t">
          <NFTPreview  url='https://i.seadn.io/gae/I_yaP29kuBxsBjmbu8TtwKFhgnBhRCIVJZNOiFqbqY4iVNuvuq2NLgbb2NQglZviUOUHzGcXVA8aPR4Bh2spBr5TPV4uf6xuhdB4?auto=format&dpr=1&w=1000' creator='Peter Voth' title='Quantum Chroma' />
        </div>
        <div id="e">
          <NFTPreview url='https://i.seadn.io/gcs/files/568a0996c78f8892254ae67b8a273798.png?auto=format&dpr=1&w=1000' creator='Balkan Brothers' title='Toonverse Treasures' />
        </div>
      
    </>
  );
}

export default Detail;
