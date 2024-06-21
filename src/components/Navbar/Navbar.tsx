import './Navbar.css'

import { Avatar } from "../Avatar/Avatar"
import { Cart } from "../Cart/Cart"
import { LogoImg } from "../LogoImg/LogoImg"
import { ModalCart } from '../ModalCart/ModalCart'
import { useState } from 'react'


export const Navbar = ({ 
    numberProduct, 
    cartEmpty, 
    sneakerPrice
}: { 
    numberProduct: number, 
    cartEmpty: boolean, 
    sneakerPrice: number
}) => {
    const [isDisplayModal, setDisplayModal] = useState<boolean>(false); 
    const handleDisplayModal = () => {
        setDisplayModal(!isDisplayModal)
    }
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
                  sneakerPrice={sneakerPrice} 
                  cartEmpty={cartEmpty} 
                  numberProduct={numberProduct} />
              {isDisplayModal && 
                <ModalCart 
                totalProductNumber={numberProduct} 
                price={sneakerPrice}
                isNotAvailable={cartEmpty}/>
                }
            <Avatar />
        </nav>
    )
}