import GridLayout from "./components/GridLayout";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import SimpleSlider from "./components/SimpleSlider";
import ThemeSwitch from "./components/ThemeSwitch";

const App = () => {
  return (
    <GridLayout>
      <div className="flex justify-end">
        <ThemeSwitch />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col  items-center">
        <SimpleSlider />
        <h1 className="text-center my-5 font-mono font-semibold text-2xl">
          Recommended Products
        </h1>
        <ProductGrid />
      </div>
      <div className="">Footer</div>
    </GridLayout>
  );
};

export default App;
