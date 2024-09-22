const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeProduct }) => {
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  
    return (
      <div className="container mt-4">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? <p>Your cart is empty</p> : (
          <div>
            <ul className="list-group mb-3">
              {cart.map((product, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between">
                  <div>
                    <h6>{product.title}</h6>
                    <p>{product.description}</p>
                    <p>Rs.{(product.price * product.quantity).toFixed(2)}</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span className="mx-2">{product.quantity}</span>
                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => increaseQuantity(product.id)}>+</button>
                    <button className="btn btn-sm btn-danger" onClick={() => removeProduct(product.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <h4>Total: Rs.{totalPrice.toFixed(2)}</h4>
          </div>
        )}
      </div>
    );
  };
  
  export default Cart;
