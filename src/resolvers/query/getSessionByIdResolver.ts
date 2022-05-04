import mongoose from "mongoose"
import { enforceRole } from "../../auth"
import session, { ISession } from "../../types/mongoose/session"

const getSessionByIdResolver = async (_, { id }, { authToken }): Promise<ISession> => {
    enforceRole(authToken, 'admin')
    
    if (mongoose.Types.ObjectId.isValid(id)) {
        return await session.findById(id)
    }
    return await session.findOne({ messageId: id })
}

export default getSessionByIdResolver
