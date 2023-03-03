import '../styles/Footer.css';
import logo from '../assets/logo.png'
import twitter from '../assets/twitter.svg'
import insta from '../assets/instagramm.svg'
import whatsapp from '../assets/watsapp.svg'

const Footer = () => {
    return (  
        <footer>
            <div className="footer-container">
                <div className='ls'>
                    <img src={logo} alt="hernalytics-logo" />
                    <p>Isale Eko Avenue, Dolphine Estate, Ikoyi, Lagos, Nigeria</p>
                    <p>&copy; 2022 Hernalytics</p>
                </div>
                <div className="rs">
                    <div className='footer-links'>
                        <h1>About</h1>
                        <div className='links'>
                            <p>Our Story</p>
                            <p>Blog</p>
                            <p>About Hernalytics</p>
                            <p>Videos</p>
                        </div>
                    </div>
                    <div className='footer-links'>
                        <h1>Support</h1>
                        <div className='links'>
                            <p>FAQs</p>
                            <p>Privacy Policy</p>
                            <p>Terms Of Service</p>
                        </div>
                    </div>
                    <div className='footer-links'>
                        <h1>Let's chat!</h1>
                        <div className='links'>
                            <p>hernalytics@gmail.com</p>
                            <p>+234 801 234 5678</p>
                            <div className='socials'>
                                <img src={insta} alt="insta" />
                                <img src={twitter} alt="twiiter" />
                                <img src={whatsapp} alt="whatsapp" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
}
 
export default Footer;