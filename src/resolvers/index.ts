import dateScalar from './dateScalar'
import { createSessionResolver, updateSessionResolver, deleteSessionResolver, addParticipantResolver, removeParticipantResolver, createUserResolver, deleteUserResolver } from './mutation'
import { loginResolver, getSessionByIdResolver } from './query'

const resolvers = {
    Query: {
        getSessionById: getSessionByIdResolver,
        login: loginResolver
    },
    Mutation: {
        createSession: createSessionResolver,
        deleteSession: deleteSessionResolver,
        updateSession: updateSessionResolver,
        addParticipant: addParticipantResolver,
        removeParticipant: removeParticipantResolver,
        createUser: createUserResolver,
        deleteUser: deleteUserResolver
    },
    Date: dateScalar
}

export default resolvers
