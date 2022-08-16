import './App.css';
import Welcome from "./demo/demo-01/components/welcome";
import HelloPerson from "./exercice/exercice-01/components/hello-person";
import HelloPersonCond from "./demo/demo-02-condition/hello-person-cond";
import students from './data/students.json'
import StudentCollection from "./demo/demo-03-collections/student-collection";
import ProductList from "./exercice/exercice-02/components/product-list";
import products from "./exercice/exercice-02/data.json";
import SimpleEvents from "./demo/demo-04-dom-event/EventExample";
import BtnDemo from "./demo/demo-05-states/components/btn-demo/btn-demo";
import MultiNumberClass from "./demo/demo-05-states/components/multi-number/multi-number-class";
import MultiNumber from "./demo/demo-05-states/components/multi-number/multi-number";

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
        {/*<StudentCollection students={students}/>*/}

        {/* exercice 02 product list */}
        {/*<ProductList products={products}/>*/}

        {/* demo 4 dom event */}
        {/*<SimpleEvents />*/}

        {/* demo 5 states */}
        <BtnDemo />
        <BtnDemo />
        <MultiNumberClass />
        <MultiNumber />
    </div>
  );
}

export default App;
