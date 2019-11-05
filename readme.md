# OIDC Example 
Includes: React Frontend, Quarkus Backend using JWT-RBAC, Keycloak

## Build Project

Build and run:

`mvn compile quarkus:dev`

Create the docker image:
```
mvn package
docker build -f Dockerfile.jvm -t quarkus/oidc-example-jvm .
```

Use compose for fully working infrastructure and follow [setup for keycloak](#keycloak-setup).

``docker-compose up -d``

## Keycloak Setup

1. Go to: http://localhost:8000/auth/
2. Navigate to the "Administration Console" and Login as "admin" (PW: "admin")
3. Create Realm "quarkus" and import Settings from keycloak_import/realm-export.json
4. Create a user inside the quarkus realm. After initial creation assign a password by navigating to the newly created user and assigning a password inside the "Credentials"-tab
5. Assign role "ROLE_USER" to the created user  
