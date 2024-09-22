import { useState, useEffect } from 'react';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Add new product
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Add product to cart
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => item.id === product.id ? { ...exists, quantity: exists.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increase product quantity in cart
  const increaseQuantity = (productId) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Decrease product quantity in cart
  const decreaseQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product.quantity === 1) {
      removeProduct(productId);
    } else {
      setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item));
    }
  };

  // Remove product from cart
  const removeProduct = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div>
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeProduct={removeProduct} />
    </div>
  );
};

export default App;


