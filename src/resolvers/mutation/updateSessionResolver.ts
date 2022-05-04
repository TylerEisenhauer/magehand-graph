import { enforceRole } from '../../auth'
import session, { ISession } from '../../types/mongoose/session'

const updateSessionResolver = async (_, { input }, { authToken }): Promise<ISession> => {
    enforceRole(authToken, 'admin')

    const { id } = input

    const updatedFields: ISession = {
        ...input
    }

    return await session.findOneAndUpdate({ _id: id }, updatedFields, { new: true })
}

export default updateSessionResolver
