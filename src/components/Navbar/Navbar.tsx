import './Navbar.css'
import { Avatar } from "../Avatar/Avatar"
import { Cart } from "../Cart/Cart"
import { LogoImg } from "../LogoImg/LogoImg"
import { ModalCart } from '../ModalCart/ModalCart'
import { useContext} from 'react'
import { CartContext, CartContextType } from '../../store/cart-context'


export const Navbar = () => {
    const  { isCartEmpty, isCartVisible , productNumber } = useContext<CartContextType>(CartContext);
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
            <Cart cartEmpty={isCartEmpty} numberProduct={productNumber}/>
              {isCartVisible && <ModalCart isCartEmpty={isCartEmpty} productNumber={productNumber}/>}
            <Avatar />
        </nav>
    )
}