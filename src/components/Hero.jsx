import '../styles/Hero.css';
import { FaChevronDown } from "react-icons/fa";
import map from '../assets/map.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';


const Hero = () => {
    return (  
        <section className="hero-section">
            <div className="hero-container">
                <div className="header-1">
                    <h1>Post Election Data</h1>
                    <div><span>PRESIDENTIAL</span> / <span>2023</span></div>
                </div>
                <div className='header-2'>
                    <h2>Presidential Race</h2>
                    <div className='dropdown-container'>
                        <div>
                            <p>Election Data</p>
                            <FaChevronDown />
                        </div>
                        <div>
                            <p>Presidential</p>
                            <FaChevronDown />
                        </div>
                        <div>
                            <p>2023</p>
                            <FaChevronDown />
                        </div>
                    </div>
                </div>
                <div className="line-through"></div>
                <div className="map-container">
                    <div className='map-img'>
                        <img src={map} alt="map" />
                    </div>
                    <div className='right-side'>
                        <div className='zooms'>
                            <div className="zoom">
                                <img src={plus} alt="plus" />
                            </div>
                            <div className="zoom">
                                <img src={minus} alt="minus" />
                            </div>
                        </div>
                        <div className='parties'>
                            <div className='apc'>
                                <div></div>
                                APC
                            </div>
                            <div className='lp'>
                                <div></div>
                                LP
                            </div>
                            <div className='pdp'>
                                <div></div>
                                PDP
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
 
export default Hero;