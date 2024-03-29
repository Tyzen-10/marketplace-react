import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFetch } from "./actions";
import Products from "./Products";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
// import Search from './Search'
import Header from "./Header";
// import { useEffect } from 'react'
function App() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const [selection, setSelection] = useState("none");
  const products = useSelector((store) => store.myFirstReducer.products);
  //fetch - on Mount
  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch]);

  //change sorted products only if search changes.
  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase())
    );
    setSortedProducts(filteredProducts); //for setting initial value. //runs when product changes.
  }, [search, products]);

  //whenever new selection
  useEffect(() => {
    const sorted = [...sortedProducts];
    if (selection == "none") {
      setFinalProducts(sorted);
    } else {
      sorted.sort((a, b) => a.price - b.price);
      console.log(sorted, "finalProducts");
      setFinalProducts(sorted);
    }
  }, [selection, sortedProducts]);

  //handlers.
  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleSelection = (value) => {
    setSelection(value);
  };

  //Pagination.
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  //Info of current productss.
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = finalProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  //pagination handler.
  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <Header handleSearch={handleSearch} search={search}></Header>
      <Pagination
        totalProducts={finalProducts.length}
        productsPerPage={productsPerPage}
        paginate={paginate}
        handleSelection={handleSelection}
      ></Pagination>
      <Products products={currentProducts}></Products>
      <Pagination
        totalProducts={finalProducts.length}
        productsPerPage={productsPerPage}
        paginate={paginate}
        handleSelection={handleSelection}
      ></Pagination>
    </>
  );
}

export default App;

/*
Note: 
products -> sortedProducts(before sorting.) -> finalProducts (after sorting.)
*/
