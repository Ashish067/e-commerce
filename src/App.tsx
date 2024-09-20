import GridLayout from "./components/GridLayout";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <GridLayout>
      <div className="bg-green-300">Nav</div>
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-600">Main</div>
      <div className="bg-black text-white">Footer</div>
    </GridLayout>
  );
};

export default App;
