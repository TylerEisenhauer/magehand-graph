import { AuthenticationError } from 'apollo-server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import user from '../../types/mongoose/user'

const loginResolver = async (_, { username, password }, { }): Promise<{ access_token: string }> => {
    const appUser = await user.findOne({ username: username })

    if (appUser && await bcrypt.compare(password, appUser.password)) {
        return {
            'access_token': jwt.sign({
                user: appUser.username,
                roles: appUser.roles
            }, process.env.JWT_SECRET)
        }
    }

    throw new AuthenticationError('Invalid Login')
}

export default loginResolver
