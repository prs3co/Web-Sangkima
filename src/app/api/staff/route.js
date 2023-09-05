import dbConnect from "@/utils/db";
import { verifyJwt } from "@/utils/jwt";
import { NextResponse } from "next/server";
import Staff from "@/models/Staff";

export async function GET(request) {
  try {
    await dbConnect()
    const staff = await Staff.find()

    return new NextResponse(JSON.stringify(staff), { status: 200 })
  } catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}

export async function POST(request) {
  const accessToken = request.headers.get('Authorization')

  if (!accessToken || !verifyJwt(accessToken)) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const body = await request.json()

  const newStaff = new Staff(body)
  try {
    await dbConnect()
    await newStaff.save()

    return new NextResponse('Staff has been created', { status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }})
  } catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}

