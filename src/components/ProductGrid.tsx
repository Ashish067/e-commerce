import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Product {
  id: number;
  title: string;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Product[]>("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductGrid;
