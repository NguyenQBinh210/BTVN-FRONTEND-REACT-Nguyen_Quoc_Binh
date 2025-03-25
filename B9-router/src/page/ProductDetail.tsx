import { useEffect, useState } from "react";
import { ProductElement } from "../types/product";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams(); // ✅ Lấy ID từ URL
  const [product, setProduct] = useState<ProductElement>();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find(
          (item: ProductElement) => item.id === Number(id)
        );
        setProduct(foundProduct);
      });
  }, [id]);
  if (!product) return <p>Loading product details...</p>;

  return (
    <div>
      <h1 className="text-5xl">Bài 2: Danh sách sản phẩm</h1>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-64 h-64 object-cover rounded-md"
        />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-600 text-sm">Category: {product.category}</p>
        <p className="text-lg font-semibold text-green-500 mt-2">
          ${product.price}
        </p>
        <p className="text-gray-700 mt-4 text-center">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
