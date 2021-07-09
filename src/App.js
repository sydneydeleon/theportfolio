import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ProjGravityMenu from './projects/Mockups/GravityMenu';
import ProjDetroitBecomeHuman from './projects/Detroit/DetroitBecomeHuman';
import ProjBlackFlag from './projects/BlackFlag/BlackFlag';
import ProjFollettFamily from './projects/Follett/FollettFamily';
import ProjCatharsis from './projects/Catharsis/Catharsis';
import ProjGestalt from './projects/Gestalt/Gestalt';
import ProjSalonOne from './projects/Mockups/Salonv1';
import ProjSalonTwo from './projects/Mockups/Salonv2';
import ProjJewelsOne from './projects/Mockups/Jewelsv1';
import ProjJewelsTwo from './projects/Mockups/Jewelsv2';
import ProjJewelsThree from './projects/Mockups/Jewelsv3';
import ProjChicago from './projects/Mockups/Chicago';

import ProjHorizonsHome from './projects/NewHorizons/NewHorizons';
import ProjHorizonsPers from './projects/NewHorizons/NewHorizonsPersonalities';
import HorizonsControls from './projects/NewHorizons/HorizonsControls';
import HorizonsObjectives from './projects/NewHorizons/HorizonsObjectives';
import HorizonsChars from './projects/NewHorizons/HorizonsChars';
import HorizonsAbout from './projects/NewHorizons/HorizonsAbout';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />

        <Route exact path="/sites/newhorizons" component={ProjHorizonsHome} />
        <Route exact path="/sites/newhorizons/about" component={HorizonsAbout} />
        <Route exact path="/sites/newhorizons/personalities" component={ProjHorizonsPers} />
        <Route exact path="/sites/newhorizons/controls" component={HorizonsControls} />
        <Route exact path="/sites/newhorizons/objectives" component={HorizonsObjectives} />
        <Route exact path="/sites/newhorizons/characters" component={HorizonsChars} />

        <Route path="/sites/detroitbecomehuman" component={ProjDetroitBecomeHuman} />
        <Route path="/sites/blackflag" component={ProjBlackFlag} />
        <Route path="/sites/follettfamily" component={ProjFollettFamily} />

        <Route path="/graphics/catharsis" component={ProjCatharsis} />
        <Route path="/graphics/gestalt" component={ProjGestalt} />
        <Route path="/graphics/gravitymenu" component={ProjGravityMenu} />

        <Route path="/mockups/salonv1" component={ProjSalonOne} />
        <Route path="/mockups/salonv2" component={ProjSalonTwo} />
        <Route path="/mockups/chicago" component={ProjChicago} />
        <Route path="/mockups/bodinov1" component={ProjJewelsOne} />
        <Route path="/mockups/bodinov2" component={ProjJewelsTwo} />
        <Route path="/mockups/bodinov3" component={ProjJewelsThree} />
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;