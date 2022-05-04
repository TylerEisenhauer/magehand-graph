import { enforceRole } from '../../auth'
import session from '../../types/mongoose/session'

const deleteSessionResolver = async (_, { id }, { authToken }): Promise<{ deletedCount: number }> => {
    enforceRole(authToken, 'admin')

    const result = await session.deleteOne({ _id: id })
    
    return {
        deletedCount: result.deletedCount
    }

}

export default deleteSessionResolver
