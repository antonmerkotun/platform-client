import { type IGoogleOauthGateway } from '@/api/auth/types';
import { axios } from '@/api/axios';
import type { IAccount } from '@/types/models/account';

export class AuthGateway {
  static async getMe() {
    return (await axios.get<IAccount.Model>('auth/me')).data;
  }
  static async signIn(body: IGoogleOauthGateway.SignIn.Params) {
    const { data: result } =
      await axios.post<IGoogleOauthGateway.SignIn.Response>(
        'auth/sign-in',
        body,
      );

    return result;
  }

  static async signOut() {
    await axios.post<IGoogleOauthGateway.SignOut.Response>('auth/sign-out');
  }
}
