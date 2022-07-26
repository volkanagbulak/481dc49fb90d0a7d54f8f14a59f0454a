import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = ({ products, loading }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(products.find((product) => product.id === Number(id)));
    console.log(product);
  }, [id, products]);

  const goBack = () => {
    navigate("/");
  };

  return (
    product && (
      <div className="col-md-12 single-product">
        <div className="goback" onClick={goBack}>
          X
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="col-md-12 col-sm-10 ql_main_image_column_wrap">
              <img src={product.image.src} style={{ maxWidth: "70%" }} alt={product.title} />
            </div>
          </div>

          <div className="col-md-6">
            <div className="summary ">
              <div className="product-category">{product.vendor}</div>
              <h1 className="product-title">{product.title}</h1>
              <p className="price">
                <span className="amount">{product.variants[0].price}</span>
              </p>
              <div className="product-variant">
                <ul>
                  {product.variants.map((item, index) => (
                    <li key={index} className={`variant--${index === 0 ? "active" : "passive"}`}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-content" dangerouslySetInnerHTML={{ __html: product.body_html }}></div>
            </div>
          </div>
        </div>
        <div className="dasd"></div>
      </div>
    )
  );
};

export default ProductDetail;
