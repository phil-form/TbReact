import './App.css';
// import WelcomeAge from './components/exo_01/WelcomeAge';
import ProductList from './components/exo_02/ProductList';
import products from './data/products.json'

function App() {
  return (
    <div className="App">
      {/* EXO_01*/}
      {/* <WelcomeAge name="Riri"/> */}
      <ProductList products={products}/>
    </div>
  );
}

export default App;
