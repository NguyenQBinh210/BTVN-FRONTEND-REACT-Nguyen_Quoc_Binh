import { useEffect, useState } from "react";
import { ProductElement } from "../types/product";
import { Link } from "react-router";
import CartSidebar from "./Cart";
import { useAppSelector, useAppDispatch } from "../redux";
import { addToCart, removeFromCart } from "../redux/reducer/CartSlide";

const Product = () => {
  const [products, setProduct] = useState<ProductElement[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Lấy cart từ Redux store
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddToCart = (product: ProductElement) => {
    dispatch(addToCart(product));
    alert(`${product.title} has been added to cart!`);
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="relative w-[1200px]">
        <button
          onClick={toggleCart}
          className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex flex-col"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          ({cart.reduce((total, item) => total + item.quantity, 0)})
        </button>

        {/* Danh sách sản phẩm */}
        <div className="list grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-4">
          {products?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="text-green-500 font-bold">${product.price}</p>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Sử dụng CartSidebar component */}
        <CartSidebar
          cart={cart}
          isCartOpen={isCartOpen}
          toggleCart={toggleCart}
          handleRemoveFromCart={handleRemoveFromCart}
          calculateTotal={calculateTotal}
        />
      </div>
    </>
  );
};

export default Product;
