import miniImgProduct from '/images/image-product-1-thumbnail.jpg'; 
import './ModalCart.css'

export const ModalCart = () => {
    return (
        <div>
            <h3>Modal Cart</h3>
            <div>
               <img className="modal-cart-img" src={miniImgProduct} alt="image product" />
            </div>
        </div>
    )
}