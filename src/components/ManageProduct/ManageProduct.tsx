import { useState } from 'react'
import './ManageProduct.css'

export const ManageProduct = () => {
    const [productNumber, setProductNumber] = useState<number>(0)

    const substractProductNumber = () => {
        if (productNumber > 0) {
            setProductNumber(productNumber - 1)
        } else {
            setProductNumber(0)
        }
    }
    const addProductNumber = () => setProductNumber(productNumber + 1)
    
    return (
        <div className='manageProduct'>
            <button onClick={substractProductNumber}> - </button>
            <span>{productNumber}</span>
            <button onClick={addProductNumber}> + </button>
        </div>
    )
}