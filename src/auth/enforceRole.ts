import { AuthToken } from '../types'
import { ForbiddenError } from 'apollo-server'

const enforceRole = (token: AuthToken, role: string) => {
    if (!token.roles.includes(role)) throw new ForbiddenError('FORBIDDEN')
}


export default enforceRole