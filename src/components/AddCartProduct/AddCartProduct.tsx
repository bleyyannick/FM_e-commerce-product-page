import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import './AddCartProduct.css'
import iconCart from '/images/icon-cart.svg';


export const AddCartProduct = () => {
    const {addCart} = useContext(CartContext)
    return (
        <div>
            <button className="btn-add-cart" onClick={addCart}>
                <img src={iconCart} alt="cart" className="cart-img" />
                Add to Cart
            </button>
        </div>
    )
}