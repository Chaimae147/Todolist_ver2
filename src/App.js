import logo from './logo.svg';
import './App.css';
import Context from './Composent/Context'
import Task from './Composent/FormTak';
function App() {
  return (
    <div className="App">
    <Task>
     <Context/>
    </Task>
    </div>
  );
}

export default App;
