import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload
      const existing = state.items.find(item => item.id === id)

      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ id, name, price, image, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) item.quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (!item) return
      if (item.quantity === 1) {
        state.items = state.items.filter(i => i.id !== action.payload)
      } else {
        item.quantity -= 1
      }
    },
    clearCart: state => {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions

export const selectCartItems = state => state.cart.items
export const selectItemQuantity = (state, id) =>
  state.cart.items.find(item => item.id === id)?.quantity ?? 0
export const selectTotalQuantity = state =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectTotalPrice = state =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer