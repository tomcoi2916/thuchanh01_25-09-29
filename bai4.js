import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Sản phẩm A', price: 100 },
  { id: 2, name: 'Sản phẩm B', price: 200 },
  { id: 3, name: 'Sản phẩm C', price: 300 },
];

function ProductItem({ product, onAdd }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '8px', padding: '8px' }}>
      <h4>{product.name}</h4>
      <p>Giá: {product.price}đ</p>
      <button onClick={() => onAdd(product)}>Thêm vào giỏ</button>
    </div>
  );
}

function Bai4() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Bài 4: Giỏ hàng</h3>
      <p>🛒 Số sản phẩm: {totalItems} | Tổng tiền: {totalPrice}đ</p>

      <div>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAdd={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Bai4;
