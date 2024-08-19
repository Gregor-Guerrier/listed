import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'; // Example provider

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Add other providers here
  ],
  // Add other NextAuth configurations here
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
