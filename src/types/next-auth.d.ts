import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    firstname: string;
    lastname: string;
    age: number;
  }
  interface Session {
    user: User & {
      firstname: string;
      lastname: string;
      age: number;
    };
    token: {
      firstname: string;
      lastname: string;
      age: number;
    };
  }
}
