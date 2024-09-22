const ProductList = ({ products, addToCart }) => {
    return (
      <div className="container mt-4">
        <h2>Products</h2>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Rs.{product.price.toFixed(2)}</p>
                  <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;
