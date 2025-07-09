import { Environment } from "./environment.interface";

export const environment : Environment= {
    production: false,
    keycloak: {
        enable: true,
        authority: 'http://localhost:8080',
        redirectUri: "",
        postLogoutRedirectUri: "",
        realm: "myrealm",
        clientId: "myclient"
    }
};
