export interface ILoginUserResponse {
  accessToken: string;
    user: {
      name: {
        firstName: string;
        lastName: string;
      };
      phone_number: string;
      email: string;
      role: string;
      password: string;
    };
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface ISignupUser {
  name: UserName;
  phone_number: string;
  email: string;
  password: string;
}

export interface IRefreshTokenResponse {
  accessToken: string;
}

interface UserName {
  firstName: string;
  lastName: string;
}

export interface IUser extends Document {
  name: UserName;
  phone_number: string;
  email: string;
  role: string;
  password: string;
}
