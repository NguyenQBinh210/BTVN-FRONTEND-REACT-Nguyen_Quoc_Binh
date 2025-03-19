import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
}
interface ProductsResponse {
  products: Product[];
}

const App = () => {
  const URL_API = "https://dummyjson.com/products";
  const [products, setProducts] = useState<Product[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(URL_API);
      const result: ProductsResponse = await response.json();
      setProducts(result.products);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    console.log("Component mounted");
    fetchData();
    return () => {
      console.log("Component unmounted");
    };
  }, []);
  const handleReset=()=>{
     fetchData();
     setProducts([]);
  };

  return (
    <div className="container">
      <h1>Danh sach san pham</h1>
      <button onClick={handleReset} className="reset">Refresh</button>
      <div className="product-container">
        <div className="list">
          {products.map((product) => (
            <div key={product.id} className="list-item">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
