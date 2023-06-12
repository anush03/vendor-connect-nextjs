import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth
console.log(process.env.CLIENT_ID);

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
