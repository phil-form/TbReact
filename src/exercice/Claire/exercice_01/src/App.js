import './App.css';
import WelcomeAge from './components/WelcomeAge';

function App() {
  return (
    <div className="App">
      <WelcomeAge name="Riri"/>
      <WelcomeAge name="Fifi" age="10" />
    </div>
  );
}

export default App;
