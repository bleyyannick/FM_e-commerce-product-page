import { useState } from 'react'
import './App.css'
import { Header } from "./components/Header/Header"
import { ProductContainer } from "./components/ProductContainer/ProductContainer"
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer"

function App() {
  const [productNumber, setProductNumber] = useState<number>(0)
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true)
 

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



  return (
    <>
      <Header stateCart={isCartEmpty}  totalProduct={productNumber} />
      <main>
         <ProductContainer />
         <ProductDetailContainer 
          onAddProduct={addProductNumber} 
          onSubProduct={substractProductNumber}
          productNumber={productNumber}
          onHandleAddCart={handleAddCart} />       
      </main>
    </>
  )
}

export default App
