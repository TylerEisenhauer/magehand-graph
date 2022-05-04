import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { config } from 'dotenv'

import { authenticateToken } from './auth'
import connect from './connect'
import { getCurrentQuery } from './helpers'
import resolvers from './resolvers'
import { typeDefs } from './types'
import { startWorker } from './worker'

const unauthenticatedQueries: string[] = [
    'login'
]

config()
connect(process.env.MONGO_CONNECTION)
startWorker()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    context: async ({ req }) => {
        const operationName = req.body.operationName
        if (operationName === 'IntrospectionQuery') return

        if (unauthenticatedQueries.includes(getCurrentQuery(req.body.query))) return

        const authHeader = req.headers.authorization
        const authToken = await authenticateToken(authHeader)

        return {
            authToken
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})