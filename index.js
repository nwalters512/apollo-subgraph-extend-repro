const {
  buildSubgraphSchema,
  printSubgraphSchema,
} = require("@apollo/subgraph");
// const { printSchemaWithDirectives } = require("@graphql-tools/utils");
const gql = require("graphql-tag");
const { addResolversToSchema } = require("@graphql-tools/schema");

const schema = gql`
  type Foo {
    bar: String
  }
  extend type Foo {
    baz: String
  }
`;

const subgraphSchema = buildSubgraphSchema({ typeDefs: [schema] });

// console.log("printSchemaWithDirectives");
// console.log("==========================");
// console.log(printSchemaWithDirectives(subgraphSchema));
// console.log("==========================");

// console.log("");

console.log("printSubgraphSchema");
console.log("==========================");
console.log(printSubgraphSchema(subgraphSchema));
console.log("==========================");

console.log("");

const subgraphSchemaWithResolvers = addResolversToSchema({
  schema: subgraphSchema,
  resolvers: {},
});

// console.log("printSchemaWithDirectives after addResolversToSchema");
// console.log("==========================");
// console.log(printSchemaWithDirectives(subgraphSchemaWithResolvers));
// console.log("==========================");

// console.log("")

console.log("printSubgraphSchema");
console.log("==========================");
console.log(printSubgraphSchema(subgraphSchemaWithResolvers));
console.log("==========================");
