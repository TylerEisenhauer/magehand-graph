import { gql } from 'apollo-server'

const typeDefs = gql`
    scalar Date

    type Session {
        _id: ID!
        cancelled: Boolean!
        channel: String!
        date: Date!
        description: String!
        guild: String!
        location: String!
        messageId: String
        name: String!
        participants: [String]!
        reminderSent: Boolean!
    }

    input CreateSessionInput {
        cancelled: Boolean
        channel: String!
        date: Date!
        description: String!
        guild: String!
        location: String!
        messageId: String
        name: String!
        participants: [String]
        reminderSent: Boolean
    }

    input UpdateSessionInput {
        id: ID!
        cancelled: Boolean
        channel: String
        date: Date
        description: String
        location: String
        messageId: String
        name: String
        reminderSent: Boolean
    }

    type User {
        username: String!
        roles: [String]!
    }

    input CreateUserInput {
        username: String!
        password: String!
        roles: [String]
    }

    type Token {
        access_token: String!
    }

    type DeleteResponse {
        deletedCount: Int!
    }

    type Query {
        getSessionById(id: String!): Session
        login(username: String!, password: String!): Token
    }

    type Mutation {
        createSession(input: CreateSessionInput!): Session
        deleteSession(id: ID!): DeleteResponse
        updateSession(input: UpdateSessionInput!): Session
        createUser(input: CreateUserInput!): User
        deleteUser(username: String!): DeleteResponse
        addParticipant(messageId: String!, participantId: String!): Session
        removeParticipant(messageId: String!, participantId: String!): Session
    }
`

export default typeDefs
