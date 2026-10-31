import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectItemQuantity } from './cartSlice.jsx'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const quantity = useSelector(state => selectItemQuantity(state, product.id))

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>
        {quantity > 0 ? `Add (${quantity} in cart)` : 'Add to Cart'}
      </button>
    </div>
  )
}

export default ProductCard