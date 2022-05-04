import { enforceRole } from '../../auth'
import session, { ISession } from '../../types/mongoose/session'

const addParticipantResolver = async (_, { messageId, participantId  }, { authToken }): Promise<ISession> => {
    enforceRole(authToken, 'admin')
    
    return await session.findOneAndUpdate({ messageId }, { $addToSet: { participants: participantId } }, { new: true })
}

export default addParticipantResolver
