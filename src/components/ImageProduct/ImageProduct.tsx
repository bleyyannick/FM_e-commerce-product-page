import imgProduct from '/images/image-product-1.jpg';


export const ImageProduct = () => {
    return (
        <div>
            <img src={imgProduct} alt="product" className="product-img" />
        </div>
    )
}