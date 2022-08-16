import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      <Welcome name='Amaury' age={18} />
    </div>
  );
}

export default App;
