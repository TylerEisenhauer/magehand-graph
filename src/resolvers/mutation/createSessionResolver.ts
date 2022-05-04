import { enforceRole } from '../../auth'
import session, { ISession } from '../../types/mongoose/session'

const createSessionResolver = async (_, { input }, { authToken }): Promise<ISession> => {
    enforceRole(authToken, 'admin')
    
    const newSession: ISession = {
        cancelled: false,
        participants: [],
        reminderSent: false,
        ...input
    }

    return await session.create(newSession)
}

export default createSessionResolver
