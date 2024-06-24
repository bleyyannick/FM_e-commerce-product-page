
import { useContext } from 'react'
import './ManageProduct.css'
import { CartContext, CartContextType } from '../../store/cart-context'

export const ManageProduct = () => {
      const { addProduct, substractProduct, productNumber}  =  useContext<CartContextType>(CartContext)
    return (
        <div className='manageProduct'>
            <button onClick={substractProduct}> - </button>
            <span>{productNumber}</span>
            <button onClick={addProduct}> + </button>
        </div>
    )
}