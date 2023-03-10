import rvArrow from '../assets/rv-arrow.svg';
import avArrow from '../assets/ac-arrow.svg'
import smallMap from '../assets/small-map.svg'
import male from '../assets/male.svg'
import female from '../assets/female.svg'

import '../styles/Stats.css'


const Stats = () => {
    return ( 
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
                                <span className='full'>North East </span>
                                <span className="short">NE</span>
                            </div>
                            <p>3,000</p>
                        </div>
                        <div className="nw gp-general">
                            <div className='nw-con gp-con'>
                                    <div className='rec'></div>
                                    <span className='full'>North West </span>
                                    <span className="short">NW</span>
                            </div>
                            <p>3,000</p>
                            </div>
                        <div className="nc gp-general">
                        <div className='nc-con gp-con'>
                            <div className='rec'></div>
                            <span className='full'>North Central </span>
                            <span className="short">NC</span>
                        </div>
                            <p>3,000</p>
                        </div>
                        <div className="sw gp-general">
                        <div className='sw-con gp-con'>
                                <div className='rec'></div>
                                <span className='full'>South West </span>
                                <span className="short">SW</span>
                        </div>
                            <p>3,000</p>
                        </div>
                        <div className="ss gp-general">
                        <div className='ss-con gp-con'>
                                <div className='rec'></div>
                                <span className='full'>South South </span>
                                <span className="short">SS</span>
                            </div>
                            <p>3,000</p>
                        </div>
                        <div className="se gp-general">
                        <div className='se-con gp-con'>
                                <div className='rec'></div>
                                <span className='full'>South East</span> 
                                <span className="short">SE</span>
                            </div>
                            <p>3,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='third'>
                <div className='third-header'>
                    <h2>TOTAL ELECTED MEMBERS</h2>
                    <p>10,000</p>
                </div>

                <div className='tem'>
                    <div>
                        <h4><span>MALE</span> <img src={male} alt="male" /></h4>
                        <p>9,000</p>
                    </div>
                    <div>
                        <h4><span>FEMALE</span> <img src={female} alt="female" /></h4>
                        <p>1,000</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Stats;