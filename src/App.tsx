import './App.css'
import { Header } from "./components/Header/Header"
import { ProductContainer } from "./components/ProductContainer/ProductContainer"
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer"

function App() {

  return (
    <>
      <Header />
      <main>
         <ProductContainer />
         <ProductDetailContainer />       
      </main>
    </>
  )
}

export default App
