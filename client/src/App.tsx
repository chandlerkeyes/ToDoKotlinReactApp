import './App.css';
import ToDoList from './components/to-do-list';
import Home from './components/home';
import NavBar from './components/nav-bar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Api from './api';

function App() {
  const api = new Api()
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => <Home />}
          />
          <Route
            path="/to-do-list"
            exact={true}
            render={() => <ToDoList api={api} />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App;