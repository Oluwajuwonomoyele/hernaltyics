import '../styles/Hero.css';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
} from '@chakra-ui/react';
import { FaChevronDown } from "react-icons/fa";
import filter from '../assets/filter.svg'
import Map from './Map';
import Stats from './Stats';
import TopResults from './TopResults';
import StateResults from './StateResults';


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
                                    border='2px solid #252B46'>
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
                                    border='2px solid #252B46'>
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
                                    border='2px solid #252B46'>
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
                <TopResults />
                <div className="line-through"></div>
                <Map />
                <StateResults />
                <Stats />
            </div>
        </section>
    );
}
 
export default Hero;