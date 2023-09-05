import dbConnect from "@/utils/db";
import { verifyJwt } from "@/utils/jwt";
import { NextResponse } from "next/server";
import Blog from "@/models/Blog";

export async function GET(request) {
  try {
    await dbConnect()
    const blog = await Blog.find().sort({ createdAt: -1 }).limit(4)

    return new NextResponse(JSON.stringify(blog), { status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    })
  } catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}