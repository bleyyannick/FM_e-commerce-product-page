
import './Cart.css'
import iconCart from '/images/icon-cart.svg';


export const Cart = ({
    cartEmpty, 
    sneakerPrice,
    onDisplayModal, 
    numberProduct
}: {
    cartEmpty: boolean,
    sneakerPrice: number,
    onDisplayModal: () => void,
    numberProduct: number
}) => {
    const calculateTotal = (sneakerPrice: number, numberProduct: number) :number => {
        return +(sneakerPrice * numberProduct).toFixed(2)
    }
    const total = calculateTotal(sneakerPrice, numberProduct)

    console.log(total)
    return (
        <div className="cart" onClick={onDisplayModal}>
            {!cartEmpty && numberProduct > 0 ? <span className="cart-number">{numberProduct}</span> :null}
             <img src={iconCart} alt="cart" className="cart-img" />
        </div>
    )
}