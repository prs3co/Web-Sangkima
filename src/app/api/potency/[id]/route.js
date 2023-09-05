import Potency from "@/models/Potency";
import dbConnect from "@/utils/db";
import { verifyJwt } from "@/utils/jwt";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params
  try {
    await dbConnect()
    const potency = await Potency.findById(id)

    return new NextResponse(JSON.stringify(potency), { status: 200 })
  } catch (error) {
    return new NextResponse(error, { status: 500 })
  }
}

export const DELETE = async (request, { params }) => {
  const accessToken = request.headers.get('Authorization')
  const { id } = params;

  if (!accessToken || !verifyJwt(accessToken)) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    await dbConnect();

    await Potency.findByIdAndDelete(id);

    return new NextResponse("Potency has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  const accessToken = request.headers.get('Authorization')
  const { id } = params;

  if (!accessToken || !verifyJwt(accessToken)) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const body = await request.json()

  const updatePotency = body
  try {
    await dbConnect();

    await Potency.findByIdAndUpdate(id, updatePotency);

    return new NextResponse(JSON.stringify(updatePotency), { status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};