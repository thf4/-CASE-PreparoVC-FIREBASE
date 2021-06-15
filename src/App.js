import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Page-login/login";
import Cadastro from "./pages/Page-Cadastro/cadastro";
import { AuthProvider } from "./Auth/Auth-Provider";
import PrivateRoute from "./Auth/Private-route";
import Home from "./pages/Home/Home";
import Dados from "./pages/Dados-basicos/Dados";
import Local from "./pages/Local/local";

function App() {
  return (

      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={() => <Redirect to="/login"/> } />
            <PrivateRoute exact path="/home" component={Home} />
            <Route exact path="/cadastrar" component={Cadastro} />
            <PrivateRoute exact path="/dados/:uid" component={Dados} />
            <PrivateRoute exact path="/localização/:uid" component={Local} />
            <Route exact path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </AuthProvider>

  );
}

export default App;
