import { Environment } from "./environment.interface";

export const environment : Environment = {
    production: true,
    keycloak: {
        enable: false,
        authority: "",
        redirectUri: "",
        postLogoutRedirectUri: "",
        realm: "",
        clientId: ""
    }
};
