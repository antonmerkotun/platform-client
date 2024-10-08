export namespace IGoogleOauthGateway {
  export namespace SignIn {
    export type Params = { clientRedirectUrl: string };

    export type Response = Promise<{ redirectUrl: string }>;
  }

  export namespace SignOut {
    export type Response = Promise<{ success: boolean }>;
  }
}
