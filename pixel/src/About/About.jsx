import React from 'react';
import { RiAccountBoxFill, RiFolderOpenFill, RiVipCrownFill, RiVipDiamondFill, RiWallet3Fill} from 'react-icons/ri';

function About() {
  return (
<>     <h1 style={{ textAlign: 'center', fontSize: '43px', margin: '50px' }}>About Us</h1>

    <div>
      <div className="about" id="about">
        <div className="row1" style={{ margin: '50px' }}>
          <div className="column1">
            <div className="card1">
              <div className="abc">
               <RiWallet3Fill className='"ri-wallet-3-fill"'></RiWallet3Fill>
              </div>
              <div className="abt">
                <h2 className="hed">Set Up Your Wallet</h2>
                <p className="para">
                  There are many variations of passagi lpsum available but the majority have eration in some form, by injected
                </p>
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="card1">
              <div className="abc">
                <RiVipCrownFill className='ri-shadow-fill'></RiVipCrownFill>
              </div>
              <div className="abt">
                <h2 className="hed">Create Your Collection</h2>
                <p className="para">
                  There are many variations of passagi lpsum available but the majority have eration in some form, by injected
                </p>
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="card1">
              <div className="abc">
                <RiFolderOpenFill className='ri-folder-open-fill'></RiFolderOpenFill>
              </div>
              <div className="abt">
                <h2 className="hed">Add Your NFTs</h2>
                <p className="para">
                  There are many variations of passagi lpsum available but the majority have eration in some form, by injected
                </p>
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="card1">
              <div className="abc">
                <RiVipDiamondFill className='ri-vip-diamond-fill'></RiVipDiamondFill>
              </div>
              <div className="abt">
                <h2 className="hed">Send Your NFTs</h2>
                <p className="para">
                  There are many variations of passagi lpsum available but the majority have eration in some form, by injected
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer1">
          <div className="footer" style={{ marginTop: '150px' }}>
            <div className="logo" style={{ display: 'flex', columnGap: '35px' }}>
              <div>
                <img src="C:\Users\soman\OneDrive\Desktop\OfficialLogoedited.jpg" className="footer_logo" alt="Pixel Quest Logo" />
              </div>
              <div style={{ fontSize: '25px', fontWeight: '600' }}>Pixel Quest</div>
            </div>

            <div className="fut">Discover Unique NFTs</div>
            <div className="fut">Elevate Your Collection</div>
          </div>

          <div className="other" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="qwe" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '1.5rem' }}>Find Us on Social Media</div>
              <div style={{ display: 'flex', columnGap: '2.5rem', fontSize: '2rem' }}>
                <div><i className="ri-instagram-line"></i></div>
                <div><i className="ri-youtube-line"></i></div>
                <div><i className="ri-twitter-line"></i></div>
                <div><i className="ri-linkedin-line"></i></div>
              </div>
            </div>

            <div style={{ fontSize: '1.2rem' }}>
              <span className="spa">COMMUNITY</span>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Ideas</a></li>
                <li><a href="creators.html">Developers</a></li>
              </ul>
            </div>

            <div style={{ fontSize: '1.2rem' }}>
              <span className="spa">COMPANY</span>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Where to buy</a></li>
                <li><a href="#">Influencers</a></li>
                <li><a href="#">Affiliates</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div style={{ fontSize: '1.2rem' }} className="last">
              <span className="spa">USEFUL LINKS</span>
              <ul>
                <li><a href="#">Product Declaration</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Cookie Settings</a></li>
              </ul>
            </div>
          </div>

          <p>
            © 2023 Pixel Quest NFT Marketplace. All rights reserved. <br />
            Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
