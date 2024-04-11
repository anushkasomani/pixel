import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import ParticlesComponent from '../config/particlesconfig';
import Homepage from '../Homepage/Homepage';
import Marquee from 'react-fast-marquee';
import Card from '../Card/Card';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from '../About/About';


function Home() {


  return (
    <>
      <Navbar />
      <ParticlesComponent id="particles">hello</ParticlesComponent>
      <Homepage />

      <div>
        <Marquee>
          <img src='https://i.seadn.io/gcs/files/e0855e5aa42466bf40d8a267dfad5539.gif?auto=format&dpr=1&w=1000' className='slider_img' style={{"width":'400px', "height":'400px',"margin-bottom":'100px',"objectFit":'cover'}}></img>
          <img src='https://i.seadn.io/s/raw/files/03c2eb17e82ea44a5df3f93247e4d316.jpg?auto=format&dpr=1&w=1920' className='slider_img' style={{"width":'400px', "height":'400px',"margin-bottom":'100px'}}></img>
          <img src='https://i.seadn.io/s/raw/files/682cbca413a727b3dbc691542e8b0aa3.png?auto=format&dpr=1&w=1000' className='slider_img' style={{"width":'400px', "height":'400px',"margin-bottom":'100px'}}></img>
          <img src='https://i.seadn.io/s/raw/files/3ef1802e9eed364226db221dfc186c2b.jpg?auto=format&dpr=1&w=1000' className='slider_img' style={{"width":'400px', "height":'400px',"margin-bottom":'100px'}}></img>
          <img src='https://i.seadn.io/gcs/files/4bde84f462c287a8d41064b0a9ee76e9.png?auto=format&dpr=1&w=1000' className='slider_img' style={{"width":'400px', "height":'400px',"margin-bottom":'100px'}}></img>
        </Marquee>
      </div>

      <div className="NFT_collection" id="scroll">
        <h1 className="our_collection">Our Collections</h1>
      </div>

      <Card />

      <About></About>

    

     

  





      
    </>
  );
}

export default Home;
