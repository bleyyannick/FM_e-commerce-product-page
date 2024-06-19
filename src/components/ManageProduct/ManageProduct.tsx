
import './ManageProduct.css'

export const ManageProduct = ({
    onAddProduct,
    onSubProduct,
    productNumber, 
}: {
    onAddProduct: () => void,
    onSubProduct: () => void,
    productNumber: number
}) => {
    
    return (
        <div className='manageProduct'>
            <button onClick={onSubProduct}> - </button>
            <span>{productNumber}</span>
            <button onClick={onAddProduct}> + </button>
        </div>
    )
}