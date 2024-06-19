import { AddCartProduct } from '../AddCartProduct/AddCartProduct';
import { ManageProduct } from '../ManageProduct/ManageProduct';
import './ProductDetailContainer.css';

export const ProductDetailContainer = ({
    onAddProduct,
    onSubProduct, 
    productNumber,
    onHandleAddCart,
    sneakerPrice
}: {
    onAddProduct: () => void,
    onSubProduct: () => void, 
    productNumber: number,
    onHandleAddCart: () => void
    sneakerPrice: number
}) => {
    return (
        <section>
          <p>Sneaker Company</p>  
          <h1>Fall Limited Editions Sneakers</h1>
          <p> 
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
          </p>
          <div>
            <span>${sneakerPrice.toFixed(2)}</span> <span>50%</span>
          </div>
          <p>$250.00</p>
          <div className='handleProductContainer'>
            <ManageProduct  
              onAddProduct={onAddProduct}  
              onSubProduct={onSubProduct}
              productNumber={productNumber}
              />
            <AddCartProduct onHandleAddCart={onHandleAddCart} />
          </div>
        </section>
    )
}