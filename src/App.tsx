import GridLayout from "./components/GridLayout";
import Navbar from "./components/Navbar";
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
      <div className="">Main</div>
      <div className="">Footer</div>
    </GridLayout>
  );
};

export default App;
