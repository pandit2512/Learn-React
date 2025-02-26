import React from "react";
import { useSearchParams } from "react-router-dom";

function Product() {
  //useSearchParam() used to fetch value from Query parameter
  //it also return Object , but you property and function in array
  const [searchparams, setSearchParams] = useSearchParams();
  const changeParameters = () => {
    setSearchParams({ name: "Ac", productId: 101, description: "Electronics" });
  };
  return (
    <div>
      Product
      <h2>
        {searchparams.get("name")} {searchparams.get("productId")}
      </h2>
      <button onClick={changeParameters}>change search Parameters</button>
    </div>
  );
}

export default Product;
