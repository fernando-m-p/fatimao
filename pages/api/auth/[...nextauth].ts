import NextAuth, {AuthOptions} from "next-auth";

import GoogleProvider from "next-auth/providers/google";
export const authOptions:AuthOptions = {


  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      idToken:true,
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },

    }),
  ],
  callbacks: {
    async signIn({ account, profile, user, credentials, email }):Promise<boolean>{
      user.access_token = account?.access_token;
      user.id_token = account?.id_token;
      if (account?.provider === "google") {
        const a = user.email == "fermope.m@gmail.com"
        if(typeof a == "undefined" || a == false) return false
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.access_token = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.acess_token = token.access_token
      return session
    }
  }
}
export default NextAuth(authOptions)