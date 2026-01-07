import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import connectDB from '@/db/connectDb';
import User from '@/models/User';

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        try {
          // Connect to database
          await connectDB();
          console.log("✅ Connected to MongoDB");
          
          // Check if user already exists in database
          const currentUser = await User.findOne({ email: user.email });
          console.log("🔍 Checking for existing user:", user.email);
          
          if (!currentUser) {
            // Create new user in the "chai" database
            console.log("🆕 Creating new user in 'chai' database...");
            const newUser = await User.create({
              email: user.email,
              name: user.name || user.email.split("@")[0],
              username: user.email.split("@")[0],
            });
            console.log("✨ New user created successfully!");
            console.log("📊 User data:", {
              email: newUser.email,
              username: newUser.username,
              name: newUser.name,
              id: newUser._id
            });
          } else {
            console.log("👤 User already exists in database");
            console.log("📊 User data:", {
              email: currentUser.email,
              username: currentUser.username,
              name: currentUser.name
            });
          }
          return true;
        } catch (error) {
          console.error("❌ Error in signIn callback:", error);
          console.error("❌ Full error:", error);
          return false;
        }
      }
      return true;
    },

    async session({ session, token }) {
      try {
        // Connect to database
        await connectDB();
        
        // Get user from database
        const dbUser = await User.findOne({ email: session.user.email });
        
        if (dbUser) {
          console.log("✅ Session loaded for user:", dbUser.username);
          session.user.name = dbUser.username;
          session.user.username = dbUser.username;
        }
        
        return session;
      } catch (error) {
        console.error("❌ Error in session callback:", error);
        return session;
      }
    },
  }
})

export { handler as GET, handler as POST }