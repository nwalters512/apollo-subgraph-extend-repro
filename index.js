const {
  buildSubgraphSchema,
  printSubgraphSchema,
} = require("@apollo/subgraph");
const { printSchemaWithDirectives } = require("@graphql-tools/utils");
const gql = require("graphql-tag");

const schema = gql`
  extend type Foo {
    bar: String
  }
`;

const subgraphSchema = buildSubgraphSchema({ typeDefs: [schema] });

console.log("printSubgraphSchema");
console.log("==========================");
console.log(printSubgraphSchema(subgraphSchema));
console.log("==========================");

console.log("");

console.log("printSchemaWithDirectives");
console.log("==========================");
console.log(printSchemaWithDirectives(subgraphSchema));
console.log("==========================");
