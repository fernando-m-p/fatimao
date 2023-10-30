import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            acess_token?: string;
            id_token?: string;
            admin?:boolean;
        } & DefaultSession["user"]
    }

    interface User {
        access_token: any
        id_token: any
        admin?:boolean
        & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        /** OpenID ID Token */
        access_token?: string;
        admin?:boolean;
    }
}