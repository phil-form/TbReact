import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';
import List from './components/list/list';


const products = [
  {name: 'camion', price: 45454, discount: true},
  {name: 'voiture', price: 56433, discount: false},
  {name: 'moto', price: 5537, discount: true}
]

function App() {
  return (
    <div className="App">
      <Welcome name='Amaury' age={18} />
      <List products={products} />
    </div>
  );
}

export default App;
