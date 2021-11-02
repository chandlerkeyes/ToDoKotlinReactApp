import './App.css';
import ToDoList from './components/to-do-list';

function App() {
  const CLASS_NAME = "App"
  return <div className={CLASS_NAME}>
    <ToDoList />
  </div>;
}


export default App;
