import miniImgProduct from '/images/image-product-1-thumbnail.jpg'; 
import iconDelete from '/images/icon-delete.svg';
import './ModalCart.css'

export const ModalCart = ({totalProductNumber, price, isNotAvailable, onDelete}: 
    {totalProductNumber: number | null, 
     price: number, 
     isNotAvailable:boolean,
     onDelete: () => void }) => {

    const totalAmount: number = totalProductNumber ? totalProductNumber * price : 0;
    const contentCart = 
            <div>
                <img className="modal-cart-img" src={miniImgProduct} alt="image product" />
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>${price} x {totalProductNumber}   {totalAmount}</p>
                </div>
                <img className="modal-cart-delete" src={iconDelete} onClick={onDelete}  alt="delete icon image" />
                <div>
                <button className="modal-cart-btn"> Checkout</button>
                </div>
            </div>
    return (
        <div>
            <h3>Modal Cart</h3>
            {isNotAvailable || totalProductNumber === 0 ? 'Cart is empty' : contentCart}     
        </div>
    )
}