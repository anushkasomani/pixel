import React from "react";
import Fine from "../Fine/Fine";
import './Card.css';
import Section from "./Section";
import Detail from "./Details/Details";


function Card(){
    
  return<>
  <h1 className="head" style={{"marginBottom":'50px'}}>
            Art
        </h1>
    <div className='art'>
    <div className="column">
    <div className="card">
    <Fine url={'https://i.seadn.io/s/raw/files/b3a80c836d95bd54d298510ef1ad6f5f.png?auto=format&dpr=1&w=1920'}>

</Fine>
<Section title='Cartoon Canvas' creator='By Balkan Brothers'></Section>
<div className="qer">
    
          <button className="buy" onClick={()=>{window.location.href = '/detail#f';}} >Buy Now</button>
        
        <button className="cart">Add to Cart</button>
      </div>
    </div>
</div>

<div className="column">
<div className="card">
<Fine url={'https://i.seadn.io/s/raw/files/d62fe94fe59a2f8343ac0b1d6feb2365.jpg?auto=format&dpr=1&w=1000'}>

</Fine>
<Section title='A Digital Symphony' creator='By Etharus'></Section>
<div className="qer">
    
          <button className="buy" onClick={()=>{window.location.href = '/detail#s';}} >Buy Now</button>
        
        <button className="cart">Add to Cart</button>
      </div>
</div>

</div>
<div className="column">
<div className="card">
<Fine url={'https://i.seadn.io/gae/I_yaP29kuBxsBjmbu8TtwKFhgnBhRCIVJZNOiFqbqY4iVNuvuq2NLgbb2NQglZviUOUHzGcXVA8aPR4Bh2spBr5TPV4uf6xuhdB4?auto=format&dpr=1&w=1000'}>

</Fine>
<Section title='Quantum Chroma' creator='By Peter Voth'></Section>
<div className="qer">
    
          <button className="buy" onClick={()=>{window.location.href = '/detail#t';}} >Buy Now</button>
        
        <button className="cart">Add to Cart</button>
      </div>
</div>
</div>

<div className="column">
<div className="card">
<Fine url={'https://i.seadn.io/gcs/files/568a0996c78f8892254ae67b8a273798.png?auto=format&dpr=1&w=1000'}>

</Fine>
<Section title='Toonverse Treasures' creator='By Balkan Brothers'></Section>
<div className="qer">
    
          <button className="buy" onClick={()=>{window.location.href = '/detail#e';}} >Buy Now</button>
        
        <button className="cart">Add to Cart</button>
      </div>
</div>
</div>
</div>



















<h1 className="head" style={{"marginBottom":'50px'}}>
            PHOTGRAPHY
        </h1>
    <div className='art'>
    <div className="column">
    <div className="card">
    <Fine url={'https://bitchcoinpetals.s3.amazonaws.com/petals_webversion/Petal+14_125.jpg'}>

</Fine>
<Section title='Bitchcoin' creator='By Balkan Brothers'></Section>
<div className="qer">
    
          <button className="buy" onClick={()=>{window.location.href = '/detail';}} >Buy Now</button>
        
        <button className="cart">Add to Cart</button>
      </div>
    </div>
</div>

<div className="column">
<div className="card">
<Fine url={'https://i.seadn.io/gcs/files/2df5bcd344a79098751f9683691657f0.jpg?auto=format&dpr=1&w=1000'}>

</Fine>
<Section title='AS10k+ ' creator='By Etharus'></Section>
<div className="qer">
    
          <button className="buy" onClick={()=>{window.location.href = '/detail';}} >Buy Now</button>
        
        <button className="cart">Add to Cart</button>
      </div>
</div>

</div>
<div className="column">
<div className="card">
<Fine url={'https://i.seadn.io/gcs/files/0ed50a4f478326dfed14ff2915ca6229.jpg?auto=format&dpr=1&w=1000'}>

</Fine>
<Section title='First Day Out' creator='By Peter Voth'></Section>
<div className="qer">
    
          <button className="buy" onClick={()=>{window.location.href = '/detail';}} >Buy Now</button>
        
        <button className="cart">Add to Cart</button>
      </div>
</div>
</div>

<div className="column">
<div className="card">
<Fine url={'https://i.seadn.io/s/raw/files/66636a9786824e75e82428a8401f57cf.jpg?auto=format&dpr=1&w=1000'}>

</Fine>
<Section title='10 Ver.1' creator='By Balkan Brothers'></Section>
<div className="qer">
    
          <button className="buy" onClick={()=>{window.location.href = '/detail';}} >Buy Now</button>
        
        <button className="cart">Add to Cart</button>
      </div>
</div>
</div>
</div>
    
  </>
}
export default Card
