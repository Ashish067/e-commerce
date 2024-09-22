import useProduct from "../hooks/useProduct";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const { products, error } = useProduct();
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-rows-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-2 sm:mx-2 md:gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
