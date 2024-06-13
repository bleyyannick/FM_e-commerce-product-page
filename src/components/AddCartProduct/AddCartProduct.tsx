import './AddCartProduct.css'
import iconCart from '/images/icon-cart.svg';


export const AddCartProduct = () => {
    return (
        <div>
            <button className="btn-add-cart">
                <img src={iconCart} alt="cart" className="cart-img" />
                Add to Cart
            </button>
        </div>
    )
}