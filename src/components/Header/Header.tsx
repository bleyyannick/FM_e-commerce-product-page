import './Header.css'
import { Navbar } from "../Navbar/Navbar"

export const Header = ({totalProduct, stateCart, sneakerPrice}: {totalProduct :number, stateCart: boolean, sneakerPrice: number}) => {
    return (
        <header>
            <Navbar sneakerPrice={sneakerPrice} cartEmpty={stateCart} numberProduct={totalProduct} />
        </header>
    )
}