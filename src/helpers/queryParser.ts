import { parse } from 'graphql'

const firstOperationDefinition = (ast) => ast.definitions[0]
const firstFieldValueNameFromOperation = (operationDefinition) =>  operationDefinition.selectionSet.selections[0].name.value

const getCurrentQuery = (query: string) => firstFieldValueNameFromOperation(firstOperationDefinition(parse(query)))

export default getCurrentQuery
