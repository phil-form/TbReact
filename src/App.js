import './App.css';
import Welcome from "./demo/demo-01/components/welcome";
import HelloPerson from "./exercice/exercice-01/components/hello-person";

function App() {
  return (
    <div className="App">
        {/* demo 1*/}
        {/*<Welcome firstname="Zaza" lastname="Duck" />*/}
        {/* exercice 1*/}
        <HelloPerson name='Riri' age={18}/>
    </div>
  );
}

export default App;
