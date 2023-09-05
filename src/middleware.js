import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export default async function middleware(req) {
  const logged = req.cookies.get(process.env.SESSION_COOKIES_VAR)
  const path = req.nextUrl.pathname

  const response = NextResponse.next()

  if (req.nextUrl.pathname.startsWith("/api")) {
    response.headers.append("Access-Control-Allow-Origin", "*")
  }

  if (logged && path.startsWith('/login')) {
    return NextResponse.redirect(`${process.env.URL_LOCAL}/dashboard`)
  }

  if (!logged && path.startsWith('/dashboard')) {
    return NextResponse.redirect(`${process.env.URL_LOCAL}/login`)
  }

}
