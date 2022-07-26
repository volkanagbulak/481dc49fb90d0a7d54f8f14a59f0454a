import React from "react";
import { useNavigate } from "react-router-dom";

const ProductListElement = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="product" onClick={() => navigate(`/product-detail/${item.id}`)}>
      <div className="product-wrap">
        <div className="product-content">
          <img src={item.image.src} style={{ maxWidth: "50%" }} alt={item.title} />
        </div>

        <div className="product_text">
          <div className="product-vendor">{item.vendor}</div>
          <h3>
            <a href="#">{item.title}</a>
          </h3>

          <span className="price">
            <span className="mount">{item.variants[0].price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductListElement;
