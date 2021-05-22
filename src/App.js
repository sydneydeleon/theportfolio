import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;