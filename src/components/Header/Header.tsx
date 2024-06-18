import './Header.css'
import { Navbar } from "../Navbar/Navbar"

export const Header = ({totalProduct}: {totalProduct :number}) => {
    return (
        <header>
            <Navbar numberProduct={totalProduct} />
        </header>
    )
}