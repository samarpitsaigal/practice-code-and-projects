import './App.css'
import ProductCard from './features/cart/ProductCard.jsx'
import Cart from './features/cart/Cart.jsx'
import { products } from './features/cart/products.jsx'

function App() {
  return (
    <div className="app">
      <h1>Redux Cart</h1>

      <div className="shop">
        <section className="products">
          <h2>Products</h2>
          <div className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <Cart />
      </div>
    </div>
  )
}

export default App