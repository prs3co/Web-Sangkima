import dbConnect from "@/utils/db";
import { verifyJwt } from "@/utils/jwt";
import { NextResponse } from "next/server";
import Blog from "@/models/Blog";

export async function GET(request) {
  try {
    await dbConnect()
    const blog = await Blog.find()

    return new NextResponse(JSON.stringify(blog), { status: 200 })
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

  const newBlog = new Blog(body)
  try {
    await dbConnect()
    await newBlog.save()

    return new NextResponse('Blog has been created', { status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      } })
  } catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}

