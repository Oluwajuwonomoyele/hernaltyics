import '../styles/Hero.css';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
} from '@chakra-ui/react';
import { FaChevronDown } from "react-icons/fa";
import map from '../assets/map.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';
import rvArrow from '../assets/rv-arrow.svg';
import avArrow from '../assets/ac-arrow.svg'
import smallMap from '../assets/small-map.svg'
import male from '../assets/male.svg'
import female from '../assets/female.svg'
import filter from '../assets/filter.svg'


const Hero = () => {
    return (  
        <section className="hero-section">
            <div className="hero-container">
                <div className="header-1">
                    <h1>Post Election Data</h1>
                    <div><span>PRESIDENTIAL</span> / <span>2023</span></div>
                    <h4><span>UPDATED</span> MAR. 15, 2021, 9:43 A.M. EDT</h4>
                </div>
                <div className='header-2'>
                    <div className="filters">
                        <p>Apply Filters</p>
                        <img src={filter} alt="filter" />
                    </div>
                    <h2>Presidential Race</h2>
                    <div className='dropdown-container'>
                        <Menu >
                            {({isOpen}) => (
                                <>
                                    <MenuButton
                                    px={5}
                                    py={1}
                                    width='260px'
                                    height='45px'
                                    outline='none'
                                    background='#1C2031'
                                    borderRadius='4px'
                                    color='white'
                                    fontSize='14px'
                                    cursor='pointer'
                                    border='2px solid #252B46'
                                    isActive={isOpen}>
                                    <Flex justifyContent='space-between' alignItems='center'>
                                        <p>Post Election</p>
                                        <FaChevronDown />
                                    </Flex>
                                    </MenuButton>
                                    <MenuList 
                                    width='260px'
                                    border='2px solid #212842'
                                    borderRadius='6px'
                                    px={2}
                                    zIndex={5}
                                    background='#131726'
                                    >
                                        <MenuItem 
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem' 
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>Pre-Election</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>Election Day Live Updates</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>Post Election Analysis</MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                        <Menu >
                            {({isOpen}) => (
                                <>
                                    <MenuButton
                                    px={5}
                                    py={1}
                                    width='260px'
                                    height='45px'
                                    outline='none'
                                    background='#1C2031'
                                    borderRadius='4px'
                                    color='white'
                                    fontSize='14px'
                                    cursor='pointer'
                                    border='2px solid #252B46'
                                    isActive={isOpen}>
                                    <Flex justifyContent='space-between' alignItems='center'>
                                        <p>Presedential</p>
                                        <FaChevronDown />
                                    </Flex>
                                    </MenuButton>
                                    <MenuList 
                                    width='260px'
                                    border='1px solid #212842'
                                    borderRadius='6px'
                                    zIndex={5}
                                    background='#131726'
                                    px={2}
                                    >
                                        <MenuItem 
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem' 
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>Presedential</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>Gubernatorial</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>Senate</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>House of Representatives</MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                        <Menu >
                            {({isOpen}) => (
                                <>
                                    <MenuButton
                                    px={5}
                                    py={1}
                                    width='260px'
                                    height='45px'
                                    outline='none'
                                    background='#1C2031'
                                    borderRadius='4px'
                                    color='white'
                                    fontSize='14px'
                                    cursor='pointer'
                                    border='2px solid #252B46'
                                    isActive={isOpen}>
                                    <Flex justifyContent='space-between' alignItems='center'>
                                        <p>2023</p>
                                        <FaChevronDown />
                                    </Flex>
                                    </MenuButton>
                                    <MenuList 
                                    width='260px'
                                    border='1px solid #212842'
                                    borderRadius='6px'
                                    zIndex={5}
                                    p={2}
                                    background='#131726'
                                    >
                                        <MenuItem 
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem' 
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>2023</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>2019</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>2015</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>2011</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>2007</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>2003</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>1999</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>1995</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>1991</MenuItem>
                                        <div className='dd-line'></div>
                                        <MenuItem
                                        cursor='pointer'
                                        fontSize='14px'
                                        p='1rem 0.5rem'
                                        color='#C6C7CB'
                                        border='none'
                                        background='#131726'>1987</MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
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

            </div>
        </section>
    );
}
 
export default Hero;