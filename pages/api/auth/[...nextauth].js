import React from "react";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "956270552699-2h0j7rct6r38a4dihmve4nbnrodahan6.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    KakaoProvider({
      clientId: "d68ec7723f2872468a17b4be83e2d2ee",
      clientSecret: "fYrVqHxe29ED6oPJeArB38gvcn4MD4iB",
    }),
  ],
  // callbacks: {
  //   async session({ session, token, user }) {
  //     session.user.id = token.sub;
  //     return session;
  //   },
  // }
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
