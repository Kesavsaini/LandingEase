import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import User from '@/lib/db/schema/user'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({  user,profile }) {
      const finduser=await User.findOne({ email: profile.email});
      if(!finduser){
        const newUser=new User({
          email: user.email,
          name: user.name,
          role: "user"
        })
        
        await newUser.save();
        profile.userId=newUser.id;
      }else profile.userId=finduser.id;
      return true
    },
    async jwt({ token, profile }) {
      if (profile) {
        token.userId = profile.userId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.userId = token.userId;
      return session;
    },
  },
  secret:process.env.NEXT_SECRET
}

const handler= NextAuth(authOptions)


export { handler as GET, handler as POST }