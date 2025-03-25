import { useEffect, useState } from "react";
import { ProductElement } from "../types/product";
import { Link } from "react-router";
const ProductList = () => {
    const [products,setProduct] = useState<ProductElement[]>([])
  useEffect(()=>{
    fetch("/data.json")
    .then((res)=>res.json())
    .then((data)=>setProduct(data));
  },[]);
  return (
    <>
      <div className="w-[1200px]">
        <div className="list grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4">
          {products?.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-32 h-32 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <p className="text-green-500 font-bold">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
