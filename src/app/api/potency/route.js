import dbConnect from "@/utils/db";
import { verifyJwt } from "@/utils/jwt";
import { NextResponse } from "next/server";
import Potency from "@/models/Potency";

export async function GET(request) {
  try {
    await dbConnect()
    const potency = await Potency.find()

    return new NextResponse(JSON.stringify(potency), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }})
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

  const newPotency = new Potency(body)
  try {
    await dbConnect()
    await newPotency.save()

    return new NextResponse('Potency has been created', { status: 201 })
  } catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}

