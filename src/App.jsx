import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

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


// function Navbar() {
//     return (
//         <div className="navbar">
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/pagina1">Página 1</Link></li>
//                 <li><Link to="/pagina2">Página 2</Link></li>
//                 <li><Link to="/pagina3">Página 3</Link></li>
//                 <li><Link to="/pagina4">Página 4</Link></li>
//                 <li><Link to="/pagina5">Página 5</Link></li>
//                 <li><Link to="/pagina6">Página 6</Link></li>
//                 <li><Link to="/pagina7">Página 7</Link></li>
//                 <li><Link to="/pagina8">Página 8</Link></li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;
