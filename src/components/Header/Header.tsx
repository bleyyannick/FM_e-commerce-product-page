import './Header.css'
import { Navbar } from "../Navbar/Navbar"

export const Header = ({totalProduct, stateCart}: {totalProduct :number, stateCart: boolean}) => {
    return (
        <header>
            <Navbar cartEmpty={stateCart} numberProduct={totalProduct} />
        </header>
    )
}