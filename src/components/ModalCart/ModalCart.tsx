import miniImgProduct from '/images/image-product-1-thumbnail.jpg'; 
import iconDelete from '/images/icon-delete.svg';
import './ModalCart.css'
import { CartContext, CartContextType } from '../../store/cart-context';
import { useContext } from 'react';

export const ModalCart = ({productNumber, isCartEmpty} : {
    productNumber: number,
    isCartEmpty: boolean
}) => {
       const {deleteCart, sneakerPrice} = useContext<CartContextType>(CartContext); 
       const totalAmount = productNumber ? productNumber * sneakerPrice : 0;

    const contentCart = 
            <div>
                <img className="modal-cart-img" src={miniImgProduct} alt="image product" />
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>${sneakerPrice} x {productNumber}   {totalAmount}</p>
                </div>
                <img className="modal-cart-delete" src={iconDelete} onClick={deleteCart}  alt="Delete icon image" />
                <div>
                    <button className="modal-cart-btn"> Checkout</button>
                </div>
            </div>
    return (
        <div>
            <h3>Modal Cart</h3>
            {isCartEmpty || productNumber === 0 ? 'Cart is empty' : contentCart}     
        </div>
    )
}