import './Cart.css'
import iconCart from '/images/icon-cart.svg';


export const Cart = ({
    numberProduct
}: {
    numberProduct: number
}) => {
    return (
        <div className="cart">
            {numberProduct}
             <img src={iconCart} alt="cart" className="cart-img" />
        </div>
    )
}