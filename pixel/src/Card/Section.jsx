import React from 'react';
import Card from './Card';
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import './Section.css';



function Section(props){

 

 
return<>
  <div className='nav__lin'>{props.title}</div>
  <div className='creator'>
    <div></div>
    <div className='creator_name'>{props.creator}</div>
  </div>
  
  <div className="pricing">
      <div><RiMoneyEuroCircleLine></RiMoneyEuroCircleLine></div>
      <div className="ethe">0.05ETH</div>
    </div>
      
    
  
</>
}

export default Section;
