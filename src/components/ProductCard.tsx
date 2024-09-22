import { Product } from "../hooks/useProduct";

interface Props {
  product: Product;
}
const GameCard = ({ product }: Props) => {
  return (
    <div className="max-w-md max-h-96 min-h-96 sm:min-h-[60vh] md:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-around m-2">
      <div className="h-[50%] w-[80%] overflow-hidden self-center mt-4 flex items-center ">
        <img
          className="w-full h-full object-fill overflow-hidden rounded-lg"
          src={product.image}
          alt="product image"
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {product.title}
          </h5>
        </a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Price:$
          {product.price}
        </h5>

        <button
          type="button"
          className="border border-gray-600 p-2 rounded-lg bg-blue-400 text-black dark:bg-white flex"
        >
          <a href="">View Details</a>
        </button>
      </div>
    </div>
  );
};

export default GameCard;
