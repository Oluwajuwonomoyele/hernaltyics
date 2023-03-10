import map from '../assets/map.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';
import useFetch from '../hooks/useFetch';

import '../styles/Map.css';

const Map = () => {
    return (  
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
    );
}
 
export default Map;