import User from "@/models/User"
import dbConnect from "@/utils/db"
import { signJwtAccessToken } from "@/utils/jwt"
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server"

export const POST = async (request) => {
  const body = await request.json()

  await dbConnect()

  try {
    const user = await User.findOne({
      email: body.email,
    }).lean()

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        body.password,
        user.password
      );

      if (isPasswordCorrect) {
        const { password, ...userWithoutPass } = user
        const accessToken = signJwtAccessToken(userWithoutPass)
        const result = {
          ...userWithoutPass,
          accessToken,
        }
        return new NextResponse(JSON.stringify(result), {
          status: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        })
      } else {
        return new NextResponse('Wrong credentials', {
          status: 500
        })
      }
    } else {
      return new NextResponse('Wrong credentials', {
        status: 500
      })
    }
  } catch (error) {
    throw new Error(error)
  }
}