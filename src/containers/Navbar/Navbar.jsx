
import Menu from '../../assets/images/Menu.png'
import './Navbar.scss'

function Navbar() {
    return (  
        <div className="navbar">
            <div className="container">
                <div className="collection">
                    <img src={Menu} alt="" />
                    <h3>ALL COLLECTIONS</h3>
                </div>
                <div className="nav-link">
                    <a href="#home">HOME</a>
                    <a href="#shop">SHOP</a>
                    <a href="#blog">BLOG</a>
                    <a href="#about">ABOUT</a>
                    <a href="#contactus">CONTACT US</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;