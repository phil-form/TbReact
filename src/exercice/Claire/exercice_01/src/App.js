import './App.css';
// import WelcomeAge from './components/exo_01/WelcomeAge';
// import ProductList from './components/exo_02/ProductList';
// import products from './data/products.json'
import Counter from './components/exo_03/Counter';

function App() {
  return (
    <div className="App container">
      {/* EXO_01*/}
      {/* <WelcomeAge name="Riri"/> */}
      {/* <ProductList products={products}/> */}
      <Counter toIncrement={2}/>
    </div>
  );
}

export default App;
