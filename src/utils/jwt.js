import jwt, { JwtPayload } from "jsonwebtoken";

const DEFAULT_SIGN_OPTION = {
  expiresIn: '24h'
}

export function signJwtAccessToken(payload, options=DEFAULT_SIGN_OPTION ) {
  const secret = process.env.SECRET_KEY
  const token = jwt.sign(payload, secret, options)

  return token
}

export function verifyJwt(token) {
  try {
    const secret = process.env.SECRET_KEY
    const decoded = jwt.verify(token, secret);

    return decoded
  } catch (error) {
    const secret = process.env.SECRET_KEY
    return null
  }
}