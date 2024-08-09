
import { useContext } from 'react';
import { CartContext, CartContextType } from '../../store/cart-context';
import './Cart.css'
import iconCart from '/images/icon-cart.svg';


export const Cart = ({
    cartEmpty, 
    temporaryOrder
}: {
    cartEmpty: boolean,
    temporaryOrder: number
}) => {
    const { handleEnableCart } = useContext<CartContextType>(CartContext);
    return (
        <div className="cart" onClick={handleEnableCart}>
            {(!cartEmpty && temporaryOrder > 0) && <span className="cart-number">{temporaryOrder}</span>}
             <img src={iconCart} alt="cart" className="cart-img" />
        </div>
    )
}