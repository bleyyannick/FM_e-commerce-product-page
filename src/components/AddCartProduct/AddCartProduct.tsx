import './AddCartProduct.css'
import iconCart from '/images/icon-cart.svg';


export const AddCartProduct = ({ onHandleAddCart}: {
    onHandleAddCart: () => void
}) => {
  
    return (
        <div>
            <button className="btn-add-cart" onClick={onHandleAddCart}>
                <img src={iconCart} alt="cart" className="cart-img" />
                Add to Cart
            </button>
        </div>
    )
}