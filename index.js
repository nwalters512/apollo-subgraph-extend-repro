const {
  buildSubgraphSchema,
  printSubgraphSchema,
} = require("@apollo/subgraph");
const { addResolversToSchema } = require("@graphql-tools/schema");
const gql = require("graphql-tag");

const schema = gql`
  extend type Foo {
    bar: String
  }
`;

const subgraphSchema = buildSubgraphSchema({ typeDefs: [schema] });

console.log("printSubgraphSchema (before)");
console.log("==========================");
console.log(printSubgraphSchema(subgraphSchema));
console.log("==========================");

console.log("");

const schemaWithResolvers = addResolversToSchema({
  schema: subgraphSchema,
  resolvers: {},
});

console.log("printSubgraphSchema (after)");
console.log("==========================");
console.log(printSubgraphSchema(schemaWithResolvers));
console.log("==========================");
