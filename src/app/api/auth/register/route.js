// import User from "@/models/User"
// import { NextResponse } from "next/server"
// import bcrypt from 'bcryptjs'
// import dbConnect from "@/utils/db"

// export const POST = async ( request ) => {
//   const { name, email, password } = await request.json()

//   await dbConnect()

//   const hashedPassword = await bcrypt.hash(password, 5)

//   const newUser = new User({
//     name,
//     email,
//     password: hashedPassword,
//   })

//   try {
//     await newUser.save()
//     return new NextResponse('User has been created', {
//       status: 201,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       }
//     })
//   } catch (error) {
//     return new NextResponse(error.message, {
//       status: 500,
//     })
//   }
// }