export class NewTokenRequest {
  email!: string;

  constructor(email: string) {
    this.email = email;
  }
}
