import React from 'react';
import { FaCopyright, FaFacebook, FaGit, FaGithub, FaHome, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: 'black', marginRight:'2rem'}} />
                        <div>
                        <p>H no. 19 High Court</p>
                        <p>Old Janipur Jammu</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <FaPhone size={20} style={{ color: 'black', marginRight:'2rem'}} />
                        +919622025016
                    </div>
                    <div className='mail'>
                        <FaMailBulk size={20} style={{color:'black',marginRight:'2rem'}}></FaMailBulk>    
                        kumaradasrh6@gmail.com
                    </div>

                </div>
                <div className='right'>
                    <h4>About Us</h4>
                    <p>I am working as backend developer
                        in TCS.I know Web development skills
                        like HTML/CSS Node and React. I graduated 
                        from Dr. DY patil Institute of technology Pune. 
                    </p>
                    <div className='social'>
                    <FaFacebook size={20} style={{color:'black',marginRight:'0.7rem',cursor:'pointer'}}></FaFacebook>
                    <FaTwitter size={20} style={{color:'black',marginRight:'0.7rem',cursor:'pointer'}}></FaTwitter>
                    <FaGithub size={20} style={{color:'black',marginRight:'0.7rem',cursor:'pointer'}}></FaGithub>
                    
                    </div>
                </div>

            </div>
            <div className='bottom'>
                <p>Terms of Use | Copyright <FaCopyright size={15} style={{color:'white'}}></FaCopyright> All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer