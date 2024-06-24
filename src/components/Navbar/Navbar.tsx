import './Navbar.css'

import { Avatar } from "../Avatar/Avatar"
import { Cart } from "../Cart/Cart"
import { LogoImg } from "../LogoImg/LogoImg"
import { ModalCart } from '../ModalCart/ModalCart'
import { useContext, useState } from 'react'
import { CartContext, CartContextType } from '../../store/cart-context'


export const Navbar = () => {
    const [isDisplayModal, setDisplayModal] = useState<boolean>(false); 
    const handleDisplayModal = () => {
        setDisplayModal(!isDisplayModal)
    }
    const  {isCartEmpty, productNumber, sneakerPrice} = useContext<CartContextType>(CartContext);
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
            <Cart onDisplayModal={handleDisplayModal}  

                  cartEmpty={isCartEmpty}
                  numberProduct={productNumber}/>
              {isDisplayModal && 
                <ModalCart price={sneakerPrice}/>
                }
            <Avatar />
        </nav>
    )
}