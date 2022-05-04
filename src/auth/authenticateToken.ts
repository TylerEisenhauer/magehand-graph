import jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server'

const authenticateToken = async (token: string) => {
    if (token == null) {
        throw new AuthenticationError('UNAUTHORIZED')
    }
    const jwtToken = token.split(' ')[1]

    return jwt.verify(jwtToken, process.env.JWT_SECRET, parseAuthResult)
}

const parseAuthResult = (err: Error | null, decoded: object | undefined) => {
    if (err) {
        throw new AuthenticationError('AuthResultError');
    }

    if (!decoded) {
        throw new AuthenticationError('TokenValidationError');
    }

    return decoded
}

export default authenticateToken