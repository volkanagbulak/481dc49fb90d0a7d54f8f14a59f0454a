import React from "react";
import ProductListElement from "../component/productlistComponent/ProductListElement";
import PaginationComponenet from "../component/templateComponent/PaginationComponenet";
import SidebarComponent from "../component/templateComponent/SidebarComponent";

const ProductList = ({ products, loading, productsPerPage, paginate, currentPage, filteredProducts, setTextSearch }) => {
  return (
    <>
      <SidebarComponent setTextSearch={setTextSearch} />
      <div className="col-md-9 col-md-push-3">
        {products.length > 0 ? (
          <div className="products columns-4">
            {products.map((item) => (
              <ProductListElement key={item.id} item={item} />
            ))}
          </div>
        ) : (
          !loading && <div className="mt-40 w-full flex items-center justify-center">No results could be found</div>
        )}
        {filteredProducts.length > 10 && (
          <PaginationComponenet
            productPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </>
  );
};

export default ProductList;
