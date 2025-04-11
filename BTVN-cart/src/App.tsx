import { BrowserRouter, Route, Routes } from "react-router"
import Product from "./components/Product"
import Layout from "./components/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="/product" element={<Product/>}/>
              <Route/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App