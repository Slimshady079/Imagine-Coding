const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
}

type Auth {
    token: ID!
    User: User
}

type Query {
    Users: [User]!
    user(userId: ID!): User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!) Auth
}
`