import useCategories from "../hooks/useCategories";
import { TfiMenuAlt } from "react-icons/tfi";
import { capitalizeFirstLetter } from "../utilities/capitalizeFirstLetter";
import { useState } from "react";

const ProductCategories = () => {
  const [isVisible, setVisible] = useState(false);

  const { categories, error } = useCategories();

  const toggleCategories = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={toggleCategories}
      >
        <TfiMenuAlt size={20} />
        <h1 className="text-xl font-semibold font-mono">Filter</h1>
      </div>
      {error && <p>{error}</p>}
      {isVisible && (
        <ul className="flex flex-col items-start">
          {categories.map((category) => (
            <button
              key={category}
              className="min-w-56 text-start text-lg hover:bg-blue-500 hover:text-white hover:p-1 hover:rounded-md"
            >
              Filter By {capitalizeFirstLetter(category)}
            </button>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductCategories;
