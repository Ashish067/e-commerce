import GridLayout from "./components/GridLayout";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
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
      <div className="">
        <ProductGrid />
      </div>
      <div className="">Footer</div>
    </GridLayout>
  );
};

export default App;
