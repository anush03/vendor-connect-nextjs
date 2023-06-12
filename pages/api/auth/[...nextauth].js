import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Initialize NextAuth

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "671629928216-t66pt4frn1nvv9ibof02brvkh5ip3g70.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "Anush@123",
});
