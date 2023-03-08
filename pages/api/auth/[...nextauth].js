import React from 'react'
import NextAuth from 'next-auth/next'
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";


export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID,
        clientSecret: process.env.KAKAO_CLIENT_SECRET
      }),
    ],
    callbacks: {
      async session({ session, token, user }) {
        session.user.id = token.sub;
        return session;
      },
    }
  })
