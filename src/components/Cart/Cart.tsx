
import './Cart.css'
import iconCart from '/images/icon-cart.svg';


export const Cart = ({

    numberProduct, 
    cartEmpty
}: {
    numberProduct: number,
    cartEmpty: boolean
}) => {

    return (
        <div className="cart">
            {!cartEmpty && numberProduct > 0 ? <span className="cart-number">{numberProduct}</span> :null}
             <img src={iconCart} alt="cart" className="cart-img" />
        </div>
    )
}