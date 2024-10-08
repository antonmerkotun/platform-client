export namespace IAccount {
  export interface Model {
    _id: string;
    password: string;
    lastVisit: number | null;
    createdAt: Date;
    updatedAt: Date;
    firstName: string;
    lastName: string;
    email: string;
    isVerifiedEmail: boolean;
    picture: string;
  }
}
