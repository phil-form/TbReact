import './App.css';
//import Welcome from "./exercice1/components/welcome";
// import ProductTable from './exercice2/components/products';
// import products from "./exercice2/components/data.json"
import Counter from './exercice3/counter';

function App() {
  return (
    <div className="App">
        <Counter increment={2}/>
    </div>
  );
}

export default App;
