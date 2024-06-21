import miniImgProduct from '/images/image-product-1-thumbnail.jpg'; 
import iconDelete from '/images/icon-delete.svg';
import './ModalCart.css'

export const ModalCart = ({totalProductNumber, price}:
    {totalProductNumber: number | null,
         price: number | null }) => {
    return (
        <div>
            <h3>Modal Cart</h3>
            <div>
               <img className="modal-cart-img" src={miniImgProduct} alt="image product" />
               <div>
                     <p>Fall Limited Edition Sneakers</p>
                     <p>${price} x {totalProductNumber}</p>
               </div>
               <img className="modal-cart-delete" src={iconDelete}  alt="delete icon image" />
               <div>
                <button className="modal-cart-btn"> Checkout</button>
               </div>
            </div>
        </div>
    )
}