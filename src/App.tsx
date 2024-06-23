import { useState } from 'react'
import './App.css'
import { Header } from "./components/Header/Header"
import { ProductContainer } from "./components/ProductContainer/ProductContainer"
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer"

function App() {
  const [productNumber, setProductNumber] = useState<number>(0)
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true)

  const SNEAKER_PRICE :number = 125;

  const substractProductNumber = (): void => {
     if (productNumber > 0) {
        setProductNumber(productNumber - 1)
     } else {
        setProductNumber(0)
     }
  }
 const addProductNumber = () :void => setProductNumber(productNumber + 1)
 const handleAddCart = () :void => {
      productNumber > 0 ? setIsCartEmpty(false) : setIsCartEmpty(true)
 }
 const handleDeleteCart = () :void => {
      setIsCartEmpty(true)
      setProductNumber(0)
 }

  return (
    <>
      <Header 
         sneakerPrice={SNEAKER_PRICE}
         stateCart={isCartEmpty}  
         totalProduct={productNumber}
         onDeleteCart={handleDeleteCart} />
      <main>
         <ProductContainer />
         <ProductDetailContainer 
          sneakerPrice={SNEAKER_PRICE}
          onAddProduct={addProductNumber} 
          onSubProduct={substractProductNumber}
          productNumber={productNumber}
          onHandleAddCart={handleAddCart} />       
      </main>
    </>
  )
}

export default App
