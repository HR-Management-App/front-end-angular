export class SignupRequest {
  username: string;
  email: string;
  password: string;

  constructor(username: string, email: string, password: string) {
    // if (!username || username.trim() === '') {
    //   throw new Error('Username cannot be blank');
    // }

    // if (!email || email.trim() === '') {
    //   throw new Error('Email cannot be blank');
    // }

    // if (!password || password.trim() === '') {
    //   throw new Error('Password cannot be blank');
    // }

    this.username = username;
    this.email = email;
    this.password = password;
  }
}
