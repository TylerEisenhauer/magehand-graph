import { enforceRole } from '../../auth'
import session, { ISession } from '../../types/mongoose/session'

const removeParticipantResolver = async (_, { messageId, participantId  }, { authToken }): Promise<ISession> => {
    enforceRole(authToken, 'admin')
    
    return await session.findOneAndUpdate({ messageId }, { $pull: { participants: participantId } }, { new: true })
}

export default removeParticipantResolver
