import useProduct from "../hooks/useProduct";

const ProductGrid = () => {
  const { products, error } = useProduct();
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
