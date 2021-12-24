
import { 
    BellIcon,
    GroupIcon,
    LogoIcon, 
    SearchIcon, 
    ShopIcon 
} from '../../assets/icons/icons';

import './Header.scss'

function Header() {
    return (  
        <div className="header">
            <div className="container">
                <div className="logo">
                    <LogoIcon/>
                    <h1>Furniking</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search here' />
                    <div className="line"></div>
                    <select>
                        <option value="categories">Categories</option>
                        <option value="categories">Categories</option>
                        <option value="categories">Categories</option>
                    </select>
                    <div className="search-icon">
                        <SearchIcon/>
                    </div>
                </div>
                <div className="icons">
                    <ShopIcon />
                    <BellIcon />
                    <GroupIcon />
                </div>
            </div>
        </div>
    );
}

export default Header;