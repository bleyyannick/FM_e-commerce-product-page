import { useState } from 'react'
import './App.css'
import { Header } from "./components/Header/Header"
import { ProductContainer } from "./components/ProductContainer/ProductContainer"
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer"
import { CartContextProvider } from './store/cart-context'

function App() {
  const [productNumber, setProductNumber] = useState<number>(0)
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true)

  const SNEAKER_PRICE :number = 125;
 const handleAddCart = () :void => {
      productNumber > 0 ? setIsCartEmpty(false) : setIsCartEmpty(true)
 }

  return (
    <>
    <CartContextProvider>
      <Header />
      <main>
         <ProductContainer />
         <ProductDetailContainer 
          sneakerPrice={SNEAKER_PRICE}
          onHandleAddCart={handleAddCart} />       
      </main>
      </CartContextProvider>
    </>
  )
}

export default App
