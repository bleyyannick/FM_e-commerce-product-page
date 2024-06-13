import './ThumbListImageProduct.css'; 
import thumbImage1 from '/images/image-product-1-thumbnail.jpg';
import thumbImage2 from '/images/image-product-2-thumbnail.jpg';
import thumbImage3 from '/images/image-product-3-thumbnail.jpg';
import thumbImage4  from '/images/image-product-4-thumbnail.jpg';


export const ThumbListImageProduct = () => {
    return (
        <ul className="thumb-list">
            <img src={thumbImage1} alt="product" className="thumb" />
            <img src={thumbImage2} alt="product" className="thumb" />
            <img src={thumbImage3} alt="product" className="thumb" />
            <img src={thumbImage4} alt="product" className="thumb" />
        </ul>
    )
}