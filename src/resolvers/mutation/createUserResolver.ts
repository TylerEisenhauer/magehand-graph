import { enforceRole } from '../../auth'
import user, { IUser } from '../../types/mongoose/user'

const createUserResolver = async (_, { input }, { authToken }): Promise<IUser> => {
    enforceRole(authToken, 'admin')
    
    const newUser: IUser = {
        roles: [],
        ...input
    }

    return await user.create(newUser)
}

export default createUserResolver
