import React from "react";
import { withKeycloak } from "react-keycloak";

const WelcomeTemp = ({ keycloak, keycloakInitialized }: any) => {
  return (
    <div className="Welcome">
      <p>This is your public-facing component.</p>
      {!keycloak.authenticated ? (
        <button type="button" onClick={() => keycloak.login()}>
          Login
        </button>
      ) : (
        "You are logged in!"
      )}
    </div>
  );
};

export const Welcome = withKeycloak(WelcomeTemp);
