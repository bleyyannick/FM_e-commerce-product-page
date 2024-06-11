import { ImageProduct } from "../ImageProduct/ImageProduct"
import { ThumbListImageProduct } from "../ThumbListImageProduct/ThumbListImageProduct"

export const ProductContainer = () => {
    return(
        <section>
            <ImageProduct />
            <ThumbListImageProduct />
        </section>
    )
}