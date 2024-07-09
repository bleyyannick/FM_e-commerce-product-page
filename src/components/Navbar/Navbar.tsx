import './Navbar.css'
import { Avatar } from "../Avatar/Avatar"
import { Cart } from "../Cart/Cart"
import { LogoImg } from "../LogoImg/LogoImg"
import { ModalCart } from '../ModalCart/ModalCart'
import { useContext} from 'react'
import { CartContext, CartContextType } from '../../store/cart-context'
import  burgerMenuImg  from '/images/icon-menu.svg';



export const Navbar = () => {
    const  { isCartEmpty, isCartVisible , productNumber } = useContext<CartContextType>(CartContext);
    return (
        <nav>
            <div className="navbar-burger">
                <img src={burgerMenuImg} alt="menu burger for navigation" />
            </div>
            <LogoImg />
            <ul className="navbar-menu">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <Cart cartEmpty={isCartEmpty} numberProduct={productNumber}/>
              {isCartVisible && <ModalCart isCartEmpty={isCartEmpty} productNumber={productNumber}/>}
            <Avatar />
        </nav>
    )
}