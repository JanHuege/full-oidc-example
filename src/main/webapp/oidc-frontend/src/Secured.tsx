import React, { useState, useEffect } from "react";
import { useKeycloak } from "react-keycloak";
import axios, { AxiosRequestConfig } from "axios";
import ReactJson from "react-json-view";

export const Secured = () => {
  const [keycloak, initialized] = useKeycloak();
  const [result, setResult] = useState({});

  useEffect(() => getApi(), [keycloak.authenticated]);

  const getApi = () => {
    if (keycloak.authenticated) {
      const config: AxiosRequestConfig = {
        headers: {
          Authorization: "Bearer " + keycloak.token
        }
      };
      axios
        .get("http://localhost/api/user", config)
        .then(res => setResult(res.data));
    }
  };

  return (
    <div>
      <div>{`User is ${
        !keycloak.authenticated ? "NOT " : ""
      }authenticated`}</div>

      {!!keycloak.authenticated && (
        <div>
          <div>
            <ReactJson src={result} />
          </div>
          <button type="button" onClick={() => keycloak.logout()}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
