import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx'; 
import Pagina1 from './Pagina1.jsx';
import Pagina2 from './Pagina2.jsx';
import Pagina3 from './Pagina3.jsx';
import Pagina4 from './Pagina4.jsx';
import Pagina5 from './Pagina5.jsx';
import Pagina6 from './Pagina6.jsx';
import Pagina7 from './Pagina7.jsx';
import Pagina8 from './Pagina8.jsx';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} /> 
      <Route path="/pagina1" component={Pagina1} /> 
      <Route path="/pagina2" component={Pagina2} /> 
      <Route path="/pagina3" component={Pagina3} /> 
      <Route path="/pagina4" component={Pagina4} /> 
      <Route path="/pagina5" component={Pagina5} /> 
      <Route path="/pagina6" component={Pagina6} /> 
      <Route path="/pagina7" component={Pagina7} /> 
      <Route path="/pagina8" component={Pagina8} /> 
    </Switch>
  );
}

export default App;

