import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";



export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify(credentials),
            credentials:"include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const user = await response.json();
        if (!user?.data) {
          return null;
        }
        return user?.data;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({user, account, profile, email, credentials})
      if (account?.provider === "google"){
        // redirect('/auth/signin/social')
      }
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async session({ session, token }) {
      return session;
    },
    async jwt({ token, user, }) {
      return {...token, ...user};
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };