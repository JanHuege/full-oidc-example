import React from "react";
import "./App.css";
import { KeycloakProvider } from "react-keycloak";
import { Link, Route, HashRouter } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Secured } from "./Secured";
import Keycloak, { KeycloakInitOptions } from "keycloak-js";

const keycloak = Keycloak();
const keycloakProviderInitConfig: KeycloakInitOptions = {
  onLoad: "check-sso"
};

const App: React.FC = () => {
  const onKeycloakEvent = (event: any, error: any) => {
    console.log("onKeycloakEvent", event, error);
  };

  const onKeycloakTokens = (tokens: any) => {
    console.log("onKeycloakTokens", tokens);
  };

  return (
    <KeycloakProvider
      keycloak={keycloak}
      initConfig={keycloakProviderInitConfig}
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
    >
      <HashRouter>
        <div className="container">
          <ul>
            <li>
              <Link to="/">public component</Link>
            </li>
            <li>
              <Link to="/secured">secured component</Link>
            </li>
          </ul>
          <Route exact path="/" component={Welcome} />
          <Route path="/secured" component={Secured} />
        </div>
      </HashRouter>
    </KeycloakProvider>
  );
};

export default App;
