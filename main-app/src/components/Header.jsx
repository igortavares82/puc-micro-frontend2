import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Header = () => {

    return (
        <div className="menu-wrapper">
            <ul className="menu-list">
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/favorit">FAVORIT</Link></li>
                <li><Link to="/watch-list">WATCH LIST</Link></li>
            </ul>
        </div>
    );
}

export default Header;