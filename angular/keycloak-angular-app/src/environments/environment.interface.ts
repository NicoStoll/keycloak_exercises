export interface Environment {
    production: boolean,
    keycloak: {
        enable: boolean,
        authority: string,
        redirectUri: string,
        postLogoutRedirectUri: string,
        realm: string,
        clientId: string
    }
}