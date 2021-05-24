import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Works from './components/Works';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;