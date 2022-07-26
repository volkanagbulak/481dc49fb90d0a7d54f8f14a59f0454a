import ProductList from "./views/ProductList";
import logo from "./assets/images/logo.svg";
import "./assets/style/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoadingComponent from "./component/templateComponent/LoadingComponent";
import HeaderComponent from "./component/templateComponent/HeaderComponent";
import SidebarComponent from "./component/templateComponent/SidebarComponent";
import ProductDetail from "./views/ProductDetail";

const axios = require("axios");

function App() {
  const currentPath = window.location.pathname;
  const [display, setDisplay] = useState(currentPath !== "/" ? true : false);
  const [loading, setLoading] = useState(true);
  const [products, setResponse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [textSearch, setTextSearch] = useState(null);
  const productsPerPage = 12;
  const [filteredProducts, setFilteredProducts] = useState([]);
  let str = "aHR0cHM6Ly90ZWtuYXN5b24ubmV0bGlmeS5hcHAvLm5ldGxpZnkvZnVuY3Rpb25zL3Byb2R1Y3Rz";
  var decodedStringAtoB = atob(str);

  const fetchData = async () => {
    const {
      data: { products },
    } = await axios.get(decodedStringAtoB, {
      headers: {
        "X-Access-Token": "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",
      },
    });
    setLoading(false);
    let list = products.filter((product) => {
      const q = textSearch ? textSearch.toLowerCase() : null;

      return q ? product.title.toLowerCase().includes(q) : product;
    });
    if (list.length > 12) {
      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const _data = list.slice(indexOfFirstProduct, indexOfLastProduct);
      setFilteredProducts(list);
      setCurrentProducts(_data);
    } else {
      setFilteredProducts(list);
      setCurrentProducts(list);
    }
  };

  useEffect(() => {
    fetchData();
  }, [products, currentPage, textSearch]);

  const paginate = (number) => {
    sessionStorage.setItem("currentPage", JSON.stringify(number));
    setCurrentPage(number);
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="wrapper">
      <HeaderComponent />
      <div className="container">
        <div className="content_background">
          <div className="row">
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProductList
                      products={currentProducts}
                      loading={loading}
                      filteredProducts={filteredProducts}
                      productsPerPage={productsPerPage}
                      currentPage={currentPage}
                      paginate={paginate}
                      setTextSearch={setTextSearch}
                    />
                  }
                />

                <Route exact path="/product-detail/:id" element={<ProductDetail products={currentProducts} loading={loading} />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
