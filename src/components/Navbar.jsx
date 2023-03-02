import logo from '../assets/logo.png';
import '../styles/Navbar.css'

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
                        <p>our communities</p>
                        <p>election data</p>
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