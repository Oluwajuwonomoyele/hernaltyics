import logo from '../assets/logo.png';
import '../styles/Navbar.css'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
} from '@chakra-ui/react';
import { FaChevronDown } from "react-icons/fa";

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
                                        borderColor='rgb(56,97,116)'
                                        borderWidth={1}>General User</MenuItem>
                                        <MenuItem
                                        fontSize='14px'
                                        p={3}
                                        outline='none'
                                        fontWeight='semibold'
                                        borderColor='rgb(56,97,116)'
                                        borderWidth={1}>Decide To Run</MenuItem>
                                        <MenuItem
                                        fontSize='14px'
                                        p={3}
                                        outline='none'
                                        fontWeight='semibold'
                                        borderColor='rgb(56,97,116)'
                                        borderWidth={1}>Election Candidates</MenuItem>
                                        <MenuItem
                                        fontSize='14px'
                                        p={3}
                                        outline='none'
                                        fontWeight='semibold'
                                        borderColor='rgb(56,97,116)'
                                        borderWidth={1}>Reporters</MenuItem>
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
                                        borderColor='rgb(238,238,240)'
                                        borderWidth={2}>Election Day Live Updates</MenuItem>
                                        <MenuItem
                                        fontSize='14px'
                                        p={3}
                                        outline='none'
                                        fontWeight='semibold'
                                        borderColor='rgb(238,238,240)'
                                        borderWidth={2}>Post-Election Analysis</MenuItem>
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
            </section>
        </nav>
    );
}
 
export default Navbar;