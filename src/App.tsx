
import './App.css'
import { Header } from "./components/Header/Header"
import { ProductContainer } from "./components/ProductContainer/ProductContainer"
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer"


function App() {
 const SNEAKER_PRICE = 125;
  return (
    <>
      <Header />
      <main>
         <ProductContainer />
         <ProductDetailContainer
         sneakerPrice={SNEAKER_PRICE} />       
      </main>
    </>
  )
}

export default App
