import './AddCartProduct.css'
import iconCart from '/images/icon-cart.svg';


export const AddCartProduct = () => {
    const handleAddCart = () => {
        console.log('Add to cart') 
    }
    return (
        <div>
            <button className="btn-add-cart" onClick={handleAddCart}>
                <img src={iconCart} alt="cart" className="cart-img" />
                Add to Cart
            </button>
        </div>
    )
}