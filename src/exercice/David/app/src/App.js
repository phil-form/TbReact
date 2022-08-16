import './App.css';
//import Welcome from "./exercice1/components/welcome";
import ProductTable from './exercice2/components/products';
import products from "./exercice2/components/data.json"

function App() {
  return (
    <div className="App">
        <ProductTable products={products}/>
    </div>
  );
}

export default App;
