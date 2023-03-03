import logo from '../assets/logo.png';
import '../styles/Navbar.css'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
} from '@chakra-ui/react';
import { FaChevronDown, FaUserAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import users from '../assets/users.svg';
import reporter from '../assets/reporter.svg';
import dtr from '../assets/dtr.svg';


const Navbar = () => {
    return (  
        <nav>
            <section>
                <div className='logo'>
                    <img src={logo} alt="hernalytics-logo" />
                </div>

                <div className="nav-links-container">
                    <div className='nav-links'>
                        <p>about us</p>
                        <Menu >
                            {({isOpen}) => (
                                <>
                                    <MenuButton
                                    px={2}
                                    py={1}
                                    outline='none'
                                    border='none'
                                    textTransform='uppercase'
                                    fontWeight='bold'
                                    background='transparent'
                                    color='white'
                                    fontSize='14px'
                                    cursor='pointer'
                                    isActive={isOpen}>
                                    <Flex gap={3} alignItems='center'>
                                    <p>our communities</p>
                                    <FaChevronDown />
                                    </Flex>
                                    </MenuButton>
                                    <MenuList 
                                    color='rgb(56,97,116)'
                                    background='white'
                                    p={2}
                                    >
                                        <Flex maxWidth={700} flexWrap='wrap'>
                                            <MenuItem 
                                            fontSize='14px'
                                            p={5}
                                            flexBasis={350}
                                            border='transparent'
                                            background='white'
                                            cursor='pointer'>
                                                <Flex alignItems='center' gap={3}>
                                                    <div className='comm-icon-div'>
                                                        <FaUserAlt size={20}/>
                                                    </div>
                                                    <div className='comm-content-div'>
                                                        <h1>General User</h1>
                                                        <p>Odio mi in id tellus turpis elementum ipsum</p>
                                                    </div>
                                                </Flex>
                                            </MenuItem>
                                            <MenuItem
                                            fontSize='14px'
                                            p={5}
                                            flexBasis={350}
                                            border='transparent'
                                            background='white'
                                            cursor='pointer'
                                            >
                                                <Flex alignItems='center' gap={3}>
                                                    <div className='comm-icon-div'>
                                                        <img src={users} alt="users" />
                                                    </div>
                                                    <div className='comm-content-div'>
                                                        <h1>Election Candidates</h1>
                                                        <p>Odio mi in id tellus turpis elementum ipsum</p>
                                                    </div>
                                                </Flex>
                                            </MenuItem>
                                            <MenuItem
                                            fontSize='14px'
                                            p={5}
                                            flexBasis={350}
                                            border='transparent'
                                            background='white'
                                            cursor='pointer'
                                            >
                                                <Flex alignItems='center' gap={3}>
                                                    <div className='comm-icon-div'>
                                                        <img src={dtr} alt="dtr" />
                                                    </div>
                                                    <div className='comm-content-div'>
                                                        <h1>Decide To Run (DTR)</h1>
                                                        <p>Odio mi in id tellus turpis elementum ipsum</p>
                                                    </div>
                                                </Flex>
                                            </MenuItem>
                                            <MenuItem
                                            fontSize='14px'
                                            p={5}
                                            flexBasis={350}
                                            border='transparent'
                                            background='white'
                                            cursor='pointer'
                                            >
                                                <Flex alignItems='center' gap={3}>
                                                    <div className='comm-icon-div'>
                                                        <img src={reporter} alt="reporter" />
                                                    </div>
                                                    <div className='comm-content-div'>
                                                        <h1>Reporters</h1>
                                                        <p>Odio mi in id tellus turpis elementum ipsum</p>
                                                    </div>
                                                </Flex>
                                            </MenuItem>
                                        </Flex>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                        <Menu >
                            {({isOpen}) => (
                                <>
                                    <MenuButton
                                    px={2}
                                    py={1}
                                    outline='none'
                                    border='none'
                                    textTransform='uppercase'
                                    fontWeight='bold'
                                    background='transparent'
                                    color='white'
                                    fontSize='14px'
                                    cursor='pointer'
                                    isActive={isOpen}>
                                    <Flex gap={3} alignItems='center'>
                                    <p>election data</p>
                                    <FaChevronDown />
                                    </Flex>
                                    </MenuButton>
                                    <MenuList 
                                    minW={230}
                                    color='rgb(56,97,116)'
                                    background='white'
                                    outline='none'
                                    border='none'
                                    >
                                        <MenuItem 
                                        fontSize='14px'
                                        p={3}
                                        outline='none'
                                        fontWeight='semibold'
                                        border='none'
                                        backgroundColor='white'>Election Day Live Updates</MenuItem>
                                        <MenuItem
                                        fontSize='14px'
                                        p={3}
                                        outline='none'
                                        fontWeight='semibold'
                                        borderColor='rgb(238,238,240)'
                                        borderBottom='none'
                                        borderLeft='none'
                                        borderRight='none'
                                        borderTopWidth={2}
                                        background='white'>Post-Election Analysis</MenuItem>
                                    </MenuList>
                                </>
                            )}
                        </Menu>
                        <p>e-buddy</p>
                        <p>veo platform</p>
                    </div>
                    <div className='user-links'>
                        <button>log in</button>
                        <button className='sign-up'>sign up</button>
                    </div>
                </div>

                <div className='menu'>
                    <HiMenu />
                </div>
            </section>
        </nav>
    );
}
 
export default Navbar;