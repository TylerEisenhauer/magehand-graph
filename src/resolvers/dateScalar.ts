import { GraphQLScalarType, ValueNode } from 'graphql'
import { Kind } from 'graphql/language'

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date Scalar Type',
    parseValue(value: string): Date {
      return new Date(value); // value from the client
    },
    serialize(value: string): string {
      const date = new Date(value);
      return date.toISOString(); // value sent to the client
    },
  })

export default dateScalar