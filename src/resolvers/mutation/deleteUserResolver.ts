import { enforceRole } from '../../auth'
import user, { IUser } from '../../types/mongoose/user'

const deleteUserResolver = async (_, { username }, { authToken }): Promise<{ deletedCount: number }> => {
    enforceRole(authToken, 'admin')

    const result = await user.deleteOne({ username })

    return {
        deletedCount: result.deletedCount
    }
}

export default deleteUserResolver
