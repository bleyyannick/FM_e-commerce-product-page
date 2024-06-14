import './Navbar.css'

import { Avatar } from "../Avatar/Avatar"
import { Cart } from "../Cart/Cart"
import { LogoImg } from "../LogoImg/LogoImg"


export const Navbar = () => {
    return (
        <nav>
            <LogoImg />
            <ul className="navbar-menu">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <Cart />
            <Avatar />
        </nav>
    )
}