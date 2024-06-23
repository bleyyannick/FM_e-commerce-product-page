import './Header.css'
import { Navbar } from "../Navbar/Navbar"

export const Header = ({totalProduct, stateCart, sneakerPrice, onDeleteCart}: 
     {totalProduct :number, 
      stateCart: boolean, 
      sneakerPrice: number,
      onDeleteCart: ()=> void}) => {
    return (
        <header>
            <Navbar sneakerPrice={sneakerPrice} cartEmpty={stateCart} numberProduct={totalProduct} onDelete={onDeleteCart} />
        </header>
    )
}