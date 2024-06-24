
import './Cart.css'
import iconCart from '/images/icon-cart.svg';


export const Cart = ({
    cartEmpty,
    onDisplayModal, 
    numberProduct
}: {
    cartEmpty: boolean,
    onDisplayModal: () => void,
    numberProduct: number
}) => {
    
    return (
        <div className="cart" onClick={onDisplayModal}>
            {(!cartEmpty && numberProduct > 0) && <span className="cart-number">{numberProduct}</span> }
             <img src={iconCart} alt="cart" className="cart-img" />
        </div>
    )
}