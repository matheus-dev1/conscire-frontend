import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Index from './pages/Index';
import Audit from './pages/Audit';
import Cadastro from './pages/Cadastro';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Moodle from './pages/Moodle';
import Quiz from './pages/Quiz';
import resultadoAudit from './pages/ResultadoAudit';

 const isAuthenticated = () =>  {
    if (localStorage.getItem('token')) {
        return true
    } else {
        return false
    }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route 
    {...rest} 
    render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location} } } />
        )
    } 
    />
)

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                {/* Ok */}
                <Route exact path="/" component={Index}/>
                {/* Ok */}
                <PrivateRoute exact path='/audit' component={Audit}/>
                {/* Ok */}
                <Route exact path="/cadastro" component={Cadastro} />
                {/* Ok */}
                <Route exact path="/contato" component={Contato} />
                {/* Ok */}
                <Route exact path="/login" component={Login} />
                {/* Ok */}
                <PrivateRoute exact path="/moodle" component={Moodle} />
                <PrivateRoute exact path="/resultadoAudit" component={resultadoAudit} />
                <PrivateRoute exact path="/quiz" component={Quiz} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes
