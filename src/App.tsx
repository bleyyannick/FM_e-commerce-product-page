import { Navbar } from "./components/Navbar/Navbar"
import { ProductContainer } from "./components/ProductContainer/ProductContainer"
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer"

function App() {

  return (
    <>
      <Navbar />
      <main>
         <ProductContainer />
         <ProductDetailContainer />       
      </main>
    </>
  )
}

export default App
