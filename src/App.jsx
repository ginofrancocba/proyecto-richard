import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.jsx';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    {/* Definir rutas y componentes para cada página */}
                    {/* Por ejemplo: */}
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
            </div>
        </Router>
    );
}

export default App;


