import './App.css';
import Welcome from "./demo/demo-01/components/welcome";
import HelloPerson from "./exercice/exercice-01/components/hello-person";
import HelloPersonCond from "./demo/demo-02-condition/hello-person-cond";
import students from './data/students.json'
import StudentCollection from "./demo/demo-03-collections/student-collection";

function App() {
  return (
    <div className="App">
        {/* demo 1*/}
        {/*<Welcome firstname="Zaza" lastname="Duck" />*/}

        {/* exercice 1*/}
        {/*<HelloPerson name='Riri' age={18}/>*/}

        {/* demo 2 condition */}
        {/*<HelloPersonCond name={'Riri'} age={18} />*/}

        {/* demo 3 collections */}
        <StudentCollection students={students}/>
    </div>
  );
}

export default App;
