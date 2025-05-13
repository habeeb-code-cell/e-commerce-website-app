import { useNavigate } from 'react-router-dom';

function ProductList({ selectedCategory }) {
  const navigate = useNavigate();
  // ...
  return (
    <div className="product-list">
      {products.map(prod => (
        <div className="product-card" key={prod.id} onClick={() => navigate(`/product/${prod.id}`)}>
          <img src={prod.image} alt={prod.title} />
          <h4>{prod.title}</h4>
          <p>${prod.price}</p>
        </div>
      ))}
    </div>
  );
}
