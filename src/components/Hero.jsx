import '../styles/Hero.css';
import { FaChevronDown } from "react-icons/fa";
import map from '../assets/map.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';
import rvArrow from '../assets/rv-arrow.svg';
import avArrow from '../assets/ac-arrow.svg'
import smallMap from '../assets/small-map.svg'


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
                <div className='stats'>
                    <div className='first'>
                        <div className='outer'>
                            <div className="middle">
                                <div className='inner'>
                                    <p>TOTAL VOTES</p>
                                    <h1>168,912,222</h1>
                                </div>
                            </div>
                        </div>
                        <div className="rv">
                            <p>REJECTED VOTES</p>
                            <h2>8,400,000</h2>
                        </div>
                        <div className="ac">
                            <p>ACCEPTED VOTES</p>
                            <h2>160,512,222</h2>
                        </div>
                        <img src={rvArrow} alt="rv" className='rv-arrow'/>
                        <img src={avArrow} alt="av" className='av-arrow' />

                    </div>
                    <div className='second'>
                        <h2>CANDIDATES BY GEOPOLITICAL ZONES</h2>
                        <div className='gp-zones'>
                            <div className="left">
                                <img src={smallMap} alt="small-map" />
                            </div>
                            <div className="right">
                                <div className="ne gp-general">
                                    <div className='ne-con gp-con'>
                                        <div className='rec'></div>
                                        North East 
                                    </div>
                                    <p>3,000</p>
                                </div>
                                <div className="nw gp-general">
                                    <div className='nw-con gp-con'>
                                            <div className='rec'></div>
                                            North West 
                                    </div>
                                    <p>3,000</p>
                                    </div>
                                <div className="nc gp-general">
                                <div className='nc-con gp-con'>
                                    <div className='rec'></div>
                                    North Central 
                                </div>
                                    <p>3,000</p>
                                </div>
                                <div className="sw gp-general">
                                <div className='sw-con gp-con'>
                                        <div className='rec'></div>
                                        South West 
                                </div>
                                    <p>3,000</p>
                                </div>
                                <div className="ss gp-general">
                                <div className='ss-con gp-con'>
                                        <div className='rec'></div>
                                        South South 
                                    </div>
                                    <p>3,000</p>
                                </div>
                                <div className="se gp-general">
                                <div className='se-con gp-con'>
                                        <div className='rec'></div>
                                        South East 
                                    </div>
                                    <p>3,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third'>

                    </div>

                </div>

            </div>
        </section>
    );
}
 
export default Hero;