import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'
import { TopPage } from './pages/TopPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  )
}

export default App
